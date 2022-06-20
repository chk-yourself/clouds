<template>
  <div class="wrapper">
    <h1 class="wheel-delta">{{ cameraPositionZ }}</h1>
    <div class="clouds-wrapper" ref="cloudsWrapper"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { GUI } from "dat.gui";
import * as THREE from "three";
import { Sky } from "../assets/sky.js";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import cloud from "../assets/cloud.png";
import sign from "../assets/sign.png";

// clouds credit: https://github.com/hezhongfeng/music163-demo

// TODO: window resize
// number of clouds
const CLOUD_COUNT = 10;
// length of z-axis occupied by each Cloud
const PER_CLOUD_Z = 10;
// total z-axis length of all clouds
const MAX_Z = CLOUD_COUNT * PER_CLOUD_Z;
// random parameters for x-axies and y-axis translation
const RANDOM_POSITION_X = 80;
const RANDOM_POSITION_Y = 120;
// background color - sky blue
const BG_COLOR = "#1e4877";

const pageWidth = document.getElementById("app").clientWidth;
const pageHeight = document.getElementById("app").clientHeight;

// State
const cloudsWrapper = ref(null);
const deltaY = ref(0);
let cameraPositionZ = ref(MAX_Z);

let camera, scene, renderer;
let sky, sun, clouds;

function init() {
  // Camera
  camera = new THREE.PerspectiveCamera(70, pageWidth / pageHeight, 1, 1000);
  // the position of the camera, pan down left and right balance
  camera.position.x = Math.floor(RANDOM_POSITION_X / 2);
  // initially at the furthest
  camera.position.z = MAX_Z;
  // rotate upward 45 degrees
  camera.rotation.x = -45 * THREE.Math.DEG2RAD;
  // linear fog - the atomization effect increases linearly with distance
  const fog = new THREE.Fog(BG_COLOR, 1, 1000);

  scene = new THREE.Scene();

  // Clouds
  const cloudTexture = new THREE.TextureLoader().load(cloud);
  cloudTexture.magFilter = THREE.LinearMipMapLinearFilter;
  cloudTexture.minFilter = THREE.LinearMipMapLinearFilter;
  const cloudGeometry = new THREE.PlaneGeometry(50, 50);
  const cloudGeometries = [];
  const vShader = `
        varying vec2 vUv;
        void main()
        {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `;
  const fShader = `
        uniform sampler2D map;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        varying vec2 vUv;
        void main()
        {
          float depth = gl_FragCoord.z / gl_FragCoord.w;
          float fogFactor = smoothstep( fogNear, fogFar, depth );
          gl_FragColor = texture2D(map, vUv );
          gl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );
          gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );
        }
      `;
  const cloudMaterial = new THREE.ShaderMaterial({
    uniforms: {
      map: {
        type: "t",
        value: cloudTexture,
      },
      fogColor: {
        type: "c",
        value: fog.color,
      },
      fogNear: {
        type: "f",
        value: fog.near,
      },
      fogFar: {
        type: "f",
        value: fog.far,
      },
    },
    vertexShader: vShader,
    fragmentShader: fShader,
    depthWrite: false,
    depthTest: false,
    transparent: true,
  });

  for (let i = 0; i <= CLOUD_COUNT; i++) {
    let cloudRow = [];
    for (let j = 0; j <= 15; j++) {
      let instanceGeometry;
      if (i === CLOUD_COUNT) {
        instanceGeometry = new THREE.PlaneGeometry(32, 32);
        if (j % 2 === 0) {
          instanceGeometry.translate(
            Math.floor(RANDOM_POSITION_X / 2),
            -20,
            -5
          );
        } else {
          instanceGeometry = new THREE.PlaneGeometry(48, 48);
          instanceGeometry.translate(
            Math.random() * RANDOM_POSITION_X,
            (1 + Math.random()) * -16,
            -5
          );
        }
      } else {
        instanceGeometry = cloudGeometry.clone();
        // After the X axis is offset, adjust the camera position to achieve balance
        // The Y axis wants to put the clouds in the lower position of the scene, so they are all negative values
        // Z-axis displacement is: the current number of clouds * the Z-axis length occupied by each cloud
        instanceGeometry.translate(
          Math.random() * RANDOM_POSITION_X,
          -Math.random() * RANDOM_POSITION_Y,
          i * Math.random() * PER_CLOUD_Z
        );
      }
      cloudRow.push(instanceGeometry);
    }
    cloudGeometries.push(...cloudRow);
  }

  const mergedCloudGeometry =
    BufferGeometryUtils.mergeBufferGeometries(cloudGeometries);

  clouds = new THREE.Mesh(mergedCloudGeometry, cloudMaterial);
  clouds.rotation.x = -45 * THREE.Math.DEG2RAD;
  scene.add(clouds);

  // Sign
  const signTexture = new THREE.TextureLoader().load(sign);
  const sign3d = new THREE.Mesh(
    new THREE.BoxGeometry(25, 25 * 1.250014),
    new THREE.MeshBasicMaterial({
      map: signTexture,
      transparent: true,
    })
  );
  sign3d.position.z = -20;
  sign3d.position.x = Math.floor(RANDOM_POSITION_X / 2);
  scene.add(sign3d);

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 1.0);
  light.position.set(Math.floor(RANDOM_POSITION_X / 2), 10, -10);
  light.target.position.set(Math.floor(RANDOM_POSITION_X / 2), 10, 0);
  scene.add(light);
  scene.add(light.target);

  //let lightHelper = new THREE.DirectionalLightHelper(light, 5);
  //light.add(lightHelper);

  // Background

  // Stars
  function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));
    star.position.set(x, y, z);
    scene.add(star);
  }

  //Array(200).fill().forEach(addStar);

  /**
  GUI

  const gui = new GUI();
  const lightFolder = gui.addFolder("Light");
  lightFolder.add(light.position, "x", 0);
  lightFolder.add(light.position, "y", 0);
  lightFolder.add(light.position, "z", 0);
  lightFolder.open();
  **/

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(pageWidth, pageHeight);
  cloudsWrapper.value.appendChild(renderer.domElement);
}

