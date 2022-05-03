<template>
  <div class="clouds" ref="clouds"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import cloud from "../assets/cloud.png";
// credit https://github.com/hezhongfeng/music163-demo
export default {
  setup() {
    const clouds = ref(null);
    const START_TIME = Date.now();
    // number of clouds
    const CLOUD_COUNT = 1000;
    // length of z-axis occupied by each Cloud
    const PER_CLOUD_Z = 15;
    // total z-axis length of all clouds
    const CAMERA_POSITION_Z = CLOUD_COUNT * PER_CLOUD_Z;
    // random parameters for x-axies and y-axis translation
    const RANDOM_POSITION_X = 80;
    const RANDOM_POSITION_Y = 120;
    // background color - sky blue
    const BG_COLOR = "#1e4877";

    const pageWidth = document.getElementById("app").clientWidth;
    const pageHeight = document.getElementById("app").clientHeight;
    let camera, scene, renderer, mesh;

    function init() {
      camera = new THREE.PerspectiveCamera(70, pageWidth / pageHeight, 1, 1000);
      // the position of the camera, pan down left and right balance
      camera.position.x = Math.floor(RANDOM_POSITION_X / 2);
      // initially at the furthest
      camera.position.z = CAMERA_POSITION_Z;
      // linear fog - the atomization effect increases linearly with distance
      const fog = new THREE.Fog(BG_COLOR, 1, 1000);

      scene = new THREE.Scene();
      scene.background = new THREE.Color(BG_COLOR);
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
      // add to scene
      scene.add(mesh);
      renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setSize(pageWidth, pageHeight);
      clouds.value.appendChild(renderer.domElement);
    }

    function animate() {
      requestAnimationFrame(animate);
      // Start from the farthest z-axis and move forward little by little to achieve the purpose of crossing the clouds
      camera.position.z =
        CAMERA_POSITION_Z -
        (((Date.now() - START_TIME) * 0.03) % CAMERA_POSITION_Z);
      renderer.render(scene, camera);
    }

    onMounted(() => {
      init();
      animate();
    });
    return { clouds };
  },
};
</script>

<style scoped>
.clouds {
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  background-image: linear-gradient(rgb(200, 240, 255), rgb(219, 255, 241));
}
</style>
