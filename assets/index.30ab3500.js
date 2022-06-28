const _d=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};_d();function cl(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const yd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bd=cl(yd);function xh(i){return!!i||i===""}function ul(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=_t(n)?Sd(n):ul(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(_t(i))return i;if(yt(i))return i}}const Md=/;(?![^(]*\))/g,wd=/:(.+)/;function Sd(i){const e={};return i.split(Md).forEach(t=>{if(t){const n=t.split(wd);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function hl(i){let e="";if(_t(i))e=i;else if(Fe(i))for(let t=0;t<i.length;t++){const n=hl(i[t]);n&&(e+=n+" ")}else if(yt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Ed=i=>_t(i)?i:i==null?"":Fe(i)||yt(i)&&(i.toString===Mh||!Be(i.toString))?JSON.stringify(i,_h,2):String(i),_h=(i,e)=>e&&e.__v_isRef?_h(i,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:yh(e)?{[`Set(${e.size})`]:[...e.values()]}:yt(e)&&!Fe(e)&&!wh(e)?String(e):e,Ke={},Qi=[],Qt=()=>{},Td=()=>!1,Ad=/^on[^a-z]/,vo=i=>Ad.test(i),fl=i=>i.startsWith("onUpdate:"),wt=Object.assign,dl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Cd=Object.prototype.hasOwnProperty,ke=(i,e)=>Cd.call(i,e),Fe=Array.isArray,er=i=>xo(i)==="[object Map]",yh=i=>xo(i)==="[object Set]",Be=i=>typeof i=="function",_t=i=>typeof i=="string",pl=i=>typeof i=="symbol",yt=i=>i!==null&&typeof i=="object",bh=i=>yt(i)&&Be(i.then)&&Be(i.catch),Mh=Object.prototype.toString,xo=i=>Mh.call(i),Rd=i=>xo(i).slice(8,-1),wh=i=>xo(i)==="[object Object]",ml=i=>_t(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ks=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_o=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Ld=/-(\w)/g,rr=_o(i=>i.replace(Ld,(e,t)=>t?t.toUpperCase():"")),Pd=/\B([A-Z])/g,fr=_o(i=>i.replace(Pd,"-$1").toLowerCase()),Sh=_o(i=>i.charAt(0).toUpperCase()+i.slice(1)),ko=_o(i=>i?`on${Sh(i)}`:""),qr=(i,e)=>!Object.is(i,e),Go=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},io=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Dd=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let lc;const Id=()=>lc||(lc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let hn;class Fd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&hn&&(this.parent=hn,this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Nd(i,e=hn){e&&e.active&&e.effects.push(i)}const gl=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Eh=i=>(i.w&Yn)>0,Th=i=>(i.n&Yn)>0,Od=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Yn},zd=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Eh(r)&&!Th(r)?r.delete(i):e[t++]=r,r.w&=~Yn,r.n&=~Yn}e.length=t}},Fa=new WeakMap;let Ir=0,Yn=1;const Na=30;let Zt;const di=Symbol(""),Oa=Symbol("");class vl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Nd(this,n)}run(){if(!this.active)return this.fn();let e=Zt,t=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Zt,Zt=this,Gn=!0,Yn=1<<++Ir,Ir<=Na?Od(this):cc(this),this.fn()}finally{Ir<=Na&&zd(this),Yn=1<<--Ir,Zt=this.parent,Gn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(cc(this),this.onStop&&this.onStop(),this.active=!1)}}function cc(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Gn=!0;const Ah=[];function dr(){Ah.push(Gn),Gn=!1}function pr(){const i=Ah.pop();Gn=i===void 0?!0:i}function Ut(i,e,t){if(Gn&&Zt){let n=Fa.get(i);n||Fa.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=gl()),Ch(r)}}function Ch(i,e){let t=!1;Ir<=Na?Th(i)||(i.n|=Yn,t=!Eh(i)):t=!i.has(Zt),t&&(i.add(Zt),Zt.deps.push(i))}function Cn(i,e,t,n,r,s){const o=Fa.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(i)?ml(t)&&a.push(o.get("length")):(a.push(o.get(di)),er(i)&&a.push(o.get(Oa)));break;case"delete":Fe(i)||(a.push(o.get(di)),er(i)&&a.push(o.get(Oa)));break;case"set":er(i)&&a.push(o.get(di));break}if(a.length===1)a[0]&&za(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);za(gl(l))}}function za(i,e){const t=Fe(i)?i:[...i];for(const n of t)n.computed&&uc(n);for(const n of t)n.computed||uc(n)}function uc(i,e){(i!==Zt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Bd=cl("__proto__,__v_isRef,__isVue"),Rh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(pl)),Ud=xl(),Hd=xl(!1,!0),kd=xl(!0),hc=Gd();function Gd(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=We(this);for(let s=0,o=this.length;s<o;s++)Ut(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){dr();const n=We(this)[e].apply(this,t);return pr(),n}}),i}function xl(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?rp:Fh:e?Ih:Dh).get(n))return n;const o=Fe(n);if(!i&&o&&ke(hc,r))return Reflect.get(hc,r,s);const a=Reflect.get(n,r,s);return(pl(r)?Rh.has(r):Bd(r))||(i||Ut(n,"get",r),e)?a:Mt(a)?o&&ml(r)?a:a.value:yt(a)?i?Nh(a):bl(a):a}}const Vd=Lh(),Wd=Lh(!0);function Lh(i=!1){return function(t,n,r,s){let o=t[n];if(Xr(o)&&Mt(o)&&!Mt(r))return!1;if(!i&&!Xr(r)&&(Ba(r)||(r=We(r),o=We(o)),!Fe(t)&&Mt(o)&&!Mt(r)))return o.value=r,!0;const a=Fe(t)&&ml(n)?Number(n)<t.length:ke(t,n),l=Reflect.set(t,n,r,s);return t===We(s)&&(a?qr(r,o)&&Cn(t,"set",n,r):Cn(t,"add",n,r)),l}}function jd(i,e){const t=ke(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Cn(i,"delete",e,void 0),n}function qd(i,e){const t=Reflect.has(i,e);return(!pl(e)||!Rh.has(e))&&Ut(i,"has",e),t}function Xd(i){return Ut(i,"iterate",Fe(i)?"length":di),Reflect.ownKeys(i)}const Ph={get:Ud,set:Vd,deleteProperty:jd,has:qd,ownKeys:Xd},Yd={get:kd,set(i,e){return!0},deleteProperty(i,e){return!0}},Zd=wt({},Ph,{get:Hd,set:Wd}),_l=i=>i,yo=i=>Reflect.getPrototypeOf(i);function ms(i,e,t=!1,n=!1){i=i.__v_raw;const r=We(i),s=We(e);t||(e!==s&&Ut(r,"get",e),Ut(r,"get",s));const{has:o}=yo(r),a=n?_l:t?wl:Yr;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function gs(i,e=!1){const t=this.__v_raw,n=We(t),r=We(i);return e||(i!==r&&Ut(n,"has",i),Ut(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function vs(i,e=!1){return i=i.__v_raw,!e&&Ut(We(i),"iterate",di),Reflect.get(i,"size",i)}function fc(i){i=We(i);const e=We(this);return yo(e).has.call(e,i)||(e.add(i),Cn(e,"add",i,i)),this}function dc(i,e){e=We(e);const t=We(this),{has:n,get:r}=yo(t);let s=n.call(t,i);s||(i=We(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?qr(e,o)&&Cn(t,"set",i,e):Cn(t,"add",i,e),this}function pc(i){const e=We(this),{has:t,get:n}=yo(e);let r=t.call(e,i);r||(i=We(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Cn(e,"delete",i,void 0),s}function mc(){const i=We(this),e=i.size!==0,t=i.clear();return e&&Cn(i,"clear",void 0,void 0),t}function xs(i,e){return function(n,r){const s=this,o=s.__v_raw,a=We(o),l=e?_l:i?wl:Yr;return!i&&Ut(a,"iterate",di),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function _s(i,e,t){return function(...n){const r=this.__v_raw,s=We(r),o=er(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?_l:e?wl:Yr;return!e&&Ut(s,"iterate",l?Oa:di),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Pn(i){return function(...e){return i==="delete"?!1:this}}function Jd(){const i={get(s){return ms(this,s)},get size(){return vs(this)},has:gs,add:fc,set:dc,delete:pc,clear:mc,forEach:xs(!1,!1)},e={get(s){return ms(this,s,!1,!0)},get size(){return vs(this)},has:gs,add:fc,set:dc,delete:pc,clear:mc,forEach:xs(!1,!0)},t={get(s){return ms(this,s,!0)},get size(){return vs(this,!0)},has(s){return gs.call(this,s,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:xs(!0,!1)},n={get(s){return ms(this,s,!0,!0)},get size(){return vs(this,!0)},has(s){return gs.call(this,s,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:xs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=_s(s,!1,!1),t[s]=_s(s,!0,!1),e[s]=_s(s,!1,!0),n[s]=_s(s,!0,!0)}),[i,t,e,n]}const[$d,Kd,Qd,ep]=Jd();function yl(i,e){const t=e?i?ep:Qd:i?Kd:$d;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(ke(t,r)&&r in n?t:n,r,s)}const tp={get:yl(!1,!1)},np={get:yl(!1,!0)},ip={get:yl(!0,!1)},Dh=new WeakMap,Ih=new WeakMap,Fh=new WeakMap,rp=new WeakMap;function sp(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function op(i){return i.__v_skip||!Object.isExtensible(i)?0:sp(Rd(i))}function bl(i){return Xr(i)?i:Ml(i,!1,Ph,tp,Dh)}function ap(i){return Ml(i,!1,Zd,np,Ih)}function Nh(i){return Ml(i,!0,Yd,ip,Fh)}function Ml(i,e,t,n,r){if(!yt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=op(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function tr(i){return Xr(i)?tr(i.__v_raw):!!(i&&i.__v_isReactive)}function Xr(i){return!!(i&&i.__v_isReadonly)}function Ba(i){return!!(i&&i.__v_isShallow)}function Oh(i){return tr(i)||Xr(i)}function We(i){const e=i&&i.__v_raw;return e?We(e):i}function zh(i){return io(i,"__v_skip",!0),i}const Yr=i=>yt(i)?bl(i):i,wl=i=>yt(i)?Nh(i):i;function Bh(i){Gn&&Zt&&(i=We(i),Ch(i.dep||(i.dep=gl())))}function Uh(i,e){i=We(i),i.dep&&za(i.dep)}function Mt(i){return!!(i&&i.__v_isRef===!0)}function Sr(i){return lp(i,!1)}function lp(i,e){return Mt(i)?i:new cp(i,e)}class cp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:We(e),this._value=t?e:Yr(e)}get value(){return Bh(this),this._value}set value(e){e=this.__v_isShallow?e:We(e),qr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Yr(e),Uh(this))}}function Hh(i){return Mt(i)?i.value:i}const up={get:(i,e,t)=>Hh(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Mt(r)&&!Mt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function kh(i){return tr(i)?i:new Proxy(i,up)}class hp{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new vl(e,()=>{this._dirty||(this._dirty=!0,Uh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=We(this);return Bh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fp(i,e,t=!1){let n,r;const s=Be(i);return s?(n=i,r=Qt):(n=i.get,r=i.set),new hp(n,r,s||!r,t)}function Vn(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){bo(s,e,t)}return r}function Gt(i,e,t,n){if(Be(i)){const s=Vn(i,e,t,n);return s&&bh(s)&&s.catch(o=>{bo(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Gt(i[s],e,t,n));return r}function bo(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Vn(l,null,10,[i,o,a]);return}}dp(i,t,r,n)}function dp(i,e,t,n=!0){console.error(i)}let ro=!1,Ua=!1;const Ot=[];let En=0;const Br=[];let Fr=null,ji=0;const Ur=[];let Hn=null,qi=0;const Gh=Promise.resolve();let Sl=null,Ha=null;function pp(i){const e=Sl||Gh;return i?e.then(this?i.bind(this):i):e}function mp(i){let e=En+1,t=Ot.length;for(;e<t;){const n=e+t>>>1;Zr(Ot[n])<i?e=n+1:t=n}return e}function Vh(i){(!Ot.length||!Ot.includes(i,ro&&i.allowRecurse?En+1:En))&&i!==Ha&&(i.id==null?Ot.push(i):Ot.splice(mp(i.id),0,i),Wh())}function Wh(){!ro&&!Ua&&(Ua=!0,Sl=Gh.then(Xh))}function gp(i){const e=Ot.indexOf(i);e>En&&Ot.splice(e,1)}function jh(i,e,t,n){Fe(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),Wh()}function vp(i){jh(i,Fr,Br,ji)}function xp(i){jh(i,Hn,Ur,qi)}function Mo(i,e=null){if(Br.length){for(Ha=e,Fr=[...new Set(Br)],Br.length=0,ji=0;ji<Fr.length;ji++)Fr[ji]();Fr=null,ji=0,Ha=null,Mo(i,e)}}function qh(i){if(Mo(),Ur.length){const e=[...new Set(Ur)];if(Ur.length=0,Hn){Hn.push(...e);return}for(Hn=e,Hn.sort((t,n)=>Zr(t)-Zr(n)),qi=0;qi<Hn.length;qi++)Hn[qi]();Hn=null,qi=0}}const Zr=i=>i.id==null?1/0:i.id;function Xh(i){Ua=!1,ro=!0,Mo(i),Ot.sort((t,n)=>Zr(t)-Zr(n));const e=Qt;try{for(En=0;En<Ot.length;En++){const t=Ot[En];t&&t.active!==!1&&Vn(t,null,14)}}finally{En=0,Ot.length=0,qh(),ro=!1,Sl=null,(Ot.length||Br.length||Ur.length)&&Xh(i)}}function _p(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Ke;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||Ke;f&&(r=t.map(d=>d.trim())),h&&(r=t.map(Dd))}let a,l=n[a=ko(e)]||n[a=ko(rr(e))];!l&&s&&(l=n[a=ko(fr(e))]),l&&Gt(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Gt(c,i,6,r)}}function Yh(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Be(i)){const l=c=>{const u=Yh(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(n.set(i,null),null):(Fe(s)?s.forEach(l=>o[l]=null):wt(o,s),n.set(i,o),o)}function wo(i,e){return!i||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(i,e[0].toLowerCase()+e.slice(1))||ke(i,fr(e))||ke(i,e))}let pn=null,Zh=null;function so(i){const e=pn;return pn=i,Zh=i&&i.type.__scopeId||null,e}function yp(i,e=pn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Ec(-1);const s=so(e),o=i(...r);return so(s),n._d&&Ec(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function Vo(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:m}=i;let p,v;const S=so(i);try{if(t.shapeFlag&4){const T=r||n;p=fn(u.call(T,T,h,s,d,f,g)),v=l}else{const T=e;p=fn(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),v=e.props?l:bp(l)}}catch(T){Hr.length=0,bo(T,i,1),p=Wn(Tn)}let C=p;if(v&&m!==!1){const T=Object.keys(v),{shapeFlag:E}=C;T.length&&E&7&&(o&&T.some(fl)&&(v=Mp(v,o)),C=Zn(C,v))}return t.dirs&&(C=Zn(C),C.dirs=C.dirs?C.dirs.concat(t.dirs):t.dirs),t.transition&&(C.transition=t.transition),p=C,so(S),p}const bp=i=>{let e;for(const t in i)(t==="class"||t==="style"||vo(t))&&((e||(e={}))[t]=i[t]);return e},Mp=(i,e)=>{const t={};for(const n in i)(!fl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function wp(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?gc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!wo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?gc(n,o,c):!0:!!o;return!1}function gc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!wo(t,s))return!0}return!1}function Sp({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Ep=i=>i.__isSuspense;function Tp(i,e){e&&e.pendingBranch?Fe(i)?e.effects.push(...i):e.effects.push(i):xp(i)}function Ap(i,e){if(vt){let t=vt.provides;const n=vt.parent&&vt.parent.provides;n===t&&(t=vt.provides=Object.create(n)),t[i]=e}}function Wo(i,e,t=!1){const n=vt||pn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Be(e)?e.call(n.proxy):e}}const vc={};function jo(i,e,t){return Jh(i,e,t)}function Jh(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=Ke){const a=vt;let l,c=!1,u=!1;if(Mt(i)?(l=()=>i.value,c=Ba(i)):tr(i)?(l=()=>i,n=!0):Fe(i)?(u=!0,c=i.some(v=>tr(v)||Ba(v)),l=()=>i.map(v=>{if(Mt(v))return v.value;if(tr(v))return Yi(v);if(Be(v))return Vn(v,a,2)})):Be(i)?e?l=()=>Vn(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Gt(i,a,3,[f])}:l=Qt,e&&n){const v=l;l=()=>Yi(v())}let h,f=v=>{h=p.onStop=()=>{Vn(v,a,4)}};if($r)return f=Qt,e?t&&Gt(e,a,3,[l(),u?[]:void 0,f]):l(),Qt;let d=u?[]:vc;const g=()=>{if(!!p.active)if(e){const v=p.run();(n||c||(u?v.some((S,C)=>qr(S,d[C])):qr(v,d)))&&(h&&h(),Gt(e,a,3,[v,d===vc?void 0:d,f]),d=v)}else p.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>Pt(g,a&&a.suspense):m=()=>vp(g);const p=new vl(l,m);return e?t?g():d=p.run():r==="post"?Pt(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&dl(a.scope.effects,p)}}function Cp(i,e,t){const n=this.proxy,r=_t(i)?i.includes(".")?$h(n,i):()=>n[i]:i.bind(n,n);let s;Be(e)?s=e:(s=e.handler,t=e);const o=vt;sr(this);const a=Jh(r,s.bind(n),t);return o?sr(o):pi(),a}function $h(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Yi(i,e){if(!yt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Mt(i))Yi(i.value,e);else if(Fe(i))for(let t=0;t<i.length;t++)Yi(i[t],e);else if(yh(i)||er(i))i.forEach(t=>{Yi(t,e)});else if(wh(i))for(const t in i)Yi(i[t],e);return i}function Rp(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return El(()=>{i.isMounted=!0}),tf(()=>{i.isUnmounting=!0}),i}const Ht=[Function,Array],Lp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ht,onEnter:Ht,onAfterEnter:Ht,onEnterCancelled:Ht,onBeforeLeave:Ht,onLeave:Ht,onAfterLeave:Ht,onLeaveCancelled:Ht,onBeforeAppear:Ht,onAppear:Ht,onAfterAppear:Ht,onAppearCancelled:Ht},setup(i,{slots:e}){const t=vm(),n=Rp();let r;return()=>{const s=e.default&&Qh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==Tn){o=m;break}}const a=We(i),{mode:l}=a;if(n.isLeaving)return qo(o);const c=xc(o);if(!c)return qo(o);const u=ka(c,a,n,t);Ga(c,u);const h=t.subTree,f=h&&xc(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,d=!0)}if(f&&f.type!==Tn&&(!li(c,f)||d)){const m=ka(f,a,n,t);if(Ga(f,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update()},qo(o);l==="in-out"&&c.type!==Tn&&(m.delayLeave=(p,v,S)=>{const C=Kh(n,f);C[String(f.key)]=f,p._leaveCb=()=>{v(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},Pp=Lp;function Kh(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function ka(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:v,onAppearCancelled:S}=e,C=String(i.key),T=Kh(t,i),E=(b,R)=>{b&&Gt(b,n,9,R)},I=(b,R)=>{const k=R[1];E(b,R),Fe(b)?b.every(B=>B.length<=1)&&k():b.length<=1&&k()},H={mode:s,persisted:o,beforeEnter(b){let R=a;if(!t.isMounted)if(r)R=m||a;else return;b._leaveCb&&b._leaveCb(!0);const k=T[C];k&&li(i,k)&&k.el._leaveCb&&k.el._leaveCb(),E(R,[b])},enter(b){let R=l,k=c,B=u;if(!t.isMounted)if(r)R=p||l,k=v||c,B=S||u;else return;let he=!1;const ae=b._enterCb=N=>{he||(he=!0,N?E(B,[b]):E(k,[b]),H.delayedLeave&&H.delayedLeave(),b._enterCb=void 0)};R?I(R,[b,ae]):ae()},leave(b,R){const k=String(i.key);if(b._enterCb&&b._enterCb(!0),t.isUnmounting)return R();E(h,[b]);let B=!1;const he=b._leaveCb=ae=>{B||(B=!0,R(),ae?E(g,[b]):E(d,[b]),b._leaveCb=void 0,T[k]===i&&delete T[k])};T[k]=i,f?I(f,[b,he]):he()},clone(b){return ka(b,e,t,n)}};return H}function qo(i){if(So(i))return i=Zn(i),i.children=null,i}function xc(i){return So(i)?i.children?i.children[0]:void 0:i}function Ga(i,e){i.shapeFlag&6&&i.component?Ga(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Qh(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Yt?(o.patchFlag&128&&r++,n=n.concat(Qh(o.children,e,a))):(e||o.type!==Tn)&&n.push(a!=null?Zn(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const Qs=i=>!!i.type.__asyncLoader,So=i=>i.type.__isKeepAlive;function Dp(i,e){ef(i,"a",e)}function Ip(i,e){ef(i,"da",e)}function ef(i,e,t=vt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Eo(e,n,t),t){let r=t.parent;for(;r&&r.parent;)So(r.parent.vnode)&&Fp(n,e,t,r),r=r.parent}}function Fp(i,e,t,n){const r=Eo(e,i,n,!0);Tl(()=>{dl(n[e],r)},t)}function Eo(i,e,t=vt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;dr(),sr(t);const a=Gt(e,t,i,o);return pi(),pr(),a});return n?r.unshift(s):r.push(s),s}}const Rn=i=>(e,t=vt)=>(!$r||i==="sp")&&Eo(i,e,t),Np=Rn("bm"),El=Rn("m"),Op=Rn("bu"),zp=Rn("u"),tf=Rn("bum"),Tl=Rn("um"),Bp=Rn("sp"),Up=Rn("rtg"),Hp=Rn("rtc");function kp(i,e=vt){Eo("ec",i,e)}function ti(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(dr(),Gt(l,t,8,[i.el,a,i,e]),pr())}}const Gp=Symbol(),Va=i=>i?mf(i)?Ll(i)||i.proxy:Va(i.parent):null,oo=wt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Va(i.parent),$root:i=>Va(i.root),$emit:i=>i.emit,$options:i=>rf(i),$forceUpdate:i=>i.f||(i.f=()=>Vh(i.update)),$nextTick:i=>i.n||(i.n=pp.bind(i.proxy)),$watch:i=>Cp.bind(i)}),Vp={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==Ke&&ke(n,e))return o[e]=1,n[e];if(r!==Ke&&ke(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&ke(c,e))return o[e]=3,s[e];if(t!==Ke&&ke(t,e))return o[e]=4,t[e];Wa&&(o[e]=0)}}const u=oo[e];let h,f;if(u)return e==="$attrs"&&Ut(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Ke&&ke(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,ke(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==Ke&&ke(r,e)?(r[e]=t,!0):n!==Ke&&ke(n,e)?(n[e]=t,!0):ke(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Ke&&ke(i,o)||e!==Ke&&ke(e,o)||(a=s[0])&&ke(a,o)||ke(n,o)||ke(oo,o)||ke(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:ke(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Wa=!0;function Wp(i){const e=rf(i),t=i.proxy,n=i.ctx;Wa=!1,e.beforeCreate&&_c(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:v,beforeUnmount:S,destroyed:C,unmounted:T,render:E,renderTracked:I,renderTriggered:H,errorCaptured:b,serverPrefetch:R,expose:k,inheritAttrs:B,components:he,directives:ae,filters:N}=e;if(c&&jp(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const O in o){const z=o[O];Be(z)&&(n[O]=z.bind(t))}if(r){const O=r.call(t,t);yt(O)&&(i.data=bl(O))}if(Wa=!0,s)for(const O in s){const z=s[O],U=Be(z)?z.bind(t,t):Be(z.get)?z.get.bind(t,t):Qt,$=!Be(z)&&Be(z.set)?z.set.bind(t):Qt,ce=wm({get:U,set:$});Object.defineProperty(n,O,{enumerable:!0,configurable:!0,get:()=>ce.value,set:se=>ce.value=se})}if(a)for(const O in a)nf(a[O],n,t,O);if(l){const O=Be(l)?l.call(t):l;Reflect.ownKeys(O).forEach(z=>{Ap(z,O[z])})}u&&_c(u,i,"c");function j(O,z){Fe(z)?z.forEach(U=>O(U.bind(t))):z&&O(z.bind(t))}if(j(Np,h),j(El,f),j(Op,d),j(zp,g),j(Dp,m),j(Ip,p),j(kp,b),j(Hp,I),j(Up,H),j(tf,S),j(Tl,T),j(Bp,R),Fe(k))if(k.length){const O=i.exposed||(i.exposed={});k.forEach(z=>{Object.defineProperty(O,z,{get:()=>t[z],set:U=>t[z]=U})})}else i.exposed||(i.exposed={});E&&i.render===Qt&&(i.render=E),B!=null&&(i.inheritAttrs=B),he&&(i.components=he),ae&&(i.directives=ae)}function jp(i,e,t=Qt,n=!1){Fe(i)&&(i=ja(i));for(const r in i){const s=i[r];let o;yt(s)?"default"in s?o=Wo(s.from||r,s.default,!0):o=Wo(s.from||r):o=Wo(s),Mt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function _c(i,e,t){Gt(Fe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function nf(i,e,t,n){const r=n.includes(".")?$h(t,n):()=>t[n];if(_t(i)){const s=e[i];Be(s)&&jo(r,s)}else if(Be(i))jo(r,i.bind(t));else if(yt(i))if(Fe(i))i.forEach(s=>nf(s,e,t,n));else{const s=Be(i.handler)?i.handler.bind(t):e[i.handler];Be(s)&&jo(r,s,i)}}function rf(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ao(l,c,o,!0)),ao(l,e,o)),s.set(e,l),l}function ao(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ao(i,s,t,!0),r&&r.forEach(o=>ao(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=qp[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const qp={data:yc,props:oi,emits:oi,methods:oi,computed:oi,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:oi,directives:oi,watch:Yp,provide:yc,inject:Xp};function yc(i,e){return e?i?function(){return wt(Be(i)?i.call(this,this):i,Be(e)?e.call(this,this):e)}:e:i}function Xp(i,e){return oi(ja(i),ja(e))}function ja(i){if(Fe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Tt(i,e){return i?[...new Set([].concat(i,e))]:e}function oi(i,e){return i?wt(wt(Object.create(null),i),e):e}function Yp(i,e){if(!i)return e;if(!e)return i;const t=wt(Object.create(null),i);for(const n in e)t[n]=Tt(i[n],e[n]);return t}function Zp(i,e,t,n=!1){const r={},s={};io(s,To,1),i.propsDefaults=Object.create(null),sf(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:ap(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Jp(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=We(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(wo(i.emitsOptions,f))continue;const d=e[f];if(l)if(ke(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=rr(f);r[g]=qa(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{sf(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!ke(e,h)&&((u=fr(h))===h||!ke(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=qa(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!ke(e,h)&&!0)&&(delete s[h],c=!0)}c&&Cn(i,"set","$attrs")}function sf(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ks(l))continue;const c=e[l];let u;r&&ke(r,u=rr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:wo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=We(t),c=a||Ke;for(let u=0;u<s.length;u++){const h=s[u];t[h]=qa(r,l,h,c[h],i,!ke(c,h))}}return o}function qa(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=ke(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Be(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(sr(r),n=c[t]=l.call(null,e),pi())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===fr(t))&&(n=!0))}return n}function of(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Be(i)){const u=h=>{l=!0;const[f,d]=of(h,e,!0);wt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return n.set(i,Qi),Qi;if(Fe(s))for(let u=0;u<s.length;u++){const h=rr(s[u]);bc(h)&&(o[h]=Ke)}else if(s)for(const u in s){const h=rr(u);if(bc(h)){const f=s[u],d=o[h]=Fe(f)||Be(f)?{type:f}:f;if(d){const g=Sc(Boolean,d.type),m=Sc(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||ke(d,"default"))&&a.push(h)}}}const c=[o,a];return n.set(i,c),c}function bc(i){return i[0]!=="$"}function Mc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function wc(i,e){return Mc(i)===Mc(e)}function Sc(i,e){return Fe(e)?e.findIndex(t=>wc(t,i)):Be(e)&&wc(e,i)?0:-1}const af=i=>i[0]==="_"||i==="$stable",Al=i=>Fe(i)?i.map(fn):[fn(i)],$p=(i,e,t)=>{if(e._n)return e;const n=yp((...r)=>Al(e(...r)),t);return n._c=!1,n},lf=(i,e,t)=>{const n=i._ctx;for(const r in i){if(af(r))continue;const s=i[r];if(Be(s))e[r]=$p(r,s,n);else if(s!=null){const o=Al(s);e[r]=()=>o}}},cf=(i,e)=>{const t=Al(e);i.slots.default=()=>t},Kp=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=We(e),io(e,"_",t)):lf(e,i.slots={})}else i.slots={},e&&cf(i,e);io(i.slots,To,1)},Qp=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Ke;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(wt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,lf(e,r)),o=e}else e&&(cf(i,e),o={default:1});if(s)for(const a in r)!af(a)&&!(a in o)&&delete r[a]};function uf(){return{app:null,config:{isNativeTag:Td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let em=0;function tm(i,e){return function(n,r=null){Be(n)||(n=Object.assign({},n)),r!=null&&!yt(r)&&(r=null);const s=uf(),o=new Set;let a=!1;const l=s.app={_uid:em++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Sm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Be(c.install)?(o.add(c),c.install(l,...u)):Be(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Wn(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Ll(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Xa(i,e,t,n,r=!1){if(Fe(i)){i.forEach((f,d)=>Xa(f,e&&(Fe(e)?e[d]:e),t,n,r));return}if(Qs(n)&&!r)return;const s=n.shapeFlag&4?Ll(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Ke?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(_t(c)?(u[c]=null,ke(h,c)&&(h[c]=null)):Mt(c)&&(c.value=null)),Be(l))Vn(l,a,12,[o,u]);else{const f=_t(l),d=Mt(l);if(f||d){const g=()=>{if(i.f){const m=f?u[l]:l.value;r?Fe(m)&&dl(m,s):Fe(m)?m.includes(s)||m.push(s):f?(u[l]=[s],ke(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,ke(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Pt(g,t)):g()}}}const Pt=Tp;function nm(i){return im(i)}function im(i,e){const t=Id();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Qt,cloneNode:g,insertStaticContent:m}=i,p=(y,w,D,F=null,q=null,Y=null,J=!1,ne=null,re=!!w.dynamicChildren)=>{if(y===w)return;y&&!li(y,w)&&(F=Ee(y),le(y,q,Y,!0),y=null),w.patchFlag===-2&&(re=!1,w.dynamicChildren=null);const{type:_,ref:x,shapeFlag:P}=w;switch(_){case Cl:v(y,w,D,F);break;case Tn:S(y,w,D,F);break;case Xo:y==null&&C(w,D,F,J);break;case Yt:ae(y,w,D,F,q,Y,J,ne,re);break;default:P&1?I(y,w,D,F,q,Y,J,ne,re):P&6?N(y,w,D,F,q,Y,J,ne,re):(P&64||P&128)&&_.process(y,w,D,F,q,Y,J,ne,re,fe)}x!=null&&q&&Xa(x,y&&y.ref,Y,w||y,!w)},v=(y,w,D,F)=>{if(y==null)n(w.el=a(w.children),D,F);else{const q=w.el=y.el;w.children!==y.children&&c(q,w.children)}},S=(y,w,D,F)=>{y==null?n(w.el=l(w.children||""),D,F):w.el=y.el},C=(y,w,D,F)=>{[y.el,y.anchor]=m(y.children,w,D,F,y.el,y.anchor)},T=({el:y,anchor:w},D,F)=>{let q;for(;y&&y!==w;)q=f(y),n(y,D,F),y=q;n(w,D,F)},E=({el:y,anchor:w})=>{let D;for(;y&&y!==w;)D=f(y),r(y),y=D;r(w)},I=(y,w,D,F,q,Y,J,ne,re)=>{J=J||w.type==="svg",y==null?H(w,D,F,q,Y,J,ne,re):k(y,w,q,Y,J,ne,re)},H=(y,w,D,F,q,Y,J,ne)=>{let re,_;const{type:x,props:P,shapeFlag:V,transition:Q,patchFlag:oe,dirs:ge}=y;if(y.el&&g!==void 0&&oe===-1)re=y.el=g(y.el);else{if(re=y.el=o(y.type,Y,P&&P.is,P),V&8?u(re,y.children):V&16&&R(y.children,re,null,F,q,Y&&x!=="foreignObject",J,ne),ge&&ti(y,null,F,"created"),P){for(const _e in P)_e!=="value"&&!Ks(_e)&&s(re,_e,null,P[_e],Y,y.children,F,q,Pe);"value"in P&&s(re,"value",null,P.value),(_=P.onVnodeBeforeMount)&&ln(_,F,y)}b(re,y,y.scopeId,J,F)}ge&&ti(y,null,F,"beforeMount");const W=(!q||q&&!q.pendingBranch)&&Q&&!Q.persisted;W&&Q.beforeEnter(re),n(re,w,D),((_=P&&P.onVnodeMounted)||W||ge)&&Pt(()=>{_&&ln(_,F,y),W&&Q.enter(re),ge&&ti(y,null,F,"mounted")},q)},b=(y,w,D,F,q)=>{if(D&&d(y,D),F)for(let Y=0;Y<F.length;Y++)d(y,F[Y]);if(q){let Y=q.subTree;if(w===Y){const J=q.vnode;b(y,J,J.scopeId,J.slotScopeIds,q.parent)}}},R=(y,w,D,F,q,Y,J,ne,re=0)=>{for(let _=re;_<y.length;_++){const x=y[_]=ne?kn(y[_]):fn(y[_]);p(null,x,w,D,F,q,Y,J,ne)}},k=(y,w,D,F,q,Y,J)=>{const ne=w.el=y.el;let{patchFlag:re,dynamicChildren:_,dirs:x}=w;re|=y.patchFlag&16;const P=y.props||Ke,V=w.props||Ke;let Q;D&&ni(D,!1),(Q=V.onVnodeBeforeUpdate)&&ln(Q,D,w,y),x&&ti(w,y,D,"beforeUpdate"),D&&ni(D,!0);const oe=q&&w.type!=="foreignObject";if(_?B(y.dynamicChildren,_,ne,D,F,oe,Y):J||U(y,w,ne,null,D,F,oe,Y,!1),re>0){if(re&16)he(ne,w,P,V,D,F,q);else if(re&2&&P.class!==V.class&&s(ne,"class",null,V.class,q),re&4&&s(ne,"style",P.style,V.style,q),re&8){const ge=w.dynamicProps;for(let W=0;W<ge.length;W++){const _e=ge[W],Te=P[_e],ye=V[_e];(ye!==Te||_e==="value")&&s(ne,_e,Te,ye,q,y.children,D,F,Pe)}}re&1&&y.children!==w.children&&u(ne,w.children)}else!J&&_==null&&he(ne,w,P,V,D,F,q);((Q=V.onVnodeUpdated)||x)&&Pt(()=>{Q&&ln(Q,D,w,y),x&&ti(w,y,D,"updated")},F)},B=(y,w,D,F,q,Y,J)=>{for(let ne=0;ne<w.length;ne++){const re=y[ne],_=w[ne],x=re.el&&(re.type===Yt||!li(re,_)||re.shapeFlag&70)?h(re.el):D;p(re,_,x,null,F,q,Y,J,!0)}},he=(y,w,D,F,q,Y,J)=>{if(D!==F){for(const ne in F){if(Ks(ne))continue;const re=F[ne],_=D[ne];re!==_&&ne!=="value"&&s(y,ne,_,re,J,w.children,q,Y,Pe)}if(D!==Ke)for(const ne in D)!Ks(ne)&&!(ne in F)&&s(y,ne,D[ne],null,J,w.children,q,Y,Pe);"value"in F&&s(y,"value",D.value,F.value)}},ae=(y,w,D,F,q,Y,J,ne,re)=>{const _=w.el=y?y.el:a(""),x=w.anchor=y?y.anchor:a("");let{patchFlag:P,dynamicChildren:V,slotScopeIds:Q}=w;Q&&(ne=ne?ne.concat(Q):Q),y==null?(n(_,D,F),n(x,D,F),R(w.children,D,x,q,Y,J,ne,re)):P>0&&P&64&&V&&y.dynamicChildren?(B(y.dynamicChildren,V,D,q,Y,J,ne),(w.key!=null||q&&w===q.subTree)&&hf(y,w,!0)):U(y,w,D,x,q,Y,J,ne,re)},N=(y,w,D,F,q,Y,J,ne,re)=>{w.slotScopeIds=ne,y==null?w.shapeFlag&512?q.ctx.activate(w,D,F,J,re):ee(w,D,F,q,Y,J,re):j(y,w,re)},ee=(y,w,D,F,q,Y,J)=>{const ne=y.component=gm(y,F,q);if(So(y)&&(ne.ctx.renderer=fe),xm(ne),ne.asyncDep){if(q&&q.registerDep(ne,O),!y.el){const re=ne.subTree=Wn(Tn);S(null,re,w,D)}return}O(ne,y,w,D,q,Y,J)},j=(y,w,D)=>{const F=w.component=y.component;if(wp(y,w,D))if(F.asyncDep&&!F.asyncResolved){z(F,w,D);return}else F.next=w,gp(F.update),F.update();else w.el=y.el,F.vnode=w},O=(y,w,D,F,q,Y,J)=>{const ne=()=>{if(y.isMounted){let{next:x,bu:P,u:V,parent:Q,vnode:oe}=y,ge=x,W;ni(y,!1),x?(x.el=oe.el,z(y,x,J)):x=oe,P&&Go(P),(W=x.props&&x.props.onVnodeBeforeUpdate)&&ln(W,Q,x,oe),ni(y,!0);const _e=Vo(y),Te=y.subTree;y.subTree=_e,p(Te,_e,h(Te.el),Ee(Te),y,q,Y),x.el=_e.el,ge===null&&Sp(y,_e.el),V&&Pt(V,q),(W=x.props&&x.props.onVnodeUpdated)&&Pt(()=>ln(W,Q,x,oe),q)}else{let x;const{el:P,props:V}=w,{bm:Q,m:oe,parent:ge}=y,W=Qs(w);if(ni(y,!1),Q&&Go(Q),!W&&(x=V&&V.onVnodeBeforeMount)&&ln(x,ge,w),ni(y,!0),P&&te){const _e=()=>{y.subTree=Vo(y),te(P,y.subTree,y,q,null)};W?w.type.__asyncLoader().then(()=>!y.isUnmounted&&_e()):_e()}else{const _e=y.subTree=Vo(y);p(null,_e,D,F,y,q,Y),w.el=_e.el}if(oe&&Pt(oe,q),!W&&(x=V&&V.onVnodeMounted)){const _e=w;Pt(()=>ln(x,ge,_e),q)}(w.shapeFlag&256||ge&&Qs(ge.vnode)&&ge.vnode.shapeFlag&256)&&y.a&&Pt(y.a,q),y.isMounted=!0,w=D=F=null}},re=y.effect=new vl(ne,()=>Vh(_),y.scope),_=y.update=()=>re.run();_.id=y.uid,ni(y,!0),_()},z=(y,w,D)=>{w.component=y;const F=y.vnode.props;y.vnode=w,y.next=null,Jp(y,w.props,F,D),Qp(y,w.children,D),dr(),Mo(void 0,y.update),pr()},U=(y,w,D,F,q,Y,J,ne,re=!1)=>{const _=y&&y.children,x=y?y.shapeFlag:0,P=w.children,{patchFlag:V,shapeFlag:Q}=w;if(V>0){if(V&128){ce(_,P,D,F,q,Y,J,ne,re);return}else if(V&256){$(_,P,D,F,q,Y,J,ne,re);return}}Q&8?(x&16&&Pe(_,q,Y),P!==_&&u(D,P)):x&16?Q&16?ce(_,P,D,F,q,Y,J,ne,re):Pe(_,q,Y,!0):(x&8&&u(D,""),Q&16&&R(P,D,F,q,Y,J,ne,re))},$=(y,w,D,F,q,Y,J,ne,re)=>{y=y||Qi,w=w||Qi;const _=y.length,x=w.length,P=Math.min(_,x);let V;for(V=0;V<P;V++){const Q=w[V]=re?kn(w[V]):fn(w[V]);p(y[V],Q,D,null,q,Y,J,ne,re)}_>x?Pe(y,q,Y,!0,!1,P):R(w,D,F,q,Y,J,ne,re,P)},ce=(y,w,D,F,q,Y,J,ne,re)=>{let _=0;const x=w.length;let P=y.length-1,V=x-1;for(;_<=P&&_<=V;){const Q=y[_],oe=w[_]=re?kn(w[_]):fn(w[_]);if(li(Q,oe))p(Q,oe,D,null,q,Y,J,ne,re);else break;_++}for(;_<=P&&_<=V;){const Q=y[P],oe=w[V]=re?kn(w[V]):fn(w[V]);if(li(Q,oe))p(Q,oe,D,null,q,Y,J,ne,re);else break;P--,V--}if(_>P){if(_<=V){const Q=V+1,oe=Q<x?w[Q].el:F;for(;_<=V;)p(null,w[_]=re?kn(w[_]):fn(w[_]),D,oe,q,Y,J,ne,re),_++}}else if(_>V)for(;_<=P;)le(y[_],q,Y,!0),_++;else{const Q=_,oe=_,ge=new Map;for(_=oe;_<=V;_++){const Me=w[_]=re?kn(w[_]):fn(w[_]);Me.key!=null&&ge.set(Me.key,_)}let W,_e=0;const Te=V-oe+1;let ye=!1,L=0;const pe=new Array(Te);for(_=0;_<Te;_++)pe[_]=0;for(_=Q;_<=P;_++){const Me=y[_];if(_e>=Te){le(Me,q,Y,!0);continue}let xe;if(Me.key!=null)xe=ge.get(Me.key);else for(W=oe;W<=V;W++)if(pe[W-oe]===0&&li(Me,w[W])){xe=W;break}xe===void 0?le(Me,q,Y,!0):(pe[xe-oe]=_+1,xe>=L?L=xe:ye=!0,p(Me,w[xe],D,null,q,Y,J,ne,re),_e++)}const me=ye?rm(pe):Qi;for(W=me.length-1,_=Te-1;_>=0;_--){const Me=oe+_,xe=w[Me],Ce=Me+1<x?w[Me+1].el:F;pe[_]===0?p(null,xe,D,Ce,q,Y,J,ne,re):ye&&(W<0||_!==me[W]?se(xe,D,Ce,2):W--)}}},se=(y,w,D,F,q=null)=>{const{el:Y,type:J,transition:ne,children:re,shapeFlag:_}=y;if(_&6){se(y.component.subTree,w,D,F);return}if(_&128){y.suspense.move(w,D,F);return}if(_&64){J.move(y,w,D,fe);return}if(J===Yt){n(Y,w,D);for(let P=0;P<re.length;P++)se(re[P],w,D,F);n(y.anchor,w,D);return}if(J===Xo){T(y,w,D);return}if(F!==2&&_&1&&ne)if(F===0)ne.beforeEnter(Y),n(Y,w,D),Pt(()=>ne.enter(Y),q);else{const{leave:P,delayLeave:V,afterLeave:Q}=ne,oe=()=>n(Y,w,D),ge=()=>{P(Y,()=>{oe(),Q&&Q()})};V?V(Y,oe,ge):ge()}else n(Y,w,D)},le=(y,w,D,F=!1,q=!1)=>{const{type:Y,props:J,ref:ne,children:re,dynamicChildren:_,shapeFlag:x,patchFlag:P,dirs:V}=y;if(ne!=null&&Xa(ne,null,D,y,!0),x&256){w.ctx.deactivate(y);return}const Q=x&1&&V,oe=!Qs(y);let ge;if(oe&&(ge=J&&J.onVnodeBeforeUnmount)&&ln(ge,w,y),x&6)K(y.component,D,F);else{if(x&128){y.suspense.unmount(D,F);return}Q&&ti(y,null,w,"beforeUnmount"),x&64?y.type.remove(y,w,D,q,fe,F):_&&(Y!==Yt||P>0&&P&64)?Pe(_,w,D,!1,!0):(Y===Yt&&P&384||!q&&x&16)&&Pe(re,w,D),F&&be(y)}(oe&&(ge=J&&J.onVnodeUnmounted)||Q)&&Pt(()=>{ge&&ln(ge,w,y),Q&&ti(y,null,w,"unmounted")},D)},be=y=>{const{type:w,el:D,anchor:F,transition:q}=y;if(w===Yt){we(D,F);return}if(w===Xo){E(y);return}const Y=()=>{r(D),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(y.shapeFlag&1&&q&&!q.persisted){const{leave:J,delayLeave:ne}=q,re=()=>J(D,Y);ne?ne(y.el,Y,re):re()}else Y()},we=(y,w)=>{let D;for(;y!==w;)D=f(y),r(y),y=D;r(w)},K=(y,w,D)=>{const{bum:F,scope:q,update:Y,subTree:J,um:ne}=y;F&&Go(F),q.stop(),Y&&(Y.active=!1,le(J,y,w,D)),ne&&Pt(ne,w),Pt(()=>{y.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Pe=(y,w,D,F=!1,q=!1,Y=0)=>{for(let J=Y;J<y.length;J++)le(y[J],w,D,F,q)},Ee=y=>y.shapeFlag&6?Ee(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),De=(y,w,D)=>{y==null?w._vnode&&le(w._vnode,null,null,!0):p(w._vnode||null,y,w,null,null,null,D),qh(),w._vnode=y},fe={p,um:le,m:se,r:be,mt:ee,mc:R,pc:U,pbc:B,n:Ee,o:i};let Ne,te;return e&&([Ne,te]=e(fe)),{render:De,hydrate:Ne,createApp:tm(De,Ne)}}function ni({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function hf(i,e,t=!1){const n=i.children,r=e.children;if(Fe(n)&&Fe(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=kn(r[s]),a.el=o.el),t||hf(o,a))}}function rm(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const sm=i=>i.__isTeleport,Yt=Symbol(void 0),Cl=Symbol(void 0),Tn=Symbol(void 0),Xo=Symbol(void 0),Hr=[];let $t=null;function ff(i=!1){Hr.push($t=i?null:[])}function om(){Hr.pop(),$t=Hr[Hr.length-1]||null}let Jr=1;function Ec(i){Jr+=i}function df(i){return i.dynamicChildren=Jr>0?$t||Qi:null,om(),Jr>0&&$t&&$t.push(i),i}function am(i,e,t,n,r,s){return df(lo(i,e,t,n,r,s,!0))}function lm(i,e,t,n,r){return df(Wn(i,e,t,n,r,!0))}function cm(i){return i?i.__v_isVNode===!0:!1}function li(i,e){return i.type===e.type&&i.key===e.key}const To="__vInternal",pf=({key:i})=>i!=null?i:null,eo=({ref:i,ref_key:e,ref_for:t})=>i!=null?_t(i)||Mt(i)||Be(i)?{i:pn,r:i,k:e,f:!!t}:i:null;function lo(i,e=null,t=null,n=0,r=null,s=i===Yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&pf(e),ref:e&&eo(e),scopeId:Zh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Rl(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),Jr>0&&!o&&$t&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$t.push(l),l}const Wn=um;function um(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Gp)&&(i=Tn),cm(i)){const a=Zn(i,e,!0);return t&&Rl(a,t),Jr>0&&!s&&$t&&(a.shapeFlag&6?$t[$t.indexOf(i)]=a:$t.push(a)),a.patchFlag|=-2,a}if(Mm(i)&&(i=i.__vccOpts),e){e=hm(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=hl(a)),yt(l)&&(Oh(l)&&!Fe(l)&&(l=wt({},l)),e.style=ul(l))}const o=_t(i)?1:Ep(i)?128:sm(i)?64:yt(i)?4:Be(i)?2:0;return lo(i,e,t,n,r,o,s,!0)}function hm(i){return i?Oh(i)||To in i?wt({},i):i:null}function Zn(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?dm(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&pf(a),ref:e&&e.ref?t&&r?Fe(r)?r.concat(eo(e)):[r,eo(e)]:eo(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Yt?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Zn(i.ssContent),ssFallback:i.ssFallback&&Zn(i.ssFallback),el:i.el,anchor:i.anchor}}function fm(i=" ",e=0){return Wn(Cl,null,i,e)}function fn(i){return i==null||typeof i=="boolean"?Wn(Tn):Fe(i)?Wn(Yt,null,i.slice()):typeof i=="object"?kn(i):Wn(Cl,null,String(i))}function kn(i){return i.el===null||i.memo?i:Zn(i)}function Rl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Rl(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(To in e)?e._ctx=pn:r===3&&pn&&(pn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:pn},t=32):(e=String(e),n&64?(t=16,e=[fm(e)]):t=8);i.children=e,i.shapeFlag|=t}function dm(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=hl([e.class,n.class]));else if(r==="style")e.style=ul([e.style,n.style]);else if(vo(r)){const s=e[r],o=n[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function ln(i,e,t,n=null){Gt(i,e,7,[t,n])}const pm=uf();let mm=0;function gm(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||pm,s={uid:mm++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:of(n,r),emitsOptions:Yh(n,r),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:n.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_p.bind(null,s),i.ce&&i.ce(s),s}let vt=null;const vm=()=>vt||pn,sr=i=>{vt=i,i.scope.on()},pi=()=>{vt&&vt.scope.off(),vt=null};function mf(i){return i.vnode.shapeFlag&4}let $r=!1;function xm(i,e=!1){$r=e;const{props:t,children:n}=i.vnode,r=mf(i);Zp(i,t,r,e),Kp(i,n);const s=r?_m(i,e):void 0;return $r=!1,s}function _m(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=zh(new Proxy(i.ctx,Vp));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?bm(i):null;sr(i),dr();const s=Vn(n,i,0,[i.props,r]);if(pr(),pi(),bh(s)){if(s.then(pi,pi),e)return s.then(o=>{Tc(i,o,e)}).catch(o=>{bo(o,i,0)});i.asyncDep=s}else Tc(i,s,e)}else gf(i,e)}function Tc(i,e,t){Be(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:yt(e)&&(i.setupState=kh(e)),gf(i,t)}let Ac;function gf(i,e,t){const n=i.type;if(!i.render){if(!e&&Ac&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=wt(wt({isCustomElement:s,delimiters:a},o),l);n.render=Ac(r,c)}}i.render=n.render||Qt}sr(i),dr(),Wp(i),pr(),pi()}function ym(i){return new Proxy(i.attrs,{get(e,t){return Ut(i,"get","$attrs"),e[t]}})}function bm(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=ym(i))},slots:i.slots,emit:i.emit,expose:e}}function Ll(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(kh(zh(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in oo)return oo[t](i)}}))}function Mm(i){return Be(i)&&"__vccOpts"in i}const wm=(i,e)=>fp(i,e,$r),Sm="3.2.37",Em="http://www.w3.org/2000/svg",ci=typeof document!="undefined"?document:null,Cc=ci&&ci.createElement("template"),Tm={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?ci.createElementNS(Em,i):ci.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>ci.createTextNode(i),createComment:i=>ci.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ci.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Cc.innerHTML=n?`<svg>${i}</svg>`:i;const a=Cc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Am(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Cm(i,e,t){const n=i.style,r=_t(t);if(t&&!r){for(const s in t)Ya(n,s,t[s]);if(e&&!_t(e))for(const s in e)t[s]==null&&Ya(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Rc=/\s*!important$/;function Ya(i,e,t){if(Fe(t))t.forEach(n=>Ya(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Rm(i,e);Rc.test(t)?i.setProperty(fr(n),t.replace(Rc,""),"important"):i[n]=t}}const Lc=["Webkit","Moz","ms"],Yo={};function Rm(i,e){const t=Yo[e];if(t)return t;let n=rr(e);if(n!=="filter"&&n in i)return Yo[e]=n;n=Sh(n);for(let r=0;r<Lc.length;r++){const s=Lc[r]+n;if(s in i)return Yo[e]=s}return e}const Pc="http://www.w3.org/1999/xlink";function Lm(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Pc,e.slice(6,e.length)):i.setAttributeNS(Pc,e,t);else{const s=bd(e);t==null||s&&!xh(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function Pm(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=xh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[vf,Dm]=(()=>{let i=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let Za=0;const Im=Promise.resolve(),Fm=()=>{Za=0},Nm=()=>Za||(Im.then(Fm),Za=vf());function Om(i,e,t,n){i.addEventListener(e,t,n)}function zm(i,e,t,n){i.removeEventListener(e,t,n)}function Bm(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Um(e);if(n){const c=s[e]=Hm(n,r);Om(i,a,c,l)}else o&&(zm(i,a,o,l),s[e]=void 0)}}const Dc=/(?:Once|Passive|Capture)$/;function Um(i){let e;if(Dc.test(i)){e={};let t;for(;t=i.match(Dc);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[fr(i.slice(2)),e]}function Hm(i,e){const t=n=>{const r=n.timeStamp||vf();(Dm||r>=t.attached-1)&&Gt(km(n,t.value),e,5,[n])};return t.value=i,t.attached=Nm(),t}function km(i,e){if(Fe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Ic=/^on[a-z]/,Gm=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?Am(i,n,r):e==="style"?Cm(i,t,n):vo(e)?fl(e)||Bm(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vm(i,e,n,r))?Pm(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Lm(i,e,n,r))};function Vm(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Ic.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Ic.test(e)&&_t(t)?!1:e in i}const Wm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Pp.props;const jm=wt({patchProp:Gm},Tm);let Fc;function qm(){return Fc||(Fc=nm(jm))}const Xm=(...i)=>{const e=qm().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Ym(n);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ym(i){return _t(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pl="140";const Zm=0,Nc=1,Jm=2,xf=1,$m=2,Nr=3,Kr=0,zt=1,vi=2,_f=1,jn=0,nr=1,Oc=2,zc=3,Bc=4,Km=5,Xi=100,Qm=101,eg=102,Uc=103,Hc=104,tg=200,ng=201,ig=202,rg=203,yf=204,bf=205,sg=206,og=207,ag=208,lg=209,cg=210,ug=0,hg=1,fg=2,Ja=3,dg=4,pg=5,mg=6,gg=7,Ao=0,vg=1,xg=2,An=0,_g=1,yg=2,bg=3,Mg=4,wg=5,Mf=300,or=301,ar=302,$a=303,Ka=304,Co=306,Qr=1e3,Jt=1001,Qa=1002,ft=1003,kc=1004,Gc=1005,Dt=1006,Sg=1007,Ro=1008,Vc=1008,xi=1009,Eg=1010,Tg=1011,es=1012,Ag=1013,to=1014,hi=1015,ts=1016,Cg=1017,Rg=1018,ir=1020,Lg=1021,Pg=1022,Kt=1023,Dg=1024,Ig=1025,mi=1026,lr=1027,Fg=1028,Ng=1029,Og=1030,zg=1031,Bg=1033,Zo=33776,Jo=33777,$o=33778,Ko=33779,Wc=35840,jc=35841,qc=35842,Xc=35843,Ug=36196,Yc=37492,Zc=37496,Jc=37808,$c=37809,Kc=37810,Qc=37811,eu=37812,tu=37813,nu=37814,iu=37815,ru=37816,su=37817,ou=37818,au=37819,lu=37820,cu=37821,uu=36492,Hg=2200,kg=2201,Gg=2202,co=2300,uo=2301,Qo=2302,Zi=2400,Ji=2401,ho=2402,Dl=2500,wf=2501,Vg=0,Jn=3e3,et=3001,Wg=3200,jg=3201,mr=0,qg=1,wn="srgb",fi="srgb-linear",ea=7680,Xg=519,ns=35044,fo=35048,hu="300 es",el=1035;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const mt=[];for(let i=0;i<256;i++)mt[i]=(i<16?"0":"")+i.toString(16);let fu=1234567;const kr=Math.PI/180,is=180/Math.PI;function en(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Il(i,e){return(i%e+e)%e}function Yg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Zg(i,e,t){return i!==e?(t-i)/(e-i):0}function Gr(i,e,t){return(1-t)*i+t*e}function Jg(i,e,t,n){return Gr(i,e,1-Math.exp(-t*n))}function $g(i,e=1){return e-Math.abs(Il(i,e*2)-e)}function Kg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function e0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function t0(i,e){return i+Math.random()*(e-i)}function n0(i){return i*(.5-Math.random())}function i0(i){i!==void 0&&(fu=i);let e=fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r0(i){return i*kr}function s0(i){return i*is}function tl(i){return(i&i-1)===0&&i!==0}function o0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function po(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function a0(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function l0(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function c0(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var u0=Object.freeze({__proto__:null,DEG2RAD:kr,RAD2DEG:is,generateUUID:en,clamp:gt,euclideanModulo:Il,mapLinear:Yg,inverseLerp:Zg,lerp:Gr,damp:Jg,pingpong:$g,smoothstep:Kg,smootherstep:Qg,randInt:e0,randFloat:t0,randFloatSpread:n0,seededRandom:i0,degToRad:r0,radToDeg:s0,isPowerOfTwo:tl,ceilPowerOfTwo:o0,floorPowerOfTwo:po,setQuaternionFromProperEuler:a0,normalize:c0,denormalize:l0});class ue{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ue.prototype.isVector2=!0;class xt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=r[0],p=r[3],v=r[6],S=r[1],C=r[4],T=r[7],E=r[2],I=r[5],H=r[8];return s[0]=o*m+a*S+l*E,s[3]=o*p+a*C+l*I,s[6]=o*v+a*T+l*H,s[1]=c*m+u*S+h*E,s[4]=c*p+u*C+h*I,s[7]=c*v+u*T+h*H,s[2]=f*m+d*S+g*E,s[5]=f*p+d*C+g*I,s[8]=f*v+d*T+g*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*c-u*n)*m,e[2]=(a*n-r*o)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}xt.prototype.isMatrix3=!0;function Sf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function no(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ta={[wn]:{[fi]:gi},[fi]:{[wn]:no}},Wt={legacyMode:!0,get workingColorSpace(){return fi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(ta[e]&&ta[e][t]!==void 0){const n=ta[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lt={r:0,g:0,b:0},jt={h:0,s:0,l:0},ys={h:0,s:0,l:0};function na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function bs(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Se{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=fi){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=fi){if(e=Il(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=na(o,s,e+1/3),this.g=na(o,s,e),this.b=na(o,s,e-1/3)}return Wt.toWorkingColorSpace(this,r),this}setStyle(e,t=wn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Wt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Wt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=wn){const n=Ef[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Wt.fromWorkingColorSpace(bs(this,lt),e),gt(lt.r*255,0,255)<<16^gt(lt.g*255,0,255)<<8^gt(lt.b*255,0,255)<<0}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fi){Wt.fromWorkingColorSpace(bs(this,lt),t);const n=lt.r,r=lt.g,s=lt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=fi){return Wt.fromWorkingColorSpace(bs(this,lt),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=wn){return Wt.fromWorkingColorSpace(bs(this,lt),e),e!==wn?`color(${e} ${lt.r} ${lt.g} ${lt.b})`:`rgb(${lt.r*255|0},${lt.g*255|0},${lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(ys);const n=Gr(jt.h,ys.h,t),r=Gr(jt.s,ys.s,t),s=Gr(jt.l,ys.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Se.NAMES=Ef;Se.prototype.isColor=!0;Se.prototype.r=1;Se.prototype.g=1;Se.prototype.b=1;let Ai;class yi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=rs("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Fl{constructor(e=null){this.uuid=en(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ia(r[o].image)):s.push(ia(r[o]))}else s=ia(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?yi.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Fl.prototype.isSource=!0;let h0=0;class pt extends _i{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=Jt,r=Jt,s=Dt,o=Ro,a=Kt,l=xi,c=1,u=Jn){super(),Object.defineProperty(this,"id",{value:h0++}),this.uuid=en(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Mf;pt.prototype.isTexture=!0;class $e{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,T=(d+1)/2,E=(v+1)/2,I=(u+f)/4,H=(h+m)/4,b=(g+p)/4;return C>T&&C>E?C<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(C),r=I/n,s=H/n):T>E?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=I/r,s=b/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=H/s,r=b/s),this.set(n,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-m)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}$e.prototype.isVector4=!0;class Bt extends _i{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.prototype.isWebGLRenderTarget=!0;class Lo extends pt{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Lo.prototype.isDataArrayTexture=!0;class f0 extends Bt{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new Lo(null,e,t,n),this.texture.isRenderTargetTexture=!0}}f0.prototype.isWebGLArrayRenderTarget=!0;class Nl extends pt{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=ft,this.minFilter=ft,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Nl.prototype.isData3DTexture=!0;class d0 extends Bt{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new Nl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}d0.prototype.isWebGL3DRenderTarget=!0;class p0 extends Bt{constructor(e,t,n,r={}){super(e,t,r);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}p0.prototype.isWebGLMultipleRenderTargets=!0;class It{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-a;const v=l*f+c*d+u*g+h*m,S=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const E=Math.sqrt(C),I=Math.atan2(E,v*S);p=Math.sin(p*I)/E,a=Math.sin(a*I)/E}const T=a*S;if(l=l*p+f*T,c=c*p+d*T,u=u*p+g*T,h=h*p+m*T,p===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}It.prototype.isQuaternion=!0;class A{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}A.prototype.isVector3=!0;const ra=new A,du=new It;class tn{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ii.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ii)}else n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox),sa.applyMatrix4(e.matrixWorld),this.union(sa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Ms.subVectors(this.max,Er),Ci.subVectors(e.a,Er),Ri.subVectors(e.b,Er),Li.subVectors(e.c,Er),Dn.subVectors(Ri,Ci),In.subVectors(Li,Ri),ri.subVectors(Ci,Li);let t=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-ri.z,ri.y,Dn.z,0,-Dn.x,In.z,0,-In.x,ri.z,0,-ri.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-ri.y,ri.x,0];return!oa(t,Ci,Ri,Li,Ms)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Ci,Ri,Li,Ms))?!1:(ws.crossVectors(Dn,In),t=[ws.x,ws.y,ws.z],oa(t,Ci,Ri,Li,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ii.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}tn.prototype.isBox3=!0;const vn=[new A,new A,new A,new A,new A,new A,new A,new A],ii=new A,sa=new tn,Ci=new A,Ri=new A,Li=new A,Dn=new A,In=new A,ri=new A,Er=new A,Ms=new A,ws=new A,si=new A;function oa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){si.fromArray(i,s);const a=r.x*Math.abs(si.x)+r.y*Math.abs(si.y)+r.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),u=n.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const m0=new tn,pu=new A,Ss=new A,aa=new A;class gr{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):m0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(aa.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Ss.set(0,0,1).multiplyScalar(e.radius):Ss.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(pu.copy(e.center).add(Ss)),this.expandByPoint(pu.copy(e.center).sub(Ss)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new A,la=new A,Es=new A,Fn=new A,ca=new A,Ts=new A,ua=new A;class bi{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.direction).multiplyScalar(t).add(this.origin),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){la.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(la);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Es),a=Fn.dot(this.direction),l=-Fn.dot(Es),c=Fn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Es).multiplyScalar(f).add(la),d}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),r=xn.dot(xn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,r,s){ca.subVectors(t,e),Ts.subVectors(n,e),ua.crossVectors(ca,Ts);let o=this.direction.dot(ua),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,e);const l=a*this.direction.dot(Ts.crossVectors(Fn,Ts));if(l<0)return null;const c=a*this.direction.dot(ca.cross(Fn));if(c<0||l+c>o)return null;const u=-a*Fn.dot(ua);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=f,v[3]=d,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g0,e,v0)}lookAt(e,t,n){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Nn.crossVectors(n,Ft),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Nn.crossVectors(n,Ft)),Nn.normalize(),As.crossVectors(Ft,Nn),r[0]=Nn.x,r[4]=As.x,r[8]=Ft.x,r[1]=Nn.y,r[5]=As.y,r[9]=Ft.y,r[2]=Nn.z,r[6]=As.z,r[10]=Ft.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],v=n[14],S=n[3],C=n[7],T=n[11],E=n[15],I=r[0],H=r[4],b=r[8],R=r[12],k=r[1],B=r[5],he=r[9],ae=r[13],N=r[2],ee=r[6],j=r[10],O=r[14],z=r[3],U=r[7],$=r[11],ce=r[15];return s[0]=o*I+a*k+l*N+c*z,s[4]=o*H+a*B+l*ee+c*U,s[8]=o*b+a*he+l*j+c*$,s[12]=o*R+a*ae+l*O+c*ce,s[1]=u*I+h*k+f*N+d*z,s[5]=u*H+h*B+f*ee+d*U,s[9]=u*b+h*he+f*j+d*$,s[13]=u*R+h*ae+f*O+d*ce,s[2]=g*I+m*k+p*N+v*z,s[6]=g*H+m*B+p*ee+v*U,s[10]=g*b+m*he+p*j+v*$,s[14]=g*R+m*ae+p*O+v*ce,s[3]=S*I+C*k+T*N+E*z,s[7]=S*H+C*B+T*ee+E*U,s[11]=S*b+C*he+T*j+E*$,s[15]=S*R+C*ae+T*O+E*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+m*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+v*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],v=e[15],S=h*p*c-m*f*c+m*l*d-a*p*d-h*l*v+a*f*v,C=g*f*c-u*p*c-g*l*d+o*p*d+u*l*v-o*f*v,T=u*m*c-g*h*c+g*a*d-o*m*d-u*a*v+o*h*v,E=g*h*l-u*m*l-g*a*f+o*m*f+u*a*p-o*h*p,I=t*S+n*C+r*T+s*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/I;return e[0]=S*H,e[1]=(m*f*s-h*p*s-m*r*d+n*p*d+h*r*v-n*f*v)*H,e[2]=(a*p*s-m*l*s+m*r*c-n*p*c-a*r*v+n*l*v)*H,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*H,e[4]=C*H,e[5]=(u*p*s-g*f*s+g*r*d-t*p*d-u*r*v+t*f*v)*H,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*v-t*l*v)*H,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*H,e[8]=T*H,e[9]=(g*h*s-u*m*s-g*n*d+t*m*d+u*n*v-t*h*v)*H,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*v+t*a*v)*H,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*H,e[12]=E*H,e[13]=(u*m*r-g*h*r+g*n*f-t*m*f-u*n*p+t*h*p)*H,e[14]=(g*a*r-o*m*r-g*n*l+t*m*l+o*n*p-t*a*p)*H,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*H,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,m=o*u,p=o*h,v=a*h,S=l*c,C=l*u,T=l*h,E=n.x,I=n.y,H=n.z;return r[0]=(1-(m+v))*E,r[1]=(d+T)*E,r[2]=(g-C)*E,r[3]=0,r[4]=(d-T)*I,r[5]=(1-(f+v))*I,r[6]=(p+S)*I,r[7]=0,r[8]=(g+C)*H,r[9]=(p-S)*H,r[10]=(1-(f+m))*H,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Pi.set(r[0],r[1],r[2]).length();const o=Pi.set(r[4],r[5],r[6]).length(),a=Pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/o,h=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Ae.prototype.isMatrix4=!0;const Pi=new A,qt=new Ae,g0=new A(0,0,0),v0=new A(1,1,1),Nn=new A,As=new A,Ft=new A,mu=new Ae,gu=new It;class Mi{constructor(e=0,t=0,n=0,r=Mi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.prototype.isEuler=!0;Mi.DefaultOrder="XYZ";Mi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x0=0;const vu=new A,Di=new It,_n=new Ae,Cs=new A,Tr=new A,_0=new A,y0=new It,xu=new A(1,0,0),_u=new A(0,1,0),yu=new A(0,0,1),b0={type:"added"},bu={type:"removed"};class Ze extends _i{constructor(){super(),Object.defineProperty(this,"id",{value:x0++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DefaultUp.clone();const e=new A,t=new Mi,n=new It,r=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new xt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ze.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return vu.copy(e).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cs.copy(e):Cs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Tr,Cs,this.up):_n.lookAt(Cs,Tr,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Di.setFromRotationMatrix(_n),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(b0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(bu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,_0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,y0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ze.DefaultUp=new A(0,1,0);Ze.DefaultMatrixAutoUpdate=!0;Ze.prototype.isObject3D=!0;const Xt=new A,yn=new A,ha=new A,bn=new A,Ii=new A,Fi=new A,Mu=new A,fa=new A,da=new A,pa=new A;class ot{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xt.subVectors(r,t),yn.subVectors(n,t),ha.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(yn),l=Xt.dot(ha),c=yn.dot(yn),u=yn.dot(ha),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bn),bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,bn),l.set(0,0),l.addScaledVector(s,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l}static isFrontFacing(e,t,n,r){return Xt.subVectors(n,t),yn.subVectors(e,t),Xt.cross(yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Xt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ot.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ot.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ot.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ot.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ot.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ii.subVectors(r,n),Fi.subVectors(s,n),fa.subVectors(e,n);const l=Ii.dot(fa),c=Fi.dot(fa);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,r);const u=Ii.dot(da),h=Fi.dot(da);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ii,o);pa.subVectors(e,s);const d=Ii.dot(pa),g=Fi.dot(pa);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Fi,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Mu.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Mu,a);const v=1/(p+m+f);return o=m*v,a=f*v,t.copy(n).addScaledVector(Ii,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let M0=0;class ut extends _i{constructor(){super(),Object.defineProperty(this,"id",{value:M0++}),this.uuid=en(),this.name="",this.type="Material",this.blending=nr,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yf,this.blendDst=bf,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===_f;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Kr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ut.prototype.isMaterial=!0;ut.fromType=function(){return null};class cs extends ut{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}cs.prototype.isMeshBasicMaterial=!0;const st=new A,Rs=new ue;class at{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ns,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Se),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new ue),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new A),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new $e),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ns&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}at.prototype.isBufferAttribute=!0;class Tf extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Af extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class w0 extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}w0.prototype.isFloat16BufferAttribute=!0;class dt extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}}let S0=0;const kt=new Ae,ma=new Ze,Ni=new A,Nt=new tn,Ar=new tn,ht=new A;class Qe extends _i{constructor(){super(),Object.defineProperty(this,"id",{value:S0++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sf(e)?Af:Tf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new xt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Nt.min,Ar.min),Nt.expandByPoint(ht),ht.addVectors(Nt.max,Ar.max),Nt.expandByPoint(ht)):(Nt.expandByPoint(Ar.min),Nt.expandByPoint(Ar.max))}Nt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ht.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(e,c),ht.add(Ni)),r=Math.max(r,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let k=0;k<a;k++)c[k]=new A,u[k]=new A;const h=new A,f=new A,d=new A,g=new ue,m=new ue,p=new ue,v=new A,S=new A;function C(k,B,he){h.fromArray(r,k*3),f.fromArray(r,B*3),d.fromArray(r,he*3),g.fromArray(o,k*2),m.fromArray(o,B*2),p.fromArray(o,he*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const ae=1/(m.x*p.y-p.x*m.y);!isFinite(ae)||(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(ae),S.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(ae),c[k].add(v),c[B].add(v),c[he].add(v),u[k].add(S),u[B].add(S),u[he].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let k=0,B=T.length;k<B;++k){const he=T[k],ae=he.start,N=he.count;for(let ee=ae,j=ae+N;ee<j;ee+=3)C(n[ee+0],n[ee+1],n[ee+2])}const E=new A,I=new A,H=new A,b=new A;function R(k){H.fromArray(s,k*3),b.copy(H);const B=c[k];E.copy(B),E.sub(H.multiplyScalar(H.dot(B))).normalize(),I.crossVectors(b,B);const ae=I.dot(u[k])<0?-1:1;l[k*4]=E.x,l[k*4+1]=E.y,l[k*4+2]=E.z,l[k*4+3]=ae}for(let k=0,B=T.length;k<B;++k){const he=T[k],ae=he.start,N=he.count;for(let ee=ae,j=ae+N;ee<j;ee+=3)R(n[ee+0]),R(n[ee+1]),R(n[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new A,s=new A,o=new A,a=new A,l=new A,c=new A,u=new A,h=new A;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let v=0;v<u;v++)f[g++]=c[d++]}return new at(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qe,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Qe.prototype.isBufferGeometry=!0;const wu=new Ae,Oi=new bi,ga=new gr,On=new A,zn=new A,Bn=new A,va=new A,xa=new A,_a=new A,Ls=new A,Ps=new A,Ds=new A,Is=new ue,Fs=new ue,Ns=new ue,ya=new A,Os=new A;class ct extends Ze{constructor(e=new Qe,t=new cs){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),e.ray.intersectsSphere(ga)===!1)||(wu.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(wu),n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],S=r[v.materialIndex],C=Math.max(v.start,g.start),T=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let E=C,I=T;E<I;E+=3){const H=a.getX(E),b=a.getX(E+1),R=a.getX(E+2);o=zs(this,S,e,Oi,l,c,u,h,f,H,b,R),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=m,S=p;v<S;v+=3){const C=a.getX(v),T=a.getX(v+1),E=a.getX(v+2);o=zs(this,r,e,Oi,l,c,u,h,f,C,T,E),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],S=r[v.materialIndex],C=Math.max(v.start,g.start),T=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let E=C,I=T;E<I;E+=3){const H=E,b=E+1,R=E+2;o=zs(this,S,e,Oi,l,c,u,h,f,H,b,R),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=m,S=p;v<S;v+=3){const C=v,T=v+1,E=v+2;o=zs(this,r,e,Oi,l,c,u,h,f,C,T,E),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}ct.prototype.isMesh=!0;function E0(i,e,t,n,r,s,o,a){let l;if(e.side===zt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==vi,a),l===null)return null;Os.copy(a),Os.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Os);return c<t.near||c>t.far?null:{distance:c,point:Os.clone(),object:i}}function zs(i,e,t,n,r,s,o,a,l,c,u,h){On.fromBufferAttribute(r,c),zn.fromBufferAttribute(r,u),Bn.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){Ls.set(0,0,0),Ps.set(0,0,0),Ds.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],v=s[g];p!==0&&(va.fromBufferAttribute(v,c),xa.fromBufferAttribute(v,u),_a.fromBufferAttribute(v,h),o?(Ls.addScaledVector(va,p),Ps.addScaledVector(xa,p),Ds.addScaledVector(_a,p)):(Ls.addScaledVector(va.sub(On),p),Ps.addScaledVector(xa.sub(zn),p),Ds.addScaledVector(_a.sub(Bn),p)))}On.add(Ls),zn.add(Ps),Bn.add(Ds)}i.isSkinnedMesh&&(i.boneTransform(c,On),i.boneTransform(u,zn),i.boneTransform(h,Bn));const d=E0(i,e,t,n,On,zn,Bn,ya);if(d){a&&(Is.fromBufferAttribute(a,c),Fs.fromBufferAttribute(a,u),Ns.fromBufferAttribute(a,h),d.uv=ot.getUV(ya,On,zn,Bn,Is,Fs,Ns,new ue)),l&&(Is.fromBufferAttribute(l,c),Fs.fromBufferAttribute(l,u),Ns.fromBufferAttribute(l,h),d.uv2=ot.getUV(ya,On,zn,Bn,Is,Fs,Ns,new ue));const g={a:c,b:u,c:h,normal:new A,materialIndex:0};ot.getNormal(On,zn,Bn,g.normal),d.face=g}return d}class wi extends Qe{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(m,p,v,S,C,T,E,I,H,b,R){const k=T/H,B=E/b,he=T/2,ae=E/2,N=I/2,ee=H+1,j=b+1;let O=0,z=0;const U=new A;for(let $=0;$<j;$++){const ce=$*B-ae;for(let se=0;se<ee;se++){const le=se*k-he;U[m]=le*S,U[p]=ce*C,U[v]=N,c.push(U.x,U.y,U.z),U[m]=0,U[p]=0,U[v]=I>0?1:-1,u.push(U.x,U.y,U.z),h.push(se/H),h.push(1-$/b),O+=1}}for(let $=0;$<b;$++)for(let ce=0;ce<H;ce++){const se=f+ce+ee*$,le=f+ce+ee*($+1),be=f+(ce+1)+ee*($+1),we=f+(ce+1)+ee*$;l.push(se,le,we),l.push(le,be,we),z+=6}a.addGroup(d,z,R),d+=z,f+=O}}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=cr(i[t]);for(const r in n)e[r]=n[r]}return e}const zl={clone:cr,merge:bt};var T0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends ut{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=T0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Ct.prototype.isShaderMaterial=!0;class Bl extends Ze{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Bl.prototype.isCamera=!0;class At extends Bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}At.prototype.isPerspectiveCamera=!0;const zi=90,Bi=1;class Ul extends Ze{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new At(zi,Bi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new A(1,0,0)),this.add(r);const s=new At(zi,Bi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new A(-1,0,0)),this.add(s);const o=new At(zi,Bi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new A(0,1,0)),this.add(o);const a=new At(zi,Bi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new A(0,-1,0)),this.add(a);const l=new At(zi,Bi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new A(0,0,1)),this.add(l);const c=new At(zi,Bi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new A(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=An,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Po extends pt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,n,r,s,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Po.prototype.isCubeTexture=!0;class Cf extends Bt{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Po(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wi(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:jn});s.uniforms.tEquirect.value=t;const o=new ct(r,s),a=t.minFilter;return t.minFilter===Ro&&(t.minFilter=Dt),new Ul(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}Cf.prototype.isWebGLCubeRenderTarget=!0;const ba=new A,C0=new A,R0=new xt;class Sn{constructor(e=new A(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ba.subVectors(n,t).cross(C0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||R0.getNormalMatrix(e),r=this.coplanarPoint(ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Sn.prototype.isPlane=!0;const Ui=new gr,Bs=new A;class Do{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],v=n[13],S=n[14],C=n[15];return t[0].setComponents(a-r,h-l,m-f,C-p).normalize(),t[1].setComponents(a+r,h+l,m+f,C+p).normalize(),t[2].setComponents(a+s,h+c,m+d,C+v).normalize(),t[3].setComponents(a-s,h-c,m-d,C-v).normalize(),t[4].setComponents(a-o,h-u,m-g,C-S).normalize(),t[5].setComponents(a+o,h+u,m+g,C+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function L0(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class ur extends Qe{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],m=[],p=[];for(let v=0;v<u;v++){const S=v*f-o;for(let C=0;C<c;C++){const T=C*h-s;g.push(T,-S,0),m.push(0,0,1),p.push(C/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<a;S++){const C=S+c*v,T=S+c*(v+1),E=S+1+c*(v+1),I=S+1+c*v;d.push(C,T,I),d.push(T,E,I)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(p,2))}static fromJSON(e){return new ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0="vec3 transformed = vec3( position );",B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,H0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Z0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",iv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,pv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,vv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,_v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,wv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Sv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ev=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Vv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ox=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ax=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,xx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,_x=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Px=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ox=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,n_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:P0,alphamap_pars_fragment:D0,alphatest_fragment:I0,alphatest_pars_fragment:F0,aomap_fragment:N0,aomap_pars_fragment:O0,begin_vertex:z0,beginnormal_vertex:B0,bsdfs:U0,bumpmap_pars_fragment:H0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:W0,color_fragment:j0,color_pars_fragment:q0,color_pars_vertex:X0,color_vertex:Y0,common:Z0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:$0,displacementmap_pars_vertex:K0,displacementmap_vertex:Q0,emissivemap_fragment:ev,emissivemap_pars_fragment:tv,encodings_fragment:nv,encodings_pars_fragment:iv,envmap_fragment:rv,envmap_common_pars_fragment:sv,envmap_pars_fragment:ov,envmap_pars_vertex:av,envmap_physical_pars_fragment:xv,envmap_vertex:lv,fog_vertex:cv,fog_pars_vertex:uv,fog_fragment:hv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_vertex:gv,lights_pars_begin:vv,lights_toon_fragment:_v,lights_toon_pars_fragment:yv,lights_phong_fragment:bv,lights_phong_pars_fragment:Mv,lights_physical_fragment:wv,lights_physical_pars_fragment:Sv,lights_fragment_begin:Ev,lights_fragment_maps:Tv,lights_fragment_end:Av,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:Rv,logdepthbuf_pars_vertex:Lv,logdepthbuf_vertex:Pv,map_fragment:Dv,map_pars_fragment:Iv,map_particle_fragment:Fv,map_particle_pars_fragment:Nv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:zv,morphcolor_vertex:Bv,morphnormal_vertex:Uv,morphtarget_pars_vertex:Hv,morphtarget_vertex:kv,normal_fragment_begin:Gv,normal_fragment_maps:Vv,normal_pars_fragment:Wv,normal_pars_vertex:jv,normal_vertex:qv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Jv,output_fragment:$v,packing:Kv,premultiplied_alpha_fragment:Qv,project_vertex:ex,dithering_fragment:tx,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:ox,shadowmap_vertex:ax,shadowmask_pars_fragment:lx,skinbase_vertex:cx,skinning_pars_vertex:ux,skinning_vertex:hx,skinnormal_vertex:fx,specularmap_fragment:dx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:vx,transmission_pars_fragment:xx,uv_pars_fragment:_x,uv_pars_vertex:yx,uv_vertex:bx,uv2_pars_fragment:Mx,uv2_pars_vertex:wx,uv2_vertex:Sx,worldpos_vertex:Ex,background_vert:Tx,background_frag:Ax,cube_vert:Cx,cube_frag:Rx,depth_vert:Lx,depth_frag:Px,distanceRGBA_vert:Dx,distanceRGBA_frag:Ix,equirect_vert:Fx,equirect_frag:Nx,linedashed_vert:Ox,linedashed_frag:zx,meshbasic_vert:Bx,meshbasic_frag:Ux,meshlambert_vert:Hx,meshlambert_frag:kx,meshmatcap_vert:Gx,meshmatcap_frag:Vx,meshnormal_vert:Wx,meshnormal_frag:jx,meshphong_vert:qx,meshphong_frag:Xx,meshphysical_vert:Yx,meshphysical_frag:Zx,meshtoon_vert:Jx,meshtoon_frag:$x,points_vert:Kx,points_frag:Qx,shadow_vert:e_,shadow_frag:t_,sprite_vert:n_,sprite_frag:i_},ve={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},dn={basic:{uniforms:bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.fog,ve.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:bt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:bt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:bt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:bt([ve.points,ve.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:bt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:bt([ve.common,ve.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:bt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:bt([ve.sprite,ve.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:bt([ve.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:bt([ve.common,ve.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:bt([ve.lights,ve.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};dn.physical={uniforms:bt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ue(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function r_(i,e,t,n,r,s){const o=new Se(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(m,p){let v=!1,S=p.isScene===!0?p.background:null;S&&S.isTexture&&(S=e.get(S));const C=i.xr,T=C.getSession&&C.getSession();T&&T.environmentBlendMode==="additive"&&(S=null),S===null?g(o,a):S&&S.isColor&&(g(S,1),v=!0),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Co)?(c===void 0&&(c=new ct(new wi(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:cr(dn.cube.uniforms),vertexShader:dn.cube.vertexShader,fragmentShader:dn.cube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||h!==S.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ct(new ur(2,2),new Ct({name:"BackgroundMaterial",uniforms:cr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:d}}function s_(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(N,ee,j,O,z){let U=!1;if(o){const $=m(O,j,ee);c!==$&&(c=$,d(c.object)),U=v(N,O,j,z),U&&S(N,O,j,z)}else{const $=ee.wireframe===!0;(c.geometry!==O.id||c.program!==j.id||c.wireframe!==$)&&(c.geometry=O.id,c.program=j.id,c.wireframe=$,U=!0)}z!==null&&t.update(z,34963),(U||u)&&(u=!1,b(N,ee,j,O),z!==null&&i.bindBuffer(34963,t.get(z).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function m(N,ee,j){const O=j.wireframe===!0;let z=a[N.id];z===void 0&&(z={},a[N.id]=z);let U=z[ee.id];U===void 0&&(U={},z[ee.id]=U);let $=U[O];return $===void 0&&($=p(f()),U[O]=$),$}function p(N){const ee=[],j=[],O=[];for(let z=0;z<r;z++)ee[z]=0,j[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:j,attributeDivisors:O,object:N,attributes:{},index:null}}function v(N,ee,j,O){const z=c.attributes,U=ee.attributes;let $=0;const ce=j.getAttributes();for(const se in ce)if(ce[se].location>=0){const be=z[se];let we=U[se];if(we===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(we=N.instanceColor)),be===void 0||be.attribute!==we||we&&be.data!==we.data)return!0;$++}return c.attributesNum!==$||c.index!==O}function S(N,ee,j,O){const z={},U=ee.attributes;let $=0;const ce=j.getAttributes();for(const se in ce)if(ce[se].location>=0){let be=U[se];be===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(be=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(be=N.instanceColor));const we={};we.attribute=be,be&&be.data&&(we.data=be.data),z[se]=we,$++}c.attributes=z,c.attributesNum=$,c.index=O}function C(){const N=c.newAttributes;for(let ee=0,j=N.length;ee<j;ee++)N[ee]=0}function T(N){E(N,0)}function E(N,ee){const j=c.newAttributes,O=c.enabledAttributes,z=c.attributeDivisors;j[N]=1,O[N]===0&&(i.enableVertexAttribArray(N),O[N]=1),z[N]!==ee&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,ee),z[N]=ee)}function I(){const N=c.newAttributes,ee=c.enabledAttributes;for(let j=0,O=ee.length;j<O;j++)ee[j]!==N[j]&&(i.disableVertexAttribArray(j),ee[j]=0)}function H(N,ee,j,O,z,U){n.isWebGL2===!0&&(j===5124||j===5125)?i.vertexAttribIPointer(N,ee,j,z,U):i.vertexAttribPointer(N,ee,j,O,z,U)}function b(N,ee,j,O){if(n.isWebGL2===!1&&(N.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const z=O.attributes,U=j.getAttributes(),$=ee.defaultAttributeValues;for(const ce in U){const se=U[ce];if(se.location>=0){let le=z[ce];if(le===void 0&&(ce==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),ce==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),le!==void 0){const be=le.normalized,we=le.itemSize,K=t.get(le);if(K===void 0)continue;const Pe=K.buffer,Ee=K.type,De=K.bytesPerElement;if(le.isInterleavedBufferAttribute){const fe=le.data,Ne=fe.stride,te=le.offset;if(fe.isInstancedInterleavedBuffer){for(let y=0;y<se.locationSize;y++)E(se.location+y,fe.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let y=0;y<se.locationSize;y++)T(se.location+y);i.bindBuffer(34962,Pe);for(let y=0;y<se.locationSize;y++)H(se.location+y,we/se.locationSize,Ee,be,Ne*De,(te+we/se.locationSize*y)*De)}else{if(le.isInstancedBufferAttribute){for(let fe=0;fe<se.locationSize;fe++)E(se.location+fe,le.meshPerAttribute);N.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<se.locationSize;fe++)T(se.location+fe);i.bindBuffer(34962,Pe);for(let fe=0;fe<se.locationSize;fe++)H(se.location+fe,we/se.locationSize,Ee,be,we*De,we/se.locationSize*fe*De)}}else if($!==void 0){const be=$[ce];if(be!==void 0)switch(be.length){case 2:i.vertexAttrib2fv(se.location,be);break;case 3:i.vertexAttrib3fv(se.location,be);break;case 4:i.vertexAttrib4fv(se.location,be);break;default:i.vertexAttrib1fv(se.location,be)}}}}I()}function R(){he();for(const N in a){const ee=a[N];for(const j in ee){const O=ee[j];for(const z in O)g(O[z].object),delete O[z];delete ee[j]}delete a[N]}}function k(N){if(a[N.id]===void 0)return;const ee=a[N.id];for(const j in ee){const O=ee[j];for(const z in O)g(O[z].object),delete O[z];delete ee[j]}delete a[N.id]}function B(N){for(const ee in a){const j=a[ee];if(j[N.id]===void 0)continue;const O=j[N.id];for(const z in O)g(O[z].object),delete O[z];delete j[N.id]}}function he(){ae(),u=!0,c!==l&&(c=l,d(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:he,resetDefaultState:ae,dispose:R,releaseStatesOfGeometry:k,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:T,disableUnusedAttributes:I}}function o_(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function a_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(H){if(H==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";H="mediump"}return H==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),v=i.getParameter(36348),S=i.getParameter(36349),C=f>0,T=o||e.has("OES_texture_float"),E=C&&T,I=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:C,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:I}}function l_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Sn,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||r;return r=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,v=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,C=S*4;let T=v.clippingState||null;l.value=T,T=u(g,f,C,d);for(let E=0;E!==C;++E)T[E]=t[E];v.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=d+m*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<v)&&(p=new Float32Array(v));for(let C=0,T=d;C!==m;++C,T+=4)o.copy(h[C]).applyMatrix4(S,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function c_(i){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=or:a===Ka&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===$a||a===Ka)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cf(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Hl extends Bl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Hl.prototype.isOrthographicCamera=!0;const $i=4,Su=[.125,.215,.35,.446,.526,.582],ui=20,Ma=new Hl,Eu=new Se;let wa=null;const ai=(1+Math.sqrt(5))/2,Hi=1/ai,Tu=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,ai,Hi),new A(0,ai,-Hi),new A(Hi,0,ai),new A(-Hi,0,ai),new A(ai,Hi,0),new A(-ai,Hi,0)];class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){wa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa),e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:ts,format:Kt,encoding:Jn,depthBuffer:!1},r=Cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u_(s)),this._blurMaterial=h_(s,e,t)}return r}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,r){const a=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Eu),u.toneMapping=An,u.autoClear=!1;const d=new cs({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new ct(new wi,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Eu),m=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):S===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const C=this._cubeSize;Us(r,S*C,v>2?C:0,C,C),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===or||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tu[(r-1)%Tu.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ct(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ui-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):ui;p>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ui}`);const v=[];let S=0;for(let H=0;H<ui;++H){const b=H/m,R=Math.exp(-b*b/2);v.push(R),H===0?S+=R:H<p&&(S+=2*R)}for(let H=0;H<v.length;H++)v[H]=v[H]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-n;const T=this._sizeLods[r],E=3*T*(r>C-$i?r-C+$i:0),I=4*(this._cubeSize-T);Us(t,E,I,3*T,2*T),l.setRenderTarget(t),l.render(h,Ma)}}function u_(i){const e=[],t=[],n=[];let r=i;const s=i-$i+1+Su.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-$i?l=Su[o-i+$i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,v=1,S=new Float32Array(m*g*d),C=new Float32Array(p*g*d),T=new Float32Array(v*g*d);for(let I=0;I<d;I++){const H=I%3*2/3-1,b=I>2?0:-1,R=[H,b,0,H+2/3,b,0,H+2/3,b+1,0,H,b,0,H+2/3,b+1,0,H,b+1,0];S.set(R,m*g*I),C.set(f,p*g*I);const k=[I,I,I,I,I,I];T.set(k,v*g*I)}const E=new Qe;E.setAttribute("position",new at(S,m)),E.setAttribute("uv",new at(C,p)),E.setAttribute("faceIndex",new at(T,v)),e.push(E),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cu(i,e,t){const n=new Bt(i,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Us(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function h_(i,e,t){const n=new Float32Array(ui),r=new A(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ru(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Lu(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$a||l===Ka,u=l===or||l===ar;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Au(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Au(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function d_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function p_(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const S=d.array;m=d.version;for(let C=0,T=S.length;C<T;C+=3){const E=S[C+0],I=S[C+1],H=S[C+2];f.push(E,I,I,H,H,E)}}else{const S=g.array;m=g.version;for(let C=0,T=S.length/3-1;C<T;C+=3){const E=C+0,I=C+1,H=C+2;f.push(E,I,I,H,H,E)}}const p=new(Sf(f)?Af:Tf)(f,1);p.version=m;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function m_(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function g_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function v_(i,e){return i[0]-e[0]}function x_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Sa(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function __(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new $e,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==p){let j=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",j)};var g=j;v!==void 0&&v.texture.dispose();const T=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,H=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let k=0;T===!0&&(k=1),E===!0&&(k=2),I===!0&&(k=3);let B=u.attributes.position.count*k,he=1;B>e.maxTextureSize&&(he=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const ae=new Float32Array(B*he*4*p),N=new Lo(ae,B,he,p);N.type=hi,N.needsUpdate=!0;const ee=k*4;for(let O=0;O<p;O++){const z=H[O],U=b[O],$=R[O],ce=B*he*4*O;for(let se=0;se<z.count;se++){const le=se*ee;T===!0&&(o.fromBufferAttribute(z,se),z.normalized===!0&&Sa(o,z),ae[ce+le+0]=o.x,ae[ce+le+1]=o.y,ae[ce+le+2]=o.z,ae[ce+le+3]=0),E===!0&&(o.fromBufferAttribute(U,se),U.normalized===!0&&Sa(o,U),ae[ce+le+4]=o.x,ae[ce+le+5]=o.y,ae[ce+le+6]=o.z,ae[ce+le+7]=0),I===!0&&(o.fromBufferAttribute($,se),$.normalized===!0&&Sa(o,$),ae[ce+le+8]=o.x,ae[ce+le+9]=o.y,ae[ce+le+10]=o.z,ae[ce+le+11]=$.itemSize===4?o.w:1)}}v={count:p,texture:N,size:new ue(B,he)},s.set(u,v),u.addEventListener("dispose",j)}let S=0;for(let T=0;T<d.length;T++)S+=d[T];const C=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let E=0;E<m;E++)p[E]=[E,0];n[u.id]=p}for(let E=0;E<m;E++){const I=p[E];I[0]=E,I[1]=d[E]}p.sort(x_);for(let E=0;E<8;E++)E<m&&p[E][1]?(a[E][0]=p[E][0],a[E][1]=p[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(v_);const v=u.morphAttributes.position,S=u.morphAttributes.normal;let C=0;for(let E=0;E<8;E++){const I=a[E],H=I[0],b=I[1];H!==Number.MAX_SAFE_INTEGER&&b?(v&&u.getAttribute("morphTarget"+E)!==v[H]&&u.setAttribute("morphTarget"+E,v[H]),S&&u.getAttribute("morphNormal"+E)!==S[H]&&u.setAttribute("morphNormal"+E,S[H]),r[E]=b,C+=b):(v&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),S&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const T=u.morphTargetsRelative?1:1-C;f.getUniforms().setValue(i,"morphTargetBaseInfluence",T),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function y_(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Lf=new pt,Pf=new Lo,Df=new Nl,If=new Po,Pu=[],Du=[],Iu=new Float32Array(16),Fu=new Float32Array(9),Nu=new Float32Array(4);function vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Pu[r];if(s===void 0&&(s=new Float32Array(r),Pu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Io(i,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function b_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function E_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Rt(t,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),Lt(t,n)}}function T_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Rt(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),Lt(t,n)}}function A_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Rt(t,n))return;Iu.set(n),i.uniformMatrix4fv(this.addr,!1,Iu),Lt(t,n)}}function C_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function R_(i,e){const t=this.cache;Rt(t,e)||(i.uniform2iv(this.addr,e),Lt(t,e))}function L_(i,e){const t=this.cache;Rt(t,e)||(i.uniform3iv(this.addr,e),Lt(t,e))}function P_(i,e){const t=this.cache;Rt(t,e)||(i.uniform4iv(this.addr,e),Lt(t,e))}function D_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function I_(i,e){const t=this.cache;Rt(t,e)||(i.uniform2uiv(this.addr,e),Lt(t,e))}function F_(i,e){const t=this.cache;Rt(t,e)||(i.uniform3uiv(this.addr,e),Lt(t,e))}function N_(i,e){const t=this.cache;Rt(t,e)||(i.uniform4uiv(this.addr,e),Lt(t,e))}function O_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Lf,r)}function z_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Df,r)}function B_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||If,r)}function U_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pf,r)}function H_(i){switch(i){case 5126:return b_;case 35664:return M_;case 35665:return w_;case 35666:return S_;case 35674:return E_;case 35675:return T_;case 35676:return A_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return L_;case 35669:case 35673:return P_;case 5125:return D_;case 36294:return I_;case 36295:return F_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return U_}}function k_(i,e){i.uniform1fv(this.addr,e)}function G_(i,e){const t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function V_(i,e){const t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function W_(i,e){const t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function j_(i,e){const t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q_(i,e){const t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X_(i,e){const t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y_(i,e){i.uniform1iv(this.addr,e)}function Z_(i,e){i.uniform2iv(this.addr,e)}function J_(i,e){i.uniform3iv(this.addr,e)}function $_(i,e){i.uniform4iv(this.addr,e)}function K_(i,e){i.uniform1uiv(this.addr,e)}function Q_(i,e){i.uniform2uiv(this.addr,e)}function ey(i,e){i.uniform3uiv(this.addr,e)}function ty(i,e){i.uniform4uiv(this.addr,e)}function ny(i,e,t){const n=e.length,r=Io(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Lf,r[s])}function iy(i,e,t){const n=e.length,r=Io(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Df,r[s])}function ry(i,e,t){const n=e.length,r=Io(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||If,r[s])}function sy(i,e,t){const n=e.length,r=Io(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Pf,r[s])}function oy(i){switch(i){case 5126:return k_;case 35664:return G_;case 35665:return V_;case 35666:return W_;case 35674:return j_;case 35675:return q_;case 35676:return X_;case 5124:case 35670:return Y_;case 35667:case 35671:return Z_;case 35668:case 35672:return J_;case 35669:case 35673:return $_;case 5125:return K_;case 36294:return Q_;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return sy}}function ay(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=H_(e.type)}function ly(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=oy(e.type)}function Ff(i){this.id=i,this.seq=[],this.map={}}Ff.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,e[o.id],t)}};const Ea=/(\w+)(\])?(\[|\.)?/g;function Ou(i,e){i.seq.push(e),i.map[e.id]=e}function cy(i,e,t){const n=i.name,r=n.length;for(Ea.lastIndex=0;;){const s=Ea.exec(n),o=Ea.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ou(t,c===void 0?new ay(a,i,e):new ly(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ff(a),Ou(t,h)),t=h}}}function qn(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);cy(r,s,this)}}qn.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};qn.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};qn.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};qn.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function zu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let uy=0;function hy(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++)n.push(o+1+": "+t[o]);return n.join(`
`)}function fy(i){switch(i){case Jn:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Bu(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[0]);return t.toUpperCase()+`

`+r+`

`+hy(i.getShaderSource(e),o)}else return r}function dy(i,e){const t=fy(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function py(i,e){let t;switch(e){case _g:t="Linear";break;case yg:t="Reinhard";break;case bg:t="OptimizedCineon";break;case Mg:t="ACESFilmic";break;case wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function my(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function gy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vy(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Or(i){return i!==""}function Uu(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(xy,_y)}function _y(i,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return nl(t)}const yy=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(i){return i.replace(by,Nf).replace(yy,My)}function My(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Nf(i,e,t,n)}function Nf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$m?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nr&&(e="SHADOWMAP_TYPE_VSM"),e}function Sy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ey(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Ty(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ao:e="ENVMAP_BLENDING_MULTIPLY";break;case vg:e="ENVMAP_BLENDING_MIX";break;case xg:e="ENVMAP_BLENDING_ADD";break}return e}function Ay(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cy(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wy(t),c=Sy(t),u=Ey(t),h=Ty(t),f=Ay(t),d=t.isWebGL2?"":my(t),g=gy(s),m=r.createProgram();let p,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Or).join(`
`),p.length>0&&(p+=`
`),v=[d,g].filter(Or).join(`
`),v.length>0&&(v+=`
`)):(p=[Gu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),v=[d,Gu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Ue.tonemapping_pars_fragment:"",t.toneMapping!==An?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,dy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=nl(o),o=Uu(o,t),o=Hu(o,t),a=nl(a),a=Uu(a,t),a=Hu(a,t),o=ku(o),a=ku(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=S+p+o,T=S+v+a,E=zu(r,35633,C),I=zu(r,35632,T);if(r.attachShader(m,E),r.attachShader(m,I),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const R=r.getProgramInfoLog(m).trim(),k=r.getShaderInfoLog(E).trim(),B=r.getShaderInfoLog(I).trim();let he=!0,ae=!0;if(r.getProgramParameter(m,35714)===!1){he=!1;const N=Bu(r,E,"vertex"),ee=Bu(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+R+`
`+N+`
`+ee)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(k===""||B==="")&&(ae=!1);ae&&(this.diagnostics={runnable:he,programLog:R,vertexShader:{log:k,prefix:p},fragmentShader:{log:B,prefix:v}})}r.deleteShader(E),r.deleteShader(I);let H;this.getUniforms=function(){return H===void 0&&(H=new qn(r,m)),H};let b;return this.getAttributes=function(){return b===void 0&&(b=vy(r,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=uy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=I,this}let Ry=0;class Ly{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Py(e);t.set(e,n)}return t.get(e)}}class Py{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}}function Dy(i,e,t,n,r,s,o){const a=new Ol,l=new Ly,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,R,k,B,he){const ae=B.fog,N=he.geometry,ee=b.isMeshStandardMaterial?B.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||ee),O=!!j&&j.mapping===Co?j.image.height:null,z=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const U=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,$=U!==void 0?U.length:0;let ce=0;N.morphAttributes.position!==void 0&&(ce=1),N.morphAttributes.normal!==void 0&&(ce=2),N.morphAttributes.color!==void 0&&(ce=3);let se,le,be,we;if(z){const fe=dn[z];se=fe.vertexShader,le=fe.fragmentShader}else se=b.vertexShader,le=b.fragmentShader,l.update(b),be=l.getVertexShaderID(b),we=l.getFragmentShaderID(b);const K=i.getRenderTarget(),Pe=b.alphaTest>0,Ee=b.clearcoat>0;return{isWebGL2:u,shaderID:z,shaderName:b.type,vertexShader:se,fragmentShader:le,defines:b.defines,customVertexShaderID:be,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:he.isInstancedMesh===!0,instancingColor:he.isInstancedMesh===!0&&he.instanceColor!==null,supportsVertexTextures:f,outputEncoding:K===null?i.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:Jn,map:!!b.map,matcap:!!b.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:O,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===qg,tangentSpaceNormalMap:b.normalMapType===mr,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===et,clearcoat:Ee,clearcoatMap:Ee&&!!b.clearcoatMap,clearcoatRoughnessMap:Ee&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!b.clearcoatNormalMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===nr,alphaMap:!!b.alphaMap,alphaTest:Pe,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!N.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!ae,useFog:b.fog===!0,fogExp2:ae&&ae.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:he.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ce,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:An,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vi,flipSided:b.side===zt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)R.push(k),R.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(v(R,b),S(R,b),R.push(i.outputEncoding)),R.push(b.customProgramCacheKey),R.join()}function v(b,R){b.push(R.precision),b.push(R.outputEncoding),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.combine),b.push(R.vertexUvs),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function S(b,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.map&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.lightMap&&a.enable(7),R.aoMap&&a.enable(8),R.emissiveMap&&a.enable(9),R.bumpMap&&a.enable(10),R.normalMap&&a.enable(11),R.objectSpaceNormalMap&&a.enable(12),R.tangentSpaceNormalMap&&a.enable(13),R.clearcoat&&a.enable(14),R.clearcoatMap&&a.enable(15),R.clearcoatRoughnessMap&&a.enable(16),R.clearcoatNormalMap&&a.enable(17),R.displacementMap&&a.enable(18),R.specularMap&&a.enable(19),R.roughnessMap&&a.enable(20),R.metalnessMap&&a.enable(21),R.gradientMap&&a.enable(22),R.alphaMap&&a.enable(23),R.alphaTest&&a.enable(24),R.vertexColors&&a.enable(25),R.vertexAlphas&&a.enable(26),R.vertexUvs&&a.enable(27),R.vertexTangents&&a.enable(28),R.uvsVertexOnly&&a.enable(29),R.fog&&a.enable(30),b.push(a.mask),a.disableAll(),R.useFog&&a.enable(0),R.flatShading&&a.enable(1),R.logarithmicDepthBuffer&&a.enable(2),R.skinning&&a.enable(3),R.morphTargets&&a.enable(4),R.morphNormals&&a.enable(5),R.morphColors&&a.enable(6),R.premultipliedAlpha&&a.enable(7),R.shadowMapEnabled&&a.enable(8),R.physicallyCorrectLights&&a.enable(9),R.doubleSided&&a.enable(10),R.flipSided&&a.enable(11),R.useDepthPacking&&a.enable(12),R.dithering&&a.enable(13),R.specularIntensityMap&&a.enable(14),R.specularColorMap&&a.enable(15),R.transmission&&a.enable(16),R.transmissionMap&&a.enable(17),R.thicknessMap&&a.enable(18),R.sheen&&a.enable(19),R.sheenColorMap&&a.enable(20),R.sheenRoughnessMap&&a.enable(21),R.decodeVideoTexture&&a.enable(22),R.opaque&&a.enable(23),b.push(a.mask)}function C(b){const R=g[b.type];let k;if(R){const B=dn[R];k=zl.clone(B.uniforms)}else k=b.uniforms;return k}function T(b,R){let k;for(let B=0,he=c.length;B<he;B++){const ae=c[B];if(ae.cacheKey===R){k=ae,++k.usedTimes;break}}return k===void 0&&(k=new Cy(i,R,b,s),c.push(k)),k}function E(b){if(--b.usedTimes===0){const R=c.indexOf(b);c[R]=c[c.length-1],c.pop(),b.destroy()}}function I(b){l.remove(b)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:C,acquireProgram:T,releaseProgram:E,releaseShaderCache:I,programs:c,dispose:H}}function Iy(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Fy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,m,p){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},i[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=d,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=p),e++,v}function a(h,f,d,g,m,p){const v=o(h,f,d,g,m,p);d.transmission>0?n.push(v):d.transparent===!0?r.push(v):t.push(v)}function l(h,f,d,g,m,p){const v=o(h,f,d,g,m,p);d.transmission>0?n.unshift(v):d.transparent===!0?r.unshift(v):t.unshift(v)}function c(h,f){t.length>1&&t.sort(h||Fy),n.length>1&&n.sort(f||Vu),r.length>1&&r.sort(f||Vu)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ny(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new Wu,i.set(n,[s])):r>=i.get(n).length?(s=new Wu,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Oy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Se};break;case"SpotLight":t={position:new A,direction:new A,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function zy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let By=0;function Uy(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function Hy(i,e){const t=new Oy,n=zy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new A);const s=new A,o=new Ae,a=new Ae;function l(u,h){let f=0,d=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let m=0,p=0,v=0,S=0,C=0,T=0,E=0,I=0;u.sort(Uy);const H=h!==!0?Math.PI:1;for(let R=0,k=u.length;R<k;R++){const B=u[R],he=B.color,ae=B.intensity,N=B.distance,ee=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=he.r*ae*H,d+=he.g*ae*H,g+=he.b*ae*H;else if(B.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(B.sh.coefficients[j],ae);else if(B.isDirectionalLight){const j=t.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*H),B.castShadow){const O=B.shadow,z=n.get(B);z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,r.directionalShadow[m]=z,r.directionalShadowMap[m]=ee,r.directionalShadowMatrix[m]=B.shadow.matrix,T++}r.directional[m]=j,m++}else if(B.isSpotLight){const j=t.get(B);if(j.position.setFromMatrixPosition(B.matrixWorld),j.color.copy(he).multiplyScalar(ae*H),j.distance=N,j.coneCos=Math.cos(B.angle),j.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),j.decay=B.decay,B.castShadow){const O=B.shadow,z=n.get(B);z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,r.spotShadow[v]=z,r.spotShadowMap[v]=ee,r.spotShadowMatrix[v]=B.shadow.matrix,I++}r.spot[v]=j,v++}else if(B.isRectAreaLight){const j=t.get(B);j.color.copy(he).multiplyScalar(ae),j.halfWidth.set(B.width*.5,0,0),j.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=j,S++}else if(B.isPointLight){const j=t.get(B);if(j.color.copy(B.color).multiplyScalar(B.intensity*H),j.distance=B.distance,j.decay=B.decay,B.castShadow){const O=B.shadow,z=n.get(B);z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,z.shadowCameraNear=O.camera.near,z.shadowCameraFar=O.camera.far,r.pointShadow[p]=z,r.pointShadowMap[p]=ee,r.pointShadowMatrix[p]=B.shadow.matrix,E++}r.point[p]=j,p++}else if(B.isHemisphereLight){const j=t.get(B);j.skyColor.copy(B.color).multiplyScalar(ae*H),j.groundColor.copy(B.groundColor).multiplyScalar(ae*H),r.hemi[C]=j,C++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==m||b.pointLength!==p||b.spotLength!==v||b.rectAreaLength!==S||b.hemiLength!==C||b.numDirectionalShadows!==T||b.numPointShadows!==E||b.numSpotShadows!==I)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=S,r.point.length=p,r.hemi.length=C,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotShadowMatrix.length=I,b.directionalLength=m,b.pointLength=p,b.spotLength=v,b.rectAreaLength=S,b.hemiLength=C,b.numDirectionalShadows=T,b.numPointShadows=E,b.numSpotShadows=I,r.version=By++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const v=h.matrixWorldInverse;for(let S=0,C=u.length;S<C;S++){const T=u[S];if(T.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),f++}else if(T.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(v),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),g++}else if(T.isRectAreaLight){const E=r.rectArea[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(v),a.identity(),o.copy(T.matrixWorld),o.premultiply(v),a.extractRotation(o),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(v),d++}else if(T.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function ju(i,e){const t=new Hy(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ky(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new ju(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new ju(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class Gl extends ut{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Gl.prototype.isMeshDepthMaterial=!0;class Vl extends ut{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Vl.prototype.isMeshDistanceMaterial=!0;const Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Of(i,e,t){let n=new Do;const r=new ue,s=new ue,o=new $e,a=new Gl({depthPacking:jg}),l=new Vl,c={},u=t.maxTextureSize,h={0:zt,1:Kr,2:vi},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Gy,fragmentShader:Vy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ct(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xf,this.render=function(T,E,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const H=i.getRenderTarget(),b=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),k=i.state;k.setBlending(jn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let B=0,he=T.length;B<he;B++){const ae=T[B],N=ae.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ee=N.getFrameExtents();if(r.multiply(ee),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,N.mapSize.y=s.y)),N.map===null&&!N.isPointLightShadow&&this.type===Nr&&(N.map=new Bt(r.x,r.y),N.map.texture.name=ae.name+".shadowMap",N.mapPass=new Bt(r.x,r.y),N.camera.updateProjectionMatrix()),N.map===null){const O={minFilter:ft,magFilter:ft,format:Kt};N.map=new Bt(r.x,r.y,O),N.map.texture.name=ae.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const j=N.getViewportCount();for(let O=0;O<j;O++){const z=N.getViewport(O);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),k.viewport(o),N.updateMatrices(ae,O),n=N.getFrustum(),C(E,I,N.camera,ae,this.type)}!N.isPointLightShadow&&this.type===Nr&&v(N,I),N.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(H,b,R)};function v(T,E){const I=e.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,I,f,m,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,I,d,m,null)}function S(T,E,I,H,b,R){let k=null;const B=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(B!==void 0?k=B:k=I.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const he=k.uuid,ae=E.uuid;let N=c[he];N===void 0&&(N={},c[he]=N);let ee=N[ae];ee===void 0&&(ee=k.clone(),N[ae]=ee),k=ee}return k.visible=E.visible,k.wireframe=E.wireframe,R===Nr?k.side=E.shadowSide!==null?E.shadowSide:E.side:k.side=E.shadowSide!==null?E.shadowSide:h[E.side],k.alphaMap=E.alphaMap,k.alphaTest=E.alphaTest,k.clipShadows=E.clipShadows,k.clippingPlanes=E.clippingPlanes,k.clipIntersection=E.clipIntersection,k.displacementMap=E.displacementMap,k.displacementScale=E.displacementScale,k.displacementBias=E.displacementBias,k.wireframeLinewidth=E.wireframeLinewidth,k.linewidth=E.linewidth,I.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(I.matrixWorld),k.nearDistance=H,k.farDistance=b),k}function C(T,E,I,H,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Nr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const B=e.update(T),he=T.material;if(Array.isArray(he)){const ae=B.groups;for(let N=0,ee=ae.length;N<ee;N++){const j=ae[N],O=he[j.materialIndex];if(O&&O.visible){const z=S(T,O,H,I.near,I.far,b);i.renderBufferDirect(I,null,B,z,T,j)}}}else if(he.visible){const ae=S(T,he,H,I.near,I.far,b);i.renderBufferDirect(I,null,B,ae,T,null)}}const k=T.children;for(let B=0,he=k.length;B<he;B++)C(k[B],E,I,H,b)}}function Wy(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const pe=new $e;let me=null;const Me=new $e(0,0,0,0);return{setMask:function(xe){me!==xe&&!L&&(i.colorMask(xe,xe,xe,xe),me=xe)},setLocked:function(xe){L=xe},setClear:function(xe,Ce,de,Re,qe){qe===!0&&(xe*=Re,Ce*=Re,de*=Re),pe.set(xe,Ce,de,Re),Me.equals(pe)===!1&&(i.clearColor(xe,Ce,de,Re),Me.copy(pe))},reset:function(){L=!1,me=null,Me.set(-1,0,0,0)}}}function s(){let L=!1,pe=null,me=null,Me=null;return{setTest:function(xe){xe?we(2929):K(2929)},setMask:function(xe){pe!==xe&&!L&&(i.depthMask(xe),pe=xe)},setFunc:function(xe){if(me!==xe){if(xe)switch(xe){case ug:i.depthFunc(512);break;case hg:i.depthFunc(519);break;case fg:i.depthFunc(513);break;case Ja:i.depthFunc(515);break;case dg:i.depthFunc(514);break;case pg:i.depthFunc(518);break;case mg:i.depthFunc(516);break;case gg:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);me=xe}},setLocked:function(xe){L=xe},setClear:function(xe){Me!==xe&&(i.clearDepth(xe),Me=xe)},reset:function(){L=!1,pe=null,me=null,Me=null}}}function o(){let L=!1,pe=null,me=null,Me=null,xe=null,Ce=null,de=null,Re=null,qe=null;return{setTest:function(He){L||(He?we(2960):K(2960))},setMask:function(He){pe!==He&&!L&&(i.stencilMask(He),pe=He)},setFunc:function(He,nn,rn){(me!==He||Me!==nn||xe!==rn)&&(i.stencilFunc(He,nn,rn),me=He,Me=nn,xe=rn)},setOp:function(He,nn,rn){(Ce!==He||de!==nn||Re!==rn)&&(i.stencilOp(He,nn,rn),Ce=He,de=nn,Re=rn)},setLocked:function(He){L=He},setClear:function(He){qe!==He&&(i.clearStencil(He),qe=He)},reset:function(){L=!1,pe=null,me=null,Me=null,xe=null,Ce=null,de=null,Re=null,qe=null}}}const a=new r,l=new s,c=new o;let u={},h={},f=new WeakMap,d=[],g=null,m=!1,p=null,v=null,S=null,C=null,T=null,E=null,I=null,H=!1,b=null,R=null,k=null,B=null,he=null;const ae=i.getParameter(35661);let N=!1,ee=0;const j=i.getParameter(7938);j.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(j)[1]),N=ee>=1):j.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),N=ee>=2);let O=null,z={};const U=i.getParameter(3088),$=i.getParameter(2978),ce=new $e().fromArray(U),se=new $e().fromArray($);function le(L,pe,me){const Me=new Uint8Array(4),xe=i.createTexture();i.bindTexture(L,xe),i.texParameteri(L,10241,9728),i.texParameteri(L,10240,9728);for(let Ce=0;Ce<me;Ce++)i.texImage2D(pe+Ce,0,6408,1,1,0,6408,5121,Me);return xe}const be={};be[3553]=le(3553,3553,1),be[34067]=le(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(2929),l.setFunc(Ja),w(!1),D(Nc),we(2884),te(jn);function we(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function K(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Pe(L,pe){return h[L]!==pe?(i.bindFramebuffer(L,pe),h[L]=pe,n&&(L===36009&&(h[36160]=pe),L===36160&&(h[36009]=pe)),!0):!1}function Ee(L,pe){let me=d,Me=!1;if(L)if(me=f.get(pe),me===void 0&&(me=[],f.set(pe,me)),L.isWebGLMultipleRenderTargets){const xe=L.texture;if(me.length!==xe.length||me[0]!==36064){for(let Ce=0,de=xe.length;Ce<de;Ce++)me[Ce]=36064+Ce;me.length=xe.length,Me=!0}}else me[0]!==36064&&(me[0]=36064,Me=!0);else me[0]!==1029&&(me[0]=1029,Me=!0);Me&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function De(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const fe={[Xi]:32774,[Qm]:32778,[eg]:32779};if(n)fe[Uc]=32775,fe[Hc]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(fe[Uc]=L.MIN_EXT,fe[Hc]=L.MAX_EXT)}const Ne={[tg]:0,[ng]:1,[ig]:768,[yf]:770,[cg]:776,[ag]:774,[sg]:772,[rg]:769,[bf]:771,[lg]:775,[og]:773};function te(L,pe,me,Me,xe,Ce,de,Re){if(L===jn){m===!0&&(K(3042),m=!1);return}if(m===!1&&(we(3042),m=!0),L!==Km){if(L!==p||Re!==H){if((v!==Xi||T!==Xi)&&(i.blendEquation(32774),v=Xi,T=Xi),Re)switch(L){case nr:i.blendFuncSeparate(1,771,1,771);break;case Oc:i.blendFunc(1,1);break;case zc:i.blendFuncSeparate(0,769,0,1);break;case Bc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case nr:i.blendFuncSeparate(770,771,1,771);break;case Oc:i.blendFunc(770,1);break;case zc:i.blendFuncSeparate(0,769,0,1);break;case Bc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,C=null,E=null,I=null,p=L,H=Re}return}xe=xe||pe,Ce=Ce||me,de=de||Me,(pe!==v||xe!==T)&&(i.blendEquationSeparate(fe[pe],fe[xe]),v=pe,T=xe),(me!==S||Me!==C||Ce!==E||de!==I)&&(i.blendFuncSeparate(Ne[me],Ne[Me],Ne[Ce],Ne[de]),S=me,C=Me,E=Ce,I=de),p=L,H=null}function y(L,pe){L.side===vi?K(2884):we(2884);let me=L.side===zt;pe&&(me=!me),w(me),L.blending===nr&&L.transparent===!1?te(jn):te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Me=L.stencilWrite;c.setTest(Me),Me&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),q(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?we(32926):K(32926)}function w(L){b!==L&&(L?i.frontFace(2304):i.frontFace(2305),b=L)}function D(L){L!==Zm?(we(2884),L!==R&&(L===Nc?i.cullFace(1029):L===Jm?i.cullFace(1028):i.cullFace(1032))):K(2884),R=L}function F(L){L!==k&&(N&&i.lineWidth(L),k=L)}function q(L,pe,me){L?(we(32823),(B!==pe||he!==me)&&(i.polygonOffset(pe,me),B=pe,he=me)):K(32823)}function Y(L){L?we(3089):K(3089)}function J(L){L===void 0&&(L=33984+ae-1),O!==L&&(i.activeTexture(L),O=L)}function ne(L,pe){O===null&&J();let me=z[O];me===void 0&&(me={type:void 0,texture:void 0},z[O]=me),(me.type!==L||me.texture!==pe)&&(i.bindTexture(L,pe||be[L]),me.type=L,me.texture=pe)}function re(){const L=z[O];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function x(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){ce.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function Te(L){se.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),se.copy(L))}function ye(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},O=null,z={},h={},f=new WeakMap,d=[],g=null,m=!1,p=null,v=null,S=null,C=null,T=null,E=null,I=null,H=!1,b=null,R=null,k=null,B=null,he=null,ce.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:we,disable:K,bindFramebuffer:Pe,drawBuffers:Ee,useProgram:De,setBlending:te,setMaterial:y,setFlipSided:w,setCullFace:D,setLineWidth:F,setPolygonOffset:q,setScissorTest:Y,activeTexture:J,bindTexture:ne,unbindTexture:re,compressedTexImage2D:_,texImage2D:ge,texImage3D:W,texStorage2D:Q,texStorage3D:oe,texSubImage2D:x,texSubImage3D:P,compressedTexSubImage2D:V,scissor:_e,viewport:Te,reset:ye}}function jy(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(_,x){return v?new OffscreenCanvas(_,x):rs("canvas")}function C(_,x,P,V){let Q=1;if((_.width>V||_.height>V)&&(Q=V/Math.max(_.width,_.height)),Q<1||x===!0)if(typeof HTMLImageElement!="undefined"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&_ instanceof ImageBitmap){const oe=x?po:Math.floor,ge=oe(Q*_.width),W=oe(Q*_.height);m===void 0&&(m=S(ge,W));const _e=P?S(ge,W):m;return _e.width=ge,_e.height=W,_e.getContext("2d").drawImage(_,0,0,ge,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_.width+"x"+_.height+") to ("+ge+"x"+W+")."),_e}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_.width+"x"+_.height+")."),_;return _}function T(_){return tl(_.width)&&tl(_.height)}function E(_){return a?!1:_.wrapS!==Jt||_.wrapT!==Jt||_.minFilter!==ft&&_.minFilter!==Dt}function I(_,x){return _.generateMipmaps&&x&&_.minFilter!==ft&&_.minFilter!==Dt}function H(_){i.generateMipmap(_)}function b(_,x,P,V,Q=!1){if(a===!1)return x;if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let oe=x;return x===6403&&(P===5126&&(oe=33326),P===5131&&(oe=33325),P===5121&&(oe=33321)),x===33319&&(P===5126&&(oe=33328),P===5131&&(oe=33327),P===5121&&(oe=33323)),x===6408&&(P===5126&&(oe=34836),P===5131&&(oe=34842),P===5121&&(oe=V===et&&Q===!1?35907:32856),P===32819&&(oe=32854),P===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function R(_,x,P){return I(_,P)===!0||_.isFramebufferTexture&&_.minFilter!==ft&&_.minFilter!==Dt?Math.log2(Math.max(x.width,x.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?x.mipmaps.length:1}function k(_){return _===ft||_===kc||_===Gc?9728:9729}function B(_){const x=_.target;x.removeEventListener("dispose",B),ae(x),x.isVideoTexture&&g.delete(x)}function he(_){const x=_.target;x.removeEventListener("dispose",he),ee(x)}function ae(_){const x=n.get(_);if(x.__webglInit===void 0)return;const P=_.source,V=p.get(P);if(V){const Q=V[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(_),Object.keys(V).length===0&&p.delete(P)}n.remove(_)}function N(_){const x=n.get(_);i.deleteTexture(x.__webglTexture);const P=_.source,V=p.get(P);delete V[x.__cacheKey],o.memory.textures--}function ee(_){const x=_.texture,P=n.get(_),V=n.get(x);if(V.__webglTexture!==void 0&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),_.depthTexture&&_.depthTexture.dispose(),_.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)i.deleteFramebuffer(P.__webglFramebuffer[Q]),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[Q]);else i.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer&&i.deleteRenderbuffer(P.__webglColorRenderbuffer),P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer);if(_.isWebGLMultipleRenderTargets)for(let Q=0,oe=x.length;Q<oe;Q++){const ge=n.get(x[Q]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(x[Q])}n.remove(x),n.remove(_)}let j=0;function O(){j=0}function z(){const _=j;return _>=l&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+l),j+=1,_}function U(_){const x=[];return x.push(_.wrapS),x.push(_.wrapT),x.push(_.magFilter),x.push(_.minFilter),x.push(_.anisotropy),x.push(_.internalFormat),x.push(_.format),x.push(_.type),x.push(_.generateMipmaps),x.push(_.premultiplyAlpha),x.push(_.flipY),x.push(_.unpackAlignment),x.push(_.encoding),x.join()}function $(_,x){const P=n.get(_);if(_.isVideoTexture&&ne(_),_.isRenderTargetTexture===!1&&_.version>0&&P.__version!==_.version){const V=_.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(P,_,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,P.__webglTexture)}function ce(_,x){const P=n.get(_);if(_.version>0&&P.__version!==_.version){Ee(P,_,x);return}t.activeTexture(33984+x),t.bindTexture(35866,P.__webglTexture)}function se(_,x){const P=n.get(_);if(_.version>0&&P.__version!==_.version){Ee(P,_,x);return}t.activeTexture(33984+x),t.bindTexture(32879,P.__webglTexture)}function le(_,x){const P=n.get(_);if(_.version>0&&P.__version!==_.version){De(P,_,x);return}t.activeTexture(33984+x),t.bindTexture(34067,P.__webglTexture)}const be={[Qr]:10497,[Jt]:33071,[Qa]:33648},we={[ft]:9728,[kc]:9984,[Gc]:9986,[Dt]:9729,[Sg]:9985,[Ro]:9987};function K(_,x,P){if(P?(i.texParameteri(_,10242,be[x.wrapS]),i.texParameteri(_,10243,be[x.wrapT]),(_===32879||_===35866)&&i.texParameteri(_,32882,be[x.wrapR]),i.texParameteri(_,10240,we[x.magFilter]),i.texParameteri(_,10241,we[x.minFilter])):(i.texParameteri(_,10242,33071),i.texParameteri(_,10243,33071),(_===32879||_===35866)&&i.texParameteri(_,32882,33071),(x.wrapS!==Jt||x.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(_,10240,k(x.magFilter)),i.texParameteri(_,10241,k(x.minFilter)),x.minFilter!==ft&&x.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");if(x.type===hi&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(_,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Pe(_,x){let P=!1;_.__webglInit===void 0&&(_.__webglInit=!0,x.addEventListener("dispose",B));const V=x.source;let Q=p.get(V);Q===void 0&&(Q={},p.set(V,Q));const oe=U(x);if(oe!==_.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Q[oe].usedTimes++;const ge=Q[_.__cacheKey];ge!==void 0&&(Q[_.__cacheKey].usedTimes--,ge.usedTimes===0&&N(x)),_.__cacheKey=oe,_.__webglTexture=Q[oe].texture}return P}function Ee(_,x,P){let V=3553;x.isDataArrayTexture&&(V=35866),x.isData3DTexture&&(V=32879);const Q=Pe(_,x),oe=x.source;if(t.activeTexture(33984+P),t.bindTexture(V,_.__webglTexture),oe.version!==oe.__currentVersion||Q===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const ge=E(x)&&T(x.image)===!1;let W=C(x.image,ge,!1,u);W=re(x,W);const _e=T(W)||a,Te=s.convert(x.format,x.encoding);let ye=s.convert(x.type),L=b(x.internalFormat,Te,ye,x.encoding,x.isVideoTexture);K(V,x,_e);let pe;const me=x.mipmaps,Me=a&&x.isVideoTexture!==!0,xe=_.__version===void 0||Q===!0,Ce=R(x,W,_e);if(x.isDepthTexture)L=6402,a?x.type===hi?L=36012:x.type===to?L=33190:x.type===ir?L=35056:L=33189:x.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===mi&&L===6402&&x.type!==es&&x.type!==to&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=es,ye=s.convert(x.type)),x.format===lr&&L===6402&&(L=34041,x.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ir,ye=s.convert(x.type))),xe&&(Me?t.texStorage2D(3553,1,L,W.width,W.height):t.texImage2D(3553,0,L,W.width,W.height,0,Te,ye,null));else if(x.isDataTexture)if(me.length>0&&_e){Me&&xe&&t.texStorage2D(3553,Ce,L,me[0].width,me[0].height);for(let de=0,Re=me.length;de<Re;de++)pe=me[de],Me?t.texSubImage2D(3553,de,0,0,pe.width,pe.height,Te,ye,pe.data):t.texImage2D(3553,de,L,pe.width,pe.height,0,Te,ye,pe.data);x.generateMipmaps=!1}else Me?(xe&&t.texStorage2D(3553,Ce,L,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,Te,ye,W.data)):t.texImage2D(3553,0,L,W.width,W.height,0,Te,ye,W.data);else if(x.isCompressedTexture){Me&&xe&&t.texStorage2D(3553,Ce,L,me[0].width,me[0].height);for(let de=0,Re=me.length;de<Re;de++)pe=me[de],x.format!==Kt?Te!==null?Me?t.compressedTexSubImage2D(3553,de,0,0,pe.width,pe.height,Te,pe.data):t.compressedTexImage2D(3553,de,L,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage2D(3553,de,0,0,pe.width,pe.height,Te,ye,pe.data):t.texImage2D(3553,de,L,pe.width,pe.height,0,Te,ye,pe.data)}else if(x.isDataArrayTexture)Me?(xe&&t.texStorage3D(35866,Ce,L,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,Te,ye,W.data)):t.texImage3D(35866,0,L,W.width,W.height,W.depth,0,Te,ye,W.data);else if(x.isData3DTexture)Me?(xe&&t.texStorage3D(32879,Ce,L,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,Te,ye,W.data)):t.texImage3D(32879,0,L,W.width,W.height,W.depth,0,Te,ye,W.data);else if(x.isFramebufferTexture){if(xe)if(Me)t.texStorage2D(3553,Ce,L,W.width,W.height);else{let de=W.width,Re=W.height;for(let qe=0;qe<Ce;qe++)t.texImage2D(3553,qe,L,de,Re,0,Te,ye,null),de>>=1,Re>>=1}}else if(me.length>0&&_e){Me&&xe&&t.texStorage2D(3553,Ce,L,me[0].width,me[0].height);for(let de=0,Re=me.length;de<Re;de++)pe=me[de],Me?t.texSubImage2D(3553,de,0,0,Te,ye,pe):t.texImage2D(3553,de,L,Te,ye,pe);x.generateMipmaps=!1}else Me?(xe&&t.texStorage2D(3553,Ce,L,W.width,W.height),t.texSubImage2D(3553,0,0,0,Te,ye,W)):t.texImage2D(3553,0,L,Te,ye,W);I(x,_e)&&H(V),oe.__currentVersion=oe.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function De(_,x,P){if(x.image.length!==6)return;const V=Pe(_,x),Q=x.source;if(t.activeTexture(33984+P),t.bindTexture(34067,_.__webglTexture),Q.version!==Q.__currentVersion||V===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,ge=x.image[0]&&x.image[0].isDataTexture,W=[];for(let de=0;de<6;de++)!oe&&!ge?W[de]=C(x.image[de],!1,!0,c):W[de]=ge?x.image[de].image:x.image[de],W[de]=re(x,W[de]);const _e=W[0],Te=T(_e)||a,ye=s.convert(x.format,x.encoding),L=s.convert(x.type),pe=b(x.internalFormat,ye,L,x.encoding),me=a&&x.isVideoTexture!==!0,Me=_.__version===void 0;let xe=R(x,_e,Te);K(34067,x,Te);let Ce;if(oe){me&&Me&&t.texStorage2D(34067,xe,pe,_e.width,_e.height);for(let de=0;de<6;de++){Ce=W[de].mipmaps;for(let Re=0;Re<Ce.length;Re++){const qe=Ce[Re];x.format!==Kt?ye!==null?me?t.compressedTexSubImage2D(34069+de,Re,0,0,qe.width,qe.height,ye,qe.data):t.compressedTexImage2D(34069+de,Re,pe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?t.texSubImage2D(34069+de,Re,0,0,qe.width,qe.height,ye,L,qe.data):t.texImage2D(34069+de,Re,pe,qe.width,qe.height,0,ye,L,qe.data)}}}else{Ce=x.mipmaps,me&&Me&&(Ce.length>0&&xe++,t.texStorage2D(34067,xe,pe,W[0].width,W[0].height));for(let de=0;de<6;de++)if(ge){me?t.texSubImage2D(34069+de,0,0,0,W[de].width,W[de].height,ye,L,W[de].data):t.texImage2D(34069+de,0,pe,W[de].width,W[de].height,0,ye,L,W[de].data);for(let Re=0;Re<Ce.length;Re++){const He=Ce[Re].image[de].image;me?t.texSubImage2D(34069+de,Re+1,0,0,He.width,He.height,ye,L,He.data):t.texImage2D(34069+de,Re+1,pe,He.width,He.height,0,ye,L,He.data)}}else{me?t.texSubImage2D(34069+de,0,0,0,ye,L,W[de]):t.texImage2D(34069+de,0,pe,ye,L,W[de]);for(let Re=0;Re<Ce.length;Re++){const qe=Ce[Re];me?t.texSubImage2D(34069+de,Re+1,0,0,ye,L,qe.image[de]):t.texImage2D(34069+de,Re+1,pe,ye,L,qe.image[de])}}}I(x,Te)&&H(34067),Q.__currentVersion=Q.version,x.onUpdate&&x.onUpdate(x)}_.__version=x.version}function fe(_,x,P,V,Q){const oe=s.convert(P.format,P.encoding),ge=s.convert(P.type),W=b(P.internalFormat,oe,ge,P.encoding);n.get(x).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,W,x.width,x.height,x.depth,0,oe,ge,null):t.texImage2D(Q,0,W,x.width,x.height,0,oe,ge,null)),t.bindFramebuffer(36160,_),J(x)?f.framebufferTexture2DMultisampleEXT(36160,V,Q,n.get(P).__webglTexture,0,Y(x)):i.framebufferTexture2D(36160,V,Q,n.get(P).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(_,x,P){if(i.bindRenderbuffer(36161,_),x.depthBuffer&&!x.stencilBuffer){let V=33189;if(P||J(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===hi?V=36012:Q.type===to&&(V=33190));const oe=Y(x);J(x)?f.renderbufferStorageMultisampleEXT(36161,oe,V,x.width,x.height):i.renderbufferStorageMultisample(36161,oe,V,x.width,x.height)}else i.renderbufferStorage(36161,V,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,_)}else if(x.depthBuffer&&x.stencilBuffer){const V=Y(x);P&&J(x)===!1?i.renderbufferStorageMultisample(36161,V,35056,x.width,x.height):J(x)?f.renderbufferStorageMultisampleEXT(36161,V,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,_)}else{const V=x.isWebGLMultipleRenderTargets===!0?x.texture[0]:x.texture,Q=s.convert(V.format,V.encoding),oe=s.convert(V.type),ge=b(V.internalFormat,Q,oe,V.encoding),W=Y(x);P&&J(x)===!1?i.renderbufferStorageMultisample(36161,W,ge,x.width,x.height):J(x)?f.renderbufferStorageMultisampleEXT(36161,W,ge,x.width,x.height):i.renderbufferStorage(36161,ge,x.width,x.height)}i.bindRenderbuffer(36161,null)}function te(_,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,_),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const V=n.get(x.depthTexture).__webglTexture,Q=Y(x);if(x.depthTexture.format===mi)J(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,V,0,Q):i.framebufferTexture2D(36160,36096,3553,V,0);else if(x.depthTexture.format===lr)J(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,V,0,Q):i.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function y(_){const x=n.get(_),P=_.isWebGLCubeRenderTarget===!0;if(_.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");te(x.__webglFramebuffer,_)}else if(P){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]=i.createRenderbuffer(),Ne(x.__webglDepthbuffer[V],_,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ne(x.__webglDepthbuffer,_,!1);t.bindFramebuffer(36160,null)}function w(_,x,P){const V=n.get(_);x!==void 0&&fe(V.__webglFramebuffer,_,_.texture,36064,3553),P!==void 0&&y(_)}function D(_){const x=_.texture,P=n.get(_),V=n.get(x);_.addEventListener("dispose",he),_.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=x.version,o.memory.textures++);const Q=_.isWebGLCubeRenderTarget===!0,oe=_.isWebGLMultipleRenderTargets===!0,ge=T(_)||a;if(Q){P.__webglFramebuffer=[];for(let W=0;W<6;W++)P.__webglFramebuffer[W]=i.createFramebuffer()}else if(P.__webglFramebuffer=i.createFramebuffer(),oe)if(r.drawBuffers){const W=_.texture;for(let _e=0,Te=W.length;_e<Te;_e++){const ye=n.get(W[_e]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&_.samples>0&&J(_)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,P.__webglColorRenderbuffer);const W=s.convert(x.format,x.encoding),_e=s.convert(x.type),Te=b(x.internalFormat,W,_e,x.encoding),ye=Y(_);i.renderbufferStorageMultisample(36161,ye,Te,_.width,_.height),t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,P.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),_.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(P.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(36160,null)}if(Q){t.bindTexture(34067,V.__webglTexture),K(34067,x,ge);for(let W=0;W<6;W++)fe(P.__webglFramebuffer[W],_,x,36064,34069+W);I(x,ge)&&H(34067),t.unbindTexture()}else if(oe){const W=_.texture;for(let _e=0,Te=W.length;_e<Te;_e++){const ye=W[_e],L=n.get(ye);t.bindTexture(3553,L.__webglTexture),K(3553,ye,ge),fe(P.__webglFramebuffer,_,ye,36064+_e,3553),I(ye,ge)&&H(3553)}t.unbindTexture()}else{let W=3553;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(a?W=_.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(W,V.__webglTexture),K(W,x,ge),fe(P.__webglFramebuffer,_,x,36064,W),I(x,ge)&&H(W),t.unbindTexture()}_.depthBuffer&&y(_)}function F(_){const x=T(_)||a,P=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let V=0,Q=P.length;V<Q;V++){const oe=P[V];if(I(oe,x)){const ge=_.isWebGLCubeRenderTarget?34067:3553,W=n.get(oe).__webglTexture;t.bindTexture(ge,W),H(ge),t.unbindTexture()}}}function q(_){if(a&&_.samples>0&&J(_)===!1){const x=_.width,P=_.height;let V=16384;const Q=[36064],oe=_.stencilBuffer?33306:36096;_.depthBuffer&&Q.push(oe);const ge=n.get(_),W=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;W===!1&&(_.depthBuffer&&(V|=256),_.stencilBuffer&&(V|=1024)),t.bindFramebuffer(36008,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ge.__webglFramebuffer),W===!0&&(i.invalidateFramebuffer(36008,[oe]),i.invalidateFramebuffer(36009,[oe])),i.blitFramebuffer(0,0,x,P,0,0,x,P,V,9728),d&&i.invalidateFramebuffer(36008,Q),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ge.__webglMultisampledFramebuffer)}}function Y(_){return Math.min(h,_.samples)}function J(_){const x=n.get(_);return a&&_.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ne(_){const x=o.render.frame;g.get(_)!==x&&(g.set(_,x),_.update())}function re(_,x){const P=_.encoding,V=_.format,Q=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||_.format===el||P!==Jn&&(P===et?a===!1?e.has("EXT_sRGB")===!0&&V===Kt?(_.format=el,_.minFilter=Dt,_.generateMipmaps=!1):x=yi.sRGBToLinear(x):(V!==Kt||Q!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),x}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=ce,this.setTexture3D=se,this.setTextureCube=le,this.rebindTextures=w,this.setupRenderTarget=D,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=J}function qy(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===xi)return 5121;if(s===Cg)return 32819;if(s===Rg)return 32820;if(s===Eg)return 5120;if(s===Tg)return 5122;if(s===es)return 5123;if(s===Ag)return 5124;if(s===to)return 5125;if(s===hi)return 5126;if(s===ts)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Lg)return 6406;if(s===Kt)return 6408;if(s===Dg)return 6409;if(s===Ig)return 6410;if(s===mi)return 6402;if(s===lr)return 34041;if(s===Fg)return 6403;if(s===Pg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===el)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ng)return 36244;if(s===Og)return 33319;if(s===zg)return 33320;if(s===Bg)return 36249;if(s===Zo||s===Jo||s===$o||s===Ko)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$o)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ko)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wc||s===jc||s===qc||s===Xc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ug)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yc||s===Zc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Yc)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Jc||s===$c||s===Kc||s===Qc||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===ou||s===au||s===lu||s===cu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Jc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$c)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===eu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===iu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ru)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===su)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ou)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===au)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===uu)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ir?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class zf extends At{constructor(e=[]){super(),this.cameras=e}}zf.prototype.isArrayCamera=!0;class zr extends Ze{constructor(){super(),this.type="Group"}}zr.prototype.isGroup=!0;const Xy={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xy))),c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const S=new zr;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[m.jointName]=S,c.add(S)}const v=c.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class Bf extends pt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:mi,u!==mi&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mi&&(n=es),n===void 0&&u===lr&&(n=ir),super(null,r,s,o,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:ft,this.minFilter=l!==void 0?l:ft,this.flipY=!1,this.generateMipmaps=!1}}Bf.prototype.isDepthTexture=!0;class Yy extends _i{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],S=new Map,C=new At;C.layers.enable(1),C.viewport=new $e;const T=new At;T.layers.enable(2),T.viewport=new $e;const E=[C,T],I=new zf;I.layers.enable(1),I.layers.enable(2);let H=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let $=v[U];return $===void 0&&($=new Ta,v[U]=$),$.getTargetRaySpace()},this.getControllerGrip=function(U){let $=v[U];return $===void 0&&($=new Ta,v[U]=$),$.getGripSpace()},this.getHand=function(U){let $=v[U];return $===void 0&&($=new Ta,v[U]=$),$.getHandSpace()};function R(U){const $=S.get(U.inputSource);$&&$.dispatchEvent({type:U.type,data:U.inputSource})}function k(){S.forEach(function(U,$){U.disconnect($)}),S.clear(),H=null,b=null,e.setRenderTarget(m),f=null,h=null,u=null,r=null,p=null,z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",k),r.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:f}),p=new Bt(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:xi,encoding:e.outputEncoding})}else{let $=null,ce=null,se=null;g.depth&&(se=g.stencil?35056:33190,$=g.stencil?lr:mi,ce=g.stencil?ir:es);const le={colorFormat:e.outputEncoding===et?35907:32856,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(le),r.updateRenderState({layers:[h]}),p=new Bt(h.textureWidth,h.textureHeight,{format:Kt,type:xi,depthTexture:new Bf(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const be=e.properties.get(p);be.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),o=await r.requestReferenceSpace(a),z.setContext(r),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function B(U){const $=r.inputSources;for(let ce=0;ce<$.length;ce++){const se=$[ce].handedness==="right"?1:0;S.set($[ce],v[se])}for(let ce=0;ce<U.removed.length;ce++){const se=U.removed[ce],le=S.get(se);le&&(le.dispatchEvent({type:"disconnected",data:se}),S.delete(se))}for(let ce=0;ce<U.added.length;ce++){const se=U.added[ce],le=S.get(se);le&&le.dispatchEvent({type:"connected",data:se})}}const he=new A,ae=new A;function N(U,$,ce){he.setFromMatrixPosition($.matrixWorld),ae.setFromMatrixPosition(ce.matrixWorld);const se=he.distanceTo(ae),le=$.projectionMatrix.elements,be=ce.projectionMatrix.elements,we=le[14]/(le[10]-1),K=le[14]/(le[10]+1),Pe=(le[9]+1)/le[5],Ee=(le[9]-1)/le[5],De=(le[8]-1)/le[0],fe=(be[8]+1)/be[0],Ne=we*De,te=we*fe,y=se/(-De+fe),w=y*-De;$.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(w),U.translateZ(y),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const D=we+y,F=K+y,q=Ne-w,Y=te+(se-w),J=Pe*K/F*D,ne=Ee*K/F*D;U.projectionMatrix.makePerspective(q,Y,J,ne,D,F)}function ee(U,$){$===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices($.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;I.near=T.near=C.near=U.near,I.far=T.far=C.far=U.far,(H!==I.near||b!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),H=I.near,b=I.far);const $=U.parent,ce=I.cameras;ee(I,$);for(let le=0;le<ce.length;le++)ee(ce[le],$);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),U.position.copy(I.position),U.quaternion.copy(I.quaternion),U.scale.copy(I.scale),U.matrix.copy(I.matrix),U.matrixWorld.copy(I.matrixWorld);const se=U.children;for(let le=0,be=se.length;le<be;le++)se[le].updateMatrixWorld(!0);ce.length===2?N(I,C,T):I.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){h!==null&&(h.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let j=null;function O(U,$){if(c=$.getViewerPose(l||o),d=$,c!==null){const se=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let le=!1;se.length!==I.cameras.length&&(I.cameras.length=0,le=!0);for(let be=0;be<se.length;be++){const we=se[be];let K=null;if(f!==null)K=f.getViewport(we);else{const Ee=u.getViewSubImage(h,we);K=Ee.viewport,be===0&&(e.setRenderTargetTextures(p,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(p))}const Pe=E[be];Pe.matrix.fromArray(we.transform.matrix),Pe.projectionMatrix.fromArray(we.projectionMatrix),Pe.viewport.set(K.x,K.y,K.width,K.height),be===0&&I.matrix.copy(Pe.matrix),le===!0&&I.cameras.push(Pe)}}const ce=r.inputSources;for(let se=0;se<v.length;se++){const le=ce[se],be=S.get(le);be!==void 0&&be.update(le,$,l||o)}j&&j(U,$),d=null}const z=new Rf;z.setAnimationLoop(O),this.setAnimationLoop=function(U){j=U},this.dispose=function(){}}}function Zy(i,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,S,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,C)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let C;p.aoMap?C=p.aoMap:p.lightMap&&(C=p.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uv2Transform.value.copy(C.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C;p.map?C=p.map:p.alphaMap&&(C=p.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),m.uvTransform.value.copy(C.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===zt&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Jy(){const i=rs("canvas");return i.style.display="block",i}function Je(i={}){const e=i.canvas!==void 0?i.canvas:Jy(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Jn,this.physicallyCorrectLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const m=this;let p=!1,v=0,S=0,C=null,T=-1,E=null;const I=new $e,H=new $e;let b=null,R=e.width,k=e.height,B=1,he=null,ae=null;const N=new $e(0,0,R,k),ee=new $e(0,0,R,k);let j=!1;const O=new Do;let z=!1,U=!1,$=null;const ce=new Ae,se=new ue,le=new A,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return C===null?B:1}let K=t;function Pe(M,G){for(let Z=0;Z<M.length;Z++){const X=M[Z],ie=e.getContext(X,G);if(ie!==null)return ie}return null}try{const M={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pl}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",pe,!1),K===null){const G=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&G.shift(),K=Pe(G,M),K===null)throw Pe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ee,De,fe,Ne,te,y,w,D,F,q,Y,J,ne,re,_,x,P,V,Q,oe,ge,W,_e;function Te(){Ee=new d_(K),De=new a_(K,Ee,i),Ee.init(De),W=new qy(K,Ee,De),fe=new Wy(K,Ee,De),Ne=new g_,te=new Iy,y=new jy(K,Ee,fe,te,De,W,Ne),w=new c_(m),D=new f_(m),F=new L0(K,De),_e=new s_(K,Ee,F,De),q=new p_(K,F,Ne,_e),Y=new y_(K,q,F,Ne),Q=new __(K,De,y),x=new l_(te),J=new Dy(m,w,D,Ee,De,_e,x),ne=new Zy(m,te),re=new Ny,_=new ky(Ee,De),V=new r_(m,w,fe,Y,u,o),P=new Of(m,Y,De),oe=new o_(K,Ee,Ne,De),ge=new m_(K,Ee,Ne,De),Ne.programs=J.programs,m.capabilities=De,m.extensions=Ee,m.properties=te,m.renderLists=re,m.shadowMap=P,m.state=fe,m.info=Ne}Te();const ye=new Yy(m,K);this.xr=ye,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const M=Ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(M){M!==void 0&&(B=M,this.setSize(R,k,!1))},this.getSize=function(M){return M.set(R,k)},this.setSize=function(M,G,Z){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=M,k=G,e.width=Math.floor(M*B),e.height=Math.floor(G*B),Z!==!1&&(e.style.width=M+"px",e.style.height=G+"px"),this.setViewport(0,0,M,G)},this.getDrawingBufferSize=function(M){return M.set(R*B,k*B).floor()},this.setDrawingBufferSize=function(M,G,Z){R=M,k=G,B=Z,e.width=Math.floor(M*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,M,G)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(N)},this.setViewport=function(M,G,Z,X){M.isVector4?N.set(M.x,M.y,M.z,M.w):N.set(M,G,Z,X),fe.viewport(I.copy(N).multiplyScalar(B).floor())},this.getScissor=function(M){return M.copy(ee)},this.setScissor=function(M,G,Z,X){M.isVector4?ee.set(M.x,M.y,M.z,M.w):ee.set(M,G,Z,X),fe.scissor(H.copy(ee).multiplyScalar(B).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(M){fe.setScissorTest(j=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){ae=M},this.getClearColor=function(M){return M.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(M=!0,G=!0,Z=!0){let X=0;M&&(X|=16384),G&&(X|=256),Z&&(X|=1024),K.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",pe,!1),re.dispose(),_.dispose(),te.dispose(),w.dispose(),D.dispose(),Y.dispose(),_e.dispose(),J.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Re),ye.removeEventListener("sessionend",qe),$&&($.dispose(),$=null),He.stop()};function L(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const M=Ne.autoReset,G=P.enabled,Z=P.autoUpdate,X=P.needsUpdate,ie=P.type;Te(),Ne.autoReset=M,P.enabled=G,P.autoUpdate=Z,P.needsUpdate=X,P.type=ie}function me(M){const G=M.target;G.removeEventListener("dispose",me),Me(G)}function Me(M){xe(M),te.remove(M)}function xe(M){const G=te.get(M).programs;G!==void 0&&(G.forEach(function(Z){J.releaseProgram(Z)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,G,Z,X,ie,Le){G===null&&(G=be);const Ie=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=gd(M,G,Z,X,ie);fe.setMaterial(X,Ie);let Oe=Z.index;const Xe=Z.attributes.position;if(Oe===null){if(Xe===void 0||Xe.count===0)return}else if(Oe.count===0)return;let Ge=1;X.wireframe===!0&&(Oe=q.getWireframeAttribute(Z),Ge=2),_e.setup(ie,X,ze,Z,Oe);let Ve,it=oe;Oe!==null&&(Ve=F.get(Oe),it=ge,it.setIndex(Ve));const ei=Oe!==null?Oe.count:Xe.count,Si=Z.drawRange.start*Ge,Ei=Z.drawRange.count*Ge,sn=Le!==null?Le.start*Ge:0,je=Le!==null?Le.count*Ge:1/0,Ti=Math.max(Si,sn),rt=Math.min(ei,Si+Ei,sn+je)-1,on=Math.max(0,rt-Ti+1);if(on!==0){if(ie.isMesh)X.wireframe===!0?(fe.setLineWidth(X.wireframeLinewidth*we()),it.setMode(1)):it.setMode(4);else if(ie.isLine){let Ln=X.linewidth;Ln===void 0&&(Ln=1),fe.setLineWidth(Ln*we()),ie.isLineSegments?it.setMode(1):ie.isLineLoop?it.setMode(2):it.setMode(3)}else ie.isPoints?it.setMode(0):ie.isSprite&&it.setMode(4);if(ie.isInstancedMesh)it.renderInstances(Ti,on,ie.count);else if(Z.isInstancedBufferGeometry){const Ln=Math.min(Z.instanceCount,Z._maxInstanceCount);it.renderInstances(Ti,on,Ln)}else it.render(Ti,on)}},this.compile=function(M,G){f=_.get(M),f.init(),g.push(f),M.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(f.pushLight(Z),Z.castShadow&&f.pushShadow(Z))}),f.setupLights(m.physicallyCorrectLights),M.traverse(function(Z){const X=Z.material;if(X)if(Array.isArray(X))for(let ie=0;ie<X.length;ie++){const Le=X[ie];Bo(Le,M,Z)}else Bo(X,M,Z)}),g.pop(),f=null};let Ce=null;function de(M){Ce&&Ce(M)}function Re(){He.stop()}function qe(){He.start()}const He=new Rf;He.setAnimationLoop(de),typeof self!="undefined"&&He.setContext(self),this.setAnimationLoop=function(M){Ce=M,ye.setAnimationLoop(M),M===null?He.stop():He.start()},ye.addEventListener("sessionstart",Re),ye.addEventListener("sessionend",qe),this.render=function(M,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(G),G=ye.getCamera()),M.isScene===!0&&M.onBeforeRender(m,M,G,C),f=_.get(M,g.length),f.init(),g.push(f),ce.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),O.setFromProjectionMatrix(ce),U=this.localClippingEnabled,z=x.init(this.clippingPlanes,U,G),h=re.get(M,d.length),h.init(),d.push(h),nn(M,G,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(he,ae),z===!0&&x.beginShadows();const Z=f.state.shadowsArray;if(P.render(Z,M,G),z===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(h,M),f.setupLights(m.physicallyCorrectLights),G.isArrayCamera){const X=G.cameras;for(let ie=0,Le=X.length;ie<Le;ie++){const Ie=X[ie];rn(h,M,Ie,Ie.viewport)}}else rn(h,M,G);C!==null&&(y.updateMultisampleRenderTarget(C),y.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(m,M,G),_e.resetDefaultState(),T=-1,E=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function nn(M,G,Z,X){if(M.visible===!1)return;if(M.layers.test(G.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(G);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||O.intersectsSprite(M)){X&&le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const Ie=Y.update(M),ze=M.material;ze.visible&&h.push(M,Ie,ze,Z,le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ne.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ne.render.frame),!M.frustumCulled||O.intersectsObject(M))){X&&le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const Ie=Y.update(M),ze=M.material;if(Array.isArray(ze)){const Oe=Ie.groups;for(let Xe=0,Ge=Oe.length;Xe<Ge;Xe++){const Ve=Oe[Xe],it=ze[Ve.materialIndex];it&&it.visible&&h.push(M,Ie,it,Z,le.z,Ve)}}else ze.visible&&h.push(M,Ie,ze,Z,le.z,null)}}const Le=M.children;for(let Ie=0,ze=Le.length;Ie<ze;Ie++)nn(Le[Ie],G,Z,X)}function rn(M,G,Z,X){const ie=M.opaque,Le=M.transmissive,Ie=M.transparent;f.setupLightsView(Z),Le.length>0&&pd(ie,G,Z),X&&fe.viewport(I.copy(X)),ie.length>0&&ps(ie,G,Z),Le.length>0&&ps(Le,G,Z),Ie.length>0&&ps(Ie,G,Z),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function pd(M,G,Z){const X=De.isWebGL2;$===null&&($=new Bt(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ts:xi,minFilter:Ro,samples:X&&s===!0?4:0})),m.getDrawingBufferSize(se),X?$.setSize(se.x,se.y):$.setSize(po(se.x),po(se.y));const ie=m.getRenderTarget();m.setRenderTarget($),m.clear();const Le=m.toneMapping;m.toneMapping=An,ps(M,G,Z),m.toneMapping=Le,y.updateMultisampleRenderTarget($),y.updateRenderTargetMipmap($),m.setRenderTarget(ie)}function ps(M,G,Z){const X=G.isScene===!0?G.overrideMaterial:null;for(let ie=0,Le=M.length;ie<Le;ie++){const Ie=M[ie],ze=Ie.object,Oe=Ie.geometry,Xe=X===null?Ie.material:X,Ge=Ie.group;ze.layers.test(Z.layers)&&md(ze,G,Z,Oe,Xe,Ge)}}function md(M,G,Z,X,ie,Le){M.onBeforeRender(m,G,Z,X,ie,Le),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),ie.onBeforeRender(m,G,Z,X,M,Le),ie.transparent===!0&&ie.side===vi?(ie.side=zt,ie.needsUpdate=!0,m.renderBufferDirect(Z,G,X,ie,M,Le),ie.side=Kr,ie.needsUpdate=!0,m.renderBufferDirect(Z,G,X,ie,M,Le),ie.side=vi):m.renderBufferDirect(Z,G,X,ie,M,Le),M.onAfterRender(m,G,Z,X,ie,Le)}function Bo(M,G,Z){G.isScene!==!0&&(G=be);const X=te.get(M),ie=f.state.lights,Le=f.state.shadowsArray,Ie=ie.state.version,ze=J.getParameters(M,ie.state,Le,G,Z),Oe=J.getProgramCacheKey(ze);let Xe=X.programs;X.environment=M.isMeshStandardMaterial?G.environment:null,X.fog=G.fog,X.envMap=(M.isMeshStandardMaterial?D:w).get(M.envMap||X.environment),Xe===void 0&&(M.addEventListener("dispose",me),Xe=new Map,X.programs=Xe);let Ge=Xe.get(Oe);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===Ie)return ac(M,ze),Ge}else ze.uniforms=J.getUniforms(M),M.onBuild(Z,ze,m),M.onBeforeCompile(ze,m),Ge=J.acquireProgram(ze,Oe),Xe.set(Oe,Ge),X.uniforms=ze.uniforms;const Ve=X.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ve.clippingPlanes=x.uniform),ac(M,ze),X.needsLights=xd(M),X.lightsStateVersion=Ie,X.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotShadowMatrix.value=ie.state.spotShadowMatrix,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix);const it=Ge.getUniforms(),ei=qn.seqWithValue(it.seq,Ve);return X.currentProgram=Ge,X.uniformsList=ei,Ge}function ac(M,G){const Z=te.get(M);Z.outputEncoding=G.outputEncoding,Z.instancing=G.instancing,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function gd(M,G,Z,X,ie){G.isScene!==!0&&(G=be),y.resetTextureUnits();const Le=G.fog,Ie=X.isMeshStandardMaterial?G.environment:null,ze=C===null?m.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:Jn,Oe=(X.isMeshStandardMaterial?D:w).get(X.envMap||Ie),Xe=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!X.normalMap&&!!Z.attributes.tangent,Ve=!!Z.morphAttributes.position,it=!!Z.morphAttributes.normal,ei=!!Z.morphAttributes.color,Si=X.toneMapped?m.toneMapping:An,Ei=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,sn=Ei!==void 0?Ei.length:0,je=te.get(X),Ti=f.state.lights;if(z===!0&&(U===!0||M!==E)){const an=M===E&&X.id===T;x.setState(X,M,an)}let rt=!1;X.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ti.state.version||je.outputEncoding!==ze||ie.isInstancedMesh&&je.instancing===!1||!ie.isInstancedMesh&&je.instancing===!0||ie.isSkinnedMesh&&je.skinning===!1||!ie.isSkinnedMesh&&je.skinning===!0||je.envMap!==Oe||X.fog===!0&&je.fog!==Le||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==x.numPlanes||je.numIntersection!==x.numIntersection)||je.vertexAlphas!==Xe||je.vertexTangents!==Ge||je.morphTargets!==Ve||je.morphNormals!==it||je.morphColors!==ei||je.toneMapping!==Si||De.isWebGL2===!0&&je.morphTargetsCount!==sn)&&(rt=!0):(rt=!0,je.__version=X.version);let on=je.currentProgram;rt===!0&&(on=Bo(X,G,ie));let Ln=!1,Mr=!1,Uo=!1;const St=on.getUniforms(),wr=je.uniforms;if(fe.useProgram(on.program)&&(Ln=!0,Mr=!0,Uo=!0),X.id!==T&&(T=X.id,Mr=!0),Ln||E!==M){if(St.setValue(K,"projectionMatrix",M.projectionMatrix),De.logarithmicDepthBuffer&&St.setValue(K,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),E!==M&&(E=M,Mr=!0,Uo=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const an=St.map.cameraPosition;an!==void 0&&an.setValue(K,le.setFromMatrixPosition(M.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&St.setValue(K,"isOrthographic",M.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ie.isSkinnedMesh)&&St.setValue(K,"viewMatrix",M.matrixWorldInverse)}if(ie.isSkinnedMesh){St.setOptional(K,ie,"bindMatrix"),St.setOptional(K,ie,"bindMatrixInverse");const an=ie.skeleton;an&&(De.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),St.setValue(K,"boneTexture",an.boneTexture,y),St.setValue(K,"boneTextureSize",an.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ho=Z.morphAttributes;return(Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0&&De.isWebGL2===!0)&&Q.update(ie,Z,X,on),(Mr||je.receiveShadow!==ie.receiveShadow)&&(je.receiveShadow=ie.receiveShadow,St.setValue(K,"receiveShadow",ie.receiveShadow)),Mr&&(St.setValue(K,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&vd(wr,Uo),Le&&X.fog===!0&&ne.refreshFogUniforms(wr,Le),ne.refreshMaterialUniforms(wr,X,B,k,$),qn.upload(K,je.uniformsList,wr,y)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qn.upload(K,je.uniformsList,wr,y),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&St.setValue(K,"center",ie.center),St.setValue(K,"modelViewMatrix",ie.modelViewMatrix),St.setValue(K,"normalMatrix",ie.normalMatrix),St.setValue(K,"modelMatrix",ie.matrixWorld),on}function vd(M,G){M.ambientLightColor.needsUpdate=G,M.lightProbe.needsUpdate=G,M.directionalLights.needsUpdate=G,M.directionalLightShadows.needsUpdate=G,M.pointLights.needsUpdate=G,M.pointLightShadows.needsUpdate=G,M.spotLights.needsUpdate=G,M.spotLightShadows.needsUpdate=G,M.rectAreaLights.needsUpdate=G,M.hemisphereLights.needsUpdate=G}function xd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,G,Z){te.get(M.texture).__webglTexture=G,te.get(M.depthTexture).__webglTexture=Z;const X=te.get(M);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Z===void 0,X.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,G){const Z=te.get(M);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(M,G=0,Z=0){C=M,v=G,S=Z;let X=!0;if(M){const Oe=te.get(M);Oe.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),X=!1):Oe.__webglFramebuffer===void 0?y.setupRenderTarget(M):Oe.__hasExternalTextures&&y.rebindTextures(M,te.get(M.texture).__webglTexture,te.get(M.depthTexture).__webglTexture)}let ie=null,Le=!1,Ie=!1;if(M){const Oe=M.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture)&&(Ie=!0);const Xe=te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(ie=Xe[G],Le=!0):De.isWebGL2&&M.samples>0&&y.useMultisampledRTT(M)===!1?ie=te.get(M).__webglMultisampledFramebuffer:ie=Xe,I.copy(M.viewport),H.copy(M.scissor),b=M.scissorTest}else I.copy(N).multiplyScalar(B).floor(),H.copy(ee).multiplyScalar(B).floor(),b=j;if(fe.bindFramebuffer(36160,ie)&&De.drawBuffers&&X&&fe.drawBuffers(M,ie),fe.viewport(I),fe.scissor(H),fe.setScissorTest(b),Le){const Oe=te.get(M.texture);K.framebufferTexture2D(36160,36064,34069+G,Oe.__webglTexture,Z)}else if(Ie){const Oe=te.get(M.texture),Xe=G||0;K.framebufferTextureLayer(36160,36064,Oe.__webglTexture,Z||0,Xe)}T=-1},this.readRenderTargetPixels=function(M,G,Z,X,ie,Le,Ie){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){fe.bindFramebuffer(36160,ze);try{const Oe=M.texture,Xe=Oe.format,Ge=Oe.type;if(Xe!==Kt&&W.convert(Xe)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===ts&&(Ee.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ge!==xi&&W.convert(Ge)!==K.getParameter(35738)&&!(Ge===hi&&(De.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=M.width-X&&Z>=0&&Z<=M.height-ie&&K.readPixels(G,Z,X,ie,W.convert(Xe),W.convert(Ge),Le)}finally{const Oe=C!==null?te.get(C).__webglFramebuffer:null;fe.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(M,G,Z=0){if(G.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const X=Math.pow(2,-Z),ie=Math.floor(G.image.width*X),Le=Math.floor(G.image.height*X);y.setTexture2D(G,0),K.copyTexSubImage2D(3553,Z,0,0,M.x,M.y,ie,Le),fe.unbindTexture()},this.copyTextureToTexture=function(M,G,Z,X=0){const ie=G.image.width,Le=G.image.height,Ie=W.convert(Z.format),ze=W.convert(Z.type);y.setTexture2D(Z,0),K.pixelStorei(37440,Z.flipY),K.pixelStorei(37441,Z.premultiplyAlpha),K.pixelStorei(3317,Z.unpackAlignment),G.isDataTexture?K.texSubImage2D(3553,X,M.x,M.y,ie,Le,Ie,ze,G.image.data):G.isCompressedTexture?K.compressedTexSubImage2D(3553,X,M.x,M.y,G.mipmaps[0].width,G.mipmaps[0].height,Ie,G.mipmaps[0].data):K.texSubImage2D(3553,X,M.x,M.y,Ie,ze,G.image),X===0&&Z.generateMipmaps&&K.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(M,G,Z,X,ie=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=M.max.x-M.min.x+1,Ie=M.max.y-M.min.y+1,ze=M.max.z-M.min.z+1,Oe=W.convert(X.format),Xe=W.convert(X.type);let Ge;if(X.isData3DTexture)y.setTexture3D(X,0),Ge=32879;else if(X.isDataArrayTexture)y.setTexture2DArray(X,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,X.flipY),K.pixelStorei(37441,X.premultiplyAlpha),K.pixelStorei(3317,X.unpackAlignment);const Ve=K.getParameter(3314),it=K.getParameter(32878),ei=K.getParameter(3316),Si=K.getParameter(3315),Ei=K.getParameter(32877),sn=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;K.pixelStorei(3314,sn.width),K.pixelStorei(32878,sn.height),K.pixelStorei(3316,M.min.x),K.pixelStorei(3315,M.min.y),K.pixelStorei(32877,M.min.z),Z.isDataTexture||Z.isData3DTexture?K.texSubImage3D(Ge,ie,G.x,G.y,G.z,Le,Ie,ze,Oe,Xe,sn.data):Z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Ge,ie,G.x,G.y,G.z,Le,Ie,ze,Oe,sn.data)):K.texSubImage3D(Ge,ie,G.x,G.y,G.z,Le,Ie,ze,Oe,Xe,sn),K.pixelStorei(3314,Ve),K.pixelStorei(32878,it),K.pixelStorei(3316,ei),K.pixelStorei(3315,Si),K.pixelStorei(32877,Ei),ie===0&&X.generateMipmaps&&K.generateMipmap(Ge),fe.unbindTexture()},this.initTexture=function(M){y.setTexture2D(M,0),fe.unbindTexture()},this.resetState=function(){v=0,S=0,C=null,fe.reset(),_e.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Je.prototype.isWebGLRenderer=!0;class $y extends Je{}$y.prototype.isWebGL1Renderer=!0;class Fo{constructor(e,t=1,n=1e3){this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new Fo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Fo.prototype.isFog=!0;class Wl extends Ze{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Wl.prototype.isScene=!0;class us{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ns,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}us.prototype.isInterleavedBuffer=!0;const Et=new A;class ss{constructor(e,t,n,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ss(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}ss.prototype.isInterleavedBufferAttribute=!0;class jl extends ut{constructor(e){super(),this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}jl.prototype.isSpriteMaterial=!0;let ki;const Cr=new A,Gi=new A,Vi=new A,Wi=new ue,Rr=new ue,Uf=new Ae,Hs=new A,Lr=new A,ks=new A,qu=new ue,Aa=new ue,Xu=new ue;class Ky extends Ze{constructor(e){if(super(),this.type="Sprite",ki===void 0){ki=new Qe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new us(t,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new ss(n,3,0,!1)),ki.setAttribute("uv",new ss(n,2,3,!1))}this.geometry=ki,this.material=e!==void 0?e:new jl,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Uf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Vi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Gs(Hs.set(-.5,-.5,0),Vi,o,Gi,r,s),Gs(Lr.set(.5,-.5,0),Vi,o,Gi,r,s),Gs(ks.set(.5,.5,0),Vi,o,Gi,r,s),qu.set(0,0),Aa.set(1,0),Xu.set(1,1);let a=e.ray.intersectTriangle(Hs,Lr,ks,!1,Cr);if(a===null&&(Gs(Lr.set(-.5,.5,0),Vi,o,Gi,r,s),Aa.set(0,1),a=e.ray.intersectTriangle(Hs,ks,Lr,!1,Cr),a===null))return;const l=e.ray.origin.distanceTo(Cr);l<e.near||l>e.far||t.push({distance:l,point:Cr.clone(),uv:ot.getUV(Cr,Hs,Lr,ks,qu,Aa,Xu,new ue),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Ky.prototype.isSprite=!0;function Gs(i,e,t,n,r,s){Wi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Rr.x=s*Wi.x-r*Wi.y,Rr.y=r*Wi.x+s*Wi.y):Rr.copy(Wi),i.copy(e),i.x+=Rr.x,i.y+=Rr.y,i.applyMatrix4(Uf)}const Yu=new A,Zu=new $e,Ju=new $e,Qy=new A,$u=new Ae;class Hf extends ct{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;Zu.fromBufferAttribute(r.attributes.skinIndex,e),Ju.fromBufferAttribute(r.attributes.skinWeight,e),Yu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Ju.getComponent(s);if(o!==0){const a=Zu.getComponent(s);$u.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Qy.copy(Yu).applyMatrix4($u),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}Hf.prototype.isSkinnedMesh=!0;class eb extends Ze{constructor(){super(),this.type="Bone"}}eb.prototype.isBone=!0;class tb extends pt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=ft,u=ft,h,f){super(null,o,a,l,c,u,r,s,h,f),this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}tb.prototype.isDataTexture=!0;class il extends at{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}il.prototype.isInstancedBufferAttribute=!0;const Ku=new Ae,Qu=new Ae,Vs=[],Pr=new ct;class nb extends ct{constructor(e,t,n){super(e,t),this.instanceMatrix=new il(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Ku),Qu.multiplyMatrices(n,Ku),Pr.matrixWorld=Qu,Pr.raycast(e,Vs);for(let o=0,a=Vs.length;o<a;o++){const l=Vs[o];l.instanceId=s,l.object=this,t.push(l)}Vs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new il(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}nb.prototype.isInstancedMesh=!0;class xr extends ut{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}xr.prototype.isLineBasicMaterial=!0;const eh=new A,th=new A,nh=new Ae,Ca=new bi,Ws=new gr;class ql extends Ze{constructor(e=new Qe,t=new xr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)eh.fromBufferAttribute(t,r-1),th.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=eh.distanceTo(th);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;nh.copy(r).invert(),Ca.copy(e.ray).applyMatrix4(nh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new A,u=new A,h=new A,f=new A,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let C=v,T=S-1;C<T;C+=d){const E=g.getX(C),I=g.getX(C+1);if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,I),Ca.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let C=v,T=S-1;C<T;C+=d){if(c.fromBufferAttribute(p,C),u.fromBufferAttribute(p,C+1),Ca.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ql.prototype.isLine=!0;const ih=new A,rh=new A;class Xl extends ql{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ih.fromBufferAttribute(t,r),rh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ih.distanceTo(rh);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Xl.prototype.isLineSegments=!0;class ib extends ql{constructor(e,t){super(e,t),this.type="LineLoop"}}ib.prototype.isLineLoop=!0;class Yl extends ut{constructor(e){super(),this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}Yl.prototype.isPointsMaterial=!0;const sh=new Ae,rl=new bi,js=new gr,qs=new A;class rb extends Ze{constructor(e=new Qe,t=new Yl){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;sh.copy(r).invert(),rl.copy(e.ray).applyMatrix4(sh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);qs.fromBufferAttribute(h,p),oh(qs,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,m=d;g<m;g++)qs.fromBufferAttribute(h,g),oh(qs,g,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}rb.prototype.isPoints=!0;function oh(i,e,t,n,r,s,o){const a=rl.distanceSqToPoint(i);if(a<t){const l=new A;rl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class sb extends pt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.minFilter=o!==void 0?o:Dt,this.magFilter=s!==void 0?s:Dt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}sb.prototype.isVideoTexture=!0;class ob extends pt{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=ft,this.minFilter=ft,this.generateMipmaps=!1,this.needsUpdate=!0}}ob.prototype.isFramebufferTexture=!0;class ab extends pt{constructor(e,t,n,r,s,o,a,l,c,u,h,f){super(null,o,a,l,c,u,r,s,h,f),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}ab.prototype.isCompressedTexture=!0;class lb extends pt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.needsUpdate=!0}}lb.prototype.isCanvasTexture=!0;class Vt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ue:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,r=[],s=[],o=[],a=new A,l=new Ae;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(gt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class No extends Vt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new ue,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}No.prototype.isEllipseCurve=!0;class kf extends No{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.type="ArcCurve"}}kf.prototype.isArcCurve=!0;function Zl(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Xs=new A,Ra=new Zl,La=new Zl,Pa=new Zl;class Gf extends Vt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new A){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Xs.subVectors(r[0],r[1]).add(r[0]),c=Xs);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Xs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Ra.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,p),La.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,p),Pa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),La.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Pa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ra.calc(l),La.calc(l),Pa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Gf.prototype.isCatmullRomCurve3=!0;function ah(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function cb(i,e){const t=1-i;return t*t*e}function ub(i,e){return 2*(1-i)*i*e}function hb(i,e){return i*i*e}function Vr(i,e,t,n){return cb(i,e)+ub(i,t)+hb(i,n)}function fb(i,e){const t=1-i;return t*t*t*e}function db(i,e){const t=1-i;return 3*t*t*i*e}function pb(i,e){return 3*(1-i)*i*i*e}function mb(i,e){return i*i*i*e}function Wr(i,e,t,n,r){return fb(i,e)+db(i,t)+pb(i,n)+mb(i,r)}class Jl extends Vt{constructor(e=new ue,t=new ue,n=new ue,r=new ue){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,r.x,s.x,o.x,a.x),Wr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Jl.prototype.isCubicBezierCurve=!0;class Vf extends Vt{constructor(e=new A,t=new A,n=new A,r=new A){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new A){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wr(e,r.x,s.x,o.x,a.x),Wr(e,r.y,s.y,o.y,a.y),Wr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Vf.prototype.isCubicBezierCurve3=!0;class Oo extends Vt{constructor(e=new ue,t=new ue){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new ue;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Oo.prototype.isLineCurve=!0;class gb extends Vt{constructor(e=new A,t=new A){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $l extends Vt{constructor(e=new ue,t=new ue,n=new ue){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vr(e,r.x,s.x,o.x),Vr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}$l.prototype.isQuadraticBezierCurve=!0;class Wf extends Vt{constructor(e=new A,t=new A,n=new A){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vr(e,r.x,s.x,o.x),Vr(e,r.y,s.y,o.y),Vr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Wf.prototype.isQuadraticBezierCurve3=!0;class Kl extends Vt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(ah(a,l.x,c.x,u.x,h.x),ah(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}Kl.prototype.isSplineCurve=!0;var jf=Object.freeze({__proto__:null,ArcCurve:kf,CatmullRomCurve3:Gf,CubicBezierCurve:Jl,CubicBezierCurve3:Vf,EllipseCurve:No,LineCurve:Oo,LineCurve3:gb,QuadraticBezierCurve:$l,QuadraticBezierCurve3:Wf,SplineCurve:Kl});class vb extends Vt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Oo(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new jf[r.type]().fromJSON(r))}return this}}class sl extends vb{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Oo(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new $l(this.currentPoint.clone(),new ue(e,t),new ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Jl(this.currentPoint.clone(),new ue(e,t),new ue(n,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Kl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new No(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}new A;new A;new A;new ot;class hs extends sl{constructor(e){super(e),this.uuid=en(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new sl().fromJSON(r))}return this}}const xb={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=qf(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=wb(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?1/d:0}return os(s,o,t,a,l,d),o}};function qf(i,e,t,n,r){let s,o;if(r===Fb(i,e,t,n)>0)for(s=e;s<t;s+=n)o=lh(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=lh(s,i[s],i[s+1],o);return o&&zo(o,o.next)&&(ls(o),o=o.next),o}function $n(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zo(t,t.next)||nt(t.prev,t,t.next)===0)){if(ls(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function os(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Cb(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?yb(i,n,r,s):_b(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),ls(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=bb($n(i),e,t),os(i,e,t,n,r,s,2)):o===2&&Mb(i,e,t,n,r,s):os($n(i),e,t,n,r,s,1);break}}}function _b(i){const e=i.prev,t=i,n=i.next;if(nt(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(Ki(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&nt(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function yb(i,e,t,n){const r=i.prev,s=i,o=i.next;if(nt(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=ol(a,l,e,t,n),f=ol(c,u,e,t,n);let d=i.prevZ,g=i.nextZ;for(;d&&d.z>=h&&g&&g.z<=f;){if(d!==i.prev&&d!==i.next&&Ki(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&nt(d.prev,d,d.next)>=0||(d=d.prevZ,g!==i.prev&&g!==i.next&&Ki(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&nt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=h;){if(d!==i.prev&&d!==i.next&&Ki(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&nt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==i.prev&&g!==i.next&&Ki(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&nt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function bb(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!zo(r,s)&&Xf(r,n,n.next,s)&&as(r,s)&&as(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),ls(n),ls(n.next),n=i=s),n=n.next}while(n!==i);return $n(n)}function Mb(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pb(o,a)){let l=Yf(o,a);o=$n(o,o.next),l=$n(l,l.next),os(o,e,t,n,r,s),os(l,e,t,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function wb(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=qf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Lb(c));for(r.sort(Sb),s=0;s<r.length;s++)Eb(r[s],t),t=$n(t,t.next);return t}function Sb(i,e){return i.x-e.x}function Eb(i,e){if(e=Tb(i,e),e){const t=Yf(e,i);$n(e,e.next),$n(t,t.next)}}function Tb(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Ki(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(n-t.x),as(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Ab(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function Ab(i,e){return nt(i.prev,i,e.prev)<0&&nt(e.next,i,i.next)<0}function Cb(i,e,t,n){let r=i;do r.z===null&&(r.z=ol(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Rb(r)}function Rb(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function ol(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Lb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ki(i,e,t,n,r,s,o,a){return(r-o)*(e-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(n-a)>=0}function Pb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Db(i,e)&&(as(i,e)&&as(e,i)&&Ib(i,e)&&(nt(i.prev,i,e.prev)||nt(i,e.prev,e))||zo(i,e)&&nt(i.prev,i,i.next)>0&&nt(e.prev,e,e.next)>0)}function nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zo(i,e){return i.x===e.x&&i.y===e.y}function Xf(i,e,t,n){const r=Zs(nt(i,e,t)),s=Zs(nt(i,e,n)),o=Zs(nt(t,n,i)),a=Zs(nt(t,n,e));return!!(r!==s&&o!==a||r===0&&Ys(i,t,e)||s===0&&Ys(i,n,e)||o===0&&Ys(t,i,n)||a===0&&Ys(t,e,n))}function Ys(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Zs(i){return i>0?1:i<0?-1:0}function Db(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function as(i,e){return nt(i.prev,i,i.next)<0?nt(i,e,i.next)>=0&&nt(i,i.prev,e)>=0:nt(i,e,i.prev)<0||nt(i,i.next,e)<0}function Ib(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Yf(i,e){const t=new al(i.i,i.x,i.y),n=new al(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function lh(i,e,t,n){const r=new al(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function al(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Fb(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Xn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Xn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];ch(e),uh(n,e);let o=e.length;t.forEach(ch);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,uh(n,t[l]);const a=xb.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ch(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function uh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class _r extends Qe{constructor(e=new hs([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new dt(r,3)),this.setAttribute("uv",new dt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Nb;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let C,T=!1,E,I,H,b;v&&(C=v.getSpacedPoints(u),T=!0,f=!1,E=v.computeFrenetFrames(u,!1),I=new A,H=new A,b=new A),f||(p=0,d=0,g=0,m=0);const R=a.extractPoints(c);let k=R.shape;const B=R.holes;if(!Xn.isClockWise(k)){k=k.reverse();for(let te=0,y=B.length;te<y;te++){const w=B[te];Xn.isClockWise(w)&&(B[te]=w.reverse())}}const ae=Xn.triangulateShape(k,B),N=k;for(let te=0,y=B.length;te<y;te++){const w=B[te];k=k.concat(w)}function ee(te,y,w){return y||console.error("THREE.ExtrudeGeometry: vec does not exist"),y.clone().multiplyScalar(w).add(te)}const j=k.length,O=ae.length;function z(te,y,w){let D,F,q;const Y=te.x-y.x,J=te.y-y.y,ne=w.x-te.x,re=w.y-te.y,_=Y*Y+J*J,x=Y*re-J*ne;if(Math.abs(x)>Number.EPSILON){const P=Math.sqrt(_),V=Math.sqrt(ne*ne+re*re),Q=y.x-J/P,oe=y.y+Y/P,ge=w.x-re/V,W=w.y+ne/V,_e=((ge-Q)*re-(W-oe)*ne)/(Y*re-J*ne);D=Q+Y*_e-te.x,F=oe+J*_e-te.y;const Te=D*D+F*F;if(Te<=2)return new ue(D,F);q=Math.sqrt(Te/2)}else{let P=!1;Y>Number.EPSILON?ne>Number.EPSILON&&(P=!0):Y<-Number.EPSILON?ne<-Number.EPSILON&&(P=!0):Math.sign(J)===Math.sign(re)&&(P=!0),P?(D=-J,F=Y,q=Math.sqrt(_)):(D=Y,F=J,q=Math.sqrt(_/2))}return new ue(D/q,F/q)}const U=[];for(let te=0,y=N.length,w=y-1,D=te+1;te<y;te++,w++,D++)w===y&&(w=0),D===y&&(D=0),U[te]=z(N[te],N[w],N[D]);const $=[];let ce,se=U.concat();for(let te=0,y=B.length;te<y;te++){const w=B[te];ce=[];for(let D=0,F=w.length,q=F-1,Y=D+1;D<F;D++,q++,Y++)q===F&&(q=0),Y===F&&(Y=0),ce[D]=z(w[D],w[q],w[Y]);$.push(ce),se=se.concat(ce)}for(let te=0;te<p;te++){const y=te/p,w=d*Math.cos(y*Math.PI/2),D=g*Math.sin(y*Math.PI/2)+m;for(let F=0,q=N.length;F<q;F++){const Y=ee(N[F],U[F],D);Pe(Y.x,Y.y,-w)}for(let F=0,q=B.length;F<q;F++){const Y=B[F];ce=$[F];for(let J=0,ne=Y.length;J<ne;J++){const re=ee(Y[J],ce[J],D);Pe(re.x,re.y,-w)}}}const le=g+m;for(let te=0;te<j;te++){const y=f?ee(k[te],se[te],le):k[te];T?(H.copy(E.normals[0]).multiplyScalar(y.x),I.copy(E.binormals[0]).multiplyScalar(y.y),b.copy(C[0]).add(H).add(I),Pe(b.x,b.y,b.z)):Pe(y.x,y.y,0)}for(let te=1;te<=u;te++)for(let y=0;y<j;y++){const w=f?ee(k[y],se[y],le):k[y];T?(H.copy(E.normals[te]).multiplyScalar(w.x),I.copy(E.binormals[te]).multiplyScalar(w.y),b.copy(C[te]).add(H).add(I),Pe(b.x,b.y,b.z)):Pe(w.x,w.y,h/u*te)}for(let te=p-1;te>=0;te--){const y=te/p,w=d*Math.cos(y*Math.PI/2),D=g*Math.sin(y*Math.PI/2)+m;for(let F=0,q=N.length;F<q;F++){const Y=ee(N[F],U[F],D);Pe(Y.x,Y.y,h+w)}for(let F=0,q=B.length;F<q;F++){const Y=B[F];ce=$[F];for(let J=0,ne=Y.length;J<ne;J++){const re=ee(Y[J],ce[J],D);T?Pe(re.x,re.y+C[u-1].y,C[u-1].x+w):Pe(re.x,re.y,h+w)}}}be(),we();function be(){const te=r.length/3;if(f){let y=0,w=j*y;for(let D=0;D<O;D++){const F=ae[D];Ee(F[2]+w,F[1]+w,F[0]+w)}y=u+p*2,w=j*y;for(let D=0;D<O;D++){const F=ae[D];Ee(F[0]+w,F[1]+w,F[2]+w)}}else{for(let y=0;y<O;y++){const w=ae[y];Ee(w[2],w[1],w[0])}for(let y=0;y<O;y++){const w=ae[y];Ee(w[0]+j*u,w[1]+j*u,w[2]+j*u)}}n.addGroup(te,r.length/3-te,0)}function we(){const te=r.length/3;let y=0;K(N,y),y+=N.length;for(let w=0,D=B.length;w<D;w++){const F=B[w];K(F,y),y+=F.length}n.addGroup(te,r.length/3-te,1)}function K(te,y){let w=te.length;for(;--w>=0;){const D=w;let F=w-1;F<0&&(F=te.length-1);for(let q=0,Y=u+p*2;q<Y;q++){const J=j*q,ne=j*(q+1),re=y+D+J,_=y+F+J,x=y+F+ne,P=y+D+ne;De(re,_,x,P)}}}function Pe(te,y,w){l.push(te),l.push(y),l.push(w)}function Ee(te,y,w){fe(te),fe(y),fe(w);const D=r.length/3,F=S.generateTopUV(n,r,D-3,D-2,D-1);Ne(F[0]),Ne(F[1]),Ne(F[2])}function De(te,y,w,D){fe(te),fe(y),fe(D),fe(y),fe(w),fe(D);const F=r.length/3,q=S.generateSideWallUV(n,r,F-6,F-3,F-2,F-1);Ne(q[0]),Ne(q[1]),Ne(q[3]),Ne(q[1]),Ne(q[2]),Ne(q[3])}function fe(te){r.push(l[te*3+0]),r.push(l[te*3+1]),r.push(l[te*3+2])}function Ne(te){s.push(te.x),s.push(te.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ob(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new jf[r.type]().fromJSON(r)),new _r(n,e.options)}}const Nb={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],m=e[s*3],p=e[s*3+1],v=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(f,1-g),new ue(m,1-v)]:[new ue(a,1-l),new ue(u,1-h),new ue(d,1-g),new ue(p,1-v)]}};function Ob(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ql extends Qe{constructor(e=new hs([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(s,3)),this.setAttribute("uv",new dt(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;Xn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,v=g.length;p<v;p++){const S=g[p];Xn.isClockWise(S)===!0&&(g[p]=S.reverse())}const m=Xn.triangulateShape(d,g);for(let p=0,v=g.length;p<v;p++){const S=g[p];d=d.concat(S)}for(let p=0,v=d.length;p<v;p++){const S=d[p];r.push(S.x,S.y,0),s.push(0,0,1),o.push(S.x,S.y)}for(let p=0,v=m.length;p<v;p++){const S=m[p],C=S[0]+h,T=S[1]+h,E=S[2]+h;n.push(C,T,E),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return zb(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Ql(n,e.curveSegments)}}function zb(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Zf extends ut{constructor(e){super(),this.type="ShadowMaterial",this.color=new Se(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}Zf.prototype.isShadowMaterial=!0;class Jf extends Ct{constructor(e){super(e),this.type="RawShaderMaterial"}}Jf.prototype.isRawShaderMaterial=!0;class ec extends ut{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}ec.prototype.isMeshStandardMaterial=!0;class $f extends ec{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}$f.prototype.isMeshPhysicalMaterial=!0;class Kf extends ut{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}Kf.prototype.isMeshPhongMaterial=!0;class Qf extends ut{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}Qf.prototype.isMeshToonMaterial=!0;class ed extends ut{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}ed.prototype.isMeshNormalMaterial=!0;class td extends ut{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}td.prototype.isMeshLambertMaterial=!0;class nd extends ut{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mr,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}nd.prototype.isMeshMatcapMaterial=!0;class id extends xr{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}id.prototype.isLineDashedMaterial=!0;const Bb={ShadowMaterial:Zf,SpriteMaterial:jl,RawShaderMaterial:Jf,ShaderMaterial:Ct,PointsMaterial:Yl,MeshPhysicalMaterial:$f,MeshStandardMaterial:ec,MeshPhongMaterial:Kf,MeshToonMaterial:Qf,MeshNormalMaterial:ed,MeshLambertMaterial:td,MeshDepthMaterial:Gl,MeshDistanceMaterial:Vl,MeshBasicMaterial:cs,MeshMatcapMaterial:nd,LineDashedMaterial:id,LineBasicMaterial:xr,Material:ut};ut.fromType=function(i){return new Bb[i]};const tt={arraySlice:function(i,e,t){return tt.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r},flattenJSON:function(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)},subclip:function(i,e,t,n,r=30){const s=i.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*r;if(!(g<t||g>=n)){h.push(c.times[d]);for(let m=0;m<u;++m)f.push(c.values[d*u+m])}}h.length!==0&&(c.times=tt.convertArray(h,c.times.constructor),c.values=tt.convertArray(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(v){return v.name===a.name&&v.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=a.times.length-1;let m;if(s<=a.times[0]){const v=u,S=h-u;m=tt.arraySlice(a.values,v,S)}else if(s>=a.times[g]){const v=g*h+u,S=v+h-u;m=tt.arraySlice(a.values,v,S)}else{const v=a.createInterpolant(),S=u,C=h-u;v.evaluate(s),m=tt.arraySlice(v.resultBuffer,S,C)}l==="quaternion"&&new It().fromArray(m).normalize().conjugate().toArray(m);const p=c.times.length;for(let v=0;v<p;++v){const S=v*d+f;if(l==="quaternion")It.multiplyQuaternionsFlat(c.values,S,m,0,c.values,S);else{const C=d-f*2;for(let T=0;T<C;++T)c.values[S+T]-=m[T]}}}return i.blendMode=wf,i}};class Kn{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Kn.prototype.beforeStart_=Kn.prototype.copySampleValue_;Kn.prototype.afterEnd_=Kn.prototype.copySampleValue_;class Ub extends Kn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zi,endingEnd:Zi}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ji:s=e,a=2*t-n;break;case ho:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ji:o=e,l=2*n-t;break;case ho:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),m=g*g,p=m*g,v=-f*p+2*f*m-f*g,S=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,C=(-1-d)*p+(1.5+d)*m+.5*g,T=d*p-d*m;for(let E=0;E!==a;++E)s[E]=v*o[u+E]+S*o[c+E]+C*o[l+E]+T*o[h+E];return s}}class rd extends Kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Hb extends Kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class gn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tt.convertArray(t,this.TimeBufferType),this.values=tt.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tt.convertArray(e.times,Array),values:tt.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ub(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case co:t=this.InterpolantFactoryMethodDiscrete;break;case uo:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=tt.arraySlice(n,s,o),this.values=tt.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&tt.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=tt.arraySlice(this.times),t=tt.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===Qo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=tt.arraySlice(e,0,o),this.values=tt.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=tt.arraySlice(this.times,0),t=tt.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=uo;class yr extends gn{}yr.prototype.ValueTypeName="bool";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=co;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class sd extends gn{}sd.prototype.ValueTypeName="color";class mo extends gn{}mo.prototype.ValueTypeName="number";class kb extends Kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)It.slerpFlat(s,0,o,c-a,o,c,l);return s}}class fs extends gn{InterpolantFactoryMethodLinear(e){return new kb(this.times,this.values,this.getValueSize(),e)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.DefaultInterpolation=uo;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class br extends gn{}br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=co;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends gn{}go.prototype.ValueTypeName="vector";class hh{constructor(e,t=-1,n,r=Dl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=en(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Vb(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(gn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=tt.getKeyframeOrder(l);l=tt.sortedArray(l,1,u),c=tt.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new mo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,m){if(d.length!==0){const p=[],v=[];tt.flattenJSON(d,p,v,g),p.length!==0&&m.push(new h(f,p,v))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],v=[];for(let S=0;S!==f[g].morphTargets.length;++S){const C=f[g];p.push(C.time),v.push(C.morphTarget===m?1:0)}r.push(new mo(".morphTargetInfluence["+m+"]",p,v))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(go,d+".position",f,"pos",r),n(fs,d+".quaternion",f,"rot",r),n(go,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Gb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mo;case"vector":case"vector2":case"vector3":case"vector4":return go;case"color":return sd;case"quaternion":return fs;case"bool":case"boolean":return yr;case"string":return br}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Vb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Gb(i.type);if(i.times===void 0){const t=[],n=[];tt.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const hr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Wb{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const jb=new Wb;class Qn{constructor(e){this.manager=e!==void 0?e:jb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Mn={};class qb extends Qn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=hr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:r});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(v){S();function S(){h.read().then(({done:C,value:T})=>{if(C)v.close();else{m+=T.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let I=0,H=u.length;I<H;I++){const b=u[I];b.onProgress&&b.onProgress(E)}v.enqueue(T),S()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{hr.add(e,c);const u=Mn[e];delete Mn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Mn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class od extends Qn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=rs("img");function l(){u(),hr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Xb extends Qn{constructor(e){super(e)}load(e,t,n,r){const s=new Po,o=new od(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class jr extends Qn{constructor(e){super(e)}load(e,t,n,r){const s=new pt,o=new od(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class mn extends Ze{constructor(e,t=1){super(),this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}mn.prototype.isLight=!0;class Yb extends mn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.groundColor=new Se(t)}copy(e){return mn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Yb.prototype.isHemisphereLight=!0;const fh=new Ae,dh=new A,ph=new A;class tc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(dh),ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ph),t.updateMatrixWorld(),fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ad extends tc{constructor(){super(new At(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=is*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}ad.prototype.isSpotLightShadow=!0;class Zb extends mn{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.target=new Ze,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new ad}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Zb.prototype.isSpotLight=!0;const mh=new Ae,Dr=new A,Da=new A;class ld extends tc{constructor(){super(new At(90,1,.5,500)),this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dr),Da.copy(n.position),Da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Da),n.updateMatrixWorld(),r.makeTranslation(-Dr.x,-Dr.y,-Dr.z),mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}}ld.prototype.isPointLightShadow=!0;class Jb extends mn{constructor(e,t,n=0,r=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Jb.prototype.isPointLight=!0;class cd extends tc{constructor(){super(new Hl(-5,5,5,-5,.5,500))}}cd.prototype.isDirectionalLightShadow=!0;class $b extends mn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Ze.DefaultUp),this.updateMatrix(),this.target=new Ze,this.shadow=new cd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}$b.prototype.isDirectionalLight=!0;class Kb extends mn{constructor(e,t){super(e,t),this.type="AmbientLight"}}Kb.prototype.isAmbientLight=!0;class Qb extends mn{constructor(e,t,n=10,r=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Qb.prototype.isRectAreaLight=!0;class ud{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}ud.prototype.isSphericalHarmonics3=!0;class nc extends mn{constructor(e=new ud,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}nc.prototype.isLightProbe=!0;class eM{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tM extends Qe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}tM.prototype.isInstancedBufferGeometry=!0;class nM extends Qn{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=hr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){hr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}nM.prototype.isImageBitmapLoader=!0;let Js;const iM={getContext:function(){return Js===void 0&&(Js=new(window.AudioContext||window.webkitAudioContext)),Js},setContext:function(i){Js=i}};class rM extends Qn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new qb(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);iM.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}}class sM extends nc{constructor(e,t,n=1){super(void 0,n);const r=new Se().set(e),s=new Se().set(t),o=new A(r.r,r.g,r.b),a=new A(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}sM.prototype.isHemisphereLightProbe=!0;class oM extends nc{constructor(e,t=1){super(void 0,t);const n=new Se().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}oM.prototype.isAmbientLightProbe=!0;class aM extends Ze{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class lM{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){It.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;It.multiplyQuaternionsFlat(e,o,e,t,e,n),It.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const ic="\\[\\]\\.:\\/",cM=new RegExp("["+ic+"]","g"),rc="[^"+ic+"]",uM="[^"+ic.replace("\\.","")+"]",hM=/((?:WC+[\/:])*)/.source.replace("WC",rc),fM=/(WCOD+)?/.source.replace("WCOD",uM),dM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),pM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),mM=new RegExp("^"+hM+fM+dM+pM+"$"),gM=["material","materials","bones"];class vM{constructor(e,t,n){const r=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cM,"")}static parseTrackName(e){const t=mM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);gM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=vM;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xM{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Zi,endingEnd:Zi};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=kg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case wf:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Dl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===Gg;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===Hg){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Ji,r.endingEnd=Ji):(e?r.endingStart=this.zeroSlopeAtStart?Ji:Zi:r.endingStart=ho,t?r.endingEnd=this.zeroSlopeAtEnd?Ji:Zi:r.endingEnd=ho)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class _M extends _i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=r[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;g=new lM(Ye.create(n,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new rd(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?hh.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Dl),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new xM(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?hh.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}_M.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class yM extends us{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}yM.prototype.isInstancedInterleavedBuffer=!0;class bM{constructor(e,t,n=0,r=1/0){this.ray=new bi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ll(e,this,n,t),n.sort(gh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ll(e[r],this,n,t);return n.sort(gh),n}}function gh(i,e){return i.distance-e.distance}function ll(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)ll(r[s],e,t,!0)}}const Un=new A,$s=new Ae,Ia=new Ae;class MM extends Xl{constructor(e){const t=hd(e),n=new Qe,r=[],s=[],o=new Se(0,0,1),a=new Se(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new dt(r,3)),n.setAttribute("color",new dt(s,3));const l=new xr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");Ia.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&($s.multiplyMatrices(Ia,a.matrixWorld),Un.setFromMatrixPosition($s),r.setXYZ(o,Un.x,Un.y,Un.z),$s.multiplyMatrices(Ia,a.parent.matrixWorld),Un.setFromMatrixPosition($s),r.setXYZ(o+1,Un.x,Un.y,Un.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function hd(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,hd(i.children[t]));return e}class wM extends Xl{constructor(e=10,t=10,n=4473924,r=8947848){n=new Se(n),r=new Se(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=f===s?n:r;m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3}const u=new Qe;u.setAttribute("position",new dt(l,3)),u.setAttribute("color",new dt(c,3));const h=new xr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const cn=new Uint32Array(512),un=new Uint32Array(512);for(let i=0;i<256;++i){const e=i-127;e<-27?(cn[i]=0,cn[i|256]=32768,un[i]=24,un[i|256]=24):e<-14?(cn[i]=1024>>-e-14,cn[i|256]=1024>>-e-14|32768,un[i]=-e-1,un[i|256]=-e-1):e<=15?(cn[i]=e+15<<10,cn[i|256]=e+15<<10|32768,un[i]=13,un[i|256]=13):e<128?(cn[i]=31744,cn[i|256]=64512,un[i]=24,un[i|256]=24):(cn[i]=31744,cn[i|256]=64512,un[i]=13,un[i|256]=13)}const fd=new Uint32Array(2048),ds=new Uint32Array(64),SM=new Uint32Array(64);for(let i=1;i<1024;++i){let e=i<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,fd[i]=e|t}for(let i=1024;i<2048;++i)fd[i]=939524096+(i-1024<<13);for(let i=1;i<31;++i)ds[i]=i<<23;ds[31]=1199570944;ds[32]=2147483648;for(let i=33;i<63;++i)ds[i]=2147483648+(i-32<<23);ds[63]=3347054592;for(let i=1;i<64;++i)i!==32&&(SM[i]=1024);Vt.create=function(i,e){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(Vt.prototype),i.prototype.constructor=i,i.prototype.getPoint=e,i};sl.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};wM.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};MM.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Qn.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),eM.extractUrlBase(i)};Qn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};tn.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};tn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};tn.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};tn.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};tn.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};Mi.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};gr.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Do.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};xt.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};xt.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};xt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};xt.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};xt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};xt.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Ae.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};Ae.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Ae.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new A().setFromMatrixColumn(this,3)};Ae.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};Ae.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Ae.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ae.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ae.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Ae.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};Ae.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ae.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Ae.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Ae.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Ae.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Ae.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Ae.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ae.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Ae.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};Ae.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Sn.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};It.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};It.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};bi.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};bi.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};bi.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};ot.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ot.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};ot.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};ot.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};ot.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};ot.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ot.getBarycoord(i,e,t,n,r)};ot.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ot.getNormal(i,e,t,n)};hs.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};hs.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new _r(this,i)};hs.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Ql(this,i)};ue.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};ue.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};ue.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};A.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};A.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};A.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};A.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};A.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};A.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};A.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};A.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};A.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};$e.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};$e.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ze.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};Ze.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Ze.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};Ze.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Ze.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Ze.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});ct.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(ct.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Vg},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Hf.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};At.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(mn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(at.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===fo},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(fo)}}});at.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?fo:ns),this};at.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},at.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Qe.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};Qe.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new at(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};Qe.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};Qe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Qe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Qe.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};Qe.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Qe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});us.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?fo:ns),this};us.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};_r.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};_r.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};_r.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Wl.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ut.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===_f}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Ct.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Je.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};Je.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Je.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Je.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Je.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Je.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Je.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Je.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Je.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Je.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Je.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Je.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Je.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Je.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Je.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Je.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Je.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Je.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Je.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Je.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Je.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Je.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Je.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Je.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Je.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Je.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?et:Jn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(Of.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Bt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});aM.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new rM().load(i,function(n){e.setBuffer(n)}),this};Ul.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};Ul.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};yi.crossOrigin=void 0;yi.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new jr;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};yi.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Xb;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};yi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};yi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);class sc extends ct{constructor(){const e=sc.SkyShader,t=new Ct({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:zl.clone(e.uniforms),side:zt,depthWrite:!1});super(new wi(1,1,1),t),this.isSky=!0}}sc.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new A},up:{value:new A(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;
		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;
		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );
		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );
		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;
		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}
		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}
		void main() {
			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far
			vSunDirection = normalize( sunPosition );
			vSunE = sunIntensity( dot( vSunDirection, up ) );
			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );
			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );
			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;
			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;
		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;
		uniform float mieDirectionalG;
		uniform vec3 up;
		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );
		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;
		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)
		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;
		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;
		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}
		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}
		void main() {
			vec3 direction = normalize( vWorldPosition - cameraPos );
			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;
			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );
			// in scattering
			float cosTheta = dot( direction, vSunDirection );
			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;
			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;
			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );
			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;
			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;
			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );
			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );
			gl_FragColor = vec4( retColor, 1.0 );
			#include <tonemapping_fragment>
			#include <encodings_fragment>
		}`};var dd="/clouds/assets/rgba-noise.e59217a8.png";class oc extends ct{constructor(){const e=oc.SkyShader,t=new Ct({name:"DynamicSkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:zl.clone(e.uniforms),side:zt,depthWrite:!1,wireframe:!1});super(new ur(200,100),t),this.isDynamicSky=!0,this.material=t}}const EM=new jr,TM=EM.load(dd,i=>{i.wrapS=i.wrapT=Qr});oc.SkyShader={uniforms:{iTime:{value:0},iChannel0:{value:TM},iResolution:{type:"v2",value:new ue(window.innerWidth,window.innerHeight)},iMouse:{type:"vec2",value:new ue(0,0)}},vertexShader:`
      varying vec2 vUv;
          
      void main()
      {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  
        vUv = uv;
      }
    `,fragmentShader:`
  
    //bring in your uniforms of time and the two textures to use in the shader
    uniform float iTime;
    uniform sampler2D iChannel0;
    uniform vec2 iResolution;
    uniform vec2 iMouse;
    
    //get the uv from the vertex shader above
    varying vec2 vUv;
    
// The sun, the sky and the clouds. By StillTravelling
// https://www.shadertoy.com/view/tdSXzD
// Very much a messy hack sorry!!

// Many Thank yous go to the below for their amazing work
// Day and night sky cycle. By L\xE1szl\xF3 Matuska (@BitOfGold)
// Creates a sky texture for a skydome
// https://www.shadertoy.com/view/ltlSWB

// Weather. By David Hoskins, May 2014.
// https://www.shadertoy.com/view/4dsXWn

// Edge of atmosphere
// created by dmytro rubalskyi (ruba)
// https://www.shadertoy.com/view/XlXGzB

// Auroras
// created by nimitz
// https://www.shadertoy.com/view/XtGGRt

// Sorry to those I've missed out!!

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

void main( ) {

	float AR = iResolution.x/iResolution.y;
    float M = 1.0; //canvas.innerWidth/M //canvas.innerHeight/M --res
    
    vec2 uvMouse = (iMouse.xy / iResolution.xy);
    uvMouse.x *= AR;
    
   	vec2 uv0 = vUv;
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
	gl_FragColor = vec4(pow(color, vec3(1.0/2.2)), 1.); //gamma correct
}
  `};function AM(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new Qe;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(l.userData.mergedUserData=l.userData.mergedUserData||[],l.userData.mergedUserData.push(h.userData),e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=vh(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let m=0;m<o[u].length;++m)d.push(o[u][m][f]);const g=vh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function vh(i){let e,t,n,r=0;for(let a=0;a<i.length;++a){const l=i[a];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;r+=l.array.length}const s=new e(r);let o=0;for(let a=0;a<i.length;++a)s.set(i[a].array,o),o+=i[a].array.length;return new at(s,t,n)}var CM="/clouds/assets/cloud.10dd8b75.png",RM="/clouds/assets/sign.fb3ca358.png";var LM=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t};const PM={class:"wheel-delta"},DM={__name:"Clouds",setup(i){function e(O,z){return Math.floor(Math.random()*(z-O+1)+O)}const t=40,n=10,r=80,s="#1e4877",o=window.innerWidth,a=window.innerHeight,l=Sr(null),c=Sr(0),u=Sr(0);let h=Sr(160),f=Sr(0),d,g,m,p,v,S;const C=new ue;let T=0;const E=new bM;function I(){d=new At(70,o/a,1,1e3),d.position.x=Math.floor(r/2),d.position.y=f.value,g=new Wl,m=new Je({antialias:!0,alpha:!0}),m.autoClear=!1,m.setClearColor(16777215,0),m.setSize(o,a),l.value.appendChild(m.domElement)}function H(){const O=new Fo(s,1,1e3),z=new jr().load(CM);z.magFilter=Vc,z.minFilter=Vc;const U=[],$=`
        varying vec2 vUv;
        void main()
        {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,ce=`
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
      `,se=new Ct({uniforms:{map:{type:"t",value:z},fogColor:{type:"c",value:O.color},fogNear:{type:"f",value:O.near},fogFar:{type:"f",value:O.far}},vertexShader:$,fragmentShader:ce,depthWrite:!1,depthTest:!1,transparent:!0});for(let be=0;be<=t;be++){let we=[];for(let K=0;K<=100;K++){const Pe=e(64,88),Ee=new ur(Pe,Pe);Ee.translate(Math.random()*1e3-500,Math.random()*200-15,be*Math.random()*n),we.push(Ee)}U.push(...we)}const le=AM(U);p=new ct(le,se),g.add(p)}function b(){const O=new jr().load(RM),z=new ct(new wi(60,60*1.75945017),new cs({map:O,transparent:!0}));z.position.z=-20,z.position.y=230,z.position.x=Math.floor(r/2),g.add(z)}function R(){h.value=Math.max(120-c.value,80),f.value=Math.min(220,c.value),d.position.y>60&&(v.uniforms.iTime.value+=.1),d.position.y=f.value,d.position.z=h.value,p.position.x+=(T-d.position.x)*.001,m.render(g,d),requestAnimationFrame(R)}function k(O){c.value=Math.max(0,c.value+(O.wheelDeltaY||O.deltaY)*-.007)}function B(O){const z=O.targetTouches?O.targetTouches[0]:O;u.value=z.pageY}function he(O){const z=O.targetTouches?O.targetTouches[0]:O;c.value=z.pageY+u.value,u.value=z.pageY}function ae(O){let z=window.innerWidth,U=window.innerHeight;d.aspect=z/U,d.aspect=u0.clamp(d.aspect,9/16,16/9),d.updateProjectionMatrix(),z/U>16/9&&(U=z*9/16),z/U<9/16&&(z=U*9/16),m.setSize(z,U),m.setPixelRatio(Math.max(1,window.devicePixelRatio)),v.uniforms.iResolution.value.set(2e3,500),m.render(g,d)}function N(O){T=(O.clientX-window.innerWidth/2)*.25,console.log(T),!(h.value<60)&&(C.x=O.clientX/window.innerWidth*2-1,C.y=-(O.clientY/window.innerHeight)*2+1,v.uniforms.iMouse.value.set(O.clientX,O.target.clientHeight-O.clientY))}function ee(O){if(h.value>10)return;E.setFromCamera(C,d);const z=E.intersectObjects(g.children);for(let U=0;U<z.length&&z[U].object.material.color;U++){if(z[U].object.material.color.set(Math.random()*16777216),S)S.reset();else{const $=animations[0];S=mixer.clipAction($),S.loop=void 0,S.play()}break}}function j(){const O=new jr;v=new Ct({uniforms:{iTime:{value:0},iChannel0:{type:"sampler2D",value:O.load(dd,$=>{$.wrapS=$.wrapT=Qr})},iResolution:{type:"v2",value:new ue(window.innerWidth,window.innerHeight)},iMouse:{type:"vec2",value:new ue}},vertexShader:`
    varying vec2 vUv;
        
    void main()
    {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

      vUv = uv;
    }
  `,fragmentShader:`
  
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
  `,wireframe:!1,side:vi});const z=new ur(400,200),U=new ct(z,v);U.position.z=-20,U.position.x=Math.floor(r/2),U.position.y=230,g.add(U)}return El(()=>{I(),H(),b(),j(),R(),document.body.addEventListener("wheel",k),document.body.addEventListener("touchstart",B),document.body.addEventListener("touchmove",he),window.addEventListener("resize",ae),window.addEventListener("mousemove",N,!1),window.addEventListener("mousedown",ee,!1)}),Tl(()=>{document.body.removeEventListener("wheel",k),document.body.removeEventListener("touchstart",B),document.body.removeEventListener("touchmove",he),window.removeEventListener("resize",ae),window.removeEventListener("mousemove",N),window.removeEventListener("mousedown",ee)}),(O,z)=>(ff(),am(Yt,null,[lo("h1",PM,Ed(Hh(h)),1),lo("div",{class:"clouds-wrapper",ref_key:"cloudsWrapper",ref:l},null,512)],64))}};var IM=LM(DM,[["__scopeId","data-v-a9f8b1ba"]]);const FM={__name:"App",setup(i){return(e,t)=>(ff(),lm(IM))}};Xm(FM).mount("#app");