function animate() {
  cameraPositionZ.value = Math.max(MAX_Z - deltaY.value, 10);
  if (cameraPositionZ.value <= 60) {
    const deltaX = Math.min(
      0,
      (-cameraPositionZ.value + 15) * THREE.Math.DEG2RAD
    );
    camera.rotation.x = deltaX;
    clouds.rotation.x = deltaX;
  }
  camera.position.z = cameraPositionZ.value;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function onWheel(e) {
  deltaY.value = Math.max(
    0,
    deltaY.value + (e.wheelDeltaY || e.deltaY) * -0.007
  );
}

//TODO: FIX
function onWindowResize(e) {
  const pageWidth = document.getElementById("app").clientWidth;
  const pageHeight = document.getElementById("app").clientHeight;
  camera.aspect = pageWidth / pageHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(pageWidth, pageHeight);
  renderer.render(scene, camera);
}

// Sky
function initSky() {
  // Add Sky
  sky = new Sky();
  sky.scale.setScalar(450000);
  scene.add(sky);

  sun = new THREE.Vector3();

  /// GUI

  const effectController = {
    turbidity: 10,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.7,
    elevation: 2,
    azimuth: 180,
    exposure: renderer.toneMappingExposure,
  };

  function guiChanged() {
    const uniforms = sky.material.uniforms;
    uniforms["turbidity"].value = effectController.turbidity;
    uniforms["rayleigh"].value = effectController.rayleigh;
    uniforms["mieCoefficient"].value = effectController.mieCoefficient;
    uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;

    const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
    const theta = THREE.MathUtils.degToRad(effectController.azimuth);

    sun.setFromSphericalCoords(1, phi, theta);

    uniforms["sunPosition"].value.copy(sun);

    renderer.toneMappingExposure = effectController.exposure;
    renderer.render(scene, camera);
  }

  /*
  const gui = new GUI();

  gui.add(effectController, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);
  gui.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);
  gui
    .add(effectController, "mieCoefficient", 0.0, 0.1, 0.001)
    .onChange(guiChanged);
  gui
    .add(effectController, "mieDirectionalG", 0.0, 1, 0.001)
    .onChange(guiChanged);
  gui.add(effectController, "elevation", 0, 90, 0.1).onChange(guiChanged);
  gui.add(effectController, "azimuth", -180, 180, 0.1).onChange(guiChanged);
  gui.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);
*/
  guiChanged();
}

onMounted(() => {
  init();
  initSky();
  animate();
  document.body.addEventListener("wheel", onWheel);
  document.body.addEventListener("resize", onWindowResize);
});
onUnmounted(() => {
  document.body.removeEventListener("wheel", onWheel);
  document.body.removeEventListener("resize", onWindowResize);
});
</script>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  perspective: 2px;
  position: relative;
  background: #1e4877;
}
.clouds-wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  flex-shrink: 0;
}

canvas {
  width: 100%;
  height: 100%;
}

.sign {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: none;
}

.wheel-delta {
  position: fixed;
  top: 50px;
  height: 100vh;
  width: 100vw;
}
</style>
