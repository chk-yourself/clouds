<template>
  <div class="wrapper">
    <h1 class="wheel-delta">{{ cameraPositionZ }}</h1>
    <div class="clouds" ref="clouds"></div>
    <div class="sign" :class="{ isActive: revealSign }" ref="sign">
      <img class="sign__img" src="../assets/sign.png" alt="" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import cloud from "../assets/cloud.png";
import sign from "../assets/sign.png";

// credit https://github.com/hezhongfeng/music163-demo

// TODO: window resize

export default {
  setup() {
    const clouds = ref(null);
    // number of clouds
    const CLOUD_COUNT = 30;
    // length of z-axis occupied by each Cloud
    const PER_CLOUD_Z = 15;
    // total z-axis length of all clouds
    const MAX_Z = CLOUD_COUNT * PER_CLOUD_Z;
    // random parameters for x-axies and y-axis translation
    const RANDOM_POSITION_X = 80;
    const RANDOM_POSITION_Y = 120;
    // background color - sky blue
    const BG_COLOR = "#1e4877";

    const pageWidth = document.getElementById("app").clientWidth;
    const pageHeight = document.getElementById("app").clientHeight;
    let cameraPositionZ = ref(MAX_Z);
    let revealSign = ref(false);
    const deltaY = ref(0);

    let camera, scene, renderer, mesh;

    function init() {
      camera = new THREE.PerspectiveCamera(70, pageWidth / pageHeight, 1, 1000);
      // the position of the camera, pan down left and right balance
      camera.position.x = Math.floor(RANDOM_POSITION_X / 2);
      // initially at the furthest
      camera.position.z = MAX_Z;
      // linear fog - the atomization effect increases linearly with distance
      const fog = new THREE.Fog(BG_COLOR, 1, 1000);

      scene = new THREE.Scene();
      //scene.background = new THREE.Color(BG_COLOR);
      const texture = new THREE.TextureLoader().load(cloud);

      // a flat shape
      const geometry = new THREE.PlaneGeometry(64, 64);
      const geometries = [];

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
      // texture material
      const material = new THREE.ShaderMaterial({
        // The value here is passed to the shader
        uniforms: {
          map: {
            type: "t",
            value: texture,
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
        transparent: true,
      });

      for (let i = 0; i < CLOUD_COUNT; i++) {
        const instanceGeometry = geometry.clone();
        // After the X axis is offset, adjust the camera position to achieve balance
        // The Y axis wants to put the clouds in the lower position of the scene, so they are all negative values
        // Z-axis displacement is: the current number of clouds * the Z-axis length occupied by each cloud
        instanceGeometry.translate(
          Math.random() * RANDOM_POSITION_X,
          -Math.random() * RANDOM_POSITION_Y,
          i * PER_CLOUD_Z
        );
        geometries.push(instanceGeometry);
      }

      // merch these shapes
      const mergedGeometry =
        BufferGeometryUtils.mergeBufferGeometries(geometries);

      // merge the above shapes and materials to generate an object
      mesh = new THREE.Mesh(mergedGeometry, material);

      // create image
      /*
      const imgGeometry = new THREE.PlaneBufferGeometry(50, 50 * 1.250014);
      const imgMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(sign),
        transparent: true,
      });
      const img = new THREE.Mesh(imgGeometry, imgMaterial);
      img.position.set(1, 1, MAX_Z - 15);
      */

      // add to scene
      scene.add(mesh);
      //scene.add(img);
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setClearColor(0xffffff, 0);
      renderer.setSize(pageWidth, pageHeight);
      clouds.value.appendChild(renderer.domElement);
    }

    function animate() {
      // Start from the farthest z-axis and move forward little by little to achieve the purpose of crossing the clouds
      cameraPositionZ.value = Math.max(MAX_Z - deltaY.value, 30);
      if (cameraPositionZ.value < 200) {
        revealSign.value = true;
      } else {
        revealSign.value = false;
      }
      /*
      const position = MAX_Z - deltaY.value;
      cameraPositionZ.value =
        position < 0 ? 0 : position > MAX_Z ? MAX_Z : position; */
      camera.position.z = cameraPositionZ.value;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    function onWheel(e) {
      deltaY.value += (e.wheelDeltaY || e.deltaY) * -0.003;
    }

    onMounted(() => {
      init();
      animate();
      document.body.addEventListener("wheel", onWheel);
    });
    onUnmounted(() => {
      document.body.removeEventListener("wheel", onWheel);
    });

    return { clouds, deltaY, cameraPositionZ, revealSign };
  },
};
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
.clouds {
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
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

.sign.isActive {
  display: block;
  animation: reveal 2s;
  animation-fill-mode: forwards;
}

.sign__img {
  position: absolute;
  max-width: 50vh;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: 100%;
  z-index: -1;
}

.wheel-delta {
  position: fixed;
  top: 50px;
  height: 100vh;
  width: 100vw;
}

@keyframes reveal {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(0, -10%) scale(1);
  }
}
</style>
