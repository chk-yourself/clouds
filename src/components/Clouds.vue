<template>
  <h1 class="wheel-delta">{{ cameraPositionZ }}</h1>
  <div class="clouds-wrapper" ref="cloudsWrapper"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import gsap from "gsap";
import Sky from "../assets/sky.js";
import DynamicSky from "../assets/dynamicSky";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import cloud from "../assets/cloud.png";
import sign from "../assets/sign.png";
import CloudShader from "../assets/CloudShader.js";
import noise from "../assets/rgba-noise.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//
/*
clouds credit: https://github.com/hezhongfeng/music163-demo
Shader adapted from the code here https://www.shadertoy.com/view/tdSXzD
*/

// TODO: FIX MOBILE
// TODO: REFACTOR
// TODO: vanilla js??

// number of clouds
const CLOUD_COUNT = 40;
// length of z-axis occupied by each Cloud
const PER_CLOUD_Z = 10;
// total z-axis length of all clouds
const MAX_Z = CLOUD_COUNT * PER_CLOUD_Z;
// background color - sky blue
const BG_COLOR = "#1e4877";

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;

// State
const cloudsWrapper = ref(null);
const deltaY = ref(0);
const touchStartY = ref(0);
let cameraPositionZ = ref(160);
let cameraPositionY = ref(0);
let cameraPositionX = ref(0);

let camera, scene, renderer, controls;
let clouds, skyMaterial;
let action;
const mouse = new THREE.Vector2();
let mouseX = 0; // mouse coords for simulating cloud movement
const raycaster = new THREE.Raycaster();

function init() {
  camera = new THREE.PerspectiveCamera(70, pageWidth / pageHeight, 1, 1000);
  camera.position.x = 0;
  camera.position.y = cameraPositionY.value;
  //camera.rotation.x = -45 * THREE.Math.DEG2RAD;
  scene = new THREE.Scene();

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.autoClear = false;
  renderer.setClearColor(0xffffff, 0);
  renderer.setSize(pageWidth, pageHeight);
  cloudsWrapper.value.appendChild(renderer.domElement);

  //controls = new OrbitControls(camera, renderer.domElement);
}

// Clouds

function initClouds() {
  // linear fog - the atomization effect increases linearly with distance
  const fog = new THREE.Fog(BG_COLOR, 1, 1000);
  const cloudTexture = new THREE.TextureLoader().load(cloud);
  cloudTexture.magFilter = THREE.LinearMipMapLinearFilter;
  cloudTexture.minFilter = THREE.LinearMipMapLinearFilter;
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
    for (let j = 0; j <= 100; j++) {
      const cloudSize = randomIntFromInterval(64, 88);
      const cloudGeometry = new THREE.PlaneGeometry(cloudSize, cloudSize); // generates clouds with varying dimensions
      cloudGeometry.translate(
        Math.random() * 1000 - 500,
        Math.random() * 200 - 15, //i * Math.random() * 200 - 15,
        i * Math.random() * PER_CLOUD_Z
      );

      cloudRow.push(cloudGeometry);
    }
    cloudGeometries.push(...cloudRow);
  }

  const mergedCloudGeometry =
    BufferGeometryUtils.mergeBufferGeometries(cloudGeometries);

  clouds = new THREE.Mesh(mergedCloudGeometry, cloudMaterial);
  //clouds.rotation.x = -45 * THREE.Math.DEG2RAD;
  scene.add(clouds);
}

// Sign

function initSign() {
  const signTexture = new THREE.TextureLoader().load(sign);
  const sign3d = new THREE.Mesh(
    new THREE.BoxGeometry(60, 60 * 1.75945017),
    new THREE.MeshBasicMaterial({
      map: signTexture,
      transparent: true,
    })
  );
  sign3d.position.z = -20;
  sign3d.position.y = 230;
  sign3d.position.x = 0;
  scene.add(sign3d);
}

