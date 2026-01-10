var Xi=Object.defineProperty;var Zi=(o,e,t)=>e in o?Xi(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var c=(o,e,t)=>Zi(o,typeof e!="symbol"?e+"":e,t);import{V as O,U as _,S as P,D as $i,a as eo,b as to,c as so,W as Re,L as Y,d as k,e as T,F as ee,H as ne,f as Ne,N as Ye,B as Ct,g as Je,O as ks,M as X,C as D,h as Xe,i as ue,j as Z,k as ut,E as ss,l as ie,m as gt,R as ge,n as Qe,o as Et,p as Ke,q as Us,P as vt,A as io,r as Be,T as pt,s as pe,t as F,u as ns,v as He,w as Gs,x as se,y as _e,z as Oe,Q as ze,G as it,I as oo,J as nt,K as rt,X as Te,Y as ke,Z as Ge,_ as Ve,$ as Ee,a0 as re,a1 as et,a2 as at,a3 as lt,a4 as no,a5 as rs,a6 as Ps,a7 as St,a8 as is,a9 as ro,aa as Vt,ab as Ns,ac as Hs,ad as tt,ae as st,af as ao,ag as ft,ah as ct,ai as Ao,aj as lo,ak as Os,al as co,am as ho,an as uo,ao as go,ap as po,aq as zs,ar as fo,as as Vs,at as mo,au as Io,av as Co,aw as Eo,ax as vo,ay as Bo,az as yo,aA as wo,aB as bo,aC as xo,aD as qs,aE as So,aF as as,aG as As,aH as ls,aI as qt,aJ as Qo,aK as Mo,aL as To,aM as Ro,aN as Ys,aO as cs,aP as Yt,aQ as Jt,aR as Do,aS as Fo,aT as Lo,aU as _o,aV as hs,aW as ds,aX as Kt,aY as Qt,aZ as ht,a_ as Js,a$ as Ks,b0 as Wt,b1 as Ze,b2 as Ws,b3 as js,b4 as ko,b5 as Uo,b6 as Go,b7 as Po,b8 as ot,b9 as Bt,ba as yt,bb as No,bc as Ho,bd as Oo,be as zo}from"./three-BW3oarc1.js";import{U as Vo,_ as qo}from"./mediapipe-BJQlj0xU.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();var Yo="@vercel/analytics",Jo="1.6.1",Ko=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function Xs(){return typeof window<"u"}function Zs(){try{const o="production"}catch{}return"production"}function Wo(o="auto"){if(o==="auto"){window.vam=Zs();return}window.vam=o}function jo(){return(Xs()?window.vam:Zs())||"production"}function jt(){return jo()==="development"}function Xo(o){return o.scriptSrc?o.scriptSrc:jt()?"https://va.vercel-scripts.com/v1/script.debug.js":o.basePath?`${o.basePath}/insights/script.js`:"/_vercel/insights/script.js"}function Zo(o={debug:!0}){var e;if(!Xs())return;Wo(o.mode),Ko(),o.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",o.beforeSend));const t=Xo(o);if(document.head.querySelector(`script[src*="${t}"]`))return;const s=document.createElement("script");s.src=t,s.defer=!0,s.dataset.sdkn=Yo+(o.framework?`/${o.framework}`:""),s.dataset.sdkv=Jo,o.disableAutoTrack&&(s.dataset.disableAutoTrack="1"),o.endpoint?s.dataset.endpoint=o.endpoint:o.basePath&&(s.dataset.endpoint=`${o.basePath}/insights`),o.dsn&&(s.dataset.dsn=o.dsn),s.onerror=()=>{const i=jt()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${t}. ${i}`)},jt()&&o.debug===!1&&(s.dataset.debug="false"),document.head.appendChild(s)}const $o={blurAmount:80,backgroundColor:"rgba(220, 220, 220, 0.85)",enableHighDPI:!0},en={interpolationPoints:5,minMovementThreshold:2,maxTrailLength:50,baseClearRadius:60,dynamicRadius:!0},tn={fogOverlay:{},handTrail:{},debug:!1};class sn{constructor(e,t={}){c(this,"canvas");c(this,"ctx");c(this,"maskCanvas");c(this,"maskCtx");c(this,"blurCanvas");c(this,"blurCtx");c(this,"noisePattern",null);c(this,"config");c(this,"container");c(this,"videoElement");c(this,"isInitialized",!1);this.container=e,this.config={...$o,...t},this.videoElement=e.querySelector("video"),this.canvas=document.createElement("canvas"),this.canvas.id="fog-overlay-canvas";const s=this.canvas.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!s)throw new Error("[FogOverlay] Failed to get 2D canvas context");this.ctx=s,this.maskCanvas=document.createElement("canvas");const i=this.maskCanvas.getContext("2d",{alpha:!0});if(!i)throw new Error("[FogOverlay] Failed to get mask canvas context");this.maskCtx=i,this.blurCanvas=document.createElement("canvas");const n=this.blurCanvas.getContext("2d",{alpha:!1,willReadFrequently:!1});if(!n)throw new Error("[FogOverlay] Failed to get blur canvas context");this.blurCtx=n}initialize(){if(this.isInitialized){console.warn("[FogOverlay] Already initialized");return}this.updateDimensions(),this.applyCanvasStyles(),this.container.appendChild(this.canvas),this.reset(),this.isInitialized=!0,this.generateNoisePattern(),console.log("[FogOverlay] Initialized",{width:this.canvas.width,height:this.canvas.height,blur:this.config.blurAmount,hasVideo:!!this.videoElement})}generateNoisePattern(){const t=document.createElement("canvas");t.width=256,t.height=256;const s=t.getContext("2d");if(!s)return;const i=s.createImageData(256,256),n=i.data;for(let r=0;r<n.length;r+=4){const a=Math.floor(Math.random()*255);n[r]=a,n[r+1]=a,n[r+2]=a,n[r+3]=10+Math.floor(Math.random()*30)}s.putImageData(i,0,0),this.noisePattern=this.ctx.createPattern(t,"repeat")}updateDimensions(){const e=this.container.getBoundingClientRect(),t=this.config.enableHighDPI&&window.devicePixelRatio||1;this.canvas.width=e.width*t,this.canvas.height=e.height*t,this.maskCanvas.width=e.width*t,this.maskCanvas.height=e.height*t;const s=Math.max(.05,Math.min(.2,10/this.config.blurAmount));this.blurCanvas.width=Math.floor(e.width*s),this.blurCanvas.height=Math.floor(e.height*s),this.canvas.style.width=`${e.width}px`,this.canvas.style.height=`${e.height}px`,this.ctx.scale(t,t),this.maskCtx.scale(t,t)}applyCanvasStyles(){Object.entries({position:"absolute",top:"0",left:"0","z-index":"50","pointer-events":"none",transform:"scaleX(-1)"}).forEach(([t,s])=>{this.canvas.style.setProperty(t,s)})}reset(){if(!this.isInitialized){console.warn("[FogOverlay] Cannot reset before initialization");return}this.maskCtx.save(),this.maskCtx.setTransform(1,0,0,1,0,0),this.maskCtx.clearRect(0,0,this.maskCanvas.width,this.maskCanvas.height),this.maskCtx.restore(),console.log("[FogOverlay] Reset mask")}clearAtPoints(e){if(!(!this.isInitialized||e.length===0))for(const t of e){const s=this.maskCtx.createRadialGradient(t.x,t.y,0,t.x,t.y,t.radius);s.addColorStop(0,"rgba(0, 0, 0, 1)"),s.addColorStop(.4,"rgba(0, 0, 0, 1)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),this.maskCtx.fillStyle=s,this.maskCtx.beginPath(),this.maskCtx.arc(t.x,t.y,t.radius,0,Math.PI*2),this.maskCtx.fill()}}render(){if(!this.isInitialized||!this.videoElement)return;const e=this.container.getBoundingClientRect();this.ctx.clearRect(0,0,e.width,e.height),this.blurCtx.drawImage(this.videoElement,0,0,this.blurCanvas.width,this.blurCanvas.height),this.ctx.drawImage(this.blurCanvas,0,0,e.width,e.height),this.ctx.fillStyle=this.config.backgroundColor,this.ctx.fillRect(0,0,e.width,e.height),this.noisePattern&&(this.ctx.fillStyle=this.noisePattern,this.ctx.fillRect(0,0,e.width,e.height)),this.ctx.save(),this.ctx.globalCompositeOperation="destination-out",this.ctx.drawImage(this.maskCanvas,0,0,e.width,e.height),this.ctx.restore()}handleResize(){if(!this.isInitialized)return;const e=this.maskCtx.getImageData(0,0,this.maskCanvas.width,this.maskCanvas.height);this.updateDimensions(),this.maskCtx.putImageData(e,0,0)}getFogPercentage(){if(!this.isInitialized)return 100;try{const t=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height).data;let s=0;const i=t.length/4;for(let n=0;n<t.length;n+=40)t[n+3]>128&&s++;return s/(i/10)*100}catch(e){return console.warn("[FogOverlay] Failed to calculate fog percentage:",e),100}}show(){this.canvas.style.display="block"}hide(){this.canvas.style.display="none"}isReady(){return this.isInitialized}dispose(){this.isInitialized&&(this.canvas.parentElement&&this.canvas.parentElement.removeChild(this.canvas),this.isInitialized=!1,console.log("[FogOverlay] Disposed"))}}class on{constructor(e={}){c(this,"config");c(this,"trackedHands");c(this,"newTrailPoints",[]);c(this,"canvasWidth",0);c(this,"canvasHeight",0);this.config={...en,...e},this.trackedHands=new Map}setDimensions(e,t){this.canvasWidth=e,this.canvasHeight=t}update(e){if(this.newTrailPoints=[],!e||!e.landmarks||e.landmarks.length===0)return this.trackedHands.clear(),[];const t=[],s=new Set;for(let i=0;i<e.landmarks.length;i++){const n=e.landmarks[i],r=e.handedness?.[i]?.[0]?.categoryName||"Unknown",a=`${r}-${i}`;s.add(a);const A=n[0],l={x:A.x*this.canvasWidth,y:A.y*this.canvasHeight},h=n[12],d=this.calculateDistance({x:A.x*this.canvasWidth,y:A.y*this.canvasHeight},{x:h.x*this.canvasWidth,y:h.y*this.canvasHeight}),g=this.trackedHands.get(a)?.palmPosition||null,p=this.calculateClearRadius(d);let f=0;g&&(f=this.calculateDistance(l,g));const m=this.generateTrail(l,g,p);this.newTrailPoints.push(...m);const I={palmPosition:l,previousPosition:g,trail:m,handSize:d,handedness:r,velocity:f};this.trackedHands.set(a,I),t.push(I)}for(const i of this.trackedHands.keys())s.has(i)||this.trackedHands.delete(i);return t}generateTrail(e,t,s){const i=[],n=performance.now();if(!t)return i.push({x:e.x,y:e.y,radius:s,timestamp:n}),i;if(this.calculateDistance(e,t)<this.config.minMovementThreshold)return i.push({x:e.x,y:e.y,radius:s,timestamp:n}),i;const a=this.config.interpolationPoints;for(let A=0;A<=a;A++){const l=A/a,h={x:t.x+(e.x-t.x)*l,y:t.y+(e.y-t.y)*l,radius:s,timestamp:n};i.push(h)}return i}calculateClearRadius(e){if(!this.config.dynamicRadius)return this.config.baseClearRadius;const t=e/150,s=this.config.baseClearRadius*t;return Math.max(30,Math.min(150,s))}calculateDistance(e,t){const s=t.x-e.x,i=t.y-e.y;return Math.sqrt(s*s+i*i)}getAllTrailPoints(){const e=[];for(const t of this.trackedHands.values())e.push(...t.trail);return e}getNewTrailPoints(){return this.newTrailPoints}getHandCount(){return this.trackedHands.size}reset(){this.trackedHands.clear()}dispose(){this.trackedHands.clear(),console.log("[HandTrailTracker] Disposed")}}class nn{constructor(e,t,s={}){c(this,"handTracker");c(this,"fogOverlay");c(this,"handTrailTracker");c(this,"config");c(this,"container");c(this,"state","uninitialized");c(this,"updateLoopId",null);c(this,"debugEnabled",!1);c(this,"debugCallback",null);c(this,"lastFrameTime",0);c(this,"frameCount",0);c(this,"currentFps",0);c(this,"lastFpsUpdate",0);c(this,"lastFogPercentageUpdate",0);c(this,"cachedFogPercentage",100);this.handTracker=e,this.container=t,this.config={...tn,...s},this.fogOverlay=new sn(t,this.config.fogOverlay),this.handTrailTracker=new on(this.config.handTrail)}initialize(){if(this.state!=="uninitialized"){console.warn("[FoggyMirrorController] Already initialized");return}this.fogOverlay.initialize();const e=this.container.getBoundingClientRect();this.handTrailTracker.setDimensions(e.width,e.height),this.state="ready",console.log("[FoggyMirrorController] Initialized")}enableDebug(e){this.debugEnabled=!0,this.debugCallback=e}disableDebug(){this.debugEnabled=!1,this.debugCallback=null}start(){if(this.state==="disposed")throw new Error("[FoggyMirrorController] Cannot start after disposal");if(this.state==="uninitialized"&&this.initialize(),this.state==="active"){console.warn("[FoggyMirrorController] Already active");return}this.fogOverlay.show(),this.startUpdateLoop(),this.state="active",console.log("[FoggyMirrorController] Started")}stop(){this.state==="active"&&(this.stopUpdateLoop(),this.fogOverlay.hide(),this.handTrailTracker.reset(),this.state="ready",console.log("[FoggyMirrorController] Stopped"))}startUpdateLoop(){if(this.updateLoopId!==null)return;const e=t=>{if(this.state!=="active")return;this.lastFrameTime===0&&(this.lastFrameTime=t),this.frameCount++,t-this.lastFpsUpdate>=1e3&&(this.currentFps=this.frameCount*1e3/(t-this.lastFpsUpdate),this.frameCount=0,this.lastFpsUpdate=t),this.lastFrameTime=t;const s=this.handTracker.detectHands(t),i=this.handTrailTracker.update(s),n=this.handTrailTracker.getNewTrailPoints();if(n.length>0&&this.fogOverlay.clearAtPoints(n),this.fogOverlay.render(),this.debugEnabled&&this.debugCallback){const r=this.handTrailTracker.getAllTrailPoints();t-this.lastFogPercentageUpdate>=500&&(this.cachedFogPercentage=this.fogOverlay.getFogPercentage(),this.lastFogPercentageUpdate=t);let a=0,A=0;if(i.length>0)for(const d of i){a+=d.velocity;const u=d.trail[d.trail.length-1];A+=u?u.radius:0}const l=i.length>0?a/i.length:0,h=i.length>0?A/i.length:0;this.debugCallback({handsDetected:i.length,fps:this.currentFps,trailPoints:r.length,clearedPercentage:100-this.cachedFogPercentage,avgVelocity:l,avgBrushSize:h})}if(this.config.debug&&i.length>0){const r=this.fogOverlay.getFogPercentage();console.log("[FoggyMirrorController] Update:",{hands:i.length,trailPoints:this.handTrailTracker.getAllTrailPoints().length,fogRemaining:`${r.toFixed(1)}%`})}this.updateLoopId=requestAnimationFrame(e)};this.updateLoopId=requestAnimationFrame(e)}stopUpdateLoop(){this.updateLoopId!==null&&(cancelAnimationFrame(this.updateLoopId),this.updateLoopId=null)}reset(){this.state==="disposed"||this.state==="uninitialized"||(this.fogOverlay.reset(),this.handTrailTracker.reset(),console.log("[FoggyMirrorController] Reset fog overlay"))}handleResize(){if(this.state==="disposed"||this.state==="uninitialized")return;this.fogOverlay.handleResize();const e=this.container.getBoundingClientRect();this.handTrailTracker.setDimensions(e.width,e.height)}getState(){return this.state}getFogPercentage(){return this.fogOverlay.getFogPercentage()}getHandCount(){return this.handTrailTracker.getHandCount()}isActive(){return this.state==="active"}dispose(){this.state!=="disposed"&&(this.stopUpdateLoop(),this.fogOverlay.dispose(),this.handTrailTracker.dispose(),this.state="disposed",console.log("[FoggyMirrorController] Disposed"))}}var $=(o=>(o[o.NORMAL=0]="NORMAL",o[o.IMPLODING=1]="IMPLODING",o[o.SINGULARITY=2]="SINGULARITY",o[o.EXPLODING=3]="EXPLODING",o[o.FADING=4]="FADING",o))($||{});const rn={particleCount:2e4,spiralArms:4,radius:5,spin:2,randomness:.25,randomnessPower:3,colorInside:"#ffffff",colorOutside:"#ffffff",particleSize:.9};/**
 * postprocessing v6.38.0 build Sat Nov 08 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Mt=1/1e3,an=1e3,An=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(o){typeof document<"u"&&document.hidden!==void 0&&(o?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=o)}get delta(){return this._delta*Mt}get fixedDelta(){return this._fixedDelta*Mt}set fixedDelta(o){this._fixedDelta=o*an}get elapsed(){return this._elapsed*Mt}update(o){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(o!==void 0?o:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(o){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},ln=(()=>{const o=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new pe;return t.setAttribute("position",new F(o,3)),t.setAttribute("uv",new F(e,2)),t})(),fe=class Xt{static get fullscreenGeometry(){return ln}constructor(e="Pass",t=new Je,s=new ks){this.name=e,this.renderer=null,this.scene=t,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new X(Xt.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Je),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Ct){}render(e,t,s,i,n){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,s){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Re||t instanceof Be||t instanceof pt||t instanceof Xt)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},cn=class extends fe{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(o,e,t,s,i){const n=o.state.buffers.stencil;n.setLocked(!1),n.setTest(!1)}},hn=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,$s="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",ei=class extends Z{constructor(){super({name:"CopyMaterial",defines:{DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new k(null),depthBuffer:new k(null),channelWeights:new k(null),opacity:new k(1)},blending:Ke,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:hn,vertexShader:$s}),this.depthFunc=io}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(o){const e=o!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=o}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(o){const e=o!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=o}set depthPacking(o){this.defines.DEPTH_PACKING=o.toFixed(0),this.needsUpdate=!0}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(o){o!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=o):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(o){this.uniforms.inputBuffer.value=o}getOpacity(o){return this.uniforms.opacity.value}setOpacity(o){this.uniforms.opacity.value=o}},dn=class extends fe{constructor(o,e=!0){super("CopyPass"),this.fullscreenMaterial=new ei,this.needsSwap=!1,this.renderTarget=o,o===void 0&&(this.renderTarget=new Re(1,1,{minFilter:Y,magFilter:Y,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(o){this.autoResize=o}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(o){this.autoResize=o}render(o,e,t,s,i){this.fullscreenMaterial.inputBuffer=e.texture,o.setRenderTarget(this.renderToScreen?null:this.renderTarget),o.render(this.scene,this.camera)}setSize(o,e){this.autoResize&&this.renderTarget.setSize(o,e)}initialize(o,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==_?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":o!==null&&o.outputColorSpace===P&&(this.renderTarget.texture.colorSpace=P))}},us=new D,ti=class extends fe{constructor(o=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=o,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(o,e,t){this.color=o,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(o){this.overrideClearColor=o}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(o){this.overrideClearAlpha=o}render(o,e,t,s,i){const n=this.overrideClearColor,r=this.overrideClearAlpha,a=o.getClearAlpha(),A=n!==null,l=r>=0;A?(o.getClearColor(us),o.setClearColor(n,l?r:a)):l&&o.setClearAlpha(r),o.setRenderTarget(this.renderToScreen?null:e),o.clear(this.color,this.depth,this.stencil),A?o.setClearColor(us,a):l&&o.setClearAlpha(a)}},un=class extends fe{constructor(o,e){super("MaskPass",o,e),this.needsSwap=!1,this.clearPass=new ti(!1,!1,!0),this.inverse=!1}set mainScene(o){this.scene=o}set mainCamera(o){this.camera=o}get inverted(){return this.inverse}set inverted(o){this.inverse=o}get clear(){return this.clearPass.enabled}set clear(o){this.clearPass.enabled=o}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(o){this.inverted=o}render(o,e,t,s,i){const n=o.getContext(),r=o.state.buffers,a=this.scene,A=this.camera,l=this.clearPass,h=this.inverted?0:1,d=1-h;r.color.setMask(!1),r.depth.setMask(!1),r.color.setLocked(!0),r.depth.setLocked(!0),r.stencil.setTest(!0),r.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.stencil.setFunc(n.ALWAYS,h,4294967295),r.stencil.setClear(d),r.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(o,null):(l.render(o,e),l.render(o,t))),this.renderToScreen?(o.setRenderTarget(null),o.render(a,A)):(o.setRenderTarget(e),o.render(a,A),o.setRenderTarget(t),o.render(a,A)),r.color.setLocked(!1),r.depth.setLocked(!1),r.stencil.setLocked(!1),r.stencil.setFunc(n.EQUAL,1,4294967295),r.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.stencil.setLocked(!0)}},gn=class{constructor(o=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:s=0,frameBufferType:i}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,i,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new dn,this.depthTexture=null,this.passes=[],this.timer=new An,this.autoRenderToScreen=!0,this.setRenderer(o)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(o){const e=this.inputBuffer,t=this.multisampling;t>0&&o>0?(this.inputBuffer.samples=o,this.outputBuffer.samples=o,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==o&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,o),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(o){if(this.renderer=o,o!==null){const e=o.getSize(new O),t=o.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===_&&o.outputColorSpace===P&&(this.inputBuffer.texture.colorSpace=P,this.outputBuffer.texture.colorSpace=P,this.inputBuffer.dispose(),this.outputBuffer.dispose()),o.autoClear=!1,this.setSize(e.width,e.height);for(const i of this.passes)i.initialize(o,t,s)}}replaceRenderer(o,e=!0){const t=this.renderer,s=t.domElement.parentNode;return this.setRenderer(o),e&&s!==null&&(s.removeChild(t.domElement),s.appendChild(o.domElement)),t}createDepthTexture(){const o=this.depthTexture=new $i;return this.inputBuffer.depthTexture=o,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(o.format=eo,o.type=to):o.type=so,o}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const o of this.passes)o.setDepthTexture(null)}}createBuffer(o,e,t,s){const i=this.renderer,n=i===null?new O:i.getDrawingBufferSize(new O),r={minFilter:Y,magFilter:Y,stencilBuffer:e,depthBuffer:o,type:t},a=new Re(n.width,n.height,r);return s>0&&(a.samples=s),t===_&&i!==null&&i.outputColorSpace===P&&(a.texture.colorSpace=P),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(o){for(const e of this.passes)e.mainScene=o}setMainCamera(o){for(const e of this.passes)e.mainCamera=o}addPass(o,e){const t=this.passes,s=this.renderer,i=s.getDrawingBufferSize(new O),n=s.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;if(o.setRenderer(s),o.setSize(i.width,i.height),o.initialize(s,n,r),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),o.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,o):t.push(o),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),o.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const a=this.createDepthTexture();for(o of t)o.setDepthTexture(a)}else o.setDepthTexture(this.depthTexture)}removePass(o){const e=this.passes,t=e.indexOf(o);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const n=(a,A)=>a||A.needsDepthTexture;e.reduce(n,!1)||(o.getDepthTexture()===this.depthTexture&&o.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(o.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const o=this.passes;this.deleteDepthTexture(),o.length>0&&(this.autoRenderToScreen&&(o[o.length-1].renderToScreen=!1),this.passes=[])}render(o){const e=this.renderer,t=this.copyPass;let s=this.inputBuffer,i=this.outputBuffer,n=!1,r,a,A;o===void 0&&(this.timer.update(),o=this.timer.getDelta());for(const l of this.passes)l.enabled&&(l.render(e,s,i,o,n),l.needsSwap&&(n&&(t.renderToScreen=l.renderToScreen,r=e.getContext(),a=e.state.buffers.stencil,a.setFunc(r.NOTEQUAL,1,4294967295),t.render(e,s,i,o,n),a.setFunc(r.EQUAL,1,4294967295)),A=s,s=i,i=A),l instanceof un?n=!0:l instanceof cn&&(n=!1))}setSize(o,e,t){const s=this.renderer,i=s.getSize(new O);(o===void 0||e===void 0)&&(o=i.width,e=i.height),(i.width!==o||i.height!==e)&&s.setSize(o,e,t);const n=s.getDrawingBufferSize(new O);this.inputBuffer.setSize(n.width,n.height),this.outputBuffer.setSize(n.width,n.height);for(const r of this.passes)r.setSize(n.width,n.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const o of this.passes)o.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),fe.fullscreenGeometry.dispose()}},Me={NONE:0,DEPTH:1,CONVOLUTION:2},H={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},pn=class{constructor(){this.shaderParts=new Map([[H.FRAGMENT_HEAD,null],[H.FRAGMENT_MAIN_UV,null],[H.FRAGMENT_MAIN_IMAGE,null],[H.VERTEX_HEAD,null],[H.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Me.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ie}},Tt=!1,gs=class{constructor(o=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(o),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case ue:t=this.materialsFlatShadedDoubleSide;break;case Xe:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case ue:t=this.materialsDoubleSide;break;case Xe:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(o){if(!(o instanceof Z))return o.clone();const e=o.uniforms,t=new Map;for(const i in e){const n=e[i].value;n.isRenderTargetTexture&&(e[i].value=null,t.set(i,n))}const s=o.clone();for(const i of t)e[i[0]].value=i[1],s.uniforms[i[0]].value=i[1];return s}setMaterial(o){if(this.disposeMaterials(),this.material=o,o!==null){const e=this.materials=[this.cloneMaterial(o),this.cloneMaterial(o),this.cloneMaterial(o)];for(const t of e)t.uniforms=Object.assign({},o.uniforms),t.side=ut;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},o.uniforms),s.side=Xe,s}),this.materialsDoubleSide=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},o.uniforms),s.side=ue,s}),this.materialsFlatShaded=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},o.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},o.uniforms),s.flatShading=!0,s.side=Xe,s}),this.materialsFlatShadedDoubleSide=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},o.uniforms),s.flatShading=!0,s.side=ue,s})}}render(o,e,t){const s=o.shadowMap.enabled;if(o.shadowMap.enabled=!1,Tt){const i=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),o.render(e,t);for(const n of i)n[0].material=n[1];this.meshCount!==i.size&&i.clear()}else{const i=e.overrideMaterial;e.overrideMaterial=this.material,o.render(e,t),e.overrideMaterial=i}o.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const o=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of o)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return Tt}static set workaroundEnabled(o){Tt=o}},we=-1,Ie=class extends ss{constructor(o,e=we,t=we,s=1){super(),this.resizable=o,this.baseSize=new O(1,1),this.preferredSize=new O(e,t),this.target=this.preferredSize,this.s=s,this.effectiveSize=new O,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const o=this.baseSize,e=this.preferredSize,t=this.effectiveSize,s=this.scale;e.width!==we?t.width=e.width:e.height!==we?t.width=Math.round(e.height*(o.width/Math.max(o.height,1))):t.width=Math.round(o.width*s),e.height!==we?t.height=e.height:e.width!==we?t.height=Math.round(e.width/Math.max(o.width/Math.max(o.height,1),1)):t.height=Math.round(o.height*s)}get width(){return this.effectiveSize.width}set width(o){this.preferredWidth=o}get height(){return this.effectiveSize.height}set height(o){this.preferredHeight=o}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(o){this.s!==o&&(this.s=o,this.preferredSize.setScalar(we),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(o){this.scale=o}get baseWidth(){return this.baseSize.width}set baseWidth(o){this.baseSize.width!==o&&(this.baseSize.width=o,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(o){this.baseWidth=o}get baseHeight(){return this.baseSize.height}set baseHeight(o){this.baseSize.height!==o&&(this.baseSize.height=o,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(o){this.baseHeight=o}setBaseSize(o,e){(this.baseSize.width!==o||this.baseSize.height!==e)&&(this.baseSize.set(o,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(o){this.preferredSize.width!==o&&(this.preferredSize.width=o,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(o){this.preferredWidth=o}get preferredHeight(){return this.preferredSize.height}set preferredHeight(o){this.preferredSize.height!==o&&(this.preferredSize.height=o,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(o){this.preferredHeight=o}setPreferredSize(o,e){(this.preferredSize.width!==o||this.preferredSize.height!==e)&&(this.preferredSize.set(o,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(o){this.s=o.scale,this.baseSize.set(o.baseWidth,o.baseHeight),this.preferredSize.set(o.preferredWidth,o.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return we}},L={ADD:0,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},fn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),y.a*opacity);}",mn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),y.a*opacity);}",In="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",Cn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),y.a*opacity);}",En="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),y.a*opacity);}",vn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),y.a*opacity);}",Bn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),y.a*opacity);}",yn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),y.a*opacity);}",wn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),y.a*opacity);}",bn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),y.a*opacity);}",xn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),y.a*opacity);}",Sn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),y.a*opacity);}",Qn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),y.a*opacity);}",Mn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),y.a*opacity);}",Tn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),y.a*opacity);}",Rn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",Dn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),y.a*opacity);}",Fn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",Ln="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",_n="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),y.a*opacity);}",kn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),y.a*opacity);}",Un="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",Gn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",Pn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),y.a*opacity);}",Nn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",Hn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",On="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),y.a*opacity);}",zn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),y.a*opacity);}",Vn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",qn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),y.a*opacity);}",Yn="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",Jn=new Map([[L.ADD,fn],[L.AVERAGE,mn],[L.COLOR,In],[L.COLOR_BURN,Cn],[L.COLOR_DODGE,En],[L.DARKEN,vn],[L.DIFFERENCE,Bn],[L.DIVIDE,yn],[L.DST,null],[L.EXCLUSION,wn],[L.HARD_LIGHT,bn],[L.HARD_MIX,xn],[L.HUE,Sn],[L.INVERT,Qn],[L.INVERT_RGB,Mn],[L.LIGHTEN,Tn],[L.LINEAR_BURN,Rn],[L.LINEAR_DODGE,Dn],[L.LINEAR_LIGHT,Fn],[L.LUMINOSITY,Ln],[L.MULTIPLY,_n],[L.NEGATION,kn],[L.NORMAL,Un],[L.OVERLAY,Gn],[L.PIN_LIGHT,Pn],[L.REFLECT,Nn],[L.SATURATION,Hn],[L.SCREEN,On],[L.SOFT_LIGHT,zn],[L.SRC,Vn],[L.SUBTRACT,qn],[L.VIVID_LIGHT,Yn]]),Kn=class extends ss{constructor(o,e=1){super(),this._blendFunction=o,this.opacity=new k(e)}getOpacity(){return this.opacity.value}setOpacity(o){this.opacity.value=o}get blendFunction(){return this._blendFunction}set blendFunction(o){this._blendFunction=o,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(o){this.blendFunction=o}getShaderCode(){return Jn.get(this.blendFunction)}},wt=class extends ss{constructor(o,e,{attributes:t=Me.NONE,blendFunction:s=L.NORMAL,defines:i=new Map,uniforms:n=new Map,extensions:r=null,vertexShader:a=null}={}){super(),this.name=o,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=a,this.defines=i,this.uniforms=n,this.extensions=r,this.blendMode=new Kn(s),this.blendMode.addEventListener("change",A=>this.setChanged()),this._inputColorSpace=ie,this._outputColorSpace=gt}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(o){this._inputColorSpace=o,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(o){this._outputColorSpace=o,this.setChanged()}set mainScene(o){}set mainCamera(o){}getName(){return this.name}setRenderer(o){this.renderer=o}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(o){this.attributes=o,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(o){this.fragmentShader=o,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(o){this.vertexShader=o,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(o,e=Ct){}update(o,e,t){}setSize(o,e){}initialize(o,e,t){}dispose(){for(const o of Object.keys(this)){const e=this[o];(e instanceof Re||e instanceof Be||e instanceof pt||e instanceof fe)&&this[o].dispose()}}},bt={MEDIUM:2,LARGE:3},Wn=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,jn="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",Xn=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],Zn=class extends Z{constructor(o=new ns){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new k(null),texelSize:new k(new ns),scale:new k(1),kernel:new k(0)},blending:Ke,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Wn,vertexShader:jn}),this.setTexelSize(o.x,o.y),this.kernelSize=bt.MEDIUM}set inputBuffer(o){this.uniforms.inputBuffer.value=o}setInputBuffer(o){this.inputBuffer=o}get kernelSequence(){return Xn[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(o){this.uniforms.scale.value=o}getScale(){return this.uniforms.scale.value}setScale(o){this.uniforms.scale.value=o}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(o){this.uniforms.kernel.value=o}setKernel(o){this.kernel=o}setTexelSize(o,e){this.uniforms.texelSize.value.set(o,e,o*.5,e*.5)}setSize(o,e){const t=1/o,s=1/e;this.uniforms.texelSize.value.set(t,s,t*.5,s*.5)}},$n=class extends fe{constructor({kernelSize:o=bt.MEDIUM,resolutionScale:e=.5,width:t=Ie.AUTO_SIZE,height:s=Ie.AUTO_SIZE,resolutionX:i=t,resolutionY:n=s}={}){super("KawaseBlurPass"),this.renderTargetA=new Re(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const r=this.resolution=new Ie(this,i,n,e);r.addEventListener("change",a=>this.setSize(r.baseWidth,r.baseHeight)),this._blurMaterial=new Zn,this._blurMaterial.kernelSize=o,this.copyMaterial=new ei}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(o){this._blurMaterial=o}get dithering(){return this.copyMaterial.dithering}set dithering(o){this.copyMaterial.dithering=o}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(o){this.blurMaterial.kernelSize=o}get width(){return this.resolution.width}set width(o){this.resolution.preferredWidth=o}get height(){return this.resolution.height}set height(o){this.resolution.preferredHeight=o}get scale(){return this.blurMaterial.scale}set scale(o){this.blurMaterial.scale=o}getScale(){return this.blurMaterial.scale}setScale(o){this.blurMaterial.scale=o}getKernelSize(){return this.kernelSize}setKernelSize(o){this.kernelSize=o}getResolutionScale(){return this.resolution.scale}setResolutionScale(o){this.resolution.scale=o}render(o,e,t,s,i){const n=this.scene,r=this.camera,a=this.renderTargetA,A=this.renderTargetB,l=this.blurMaterial,h=l.kernelSequence;let d=e;this.fullscreenMaterial=l;for(let u=0,g=h.length;u<g;++u){const p=(u&1)===0?a:A;l.kernel=h[u],l.inputBuffer=d.texture,o.setRenderTarget(p),o.render(n,r),d=p}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=d.texture,o.setRenderTarget(this.renderToScreen?null:t),o.render(n,r)}setSize(o,e){const t=this.resolution;t.setBaseSize(o,e);const s=t.width,i=t.height;this.renderTargetA.setSize(s,i),this.renderTargetB.setSize(s,i),this.blurMaterial.setSize(o,e)}initialize(o,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==_?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):o!==null&&o.outputColorSpace===P&&(this.renderTargetA.texture.colorSpace=P,this.renderTargetB.texture.colorSpace=P))}static get AUTO_SIZE(){return Ie.AUTO_SIZE}},er=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,tr=class extends Z{constructor(o=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Us.replace(/\D+/g,"")},uniforms:{inputBuffer:new k(null),threshold:new k(0),smoothing:new k(1),range:new k(null)},blending:Ke,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:er,vertexShader:$s}),this.colorOutput=o,this.luminanceRange=e}set inputBuffer(o){this.uniforms.inputBuffer.value=o}setInputBuffer(o){this.uniforms.inputBuffer.value=o}get threshold(){return this.uniforms.threshold.value}set threshold(o){this.smoothing>0||o>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=o}getThreshold(){return this.threshold}setThreshold(o){this.threshold=o}get smoothing(){return this.uniforms.smoothing.value}set smoothing(o){this.threshold>0||o>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=o}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(o){this.smoothing=o}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(o){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(o){o?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(o){return this.colorOutput}setColorOutputEnabled(o){this.colorOutput=o}get useRange(){return this.luminanceRange!==null}set useRange(o){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(o){o!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=o,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(o){this.luminanceRange=o}},sr=class extends fe{constructor({renderTarget:o,luminanceRange:e,colorOutput:t,resolutionScale:s=1,width:i=Ie.AUTO_SIZE,height:n=Ie.AUTO_SIZE,resolutionX:r=i,resolutionY:a=n}={}){super("LuminancePass"),this.fullscreenMaterial=new tr(t,e),this.needsSwap=!1,this.renderTarget=o,this.renderTarget===void 0&&(this.renderTarget=new Re(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const A=this.resolution=new Ie(this,r,a,s);A.addEventListener("change",l=>this.setSize(A.baseWidth,A.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(o,e,t,s,i){const n=this.fullscreenMaterial;n.inputBuffer=e.texture,o.setRenderTarget(this.renderToScreen?null:this.renderTarget),o.render(this.scene,this.camera)}setSize(o,e){const t=this.resolution;t.setBaseSize(o,e),this.renderTarget.setSize(t.width,t.height)}initialize(o,e,t){t!==void 0&&t!==_&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},ir=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,or="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",nr=class extends Z{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new k(null),texelSize:new k(new O)},blending:Ke,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:ir,vertexShader:or})}set inputBuffer(o){this.uniforms.inputBuffer.value=o}setSize(o,e){this.uniforms.texelSize.value.set(1/o,1/e)}},rr=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,ar="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Ar=class extends Z{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new k(null),supportBuffer:new k(null),texelSize:new k(new O),radius:new k(.85)},blending:Ke,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:rr,vertexShader:ar})}set inputBuffer(o){this.uniforms.inputBuffer.value=o}set supportBuffer(o){this.uniforms.supportBuffer.value=o}get radius(){return this.uniforms.radius.value}set radius(o){this.uniforms.radius.value=o}setSize(o,e){this.uniforms.texelSize.value.set(1/o,1/e)}},lr=class extends fe{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Re(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new nr,this.upsamplingMaterial=new Ar,this.resolution=new O}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(o){if(this.levels!==o){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<o;++t){const s=e.clone();s.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(s)}this.upsamplingMipmaps.push(e);for(let t=1,s=o-1;t<s;++t){const i=e.clone();i.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(i)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(o){this.upsamplingMaterial.radius=o}render(o,e,t,s,i){const{scene:n,camera:r}=this,{downsamplingMaterial:a,upsamplingMaterial:A}=this,{downsamplingMipmaps:l,upsamplingMipmaps:h}=this;let d=e;this.fullscreenMaterial=a;for(let u=0,g=l.length;u<g;++u){const p=l[u];a.setSize(d.width,d.height),a.inputBuffer=d.texture,o.setRenderTarget(p),o.render(n,r),d=p}this.fullscreenMaterial=A;for(let u=h.length-1;u>=0;--u){const g=h[u];A.setSize(d.width,d.height),A.inputBuffer=d.texture,A.supportBuffer=l[u].texture,o.setRenderTarget(g),o.render(n,r),d=g}}setSize(o,e){const t=this.resolution;t.set(o,e);let s=t.width,i=t.height;for(let n=0,r=this.downsamplingMipmaps.length;n<r;++n)s=Math.round(s*.5),i=Math.round(i*.5),this.downsamplingMipmaps[n].setSize(s,i),n<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[n].setSize(s,i)}initialize(o,e,t){if(t!==void 0){const s=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const i of s)i.texture.type=t;if(t!==_)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(o!==null&&o.outputColorSpace===P)for(const i of s)i.texture.colorSpace=P}}dispose(){super.dispose();for(const o of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))o.dispose()}},cr=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,max(inputColor.a,texel.a));}`,hr=class extends wt{constructor({blendFunction:o=L.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:t=.03,mipmapBlur:s=!0,intensity:i=1,radius:n=.85,levels:r=8,kernelSize:a=bt.LARGE,resolutionScale:A=.5,width:l=Ie.AUTO_SIZE,height:h=Ie.AUTO_SIZE,resolutionX:d=l,resolutionY:u=h}={}){super("BloomEffect",cr,{blendFunction:o,uniforms:new Map([["map",new k(null)],["intensity",new k(i)]])}),this.renderTarget=new Re(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new $n({kernelSize:a}),this.luminancePass=new sr({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new lr,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=n,this.mipmapBlurPass.levels=r,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;const g=this.resolution=new Ie(this,d,u,A);g.addEventListener("change",p=>this.setSize(g.baseWidth,g.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(o){this.resolution.preferredWidth=o}get height(){return this.resolution.height}set height(o){this.resolution.preferredHeight=o}get dithering(){return this.blurPass.dithering}set dithering(o){this.blurPass.dithering=o}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(o){this.blurPass.kernelSize=o}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(o){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(o){this.uniforms.get("intensity").value=o}getIntensity(){return this.intensity}setIntensity(o){this.intensity=o}getResolutionScale(){return this.resolution.scale}setResolutionScale(o){this.resolution.scale=o}update(o,e,t){const s=this.renderTarget,i=this.luminancePass;i.enabled?(i.render(o,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(o,i.renderTarget):this.blurPass.render(o,i.renderTarget,s)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(o,e):this.blurPass.render(o,e,s)}setSize(o,e){const t=this.resolution;t.setBaseSize(o,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(o,e),this.mipmapBlurPass.setSize(o,e)}initialize(o,e,t){this.blurPass.initialize(o,e,t),this.luminancePass.initialize(o,e,t),this.mipmapBlurPass.initialize(o,e,t),t!==void 0&&(this.renderTarget.texture.type=t,o!==null&&o.outputColorSpace===P&&(this.renderTarget.texture.colorSpace=P))}},dr=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,ur="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",gr=class extends wt{constructor({offset:o=new O(.001,5e-4),radialModulation:e=!1,modulationOffset:t=.15}={}){super("ChromaticAberrationEffect",dr,{vertexShader:ur,attributes:Me.CONVOLUTION,uniforms:new Map([["offset",new k(o)],["modulationOffset",new k(t)]])}),this.radialModulation=e}get offset(){return this.uniforms.get("offset").value}set offset(o){this.uniforms.get("offset").value=o}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(o){o?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(o){this.uniforms.get("modulationOffset").value=o}getOffset(){return this.offset}setOffset(o){this.offset=o}},pr=class extends fe{constructor(o,e,t=null){super("RenderPass",o,e),this.needsSwap=!1,this.clearPass=new ti,this.overrideMaterialManager=t===null?null:new gs(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(o){this.scene=o}set mainCamera(o){this.camera=o}get renderToScreen(){return super.renderToScreen}set renderToScreen(o){super.renderToScreen=o,this.clearPass.renderToScreen=o}get overrideMaterial(){const o=this.overrideMaterialManager;return o!==null?o.material:null}set overrideMaterial(o){const e=this.overrideMaterialManager;o!==null?e!==null?e.setMaterial(o):this.overrideMaterialManager=new gs(o):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(o){this.overrideMaterial=o}get clear(){return this.clearPass.enabled}set clear(o){this.clearPass.enabled=o}getSelection(){return this.selection}setSelection(o){this.selection=o}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(o){this.ignoreBackground=o}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(o){this.skipShadowMapUpdate=o}getClearPass(){return this.clearPass}render(o,e,t,s,i){const n=this.scene,r=this.camera,a=this.selection,A=r.layers.mask,l=n.background,h=o.shadowMap.autoUpdate,d=this.renderToScreen?null:e;a!==null&&r.layers.set(a.getLayer()),this.skipShadowMapUpdate&&(o.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(n.background=null),this.clearPass.enabled&&this.clearPass.render(o,e),o.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(o,n,r):o.render(n,r),r.layers.mask=A,n.background=l,o.shadowMap.autoUpdate=h}},fr={SCALE_UP:"lut.scaleup"};function ps(o,e,t){const s=document.createElement("canvas"),i=s.getContext("2d");if(s.width=o,s.height=e,t instanceof Image)i.drawImage(t,0,0);else{const n=i.createImageData(o,e);n.data.set(t),i.putImageData(n,0,0)}return s}var mr=class si{constructor(e=0,t=0,s=null){this.width=e,this.height=t,this.data=s}toCanvas(){return typeof document>"u"?null:ps(this.width,this.height,this.data)}static from(e){const{width:t,height:s}=e;let i;if(e instanceof Image){const n=ps(t,s,e);n!==null&&(i=n.getContext("2d").getImageData(0,0,t,s).data)}else i=e.data;return new si(t,s,i)}},Ir=`"use strict";(()=>{var O={SCALE_UP:"lut.scaleup"};var _=[new Float32Array(3),new Float32Array(3)],n=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],Z=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];function d(a,t,r,m){let i=r[0]-t[0],e=r[1]-t[1],y=r[2]-t[2],h=a[0]-t[0],A=a[1]-t[1],w=a[2]-t[2],c=e*w-y*A,l=y*h-i*w,x=i*A-e*h,u=Math.sqrt(c*c+l*l+x*x),b=u*.5,s=c/u,F=l/u,f=x/u,p=-(a[0]*s+a[1]*F+a[2]*f),M=m[0]*s+m[1]*F+m[2]*f;return Math.abs(M+p)*b/3}function V(a,t,r,m,i,e){let y=(r+m*t+i*t*t)*4;e[0]=a[y+0],e[1]=a[y+1],e[2]=a[y+2]}function k(a,t,r,m,i,e){let y=r*(t-1),h=m*(t-1),A=i*(t-1),w=Math.floor(y),c=Math.floor(h),l=Math.floor(A),x=Math.ceil(y),u=Math.ceil(h),b=Math.ceil(A),s=y-w,F=h-c,f=A-l;if(w===y&&c===h&&l===A)V(a,t,y,h,A,e);else{let p;s>=F&&F>=f?p=Z[0]:s>=f&&f>=F?p=Z[1]:f>=s&&s>=F?p=Z[2]:F>=s&&s>=f?p=Z[3]:F>=f&&f>=s?p=Z[4]:f>=F&&F>=s&&(p=Z[5]);let[M,g,X,Y]=p,P=_[0];P[0]=s,P[1]=F,P[2]=f;let o=_[1],L=x-w,S=u-c,U=b-l;o[0]=L*M[0]+w,o[1]=S*M[1]+c,o[2]=U*M[2]+l,V(a,t,o[0],o[1],o[2],n[0]),o[0]=L*g[0]+w,o[1]=S*g[1]+c,o[2]=U*g[2]+l,V(a,t,o[0],o[1],o[2],n[1]),o[0]=L*X[0]+w,o[1]=S*X[1]+c,o[2]=U*X[2]+l,V(a,t,o[0],o[1],o[2],n[2]),o[0]=L*Y[0]+w,o[1]=S*Y[1]+c,o[2]=U*Y[2]+l,V(a,t,o[0],o[1],o[2],n[3]);let T=d(g,X,Y,P)*6,q=d(M,X,Y,P)*6,C=d(M,g,Y,P)*6,E=d(M,g,X,P)*6;n[0][0]*=T,n[0][1]*=T,n[0][2]*=T,n[1][0]*=q,n[1][1]*=q,n[1][2]*=q,n[2][0]*=C,n[2][1]*=C,n[2][2]*=C,n[3][0]*=E,n[3][1]*=E,n[3][2]*=E,e[0]=n[0][0]+n[1][0]+n[2][0]+n[3][0],e[1]=n[0][1]+n[1][1]+n[2][1]+n[3][1],e[2]=n[0][2]+n[1][2]+n[2][2]+n[3][2]}}var v=class{static expand(t,r){let m=Math.cbrt(t.length/4),i=new Float32Array(3),e=new t.constructor(r**3*4),y=t instanceof Uint8Array?255:1,h=r**2,A=1/(r-1);for(let w=0;w<r;++w)for(let c=0;c<r;++c)for(let l=0;l<r;++l){let x=l*A,u=c*A,b=w*A,s=Math.round(l+c*r+w*h)*4;k(t,m,x,u,b,i),e[s+0]=i[0],e[s+1]=i[1],e[s+2]=i[2],e[s+3]=y}return e}};self.addEventListener("message",a=>{let t=a.data,r=t.data;switch(t.operation){case O.SCALE_UP:r=v.expand(r,t.size);break}postMessage(r,[r.buffer]),close()});})();
`,fs=new D,Cr=class dt extends Ne{constructor(e,t){super(e,t,t,t),this.type=ee,this.format=ge,this.minFilter=Y,this.magFilter=Y,this.wrapS=Qe,this.wrapT=Qe,this.wrapR=Qe,this.unpackAlignment=1,this.needsUpdate=!0,this.colorSpace=ie,this.domainMin=new T(0,0,0),this.domainMax=new T(1,1,1)}get isLookupTexture3D(){return!0}scaleUp(e,t=!0){const s=this.image;let i;return e<=s.width?i=Promise.reject(new Error("The target size must be greater than the current size")):i=new Promise((n,r)=>{const a=URL.createObjectURL(new Blob([Ir],{type:"text/javascript"})),A=new Worker(a);A.addEventListener("error",h=>r(h.error)),A.addEventListener("message",h=>{const d=new dt(h.data,e);this.colorSpace=d.colorSpace,d.type=this.type,d.name=this.name,URL.revokeObjectURL(a),n(d)});const l=t?[s.data.buffer]:[];A.postMessage({operation:fr.SCALE_UP,data:s.data,size:e},l)}),i}applyLUT(e){const t=this.image,s=e.image,i=Math.min(t.width,t.height,t.depth),n=Math.min(s.width,s.height,s.depth);if(i!==n)console.error("Size mismatch");else if(e.type!==ee||this.type!==ee)console.error("Both LUTs must be FloatType textures");else if(e.format!==ge||this.format!==ge)console.error("Both LUTs must be RGBA textures");else{const r=t.data,a=s.data,A=i,l=A**2,h=A-1;for(let d=0,u=A**3;d<u;++d){const g=d*4,p=r[g+0]*h,f=r[g+1]*h,m=r[g+2]*h,I=Math.round(p+f*A+m*l)*4;r[g+0]=a[I+0],r[g+1]=a[I+1],r[g+2]=a[I+2]}this.needsUpdate=!0}return this}convertToUint8(){if(this.type===ee){const e=this.image.data,t=new Uint8Array(e.length);for(let s=0,i=e.length;s<i;++s)t[s]=e[s]*255+.5;this.image.data=t,this.type=_,this.needsUpdate=!0}return this}convertToFloat(){if(this.type===_){const e=this.image.data,t=new Float32Array(e.length);for(let s=0,i=e.length;s<i;++s)t[s]=e[s]/255;this.image.data=t,this.type=ee,this.needsUpdate=!0}return this}convertToRGBA(){return console.warn("LookupTexture","convertToRGBA() is deprecated, LUTs are now RGBA by default"),this}convertLinearToSRGB(){const e=this.image.data;if(this.type===ee){for(let t=0,s=e.length;t<s;t+=4)fs.fromArray(e,t).convertLinearToSRGB().toArray(e,t);this.colorSpace=P,this.needsUpdate=!0}else console.error("Color space conversion requires FloatType data");return this}convertSRGBToLinear(){const e=this.image.data;if(this.type===ee){for(let t=0,s=e.length;t<s;t+=4)fs.fromArray(e,t).convertSRGBToLinear().toArray(e,t);this.colorSpace=ie,this.needsUpdate=!0}else console.error("Color space conversion requires FloatType data");return this}toDataTexture(){const e=this.image.width,t=this.image.height*this.image.depth,s=new Et(this.image.data,e,t);return s.name=this.name,s.type=this.type,s.format=this.format,s.minFilter=Y,s.magFilter=Y,s.wrapS=this.wrapS,s.wrapT=this.wrapT,s.generateMipmaps=!1,s.needsUpdate=!0,this.colorSpace=s.colorSpace,s}static from(e){const t=e.image,{width:s,height:i}=t,n=Math.min(s,i);let r;if(t instanceof Image){const l=mr.from(t).data;if(s>i){r=new Uint8Array(l.length);for(let h=0;h<n;++h)for(let d=0;d<n;++d)for(let u=0;u<n;++u){const g=(u+h*n+d*n*n)*4,p=(u+d*n+h*n*n)*4;r[p+0]=l[g+0],r[p+1]=l[g+1],r[p+2]=l[g+2],r[p+3]=l[g+3]}}else r=new Uint8Array(l.buffer)}else r=t.data.slice();const a=new dt(r,n);return a.type=e.type,a.name=e.name,e.colorSpace=a.colorSpace,a}static createNeutral(e){const t=new Float32Array(e**3*4),s=e**2,i=1/(e-1);for(let r=0;r<e;++r)for(let a=0;a<e;++a)for(let A=0;A<e;++A){const l=(r+a*e+A*s)*4;t[l+0]=r*i,t[l+1]=a*i,t[l+2]=A*i,t[l+3]=1}const n=new dt(t,e);return n.name="neutral",n}},Er=`uniform vec3 scale;uniform vec3 offset;
#ifdef CUSTOM_INPUT_DOMAIN
uniform vec3 domainMin;uniform vec3 domainMax;
#endif
#ifdef LUT_3D
#ifdef LUT_PRECISION_HIGH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler3D lut;
#else
uniform mediump sampler3D lut;
#endif
#else
uniform lowp sampler3D lut;
#endif
vec4 applyLUT(const in vec3 rgb){
#ifdef TETRAHEDRAL_INTERPOLATION
vec3 p=floor(rgb);vec3 f=rgb-p;vec3 v1=(p+0.5)*LUT_TEXEL_WIDTH;vec3 v4=(p+1.5)*LUT_TEXEL_WIDTH;vec3 v2,v3;vec3 frac;if(f.r>=f.g){if(f.g>f.b){frac=f.rgb;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else if(f.r>=f.b){frac=f.rbg;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v1.y,v4.z);}else{frac=f.brg;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v4.x,v1.y,v4.z);}}else{if(f.b>f.g){frac=f.bgr;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v1.x,v4.y,v4.z);}else if(f.r>=f.b){frac=f.grb;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else{frac=f.gbr;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v1.x,v4.y,v4.z);}}vec4 n1=texture(lut,v1);vec4 n2=texture(lut,v2);vec4 n3=texture(lut,v3);vec4 n4=texture(lut,v4);vec4 weights=vec4(1.0-frac.x,frac.x-frac.y,frac.y-frac.z,frac.z);vec4 result=weights*mat4(vec4(n1.r,n2.r,n3.r,n4.r),vec4(n1.g,n2.g,n3.g,n4.g),vec4(n1.b,n2.b,n3.b,n4.b),vec4(1.0));return vec4(result.rgb,1.0);
#else
return texture(lut,rgb);
#endif
}
#else
#ifdef LUT_PRECISION_HIGH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D lut;
#else
uniform mediump sampler2D lut;
#endif
#else
uniform lowp sampler2D lut;
#endif
vec4 applyLUT(const in vec3 rgb){float slice=rgb.b*LUT_SIZE;float slice0=floor(slice);float interp=slice-slice0;float centeredInterp=interp-0.5;float slice1=slice0+sign(centeredInterp);
#ifdef LUT_STRIP_HORIZONTAL
float xOffset=clamp(rgb.r*LUT_TEXEL_HEIGHT,LUT_TEXEL_WIDTH*0.5,LUT_TEXEL_HEIGHT-LUT_TEXEL_WIDTH*0.5);vec2 uv0=vec2(slice0*LUT_TEXEL_HEIGHT+xOffset,rgb.g);vec2 uv1=vec2(slice1*LUT_TEXEL_HEIGHT+xOffset,rgb.g);
#else
float yOffset=clamp(rgb.g*LUT_TEXEL_WIDTH,LUT_TEXEL_HEIGHT*0.5,LUT_TEXEL_WIDTH-LUT_TEXEL_HEIGHT*0.5);vec2 uv0=vec2(rgb.r,slice0*LUT_TEXEL_WIDTH+yOffset);vec2 uv1=vec2(rgb.r,slice1*LUT_TEXEL_WIDTH+yOffset);
#endif
vec4 sample0=texture2D(lut,uv0);vec4 sample1=texture2D(lut,uv1);return mix(sample0,sample1,abs(centeredInterp));}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 c=inputColor.rgb;
#ifdef CUSTOM_INPUT_DOMAIN
if(c.r>=domainMin.r&&c.g>=domainMin.g&&c.b>=domainMin.b&&c.r<=domainMax.r&&c.g<=domainMax.g&&c.b<=domainMax.b){c=applyLUT(scale*c+offset).rgb;}else{c=inputColor.rgb;}
#else
#if !defined(LUT_3D) || defined(TETRAHEDRAL_INTERPOLATION)
c=clamp(c,0.0,1.0);
#endif
c=applyLUT(scale*c+offset).rgb;
#endif
outputColor=vec4(c,inputColor.a);}`,vr=class extends wt{constructor(o,{blendFunction:e=L.SRC,tetrahedralInterpolation:t=!1,inputColorSpace:s=P}={}){super("LUT3DEffect",Er,{blendFunction:e,uniforms:new Map([["lut",new k(null)],["scale",new k(new T)],["offset",new k(new T)],["domainMin",new k(null)],["domainMax",new k(null)]])}),this.tetrahedralInterpolation=t,this.inputColorSpace=s,this.lut=o}get lut(){return this.uniforms.get("lut").value}set lut(o){const e=this.defines,t=this.uniforms;if(this.lut!==o&&(t.get("lut").value=o,o!==null)){const s=o.image,i=this.tetrahedralInterpolation;if(e.clear(),e.set("LUT_SIZE",Math.min(s.width,s.height).toFixed(16)),e.set("LUT_TEXEL_WIDTH",(1/s.width).toFixed(16)),e.set("LUT_TEXEL_HEIGHT",(1/s.height).toFixed(16)),t.get("domainMin").value=null,t.get("domainMax").value=null,(o.type===ee||o.type===ne)&&e.set("LUT_PRECISION_HIGH","1"),s.width>s.height?e.set("LUT_STRIP_HORIZONTAL","1"):o instanceof Ne&&e.set("LUT_3D","1"),o instanceof Cr){const n=o.domainMin,r=o.domainMax;(n.x!==0||n.y!==0||n.z!==0||r.x!==1||r.y!==1||r.z!==1)&&(e.set("CUSTOM_INPUT_DOMAIN","1"),t.get("domainMin").value=n.clone(),t.get("domainMax").value=r.clone())}this.tetrahedralInterpolation=i}}getLUT(){return this.lut}setLUT(o){this.lut=o}updateScaleOffset(){const o=this.lut;if(o!==null){const e=Math.min(o.image.width,o.image.height),t=this.uniforms.get("scale").value,s=this.uniforms.get("offset").value;if(this.tetrahedralInterpolation&&o instanceof Ne)if(this.defines.has("CUSTOM_INPUT_DOMAIN")){const i=o.domainMax.clone().sub(o.domainMin);t.setScalar(e-1).divide(i),s.copy(o.domainMin).negate().multiply(t)}else t.setScalar(e-1),s.setScalar(0);else if(this.defines.has("CUSTOM_INPUT_DOMAIN")){const i=o.domainMax.clone().sub(o.domainMin).multiplyScalar(e);t.setScalar(e-1).divide(i),s.copy(o.domainMin).negate().multiply(t).addScalar(1/(2*e))}else t.setScalar((e-1)/e),s.setScalar(1/(2*e))}}configureTetrahedralInterpolation(){const o=this.lut;o!==null&&(o.minFilter=Y,o.magFilter=Y,this.tetrahedralInterpolation&&(o instanceof Ne?(o.minFilter=Ye,o.magFilter=Ye):console.warn("Tetrahedral interpolation requires a 3D texture")),o.needsUpdate=!0)}get tetrahedralInterpolation(){return this.defines.has("TETRAHEDRAL_INTERPOLATION")}set tetrahedralInterpolation(o){o?this.defines.set("TETRAHEDRAL_INTERPOLATION","1"):this.defines.delete("TETRAHEDRAL_INTERPOLATION"),this.configureTetrahedralInterpolation(),this.updateScaleOffset(),this.setChanged()}setTetrahedralInterpolationEnabled(o){this.tetrahedralInterpolation=o}},Br=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,yr="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",wr=class extends Z{constructor(o,e,t,s,i=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Us.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new k(null),depthBuffer:new k(null),resolution:new k(new O),texelSize:new k(new O),cameraNear:new k(.3),cameraFar:new k(1e3),aspect:new k(1),time:new k(0)},blending:Ke,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:i}),o&&this.setShaderParts(o),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(s)}set inputBuffer(o){this.uniforms.inputBuffer.value=o}setInputBuffer(o){this.uniforms.inputBuffer.value=o}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(o){this.uniforms.depthBuffer.value=o}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(o){this.defines.DEPTH_PACKING=o.toFixed(0),this.needsUpdate=!0}setDepthBuffer(o,e=Ct){this.depthBuffer=o,this.depthPacking=e}setShaderData(o){this.setShaderParts(o.shaderParts),this.setDefines(o.defines),this.setUniforms(o.uniforms),this.setExtensions(o.extensions)}setShaderParts(o){return this.fragmentShader=Br.replace(H.FRAGMENT_HEAD,o.get(H.FRAGMENT_HEAD)||"").replace(H.FRAGMENT_MAIN_UV,o.get(H.FRAGMENT_MAIN_UV)||"").replace(H.FRAGMENT_MAIN_IMAGE,o.get(H.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=yr.replace(H.VERTEX_HEAD,o.get(H.VERTEX_HEAD)||"").replace(H.VERTEX_MAIN_SUPPORT,o.get(H.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(o){for(const e of o.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(o){for(const e of o.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(o){this.extensions={};for(const e of o)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(o){this.encodeOutput!==o&&(o?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(o){return this.encodeOutput}setOutputEncodingEnabled(o){this.encodeOutput=o}get time(){return this.uniforms.time.value}set time(o){this.uniforms.time.value=o}setDeltaTime(o){this.uniforms.time.value+=o}adoptCameraSettings(o){this.copyCameraSettings(o)}copyCameraSettings(o){o&&(this.uniforms.cameraNear.value=o.near,this.uniforms.cameraFar.value=o.far,o instanceof vt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(o,e){const t=this.uniforms;t.resolution.value.set(o,e),t.texelSize.value.set(1/o,1/e),t.aspect.value=o/e}static get Section(){return H}};function ms(o,e,t){for(const s of e){const i="$1"+o+s.charAt(0).toUpperCase()+s.slice(1),n=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const r of t.entries())r[1]!==null&&t.set(r[0],r[1].replace(n,i))}}function br(o,e,t){let s=e.getFragmentShader(),i=e.getVertexShader();const n=s!==void 0&&/mainImage/.test(s),r=s!==void 0&&/mainUv/.test(s);if(t.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(r&&(t.attributes&Me.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!n&&!r)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const a=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,A=t.shaderParts;let l=A.get(H.FRAGMENT_HEAD)||"",h=A.get(H.FRAGMENT_MAIN_UV)||"",d=A.get(H.FRAGMENT_MAIN_IMAGE)||"",u=A.get(H.VERTEX_HEAD)||"",g=A.get(H.VERTEX_MAIN_SUPPORT)||"";const p=new Set,f=new Set;if(r&&(h+=`	${o}MainUv(UV);
`,t.uvTransformation=!0),i!==null&&/mainSupport/.test(i)){const C=/mainSupport *\([\w\s]*?uv\s*?\)/.test(i);g+=`	${o}MainSupport(`,g+=C?`vUv);
`:`);
`;for(const E of i.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const y of E[1].split(/\s*,\s*/))t.varyings.add(y),p.add(y),f.add(y);for(const E of i.matchAll(a))f.add(E[1])}for(const C of s.matchAll(a))f.add(C[1]);for(const C of e.defines.keys())f.add(C.replace(/\([\w\s,]*\)/g,""));for(const C of e.uniforms.keys())f.add(C);f.delete("while"),f.delete("for"),f.delete("if"),e.uniforms.forEach((C,E)=>t.uniforms.set(o+E.charAt(0).toUpperCase()+E.slice(1),C)),e.defines.forEach((C,E)=>t.defines.set(o+E.charAt(0).toUpperCase()+E.slice(1),C));const m=new Map([["fragment",s],["vertex",i]]);ms(o,f,t.defines),ms(o,f,m),s=m.get("fragment"),i=m.get("vertex");const I=e.blendMode;if(t.blendModes.set(I.blendFunction,I),n){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(d+=e.inputColorSpace===P?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==gt?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const C=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${o}MainImage(color0, UV, `,(t.attributes&Me.DEPTH)!==0&&C.test(s)&&(d+="depth, ",t.readDepth=!0),d+=`color1);
	`;const E=o+"BlendOpacity";t.uniforms.set(E,I.opacity),d+=`color0 = blend${I.blendFunction}(color0, color1, ${E});

	`,l+=`uniform float ${E};

`}if(l+=s+`
`,i!==null&&(u+=i+`
`),A.set(H.FRAGMENT_HEAD,l),A.set(H.FRAGMENT_MAIN_UV,h),A.set(H.FRAGMENT_MAIN_IMAGE,d),A.set(H.VERTEX_HEAD,u),A.set(H.VERTEX_MAIN_SUPPORT,g),e.extensions!==null)for(const C of e.extensions)t.extensions.add(C)}}var xr=class extends fe{constructor(o,...e){super("EffectPass"),this.fullscreenMaterial=new wr(null,null,null,o),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(o){for(const e of this.effects)e.mainScene=o}set mainCamera(o){this.fullscreenMaterial.copyCameraSettings(o);for(const e of this.effects)e.mainCamera=o}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(o){this.fullscreenMaterial.encodeOutput=o}get dithering(){return this.fullscreenMaterial.dithering}set dithering(o){const e=this.fullscreenMaterial;e.dithering=o,e.needsUpdate=!0}setEffects(o){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=o.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const o=new pn;let e=0;for(const r of this.effects)if(r.blendMode.blendFunction===L.DST)o.attributes|=r.getAttributes()&Me.DEPTH;else{if((o.attributes&r.getAttributes()&Me.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${r.name})`);br("e"+e++,r,o)}let t=o.shaderParts.get(H.FRAGMENT_HEAD),s=o.shaderParts.get(H.FRAGMENT_MAIN_IMAGE),i=o.shaderParts.get(H.FRAGMENT_MAIN_UV);const n=/\bblend\b/g;for(const r of o.blendModes.values())t+=r.getShaderCode().replace(n,`blend${r.blendFunction}`)+`
`;(o.attributes&Me.DEPTH)!==0?(o.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,o.colorSpace===P&&(s+=`color0 = sRGBToLinear(color0);
	`),o.uvTransformation?(i=`vec2 transformedUv = vUv;
`+i,o.defines.set("UV","transformedUv")):o.defines.set("UV","vUv"),o.shaderParts.set(H.FRAGMENT_HEAD,t),o.shaderParts.set(H.FRAGMENT_MAIN_IMAGE,s),o.shaderParts.set(H.FRAGMENT_MAIN_UV,i);for(const[r,a]of o.shaderParts)a!==null&&o.shaderParts.set(r,a.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(o)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(o,e=Ct){this.fullscreenMaterial.depthBuffer=o,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(o,e)}render(o,e,t,s,i){for(const n of this.effects)n.update(o,e,s);if(!this.skipRendering||this.renderToScreen){const n=this.fullscreenMaterial;n.inputBuffer=e.texture,n.time+=s*this.timeScale,o.setRenderTarget(this.renderToScreen?null:t),o.render(this.scene,this.camera)}}setSize(o,e){this.fullscreenMaterial.setSize(o,e);for(const t of this.effects)t.setSize(o,e)}initialize(o,e,t){this.renderer=o;for(const s of this.effects)s.initialize(o,e,t);this.updateMaterial(),t!==void 0&&t!==_&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const o of this.effects)o.removeEventListener("change",this.listener),o.dispose()}handleEvent(o){switch(o.type){case"change":this.recompile();break}}};const Sr=`/**
 * Gravitational Lensing Fragment Shader
 * Screen-space distortion effect inspired by Schwarzschild metric
 * Activates when hands are close (creating pre-explosion tension)
 * 
 * Implements postprocessing library's Effect interface with mainImage
 * Compatible with convolution effects (bloom, chromatic aberration, etc.)
 */

uniform vec2 uLensCenter;      // Center of lensing effect (screen space 0-1)
uniform float uLensIntensity;  // Distortion strength (0-1)
uniform vec2 uResolution;      // Screen resolution for aspect ratio correction

/**
 * Main image processing function
 * Applies gravitational lensing distortion by sampling at distorted UV coordinates
 */
void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // Early exit if no distortion
  if (uLensIntensity <= 0.0) {
    outputColor = inputColor;
    return;
  }

  // Apply aspect ratio correction
  vec2 aspectCorrection = vec2(uResolution.x / uResolution.y, 1.0);
  
  // Calculate distance from lens center
  vec2 centered = (uv - uLensCenter) * aspectCorrection;
  float dist = length(centered);
  
  // Schwarzschild-inspired distortion formula
  // Creates warping effect similar to a black hole
  // Stronger pull toward center, weakens with distance
  float distortionFactor = uLensIntensity / (1.0 + dist * 5.0);
  
  // Apply radial distortion (pulling effect toward center)
  vec2 distortion = centered * distortionFactor * 0.15;
  
  // Note: We use inputColor directly since UV transformation is not allowed with convolution
  // The distortion is visual-only through vignette and color modification
  vec3 color = inputColor.rgb;
  
  // Add subtle vignette around lens center for gravitational darkening effect
  float vignette = smoothstep(0.0, 0.5, dist) * 0.15 * uLensIntensity;
  color *= (1.0 - vignette);
  
  // Add subtle color shift (blue shift near center, red shift at edges)
  // Simulates gravitational redshift/blueshift
  float colorShift = (1.0 - dist) * uLensIntensity * 0.1;
  color.b += colorShift;      // Increase blue near center
  color.r += (1.0 - colorShift) * uLensIntensity * 0.05; // Slight red at edges
  
  outputColor = vec4(color, inputColor.a);
}
`;class Qr extends wt{constructor(){super("GravitationalLensingEffect",Sr,{blendFunction:L.NORMAL,uniforms:new Map([["uLensCenter",new k(new O(.5,.5))],["uLensIntensity",new k(0)],["uResolution",new k(new O(1920,1080))]])})}setLensCenter(e){this.uniforms.get("uLensCenter").value.copy(e)}setIntensity(e){const t=He.clamp(e,0,1);this.uniforms.get("uLensIntensity").value=t}setResolution(e,t){this.uniforms.get("uResolution").value.set(e,t)}getIntensity(){return this.uniforms.get("uLensIntensity").value}}const Mr={enableBloom:!0,bloomIntensity:1.5,bloomLuminanceThreshold:.4,bloomRadius:.8,enableChromaticAberration:!0,chromaticAberrationOffset:.001,enableColorGrading:!0,colorGradingIntensity:.8,enableGravitationalLensing:!0};class ii{constructor(e,t,s,i={}){c(this,"composer");c(this,"config");c(this,"bloomEffect",null);c(this,"chromaticAberrationEffect",null);c(this,"colorGradingEffect",null);c(this,"gravitationalLensingEffect",null);c(this,"scene");c(this,"camera");this.scene=t,this.camera=s,this.config={...Mr,...i},this.composer=new gn(e,{frameBufferType:ne}),this.setupPasses()}setupPasses(){const e=new pr(this.scene,this.camera);this.composer.addPass(e);const t=[];if(this.config.enableBloom&&(this.bloomEffect=new hr({intensity:this.config.bloomIntensity,luminanceThreshold:this.config.bloomLuminanceThreshold,luminanceSmoothing:.5,radius:this.config.bloomRadius,kernelSize:bt.LARGE,blendFunction:L.SCREEN}),t.push(this.bloomEffect)),this.config.enableChromaticAberration&&(this.chromaticAberrationEffect=new gr({offset:new O(this.config.chromaticAberrationOffset,this.config.chromaticAberrationOffset),radialModulation:!0,modulationOffset:.2}),t.push(this.chromaticAberrationEffect)),this.config.enableColorGrading){const s=this.createCosmicLUT();this.colorGradingEffect=new vr(s,{blendFunction:L.NORMAL}),this.colorGradingEffect.blendMode.opacity.value=this.config.colorGradingIntensity,t.push(this.colorGradingEffect)}if(this.config.enableGravitationalLensing&&(this.gravitationalLensingEffect=new Qr,t.push(this.gravitationalLensingEffect)),t.length>0){const s=new xr(this.camera,...t);this.composer.addPass(s)}}createCosmicLUT(){const t=new Uint8Array(131072),s=(a,A,l)=>{const h=Math.max(a,A,l),d=Math.min(a,A,l),u=h-d,g=(h+d)/2;let p=0;u!==0&&(p=g>.5?u/(2-h-d):u/(h+d));let f=0;return u!==0&&(h===a?f=((A-l)/u+(A<l?6:0))/6:h===A?f=((l-a)/u+2)/6:f=((a-A)/u+4)/6),[f,p,g]},i=(a,A,l)=>{const h=(m,I,C)=>(C<0&&(C+=1),C>1&&(C-=1),C<.16666666666666666?m+(I-m)*6*C:C<.5?I:C<.6666666666666666?m+(I-m)*(.6666666666666666-C)*6:m);if(A===0)return[l,l,l];const d=l<.5?l*(1+A):l+A-l*A,u=2*l-d,g=h(u,d,a+1/3),p=h(u,d,a),f=h(u,d,a-1/3);return[g,p,f]},n=a=>{const A=Math.max(0,Math.min(1,a));return A*A*(3-2*A)};for(let a=0;a<32;a++)for(let A=0;A<32;A++)for(let l=0;l<32;l++){const h=(a*32*32+A*32+l)*4,d=l/31,u=A/31,g=a/31;let[p,f,m]=s(d,u,g);const I=p*360;I<60?p=(I+(300-I)*.5)/360:I<180&&(p=(I+(210-I)*.6)/360),f=Math.min(1,f*1.8),m=n(m);let[C,E,y]=i(p,f,m);C*=.75,E*=.85,y*=1.3;const b=Math.min(255,Math.floor(C*255)),v=Math.min(255,Math.floor(E*255)),B=Math.min(255,Math.floor(y*255));t[h+0]=b,t[h+1]=v,t[h+2]=B,t[h+3]=255}const r=new Ne(t,32,32,32);return r.format=ge,r.type=_,r.minFilter=Y,r.magFilter=Y,r.wrapS=Qe,r.wrapR=Qe,r.wrapT=Qe,r.unpackAlignment=1,r.needsUpdate=!0,r}render(e){this.composer.render(e)}resize(e,t){this.composer.setSize(e,t)}setBloomIntensity(e){console.warn("[PostProcessingManager] Runtime bloom changes not supported. Recreate manager with new config.")}setChromaticAberrationOffset(e){this.chromaticAberrationEffect&&this.chromaticAberrationEffect.offset.set(e,e)}setColorGradingIntensity(e){this.colorGradingEffect&&(this.colorGradingEffect.blendMode.opacity.value=e)}getConfig(){return{...this.config}}getGravitationalLensingEffect(){return this.gravitationalLensingEffect}dispose(){this.composer.dispose(),this.bloomEffect?.dispose(),this.chromaticAberrationEffect?.dispose(),this.colorGradingEffect?.dispose(),this.gravitationalLensingEffect?.dispose(),console.log("[PostProcessingManager] Disposed")}}const Tr=`
  attribute float aSize;
  attribute float aDistance;    // Distance from center (0-1 normalized)
  attribute float aBrightness;  // Base brightness
  attribute float aSeed;        // Random seed for variation
  
  uniform float uTime;
  uniform float uScale;
  uniform float uSize;
  uniform float uExplosionState; // 0=normal, 1=imploding, 2=singularity, 3=exploding, 4=fading
  uniform float uExplosionTime;  // Time since explosion started
  
  varying float vBrightness;
  varying float vTemperature;  // For subtle color variation (cool/warm stars)
  varying float vAlpha;
  
  // 3D Simplex noise function for organic turbulence
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vTemperature = aSeed;
    
    // Store original position for rotation calculation
    vec3 pos = position;
    
    // TURBULENCE: Add organic flowing motion using 3D noise
    // Sample noise at different scales for multi-layered turbulence
    float timeScale = uTime * 0.08;
    vec3 noisePos = pos * 0.4 + vec3(timeScale, timeScale * 0.5, 0.0);
    
    // Multi-octave noise for detailed turbulence
    float turbulence1 = snoise(noisePos) * 0.08;
    float turbulence2 = snoise(noisePos * 2.0 + vec3(100.0)) * 0.04;
    float turbulence3 = snoise(noisePos * 4.0 + vec3(200.0)) * 0.02;
    float totalTurbulence = turbulence1 + turbulence2 + turbulence3;
    
    // Apply turbulence as spiral flow (vortex effect)
    float dist2D = length(pos.xz);
    float angle = atan(pos.z, pos.x);
    float turbulentAngle = angle + totalTurbulence * (1.0 - aDistance * 0.5);
    
    // Turbulent offset (stronger near core, creates swirling motion)
    vec3 turbulentOffset = vec3(
      cos(turbulentAngle) * dist2D - pos.x,
      totalTurbulence * 0.3,
      sin(turbulentAngle) * dist2D - pos.z
    ) * 0.15 * (1.0 - aDistance * 0.6);
    
    pos += turbulentOffset;
    
    // DIFFERENTIAL ROTATION: Inner stars orbit faster (like real galaxies)
    // Keplerian-like: angular velocity ~ 1/sqrt(r)
    float orbitalSpeed = 0.15 / (aDistance + 0.12);
    float rotationAngle = uTime * orbitalSpeed;
    
    // Rotate around Y axis (galaxy plane)
    float cosA = cos(rotationAngle);
    float sinA = sin(rotationAngle);
    vec3 rotatedPos = vec3(
      pos.x * cosA - pos.z * sinA,
      pos.y,
      pos.x * sinA + pos.z * cosA
    );
    
    // === BIG BANG EXPLOSION EFFECTS ===
    vec3 explosionPos = rotatedPos;
    float explosionBrightness = 1.0;
    
    if (uExplosionState >= 1.0) {
      // Direction from center to particle
      vec3 centerToParticle = normalize(rotatedPos + vec3(0.001)); // avoid zero
      float distFromCenter = length(rotatedPos);
      
      // IMPLODING (hands closing): particles pulled toward center
      if (uExplosionState >= 1.0 && uExplosionState < 2.0) {
        float implosionStrength = (2.0 - uExplosionState); // 1.0 → 0.0
        explosionPos *= (1.0 - implosionStrength * 0.5); // shrink toward center
        explosionBrightness *= (1.0 + implosionStrength * 0.8); // get brighter
      }
      
      // SINGULARITY (at threshold): vibrating bright point
      if (uExplosionState >= 2.0 && uExplosionState < 3.0) {
        // Intense vibration
        float vibrationFreq = 25.0 + aSeed * 15.0;
        float vibrationAmp = 0.03 * (1.0 + aSeed);
        vec3 vibration = centerToParticle * sin(uExplosionTime * vibrationFreq) * vibrationAmp;
        explosionPos = vec3(0.0) + vibration; // collapse to vibrating point
        explosionBrightness *= 3.0; // extremely bright
      }
      
      // EXPLODING (Big Bang!): particles shoot outward
      if (uExplosionState >= 3.0 && uExplosionState < 4.0) {
        float explosionSpeed = 8.0 + aSeed * 8.0; // vary speed per particle
        float explosionProgress = uExplosionTime; // 0→∞ seconds
        
        // Deceleration over time (v = v0 * decay)
        float decayFactor = 0.25;
        float velocity = explosionSpeed * exp(-decayFactor * explosionProgress);
        
        // Radial explosion offset
        vec3 explosionOffset = centerToParticle * velocity * explosionProgress;
        explosionPos = vec3(0.0) + explosionOffset;
        
        // Brightness fades as particles disperse
        explosionBrightness *= max(0.2, 1.0 - explosionProgress * 0.4);
      }
      
      // FADING: drifting and disappearing
      if (uExplosionState >= 4.0) {
        float fadeSpeed = 3.0 + aSeed * 4.0;
        float fadeProgress = uExplosionTime;
        
        // Slow drift outward
        vec3 driftOffset = centerToParticle * fadeSpeed * fadeProgress * 0.3;
        explosionPos = vec3(0.0) + driftOffset;
        
        // Exponential fade to zero
        float fadeOut = exp(-fadeProgress * 1.5);
        explosionBrightness *= fadeOut;
        vAlpha *= fadeOut;
      }
    }
    
    // Apply scale
    vec3 scaledPos = explosionPos * uScale;
    
    vec4 mvPosition = modelViewMatrix * vec4(scaledPos, 1.0);
    
    // TWINKLING: Dramatic brightness variation for sparkling stars
    float twinkleSpeed = 1.5 + aSeed * 5.0;
    float twinklePhase = aSeed * 6.28318;
    float twinkle = 0.4 + 0.6 * sin(uTime * twinkleSpeed + twinklePhase);
    
    // Add secondary slower twinkle for more complex animation
    float slowTwinkle = 0.8 + 0.2 * sin(uTime * 0.5 + aSeed * 3.14159);
    twinkle *= slowTwinkle;
    
    // Brightness based on distance (brighter at center) + twinkle + explosion
    vBrightness = aBrightness * twinkle * 2.5 * explosionBrightness;
    
    // Alpha for depth fade
    vAlpha = 1.0 - aDistance * 0.2;
    
    // Size: MICRO-TINY stars for 2 MILLION particle density
    float perspectiveSize = aSize * uSize * (200.0 / -mvPosition.z);
    gl_PointSize = perspectiveSize * uScale * (0.65 + twinkle * 0.25);
    gl_PointSize = clamp(gl_PointSize, 0.25, 2.5); // MICRO-stars for 2M density!
    
    gl_Position = projectionMatrix * mvPosition;
  }
`,Rr=`
  varying float vBrightness;
  varying float vTemperature;
  varying float vAlpha;
  
  void main() {
    // Circular point with soft gaussian-like falloff
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    // Discard outside circle
    if (dist > 0.5) discard;
    
    // ULTRA INTENSE GLOW: Maximum brightness for brilliant stars
    float alpha = exp(-dist * dist * 7.0);
    
    // Extra POWERFUL halo for maximum luminous glow
    float halo = exp(-dist * 2.0) * 0.6;
    alpha = alpha + halo;
    
    // Apply brightness and depth alpha with BOOST
    alpha *= vBrightness * vAlpha * 1.3; // Strong brightness boost!
    
    // Discard very faint pixels
    if (alpha < 0.015) discard;
    
    // COLOR: VIBRANT COSMIC PALETTE based on temperature and brightness
    // Create dramatic color variation for maximum wow factor
    vec3 starColor;
    
    // Map vTemperature (0-1 from aSeed) to cosmic colors
    if (vTemperature < 0.25) {
      // Hot blue-white stars (O/B type)
      starColor = mix(
        vec3(0.7, 0.85, 1.0),  // Bright cyan-blue
        vec3(0.85, 0.92, 1.0), // Blue-white
        vTemperature * 4.0
      );
    } else if (vTemperature < 0.5) {
      // Purple-magenta stars
      starColor = mix(
        vec3(0.85, 0.7, 1.0),  // Light purple
        vec3(1.0, 0.6, 1.0),   // Bright magenta
        (vTemperature - 0.25) * 4.0
      );
    } else if (vTemperature < 0.75) {
      // Cyan-teal stars
      starColor = mix(
        vec3(0.6, 1.0, 1.0),   // Bright cyan
        vec3(0.7, 0.95, 1.0),  // Cyan-white
        (vTemperature - 0.5) * 4.0
      );
    } else {
      // Violet-blue stars
      starColor = mix(
        vec3(0.75, 0.8, 1.0),  // Pale blue
        vec3(0.8, 0.7, 1.0),   // Violet
        (vTemperature - 0.75) * 4.0
      );
    }
    
    // Boost color saturation for vibrant cosmic look
    vec3 white = vec3(1.0);
    starColor = mix(white, starColor, 0.7); // 70% color, 30% white for luminosity
    
    // Brightest stars get extra white glow (HDR-like effect)
    if (vBrightness > 0.85) {
      starColor = mix(starColor, white, (vBrightness - 0.85) / 0.15 * 0.4);
    }
    
    // Boost brightness for ULTRA-BRILLIANT stars
    starColor *= (1.0 + vBrightness * 0.5);
    
    gl_FragColor = vec4(starColor, alpha);
  }
`;class Dr{constructor(e,t={}){c(this,"scene");c(this,"camera");c(this,"renderer");c(this,"postProcessing",null);c(this,"galaxy",null);c(this,"geometry",null);c(this,"material",null);c(this,"uniforms");c(this,"config");c(this,"container");c(this,"animationId",null);c(this,"currentHandDistance",1);c(this,"explosionState",$.NORMAL);c(this,"explosionStartTime",0);c(this,"explosionInitialScale",1);c(this,"singularityDuration",.2);c(this,"explosionDuration",2);c(this,"fadeDuration",2.5);this.container=e,this.config={...rn,...t},this.uniforms={uTime:{value:0},uScale:{value:0},uSize:{value:this.config.particleSize},uExplosionState:{value:0},uExplosionTime:{value:0}},this.scene=new Je,this.camera=new vt(75,e.clientWidth/e.clientHeight,.1,100),this.camera.position.z=6,this.renderer=new Gs({antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="absolute",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",this.renderer.domElement.style.pointerEvents="none",window.addEventListener("resize",this.handleResize.bind(this))}initialize(){this.generateGalaxy(),this.postProcessing=new ii(this.renderer,this.scene,this.camera,{enableBloom:!0,bloomIntensity:1.5,bloomLuminanceThreshold:.4,bloomRadius:.8,enableChromaticAberration:!0,chromaticAberrationOffset:.001,enableColorGrading:!0,colorGradingIntensity:.8,enableGravitationalLensing:!0})}generateGalaxy(){this.galaxy&&(this.scene.remove(this.galaxy),this.geometry?.dispose(),this.material?.dispose());const{particleCount:e,radius:t,randomness:s}=this.config;this.geometry=new pe;const i=Math.floor(e*.2),n=Math.floor(e*.15),r=e-i-n,a=e,A=new Float32Array(a*3),l=new Float32Array(a),h=new Float32Array(a),d=new Float32Array(a),u=new Float32Array(a);let g=0;for(let p=0;p<r;p++){const f=g*3,m=Math.pow(Math.random(),.25),I=m*t,C=Math.random()*Math.PI*2,E=(Math.random()-.5)*s*.05*m,y=I+E,b=Math.cos(C)*y,v=Math.sin(C)*y,B=.02*(1-m*.9),w=(Math.random()-.5)*B;A[f]=b,A[f+1]=w,A[f+2]=v;const x=.25+Math.random()*.6;l[g]=x,h[g]=m;const Q=m<.3?1.8:1,M=(1-m*.3)*Q,N=.95+Math.random()*.25;d[g]=M*N,u[g]=Math.random(),g++}for(let p=0;p<i;p++){const f=g*3,m=Math.pow(Math.random(),1)*t*.12,I=Math.random()*Math.PI*2,C=Math.cos(I)*m,E=Math.sin(I)*m,y=(Math.random()-.5)*.015;A[f]=C,A[f+1]=y,A[f+2]=E,l[g]=.4+Math.random()*.5,h[g]=m/t,d[g]=.95+Math.random()*.05,u[g]=Math.random(),g++}for(let p=0;p<n;p++){const f=g*3,m=.12+Math.pow(Math.random(),.8)*.13,I=m*t,C=Math.random()*Math.PI*2,E=Math.cos(C)*I,y=Math.sin(C)*I,b=(Math.random()-.5)*.025;A[f]=E,A[f+1]=b,A[f+2]=y,l[g]=.35+Math.random()*.4,h[g]=m,d[g]=.8+Math.random()*.15,u[g]=Math.random(),g++}this.geometry.setAttribute("position",new F(A,3)),this.geometry.setAttribute("aSize",new F(l,1)),this.geometry.setAttribute("aDistance",new F(h,1)),this.geometry.setAttribute("aBrightness",new F(d,1)),this.geometry.setAttribute("aSeed",new F(u,1)),this.material=new Z({uniforms:this.uniforms,vertexShader:Tr,fragmentShader:Rr,transparent:!0,blending:se,depthWrite:!1}),this.galaxy=new _e(this.geometry,this.material),this.galaxy.visible=!1,this.scene.add(this.galaxy)}setScale(e){this.uniforms.uScale.value=Math.max(0,Math.min(1,e))}setPosition(e,t,s){this.galaxy&&this.galaxy.position.set(e,t,s)}setRotation(e){this.galaxy&&this.galaxy.rotation.copy(e)}setVisible(e){this.galaxy&&(this.galaxy.visible=e)}show(){this.setVisible(!0)}hide(){this.setVisible(!1)}isVisible(){return this.galaxy?.visible??!1}setHandDistance(e){this.currentHandDistance=e}updateGravitationalLensing(){const e=this.postProcessing?.getGravitationalLensingEffect();if(!e)return;const t=.06,s=.08;let i=0;this.currentHandDistance>=t&&this.currentHandDistance<=s&&(i=1-(this.currentHandDistance-t)/(s-t)),e.setIntensity(i),e.setLensCenter(new O(.5,.5))}updateTime(e){this.uniforms.uTime.value+=e;const t=performance.now()/1e3;this.updateExplosion(t)}render(){const e=performance.now()/1e3;this.updateExplosion(e),this.updateGravitationalLensing(),this.postProcessing?this.postProcessing.render():this.renderer.render(this.scene,this.camera)}handleResize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.postProcessing){this.postProcessing.resize(e,t);const s=this.postProcessing.getGravitationalLensingEffect();s&&s.setResolution(this.renderer.domElement.width,this.renderer.domElement.height)}}setParticleCount(e){this.config.particleCount=e,this.generateGalaxy()}getScale(){return this.uniforms.uScale.value}getScene(){return this.scene}getCamera(){return this.camera}triggerExplosion(){(this.explosionState===$.NORMAL||this.explosionState===$.IMPLODING)&&(console.log("[GalaxyRenderer] Big Bang explosion triggered!"),this.explosionInitialScale=this.uniforms.uScale.value,this.setVisible(!0),this.explosionState=$.SINGULARITY,this.explosionStartTime=performance.now()/1e3,this.uniforms.uExplosionState.value=$.SINGULARITY,this.uniforms.uExplosionTime.value=0)}resetExplosion(){this.explosionState=$.NORMAL,this.explosionStartTime=0,this.uniforms.uExplosionState.value=$.NORMAL,this.uniforms.uExplosionTime.value=0}updateExplosion(e){if(this.explosionState===$.NORMAL)return;const t=e-this.explosionStartTime;switch(this.uniforms.uExplosionTime.value=t,this.explosionState){case $.SINGULARITY:{const s=Math.min(t/this.singularityDuration,1),i=this.explosionInitialScale*(1-s);this.setScale(i),t>=this.singularityDuration&&(console.log("[GalaxyRenderer] BOOM! Explosion started"),this.explosionState=$.EXPLODING,this.uniforms.uExplosionState.value=$.EXPLODING,this.explosionStartTime=e,this.uniforms.uExplosionTime.value=0);break}case $.EXPLODING:{const s=Math.min(t/this.explosionDuration,1);this.setScale(s*3),t>=this.explosionDuration&&(console.log("[GalaxyRenderer] Explosion fading..."),this.explosionState=$.FADING,this.uniforms.uExplosionState.value=$.FADING,this.explosionStartTime=e,this.uniforms.uExplosionTime.value=0);break}case $.FADING:t>=this.fadeDuration&&(console.log("[GalaxyRenderer] Explosion complete, clearing screen"),this.setVisible(!1),this.resetExplosion());break}}getExplosionState(){return this.explosionState}dispose(){window.removeEventListener("resize",this.handleResize.bind(this)),this.animationId!==null&&cancelAnimationFrame(this.animationId),this.postProcessing&&(this.postProcessing.dispose(),this.postProcessing=null),this.geometry?.dispose(),this.material?.dispose(),this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),console.log("[GalaxyRenderer] Disposed")}}const Pe={THUMB_TIP:4,INDEX_FINGER_MCP:5,INDEX_FINGER_TIP:8,MIDDLE_FINGER_MCP:9,RING_FINGER_MCP:13,PINKY_MCP:17},Fr={modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5};var oi=(o=>(o.PINCH="PINCH",o))(oi||{}),xe=(o=>(o.IDLE="IDLE",o.STARTED="STARTED",o.ACTIVE="ACTIVE",o.ENDED="ENDED",o))(xe||{});const Lr={pinch:{threshold:.035,releaseThreshold:.055,cooldownMs:800}},_r={particleCount:750,duration:1.5,initialVelocity:3,velocityDecay:.92,initialSize:.8,color:new D(16777215)};class kr{constructor(e={}){c(this,"config");c(this,"state");this.config={...Lr,...e},this.state=this.createInitialState()}createInitialState(){return{pinch:{left:{isActive:!1,lastTriggerTime:0,sustainedFrames:0},right:{isActive:!1,lastTriggerTime:0,sustainedFrames:0}}}}detect(e,t,s){const i=[];let n=null;for(let r=0;r<e.length;r++){const a=e[r],A=t[r]||"unknown",l=this.detectPinch(a,A,s);l&&(i.push(l),n=l)}return{events:i,pinch:n}}detectPinch(e,t,s){const i=e[Pe.THUMB_TIP],n=e[Pe.INDEX_FINGER_TIP],r=this.calculateDistance3D(i,n),a=t==="left"?"left":"right",A=this.state.pinch[a],l=A.isActive,h=r<this.config.pinch.threshold,d=r>this.config.pinch.releaseThreshold,u=s-A.lastTriggerTime>this.config.pinch.cooldownMs,g=3;h?A.sustainedFrames++:A.sustainedFrames=0;const p=A.sustainedFrames>=g;let f;if(!l&&p&&u)f=xe.STARTED,A.isActive=!0,A.lastTriggerTime=s;else if(l&&h)f=xe.ACTIVE;else if(l&&d)f=xe.ENDED,A.isActive=!1,A.sustainedFrames=0;else{if(!l&&!p)return null;if(f=l?xe.ACTIVE:xe.IDLE,f===xe.IDLE)return null}const m=(i.x+n.x)/2,I=(i.y+n.y)/2,C=(i.z+n.z)/2,E=new T(-(m-.5)*10,-(I-.5)*10,-C*10),y=Math.max(0,Math.min(1,1-r/this.config.pinch.releaseThreshold)),b={position:E,normalizedPosition:{x:m,y:I,z:C},distance:r,handedness:t,strength:y};return{type:oi.PINCH,state:f,data:b,timestamp:s}}calculateDistance3D(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}reset(){this.state=this.createInitialState()}getConfig(){return this.config}updateConfig(e){this.config={...this.config,...e}}}const Ur=`
  attribute float aAlpha;
  attribute float aSize;
  
  uniform float uTime;
  uniform float uPointSize;
  
  varying float vAlpha;
  
  void main() {
    vAlpha = aAlpha;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size with perspective
    float perspectiveSize = aSize * uPointSize * (200.0 / -mvPosition.z);
    gl_PointSize = clamp(perspectiveSize, 0.5, 8.0);
  }
`,Gr=`
  uniform vec3 uColor;
  
  varying float vAlpha;
  
  void main() {
    // Circular point with soft gaussian falloff
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    if (dist > 0.5) discard;
    
    // Gaussian falloff for soft particles
    float alpha = exp(-dist * dist * 6.0) * vAlpha;
    
    if (alpha < 0.01) discard;
    
    // Add glow halo
    float halo = exp(-dist * 2.5) * 0.4;
    alpha += halo * vAlpha;
    
    // Output with color
    gl_FragColor = vec4(uColor, alpha);
  }
`;class Pr{constructor(e,t={},s=5){c(this,"scene");c(this,"config");c(this,"geometry");c(this,"material");c(this,"points");c(this,"maxConcurrentBursts");c(this,"totalParticles");c(this,"particleData");c(this,"bursts",[]);c(this,"nextBurstId",0);c(this,"positionAttribute");c(this,"alphaAttribute");c(this,"sizeAttribute");c(this,"isActive",!1);this.scene=e,this.config={..._r,...t},this.maxConcurrentBursts=s,this.totalParticles=this.config.particleCount*s,this.particleData={velocities:new Float32Array(this.totalParticles*3),initialAlphas:new Float32Array(this.totalParticles),lifetimeOffsets:new Float32Array(this.totalParticles)},this.geometry=this.createGeometry(),this.material=this.createMaterial(),this.points=new _e(this.geometry,this.material),this.points.frustumCulled=!1,this.positionAttribute=this.geometry.getAttribute("position"),this.alphaAttribute=this.geometry.getAttribute("aAlpha"),this.sizeAttribute=this.geometry.getAttribute("aSize"),this.scene.add(this.points)}createGeometry(){const e=new pe,t=new Float32Array(this.totalParticles*3),s=new Float32Array(this.totalParticles),i=new Float32Array(this.totalParticles);return s.fill(0),i.fill(this.config.initialSize),e.setAttribute("position",new F(t,3)),e.setAttribute("aAlpha",new F(s,1)),e.setAttribute("aSize",new F(i,1)),e}createMaterial(){return new Z({uniforms:{uTime:{value:0},uPointSize:{value:this.config.initialSize},uColor:{value:this.config.color}},vertexShader:Ur,fragmentShader:Gr,transparent:!0,blending:se,depthWrite:!1})}trigger(e){let t=this.findAvailableSlot();if(t===-1)if(t=this.findOldestBurstSlot(),t!==-1)this.deactivateBurst(this.bursts[t]);else return console.warn("[StarBurstEffect] No available burst slots"),-1;const s=this.nextBurstId++,i=.5+Math.random(),n=Math.floor(this.config.particleCount*i),r=t*this.config.particleCount,a=performance.now()/1e3,A={id:s,startTime:a,particleStartIndex:r,particleCount:n,origin:e.clone(),isActive:!0},l=.6+Math.random()*.8;return this.initializeBurstParticles(A,l),this.bursts.length<=t?this.bursts.push(A):this.bursts[t]=A,this.isActive=!0,console.log(`[StarBurstEffect] Triggered burst ${s} at (${e.x.toFixed(2)}, ${e.y.toFixed(2)}, ${e.z.toFixed(2)})`),s}findAvailableSlot(){for(let e=0;e<this.maxConcurrentBursts;e++)if(!this.bursts[e]||!this.bursts[e].isActive)return e;return-1}findOldestBurstSlot(){let e=-1,t=1/0;for(let s=0;s<this.bursts.length;s++)this.bursts[s]&&this.bursts[s].startTime<t&&(t=this.bursts[s].startTime,e=s);return e}initializeBurstParticles(e,t=1){const s=this.positionAttribute.array,i=this.alphaAttribute.array,n=this.sizeAttribute.array;for(let r=0;r<e.particleCount;r++){const a=e.particleStartIndex+r,A=a*3;s[A]=e.origin.x,s[A+1]=e.origin.y,s[A+2]=e.origin.z;const l=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),d=.3+Math.random()*1.5,u=this.config.initialVelocity*d*t;this.particleData.velocities[A]=Math.sin(h)*Math.cos(l)*u,this.particleData.velocities[A+1]=Math.sin(h)*Math.sin(l)*u,this.particleData.velocities[A+2]=Math.cos(h)*u,i[a]=.5+Math.random()*.5,this.particleData.initialAlphas[a]=i[a],this.particleData.lifetimeOffsets[a]=(Math.random()-.5)*.4,n[a]=this.config.initialSize*(.4+Math.random()*1.2)}this.positionAttribute.needsUpdate=!0,this.alphaAttribute.needsUpdate=!0,this.sizeAttribute.needsUpdate=!0}update(e){if(!this.isActive)return;const t=performance.now()/1e3,s=this.positionAttribute.array,i=this.alphaAttribute.array;let n=!1,r=!1;for(const a of this.bursts){if(!a||!a.isActive)continue;const l=(t-a.startTime)/this.config.duration;if(l>=1){this.deactivateBurst(a),r=!0;continue}n=!0,r=!0;for(let h=0;h<a.particleCount;h++){const d=a.particleStartIndex+h,u=d*3,g=this.particleData.velocities[u],p=this.particleData.velocities[u+1],f=this.particleData.velocities[u+2],m=Math.pow(this.config.velocityDecay,e*60);this.particleData.velocities[u]*=m,this.particleData.velocities[u+1]*=m,this.particleData.velocities[u+2]*=m,s[u]+=g*e,s[u+1]+=p*e,s[u+2]+=f*e;const I=this.particleData.lifetimeOffsets[d],E=1-Math.max(0,Math.min(1,l+I));i[d]=this.particleData.initialAlphas[d]*E*E}}r&&(this.positionAttribute.needsUpdate=!0,this.alphaAttribute.needsUpdate=!0),this.material.uniforms.uTime.value=t,this.isActive=n}deactivateBurst(e){e.isActive=!1;const t=this.alphaAttribute.array;for(let s=0;s<e.particleCount;s++)t[e.particleStartIndex+s]=0}setColor(e){this.config.color=e,this.material.uniforms.uColor.value=e}setDuration(e){this.config.duration=e}setParticleCount(e){this.config.particleCount=Math.min(e,this.totalParticles/this.maxConcurrentBursts)}hasActiveBursts(){return this.isActive}getActiveBurstCount(){return this.bursts.filter(e=>e&&e.isActive).length}clear(){for(const e of this.bursts)e&&this.deactivateBurst(e);this.isActive=!1}dispose(){this.scene.remove(this.points),this.geometry.dispose(),this.material.dispose(),this.bursts=[],console.log("[StarBurstEffect] Disposed")}}function Nr(o,e){const t=e.x-o.x,s=e.y-o.y,i=e.z-o.z;return Math.sqrt(t*t+s*s+i*i)}function Hr(o,e){return new T((o.x+e.x)/2,(o.y+e.y)/2,(o.z+e.z)/2)}function Or(o,e=10){return new T((o.x-.5)*e,-(o.y-.5)*e,-o.z*e)}function ni(o,e,t){return Math.max(e,Math.min(t,o))}function zr(o){const e=ni(o,0,1);return e*e*(3-2*e)}function Vr(o,e=.05,t=.3){const i=(ni(o,e,t)-e)/(t-e);return zr(i)}class qr{constructor(e=0,t=.15){c(this,"currentValue");c(this,"smoothingFactor");this.currentValue=e,this.smoothingFactor=t}update(e){return this.currentValue+=(e-this.currentValue)*this.smoothingFactor,this.currentValue}get value(){return this.currentValue}reset(e){this.currentValue=e}setSmoothingFactor(e){this.smoothingFactor=Math.max(0,Math.min(1,e))}}class Yr{constructor(e=new T,t=.15){c(this,"currentValue");c(this,"smoothingFactor");this.currentValue=e.clone(),this.smoothingFactor=t}update(e){return this.currentValue.lerp(e,this.smoothingFactor),this.currentValue.clone()}get value(){return this.currentValue.clone()}reset(e){this.currentValue.copy(e)}setSmoothingFactor(e){this.smoothingFactor=Math.max(0,Math.min(1,e))}}class Jr{constructor(e=new ze,t=.15){c(this,"currentValue");c(this,"smoothingFactor");this.currentValue=e.clone(),this.smoothingFactor=t}update(e){return this.currentValue.dot(e)<0&&(e=e.clone(),e.set(-e.x,-e.y,-e.z,-e.w)),this.currentValue.slerp(e,this.smoothingFactor),this.currentValue.clone()}get value(){return this.currentValue.clone()}reset(e){this.currentValue.copy(e)}setSmoothingFactor(e){this.smoothingFactor=Math.max(0,Math.min(1,e))}}class Kr{constructor(e=new Oe,t=.15){c(this,"quaternionSmoother");const s=new ze().setFromEuler(e);this.quaternionSmoother=new Jr(s,t)}update(e){const t=new ze().setFromEuler(e),s=this.quaternionSmoother.update(t);return new Oe().setFromQuaternion(s)}get value(){return new Oe().setFromQuaternion(this.quaternionSmoother.value)}reset(e){const t=new ze().setFromEuler(e);this.quaternionSmoother.reset(t)}setSmoothingFactor(e){this.quaternionSmoother.setSmoothingFactor(e)}}const Wr={minHandDistance:.06,maxHandDistance:.35,scaleSmoothingFactor:.2,positionSmoothingFactor:.25,rotationSmoothingFactor:.2,gracePeriodMs:500,enableGestures:!0};class jr{constructor(e,t,s={}){c(this,"handTracker");c(this,"galaxyRenderer");c(this,"config");c(this,"gestureDetector");c(this,"starBurstEffect",null);c(this,"scaleSmoother");c(this,"positionSmoother");c(this,"rotationSmoother");c(this,"lastHandsDetectedTime",0);c(this,"isGalaxyActive",!1);c(this,"lastTimestamp",0);c(this,"lastHandCount",0);c(this,"hasExplodedThisLife",!1);c(this,"debugEnabled",!1);c(this,"debugCallback",null);this.handTracker=e,this.galaxyRenderer=t,this.config={...Wr,...s},this.scaleSmoother=new qr(0,this.config.scaleSmoothingFactor),this.positionSmoother=new Yr(new T(0,0,0),this.config.positionSmoothingFactor),this.rotationSmoother=new Kr(new Oe(0,0,0),this.config.rotationSmoothingFactor),this.gestureDetector=new kr}getPalmCenter(e){const t=e[Pe.INDEX_FINGER_MCP],s=e[Pe.MIDDLE_FINGER_MCP],i=e[Pe.RING_FINGER_MCP],n=e[Pe.PINKY_MCP];return{x:(t.x+s.x+i.x+n.x)/4,y:(t.y+s.y+i.y+n.y)/4,z:(t.z+s.z+i.z+n.z)/4,visibility:(t.visibility+s.visibility+i.visibility+n.visibility)/4}}initializeEffects(e){this.config.enableGestures&&(this.starBurstEffect=new Pr(e,{particleCount:300,duration:1.5,initialVelocity:2.5,color:new D(16777215)},3),console.log("[HandGalaxyController] Phase 3.2 star burst effect initialized"))}update(e){const t=this.lastTimestamp>0?(e-this.lastTimestamp)/1e3:0;this.lastTimestamp=e,this.galaxyRenderer.updateTime(t),this.config.enableGestures&&this.starBurstEffect&&this.starBurstEffect.update(t);const s=this.handTracker.detectHands(e);this.lastHandCount=s?.landmarks.length??0,s&&s.landmarks.length>=2?(this.lastHandsDetectedTime=e,this.processHandInteraction(s,e),this.config.enableGestures&&this.processGestures(s,e)):s&&s.landmarks.length===1?this.handleNoHands(e):this.handleNoHands(e),this.galaxyRenderer.render()}processGestures(e,t){const s=e.handedness.map(n=>{const r=n[0]?.categoryName?.toLowerCase();return r==="left"||r==="right"?r:"unknown"}),i=this.gestureDetector.detect(e.landmarks,s,t);i.pinch&&this.handlePinchGesture(i.pinch)}handlePinchGesture(e){e.state===xe.STARTED&&this.starBurstEffect&&this.isGalaxyActive&&this.galaxyRenderer.isVisible()&&this.galaxyRenderer.getExplosionState()===$.NORMAL&&(console.log(`[HandGalaxyController] Pinch detected (${e.data.handedness}) - triggering star burst`),this.starBurstEffect.trigger(e.data.position))}getHandCount(){return this.lastHandCount}processHandInteraction(e,t){const s=this.getPalmCenter(e.landmarks[0]),i=this.getPalmCenter(e.landmarks[1]),n=Nr(s,i);this.galaxyRenderer.setHandDistance(n);const r=Vr(n,this.config.minHandDistance,this.config.maxHandDistance),a=this.scaleSmoother.update(r);if(a<.01&&a>0&&!this.hasExplodedThisLife&&(console.log(`[HandGalaxyController] Critical mass! scale=${a.toFixed(3)} - Triggering explosion!`),this.galaxyRenderer.triggerExplosion(),this.hasExplodedThisLife=!0),this.galaxyRenderer.getExplosionState()!==0)return;const l=Hr(s,i),h=Or({x:l.x,y:l.y,z:l.z}),d=this.positionSmoother.update(h),u=this.calculateAxisBasedRotation(s,i),g=this.rotationSmoother.update(u);a>.01&&!this.isGalaxyActive&&(this.galaxyRenderer.setVisible(!0),this.isGalaxyActive=!0,this.hasExplodedThisLife=!1,console.log("[HandGalaxyController] New galaxy spawned - lifecycle reset")),this.galaxyRenderer.setScale(a),this.galaxyRenderer.setPosition(d.x,d.y,d.z),this.galaxyRenderer.setRotation(g),this.debugEnabled&&this.debugCallback&&this.debugCallback({handsDetected:2,distance:n,scale:a,position:d,rotation:g})}handleNoHands(e){const t=e-this.lastHandsDetectedTime,s=this.scaleSmoother.value;if(this.lastHandCount===2&&s<.3){console.log("[HandGalaxyController] Hands lost while close - triggering explosion!"),this.galaxyRenderer.triggerExplosion();return}if(t>this.config.gracePeriodMs){const i=this.scaleSmoother.update(0);i<.01&&this.isGalaxyActive?(this.galaxyRenderer.setVisible(!1),this.isGalaxyActive=!1):this.galaxyRenderer.setScale(i)}this.debugEnabled&&this.debugCallback&&this.debugCallback({handsDetected:0,distance:0,scale:this.scaleSmoother.value,position:this.positionSmoother.value,rotation:this.rotationSmoother.value})}calculateAxisBasedRotation(e,t){const s=new T(t.x-e.x,-(t.y-e.y),t.z-e.z),i=new T(0,1,0),n=new T().crossVectors(i,s).normalize();n.length()<.1&&n.set(1,0,0);const r=new T().crossVectors(s,n).normalize(),a=90*(Math.PI/180),A=new it,l=s.clone().normalize();A.makeBasis(n,r,l);const h=new Oe().setFromRotationMatrix(A);return h.x+=a,h}setDistanceThresholds(e,t){this.config.minHandDistance=e,this.config.maxHandDistance=t}setSmoothingFactor(e){this.scaleSmoother.setSmoothingFactor(e),this.positionSmoother.setSmoothingFactor(e),this.rotationSmoother.setSmoothingFactor(e)}enableDebug(e){this.debugEnabled=!0,this.debugCallback=e}disableDebug(){this.debugEnabled=!1,this.debugCallback=null}reset(){this.scaleSmoother.reset(0),this.positionSmoother.reset(new T(0,0,0)),this.rotationSmoother.reset(new Oe(0,0,0)),this.lastHandsDetectedTime=0,this.isGalaxyActive=!1,this.galaxyRenderer.setVisible(!1),this.galaxyRenderer.setScale(0),this.gestureDetector.reset(),this.starBurstEffect?.clear()}dispose(){this.starBurstEffect?.dispose(),this.starBurstEffect=null}}class Xr extends oo{constructor(e){super(e),this.type=ne}parse(e){const r=function(w,x){switch(w){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(x||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(x||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(x||""))}},d=function(w,x,Q){x=x||1024;let N=w.pos,q=-1,R=0,J="",G=String.fromCharCode.apply(null,new Uint16Array(w.subarray(N,N+128)));for(;0>(q=G.indexOf(`
`))&&R<x&&N<w.byteLength;)J+=G,R+=G.length,N+=128,G+=String.fromCharCode.apply(null,new Uint16Array(w.subarray(N,N+128)));return-1<q?(w.pos+=R+q+1,J+G.slice(0,q)):!1},u=function(w){const x=/^#\?(\S+)/,Q=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,q=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let J,G;for((w.pos>=w.byteLength||!(J=d(w)))&&r(1,"no header found"),(G=J.match(x))||r(3,"bad initial token"),R.valid|=1,R.programtype=G[1],R.string+=J+`
`;J=d(w),J!==!1;){if(R.string+=J+`
`,J.charAt(0)==="#"){R.comments+=J+`
`;continue}if((G=J.match(Q))&&(R.gamma=parseFloat(G[1])),(G=J.match(M))&&(R.exposure=parseFloat(G[1])),(G=J.match(N))&&(R.valid|=2,R.format=G[1]),(G=J.match(q))&&(R.valid|=4,R.height=parseInt(G[1],10),R.width=parseInt(G[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||r(3,"missing format specifier"),R.valid&4||r(3,"missing image size specifier"),R},g=function(w,x,Q){const M=x;if(M<8||M>32767||w[0]!==2||w[1]!==2||w[2]&128)return new Uint8Array(w);M!==(w[2]<<8|w[3])&&r(3,"wrong scanline width");const N=new Uint8Array(4*x*Q);N.length||r(4,"unable to allocate buffer space");let q=0,R=0;const J=4*M,G=new Uint8Array(4),he=new Uint8Array(J);let ye=Q;for(;ye>0&&R<w.byteLength;){R+4>w.byteLength&&r(1),G[0]=w[R++],G[1]=w[R++],G[2]=w[R++],G[3]=w[R++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=M)&&r(3,"bad rgbe scanline format");let de=0,oe;for(;de<J&&R<w.byteLength;){oe=w[R++];const z=oe>128;if(z&&(oe-=128),(oe===0||de+oe>J)&&r(3,"bad scanline data"),z){const W=w[R++];for(let De=0;De<oe;De++)he[de++]=W}else he.set(w.subarray(R,R+oe),de),de+=oe,R+=oe}const K=M;for(let z=0;z<K;z++){let W=0;N[q]=he[z+W],W+=M,N[q+1]=he[z+W],W+=M,N[q+2]=he[z+W],W+=M,N[q+3]=he[z+W],q+=4}ye--}return N},p=function(w,x,Q,M){const N=w[x+3],q=Math.pow(2,N-128)/255;Q[M+0]=w[x+0]*q,Q[M+1]=w[x+1]*q,Q[M+2]=w[x+2]*q,Q[M+3]=1},f=function(w,x,Q,M){const N=w[x+3],q=Math.pow(2,N-128)/255;Q[M+0]=nt.toHalfFloat(Math.min(w[x+0]*q,65504)),Q[M+1]=nt.toHalfFloat(Math.min(w[x+1]*q,65504)),Q[M+2]=nt.toHalfFloat(Math.min(w[x+2]*q,65504)),Q[M+3]=nt.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const I=u(m),C=I.width,E=I.height,y=g(m.subarray(m.pos),C,E);let b,v,B;switch(this.type){case ee:B=y.length/4;const w=new Float32Array(B*4);for(let Q=0;Q<B;Q++)p(y,Q*4,w,Q*4);b=w,v=ee;break;case ne:B=y.length/4;const x=new Uint16Array(B*4);for(let Q=0;Q<B;Q++)f(y,Q*4,x,Q*4);b=x,v=ne;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:C,height:E,data:b,header:I.string,gamma:I.gamma,exposure:I.exposure,type:v}}setDataType(e){return this.type=e,this}load(e,t,s,i){function n(r,a){switch(r.type){case ee:case ne:r.colorSpace=ie,r.minFilter=Y,r.magFilter=Y,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,a)}return super.load(e,n,s,i)}}class Zr extends Xr{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}const $r=`
  attribute float aAlpha;
  attribute float aProgress;
  attribute float aDistanceFromCenter;
  attribute float aVelocity;
  
  varying float vAlpha;
  varying float vProgress;
  varying float vDistanceFromCenter;
  varying float vVelocity;
  varying vec3 vWorldPosition;
  
  void main() {
    vAlpha = aAlpha;
    vProgress = aProgress;
    vDistanceFromCenter = aDistanceFromCenter;
    vVelocity = aVelocity;
    
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,ea=`
  uniform vec3 uCoreColor;
  uniform vec3 uGlowColor;
  uniform float uTime;
  uniform float uIntensity;
  
  varying float vAlpha;
  varying float vProgress;
  varying float vDistanceFromCenter;
  varying float vVelocity;
  varying vec3 vWorldPosition;
  
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  
  void main() {
    if (vAlpha < 0.01) discard;

    float d = abs(vDistanceFromCenter);
    
    float velocityBoost = 1.0 + vVelocity * 1.15;
    float intensityFactor = uIntensity * velocityBoost;
    float head = smoothstep(0.78, 0.98, vProgress);
    
    float coreWidth = mix(0.040, 0.070, vVelocity);
    float core = smoothstep(coreWidth, 0.0, d);
    vec3 coreRay = vec3(26.0, 26.0, 26.0) * core * intensityFactor;

    float auraWidth = mix(1.6, 2.2, vVelocity);
    float aura = exp(-d * d * auraWidth * 6.0);

    float shimmer = 0.82 + 0.18 * sin((vProgress * 18.0 - uTime * 6.0) * 6.28318);
    float shimmerMask = smoothstep(0.12, 0.55, d);
    vec3 auraCol = uGlowColor * (3.4 + 1.6 * head) * aura * shimmer * intensityFactor;
    auraCol *= (0.85 + 0.15 * shimmerMask);

    float edgeIon = smoothstep(0.55, 0.95, d) * smoothstep(0.20, 0.85, vProgress);
    float edgeNoise = step(0.93, hash12(vec2(vProgress * 120.0 + uTime * 3.5, d * 60.0)));
    vec3 ion = uGlowColor * edgeIon * edgeNoise * (5.0 * vVelocity);

    float sparkleGate = smoothstep(0.30, 1.0, vVelocity);
    float sparkle = step(0.985, hash12(vec2(vProgress * 240.0 + uTime * 8.0, d * 90.0)));
    sparkle *= smoothstep(0.22, 0.0, d);
    vec3 spark = vec3(10.0) * sparkle * sparkleGate;

    vec3 finalColor = coreRay + auraCol + ion + spark;

    float alpha = vAlpha;
    alpha *= (0.06 + 0.94 * smoothstep(0.22, 0.98, vProgress));
    alpha *= (0.65 + 0.65 * vVelocity);

    float coreAlpha = smoothstep(coreWidth * 1.6, 0.0, d) * 0.95;
    float auraAlpha = aura * 0.18;
    alpha *= (coreAlpha + auraAlpha);

    gl_FragColor = vec4(finalColor, alpha);
  }
`,ta={maxPoints:64,ribbonWidth:.16,trailLength:22,coreColor:new D(16777215),glowColor:new D(54527),smoothingFactor:.35,velocityScale:1,intensityBoost:1.15,positionFilterMinCutoff:1.15,positionFilterBeta:.01,positionFilterDerivateCutoff:1,sparkleMaxCount:160,sparkleSpawnRate:70,sparkleBaseSize:9},sa=150,ia=100,oa=2;class Is{constructor(){c(this,"hatX",null)}filter(e,t){return this.hatX===null?(this.hatX=e,e):(this.hatX=t*e+(1-t)*this.hatX,this.hatX)}}class Cs{constructor(e,t,s){c(this,"minCutoff");c(this,"beta");c(this,"dCutoff");c(this,"x",new Is);c(this,"dx",new Is);c(this,"lastTime",null);c(this,"lastRawX",null);this.minCutoff=e,this.beta=t,this.dCutoff=s}alpha(e,t){return 1/(1+1/(2*Math.PI*e)/t)}filterValue(e,t){if(this.lastTime===null||this.lastRawX===null)return this.lastTime=t,this.lastRawX=e,this.x.filter(e,1);const s=Math.max(t-this.lastTime,1/240),i=(e-this.lastRawX)/s,n=this.dx.filter(i,this.alpha(this.dCutoff,s)),r=this.minCutoff+this.beta*Math.abs(n),a=this.x.filter(e,this.alpha(r,s));return this.lastTime=t,this.lastRawX=e,a}}class na{constructor(e,t){c(this,"maxCount");c(this,"geometry");c(this,"material");c(this,"points");c(this,"positions");c(this,"colors");c(this,"sizes");c(this,"alphas");c(this,"velocities");c(this,"ages");c(this,"lifes");c(this,"writeIndex",0);this.maxCount=t,this.positions=new Float32Array(t*3),this.colors=new Float32Array(t*3),this.sizes=new Float32Array(t),this.alphas=new Float32Array(t),this.velocities=new Float32Array(t*3),this.ages=new Float32Array(t),this.lifes=new Float32Array(t),this.geometry=new pe;const s=new F(this.positions,3),i=new F(this.colors,3),n=new F(this.sizes,1),r=new F(this.alphas,1);s.setUsage(rt),i.setUsage(rt),n.setUsage(rt),r.setUsage(rt),this.geometry.setAttribute("position",s),this.geometry.setAttribute("color",i),this.geometry.setAttribute("aSize",n),this.geometry.setAttribute("aAlpha",r),this.material=new Z({uniforms:{uIntensity:{value:1}},vertexShader:`
        attribute float aSize;
        attribute float aAlpha;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vAlpha = aAlpha;
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          float s = aSize;
          s *= clamp(300.0 / max(1.0, -mvPosition.z), 0.65, 2.25);
          gl_PointSize = s;
        }
      `,fragmentShader:`
        uniform float uIntensity;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vec2 p = gl_PointCoord - vec2(0.5);
          float r = length(p);
          float m = smoothstep(0.5, 0.0, r);
          float a = vAlpha * m;
          if (a < 0.01) discard;
          vec3 col = vColor * (7.0 * uIntensity) * a;
          gl_FragColor = vec4(col, a);
        }
      `,transparent:!0,blending:se,depthTest:!1,depthWrite:!1,vertexColors:!0,toneMapped:!0}),this.points=new _e(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=210,e.add(this.points)}setIntensity(e){this.material.uniforms.uIntensity.value=e}setVisible(e){this.points.visible=e}spawn(e,t,s,i,n){const r=this.writeIndex;this.writeIndex=(this.writeIndex+1)%this.maxCount;const a=r*3;this.positions[a]=e.x,this.positions[a+1]=e.y,this.positions[a+2]=e.z,this.velocities[a]=t.x,this.velocities[a+1]=t.y,this.velocities[a+2]=t.z,this.colors[a]=s.r,this.colors[a+1]=s.g,this.colors[a+2]=s.b,this.sizes[r]=i,this.alphas[r]=1,this.ages[r]=0,this.lifes[r]=n}update(e){for(let t=0;t<this.maxCount;t++){const s=this.lifes[t];if(s<=0){this.alphas[t]=0;continue}const i=this.ages[t]+e;this.ages[t]=i;const n=i/s;if(n>=1){this.lifes[t]=0,this.alphas[t]=0;continue}const r=t*3;this.positions[r]+=this.velocities[r]*e,this.positions[r+1]+=this.velocities[r+1]*e,this.positions[r+2]+=this.velocities[r+2]*e,this.velocities[r]*=.985,this.velocities[r+1]*=.985,this.velocities[r+2]*=.985;const a=1-n;this.alphas[t]=a*a,this.sizes[t]*=.998}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0}dispose(e){e.remove(this.points),this.geometry.dispose(),this.material.dispose()}}class ra{constructor(e,t,s,i={}){c(this,"scene");c(this,"camera");c(this,"config");c(this,"container");c(this,"width",0);c(this,"height",0);c(this,"trails",[]);c(this,"nextTrailId",0);c(this,"material");c(this,"time",0);c(this,"maxRenderPoints",0);c(this,"sparkleRateMultiplier",1);c(this,"sparkleSystem");c(this,"tmpCameraDir",new T);c(this,"tmpDir",new T);c(this,"tmpPerp",new T);c(this,"tmpNdc",new T);c(this,"tmpWorld",new T);c(this,"tmpUnprojectDir",new T);c(this,"worldPosPool",[]);c(this,"tmpSparkleColor",new D);c(this,"tmpWhiteColor",new D(16777215));c(this,"enabled",!0);c(this,"handleResize",()=>{const e=this.container.getBoundingClientRect();this.width=e.width,this.height=e.height});this.scene=e,this.camera=t,this.container=s,this.config={...ta,...i};const n=s.getBoundingClientRect();this.width=n.width,this.height=n.height,this.material=new Z({uniforms:{uCoreColor:{value:this.config.coreColor},uGlowColor:{value:this.config.glowColor},uTime:{value:0},uIntensity:{value:this.config.intensityBoost}},vertexShader:$r,fragmentShader:ea,transparent:!0,blending:se,depthTest:!1,depthWrite:!1,side:ue,toneMapped:!0}),this.maxRenderPoints=this.config.maxPoints,this.sparkleSystem=new na(this.scene,this.config.sparkleMaxCount),this.sparkleSystem.setIntensity(this.config.intensityBoost),window.addEventListener("resize",this.handleResize)}setRenderMode(e){e==="depth-aware"?(this.material.depthTest=!0,this.material.depthWrite=!1):(this.material.depthTest=!1,this.material.depthWrite=!1),this.material.needsUpdate=!0}setQualityLevel(e){if(e==="high"){this.maxRenderPoints=this.config.maxPoints,this.sparkleRateMultiplier=1,this.material.uniforms.uIntensity.value=this.config.intensityBoost;return}if(e==="medium"){this.maxRenderPoints=Math.max(12,Math.floor(this.config.maxPoints*.75)),this.sparkleRateMultiplier=.55,this.material.uniforms.uIntensity.value=this.config.intensityBoost*.92;return}this.maxRenderPoints=Math.max(10,Math.floor(this.config.maxPoints*.5)),this.sparkleRateMultiplier=.25,this.material.uniforms.uIntensity.value=this.config.intensityBoost*.8}setEnabled(e){if(this.enabled!==e){this.enabled=e;for(const t of this.trails)t.mesh.visible=e,e||(t.isActive=!1);this.sparkleSystem.setVisible(e)}}isEnabled(){return this.enabled}createTrail(e,t){const s=this.config.maxPoints*2,i=new pe;i.setAttribute("position",new F(new Float32Array(s*3),3)),i.setAttribute("aAlpha",new F(new Float32Array(s),1)),i.setAttribute("aProgress",new F(new Float32Array(s),1)),i.setAttribute("aDistanceFromCenter",new F(new Float32Array(s),1)),i.setAttribute("aVelocity",new F(new Float32Array(s),1));const n=this.config.maxPoints-1,r=new Uint16Array(n*6);for(let A=0;A<n;A++){const l=A*2,h=A*6;r[h]=l,r[h+1]=l+1,r[h+2]=l+2,r[h+3]=l+1,r[h+4]=l+3,r[h+5]=l+2}i.setIndex(new F(r,1)),i.setDrawRange(0,0);const a=new X(i,this.material);return a.frustumCulled=!1,a.renderOrder=200,a.visible=!1,this.scene.add(a),{id:this.nextTrailId++,points:[],lastScreenX:e,lastScreenY:t,lastUpdateTime:performance.now(),lastVelocity:0,filterX:new Cs(this.config.positionFilterMinCutoff,this.config.positionFilterBeta,this.config.positionFilterDerivateCutoff),filterY:new Cs(this.config.positionFilterMinCutoff,this.config.positionFilterBeta,this.config.positionFilterDerivateCutoff),sparkleAccumulator:0,isActive:!0,geometry:i,mesh:a}}update(e,t){if(this.time+=t,this.material.uniforms.uTime.value=this.time,this.sparkleSystem.setIntensity(this.config.intensityBoost),!this.enabled){for(const a of this.trails)this.fadeTrail(a);this.trails=this.trails.filter(a=>a.points.length===0&&!a.isActive?(this.scene.remove(a.mesh),a.geometry.dispose(),!1):!0);for(const a of this.trails)this.updateGeometry(a);this.sparkleSystem.update(t);return}const s=performance.now(),i=[];if(e?.landmarks)for(const a of e.landmarks){const A=this.getHandAnchor(a);i.push(A)}const n=new Set,r=new Set;for(let a=0;a<i.length;a++){const A=i[a];let l=-1,h=sa;for(let d=0;d<this.trails.length;d++){if(n.has(d))continue;const u=this.trails[d],g=A.x-u.lastScreenX,p=A.y-u.lastScreenY,f=Math.sqrt(g*g+p*p);f<h&&(h=f,l=d)}l>=0&&(n.add(l),r.add(a),this.updateTrail(this.trails[l],A.x,A.y,s))}for(let a=0;a<i.length;a++){if(r.has(a))continue;if(this.trails.length>=oa)break;const A=i[a],l=this.createTrail(A.x,A.y);this.trails.push(l),this.updateTrail(l,A.x,A.y,s)}for(let a=0;a<this.trails.length;a++){if(n.has(a))continue;const A=this.trails[a];s-A.lastUpdateTime>ia&&this.fadeTrail(A)}this.trails=this.trails.filter(a=>a.points.length===0&&!a.isActive?(this.scene.remove(a.mesh),a.geometry.dispose(),!1):!0);for(const a of this.trails)this.updateGeometry(a);this.updateSparkles(t),this.sparkleSystem.update(t)}updateSparkles(e){const t=this.config.sparkleSpawnRate*this.sparkleRateMultiplier,s=this.config.sparkleBaseSize,i=this.config.glowColor;for(const n of this.trails){if(!n.isActive||n.points.length<2)continue;const r=n.points[n.points.length-1],a=r.velocity;for(n.sparkleAccumulator+=t*(.15+.85*a)*e;n.sparkleAccumulator>=1;){n.sparkleAccumulator-=1;const A=(Math.random()-.5)*.08,l=(Math.random()-.5)*.08,h=(Math.random()-.5)*.08,d=this.tmpWorld.copy(r.worldPos);d.x+=A,d.y+=l,d.z+=h;const u=this.tmpUnprojectDir;u.set((Math.random()-.5)*.35,(Math.random()-.5)*.35,-.25-Math.random()*.35),u.multiplyScalar(.55+a*1.25);const g=this.tmpSparkleColor.copy(i);g.lerp(this.tmpWhiteColor,.35);const p=s*(.65+Math.random()*.55)*(.8+a),f=.08+Math.random()*.12;this.sparkleSystem.spawn(d,u,g,p,f)}}}getHandAnchor(e){const t=[0,5,9,13,17,8,12];let s=0,i=0;for(const r of t){const a=e[r];s+=1-a.x,i+=a.y}const n=1/t.length;return{x:s*n*this.width,y:i*n*this.height}}updateTrail(e,t,s,i){const n=i/1e3,r=e.filterX.filterValue(t,n),a=e.filterY.filterValue(s,n),A=r-e.lastScreenX,l=a-e.lastScreenY,h=Math.sqrt(A*A+l*l),d=Math.max(i-e.lastUpdateTime,1),g=h/d*1e3*this.config.velocityScale,p=e.lastVelocity*(1-this.config.smoothingFactor)+g*this.config.smoothingFactor,f=Math.min(p/2400,1);if(e.lastVelocity=p,e.isActive&&h>15){const m=Math.min(Math.ceil(h/12),6);for(let I=1;I<=m;I++){const C=I/m,E=e.lastScreenX+A*C,y=e.lastScreenY+l*C;this.addPoint(e,E,y,i,f)}}else(h>5||!e.isActive)&&this.addPoint(e,r,a,i,f);e.lastScreenX=r,e.lastScreenY=a,e.lastUpdateTime=i,e.isActive=!0}addPoint(e,t,s,i,n){const r=this.worldPosPool.pop()??new T;for(this.screenToWorldInto(t,s,r),e.points.push({screenX:t,screenY:s,worldPos:r,timestamp:i,velocity:n});e.points.length>this.config.maxPoints;){const a=e.points.shift();a&&this.worldPosPool.push(a.worldPos)}}fadeTrail(e){e.isActive=!1;const t=Math.max(1,Math.floor(e.points.length*.25)),s=e.points.splice(0,t);for(const i of s)this.worldPosPool.push(i.worldPos)}screenToWorldInto(e,t,s){const i=e/this.width*2-1,n=-(t/this.height)*2+1;this.tmpNdc.set(i,n,.5),this.tmpNdc.unproject(this.camera),this.tmpUnprojectDir.copy(this.tmpNdc).sub(this.camera.position).normalize(),s.copy(this.camera.position).add(this.tmpUnprojectDir.multiplyScalar(4))}updateGeometry(e){if(e.points.length<2){e.mesh.visible=!1,e.geometry.setDrawRange(0,0);return}e.mesh.visible=!0;const t=e.geometry.attributes.position,s=e.geometry.attributes.aAlpha,i=e.geometry.attributes.aProgress,n=e.geometry.attributes.aDistanceFromCenter,r=e.geometry.attributes.aVelocity,a=t.array,A=s.array,l=i.array,h=n.array,d=r.array,u=e.points,g=Math.max(0,u.length-this.maxRenderPoints),p=u.length-g;if(p<2){e.mesh.visible=!1,e.geometry.setDrawRange(0,0);return}const f=this.config.ribbonWidth;this.camera.getWorldDirection(this.tmpCameraDir);for(let m=0;m<p;m++){const I=g+m,C=u[I].worldPos,E=m/(p-1),y=u[I].velocity||0,b=this.tmpDir;m<p-1?b.subVectors(u[I+1].worldPos,C):m>0&&b.subVectors(C,u[I-1].worldPos),b.normalize();const v=this.tmpPerp.crossVectors(b,this.tmpCameraDir);v.lengthSq()<1e-5&&v.set(0,1,0),v.normalize();const B=He.lerp(.9,1.5,y),w=f*B*(1+.85*Math.pow(E,.85)),x=Math.pow(E,1.85),Q=m*6;a[Q]=C.x+v.x*w,a[Q+1]=C.y+v.y*w,a[Q+2]=C.z+v.z*w*.15,a[Q+3]=C.x-v.x*w,a[Q+4]=C.y-v.y*w,a[Q+5]=C.z-v.z*w*.15;const M=m*2;A[M]=x,A[M+1]=x,l[M]=E,l[M+1]=E,h[M]=-1,h[M+1]=1,d[M]=y,d[M+1]=y}for(let m=p*2;m<this.config.maxPoints*2;m++)a[m*3]=0,a[m*3+1]=0,a[m*3+2]=0,A[m]=0,l[m]=0,h[m]=0,d[m]=0;e.geometry.setDrawRange(0,(p-1)*6),t.needsUpdate=!0,s.needsUpdate=!0,i.needsUpdate=!0,n.needsUpdate=!0,r.needsUpdate=!0}getTrailSegments(){const e=new Map;for(let t=0;t<this.trails.length;t++){const s=this.trails[t];if(s.points.length>=2&&s.isActive){const i=s.points.map(n=>({x:n.screenX,y:n.screenY,timestamp:n.timestamp,opacity:1}));e.set(`trail_${s.id}`,i)}}return e}getTrailPointCounts(){const e={};for(let t=0;t<this.trails.length;t++)e[`trail_${t}`]=this.trails[t].points.length;return e}clear(){for(const e of this.trails){for(const t of e.points)this.worldPosPool.push(t.worldPos);e.points=[],e.isActive=!1}}dispose(){window.removeEventListener("resize",this.handleResize);for(const e of this.trails){for(const t of e.points)this.worldPosPool.push(t.worldPos);this.scene.remove(e.mesh),e.geometry.dispose()}this.material.dispose(),this.sparkleSystem.dispose(this.scene),this.trails=[],console.log("[HandTrailRenderer] Disposed")}}var S=(o=>(o.CRYSTAL="crystal",o.METEOR="meteor",o.STAR="star",o.VOID_PEARL="void-pearl",o.NEBULA_CORE="nebula-core",o.ANCIENT_RELIC="ancient-relic",o.COMET_EMBER="comet-ember",o))(S||{}),j=(o=>(o.POOLED="pooled",o.ACTIVE="active",o.SLICED="sliced",o.MISSED="missed",o))(j||{});const Ae={crystal:{type:"crystal",color:new D(8381695),emissiveColor:new D(6018047),emissiveIntensity:1.8,scale:.68,speed:2,collisionRadius:.6},meteor:{type:"meteor",color:new D(16743226),emissiveColor:new D(16731951),emissiveIntensity:1.4,scale:.72,speed:2.45,collisionRadius:.62},star:{type:"star",color:new D(16774869),emissiveColor:new D(16765562),emissiveIntensity:2.6,scale:.58,speed:1.7,collisionRadius:.55},"void-pearl":{type:"void-pearl",color:new D(4404991),emissiveColor:new D(11577087),emissiveIntensity:1.05,scale:.62,speed:2.1,collisionRadius:.56},"nebula-core":{type:"nebula-core",color:new D(8019199),emissiveColor:new D(16736215),emissiveIntensity:1.2,scale:.66,speed:2.15,collisionRadius:.58},"ancient-relic":{type:"ancient-relic",color:new D(16765578),emissiveColor:new D(16758858),emissiveIntensity:.95,scale:.66,speed:2.25,collisionRadius:.58},"comet-ember":{type:"comet-ember",color:new D(16734780),emissiveColor:new D(16760939),emissiveIntensity:1.25,scale:.6,speed:2.7,collisionRadius:.54}},ri={poolSize:25,maxActiveObjects:12,spawnRate:1.5,spawnZPosition:-15,spawnSpread:8,despawnZPosition:5},aa={maxPoints:64,ribbonWidth:.1,trailLength:24,coreColor:"#ffffff",glowColor:"#000000"},ai={particleCount:100,duration:1.2,initialVelocity:4,velocityDecay:.94,particleSize:.8},Ai={starCount:6500,starSpread:55,starSize:.45,twinkleSpeed:.85},Aa={objectPool:ri,handTrail:aa,sliceEffect:ai,background:Ai,debug:!1};var V=(o=>(o.CHARGING="charging",o.READY="ready",o.ACTIVE="active",o.COOLDOWN="cooldown",o))(V||{});const la={chargePerSlice:{star:.05,crystal:.06,meteor:.07,"void-pearl":.08,"nebula-core":.09,"ancient-relic":.1,"comet-ember":.11},activationDuration:2.5,cooldownDuration:.5,activationDebounceMs:150,minHandSpreadDistance:.15,laserDestroyMultiplier:2,chargeDecayPerSecond:.02,decayDelaySeconds:3};function ca(o){let e=o>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function le(o){return Math.max(0,Math.min(1,o))}function Rt(o,e,t){return o+(e-o)*t}function Es(o){return o*o*(3-2*o)}function ha(o,e,t){const s=Math.floor(o),i=Math.floor(e),n=o-s,r=e-i,a=Es(n),A=Es(r),l=(m,I)=>{const C=m*374761393+I*668265263+t*69069,E=Math.imul(C^C>>>13,1274126177);return((E^E>>>16)>>>0)/4294967296},h=l(s,i),d=l(s+1,i),u=l(s,i+1),g=l(s+1,i+1),p=Rt(h,d,a),f=Rt(u,g,a);return Rt(p,f,A)}function ve(o,e,t,s){let i=0,n=.5,r=1;for(let a=0;a<s;a++)i+=ha(o*r,e*r,t+a*1013)*n,r*=2,n*=.5;return le(i)}function da(o){const e=o?.size,t=o?.seed,s=new Uint8Array(e*e*4),i=new Float32Array(e*e);for(let n=0;n<e;n++)for(let r=0;r<e;r++){const a=r/e,A=n/e,l=ve(a*64,A*64,t,5);i[n*e+r]=l}for(let n=0;n<e;n++)for(let r=0;r<e;r++){const a=(r+1)%e,A=(r-1+e)%e,l=(n+1)%e,h=(n-1+e)%e,d=i[n*e+A],u=i[n*e+a],g=i[h*e+r],p=i[l*e+r],f=1.6,m=(d-u)*f,I=(g-p)*f,C=1,E=Math.sqrt(m*m+I*I+C*C)||1,y=m/E,b=I/E,v=C/E,B=(n*e+r)*4;s[B+0]=Math.floor((y*.5+.5)*255),s[B+1]=Math.floor((b*.5+.5)*255),s[B+2]=Math.floor((v*.5+.5)*255),s[B+3]=255}return Le(s,e)}function Le(o,e,t){const s=new Et(o,e,e,ge);return s.needsUpdate=!0,s.wrapS=Te,s.wrapT=Te,s.magFilter=Y,s.minFilter=ke,s.generateMipmaps=!0,s.anisotropy=4,t&&(s.colorSpace=t),s}function mt(o,e){const t=new Et(o,e,e,Ge);return t.needsUpdate=!0,t.wrapS=Te,t.wrapT=Te,t.magFilter=Y,t.minFilter=ke,t.generateMipmaps=!0,t.anisotropy=4,t}function ua(o){const e=o?.size,t=o?.seed,s=new Uint8Array(e*e*4),i=new Uint8Array(e*e*4),n=new Uint8Array(e*e),r=new Uint8Array(e*e),a=new Uint8Array(e*e*4),A=new Float32Array(e*e);for(let l=0;l<e;l++)for(let h=0;h<e;h++){const d=h/e,u=l/e,g=ve(d*8,u*8,t,5),p=ve(d*24,u*24,t+17,3),f=le(g*.85+p*.15);A[l*e+h]=f;const I=le(.55+f*.4),C=I,E=I,y=I,b=(l*e+h)*4;s[b+0]=Math.floor(C*255),s[b+1]=Math.floor(E*255),s[b+2]=Math.floor(y*255),s[b+3]=255;const v=le(.65+(1-f)*.35);n[l*e+h]=Math.floor(v*255);const B=le(.75+f*.25);r[l*e+h]=Math.floor(B*255);const Q=(ve(d*18,u*18,t+999,4)>.78?1:0)*(.6+.4*ve(d*60,u*60,t+123,2));a[b+0]=Math.floor(Q*255),a[b+1]=Math.floor(Q*120),a[b+2]=Math.floor(Q*60),a[b+3]=255}for(let l=0;l<e;l++)for(let h=0;h<e;h++){const d=(h+1)%e,u=(h-1+e)%e,g=(l+1)%e,p=(l-1+e)%e,f=A[l*e+u],m=A[l*e+d],I=A[p*e+h],C=A[g*e+h],E=2,y=(f-m)*E,b=(I-C)*E,v=1,B=Math.sqrt(y*y+b*b+v*v)||1,w=y/B,x=b/B,Q=v/B,M=(l*e+h)*4;i[M+0]=Math.floor((w*.5+.5)*255),i[M+1]=Math.floor((x*.5+.5)*255),i[M+2]=Math.floor((Q*.5+.5)*255),i[M+3]=255}return{map:Le(s,e,P),normalMap:Le(i,e),roughnessMap:mt(n,e),aoMap:mt(r,e),emissiveMap:Le(a,e)}}function ga(o){const e=o?.size,t=o?.seed,s=ca(t),i=new Uint8Array(e*e*4),n=new Uint8Array(e*e*4),r=new Uint8Array(e*e),a=new Uint8Array(e*e),A=new Uint8Array(e*e*4),l=new Float32Array(e*e);for(let h=0;h<e;h++)for(let d=0;d<e;d++){const u=d/e,g=h/e,p=ve(u*40,g*8,t,4),f=ve(u*10,g*10,t+77,4),m=le(p*.5+f*.5);l[h*e+d]=m;const I=.65+.2*(s()-.5),C=le(.68+m*.25)*I,E=(h*e+d)*4;i[E+0]=Math.floor(le(C)*255),i[E+1]=Math.floor(le(C)*255),i[E+2]=Math.floor(le(C)*255),i[E+3]=255;const y=le(.12+(1-p)*.25+f*.25);r[h*e+d]=Math.floor(y*255);const b=le(.8+f*.2);a[h*e+d]=Math.floor(b*255);const B=(ve(u*55,g*55,t+9999,2)>.92?1:0)*(.8+.2*ve(u*120,g*120,t+9,1));A[E+0]=Math.floor(B*120),A[E+1]=Math.floor(B*180),A[E+2]=Math.floor(B*255),A[E+3]=255}for(let h=0;h<e;h++)for(let d=0;d<e;d++){const u=(d+1)%e,g=(d-1+e)%e,p=(h+1)%e,f=(h-1+e)%e,m=l[h*e+g],I=l[h*e+u],C=l[f*e+d],E=l[p*e+d],y=3,b=(m-I)*y,v=(C-E)*y,B=1,w=Math.sqrt(b*b+v*v+B*B)||1,x=b/w,Q=v/w,M=B/w,N=(h*e+d)*4;n[N+0]=Math.floor((x*.5+.5)*255),n[N+1]=Math.floor((Q*.5+.5)*255),n[N+2]=Math.floor((M*.5+.5)*255),n[N+3]=255}return{map:Le(i,e,P),normalMap:Le(n,e),roughnessMap:mt(r,e),aoMap:mt(a,e),emissiveMap:Le(A,e)}}const pa=`
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vLocalPos;
  varying vec3 vWorldPos;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vLocalPos = position;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    
    // Dynamic pulsing with noise-based variation
    float pulseBase = 1.0 + 0.08 * sin(uTime * 3.0);
    float pulseVariation = 0.03 * sin(vLocalPos.x * 10.0 + uTime * 2.0) * 
                           sin(vLocalPos.y * 10.0 - uTime * 1.5);
    float pulse = pulseBase + pulseVariation;
    
    vec3 pos = position * pulse;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,fa=`
  uniform float uTime;
  varying vec3 vLocalPos;
  varying vec3 vWorldPos;

  void main() {
    vLocalPos = position;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;

    float pulse = 1.0 + 0.03 * sin(uTime * 2.2 + position.y * 3.0);
    vec3 pos = position * pulse;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,ma=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform vec3 uGlowColor;

  varying vec3 vLocalPos;
  varying vec3 vWorldPos;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                   mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                   mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += noise(p) * a;
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float fresnel = pow(1.0 - max(0.0, dot(viewDir, normalize(vLocalPos))), 2.2);

    vec3 p = normalize(vLocalPos);
    float t = uTime * 0.18;

    float swirl1 = fbm(p * 3.2 + vec3(t, -t * 1.3, t * 0.7));
    float swirl2 = fbm(p * 5.8 + vec3(-t * 1.1, t * 0.9, -t * 0.6));
    float clouds = clamp(swirl1 * 0.65 + swirl2 * 0.35, 0.0, 1.0);

    float core = pow(clamp(1.0 - length(vLocalPos) * 0.85, 0.0, 1.0), 2.2);
    float filaments = pow(clamp(noise(p * 10.0 + t * 2.0), 0.0, 1.0), 5.0);

    vec3 base = mix(uColor * 0.35, uGlowColor * 0.55, clouds);
    vec3 energy = uGlowColor * (0.8 * core + 0.55 * filaments);
    vec3 rim = mix(uColor, uGlowColor, 0.6) * fresnel * 1.6;

    vec3 finalColor = base + energy + rim;
    finalColor *= 1.15;
    gl_FragColor = vec4(finalColor, 1.0);
  }
`,Ia=`
  uniform float uTime;
  uniform vec3 uColor;
  
  varying vec3 vNormal;
  varying vec3 vLocalPos;
  varying vec3 vWorldPos;
  
  // Enhanced noise for plasma turbulence
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  
  float noise(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                   mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                   mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  
  // Turbulent plasma (multiple octaves)
  float turbulence(vec3 p) {
    float t = 0.0;
    float amp = 1.0;
    for (int i = 0; i < 4; i++) {
      t += abs(noise(p)) * amp;
      p *= 2.0;
      amp *= 0.5;
    }
    return t;
  }
  
  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    
    // LAYER 1: Dynamic plasma surface (roiling energy)
    vec3 plasmaCoord = vLocalPos * 3.0 + vec3(uTime * 0.5, -uTime * 0.3, uTime * 0.4);
    float plasma1 = turbulence(plasmaCoord);
    float plasma2 = turbulence(plasmaCoord * 1.5 + vec3(uTime * 0.2));
    float plasmaPattern = plasma1 * 0.6 + plasma2 * 0.4;
    
    // LAYER 2: Solar flares (bright active regions)
    vec3 flareCoord = vLocalPos * 4.0 + vec3(0.0, uTime * 0.8, 0.0);
    float flares = smoothstep(0.6, 0.8, noise(flareCoord));
    flares += smoothstep(0.65, 0.85, noise(flareCoord * 2.0 - uTime * 0.5)) * 0.5;
    
    // LAYER 3: Temperature-based coloring (photosphere)
    // HDR values for extreme brightness
    vec3 coreWhite = vec3(9.0, 9.5, 10.0);      // Blazing white-blue core
    vec3 hotYellow = vec3(7.0, 6.5, 4.0);       // Hot yellow
    vec3 warmOrange = uColor * 4.5;              // Orange-red edges
    
    vec3 surfaceColor = mix(hotYellow, coreWhite, plasmaPattern * 0.5);
    surfaceColor = mix(surfaceColor, warmOrange, smoothstep(0.4, 0.7, plasmaPattern));
    
    // Add flare hotspots
    surfaceColor += coreWhite * flares * 0.8;
    
    // LAYER 4: Corona glow (atmospheric halo)
    float fresnel = pow(1.0 - max(0.0, dot(viewDir, vNormal)), 2.0);
    vec3 coronaColor = warmOrange * 1.2;
    vec3 coronaGlow = coronaColor * fresnel * 5.0; // Intense corona
    
    // LAYER 5: Chromosphere (mid-layer between surface and corona)
    float chromosphere = pow(fresnel, 1.5) * (1.0 - fresnel);
    vec3 chromosphereColor = mix(warmOrange, hotYellow, 0.5);
    vec3 chromosphereGlow = chromosphereColor * chromosphere * 6.0;
    
    // LAYER 6: Surface detail enhancement
    float surfaceDetail = noise(vLocalPos * 15.0 + uTime * 0.3);
    float granulation = smoothstep(0.45, 0.55, surfaceDetail) * 0.3;
    
    // Combine all layers
    vec3 finalColor = surfaceColor * (1.0 + granulation);
    finalColor += coronaGlow + chromosphereGlow;
    
    // LAYER 7: Energy pulses across surface
    float pulse = sin(uTime * 4.0 + plasmaPattern * 8.0) * 0.15 + 0.85;
    finalColor *= pulse;
    
    // LAYER 8: Sparkle effect (surface eruptions/prominences)
    float sparkles = pow(max(0.0, noise(vLocalPos * 30.0 + uTime * 2.0)), 20.0);
    finalColor += coreWhite * sparkles * 2.0;
    
    // Overall brightness boost for bloom
    finalColor *= 1.3;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`,Ca=`
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Ea=`
  uniform vec3 uColor;
  uniform float uIntensity;
  
  varying vec2 vUv;
  
  void main() {
    vec2 center = vUv - 0.5;
    float dist = length(center);
    
    // Soft radial falloff
    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    glow = pow(glow, 2.0);
    
    // HDR color
    vec3 color = uColor * uIntensity * glow;
    float alpha = glow * 0.6;
    
    if (alpha < 0.01) discard;
    
    gl_FragColor = vec4(color, alpha);
  }
`,Se=class Se{constructor(){c(this,"geometries",new Map);c(this,"glowPlane",null);c(this,"voidPearlRing",null);c(this,"voidPearlCore",null);c(this,"nebulaShell",null);c(this,"cometTail",null);this.createGeometries()}static getInstance(){return Se.instance||(Se.instance=new Se),Se.instance}createGeometries(){const e=new at(1,3);this.addSurfaceVariation(e,.06),e.computeVertexNormals(),e.attributes.uv&&e.setAttribute("uv2",new F(e.attributes.uv.array,2)),this.geometries.set(S.STAR,e);const t=new at(1,3);this.addSurfaceVariation(t,.18),t.computeVertexNormals(),t.attributes.uv&&t.setAttribute("uv2",new F(t.attributes.uv.array,2)),this.geometries.set(S.METEOR,t);const s=this.createHexagonalCrystal();this.geometries.set(S.CRYSTAL,s);const i=new lt(1,42,28);this.addSurfaceVariation(i,.012),i.computeVertexNormals(),i.attributes.uv&&i.setAttribute("uv2",new F(i.attributes.uv.array,2)),this.geometries.set(S.VOID_PEARL,i),this.voidPearlRing=new no(1.12,.055,28,160),this.voidPearlCore=new lt(.66,26,20);const n=new at(1,4);this.addSurfaceVariation(n,.05),n.computeVertexNormals(),n.attributes.uv&&n.setAttribute("uv2",new F(n.attributes.uv.array,2)),this.geometries.set(S.NEBULA_CORE,n);const r=new rs(.62,.78,2.2,6,4);this.addSurfaceVariation(r,.06),r.computeVertexNormals(),r.attributes.uv&&r.setAttribute("uv2",new F(r.attributes.uv.array,2)),this.geometries.set(S.ANCIENT_RELIC,r);const a=new at(1,3);this.addSurfaceVariation(a,.2),a.computeVertexNormals(),a.attributes.uv&&a.setAttribute("uv2",new F(a.attributes.uv.array,2)),this.geometries.set(S.COMET_EMBER,a),this.nebulaShell=new lt(1.16,32,24),this.cometTail=new rs(0,.45,2,18,1,!0),this.glowPlane=new Ps(3,3)}createHexagonalCrystal(){const e=new pe,t=[],s=[],i=6,n=2.8,r=.85,a=.8;t.push(0,n/2+a,0);const A=0,l=t.length/3;for(let v=0;v<i;v++){const B=v/i*Math.PI*2,w=Math.cos(B)*r*.95,x=Math.sin(B)*r*.95;t.push(w,n/2,x)}const h=t.length/3;for(let v=0;v<i;v++){const B=v/i*Math.PI*2,w=Math.cos(B)*r,x=Math.sin(B)*r;t.push(w,n/4,x)}const d=t.length/3;for(let v=0;v<i;v++){const B=v/i*Math.PI*2,w=Math.cos(B)*r*1.05,x=Math.sin(B)*r*1.05;t.push(w,0,x)}const u=t.length/3;for(let v=0;v<i;v++){const B=v/i*Math.PI*2,w=Math.cos(B)*r,x=Math.sin(B)*r;t.push(w,-n/4,x)}const g=t.length/3;for(let v=0;v<i;v++){const B=v/i*Math.PI*2,w=Math.cos(B)*r*.95,x=Math.sin(B)*r*.95;t.push(w,-n/2,x)}const p=t.length/3;t.push(0,-n/2-a,0);for(let v=0;v<i;v++){const B=(v+1)%i;s.push(A,l+v,l+B)}const f=[l,h,d,u,g];for(let v=0;v<f.length-1;v++)for(let B=0;B<i;B++){const w=(B+1)%i,x=f[v],Q=f[v+1];s.push(x+B,Q+B,x+w),s.push(x+w,Q+B,Q+w)}for(let v=0;v<i;v++){const B=(v+1)%i;s.push(p,g+B,g+v)}e.setAttribute("position",new St(t,3)),e.setIndex(s);const m=e.attributes.position;let I=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY;for(let v=0;v<m.count;v++){const B=m.getY(v);B<I&&(I=B),B>C&&(C=B)}const E=Math.max(1e-6,C-I),y=[];for(let v=0;v<m.count;v++){const B=m.getX(v),w=m.getY(v),x=m.getZ(v),Q=Math.atan2(x,B)/(Math.PI*2)+.5,M=(w-I)/E;y.push(Q,M)}e.setAttribute("uv",new St(y,2)),e.setAttribute("uv2",new St(y,2));const b=e.attributes.position;for(let v=0;v<b.count;v++){const B=b.getX(v),w=b.getY(v),x=b.getZ(v);if(v===A||v===p)continue;const Q=Math.sin(B*13.7+w*7.3+x*11.1)*.04,M=Math.sqrt(B*B+x*x);M>.01&&(b.setX(v,B+B/M*Q),b.setZ(v,x+x/M*Q)),b.setY(v,w+Q*.5)}return e.computeVertexNormals(),e}addSurfaceVariation(e,t){const s=e.attributes.position,i=new T;for(let n=0;n<s.count;n++){const r=s.getX(n),a=s.getY(n),A=s.getZ(n),l=r*12.9898+a*78.233+A*37.719+n*.25,h=Math.sin(l)*43758.5453,d=h-Math.floor(h),u=i.set(r,a,A).normalize(),g=(d-.5)*2*t;s.setXYZ(n,r+u.x*g,a+u.y*g,A+u.z*g)}s.needsUpdate=!0}getGeometry(e){return this.geometries.get(e)}dispose(){for(const e of this.geometries.values())e.dispose();this.voidPearlRing?.dispose(),this.voidPearlCore?.dispose(),this.nebulaShell?.dispose(),this.cometTail?.dispose(),this.glowPlane?.dispose(),this.geometries.clear(),Se.instance=null}};c(Se,"instance",null);let Zt=Se;class $e{constructor(){c(this,"geometryCache");c(this,"glowMaterials",new Map);c(this,"rockTextures",ua({size:256,seed:1337}));c(this,"metalTextures",ga({size:256,seed:4242}));c(this,"crystalMicroNormal",da({size:256,seed:9001}));this.geometryCache=Zt.getInstance(),this.createGlowMaterials()}createGlowMaterials(){for(const e of Object.values(S)){const t=Ae[e],s=e===S.STAR?3.6:e===S.CRYSTAL?1.1:e===S.VOID_PEARL?1.15:e===S.NEBULA_CORE?1.35:e===S.COMET_EMBER?1.25:.95,i=new Z({uniforms:{uColor:{value:t.emissiveColor.clone()},uIntensity:{value:s}},vertexShader:Ca,fragmentShader:Ea,transparent:!0,blending:se,depthTest:!0,depthWrite:!1,side:ue,toneMapped:!0});this.glowMaterials.set(e,i)}}createObject(e){const t=Ae[e],s=this.geometryCache.getGeometry(e),i=this.createMaterial(e,t),n=new X(s,i);n.renderOrder=100;const r=new Ve;r.add(n);const a=new Ve;if(a.add(r),e===S.STAR){const A=new Ee({color:t.emissiveColor,transparent:!0,opacity:.22,blending:se,depthWrite:!1,depthTest:!0}),l=new X(s,A);l.scale.setScalar(1.1),l.renderOrder=97,r.add(l)}if(e===S.VOID_PEARL){if(this.geometryCache.voidPearlRing){const A=new re({color:t.color.clone().lerp(new D(16777215),.22),metalness:1,roughness:.14,clearcoat:1,clearcoatRoughness:.06,emissive:t.emissiveColor.clone(),emissiveIntensity:Math.max(.35,t.emissiveIntensity*.65)});A.envMapIntensity=2.35;const l=new X(this.geometryCache.voidPearlRing,A);l.rotation.set(.65,0,.25),l.renderOrder=99,r.add(l)}if(this.geometryCache.voidPearlCore){const A=new Ee({color:t.emissiveColor.clone(),transparent:!0,opacity:.12,blending:se,depthWrite:!1,depthTest:!0}),l=new X(this.geometryCache.voidPearlCore,A);l.renderOrder=98,r.add(l)}}if(e===S.NEBULA_CORE&&this.geometryCache.nebulaShell){const A=new Ee({color:t.emissiveColor.clone(),transparent:!0,opacity:.08,blending:se,depthWrite:!1,depthTest:!0}),l=new X(this.geometryCache.nebulaShell,A);l.renderOrder=98,a.add(l)}if(e===S.COMET_EMBER){const A=this.geometryCache.cometTail,l=new Z({uniforms:{uColor:{value:t.emissiveColor.clone()}},vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 uColor;
          varying vec2 vUv;
          void main() {
            float t = 1.0 - vUv.y;
            float glow = pow(t, 2.4);
            vec3 color = uColor * glow * 2.4;
            float alpha = glow * 0.35;
            if (alpha < 0.01) discard;
            gl_FragColor = vec4(color, alpha);
          }
        `,transparent:!0,blending:se,depthWrite:!1,depthTest:!0,toneMapped:!0,side:ue});if(A){const h=new X(A,l);h.rotation.x=-Math.PI/2,h.position.z=-1,h.renderOrder=98,r.add(h)}}if(e===S.STAR||e===S.CRYSTAL||e===S.VOID_PEARL||e===S.NEBULA_CORE||e===S.COMET_EMBER){const A=this.glowMaterials.get(e)?.clone();if(A&&this.geometryCache.glowPlane){const l=new X(this.geometryCache.glowPlane,A),h=e===S.STAR?2.1:e===S.CRYSTAL?1.35:e===S.NEBULA_CORE?1.55:e===S.COMET_EMBER?1.5:1.45;l.scale.setScalar(h),l.renderOrder=96,a.add(l),a.userData.glowSprite=l}}return a.scale.setScalar(t.scale),a.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),a.userData.cosmicType=e,a.userData.config=t,a.userData.coreMesh=n,a.userData.rotationRoot=r,a.userData.assetBacked=!1,a}createMaterial(e,t){if(e===S.STAR)return new Z({uniforms:{uTime:{value:Math.random()*100},uColor:{value:t.color.clone()},uGlowColor:{value:t.emissiveColor.clone()}},vertexShader:pa,fragmentShader:Ia,side:ut,depthTest:!0,depthWrite:!0,transparent:!1,toneMapped:!0});if(e===S.METEOR){const i=new et({color:t.color.clone(),metalness:0,roughness:1,map:this.rockTextures.map,normalMap:this.rockTextures.normalMap,normalScale:new O(1.35,1.35),roughnessMap:this.rockTextures.roughnessMap,aoMap:this.rockTextures.aoMap,aoMapIntensity:1,emissive:t.emissiveColor.clone(),emissiveMap:this.rockTextures.emissiveMap,emissiveIntensity:Math.max(.8,t.emissiveIntensity*1.35)});return i.envMapIntensity=1.65,i.depthTest=!0,i.depthWrite=!0,i.toneMapped=!0,i}if(e===S.VOID_PEARL){const i=new re({color:t.color.clone(),metalness:.25,roughness:.08,clearcoat:1,clearcoatRoughness:.03,ior:1.5,iridescence:.35,iridescenceIOR:1.25,iridescenceThicknessRange:[160,520],emissive:t.emissiveColor.clone(),emissiveIntensity:Math.max(.25,t.emissiveIntensity*.45)});return i.envMapIntensity=2.65,i.depthTest=!0,i.depthWrite=!0,i.toneMapped=!0,i}if(e===S.NEBULA_CORE)return new Z({uniforms:{uTime:{value:Math.random()*100},uColor:{value:t.color.clone()},uGlowColor:{value:t.emissiveColor.clone()}},vertexShader:fa,fragmentShader:ma,side:ut,depthTest:!0,depthWrite:!0,transparent:!1,toneMapped:!0});if(e===S.ANCIENT_RELIC){const i=new et({color:t.color.clone(),metalness:1,roughness:.28,map:this.metalTextures.map,normalMap:this.metalTextures.normalMap,normalScale:new O(1.15,1.15),roughnessMap:this.metalTextures.roughnessMap,aoMap:this.metalTextures.aoMap,aoMapIntensity:1,emissive:t.emissiveColor.clone(),emissiveMap:this.metalTextures.emissiveMap,emissiveIntensity:Math.max(.4,t.emissiveIntensity*1.15)});return i.envMapIntensity=2.15,i.depthTest=!0,i.depthWrite=!0,i.toneMapped=!0,i}if(e===S.COMET_EMBER){const i=new et({color:t.color.clone(),metalness:.05,roughness:.72,map:this.rockTextures.map,normalMap:this.rockTextures.normalMap,normalScale:new O(1.55,1.55),roughnessMap:this.rockTextures.roughnessMap,aoMap:this.rockTextures.aoMap,aoMapIntensity:1,emissive:t.emissiveColor.clone(),emissiveMap:this.rockTextures.emissiveMap,emissiveIntensity:Math.max(.85,t.emissiveIntensity*1.35)});return i.envMapIntensity=1.55,i.depthTest=!0,i.depthWrite=!0,i.toneMapped=!0,i}const s=new re({color:t.color.clone(),metalness:0,roughness:.06,transmission:0,thickness:0,ior:1.45,attenuationColor:t.color.clone(),attenuationDistance:0,clearcoat:1,clearcoatRoughness:.04,specularIntensity:1,specularColor:new D(16777215),iridescence:.35,iridescenceIOR:1.25,iridescenceThicknessRange:[120,420],emissive:t.emissiveColor.clone(),emissiveIntensity:Math.max(.5,t.emissiveIntensity*.9),side:ue});return s.normalMap=this.crystalMicroNormal,s.normalScale=new O(.75,.75),s.envMapIntensity=2.75,s.depthTest=!0,s.depthWrite=!1,s.toneMapped=!0,s}static updateObjectTime(e,t,s){const i=e.userData.coreMesh;if(i){const r=i.material;r instanceof Z&&r.uniforms?.uTime&&(r.uniforms.uTime.value=t)}const n=e.userData.glowSprite;n&&s&&n.quaternion.copy(s.quaternion)}static getRandomType(){const e=[S.STAR,S.METEOR,S.CRYSTAL,S.VOID_PEARL,S.NEBULA_CORE,S.ANCIENT_RELIC,S.COMET_EMBER];return e[Math.floor(Math.random()*e.length)]}dispose(){for(const e of this.glowMaterials.values())e.dispose();this.glowMaterials.clear(),this.rockTextures.map.dispose(),this.rockTextures.normalMap.dispose(),this.rockTextures.roughnessMap.dispose(),this.rockTextures.aoMap.dispose(),this.rockTextures.emissiveMap.dispose(),this.metalTextures.map.dispose(),this.metalTextures.normalMap.dispose(),this.metalTextures.roughnessMap.dispose(),this.metalTextures.aoMap.dispose(),this.metalTextures.emissiveMap.dispose(),this.crystalMicroNormal.dispose(),console.log("[CosmicObjectFactory] Disposed")}}class va{constructor(e,t,s={},i){c(this,"scene");c(this,"camera");c(this,"config");c(this,"factory");c(this,"spawningEnabled",!0);c(this,"despawnFadeDistance",1.6);c(this,"baseSpawnRate");c(this,"baseMaxActiveObjects");c(this,"objectScaleMultiplier",.6);c(this,"pool",[]);c(this,"nextId",0);c(this,"lastSpawnTime",0);c(this,"spawnInterval");c(this,"animationTime",0);c(this,"totalSliced",0);c(this,"speedMultiplier",1);c(this,"onObjectMissedHandler",null);c(this,"qualitySpawnRateMultiplier",1);c(this,"qualityMaxActiveMultiplier",1);c(this,"difficultySpawnRateMultiplier",1);c(this,"difficultyMaxActiveMultiplier",1);this.scene=e,this.camera=t,this.config={...ri,...s},this.factory=i??new $e,this.spawnInterval=1e3/this.config.spawnRate,this.baseSpawnRate=this.config.spawnRate,this.baseMaxActiveObjects=this.config.maxActiveObjects,this.initializePool()}recomputeEffectiveTuning(){const e=this.baseSpawnRate*this.qualitySpawnRateMultiplier*this.difficultySpawnRateMultiplier,t=Math.min(this.config.poolSize,Math.max(1,Math.floor(this.baseMaxActiveObjects*this.qualityMaxActiveMultiplier*this.difficultyMaxActiveMultiplier)));this.config.spawnRate=Math.max(.1,e),this.spawnInterval=1e3/this.config.spawnRate,this.config.maxActiveObjects=t}initializePool(){for(let e=0;e<this.config.poolSize;e++){const t=$e.getRandomType(),s=this.factory.createObject(t),i=Ae[t];s.visible=!1;const n={id:this.nextId++,state:j.POOLED,config:i,mesh:s,position:new T,velocity:new T,rotationSpeed:new T((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2),activatedAt:0,boundingSphere:new is(new T,i.collisionRadius)};this.pool.push(n),this.scene.add(s)}console.log(`[ObjectPoolManager] Initialized pool with ${this.config.poolSize} objects`)}update(e,t){this.animationTime+=e,this.trySpawn(t);const s=this.pool.filter(i=>i.state===j.ACTIVE);s.sort((i,n)=>n.position.z-i.position.z);for(let i=0;i<s.length;i++){const n=s[i];n.mesh.renderOrder=10+i,this.updateActiveObject(n,e)}}trySpawn(e){if(!this.spawningEnabled||e-this.lastSpawnTime<this.spawnInterval||this.getActiveCount()>=this.config.maxActiveObjects)return;const s=this.getPooledObject();s&&(this.activateObject(s),this.lastSpawnTime=e)}getPooledObject(){for(const e of this.pool)if(e.state===j.POOLED)return e;return null}activateObject(e){const t=$e.getRandomType(),s=Ae[t];e.config.type!==t&&(this.scene.remove(e.mesh),this.disposeObject(e.mesh),e.mesh=this.factory.createObject(t),e.config=s,this.scene.add(e.mesh));const i=this.pickSpawnPosition();e.position.copy(i),e.mesh.position.copy(e.position);const n=(Math.random()-.5)*3.8,r=(Math.random()-.5)*2.6,a=this.config.despawnZPosition,A=new T(n,r,a).sub(e.position).normalize(),l=.8+Math.random()*.4;e.velocity.copy(A).multiplyScalar(s.speed*l*this.speedMultiplier),e.rotationSpeed.set((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2),e.state=j.ACTIVE,e.activatedAt=performance.now(),e.mesh.visible=!0,e.mesh.renderOrder=10,e.mesh.traverse(u=>{u instanceof X&&u.material instanceof Be&&(u.material.depthTest=!0,u.material.transparent||(u.material.depthWrite=!0))});const h=.82+Math.random()*.25,d=s.scale*h*this.objectScaleMultiplier;e.mesh.scale.setScalar(d),e.mesh.userData.baseScale=d,this.applyDespawnFade(e.mesh,1),e.boundingSphere.center.copy(e.position),e.boundingSphere.radius=s.collisionRadius*d}updateActiveObject(e,t){e.position.addScaledVector(e.velocity,t),e.mesh.position.copy(e.position);const s=e.mesh.userData.rotationRoot??e.mesh.userData.coreMesh??e.mesh;s.rotation.x+=e.rotationSpeed.x*t,s.rotation.y+=e.rotationSpeed.y*t,s.rotation.z+=e.rotationSpeed.z*t,$e.updateObjectTime(e.mesh,this.animationTime,this.camera),e.boundingSphere.center.copy(e.position);const i=this.config.despawnZPosition-this.despawnFadeDistance,n=e.position.z<=i?1:Math.max(0,Math.min(1,(this.config.despawnZPosition-e.position.z)/this.despawnFadeDistance));this.applyDespawnFade(e.mesh,n);const r=e.mesh.userData.baseScale??e.mesh.scale.x,a=.72+.28*n;e.mesh.scale.setScalar(r*a),e.position.z>this.config.despawnZPosition+.15&&(this.onObjectMissedHandler?.(e),this.recycleObject(e,j.MISSED))}applyDespawnFade(e,t){const s=Math.max(0,Math.min(1,t));e.traverse(i=>{if(!(i instanceof X))return;const n=Array.isArray(i.material)?i.material:[i.material];for(const r of n){if(!(r instanceof Be))continue;const a=r.userData,A="__fadeOriginal";a[A]||(a[A]={transparent:r.transparent,opacity:r.opacity,depthWrite:r.depthWrite});const l=a[A],h=r.uniforms;h&&h.uFade&&(h.uFade.value=s),s>=.999?(r.transparent=l.transparent,r.opacity=l.opacity,r.depthWrite=l.depthWrite):(r.transparent=!0,r.opacity=l.opacity*s,r.depthWrite=!1),r.needsUpdate=!0}})}disposeObject(e){e.traverse(t=>{t instanceof X&&(t.geometry?.dispose(),t.material instanceof Be&&t.material.dispose())})}sliceObject(e){e.state===j.ACTIVE&&(e.state=j.SLICED,this.totalSliced++,e.mesh.visible=!1,setTimeout(()=>{this.recycleObject(e,j.POOLED)},50))}recycleObject(e,t){e.state=t===j.POOLED?j.POOLED:t,t===j.MISSED&&(e.state=j.POOLED),e.mesh.visible=!1}pickSpawnPosition(){const e=this.config.spawnSpread,t=this.config.spawnSpread*.55,s=this.config.spawnZPosition,i=new T,n=(r,a)=>{const A=r/2,l=Math.max(0,Math.min(.49,a))*A,h=Math.random()<.5?-1:1,d=Math.pow(Math.random(),1.9),u=l+(A-l)*d;return h*u};for(let r=0;r<6;r++)if(i.set(n(e,.18),(Math.random()-.5)*t,s),!this.pool.some(A=>A.state!==j.ACTIVE?!1:Math.hypot(A.position.x-i.x,A.position.y-i.y)<1.25))return i;return i}getActiveObjects(){return this.pool.filter(e=>e.state===j.ACTIVE)}getActiveCount(){return this.pool.filter(e=>e.state===j.ACTIVE).length}getTotalSliced(){return this.totalSliced}setSpawningEnabled(e){this.spawningEnabled=e}clearActiveObjects(){for(const e of this.pool)e.state===j.ACTIVE&&(e.state=j.POOLED,e.mesh.visible=!1)}onObjectMissed(e){this.onObjectMissedHandler=e}setSpeedMultiplier(e){const t=Math.max(.25,Math.min(4,e));if(Math.abs(t-this.speedMultiplier)<1e-6)return;const s=t/this.speedMultiplier;this.speedMultiplier=t;for(const i of this.pool)i.state===j.ACTIVE&&i.velocity.multiplyScalar(s)}setSpawnRate(e){this.baseSpawnRate=Math.max(.1,e),this.recomputeEffectiveTuning()}setMaxActiveObjects(e){this.baseMaxActiveObjects=Math.min(Math.max(1,Math.floor(e)),this.config.poolSize),this.recomputeEffectiveTuning()}setDifficultyScaling(e){typeof e.spawnRateMultiplier=="number"&&(this.difficultySpawnRateMultiplier=Math.max(.25,Math.min(4,e.spawnRateMultiplier))),typeof e.maxActiveMultiplier=="number"&&(this.difficultyMaxActiveMultiplier=Math.max(.5,Math.min(4,e.maxActiveMultiplier))),this.recomputeEffectiveTuning()}setObjectScaleMultiplier(e){this.objectScaleMultiplier=Math.max(.1,Math.min(2,e))}setQualityLevel(e){if(e==="high"){this.qualitySpawnRateMultiplier=1,this.qualityMaxActiveMultiplier=1,this.recomputeEffectiveTuning(),this.setObjectScaleMultiplier(.6);return}if(e==="medium"){this.qualitySpawnRateMultiplier=.8,this.qualityMaxActiveMultiplier=.8,this.recomputeEffectiveTuning(),this.setObjectScaleMultiplier(.58);return}this.qualitySpawnRateMultiplier=.6,this.qualityMaxActiveMultiplier=.6,this.recomputeEffectiveTuning(),this.setObjectScaleMultiplier(.55)}reset(){for(const e of this.pool)e.state=j.POOLED,e.mesh.visible=!1;this.totalSliced=0,this.lastSpawnTime=0,this.animationTime=0,this.speedMultiplier=1,this.difficultySpawnRateMultiplier=1,this.difficultyMaxActiveMultiplier=1,this.recomputeEffectiveTuning()}dispose(){for(const e of this.pool)this.scene.remove(e.mesh),this.disposeObject(e.mesh);this.pool=[],this.factory.dispose(),console.log("[ObjectPoolManager] Disposed")}}class Ba{constructor(e,t,s){c(this,"camera");c(this,"screenWidth");c(this,"screenHeight");c(this,"baseRadius",25);c(this,"collisionCooldown",200);c(this,"lastCollisionTimes",new Map);this.camera=e,this.screenWidth=t,this.screenHeight=s}setScreenSize(e,t){this.screenWidth=e,this.screenHeight=t}setCollisionRadius(e){this.baseRadius=e}projectToScreen(e){const t=e.clone();if(t.project(this.camera),t.z>1)return null;const s=(t.x+1)/2*this.screenWidth,i=(1-t.y)/2*this.screenHeight,n=this.camera.position.distanceTo(e),r=Math.max(.3,Math.min(1.5,5/n));return{x:s,y:i,scale:r}}detectCollisions(e,t){const s=[],i=performance.now();for(const n of t){const r=this.lastCollisionTimes.get(n.id);if(r&&i-r<this.collisionCooldown)continue;const a=this.projectToScreen(n.position);if(!a)continue;const A=this.baseRadius*a.scale*n.config.scale*1.2;for(const[l,h]of e){if(h.length<2)continue;const d=Math.max(0,h.length-3);for(let u=d;u<h.length-1;u++){const g=h[u],p=h[u+1];if(!(i-p.timestamp>80)&&this.lineCircleIntersection(g,p,a,A)){const m=this.calculateVelocity(h,u);s.push({object:n,screenPosition:a,handId:l,velocity:m}),this.lastCollisionTimes.set(n.id,i);break}}}}return this.cleanupCooldowns(i),s}lineCircleIntersection(e,t,s,i){const n=t.x-e.x,r=t.y-e.y,a=e.x-s.x,A=e.y-s.y,l=n*n+r*r;if(l<1e-4)return Math.sqrt(a*a+A*A)<i;const h=2*(a*n+A*r),d=a*a+A*A-i*i,u=h*h-4*l*d;if(u<0)return!1;const g=Math.sqrt(u),p=(-h-g)/(2*l),f=(-h+g)/(2*l);return p>=0&&p<=1||f>=0&&f<=1}calculateVelocity(e,t){if(t<0||t>=e.length-1)return 1;const s=e[t],i=e[t+1],n=i.x-s.x,r=i.y-s.y,a=Math.sqrt(n*n+r*r),A=Math.max(1,i.timestamp-s.timestamp)/1e3;return a/A}cleanupCooldowns(e){const t=e-this.collisionCooldown*2;for(const[s,i]of this.lastCollisionTimes)i<t&&this.lastCollisionTimes.delete(s)}reset(){this.lastCollisionTimes.clear()}dispose(){this.lastCollisionTimes.clear(),console.log("[CollisionDetector] Disposed")}}const ya=`
  attribute float aAlpha;
  attribute float aSize;
  attribute vec3 aColor;
  
  varying float vAlpha;
  varying vec3 vColor;
  
  void main() {
    vAlpha = aAlpha;
    vColor = aColor;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    float perspectiveSize = aSize * (250.0 / -mvPosition.z);
    gl_PointSize = clamp(perspectiveSize, 1.0, 15.0);
  }
`,wa=`
  varying float vAlpha;
  varying vec3 vColor;
  
  void main() {
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    if (dist > 0.5) discard;
    
    // Soft circular falloff
    float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
    
    if (alpha < 0.01) discard;
    
    // Additive glow effect
    vec3 color = vColor * (1.0 + alpha * 0.5);
    
    gl_FragColor = vec4(color, alpha);
  }
`;function It(o){return Math.max(0,Math.min(1,o))}function ba(o,e){const t={h:0,s:0,l:0};return o.getHSL(t),t.h=(t.h+(Math.random()-.5)*e+1)%1,t.s=It(t.s*(.9+Math.random()*.2)),t.l=It(t.l*(.85+Math.random()*.35)),new D().setHSL(t.h,t.s,t.l)}function xa(o,e){const t=e,s=i=>({countMin:Math.max(8,Math.min(t,Math.floor(t*i.cm))),countMax:Math.max(12,Math.min(t,Math.floor(t*i.cx))),sizeMin:i.sizeMin,sizeMax:i.sizeMax,speedMin:i.speedMin,speedMax:i.speedMax,hueJitter:i.hueJitter,colorMix:i.colorMix,discBias:i.discBias,sparkChance:i.sparkChance});return o===S.STAR?s({cm:.85,cx:1,sizeMin:.65,sizeMax:1.05,speedMin:1.05,speedMax:1.55,hueJitter:.02,colorMix:.55,discBias:.15,sparkChance:.18}):o===S.METEOR?s({cm:.75,cx:.95,sizeMin:.7,sizeMax:1.15,speedMin:1.1,speedMax:1.7,hueJitter:.03,colorMix:.5,discBias:.25,sparkChance:.14}):o===S.CRYSTAL?s({cm:.7,cx:.9,sizeMin:.75,sizeMax:1.25,speedMin:.95,speedMax:1.4,hueJitter:.04,colorMix:.62,discBias:.28,sparkChance:.08}):o===S.VOID_PEARL?s({cm:.65,cx:.85,sizeMin:.75,sizeMax:1.3,speedMin:.75,speedMax:1.15,hueJitter:.06,colorMix:.7,discBias:.45,sparkChance:.1}):o===S.NEBULA_CORE?s({cm:.75,cx:.95,sizeMin:.8,sizeMax:1.45,speedMin:.8,speedMax:1.25,hueJitter:.08,colorMix:.72,discBias:.55,sparkChance:.06}):o===S.ANCIENT_RELIC?s({cm:.65,cx:.85,sizeMin:.65,sizeMax:1.1,speedMin:.9,speedMax:1.35,hueJitter:.02,colorMix:.42,discBias:.18,sparkChance:.12}):s({cm:.75,cx:.95,sizeMin:.8,sizeMax:1.35,speedMin:1.15,speedMax:1.75,hueJitter:.04,colorMix:.55,discBias:.2,sparkChance:.16})}class Sa{constructor(e,t={},s=10){c(this,"scene");c(this,"config");c(this,"geometry");c(this,"material");c(this,"points");c(this,"maxExplosions");c(this,"totalParticles");c(this,"explosions",[]);c(this,"nextId",0);c(this,"velocities");c(this,"initialAlphas");c(this,"lifetimeOffsets");c(this,"positionAttr");c(this,"alphaAttr");c(this,"sizeAttr");c(this,"colorAttr");c(this,"isActive",!1);this.scene=e,this.config={...ai,...t},this.maxExplosions=s,this.totalParticles=this.config.particleCount*s,this.velocities=new Float32Array(this.totalParticles*3),this.initialAlphas=new Float32Array(this.totalParticles),this.lifetimeOffsets=new Float32Array(this.totalParticles),this.geometry=this.createGeometry(),this.material=this.createMaterial(),this.points=new _e(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=20,this.positionAttr=this.geometry.getAttribute("position"),this.alphaAttr=this.geometry.getAttribute("aAlpha"),this.sizeAttr=this.geometry.getAttribute("aSize"),this.colorAttr=this.geometry.getAttribute("aColor"),this.scene.add(this.points)}createGeometry(){const e=new pe,t=new Float32Array(this.totalParticles*3),s=new Float32Array(this.totalParticles),i=new Float32Array(this.totalParticles),n=new Float32Array(this.totalParticles*3);s.fill(0),i.fill(this.config.particleSize);for(let r=0;r<this.totalParticles;r++)n[r*3]=1,n[r*3+1]=1,n[r*3+2]=1;return e.setAttribute("position",new F(t,3)),e.setAttribute("aAlpha",new F(s,1)),e.setAttribute("aSize",new F(i,1)),e.setAttribute("aColor",new F(n,3)),e}createMaterial(){return new Z({vertexShader:ya,fragmentShader:wa,transparent:!0,blending:se,depthWrite:!1})}trigger(e,t,s=1){const i=t instanceof D?{type:S.METEOR,baseColor:t,glowColor:t,velocityMultiplier:s}:{...t,velocityMultiplier:t.velocityMultiplier??s};let n=-1;for(let l=0;l<this.maxExplosions;l++)if(!this.explosions[l]||!this.explosions[l].active){n=l;break}if(n===-1){let l=1/0;for(let h=0;h<this.explosions.length;h++)this.explosions[h].startTime<l&&(l=this.explosions[h].startTime,n=h);n>=0&&this.explosions[n]&&this.deactivate(this.explosions[n])}n===-1&&(n=0);const r=xa(i.type,this.config.particleCount),a=r.countMin+Math.floor(Math.random()*Math.max(1,r.countMax-r.countMin+1)),A={id:this.nextId++,startTime:performance.now()/1e3,startIndex:n*this.config.particleCount,count:a,origin:e.clone(),baseColor:i.baseColor.clone(),glowColor:i.glowColor.clone(),style:r,active:!0};return this.initializeParticles(A,i.velocityMultiplier),this.explosions.length<=n?this.explosions.push(A):this.explosions[n]=A,this.isActive=!0,A.id}initializeParticles(e,t){const s=this.positionAttr.array,i=this.alphaAttr.array,n=this.sizeAttr.array,r=this.colorAttr.array,a=e.style,A=It(a.discBias+(Math.random()-.5)*.1),l=a.speedMin+Math.random()*(a.speedMax-a.speedMin),h=a.sizeMin+Math.random()*(a.sizeMax-a.sizeMin);for(let d=0;d<e.count;d++){const u=e.startIndex+d,g=u*3;s[g]=e.origin.x,s[g+1]=e.origin.y,s[g+2]=e.origin.z;const p=Math.random()*Math.PI*2,f=Math.random(),m=Math.acos(2*f-1),I=this.config.initialVelocity*(.5+Math.random())*t*l,C=Math.random()<A,E=C?1:Math.sin(m),y=C?(Math.random()-.5)*.35:Math.cos(m);this.velocities[g]=E*Math.cos(p)*I,this.velocities[g+1]=E*Math.sin(p)*I,this.velocities[g+2]=y*I,i[u]=.7+Math.random()*.3,this.initialAlphas[u]=i[u],this.lifetimeOffsets[u]=(Math.random()-.5)*.25,n[u]=this.config.particleSize*h*(.55+Math.random()*.9);const b=It(a.colorMix+(Math.random()-.5)*.22),v=e.baseColor.clone().lerp(e.glowColor,b),B=ba(v,a.hueJitter),w=Math.random()<a.sparkChance;w&&B.lerp(new D(16777215),.55);const x=w?1.25+Math.random()*.75:.85+Math.random()*.55;B.multiplyScalar(x),r[g]=B.r,r[g+1]=B.g,r[g+2]=B.b}this.positionAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0,this.sizeAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0}update(e){if(!this.isActive)return;const t=performance.now()/1e3,s=this.positionAttr.array,i=this.alphaAttr.array;let n=!1,r=!1;for(const a of this.explosions){if(!a||!a.active)continue;const l=(t-a.startTime)/this.config.duration;if(l>=1){this.deactivate(a),r=!0;continue}n=!0,r=!0;for(let h=0;h<a.count;h++){const d=a.startIndex+h,u=d*3,g=Math.pow(this.config.velocityDecay,e*60);this.velocities[u]*=g,this.velocities[u+1]*=g,this.velocities[u+2]*=g,s[u]+=this.velocities[u]*e,s[u+1]+=this.velocities[u+1]*e,s[u+2]+=this.velocities[u+2]*e;const f=1-Math.max(0,Math.min(1,l+this.lifetimeOffsets[d]));i[d]=this.initialAlphas[d]*f*f}}r&&(this.positionAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0),this.isActive=n}deactivate(e){e.active=!1;const t=this.alphaAttr.array;for(let s=0;s<e.count;s++)t[e.startIndex+s]=0}getActiveCount(){return this.explosions.filter(e=>e&&e.active).length}hasActiveExplosions(){return this.isActive}clear(){for(const e of this.explosions)e&&this.deactivate(e);this.isActive=!1}dispose(){this.scene.remove(this.points),this.geometry.dispose(),this.material.dispose(),this.explosions=[],console.log("[SliceEffect] Disposed")}}const Qa=`
  attribute float aSize;
  attribute float aBrightness;
  attribute float aSeed;
  
  uniform float uTime;
  uniform float uSize;
  
  varying float vBrightness;
  varying float vTemperature;
  
  void main() {
    vTemperature = aSeed;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    
    float twinkleSpeed = 0.95 + aSeed * 10.25;
    float twinklePhase = aSeed * 6.28318;
    float twinkle = 0.75 + 0.25 * sin(uTime * twinkleSpeed + twinklePhase);

    float slowTwinkle = 0.85 + 0.15 * sin(uTime * 0.28 + aSeed * 3.14159);
    twinkle *= slowTwinkle;

    float micro = 0.5 + 0.5 * sin(uTime * (twinkleSpeed * 2.2) + twinklePhase * 3.7);
    micro = pow(micro, 8.0);
    twinkle = clamp(twinkle + micro * 0.35, 0.0, 1.35);

    vBrightness = aBrightness * twinkle;

    float perspectiveSize = aSize * uSize * (300.0 / -mvPosition.z);
    perspectiveSize *= (0.9 + 0.95 * twinkle);
    gl_PointSize = clamp(perspectiveSize, 0.35, 3.6);
    
    gl_Position = projectionMatrix * mvPosition;
  }
`,Ma=`
  varying float vBrightness;
  varying float vTemperature;
  
  void main() {
    // Circular point with soft falloff
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    if (dist > 0.5) discard;
    
    float alpha = exp(-dist * dist * 8.0);
    float halo = exp(-dist * 2.0) * 0.95;
    alpha += halo;
    
    alpha *= vBrightness;
    
    if (alpha < 0.01) discard;
    
    // Color based on temperature (seed)
    vec3 starColor;
    
    if (vTemperature < 0.25) {
      // Blue-white stars
      starColor = mix(
        vec3(0.7, 0.85, 1.0),
        vec3(0.9, 0.95, 1.0),
        vTemperature * 4.0
      );
    } else if (vTemperature < 0.5) {
      // Purple-magenta
      starColor = mix(
        vec3(0.85, 0.75, 1.0),
        vec3(1.0, 0.7, 0.95),
        (vTemperature - 0.25) * 4.0
      );
    } else if (vTemperature < 0.75) {
      // Cyan-teal
      starColor = mix(
        vec3(0.6, 1.0, 1.0),
        vec3(0.8, 0.95, 1.0),
        (vTemperature - 0.5) * 4.0
      );
    } else {
      // Warm white
      starColor = mix(
        vec3(1.0, 0.95, 0.9),
        vec3(1.0, 0.9, 0.8),
        (vTemperature - 0.75) * 4.0
      );
    }
    
    starColor *= (1.0 + vBrightness * 0.65);
    
    gl_FragColor = vec4(starColor, alpha);
  }
`;class Ta{constructor(e,t={}){c(this,"scene");c(this,"config");c(this,"geometry",null);c(this,"material",null);c(this,"points",null);c(this,"uniforms");this.scene=e,this.config={...Ai,...t},this.uniforms={uTime:{value:0},uSize:{value:this.config.starSize}},this.initialize()}initialize(){this.geometry=new pe;const{starCount:e,starSpread:t}=this.config,s=new Float32Array(e*3),i=new Float32Array(e),n=new Float32Array(e),r=new Float32Array(e);for(let a=0;a<e;a++){const A=a*3,l=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),d=t*(.3+Math.random()*.7);s[A]=Math.sin(h)*Math.cos(l)*d,s[A+1]=Math.sin(h)*Math.sin(l)*d,s[A+2]=Math.cos(h)*d,i[a]=.3+Math.pow(Math.random(),3)*.7,n[a]=.3+Math.random()*.7,r[a]=Math.random()}this.geometry.setAttribute("position",new F(s,3)),this.geometry.setAttribute("aSize",new F(i,1)),this.geometry.setAttribute("aBrightness",new F(n,1)),this.geometry.setAttribute("aSeed",new F(r,1)),this.material=new Z({uniforms:this.uniforms,vertexShader:Qa,fragmentShader:Ma,transparent:!0,blending:se,depthWrite:!1}),this.points=new _e(this.geometry,this.material),this.points.frustumCulled=!1,this.points.renderOrder=-1,this.scene.add(this.points),console.log(`[CosmicBackground] Initialized with ${e} stars`)}update(e){this.uniforms.uTime.value+=e*this.config.twinkleSpeed,this.points&&(this.points.rotation.y+=e*.03,this.points.rotation.x+=e*.03)}setStarSize(e){this.config.starSize=e,this.uniforms.uSize.value=e}setTwinkleSpeed(e){this.config.twinkleSpeed=e}show(){this.points&&(this.points.visible=!0)}hide(){this.points&&(this.points.visible=!1)}isVisible(){return this.points?.visible??!1}dispose(){this.points&&this.scene.remove(this.points),this.geometry?.dispose(),this.material?.dispose(),this.geometry=null,this.material=null,this.points=null,console.log("[CosmicBackground] Disposed")}}function vs(o,e){if(e===ro)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Vt||e===Ns){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let A=0;A<a.count;A++)r.push(A);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const s=t.count-2,i=[];if(e===Vt)for(let r=1;r<=s;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<s;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=o.clone();return n.setIndex(i),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Ra extends Hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ka(t)}),this.register(function(t){return new Ua(t)}),this.register(function(t){return new Ya(t)}),this.register(function(t){return new Ja(t)}),this.register(function(t){return new Ka(t)}),this.register(function(t){return new Pa(t)}),this.register(function(t){return new Na(t)}),this.register(function(t){return new Ha(t)}),this.register(function(t){return new Oa(t)}),this.register(function(t){return new _a(t)}),this.register(function(t){return new za(t)}),this.register(function(t){return new Ga(t)}),this.register(function(t){return new qa(t)}),this.register(function(t){return new Va(t)}),this.register(function(t){return new Fa(t)}),this.register(function(t){return new Wa(t)}),this.register(function(t){return new ja(t)})}load(e,t,s,i){const n=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=tt.extractUrlBase(e);r=tt.resolveURL(l,this.path)}else r=tt.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),n.manager.itemError(e),n.manager.itemEnd(e)},A=new st(this.manager);A.setPath(this.path),A.setResponseType("arraybuffer"),A.setRequestHeader(this.requestHeader),A.setWithCredentials(this.withCredentials),A.load(e,function(l){try{n.parse(l,r,function(h){t(h),n.manager.itemEnd(e)},a)}catch(h){a(h)}},s,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,s,i){let n;const r={},a={},A=new TextDecoder;if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(A.decode(new Uint8Array(e,0,4))===li){try{r[U.KHR_BINARY_GLTF]=new Xa(e)}catch(d){i&&i(d);return}n=JSON.parse(r[U.KHR_BINARY_GLTF].content)}else n=JSON.parse(A.decode(e));else n=e;if(n.asset===void 0||n.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new cA(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,r[d.name]=!0}if(n.extensionsUsed)for(let h=0;h<n.extensionsUsed.length;++h){const d=n.extensionsUsed[h],u=n.extensionsRequired||[];switch(d){case U.KHR_MATERIALS_UNLIT:r[d]=new La;break;case U.KHR_DRACO_MESH_COMPRESSION:r[d]=new Za(n,this.dracoLoader);break;case U.KHR_TEXTURE_TRANSFORM:r[d]=new $a;break;case U.KHR_MESH_QUANTIZATION:r[d]=new eA;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(s,i)}parseAsync(e,t){const s=this;return new Promise(function(i,n){s.parse(e,t,i,n)})}}function Da(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const U={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fa{constructor(e){this.parser=e,this.name=U.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let s=0,i=t.length;s<i;s++){const n=t[s];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,s="light:"+e;let i=t.cache.get(s);if(i)return i;const n=t.json,A=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let l;const h=new D(16777215);A.color!==void 0&&h.setRGB(A.color[0],A.color[1],A.color[2],ie);const d=A.range!==void 0?A.range:0;switch(A.type){case"directional":l=new ct(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ft(h),l.distance=d;break;case"spot":l=new ao(h),l.distance=d,A.spot=A.spot||{},A.spot.innerConeAngle=A.spot.innerConeAngle!==void 0?A.spot.innerConeAngle:0,A.spot.outerConeAngle=A.spot.outerConeAngle!==void 0?A.spot.outerConeAngle:Math.PI/4,l.angle=A.spot.outerConeAngle,l.penumbra=1-A.spot.innerConeAngle/A.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+A.type)}return l.position.set(0,0,0),me(l,A),A.intensity!==void 0&&(l.intensity=A.intensity),l.name=t.createUniqueName(A.name||"light_"+e),i=Promise.resolve(l),t.cache.add(s,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,s=this.parser,n=s.json.nodes[e],a=(n.extensions&&n.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(A){return s._getNodeRef(t.cache,a,A)})}}class La{constructor(){this.name=U.KHR_MATERIALS_UNLIT}getMaterialType(){return Ee}extendParams(e,t,s){const i=[];e.color=new D(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const r=n.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],ie),e.opacity=r[3]}n.baseColorTexture!==void 0&&i.push(s.assignTexture(e,"map",n.baseColorTexture,P))}return Promise.all(i)}}class _a{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name].emissiveStrength;return n!==void 0&&(t.emissiveIntensity=n),Promise.resolve()}}class ka{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&n.push(s.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&n.push(s.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(n.push(s.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new O(a,a)}return Promise.all(n)}}class Ua{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_DISPERSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name];return t.dispersion=n.dispersion!==void 0?n.dispersion:0,Promise.resolve()}}class Ga{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&n.push(s.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&n.push(s.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(n)}}class Pa{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_SHEEN}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new D(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ie)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&n.push(s.assignTexture(t,"sheenColorMap",r.sheenColorTexture,P)),r.sheenRoughnessTexture!==void 0&&n.push(s.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(n)}}class Na{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&n.push(s.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(n)}}class Ha{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_VOLUME}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&n.push(s.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new D().setRGB(a[0],a[1],a[2],ie),Promise.all(n)}}class Oa{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_IOR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}}class za{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_SPECULAR}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&n.push(s.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new D().setRGB(a[0],a[1],a[2],ie),r.specularColorTexture!==void 0&&n.push(s.assignTexture(t,"specularColorMap",r.specularColorTexture,P)),Promise.all(n)}}class Va{constructor(e){this.parser=e,this.name=U.EXT_MATERIALS_BUMP}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&n.push(s.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(n)}}class qa{constructor(e){this.parser=e,this.name=U.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const s=this.parser.json.materials[e];return!s.extensions||!s.extensions[this.name]?null:re}extendMaterialParams(e,t){const s=this.parser,i=s.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&n.push(s.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(n)}}class Ya{constructor(e){this.parser=e,this.name=U.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,s=t.json,i=s.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const n=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(s.extensionsRequired&&s.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,r)}}class Ja{constructor(e){this.parser=e,this.name=U.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,s=this.parser,i=s.json,n=i.textures[e];if(!n.extensions||!n.extensions[t])return null;const r=n.extensions[t],a=i.images[r.source];let A=s.textureLoader;if(a.uri){const l=s.options.manager.getHandler(a.uri);l!==null&&(A=l)}return s.loadTextureImage(e,r.source,A)}}class Ka{constructor(e){this.parser=e,this.name=U.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,s=this.parser,i=s.json,n=i.textures[e];if(!n.extensions||!n.extensions[t])return null;const r=n.extensions[t],a=i.images[r.source];let A=s.textureLoader;if(a.uri){const l=s.options.manager.getHandler(a.uri);l!==null&&(A=l)}return s.loadTextureImage(e,r.source,A)}}class Wa{constructor(e){this.name=U.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,s=t.bufferViews[e];if(s.extensions&&s.extensions[this.name]){const i=s.extensions[this.name],n=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(a){const A=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,A,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(g){return g.buffer}):r.ready.then(function(){const g=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(g),h,d,u,i.mode,i.filter),g})})}else return null}}class ja{constructor(e){this.name=U.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,s=t.nodes[e];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const i=t.meshes[s.mesh];for(const l of i.primitives)if(l.mode!==ae.TRIANGLES&&l.mode!==ae.TRIANGLE_STRIP&&l.mode!==ae.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=s.extensions[this.name].attributes,a=[],A={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(h=>(A[l]=h,A[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,g=[];for(const p of d){const f=new it,m=new T,I=new ze,C=new T(1,1,1),E=new Ao(p.geometry,p.material,u);for(let y=0;y<u;y++)A.TRANSLATION&&m.fromBufferAttribute(A.TRANSLATION,y),A.ROTATION&&I.fromBufferAttribute(A.ROTATION,y),A.SCALE&&C.fromBufferAttribute(A.SCALE,y),E.setMatrixAt(y,f.compose(m,I,C));for(const y in A)if(y==="_COLOR_0"){const b=A[y];E.instanceColor=new lo(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&p.geometry.setAttribute(y,A[y]);Os.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),g.push(E)}return h.isGroup?(h.clear(),h.add(...g),h):g[0]}))}}const li="glTF",We=12,Bs={JSON:1313821514,BIN:5130562};class Xa{constructor(e){this.name=U.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,We),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==li)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-We,n=new DataView(e,We);let r=0;for(;r<i;){const a=n.getUint32(r,!0);r+=4;const A=n.getUint32(r,!0);if(r+=4,A===Bs.JSON){const l=new Uint8Array(e,We+r,a);this.content=s.decode(l)}else if(A===Bs.BIN){const l=We+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Za{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=U.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const s=this.json,i=this.dracoLoader,n=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},A={},l={};for(const h in r){const d=$t[h]||h.toLowerCase();a[d]=r[h]}for(const h in e.attributes){const d=$t[h]||h.toLowerCase();if(r[h]!==void 0){const u=s.accessors[e.attributes[h]],g=qe[u.componentType];l[d]=g.name,A[d]=u.normalized===!0}}return t.getDependency("bufferView",n).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(g){for(const p in g.attributes){const f=g.attributes[p],m=A[p];m!==void 0&&(f.normalized=m)}d(g)},a,l,ie,u)})})}}class $a{constructor(){this.name=U.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class eA{constructor(){this.name=U.KHR_MESH_QUANTIZATION}}class ci extends Qo{constructor(e,t,s,i){super(e,t,s,i)}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,i=this.valueSize,n=e*i*3+i;for(let r=0;r!==i;r++)t[r]=s[n+r];return t}interpolate_(e,t,s,i){const n=this.resultBuffer,r=this.sampleValues,a=this.valueSize,A=a*2,l=a*3,h=i-t,d=(s-t)/h,u=d*d,g=u*d,p=e*l,f=p-l,m=-2*g+3*u,I=g-u,C=1-m,E=I-u+d;for(let y=0;y!==a;y++){const b=r[f+y+a],v=r[f+y+A]*h,B=r[p+y+a],w=r[p+y]*h;n[y]=C*b+E*v+m*B+I*w}return n}}const tA=new ze;class sA extends ci{interpolate_(e,t,s,i){const n=super.interpolate_(e,t,s,i);return tA.fromArray(n).normalize().toArray(n),n}}const ae={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qe={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ys={9728:Ye,9729:Y,9984:zs,9985:po,9986:go,9987:ke},ws={33071:Qe,33648:fo,10497:Te},Dt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$t={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},be={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iA={CUBICSPLINE:void 0,LINEAR:qs,STEP:xo},Ft={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oA(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ut})),o.DefaultMaterial}function Fe(o,e,t){for(const s in t.extensions)o[s]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[s]=t.extensions[s])}function me(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nA(o,e,t){let s=!1,i=!1,n=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(s=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(n=!0),s&&i&&n)break}if(!s&&!i&&!n)return Promise.resolve(o);const r=[],a=[],A=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(s){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):o.attributes.position;r.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):o.attributes.normal;a.push(u)}if(n){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):o.attributes.color;A.push(u)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(A)]).then(function(l){const h=l[0],d=l[1],u=l[2];return s&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=d),n&&(o.morphAttributes.color=u),o.morphTargetsRelative=!0,o})}function rA(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,s=e.weights.length;t<s;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let s=0,i=t.length;s<i;s++)o.morphTargetDictionary[t[s]]=s}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aA(o){let e;const t=o.extensions&&o.extensions[U.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lt(t.attributes):e=o.indices+":"+Lt(o.attributes)+":"+o.mode,o.targets!==void 0)for(let s=0,i=o.targets.length;s<i;s++)e+=":"+Lt(o.targets[s]);return e}function Lt(o){let e="";const t=Object.keys(o).sort();for(let s=0,i=t.length;s<i;s++)e+=t[s]+":"+o[t[s]]+";";return e}function es(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AA(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lA=new it;class cA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Da,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let s=!1,i=-1,n=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;s=/^((?!chrome|android).)*safari/i.test(a)===!0;const A=a.match(/Version\/(\d+)/);i=s&&A?parseInt(A[1],10):-1,n=a.indexOf("Firefox")>-1,r=n?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||s&&i<17||n&&r<98?this.textureLoader=new co(this.options.manager):this.textureLoader=new ho(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new st(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const s=this,i=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([s.getDependencies("scene"),s.getDependencies("animation"),s.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:s,userData:{}};return Fe(n,a,i),me(a,i),Promise.all(s._invokeAll(function(A){return A.afterRoot&&A.afterRoot(a)})).then(function(){for(const A of a.scenes)A.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],s=this.json.meshes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i].joints;for(let a=0,A=r.length;a<A;a++)e[r[a]].isBone=!0}for(let i=0,n=e.length;i<n;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(s[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,s){if(e.refs[t]<=1)return s;const i=s.clone(),n=(r,a)=>{const A=this.associations.get(r);A!=null&&this.associations.set(a,A);for(const[l,h]of r.children.entries())n(h,a.children[l])};return n(s,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let s=0;s<t.length;s++){const i=e(t[s]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const s=[];for(let i=0;i<t.length;i++){const n=e(t[i]);n&&s.push(n)}return s}getDependency(e,t){const s=e+":"+t;let i=this.cache.get(s);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":i=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(s,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const s=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(n,r){return s.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],s=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[U.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(n,r){s.load(tt.resolveURL(t.uri,i.path),n,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(s){const i=t.byteLength||0,n=t.byteOffset||0;return s.slice(n,n+i)})}loadAccessor(e){const t=this,s=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Dt[i.type],a=qe[i.componentType],A=i.normalized===!0,l=new a(i.count*r);return Promise.resolve(new F(l,r,A))}const n=[];return i.bufferView!==void 0?n.push(this.getDependency("bufferView",i.bufferView)):n.push(null),i.sparse!==void 0&&(n.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(n).then(function(r){const a=r[0],A=Dt[i.type],l=qe[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*A,u=i.byteOffset||0,g=i.bufferView!==void 0?s.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let f,m;if(g&&g!==d){const I=Math.floor(u/g),C="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+I+":"+i.count;let E=t.cache.get(C);E||(f=new l(a,I*g,i.count*g/h),E=new uo(f,g/h),t.cache.add(C,E)),m=new So(E,A,u%g/h,p)}else a===null?f=new l(i.count*A):f=new l(a,u,i.count*A),m=new F(f,A,p);if(i.sparse!==void 0){const I=Dt.SCALAR,C=qe[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new C(r[1],E,i.sparse.count*I),v=new l(r[2],y,i.sparse.count*A);a!==null&&(m=new F(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let B=0,w=b.length;B<w;B++){const x=b[B];if(m.setX(x,v[B*A]),A>=2&&m.setY(x,v[B*A+1]),A>=3&&m.setZ(x,v[B*A+2]),A>=4&&m.setW(x,v[B*A+3]),A>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,s=this.options,n=t.textures[e].source,r=t.images[n];let a=this.textureLoader;if(r.uri){const A=s.manager.getHandler(r.uri);A!==null&&(a=A)}return this.loadTextureImage(e,n,a)}loadTextureImage(e,t,s){const i=this,n=this.json,r=n.textures[e],a=n.images[t],A=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[A])return this.textureCache[A];const l=this.loadImageSource(t,s).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const u=(n.samplers||{})[r.sampler]||{};return h.magFilter=ys[u.magFilter]||Y,h.minFilter=ys[u.minFilter]||ke,h.wrapS=ws[u.wrapS]||Te,h.wrapT=ws[u.wrapT]||Te,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ye&&h.minFilter!==Y,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[A]=l,l}loadImageSource(e,t){const s=this,i=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],a=self.URL||self.webkitURL;let A=r.uri||"",l=!1;if(r.bufferView!==void 0)A=s.getDependency("bufferView",r.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:r.mimeType});return A=a.createObjectURL(u),A});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(A).then(function(d){return new Promise(function(u,g){let p=u;t.isImageBitmapLoader===!0&&(p=function(f){const m=new pt(f);m.needsUpdate=!0,u(m)}),t.load(tt.resolveURL(d,n.path),p,void 0,g)})}).then(function(d){return l===!0&&a.revokeObjectURL(A),me(d,r),d.userData.mimeType=r.mimeType||AA(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",A),d});return this.sourceCache[e]=h,h}assignTexture(e,t,s,i){const n=this;return this.getDependency("texture",s.index).then(function(r){if(!r)return null;if(s.texCoord!==void 0&&s.texCoord>0&&(r=r.clone(),r.channel=s.texCoord),n.extensions[U.KHR_TEXTURE_TRANSFORM]){const a=s.extensions!==void 0?s.extensions[U.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const A=n.associations.get(r);r=n.extensions[U.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),n.associations.set(r,A)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let s=e.material;const i=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+s.uuid;let A=this.cache.get(a);A||(A=new Vs,Be.prototype.copy.call(A,s),A.color.copy(s.color),A.map=s.map,A.sizeAttenuation=!1,this.cache.add(a,A)),s=A}else if(e.isLine){const a="LineBasicMaterial:"+s.uuid;let A=this.cache.get(a);A||(A=new mo,Be.prototype.copy.call(A,s),A.color.copy(s.color),A.map=s.map,this.cache.add(a,A)),s=A}if(i||n||r){let a="ClonedMaterial:"+s.uuid+":";i&&(a+="derivative-tangents:"),n&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let A=this.cache.get(a);A||(A=s.clone(),n&&(A.vertexColors=!0),r&&(A.flatShading=!0),i&&(A.normalScale&&(A.normalScale.y*=-1),A.clearcoatNormalScale&&(A.clearcoatNormalScale.y*=-1)),this.cache.add(a,A),this.associations.set(A,this.associations.get(s))),s=A}e.material=s}getMaterialType(){return et}loadMaterial(e){const t=this,s=this.json,i=this.extensions,n=s.materials[e];let r;const a={},A=n.extensions||{},l=[];if(A[U.KHR_MATERIALS_UNLIT]){const d=i[U.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),l.push(d.extendParams(a,n,t))}else{const d=n.pbrMetallicRoughness||{};if(a.color=new D(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],ie),a.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,P)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}n.doubleSided===!0&&(a.side=ue);const h=n.alphaMode||Ft.OPAQUE;if(h===Ft.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ft.MASK&&(a.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&r!==Ee&&(l.push(t.assignTexture(a,"normalMap",n.normalTexture)),a.normalScale=new O(1,1),n.normalTexture.scale!==void 0)){const d=n.normalTexture.scale;a.normalScale.set(d,d)}if(n.occlusionTexture!==void 0&&r!==Ee&&(l.push(t.assignTexture(a,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&r!==Ee){const d=n.emissiveFactor;a.emissive=new D().setRGB(d[0],d[1],d[2],ie)}return n.emissiveTexture!==void 0&&r!==Ee&&l.push(t.assignTexture(a,"emissiveMap",n.emissiveTexture,P)),Promise.all(l).then(function(){const d=new r(a);return n.name&&(d.name=n.name),me(d,n),t.associations.set(d,{materials:e}),n.extensions&&Fe(i,d,n),d})}createUniqueName(e){const t=Io.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,s=this.extensions,i=this.primitiveCache;function n(a){return s[U.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(A){return bs(A,a,t)})}const r=[];for(let a=0,A=e.length;a<A;a++){const l=e[a],h=aA(l),d=i[h];if(d)r.push(d.promise);else{let u;l.extensions&&l.extensions[U.KHR_DRACO_MESH_COMPRESSION]?u=n(l):u=bs(new pe,l,t),i[h]={primitive:l,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,s=this.json,i=this.extensions,n=s.meshes[e],r=n.primitives,a=[];for(let A=0,l=r.length;A<l;A++){const h=r[A].material===void 0?oA(this.cache):this.getDependency("material",r[A].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(A){const l=A.slice(0,A.length-1),h=A[A.length-1],d=[];for(let g=0,p=h.length;g<p;g++){const f=h[g],m=r[g];let I;const C=l[g];if(m.mode===ae.TRIANGLES||m.mode===ae.TRIANGLE_STRIP||m.mode===ae.TRIANGLE_FAN||m.mode===void 0)I=n.isSkinnedMesh===!0?new Co(f,C):new X(f,C),I.isSkinnedMesh===!0&&I.normalizeSkinWeights(),m.mode===ae.TRIANGLE_STRIP?I.geometry=vs(I.geometry,Ns):m.mode===ae.TRIANGLE_FAN&&(I.geometry=vs(I.geometry,Vt));else if(m.mode===ae.LINES)I=new Eo(f,C);else if(m.mode===ae.LINE_STRIP)I=new vo(f,C);else if(m.mode===ae.LINE_LOOP)I=new Bo(f,C);else if(m.mode===ae.POINTS)I=new _e(f,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(I.geometry.morphAttributes).length>0&&rA(I,n),I.name=t.createUniqueName(n.name||"mesh_"+e),me(I,n),m.extensions&&Fe(i,I,m),t.assignFinalMaterial(I),d.push(I)}for(let g=0,p=d.length;g<p;g++)t.associations.set(d[g],{meshes:e,primitives:g});if(d.length===1)return n.extensions&&Fe(i,d[0],n),d[0];const u=new Ve;n.extensions&&Fe(i,u,n),t.associations.set(u,{meshes:e});for(let g=0,p=d.length;g<p;g++)u.add(d[g]);return u})}loadCamera(e){let t;const s=this.json.cameras[e],i=s[s.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return s.type==="perspective"?t=new vt(He.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):s.type==="orthographic"&&(t=new ks(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),s.name&&(t.name=this.createUniqueName(s.name)),me(t,s),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],s=[];for(let i=0,n=t.joints.length;i<n;i++)s.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?s.push(this.getDependency("accessor",t.inverseBindMatrices)):s.push(null),Promise.all(s).then(function(i){const n=i.pop(),r=i,a=[],A=[];for(let l=0,h=r.length;l<h;l++){const d=r[l];if(d){a.push(d);const u=new it;n!==null&&u.fromArray(n.array,l*16),A.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yo(a,A)})}loadAnimation(e){const t=this.json,s=this,i=t.animations[e],n=i.name?i.name:"animation_"+e,r=[],a=[],A=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const g=i.channels[d],p=i.samplers[g.sampler],f=g.target,m=f.node,I=i.parameters!==void 0?i.parameters[p.input]:p.input,C=i.parameters!==void 0?i.parameters[p.output]:p.output;f.node!==void 0&&(r.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",I)),A.push(this.getDependency("accessor",C)),l.push(p),h.push(f))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(A),Promise.all(l),Promise.all(h)]).then(function(d){const u=d[0],g=d[1],p=d[2],f=d[3],m=d[4],I=[];for(let E=0,y=u.length;E<y;E++){const b=u[E],v=g[E],B=p[E],w=f[E],x=m[E];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const Q=s._createAnimationTracks(b,v,B,w,x);if(Q)for(let M=0;M<Q.length;M++)I.push(Q[M])}const C=new wo(n,void 0,I);return me(C,i),C})}createNodeMesh(e){const t=this.json,s=this,i=t.nodes[e];return i.mesh===void 0?null:s.getDependency("mesh",i.mesh).then(function(n){const r=s._getNodeRef(s.meshCache,i.mesh,n);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let A=0,l=i.weights.length;A<l;A++)a.morphTargetInfluences[A]=i.weights[A]}),r})}loadNode(e){const t=this.json,s=this,i=t.nodes[e],n=s._loadNodeShallow(e),r=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)r.push(s.getDependency("node",a[l]));const A=i.skin===void 0?Promise.resolve(null):s.getDependency("skin",i.skin);return Promise.all([n,Promise.all(r),A]).then(function(l){const h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(g){g.isSkinnedMesh&&g.bind(u,lA)});for(let g=0,p=d.length;g<p;g++)h.add(d[g]);return h})}_loadNodeShallow(e){const t=this.json,s=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const n=t.nodes[e],r=n.name?i.createUniqueName(n.name):"",a=[],A=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return A&&a.push(A),n.camera!==void 0&&a.push(i.getDependency("camera",n.camera).then(function(l){return i._getNodeRef(i.cameraCache,n.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(n.isBone===!0?h=new bo:l.length>1?h=new Ve:l.length===1?h=l[0]:h=new Os,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(n.name&&(h.userData.name=n.name,h.name=r),me(h,n),n.extensions&&Fe(s,h,n),n.matrix!==void 0){const d=new it;d.fromArray(n.matrix),h.applyMatrix4(d)}else n.translation!==void 0&&h.position.fromArray(n.translation),n.rotation!==void 0&&h.quaternion.fromArray(n.rotation),n.scale!==void 0&&h.scale.fromArray(n.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(n.mesh!==void 0&&i.meshCache.refs[n.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,s=this.json.scenes[e],i=this,n=new Ve;s.name&&(n.name=i.createUniqueName(s.name)),me(n,s),s.extensions&&Fe(t,n,s);const r=s.nodes||[],a=[];for(let A=0,l=r.length;A<l;A++)a.push(i.getDependency("node",r[A]));return Promise.all(a).then(function(A){for(let h=0,d=A.length;h<d;h++)n.add(A[h]);const l=h=>{const d=new Map;for(const[u,g]of i.associations)(u instanceof Be||u instanceof pt)&&d.set(u,g);return h.traverse(u=>{const g=i.associations.get(u);g!=null&&d.set(u,g)}),d};return i.associations=l(n),n})}_createAnimationTracks(e,t,s,i,n){const r=[],a=e.name?e.name:e.uuid,A=[];be[n.path]===be.weights?e.traverse(function(u){u.morphTargetInfluences&&A.push(u.name?u.name:u.uuid)}):A.push(a);let l;switch(be[n.path]){case be.weights:l=As;break;case be.rotation:l=ls;break;case be.translation:case be.scale:l=as;break;default:switch(s.itemSize){case 1:l=As;break;case 2:case 3:default:l=as;break}break}const h=i.interpolation!==void 0?iA[i.interpolation]:qs,d=this._getArrayFromAccessor(s);for(let u=0,g=A.length;u<g;u++){const p=new l(A[u]+"."+be[n.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),r.push(p)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const s=es(t.constructor),i=new Float32Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=t[n]*s;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(s){const i=this instanceof ls?sA:ci;return new i(this.times,this.values,this.getValueSize()/3,s)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hA(o,e,t){const s=e.attributes,i=new Mo;if(s.POSITION!==void 0){const a=t.json.accessors[s.POSITION],A=a.min,l=a.max;if(A!==void 0&&l!==void 0){if(i.set(new T(A[0],A[1],A[2]),new T(l[0],l[1],l[2])),a.normalized){const h=es(qe[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const a=new T,A=new T;for(let l=0,h=n.length;l<h;l++){const d=n[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],g=u.min,p=u.max;if(g!==void 0&&p!==void 0){if(A.setX(Math.max(Math.abs(g[0]),Math.abs(p[0]))),A.setY(Math.max(Math.abs(g[1]),Math.abs(p[1]))),A.setZ(Math.max(Math.abs(g[2]),Math.abs(p[2]))),u.normalized){const f=es(qe[u.componentType]);A.multiplyScalar(f)}a.max(A)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new is;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function bs(o,e,t){const s=e.attributes,i=[];function n(r,a){return t.getDependency("accessor",r).then(function(A){o.setAttribute(a,A)})}for(const r in s){const a=$t[r]||r.toLowerCase();a in o.attributes||i.push(n(s[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return qt.workingColorSpace!==ie&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qt.workingColorSpace}" not supported.`),me(o,e),hA(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?nA(o,e.targets,t):o})}class dA{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const s=this.workersResolve[e];if(s&&s(t),this.queue.length){const{resolve:i,msg:n,transfer:r}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(n,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(s=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=s,this.workers[i].postMessage(e,t)):this.queue.push({resolve:s,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const uA=0,xs=2,gA=1,Ss=2,pA=0,fA=1,mA=10,IA=0,hi=9,di=15,ui=16,gi=22,pi=37,fi=43,mi=76,Ii=83,Ci=97,Ei=100,vi=103,Bi=109,yi=122,wi=123,bi=131,xi=132,Si=133,Qi=134,Mi=137,Ti=138,Ri=139,Di=140,Fi=141,Li=142,_i=145,ki=146,Ui=148,Gi=152,Pi=157,Ni=158,Hi=165,Oi=166,zi=1000054e3,Vi=1000054001,qi=1000054004,Yi=1000054005,os=1000066e3,Ji=1000066004;class je{constructor(e,t,s,i){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,s),this._littleEndian=i,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){const s=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+s,i)}}const te=[171,75,84,88,32,50,48,187,13,10,26,10];function Qs(o){return new TextDecoder().decode(o)}function CA(o){const e=new Uint8Array(o.buffer,o.byteOffset,te.length);if(e[0]!==te[0]||e[1]!==te[1]||e[2]!==te[2]||e[3]!==te[3]||e[4]!==te[4]||e[5]!==te[5]||e[6]!==te[6]||e[7]!==te[7]||e[8]!==te[8]||e[9]!==te[9]||e[10]!==te[10]||e[11]!==te[11])throw new Error("Missing KTX 2.0 identifier.");const t={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},s=17*Uint32Array.BYTES_PER_ELEMENT,i=new je(o,te.length,s,!0);t.vkFormat=i._nextUint32(),t.typeSize=i._nextUint32(),t.pixelWidth=i._nextUint32(),t.pixelHeight=i._nextUint32(),t.pixelDepth=i._nextUint32(),t.layerCount=i._nextUint32(),t.faceCount=i._nextUint32(),t.levelCount=i._nextUint32(),t.supercompressionScheme=i._nextUint32();const n=i._nextUint32(),r=i._nextUint32(),a=i._nextUint32(),A=i._nextUint32(),l=i._nextUint64(),h=i._nextUint64(),d=3*Math.max(t.levelCount,1)*8,u=new je(o,te.length+s,d,!0);for(let K=0,z=Math.max(t.levelCount,1);K<z;K++)t.levels.push({levelData:new Uint8Array(o.buffer,o.byteOffset+u._nextUint64(),u._nextUint64()),uncompressedByteLength:u._nextUint64()});const g=new je(o,n,r,!0);g._skip(4);const p=g._nextUint16(),f=g._nextUint16(),m=g._nextUint16(),I=g._nextUint16(),C={vendorId:p,descriptorType:f,versionNumber:m,colorModel:g._nextUint8(),colorPrimaries:g._nextUint8(),transferFunction:g._nextUint8(),flags:g._nextUint8(),texelBlockDimension:[g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8()],bytesPlane:[g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8()],samples:[]},E=(I/4-6)/4;for(let K=0;K<E;K++){const z={bitOffset:g._nextUint16(),bitLength:g._nextUint8(),channelType:g._nextUint8(),samplePosition:[g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&z.channelType?(z.sampleLower=g._nextInt32(),z.sampleUpper=g._nextInt32()):(z.sampleLower=g._nextUint32(),z.sampleUpper=g._nextUint32()),C.samples[K]=z}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(C);const y=new je(o,a,A,!0);for(;y._offset<A;){const K=y._nextUint32(),z=y._scan(K),W=Qs(z);if(t.keyValue[W]=y._nextUint8Array(K-z.byteLength-1),W.match(/^ktx/i)){const De=Qs(t.keyValue[W]);t.keyValue[W]=De.substring(0,De.lastIndexOf("\0"))}y._skip(K%4?4-K%4:0)}if(h<=0)return t;const b=new je(o,l,h,!0),v=b._nextUint16(),B=b._nextUint16(),w=b._nextUint32(),x=b._nextUint32(),Q=b._nextUint32(),M=b._nextUint32(),N=[];for(let K=0,z=Math.max(t.levelCount,1);K<z;K++)N.push({imageFlags:b._nextUint32(),rgbSliceByteOffset:b._nextUint32(),rgbSliceByteLength:b._nextUint32(),alphaSliceByteOffset:b._nextUint32(),alphaSliceByteLength:b._nextUint32()});const q=l+b._offset,R=q+w,J=R+x,G=J+Q,he=new Uint8Array(o.buffer,o.byteOffset+q,w),ye=new Uint8Array(o.buffer,o.byteOffset+R,x),de=new Uint8Array(o.buffer,o.byteOffset+J,Q),oe=new Uint8Array(o.buffer,o.byteOffset+G,M);return t.globalData={endpointCount:v,selectorCount:B,imageDescs:N,endpointsData:he,selectorsData:ye,tablesData:de,extendedData:oe},t}let _t,Ce,ts;const kt={env:{emscripten_notify_memory_growth:function(o){ts=new Uint8Array(Ce.exports.memory.buffer)}}};class EA{init(){return _t||(_t=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Ms).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,kt)).then(this._init):WebAssembly.instantiate(Buffer.from(Ms,"base64"),kt).then(this._init),_t)}_init(e){Ce=e.instance,kt.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Ce)throw new Error("ZSTDDecoder: Await .init() before decoding.");const s=e.byteLength,i=Ce.exports.malloc(s);ts.set(e,i),t=t||Number(Ce.exports.ZSTD_findDecompressedSize(i,s));const n=Ce.exports.malloc(t),r=Ce.exports.ZSTD_decompress(n,t,i,s),a=ts.slice(n,n+r);return Ce.exports.free(i),Ce.exports.free(n),a}}const Ms="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",vA="display-p3",BA="display-p3-linear";({...qt.spaces[P]});const Ut=new WeakMap;let Gt=0,Pt;class ce extends Hs{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new dA,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await e.init(),this.detectSupport(e)}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-s3tc"),bptcSupported:e.hasFeature("texture-compression-bc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Firefox")>=0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const e=new st(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),s=new st(this.manager);s.setPath(this.transcoderPath),s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials);const i=s.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([n,r])=>{const a=ce.BasisWorker.toString(),A=["/* constants */","let _EngineFormat = "+JSON.stringify(ce.EngineFormat),"let _EngineType = "+JSON.stringify(ce.EngineType),"let _TranscoderFormat = "+JSON.stringify(ce.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(ce.BasisFormat),"/* basis_transcoder.js */",n,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([A])),this.transcoderBinary=r,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),Gt>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Gt++}return this.transcoderPending}load(e,t,s,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const n=new st(this.manager);n.setPath(this.path),n.setCrossOrigin(this.crossOrigin),n.setWithCredentials(this.withCredentials),n.setRequestHeader(this.requestHeader),n.setResponseType("arraybuffer"),n.load(e,r=>{this.parse(r,t,i)},s,i)}parse(e,t,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Ut.has(e))return Ut.get(e).promise.then(t).catch(s);this._createTexture(e).then(i=>t?t(i):null).catch(s)}_createTextureFrom(e,t){const{type:s,error:i,data:{faces:n,width:r,height:a,format:A,type:l,dfdFlags:h}}=e;if(s==="error")return Promise.reject(i);let d;if(t.faceCount===6)d=new To(n,A,l);else{const u=n[0].mipmaps;d=t.layerCount>1?new Ro(u,r,a,t.layerCount,A,l):new Ys(u,r,a,A,l)}return d.minFilter=n[0].mipmaps.length===1?Y:ke,d.magFilter=Y,d.generateMipmaps=!1,d.needsUpdate=!0,d.colorSpace=Ki(t),d.premultiplyAlpha=!!(h&gA),d}async _createTexture(e,t={}){const s=CA(new Uint8Array(e)),i=s.vkFormat===os&&s.dataFormatDescriptor[0].colorModel===167;if(!(s.vkFormat===IA||i&&!this.workerConfig.astcHDRSupported))return wA(s);const r=t,a=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:r},[e])).then(A=>this._createTextureFrom(A.data,s));return Ut.set(e,{promise:a}),a}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Gt--}}ce.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};ce.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};ce.EngineFormat={RGBAFormat:ge,RGBA_ASTC_4x4_Format:ht,RGB_BPTC_UNSIGNED_Format:Po,RGBA_BPTC_Format:Jt,RGBA_ETC2_EAC_Format:Ks,RGBA_PVRTC_4BPPV1_Format:Yt,RGBA_S3TC_DXT5_Format:Go,RGB_ETC1_Format:Uo,RGB_ETC2_Format:Js,RGB_PVRTC_4BPPV1_Format:ko,RGBA_S3TC_DXT1_Format:Kt};ce.EngineType={UnsignedByteType:_,HalfFloatType:ne,FloatType:ee};ce.BasisWorker=function(){let o,e,t;const s=_EngineFormat,i=_EngineType,n=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(p){const f=p.data;switch(f.type){case"init":o=f.config,a(f.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:m,buffers:I,width:C,height:E,hasAlpha:y,format:b,type:v,dfdFlags:B}=A(f.buffer);self.postMessage({type:"transcode",id:f.id,data:{faces:m,width:C,height:E,hasAlpha:y,format:b,type:v,dfdFlags:B}},I)}catch(m){console.error(m),self.postMessage({type:"error",id:f.id,error:m.message})}});break}});function a(p){e=new Promise(f=>{t={wasmBinary:p,onRuntimeInitialized:f},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function A(p){const f=new t.KTX2File(new Uint8Array(p));function m(){f.close(),f.delete()}if(!f.isValid())throw m(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let I;if(f.isUASTC())I=r.UASTC;else if(f.isETC1S())I=r.ETC1S;else if(f.isHDR())I=r.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const C=f.getWidth(),E=f.getHeight(),y=f.getLayers()||1,b=f.getLevels(),v=f.getFaces(),B=f.getHasAlpha(),w=f.getDFDFlags(),{transcoderFormat:x,engineFormat:Q,engineType:M}=d(I,C,E,B);if(!C||!E||!b)throw m(),new Error("THREE.KTX2Loader:	Invalid texture");if(!f.startTranscoding())throw m(),new Error("THREE.KTX2Loader: .startTranscoding failed");const N=[],q=[];for(let R=0;R<v;R++){const J=[];for(let G=0;G<b;G++){const he=[];let ye,de;for(let K=0;K<y;K++){const z=f.getImageLevelInfo(G,K,R);R===0&&G===0&&K===0&&(z.origWidth%4!==0||z.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),b>1?(ye=z.origWidth,de=z.origHeight):(ye=z.width,de=z.height);let W=new Uint8Array(f.getImageTranscodedSizeInBytes(G,K,0,x));const De=f.transcodeImage(W,G,K,R,x,0,-1,-1);if(M===i.HalfFloatType&&(W=new Uint16Array(W.buffer,W.byteOffset,W.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!De)throw m(),new Error("THREE.KTX2Loader: .transcodeImage failed.");he.push(W)}const oe=g(he);J.push({data:oe,width:ye,height:de}),q.push(oe.buffer)}N.push({mipmaps:J,width:C,height:E,format:Q,type:M})}return m(),{faces:N,buffers:q,width:C,height:E,hasAlpha:B,dfdFlags:w,format:Q,type:M}}const l=[{if:"astcSupported",basisFormat:[r.UASTC],transcoderFormat:[n.ASTC_4x4,n.ASTC_4x4],engineFormat:[s.RGBA_ASTC_4x4_Format,s.RGBA_ASTC_4x4_Format],engineType:[i.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[n.BC7_M5,n.BC7_M5],engineFormat:[s.RGBA_BPTC_Format,s.RGBA_BPTC_Format],engineType:[i.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[n.BC1,n.BC3],engineFormat:[s.RGBA_S3TC_DXT1_Format,s.RGBA_S3TC_DXT5_Format],engineType:[i.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[n.ETC1,n.ETC2],engineFormat:[s.RGB_ETC2_Format,s.RGBA_ETC2_EAC_Format],engineType:[i.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[n.ETC1],engineFormat:[s.RGB_ETC1_Format],engineType:[i.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[n.PVRTC1_4_RGB,n.PVRTC1_4_RGBA],engineFormat:[s.RGB_PVRTC_4BPPV1_Format,s.RGBA_PVRTC_4BPPV1_Format],engineType:[i.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[r.UASTC_HDR],transcoderFormat:[n.BC6H],engineFormat:[s.RGB_BPTC_UNSIGNED_Format],engineType:[i.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[n.RGBA32,n.RGBA32],engineFormat:[s.RGBAFormat,s.RGBAFormat],engineType:[i.UnsignedByteType,i.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[r.UASTC_HDR],transcoderFormat:[n.RGBA_HALF],engineFormat:[s.RGBAFormat],engineType:[i.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[r.ETC1S]:l.filter(p=>p.basisFormat.includes(r.ETC1S)).sort((p,f)=>p.priorityETC1S-f.priorityETC1S),[r.UASTC]:l.filter(p=>p.basisFormat.includes(r.UASTC)).sort((p,f)=>p.priorityUASTC-f.priorityUASTC),[r.UASTC_HDR]:l.filter(p=>p.basisFormat.includes(r.UASTC_HDR)).sort((p,f)=>p.priorityHDR-f.priorityHDR)};function d(p,f,m,I){const C=h[p];for(let E=0;E<C.length;E++){const y=C[E];if(y.if&&!o[y.if]||!y.basisFormat.includes(p)||I&&y.transcoderFormat.length<2||y.needsPowerOfTwo&&!(u(f)&&u(m)))continue;const b=y.transcoderFormat[I?1:0],v=y.engineFormat[I?1:0],B=y.engineType[0];return{transcoderFormat:b,engineFormat:v,engineType:B}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function u(p){return p<=2?!0:(p&p-1)===0&&p!==0}function g(p){if(p.length===1)return p[0];let f=0;for(let C=0;C<p.length;C++){const E=p[C];f+=E.byteLength}const m=new Uint8Array(f);let I=0;for(let C=0;C<p.length;C++){const E=p[C];m.set(E,I),I+=E.byteLength}return m}};const yA=new Set([ge,Wt,Ze,Ge]),Nt={[Bi]:ge,[vi]:Ze,[Ei]:Ge,[Ci]:ge,[Ii]:Ze,[mi]:Ge,[fi]:ge,[pi]:ge,[gi]:Ze,[ui]:Ze,[di]:Ge,[hi]:Ge,[wi]:Wt,[yi]:Wt,[Gi]:Ks,[Ui]:Js,[os]:ht,[Ni]:ht,[Pi]:ht,[Ji]:Qt,[Oi]:Qt,[Hi]:Qt,[Qi]:Kt,[Si]:Kt,[xi]:ds,[bi]:ds,[Ti]:hs,[Mi]:hs,[Di]:_o,[Ri]:Lo,[Li]:Fo,[Fi]:Do,[ki]:Jt,[_i]:Jt,[Yi]:Yt,[Vi]:Yt,[qi]:cs,[zi]:cs},Ue={[Bi]:ee,[vi]:ee,[Ei]:ee,[Ci]:ne,[Ii]:ne,[mi]:ne,[fi]:_,[pi]:_,[gi]:_,[ui]:_,[di]:_,[hi]:_,[wi]:js,[yi]:Ws,[Gi]:_,[Ui]:_,[os]:ne,[Ni]:_,[Pi]:_,[Ji]:ne,[Oi]:_,[Hi]:_,[Qi]:_,[Si]:_,[xi]:_,[bi]:_,[Ti]:_,[Mi]:_,[Di]:_,[Ri]:_,[Li]:_,[Fi]:_,[ki]:_,[_i]:_,[Yi]:_,[Vi]:_,[qi]:_,[zi]:_};async function wA(o){const{vkFormat:e}=o;if(Nt[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+e);Ue[e]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+e);let t;o.supercompressionScheme===xs&&(Pt||(Pt=new Promise(async r=>{const a=new EA;await a.init(),r(a)})),t=await Pt);const s=[];for(let r=0;r<o.levels.length;r++){const a=Math.max(1,o.pixelWidth>>r),A=Math.max(1,o.pixelHeight>>r),l=o.pixelDepth?Math.max(1,o.pixelDepth>>r):0,h=o.levels[r];let d;if(o.supercompressionScheme===uA)d=h.levelData;else if(o.supercompressionScheme===xs)d=t.decode(h.levelData,h.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;Ue[e]===ee?u=new Float32Array(d.buffer,d.byteOffset,d.byteLength/Float32Array.BYTES_PER_ELEMENT):Ue[e]===ne?u=new Uint16Array(d.buffer,d.byteOffset,d.byteLength/Uint16Array.BYTES_PER_ELEMENT):Ue[e]===js||Ue[e]===Ws?u=new Uint32Array(d.buffer,d.byteOffset,d.byteLength/Uint32Array.BYTES_PER_ELEMENT):u=d,s.push({data:u,width:a,height:A,depth:l})}const i=o.levelCount===0||s.length>1;let n;if(yA.has(Nt[e]))n=o.pixelDepth===0?new Et(s[0].data,o.pixelWidth,o.pixelHeight):new Ne(s[0].data,o.pixelWidth,o.pixelHeight,o.pixelDepth),n.minFilter=i?zs:Ye,n.magFilter=Ye,n.generateMipmaps=o.levelCount===0;else{if(o.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");n=new Ys(s,o.pixelWidth,o.pixelHeight),n.minFilter=i?ke:Y,n.magFilter=Y}return n.mipmaps=s,n.type=Ue[e],n.format=Nt[e],n.colorSpace=Ki(o),n.needsUpdate=!0,Promise.resolve(n)}function Ki(o){const e=o.dataFormatDescriptor[0];return e.colorPrimaries===fA?e.transferFunction===Ss?P:ie:e.colorPrimaries===mA?e.transferFunction===Ss?vA:BA:e.colorPrimaries===pA?gt:(console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),gt)}const bA={baseUrl:"/assets/cosmic-slash/models",modelUrls:{[S.METEOR]:"meteor.glb",[S.CRYSTAL]:"crystal.glb"},enableKtx2:!1,ktx2TranscoderPath:"/basis/"};class xA{constructor(e,t={}){c(this,"renderer");c(this,"config");c(this,"loader");c(this,"ktx2Loader",null);c(this,"loadedRoots",new Map);c(this,"loading",new Map);if(this.renderer=e,this.config={...bA,...t},this.loader=new Ra,this.config.enableKtx2){const s=new ce;s.setTranscoderPath(this.config.ktx2TranscoderPath),s.detectSupport(this.renderer),this.loader.setKTX2Loader(s),this.ktx2Loader=s}}preload(e){for(const t of e)this.loadType(t)}getModelClone(e){const t=this.loadedRoots.get(e);return t?t.clone(!0):null}loadType(e){if(this.loadedRoots.has(e))return Promise.resolve();const t=this.loading.get(e);if(t)return t;const s=this.getModelUrl(e);if(!s)return Promise.resolve();const i=this.loader.loadAsync(s).then(n=>{this.loadedRoots.set(e,n.scene)}).catch(n=>{console.warn(`[CosmicAssetLibrary] Failed to load model for ${e}:`,n)}).finally(()=>{this.loading.delete(e)});return this.loading.set(e,i),i}dispose(){for(const e of this.loadedRoots.values())e.traverse(t=>{if(t instanceof X){t.geometry?.dispose();const s=Array.isArray(t.material)?t.material:[t.material];for(const i of s)i.dispose()}});this.loadedRoots.clear(),this.loading.clear(),this.ktx2Loader?.dispose()}getModelUrl(e){const t=this.config.modelUrls[e];return t?`${this.config.baseUrl.endsWith("/")?this.config.baseUrl.slice(0,-1):this.config.baseUrl}/${t}`:null}}class Ts extends $e{constructor(t){super();c(this,"assets");this.assets=t}createObject(t){const s=this.assets?.getModelClone(t);if(!s)return this.assets?.loadType(t),super.createObject(t);const i=Ae[t],n=new Ve;return n.add(s),n.scale.setScalar(i.scale),n.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),n.userData.cosmicType=t,n.userData.config=i,n.userData.rotationRoot=s,n.userData.assetBacked=!0,n}}function SA(){const o=new Je,e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");if(!t)return{scene:o,dispose(){}};t.fillStyle="#000008",t.fillRect(0,0,e.width,e.height);const s=t.createRadialGradient(140,90,10,140,90,180);s.addColorStop(0,"rgba(120,60,255,0.25)"),s.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=s,t.fillRect(0,0,e.width,e.height);const i=t.createRadialGradient(380,140,10,380,140,220);i.addColorStop(0,"rgba(0,210,255,0.20)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height);const n=1600;for(let u=0;u<n;u++){const g=Math.random()*e.width,p=Math.random()*e.height,f=Math.random(),m=.15+Math.random()*.85,I=200+Math.random()*80,C=40+Math.random()*60,E=70+Math.random()*30;t.fillStyle=`hsla(${I}, ${C}%, ${E}%, ${m})`,t.fillRect(g,p,f<.92?1:2,f<.92?1:2),f>.985&&(t.fillStyle=`rgba(255,255,255,${m})`,t.fillRect(g-2,p,5,1),t.fillRect(g,p-2,1,5))}const r=new ot(e);r.colorSpace=P,r.wrapS=Te,r.wrapT=Qe,r.minFilter=ke,r.magFilter=Y,r.anisotropy=4,r.needsUpdate=!0;const a=new lt(8,48,32),A=new Ee({map:r,side:Xe}),l=new X(a,A);o.add(l);const h=new ft(7163391,2.2,30);h.position.set(-6,3,-3),o.add(h);const d=new ft(55039,1.9,30);return d.position.set(6,-2,-2),o.add(d),{scene:o,dispose(){a.dispose(),A.dispose(),r.dispose()}}}function QA(o,e,t){return Math.max(e,Math.min(t,Math.floor(o)))}function Wi(o,e,t){return Math.max(e,Math.min(t,o))}const MA=o=>{const t=Math.max(1,Math.floor(o))-1,s=70+25*t+12*t*t;return Math.max(60,Math.round(s))},TA=o=>{const t=Math.max(1,Math.floor(o))-1,s=1+.06*t+.0025*t*t;return Wi(s,1,2.75)};class RA{constructor(e){c(this,"pointsByType");c(this,"missPenaltyByType");c(this,"maxLevel");c(this,"pointsToNextLevel");c(this,"speedMultiplierForLevel");c(this,"score",0);c(this,"level",1);c(this,"listeners",new Set);c(this,"levelThresholds",[0]);this.pointsByType=e.pointsByType,this.missPenaltyByType=e.missPenaltyByType,this.maxLevel=QA(e.maxLevel??50,1,200),this.pointsToNextLevel=e.pointsToNextLevel??MA,this.speedMultiplierForLevel=e.speedMultiplierForLevel??TA,this.ensureThresholdsUpTo(this.maxLevel)}addListener(e){return this.listeners.add(e),e(this.getState(),{type:"reset"}),()=>{this.listeners.delete(e)}}getScore(){return this.score}getLevel(){return this.level}reset(){const e=this.level;this.score=0,this.level=1,this.emit(this.getState(),{type:"reset"}),e!==this.level&&this.emit(this.getState(),{type:"levelChanged",previousLevel:e,newLevel:this.level})}applySlice(e){const t=this.pointsByType[e]??0;return this.applyScoreDelta(t,"slice",e)}applyMiss(e){const t=this.missPenaltyByType?.[e]??this.pointsByType[e]??0;return this.applyScoreDelta(-Math.abs(t),"miss",e)}applyBonus(e,t){return this.applyScoreDelta(e,t)}applyScoreDelta(e,t,s){if(!Number.isFinite(e)||e===0)return 0;const i=this.score,n=this.level,r=Math.max(0,Math.floor(i+e));this.score=r,this.level=this.computeLevelForScore(r);const a=this.score-i;return a!==0&&this.emit(this.getState(),{type:"scoreChanged",delta:a,reason:t,objectType:s}),this.level!==n&&this.emit(this.getState(),{type:"levelChanged",previousLevel:n,newLevel:this.level}),a}computeLevelForScore(e){this.ensureThresholdsUpTo(this.maxLevel);let t=1;for(let s=2;s<=this.maxLevel;s++){const i=this.levelThresholds[s]??Number.POSITIVE_INFINITY;if(e>=i)t=s;else break}return t}ensureThresholdsUpTo(e){if(!(this.levelThresholds.length>e))for(let t=this.levelThresholds.length;t<=e;t++){if(t===1){this.levelThresholds[1]=0;continue}const s=this.levelThresholds[t-1]??0,i=this.pointsToNextLevel(t-1);this.levelThresholds[t]=s+Math.max(1,Math.floor(i))}}getState(){const e=this.levelThresholds[this.level]??0;if(this.level>=this.maxLevel)return{score:this.score,level:this.level,progressToNextLevel01:1,pointsToNextLevel:null,nextLevelThresholdScore:null,speedMultiplier:this.speedMultiplierForLevel(this.level)};const t=this.levelThresholds[this.level+1]??null,s=t!==null?t-e:0,i=s>0?(this.score-e)/s:0;return{score:this.score,level:this.level,progressToNextLevel01:Wi(i,0,1),pointsToNextLevel:t!==null?Math.max(0,t-this.score):null,nextLevelThresholdScore:t,speedMultiplier:this.speedMultiplierForLevel(this.level)}}emit(e,t){for(const s of this.listeners)s(e,t)}}function Ht(o){return Math.max(0,Math.floor(o)).toLocaleString()}class DA{constructor(e,t={}){c(this,"container");c(this,"element",null);c(this,"scoreEl",null);c(this,"deltaEl",null);c(this,"comboEl",null);c(this,"levelTextEl",null);c(this,"progressCircleEl",null);c(this,"progressCircumference",1);c(this,"displayedScore",0);c(this,"scoreAnimRaf",null);c(this,"deltaHideTimeout",null);c(this,"comboHideTimeout",null);c(this,"config");this.container=e,this.config={anchor:t.anchor??"top-right"}}show(){this.element||this.createDOM(),this.element&&(this.element.style.display="block")}hide(){this.element&&(this.element.style.display="none")}dispose(){this.scoreAnimRaf!==null&&(cancelAnimationFrame(this.scoreAnimRaf),this.scoreAnimRaf=null),this.deltaHideTimeout!==null&&(window.clearTimeout(this.deltaHideTimeout),this.deltaHideTimeout=null),this.comboHideTimeout!==null&&(window.clearTimeout(this.comboHideTimeout),this.comboHideTimeout=null),this.element?.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.scoreEl=null,this.deltaEl=null,this.comboEl=null,this.levelTextEl=null,this.progressCircleEl=null}update(e,t){if(this.element||this.createDOM(),!(!this.element||!this.scoreEl||!this.deltaEl||!this.comboEl||!this.levelTextEl||!this.progressCircleEl)){if(t?.type==="reset"){this.displayedScore=e.score,this.scoreEl.textContent=Ht(e.score),this.levelTextEl.textContent=`${e.level}`,this.setProgress(e.progressToNextLevel01),this.deltaEl.textContent="",this.deltaEl.classList.remove("delta-pop","delta-positive","delta-negative");return}this.animateScoreTo(e.score),this.levelTextEl.textContent=`${e.level}`,this.setProgress(e.progressToNextLevel01),t?.type==="scoreChanged"&&t.reason!=="boss"&&this.showDelta(t.delta,t.reason),t?.type==="levelChanged"&&this.pulseLevelUp()}}setProgress(e){const t=Math.max(0,Math.min(1,e));if(!this.progressCircleEl)return;const s=this.progressCircumference*(1-t);this.progressCircleEl.style.strokeDashoffset=`${s}`}animateScoreTo(e){if(!this.scoreEl)return;const t=this.displayedScore,s=Math.max(0,Math.floor(e));if(t===s){this.scoreEl.textContent=Ht(s);return}this.scoreAnimRaf!==null&&(cancelAnimationFrame(this.scoreAnimRaf),this.scoreAnimRaf=null);const i=240,n=performance.now(),r=()=>{const a=performance.now(),A=Math.max(0,Math.min(1,(a-n)/i)),l=1-Math.pow(1-A,3),h=Math.round(t+(s-t)*l);this.displayedScore=h,this.scoreEl.textContent=Ht(h),A<1?this.scoreAnimRaf=requestAnimationFrame(r):this.scoreAnimRaf=null};this.scoreAnimRaf=requestAnimationFrame(r)}showDelta(e,t){if(!this.deltaEl)return;this.deltaHideTimeout!==null&&(window.clearTimeout(this.deltaHideTimeout),this.deltaHideTimeout=null);const s=e>=0?"+":"";this.deltaEl.textContent=`${s}${e}`,this.deltaEl.classList.remove("delta-positive","delta-negative"),this.deltaEl.classList.add(e>=0?"delta-positive":"delta-negative"),this.deltaEl.setAttribute("data-reason",t),this.deltaEl.classList.remove("delta-pop"),this.deltaEl.offsetHeight,this.deltaEl.classList.add("delta-pop"),this.deltaHideTimeout=window.setTimeout(()=>{this.deltaEl?.classList.remove("delta-pop"),this.deltaHideTimeout=null},520)}pulseLevelUp(){this.element&&(this.element.classList.remove("level-up"),this.element.offsetHeight,this.element.classList.add("level-up"))}showCombo(e){if(!this.comboEl)return;const t=Math.max(2,Math.min(5,Math.floor(e)));this.comboHideTimeout!==null&&(window.clearTimeout(this.comboHideTimeout),this.comboHideTimeout=null),this.comboEl.textContent=`x${t}`,this.comboEl.classList.remove("combo-pop","combo--2","combo--3","combo--4","combo--5"),this.comboEl.offsetHeight,this.comboEl.classList.add("combo-pop",`combo--${t}`);const s=t>=5?980:t===4?880:t===3?760:640;this.comboHideTimeout=window.setTimeout(()=>{this.comboEl?.classList.remove("combo-pop",`combo--${t}`),this.comboHideTimeout=null},s)}createDOM(){this.element=document.createElement("div"),this.element.className=`score-hud score-hud--${this.config.anchor}`,this.element.innerHTML=`
      <div class="score-hud__wrap" aria-label="Score HUD">
        <div class="score-hud__scoreWrap">
          <div class="score-hud__score" aria-label="Score">0</div>
          <div class="score-hud__delta" aria-label="Score change"></div>
          <div class="score-hud__combo" aria-label="Combo multiplier"></div>
        </div>

        <div class="score-hud__levelWrap" aria-label="Level">
          <svg class="score-hud__ring" viewBox="0 0 44 44" aria-hidden="true">
            <circle class="score-hud__ringTrack" cx="22" cy="22" r="18" />
            <circle class="score-hud__ringProgress" cx="22" cy="22" r="18" />
          </svg>
          <div class="score-hud__levelText">1</div>
        </div>
      </div>
    `,this.scoreEl=this.element.querySelector(".score-hud__score"),this.deltaEl=this.element.querySelector(".score-hud__delta"),this.comboEl=this.element.querySelector(".score-hud__combo"),this.levelTextEl=this.element.querySelector(".score-hud__levelText"),this.progressCircleEl=this.element.querySelector(".score-hud__ringProgress");const e=18;this.progressCircumference=2*Math.PI*e,this.progressCircleEl&&(this.progressCircleEl.style.strokeDasharray=`${this.progressCircumference}`,this.progressCircleEl.style.strokeDashoffset=`${this.progressCircumference}`);const t=document.createElement("style");t.textContent=`
      .score-hud {
        position: absolute;
        top: 20px;
        z-index: 120;
        pointer-events: none;
        font-family: 'Nunito', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        color: rgba(255, 255, 255, 0.92);
      }

      .score-hud--top-right { right: 20px; }
      .score-hud--top-left { left: 20px; }

      @media (max-width: 768px) {
        .score-hud {
          top: 10px;
        }
        .score-hud--top-right { right: 10px; }
        .score-hud--top-left { left: 10px; }
      }

      .score-hud__wrap {
        display: flex;
        align-items: center;
        gap: 12px;
        filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.45));
      }

      .score-hud__scoreWrap {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        line-height: 1;
      }

      .score-hud__score {
        font-family: 'Playfair Display', serif;
        font-weight: 800;
        font-size: 1.35rem;
        letter-spacing: 0.02em;
        color: rgba(255, 255, 255, 0.97);
        text-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
      }

      .score-hud__delta {
        margin-top: 4px;
        font-size: 0.82rem;
        font-weight: 900;
        opacity: 0;
        transform: translateY(-3px);
        transition: opacity 170ms ease, transform 170ms ease;
        text-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
      }

      .score-hud__delta.delta-positive { color: rgba(140, 255, 220, 0.95); }
      .score-hud__delta.delta-negative { color: rgba(255, 160, 170, 0.95); }

      .score-hud__delta.delta-pop {
        opacity: 1;
        transform: translateY(0px);
      }

      .score-hud__combo {
        margin-top: 6px;
        font-size: 0.85rem;
        font-weight: 900;
        letter-spacing: 0.06em;
        opacity: 0;
        transform: translateY(-4px) scale(0.98);
        color: rgba(255, 255, 255, 0.92);
        text-shadow: 0 10px 30px rgba(0, 0, 0, 0.55);
        filter: drop-shadow(0 0 0 rgba(255, 255, 255, 0));
        transition: opacity 150ms ease, transform 150ms ease, filter 200ms ease;
      }

      .score-hud__combo.combo-pop {
        opacity: 1;
        transform: translateY(0px) scale(1);
      }

      .score-hud__combo.combo--2 {
        color: rgba(180, 255, 235, 0.96);
        filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.22));
      }

      .score-hud__combo.combo--3 {
        color: rgba(210, 190, 255, 0.98);
        filter: drop-shadow(0 0 14px rgba(255, 95, 215, 0.22));
        transform: translateY(0px) scale(1.05);
      }

      .score-hud__combo.combo--4 {
        color: rgba(255, 215, 170, 0.98);
        filter: drop-shadow(0 0 18px rgba(255, 180, 70, 0.26));
        transform: translateY(0px) scale(1.08);
      }

      .score-hud__combo.combo--5 {
        color: rgba(255, 255, 255, 0.99);
        filter: drop-shadow(0 0 24px rgba(255, 255, 255, 0.22));
        transform: translateY(0px) scale(1.12);
      }

      .score-hud__levelWrap {
        position: relative;
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
      }

      .score-hud__levelWrap::before {
        content: '';
        position: absolute;
        inset: 6px;
        border-radius: 999px;
        background: rgba(20, 20, 25, 0.55);
        border: 1px solid rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
      }

      .score-hud__ring {
        position: absolute;
        inset: 0;
        transform: rotate(-90deg);
      }

      .score-hud__ringTrack {
        fill: none;
        stroke: rgba(255, 255, 255, 0.16);
        stroke-width: 3;
      }

      .score-hud__ringProgress {
        fill: none;
        stroke: rgba(0, 212, 255, 0.9);
        stroke-width: 3;
        stroke-linecap: round;
        transition: stroke-dashoffset 260ms cubic-bezier(0.2, 0.9, 0.2, 1);
        filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.25));
      }

      .score-hud.level-up .score-hud__ringProgress {
        filter: drop-shadow(0 0 14px rgba(255, 95, 215, 0.28));
      }

      .score-hud__levelText {
        position: relative;
        font-family: 'Nunito', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        font-weight: 900;
        font-size: 0.92rem;
        letter-spacing: 0.02em;
        color: rgba(255, 255, 255, 0.92);
        text-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);
      }
    `,this.element.appendChild(t),this.container.appendChild(this.element)}}function Rs(o){return Math.max(0,Math.min(1,o))}function FA(o){return 1-Math.pow(1-o,3)}class LA{constructor(e,t={}){c(this,"scene");c(this,"config");c(this,"pool",[]);c(this,"poolIndex",0);this.scene=e,this.config={poolSize:Math.max(8,Math.min(64,t.poolSize??24)),baseDurationSec:Math.max(.2,Math.min(3,t.baseDurationSec??1))};for(let s=0;s<this.config.poolSize;s++)this.pool.push(this.createInstance())}trigger(e,t,s={}){if(!Number.isFinite(t)||t===0)return;const i=this.pool[this.poolIndex];this.poolIndex=(this.poolIndex+1)%this.pool.length;const n=Rs(s.intensity01??.5),r=Math.max(.2,s.durationSec??this.config.baseDurationSec);i.active=!0,i.age=0,i.duration=r,i.sprite.position.copy(e),i.sprite.visible=!0;const a=.55+.45*n,A=(Math.random()-.5)*.25;i.velocity.set(A,a,0);const l=Math.abs(Math.floor(t)),d=`${t>0?"+":"-"}${l}`,u=t>0?"rgba(140, 255, 220, 0.92)":"rgba(255, 160, 170, 0.92)",g=t>0?"rgba(0, 212, 255, 0.15)":"rgba(255, 95, 215, 0.12)",p=.34+.38*n;i.sprite.scale.setScalar(p),this.drawLabel(i,d,u,g)}update(e){for(const t of this.pool){if(!t.active)continue;t.age+=e;const s=Rs(t.age/t.duration);t.sprite.position.addScaledVector(t.velocity,e);const i=1-FA(s);t.material.opacity=.92*i,s>=1&&(t.active=!1,t.sprite.visible=!1)}}clear(){for(const e of this.pool)e.active=!1,e.sprite.visible=!1}dispose(){for(const e of this.pool)this.scene.remove(e.sprite),e.texture.dispose(),e.material.dispose();this.pool.length=0}createInstance(){const e=document.createElement("canvas");e.width=256,e.height=128;const t=e.getContext("2d");if(!t)throw new Error("[FloatingScoreEffect] 2D canvas not available");const s=new ot(e);s.colorSpace=P,s.needsUpdate=!0;const i=new Bt({map:s,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0}),n=new yt(i);return n.visible=!1,n.renderOrder=30,this.scene.add(n),{sprite:n,material:i,texture:s,canvas:e,ctx:t,active:!1,age:0,duration:this.config.baseDurationSec,velocity:new T}}drawLabel(e,t,s,i){const n=e.ctx,r=e.canvas.width,a=e.canvas.height;n.clearRect(0,0,r,a);const A=68;n.font=`900 ${A}px Nunito, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.shadowColor=i,n.shadowBlur=18,n.fillStyle=s,n.fillText(t,r/2,a/2),n.shadowColor="rgba(0,0,0,0.0)",n.shadowBlur=0,e.texture.needsUpdate=!0,e.material.opacity=.92}}function Ds(o){return Math.max(0,Math.min(1,o))}function _A(o){return 1-Math.pow(1-o,3)}class kA{constructor(e,t){c(this,"scene");c(this,"camera");c(this,"sprite");c(this,"material");c(this,"texture");c(this,"canvas");c(this,"ctx");c(this,"baseScale",1.15);c(this,"desiredScale",1);c(this,"pulse01",0);this.scene=e,this.camera=t,this.canvas=document.createElement("canvas"),this.canvas.width=512,this.canvas.height=512;const s=this.canvas.getContext("2d");if(!s)throw new Error("[BossOverlay] 2D canvas not available");this.ctx=s,this.texture=new ot(this.canvas),this.texture.colorSpace=P,this.texture.needsUpdate=!0,this.material=new Bt({map:this.texture,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0}),this.sprite=new yt(this.material),this.sprite.visible=!1,this.sprite.renderOrder=40,this.scene.add(this.sprite)}show(){this.sprite.visible=!0,this.material.opacity=1}hide(){this.sprite.visible=!1,this.material.opacity=0}dispose(){this.scene.remove(this.sprite),this.texture.dispose(),this.material.dispose()}setAnchor(e,t){const s=Math.max(6.3,t*.85),i=-Math.max(3,t*.06);this.sprite.position.set(e.x,e.y+s,e.z+i);const n=this.camera.position.distanceTo(this.sprite.position),r=this.baseScale*(.85+.065*n);this.desiredScale=r,this.sprite.scale.set(r,r,1)}update(e){if(!this.sprite.visible)return;const t=this.pulse01;t>0&&(this.pulse01=Math.max(0,t-e*3.2));const s=1+.22*_A(this.pulse01),i=this.desiredScale*s;this.sprite.scale.set(i,i,1)}pulse(e){this.pulse01=Math.max(this.pulse01,Ds(e))}setText(e,t,s){const i=this.ctx,n=this.canvas.width,r=this.canvas.height;i.clearRect(0,0,n,r);const a=Ds(s),A=148+Math.round(28*a),l=86+Math.round(22*a),h=.22+.18*a,d=.16+.2*a,u=`rgba(0, 212, 255, ${h})`,g=`rgba(255, 95, 215, ${d})`,p=a>=.85?"rgba(255, 255, 255, 0.98)":"rgba(220, 250, 255, 0.96)",f=a>=.65?"rgba(255, 215, 170, 0.98)":"rgba(170, 255, 230, 0.92)";i.textAlign="center",i.textBaseline="middle",i.shadowColor=u,i.shadowBlur=34+26*a,i.fillStyle=p,i.font=`900 ${A}px Nunito, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,i.fillText(e,n/2,r*.42),i.shadowColor=g,i.shadowBlur=26+30*a,i.fillStyle=f,i.font=`900 ${l}px Playfair Display, serif`,i.fillText(t,n/2,r*.72),i.shadowColor="rgba(0,0,0,0)",i.shadowBlur=0,this.texture.needsUpdate=!0}}function UA(o){return Math.max(0,Math.min(1,o))}function Fs(o,e,t,s,i){const n=Array.from(e);let r=0;for(const A of n)r+=o.measureText(A).width;r+=i*Math.max(0,n.length-1);let a=t-r/2;for(const A of n)o.fillText(A,a+o.measureText(A).width/2,s),a+=o.measureText(A).width+i}function GA(o){return 1-Math.pow(1-o,3)}function PA(o){return o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2}class NA{constructor(e,t){c(this,"scene");c(this,"camera");c(this,"sprite");c(this,"material");c(this,"texture");c(this,"canvas");c(this,"ctx");c(this,"isActive",!1);c(this,"animationAge",0);c(this,"animationDuration",3.5);this.scene=e,this.camera=t,this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=256;const s=this.canvas.getContext("2d");if(!s)throw new Error("[BossWarningOverlay] 2D canvas not available");this.ctx=s,this.texture=new ot(this.canvas),this.texture.colorSpace=P,this.texture.minFilter=Y,this.texture.magFilter=Y,this.material=new Bt({map:this.texture,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:se}),this.sprite=new yt(this.material),this.sprite.visible=!1,this.sprite.renderOrder=100,this.sprite.scale.set(1,.25,1),this.scene.add(this.sprite)}trigger(){this.isActive=!0,this.animationAge=0,this.sprite.visible=!0,this.material.opacity=1,this.draw(0)}update(e){if(!this.isActive)return;if(this.animationAge+=e,this.animationAge>=this.animationDuration){this.isActive=!1,this.sprite.visible=!1;return}const t=UA(this.animationAge/this.animationDuration);this.draw(t),this.updateTransform()}updateTransform(){const e=new T(0,0,-4);e.applyQuaternion(this.camera.quaternion);const t=this.camera.position.clone().add(e);t.y+=.5,this.sprite.position.copy(t);const s=2.5;this.sprite.scale.set(s,s*.25,1)}draw(e){const t=this.canvas.width,s=this.canvas.height,i=this.ctx;i.clearRect(0,0,t,s);let n=0,r=1,a=0;if(e<.2){const d=GA(e/.2);n=d,r=.8+.2*d,a=20*(1-d)}else if(e<.8){n=1;const d=(e-.2)/.6;r=1+.05*Math.sin(d*Math.PI*2),a=0}else{const d=PA((e-.8)/.2);n=1-d,r=1+.1*d,a=10*d}this.material.opacity=n,i.save(),i.translate(t/2,s/2),i.scale(r,r);const A=i.createRadialGradient(0,0,0,0,0,t*.4);A.addColorStop(0,`rgba(255, 60, 0, ${.2*n})`),A.addColorStop(.5,`rgba(255, 60, 0, ${.05*n})`),A.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=A,i.fillRect(-t/2,-s/2,t,s),i.textAlign="center",i.textBaseline="middle",i.font='900 64px "Nunito", sans-serif',i.fillStyle=`rgba(255, 255, 255, ${n})`,i.shadowColor="rgba(255, 50, 0, 0.8)",i.shadowBlur=20,Fs(i,"ANOMALY DETECTED",0,-10,8+a),i.font='300 32px "Nunito", sans-serif',i.fillStyle=`rgba(255, 100, 50, ${n*.9})`,i.shadowBlur=10,Fs(i,"MASSIVE ENERGY SIGNATURE",0,40,4+a*.5);const l=300*r,h=n*.6;i.strokeStyle=`rgba(255, 60, 0, ${h})`,i.lineWidth=2,i.beginPath(),i.moveTo(-l/2,70),i.lineTo(l/2,70),i.stroke(),i.restore(),this.texture.needsUpdate=!0}dispose(){this.scene.remove(this.sprite),this.texture.dispose(),this.material.dispose()}}function HA(o){return Math.max(0,Math.min(1,o))}function Ot(o,e,t,s,i,n){const r=Math.max(0,Math.min(n,Math.min(s,i)/2));o.beginPath(),o.moveTo(e+r,t),o.arcTo(e+s,t,e+s,t+i,r),o.arcTo(e+s,t+i,e,t+i,r),o.arcTo(e,t+i,e,t,r),o.arcTo(e,t,e+s,t,r),o.closePath()}function Ls(o,e,t,s,i){const n=Array.from(e);let r=0;for(const A of n)r+=o.measureText(A).width;r+=i*Math.max(0,n.length-1);let a=t-r/2;for(const A of n)o.fillText(A,a+o.measureText(A).width/2,s),a+=o.measureText(A).width+i}function zt(o){return 1-Math.pow(1-o,3)}function OA(o){return o*o}function _s(o){return o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2}class zA{constructor(e,t){c(this,"scene");c(this,"camera");c(this,"sprite");c(this,"material");c(this,"texture");c(this,"canvas");c(this,"ctx");c(this,"isActive",!1);c(this,"animationAge",0);c(this,"animationDuration",2.8);c(this,"currentLevel",1);this.scene=e,this.camera=t,this.canvas=document.createElement("canvas"),this.canvas.width=768,this.canvas.height=176;const s=this.canvas.getContext("2d");if(!s)throw new Error("[LevelUpOverlay] 2D canvas not available");this.ctx=s,this.texture=new ot(this.canvas),this.texture.colorSpace=P,this.texture.needsUpdate=!0,this.material=new Bt({map:this.texture,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1}),this.sprite=new yt(this.material),this.sprite.visible=!1,this.sprite.renderOrder=100,this.sprite.scale.set(2.75,.58,1),this.scene.add(this.sprite)}show(e){this.currentLevel=e,this.isActive=!0,this.animationAge=0,this.sprite.visible=!0,this.renderLevel()}hide(){this.isActive=!1,this.sprite.visible=!1,this.material.opacity=0}update(e){if(!this.isActive)return;if(this.animationAge+=e,this.animationAge>=this.animationDuration){this.hide();return}const t=this.animationAge/this.animationDuration,s=new T(0,0,-1);s.applyQuaternion(this.camera.quaternion);const i=new T(0,1,0);i.applyQuaternion(this.camera.quaternion);const n=this.camera.position.clone().add(s.multiplyScalar(2.5));let r=0,a=1;if(t<.3){const h=t/.3;r=(1-zt(h))*.5,a=.92+zt(h)*.08}else if(t>.7){const h=(t-.7)/.3;r=_s(h)*.5,a=1-OA(h)*.08}this.sprite.position.copy(n).add(i.multiplyScalar(1.15+r)),this.sprite.scale.set(3*a,.6*a,1);let l=.9;if(t<.2){const h=t/.2;l=zt(h)*.9}else if(t>.75){const h=(t-.75)/.25;l=(1-_s(h))*.9}this.material.opacity=l}dispose(){this.scene.remove(this.sprite),this.texture.dispose(),this.material.dispose()}renderLevel(){const e=this.ctx,t=this.canvas.width,s=this.canvas.height;e.clearRect(0,0,t,s);const i=this.currentLevel%5===0,n=34,r=20,a=t-n*2,A=s-r*2,l=28;e.save(),e.shadowColor="rgba(0, 0, 0, 0.55)",e.shadowBlur=26,e.shadowOffsetY=12,Ot(e,n,r,a,A,l);const h=e.createLinearGradient(0,r,0,r+A);h.addColorStop(0,"rgba(20, 20, 25, 0.72)"),h.addColorStop(1,"rgba(10, 10, 14, 0.48)"),e.fillStyle=h,e.fill(),e.restore(),Ot(e,n,r,a,A,l),e.lineWidth=1,e.strokeStyle="rgba(255, 255, 255, 0.09)",e.stroke(),Ot(e,n+1.5,r+1.5,a-3,A-3,l-1);const d=e.createLinearGradient(0,r,0,r+A);d.addColorStop(0,"rgba(255, 255, 255, 0.06)"),d.addColorStop(.35,"rgba(255, 255, 255, 0.015)"),d.addColorStop(1,"rgba(255, 255, 255, 0)"),e.strokeStyle=d,e.stroke();const u=r+A-6,g=e.createLinearGradient(n,0,n+a,0);g.addColorStop(0,"rgba(0, 212, 255, 0)"),g.addColorStop(.18,"rgba(0, 212, 255, 0.14)"),g.addColorStop(.5,"rgba(0, 212, 255, 0.22)"),g.addColorStop(.82,"rgba(0, 212, 255, 0.14)"),g.addColorStop(1,"rgba(0, 212, 255, 0)"),e.fillStyle=g,e.fillRect(n+18,u,a-36,1);let f=(this.currentLevel*9301+49297)%233280;const m=()=>(f=(f*9301+49297)%233280,f/233280);e.save(),e.globalCompositeOperation="lighter";const I=36;for(let b=0;b<I;b++){const v=n+18+m()*(a-36),B=r+16+m()*(A-32),w=.6+m()*1.2,x=.02+.05*m();e.fillStyle=`rgba(255, 255, 255, ${HA(x)})`,e.beginPath(),e.arc(v,B,w,0,Math.PI*2),e.fill()}e.restore(),e.textAlign="center",e.textBaseline="middle";const C=14,E=54,y=12;e.shadowColor="rgba(0, 0, 0, 0.45)",e.shadowBlur=10,e.fillStyle="rgba(255, 255, 255, 0.66)",e.font=`800 ${C}px Nunito, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,Ls(e,`LEVEL ${this.currentLevel}`,t/2,s/2-36,3.25),i&&(e.shadowColor="rgba(0, 212, 255, 0.14)",e.shadowBlur=14,e.fillStyle="rgba(0, 212, 255, 0.68)",e.font=`900 ${y}px Nunito, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,Ls(e,"BONUS ROUND",t/2,s/2-18,2.6)),e.shadowColor="rgba(0, 212, 255, 0.16)",e.shadowBlur=18,e.fillStyle="rgba(255, 255, 255, 0.96)",e.font=`800 ${E}px Playfair Display, serif`,e.fillText(`${this.currentLevel}`,t/2,s/2+26),e.shadowColor="rgba(0, 0, 0, 0)",e.shadowBlur=0,this.texture.needsUpdate=!0}}class VA{constructor(e){c(this,"overlay");c(this,"isActive",!1);c(this,"age",0);c(this,"config",{color:"#ffffff",intensity:.6,duration:.25});this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      opacity: 0;
      z-index: 9999;
      mix-blend-mode: screen;
    `,e.appendChild(this.overlay)}flash(e){this.config={...this.config,...e},this.isActive=!0,this.age=0,this.overlay.style.backgroundColor=this.config.color}update(e){if(!this.isActive)return;if(this.age+=e,this.age>=this.config.duration){this.isActive=!1,this.overlay.style.opacity="0";return}const t=this.age/this.config.duration;let s;if(t<.2)s=t/.2*this.config.intensity;else{const i=(t-.2)/.8;s=this.config.intensity*Math.exp(-i*4)}this.overlay.style.opacity=s.toString()}dispose(){this.overlay.remove()}}class qA{constructor(e){c(this,"container");c(this,"element",null);c(this,"fillEl",null);c(this,"labelEl",null);c(this,"valueEl",null);c(this,"particlesEl",null);c(this,"currentCharge",0);c(this,"animationRaf",null);c(this,"particleInterval",null);c(this,"isVisible",!1);this.container=e}show(){this.element||this.createDOM(),this.element&&(this.element.classList.add("pow-hud--visible"),this.isVisible=!0,this.startParticleEffect())}hide(){this.element&&(this.element.classList.remove("pow-hud--visible"),this.isVisible=!1,this.stopParticleEffect())}dispose(){this.stopParticleEffect(),this.animationRaf!==null&&(cancelAnimationFrame(this.animationRaf),this.animationRaf=null),this.element?.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null}update(e){if(this.element||this.createDOM(),!this.element||!this.fillEl||!this.labelEl||!this.valueEl)return;this.animateChargeTo(e.charge);const t=Math.floor(e.charge*100);switch(this.valueEl.textContent=`${t}%`,this.element.classList.remove("pow-hud--charging","pow-hud--ready","pow-hud--active","pow-hud--cooldown"),e.phase){case V.CHARGING:this.element.classList.add("pow-hud--charging"),this.labelEl.textContent="POW",this.labelEl.style.color="rgba(0, 242, 255, 0.8)";break;case V.READY:this.element.classList.add("pow-hud--ready"),this.labelEl.textContent="READY",this.labelEl.style.color="#ffd700",this.valueEl.textContent="MAX";break;case V.ACTIVE:this.element.classList.add("pow-hud--active"),this.labelEl.textContent="DISCHARGE",this.labelEl.style.color="#ff0055",this.valueEl.textContent="!!!";break;case V.COOLDOWN:this.element.classList.add("pow-hud--cooldown"),this.labelEl.textContent="COOLING",this.labelEl.style.color="rgba(255, 255, 255, 0.5)";break}}animateChargeTo(e){if(!this.fillEl)return;if(!this.isVisible||Math.abs(this.currentCharge-e)<.005){this.currentCharge=e,this.updateFillVisuals();return}const t=(s,i,n)=>s*(1-n)+i*n;this.currentCharge=t(this.currentCharge,e,.1),this.updateFillVisuals(),Math.abs(this.currentCharge-e)>.001&&(this.animationRaf&&cancelAnimationFrame(this.animationRaf),this.animationRaf=requestAnimationFrame(()=>this.animateChargeTo(e)))}updateFillVisuals(){if(!this.fillEl)return;const e=Math.max(0,Math.min(100,this.currentCharge*100));this.fillEl.style.height=`${e}%`;const t=.2+this.currentCharge*.8;this.fillEl.style.filter=`drop-shadow(0 0 ${10*t}px currentColor)`}startParticleEffect(){this.particleInterval===null&&(this.particleInterval=window.setInterval(()=>this.spawnParticle(),150))}stopParticleEffect(){this.particleInterval!==null&&(clearInterval(this.particleInterval),this.particleInterval=null)}spawnParticle(){if(!this.particlesEl||!this.isVisible||this.currentCharge<.1)return;const e=document.createElement("div");e.className="pow-particle";const t=2+Math.random()*3,s=10+Math.random()*80,i=1+Math.random()*1.5;e.style.width=`${t}px`,e.style.height=`${t}px`,e.style.left=`${s}%`,e.style.animationDuration=`${i}s`,this.particlesEl.appendChild(e),setTimeout(()=>e.remove(),i*1e3)}createDOM(){this.element=document.createElement("div"),this.element.className="pow-hud",this.element.innerHTML=`
      <div class="pow-hud__frame">
        <div class="pow-hud__header">
          <div class="pow-hud__label">POW</div>
          <div class="pow-hud__value">0%</div>
        </div>
        <div class="pow-hud__track-container">
          <div class="pow-hud__track">
            <div class="pow-hud__grid"></div>
            <div class="pow-hud__particles"></div>
            <div class="pow-hud__fill"></div>
            <div class="pow-hud__scanline"></div>
          </div>
          <div class="pow-hud__ticks">
            ${Array(10).fill(0).map(()=>'<div class="pow-tick"></div>').join("")}
          </div>
        </div>
        <div class="pow-hud__footer"></div>
      </div>
    `,this.fillEl=this.element.querySelector(".pow-hud__fill"),this.labelEl=this.element.querySelector(".pow-hud__label"),this.valueEl=this.element.querySelector(".pow-hud__value"),this.particlesEl=this.element.querySelector(".pow-hud__particles"),this.injectStyles(),this.container.appendChild(this.element)}injectStyles(){const e="pow-hud-premium-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
      .pow-hud {
        position: absolute;
        left: 40px;
        top: 50%;
        transform: translateY(-50%) translateX(-20px);
        opacity: 0;
        transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        z-index: 100;
        font-family: 'Orbitron', sans-serif;
        pointer-events: none;
      }

      .pow-hud--visible {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
      }

      .pow-hud__frame {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 16px;
        width: 100px; /* Fixed width for stability */
        box-sizing: border-box;
        background: rgba(10, 12, 20, 0.6);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        box-shadow: 
          0 10px 30px rgba(0, 0, 0, 0.5),
          inset 0 0 20px rgba(0, 0, 0, 0.2);
      }

      .pow-hud__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        margin-bottom: 4px;
      }

      .pow-hud__label {
        font-size: 10px;
        letter-spacing: 2px;
        font-weight: 700;
        color: rgba(0, 242, 255, 0.8);
        text-shadow: 0 0 5px rgba(0, 242, 255, 0.5);
        transition: color 0.3s ease;
        white-space: nowrap;
        text-align: center;
        width: 100%;
      }

      .pow-hud__value {
        font-size: 14px;
        font-weight: 900;
        color: #fff;
        font-variant-numeric: tabular-nums;
      }

      .pow-hud__track-container {
        position: relative;
        display: flex;
        gap: 12px;
        height: 240px;
      }

      .pow-hud__track {
        position: relative;
        width: 24px;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
      }

      .pow-hud__grid {
        position: absolute;
        inset: 0;
        background-image: 
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 4px 4px;
        opacity: 0.5;
        z-index: 1;
      }

      .pow-hud__fill {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0%;
        background: linear-gradient(to top, #0066ff, #00f2ff);
        transition: height 0.1s linear; /* Handled by JS lerp mostly */
        z-index: 2;
        color: #00f2ff; /* For drop-shadow currentColor */
      }

      .pow-hud__scanline {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent);
        animation: pow-scan 3s linear infinite;
        z-index: 3;
        pointer-events: none;
      }

      @keyframes pow-scan {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(500%); }
      }

      .pow-hud__particles {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }

      .pow-particle {
        position: absolute;
        bottom: 0;
        background: #fff;
        border-radius: 50%;
        opacity: 0;
        animation: pow-rise linear forwards;
        box-shadow: 0 0 4px #fff;
      }

      @keyframes pow-rise {
        0% { transform: translateY(0); opacity: 0.8; }
        100% { transform: translateY(-240px); opacity: 0; }
      }

      .pow-hud__ticks {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 4px 0;
        height: 100%;
      }

      .pow-tick {
        width: 8px;
        height: 2px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 1px;
      }

      .pow-tick:nth-child(5n) {
        width: 12px;
        background: rgba(255, 255, 255, 0.4);
      }

      /* --- STATES --- */

      /* READY STATE */
      .pow-hud--ready .pow-hud__frame {
        border-color: rgba(255, 215, 0, 0.5);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
        animation: pow-pulse-frame 2s infinite;
      }

      .pow-hud--ready .pow-hud__fill {
        background: linear-gradient(to top, #ff8c00, #ffd700);
        color: #ffd700;
      }

      .pow-hud--ready .pow-tick {
        background: rgba(255, 215, 0, 0.6);
      }

      @keyframes pow-pulse-frame {
        0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.2); }
        50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.4); }
      }

      /* ACTIVE STATE */
      .pow-hud--active .pow-hud__frame {
        border-color: rgba(255, 0, 85, 0.8);
        box-shadow: 0 0 30px rgba(255, 0, 85, 0.4);
      }

      .pow-hud--active .pow-hud__fill {
        background: linear-gradient(to top, #ff0055, #ffcc00);
        color: #ff0055;
        animation: pow-strobe 0.1s infinite;
      }

      @keyframes pow-strobe {
        0% { opacity: 1; }
        50% { opacity: 0.8; }
        100% { opacity: 1; }
      }

      /* COOLDOWN STATE */
      .pow-hud--cooldown .pow-hud__fill {
        background: #333;
        color: #555;
      }
      
      .pow-hud--cooldown .pow-hud__frame {
        opacity: 0.7;
      }
    `,document.head.appendChild(t)}}const YA=`
  attribute float aDistance;
  
  varying float vDistance;
  varying vec2 vUv;
  
  void main() {
    vDistance = aDistance;
    vUv = uv;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,JA=`
  uniform float uTime;
  uniform float uIntensity;
  uniform vec3 uCoreColor;
  uniform vec3 uInnerGlowColor;
  uniform vec3 uOuterGlowColor;
  
  varying float vDistance;
  varying vec2 vUv;
  
  // Simple noise function for shimmer
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  // 2D Noise for electricity
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float res = mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), f.x),
                    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
    return res;
  }
  
  void main() {
    // Distance from center of beam (vUv.y goes from 0 to 1 across width)
    float d = abs(vUv.y - 0.5) * 2.0;
    
    // Core beam - ultra bright center
    float coreWidth = 0.18;
    float core = smoothstep(coreWidth, 0.0, d);
    vec3 coreColor = uCoreColor * core * 8.0 * uIntensity;
    
    // Inner energy field
    float innerWidth = 0.45;
    float inner = exp(-d * d * 8.0);
    
    // Animated energy pulses along the beam
    float pulseFreq = 20.0;
    float pulseSpeed = 18.0;
    float pulse = sin(vUv.x * pulseFreq - uTime * pulseSpeed) * 0.5 + 0.5;
    float pulse2 = sin(vUv.x * pulseFreq * 0.7 + uTime * pulseSpeed * 0.8) * 0.5 + 0.5;
    float combinedPulse = mix(pulse, pulse2, 0.5);
    
    // Electricity / Lightning effect
    float elecTime = uTime * 25.0;
    float elecNoise = noise(vec2(vUv.x * 15.0 - elecTime, vUv.y * 10.0));
    float elecLine = smoothstep(0.4, 0.5, elecNoise) * smoothstep(0.6, 0.5, elecNoise);
    vec3 elecColor = vec3(1.0, 0.9, 0.5) * elecLine * 5.0 * uIntensity; // Yellow lightning
    
    // Fire/Plasma mixing
    float plasmaNoise = noise(vec2(vUv.x * 8.0 - uTime * 12.0, vUv.y * 5.0));
    vec3 mixedGlow = mix(uInnerGlowColor, uOuterGlowColor, plasmaNoise);

    vec3 innerColor = mixedGlow * inner * (4.5 + combinedPulse * 2.5) * uIntensity;
    
    // Outer glow field
    float outer = exp(-d * d * 3.0);
    vec3 outerColor = uOuterGlowColor * outer * 2.5 * uIntensity;
    
    // Edge shimmer effect
    float shimmer = hash(vec2(vUv.x * 100.0 + uTime * 5.0, d * 50.0));
    float shimmerMask = smoothstep(0.3, 0.6, d) * smoothstep(0.8, 0.5, d);
    vec3 shimmerColor = uInnerGlowColor * shimmer * shimmerMask * 3.0 * uIntensity;
    
    // Combine all layers
    vec3 finalColor = coreColor + innerColor + outerColor + shimmerColor + elecColor;
    
    // Alpha calculation
    float alpha = max(core * 0.98, max(inner * 0.9, outer * 0.6));
    alpha *= uIntensity;
    
    // Fade at beam ends
    float endFade = smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x);
    alpha *= endFade;
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`,KA=`
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,WA=`
  uniform float uTime;
  uniform float uIntensity;
  uniform vec3 uColor;
  
  varying vec2 vUv;
  
  void main() {
    vec2 center = vUv - 0.5;
    float d = length(center);
    
    // Core glow
    float core = exp(-d * d * 20.0);
    vec3 coreColor = vec3(1.0, 1.0, 0.98) * core * 6.0;
    
    // Outer ring
    float ring = exp(-d * d * 8.0);
    vec3 ringColor = uColor * ring * 3.0;
    
    // Pulsing effect
    float pulse = sin(uTime * 8.0) * 0.15 + 0.85;
    
    vec3 finalColor = (coreColor + ringColor) * pulse * uIntensity;
    float alpha = max(core, ring * 0.7) * uIntensity;
    
    if (alpha < 0.01) discard;
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`,jA={beamWidth:.85,coreColor:new D(1,1,.8),innerGlowColor:new D(1,.4,0),outerGlowColor:new D(.8,0,.1),intensity:1,collisionRadius:.5};class XA{constructor(e,t,s={}){c(this,"scene");c(this,"camera");c(this,"config");c(this,"beamGeometry",null);c(this,"beamMaterial",null);c(this,"beamMesh",null);c(this,"leftOrb",null);c(this,"rightOrb",null);c(this,"orbGeometry",null);c(this,"orbMaterial",null);c(this,"isActive",!1);c(this,"leftHandPos",new T);c(this,"rightHandPos",new T);c(this,"time",0);c(this,"currentBeamWidth",0);c(this,"sparkGeometry",null);c(this,"sparkMaterial",null);c(this,"sparkMesh",null);c(this,"sparkPositions",null);c(this,"sparkVelocities",null);c(this,"sparkAlphas",null);c(this,"maxSparks",50);this.scene=e,this.camera=t,this.config={...jA,...s},this.currentBeamWidth=this.config.beamWidth,this.initializeBeam(),this.initializeOrbs(),this.initializeSparks()}initializeBeam(){const t=new Float32Array(192),s=new Float32Array(128),i=new Float32Array(64),n=[];for(let r=0;r<32;r++){const a=r/31;if(s[r*4]=a,s[r*4+1]=0,i[r*2]=a,s[r*4+2]=a,s[r*4+3]=1,i[r*2+1]=a,r<31){const A=r*2,l=(r+1)*2,h=r*2+1,d=(r+1)*2+1;n.push(A,h,l),n.push(l,h,d)}}this.beamGeometry=new pe,this.beamGeometry.setAttribute("position",new F(t,3)),this.beamGeometry.setAttribute("uv",new F(s,2)),this.beamGeometry.setAttribute("aDistance",new F(i,1)),this.beamGeometry.setIndex(n),this.beamMaterial=new Z({vertexShader:YA,fragmentShader:JA,uniforms:{uTime:{value:0},uIntensity:{value:this.config.intensity},uCoreColor:{value:this.config.coreColor},uInnerGlowColor:{value:this.config.innerGlowColor},uOuterGlowColor:{value:this.config.outerGlowColor}},transparent:!0,blending:se,depthWrite:!1,side:ue}),this.beamMesh=new X(this.beamGeometry,this.beamMaterial),this.beamMesh.visible=!1,this.beamMesh.renderOrder=50,this.beamMesh.frustumCulled=!1,this.scene.add(this.beamMesh)}initializeOrbs(){this.orbGeometry=new Ps(.5,.5),this.orbMaterial=new Z({vertexShader:KA,fragmentShader:WA,uniforms:{uTime:{value:0},uIntensity:{value:this.config.intensity},uColor:{value:this.config.innerGlowColor}},transparent:!0,blending:se,depthWrite:!1,side:ue}),this.leftOrb=new X(this.orbGeometry,this.orbMaterial),this.leftOrb.visible=!1,this.leftOrb.renderOrder=51,this.rightOrb=new X(this.orbGeometry,this.orbMaterial.clone()),this.rightOrb.visible=!1,this.rightOrb.renderOrder=51,this.scene.add(this.leftOrb),this.scene.add(this.rightOrb)}initializeSparks(){this.sparkPositions=new Float32Array(this.maxSparks*3),this.sparkVelocities=new Float32Array(this.maxSparks*3),this.sparkAlphas=new Float32Array(this.maxSparks),this.sparkGeometry=new pe,this.sparkGeometry.setAttribute("position",new F(this.sparkPositions,3)),this.sparkMaterial=new Vs({color:16755200,size:.12,transparent:!0,blending:se,depthWrite:!1,opacity:.9}),this.sparkMesh=new _e(this.sparkGeometry,this.sparkMaterial),this.sparkMesh.visible=!1,this.sparkMesh.renderOrder=52,this.scene.add(this.sparkMesh)}activate(){this.isActive||(this.isActive=!0,this.time=0,this.beamMesh&&(this.beamMesh.visible=!0),this.leftOrb&&(this.leftOrb.visible=!0),this.rightOrb&&(this.rightOrb.visible=!0),this.sparkMesh&&(this.sparkMesh.visible=!0),this.sparkAlphas&&this.sparkAlphas.fill(0))}deactivate(){this.isActive&&(this.isActive=!1,this.beamMesh&&(this.beamMesh.visible=!1),this.leftOrb&&(this.leftOrb.visible=!1),this.rightOrb&&(this.rightOrb.visible=!1),this.sparkMesh&&(this.sparkMesh.visible=!1))}getIsActive(){return this.isActive}setHandPositions(e,t){this.leftHandPos.copy(e),this.rightHandPos.copy(t)}update(e){if(!this.isActive)return;this.time+=e;const t=this.leftHandPos.distanceTo(this.rightHandPos),i=.3+Math.max(.2,Math.min(2,t))*.6;this.currentBeamWidth+=(i-this.currentBeamWidth)*e*5,this.beamMaterial&&(this.beamMaterial.uniforms.uTime.value=this.time),this.orbMaterial&&(this.orbMaterial.uniforms.uTime.value=this.time),this.updateBeamGeometry(),this.updateOrbs(),this.updateSparks(e)}updateBeamGeometry(){if(!this.beamGeometry||!this.beamMesh)return;const e=this.beamGeometry.getAttribute("position");if(!e)return;const t=e.array,s=t.length/6,i=new T().subVectors(this.rightHandPos,this.leftHandPos).normalize(),n=new T;this.camera.getWorldDirection(n);const r=new T().crossVectors(i,n).normalize().multiplyScalar(this.currentBeamWidth*.5),a=new T;for(let A=0;A<s;A++){const l=A/(s-1);a.lerpVectors(this.leftHandPos,this.rightHandPos,l);const h=Math.sin(l*Math.PI*4+this.time*6)*.02;a.add(r.clone().multiplyScalar(h*(1-Math.abs(l-.5)*2))),t[A*6]=a.x+r.x,t[A*6+1]=a.y+r.y,t[A*6+2]=a.z+r.z,t[A*6+3]=a.x-r.x,t[A*6+4]=a.y-r.y,t[A*6+5]=a.z-r.z}e.needsUpdate=!0,this.beamGeometry.computeBoundingSphere()}updateOrbs(){this.leftOrb&&(this.leftOrb.position.copy(this.leftHandPos),this.leftOrb.lookAt(this.camera.position)),this.rightOrb&&(this.rightOrb.position.copy(this.rightHandPos),this.rightOrb.lookAt(this.camera.position))}updateSparks(e){if(!this.sparkPositions||!this.sparkVelocities||!this.sparkAlphas||!this.sparkGeometry)return;const t=this.sparkGeometry.getAttribute("position");if(t){for(let s=0;s<this.maxSparks;s++)if(this.sparkAlphas[s]<=0&&Math.random()<.35){const i=Math.random(),n=new T().lerpVectors(this.leftHandPos,this.rightHandPos,i);n.x+=(Math.random()-.5)*.2,n.y+=(Math.random()-.5)*.2,n.z+=(Math.random()-.5)*.1,this.sparkPositions[s*3]=n.x,this.sparkPositions[s*3+1]=n.y,this.sparkPositions[s*3+2]=n.z,this.sparkVelocities[s*3]=(Math.random()-.5)*4,this.sparkVelocities[s*3+1]=(Math.random()-.5)*4,this.sparkVelocities[s*3+2]=(Math.random()-.5)*2,this.sparkAlphas[s]=1}for(let s=0;s<this.maxSparks;s++)this.sparkAlphas[s]>0&&(this.sparkPositions[s*3]+=this.sparkVelocities[s*3]*e,this.sparkPositions[s*3+1]+=this.sparkVelocities[s*3+1]*e,this.sparkPositions[s*3+2]+=this.sparkVelocities[s*3+2]*e,this.sparkAlphas[s]-=e*2.5,this.sparkAlphas[s]<0&&(this.sparkAlphas[s]=0),this.sparkVelocities[s*3]*=.95,this.sparkVelocities[s*3+1]*=.95,this.sparkVelocities[s*3+2]*=.95);t.needsUpdate=!0}}getLaserSegment(){return this.isActive?{start:this.leftHandPos.clone(),end:this.rightHandPos.clone()}:null}getCollisionRadius(){return this.config.collisionRadius}dispose(){this.deactivate(),this.beamMesh&&this.scene.remove(this.beamMesh),this.leftOrb&&this.scene.remove(this.leftOrb),this.rightOrb&&this.scene.remove(this.rightOrb),this.sparkMesh&&this.scene.remove(this.sparkMesh),this.beamGeometry?.dispose(),this.beamMaterial?.dispose(),this.orbGeometry?.dispose(),this.orbMaterial?.dispose(),this.rightOrb?.material?.dispose(),this.sparkGeometry?.dispose(),this.sparkMaterial?.dispose(),this.beamGeometry=null,this.beamMaterial=null,this.beamMesh=null,this.leftOrb=null,this.rightOrb=null,this.orbGeometry=null,this.orbMaterial=null,this.sparkGeometry=null,this.sparkMaterial=null,this.sparkMesh=null,this.sparkPositions=null,this.sparkVelocities=null,this.sparkAlphas=null}}function At(o){return Math.max(0,Math.min(1,o))}class ZA{constructor(e={}){c(this,"config");c(this,"listeners",new Set);c(this,"state");c(this,"lastSliceTime",0);this.config={...la,...e},this.state={charge:0,phase:V.CHARGING,phaseStartTime:performance.now(),destroyedCount:0,destroyedScore:0}}addListener(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(e){for(const t of this.listeners)t(this.state,e)}setPhase(e){if(this.state.phase===e)return;const t=this.state.phase;this.state.phase=e,this.state.phaseStartTime=performance.now(),this.emit({type:"phaseChanged",phase:e,previousPhase:t})}addCharge(e){const t=this.config.chargePerSlice[e]??.05;this.addRawCharge(t)}addRawCharge(e){if(this.state.phase===V.ACTIVE||this.state.phase===V.COOLDOWN)return;const t=this.state.charge;this.state.charge=At(this.state.charge+e),this.lastSliceTime=performance.now();const s=this.state.charge-t;s>0&&this.emit({type:"chargeChanged",charge:this.state.charge,delta:s}),this.state.charge>=1&&this.state.phase===V.CHARGING&&this.setPhase(V.READY)}activate(){return this.state.phase!==V.READY?!1:(this.state.destroyedCount=0,this.state.destroyedScore=0,this.setPhase(V.ACTIVE),this.emit({type:"activated"}),!0)}deactivate(){if(this.state.phase!==V.ACTIVE)return;const{destroyedCount:e,destroyedScore:t}=this.state;this.emit({type:"deactivated",destroyedCount:e,totalScore:t}),this.state.charge=0,this.emit({type:"chargeChanged",charge:0,delta:-1}),this.setPhase(V.COOLDOWN)}recordDestruction(e){this.state.phase===V.ACTIVE&&(this.state.destroyedCount+=1,this.state.destroyedScore+=e,this.emit({type:"objectDestroyed",score:e}))}update(e){const t=performance.now();switch(this.state.phase){case V.CHARGING:if(this.config.chargeDecayPerSecond>0&&this.state.charge>0&&(t-this.lastSliceTime)/1e3>this.config.decayDelaySeconds){const i=this.state.charge;this.state.charge=At(this.state.charge-this.config.chargeDecayPerSecond*e);const n=this.state.charge-i;n!==0&&this.emit({type:"chargeChanged",charge:this.state.charge,delta:n})}break;case V.READY:break;case V.ACTIVE:{(t-this.state.phaseStartTime)/1e3>=this.config.activationDuration&&this.deactivate();break}case V.COOLDOWN:{(t-this.state.phaseStartTime)/1e3>=this.config.cooldownDuration&&(this.lastSliceTime=t,this.setPhase(V.CHARGING));break}}}getState(){return this.state}getCharge(){return this.state.charge}getPhase(){return this.state.phase}isReady(){return this.state.phase===V.READY}isActive(){return this.state.phase===V.ACTIVE}getRemainingTime(){const e=(performance.now()-this.state.phaseStartTime)/1e3;return this.state.phase===V.ACTIVE?Math.max(0,this.config.activationDuration-e):this.state.phase===V.COOLDOWN?Math.max(0,this.config.cooldownDuration-e):0}getPhaseProgress(){const e=(performance.now()-this.state.phaseStartTime)/1e3;return this.state.phase===V.ACTIVE?At(e/this.config.activationDuration):this.state.phase===V.COOLDOWN?At(e/this.config.cooldownDuration):0}getLaserMultiplier(){return this.config.laserDestroyMultiplier}getActivationDebounceMs(){return this.config.activationDebounceMs}getMinHandSpreadDistance(){return this.config.minHandSpreadDistance}reset(){const e=this.state.phase===V.ACTIVE;this.state={charge:0,phase:V.CHARGING,phaseStartTime:performance.now(),destroyedCount:0,destroyedScore:0},this.lastSliceTime=0,e&&this.emit({type:"deactivated",destroyedCount:0,totalScore:0}),this.emit({type:"chargeChanged",charge:0,delta:0}),this.emit({type:"phaseChanged",phase:V.CHARGING,previousPhase:V.CHARGING})}dispose(){this.listeners.clear()}}class $A{constructor(e,t,s={}){c(this,"handTracker");c(this,"container");c(this,"config");c(this,"scene");c(this,"overlayScene");c(this,"camera");c(this,"renderer");c(this,"postProcessing",null);c(this,"assetLibrary",null);c(this,"trailRenderer",null);c(this,"objectPool",null);c(this,"collisionDetector",null);c(this,"sliceEffect",null);c(this,"background",null);c(this,"floatingScoreEffect",null);c(this,"comboWindowMs",450);c(this,"comboStartMs",null);c(this,"comboCount",0);c(this,"comboBaseSum",0);c(this,"comboLastPos",null);c(this,"comboResolveTimeout",null);c(this,"bossOverlay",null);c(this,"bossWarningOverlay",null);c(this,"bossState","idle");c(this,"bossWarningStartTime",0);c(this,"bossWarningDuration",3500);c(this,"pendingBossLevel",0);c(this,"bossInstance",null);c(this,"bossType",null);c(this,"bossRequiredHits",0);c(this,"bossHits",0);c(this,"bossRewardAccrued",0);c(this,"bossRewardTotal",0);c(this,"bossSpeed",0);c(this,"bossSpawnTimeMs",0);c(this,"nextBossLevel",5);c(this,"levelUpOverlay",null);c(this,"screenFlash",null);c(this,"bloomBoostAge",0);c(this,"bloomBoostDuration",0);c(this,"baseBloomIntensity",1.15);c(this,"bossFlashAge",0);c(this,"bossFlashDuration",0);c(this,"powManager",null);c(this,"powHud",null);c(this,"powLaserEffect",null);c(this,"powTwoHandDebounceStart",null);c(this,"scoreManager",null);c(this,"scoreHud",null);c(this,"removeScoreListener",null);c(this,"previousLevel",1);c(this,"animationId",null);c(this,"lastFrameTime",0);c(this,"isRunning",!1);c(this,"isPaused",!1);c(this,"lastHandResults",null);c(this,"lastHandsDetected",0);c(this,"adaptivePerfEnabled",!0);c(this,"trailRenderMode","on-top");c(this,"lastPerfTuningTime",0);c(this,"debugCallback",null);c(this,"fpsCounter");c(this,"ambientLight",null);c(this,"pointLight",null);c(this,"keyLight",null);c(this,"fillLight",null);c(this,"rimLight",null);c(this,"pmremGenerator",null);c(this,"environmentMap",null);c(this,"handleResize",()=>{const e=this.container.clientWidth,t=this.container.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.postProcessing?.resize(e,t),this.collisionDetector?.setScreenSize(e,t)});c(this,"animate",()=>{if(!this.isRunning)return;this.animationId=requestAnimationFrame(this.animate);const e=performance.now(),t=Math.min((e-this.lastFrameTime)/1e3,.1);this.lastFrameTime=e,this.fpsCounter.update(),this.update(e,t),this.render(),this.updateDebugInfo()});this.handTracker=e,this.container=t,this.config={...Aa,...s},this.fpsCounter=new el,this.scene=new Je,this.overlayScene=new Je,this.camera=new vt(75,t.clientWidth/t.clientHeight,.1,100),this.camera.position.z=5,this.renderer=new Gs({antialias:!0,alpha:!0,powerPreference:"high-performance",depth:!0,stencil:!1}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=No,this.renderer.toneMappingExposure=1.22,this.renderer.outputColorSpace=P,this.renderer.transmissionResolutionScale=.75,this.renderer.sortObjects=!0,this.renderer.domElement.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 10;
    `,t.appendChild(this.renderer.domElement),window.addEventListener("resize",this.handleResize)}setupEnvironment(){if(this.pmremGenerator)return;this.pmremGenerator=new Ho(this.renderer),this.pmremGenerator.compileEquirectangularShader();const e=SA(),t=this.pmremGenerator.fromScene(e.scene).texture;e.dispose(),this.environmentMap=t,this.scene.environment=this.environmentMap,new Zr().load("/assets/cosmic-slash/hdri/space.hdr",i=>{i.mapping=Oo;const n=this.pmremGenerator.fromEquirectangular(i).texture;this.environmentMap?.dispose(),this.environmentMap=n,this.scene.environment=this.environmentMap,i.dispose()},void 0,()=>{})}initialize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.setupLighting(),this.setupEnvironment(),this.assetLibrary=new xA(this.renderer,{enableKtx2:!1}),this.assetLibrary.preload([]),this.background=new Ta(this.scene,this.config.background),this.trailRenderer=new ra(this.overlayScene,this.camera,this.container,{maxPoints:72,ribbonWidth:.2,trailLength:28,coreColor:new D(16777215),glowColor:new D(54527),smoothingFactor:.35,velocityScale:2.5,intensityBoost:1.2}),this.trailRenderer.setRenderMode(this.trailRenderMode);const s=new Ts(this.assetLibrary);this.objectPool=new va(this.scene,this.camera,{...this.config.objectPool,maxActiveObjects:6,spawnRate:1.15,spawnZPosition:-10,despawnZPosition:3,spawnSpread:9},s),this.bossOverlay=new kA(this.scene,this.camera),this.bossWarningOverlay=new NA(this.scene,this.camera),this.setupScoring(),this.collisionDetector=new Ba(this.camera,e,t),this.collisionDetector.setCollisionRadius(30),this.sliceEffect=new Sa(this.scene,{...this.config.sliceEffect,particleCount:100,duration:1,initialVelocity:6,velocityDecay:.91,particleSize:1.2}),this.floatingScoreEffect=new LA(this.scene,{poolSize:28,baseDurationSec:1}),this.postProcessing=new ii(this.renderer,this.scene,this.camera,{enableBloom:!0,bloomIntensity:1.15,bloomLuminanceThreshold:.26,bloomRadius:.65,enableChromaticAberration:!0,chromaticAberrationOffset:65e-5,enableColorGrading:!0,colorGradingIntensity:.6,enableGravitationalLensing:!1}),this.levelUpOverlay=new zA(this.scene,this.camera),this.screenFlash=new VA(this.container),this.powManager=new ZA,this.powHud=new qA(this.container),this.powHud.show(),this.powManager.addListener(i=>this.powHud?.update(i)),this.powLaserEffect=new XA(this.scene,this.camera),console.log("[CosmicSlashController] Initialized")}setupScoring(){if(!this.objectPool)return;this.scoreManager?.reset(),this.removeScoreListener?.(),this.removeScoreListener=null;const e={[S.STAR]:9,[S.CRYSTAL]:12,[S.METEOR]:14,[S.VOID_PEARL]:16,[S.NEBULA_CORE]:18,[S.ANCIENT_RELIC]:20,[S.COMET_EMBER]:22},t={[S.STAR]:6,[S.CRYSTAL]:7,[S.METEOR]:8,[S.VOID_PEARL]:9,[S.NEBULA_CORE]:10,[S.ANCIENT_RELIC]:11,[S.COMET_EMBER]:12};this.scoreManager=new RA({pointsByType:e,missPenaltyByType:t,maxLevel:50}),this.scoreHud=this.scoreHud??new DA(this.container,{anchor:"top-right"}),this.scoreHud.show(),this.removeScoreListener=this.scoreManager.addListener((s,i)=>{if(this.scoreHud?.update(s,i),i.type!=="levelChanged")return;const n=Math.max(0,s.level-3),r=s.level<=3?1:Math.min(3.75,s.speedMultiplier*Math.min(1.65,1+.06*n));this.objectPool?.setSpeedMultiplier(r);const a=s.level<=3?1:Math.min(5.4,1+.34*n),A=s.level<=3?1:Math.min(4.8,1+.32*n);for(this.objectPool?.setDifficultyScaling({spawnRateMultiplier:a,maxActiveMultiplier:A});s.level>=this.nextBossLevel&&!this.bossInstance;)this.initiateBossSequence(this.nextBossLevel),this.nextBossLevel+=5;i?.type==="levelChanged"&&s.level>this.previousLevel&&this.triggerLevelUpCelebration(s.level),this.previousLevel=s.level}),this.objectPool.onObjectMissed(s=>{const i=this.scoreManager?.applyMiss(s.config.type)??0;this.floatingScoreEffect?.trigger(s.position.clone(),i,{intensity01:.35,durationSec:.85})}),this.objectPool.setSpeedMultiplier(1),this.objectPool.setDifficultyScaling({spawnRateMultiplier:1,maxActiveMultiplier:1})}setupLighting(){this.ambientLight=new zo(2236996,.35),this.scene.add(this.ambientLight),this.pointLight=new ft(16777215,.35,30),this.pointLight.position.set(0,0,5),this.scene.add(this.pointLight),this.keyLight=new ct(16777215,1.55),this.keyLight.position.set(4,6,4),this.scene.add(this.keyLight),this.fillLight=new ct(8038399,.55),this.fillLight.position.set(-5,2,3),this.scene.add(this.fillLight),this.rimLight=new ct(8847347,1.25),this.rimLight.position.set(-2,3,-6),this.scene.add(this.rimLight)}start(){this.isRunning||(this.isPaused=!1,this.isRunning=!0,this.lastFrameTime=performance.now(),this.animate(),console.log("[CosmicSlashController] Started"))}stop(){this.isRunning&&(this.isRunning=!1,this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),console.log("[CosmicSlashController] Stopped"))}pause(){this.isPaused||(this.isPaused=!0,this.stop())}resume(){this.isPaused&&(this.isPaused=!1,this.start())}togglePause(){return this.isPaused?(this.resume(),!1):(this.pause(),!0)}getIsPaused(){return this.isPaused}update(e,t){if(this.adaptivePerfEnabled&&this.updateAdaptivePerformance(e),this.lastHandResults=this.handTracker.detectHands(e),this.lastHandsDetected=this.lastHandResults?.landmarks?.length??0,this.trailRenderer?.update(this.lastHandResults,t),this.objectPool?.update(t,e),this.bossState==="warning"?this.updateBossWarning(e,t):this.bossState==="active"&&this.updateBoss(t,e),this.powManager){this.powManager.update(t);const s=this.lastHandResults?.landmarks,i=s&&s.length>=2;if(i&&this.powManager.isReady()){const n=performance.now();this.powTwoHandDebounceStart===null?this.powTwoHandDebounceStart=n:n-this.powTwoHandDebounceStart>=this.powManager.getActivationDebounceMs()&&(this.powManager.activate(),this.powLaserEffect?.activate(),this.trailRenderer?.setEnabled(!1),this.powTwoHandDebounceStart=null)}else i||(this.powTwoHandDebounceStart=null);if(this.powManager.isActive()&&i){const n=s[0][9],r=s[1][9],a=this.unproject(1-n.x,n.y,-5),A=this.unproject(1-r.x,r.y,-5);this.powLaserEffect?.setHandPositions(a,A),this.powLaserEffect?.update(t);const l=this.container.clientWidth,h=this.container.clientHeight,d=new O((1-n.x)*l,n.y*h),u=new O((1-r.x)*l,r.y*h);this.checkBeamCollisions(d,u)}else this.powManager.isActive()&&!i?(this.powManager.deactivate(),this.powLaserEffect?.deactivate(),this.trailRenderer?.setEnabled(!0)):this.powManager.isActive()||(this.powLaserEffect?.deactivate(),this.trailRenderer&&!this.trailRenderer.isEnabled()&&this.trailRenderer.setEnabled(!0))}if(this.background?.update(t),this.checkCollisions(),this.sliceEffect?.update(t),this.floatingScoreEffect?.update(t),this.levelUpOverlay?.update(t),this.screenFlash?.update(t),this.bloomBoostAge<this.bloomBoostDuration){this.bloomBoostAge+=t;const s=this.bloomBoostAge/this.bloomBoostDuration,i=Math.max(0,1-s)*.4;this.postProcessing?.setBloomIntensity(this.baseBloomIntensity+i)}if(this.bossFlashAge<this.bossFlashDuration){this.bossFlashAge+=t;const s=this.bossFlashAge/this.bossFlashDuration,i=Math.max(0,1-s*s);this.flashBossMaterial(i)}}checkCollisions(){if(!this.trailRenderer||!this.objectPool||!this.collisionDetector||!this.sliceEffect)return;const e=this.trailRenderer.getTrailSegments(),t=this.objectPool.getActiveObjects();this.bossInstance&&t.push(this.bossInstance);const s=this.collisionDetector.detectCollisions(e,t);for(const i of s)this.handleSlice(i)}handleSlice(e){const{object:t,velocity:s}=e;if(this.bossInstance&&t.id===this.bossInstance.id){this.handleBossHit(s);return}this.objectPool?.sliceObject(t),this.powManager?.addCharge(t.config.type);const i=this.scoreManager?.applySlice(t.config.type)??0;this.registerComboSlice(i,t.position.clone());const n=Math.min(2.5,Math.max(.7,s/300)),r=Math.max(0,Math.min(1,(n-.7)/(2.5-.7)));this.floatingScoreEffect?.trigger(t.position.clone(),i,{intensity01:r,durationSec:1}),this.sliceEffect?.trigger(t.position.clone(),{type:t.config.type,baseColor:t.config.color,glowColor:t.config.emissiveColor,velocityMultiplier:n})}registerComboSlice(e,t){if(!Number.isFinite(e)||e<=0)return;const s=performance.now();(this.comboStartMs===null||s-this.comboStartMs>this.comboWindowMs)&&(this.flushCombo(),this.comboStartMs=s,this.comboCount=0,this.comboBaseSum=0),this.comboCount+=1,this.comboBaseSum+=e,this.comboLastPos=t,this.comboResolveTimeout!==null&&(window.clearTimeout(this.comboResolveTimeout),this.comboResolveTimeout=null);const i=Math.max(0,this.comboWindowMs-(s-(this.comboStartMs??s)));this.comboResolveTimeout=window.setTimeout(()=>{this.flushCombo()},i)}flushCombo(){this.comboResolveTimeout!==null&&(window.clearTimeout(this.comboResolveTimeout),this.comboResolveTimeout=null);const e=this.comboCount,t=this.comboBaseSum,s=this.comboLastPos?.clone()??null;if(this.comboStartMs=null,this.comboCount=0,this.comboBaseSum=0,this.comboLastPos=null,!this.scoreManager||!this.scoreHud||e<2||t<=0)return;const i=Math.max(2,Math.min(5,e)),n=Math.floor(t*(i-1));if(!(n<=0)&&(this.scoreManager.applyBonus(n,"combo"),this.scoreHud.showCombo(i),s)){const r=Math.max(.45,Math.min(1,.55+.12*(i-2)));this.floatingScoreEffect?.trigger(s,n,{intensity01:r,durationSec:1.15})}}initiateBossSequence(e){!this.objectPool||this.bossInstance||!this.assetLibrary||(this.flushCombo(),this.objectPool.setSpawningEnabled(!1),this.objectPool.clearActiveObjects(),this.bossState="warning",this.bossWarningStartTime=performance.now(),this.pendingBossLevel=e,this.bossWarningOverlay?.trigger())}updateBossWarning(e,t){this.bossWarningOverlay?.update(t),e-this.bossWarningStartTime>this.bossWarningDuration&&this.spawnBoss(this.pendingBossLevel)}spawnBoss(e){if(!this.objectPool||this.bossInstance||!this.assetLibrary)return;this.bossState="active";const t=Math.max(1,Math.floor(e/5));this.bossRequiredHits=10*t,this.bossHits=0,this.bossRewardAccrued=0,this.bossRewardTotal=Math.round(360*t*t+220*t),this.bossSpeed=Math.max(.28,1.05-.18*(t-1)),this.bossSpawnTimeMs=performance.now();const s=[S.STAR,S.CRYSTAL,S.METEOR,S.VOID_PEARL,S.NEBULA_CORE,S.ANCIENT_RELIC,S.COMET_EMBER],i=s[Math.floor(Math.random()*s.length)];this.bossType=i;const n=Ae[i],r=5+.6*(t-1),a={...n,scale:n.scale*r,collisionRadius:n.collisionRadius},l=new Ts(this.assetLibrary).createObject(i),h=-22-t*2;l.position.set(0,0,h),l.scale.setScalar(a.scale),l.visible=!0,l.renderOrder=12,this.scene.add(l);const d={id:-Math.floor(Math.random()*1e6)-1,state:j.ACTIVE,config:a,mesh:l,position:new T(0,0,h),velocity:new T(0,0,this.bossSpeed),rotationSpeed:new T(.15,.22,.12),activatedAt:performance.now(),boundingSphere:new is(new T(0,0,h),1)};d.boundingSphere.center.copy(d.position),d.boundingSphere.radius=a.collisionRadius*a.scale,this.bossInstance=d,this.bossOverlay?.show(),this.bossOverlay?.setAnchor(d.position,d.mesh.scale.x),this.bossOverlay?.setText(`0/${this.bossRequiredHits}`,"0",.35),this.bossOverlay?.pulse(.55),this.screenFlash?.flash({color:"#ff3300",duration:.8,intensity:.6}),this.sliceEffect?.trigger(d.position.clone(),{type:i,baseColor:new D(16777215),glowColor:new D(16724736),velocityMultiplier:5})}updateBoss(e,t){if(!this.bossInstance)return;const s=(t-this.bossSpawnTimeMs)*.001;this.bossInstance.position.z+=this.bossSpeed*e,this.bossInstance.position.x=Math.sin(s*.75)*.55,this.bossInstance.position.y=Math.cos(s*.62)*.26,this.bossInstance.mesh.position.copy(this.bossInstance.position);const i=this.bossInstance.mesh.userData.rotationRoot??this.bossInstance.mesh.userData.coreMesh??this.bossInstance.mesh;i.rotation.x+=this.bossInstance.rotationSpeed.x*e,i.rotation.y+=this.bossInstance.rotationSpeed.y*e,i.rotation.z+=this.bossInstance.rotationSpeed.z*e,this.bossInstance.boundingSphere.center.copy(this.bossInstance.position),this.bossOverlay?.setAnchor(this.bossInstance.position,this.bossInstance.mesh.scale.x),this.bossOverlay?.update(e),this.bossInstance.position.z>3.2&&this.endBossFight(!1)}handleBossHit(e){if(!this.bossInstance||!this.bossType||!this.scoreManager||this.bossState!=="active")return;this.bossHits+=1,this.bossHits=Math.min(this.bossRequiredHits,this.bossHits),this.powManager?.addRawCharge(.12),this.bloomBoostAge=0,this.bloomBoostDuration=.2,this.bossFlashAge=0,this.bossFlashDuration=.2,this.flashBossMaterial(1);const t=this.bossRequiredHits>0?this.bossHits/this.bossRequiredHits:1,s=Math.round(this.bossRewardTotal*Math.pow(t,2.05)),i=Math.max(0,s-this.bossRewardAccrued);this.bossRewardAccrued=s,i>0&&this.floatingScoreEffect?.trigger(this.bossInstance.position.clone(),i,{intensity01:.6,durationSec:1.05});const n=Math.max(0,Math.min(1,this.bossRequiredHits>0?this.bossHits/this.bossRequiredHits:1));this.bossOverlay?.setText(`${this.bossHits}/${this.bossRequiredHits}`,`${Math.max(0,Math.floor(this.bossRewardAccrued)).toLocaleString()}`,n),this.bossOverlay?.pulse(Math.min(1,.6+.6*n));const r=Math.min(1.35,Math.max(.8,e/350)),a=Ae[this.bossType];this.sliceEffect?.trigger(this.bossInstance.position.clone(),{type:this.bossType,baseColor:a.color,glowColor:a.emissiveColor,velocityMultiplier:r}),this.bossHits>=this.bossRequiredHits&&this.endBossFight(!0)}endBossFight(e){if(!this.bossInstance){this.bossOverlay?.hide(),this.objectPool?.setSpawningEnabled(!0);return}if(e){const t=this.bossRewardAccrued;if(t>0){this.scoreManager?.applyBonus(t,"boss");const r=this.bossInstance.position.clone();r.y+=2.5,this.floatingScoreEffect?.trigger(r,t,{intensity01:1,durationSec:2});const a=this.bossInstance.position.clone();for(let A=0;A<4;A++){const l=new T((Math.random()-.5)*.6,(Math.random()-.5)*.45,(Math.random()-.5)*.35);this.floatingScoreEffect?.trigger(a.clone().add(l),Math.round(t/4),{intensity01:1,durationSec:1.75})}}const s=this.bossType!==null?Ae[this.bossType]:Ae[S.METEOR],i=this.bossInstance.position.clone(),n=18;for(let r=0;r<n;r++){const a=r<10,A=r/Math.max(1,n-1)*Math.PI*2,l=a?2.15+Math.random()*.7:Math.random()*1.4,h=new T(Math.cos(A)*l+(Math.random()-.5)*.35,Math.sin(A)*l+(Math.random()-.5)*.35,(Math.random()-.5)*.65),d=5+r*.42;this.sliceEffect?.trigger(i.clone().add(h),{type:s.type,baseColor:s.color,glowColor:s.emissiveColor,velocityMultiplier:d})}this.sliceEffect?.trigger(i.clone(),{type:s.type,baseColor:s.color,glowColor:s.emissiveColor,velocityMultiplier:7.2}),this.sliceEffect?.trigger(i.clone(),{type:s.type,baseColor:s.color,glowColor:s.emissiveColor,velocityMultiplier:8.4})}this.scene.remove(this.bossInstance.mesh),this.disposeThreeObject(this.bossInstance.mesh),this.bossInstance=null,this.bossType=null,this.bossRequiredHits=0,this.bossHits=0,this.bossRewardAccrued=0,this.bossRewardTotal=0,this.bossSpeed=0,this.bossOverlay?.hide(),this.bossState="idle",this.objectPool?.setSpawningEnabled(!0)}triggerLevelUpCelebration(e){this.levelUpOverlay?.show(e),this.bloomBoostAge=0,this.bloomBoostDuration=.6;const t=new T(0,0,-1);t.applyQuaternion(this.camera.quaternion);const s=this.camera.position.clone().add(t.multiplyScalar(2.5));for(let i=0;i<6;i++){const n=i/6*Math.PI*2,r=1,a=new T(Math.cos(n)*r,Math.sin(n)*r,(Math.random()-.5)*.3),A=Object.values(S),l=A[Math.floor(Math.random()*A.length)],h=Ae[l];this.sliceEffect?.trigger(s.clone().add(a),{type:l,baseColor:h.color,glowColor:h.emissiveColor,velocityMultiplier:2.5})}}flashBossMaterial(e){if(!this.bossInstance||!this.bossType)return;const t=Ae[this.bossType];this.bossInstance.mesh.traverse(i=>{if(!(i instanceof X))return;const n=Array.isArray(i.material)?i.material:[i.material];for(const r of n)if(r){if("emissiveIntensity"in r){const a=t.emissiveIntensity,A=e*2.8;r.emissiveIntensity=a+A}if("emissive"in r&&r.emissive instanceof D){const a=1+e*1.5,A=t.emissiveColor.r+t.emissiveColor.g+t.emissiveColor.b,l=Math.min(3,A*a),h=A>0?l/A:1;r.emissive.copy(t.emissiveColor).multiplyScalar(h)}if("color"in r&&r.color instanceof D){const a=1+e*.4;r.color.copy(t.color).multiplyScalar(a)}}})}unproject(e,t,s){const i=new T;i.set(e*2-1,-(t*2)+1,.5),i.unproject(this.camera),i.sub(this.camera.position).normalize();const n=(s-this.camera.position.z)/i.z;return new T().copy(this.camera.position).add(i.multiplyScalar(n))}checkBeamCollisions(e,t){if(!this.objectPool||!this.powManager)return;const s=this.objectPool.getActiveObjects(),i=40,n=new O().subVectors(t,e),r=n.lengthSq(),a=A=>{let l=0;r>0&&(l=Math.max(0,Math.min(1,new O().subVectors(A,e).dot(n)/r)));const h=new O().copy(e).add(n.clone().multiplyScalar(l));return A.distanceTo(h)};for(const A of s){const l=A.position.clone().project(this.camera),h=(l.x*.5+.5)*this.container.clientWidth,d=(-(l.y*.5)+.5)*this.container.clientHeight,u=new O(h,d),g=a(u),f=50*Math.max(.1,5/(5-A.position.z))*A.config.scale;g<i+f&&this.handlePowLaserHit(A)}if(this.bossInstance){const A=this.bossInstance.position.clone().project(this.camera),l=(A.x*.5+.5)*this.container.clientWidth,h=(-(A.y*.5)+.5)*this.container.clientHeight,d=new O(l,h),u=a(d),p=80*Math.max(.1,5/(5-this.bossInstance.position.z))*this.bossInstance.config.scale;u<i+p&&this.handlePowLaserBossHit()}}handlePowLaserHit(e){this.objectPool?.sliceObject(e);const t=this.scoreManager?.applySlice(e.config.type)??0,s=this.powManager?.getLaserMultiplier()??2,i=Math.floor(t*(s-1));i>0&&this.scoreManager?.applyBonus(i,"combo"),this.powManager?.recordDestruction(t+i);const n=t+i;this.floatingScoreEffect?.trigger(e.position.clone(),n,{intensity01:1,durationSec:1.2}),this.sliceEffect?.trigger(e.position.clone(),{type:e.config.type,baseColor:e.config.color,glowColor:e.config.emissiveColor,velocityMultiplier:2.5})}handlePowLaserBossHit(){if(!this.bossInstance||!this.bossType||!this.scoreManager)return;const e=2;this.bossHits=Math.min(this.bossRequiredHits,this.bossHits+e),this.bloomBoostAge=0,this.bloomBoostDuration=.15,this.bossFlashAge=0,this.bossFlashDuration=.15,this.flashBossMaterial(1);const t=this.bossRequiredHits>0?this.bossHits/this.bossRequiredHits:1,s=Math.round(this.bossRewardTotal*Math.pow(t,2.05)),i=Math.max(0,s-this.bossRewardAccrued),n=this.powManager?.getLaserMultiplier()??2,r=Math.floor(i*n);this.bossRewardAccrued=s+(r-i),r>0&&this.floatingScoreEffect?.trigger(this.bossInstance.position.clone(),r,{intensity01:1,durationSec:1}),this.powManager?.recordDestruction(r);const a=Math.max(0,Math.min(1,t));this.bossOverlay?.setText(`${this.bossHits}/${this.bossRequiredHits}`,`${Math.max(0,Math.floor(this.bossRewardAccrued)).toLocaleString()}`,a),this.bossOverlay?.pulse(Math.min(1,.8+.4*a));const A=Ae[this.bossType];this.sliceEffect?.trigger(this.bossInstance.position.clone(),{type:this.bossType,baseColor:A.color,glowColor:A.emissiveColor,velocityMultiplier:2}),this.bossHits>=this.bossRequiredHits&&this.endBossFight(!0)}disposeThreeObject(e){e.traverse(t=>{if(!(t instanceof X))return;t.geometry?.dispose();const s=Array.isArray(t.material)?t.material:[t.material];for(const i of s)i instanceof Be&&i.dispose()})}render(){if(this.postProcessing?this.postProcessing.render():this.renderer.render(this.scene,this.camera),this.trailRenderer){const e=this.renderer.autoClear;this.renderer.autoClear=!1,this.trailRenderMode==="on-top"&&this.renderer.clearDepth(),this.renderer.render(this.overlayScene,this.camera),this.renderer.autoClear=e}}setTrailRenderMode(e){this.trailRenderMode=e,this.trailRenderer?.setRenderMode(e)}setAdaptivePerformanceEnabled(e){this.adaptivePerfEnabled=e,e||this.handTracker.setDetectionIntervalMs(0)}updateAdaptivePerformance(e){if(e-this.lastPerfTuningTime<500)return;this.lastPerfTuningTime=e;const t=this.fpsCounter.getFps();if(t>=52){this.handTracker.setDetectionIntervalMs(0),this.trailRenderer?.setQualityLevel("high"),this.postProcessing?.setBloomIntensity(1.35),this.objectPool?.setQualityLevel("high");return}if(t>=38){this.handTracker.setDetectionIntervalMs(33),this.trailRenderer?.setQualityLevel("medium"),this.postProcessing?.setBloomIntensity(1),this.objectPool?.setQualityLevel("medium");return}this.handTracker.setDetectionIntervalMs(66),this.trailRenderer?.setQualityLevel("low"),this.postProcessing?.setBloomIntensity(.65),this.objectPool?.setQualityLevel("low")}enableDebug(e){this.debugCallback=e}disableDebug(){this.debugCallback=null}updateDebugInfo(){if(!this.debugCallback)return;const e={fps:this.fpsCounter.getFps(),handsDetected:this.lastHandsDetected,activeObjects:this.objectPool?.getActiveCount()??0,totalSliced:this.objectPool?.getTotalSliced()??0,trailPointCounts:this.trailRenderer?.getTrailPointCounts()??{},activeExplosions:this.sliceEffect?.getActiveCount()??0,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,trailRenderMode:this.trailRenderMode,detectionIntervalMs:this.handTracker.getDetectionIntervalMs()};this.debugCallback(e)}getHandCount(){return this.lastHandsDetected}reset(){this.objectPool?.reset(),this.collisionDetector?.reset(),this.sliceEffect?.clear(),this.trailRenderer?.clear(),this.floatingScoreEffect?.clear(),this.scoreManager?.reset(),this.powManager?.reset(),this.powLaserEffect?.deactivate(),this.powTwoHandDebounceStart=null,this.objectPool?.setSpeedMultiplier(1),this.objectPool?.setDifficultyScaling({spawnRateMultiplier:1,maxActiveMultiplier:1}),this.flushCombo(),this.endBossFight(!1),this.nextBossLevel=5,this.previousLevel=1,this.isPaused=!1,console.log("[CosmicSlashController] Reset")}dispose(){this.stop(),window.removeEventListener("resize",this.handleResize),this.trailRenderer?.dispose(),this.objectPool?.dispose(),this.collisionDetector?.dispose(),this.sliceEffect?.dispose(),this.floatingScoreEffect?.dispose(),this.background?.dispose(),this.postProcessing?.dispose(),this.assetLibrary?.dispose(),this.levelUpOverlay?.dispose(),this.screenFlash?.dispose(),this.bossOverlay?.dispose(),this.powManager?.dispose(),this.powHud?.dispose(),this.powLaserEffect?.dispose(),this.powManager=null,this.powHud=null,this.powLaserEffect=null,this.removeScoreListener?.(),this.removeScoreListener=null,this.scoreHud?.dispose(),this.scoreHud=null,this.bossOverlay?.dispose(),this.bossOverlay=null,this.flushCombo(),this.endBossFight(!1),this.scoreManager=null,this.floatingScoreEffect=null,this.ambientLight&&this.scene.remove(this.ambientLight),this.pointLight&&this.scene.remove(this.pointLight),this.keyLight&&this.scene.remove(this.keyLight),this.fillLight&&this.scene.remove(this.fillLight),this.rimLight&&this.scene.remove(this.rimLight),this.keyLight=null,this.fillLight=null,this.rimLight=null,this.renderer.dispose(),this.pmremGenerator?.dispose(),this.pmremGenerator=null,this.environmentMap?.dispose(),this.environmentMap=null,this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),console.log("[CosmicSlashController] Disposed")}}let el=class{constructor(){c(this,"frames",0);c(this,"lastTime",performance.now());c(this,"fps",0)}update(){this.frames++;const e=performance.now(),t=e-this.lastTime;t>=1e3&&(this.fps=this.frames*1e3/t,this.frames=0,this.lastTime=e)}getFps(){return this.fps}};class tl{constructor(e={}){c(this,"handLandmarker",null);c(this,"videoElement",null);c(this,"stream",null);c(this,"config");c(this,"_isReady",!1);c(this,"detectionIntervalMs",0);c(this,"lastResult",null);c(this,"lastDetectForVideoTimestamp",-1);this.config={...Fr,...e}}setDetectionIntervalMs(e){this.detectionIntervalMs=Math.max(0,e)}getDetectionIntervalMs(){return this.detectionIntervalMs}async initialize(e){this.videoElement=e,await Promise.all([this.initializeHandLandmarker(),this.initializeWebcam()]),this._isReady=!0}async initializeHandLandmarker(){try{const e=await Vo.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");this.handLandmarker=await qo.createFromOptions(e,{baseOptions:{modelAssetPath:this.config.modelAssetPath,delegate:this.config.delegate},runningMode:"VIDEO",numHands:this.config.numHands,minHandDetectionConfidence:this.config.minHandDetectionConfidence,minHandPresenceConfidence:this.config.minHandPresenceConfidence,minTrackingConfidence:this.config.minTrackingConfidence}),console.log("[HandTracker] MediaPipe HandLandmarker initialized")}catch(e){throw console.error("[HandTracker] Failed to initialize HandLandmarker:",e),new Error(`MediaPipe initialization failed: ${e}`)}}async initializeWebcam(){if(!this.videoElement)throw new Error("Video element not set");try{this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user",frameRate:{ideal:30}},audio:!1}),this.videoElement.srcObject=this.stream,this.videoElement.playsInline=!0,this.videoElement.muted=!0,await new Promise((e,t)=>{if(!this.videoElement){t(new Error("Video element not set"));return}this.videoElement.onloadedmetadata=()=>{this.videoElement.play().then(()=>e()).catch(t)},this.videoElement.onerror=()=>t(new Error("Video load error"))}),console.log("[HandTracker] Webcam initialized:",{width:this.videoElement.videoWidth,height:this.videoElement.videoHeight})}catch(e){throw this.handleCameraError(e),e}}handleCameraError(e){if(e instanceof DOMException)switch(e.name){case"NotAllowedError":console.error("[HandTracker] Camera permission denied. Please allow camera access.");break;case"NotFoundError":console.error("[HandTracker] No camera found. Please connect a camera.");break;case"NotReadableError":console.error("[HandTracker] Camera is in use by another application.");break;case"OverconstrainedError":console.error("[HandTracker] Camera does not meet requirements.");break;default:console.error("[HandTracker] Camera error:",e.message)}else console.error("[HandTracker] Unknown camera error:",e)}detectHands(e){if(!this._isReady||!this.handLandmarker||!this.videoElement||this.videoElement.readyState<2)return null;if(e<=this.lastDetectForVideoTimestamp)return this.lastResult;if(this.detectionIntervalMs>0&&this.lastDetectForVideoTimestamp>=0&&e-this.lastDetectForVideoTimestamp<this.detectionIntervalMs)return this.lastResult;try{const t=this.handLandmarker.detectForVideo(this.videoElement,e);return this.lastDetectForVideoTimestamp=e,this.lastResult=t,t}catch(t){return console.error("[HandTracker] Detection error:",t),null}}isReady(){return this._isReady}getVideoDimensions(){return this.videoElement?{width:this.videoElement.videoWidth,height:this.videoElement.videoHeight}:null}dispose(){this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.handLandmarker&&(this.handLandmarker.close(),this.handLandmarker=null),this.videoElement&&(this.videoElement.srcObject=null),this._isReady=!1,console.log("[HandTracker] Disposed")}}class sl{constructor(e){c(this,"container");c(this,"element",null);c(this,"isVisible",!1);this.container=e,this.createDOM()}update(e){if(!this.element)return;const t=this.element.querySelector(".debug-content");t&&(t.innerHTML=e)}show(){this.isVisible=!0,this.updateVisibility()}hide(){this.isVisible=!1,this.updateVisibility()}toggle(){return this.isVisible=!this.isVisible,this.updateVisibility(),this.isVisible}isVisibleState(){return this.isVisible}updateVisibility(){this.element&&(this.element.style.display=this.isVisible?"block":"none")}createDOM(){this.element=document.createElement("div"),this.element.className="debug-component",this.element.innerHTML='<div class="debug-content"></div>';const e=document.createElement("style");e.textContent=`
      .debug-component {
        position: absolute;
        bottom: 78px;
        left: 20px;
        padding: 12px 16px;
        background: rgba(20, 20, 25, 0.6);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        color: #00ff9d;
        font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
        font-size: 0.75rem;
        border-radius: 16px;
        z-index: 2000;
        display: none;
        min-width: 180px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        line-height: 1.5;
      }

      @media (max-width: 768px) {
        .debug-component {
          bottom: 96px;
          left: 10px;
        }
      }
      
      .debug-component .debug-content div {
        white-space: nowrap;
      }
    `,this.element.appendChild(e),this.container.appendChild(this.element)}}class il{constructor(e){c(this,"container");c(this,"element",null);this.container=e}show(){if(this.element)return;this.element=document.createElement("div"),this.element.className="app-footer",this.element.innerHTML=`
      <a href="https://x.com/quiet_node" target="_blank" rel="noopener noreferrer">
        built by @quiet_node
      </a>
    `;const e=document.createElement("style");e.textContent=`
      .app-footer {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2000;
        font-family: 'Nunito', sans-serif;
        font-size: 0.85rem;
        opacity: 0.7;
        transition: all 0.3s ease;
        pointer-events: auto;
      }

      .app-footer:hover {
        opacity: 1;
        transform: translateX(-50%) translateY(-2px);
      }

      .app-footer a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        padding: 8px 12px;
        background: rgba(20, 20, 25, 0.6);
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        letter-spacing: 0.05em;
      }

      @media (max-width: 768px) {
        .app-footer {
          bottom: 20px;
          width: 100%;
          text-align: center;
        }
        .app-footer a {
          padding: 6px 10px;
          font-size: 0.75rem;
        }
      }

      .app-footer a:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
      }
    `,this.element.appendChild(e),this.container.appendChild(this.element)}hide(){this.element&&this.element.parentNode&&(this.element.parentNode.removeChild(this.element),this.element=null)}}class ol{constructor(e){c(this,"container");c(this,"element",null);c(this,"isVisible",!0);c(this,"actionHandler",null);this.container=e}onAction(e){this.actionHandler=e}update(e){if(this.element||this.createDOM(),!this.element)return;const t=this.element.querySelector(".hint-content");t&&(e==="galaxy"?t.innerHTML=`
        <div class="hint-header">
          <span class="hint-title">Guide</span>
        </div>
        <div class="hint-list">
          <div class="hint-item">Show both hands to spawn</div>
          <div class="hint-item">Move apart to grow</div>
          <div class="hint-item">Move together to shrink</div>
          <div class="hint-item">Close hands for Big Bang</div>
          <div class="hint-item">Pinch for Star burst</div>
        </div>
      `:e==="cosmic-slash"?t.innerHTML=`
        <div class="hint-header">
          <span class="hint-title">Guide</span>
        </div>
        <div class="hint-list">
          <div class="hint-item">Swipe through objects to score points</div>
          <div class="hint-item">Fast swipes for bigger explosions</div>
          <div class="hint-item">Show both hands for POW beam</div>
          <div class="hint-item">Press <kbd>Space</kbd> to pause/resume</div>
          <div class="hint-item">Press <kbd>R</kbd> to restart</div>
        </div>
      `:(t.innerHTML=`
        <div class="hint-header">
          <span class="hint-title">Guide</span>
        </div>
        <div class="hint-list">
          <div class="hint-item">Wave your hand to wipe away the fog</div>
          <div class="hint-item highlight clickable-hint" data-action="reset">
            <span class="desktop-text">Press <kbd>R</kbd> to reset</span>
            <span class="mobile-text">Tap to Reset</span>
          </div>
        </div>
      `,t.querySelectorAll(".clickable-hint").forEach(i=>{i.addEventListener("click",n=>{const r=n.currentTarget.dataset.action;r&&this.actionHandler&&this.actionHandler(r)})})))}toggle(){this.isVisible=!this.isVisible,this.updateVisibility()}show(){this.isVisible=!0,this.updateVisibility()}hide(){this.isVisible=!1,this.updateVisibility()}updateVisibility(){this.element&&(this.isVisible?this.element.classList.remove("minimized"):this.element.classList.add("minimized"))}createDOM(){this.element=document.createElement("div"),this.element.className="hint-component",this.element.innerHTML=`
      <div class="hint-content"></div>
      <div class="hint-footer">
        <span class="desktop-text">Press <kbd>H</kbd> to toggle hints</span>
        <span class="mobile-text">Tap to toggle hints</span>
      </div>
      <div class="hint-minimized-icon">H</div>
    `,this.element.addEventListener("click",s=>{this.isVisible||(this.toggle(),s.stopPropagation())});const e=this.element.querySelector(".hint-footer");e&&e.addEventListener("click",s=>{this.isVisible&&(this.toggle(),s.stopPropagation())});const t=document.createElement("style");t.textContent=`
      .hint-component {
        position: absolute;
        bottom: 30px; /* Aligned with footer on desktop */
        right: 20px;
        padding: 16px 12px;
        background: rgba(20, 20, 25, 0.6);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        color: #fff;
        font-family: 'Nunito', sans-serif;
        border-radius: 16px;
        z-index: 100;
        width: 240px; /* Fixed width for smoother transition */
        max-height: 400px; /* Arbitrary large height */
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.08);
        transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); /* Slower, smoother bezier */
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .hint-component.minimized {
        width: 40px;
        height: 40px; /* Explicit height */
        max-height: 40px;
        padding: 0;
        border-radius: 50%;
        cursor: pointer;
        background: rgba(20, 20, 25, 0.8);
        align-items: center;
        justify-content: center;
      }

      .hint-content, .hint-footer {
        opacity: 1;
        transition: opacity 0.4s ease 0.2s; /* Slower fade in with longer delay */
        width: 100%;
      }

      .hint-component.minimized .hint-content,
      .hint-component.minimized .hint-footer {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease; /* Faster fade out */
        position: absolute; /* Take out of flow to prevent layout issues */
      }

      .hint-minimized-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
        font-weight: 700;
        color: #fff;
        opacity: 0;
        transition: all 0.3s ease;
        pointer-events: none;
      }

      .hint-component.minimized .hint-minimized-icon {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s; /* Pop in with delay */
      }

      .hint-footer {
        margin-top: auto; /* Push to bottom */
        padding-top: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        cursor: pointer;
      }
      
      .hint-footer:hover {
        color: rgba(255, 255, 255, 0.8);
      }

      .clickable-hint {
        cursor: pointer;
        transition: background 0.2s;
        border-radius: 4px;
        padding: 2px 4px;
        margin: -2px -4px;
      }
      
      .clickable-hint:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      
      .clickable-hint:active {
        background: rgba(255, 255, 255, 0.2);
      }

      .mobile-text { display: none; }

      @media (max-width: 768px) {
        .hint-component {
          bottom: 50px; /* Higher than footer on mobile */
          right: 10px;
          left: auto; /* Don't force left: 10px, let width handle it */
          width: 200px; /* Slightly smaller on mobile */
        }
        
        .hint-component.minimized {
          width: 40px;
          left: auto;
        }
        
        .desktop-text { display: none !important; }
        .mobile-text { display: inline !important; }
      }
        max-width: 260px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }

      @media (max-width: 768px) {
        .hint-component {
          bottom: 60px; /* Above footer/status */
          right: 10px;
          left: 10px;
          width: auto;
          max-width: none;
          min-width: 0;
          padding: 12px;
        }
        .hint-title { font-size: 0.9rem; }
        .hint-item { font-size: 0.8rem; }
      }

      .hint-header {
        margin-bottom: 10px;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .hint-title {
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.02em;
      }

      .hint-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .hint-item {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 400;
        line-height: 1.4;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .hint-item::before {
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
      }

      .hint-item.highlight {
        color: #fff;
        margin-top: 4px;
      }

      .hint-item.highlight::before {
        background: #fff;
      }

      .hint-footer {
        margin-top: 20px;
        padding-top: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.4);
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      kbd {
        display: inline-block;
        padding: 2px 6px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 4px;
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 0.75rem;
        color: #fff;
        min-width: 18px;
        text-align: center;
        margin: 0 2px;
      }
    `,this.element.appendChild(t),this.container.appendChild(this.element)}}class nl{constructor(e,t){c(this,"container");c(this,"element",null);c(this,"onSelect");c(this,"isVisible",!1);this.container=e,this.onSelect=t}show(){if(this.isVisible)return;this.element=document.createElement("div"),this.element.className="landing-page",this.element.innerHTML=`
      <div class="landing-container">
        <header class="landing-header">
          <h1 class="app-title">Gesture Lab</h1>
          <p class="app-subtitle">Touchless Interactive Experiences</p>
        </header>
        
        <div class="portals-container">
          <button class="portal-card galaxy-portal" data-mode="galaxy">
            <div class="portal-content">
              <h2 class="portal-title">Interactive Galaxy</h2>
              <p class="portal-desc">Manipulate a universe of particles</p>
            </div>
            <div class="portal-footer">
              <span class="key-hint">Press <kbd>G</kbd></span>
            </div>
            <div class="portal-bg"></div>
          </button>
          
          <button class="portal-card fog-portal" data-mode="foggy-mirror">
            <div class="portal-content">
              <h2 class="portal-title">Foggy Mirror</h2>
              <p class="portal-desc">Clear the mist to reveal reality</p>
            </div>
            <div class="portal-footer">
              <span class="key-hint">Press <kbd>F</kbd></span>
            </div>
            <div class="portal-bg"></div>
          </button>
          
          <button class="portal-card slash-portal" data-mode="cosmic-slash">
            <div class="portal-content">
              <h2 class="portal-title">Cosmic Slash</h2>
              <p class="portal-desc">Slice through cosmic anomalies with your hands</p>
            </div>
            <div class="portal-footer">
              <span class="key-hint">Press <kbd>C</kbd></span>
            </div>
            <div class="portal-bg"></div>
          </button>
        </div>

        <footer class="landing-footer">
          <a href="https://x.com/quiet_node" target="_blank" rel="noopener noreferrer">
            built by @quiet_node
          </a>
        </footer>
      </div>
    `;const e=document.createElement("style");e.id="landing-page-style",e.textContent=`
      .landing-page {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #050508;
        background-image: 
          radial-gradient(circle at 50% 0%, rgba(40, 40, 60, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(30, 30, 40, 0.1) 0%, transparent 40%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.6s ease;
        font-family: 'Nunito', sans-serif !important;
        overflow: hidden;
      }

      .landing-page * {
        font-family: 'Nunito', sans-serif !important;
      }
      
      .landing-page.visible {
        opacity: 1;
      }

      .landing-container {
        text-align: center;
        width: 100%;
        max-width: 600px;
        height: 100%;
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }

      .landing-header {
        animation: fadeDown 0.8s ease-out forwards;
      }

      .app-title {
        font-family: 'Playfair Display', serif !important;
        font-size: 4rem;
        font-weight: 700;
        letter-spacing: 0.1rem;
        margin: 0;
        background: linear-gradient(to bottom, #ffffff, #aaaaaa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .app-subtitle {
        font-size: 1.1rem;
        color: #666688;
        margin-top: 0.5rem;
        font-weight: 300;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
      }

      .portals-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
        perspective: 1000px;
        margin: auto 0; /* Center vertically if space allows */
      }

      .portal-card {
        position: relative;
        width: 100%;
        height: auto;
        min-height: 100px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        padding: 1.5rem 2rem;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        text-align: left;
        overflow: hidden;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        animation: fadeUp 0.8s ease-out forwards;
        animation-delay: 0.2s;
        opacity: 0;
      }

      .portal-card:nth-child(2) {
        animation-delay: 0.3s;
      }

      .portal-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.4s ease;
      }

      .galaxy-portal .portal-bg {
        background: linear-gradient(90deg, rgba(100, 50, 255, 0.1), transparent);
      }

      .fog-portal .portal-bg {
        background: linear-gradient(90deg, rgba(200, 200, 220, 0.1), transparent);
      }

      .slash-portal .portal-bg {
        background: linear-gradient(90deg, rgba(255, 100, 100, 0.1), transparent);
      }

      .portal-card:hover {
        transform: translateX(5px);
        border-color: rgba(255, 255, 255, 0.2);
        background: rgba(255, 255, 255, 0.05);
      }

      .portal-card:hover .portal-bg {
        opacity: 1;
      }

      .portal-content {
        z-index: 2;
        flex: 1;
      }

      .portal-title {
        font-size: 1.4rem;
        font-weight: 600;
        color: #fff;
        margin: 0 0 0.25rem 0;
        letter-spacing: 0.02rem;
      }

      .portal-desc {
        font-size: 0.95rem;
        color: #8888aa;
        margin: 0;
        font-weight: 300;
      }

      .portal-footer {
        z-index: 2;
        margin-left: 2rem;
        display: flex;
        align-items: center;
      }

      .landing-footer {
        position: absolute;
        bottom: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        animation: fadeUp 0.8s ease-out forwards;
        animation-delay: 0.5s;
        opacity: 0;
      }
      
      .landing-footer a {
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        font-size: 0.9rem;
        letter-spacing: 0.05rem;
        transition: color 0.3s ease;
        pointer-events: auto;
      }
      
      .landing-footer a:hover {
        color: #fff;
      }

      .key-hint {
        font-size: 0.8rem;
        color: #666688;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      kbd {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 2px 8px;
        color: #fff;
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 0.9rem;
        min-width: 24px;
        text-align: center;
      }

      @keyframes fadeDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @media (max-width: 600px) {
        .landing-container {
          padding: 2rem 1rem;
          gap: 1.5rem;
        }
        .app-title { font-size: 2.5rem; }
        .app-subtitle { font-size: 0.9rem; }
        .portals-container { gap: 1rem; }
        .portal-card { 
          flex-direction: column; 
          align-items: flex-start; 
          gap: 0.5rem;
          padding: 1.2rem;
          min-height: auto;
        }
        .portal-title { font-size: 1.2rem; }
        .portal-desc { font-size: 0.85rem; }
        .portal-footer { display: none; }
      }
    `,this.element.appendChild(e),this.container.appendChild(this.element),requestAnimationFrame(()=>{this.element&&this.element.classList.add("visible")}),this.attachListeners(),this.isVisible=!0}hide(){!this.isVisible||!this.element||(this.element.classList.remove("visible"),setTimeout(()=>{this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.isVisible=!1},600))}attachListeners(){if(!this.element)return;this.element.querySelectorAll(".portal-card").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-mode");s&&this.onSelect(s)})})}}class rl{constructor(e){c(this,"container");c(this,"element",null);c(this,"clickHandler",null);this.container=e}onClick(e){this.clickHandler=e,this.element&&(this.element.style.cursor="pointer")}update(e){if(this.element||this.createDOM(),!this.element)return;const t=this.element.querySelector(".mode-content");if(!t)return;const s=e==="galaxy"?"Interactive Galaxy":e==="cosmic-slash"?"Cosmic Slash":"Foggy Mirror";t.innerHTML=`
      <div class="current-mode">${s}</div>
      <div class="switch-hint desktop-hint">Press <kbd>M</kbd> for Main Menu</div>
      <div class="switch-hint mobile-hint">Tap for Main Menu</div>
    `}createDOM(){this.element=document.createElement("div"),this.element.className="mode-indicator",this.element.innerHTML=`
      <div class="mode-content"></div>
    `,this.clickHandler&&(this.element.style.cursor="pointer"),this.element.addEventListener("click",()=>{this.clickHandler&&this.clickHandler()});const e=document.createElement("style");e.textContent=`
      .mode-indicator {
        position: absolute;
        top: 20px;
        left: 20px;
        padding: 10px 12px;
        background: rgba(20, 20, 25, 0.6);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        color: #fff;
        font-family: 'Nunito', sans-serif;
        border-radius: 16px;
        z-index: 100;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.08);
        min-width: 160px;
        transition: transform 0.2s ease, background 0.2s ease;
      }

      .mode-indicator:active {
        transform: scale(0.98);
        background: rgba(30, 30, 35, 0.8);
      }

      @media (max-width: 768px) {
        .mode-indicator {
          top: 10px;
          left: 10px;
          padding: 8px 12px;
          min-width: 0;
        }
        .current-mode { font-size: 0.85rem; margin-bottom: 0; }
        .desktop-hint { display: none !important; }
        .mobile-hint { display: flex !important; }
      }

      .current-mode {
        font-family: 'Playfair Display', serif;
        font-size: 0.95rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 4px;
        letter-spacing: 0.02em;
      }

      .switch-hint {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.5);
        padding-top: 4px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .mobile-hint {
        display: none;
      }

      .switch-hint kbd {
        display: inline-block;
        padding: 2px 6px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: 4px;
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 0.75rem;
        color: #fff;
        min-width: 18px;
        text-align: center;
      }
    `,this.element.appendChild(e),this.container.appendChild(this.element)}}class al{constructor(e){c(this,"container");c(this,"element",null);c(this,"clickHandler",null);this.container=e,this.createDOM()}onClick(e){this.clickHandler=e,this.element&&(this.element.style.cursor="pointer")}update(e,t){if(!this.element)return;const s={loading:"#ffeb3b",ready:"#4caf50",error:"#f44336",active:"#2196f3"},i=`
      <span style="
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${s[t]};
        box-shadow: 0 0 8px ${s[t]};
      "></span>
      <span style="letter-spacing: 0.02em;">${e}</span>
      <span class="debug-hint" style="margin-left: 4px; opacity: 0.5; font-size: 0.7em;">[D]</span>
    `,n=this.element.querySelector(".status-content");n&&(n.innerHTML=i),this.element.style.display="flex"}hide(){this.element&&(this.element.style.display="none")}show(){this.element&&(this.element.style.display="flex")}createDOM(){this.element=document.createElement("div"),this.element.className="status-indicator",this.element.innerHTML='<div class="status-content" style="display: flex; align-items: center; gap: 8px;"></div>',this.clickHandler&&(this.element.style.cursor="pointer"),this.element.addEventListener("click",()=>{this.clickHandler&&this.clickHandler()});const e=document.createElement("style");e.textContent=`
      .status-indicator {
        position: absolute;
        bottom: 30px; /* Aligned with footer on desktop */
        left: 20px;
        padding: 8px 10px; /* Reduced horizontal padding */
        background: rgba(20, 20, 25, 0.6);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        color: white;
        font-family: 'Nunito', sans-serif;
        font-size: 0.8rem;
        border-radius: 16px;
        z-index: 100;
        display: none;
        align-items: center;
        gap: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.08);
        transition: all 0.3s ease;
      }

      .status-indicator:active {
        transform: scale(0.95);
        background: rgba(30, 30, 35, 0.8);
      }

      @media (max-width: 768px) {
        .status-indicator {
          bottom: 50px; /* Higher than footer on mobile */
          left: 10px;
          padding: 6px 10px;
          font-size: 0.75rem;
        }
        .debug-hint { display: none !important; }
      }
    `,this.element.appendChild(e),this.container.appendChild(this.element)}}const Al={debug:!1,particleCount:2e4};class ll{constructor(e,t={}){c(this,"handTracker");c(this,"galaxyRenderer",null);c(this,"controller",null);c(this,"foggyMirrorController",null);c(this,"cosmicSlashController",null);c(this,"config");c(this,"currentMode",null);c(this,"landingPage",null);c(this,"footer",null);c(this,"hintComponent",null);c(this,"modeIndicator",null);c(this,"statusIndicator",null);c(this,"debugComponent",null);c(this,"container");c(this,"videoElement",null);c(this,"state","uninitialized");c(this,"animationFrameId",null);c(this,"fpsCounter");this.container=e,this.config={...Al,...t},this.handTracker=new tl,this.fpsCounter=new cl}async start(){if(this.state!=="uninitialized"){console.warn("[App] Already initialized");return}this.state="initializing";try{this.createDOMStructure(),this.initializeUI(),this.updateStatus("Initializing...","loading"),this.checkBrowserSupport(),this.updateStatus("Loading hand tracking model...","loading"),await this.handTracker.initialize(this.videoElement),this.showLandingPage(),console.log("[App] Started successfully")}catch(e){this.state="error",this.handleError(e)}}createDOMStructure(){this.container.innerHTML="",this.videoElement=document.createElement("video"),this.videoElement.id="webcam-video",this.videoElement.autoplay=!0,this.videoElement.playsInline=!0,this.videoElement.muted=!0,this.videoElement.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scaleX(-1);
      opacity: 0; /* Hidden initially */
      transition: opacity 0.5s ease;
    `,this.container.appendChild(this.videoElement),this.container.style.cssText=`
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: #000;
    `}initializeUI(){this.landingPage=new nl(this.container,e=>{e==="galaxy"?this.switchToGalaxyMode():e==="foggy-mirror"?this.switchToFoggyMirrorMode():e==="cosmic-slash"&&this.switchToCosmicSlashMode()}),this.footer=new il(this.container),this.hintComponent=new ol(this.container),this.hintComponent.onAction(e=>{e==="reset"&&this.resetFoggyMirror()}),this.modeIndicator=new rl(this.container),this.modeIndicator.onClick(()=>{this.returnToMainMenu()}),this.statusIndicator=new al(this.container),this.statusIndicator.onClick(()=>{this.toggleDebug()}),this.debugComponent=new sl(this.container),this.setupGlobalInputListeners()}setupGlobalInputListeners(){window.addEventListener("keydown",e=>{const t=e.key.toLowerCase();if(e.code==="Space"){this.currentMode==="cosmic-slash"&&this.cosmicSlashController&&(e.preventDefault(),this.cosmicSlashController.togglePause()&&this.updateStatus("Paused — Press Space to resume","ready"));return}if(t==="d"){this.toggleDebug();return}else if(t==="h"){this.toggleControls();return}else if(t==="m"){this.returnToMainMenu();return}if(t==="g"){this.switchToGalaxyMode();return}else if(t==="f"){this.switchToFoggyMirrorMode();return}else if(t==="c"){this.switchToCosmicSlashMode();return}if(t==="r"){this.currentMode==="foggy-mirror"?this.resetFoggyMirror():this.currentMode==="cosmic-slash"?this.cosmicSlashController?.reset():this.currentMode==="galaxy"&&this.controller?.reset();return}})}showLandingPage(){this.state="landing",this.currentMode=null,this.statusIndicator?.hide(),this.footer?.hide(),this.videoElement&&(this.videoElement.style.opacity="0"),this.hintComponent?.hide(),this.landingPage?.show()}returnToMainMenu(){if(this.state==="landing"){this.showLandingPage();return}this.galaxyRenderer&&(this.galaxyRenderer.hide(),this.galaxyRenderer.dispose(),this.galaxyRenderer=null),this.controller&&(this.controller.disableDebug(),this.controller.dispose(),this.controller=null),this.foggyMirrorController&&(this.foggyMirrorController.stop(),this.foggyMirrorController.disableDebug(),this.foggyMirrorController.dispose(),this.foggyMirrorController=null),this.cosmicSlashController&&(this.cosmicSlashController.stop(),this.cosmicSlashController.disableDebug(),this.cosmicSlashController.dispose(),this.cosmicSlashController=null),this.showLandingPage()}updateHandStatus(e){if(this.currentMode!==null){if(this.currentMode==="cosmic-slash"&&this.cosmicSlashController&&this.cosmicSlashController.getIsPaused()){this.updateStatus("Paused — Press Space to resume","ready");return}if(e<=0){this.updateStatus("No hands detected","ready");return}if(e===1){this.updateStatus("1 hand detected","active");return}this.updateStatus(`${e} hands detected`,"active")}}checkBrowserSupport(){const e=[];if(document.createElement("canvas").getContext("webgl2")||e.push("WebGL 2.0 not supported"),typeof WebAssembly!="object"&&e.push("WebAssembly not supported"),navigator.mediaDevices?.getUserMedia||e.push("Camera access not supported"),e.length>0)throw new Error(`Browser not supported: ${e.join(", ")}`)}updateStatus(e,t){this.statusIndicator?.update(e,t)}enableDebug(){this.debugComponent&&(this.debugComponent.show(),this.currentMode==="galaxy"&&this.controller?this.controller.enableDebug(e=>this.updateGalaxyDebugPanel(e)):this.currentMode==="foggy-mirror"&&this.foggyMirrorController?this.foggyMirrorController.enableDebug(e=>this.updateFoggyMirrorDebugPanel(e)):this.currentMode==="cosmic-slash"&&this.cosmicSlashController&&this.cosmicSlashController.enableDebug(e=>this.updateCosmicSlashDebugPanel(e)))}updateGalaxyDebugPanel(e){if(!this.debugComponent)return;const t=this.fpsCounter.getFps();this.debugComponent.update(`
      <div style="margin-bottom: 8px; color: #fff; font-weight: bold;">Debug Info</div>
      <div>FPS: ${t.toFixed(1)}</div>
      <div>Hands: ${e.handsDetected}</div>
      <div>Distance: ${e.distance.toFixed(3)}</div>
      <div>Scale: ${e.scale.toFixed(3)}</div>
      <div>Position:</div>
      <div style="padding-left: 10px;">
        x: ${e.position.x.toFixed(2)}<br>
        y: ${e.position.y.toFixed(2)}<br>
        z: ${e.position.z.toFixed(2)}
      </div>
      <div>Rotation (deg):</div>
      <div style="padding-left: 10px;">
        x: ${He.radToDeg(e.rotation.x).toFixed(1)}°<br>
        y: ${He.radToDeg(e.rotation.y).toFixed(1)}°<br>
        z: ${He.radToDeg(e.rotation.z).toFixed(1)}°
      </div>
    `)}updateFoggyMirrorDebugPanel(e){this.debugComponent&&this.debugComponent.update(`
      <div style="margin-bottom: 8px; color: #fff; font-weight: bold;">Debug Info</div>
      <div>FPS: ${e.fps.toFixed(1)}</div>
      <div>Hands: ${e.handsDetected}</div>
      <div>Cleared: ${e.clearedPercentage.toFixed(1)}%</div>
      <div style="margin-top: 4px; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 4px;">
        <div>Wipe Speed: ${e.avgVelocity.toFixed(0)} px/f</div>
        <div>Brush Size: ${e.avgBrushSize.toFixed(0)} px</div>
      </div>
    `)}updateCosmicSlashDebugPanel(e){this.debugComponent&&this.debugComponent.update(`
      <div style="margin-bottom: 8px; color: #fff; font-weight: bold;">Debug Info</div>
      <div>FPS: ${e.fps.toFixed(1)}</div>
      <div>Hands: ${e.handsDetected}</div>
      <div>Active Objects: ${e.activeObjects}</div>
      <div>Total Sliced: ${e.totalSliced}</div>
      <div style="margin-top: 4px; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 4px;">
        <div>Active Explosions: ${e.activeExplosions}</div>
      </div>
    `)}startAnimationLoop(){if(this.animationFrameId!==null)return;const e=t=>{if(this.state!=="running"){this.animationFrameId=null;return}if(this.fpsCounter.update(),this.currentMode==="galaxy"){this.controller?.update(t);const s=this.controller?.getHandCount()??0;this.updateHandStatus(s)}else if(this.currentMode==="foggy-mirror"){const s=this.foggyMirrorController?.getHandCount()??0;this.updateHandStatus(s)}else if(this.currentMode==="cosmic-slash"){const s=this.cosmicSlashController?.getHandCount()??0;this.updateHandStatus(s)}this.animationFrameId=requestAnimationFrame(e)};this.animationFrameId=requestAnimationFrame(e)}handleError(e){const t=e instanceof Error?e.message:"Unknown error";console.error("[App] Error:",t),this.updateStatus(`Error: ${t}`,"error")}toggleDebug(){if(!this.debugComponent)return;this.debugComponent.toggle()?this.currentMode==="galaxy"&&this.controller?this.controller.enableDebug(t=>this.updateGalaxyDebugPanel(t)):this.currentMode==="foggy-mirror"&&this.foggyMirrorController?this.foggyMirrorController.enableDebug(t=>this.updateFoggyMirrorDebugPanel(t)):this.currentMode==="cosmic-slash"&&this.cosmicSlashController&&this.cosmicSlashController.enableDebug(t=>this.updateCosmicSlashDebugPanel(t)):(this.controller?.disableDebug(),this.foggyMirrorController?.disableDebug(),this.cosmicSlashController?.disableDebug())}toggleControls(){this.hintComponent?.toggle()}applyVideoStyles(e){if(!this.videoElement)return;const t=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scaleX(-1);
      transition: opacity 0.5s ease;
      opacity: 1;
    `;e==="galaxy"?this.videoElement.style.cssText=t+"filter: brightness(0.20) contrast(0.6);":e==="cosmic-slash"?this.videoElement.style.cssText=t+"filter: brightness(0.25) contrast(0.7) saturate(0.8);":this.videoElement.style.cssText=t+"filter: none;"}switchToGalaxyMode(){this.currentMode!=="galaxy"&&(console.log("[App] Switching to galaxy mode"),this.landingPage?.hide(),this.foggyMirrorController&&(this.foggyMirrorController.stop(),this.foggyMirrorController.disableDebug(),this.foggyMirrorController.dispose(),this.foggyMirrorController=null),this.cosmicSlashController&&(this.cosmicSlashController.stop(),this.cosmicSlashController.disableDebug(),this.cosmicSlashController.dispose(),this.cosmicSlashController=null),this.galaxyRenderer?this.galaxyRenderer.show():(this.updateStatus("Creating galaxy...","loading"),this.galaxyRenderer=new Dr(this.container,{particleCount:this.config.particleCount}),this.galaxyRenderer.initialize()),this.controller||(this.controller=new jr(this.handTracker,this.galaxyRenderer),this.controller.initializeEffects(this.galaxyRenderer.getScene())),this.applyVideoStyles("galaxy"),this.currentMode="galaxy",this.state="running",this.updateHandStatus(0),this.statusIndicator?.show(),this.footer?.show(),this.hintComponent?.update("galaxy"),this.hintComponent?.show(),this.modeIndicator?.update("galaxy"),this.startAnimationLoop(),this.debugComponent?.isVisibleState()&&this.controller&&this.controller.enableDebug(e=>this.updateGalaxyDebugPanel(e)))}switchToFoggyMirrorMode(){this.currentMode!=="foggy-mirror"&&(console.log("[App] Switching to foggy-mirror mode"),this.landingPage?.hide(),this.galaxyRenderer&&(this.galaxyRenderer.hide(),this.galaxyRenderer.dispose(),this.galaxyRenderer=null),this.controller&&(this.controller.dispose(),this.controller=null),this.cosmicSlashController&&(this.cosmicSlashController.stop(),this.cosmicSlashController.disableDebug(),this.cosmicSlashController.dispose(),this.cosmicSlashController=null),this.foggyMirrorController||(this.foggyMirrorController=new nn(this.handTracker,this.container,{debug:this.config.debug}),this.foggyMirrorController.initialize()),this.foggyMirrorController.start(),this.applyVideoStyles("foggy-mirror"),this.currentMode="foggy-mirror",this.state="running",this.updateHandStatus(0),this.statusIndicator?.show(),this.footer?.show(),this.hintComponent?.update("foggy-mirror"),this.hintComponent?.show(),this.modeIndicator?.update("foggy-mirror"),this.startAnimationLoop(),this.debugComponent?.isVisibleState()&&this.foggyMirrorController.enableDebug(e=>this.updateFoggyMirrorDebugPanel(e)))}resetFoggyMirror(){this.currentMode!=="foggy-mirror"||!this.foggyMirrorController||(this.foggyMirrorController.reset(),this.updateStatus("Foggy Mirror Reset","active"),setTimeout(()=>{this.currentMode==="foggy-mirror"&&this.updateStatus("Foggy Mirror","ready")},2e3))}switchToCosmicSlashMode(){this.currentMode!=="cosmic-slash"&&(console.log("[App] Switching to cosmic-slash mode"),this.landingPage?.hide(),this.galaxyRenderer&&(this.galaxyRenderer.hide(),this.galaxyRenderer.dispose(),this.galaxyRenderer=null),this.controller&&(this.controller.dispose(),this.controller=null),this.foggyMirrorController&&(this.foggyMirrorController.stop(),this.foggyMirrorController.disableDebug(),this.foggyMirrorController.dispose(),this.foggyMirrorController=null),this.cosmicSlashController||(this.updateStatus("Loading Cosmic Slash...","loading"),this.cosmicSlashController=new $A(this.handTracker,this.container,{debug:this.config.debug}),this.cosmicSlashController.initialize()),this.cosmicSlashController.start(),this.applyVideoStyles("cosmic-slash"),this.currentMode="cosmic-slash",this.state="running",this.updateHandStatus(0),this.statusIndicator?.show(),this.footer?.show(),this.hintComponent?.update("cosmic-slash"),this.hintComponent?.show(),this.modeIndicator?.update("cosmic-slash"),this.startAnimationLoop(),this.debugComponent?.isVisibleState()&&this.cosmicSlashController.enableDebug(e=>this.updateCosmicSlashDebugPanel(e)))}dispose(){this.state!=="disposed"&&(this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.controller?.dispose(),this.foggyMirrorController?.dispose(),this.cosmicSlashController?.dispose(),this.handTracker.dispose(),this.galaxyRenderer?.dispose(),this.container.innerHTML="",this.state="disposed",console.log("[App] Disposed"))}}class cl{constructor(){c(this,"frames",0);c(this,"lastTime",performance.now());c(this,"fps",0)}update(){this.frames++;const e=performance.now(),t=e-this.lastTime;t>=1e3&&(this.fps=this.frames*1e3/t,this.frames=0,this.lastTime=e)}getFps(){return this.fps}}Zo();const ji=document.getElementById("app");if(!ji)throw new Error("Container element #app not found");const hl=window.innerWidth<768,xt=new ll(ji,{debug:!1,particleCount:hl?8e3:2e4});xt.start().catch(o=>{console.error("Failed to start application:",o)});document.addEventListener("keydown",o=>{switch(o.key.toLowerCase()){case"escape":xt.dispose();break}});window.addEventListener("beforeunload",()=>{xt.dispose()});window.app=xt;
//# sourceMappingURL=index-B0xHLoaL.js.map