function animate() {
  cameraPositionZ.value = Math.max(120 - deltaY.value, 80);
  cameraPositionY.value = Math.min(220, deltaY.value);
  // move camera based on mouse position
  /*
  cameraPositionX.value = Math.min(
    5,
    Math.max(-5, camera.position.x + (mouseX - camera.position.x) * 0.001)
  );
  */
  if (camera.position.y > 60) {
    skyMaterial.uniforms.iTime.value += 0.1; //update the time uniform in the shader
  }
  camera.position.y = cameraPositionY.value;
  camera.position.z = cameraPositionZ.value;
  camera.position.x = cameraPositionX.value;
  // move clouds based on mouse position
  clouds.position.x = Math.min(
    30,
    Math.max(-30, clouds.position.x + (mouseX - clouds.position.x) * 0.005)
  );
  renderer.render(scene, camera);
  //controls.update();
  requestAnimationFrame(animate);
}

// Event Listeners

function onWheel(e) {
  deltaY.value = Math.max(
    0,
    deltaY.value + (e.wheelDeltaY || e.deltaY) * -0.007
  );
}

function onTouchStart(e) {
  const touch = e.targetTouches ? e.targetTouches[0] : e;
  touchStartY.value = touch.pageY;
}

function onTouchMove(e) {
  const touch = e.targetTouches ? e.targetTouches[0] : e;
  deltaY.value = touch.pageY + touchStartY.value;
  touchStartY.value = touch.pageY;
}

function onWindowResize(e) {
  let renderWidth = window.innerWidth;
  let renderHeight = window.innerHeight;
  camera.aspect = renderWidth / renderHeight;
  camera.aspect = THREE.MathUtils.clamp(camera.aspect, 9 / 16, 16 / 9);
  camera.updateProjectionMatrix();

  if (renderWidth / renderHeight > 16 / 9) {
    renderHeight = (renderWidth * 9) / 16;
  }
  if (renderWidth / renderHeight < 9 / 16) {
    renderWidth = (renderHeight * 9) / 16;
  }

  renderer.setSize(renderWidth, renderHeight);
  renderer.setPixelRatio(Math.max(1, window.devicePixelRatio));
  skyMaterial.uniforms.iResolution.value.set(2000, 500);
  renderer.render(scene, camera);
}

function onMouseMove(e) {
  mouseX = (e.clientX - window.innerWidth / 2) * 0.25;
  if (cameraPositionZ.value < 60) return;
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  skyMaterial.uniforms.iMouse.value.set(
    e.clientX,
    e.target.clientHeight - e.clientY
  );
}

function onMouseDown(e) {
  if (cameraPositionZ.value > 10) return;
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  for (let i = 0; i < intersects.length; i++) {
    if (!intersects[i].object.material.color) break;
    intersects[i].object.material.color.set(Math.random() * 0x1000000);
    if (!action) {
      //First time through.. make a new action...
      const clip = animations[0];
      action = mixer.clipAction(clip);
      action.loop = THREE.LoopForever;
      action.play();
    } //On subsequent clicks.. just make the current action restart (reset)
    else action.reset();
    break;
  }
}

function initDynamicSky() {
  const textureLoader = new THREE.TextureLoader();

  /*create a shader material with a standard vertexShader. Pass the */
  skyMaterial = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
      iChannel0: {
        type: "sampler2D",
        value: textureLoader.load(
          noise,
          //"https://www.shadertoy.com/media/shaders/XlscD8.jpg",
          (tex) => {
            tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
          }
        ),
      },
      iResolution: {
        type: "v2",
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      iMouse: { type: "vec2", value: new THREE.Vector2() },
    },
    vertexShader: `
    varying vec2 vUv;
        
    void main()
    {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

      vUv = uv;
    }
  `,
    fragmentShader: `
  
    //bring in your uniforms of time and the two textures to use in the shader
    uniform float iTime;
    uniform sampler2D iChannel0;
    uniform vec2 iResolution;
    
    uniform vec2 iMouse;
    
    //get the uv from the vertex shader above
    varying vec2 vUv;
    
#define ORIG_CLOUD 0
#define ENABLE_RAIN 0 //enable rain drops on screen
#define SIMPLE_SUN 0
#define NICE_HACK_SUN 1
#define SOFT_SUN 1
#define cloudy  0.5 //0.0 clear sky
#define haze  0.01 * (cloudy*20.)
#define rainmulti 5.0 // makes clouds thicker
#define rainy (10.0 -rainmulti)
#define t iTime
#define fov tan(radians(60.0))
#define S(x, y, z) smoothstep(x, y, z)
#define cameraheight 5e1 //50.
#define mincloudheight 5e3 //5e3
#define maxcloudheight 8e3 //8e3
#define xaxiscloud t*5e2 //t*5e2 +t left -t right *speed
#define yaxiscloud 0. //0.
#define zaxiscloud t*6e2 //t*6e2 +t away from horizon -t towards horizon *speed
#define cloudnoise 2e-4 //2e-4

//#define cloud2


//Performance
const int steps = 16; //16 is fast, 128 or 256 is extreme high
const int stepss = 16; //16 is fast, 16 or 32 is high 

//Environment
const float R0 = 6360e3; //planet radius //6360e3 actual 6371km
const float Ra = 6380e3; //atmosphere radius //6380e3 troposphere 8 to 14.5km
const float I = 10.; //sun light power, 10.0 is normal
const float SI = 5.; //sun intensity for sun
const float g = 0.45; //light concentration .76 //.45 //.6  .45 is normaL
const float g2 = g * g;

const float ts= (cameraheight / 2.5e5);

const float s = 0.999; //light concentration for sun
#if SOFT_SUN
const float s2 = s;
#else
const float s2 = s * s;
#endif
const float Hr = 8e3; //Rayleigh scattering top //8e3
const float Hm = 1.2e3; //Mie scattering top //1.3e3

vec3 bM = vec3(21e-6); //normal mie // vec3(21e-6)
//vec3 bM = vec3(50e-6); //high mie

//Rayleigh scattering (sky color, atmospheric up to 8km)
vec3 bR = vec3(5.8e-6, 13.5e-6, 33.1e-6); //normal earth
//vec3 bR = vec3(5.8e-6, 33.1e-6, 13.5e-6); //purple
//vec3 bR = vec3( 63.5e-6, 13.1e-6, 50.8e-6 ); //green
//vec3 bR = vec3( 13.5e-6, 23.1e-6, 115.8e-6 ); //yellow
//vec3 bR = vec3( 5.5e-6, 15.1e-6, 355.8e-6 ); //yeellow
//vec3 bR = vec3(3.5e-6, 333.1e-6, 235.8e-6 ); //red-purple

vec3 C = vec3(0., -R0, 0.); //planet center
vec3 Ds = normalize(vec3(0., 0., -1.)); //sun direction?

float cloudyhigh = 0.05; //if cloud2 defined

#if ORIG_CLOUD
float cloudnear = 1.0; //9e3 12e3  //do not render too close clouds on the zenith
float cloudfar = 1e3; //15e3 17e3
#else
float cloudnear = 1.0; //15e3 17e3
float cloudfar = 70e3; //160e3  //do not render too close clouds on the horizon 160km should be max for cumulus
#endif




//AURORA STUFF
mat2 mm2(in float a){
    float c = cos(a);
    float s = sin(a);
    return mat2(c,s,-s,c);
}

mat2 m2 = mat2(0.95534, 0.29552, -0.29552, 0.95534);

float tri(in float x){
    return clamp(abs(fract(x)-.5),0.01,0.49);
}

vec2 tri2(in vec2 p){
    return vec2(tri(p.x)+tri(p.y),tri(p.y+tri(p.x)));
}

float triNoise2d(in vec2 p, float spd)
{
    float z=1.8;
    float z2=2.5;
	float rz = 0.;
    p *= mm2(p.x*0.06);
    vec2 bp = p;
	for (float i=0.; i<5.; i++ )
	{
        vec2 dg = tri2(bp*1.85)*.75;
        dg *= mm2(t*spd);
        p -= dg/z2;

        bp *= 1.3;
        z2 *= 1.45;
        z *= .42;
		p *= 1.21 + (rz-1.0)*.02;
        
        rz += tri(p.x+tri(p.y))*z;
        p*= -m2;
	}
    return clamp(1./pow(rz*29., 1.3),0.,.55);
}


float hash21(in vec2 n){ return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
vec4 aurora(vec3 ro, vec3 rd)
{
    vec4 col = vec4(0);
    vec4 avgCol = vec4(0);
    ro *= 1e-5;
    float mt = 10.;
    for(float i=0.;i<5.;i++)
    {
        float of = 0.006*hash21(gl_FragCoord.xy)*smoothstep(0.,15., i*mt);
        float pt = ((.8+pow((i*mt),1.2)*.001)-rd.y)/(rd.y*2.+0.4);
        pt -= of;
    	vec3 bpos = (ro) + pt*rd;
        vec2 p = bpos.zx;
        //vec2 p = rd.zx;
        float rzt = triNoise2d(p, 0.1);
        vec4 col2 = vec4(0,0,0, rzt);
        col2.rgb = (sin(1.-vec3(2.15,-.5, 1.2)+(i*mt)*0.053)*(0.5*mt))*rzt;
        avgCol =  mix(avgCol, col2, .5);
        col += avgCol*exp2((-i*mt)*0.04 - 2.5)*smoothstep(0.,5., i*mt);

    }

    col *= (clamp(rd.y*15.+.4,0.,1.2));
    return col*2.8;
}

//END AURORA STUFF

float noise(in vec2 v) { 
    return textureLod(iChannel0, (v+.5)/256., 0.).r; 
}

// by iq
float Noise( in vec3 x )
{
    vec3 p = floor(x);
    vec3 f = fract(x);
	f = f*f*(3.0-2.0*f);

	vec2 uv = (p.xy+vec2(37.0,17.0)*p.z) + f.xy;
	vec2 rg = texture( iChannel0, (uv+ 0.5)/256.0, -100.0).yx;
	return mix( rg.x, rg.y, f.z );
}


float fnoise( vec3 p, in float t )
{
	p *= .25;
    float f;

	f = 0.5000 * Noise(p); p = p * 3.02; p.y -= t*.1; //t*.05 speed cloud changes
	f += 0.2500 * Noise(p); p = p * 3.03; p.y += t*.06;
	f += 0.1250 * Noise(p); p = p * 3.01;
	f += 0.0625   * Noise(p); p =  p * 3.03;
	f += 0.03125  * Noise(p); p =  p * 3.02;
	f += 0.015625 * Noise(p);
    return f;
}

float cloud(vec3 p, in float t ) {
	float cld = fnoise(p*cloudnoise,t) + cloudy*0.1 ;
	cld = smoothstep(.4+.04, .6+.04, cld);
	cld *= cld * (5.0*rainmulti);
	return cld+haze;
}

void densities(in vec3 pos, out float rayleigh, out float mie) {
	float h = length(pos - C) - R0;
	rayleigh =  exp(-h/Hr);
	vec3 d = pos;
    d.y = 0.0;
    float dist = length(d);
    
	float cld = 0.;
	if (mincloudheight < h && h < maxcloudheight) {
		//cld = cloud(pos+vec3(t*1e3,0., t*1e3),t)*cloudy;
        cld = cloud(pos+vec3(xaxiscloud,yaxiscloud, zaxiscloud),t)*cloudy; //direction and speed the cloud movers
		cld *= sin(3.1415*(h-mincloudheight)/mincloudheight) * cloudy;
	}
	#ifdef cloud2
        float cld2 = 0.;
        if (12e3 < h && h < 15.5e3) {
            cld2 = fnoise(pos*3e-4,t)*cloud(pos*32.0+vec3(27612.3, 0.,-t*15e3), t);
            cld2 *= sin(3.1413*(h-12e3)/12e3) * cloudyhigh;
            cld2 = clamp(cld2,0.0,1.0);
        }
    
    #endif

    #if ORIG_CLOUD
    if (dist<cloudfar) {
        float factor = clamp(1.0-((cloudfar - dist)/(cloudfar-cloudnear)),0.0,1.0);
        cld *= factor;
    }
    #else

    if (dist>cloudfar) {

        float factor = clamp(1.0-((dist - cloudfar)/(cloudfar-cloudnear)),0.0,1.0);
        cld *= factor;
    }
    #endif

	mie = exp(-h/Hm) + cld + haze;
	#ifdef cloud2
		mie += cld2;
	#endif
    
}



float escape(in vec3 p, in vec3 d, in float R) {
	vec3 v = p - C;
	float b = dot(v, d);
	float c = dot(v, v) - R*R;
	float det2 = b * b - c;
	if (det2 < 0.) return -1.;
	float det = sqrt(det2);
	float t1 = -b - det, t2 = -b + det;
	return (t1 >= 0.) ? t1 : t2;
}

// this can be explained: http://www.scratchapixel.com/lessons/3d-advanced-lessons/simulating-the-colors-of-the-sky/atmospheric-scattering/
void scatter(vec3 o, vec3 d, out vec3 col, out vec3 scat, in float t) {
    
	float L = escape(o, d, Ra);	
	float mu = dot(d, Ds);
	float opmu2 = 1. + mu*mu;
	float phaseR = .0596831 * opmu2;
	float phaseM = .1193662 * (1. - g2) * opmu2 / ((2. + g2) * pow(1. + g2 - 2.*g*mu, 1.5));
    float phaseS = .1193662 * (1. - s2) * opmu2 / ((2. + s2) * pow(1. + s2 - 2.*s*mu, 1.5));
	
	float depthR = 0., depthM = 0.;
	vec3 R = vec3(0.), M = vec3(0.);
	
	float dl = L / float(steps);
	for (int i = 0; i < steps; ++i) {
		float l = float(i) * dl;
		vec3 p = (o + d * l);

		float dR, dM;
		densities(p, dR, dM);
		dR *= dl; dM *= dl;
		depthR += dR;
		depthM += dM;

		float Ls = escape(p, Ds, Ra);
		if (Ls > 0.) {
			float dls = Ls / float(stepss);
			float depthRs = 0., depthMs = 0.;
			for (int j = 0; j < stepss; ++j) {
				float ls = float(j) * dls;
				vec3 ps = ( p + Ds * ls );
				float dRs, dMs;
				densities(ps, dRs, dMs);
				depthRs += dRs * dls;
				depthMs += dMs * dls;
			}

			vec3 A = exp(-(bR * (depthRs + depthR) + bM * (depthMs + depthM)));
			R += (A * dR);
			M += A * dM ;
		} else {
		}
	}

	//col = (I) * (R * bR * phaseR + M * bM * (phaseM ));
    col = (I) *(M * bM * (phaseM )); // Mie scattering
    #if NICE_HACK_SUN
    col += (SI) *(M * bM *phaseS); //Sun
    #endif
    col += (I) *(R * bR * phaseR); //Rayleigh scattering
    scat = 0.1 *(bM*depthM);
    //scat = 0.0 + clamp(depthM*5e-7,0.,1.); 
}


vec3 hash33(vec3 p)
{
    p = fract(p * vec3(443.8975,397.2973, 491.1871));
    p += dot(p.zxy, p.yxz+19.27);
    return fract(vec3(p.x * p.y, p.z*p.x, p.y*p.z));
}

vec3 stars(in vec3 p)
{
    vec3 c = vec3(0.);
    float res = iResolution.x*2.5;

	for (float i=0.;i<4.;i++)
    {
        vec3 q = fract(p*(.15*res))-0.5;
        vec3 id = floor(p*(.15*res));
        vec2 rn = hash33(id).xy;
        float c2 = 1.-smoothstep(0.,.6,length(q));
        c2 *= step(rn.x,.0005+i*i*0.001);
        c += c2*(mix(vec3(1.0,0.49,0.1),vec3(0.75,0.9,1.),rn.y)*0.1+0.9);
        p *= 1.3;
    }
    return c*c*.8;
}

//SIMPLE SUN STUFF
const float PI = 3.14159265358979323846;
const float density = 0.5;
const float zenithOffset = 0.48;
const vec3 skyColor = vec3(0.37, 0.55, 1.0) * (1.0 + 0.0);

#define zenithDensity(x) density / pow(max(x - zenithOffset, 0.0035), 0.75)

float getSunPoint(vec2 p, vec2 lp){
return smoothstep(0.04*(fov/2.0), 0.026*(fov/2.0), distance(p, lp)) * 50.0;
}

float getMie(vec2 p, vec2 lp){
    float mytest = lp.y < 0.5 ? (lp.y+0.5)*pow(0.05,20.0):0.05;
    float disk = clamp(1.0 - pow(distance(p, lp), mytest), 0.0, 1.0);
    return disk*disk*(3.0 - 2.0 * disk) * 0.25 * PI;
}

vec3 getSkyAbsorption(vec3 x, float y){
    vec3 absorption = x * y;
    absorption = pow(absorption, 1.0 - (y + absorption) * 0.5) / x / y;
    return absorption;
}

vec3 jodieReinhardTonemap(vec3 c){
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    vec3 tc = c / (c + 1.0);
    return mix(c / (l + 1.0), tc, tc);
}

vec3 getAtmosphericScattering(vec2 p, vec2 lp){
    float zenithnew = zenithDensity(p.y);
    float sunPointDistMult =  clamp(length(max(lp.y + 0.1 - zenithOffset, 0.0)), 0.0, 1.0);
    vec3 absorption = getSkyAbsorption(skyColor, zenithnew);
    vec3 sunAbsorption = getSkyAbsorption(skyColor, zenithDensity(lp.y + 0.1));
    vec3 sun3 = getSunPoint(p, lp) * absorption;
    vec3 mie2 = getMie(p, lp) * sunAbsorption;
    vec3 totalSky = sun3; //+ mie2;
    totalSky *= sunAbsorption * 0.5 + 0.5 * length(sunAbsorption);
    vec3 newSky = jodieReinhardTonemap(totalSky);
    return newSky;
}
//END SIMPLE SUN STUFF

//RAIN STUFF
vec3 N31(float p) {
    //  3 out, 1 in... DAVE HOSKINS
   vec3 p3 = fract(vec3(p) * vec3(.1031,.11369,.13787));
   p3 += dot(p3, p3.yzx + 19.19);
   return fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float SawTooth(float t) {
    return cos(t+cos(t))+sin(2.*t)*.2+sin(4.*t)*.02;
}

float DeltaSawTooth(float t) {
    return 0.4*cos(2.*t)+0.08*cos(4.*t) - (1.-sin(t))*sin(t+cos(t));
}  

vec2 GetDrops(vec2 uv, float seed, float m) {
    
    float t2 = t+m;
    vec2 o = vec2(0.);

    #ifndef DROP_DEBUG
    uv.y += t2*.05;
    #endif
    
    uv *= vec2(10., 2.5)*2.;
    vec2 id = floor(uv);
    vec3 n = N31(id.x + (id.y+seed)*546.3524);
    vec2 bd = fract(uv);
    
    vec2 uv2 = bd;
    
    bd -= 0.5;
    
    bd.y*=4.;

    bd.x += (n.x-.5)*rainy;
    
    t2 += n.z * 6.28;
    float slide = SawTooth(t2);
    
    float ts = 1.5;
    vec2 trailPos = vec2(bd.x*ts, (fract(bd.y*ts*2.-t2*2.)-.5)*.5);
    
    bd.y += slide*2.;								// make drops slide down
    
    #ifdef HIGH_QUALITY
    float dropShape = bd.x*bd.x;
    dropShape *= DeltaSawTooth(t);
    bd.y += dropShape;								// change shape of drop when it is falling
    #endif
    
    float d = length(bd);							// distance to main drop
    
    float trailMask = S(-.2, .2, bd.y);				// mask out drops that are below the main
    trailMask *= bd.y;								// fade dropsize
    float td = length(trailPos*max(.5, trailMask));	// distance to trail drops
    
    float mainDrop = S(.2, .1, d);
    float dropTrail = S(.1, .02, td);
    
    dropTrail *= trailMask;
    o = mix(bd*mainDrop, trailPos, dropTrail);		// mix main drop and drop trail
    
    #ifdef DROP_DEBUG
    if(uv2.x<.02 || uv2.y<.01) o = vec2(1.);
    #endif
    
    return o;
}
//END RAIN STUFF

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
// removes reflection below horizon
/*
  if(vUv.y<.51){
fragColor=vec4(0.118,0.282,0.467,1.); //Color for below horizon
return;
}
*/

	float AR = iResolution.x/iResolution.y;
    float M = 1.0; //canvas.innerWidth/M //canvas.innerHeight/M --res
    
    vec2 uvMouse = (iMouse.xy / iResolution.xy);
    uvMouse.x *= AR;
    
   	vec2 uv0 = (fragCoord.xy / iResolution.xy);
    uv0 *= M;
	//uv0.x *= AR;
    
    vec2 uv = uv0 * (2.0*M) - (1.0*M);
    uv.x *=AR;
    
  
    if (uvMouse.y == 0.) uvMouse.y=(0.7-(0.05*fov)); //initial view 
    if (uvMouse.x == 0.) uvMouse.x=(1.0-(0.05*fov)); //initial view
    

	Ds = normalize(vec3(uvMouse.x-((0.5*AR)), uvMouse.y-0.5, (fov/-2.0)));
    
    
	vec3 O = vec3(0., cameraheight, 0.);
	vec3 D = normalize(vec3(uv, -(fov*M)));

	vec3 color = vec3(0.);
    vec3 scat = vec3(0.);

    //float scat = 0.;
	float att = 1.;
    float staratt = 1.;
    float scatatt = 1.;
	vec3 star = vec3(0.);
    vec4 aur = vec4(0.);

    float fade = smoothstep(0.,0.01,abs(D.y))*0.5+0.9;


    
    staratt = 1. -min(1.0,(uvMouse.y*2.0));
    scatatt = 1. -min(1.0,(uvMouse.y*2.2));

	if (D.y < -ts) {
		float L = - O.y / D.y;
		O = O + D * L;
        D.y = -D.y;
		D = normalize(D+vec3(0,.003*sin(t+6.2831*noise(O.xz+vec2(0.,-t*1e3))),0.));
		att = .6;
        star = stars(D);
        uvMouse.y < 0.5 ? aur = smoothstep(0.0,2.5,aurora(O,D)):aur = aur;
	}
    else{
     	float L1 =  O.y / D.y;
		vec3 O1 = O + D * L1;

    	vec3 D1 = vec3(1.);
    	D1 = normalize(D+vec3(1.,0.0009*sin(t+6.2831*noise(O1.xz+vec2(0.,t*0.8))),0.));
    	star = stars(D1);
        uvMouse.y < 0.5 ? aur = smoothstep(0.,1.5,aurora(O,D))*fade:aur = aur;
    }

    star *= att;
    star *= staratt;

    scatter(O, D, color, scat, t);
    color *= att;
    scat *=  att;
    scat *= scatatt;
    
	//draw the badly implemented sun
    #if SIMPLE_SUN
    
    vec2 uv1 = (fragCoord.xy / iResolution.xy);
    uv1 *=M;
    uv1.x *=AR;
    
    vec3 sun2 = getAtmosphericScattering(uv1, vec2(uvMouse.x,uvMouse.y)) ;
    color += sun2;
    #endif
    
    color += scat;
    color += star;
    //color=color*(1.-(aur.a)*scatatt) + (aur.rgb*scatatt);
    color += aur.rgb*scatatt;

    
    
    #if ENABLE_RAIN
    vec2 drops = vec2(0.);
    if (rainmulti > 1.0){
    drops = GetDrops(uv/2.0, 1., 1.);

    color +=drops.x+drops.y;
    }
    #endif

	//float env = pow( smoothstep(.5, iResolution.x / iResolution.y, length(uv*0.8)), 0.0);
	fragColor = vec4(pow(color, vec3(1.0/2.2)), 1.); //gamma correct
}

void main() {
vec4 fragCoord = gl_FragCoord;
mainImage(gl_FragColor,(vUv.xy)*iResolution);
	//gl_FragColor = vec4(pow(gl_FragColor.rgb, vec3(1.0/2.2)), 1.); //gamma correct
}
  `,
    wireframe: false,
    side: THREE.DoubleSide,
  });
  const planeGeometry = new THREE.PlaneGeometry(400, 200);
  const plane = new THREE.Mesh(planeGeometry, skyMaterial);
  plane.position.z = -20;
  plane.position.x = 0;
  plane.position.y = 230;
  scene.add(plane);
}

onMounted(() => {
  init();
  initClouds();
  initSign();
  initDynamicSky();
  animate();
  document.body.addEventListener("wheel", onWheel);
  document.body.addEventListener("touchstart", onTouchStart);
  document.body.addEventListener("touchmove", onTouchMove);
  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onMouseMove, false);
  window.addEventListener("mousedown", onMouseDown, false);
});
onUnmounted(() => {
  document.body.removeEventListener("wheel", onWheel);
  document.body.removeEventListener("touchstart", onTouchStart);
  document.body.removeEventListener("touchmove", onTouchMove);
  window.removeEventListener("resize", onWindowResize);
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mousedown", onMouseDown);
});
</script>

<style scoped>
.clouds-wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

canvas {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
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
