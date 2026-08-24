function FC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function UC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ZE={exports:{}},Pc={},ew={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),BC=Symbol.for("react.portal"),$C=Symbol.for("react.fragment"),zC=Symbol.for("react.strict_mode"),qC=Symbol.for("react.profiler"),KC=Symbol.for("react.provider"),GC=Symbol.for("react.context"),WC=Symbol.for("react.forward_ref"),HC=Symbol.for("react.suspense"),QC=Symbol.for("react.memo"),JC=Symbol.for("react.lazy"),I_=Symbol.iterator;function YC(t){return t===null||typeof t!="object"?null:(t=I_&&t[I_]||t["@@iterator"],typeof t=="function"?t:null)}var tw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nw=Object.assign,rw={};function Js(t,e,n){this.props=t,this.context=e,this.refs=rw,this.updater=n||tw}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iw(){}iw.prototype=Js.prototype;function pp(t,e,n){this.props=t,this.context=e,this.refs=rw,this.updater=n||tw}var mp=pp.prototype=new iw;mp.constructor=pp;nw(mp,Js.prototype);mp.isPureReactComponent=!0;var T_=Array.isArray,sw=Object.prototype.hasOwnProperty,gp={current:null},ow={key:!0,ref:!0,__self:!0,__source:!0};function aw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sw.call(e,r)&&!ow.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ya,type:t,key:s,ref:o,props:i,_owner:gp.current}}function XC(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _p(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function ZC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var S_=/\/+/g;function Uh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZC(""+t.key):e.toString(36)}function uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ya:case BC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Uh(o,0):r,T_(i)?(n="",t!=null&&(n=t.replace(S_,"$&/")+"/"),uu(i,e,n,"",function(c){return c})):i!=null&&(_p(i)&&(i=XC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(S_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",T_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Uh(s,a);o+=uu(s,e,n,l,i)}else if(l=YC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Uh(s,a++),o+=uu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ex(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},cu={transition:null},tx={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:cu,ReactCurrentOwner:gp};function lw(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!_p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Js;se.Fragment=$C;se.Profiler=qC;se.PureComponent=pp;se.StrictMode=zC;se.Suspense=HC;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tx;se.act=lw;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=nw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sw.call(e,l)&&!ow.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ya,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:GC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KC,_context:t},t.Consumer=t};se.createElement=aw;se.createFactory=function(t){var e=aw.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:WC,render:t}};se.isValidElement=_p;se.lazy=function(t){return{$$typeof:JC,_payload:{_status:-1,_result:t},_init:ex}};se.memo=function(t,e){return{$$typeof:QC,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=cu.transition;cu.transition={};try{t()}finally{cu.transition=e}};se.unstable_act=lw;se.useCallback=function(t,e){return Ct.current.useCallback(t,e)};se.useContext=function(t){return Ct.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};se.useEffect=function(t,e){return Ct.current.useEffect(t,e)};se.useId=function(){return Ct.current.useId()};se.useImperativeHandle=function(t,e,n){return Ct.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Ct.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Ct.current.useReducer(t,e,n)};se.useRef=function(t){return Ct.current.useRef(t)};se.useState=function(t){return Ct.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Ct.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Ct.current.useTransition()};se.version="18.3.1";ew.exports=se;var x=ew.exports;const nx=UC(x),rx=FC({__proto__:null,default:nx},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix=x,sx=Symbol.for("react.element"),ox=Symbol.for("react.fragment"),ax=Object.prototype.hasOwnProperty,lx=ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ux={key:!0,ref:!0,__self:!0,__source:!0};function uw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ax.call(e,r)&&!ux.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:sx,type:t,key:s,ref:o,props:i,_owner:lx.current}}Pc.Fragment=ox;Pc.jsx=uw;Pc.jsxs=uw;ZE.exports=Pc;var f=ZE.exports,cw={exports:{}},Gt={},hw={exports:{}},dw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,$){var Z=z.length;z.push($);e:for(;0<Z;){var ne=Z-1>>>1,de=z[ne];if(0<i(de,$))z[ne]=$,z[Z]=de,Z=ne;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var $=z[0],Z=z.pop();if(Z!==$){z[0]=Z;e:for(var ne=0,de=z.length,Se=de>>>1;ne<Se;){var Pt=2*(ne+1)-1,Rt=z[Pt],on=Pt+1,an=z[on];if(0>i(Rt,Z))on<de&&0>i(an,Rt)?(z[ne]=an,z[on]=Z,ne=on):(z[ne]=Rt,z[Pt]=Z,ne=Pt);else if(on<de&&0>i(an,Z))z[ne]=an,z[on]=Z,ne=on;else break e}}return $}function i(z,$){var Z=z.sortIndex-$.sortIndex;return Z!==0?Z:z.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,g=3,I=!1,S=!1,N=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var $=n(c);$!==null;){if($.callback===null)r(c);else if($.startTime<=z)r(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function D(z){if(N=!1,w(z),!S)if(n(l)!==null)S=!0,_e(L);else{var $=n(c);$!==null&&Ee(D,$.startTime-z)}}function L(z,$){S=!1,N&&(N=!1,T(_),_=-1),I=!0;var Z=g;try{for(w($),p=n(l);p!==null&&(!(p.expirationTime>$)||z&&!k());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,g=p.priorityLevel;var de=ne(p.expirationTime<=$);$=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(l)&&r(l),w($)}else r(l);p=n(l)}if(p!==null)var Se=!0;else{var Pt=n(c);Pt!==null&&Ee(D,Pt.startTime-$),Se=!1}return Se}finally{p=null,g=Z,I=!1}}var j=!1,v=null,_=-1,A=5,P=-1;function k(){return!(t.unstable_now()-P<A)}function R(){if(v!==null){var z=t.unstable_now();P=z;var $=!0;try{$=v(!0,z)}finally{$?C():(j=!1,v=null)}}else j=!1}var C;if(typeof E=="function")C=function(){E(R)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,oe=H.port2;H.port1.onmessage=R,C=function(){oe.postMessage(null)}}else C=function(){b(R,0)};function _e(z){v=z,j||(j=!0,C())}function Ee(z,$){_=b(function(){z(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||I||(S=!0,_e(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var Z=g;g=$;try{return z()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,$){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=g;g=z;try{return $()}finally{g=Z}},t.unstable_scheduleCallback=function(z,$,Z){var ne=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ne+Z:ne):Z=ne,z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Z+de,z={id:h++,callback:$,priorityLevel:z,startTime:Z,expirationTime:de,sortIndex:-1},Z>ne?(z.sortIndex=Z,e(c,z),n(l)===null&&z===n(c)&&(N?(T(_),_=-1):N=!0,Ee(D,Z-ne))):(z.sortIndex=de,e(l,z),S||I||(S=!0,_e(L))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var $=g;return function(){var Z=g;g=$;try{return z.apply(this,arguments)}finally{g=Z}}}})(dw);hw.exports=dw;var cx=hw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hx=x,qt=cx;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fw=new Set,ma={};function Fi(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(ma[t]=e,t=0;t<e.length;t++)fw.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dd=Object.prototype.hasOwnProperty,dx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A_={},C_={};function fx(t){return Dd.call(C_,t)?!0:Dd.call(A_,t)?!1:dx.test(t)?C_[t]=!0:(A_[t]=!0,!1)}function px(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mx(t,e,n,r){if(e===null||typeof e>"u"||px(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var yp=/[\-:]([a-z])/g;function vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yp,vp);ot[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yp,vp);ot[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yp,vp);ot[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ep(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mx(e,n,i,r)&&(n=null),r||i===null?fx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),pw=Symbol.for("react.provider"),mw=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),Md=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),gw=Symbol.for("react.offscreen"),x_=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=x_&&t[x_]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Bh;function zo(t){if(Bh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bh=e&&e[1]||""}return`
`+Bh+t}var $h=!1;function zh(t,e){if(!t||$h)return"";$h=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$h=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function gx(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=zh(t.type,!1),t;case 11:return t=zh(t.type.render,!1),t;case 1:return t=zh(t.type,!0),t;default:return""}}function Ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case as:return"Portal";case Vd:return"Profiler";case wp:return"StrictMode";case Od:return"Suspense";case Md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mw:return(t.displayName||"Context")+".Consumer";case pw:return(t._context.displayName||"Context")+".Provider";case Ip:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tp:return e=t.displayName||null,e!==null?e:Ld(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return Ld(t(e))}catch{}}return null}function _x(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ld(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _w(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yx(t){var e=_w(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=yx(t))}function yw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_w(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jd(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function P_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vw(t,e){e=e.checked,e!=null&&Ep(t,"checked",e,!1)}function Fd(t,e){vw(t,e);var n=Mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ud(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function R_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ud(t,e,n){(e!=="number"||Ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qo=Array.isArray;function Es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function N_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(qo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function Ew(t,e){var n=Mr(e.value),r=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function k_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ww(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ww(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jl,Iw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vx=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){vx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function Tw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function Sw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Tw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ex=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zd(t,e){if(e){if(Ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=null;function Sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gd=null,ws=null,Is=null;function b_(t){if(t=el(t)){if(typeof Gd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Dc(e),Gd(t.stateNode,t.type,e))}}function Aw(t){ws?Is?Is.push(t):Is=[t]:ws=t}function Cw(){if(ws){var t=ws,e=Is;if(Is=ws=null,b_(t),e)for(t=0;t<e.length;t++)b_(e[t])}}function xw(t,e){return t(e)}function Pw(){}var qh=!1;function Rw(t,e,n){if(qh)return t(e,n);qh=!0;try{return xw(t,e,n)}finally{qh=!1,(ws!==null||Is!==null)&&(Pw(),Cw())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var r=Dc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Wd=!1;if(Wn)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){Wd=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{Wd=!1}function wx(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var ta=!1,Mu=null,Lu=!1,Hd=null,Ix={onError:function(t){ta=!0,Mu=t}};function Tx(t,e,n,r,i,s,o,a,l){ta=!1,Mu=null,wx.apply(Ix,arguments)}function Sx(t,e,n,r,i,s,o,a,l){if(Tx.apply(this,arguments),ta){if(ta){var c=Mu;ta=!1,Mu=null}else throw Error(B(198));Lu||(Lu=!0,Hd=c)}}function Ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D_(t){if(Ui(t)!==t)throw Error(B(188))}function Ax(t){var e=t.alternate;if(!e){if(e=Ui(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return D_(i),t;if(s===r)return D_(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function kw(t){return t=Ax(t),t!==null?bw(t):null}function bw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bw(t);if(e!==null)return e;t=t.sibling}return null}var Dw=qt.unstable_scheduleCallback,V_=qt.unstable_cancelCallback,Cx=qt.unstable_shouldYield,xx=qt.unstable_requestPaint,Ue=qt.unstable_now,Px=qt.unstable_getCurrentPriorityLevel,Ap=qt.unstable_ImmediatePriority,Vw=qt.unstable_UserBlockingPriority,ju=qt.unstable_NormalPriority,Rx=qt.unstable_LowPriority,Ow=qt.unstable_IdlePriority,Rc=null,xn=null;function Nx(t){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Rc,t,void 0,(t.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:Dx,kx=Math.log,bx=Math.LN2;function Dx(t){return t>>>=0,t===0?32:31-(kx(t)/bx|0)|0}var Fl=64,Ul=4194304;function Ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ko(a):(s&=o,s!==0&&(r=Ko(s)))}else o=n&~i,o!==0?r=Ko(o):s!==0&&(r=Ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-fn(e),i=1<<n,r|=t[n],e&=~i;return r}function Vx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ox(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Vx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mw(){var t=Fl;return Fl<<=1,!(Fl&4194240)&&(Fl=64),t}function Kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fn(e),t[e]=n}function Mx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-fn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function Lw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jw,xp,Fw,Uw,Bw,Jd=!1,Bl=[],Sr=null,Ar=null,Cr=null,ya=new Map,va=new Map,fr=[],Lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function O_(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function No(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=el(e),e!==null&&xp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jx(t,e,n,r,i){switch(e){case"focusin":return Sr=No(Sr,t,e,n,r,i),!0;case"dragenter":return Ar=No(Ar,t,e,n,r,i),!0;case"mouseover":return Cr=No(Cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ya.set(s,No(ya.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,va.set(s,No(va.get(s)||null,t,e,n,r,i)),!0}return!1}function $w(t){var e=ci(t.target);if(e!==null){var n=Ui(e);if(n!==null){if(e=n.tag,e===13){if(e=Nw(n),e!==null){t.blockedOn=e,Bw(t.priority,function(){Fw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kd=r,n.target.dispatchEvent(r),Kd=null}else return e=el(n),e!==null&&xp(e),t.blockedOn=n,!1;e.shift()}return!0}function M_(t,e,n){hu(t)&&n.delete(e)}function Fx(){Jd=!1,Sr!==null&&hu(Sr)&&(Sr=null),Ar!==null&&hu(Ar)&&(Ar=null),Cr!==null&&hu(Cr)&&(Cr=null),ya.forEach(M_),va.forEach(M_)}function ko(t,e){t.blockedOn===e&&(t.blockedOn=null,Jd||(Jd=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,Fx)))}function Ea(t){function e(i){return ko(i,t)}if(0<Bl.length){ko(Bl[0],t);for(var n=1;n<Bl.length;n++){var r=Bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&ko(Sr,t),Ar!==null&&ko(Ar,t),Cr!==null&&ko(Cr,t),ya.forEach(e),va.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)$w(n),n.blockedOn===null&&fr.shift()}var Ts=er.ReactCurrentBatchConfig,Uu=!0;function Ux(t,e,n,r){var i=me,s=Ts.transition;Ts.transition=null;try{me=1,Pp(t,e,n,r)}finally{me=i,Ts.transition=s}}function Bx(t,e,n,r){var i=me,s=Ts.transition;Ts.transition=null;try{me=4,Pp(t,e,n,r)}finally{me=i,Ts.transition=s}}function Pp(t,e,n,r){if(Uu){var i=Yd(t,e,n,r);if(i===null)td(t,e,r,Bu,n),O_(t,r);else if(jx(i,t,e,n,r))r.stopPropagation();else if(O_(t,r),e&4&&-1<Lx.indexOf(t)){for(;i!==null;){var s=el(i);if(s!==null&&jw(s),s=Yd(t,e,n,r),s===null&&td(t,e,r,Bu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else td(t,e,r,null,n)}}var Bu=null;function Yd(t,e,n,r){if(Bu=null,t=Sp(r),t=ci(t),t!==null)if(e=Ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Nw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bu=t,null}function zw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Px()){case Ap:return 1;case Vw:return 4;case ju:case Rx:return 16;case Ow:return 536870912;default:return 16}default:return 16}}var Er=null,Rp=null,du=null;function qw(){if(du)return du;var t,e=Rp,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return du=i.slice(t,1<r?1-r:void 0)}function fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function L_(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:L_,this.isPropagationStopped=L_,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Np=Wt(Ys),Za=Ve({},Ys,{view:0,detail:0}),$x=Wt(Za),Gh,Wh,bo,Nc=Ve({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(Gh=t.screenX-bo.screenX,Wh=t.screenY-bo.screenY):Wh=Gh=0,bo=t),Gh)},movementY:function(t){return"movementY"in t?t.movementY:Wh}}),j_=Wt(Nc),zx=Ve({},Nc,{dataTransfer:0}),qx=Wt(zx),Kx=Ve({},Za,{relatedTarget:0}),Hh=Wt(Kx),Gx=Ve({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Wx=Wt(Gx),Hx=Ve({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=Wt(Hx),Jx=Ve({},Ys,{data:0}),F_=Wt(Jx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zx[t])?!!e[t]:!1}function kp(){return eP}var tP=Ve({},Za,{key:function(t){if(t.key){var e=Yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kp,charCode:function(t){return t.type==="keypress"?fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nP=Wt(tP),rP=Ve({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U_=Wt(rP),iP=Ve({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kp}),sP=Wt(iP),oP=Ve({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),aP=Wt(oP),lP=Ve({},Nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uP=Wt(lP),cP=[9,13,27,32],bp=Wn&&"CompositionEvent"in window,na=null;Wn&&"documentMode"in document&&(na=document.documentMode);var hP=Wn&&"TextEvent"in window&&!na,Kw=Wn&&(!bp||na&&8<na&&11>=na),B_=" ",$_=!1;function Gw(t,e){switch(t){case"keyup":return cP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ww(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function dP(t,e){switch(t){case"compositionend":return Ww(e);case"keypress":return e.which!==32?null:($_=!0,B_);case"textInput":return t=e.data,t===B_&&$_?null:t;default:return null}}function fP(t,e){if(us)return t==="compositionend"||!bp&&Gw(t,e)?(t=qw(),du=Rp=Er=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kw&&e.locale!=="ko"?null:e.data;default:return null}}var pP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pP[t.type]:e==="textarea"}function Hw(t,e,n,r){Aw(r),e=$u(e,"onChange"),0<e.length&&(n=new Np("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ra=null,wa=null;function mP(t){sI(t,0)}function kc(t){var e=ds(t);if(yw(e))return t}function gP(t,e){if(t==="change")return e}var Qw=!1;if(Wn){var Qh;if(Wn){var Jh="oninput"in document;if(!Jh){var q_=document.createElement("div");q_.setAttribute("oninput","return;"),Jh=typeof q_.oninput=="function"}Qh=Jh}else Qh=!1;Qw=Qh&&(!document.documentMode||9<document.documentMode)}function K_(){ra&&(ra.detachEvent("onpropertychange",Jw),wa=ra=null)}function Jw(t){if(t.propertyName==="value"&&kc(wa)){var e=[];Hw(e,wa,t,Sp(t)),Rw(mP,e)}}function _P(t,e,n){t==="focusin"?(K_(),ra=e,wa=n,ra.attachEvent("onpropertychange",Jw)):t==="focusout"&&K_()}function yP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(wa)}function vP(t,e){if(t==="click")return kc(e)}function EP(t,e){if(t==="input"||t==="change")return kc(e)}function wP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:wP;function Ia(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dd.call(e,i)||!mn(t[i],e[i]))return!1}return!0}function G_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function W_(t,e){var n=G_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=G_(n)}}function Yw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xw(){for(var t=window,e=Ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ou(t.document)}return e}function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IP(t){var e=Xw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yw(n.ownerDocument.documentElement,n)){if(r!==null&&Dp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=W_(n,s);var o=W_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var TP=Wn&&"documentMode"in document&&11>=document.documentMode,cs=null,Xd=null,ia=null,Zd=!1;function H_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zd||cs==null||cs!==Ou(r)||(r=cs,"selectionStart"in r&&Dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&Ia(ia,r)||(ia=r,r=$u(Xd,"onSelect"),0<r.length&&(e=new Np("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cs)))}function zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:zl("Animation","AnimationEnd"),animationiteration:zl("Animation","AnimationIteration"),animationstart:zl("Animation","AnimationStart"),transitionend:zl("Transition","TransitionEnd")},Yh={},Zw={};Wn&&(Zw=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function bc(t){if(Yh[t])return Yh[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zw)return Yh[t]=e[n];return t}var eI=bc("animationend"),tI=bc("animationiteration"),nI=bc("animationstart"),rI=bc("transitionend"),iI=new Map,Q_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){iI.set(t,e),Fi(e,[t])}for(var Xh=0;Xh<Q_.length;Xh++){var Zh=Q_[Xh],SP=Zh.toLowerCase(),AP=Zh[0].toUpperCase()+Zh.slice(1);Br(SP,"on"+AP)}Br(eI,"onAnimationEnd");Br(tI,"onAnimationIteration");Br(nI,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(rI,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function J_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Sx(r,e,void 0,t),t.currentTarget=null}function sI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;J_(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;J_(i,a,c),s=l}}}if(Lu)throw t=Hd,Lu=!1,Hd=null,t}function Ie(t,e){var n=e[sf];n===void 0&&(n=e[sf]=new Set);var r=t+"__bubble";n.has(r)||(oI(e,t,2,!1),n.add(r))}function ed(t,e,n){var r=0;e&&(r|=4),oI(n,t,r,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[ql]){t[ql]=!0,fw.forEach(function(n){n!=="selectionchange"&&(CP.has(n)||ed(n,!1,t),ed(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,ed("selectionchange",!1,e))}}function oI(t,e,n,r){switch(zw(e)){case 1:var i=Ux;break;case 4:i=Bx;break;default:i=Pp}n=i.bind(null,e,n,t),i=void 0,!Wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function td(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ci(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Rw(function(){var c=s,h=Sp(n),p=[];e:{var g=iI.get(t);if(g!==void 0){var I=Np,S=t;switch(t){case"keypress":if(fu(n)===0)break e;case"keydown":case"keyup":I=nP;break;case"focusin":S="focus",I=Hh;break;case"focusout":S="blur",I=Hh;break;case"beforeblur":case"afterblur":I=Hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=j_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=qx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=sP;break;case eI:case tI:case nI:I=Wx;break;case rI:I=aP;break;case"scroll":I=$x;break;case"wheel":I=uP;break;case"copy":case"cut":case"paste":I=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=U_}var N=(e&4)!==0,b=!N&&t==="scroll",T=N?g!==null?g+"Capture":null:g;N=[];for(var E=c,w;E!==null;){w=E;var D=w.stateNode;if(w.tag===5&&D!==null&&(w=D,T!==null&&(D=_a(E,T),D!=null&&N.push(Sa(E,D,w)))),b)break;E=E.return}0<N.length&&(g=new I(g,S,null,n,h),p.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",g&&n!==Kd&&(S=n.relatedTarget||n.fromElement)&&(ci(S)||S[Hn]))break e;if((I||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,I?(S=n.relatedTarget||n.toElement,I=c,S=S?ci(S):null,S!==null&&(b=Ui(S),S!==b||S.tag!==5&&S.tag!==6)&&(S=null)):(I=null,S=c),I!==S)){if(N=j_,D="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=U_,D="onPointerLeave",T="onPointerEnter",E="pointer"),b=I==null?g:ds(I),w=S==null?g:ds(S),g=new N(D,E+"leave",I,n,h),g.target=b,g.relatedTarget=w,D=null,ci(h)===c&&(N=new N(T,E+"enter",S,n,h),N.target=w,N.relatedTarget=b,D=N),b=D,I&&S)t:{for(N=I,T=S,E=0,w=N;w;w=Yi(w))E++;for(w=0,D=T;D;D=Yi(D))w++;for(;0<E-w;)N=Yi(N),E--;for(;0<w-E;)T=Yi(T),w--;for(;E--;){if(N===T||T!==null&&N===T.alternate)break t;N=Yi(N),T=Yi(T)}N=null}else N=null;I!==null&&Y_(p,g,I,N,!1),S!==null&&b!==null&&Y_(p,b,S,N,!0)}}e:{if(g=c?ds(c):window,I=g.nodeName&&g.nodeName.toLowerCase(),I==="select"||I==="input"&&g.type==="file")var L=gP;else if(z_(g))if(Qw)L=EP;else{L=yP;var j=_P}else(I=g.nodeName)&&I.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(L=vP);if(L&&(L=L(t,c))){Hw(p,L,n,h);break e}j&&j(t,g,c),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Ud(g,"number",g.value)}switch(j=c?ds(c):window,t){case"focusin":(z_(j)||j.contentEditable==="true")&&(cs=j,Xd=c,ia=null);break;case"focusout":ia=Xd=cs=null;break;case"mousedown":Zd=!0;break;case"contextmenu":case"mouseup":case"dragend":Zd=!1,H_(p,n,h);break;case"selectionchange":if(TP)break;case"keydown":case"keyup":H_(p,n,h)}var v;if(bp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else us?Gw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Kw&&n.locale!=="ko"&&(us||_!=="onCompositionStart"?_==="onCompositionEnd"&&us&&(v=qw()):(Er=h,Rp="value"in Er?Er.value:Er.textContent,us=!0)),j=$u(c,_),0<j.length&&(_=new F_(_,t,null,n,h),p.push({event:_,listeners:j}),v?_.data=v:(v=Ww(n),v!==null&&(_.data=v)))),(v=hP?dP(t,n):fP(t,n))&&(c=$u(c,"onBeforeInput"),0<c.length&&(h=new F_("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=v))}sI(p,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $u(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_a(t,n),s!=null&&r.unshift(Sa(t,s,i)),s=_a(t,e),s!=null&&r.push(Sa(t,s,i))),t=t.return}return r}function Yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Y_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=_a(n,s),l!=null&&o.unshift(Sa(n,l,a))):i||(l=_a(n,s),l!=null&&o.push(Sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xP=/\r\n?/g,PP=/\u0000|\uFFFD/g;function X_(t){return(typeof t=="string"?t:""+t).replace(xP,`
`).replace(PP,"")}function Kl(t,e,n){if(e=X_(e),X_(t)!==e&&n)throw Error(B(425))}function zu(){}var ef=null,tf=null;function nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rf=typeof setTimeout=="function"?setTimeout:void 0,RP=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,NP=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(t){return Z_.resolve(null).then(t).catch(kP)}:rf;function kP(t){setTimeout(function(){throw t})}function nd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ea(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ea(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ey(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Xs,Aa="__reactProps$"+Xs,Hn="__reactContainer$"+Xs,sf="__reactEvents$"+Xs,bP="__reactListeners$"+Xs,DP="__reactHandles$"+Xs;function ci(t){var e=t[Tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[Tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ey(t);t!==null;){if(n=t[Tn])return n;t=ey(t)}return e}t=n,n=t.parentNode}return null}function el(t){return t=t[Tn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Dc(t){return t[Aa]||null}var of=[],fs=-1;function $r(t){return{current:t}}function Te(t){0>fs||(t.current=of[fs],of[fs]=null,fs--)}function ve(t,e){fs++,of[fs]=t.current,t.current=e}var Lr={},mt=$r(Lr),Vt=$r(!1),Ii=Lr;function bs(t,e){var n=t.type.contextTypes;if(!n)return Lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function qu(){Te(Vt),Te(mt)}function ty(t,e,n){if(mt.current!==Lr)throw Error(B(168));ve(mt,e),ve(Vt,n)}function aI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,_x(t)||"Unknown",i));return Ve({},n,r)}function Ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,Ii=mt.current,ve(mt,t),ve(Vt,Vt.current),!0}function ny(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=aI(t,e,Ii),r.__reactInternalMemoizedMergedChildContext=t,Te(Vt),Te(mt),ve(mt,t)):Te(Vt),ve(Vt,n)}var Mn=null,Vc=!1,rd=!1;function lI(t){Mn===null?Mn=[t]:Mn.push(t)}function VP(t){Vc=!0,lI(t)}function zr(){if(!rd&&Mn!==null){rd=!0;var t=0,e=me;try{var n=Mn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mn=null,Vc=!1}catch(i){throw Mn!==null&&(Mn=Mn.slice(t+1)),Dw(Ap,zr),i}finally{me=e,rd=!1}}return null}var ps=[],ms=0,Gu=null,Wu=0,Ht=[],Qt=0,Ti=null,Ln=1,jn="";function ni(t,e){ps[ms++]=Wu,ps[ms++]=Gu,Gu=t,Wu=e}function uI(t,e,n){Ht[Qt++]=Ln,Ht[Qt++]=jn,Ht[Qt++]=Ti,Ti=t;var r=Ln;t=jn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var s=32-fn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-fn(e)+i|n<<i|r,jn=s+t}else Ln=1<<s|n<<i|r,jn=t}function Vp(t){t.return!==null&&(ni(t,1),uI(t,1,0))}function Op(t){for(;t===Gu;)Gu=ps[--ms],ps[ms]=null,Wu=ps[--ms],ps[ms]=null;for(;t===Ti;)Ti=Ht[--Qt],Ht[Qt]=null,jn=Ht[--Qt],Ht[Qt]=null,Ln=Ht[--Qt],Ht[Qt]=null}var zt=null,Ut=null,Ce=!1,dn=null;function cI(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ry(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Ut=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ti!==null?{id:Ln,overflow:jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Ut=null,!0):!1;default:return!1}}function af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lf(t){if(Ce){var e=Ut;if(e){var n=e;if(!ry(t,e)){if(af(t))throw Error(B(418));e=xr(n.nextSibling);var r=zt;e&&ry(t,e)?cI(r,n):(t.flags=t.flags&-4097|2,Ce=!1,zt=t)}}else{if(af(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ce=!1,zt=t}}}function iy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function Gl(t){if(t!==zt)return!1;if(!Ce)return iy(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nf(t.type,t.memoizedProps)),e&&(e=Ut)){if(af(t))throw hI(),Error(B(418));for(;e;)cI(t,e),e=xr(e.nextSibling)}if(iy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=zt?xr(t.stateNode.nextSibling):null;return!0}function hI(){for(var t=Ut;t;)t=xr(t.nextSibling)}function Ds(){Ut=zt=null,Ce=!1}function Mp(t){dn===null?dn=[t]:dn.push(t)}var OP=er.ReactCurrentBatchConfig;function Do(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Wl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sy(t){var e=t._init;return e(t._payload)}function dI(t){function e(T,E){if(t){var w=T.deletions;w===null?(T.deletions=[E],T.flags|=16):w.push(E)}}function n(T,E){if(!t)return null;for(;E!==null;)e(T,E),E=E.sibling;return null}function r(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function i(T,E){return T=kr(T,E),T.index=0,T.sibling=null,T}function s(T,E,w){return T.index=w,t?(w=T.alternate,w!==null?(w=w.index,w<E?(T.flags|=2,E):w):(T.flags|=2,E)):(T.flags|=1048576,E)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,E,w,D){return E===null||E.tag!==6?(E=cd(w,T.mode,D),E.return=T,E):(E=i(E,w),E.return=T,E)}function l(T,E,w,D){var L=w.type;return L===ls?h(T,E,w.props.children,D,w.key):E!==null&&(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===hr&&sy(L)===E.type)?(D=i(E,w.props),D.ref=Do(T,E,w),D.return=T,D):(D=Eu(w.type,w.key,w.props,null,T.mode,D),D.ref=Do(T,E,w),D.return=T,D)}function c(T,E,w,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==w.containerInfo||E.stateNode.implementation!==w.implementation?(E=hd(w,T.mode,D),E.return=T,E):(E=i(E,w.children||[]),E.return=T,E)}function h(T,E,w,D,L){return E===null||E.tag!==7?(E=gi(w,T.mode,D,L),E.return=T,E):(E=i(E,w),E.return=T,E)}function p(T,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return E=cd(""+E,T.mode,w),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ml:return w=Eu(E.type,E.key,E.props,null,T.mode,w),w.ref=Do(T,null,E),w.return=T,w;case as:return E=hd(E,T.mode,w),E.return=T,E;case hr:var D=E._init;return p(T,D(E._payload),w)}if(qo(E)||Po(E))return E=gi(E,T.mode,w,null),E.return=T,E;Wl(T,E)}return null}function g(T,E,w,D){var L=E!==null?E.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return L!==null?null:a(T,E,""+w,D);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ml:return w.key===L?l(T,E,w,D):null;case as:return w.key===L?c(T,E,w,D):null;case hr:return L=w._init,g(T,E,L(w._payload),D)}if(qo(w)||Po(w))return L!==null?null:h(T,E,w,D,null);Wl(T,w)}return null}function I(T,E,w,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(w)||null,a(E,T,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ml:return T=T.get(D.key===null?w:D.key)||null,l(E,T,D,L);case as:return T=T.get(D.key===null?w:D.key)||null,c(E,T,D,L);case hr:var j=D._init;return I(T,E,w,j(D._payload),L)}if(qo(D)||Po(D))return T=T.get(w)||null,h(E,T,D,L,null);Wl(E,D)}return null}function S(T,E,w,D){for(var L=null,j=null,v=E,_=E=0,A=null;v!==null&&_<w.length;_++){v.index>_?(A=v,v=null):A=v.sibling;var P=g(T,v,w[_],D);if(P===null){v===null&&(v=A);break}t&&v&&P.alternate===null&&e(T,v),E=s(P,E,_),j===null?L=P:j.sibling=P,j=P,v=A}if(_===w.length)return n(T,v),Ce&&ni(T,_),L;if(v===null){for(;_<w.length;_++)v=p(T,w[_],D),v!==null&&(E=s(v,E,_),j===null?L=v:j.sibling=v,j=v);return Ce&&ni(T,_),L}for(v=r(T,v);_<w.length;_++)A=I(v,T,_,w[_],D),A!==null&&(t&&A.alternate!==null&&v.delete(A.key===null?_:A.key),E=s(A,E,_),j===null?L=A:j.sibling=A,j=A);return t&&v.forEach(function(k){return e(T,k)}),Ce&&ni(T,_),L}function N(T,E,w,D){var L=Po(w);if(typeof L!="function")throw Error(B(150));if(w=L.call(w),w==null)throw Error(B(151));for(var j=L=null,v=E,_=E=0,A=null,P=w.next();v!==null&&!P.done;_++,P=w.next()){v.index>_?(A=v,v=null):A=v.sibling;var k=g(T,v,P.value,D);if(k===null){v===null&&(v=A);break}t&&v&&k.alternate===null&&e(T,v),E=s(k,E,_),j===null?L=k:j.sibling=k,j=k,v=A}if(P.done)return n(T,v),Ce&&ni(T,_),L;if(v===null){for(;!P.done;_++,P=w.next())P=p(T,P.value,D),P!==null&&(E=s(P,E,_),j===null?L=P:j.sibling=P,j=P);return Ce&&ni(T,_),L}for(v=r(T,v);!P.done;_++,P=w.next())P=I(v,T,_,P.value,D),P!==null&&(t&&P.alternate!==null&&v.delete(P.key===null?_:P.key),E=s(P,E,_),j===null?L=P:j.sibling=P,j=P);return t&&v.forEach(function(R){return e(T,R)}),Ce&&ni(T,_),L}function b(T,E,w,D){if(typeof w=="object"&&w!==null&&w.type===ls&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ml:e:{for(var L=w.key,j=E;j!==null;){if(j.key===L){if(L=w.type,L===ls){if(j.tag===7){n(T,j.sibling),E=i(j,w.props.children),E.return=T,T=E;break e}}else if(j.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===hr&&sy(L)===j.type){n(T,j.sibling),E=i(j,w.props),E.ref=Do(T,j,w),E.return=T,T=E;break e}n(T,j);break}else e(T,j);j=j.sibling}w.type===ls?(E=gi(w.props.children,T.mode,D,w.key),E.return=T,T=E):(D=Eu(w.type,w.key,w.props,null,T.mode,D),D.ref=Do(T,E,w),D.return=T,T=D)}return o(T);case as:e:{for(j=w.key;E!==null;){if(E.key===j)if(E.tag===4&&E.stateNode.containerInfo===w.containerInfo&&E.stateNode.implementation===w.implementation){n(T,E.sibling),E=i(E,w.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else e(T,E);E=E.sibling}E=hd(w,T.mode,D),E.return=T,T=E}return o(T);case hr:return j=w._init,b(T,E,j(w._payload),D)}if(qo(w))return S(T,E,w,D);if(Po(w))return N(T,E,w,D);Wl(T,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,E!==null&&E.tag===6?(n(T,E.sibling),E=i(E,w),E.return=T,T=E):(n(T,E),E=cd(w,T.mode,D),E.return=T,T=E),o(T)):n(T,E)}return b}var Vs=dI(!0),fI=dI(!1),Hu=$r(null),Qu=null,gs=null,Lp=null;function jp(){Lp=gs=Qu=null}function Fp(t){var e=Hu.current;Te(Hu),t._currentValue=e}function uf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Qu=t,Lp=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(Lp!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(Qu===null)throw Error(B(308));gs=t,Qu.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var hi=null;function Up(t){hi===null?hi=[t]:hi.push(t)}function pI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Up(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qn(t,r)}function Qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function Bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qn(t,n)}return i=r.interleaved,i===null?(e.next=e,Up(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qn(t,n)}function pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cp(t,n)}}function oy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ju(t,e,n,r){var i=t.updateQueue;dr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,h=c=l=null,a=s;do{var g=a.lane,I=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:I,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,N=a;switch(g=e,I=n,N.tag){case 1:if(S=N.payload,typeof S=="function"){p=S.call(I,p,g);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=N.payload,g=typeof S=="function"?S.call(I,p,g):S,g==null)break e;p=Ve({},p,g);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else I={eventTime:I,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=I,l=p):h=h.next=I,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=p}}function ay(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var tl={},Pn=$r(tl),Ca=$r(tl),xa=$r(tl);function di(t){if(t===tl)throw Error(B(174));return t}function $p(t,e){switch(ve(xa,e),ve(Ca,t),ve(Pn,tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}Te(Pn),ve(Pn,e)}function Os(){Te(Pn),Te(Ca),Te(xa)}function gI(t){di(xa.current);var e=di(Pn.current),n=$d(e,t.type);e!==n&&(ve(Ca,t),ve(Pn,n))}function zp(t){Ca.current===t&&(Te(Pn),Te(Ca))}var Re=$r(0);function Yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var id=[];function qp(){for(var t=0;t<id.length;t++)id[t]._workInProgressVersionPrimary=null;id.length=0}var mu=er.ReactCurrentDispatcher,sd=er.ReactCurrentBatchConfig,Si=0,ke=null,qe=null,Xe=null,Xu=!1,sa=!1,Pa=0,MP=0;function ct(){throw Error(B(321))}function Kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function Gp(t,e,n,r,i,s){if(Si=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mu.current=t===null||t.memoizedState===null?UP:BP,t=n(r,i),sa){s=0;do{if(sa=!1,Pa=0,25<=s)throw Error(B(301));s+=1,Xe=qe=null,e.updateQueue=null,mu.current=$P,t=n(r,i)}while(sa)}if(mu.current=Zu,e=qe!==null&&qe.next!==null,Si=0,Xe=qe=ke=null,Xu=!1,e)throw Error(B(300));return t}function Wp(){var t=Pa!==0;return Pa=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ke.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function nn(){if(qe===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Xe===null?ke.memoizedState:Xe.next;if(e!==null)Xe=e,qe=t;else{if(t===null)throw Error(B(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Xe===null?ke.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Ra(t,e){return typeof e=="function"?e(t):e}function od(t){var e=nn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Si&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,ke.lanes|=h,Ai|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,mn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,Ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ad(t){var e=nn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);mn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _I(){}function yI(t,e){var n=ke,r=nn(),i=e(),s=!mn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,Hp(wI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Na(9,EI.bind(null,n,r,i,e),void 0,null),Ze===null)throw Error(B(349));Si&30||vI(n,e,i)}return i}function vI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function EI(t,e,n,r){e.value=n,e.getSnapshot=r,II(e)&&TI(t)}function wI(t,e,n){return n(function(){II(e)&&TI(t)})}function II(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function TI(t){var e=Qn(t,1);e!==null&&pn(e,t,1,-1)}function ly(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=FP.bind(null,ke,t),[e.memoizedState,t]}function Na(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function SI(){return nn().memoizedState}function gu(t,e,n,r){var i=In();ke.flags|=t,i.memoizedState=Na(1|e,n,void 0,r===void 0?null:r)}function Oc(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&Kp(r,o.deps)){i.memoizedState=Na(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Na(1|e,n,s,r)}function uy(t,e){return gu(8390656,8,t,e)}function Hp(t,e){return Oc(2048,8,t,e)}function AI(t,e){return Oc(4,2,t,e)}function CI(t,e){return Oc(4,4,t,e)}function xI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function PI(t,e,n){return n=n!=null?n.concat([t]):null,Oc(4,4,xI.bind(null,e,t),n)}function Qp(){}function RI(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function NI(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kI(t,e,n){return Si&21?(mn(n,e)||(n=Mw(),ke.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function LP(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=sd.transition;sd.transition={};try{t(!1),e()}finally{me=n,sd.transition=r}}function bI(){return nn().memoizedState}function jP(t,e,n){var r=Nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},DI(t))VI(e,n);else if(n=pI(t,e,n,r),n!==null){var i=wt();pn(n,t,r,i),OI(n,e,r)}}function FP(t,e,n){var r=Nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(DI(t))VI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,mn(a,o)){var l=e.interleaved;l===null?(i.next=i,Up(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=pI(t,e,i,r),n!==null&&(i=wt(),pn(n,t,r,i),OI(n,e,r))}}function DI(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function VI(t,e){sa=Xu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function OI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cp(t,n)}}var Zu={readContext:tn,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},UP={readContext:tn,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:uy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gu(4194308,4,xI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return gu(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jP.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:ly,useDebugValue:Qp,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=ly(!1),e=t[0];return t=LP.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=In();if(Ce){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Ze===null)throw Error(B(349));Si&30||vI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uy(wI.bind(null,r,s,t),[t]),r.flags|=2048,Na(9,EI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=Ze.identifierPrefix;if(Ce){var n=jn,r=Ln;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=MP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BP={readContext:tn,useCallback:RI,useContext:tn,useEffect:Hp,useImperativeHandle:PI,useInsertionEffect:AI,useLayoutEffect:CI,useMemo:NI,useReducer:od,useRef:SI,useState:function(){return od(Ra)},useDebugValue:Qp,useDeferredValue:function(t){var e=nn();return kI(e,qe.memoizedState,t)},useTransition:function(){var t=od(Ra)[0],e=nn().memoizedState;return[t,e]},useMutableSource:_I,useSyncExternalStore:yI,useId:bI,unstable_isNewReconciler:!1},$P={readContext:tn,useCallback:RI,useContext:tn,useEffect:Hp,useImperativeHandle:PI,useInsertionEffect:AI,useLayoutEffect:CI,useMemo:NI,useReducer:ad,useRef:SI,useState:function(){return ad(Ra)},useDebugValue:Qp,useDeferredValue:function(t){var e=nn();return qe===null?e.memoizedState=t:kI(e,qe.memoizedState,t)},useTransition:function(){var t=ad(Ra)[0],e=nn().memoizedState;return[t,e]},useMutableSource:_I,useSyncExternalStore:yI,useId:bI,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?Ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Nr(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,i),e!==null&&(pn(e,t,i,r),pu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=Nr(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,i),e!==null&&(pn(e,t,i,r),pu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=Nr(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pr(t,i,r),e!==null&&(pn(e,t,r,n),pu(e,t,r))}};function cy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ia(n,r)||!Ia(i,s):!0}function MI(t,e,n){var r=!1,i=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Ot(e)?Ii:mt.current,r=e.contextTypes,s=(r=r!=null)?bs(t,i):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function hf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Bp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Ot(e)?Ii:mt.current,i.context=bs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Ju(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",r=e;do n+=gx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ld(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zP=typeof WeakMap=="function"?WeakMap:Map;function LI(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tc||(tc=!0,If=r),df(t,e)},n}function jI(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){df(t,e),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=rR.bind(null,t,e,n),e.then(t,t))}function fy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function py(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var qP=er.ReactCurrentOwner,Dt=!1;function yt(t,e,n,r){e.child=t===null?fI(e,null,n,r):Vs(e,t.child,n,r)}function my(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=Gp(t,e,n,r,s,i),n=Wp(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Ce&&n&&Vp(e),e.flags|=1,yt(t,e,r,i),e.child)}function gy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!rm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,FI(t,e,s,r,i)):(t=Eu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(o,r)&&t.ref===e.ref)return Jn(t,e,i)}return e.flags|=1,t=kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function FI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ia(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,Jn(t,e,i)}return ff(t,e,n,r,i)}function UI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ys,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(ys,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(ys,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(ys,Ft),Ft|=r;return yt(t,e,i,n),e.child}function BI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ff(t,e,n,r,i){var s=Ot(n)?Ii:mt.current;return s=bs(e,s),Ss(e,i),n=Gp(t,e,n,r,s,i),r=Wp(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Ce&&r&&Vp(e),e.flags|=1,yt(t,e,n,i),e.child)}function _y(t,e,n,r,i){if(Ot(n)){var s=!0;Ku(e)}else s=!1;if(Ss(e,i),e.stateNode===null)_u(t,e),MI(e,n,r),hf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=Ot(n)?Ii:mt.current,c=bs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&hy(e,o,r,c),dr=!1;var g=e.memoizedState;o.state=g,Ju(e,r,o,i),l=e.memoizedState,a!==r||g!==l||Vt.current||dr?(typeof h=="function"&&(cf(e,n,h,r),l=e.memoizedState),(a=dr||cy(e,n,a,r,g,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,mI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:cn(e.type,a),o.props=c,p=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=Ot(n)?Ii:mt.current,l=bs(e,l));var I=n.getDerivedStateFromProps;(h=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==l)&&hy(e,o,r,l),dr=!1,g=e.memoizedState,o.state=g,Ju(e,r,o,i);var S=e.memoizedState;a!==p||g!==S||Vt.current||dr?(typeof I=="function"&&(cf(e,n,I,r),S=e.memoizedState),(c=dr||cy(e,n,c,r,g,S,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return pf(t,e,n,r,s,i)}function pf(t,e,n,r,i,s){BI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ny(e,n,!1),Jn(t,e,s);r=e.stateNode,qP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):yt(t,e,a,s),e.memoizedState=r.state,i&&ny(e,n,!0),e.child}function $I(t){var e=t.stateNode;e.pendingContext?ty(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ty(t,e.context,!1),$p(t,e.containerInfo)}function yy(t,e,n,r,i){return Ds(),Mp(i),e.flags|=256,yt(t,e,n,r),e.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function zI(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Re,i&1),t===null)return lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fc(o,r,0,null),t=gi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gf(n),e.memoizedState=mf,t):Jp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return KP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=kr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=gi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mf,r}return s=t.child,t=s.sibling,r=kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jp(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hl(t,e,n,r){return r!==null&&Mp(r),Vs(e,t.child,null,n),t=Jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ld(Error(B(422))),Hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fc({mode:"visible",children:r.children},i,0,null),s=gi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=gf(o),e.memoizedState=mf,s);if(!(e.mode&1))return Hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=ld(s,r,void 0),Hl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qn(t,i),pn(r,t,i,-1))}return nm(),r=ld(Error(B(421))),Hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=iR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=xr(i.nextSibling),zt=e,Ce=!0,dn=null,t!==null&&(Ht[Qt++]=Ln,Ht[Qt++]=jn,Ht[Qt++]=Ti,Ln=t.id,jn=t.overflow,Ti=e),e=Jp(e,r.children),e.flags|=4096,e)}function vy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uf(t.return,e,n)}function ud(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vy(t,n,e);else if(t.tag===19)vy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Yu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ud(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Yu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ud(e,!0,n,null,s);break;case"together":ud(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _u(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GP(t,e,n){switch(e.tag){case 3:$I(e),Ds();break;case 5:gI(e);break;case 1:Ot(e.type)&&Ku(e);break;case 4:$p(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Hu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?zI(t,e,n):(ve(Re,Re.current&1),t=Jn(t,e,n),t!==null?t.sibling:null);ve(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return qI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,UI(t,e,n)}return Jn(t,e,n)}var KI,_f,GI,WI;KI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_f=function(){};GI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,di(Pn.current);var s=null;switch(n){case"input":i=jd(t,i),r=jd(t,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=Bd(t,i),r=Bd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=zu)}zd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};WI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vo(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WP(t,e,n){var r=e.pendingProps;switch(Op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Ot(e.type)&&qu(),ht(e),null;case 3:return r=e.stateNode,Os(),Te(Vt),Te(mt),qp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(Af(dn),dn=null))),_f(t,e),ht(e),null;case 5:zp(e);var i=di(xa.current);if(n=e.type,t!==null&&e.stateNode!=null)GI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return ht(e),null}if(t=di(Pn.current),Gl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tn]=e,r[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Go.length;i++)Ie(Go[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":P_(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":N_(r,s),Ie("invalid",r)}zd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Kl(r.textContent,a,t),i=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Ll(r),R_(r,s,!0);break;case"textarea":Ll(r),k_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ww(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tn]=e,t[Aa]=r,KI(t,e,!1,!1),e.stateNode=t;e:{switch(o=qd(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Go.length;i++)Ie(Go[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":P_(t,r),i=jd(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":N_(t,r),i=Bd(t,r),Ie("invalid",t);break;default:i=r}zd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Iw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ie("scroll",t):l!=null&&Ep(t,s,l,o))}switch(n){case"input":Ll(t),R_(t,r,!1);break;case"textarea":Ll(t),k_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Es(t,!!r.multiple,s,!1):r.defaultValue!=null&&Es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)WI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=di(xa.current),di(Pn.current),Gl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tn]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:Kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Kl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tn]=e,e.stateNode=r}return ht(e),null;case 13:if(Te(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Ut!==null&&e.mode&1&&!(e.flags&128))hI(),Ds(),e.flags|=98560,s=!1;else if(s=Gl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Tn]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else dn!==null&&(Af(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Ke===0&&(Ke=3):nm())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return Os(),_f(t,e),t===null&&Ta(e.stateNode.containerInfo),ht(e),null;case 10:return Fp(e.type._context),ht(e),null;case 17:return Ot(e.type)&&qu(),ht(e),null;case 19:if(Te(Re),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vo(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yu(t),o!==null){for(e.flags|=128,Vo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Ls&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Yu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ht(e),null}else 2*Ue()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,r=!0,Vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Re.current,ve(Re,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function HP(t,e){switch(Op(e),e.tag){case 1:return Ot(e.type)&&qu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),Te(Vt),Te(mt),qp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zp(e),null;case 13:if(Te(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Re),null;case 4:return Os(),null;case 10:return Fp(e.type._context),null;case 22:case 23:return tm(),null;case 24:return null;default:return null}}var Ql=!1,ft=!1,QP=typeof WeakSet=="function"?WeakSet:Set,W=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function yf(t,e,n){try{n()}catch(r){Me(t,e,r)}}var Ey=!1;function JP(t,e){if(ef=Uu,t=Xw(),Dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=t,g=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)g=p,p=I;for(;;){if(p===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++h===r&&(l=o),(I=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=I}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tf={focusedElem:t,selectionRange:n},Uu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var N=S.memoizedProps,b=S.memoizedState,T=e.stateNode,E=T.getSnapshotBeforeUpdate(e.elementType===e.type?N:cn(e.type,N),b);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){Me(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return S=Ey,Ey=!1,S}function oa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yf(e,n,s)}i=i.next}while(i!==r)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function HI(t){var e=t.alternate;e!==null&&(t.alternate=null,HI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tn],delete e[Aa],delete e[sf],delete e[bP],delete e[DP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function QI(t){return t.tag===5||t.tag===3||t.tag===4}function wy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||QI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zu));else if(r!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}function wf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}var rt=null,hn=!1;function ar(t,e,n){for(n=n.child;n!==null;)JI(t,e,n),n=n.sibling}function JI(t,e,n){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Rc,n)}catch{}switch(n.tag){case 5:ft||_s(n,e);case 6:var r=rt,i=hn;rt=null,ar(t,e,n),rt=r,hn=i,rt!==null&&(hn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(hn?(t=rt,n=n.stateNode,t.nodeType===8?nd(t.parentNode,n):t.nodeType===1&&nd(t,n),Ea(t)):nd(rt,n.stateNode));break;case 4:r=rt,i=hn,rt=n.stateNode.containerInfo,hn=!0,ar(t,e,n),rt=r,hn=i;break;case 0:case 11:case 14:case 15:if(!ft&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yf(n,e,o),i=i.next}while(i!==r)}ar(t,e,n);break;case 1:if(!ft&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(ft=(r=ft)||n.memoizedState!==null,ar(t,e,n),ft=r):ar(t,e,n);break;default:ar(t,e,n)}}function Iy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new QP),e.forEach(function(r){var i=sR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,hn=!1;break e;case 3:rt=a.stateNode.containerInfo,hn=!0;break e;case 4:rt=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(rt===null)throw Error(B(160));JI(s,o,i),rt=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Me(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)YI(e,t),e=e.sibling}function YI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),En(t),r&4){try{oa(3,t,t.return),Lc(3,t)}catch(N){Me(t,t.return,N)}try{oa(5,t,t.return)}catch(N){Me(t,t.return,N)}}break;case 1:un(e,t),En(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(un(e,t),En(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{ga(i,"")}catch(N){Me(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vw(i,s),qd(a,o);var c=qd(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?Sw(i,p):h==="dangerouslySetInnerHTML"?Iw(i,p):h==="children"?ga(i,p):Ep(i,h,p,c)}switch(a){case"input":Fd(i,s);break;case"textarea":Ew(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Es(i,!!s.multiple,I,!1):g!==!!s.multiple&&(s.defaultValue!=null?Es(i,!!s.multiple,s.defaultValue,!0):Es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Aa]=s}catch(N){Me(t,t.return,N)}}break;case 6:if(un(e,t),En(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Me(t,t.return,N)}}break;case 3:if(un(e,t),En(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(e.containerInfo)}catch(N){Me(t,t.return,N)}break;case 4:un(e,t),En(t);break;case 13:un(e,t),En(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Zp=Ue())),r&4&&Iy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ft=(c=ft)||h,un(e,t),ft=c):un(e,t),En(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(p=W=h;W!==null;){switch(g=W,I=g.child,g.tag){case 0:case 11:case 14:case 15:oa(4,g,g.return);break;case 1:_s(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(N){Me(r,n,N)}}break;case 5:_s(g,g.return);break;case 22:if(g.memoizedState!==null){Sy(p);continue}}I!==null?(I.return=g,W=I):Sy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Tw("display",o))}catch(N){Me(t,t.return,N)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Me(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:un(e,t),En(t),r&4&&Iy(t);break;case 21:break;default:un(e,t),En(t)}}function En(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(QI(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ga(i,""),r.flags&=-33);var s=wy(t);wf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=wy(t);Ef(t,a,o);break;default:throw Error(B(161))}}catch(l){Me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YP(t,e,n){W=t,XI(t)}function XI(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ql;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ft;a=Ql;var c=ft;if(Ql=o,(ft=l)&&!c)for(W=i;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?Ay(i):l!==null?(l.return=o,W=l):Ay(i);for(;s!==null;)W=s,XI(s),s=s.sibling;W=i,Ql=a,ft=c}Ty(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Ty(t)}}function Ty(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ft||Lc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ft)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ay(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ay(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ea(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}ft||e.flags&512&&vf(e)}catch(g){Me(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Sy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Ay(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(l){Me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Me(e,i,l)}}var s=e.return;try{vf(e)}catch(l){Me(e,s,l)}break;case 5:var o=e.return;try{vf(e)}catch(l){Me(e,o,l)}}}catch(l){Me(e,e.return,l)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var XP=Math.ceil,ec=er.ReactCurrentDispatcher,Yp=er.ReactCurrentOwner,Zt=er.ReactCurrentBatchConfig,ce=0,Ze=null,$e=null,st=0,Ft=0,ys=$r(0),Ke=0,ka=null,Ai=0,jc=0,Xp=0,aa=null,kt=null,Zp=0,Ls=1/0,Vn=null,tc=!1,If=null,Rr=null,Jl=!1,wr=null,nc=0,la=0,Tf=null,yu=-1,vu=0;function wt(){return ce&6?Ue():yu!==-1?yu:yu=Ue()}function Nr(t){return t.mode&1?ce&2&&st!==0?st&-st:OP.transition!==null?(vu===0&&(vu=Mw()),vu):(t=me,t!==0||(t=window.event,t=t===void 0?16:zw(t.type)),t):1}function pn(t,e,n,r){if(50<la)throw la=0,Tf=null,Error(B(185));Xa(t,n,r),(!(ce&2)||t!==Ze)&&(t===Ze&&(!(ce&2)&&(jc|=n),Ke===4&&pr(t,st)),Mt(t,r),n===1&&ce===0&&!(e.mode&1)&&(Ls=Ue()+500,Vc&&zr()))}function Mt(t,e){var n=t.callbackNode;Ox(t,e);var r=Fu(t,t===Ze?st:0);if(r===0)n!==null&&V_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&V_(n),e===1)t.tag===0?VP(Cy.bind(null,t)):lI(Cy.bind(null,t)),NP(function(){!(ce&6)&&zr()}),n=null;else{switch(Lw(r)){case 1:n=Ap;break;case 4:n=Vw;break;case 16:n=ju;break;case 536870912:n=Ow;break;default:n=ju}n=oT(n,ZI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ZI(t,e){if(yu=-1,vu=0,ce&6)throw Error(B(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var r=Fu(t,t===Ze?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=rc(t,r);else{e=r;var i=ce;ce|=2;var s=tT();(Ze!==t||st!==e)&&(Vn=null,Ls=Ue()+500,mi(t,e));do try{tR();break}catch(a){eT(t,a)}while(!0);jp(),ec.current=s,ce=i,$e!==null?e=0:(Ze=null,st=0,e=Ke)}if(e!==0){if(e===2&&(i=Qd(t),i!==0&&(r=i,e=Sf(t,i))),e===1)throw n=ka,mi(t,0),pr(t,r),Mt(t,Ue()),n;if(e===6)pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!ZP(i)&&(e=rc(t,r),e===2&&(s=Qd(t),s!==0&&(r=s,e=Sf(t,s))),e===1))throw n=ka,mi(t,0),pr(t,r),Mt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ri(t,kt,Vn);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=Zp+500-Ue(),10<e)){if(Fu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rf(ri.bind(null,t,kt,Vn),e);break}ri(t,kt,Vn);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-fn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XP(r/1960))-r,10<r){t.timeoutHandle=rf(ri.bind(null,t,kt,Vn),r);break}ri(t,kt,Vn);break;case 5:ri(t,kt,Vn);break;default:throw Error(B(329))}}}return Mt(t,Ue()),t.callbackNode===n?ZI.bind(null,t):null}function Sf(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(mi(t,e).flags|=256),t=rc(t,e),t!==2&&(e=kt,kt=n,e!==null&&Af(e)),t}function Af(t){kt===null?kt=t:kt.push.apply(kt,t)}function ZP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Xp,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fn(e),r=1<<n;t[n]=-1,e&=~r}}function Cy(t){if(ce&6)throw Error(B(327));As();var e=Fu(t,0);if(!(e&1))return Mt(t,Ue()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var r=Qd(t);r!==0&&(e=r,n=Sf(t,r))}if(n===1)throw n=ka,mi(t,0),pr(t,e),Mt(t,Ue()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ri(t,kt,Vn),Mt(t,Ue()),null}function em(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Ls=Ue()+500,Vc&&zr())}}function Ci(t){wr!==null&&wr.tag===0&&!(ce&6)&&As();var e=ce;ce|=1;var n=Zt.transition,r=me;try{if(Zt.transition=null,me=1,t)return t()}finally{me=r,Zt.transition=n,ce=e,!(ce&6)&&zr()}}function tm(){Ft=ys.current,Te(ys)}function mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RP(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Op(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qu();break;case 3:Os(),Te(Vt),Te(mt),qp();break;case 5:zp(r);break;case 4:Os();break;case 13:Te(Re);break;case 19:Te(Re);break;case 10:Fp(r.type._context);break;case 22:case 23:tm()}n=n.return}if(Ze=t,$e=t=kr(t.current,null),st=Ft=e,Ke=0,ka=null,Xp=jc=Ai=0,kt=aa=null,hi!==null){for(e=0;e<hi.length;e++)if(n=hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hi=null}return t}function eT(t,e){do{var n=$e;try{if(jp(),mu.current=Zu,Xu){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xu=!1}if(Si=0,Xe=qe=ke=null,sa=!1,Pa=0,Yp.current=null,n===null||n.return===null){Ke=1,ka=e,$e=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=st,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var I=fy(o);if(I!==null){I.flags&=-257,py(I,o,a,s,e),I.mode&1&&dy(s,c,e),e=I,l=c;var S=e.updateQueue;if(S===null){var N=new Set;N.add(l),e.updateQueue=N}else S.add(l);break e}else{if(!(e&1)){dy(s,c,e),nm();break e}l=Error(B(426))}}else if(Ce&&a.mode&1){var b=fy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),py(b,o,a,s,e),Mp(Ms(l,a));break e}}s=l=Ms(l,a),Ke!==4&&(Ke=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=LI(s,l,e);oy(s,T);break e;case 1:a=l;var E=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Rr===null||!Rr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=jI(s,a,e);oy(s,D);break e}}s=s.return}while(s!==null)}rT(n)}catch(L){e=L,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function tT(){var t=ec.current;return ec.current=Zu,t===null?Zu:t}function nm(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ze===null||!(Ai&268435455)&&!(jc&268435455)||pr(Ze,st)}function rc(t,e){var n=ce;ce|=2;var r=tT();(Ze!==t||st!==e)&&(Vn=null,mi(t,e));do try{eR();break}catch(i){eT(t,i)}while(!0);if(jp(),ce=n,ec.current=r,$e!==null)throw Error(B(261));return Ze=null,st=0,Ke}function eR(){for(;$e!==null;)nT($e)}function tR(){for(;$e!==null&&!Cx();)nT($e)}function nT(t){var e=sT(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?rT(t):$e=e,Yp.current=null}function rT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HP(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,$e=null;return}}else if(n=WP(n,e,Ft),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ke===0&&(Ke=5)}function ri(t,e,n){var r=me,i=Zt.transition;try{Zt.transition=null,me=1,nR(t,e,n,r)}finally{Zt.transition=i,me=r}return null}function nR(t,e,n,r){do As();while(wr!==null);if(ce&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Mx(t,s),t===Ze&&($e=Ze=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jl||(Jl=!0,oT(ju,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=me;me=1;var a=ce;ce|=4,Yp.current=null,JP(t,n),YI(n,t),IP(tf),Uu=!!ef,tf=ef=null,t.current=n,YP(n),xx(),ce=a,me=o,Zt.transition=s}else t.current=n;if(Jl&&(Jl=!1,wr=t,nc=i),s=t.pendingLanes,s===0&&(Rr=null),Nx(n.stateNode),Mt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tc)throw tc=!1,t=If,If=null,t;return nc&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===Tf?la++:(la=0,Tf=t):la=0,zr(),null}function As(){if(wr!==null){var t=Lw(nc),e=Zt.transition,n=me;try{if(Zt.transition=null,me=16>t?16:t,wr===null)var r=!1;else{if(t=wr,wr=null,nc=0,ce&6)throw Error(B(331));var i=ce;for(ce|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:oa(8,h,s)}var p=h.child;if(p!==null)p.return=h,W=p;else for(;W!==null;){h=W;var g=h.sibling,I=h.return;if(HI(h),h===c){W=null;break}if(g!==null){g.return=I,W=g;break}W=I}}}var S=s.alternate;if(S!==null){var N=S.child;if(N!==null){S.child=null;do{var b=N.sibling;N.sibling=null,N=b}while(N!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var E=t.current;for(W=E;W!==null;){o=W;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,W=w;else e:for(o=E;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lc(9,a)}}catch(L){Me(a,a.return,L)}if(a===o){W=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,W=D;break e}W=a.return}}if(ce=i,zr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Rc,t)}catch{}r=!0}return r}finally{me=n,Zt.transition=e}}return!1}function xy(t,e,n){e=Ms(n,e),e=LI(t,e,1),t=Pr(t,e,1),e=wt(),t!==null&&(Xa(t,1,e),Mt(t,e))}function Me(t,e,n){if(t.tag===3)xy(t,t,n);else for(;e!==null;){if(e.tag===3){xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){t=Ms(n,t),t=jI(e,t,1),e=Pr(e,t,1),t=wt(),e!==null&&(Xa(e,1,t),Mt(e,t));break}}e=e.return}}function rR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(st&n)===n&&(Ke===4||Ke===3&&(st&130023424)===st&&500>Ue()-Zp?mi(t,0):Xp|=n),Mt(t,e)}function iT(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=wt();t=Qn(t,e),t!==null&&(Xa(t,e,n),Mt(t,n))}function iR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iT(t,n)}function sR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),iT(t,n)}var sT;sT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,GP(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Ce&&e.flags&1048576&&uI(e,Wu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_u(t,e),t=e.pendingProps;var i=bs(e,mt.current);Ss(e,n),i=Gp(null,e,r,t,i,n);var s=Wp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,Ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bp(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,hf(e,r,t,n),e=pf(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&Vp(e),yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_u(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=aR(r),t=cn(r,t),i){case 0:e=ff(null,e,r,t,n);break e;case 1:e=_y(null,e,r,t,n);break e;case 11:e=my(null,e,r,t,n);break e;case 14:e=gy(null,e,r,cn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),ff(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),_y(t,e,r,i,n);case 3:e:{if($I(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,mI(t,e),Ju(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ms(Error(B(423)),e),e=yy(t,e,r,n,i);break e}else if(r!==i){i=Ms(Error(B(424)),e),e=yy(t,e,r,n,i);break e}else for(Ut=xr(e.stateNode.containerInfo.firstChild),zt=e,Ce=!0,dn=null,n=fI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),r===i){e=Jn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return gI(e),t===null&&lf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nf(r,i)?o=null:s!==null&&nf(r,s)&&(e.flags|=32),BI(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&lf(e),null;case 13:return zI(t,e,n);case 4:return $p(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vs(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),my(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Hu,r._currentValue),r._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===i.children&&!Vt.current){e=Jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=zn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),uf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=tn(i),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),gy(t,e,r,i,n);case 15:return FI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),_u(t,e),e.tag=1,Ot(r)?(t=!0,Ku(e)):t=!1,Ss(e,n),MI(e,r,i),hf(e,r,i,n),pf(null,e,r,!0,t,n);case 19:return qI(t,e,n);case 22:return UI(t,e,n)}throw Error(B(156,e.tag))};function oT(t,e){return Dw(t,e)}function oR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new oR(t,e,n,r)}function rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aR(t){if(typeof t=="function")return rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ip)return 11;if(t===Tp)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Eu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")rm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ls:return gi(n.children,i,s,e);case wp:o=8,i|=8;break;case Vd:return t=Jt(12,n,e,i|2),t.elementType=Vd,t.lanes=s,t;case Od:return t=Jt(13,n,e,i),t.elementType=Od,t.lanes=s,t;case Md:return t=Jt(19,n,e,i),t.elementType=Md,t.lanes=s,t;case gw:return Fc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pw:o=10;break e;case mw:o=9;break e;case Ip:o=11;break e;case Tp:o=14;break e;case hr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gi(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function Fc(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=gw,t.lanes=n,t.stateNode={isHidden:!1},t}function cd(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function hd(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kh(0),this.expirationTimes=Kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function im(t,e,n,r,i,s,o,a,l){return t=new lR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bp(s),t}function uR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function aT(t){if(!t)return Lr;t=t._reactInternals;e:{if(Ui(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ot(n))return aI(t,n,e)}return e}function lT(t,e,n,r,i,s,o,a,l){return t=im(n,r,!0,t,i,s,o,a,l),t.context=aT(null),n=t.current,r=wt(),i=Nr(n),s=zn(r,i),s.callback=e??null,Pr(n,s,i),t.current.lanes=i,Xa(t,i,r),Mt(t,r),t}function Uc(t,e,n,r){var i=e.current,s=wt(),o=Nr(i);return n=aT(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pr(i,e,o),t!==null&&(pn(t,i,o,s),pu(t,i,o)),o}function ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sm(t,e){Py(t,e),(t=t.alternate)&&Py(t,e)}function cR(){return null}var uT=typeof reportError=="function"?reportError:function(t){console.error(t)};function om(t){this._internalRoot=t}Bc.prototype.render=om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Uc(t,e,null,null)};Bc.prototype.unmount=om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ci(function(){Uc(null,t,null,null)}),e[Hn]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&$w(t)}};function am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ry(){}function hR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ic(o);s.call(c)}}var o=lT(e,r,t,0,null,!1,!1,"",Ry);return t._reactRootContainer=o,t[Hn]=o.current,Ta(t.nodeType===8?t.parentNode:t),Ci(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ic(l);a.call(c)}}var l=im(t,0,!1,null,null,!1,!1,"",Ry);return t._reactRootContainer=l,t[Hn]=l.current,Ta(t.nodeType===8?t.parentNode:t),Ci(function(){Uc(e,l,n,r)}),l}function zc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ic(o);a.call(l)}}Uc(e,o,t,i)}else o=hR(n,e,t,i,r);return ic(o)}jw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ko(e.pendingLanes);n!==0&&(Cp(e,n|1),Mt(e,Ue()),!(ce&6)&&(Ls=Ue()+500,zr()))}break;case 13:Ci(function(){var r=Qn(t,1);if(r!==null){var i=wt();pn(r,t,1,i)}}),sm(t,1)}};xp=function(t){if(t.tag===13){var e=Qn(t,134217728);if(e!==null){var n=wt();pn(e,t,134217728,n)}sm(t,134217728)}};Fw=function(t){if(t.tag===13){var e=Nr(t),n=Qn(t,e);if(n!==null){var r=wt();pn(n,t,e,r)}sm(t,e)}};Uw=function(){return me};Bw=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Gd=function(t,e,n){switch(e){case"input":if(Fd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Dc(r);if(!i)throw Error(B(90));yw(r),Fd(r,i)}}}break;case"textarea":Ew(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};xw=em;Pw=Ci;var dR={usingClientEntryPoint:!1,Events:[el,ds,Dc,Aw,Cw,em]},Oo={findFiberByHostInstance:ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fR={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kw(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||cR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{Rc=Yl.inject(fR),xn=Yl}catch{}}Gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dR;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!am(e))throw Error(B(200));return uR(t,e,null,n)};Gt.createRoot=function(t,e){if(!am(t))throw Error(B(299));var n=!1,r="",i=uT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=im(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,Ta(t.nodeType===8?t.parentNode:t),new om(e)};Gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=kw(e),t=t===null?null:t.stateNode,t};Gt.flushSync=function(t){return Ci(t)};Gt.hydrate=function(t,e,n){if(!$c(e))throw Error(B(200));return zc(null,t,e,!0,n)};Gt.hydrateRoot=function(t,e,n){if(!am(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lT(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,Ta(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bc(e)};Gt.render=function(t,e,n){if(!$c(e))throw Error(B(200));return zc(null,t,e,!1,n)};Gt.unmountComponentAtNode=function(t){if(!$c(t))throw Error(B(40));return t._reactRootContainer?(Ci(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};Gt.unstable_batchedUpdates=em;Gt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$c(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return zc(t,e,n,!1,r)};Gt.version="18.3.1-next-f1338f8080-20240426";function cT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT)}catch(t){console.error(t)}}cT(),cw.exports=Gt;var pR=cw.exports,hT,Ny=pR;hT=Ny.createRoot,Ny.hydrateRoot;const mR="modulepreload",gR=function(t){return"/Ton-paris/"+t},ky={},_R=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=gR(l),l in ky)return;ky[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":mR,c||(p.as="script"),p.crossOrigin="",p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),c)return new Promise((g,I)=>{p.addEventListener("load",g),p.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function yR(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let a,l,c;const h=async(g=!0)=>{await l,await(c==null?void 0:c())};async function p(){if("serviceWorker"in navigator){if(a=await _R(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/Ton-paris/sw.js",{scope:"/Ton-paris/",type:"classic"})).catch(g=>{o==null||o(g)}),!a)return;c=async()=>{await(a==null?void 0:a.messageSkipWaiting())};{let g=!1;const I=()=>{g=!0,a==null||a.addEventListener("controlling",S=>{S.isUpdate&&window.location.reload()}),n==null||n()};a.addEventListener("installed",S=>{typeof S.isUpdate>"u"?typeof S.isExternal<"u"?S.isExternal?I():!g&&(r==null||r()):S.isExternal?window.location.reload():!g&&(r==null||r()):S.isUpdate||r==null||r()}),a.addEventListener("waiting",I),a.addEventListener("externalwaiting",I)}a.register({immediate:e}).then(g=>{s?s("/Ton-paris/sw.js",g):i==null||i(g)}).catch(g=>{o==null||o(g)})}}return l=p(),h}/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(null,arguments)}var Ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ir||(Ir={}));const by="popstate";function vR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Cf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sc(i)}return wR(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function dT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ER(){return Math.random().toString(36).substr(2,8)}function Dy(t,e){return{usr:t.state,key:t.key,idx:e}}function Cf(t,e,n,r){return n===void 0&&(n=null),ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zs(e):e,{state:n,key:e&&e.key||r||ER()})}function sc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function wR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ir.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(ba({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=Ir.Pop;let b=h(),T=b==null?null:b-c;c=b,l&&l({action:a,location:N.location,delta:T})}function g(b,T){a=Ir.Push;let E=Cf(N.location,b,T);c=h()+1;let w=Dy(E,c),D=N.createHref(E);try{o.pushState(w,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(D)}s&&l&&l({action:a,location:N.location,delta:1})}function I(b,T){a=Ir.Replace;let E=Cf(N.location,b,T);c=h();let w=Dy(E,c),D=N.createHref(E);o.replaceState(w,"",D),s&&l&&l({action:a,location:N.location,delta:0})}function S(b){let T=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof b=="string"?b:sc(b);return E=E.replace(/ $/,"%20"),be(T,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,T)}let N={get action(){return a},get location(){return t(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(by,p),l=b,()=>{i.removeEventListener(by,p),l=null}},createHref(b){return e(i,b)},createURL:S,encodeLocation(b){let T=S(b);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:g,replace:I,go(b){return o.go(b)}};return N}var Vy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vy||(Vy={}));function IR(t,e,n){return n===void 0&&(n="/"),TR(t,e,n)}function TR(t,e,n,r){let i=typeof e=="string"?Zs(e):e,s=js(i.pathname||"/",n);if(s==null)return null;let o=fT(t);SR(o);let a=null,l=OR(s);for(let c=0;a==null&&c<o.length;++c)a=DR(o[c],l);return a}function fT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=br([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),fT(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:kR(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of pT(s.path))i(s,o,l)}),e}function pT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=pT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function SR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:bR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AR=/^:[\w-]+$/,CR=3,xR=2,PR=1,RR=10,NR=-2,Oy=t=>t==="*";function kR(t,e){let n=t.split("/"),r=n.length;return n.some(Oy)&&(r+=NR),e&&(r+=xR),n.filter(i=>!Oy(i)).reduce((i,s)=>i+(AR.test(s)?CR:s===""?PR:RR),r)}function bR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DR(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=xf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),g=l.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:br([s,p.pathname]),pathnameBase:jR(br([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=br([s,p.pathnameBase]))}return o}function xf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:g,isOptional:I}=h;if(g==="*"){let N=a[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const S=a[p];return I&&!S?c[g]=void 0:c[g]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function VR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),dT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function OR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return dT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function js(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function MR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zs(t):t,s;return n?(n=mT(n),n.startsWith("/")?s=My(n.substring(1),"/"):s=My(n,e)):s=e,{pathname:s,search:FR(r),hash:UR(i)}}function My(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lm(t,e){let n=LR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function um(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zs(t):(i=ba({},t),be(!i.pathname||!i.pathname.includes("?"),dd("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),dd("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),dd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?e[p]:"/"}let l=MR(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const mT=t=>t.replace(/\/\/+/g,"/"),br=t=>mT(t.join("/")),jR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),FR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,UR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function BR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gT=["post","put","patch","delete"];new Set(gT);const $R=["get",...gT];new Set($R);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Da.apply(null,arguments)}const qc=x.createContext(null),_T=x.createContext(null),tr=x.createContext(null),Kc=x.createContext(null),qr=x.createContext({outlet:null,matches:[],isDataRoute:!1}),yT=x.createContext(null);function zR(t,e){let{relative:n}=e===void 0?{}:e;eo()||be(!1);let{basename:r,navigator:i}=x.useContext(tr),{hash:s,pathname:o,search:a}=Wc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:br([r,o])),i.createHref({pathname:l,search:a,hash:s})}function eo(){return x.useContext(Kc)!=null}function to(){return eo()||be(!1),x.useContext(Kc).location}function vT(t){x.useContext(tr).static||x.useLayoutEffect(t)}function Gc(){let{isDataRoute:t}=x.useContext(qr);return t?nN():qR()}function qR(){eo()||be(!1);let t=x.useContext(qc),{basename:e,future:n,navigator:r}=x.useContext(tr),{matches:i}=x.useContext(qr),{pathname:s}=to(),o=JSON.stringify(lm(i,n.v7_relativeSplatPath)),a=x.useRef(!1);return vT(()=>{a.current=!0}),x.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=um(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:br([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function Wc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=x.useContext(tr),{matches:i}=x.useContext(qr),{pathname:s}=to(),o=JSON.stringify(lm(i,r.v7_relativeSplatPath));return x.useMemo(()=>um(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function KR(t,e){return GR(t,e)}function GR(t,e,n,r){eo()||be(!1);let{navigator:i}=x.useContext(tr),{matches:s}=x.useContext(qr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=to(),h;if(e){var p;let b=typeof e=="string"?Zs(e):e;l==="/"||(p=b.pathname)!=null&&p.startsWith(l)||be(!1),h=b}else h=c;let g=h.pathname||"/",I=g;if(l!=="/"){let b=l.replace(/^\//,"").split("/");I="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let S=IR(t,{pathname:I}),N=YR(S&&S.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:br([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:br([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&N?x.createElement(Kc.Provider,{value:{location:Da({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ir.Pop}},N):N}function WR(){let t=tN(),e=BR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,null)}const HR=x.createElement(WR,null);class QR extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?x.createElement(qr.Provider,{value:this.props.routeContext},x.createElement(yT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JR(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(qr.Provider,{value:e},r)}function YR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||be(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:I}=n,S=p.route.loader&&g[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||S){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let I,S=!1,N=null,b=null;n&&(I=a&&p.route.id?a[p.route.id]:void 0,N=p.route.errorElement||HR,l&&(c<0&&g===0?(rN("route-fallback"),S=!0,b=null):c===g&&(S=!0,b=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),E=()=>{let w;return I?w=N:S?w=b:p.route.Component?w=x.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=h,x.createElement(JR,{match:p,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:w})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?x.createElement(QR,{location:n.location,revalidation:n.revalidation,component:N,error:I,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}var ET=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ET||{}),wT=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wT||{});function XR(t){let e=x.useContext(qc);return e||be(!1),e}function ZR(t){let e=x.useContext(_T);return e||be(!1),e}function eN(t){let e=x.useContext(qr);return e||be(!1),e}function IT(t){let e=eN(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function tN(){var t;let e=x.useContext(yT),n=ZR(),r=IT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function nN(){let{router:t}=XR(ET.UseNavigateStable),e=IT(wT.UseNavigateStable),n=x.useRef(!1);return vT(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Da({fromRouteId:e},s)))},[t,e])}const Ly={};function rN(t,e,n){Ly[t]||(Ly[t]=!0)}function iN(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function sN(t){let{to:e,replace:n,state:r,relative:i}=t;eo()||be(!1);let{future:s,static:o}=x.useContext(tr),{matches:a}=x.useContext(qr),{pathname:l}=to(),c=Gc(),h=um(e,lm(a,s.v7_relativeSplatPath),l,i==="path"),p=JSON.stringify(h);return x.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function wn(t){be(!1)}function oN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ir.Pop,navigator:s,static:o=!1,future:a}=t;eo()&&be(!1);let l=e.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:s,static:o,future:Da({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Zs(r));let{pathname:h="/",search:p="",hash:g="",state:I=null,key:S="default"}=r,N=x.useMemo(()=>{let b=js(h,l);return b==null?null:{location:{pathname:b,search:p,hash:g,state:I,key:S},navigationType:i}},[l,h,p,g,I,S,i]);return N==null?null:x.createElement(tr.Provider,{value:c},x.createElement(Kc.Provider,{children:n,value:N}))}function aN(t){let{children:e,location:n}=t;return KR(Pf(e),n)}new Promise(()=>{});function Pf(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;let s=[...e,i];if(r.type===x.Fragment){n.push.apply(n,Pf(r.props.children,s));return}r.type!==wn&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oc(){return oc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oc.apply(null,arguments)}function TT(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function lN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uN(t,e){return t.button===0&&(!e||e==="_self")&&!lN(t)}const cN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hN=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],dN="6";try{window.__reactRouterVersion=dN}catch{}const fN=x.createContext({isTransitioning:!1}),pN="startTransition",jy=rx[pN];function mN(t){let{basename:e,children:n,future:r,window:i}=t,s=x.useRef();s.current==null&&(s.current=vR({window:i,v5Compat:!0}));let o=s.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=x.useCallback(p=>{c&&jy?jy(()=>l(p)):l(p)},[l,c]);return x.useLayoutEffect(()=>o.listen(h),[o,h]),x.useEffect(()=>iN(r),[r]),x.createElement(oN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const gN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_N=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hc=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:p}=e,g=TT(e,cN),{basename:I}=x.useContext(tr),S,N=!1;if(typeof c=="string"&&_N.test(c)&&(S=c,gN))try{let w=new URL(window.location.href),D=c.startsWith("//")?new URL(w.protocol+c):new URL(c),L=js(D.pathname,I);D.origin===w.origin&&L!=null?c=L+D.search+D.hash:N=!0}catch{}let b=zR(c,{relative:i}),T=EN(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:p});function E(w){r&&r(w),w.defaultPrevented||T(w)}return x.createElement("a",oc({},g,{href:S||b,onClick:N||s?r:E,ref:n,target:l}))}),yN=x.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:h}=e,p=TT(e,hN),g=Wc(l,{relative:p.relative}),I=to(),S=x.useContext(_T),{navigator:N,basename:b}=x.useContext(tr),T=S!=null&&wN(g)&&c===!0,E=N.encodeLocation?N.encodeLocation(g).pathname:g.pathname,w=I.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(w=w.toLowerCase(),D=D?D.toLowerCase():null,E=E.toLowerCase()),D&&b&&(D=js(D,b)||D);const L=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let j=w===E||!o&&w.startsWith(E)&&w.charAt(L)==="/",v=D!=null&&(D===E||!o&&D.startsWith(E)&&D.charAt(E.length)==="/"),_={isActive:j,isPending:v,isTransitioning:T},A=j?r:void 0,P;typeof s=="function"?P=s(_):P=[s,j?"active":null,v?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(_):a;return x.createElement(Hc,oc({},p,{"aria-current":A,className:P,ref:n,style:k,to:l,viewTransition:c}),typeof h=="function"?h(_):h)});var Rf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Rf||(Rf={}));var Fy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fy||(Fy={}));function vN(t){let e=x.useContext(qc);return e||be(!1),e}function EN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Gc(),c=to(),h=Wc(t,{relative:o});return x.useCallback(p=>{if(uN(p,n)){p.preventDefault();let g=r!==void 0?r:sc(c)===sc(h);l(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}function wN(t,e){e===void 0&&(e={});let n=x.useContext(fN);n==null&&be(!1);let{basename:r}=vN(Rf.useViewTransitionState),i=Wc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=js(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=js(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xf(i.pathname,o)!=null||xf(i.pathname,s)!=null}var Uy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},AT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,I=c&63;l||(I=64,o||(g=64)),r.push(n[h],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ST(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new TN;const g=s<<2|a>>4;if(r.push(g),c!==64){const I=a<<4&240|c>>2;if(r.push(I),p!==64){const S=c<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class TN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SN=function(t){const e=ST(t);return AT.encodeByteArray(e,!0)},CT=function(t){return SN(t).replace(/\./g,"")},xT=function(t){try{return AT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=()=>AN().__FIREBASE_DEFAULTS__,xN=()=>{if(typeof process>"u"||typeof Uy>"u")return;const t=Uy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xT(t[1]);return e&&JSON.parse(e)},Qc=()=>{try{return CN()||xN()||PN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},PT=t=>{var e,n;return(n=(e=Qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},RN=t=>{const e=PT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},RT=()=>{var t;return(t=Qc())===null||t===void 0?void 0:t.config},NT=t=>{var e;return(e=Qc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function bN(){var t;const e=(t=Qc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ON(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MN(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kT(){return!bN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cm(){try{return typeof indexedDB=="object"}catch{return!1}}function bT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function LN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jN,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bi.prototype.create)}}class Bi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yn(i,a,r)}}function FN(t,e){return t.replace(UN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UN=/\{\$([^}]+)}/g;function BN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Va(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(By(s)&&By(o)){if(!Va(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function By(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ho(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $N(t,e){const n=new zN(t,e);return n.subscribe.bind(n)}class zN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fd),i.error===void 0&&(i.error=fd),i.complete===void 0&&(i.complete=fd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WN(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GN(t){return t===ii?void 0:t}function WN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new KN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const QN={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},JN=ae.INFO,YN={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},XN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hm{constructor(e){this.name=e,this._logLevel=JN,this._logHandler=XN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const ZN=(t,e)=>e.some(n=>t instanceof n);let $y,zy;function ek(){return $y||($y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tk(){return zy||(zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DT=new WeakMap,Nf=new WeakMap,VT=new WeakMap,pd=new WeakMap,dm=new WeakMap;function nk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(qn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&DT.set(n,t)}).catch(()=>{}),dm.set(e,t),e}function rk(t){if(Nf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nf.set(t,e)}let kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||VT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ik(t){kf=t(kf)}function sk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(md(this),e,...n);return VT.set(r,e.sort?e.sort():[e]),qn(r)}:tk().includes(t)?function(...e){return t.apply(md(this),e),qn(DT.get(this))}:function(...e){return qn(t.apply(md(this),e))}}function ok(t){return typeof t=="function"?sk(t):(t instanceof IDBTransaction&&rk(t),ZN(t,ek())?new Proxy(t,kf):t)}function qn(t){if(t instanceof IDBRequest)return nk(t);if(pd.has(t))return pd.get(t);const e=ok(t);return e!==t&&(pd.set(t,e),dm.set(e,t)),e}const md=t=>dm.get(t);function Jc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=qn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qn(o.result),l.oldVersion,l.newVersion,qn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function gd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),qn(n).then(()=>{})}const ak=["get","getKey","getAll","getAllKeys","count"],lk=["put","add","delete","clear"],_d=new Map;function qy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_d.get(e))return _d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ak.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return _d.set(e,s),s}ik(t=>({...t,get:(e,n,r)=>qy(e,n)||t.get(e,n,r),has:(e,n)=>!!qy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ck(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ck(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bf="@firebase/app",Ky="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new hm("@firebase/app"),hk="@firebase/app-compat",dk="@firebase/analytics-compat",fk="@firebase/analytics",pk="@firebase/app-check-compat",mk="@firebase/app-check",gk="@firebase/auth",_k="@firebase/auth-compat",yk="@firebase/database",vk="@firebase/data-connect",Ek="@firebase/database-compat",wk="@firebase/functions",Ik="@firebase/functions-compat",Tk="@firebase/installations",Sk="@firebase/installations-compat",Ak="@firebase/messaging",Ck="@firebase/messaging-compat",xk="@firebase/performance",Pk="@firebase/performance-compat",Rk="@firebase/remote-config",Nk="@firebase/remote-config-compat",kk="@firebase/storage",bk="@firebase/storage-compat",Dk="@firebase/firestore",Vk="@firebase/vertexai-preview",Ok="@firebase/firestore-compat",Mk="firebase",Lk="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="[DEFAULT]",jk={[bf]:"fire-core",[hk]:"fire-core-compat",[fk]:"fire-analytics",[dk]:"fire-analytics-compat",[mk]:"fire-app-check",[pk]:"fire-app-check-compat",[gk]:"fire-auth",[_k]:"fire-auth-compat",[yk]:"fire-rtdb",[vk]:"fire-data-connect",[Ek]:"fire-rtdb-compat",[wk]:"fire-fn",[Ik]:"fire-fn-compat",[Tk]:"fire-iid",[Sk]:"fire-iid-compat",[Ak]:"fire-fcm",[Ck]:"fire-fcm-compat",[xk]:"fire-perf",[Pk]:"fire-perf-compat",[Rk]:"fire-rc",[Nk]:"fire-rc-compat",[kk]:"fire-gcs",[bk]:"fire-gcs-compat",[Dk]:"fire-fst",[Ok]:"fire-fst-compat",[Vk]:"fire-vertex","fire-js":"fire-js",[Mk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Map,Fk=new Map,Vf=new Map;function Gy(t,e){try{t.container.addComponent(e)}catch(n){Yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(Vf.has(e))return Yn.debug(`There were multiple attempts to register component ${e}.`),!1;Vf.set(e,t);for(const n of ac.values())Gy(n,t);for(const n of Fk.values())Gy(n,t);return!0}function $i(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new Bi("app","Firebase",Uk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=Lk;function OT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Df,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Dr.create("bad-app-name",{appName:String(i)});if(n||(n=RT()),!n)throw Dr.create("no-options");const s=ac.get(i);if(s){if(Va(n,s.options)&&Va(r,s.config))return s;throw Dr.create("duplicate-app",{appName:i})}const o=new HN(i);for(const l of Vf.values())o.addComponent(l);const a=new Bk(n,r,o);return ac.set(i,a),a}function fm(t=Df){const e=ac.get(t);if(!e&&t===Df&&RT())return OT();if(!e)throw Dr.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=jk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yn.warn(a.join(" "));return}gn(new rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="firebase-heartbeat-database",zk=1,Oa="firebase-heartbeat-store";let yd=null;function MT(){return yd||(yd=Jc($k,zk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),yd}async function qk(t){try{const n=(await MT()).transaction(Oa),r=await n.objectStore(Oa).get(LT(t));return await n.done,r}catch(e){if(e instanceof yn)Yn.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yn.warn(n.message)}}}async function Wy(t,e){try{const r=(await MT()).transaction(Oa,"readwrite");await r.objectStore(Oa).put(e,LT(t)),await r.done}catch(n){if(n instanceof yn)Yn.warn(n.message);else{const r=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yn.warn(r.message)}}}function LT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=1024,Gk=30*24*60*60*1e3;class Wk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Gk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hy(),{heartbeatsToSend:r,unsentEntries:i}=Hk(this._heartbeatsCache.heartbeats),s=CT(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Yn.warn(n),""}}}function Hy(){return new Date().toISOString().substring(0,10)}function Hk(t,e=Kk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cm()?bT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qy(t){return CT(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t){gn(new rn("platform-logger",e=>new uk(e),"PRIVATE")),gn(new rn("heartbeat",e=>new Wk(e),"PRIVATE")),Lt(bf,Ky,t),Lt(bf,Ky,"esm2017"),Lt("fire-js","")}Jk("");function pm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yk=jT,FT=new Bi("auth","Firebase",jT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new hm("@firebase/auth");function Xk(t,...e){lc.logLevel<=ae.WARN&&lc.warn(`Auth (${no}): ${t}`,...e)}function wu(t,...e){lc.logLevel<=ae.ERROR&&lc.error(`Auth (${no}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,...e){throw mm(t,...e)}function Rn(t,...e){return mm(t,...e)}function UT(t,e,n){const r=Object.assign(Object.assign({},Yk()),{[e]:n});return new Bi("auth","Firebase",r).create(e,{appName:t.name})}function Kn(t){return UT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return FT.create(t,...e)}function ee(t,e,...n){if(!t)throw mm(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wu(e),new Error(e)}function Xn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zk(){return Jy()==="http:"||Jy()==="https:"}function Jy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zk()||VN()||"connection"in navigator)?navigator.onLine:!0}function tb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=kN()||ON()}get(){return eb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=new rl(3e4,6e4);function Kr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,i={}){return $T(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=nl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return DN()||(c.referrerPolicy="no-referrer"),BT.fetch()(zT(t,t.config.apiHost,n,a),c)})}async function $T(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nb),e);try{const i=new sb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw UT(t,h,c);_n(t,h)}}catch(i){if(i instanceof yn)throw i;_n(t,"network-request-failed",{message:String(i)})}}async function il(t,e,n,r,i={}){const s=await nr(t,e,n,r,i);return"mfaPendingCredential"in s&&_n(t,"multi-factor-auth-required",{_serverResponse:s}),s}function zT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gm(t.config,i):`${t.config.apiScheme}://${i}`}function ib(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),rb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function Yy(t){return t!==void 0&&t.enterprise!==void 0}class ob{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ib(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ab(t,e){return nr(t,"GET","/v2/recaptchaConfig",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function qT(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ub(t,e=!1){const n=xe(t),r=await n.getIdToken(e),i=_m(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ua(vd(i.auth_time)),issuedAtTime:ua(vd(i.iat)),expirationTime:ua(vd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vd(t){return Number(t)*1e3}function _m(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=xT(n);return i?JSON.parse(i):(wu("Failed to decode base64 JWT payload"),null)}catch(i){return wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xy(t){const e=_m(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&cb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ua(this.lastLoginAt),this.creationTime=ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fs(t,qT(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?KT(s.providerUserInfo):[],a=fb(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function db(t){const e=xe(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KT(t){return t.map(e=>{var{providerId:n}=e,r=pm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t,e){const n=await $T(t,{},async()=>{const r=nl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=zT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",BT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mb(t,e){return nr(t,"POST","/v2/accounts:revokeToken",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Xy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cs;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ub(this,e)}reload(){return db(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await Fs(this,lb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,I=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:D,isAnonymous:L,providerData:j,stsTokenManager:v}=n;ee(w&&v,e,"internal-error");const _=Cs.fromJSON(this.name,v);ee(typeof w=="string",e,"internal-error"),lr(p,e.name),lr(g,e.name),ee(typeof D=="boolean",e,"internal-error"),ee(typeof L=="boolean",e,"internal-error"),lr(I,e.name),lr(S,e.name),lr(N,e.name),lr(b,e.name),lr(T,e.name),lr(E,e.name);const A=new Un({uid:w,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:L,photoURL:S,phoneNumber:I,tenantId:N,stsTokenManager:_,createdAt:T,lastLoginAt:E});return j&&Array.isArray(j)&&(A.providerData=j.map(P=>Object.assign({},P))),b&&(A._redirectEventId=b),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Cs;i.updateFromServerResponse(n);const s=new Un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?KT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Cs;a.updateFromIdToken(r);const l=new Un({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Map;function Bn(t){Xn(t instanceof Function,"Expected a class definition");let e=Zy.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GT.type="NONE";const ev=GT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Iu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Iu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Bn(ev),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Bn(ev);const o=Iu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Un._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new xs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(JT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(XT(e))return"Blackberry";if(ZT(e))return"Webos";if(HT(e))return"Safari";if((e.includes("chrome/")||QT(e))&&!e.includes("edge/"))return"Chrome";if(YT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WT(t=He()){return/firefox\//i.test(t)}function HT(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QT(t=He()){return/crios\//i.test(t)}function JT(t=He()){return/iemobile/i.test(t)}function YT(t=He()){return/android/i.test(t)}function XT(t=He()){return/blackberry/i.test(t)}function ZT(t=He()){return/webos/i.test(t)}function ym(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gb(t=He()){var e;return ym(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _b(){return MN()&&document.documentMode===10}function e0(t=He()){return ym(t)||YT(t)||ZT(t)||XT(t)||/windows phone/i.test(t)||JT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e=[]){let n;switch(t){case"Browser":n=tv(He());break;case"Worker":n=`${tv(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${no}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e={}){return nr(t,"GET","/v2/passwordPolicy",Kr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=6;class wb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Eb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nv(this),this.idTokenSubscription=new nv(this),this.beforeStateQueue=new yb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qT(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Kn(this));const n=e?xe(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vb(this),n=new wb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zi(t){return xe(t)}class nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=$N(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tb(t){Yc=t}function n0(t){return Yc.loadJS(t)}function Sb(){return Yc.recaptchaEnterpriseScript}function Ab(){return Yc.gapiScript}function Cb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xb="recaptcha-enterprise",Pb="NO_RECAPTCHA";class Rb{constructor(e){this.type=xb,this.auth=zi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ab(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ob(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Yy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Pb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Yy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Sb();l.length!==0&&(l+=a),n0(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function rv(t,e,n,r=!1){const i=new Rb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Lf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await rv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await rv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t,e){const n=$i(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Va(s,e??{}))return i;_n(i,"already-initialized")}return n.initialize({options:e})}function kb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bb(t,e,n){const r=zi(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=r0(e),{host:o,port:a}=Db(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Vb()}function r0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Db(t){const e=r0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:iv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:iv(o)}}}function iv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function Ob(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(t,e){return il(t,"POST","/v1/accounts:signInWithPassword",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lb(t,e){return il(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}async function jb(t,e){return il(t,"POST","/v1/accounts:signInWithEmailLink",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends vm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ma(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ma(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lf(e,n,"signInWithPassword",Mb);case"emailLink":return Lb(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lf(e,r,"signUpPassword",Ob);case"emailLink":return jb(e,{idToken:n,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e){return il(t,"POST","/v1/accounts:signInWithIdp",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="http://localhost";class xi extends vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_n("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:Fb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bb(t){const e=Wo(Ho(t)).link,n=e?Wo(Ho(e)).deep_link_id:null,r=Wo(Ho(t)).deep_link_id;return(r?Wo(Ho(r)).link:null)||r||n||e||t}class Em{constructor(e){var n,r,i,s,o,a;const l=Wo(Ho(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Ub((i=l.mode)!==null&&i!==void 0?i:null);ee(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Bb(e);try{return new Em(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.providerId=ro.PROVIDER_ID}static credential(e,n){return Ma._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Em.parseLink(n);return ee(r,"argument-error"),Ma._fromEmailAndCode(e,r.code,r.tenantId)}}ro.PROVIDER_ID="password";ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends i0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends sl{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xi._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends sl{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.GITHUB_SIGN_IN_METHOD="github.com";_r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends sl{constructor(){super("twitter.com")}static credential(e,n){return xi._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e){return il(t,"POST","/v1/accounts:signUp",Kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Un._fromIdTokenResponse(e,r,i),o=sv(r);return new Pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sv(r);return new Pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cc(e,n,r,i)}}function s0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,s,e,r):s})}async function zb(t,e,n=!1){const r=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(Kn(r));const i="reauthenticate";try{const s=await Fs(t,s0(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=_m(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),Pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t,e,n=!1){if(Sn(t.app))return Promise.reject(Kn(t));const r="signIn",i=await s0(t,r,e),s=await Pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Kb(t,e){return o0(zi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t){const e=zi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gb(t,e,n){if(Sn(t.app))return Promise.reject(Kn(t));const r=zi(t),o=await Lf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$b).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&a0(t),l}),a=await Pi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Wb(t,e,n){return Sn(t.app)?Promise.reject(Kn(t)):Kb(xe(t),ro.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&a0(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=xe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fs(r,Hb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e){return xe(t).setPersistence(e)}function Yb(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function Xb(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function Zb(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function e1(t){return xe(t).signOut()}const hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=1e3,n1=10;class u0 extends l0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_b()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,n1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},t1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u0.type="LOCAL";const c0=u0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0 extends l0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h0.type="SESSION";const d0=h0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Xc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await r1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=wm("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function s1(t){Nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function o1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function l1(){return f0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="firebaseLocalStorageDb",u1=1,dc="firebaseLocalStorage",m0="fbase_key";class ol{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zc(t,e){return t.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function c1(){const t=indexedDB.deleteDatabase(p0);return new ol(t).toPromise()}function jf(){const t=indexedDB.open(p0,u1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dc,{keyPath:m0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dc)?e(r):(r.close(),await c1(),e(await jf()))})})}async function ov(t,e,n){const r=Zc(t,!0).put({[m0]:e,value:n});return new ol(r).toPromise()}async function h1(t,e){const n=Zc(t,!1).get(e),r=await new ol(n).toPromise();return r===void 0?null:r.value}function av(t,e){const n=Zc(t,!0).delete(e);return new ol(n).toPromise()}const d1=800,f1=3;class g0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>f1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(l1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await o1(),!this.activeServiceWorker)return;this.sender=new i1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jf();return await ov(e,hc,"1"),await av(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ov(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>h1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>av(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zc(i,!1).getAll();return new ol(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g0.type="LOCAL";const p1=g0;new rl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t,e){return e?Bn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends vm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function g1(t){return o0(t.auth,new Im(t),t.bypassAuthState)}function _1(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),qb(n,new Im(t),t.bypassAuthState)}async function y1(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),zb(n,new Im(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return g1;case"linkViaPopup":case"linkViaRedirect":return y1;case"reauthViaPopup":case"reauthViaRedirect":return _1;default:_n(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new rl(2e3,1e4);class vs extends _0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=wm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,v1.get())};e()}}vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="pendingRedirect",Tu=new Map;class w1 extends _0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tu.get(this.auth._key());if(!e){try{const r=await I1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tu.set(this.auth._key(),e)}return this.bypassAuthState||Tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I1(t,e){const n=A1(e),r=S1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function T1(t,e){Tu.set(t._key(),e)}function S1(t){return Bn(t._redirectPersistence)}function A1(t){return Iu(E1,t.config.apiKey,t.name)}async function C1(t,e,n=!1){if(Sn(t.app))return Promise.reject(Kn(t));const r=zi(t),i=m1(r,e),o=await new w1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=10*60*1e3;class P1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!y0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x1&&this.cachedEventUids.clear(),this.cachedEventUids.has(lv(e))}saveEventToCache(e){this.cachedEventUids.add(lv(e)),this.lastProcessedEventTime=Date.now()}}function lv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b1=/^https?/;async function D1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await N1(t);for(const n of e)try{if(V1(n))return}catch{}_n(t,"unauthorized-domain")}function V1(t){const e=Of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!b1.test(n))return!1;if(k1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=new rl(3e4,6e4);function uv(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function M1(t){return new Promise((e,n)=>{var r,i,s;function o(){uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uv(),n(Rn(t,"network-request-failed"))},timeout:O1.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nn().gapi)===null||s===void 0)&&s.load)o();else{const a=Cb("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},n0(`${Ab()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Su=null,e})}let Su=null;function L1(t){return Su=Su||M1(t),Su}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new rl(5e3,15e3),F1="__/auth/iframe",U1="emulator/auth/iframe",B1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z1(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gm(e,U1):`https://${t.config.authDomain}/${F1}`,r={apiKey:e.apiKey,appName:t.name,v:no},i=$1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${nl(r).slice(1)}`}async function q1(t){const e=await L1(t),n=Nn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:z1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:B1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=Nn().setTimeout(()=>{s(o)},j1.get());function l(){Nn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},G1=500,W1=600,H1="_blank",Q1="http://localhost";class cv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function J1(t,e,n,r=G1,i=W1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},K1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=He().toLowerCase();n&&(a=QT(c)?H1:n),WT(c)&&(e=e||Q1,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[I,S])=>`${g}${I}=${S},`,"");if(gb(c)&&a!=="_self")return Y1(e||"",a),new cv(null);const p=window.open(e||"",a,h);ee(p,t,"popup-blocked");try{p.focus()}catch{}return new cv(p)}function Y1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="__/auth/handler",Z1="emulator/auth/handler",eD=encodeURIComponent("fac");async function hv(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:no,eventId:i};if(e instanceof i0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof sl){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${eD}=${encodeURIComponent(l)}`:"";return`${tD(t)}?${nl(a).slice(1)}${c}`}function tD({config:t}){return t.emulator?gm(t,Z1):`https://${t.authDomain}/${X1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="webStorageSupport";class nD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d0,this._completeRedirectFn=C1,this._overrideRedirectResult=T1}async _openPopup(e,n,r,i){var s;Xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await hv(e,n,r,Of(),i);return J1(e,o,wm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hv(e,n,r,Of(),i);return s1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await q1(e),r=new P1(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ed,{type:Ed},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ed];o!==void 0&&n(!!o),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=D1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e0()||HT()||ym()}}const rD=nD;var dv="@firebase/auth",fv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oD(t){gn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t0(t)},c=new Ib(r,i,s,l);return kb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gn(new rn("auth-internal",e=>{const n=zi(e.getProvider("auth").getImmediate());return(r=>new iD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(dv,fv,sD(t)),Lt(dv,fv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=5*60,lD=NT("authIdTokenMaxAge")||aD;let pv=null;const uD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lD)return;const i=n==null?void 0:n.token;pv!==i&&(pv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cD(t=fm()){const e=$i(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nb(t,{popupRedirectResolver:rD,persistence:[p1,c0,d0]}),r=NT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=uD(s.toString());Xb(n,o,()=>o(n.currentUser)),Yb(n,a=>o(a))}}const i=PT("auth");return i&&bb(n,`http://${i}`),n}function hD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Tb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oD("Browser");var mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,v0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function A(){}A.prototype=_.prototype,v.D=_.prototype,v.prototype=new A,v.prototype.constructor=v,v.C=function(P,k,R){for(var C=Array(arguments.length-2),H=2;H<arguments.length;H++)C[H-2]=arguments[H];return _.prototype[k].apply(P,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,A){A||(A=0);var P=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)P[k]=_.charCodeAt(A++)|_.charCodeAt(A++)<<8|_.charCodeAt(A++)<<16|_.charCodeAt(A++)<<24;else for(k=0;16>k;++k)P[k]=_[A++]|_[A++]<<8|_[A++]<<16|_[A++]<<24;_=v.g[0],A=v.g[1],k=v.g[2];var R=v.g[3],C=_+(R^A&(k^R))+P[0]+3614090360&4294967295;_=A+(C<<7&4294967295|C>>>25),C=R+(k^_&(A^k))+P[1]+3905402710&4294967295,R=_+(C<<12&4294967295|C>>>20),C=k+(A^R&(_^A))+P[2]+606105819&4294967295,k=R+(C<<17&4294967295|C>>>15),C=A+(_^k&(R^_))+P[3]+3250441966&4294967295,A=k+(C<<22&4294967295|C>>>10),C=_+(R^A&(k^R))+P[4]+4118548399&4294967295,_=A+(C<<7&4294967295|C>>>25),C=R+(k^_&(A^k))+P[5]+1200080426&4294967295,R=_+(C<<12&4294967295|C>>>20),C=k+(A^R&(_^A))+P[6]+2821735955&4294967295,k=R+(C<<17&4294967295|C>>>15),C=A+(_^k&(R^_))+P[7]+4249261313&4294967295,A=k+(C<<22&4294967295|C>>>10),C=_+(R^A&(k^R))+P[8]+1770035416&4294967295,_=A+(C<<7&4294967295|C>>>25),C=R+(k^_&(A^k))+P[9]+2336552879&4294967295,R=_+(C<<12&4294967295|C>>>20),C=k+(A^R&(_^A))+P[10]+4294925233&4294967295,k=R+(C<<17&4294967295|C>>>15),C=A+(_^k&(R^_))+P[11]+2304563134&4294967295,A=k+(C<<22&4294967295|C>>>10),C=_+(R^A&(k^R))+P[12]+1804603682&4294967295,_=A+(C<<7&4294967295|C>>>25),C=R+(k^_&(A^k))+P[13]+4254626195&4294967295,R=_+(C<<12&4294967295|C>>>20),C=k+(A^R&(_^A))+P[14]+2792965006&4294967295,k=R+(C<<17&4294967295|C>>>15),C=A+(_^k&(R^_))+P[15]+1236535329&4294967295,A=k+(C<<22&4294967295|C>>>10),C=_+(k^R&(A^k))+P[1]+4129170786&4294967295,_=A+(C<<5&4294967295|C>>>27),C=R+(A^k&(_^A))+P[6]+3225465664&4294967295,R=_+(C<<9&4294967295|C>>>23),C=k+(_^A&(R^_))+P[11]+643717713&4294967295,k=R+(C<<14&4294967295|C>>>18),C=A+(R^_&(k^R))+P[0]+3921069994&4294967295,A=k+(C<<20&4294967295|C>>>12),C=_+(k^R&(A^k))+P[5]+3593408605&4294967295,_=A+(C<<5&4294967295|C>>>27),C=R+(A^k&(_^A))+P[10]+38016083&4294967295,R=_+(C<<9&4294967295|C>>>23),C=k+(_^A&(R^_))+P[15]+3634488961&4294967295,k=R+(C<<14&4294967295|C>>>18),C=A+(R^_&(k^R))+P[4]+3889429448&4294967295,A=k+(C<<20&4294967295|C>>>12),C=_+(k^R&(A^k))+P[9]+568446438&4294967295,_=A+(C<<5&4294967295|C>>>27),C=R+(A^k&(_^A))+P[14]+3275163606&4294967295,R=_+(C<<9&4294967295|C>>>23),C=k+(_^A&(R^_))+P[3]+4107603335&4294967295,k=R+(C<<14&4294967295|C>>>18),C=A+(R^_&(k^R))+P[8]+1163531501&4294967295,A=k+(C<<20&4294967295|C>>>12),C=_+(k^R&(A^k))+P[13]+2850285829&4294967295,_=A+(C<<5&4294967295|C>>>27),C=R+(A^k&(_^A))+P[2]+4243563512&4294967295,R=_+(C<<9&4294967295|C>>>23),C=k+(_^A&(R^_))+P[7]+1735328473&4294967295,k=R+(C<<14&4294967295|C>>>18),C=A+(R^_&(k^R))+P[12]+2368359562&4294967295,A=k+(C<<20&4294967295|C>>>12),C=_+(A^k^R)+P[5]+4294588738&4294967295,_=A+(C<<4&4294967295|C>>>28),C=R+(_^A^k)+P[8]+2272392833&4294967295,R=_+(C<<11&4294967295|C>>>21),C=k+(R^_^A)+P[11]+1839030562&4294967295,k=R+(C<<16&4294967295|C>>>16),C=A+(k^R^_)+P[14]+4259657740&4294967295,A=k+(C<<23&4294967295|C>>>9),C=_+(A^k^R)+P[1]+2763975236&4294967295,_=A+(C<<4&4294967295|C>>>28),C=R+(_^A^k)+P[4]+1272893353&4294967295,R=_+(C<<11&4294967295|C>>>21),C=k+(R^_^A)+P[7]+4139469664&4294967295,k=R+(C<<16&4294967295|C>>>16),C=A+(k^R^_)+P[10]+3200236656&4294967295,A=k+(C<<23&4294967295|C>>>9),C=_+(A^k^R)+P[13]+681279174&4294967295,_=A+(C<<4&4294967295|C>>>28),C=R+(_^A^k)+P[0]+3936430074&4294967295,R=_+(C<<11&4294967295|C>>>21),C=k+(R^_^A)+P[3]+3572445317&4294967295,k=R+(C<<16&4294967295|C>>>16),C=A+(k^R^_)+P[6]+76029189&4294967295,A=k+(C<<23&4294967295|C>>>9),C=_+(A^k^R)+P[9]+3654602809&4294967295,_=A+(C<<4&4294967295|C>>>28),C=R+(_^A^k)+P[12]+3873151461&4294967295,R=_+(C<<11&4294967295|C>>>21),C=k+(R^_^A)+P[15]+530742520&4294967295,k=R+(C<<16&4294967295|C>>>16),C=A+(k^R^_)+P[2]+3299628645&4294967295,A=k+(C<<23&4294967295|C>>>9),C=_+(k^(A|~R))+P[0]+4096336452&4294967295,_=A+(C<<6&4294967295|C>>>26),C=R+(A^(_|~k))+P[7]+1126891415&4294967295,R=_+(C<<10&4294967295|C>>>22),C=k+(_^(R|~A))+P[14]+2878612391&4294967295,k=R+(C<<15&4294967295|C>>>17),C=A+(R^(k|~_))+P[5]+4237533241&4294967295,A=k+(C<<21&4294967295|C>>>11),C=_+(k^(A|~R))+P[12]+1700485571&4294967295,_=A+(C<<6&4294967295|C>>>26),C=R+(A^(_|~k))+P[3]+2399980690&4294967295,R=_+(C<<10&4294967295|C>>>22),C=k+(_^(R|~A))+P[10]+4293915773&4294967295,k=R+(C<<15&4294967295|C>>>17),C=A+(R^(k|~_))+P[1]+2240044497&4294967295,A=k+(C<<21&4294967295|C>>>11),C=_+(k^(A|~R))+P[8]+1873313359&4294967295,_=A+(C<<6&4294967295|C>>>26),C=R+(A^(_|~k))+P[15]+4264355552&4294967295,R=_+(C<<10&4294967295|C>>>22),C=k+(_^(R|~A))+P[6]+2734768916&4294967295,k=R+(C<<15&4294967295|C>>>17),C=A+(R^(k|~_))+P[13]+1309151649&4294967295,A=k+(C<<21&4294967295|C>>>11),C=_+(k^(A|~R))+P[4]+4149444226&4294967295,_=A+(C<<6&4294967295|C>>>26),C=R+(A^(_|~k))+P[11]+3174756917&4294967295,R=_+(C<<10&4294967295|C>>>22),C=k+(_^(R|~A))+P[2]+718787259&4294967295,k=R+(C<<15&4294967295|C>>>17),C=A+(R^(k|~_))+P[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var A=_-this.blockSize,P=this.B,k=this.h,R=0;R<_;){if(k==0)for(;R<=A;)i(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<_;)if(P[k++]=v.charCodeAt(R++),k==this.blockSize){i(this,P),k=0;break}}else for(;R<_;)if(P[k++]=v[R++],k==this.blockSize){i(this,P),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var A=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=A&255,A/=256;for(this.u(v),v=Array(16),_=A=0;4>_;++_)for(var P=0;32>P;P+=8)v[A++]=this.g[_]>>>P&255;return v};function s(v,_){var A=a;return Object.prototype.hasOwnProperty.call(A,v)?A[v]:A[v]=_(v)}function o(v,_){this.h=_;for(var A=[],P=!0,k=v.length-1;0<=k;k--){var R=v[k]|0;P&&R==_||(A[k]=R,P=!1)}this.g=A}var a={};function l(v){return-128<=v&&128>v?s(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return b(c(-v));for(var _=[],A=1,P=0;v>=A;P++)_[P]=v/A|0,A*=4294967296;return new o(_,0)}function h(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return b(h(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(_,8)),P=p,k=0;k<v.length;k+=8){var R=Math.min(8,v.length-k),C=parseInt(v.substring(k,k+R),_);8>R?(R=c(Math.pow(_,R)),P=P.j(R).add(c(C))):(P=P.j(A),P=P.add(c(C)))}return P}var p=l(0),g=l(1),I=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-b(this).m();for(var v=0,_=1,A=0;A<this.g.length;A++){var P=this.i(A);v+=(0<=P?P:4294967296+P)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(N(this))return"-"+b(this).toString(v);for(var _=c(Math.pow(v,6)),A=this,P="";;){var k=D(A,_).g;A=T(A,k.j(_));var R=((0<A.g.length?A.g[0]:A.h)>>>0).toString(v);if(A=k,S(A))return R+P;for(;6>R.length;)R="0"+R;P=R+P}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=T(this,v),N(v)?-1:S(v)?0:1};function b(v){for(var _=v.g.length,A=[],P=0;P<_;P++)A[P]=~v.g[P];return new o(A,~v.h).add(g)}t.abs=function(){return N(this)?b(this):this},t.add=function(v){for(var _=Math.max(this.g.length,v.g.length),A=[],P=0,k=0;k<=_;k++){var R=P+(this.i(k)&65535)+(v.i(k)&65535),C=(R>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);P=C>>>16,R&=65535,C&=65535,A[k]=C<<16|R}return new o(A,A[A.length-1]&-2147483648?-1:0)};function T(v,_){return v.add(b(_))}t.j=function(v){if(S(this)||S(v))return p;if(N(this))return N(v)?b(this).j(b(v)):b(b(this).j(v));if(N(v))return b(this.j(b(v)));if(0>this.l(I)&&0>v.l(I))return c(this.m()*v.m());for(var _=this.g.length+v.g.length,A=[],P=0;P<2*_;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var k=0;k<v.g.length;k++){var R=this.i(P)>>>16,C=this.i(P)&65535,H=v.i(k)>>>16,oe=v.i(k)&65535;A[2*P+2*k]+=C*oe,E(A,2*P+2*k),A[2*P+2*k+1]+=R*oe,E(A,2*P+2*k+1),A[2*P+2*k+1]+=C*H,E(A,2*P+2*k+1),A[2*P+2*k+2]+=R*H,E(A,2*P+2*k+2)}for(P=0;P<_;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=_;P<2*_;P++)A[P]=0;return new o(A,0)};function E(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function w(v,_){this.g=v,this.h=_}function D(v,_){if(S(_))throw Error("division by zero");if(S(v))return new w(p,p);if(N(v))return _=D(b(v),_),new w(b(_.g),b(_.h));if(N(_))return _=D(v,b(_)),new w(b(_.g),_.h);if(30<v.g.length){if(N(v)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var A=g,P=_;0>=P.l(v);)A=L(A),P=L(P);var k=j(A,1),R=j(P,1);for(P=j(P,2),A=j(A,2);!S(P);){var C=R.add(P);0>=C.l(v)&&(k=k.add(A),R=C),P=j(P,1),A=j(A,1)}return _=T(v,k.j(_)),new w(k,_)}for(k=p;0<=v.l(_);){for(A=Math.max(1,Math.floor(v.m()/_.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),R=c(A),C=R.j(_);N(C)||0<C.l(v);)A-=P,R=c(A),C=R.j(_);S(R)&&(R=g),k=k.add(R),v=T(v,C)}return new w(k,v)}t.A=function(v){return D(this,v).h},t.and=function(v){for(var _=Math.max(this.g.length,v.g.length),A=[],P=0;P<_;P++)A[P]=this.i(P)&v.i(P);return new o(A,this.h&v.h)},t.or=function(v){for(var _=Math.max(this.g.length,v.g.length),A=[],P=0;P<_;P++)A[P]=this.i(P)|v.i(P);return new o(A,this.h|v.h)},t.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),A=[],P=0;P<_;P++)A[P]=this.i(P)^v.i(P);return new o(A,this.h^v.h)};function L(v){for(var _=v.g.length+1,A=[],P=0;P<_;P++)A[P]=v.i(P)<<1|v.i(P-1)>>>31;return new o(A,v.h)}function j(v,_){var A=_>>5;_%=32;for(var P=v.g.length-A,k=[],R=0;R<P;R++)k[R]=0<_?v.i(R+A)>>>_|v.i(R+A+1)<<32-_:v.i(R+A);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,v0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,_i=o}).apply(typeof mv<"u"?mv:typeof self<"u"?self:typeof window<"u"?window:{});var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var E0,Qo,w0,Au,Ff,I0,T0,S0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var V=u[y];if(!(V in m))break e;m=m[V]}u=u[u.length-1],y=m[u],d=d(y),d!=y&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,y=!1,V={next:function(){if(!y&&m<u.length){var M=m++;return{value:d(M,u[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function p(u,d,m){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,y),u.apply(d,V)}}return function(){return u.apply(d,arguments)}}function g(u,d,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function I(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function S(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(y,V,M){for(var q=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)q[ye-2]=arguments[ye];return d.prototype[V].apply(y,q)}}function N(u){const d=u.length;if(0<d){const m=Array(d);for(let y=0;y<d;y++)m[y]=u[y];return m}return[]}function b(u,d){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const V=u.length||0,M=y.length||0;u.length=V+M;for(let q=0;q<M;q++)u[V+q]=y[q]}else u.push(y)}}class T{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(u){return/^[\s\xa0]*$/.test(u)}function w(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function D(u){return D[" "](u),u}D[" "]=function(){};var L=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function j(u,d,m){for(const y in u)d.call(m,u[y],y,u)}function v(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function _(u){const d={};for(const m in u)d[m]=u[m];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,d){let m,y;for(let V=1;V<arguments.length;V++){y=arguments[V];for(m in y)u[m]=y[m];for(let M=0;M<A.length;M++)m=A[M],Object.prototype.hasOwnProperty.call(y,m)&&(u[m]=y[m])}}function k(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function R(u){a.setTimeout(()=>{throw u},0)}function C(){var u=$;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class H{constructor(){this.h=this.g=null}add(d,m){const y=oe.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var oe=new T(()=>new _e,u=>u.reset());class _e{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,z=!1,$=new H,Z=()=>{const u=a.Promise.resolve(void 0);Ee=()=>{u.then(ne)}};var ne=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(m){R(m)}var d=oe;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}z=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var Pt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return u}();function Rt(u,d){if(Se.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(L){e:{try{D(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:on[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Rt.aa.h.call(this)}}S(Rt,Se);var on={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),Eh=0;function ml(u,d,m,y,V){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=V,this.key=++Eh,this.da=this.fa=!1}function vn(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Gi(u){this.src=u,this.g={},this.h=0}Gi.prototype.add=function(u,d,m,y,V){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var q=co(u,d,y,V);return-1<q?(d=u[q],m||(d.fa=!1)):(d=new ml(d,this.src,M,!!y,V),d.fa=m,u.push(d)),d};function uo(u,d){var m=d.type;if(m in u.g){var y=u.g[m],V=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=V)&&Array.prototype.splice.call(y,V,1),M&&(vn(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function co(u,d,m,y){for(var V=0;V<u.length;++V){var M=u[V];if(!M.da&&M.listener==d&&M.capture==!!m&&M.ha==y)return V}return-1}var ho="closure_lm_"+(1e6*Math.random()|0),fo={};function gl(u,d,m,y,V){if(Array.isArray(d)){for(var M=0;M<d.length;M++)gl(u,d[M],m,y,V);return null}return m=rr(m),u&&u[an]?u.K(d,m,c(y)?!!y.capture:!1,V):wh(u,d,m,!1,y,V)}function wh(u,d,m,y,V,M){if(!d)throw Error("Invalid event type");var q=c(V)?!!V.capture:!!V,ye=Y(u);if(ye||(u[ho]=ye=new Gi(u)),m=ye.add(d,m,y,q,M),m.proxy)return m;if(y=Ih(),m.proxy=y,y.src=u,y.listener=m,u.addEventListener)Pt||(V=q),V===void 0&&(V=!1),u.addEventListener(d.toString(),y,V);else if(u.attachEvent)u.attachEvent(yl(d.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ih(){function u(m){return d.call(u.src,u.listener,m)}const d=Th;return u}function _l(u,d,m,y,V){if(Array.isArray(d))for(var M=0;M<d.length;M++)_l(u,d[M],m,y,V);else y=c(y)?!!y.capture:!!y,m=rr(m),u&&u[an]?(u=u.i,d=String(d).toString(),d in u.g&&(M=u.g[d],m=co(M,m,y,V),-1<m&&(vn(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete u.g[d],u.h--)))):u&&(u=Y(u))&&(d=u.g[d.toString()],u=-1,d&&(u=co(d,m,y,V)),(m=-1<u?d[u]:null)&&po(m))}function po(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[an])uo(d.i,u);else{var m=u.type,y=u.proxy;d.removeEventListener?d.removeEventListener(m,y,u.capture):d.detachEvent?d.detachEvent(yl(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=Y(d))?(uo(m,u),m.h==0&&(m.src=null,d[ho]=null)):vn(u)}}}function yl(u){return u in fo?fo[u]:fo[u]="on"+u}function Th(u,d){if(u.da)u=!0;else{d=new Rt(d,this);var m=u.listener,y=u.ha||u.src;u.fa&&po(u),u=m.call(y,d)}return u}function Y(u){return u=u[ho],u instanceof Gi?u:null}var je="__closure_events_fn_"+(1e9*Math.random()>>>0);function rr(u){return typeof u=="function"?u:(u[je]||(u[je]=function(d){return u.handleEvent(d)}),u[je])}function at(){de.call(this),this.i=new Gi(this),this.M=this,this.F=null}S(at,de),at.prototype[an]=!0,at.prototype.removeEventListener=function(u,d,m,y){_l(this,u,d,m,y)};function gt(u,d){var m,y=u.F;if(y)for(m=[];y;y=y.F)m.push(y);if(u=u.M,y=d.type||d,typeof d=="string")d=new Se(d,u);else if(d instanceof Se)d.target=d.target||u;else{var V=d;d=new Se(y,u),P(d,V)}if(V=!0,m)for(var M=m.length-1;0<=M;M--){var q=d.g=m[M];V=vl(q,y,!0,d)&&V}if(q=d.g=u,V=vl(q,y,!0,d)&&V,V=vl(q,y,!1,d)&&V,m)for(M=0;M<m.length;M++)q=d.g=m[M],V=vl(q,y,!1,d)&&V}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],y=0;y<m.length;y++)vn(m[y]);delete u.g[d],u.h--}}this.F=null},at.prototype.K=function(u,d,m,y){return this.i.add(String(u),d,!1,m,y)},at.prototype.L=function(u,d,m,y){return this.i.add(String(u),d,!0,m,y)};function vl(u,d,m,y){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,M=0;M<d.length;++M){var q=d[M];if(q&&!q.da&&q.capture==m){var ye=q.listener,nt=q.ha||q.src;q.fa&&uo(u.i,q),V=ye.call(nt,y)!==!1&&V}}return V&&!y.defaultPrevented}function xg(u,d,m){if(typeof u=="function")m&&(u=g(u,m));else if(u&&typeof u.handleEvent=="function")u=g(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Pg(u){u.g=xg(()=>{u.g=null,u.i&&(u.i=!1,Pg(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class fC extends de{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Pg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mo(u){de.call(this),this.h=u,this.g={}}S(mo,de);var Rg=[];function Ng(u){j(u.g,function(d,m){this.g.hasOwnProperty(m)&&po(d)},u),u.g={}}mo.prototype.N=function(){mo.aa.N.call(this),Ng(this)},mo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sh=a.JSON.stringify,pC=a.JSON.parse,mC=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Ah(){}Ah.prototype.h=null;function kg(u){return u.h||(u.h=u.i())}function bg(){}var go={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ch(){Se.call(this,"d")}S(Ch,Se);function xh(){Se.call(this,"c")}S(xh,Se);var Yr={},Dg=null;function El(){return Dg=Dg||new at}Yr.La="serverreachability";function Vg(u){Se.call(this,Yr.La,u)}S(Vg,Se);function _o(u){const d=El();gt(d,new Vg(d))}Yr.STAT_EVENT="statevent";function Og(u,d){Se.call(this,Yr.STAT_EVENT,u),this.stat=d}S(Og,Se);function _t(u){const d=El();gt(d,new Og(d,u))}Yr.Ma="timingevent";function Mg(u,d){Se.call(this,Yr.Ma,u),this.size=d}S(Mg,Se);function yo(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function vo(){this.g=!0}vo.prototype.xa=function(){this.g=!1};function gC(u,d,m,y,V,M){u.info(function(){if(u.g)if(M)for(var q="",ye=M.split("&"),nt=0;nt<ye.length;nt++){var he=ye[nt].split("=");if(1<he.length){var lt=he[0];he=he[1];var ut=lt.split("_");q=2<=ut.length&&ut[1]=="type"?q+(lt+"="+he+"&"):q+(lt+"=redacted&")}}else q=null;else q=M;return"XMLHTTP REQ ("+y+") [attempt "+V+"]: "+d+`
`+m+`
`+q})}function _C(u,d,m,y,V,M,q){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+V+"]: "+d+`
`+m+`
`+M+" "+q})}function Wi(u,d,m,y){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+vC(u,m)+(y?" "+y:"")})}function yC(u,d){u.info(function(){return"TIMEOUT: "+d})}vo.prototype.info=function(){};function vC(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var y=m[u];if(!(2>y.length)){var V=y[1];if(Array.isArray(V)&&!(1>V.length)){var M=V[0];if(M!="noop"&&M!="stop"&&M!="close")for(var q=1;q<V.length;q++)V[q]=""}}}}return Sh(m)}catch{return d}}var wl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ph;function Il(){}S(Il,Ah),Il.prototype.g=function(){return new XMLHttpRequest},Il.prototype.i=function(){return{}},Ph=new Il;function ir(u,d,m,y){this.j=u,this.i=d,this.l=m,this.R=y||1,this.U=new mo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jg}function jg(){this.i=null,this.g="",this.h=!1}var Fg={},Rh={};function Nh(u,d,m){u.L=1,u.v=Cl(bn(d)),u.m=m,u.P=!0,Ug(u,null)}function Ug(u,d){u.F=Date.now(),Tl(u),u.A=bn(u.v);var m=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),e_(m.i,"t",y),u.C=0,m=u.j.J,u.h=new jg,u.g=y_(u.j,m?d:null,!u.m),0<u.O&&(u.M=new fC(g(u.Y,u,u.g),u.O)),d=u.U,m=u.g,y=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(Rg[0]=V.toString()),V=Rg);for(var M=0;M<V.length;M++){var q=gl(m,V[M],y||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=u.H?_(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),_o(),gC(u.i,u.u,u.A,u.l,u.R,u.m)}ir.prototype.ca=function(u){u=u.target;const d=this.M;d&&Dn(u)==3?d.j():this.Y(u)},ir.prototype.Y=function(u){try{if(u==this.g)e:{const ut=Dn(this.g);var d=this.g.Ba();const Ji=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||a_(this.g)))){this.J||ut!=4||d==7||(d==8||0>=Ji?_o(3):_o(2)),kh(this);var m=this.g.Z();this.X=m;t:if(Bg(this)){var y=a_(this.g);u="";var V=y.length,M=Dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),Eo(this);var q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,u+=this.h.i.decode(y[d],{stream:!(M&&d==V-1)});y.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,_C(this.i,this.u,this.A,this.l,this.R,ut,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,nt=this.g;if((ye=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ye)){var he=ye;break t}}he=null}if(m=he)Wi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bh(this,m);else{this.o=!1,this.s=3,_t(12),Xr(this),Eo(this);break e}}if(this.P){m=!0;let ln;for(;!this.J&&this.C<q.length;)if(ln=EC(this,q),ln==Rh){ut==4&&(this.s=4,_t(14),m=!1),Wi(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Fg){this.s=4,_t(15),Wi(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else Wi(this.i,this.l,ln,null),bh(this,ln);if(Bg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||q.length!=0||this.h.h||(this.s=1,_t(16),m=!1),this.o=this.o&&m,!m)Wi(this.i,this.l,q,"[Invalid Chunked Response]"),Xr(this),Eo(this);else if(0<q.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),jh(lt),lt.M=!0,_t(11))}}else Wi(this.i,this.l,q,null),bh(this,q);ut==4&&Xr(this),this.o&&!this.J&&(ut==4?p_(this.j,this):(this.o=!1,Tl(this)))}else LC(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Xr(this),Eo(this)}}}catch{}finally{}};function Bg(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function EC(u,d){var m=u.C,y=d.indexOf(`
`,m);return y==-1?Rh:(m=Number(d.substring(m,y)),isNaN(m)?Fg:(y+=1,y+m>d.length?Rh:(d=d.slice(y,y+m),u.C=y+m,d)))}ir.prototype.cancel=function(){this.J=!0,Xr(this)};function Tl(u){u.S=Date.now()+u.I,$g(u,u.I)}function $g(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=yo(g(u.ba,u),d)}function kh(u){u.B&&(a.clearTimeout(u.B),u.B=null)}ir.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(yC(this.i,this.A),this.L!=2&&(_o(),_t(17)),Xr(this),this.s=2,Eo(this)):$g(this,this.S-u)};function Eo(u){u.j.G==0||u.J||p_(u.j,u)}function Xr(u){kh(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Ng(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function bh(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||Dh(m.h,u))){if(!u.K&&Dh(m.h,u)&&m.G==3){try{var y=m.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var V=y;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)bl(m),Nl(m);else break e;Lh(m),_t(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=yo(g(m.Za,m),6e3));if(1>=Kg(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ei(m,11)}else if((u.K||m.g==u)&&bl(m),!E(d))for(V=m.Da.g.parse(d),d=0;d<V.length;d++){let he=V[d];if(m.T=he[0],he=he[1],m.G==2)if(he[0]=="c"){m.K=he[1],m.ia=he[2];const lt=he[3];lt!=null&&(m.la=lt,m.j.info("VER="+m.la));const ut=he[4];ut!=null&&(m.Aa=ut,m.j.info("SVER="+m.Aa));const Ji=he[5];Ji!=null&&typeof Ji=="number"&&0<Ji&&(y=1.5*Ji,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const ln=u.g;if(ln){const Vl=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vl){var M=y.h;M.g||Vl.indexOf("spdy")==-1&&Vl.indexOf("quic")==-1&&Vl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Vh(M,M.h),M.h=null))}if(y.D){const Fh=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Fh&&(y.ya=Fh,we(y.I,y.D,Fh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var q=u;if(y.qa=__(y,y.J?y.ia:null,y.W),q.K){Gg(y.h,q);var ye=q,nt=y.L;nt&&(ye.I=nt),ye.B&&(kh(ye),Tl(ye)),y.g=q}else d_(y);0<m.i.length&&kl(m)}else he[0]!="stop"&&he[0]!="close"||ei(m,7);else m.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?ei(m,7):Mh(m):he[0]!="noop"&&m.l&&m.l.ta(he),m.v=0)}}_o(4)}catch{}}var wC=class{constructor(u,d){this.g=u,this.map=d}};function zg(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qg(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Kg(u){return u.h?1:u.g?u.g.size:0}function Dh(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function Vh(u,d){u.g?u.g.add(d):u.h=d}function Gg(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}zg.prototype.cancel=function(){if(this.i=Wg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Wg(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return N(u.i)}function IC(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,y=0;y<m;y++)d.push(u[y]);return d}d=[],m=0;for(y in u)d[m++]=u[y];return d}function TC(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const y in u)d[m++]=y;return d}}}function Hg(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=TC(u),y=IC(u),V=y.length,M=0;M<V;M++)d.call(void 0,y[M],m&&m[M],u)}var Qg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SC(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var y=u[m].indexOf("="),V=null;if(0<=y){var M=u[m].substring(0,y);V=u[m].substring(y+1)}else M=u[m];d(M,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Zr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Zr){this.h=u.h,Sl(this,u.j),this.o=u.o,this.g=u.g,Al(this,u.s),this.l=u.l;var d=u.i,m=new To;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Jg(this,m),this.m=u.m}else u&&(d=String(u).match(Qg))?(this.h=!1,Sl(this,d[1]||"",!0),this.o=wo(d[2]||""),this.g=wo(d[3]||"",!0),Al(this,d[4]),this.l=wo(d[5]||"",!0),Jg(this,d[6]||"",!0),this.m=wo(d[7]||"")):(this.h=!1,this.i=new To(null,this.h))}Zr.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Io(d,Yg,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Io(d,Yg,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Io(m,m.charAt(0)=="/"?xC:CC,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Io(m,RC)),u.join("")};function bn(u){return new Zr(u)}function Sl(u,d,m){u.j=m?wo(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Al(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Jg(u,d,m){d instanceof To?(u.i=d,NC(u.i,u.h)):(m||(d=Io(d,PC)),u.i=new To(d,u.h))}function we(u,d,m){u.i.set(d,m)}function Cl(u){return we(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function wo(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Io(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,AC),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function AC(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Yg=/[#\/\?@]/g,CC=/[#\?:]/g,xC=/[#\?]/g,PC=/[#\?@]/g,RC=/#/g;function To(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function sr(u){u.g||(u.g=new Map,u.h=0,u.i&&SC(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=To.prototype,t.add=function(u,d){sr(this),this.i=null,u=Hi(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function Xg(u,d){sr(u),d=Hi(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Zg(u,d){return sr(u),d=Hi(u,d),u.g.has(d)}t.forEach=function(u,d){sr(this),this.g.forEach(function(m,y){m.forEach(function(V){u.call(d,V,y,this)},this)},this)},t.na=function(){sr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let y=0;y<d.length;y++){const V=u[y];for(let M=0;M<V.length;M++)m.push(d[y])}return m},t.V=function(u){sr(this);let d=[];if(typeof u=="string")Zg(this,u)&&(d=d.concat(this.g.get(Hi(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return sr(this),this.i=null,u=Hi(this,u),Zg(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function e_(u,d,m){Xg(u,d),0<m.length&&(u.i=null,u.g.set(Hi(u,d),N(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var y=d[m];const M=encodeURIComponent(String(y)),q=this.V(y);for(y=0;y<q.length;y++){var V=M;q[y]!==""&&(V+="="+encodeURIComponent(String(q[y]))),u.push(V)}}return this.i=u.join("&")};function Hi(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function NC(u,d){d&&!u.j&&(sr(u),u.i=null,u.g.forEach(function(m,y){var V=y.toLowerCase();y!=V&&(Xg(this,y),e_(this,V,m))},u)),u.j=d}function kC(u,d){const m=new vo;if(a.Image){const y=new Image;y.onload=I(or,m,"TestLoadImage: loaded",!0,d,y),y.onerror=I(or,m,"TestLoadImage: error",!1,d,y),y.onabort=I(or,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=I(or,m,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else d(!1)}function bC(u,d){const m=new vo,y=new AbortController,V=setTimeout(()=>{y.abort(),or(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:y.signal}).then(M=>{clearTimeout(V),M.ok?or(m,"TestPingServer: ok",!0,d):or(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),or(m,"TestPingServer: error",!1,d)})}function or(u,d,m,y,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),y(m)}catch{}}function DC(){this.g=new mC}function VC(u,d,m){const y=m||"";try{Hg(u,function(V,M){let q=V;c(V)&&(q=Sh(V)),d.push(y+M+"="+encodeURIComponent(q))})}catch(V){throw d.push(y+"type="+encodeURIComponent("_badmap")),V}}function xl(u){this.l=u.Ub||null,this.j=u.eb||!1}S(xl,Ah),xl.prototype.g=function(){return new Pl(this.l,this.j)},xl.prototype.i=function(u){return function(){return u}}({});function Pl(u,d){at.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Pl,at),t=Pl.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Ao(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,So(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ao(this)),this.g&&(this.readyState=3,Ao(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;t_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function t_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?So(this):Ao(this),this.readyState==3&&t_(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,So(this))},t.Qa=function(u){this.g&&(this.response=u,So(this))},t.ga=function(){this.g&&So(this)};function So(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ao(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function Ao(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function n_(u){let d="";return j(u,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function Oh(u,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=n_(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):we(u,d,m))}function Oe(u){at.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Oe,at);var OC=/^https?$/i,MC=["POST","PUT"];t=Oe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ph.g(),this.v=this.o?kg(this.o):kg(Ph),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(M){r_(this,M);return}if(u=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var V in y)m.set(V,y[V]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())m.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),V=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(MC,d,void 0))||y||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,q]of m)this.g.setRequestHeader(M,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{o_(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){r_(this,M)}};function r_(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,i_(u),Rl(u)}function i_(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),Rl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rl(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?s_(this):this.bb())},t.bb=function(){s_(this)};function s_(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Dn(u)!=4||u.Z()!=2)){if(u.u&&Dn(u)==4)xg(u.Ea,0,u);else if(gt(u,"readystatechange"),Dn(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=q===0){var V=String(u.D).match(Qg)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),y=!OC.test(V?V.toLowerCase():"")}m=y}if(m)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var M=2<Dn(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",i_(u)}}finally{Rl(u)}}}}function Rl(u,d){if(u.g){o_(u);const m=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||gt(u,"ready");try{m.onreadystatechange=y}catch{}}}function o_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Dn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),pC(d)}};function a_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function LC(u){const d={};u=(u.g&&2<=Dn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(E(u[y]))continue;var m=k(u[y]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=d[V]||[];d[V]=M,M.push(m)}v(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Co(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function l_(u){this.Aa=0,this.i=[],this.j=new vo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Co("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Co("baseRetryDelayMs",5e3,u),this.cb=Co("retryDelaySeedMs",1e4,u),this.Wa=Co("forwardChannelMaxRetries",2,u),this.wa=Co("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new zg(u&&u.concurrentRequestLimit),this.Da=new DC,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=l_.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,y){_t(0),this.W=u,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=__(this,null,this.W),kl(this)};function Mh(u){if(u_(u),u.G==3){var d=u.U++,m=bn(u.I);if(we(m,"SID",u.K),we(m,"RID",d),we(m,"TYPE","terminate"),xo(u,m),d=new ir(u,u.j,d),d.L=2,d.v=Cl(bn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=y_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Tl(d)}g_(u)}function Nl(u){u.g&&(jh(u),u.g.cancel(),u.g=null)}function u_(u){Nl(u),u.u&&(a.clearTimeout(u.u),u.u=null),bl(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function kl(u){if(!qg(u.h)&&!u.s){u.s=!0;var d=u.Ga;Ee||Z(),z||(Ee(),z=!0),$.add(d,u),u.B=0}}function jC(u,d){return Kg(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=yo(g(u.Ga,u,d),m_(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new ir(this,this.j,u);let M=this.o;if(this.S&&(M?(M=_(M),P(M,this.S)):M=this.S),this.m!==null||this.O||(V.H=M,M=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=h_(this,V,d),m=bn(this.I),we(m,"RID",u),we(m,"CVER",22),this.D&&we(m,"X-HTTP-Session-Id",this.D),xo(this,m),M&&(this.O?d="headers="+encodeURIComponent(String(n_(M)))+"&"+d:this.m&&Oh(m,this.m,M)),Vh(this.h,V),this.Ua&&we(m,"TYPE","init"),this.P?(we(m,"$req",d),we(m,"SID","null"),V.T=!0,Nh(V,m,null)):Nh(V,m,d),this.G=2}}else this.G==3&&(u?c_(this,u):this.i.length==0||qg(this.h)||c_(this))};function c_(u,d){var m;d?m=d.l:m=u.U++;const y=bn(u.I);we(y,"SID",u.K),we(y,"RID",m),we(y,"AID",u.T),xo(u,y),u.m&&u.o&&Oh(y,u.m,u.o),m=new ir(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=h_(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Vh(u.h,m),Nh(m,y,d)}function xo(u,d){u.H&&j(u.H,function(m,y){we(d,y,m)}),u.l&&Hg({},function(m,y){we(d,y,m)})}function h_(u,d,m){m=Math.min(u.i.length,m);var y=u.l?g(u.l.Na,u.l,u):null;e:{var V=u.i;let M=-1;for(;;){const q=["count="+m];M==-1?0<m?(M=V[0].g,q.push("ofs="+M)):M=0:q.push("ofs="+M);let ye=!0;for(let nt=0;nt<m;nt++){let he=V[nt].g;const lt=V[nt].map;if(he-=M,0>he)M=Math.max(0,V[nt].g-100),ye=!1;else try{VC(lt,q,"req"+he+"_")}catch{y&&y(lt)}}if(ye){y=q.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,y}function d_(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;Ee||Z(),z||(Ee(),z=!0),$.add(d,u),u.v=0}}function Lh(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=yo(g(u.Fa,u),m_(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,f_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=yo(g(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Nl(this),f_(this))};function jh(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function f_(u){u.g=new ir(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=bn(u.qa);we(d,"RID","rpc"),we(d,"SID",u.K),we(d,"AID",u.T),we(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&we(d,"TO",u.ja),we(d,"TYPE","xmlhttp"),xo(u,d),u.m&&u.o&&Oh(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Cl(bn(d)),m.m=null,m.P=!0,Ug(m,u)}t.Za=function(){this.C!=null&&(this.C=null,Nl(this),Lh(this),_t(19))};function bl(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function p_(u,d){var m=null;if(u.g==d){bl(u),jh(u),u.g=null;var y=2}else if(Dh(u.h,d))m=d.D,Gg(u.h,d),y=1;else return;if(u.G!=0){if(d.o)if(y==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var V=u.B;y=El(),gt(y,new Mg(y,m)),kl(u)}else d_(u);else if(V=d.s,V==3||V==0&&0<d.X||!(y==1&&jC(u,d)||y==2&&Lh(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),V){case 1:ei(u,5);break;case 4:ei(u,10);break;case 3:ei(u,6);break;default:ei(u,2)}}}function m_(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function ei(u,d){if(u.j.info("Error code "+d),d==2){var m=g(u.fb,u),y=u.Xa;const V=!y;y=new Zr(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Sl(y,"https"),Cl(y),V?kC(y.toString(),m):bC(y.toString(),m)}else _t(2);u.G=0,u.l&&u.l.sa(d),g_(u),u_(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function g_(u){if(u.G=0,u.ka=[],u.l){const d=Wg(u.h);(d.length!=0||u.i.length!=0)&&(b(u.ka,d),b(u.ka,u.i),u.h.i.length=0,N(u.i),u.i.length=0),u.l.ra()}}function __(u,d,m){var y=m instanceof Zr?bn(m):new Zr(m);if(y.g!="")d&&(y.g=d+"."+y.g),Al(y,y.s);else{var V=a.location;y=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var M=new Zr(null);y&&Sl(M,y),d&&(M.g=d),V&&Al(M,V),m&&(M.l=m),y=M}return m=u.D,d=u.ya,m&&d&&we(y,m,d),we(y,"VER",u.la),xo(u,y),y}function y_(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Oe(new xl({eb:m})):new Oe(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function v_(){}t=v_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Dl(){}Dl.prototype.g=function(u,d){return new jt(u,d)};function jt(u,d){at.call(this),this.g=new l_(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!E(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Qi(this)}S(jt,at),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Mh(this.g)},jt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Sh(u),u=m);d.i.push(new wC(d.Ya++,u)),d.G==3&&kl(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,Mh(this.g),delete this.g,jt.aa.N.call(this)};function E_(u){Ch.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}S(E_,Ch);function w_(){xh.call(this),this.status=1}S(w_,xh);function Qi(u){this.g=u}S(Qi,v_),Qi.prototype.ua=function(){gt(this.g,"a")},Qi.prototype.ta=function(u){gt(this.g,new E_(u))},Qi.prototype.sa=function(u){gt(this.g,new w_)},Qi.prototype.ra=function(){gt(this.g,"b")},Dl.prototype.createWebChannel=Dl.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,S0=function(){return new Dl},T0=function(){return El()},I0=Yr,Ff={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wl.NO_ERROR=0,wl.TIMEOUT=8,wl.HTTP_ERROR=6,Au=wl,Lg.COMPLETE="complete",w0=Lg,bg.EventType=go,go.OPEN="a",go.CLOSE="b",go.ERROR="c",go.MESSAGE="d",at.prototype.listen=at.prototype.K,Qo=bg,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,E0=Oe}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});const gv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new hm("@firebase/firestore");function ns(){return Ri.logLevel}function U(t,...e){if(Ri.logLevel<=ae.DEBUG){const n=e.map(Tm);Ri.debug(`Firestore (${io}): ${t}`,...n)}}function Et(t,...e){if(Ri.logLevel<=ae.ERROR){const n=e.map(Tm);Ri.error(`Firestore (${io}): ${t}`,...n)}}function La(t,...e){if(Ri.logLevel<=ae.WARN){const n=e.map(Tm);Ri.warn(`Firestore (${io}): ${t}`,...n)}}function Tm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+t;throw Et(e),new Error(e)}function J(t,e){t||Q()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class pD{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){J(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new dD(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new vt(e)}}class mD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){J(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.R=n.token,new _D(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=vD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function C0(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new De(0,0))}static max(){return new X(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ja.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ja?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends ja{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const ED=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends ja{construct(e,n,r){return new Ne(e,n,r)}static isValidIdentifier(e){return ED.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(n)}static emptyPath(){return new Ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(fe.fromString(e))}static fromName(e){return new G(fe.fromString(e).popFirst(5))}static empty(){return new G(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Uf(t){return t.fields.find(e=>e.kind===2)}function si(t){return t.fields.filter(e=>e.kind!==2)}fc.UNKNOWN_ID=-1;class Cu{constructor(e,n){this.fieldPath=e,this.kind=n}}class Fa{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Fa(0,Kt.min())}}function wD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Kt(i,G.empty(),e)}function x0(t){return new Kt(t.readTime,t.key,-1)}class Kt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Kt(X.min(),G.empty(),-1)}static max(){return new Kt(X.max(),G.empty(),-1)}}function Sm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class R0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==P0)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Gn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ca(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Am(r.target.error);this.V.reject(new ca(e,i))}}static open(e,n,r,i){try{return new eh(n,e.transaction(i,r))}catch(s){throw new ca(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new TD(n)}}class Vr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Vr.S(He())===12.2&&Et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),oi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!cm())return!1;if(Vr.v())return!0;const e=He(),n=Vr.S(e),r=0<n&&n<10,i=N0(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ca(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new K(F.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new K(F.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ca(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=eh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function N0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class ID{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return oi(this.B.delete())}}class ca extends K{constructor(e,n){super(F.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Gr(t){return t.name==="IndexedDbTransactionError"}class TD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),oi(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),oi(this.store.add(e))}get(e){return oi(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),oi(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),oi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=Am(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new ID(a),c=n(a.primaryKey,a.value,l);if(c instanceof O){const h=c.catch(p=>(l.done(),O.reject(p)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function oi(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Am(r.target.error);n(i)}})}let _v=!1;function Am(t){const e=Vr.S(He());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new K("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return _v||(_v=!0,setTimeout(()=>{throw r},0)),r}}return t}class SD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Gr(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await qi(n)}await this.X(6e4)})}}class AD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=x0(s);Sm(o,r)>0&&(r=o)}),new Kt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yt.oe=-1;function th(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function CD(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=yv(e)),e=xD(t.get(n),e);return yv(e)}function xD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function yv(t){return t+""}function An(t){const e=t.length;if(J(e>=2),e===2)return J(t.charAt(0)===""&&t.charAt(1)===""),fe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&Q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:Q()}s=o+2}return new fe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e){return[t,It(e)]}function k0(t,e,n){return[t,It(e),n]}const PD={},RD=["prefixPath","collectionGroup","readTime","documentId"],ND=["prefixPath","collectionGroup","documentId"],kD=["collectionGroup","readTime","prefixPath","documentId"],bD=["canonicalId","targetId"],DD=["targetId","path"],VD=["path","targetId"],OD=["collectionId","parent"],MD=["indexId","uid"],LD=["uid","sequenceNumber"],jD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],FD=["indexId","uid","orderedDocumentKey"],UD=["userId","collectionPath","documentId"],BD=["userId","collectionPath","largestBatchId"],$D=["userId","collectionGroup","largestBatchId"],b0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zD=[...b0,"documentOverlays"],D0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],V0=D0,Cm=[...V0,"indexConfiguration","indexState","indexEntries"],qD=Cm,KD=[...Cm,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf extends R0{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Qe(t,e){const n=te(t);return Vr.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function so(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function O0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new it(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wv(this.data.getIterator())}getIteratorFrom(e){return new wv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ge(this.comparator);return n.data=e,n}}class wv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xi(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new ge(Ne.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new M0("Invalid base64 string: "+s):s}}(e);return new ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const GD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(J(!!t),typeof t=="string"){let e=0;const n=GD.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pm(t){const e=t.mapValue.fields.__previous_value__;return xm(e)?Pm(e):e}function Ba(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Pu={nullValue:"NULL_VALUE"};function ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xm(t)?4:L0(t)?9007199254740991:nh(t)?10:11:Q()}function kn(t,e){if(t===e)return!0;const n=ki(t);if(n!==ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ba(t).isEqual(Ba(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Zn(i.timestampValue),a=Zn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return jr(i.bytesValue).isEqual(jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),a=Ae(s.doubleValue);return o===a?Ua(o)===Ua(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ev(o)!==Ev(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!kn(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function $a(t,e){return(t.values||[]).find(n=>kn(n,e))!==void 0}function Fr(t,e){if(t===e)return 0;const n=ki(t),r=ki(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ae(s.integerValue||s.doubleValue),l=Ae(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Iv(t.timestampValue,e.timestampValue);case 4:return Iv(Ba(t),Ba(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,o){const a=jr(s),l=jr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=re(a[c],l[c]);if(h!==0)return h}return re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=re(Ae(s.latitude),Ae(o.latitude));return a!==0?a:re(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Tv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const p=s.fields||{},g=o.fields||{},I=(a=p.value)===null||a===void 0?void 0:a.arrayValue,S=(l=g.value)===null||l===void 0?void 0:l.arrayValue,N=re(((c=I==null?void 0:I.values)===null||c===void 0?void 0:c.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:Tv(I,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Tr.mapValue&&o===Tr.mapValue)return 0;if(s===Tr.mapValue)return 1;if(o===Tr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=re(l[p],h[p]);if(g!==0)return g;const I=Fr(a[l[p]],c[h[p]]);if(I!==0)return I}return re(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Iv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=Zn(t),r=Zn(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Tv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Fr(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function Bs(t){return $f(t)}function $f(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$f(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$f(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function za(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zf(t){return!!t&&"integerValue"in t}function qa(t){return!!t&&"arrayValue"in t}function Sv(t){return!!t&&"nullValue"in t}function Av(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ru(t){return!!t&&"mapValue"in t}function nh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ha(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return so(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ha(t.arrayValue.values[n]);return e}return Object.assign({},t)}function L0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const j0={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function HD(t){return"nullValue"in t?Pu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?za(Ni.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?nh(t)?j0:{mapValue:{}}:Q()}function QD(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?za(Ni.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?j0:"mapValue"in t?nh(t)?{mapValue:{}}:Tr:Q()}function Cv(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function xv(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ru(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ha(n)}setAll(e){let n=Ne.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ha(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ru(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ru(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){so(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(ha(this.value))}}function F0(t){const e=[];return so(t.fields,(n,r)=>{const i=new Ne([n]);if(Ru(r)){const s=F0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Le(e,0,X.min(),X.min(),X.min(),bt.empty(),0)}static newFoundDocument(e,n,r,i){return new Le(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new Le(e,2,n,X.min(),X.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new Le(e,3,n,X.min(),X.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.position=e,this.inclusive=n}}function Pv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Fr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n="asc"){this.field=e,this.dir=n}}function JD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{}class le extends U0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new YD(e,n,r):n==="array-contains"?new eV(e,r):n==="in"?new G0(e,r):n==="not-in"?new tV(e,r):n==="array-contains-any"?new nV(e,r):new le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XD(e,r):new ZD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fr(n,this.value)):n!==null&&ki(this.value)===ki(n)&&this.matchesComparison(Fr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pe extends U0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pe(e,n)}matches(e){return zs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zs(t){return t.op==="and"}function qf(t){return t.op==="or"}function Rm(t){return B0(t)&&zs(t)}function B0(t){for(const e of t.filters)if(e instanceof pe)return!1;return!0}function Kf(t){if(t instanceof le)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(Rm(t))return t.filters.map(e=>Kf(e)).join(",");{const e=t.filters.map(n=>Kf(n)).join(",");return`${t.op}(${e})`}}function $0(t,e){return t instanceof le?function(r,i){return i instanceof le&&r.op===i.op&&r.field.isEqual(i.field)&&kn(r.value,i.value)}(t,e):t instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&$0(o,i.filters[a]),!0):!1}(t,e):void Q()}function z0(t,e){const n=t.filters.concat(e);return pe.create(n,t.op)}function q0(t){return t instanceof le?function(n){return`${n.field.canonicalString()} ${n.op} ${Bs(n.value)}`}(t):t instanceof pe?function(n){return n.op.toString()+" {"+n.getFilters().map(q0).join(" ,")+"}"}(t):"Filter"}class YD extends le{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class XD extends le{constructor(e,n){super(e,"in",n),this.keys=K0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZD extends le{constructor(e,n){super(e,"not-in",n),this.keys=K0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function K0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class eV extends le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qa(n)&&$a(n.arrayValue,this.value)}}class G0 extends le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$a(this.value.arrayValue,n)}}class tV extends le{constructor(e,n){super(e,"not-in",n)}matches(e){if($a(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$a(this.value.arrayValue,n)}}class nV extends le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$a(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Gf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rV(t,e,n,r,i,s,o)}function bi(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),th(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bs(r)).join(",")),e.ue=n}return e.ue}function al(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rv(t.startAt,e.startAt)&&Rv(t.endAt,e.endAt)}function pc(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function mc(t,e){return t.filters.filter(n=>n instanceof le&&n.field.isEqual(e))}function Nv(t,e,n){let r=Pu,i=!0;for(const s of mc(t,e)){let o=Pu,a=!0;switch(s.op){case"<":case"<=":o=HD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Pu}Cv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Cv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function kv(t,e,n){let r=Tr,i=!0;for(const s of mc(t,e)){let o=Tr,a=!0;switch(s.op){case">=":case">":o=QD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Tr}xv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];xv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function iV(t,e,n,r,i,s,o,a){return new oo(t,e,n,r,i,s,o,a)}function ll(t){return new oo(t)}function bv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function W0(t){return t.collectionGroup!==null}function da(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ge(Ne.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ka(s,r))}),n.has(Ne.keyField().canonicalString())||e.ce.push(new Ka(Ne.keyField(),r))}return e.ce}function en(t){const e=te(t);return e.le||(e.le=sV(e,da(t))),e.le}function sV(t,e){if(t.limitType==="F")return Gf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ka(i.field,s)});const n=t.endAt?new $s(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $s(t.startAt.position,t.startAt.inclusive):null;return Gf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wf(t,e){const n=t.filters.concat([e]);return new oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gc(t,e,n){return new oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rh(t,e){return al(en(t),en(e))&&t.limitType===e.limitType}function H0(t){return`${bi(en(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>q0(i)).join(", ")}]`),th(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bs(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function ul(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of da(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Pv(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,da(r),i)||r.endAt&&!function(o,a,l){const c=Pv(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,da(r),i))}(t,e)}function oV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Q0(t){return(e,n)=>{let r=!1;for(const i of da(t)){const s=aV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function aV(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Fr(l,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){so(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return O0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=new Pe(G.comparator);function Bt(){return lV}const J0=new Pe(G.comparator);function Jo(...t){let e=J0;for(const n of t)e=e.insert(n.key,n);return e}function Y0(t){let e=J0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cn(){return fa()}function X0(){return fa()}function fa(){return new Wr(t=>t.toString(),(t,e)=>t.isEqual(e))}const uV=new Pe(G.comparator),cV=new ge(G.comparator);function ie(...t){let e=cV;for(const n of t)e=e.add(n);return e}const hV=new ge(re);function dV(){return hV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function Z0(t){return{integerValue:""+t}}function fV(t,e){return CD(e)?Z0(e):Nm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this._=void 0}}function pV(t,e,n){return t instanceof qs?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&xm(s)&&(s=Pm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ks?tS(t,e):t instanceof Gs?nS(t,e):function(i,s){const o=eS(i,s),a=Dv(o)+Dv(i.Pe);return zf(o)&&zf(i.Pe)?Z0(a):Nm(i.serializer,a)}(t,e)}function mV(t,e,n){return t instanceof Ks?tS(t,e):t instanceof Gs?nS(t,e):n}function eS(t,e){return t instanceof Ga?function(r){return zf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class qs extends ih{}class Ks extends ih{constructor(e){super(),this.elements=e}}function tS(t,e){const n=rS(e);for(const r of t.elements)n.some(i=>kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends ih{constructor(e){super(),this.elements=e}}function nS(t,e){let n=rS(e);for(const r of t.elements)n=n.filter(i=>!kn(i,r));return{arrayValue:{values:n}}}class Ga extends ih{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Dv(t){return Ae(t.integerValue||t.doubleValue)}function rS(t){return qa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n){this.field=e,this.transform=n}}function gV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ks&&i instanceof Ks||r instanceof Gs&&i instanceof Gs?Us(r.elements,i.elements,kn):r instanceof Ga&&i instanceof Ga?kn(r.Pe,i.Pe):r instanceof qs&&i instanceof qs}(t.transform,e.transform)}class _V{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sh{}function sS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new km(t.key,$t.none()):new ao(t.key,t.data,$t.none());{const n=t.data,r=bt.empty();let i=new ge(Ne.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Hr(t.key,r,new Xt(i.toArray()),$t.none())}}function yV(t,e,n){t instanceof ao?function(i,s,o){const a=i.value.clone(),l=Ov(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Hr?function(i,s,o){if(!Nu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ov(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(oS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pa(t,e,n,r){return t instanceof ao?function(s,o,a,l){if(!Nu(s.precondition,o))return a;const c=s.value.clone(),h=Mv(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Hr?function(s,o,a,l){if(!Nu(s.precondition,o))return a;const c=Mv(s.fieldTransforms,l,o),h=o.data;return h.setAll(oS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return Nu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function vV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=eS(r.transform,i||null);s!=null&&(n===null&&(n=bt.empty()),n.set(r.field,s))}return n||null}function Vv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Us(r,i,(s,o)=>gV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ao extends sh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Hr extends sh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function oS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ov(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,mV(o,a,n[i]))}return r}function Mv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,pV(s,o,e))}return r}class km extends sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aS extends sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=X0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=sS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,(n,r)=>Vv(n,r))&&Us(this.baseMutations,e.baseMutations,(n,r)=>Vv(n,r))}}class Dm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=function(){return uV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Dm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ue;function wV(t){switch(t){default:return Q();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function lS(t){if(t===void 0)return Et("GRPC error has no .code"),F.UNKNOWN;switch(t){case Be.OK:return F.OK;case Be.CANCELLED:return F.CANCELLED;case Be.UNKNOWN:return F.UNKNOWN;case Be.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Be.INTERNAL:return F.INTERNAL;case Be.UNAVAILABLE:return F.UNAVAILABLE;case Be.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Be.NOT_FOUND:return F.NOT_FOUND;case Be.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Be.ABORTED:return F.ABORTED;case Be.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Be.DATA_LOSS:return F.DATA_LOSS;default:return Q()}}(ue=Be||(Be={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV=new _i([4294967295,4294967295],0);function Lv(t){const e=IV().encode(t),n=new v0;return n.update(e),new Uint8Array(n.digest())}function jv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _i([n,r],0),new _i([i,s],0)]}class Om{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yo(`Invalid padding: ${n}`);if(r<0)throw new Yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=_i.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(_i.fromNumber(r)));return i.compare(TV)===1&&(i=new _i([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Lv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Om(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Lv(e),[r,i]=jv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new oh(X.min(),i,new Pe(re),Bt(),ie())}}class cl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new cl(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class uS{constructor(e,n){this.targetId=e,this.me=n}}class cS{constructor(e,n,r=ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Fv{constructor(){this.fe=0,this.ge=Bv(),this.pe=ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new cl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Bv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class SV{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bt(),this.qe=Uv(),this.Qe=new Pe(re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(pc(s))if(r===0){const o=new G(s.path);this.Ue(n,o,Le.newNoDocument(o,X.min()))}else J(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=jr(r).toUint8Array()}catch(l){if(l instanceof M0)return La("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Om(o,i,s)}catch(l){return La(l instanceof Yo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&pc(a.target)){const l=new G(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Le.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new oh(e,n,this.Qe,this.ke,r);return this.ke=Bt(),this.qe=Uv(),this.Qe=new Pe(re),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Fv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ge(re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Fv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Uv(){return new Pe(G.comparator)}function Bv(){return new Pe(G.comparator)}const AV={asc:"ASCENDING",desc:"DESCENDING"},CV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xV={and:"AND",or:"OR"};class PV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hf(t,e){return t.useProto3Json||th(e)?e:{value:e}}function Ws(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function RV(t,e){return Ws(t,e.toTimestamp())}function Tt(t){return J(!!t),X.fromTimestamp(function(n){const r=Zn(n);return new De(r.seconds,r.nanos)}(t))}function Mm(t,e){return Qf(t,e).canonicalString()}function Qf(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dS(t){const e=fe.fromString(t);return J(wS(e)),e}function _c(t,e){return Mm(t.databaseId,e.path)}function yi(t,e){const n=dS(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(mS(n))}function fS(t,e){return Mm(t.databaseId,e)}function pS(t){const e=dS(t);return e.length===4?fe.emptyPath():mS(e)}function Jf(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mS(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $v(t,e,n){return{name:_c(t,e),fields:n.value.mapValue.fields}}function NV(t,e,n){const r=yi(t,e.name),i=Tt(e.updateTime),s=e.createTime?Tt(e.createTime):X.min(),o=new bt({mapValue:{fields:e.fields}}),a=Le.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function kV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(J(h===void 0||typeof h=="string"),ze.fromBase64String(h||"")):(J(h===void 0||h instanceof Buffer||h instanceof Uint8Array),ze.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?F.UNKNOWN:lS(c.code);return new K(h,c.message||"")}(o);n=new cS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yi(t,r.document.name),s=Tt(r.document.updateTime),o=r.document.createTime?Tt(r.document.createTime):X.min(),a=new bt({mapValue:{fields:r.document.fields}}),l=Le.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new ku(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yi(t,r.document),s=r.readTime?Tt(r.readTime):X.min(),o=Le.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ku([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yi(t,r.document),s=r.removedTargetIds||[];n=new ku([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new EV(i,s),a=r.targetId;n=new uS(a,o)}}return n}function yc(t,e){let n;if(e instanceof ao)n={update:$v(t,e.key,e.value)};else if(e instanceof km)n={delete:_c(t,e.key)};else if(e instanceof Hr)n={update:$v(t,e.key,e.data),updateMask:LV(e.fieldMask)};else{if(!(e instanceof aS))return Q();n={verify:_c(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof qs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ga)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:RV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function Yf(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?$t.updateTime(Tt(s.updateTime)):s.exists!==void 0?$t.exists(s.exists):$t.none()}(e.currentDocument):$t.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)J(a.setToServerValue==="REQUEST_TIME"),l=new qs;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new Ks(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new Gs(h)}else"increment"in a?l=new Ga(o,a.increment):Q();const c=Ne.fromServerFormat(a.fieldPath);return new iS(c,l)}(t,i)):[];if(e.update){e.update.name;const i=yi(t,e.update.name),s=new bt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Xt(c.map(h=>Ne.fromServerFormat(h)))}(e.updateMask);return new Hr(i,s,o,n,r)}return new ao(i,s,n,r)}if(e.delete){const i=yi(t,e.delete);return new km(i,n)}if(e.verify){const i=yi(t,e.verify);return new aS(i,n)}return Q()}function bV(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Tt(i.updateTime):Tt(s);return o.isEqual(X.min())&&(o=Tt(s)),new _V(o,i.transformResults||[])}(n,e))):[]}function gS(t,e){return{documents:[fS(t,e.path)]}}function _S(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fS(t,i);const s=function(c){if(c.length!==0)return ES(pe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:is(g.field),direction:VV(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Hf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function yS(t){let e=pS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const g=vS(p);return g instanceof pe&&Rm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new Ka(ss(S.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,th(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,I=p.values||[];return new $s(I,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,I=p.values||[];return new $s(I,g)}(n.endAt)),iV(e,i,o,s,a,"F",l,c)}function DV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ss(n.unaryFilter.field);return le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ss(n.unaryFilter.field);return le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return le.create(ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pe.create(n.compositeFilter.filters.map(r=>vS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function VV(t){return AV[t]}function OV(t){return CV[t]}function MV(t){return xV[t]}function is(t){return{fieldPath:t.canonicalString()}}function ss(t){return Ne.fromServerFormat(t.fieldPath)}function ES(t){return t instanceof le?function(n){if(n.op==="=="){if(Av(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NAN"}};if(Sv(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Av(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NAN"}};if(Sv(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(n.field),op:OV(n.op),value:n.value}}}(t):t instanceof pe?function(n){const r=n.getFilters().map(i=>ES(i));return r.length===1?r[0]:{compositeFilter:{op:MV(n.op),filters:r}}}(t):Q()}function LV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r,i,s=X.min(),o=X.min(),a=ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.ct=e}}function jV(t,e){let n;if(e.document)n=NV(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),i=Vi(e.noDocument.readTime);n=Le.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Q();{const r=G.fromSegments(e.unknownDocument.path),i=Vi(e.unknownDocument.version);n=Le.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new De(i[0],i[1]);return X.fromTimestamp(s)}(e.readTime)),n}function zv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:vc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:_c(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ws(s,o.version.toTimestamp()),createTime:Ws(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Di(e.version)};else{if(!e.isUnknownDocument())return Q();r.unknownDocument={path:n.path.toArray(),version:Di(e.version)}}return r}function vc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Di(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Vi(t){const e=new De(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function ai(t,e){const n=(e.baseMutations||[]).map(s=>Yf(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Yf(t.ct,s)),i=De.fromMillis(e.localWriteTimeMs);return new bm(e.batchId,i,n,r)}function Xo(t){const e=Vi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Vi(t.lastLimboFreeSnapshotVersion):X.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return J(s.documents.length===1),en(ll(pS(s.documents[0])))}(t.query):function(s){return en(yS(s))}(t.query),new $n(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ze.fromBase64String(t.resumeToken))}function TS(t,e){const n=Di(e.snapshotVersion),r=Di(e.lastLimboFreeSnapshotVersion);let i;i=pc(e.target)?gS(t.ct,e.target):_S(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:bi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function SS(t){const e=yS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gc(e,e.limit,"L"):e}function wd(t,e){return new Vm(e.largestBatchId,Yf(t.ct,e.overlayMutation))}function qv(t,e){const n=e.path.lastSegment();return[t,It(e.path.popLast()),n]}function Kv(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Di(r.readTime),documentKey:It(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{getBundleMetadata(e,n){return Gv(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Vi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Gv(e).put(function(i){return{bundleId:i.id,createTime:Di(Tt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Wv(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:SS(s.bundledQuery),readTime:Vi(s.readTime)}}(r)})}saveNamedQuery(e,n){return Wv(e).put(function(i){return{name:i.name,readTime:Di(Tt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Gv(t){return Qe(t,"bundles")}function Wv(t){return Qe(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new ah(e,r)}getOverlay(e,n){return Mo(e).get(qv(this.userId,n)).next(r=>r?wd(this.serializer,r):null)}getOverlays(e,n){const r=Cn();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Vm(n,o);i.push(this.ht(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(It(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Mo(e).j("collectionPathOverlayIndex",a))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Cn(),s=It(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Mo(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=wd(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Cn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Mo(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const p=wd(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return Mo(e).put(function(i,s,o){const[a,l,c]=qv(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:yc(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Mo(t){return Qe(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{Pt(e){return Qe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?ze.fromUint8Array(r):ze.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Ae(e.integerValue));else if("doubleValue"in e){const r=Ae(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),Ua(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Zn(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(jr(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?L0(e)?this.dt(n,Number.MAX_SAFE_INTEGER):nh(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):Q()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Ae(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),G.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}li.vt=new li;function BV(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Hv(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=BV(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class $V{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=Hv(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=Hv(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class zV{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class qV{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Lo{constructor(){this.jt=new $V,this.Ht=new zV(this.jt),this.Jt=new qV(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ui(this.indexId,this.documentKey,this.arrayValue,r)}}function ur(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Qv(t.arrayValue,e.arrayValue),n!==0?n:(n=Qv(t.directionalValue,e.directionalValue),n!==0?n:G.comparator(t.documentKey,e.documentKey)))}function Qv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.Xt=new ge((n,r)=>Ne.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(J(e.collectionGroup===this.collectionId),this.nn)return!1;const n=Uf(e);if(n!==void 0&&!this.sn(n))return!1;const r=si(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new ge(Ne.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Cu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Cu(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Cu(r.field,r.dir==="asc"?0:1)));return new fc(fc.UNKNOWN_ID,this.collectionId,n,Fa.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){var e,n;if(J(t instanceof le||t instanceof pe),t instanceof le){if(t instanceof G0){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>le.create(t.field,"==",s)))||[];return pe.create(i,"or")}return t}const r=t.filters.map(i=>AS(i));return pe.create(r,t.op)}function KV(t){if(t.getFilters().length===0)return[];const e=ep(AS(t));return J(CS(e)),Xf(e)||Zf(e)?[e]:e.getFilters()}function Xf(t){return t instanceof le}function Zf(t){return t instanceof pe&&Rm(t)}function CS(t){return Xf(t)||Zf(t)||function(n){if(n instanceof pe&&qf(n)){for(const r of n.getFilters())if(!Xf(r)&&!Zf(r))return!1;return!0}return!1}(t)}function ep(t){if(J(t instanceof le||t instanceof pe),t instanceof le)return t;if(t.filters.length===1)return ep(t.filters[0]);const e=t.filters.map(r=>ep(r));let n=pe.create(e,t.op);return n=Ec(n),CS(n)?n:(J(n instanceof pe),J(zs(n)),J(n.filters.length>1),n.filters.reduce((r,i)=>Lm(r,i)))}function Lm(t,e){let n;return J(t instanceof le||t instanceof pe),J(e instanceof le||e instanceof pe),n=t instanceof le?e instanceof le?function(i,s){return pe.create([i,s],"and")}(t,e):Yv(t,e):e instanceof le?Yv(e,t):function(i,s){if(J(i.filters.length>0&&s.filters.length>0),zs(i)&&zs(s))return z0(i,s.getFilters());const o=qf(i)?i:s,a=qf(i)?s:i,l=o.filters.map(c=>Lm(c,a));return pe.create(l,"or")}(t,e),Ec(n)}function Yv(t,e){if(zs(e))return z0(e,t.getFilters());{const n=e.filters.map(r=>Lm(t,r));return pe.create(n,"or")}}function Ec(t){if(J(t instanceof le||t instanceof pe),t instanceof le)return t;const e=t.getFilters();if(e.length===1)return Ec(e[0]);if(B0(t))return t;const n=e.map(i=>Ec(i)),r=[];return n.forEach(i=>{i instanceof le?r.push(i):i instanceof pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:pe.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this.un=new jm}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Kt.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class jm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ge(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new Uint8Array(0);class WV{constructor(e,n){this.databaseId=n,this.cn=new jm,this.ln=new Wr(r=>bi(r),(r,i)=>al(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:It(i)};return Xv(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[C0(n),""],!1,!0);return Xv(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(An(o.parent))}return r})}addFieldIndex(e,n){const r=jo(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=es(e);return s.next(a=>{o.put(Kv(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=jo(e),i=es(e),s=Zi(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=jo(e),r=Zi(e),i=es(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return O.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Jv(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Zi(e);let i=!0;const s=new Map;return O.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ie();const a=[];return O.forEach(s,(l,c)=>{U("IndexedDbIndexManager",`Using index ${function(w){return`id=${w.indexId}|cg=${w.collectionGroup}|f=${w.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`}(l)} to execute ${bi(n)}`);const h=function(w,D){const L=Uf(D);if(L===void 0)return null;for(const j of mc(w,L.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(c,l),p=function(w,D){const L=new Map;for(const j of si(D))for(const v of mc(w,j.fieldPath))switch(v.op){case"==":case"in":L.set(j.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return L.set(j.fieldPath.canonicalString(),v.value),Array.from(L.values())}return null}(c,l),g=function(w,D){const L=[];let j=!0;for(const v of si(D)){const _=v.kind===0?Nv(w,v.fieldPath,w.startAt):kv(w,v.fieldPath,w.startAt);L.push(_.value),j&&(j=_.inclusive)}return new $s(L,j)}(c,l),I=function(w,D){const L=[];let j=!0;for(const v of si(D)){const _=v.kind===0?kv(w,v.fieldPath,w.endAt):Nv(w,v.fieldPath,w.endAt);L.push(_.value),j&&(j=_.inclusive)}return new $s(L,j)}(c,l),S=this.In(l,c,g),N=this.In(l,c,I),b=this.Tn(l,c,p),T=this.En(l.indexId,h,S,g.inclusive,N,I.inclusive,b);return O.forEach(T,E=>r.G(E,n.limit).next(w=>{w.forEach(D=>{const L=G.fromSegments(D.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return O.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=KV(pe.create(e.filters,"and")).map(r=>Gf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let p=0;p<l;++p){const g=n?this.dn(n[p/c]):tu,I=this.An(e,g,r[p%c],i),S=this.Rn(e,g,s[p%c],o),N=a.map(b=>this.An(e,g,b,!0));h.push(...this.createRange(I,S,N))}return h}An(e,n,r,i){const s=new ui(e,G.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new ui(e,G.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new Jv(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return O.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new ge(Ne.comparator),h=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:c=c.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new Lo;for(const i of si(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);li.vt.It(s,o)}return r.zt()}dn(e){const n=new Lo;return li.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new Lo;return li.vt.It(za(this.databaseId,n),r.Yt(function(s){const o=si(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new Lo);let s=0;for(const o of si(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&qa(a))i=this.gn(i,o,a);else{const c=l.Yt(o.kind);li.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Lo;l.seed(a.zt()),li.vt.It(o,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof le&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=jo(e),i=es(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,p){const g=p?new Fa(p.sequenceNumber,new Kt(Vi(p.readTime),new G(An(p.documentKey)),p.largestBatchId)):Fa.empty(),I=h.fields.map(([S,N])=>new Cu(Ne.fromServerFormat(S),N));return new fc(h.indexId,h.collectionGroup,I,g)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:re(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=jo(e),s=es(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>O.forEach(a,l=>s.put(Kv(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,l=>this.wn(e,i,l).next(c=>{const h=this.Sn(s,l);return c.isEqual(h)?O.resolve():this.bn(e,s,l,c,h)}))))})}Dn(e,n,r,i){return Zi(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Zi(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Zi(e);let s=new ge(ur);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new ui(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new ge(ur);const i=this.Vn(n,e);if(i==null)return r;const s=Uf(n);if(s!=null){const o=e.data.field(s.fieldPath);if(qa(o))for(const a of o.arrayValue.values||[])r=r.add(new ui(n.indexId,e.key,this.dn(a),i))}else r=r.add(new ui(n.indexId,e.key,tu,i));return r}bn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,p,g){const I=l.getIterator(),S=c.getIterator();let N=Xi(I),b=Xi(S);for(;N||b;){let T=!1,E=!1;if(N&&b){const w=h(N,b);w<0?E=!0:w>0&&(T=!0)}else N!=null?E=!0:T=!0;T?(p(b),b=Xi(S)):E?(g(N),N=Xi(I)):(N=Xi(I),b=Xi(S))}}(i,s,ur,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),O.waitFor(o)}yn(e){let n=1;return es(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ur(o,a)).filter((o,a,l)=>!a||ur(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ur(o,e),l=ur(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,tu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,tu,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return ur(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Zv)}getMinOffset(e,n){return O.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||Q())).next(Zv)}}function Xv(t){return Qe(t,"collectionParents")}function Zi(t){return Qe(t,"indexEntries")}function jo(t){return Qe(t,"indexConfiguration")}function es(t){return Qe(t,"indexState")}function Zv(t){J(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Sm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Kt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Nt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,p,g)=>(a++,g.delete()));s.push(l.next(()=>{J(a===1)}));const c=[];for(const h of n.mutations){const p=k0(e,h.key.path,n.batchId);s.push(i.delete(p)),c.push(h.key)}return O.waitFor(s).next(()=>c)}function wc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Q();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(41943040,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);class lh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new lh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=os(e),o=cr(e);return o.add({}).next(a=>{J(typeof a=="number");const l=new bm(a,n,r,i),c=function(I,S,N){const b=N.baseMutations.map(E=>yc(I.ct,E)),T=N.mutations.map(E=>yc(I.ct,E));return{userId:S,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:b,mutations:T}}(this.serializer,this.userId,l),h=[];let p=new ge((g,I)=>re(g.canonicalString(),I.canonicalString()));for(const g of i){const I=k0(this.userId,g.key.path,a);p=p.add(g.key.path.popLast()),h.push(o.put(c)),h.push(s.put(I,PD))}return p.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),O.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return cr(e).get(n).next(r=>r?(J(r.userId===this.userId),ai(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?O.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return cr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(J(a.batchId>=r),s=ai(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return cr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).U("userMutationsIndex",n).next(r=>r.map(i=>ai(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=xu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return os(e).J({range:i},(o,a,l)=>{const[c,h,p]=o,g=An(h);if(c===this.userId&&n.path.isEqual(g))return cr(e).get(p).next(I=>{if(!I)throw Q();J(I.userId===this.userId),s.push(ai(this.serializer,I))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(re);const i=[];return n.forEach(s=>{const o=xu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=os(e).J({range:a},(c,h,p)=>{const[g,I,S]=c,N=An(I);g===this.userId&&s.path.isEqual(N)?r=r.add(S):p.done()});i.push(l)}),O.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=xu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ge(re);return os(e).J({range:o},(l,c,h)=>{const[p,g,I]=l,S=An(g);p===this.userId&&r.isPrefixOf(S)?S.length===i&&(a=a.add(I)):h.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(cr(e).get(s).next(o=>{if(o===null)throw Q();J(o.userId===this.userId),r.push(ai(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return xS(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return os(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=An(s[1]);i.push(l)}else a.done()}).next(()=>{J(i.length===0)})})}containsKey(e,n){return PS(e,this.userId,n)}Nn(e){return RS(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function PS(t,e,n){const r=xu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return os(t).J({range:s,H:!0},(a,l,c)=>{const[h,p,g]=a;h===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function cr(t){return Qe(t,"mutations")}function os(t){return Qe(t,"documentMutations")}function RS(t){return Qe(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oi(0)}static kn(){return new Oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Oi(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>X.fromTimestamp(new De(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ts(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ts(e).J((o,a)=>{const l=Xo(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ts(e).J((r,i)=>{const s=Xo(i);n(s)})}qn(e){return tE(e).get("targetGlobalKey").next(n=>(J(n!==null),n))}Qn(e,n){return tE(e).put("targetGlobalKey",n)}Kn(e,n){return ts(e).put(TS(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=bi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ts(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Xo(a);al(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=vr(e);return n.forEach(o=>{const a=It(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=vr(e);return O.forEach(n,s=>{const o=It(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=vr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=vr(e);let s=ie();return i.J({range:r,H:!0},(o,a,l)=>{const c=An(o[1]),h=new G(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=It(n.path),i=IDBKeyRange.bound([r],[C0(r)],!1,!0);let s=0;return vr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return ts(e).get(n).next(r=>r?Xo(r):null)}}function ts(t){return Qe(t,"targets")}function tE(t){return Qe(t,"targetGlobal")}function vr(t){return Qe(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class QV{constructor(e){this.Un=e,this.buffer=new ge(nE),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();nE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class JV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Gr(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await qi(n)}await this.Hn(3e5)})}}class YV{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Yt.oe);const r=new QV(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(eE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eE):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),ns()<=ae.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${p} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function XV(t,e){return new YV(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e,n){this.db=e,this.garbageCollector=XV(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return nu(e,r)}removeReference(e,n,r){return nu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return nu(e,n)}nr(e,n){return function(i,s){let o=!1;return RS(i).Y(a=>PS(i,a,s).next(l=>(l&&(o=!0),O.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const l=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),vr(e).delete(function(p){return[0,It(p.path)]}(o))))});i.push(l)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return nu(e,n)}tr(e,n){const r=vr(e);let i,s=Yt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Yt.oe&&n(new G(An(i)),s),s=c,i=l):s=Yt.oe}).next(()=>{s!==Yt.oe&&n(new G(An(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function nu(t,e){return vr(t).put(function(r,i){return{targetId:0,path:It(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.changes=new Wr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ti(e).put(r)}removeEntry(e,n,r){return ti(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],vc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Le.newInvalidDocument(n);return ti(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fo(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Le.newInvalidDocument(n)};return ti(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Fo(n))},(i,s)=>{r={document:this.ir(n,s),size:wc(s)}}).next(()=>r)}getEntries(e,n){let r=Bt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Bt(),i=new Pe(G.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,wc(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return O.resolve();let i=new ge(sE);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Fo(i.first()),Fo(i.last())),o=i.getIterator();let a=o.getNext();return ti(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const p=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&sE(a,p)<0;)r(a,null),a=o.getNext();a&&a.isEqual(p)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(Fo(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),vc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ti(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=Bt();for(const p of c){const g=this.ir(G.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(ul(n,g)||i.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=Bt();const o=iE(n,r),a=iE(n,Kt.max());return ti(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const p=this.ir(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new tO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return rE(e).get("remoteDocumentGlobalKey").next(n=>(J(!!n),n))}rr(e,n){return rE(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=jV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Le.newInvalidDocument(e)}}function kS(t){return new eO(t)}class tO extends NS{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Wr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ge((s,o)=>re(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=zv(this.cr.serializer,o);i=i.add(s.path.popLast());const c=wc(l);r+=c-a.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=zv(this.cr.serializer,o.convertToNoDocument(X.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function rE(t){return Qe(t,"remoteDocumentGlobal")}function ti(t){return Qe(t,"remoteDocumentsV14")}function Fo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function iE(t,e){const n=e.documentKey.path.toArray();return[t,vc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function sE(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=re(n[s],r[s]),i)return i;return i=re(n.length,r.length),i||(i=re(n[n.length-2],r[r.length-2]),i||re(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pa(r.mutation,i,Xt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Cn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Jo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bt();const o=fa(),a=function(){return fa()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Hr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),pa(h.mutation,c,h.mutation.getFieldMask(),De.now())):o.set(c.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new nO(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fa();let i=new Pe((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Xt.empty();h=a.applyToLocalView(c,h),r.set(l,h);const p=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,p=X0();h.forEach(g=>{if(!s.has(g)){const I=sS(n.get(g),r.get(g));I!==null&&p.set(g,I),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):W0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Cn());let a=-1,l=s;return o.next(c=>O.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?O.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ie())).next(h=>({batchId:a,changes:Y0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Jo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Jo();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const c=function(p,g){return new oo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Le.newInvalidDocument(h)))});let a=Jo();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&pa(h.mutation,c,Xt.empty(),De.now()),ul(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Tt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:SS(i.bundledQuery),readTime:Tt(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(){this.overlays=new Pe(G.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cn();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Cn(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Cn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Cn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vm(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(){this.sessionToken=ze.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.Tr=new ge(Ye.Er),this.dr=new ge(Ye.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ye(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new fe([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new fe([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||re(e.wr,n.wr)}static Ar(e,n){return re(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ge(Ye.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(re);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new G(s),0);let a=new ge(re);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),O.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ye(n,0),i=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.Mr=e,this.docs=function(){return new Pe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(n))}getEntries(e,n){let r=Bt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Le.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bt();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Sm(x0(h),r)<=0||(i.has(h.key)||ul(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lO(this)}getSize(e){return O.resolve(this.size)}}class lO extends NS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.persistence=e,this.Nr=new Wr(n=>bi(n),al),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Fm,this.targetCount=0,this.kr=Oi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Oi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Yt(0),this.Kr=!1,this.Kr=!0,this.$r=new sO,this.referenceDelegate=e(this),this.Ur=new uO(this),this.indexManager=new GV,this.remoteDocumentCache=function(i){return new aO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new IS(n),this.Gr=new rO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new oO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new cO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class cO extends R0{constructor(e){super(),this.currentSequenceNumber=e}}class uh{constructor(e){this.persistence=e,this.Jr=new Fm,this.Yr=null}static Zr(e){return new uh(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=G.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.serializer=e}O(e,n,r,i){const s=new eh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",vv,{unique:!0}),l.createObjectStore("documentMutations")}(e),oE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),oE(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",vv,{unique:!0});const p=c.store("mutations"),g=h.map(I=>p.put(I));return O.waitFor(g)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:UD});c.createIndex("collectionPathOverlayIndex",BD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",$D,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:RD});c.createIndex("documentKeyIndex",ND),c.createIndex("collectionGroupIndex",kD)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:MD}).createIndex("sequenceNumberIndex",LD,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:jD}).createIndex("documentKeyIndex",FD,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=wc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>O.forEach(a,l=>{J(l.userId===s.userId);const c=ai(this.serializer,l);return xS(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new fe(o),c=function(p){return[0,It(p)]}(l);s.push(n.get(c).next(h=>h?O.resolve():(p=>n.put({targetId:0,path:It(p),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>O.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:OD});const r=n.store("collectionParents"),i=new jm,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:It(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new fe(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=An(a);return s(h.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=Xo(i),o=TS(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(p){return p.document?new G(fe.fromString(p.document.name).popFirst(5)):p.noDocument?G.fromSegments(p.noDocument.path):p.unknownDocument?G.fromSegments(p.unknownDocument.path):Q()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>O.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=kS(this.serializer),s=new DS(uh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:ie();ai(this.serializer,l).keys().forEach(p=>h=h.add(p)),a.set(l.userId,h)}),O.forEach(a,(l,c)=>{const h=new vt(c),p=ah.lt(this.serializer,h),g=s.getIndexManager(h),I=lh.lt(h,this.serializer,g,s.referenceDelegate);return new bS(i,I,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Bf(n,Yt.oe),l).next()})})}}function oE(t){t.createObjectStore("targetDocuments",{keyPath:DD}).createIndex("documentTargetsIndex",VD,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",bD,{unique:!0}),t.createObjectStore("targetGlobal")}const Id="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Um{constructor(e,n,r,i,s,o,a,l,c,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!Um.D())throw new K(F.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ZV(this,i),this.Ai=n+"main",this.serializer=new IS(l),this.Ri=new Vr(this.Ai,this.hi,new hO(this.serializer)),this.$r=new UV,this.Ur=new HV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=kS(this.serializer),this.Gr=new FV,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&Et("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new K(F.FAILED_PRECONDITION,Id);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Yt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ru(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(Gr(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Uo(e).get("owner").next(n=>O.resolve(this.vi(n)))}Ci(e){return ru(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Qe(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?O.resolve(!0):Uo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new K(F.FAILED_PRECONDITION,Id);return!1}}return!(!this.networkEnabled||!this.inForeground)||ru(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Bf(e,Yt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>ru(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return lh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new WV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ah.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?KD:l===16?qD:l===15?Cm:l===14?V0:l===13?D0:l===12?zD:l===11?b0:void Q()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Bf(a,this.Qr?this.Qr.next():Yt.oe),n==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Et(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new K(F.FAILED_PRECONDITION,P0);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Uo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new K(F.FAILED_PRECONDITION,Id)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Uo(e).put("owner",n)}static D(){return Vr.D()}bi(e){const n=Uo(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):O.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Et(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;kT()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Et("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Et("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Uo(t){return Qe(t,"owner")}function ru(t){return Qe(t,"clientMetadata")}function dO(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return kT()?8:N0(He())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new fO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ns()<=ae.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(ns()<=ae.DEBUG&&U("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ns()<=ae.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):O.resolve())}Yi(e,n){if(bv(n))return O.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gc(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,gc(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return bv(n)||i.isEqual(X.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?O.resolve(null):(ns()<=ae.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rs(n)),this.rs(e,o,n,wD(i,-1)).next(a=>a))})}ts(e,n){let r=new ge(Q0(e));return n.forEach((i,s)=>{ul(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ns()<=ae.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",rs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Kt.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Pe(re),this._s=new Wr(s=>bi(s),al),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function OS(t,e,n,r){return new pO(t,e,n,r)}async function MS(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function mO(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const p=c.batch,g=p.keys();let I=O.resolve();return g.forEach(S=>{I=I.next(()=>h.getEntry(l,S)).next(N=>{const b=c.docVersions.get(S);J(b!==null),N.version.compareTo(b)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),h.addEntry(N)))})}),I.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function LS(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gO(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,p)=>{const g=i.get(p);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,p)));let I=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(ze.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(h.resumeToken,r)),i=i.insert(p,I),function(N,b,T){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,I,h)&&a.push(n.Ur.updateTargetData(s,I))});let l=Bt(),c=ie();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(_O(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(X.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function _O(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function yO(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vO(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function tp(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function aE(t,e,n){const r=te(t);let i=X.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const p=te(l),g=p._s.get(h);return g!==void 0?O.resolve(p.os.get(g)):p.Ur.getTargetData(c,h)}(r,o,en(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ie())).next(a=>(EO(r,oV(e),a),{documents:a,Ts:s})))}function EO(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class lE{constructor(){this.activeTargetIds=dV()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jS{constructor(){this.so=new lE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new lE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu=null;function Td(){return iu===null?iu=function(){return 268435456+Math.round(2147483648*Math.random())}():iu++,"0x"+iu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class SO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Td(),l=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(U("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw La("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=IO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Td();return new Promise((o,a)=>{const l=new E0;l.setWithCredentials(!0),l.listenOnce(w0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Au.NO_ERROR:const h=l.getResponseJson();U(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Au.TIMEOUT:U(dt,`RPC '${e}' ${s} timed out`),a(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case Au.HTTP_ERROR:const p=l.getStatus();if(U(dt,`RPC '${e}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const S=function(b){const T=b.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(T)>=0?T:F.UNKNOWN}(I.status);a(new K(S,I.message))}else a(new K(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new K(F.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{U(dt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(dt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Td(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=S0(),a=T0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");U(dt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const p=o.createWebChannel(h,l);let g=!1,I=!1;const S=new TO({Io:b=>{I?U(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(U(dt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),U(dt,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},To:()=>p.close()}),N=(b,T,E)=>{b.listen(T,w=>{try{E(w)}catch(D){setTimeout(()=>{throw D},0)}})};return N(p,Qo.EventType.OPEN,()=>{I||(U(dt,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),N(p,Qo.EventType.CLOSE,()=>{I||(I=!0,U(dt,`RPC '${e}' stream ${i} transport closed`),S.So())}),N(p,Qo.EventType.ERROR,b=>{I||(I=!0,La(dt,`RPC '${e}' stream ${i} transport errored:`,b),S.So(new K(F.UNAVAILABLE,"The operation could not be completed")))}),N(p,Qo.EventType.MESSAGE,b=>{var T;if(!I){const E=b.data[0];J(!!E);const w=E,D=w.error||((T=w[0])===null||T===void 0?void 0:T.error);if(D){U(dt,`RPC '${e}' stream ${i} received error:`,D);const L=D.status;let j=function(A){const P=Be[A];if(P!==void 0)return lS(P)}(L),v=D.message;j===void 0&&(j=F.INTERNAL,v="Unknown error status: "+L+" with message "+D.message),I=!0,S.So(new K(j,v)),p.close()}else U(dt,`RPC '${e}' stream ${i} received:`,E),S.bo(E)}}),N(a,I0.STAT_EVENT,b=>{b.stat===Ff.PROXY?U(dt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Ff.NOPROXY&&U(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(){return typeof window<"u"?window:null}function bu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t){return new PV(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new FS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Et(n.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CO extends US{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=kV(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Tt(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Jf(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=pc(l)?{documents:gS(s,l)}:{query:_S(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=hS(s,o.resumeToken);const c=Hf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Ws(s,o.snapshotVersion.toTimestamp());const c=Hf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=DV(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Jf(this.serializer),n.removeTarget=e,this.a_(n)}}class xO extends US{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return J(!!e.streamToken),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=bV(e.writeResults,e.commitTime),r=Tt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Jf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yc(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Qf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Qf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class RO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Et(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ki(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.L_.add(4),await hl(c),c.q_.set("Unknown"),c.L_.delete(4),await hh(c)}(this))})}),this.q_=new RO(r,i)}}async function hh(t){if(Ki(t))for(const e of t.B_)await e(!0)}async function hl(t){for(const e of t.B_)await e(!1)}function BS(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Km(n)?qm(n):lo(n).r_()&&zm(n,e))}function $m(t,e){const n=te(t),r=lo(n);n.N_.delete(e),r.r_()&&$S(n,e),n.N_.size===0&&(r.r_()?r.o_():Ki(n)&&n.q_.set("Unknown"))}function zm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).A_(e)}function $S(t,e){t.Q_.xe(e),lo(t).R_(e)}function qm(t){t.Q_=new SV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.q_.v_()}function Km(t){return Ki(t)&&!lo(t).n_()&&t.N_.size>0}function Ki(t){return te(t).L_.size===0}function zS(t){t.Q_=void 0}async function kO(t){t.q_.set("Online")}async function bO(t){t.N_.forEach((e,n)=>{zm(t,e)})}async function DO(t,e){zS(t),Km(t)?(t.q_.M_(e),qm(t)):t.q_.set("Unknown")}async function VO(t,e,n){if(t.q_.set("Online"),e instanceof cS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ic(t,r)}else if(e instanceof ku?t.Q_.Ke(e):e instanceof uS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await LS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(ze.EMPTY_BYTE_STRING,h.snapshotVersion)),$S(s,l);const p=new $n(h.target,l,c,h.sequenceNumber);zm(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ic(t,r)}}async function Ic(t,e,n){if(!Gr(e))throw e;t.L_.add(1),await hl(t),t.q_.set("Offline"),n||(n=()=>LS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await hh(t)})}function qS(t,e){return e().catch(n=>Ic(t,n,e))}async function dl(t){const e=te(t),n=Ur(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OO(e);)try{const i=await yO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,MO(e,i)}catch(i){await Ic(e,i)}KS(e)&&GS(e)}function OO(t){return Ki(t)&&t.O_.length<10}function MO(t,e){t.O_.push(e);const n=Ur(t);n.r_()&&n.V_&&n.m_(e.mutations)}function KS(t){return Ki(t)&&!Ur(t).n_()&&t.O_.length>0}function GS(t){Ur(t).start()}async function LO(t){Ur(t).p_()}async function jO(t){const e=Ur(t);for(const n of t.O_)e.m_(n.mutations)}async function FO(t,e,n){const r=t.O_.shift(),i=Dm.from(r,e,n);await qS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await dl(t)}async function UO(t,e){e&&Ur(t).V_&&await async function(r,i){if(function(o){return wV(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();Ur(r).s_(),await qS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await dl(r)}}(t,e),KS(t)&&GS(t)}async function cE(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Ki(n);n.L_.add(3),await hl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await hh(n)}async function BO(t,e){const n=te(t);e?(n.L_.delete(2),await hh(n)):e||(n.L_.add(2),await hl(n),n.q_.set("Unknown"))}function lo(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new CO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:kO.bind(null,t),Ro:bO.bind(null,t),mo:DO.bind(null,t),d_:VO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Km(t)?qm(t):t.q_.set("Unknown")):(await t.K_.stop(),zS(t))})),t.K_}function Ur(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new xO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:LO.bind(null,t),mo:UO.bind(null,t),f_:jO.bind(null,t),g_:FO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await dl(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Gm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wm(t,e){if(Et("AsyncQueue",`${e}: ${t}`),Gr(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Jo(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.W_=new Pe(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hs(e,n,Rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class zO{constructor(){this.queries=dE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=dE(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function dE(){return new Wr(t=>H0(t),rh)}async function WS(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new $O,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Wm(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Hm(n)}async function HS(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qO(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Hm(n)}function KO(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Hm(t){t.Y_.forEach(e=>{e.next()})}var np,fE;(fE=np||(np={})).ea="default",fE.Cache="cache";class QS{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==np.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.key=e}}class YS{constructor(e){this.key=e}}class GO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=Q0(e),this.Ra=new Rs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new hE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const g=i.get(h),I=ul(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),N=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let b=!1;g&&I?g.data.isEqual(I.data)?S!==N&&(r.track({type:3,doc:I}),b=!0):this.ga(g,I)||(r.track({type:2,doc:I}),b=!0,(l&&this.Aa(I,l)>0||c&&this.Aa(I,c)<0)&&(a=!0)):!g&&I?(r.track({type:0,doc:I}),b=!0):g&&!I&&(r.track({type:1,doc:g}),b=!0,(l||c)&&(a=!0)),b&&(I?(o=o.add(I),s=N?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(I,S){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return N(I)-N(S)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Hs(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new hE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new YS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new JS(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class WO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HO{constructor(e){this.key=e,this.va=!1}}class QO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Wr(a=>H0(a),rh),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(G.comparator),this.Na=new Map,this.La=new Fm,this.Ba={},this.ka=new Map,this.qa=Oi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function JO(t,e,n=!0){const r=rA(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await XS(r,e,n,!0),i}async function YO(t,e){const n=rA(t);await XS(n,e,!0,!1)}async function XS(t,e,n,r){const i=await vO(t.localStore,en(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await XO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&BS(t.remoteStore,i),a}async function XO(t,e,n,r,i){t.Ka=(p,g,I)=>async function(N,b,T,E){let w=b.view.ma(T);w.ns&&(w=await aE(N.localStore,b.query,!1).then(({documents:v})=>b.view.ma(v,w)));const D=E&&E.targetChanges.get(b.targetId),L=E&&E.targetMismatches.get(b.targetId)!=null,j=b.view.applyChanges(w,N.isPrimaryClient,D,L);return mE(N,b.targetId,j.wa),j.snapshot}(t,p,g,I);const s=await aE(t.localStore,e,!0),o=new GO(e,s.Ts),a=o.ma(s.documents),l=cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);mE(t,n,c.wa);const h=new WO(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function ZO(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!rh(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await tp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&$m(r.remoteStore,i.targetId),rp(r,i.targetId)}).catch(qi)):(rp(r,i.targetId),await tp(r.localStore,i.targetId,!0))}async function eM(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$m(n.remoteStore,r.targetId))}async function tM(t,e,n){const r=iA(t);try{const i=await function(o,a){const l=te(o),c=De.now(),h=a.reduce((I,S)=>I.add(S.key),ie());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",I=>{let S=Bt(),N=ie();return l.cs.getEntries(I,h).next(b=>{S=b,S.forEach((T,E)=>{E.isValidDocument()||(N=N.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(I,S)).next(b=>{p=b;const T=[];for(const E of a){const w=vV(E,p.get(E.key).overlayedDocument);w!=null&&T.push(new Hr(E.key,w,F0(w.value.mapValue),$t.exists(!0)))}return l.mutationQueue.addMutationBatch(I,c,T,a)}).next(b=>{g=b;const T=b.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(I,b.batchId,T)})}).then(()=>({batchId:g.batchId,changes:Y0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Pe(re)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await fl(r,i.changes),await dl(r.remoteStore)}catch(i){const s=Wm(i,"Failed to persist write");n.reject(s)}}async function ZS(t,e){const n=te(t);try{const r=await gO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?J(o.va):i.removedDocuments.size>0&&(J(o.va),o.va=!1))}),await fl(n,r,e)}catch(r){await qi(r)}}function pE(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(a)&&(c=!0)}),c&&Hm(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nM(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Pe(G.comparator);o=o.insert(s,Le.newNoDocument(s,X.min()));const a=ie().add(s),l=new oh(X.min(),new Map,new Pe(re),o,a);await ZS(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),Qm(r)}else await tp(r.localStore,e,!1).then(()=>rp(r,e,n)).catch(qi)}async function rM(t,e){const n=te(t),r=e.batch.batchId;try{const i=await mO(n.localStore,e);tA(n,r,null),eA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fl(n,i)}catch(i){await qi(i)}}async function iM(t,e,n){const r=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(p=>(J(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(c,p))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);tA(r,e,n),eA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fl(r,i)}catch(i){await qi(i)}}function eA(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function tA(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function rp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||nA(t,r)})}function nA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&($m(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Qm(t))}function mE(t,e,n){for(const r of n)r instanceof JS?(t.La.addReference(r.key,e),sM(t,r)):r instanceof YS?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||nA(t,r.key)):Q()}function sM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),Qm(t))}function Qm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new HO(n)),t.Oa=t.Oa.insert(n,r),BS(t.remoteStore,new $n(en(ll(n.path)),r,"TargetPurposeLimboResolution",Yt.oe))}}async function fl(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Bm.Wi(l.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=te(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(c,g=>O.forEach(g.$i,I=>h.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>O.forEach(g.Ui,I=>h.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!Gr(p))throw p;U("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const I=h.os.get(g),S=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(g,N)}}}(r.localStore,s))}async function oM(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await MS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new K(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fl(n,r.hs)}}function aM(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function rA(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nM.bind(null,e),e.Ca.d_=qO.bind(null,e.eventManager),e.Ca.$a=KO.bind(null,e.eventManager),e}function iA(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iM.bind(null,e),e}class Wa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ch(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return OS(this.persistence,new VS,e.initialUser,this.serializer)}Ga(e){return new DS(uh.Zr,this.serializer)}Wa(e){return new jS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wa.provider={build:()=>new Wa};class lM extends Wa{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await iA(this.Ja.syncEngine),await dl(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return OS(this.persistence,new VS,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new JV(r,e.asyncQueue,n)}Ha(e,n){const r=new AD(n,this.persistence);return new SD(e.asyncQueue,r)}Ga(e){const n=dO(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Um(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,AO(),bu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new jS}}class Tc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oM.bind(null,this.syncEngine),await BO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zO}()}createDatastore(e){const n=ch(e.databaseInfo.databaseId),r=function(s){return new SO(s)}(e.databaseInfo);return function(s,o,a,l){return new PO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new NO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>pE(this.syncEngine,n,0),function(){return uE.D()?new uE:new wO}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const p=new QO(i,s,o,a,l,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await hl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Tc.provider={build:()=>new Tc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Et("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=A0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sd(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await MS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cM(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cE(e.remoteStore,i)),t._onlineComponents=e}async function cM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;La("Error using user provided cache. Falling back to memory cache: "+n),await Sd(t,new Wa)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Sd(t,new Wa);return t._offlineComponents}async function oA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await gE(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await gE(t,new Tc))),t._onlineComponents}function hM(t){return oA(t).then(e=>e.syncEngine)}async function ip(t){const e=await oA(t),n=e.eventManager;return n.onListen=JO.bind(null,e.syncEngine),n.onUnlisten=ZO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=YO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eM.bind(null,e.syncEngine),n}function dM(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new sA({next:g=>{h.Za(),o.enqueueAndForget(()=>HS(s,p));const I=g.docs.has(a);!I&&g.fromCache?c.reject(new K(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&l&&l.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new QS(ll(a.path),h,{includeMetadataChanges:!0,_a:!0});return WS(s,p)}(await ip(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fM(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yE(t){if(!G.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vE(t){if(G.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dh(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function pM(t,e){if(e<=0)throw new K(F.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fD;switch(r.type){case"firstParty":return new gD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_E.get(n);r&&(U("ComponentProvider","Removing Datastore"),_E.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qr(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class Or extends Qr{constructor(e,n,r){super(e,n,ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new G(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function Ym(t,e,...n){if(t=xe(t),lA("collection","path",e),t instanceof Jm){const r=fe.fromString(e,...n);return vE(r),new Or(t,null,r)}{if(!(t instanceof St||t instanceof Or))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return vE(r),new Or(t.firestore,null,r)}}function At(t,e,...n){if(t=xe(t),arguments.length===1&&(e=A0.newId()),lA("doc","path",e),t instanceof Jm){const r=fe.fromString(e,...n);return yE(r),new St(t,null,new G(r))}{if(!(t instanceof St||t instanceof Or))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return yE(r),new St(t.firestore,t instanceof Or?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new FS(this,"async_queue_retry"),this.Vu=()=>{const r=bu();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=bu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=bu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Gn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Gr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Et("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Gm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function IE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ha extends Jm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new wE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wE(e),this._firestoreClient=void 0,await e}}}function mM(t,e,n){n||(n="(default)");const r=$i(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Va(s,e))return i;throw new K(F.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new K(F.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function Xm(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gM(t),t._firestoreClient}function gM(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new WD(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,aA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new uM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(ze.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=/^__.*__$/;class yM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ao(e,this.data,n,this.fieldTransforms)}}function uA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class rg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new rg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Sc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(uA(this.Cu)&&_M.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class vM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ch(e)}Qu(e,n,r,i=!1){return new rg({Cu:e,methodName:n,qu:r,path:Ne.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cA(t){const e=t._freezeSettings(),n=ch(t._databaseId);return new vM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function EM(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);fA("Data must be an object, but it was:",o,r);const a=hA(r,o);let l,c;if(s.merge)l=new Xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const g=IM(e,p,n);if(!o.contains(g))throw new K(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);SM(h,g)||h.push(g)}l=new Xt(h),c=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,c=o.fieldTransforms;return new yM(new bt(a),l,c)}class ig extends eg{_toFieldTransform(e){return new iS(e.path,new qs)}isEqual(e){return e instanceof ig}}function wM(t,e,n,r=!1){return sg(n,t.Qu(r?4:3,e))}function sg(t,e){if(dA(t=xe(t)))return fA("Unsupported field value:",e,t),hA(t,e);if(t instanceof eg)return function(r,i){if(!uA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=sg(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:Ws(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ws(i.serializer,s)}}if(r instanceof tg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qs)return{bytesValue:hS(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ng)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Nm(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${dh(r)}`)}(t,e)}function hA(t,e){const n={};return O0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):so(t,(r,i)=>{const s=sg(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof tg||t instanceof Qs||t instanceof St||t instanceof eg||t instanceof ng)}function fA(t,e,n){if(!dA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=dh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function IM(t,e,n){if((e=xe(e))instanceof Zm)return e._internalPath;if(typeof e=="string")return pA(t,e);throw Sc("Field path arguments must be of type string or ",t,!1,void 0,n)}const TM=new RegExp("[~\\*/\\[\\]]");function pA(t,e,n){if(e.search(TM)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zm(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new K(F.INVALID_ARGUMENT,a+t+l)}function SM(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AM extends mA{data(){return super.data()}}function fh(t,e){return typeof e=="string"?pA(t,e):e instanceof Zm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class og{}class ag extends og{}function gA(t,e,...n){let r=[];e instanceof og&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof lg).length,a=s.filter(l=>l instanceof ph).length;if(o>1||o>0&&a>0)throw new K(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ph extends ag{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ph(e,n,r)}_apply(e){const n=this._parse(e);return vA(e._query,n),new Qr(e.firestore,e.converter,Wf(e._query,n))}_parse(e){const n=cA(e.firestore);return function(s,o,a,l,c,h,p){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new K(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){SE(p,h);const I=[];for(const S of p)I.push(TE(l,s,S));g={arrayValue:{values:I}}}else g=TE(l,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||SE(p,h),g=wM(a,o,p,h==="in"||h==="not-in");return le.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xM(t,e,n){const r=e,i=fh("where",t);return ph._create(i,r,n)}class lg extends og{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new lg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)vA(o,l),o=Wf(o,l)}(e._query,n),new Qr(e.firestore,e.converter,Wf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ug extends ag{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ug(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ka(s,o)}(e._query,this._field,this._direction);return new Qr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new oo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function _A(t,e="asc"){const n=e,r=fh("orderBy",t);return ug._create(r,n)}class cg extends ag{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new cg(e,n,r)}_apply(e){return new Qr(e.firestore,e.converter,gc(e._query,this._limit,this._limitType))}}function yA(t){return pM("limit",t),cg._create("limit",t,"F")}function TE(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new K(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!W0(e)&&n.indexOf("/")!==-1)throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!G.isDocumentKey(r))throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return za(t,new G(r))}if(n instanceof St)return za(t,n._key);throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dh(n)}.`)}function SE(t,e){if(!Array.isArray(t)||t.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class PM{convertValue(e,n="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return so(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new ng(s)}convertGeoPoint(e){return new tg(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ba(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);J(wS(r));const i=new Ni(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Et(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EA extends mA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Du(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Du extends EA{data(e={}){return super.data(e)}}class NM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Du(this._firestore,this._userDataWriter,r.key,r,new Zo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Du(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Du(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:kM(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t){t=vi(t,St);const e=vi(t.firestore,Ha);return dM(Xm(e),t._key).then(n=>IA(e,t,n))}class wA extends PM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function sp(t,e,n){t=vi(t,St);const r=vi(t.firestore,Ha),i=RM(t.converter,e,n);return bM(r,[EM(cA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,$t.none())])}function sn(t,...e){var n,r,i;t=xe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||IE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(IE(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,c,h;if(t instanceof St)c=vi(t.firestore,Ha),h=ll(t._key.path),l={next:p=>{e[o]&&e[o](IA(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=vi(t,Qr);c=vi(p.firestore,Ha),h=p._query;const g=new wA(c);l={next:I=>{e[o]&&e[o](new NM(c,g,p,I))},error:e[o+1],complete:e[o+2]},CM(t._query)}return function(g,I,S,N){const b=new sA(N),T=new QS(I,b,S);return g.asyncQueue.enqueueAndForget(async()=>WS(await ip(g),T)),()=>{b.Za(),g.asyncQueue.enqueueAndForget(async()=>HS(await ip(g),T))}}(Xm(c),h,a,l)}function bM(t,e){return function(r,i){const s=new Gn;return r.asyncQueue.enqueueAndForget(async()=>tM(await hM(r),i,s)),s.promise}(Xm(t),e)}function IA(t,e,n){const r=n.docs.get(e._key),i=new wA(t);return new EA(t,i,e._key,r,new Zo(n.hasPendingWrites,n.fromCache),e.converter)}class DM{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=TA(),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function VM(t){return new DM(t)}class OM{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Tc.provider,this._offlineComponentProvider={build:n=>new lM(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function TA(t){return new OM(void 0)}function op(){return new ig("serverTimestamp")}(function(e,n=!0){(function(i){io=i})(no),gn(new rn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ha(new pD(r.getProvider("auth-internal")),new yD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Lt(gv,"4.7.3",e),Lt(gv,"4.7.3","esm2017")})();var MM="firebase",LM="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(MM,LM,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM="type.googleapis.com/google.protobuf.Int64Value",FM="type.googleapis.com/google.protobuf.UInt64Value";function SA(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function ap(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>ap(e));if(typeof t=="function"||typeof t=="object")return SA(t,e=>ap(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Ac(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case jM:case FM:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Ac(e)):typeof t=="function"||typeof t=="object"?SA(t,e=>Ac(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ns extends yn{constructor(e,n,r){super(`${hg}/${e}`,n||""),this.details=r}}function UM(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function BM(t,e){let n=UM(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!AE[o])return new Ns("internal","internal");n=AE[o],r=o}const a=s.message;typeof a=="string"&&(r=a),i=s.details,i!==void 0&&(i=Ac(i))}}catch{}return n==="ok"?null:new Ns(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="us-central1";function zM(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Ns("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class qM{constructor(e,n,r,i,s=lp,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new $M(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=lp}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function KM(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function GM(t,e,n){return r=>HM(t,e,r,{})}async function WM(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function HM(t,e,n,r){const i=t._url(e);return QM(t,i,n,r)}async function QM(t,e,n,r){n=ap(n);const i={data:n},s={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,l=zM(a),c=await Promise.race([WM(e,i,s,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new Ns("cancelled","Firebase Functions instance was deleted.");const h=BM(c.status,c.json);if(h)throw h;if(!c.json)throw new Ns("internal","Response is not valid JSON object.");let p=c.json.data;if(typeof p>"u"&&(p=c.json.result),typeof p>"u")throw new Ns("internal","Response is missing data field.");return{data:Ac(p)}}const CE="@firebase/functions",xE="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM="auth-internal",YM="app-check-internal",XM="messaging-internal";function ZM(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(JM),a=r.getProvider(XM),l=r.getProvider(YM);return new qM(s,o,a,l,i,t)};gn(new rn(hg,n,"PUBLIC").setMultipleInstances(!0)),Lt(CE,xE,e),Lt(CE,xE,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t=fm(),e=lp){const r=$i(xe(t),hg).getImmediate({identifier:e}),i=RN("functions");return i&&tL(r,...i),r}function tL(t,e,n){KM(xe(t),e,n)}function Ge(t,e,n){return GM(xe(t),e)}ZM(fetch.bind(self));const nL={apiKey:"AIzaSyBQDetC-J1AfOD20h6cYLKHWACSxFSsWJI",authDomain:"ton-paris.firebaseapp.com",projectId:"ton-paris",storageBucket:"ton-paris.firebasestorage.app",messagingSenderId:"669449450778",appId:"1:669449450778:web:732d76c1d2a5c5b4e228a3"},Qa=OT(nL),Bo=cD(Qa),We=eL(Qa,"europe-west9"),et=mM(Qa,{localCache:VM({tabManager:TA()})}),PE="BMbLRXdRv5SHMSa9gLR1ZvtGS4-9McmV-Qz-S2V6AO-DSFATHsg4EYLvOmwusUehxpeYrHVp5HPtkpRJUY5zEN0",Je="ton-paris",tt={config:t=>`tenants/${Je}/config/${t}`,admin:t=>`tenants/${Je}/admins/${t}`,utilisateur:t=>`tenants/${Je}/users/${t}`,preferences:t=>`tenants/${Je}/users/${t}/prefs/principal`,jetons:t=>`tenants/${Je}/users/${t}/pushTokens`,matchs:()=>`tenants/${Je}/matches`,diffusions:()=>`tenants/${Je}/tvBroadcasts`,classements:()=>`tenants/${Je}/standings`,actus:()=>`tenants/${Je}/news`,mercato:t=>`tenants/${Je}/mercato/${t}`,effectif:t=>`tenants/${Je}/effectifs/${t}`,photosEffectif:t=>`tenants/${Je}/config/photosEffectif-${t}`,compoProbable:t=>`tenants/${Je}/compoProbable/${t}`,compoOfficielle:t=>`tenants/${Je}/compoOfficielle/${t}`,scoresDirect:()=>`tenants/${Je}/live/scores`,fenetresMercato:()=>`tenants/${Je}/config/fenetresMercato`,detailsJoueur:t=>`tenants/${Je}/detailsJoueurs/${t}`,journaux:()=>`tenants/${Je}/scrapeLogs`},AA=x.createContext(null),rL={"auth/invalid-email":"Cette adresse e-mail n'est pas valide.","auth/invalid-credential":"Adresse ou mot de passe incorrect.","auth/wrong-password":"Adresse ou mot de passe incorrect.","auth/user-not-found":"Aucun compte ne correspond à cette adresse.","auth/email-already-in-use":"Un compte existe déjà avec cette adresse.","auth/weak-password":"Le mot de passe doit faire au moins 6 caractères.","auth/too-many-requests":"Trop de tentatives. Réessaie dans quelques minutes.","auth/network-request-failed":"Connexion impossible. Vérifie ton réseau."};function iL(t){return rL[t]||"Quelque chose s'est mal passé. Réessaie."}function sL({children:t}){const[e,n]=x.useState(null),[r,i]=x.useState(!0);x.useEffect(()=>(Jb(Bo,c0).catch(()=>{}),Zb(Bo,l=>{n(l),i(!1)})),[]);const s=async(l,c)=>{const{user:h}=await Wb(Bo,l.trim(),c);return h},o=async(l,c,h)=>{const{user:p}=await Gb(Bo,l.trim(),c);await Qb(p,{displayName:h.trim()});const g=At(et,tt.utilisateur(p.uid));await sp(g,{prenom:h.trim(),email:l.trim(),creeLe:op()});const I=At(et,tt.admin(p.uid));return(await mh(I)).exists()||await sp(I,{prenom:h.trim(),creeLe:op()},{merge:!0}),p},a=()=>e1(Bo);return f.jsx(AA.Provider,{value:{utilisateur:e,chargement:r,connexion:s,inscription:o,deconnexion:a},children:t})}function pl(){const t=x.useContext(AA);if(!t)throw new Error("useAuth doit être utilisé dans FournisseurAuth");return t}const CA=x.createContext(null),Ad={clubFavori:null,nationFavorite:null,clubsSuivis:[],joueurChouchouId:null,notifications:{matinDuMatch:!0,uneHeureAvant:!0,coupDEnvoi:!0,actuImportante:!0,touteActu:!1},abonnementsTv:[],onboardingTermine:!1},fi=2;function oL({children:t}){const{utilisateur:e}=pl(),[n,r]=x.useState(null),[i,s]=x.useState(!0);x.useEffect(()=>{if(!e){r(null),s(!1);return}s(!0);const a=At(et,tt.preferences(e.uid));return sn(a,l=>{r(l.exists()?{...Ad,...l.data()}:Ad),s(!1)},()=>{r(Ad),s(!1)})},[e]);const o=x.useCallback(async a=>{if(!e)return;const l=At(et,tt.preferences(e.uid));await sp(l,{...a,majLe:op()},{merge:!0})},[e]);return f.jsx(CA.Provider,{value:{preferences:n,chargement:i,enregistrer:o},children:t})}function Jr(){const t=x.useContext(CA);if(!t)throw new Error("usePreferences doit être utilisé dans FournisseurPreferences");return t}const xA=x.createContext(null),aL=3200;function lL({children:t}){const[e,n]=x.useState([]),r=x.useRef(0),i=x.useCallback(o=>{n(a=>a.filter(l=>l.id!==o))},[]),s=x.useCallback((o,{type:a="succes"}={})=>{const l=++r.current;n(c=>[...c,{id:l,message:o,type:a}]),setTimeout(()=>i(l),aL)},[i]);return f.jsx(xA.Provider,{value:{toasts:e,notifier:s,retirer:i},children:t})}function PA(){const t=x.useContext(xA);if(!t)throw new Error("useToasts doit être utilisé dans FournisseurToasts");return t}function dg({nombre:t=60}={}){const[e,n]=x.useState([]),[r,i]=x.useState(!0);return x.useEffect(()=>{const s=gA(Ym(et,tt.actus()),_A("publieLe","desc"),yA(t));return sn(s,o=>{n(o.docs.map(a=>{var c,h;const l=a.data();return{id:a.id,...l,publieLeISO:((h=(c=l.publieLe)==null?void 0:c.toDate)==null?void 0:h.call(c).toISOString())||null}})),i(!1)},()=>i(!1))},[t]),{actus:e,chargement:r}}const Cd="ton-paris:digest-derniere-visite",RE="ton-paris:digest-vu-le";function NE(t){try{return localStorage.getItem(t)}catch{return null}}function xd(t,e){try{localStorage.setItem(t,e)}catch{}}function uL(t){const[e,n]=x.useState(!1),[r,i]=x.useState(null);x.useEffect(()=>{const a=NE(Cd);if(!a){const l=new Date(Date.now()-864e5).toISOString();xd(Cd,l),i(new Date(l));return}i(new Date(a))},[]);const s=x.useMemo(()=>r?t.filter(a=>{const l=a.publieLeISO?new Date(a.publieLeISO):null;return l&&l>r}):[],[t,r]);return x.useEffect(()=>{if(r===null||s.length===0)return;const a=new Date().toDateString();NE(RE)!==a&&n(!0)},[r,s]),{ouvert:e,actus:s,fermer:()=>{n(!1);const a=new Date;xd(Cd,a.toISOString()),xd(RE,a.toDateString())}}}const cL=3500;function hL({pret:t=!0,onTermine:e}){const[n,r]=x.useState(!1);return x.useEffect(()=>{let i=!1;const s=setTimeout(()=>{i||(r(!0),setTimeout(()=>{i||e==null||e()},750))},cL);return()=>{i=!0,clearTimeout(s)}},[e]),f.jsxs("div",{className:`splash${n?" splash--sortie":""}`,role:"status","aria-live":"polite",children:[f.jsx("div",{className:"splash__bande splash__bande--rouge"}),f.jsx("div",{className:"splash__bande splash__bande--blanche"}),f.jsxs("div",{className:"splash__mots",children:[f.jsx("span",{className:"splash__ligne splash__ligne--1",children:f.jsx("i",{children:"Ici c'est"})}),f.jsx("span",{className:"splash__ligne splash__ligne--2",children:f.jsx("i",{children:"Ton"})}),f.jsx("span",{className:"splash__ligne splash__ligne--3",children:f.jsx("i",{children:"Paris"})})]}),f.jsx("div",{className:"splash__barre",children:f.jsx("span",{className:t?"splash__barre-jauge":"splash__barre-jauge splash__barre-jauge--boucle"})}),f.jsx("p",{className:"splash__etat",children:"Chargement du programme"})]})}const kE="tonparis.install.refuse";function dL(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function fL(){return/iphone|ipad|ipod/i.test(window.navigator.userAgent)&&!window.MSStream}function pL(){const[t,e]=x.useState(null),[n,r]=x.useState(!1),[i,s]=x.useState(!1);x.useEffect(()=>{if(dL()||sessionStorage.getItem(kE))return;if(fL()){s(!0),r(!0);return}const l=h=>{h.preventDefault(),e(h),r(!0)};window.addEventListener("beforeinstallprompt",l);const c=()=>r(!1);return window.addEventListener("appinstalled",c),()=>{window.removeEventListener("beforeinstallprompt",l),window.removeEventListener("appinstalled",c)}},[]);const o=async()=>{if(!t)return;t.prompt();const{outcome:l}=await t.userChoice;l==="accepted"&&r(!1),e(null)},a=()=>{sessionStorage.setItem(kE,"1"),r(!1)};return n?f.jsxs("aside",{className:"invite",role:"complementary",children:[f.jsxs("p",{className:"invite__texte",children:[f.jsx("strong",{children:"Ajoute l'app à ton écran d'accueil."})," ",i?"Appuie sur Partager, puis « Sur l'écran d'accueil ». C'est la condition pour recevoir les notifs de match.":"Notifs des matchs et ouverture instantanée."]}),!i&&f.jsx("button",{className:"invite__action",onClick:o,children:"Installer"}),f.jsx("button",{className:"invite__fermer",onClick:a,"aria-label":"Masquer l'invitation",children:"×"})]}):null}const mL=[{chemin:"/",libelle:"Accueil",icone:"fa-solid fa-house",exact:!0},{chemin:"/matchs",libelle:"Matchs",icone:"fa-solid fa-calendar-days"},{chemin:"/compo",libelle:"Compo",icone:"fa-solid fa-users-rectangle"},{chemin:"/classement",libelle:"Classement",icone:"fa-solid fa-ranking-star"},{chemin:"/effectif",libelle:"Effectif",icone:"fa-solid fa-users"},{chemin:"/mercato",libelle:"Mercato",icone:"fa-solid fa-right-left"},{chemin:"/reglages",libelle:"Réglages",icone:"fa-solid fa-gear"}];function gL(){return f.jsx("nav",{className:"nav","aria-label":"Navigation principale",children:mL.map(({chemin:t,libelle:e,icone:n,exact:r})=>f.jsxs(yN,{to:t,end:r,className:({isActive:i})=>`nav__item${i?" nav__item--actif":""}`,children:[f.jsx("i",{className:`nav__icone ${n}`,"aria-hidden":"true"}),f.jsx("span",{className:"nav__libelle",children:e})]},t))})}function _L({actu:t,onFermer:e}){if(x.useEffect(()=>{if(!t)return;const r=i=>{i.key==="Escape"&&(e==null||e())};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t,e]),!t)return null;const n=t.publieLeISO?new Date(t.publieLeISO).toLocaleDateString("fr-FR",{day:"numeric",month:"long"}):"";return f.jsx("div",{className:"article-modale",role:"dialog","aria-modal":"true",onClick:e,children:f.jsxs("div",{className:"article-modale__boite",onClick:r=>r.stopPropagation(),children:[f.jsx("button",{className:"article-modale__fermer",onClick:e,"aria-label":"Fermer",children:"×"}),t.image&&f.jsx("img",{className:"article-modale__image",src:t.image,alt:"",loading:"eager"}),f.jsxs("div",{className:"article-modale__contenu",children:[t.categorie&&f.jsx("span",{className:`article-modale__categorie${t.importante?" article-modale__categorie--chaude":""}`,children:t.categorie}),f.jsx("h2",{className:"article-modale__titre",children:t.titre}),n&&f.jsx("p",{className:"article-modale__meta",children:n}),t.corps?t.corps.split(`

`).map((r,i)=>f.jsx("p",{className:"article-modale__resume",children:r},i)):t.resume&&f.jsx("p",{className:"article-modale__resume",children:t.resume})]})]})})}function yL(t){return t?t.split(/\n(?=##\s)/).map(n=>n.trim()).filter(Boolean).map(n=>{const r=n.match(/^##\s*(.+?)\s*\n([\s\S]*)$/);return r?{titre:r[1].trim(),texte:r[2].trim()}:{titre:null,texte:n}}):[]}function vL({ouvert:t,actus:e,onFermer:n,onOuvrirArticle:r}){const[i,s]=x.useState(null),[o,a]=x.useState(!1);if(x.useEffect(()=>{if(!t)return;const c=h=>{h.key==="Escape"&&(n==null||n())};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[t,n]),x.useEffect(()=>{if(!t||e.length===0){s(null);return}a(!0),s(null);const c=e.map(h=>({id:h.id,titre:h.titre,resume:h.resume||null}));Ge(We,"genererDigest")({articles:c}).then(h=>{var p;return s(((p=h.data)==null?void 0:p.resume)||null)}).catch(()=>s(null)).finally(()=>a(!1))},[t,e]),!t)return null;const l=yL(i);return f.jsx("div",{className:"digest",role:"dialog","aria-modal":"true",onClick:n,children:f.jsxs("div",{className:"digest__boite",onClick:c=>c.stopPropagation(),children:[f.jsx("span",{className:"digest__etiquette",children:"Depuis ta dernière visite"}),f.jsxs("h2",{className:"digest__titre",children:["Actus ",f.jsx("em",{children:"PSG"})]}),o&&f.jsx("p",{className:"digest__resume digest__resume--attente",children:"Résumé en préparation…"}),!o&&l.length===0&&f.jsx("p",{className:"digest__resume digest__resume--attente",children:"Résumé indisponible pour le moment, reviens plus tard."}),l.length>0&&f.jsx("div",{className:"digest__resume",children:l.map((c,h)=>f.jsxs("div",{className:"digest__section",children:[c.titre&&f.jsx("h3",{className:"digest__section-titre",children:c.titre}),f.jsx("p",{className:"digest__section-texte",children:c.texte})]},h))}),f.jsx("button",{className:"digest__fermer",onClick:n,children:"Vu, merci"})]})})}function EL(){const{toasts:t,retirer:e}=PA();return t.length===0?null:f.jsx("div",{className:"toasts",role:"status","aria-live":"polite",children:t.map(n=>f.jsxs("div",{className:`toast toast--${n.type}`,onClick:()=>e(n.id),children:[f.jsx("span",{className:"toast__puce","aria-hidden":"true",children:n.type==="erreur"?"!":"✓"}),f.jsx("span",{className:"toast__texte",children:n.message})]},n.id))})}function wL(){const{connexion:t,inscription:e}=pl(),[n,r]=x.useState("connexion"),[i,s]=x.useState(""),[o,a]=x.useState(""),[l,c]=x.useState(""),[h,p]=x.useState(""),[g,I]=x.useState(!1),S=n==="inscription",N=async T=>{if(T.preventDefault(),p(""),S&&!i.trim()){p("Indique ton prénom.");return}I(!0);try{S?await e(o,l,i):await t(o,l)}catch(E){p(iL(E.code)),I(!1)}},b=()=>{r(S?"connexion":"inscription"),p("")};return f.jsxs("div",{className:"connexion",children:[f.jsx("div",{className:"connexion__bande"}),f.jsxs("div",{className:"connexion__contenu",children:[f.jsxs("h1",{className:"connexion__marque",children:[f.jsx("span",{children:"Ici c'est"}),f.jsx("em",{children:"Ton"}),f.jsx("em",{children:"Paris"})]}),f.jsxs("form",{className:"connexion__form",onSubmit:N,children:[S&&f.jsxs("label",{className:"champ",children:[f.jsx("span",{className:"champ__label",children:"Prénom"}),f.jsx("input",{className:"champ__saisie",type:"text",value:i,onChange:T=>s(T.target.value),autoComplete:"given-name",placeholder:"Dylan"})]}),f.jsxs("label",{className:"champ",children:[f.jsx("span",{className:"champ__label",children:"Adresse e-mail"}),f.jsx("input",{className:"champ__saisie",type:"email",value:o,onChange:T=>a(T.target.value),autoComplete:"email",required:!0,placeholder:"toi@exemple.fr"})]}),f.jsxs("label",{className:"champ",children:[f.jsx("span",{className:"champ__label",children:"Mot de passe"}),f.jsx("input",{className:"champ__saisie",type:"password",value:l,onChange:T=>c(T.target.value),autoComplete:S?"new-password":"current-password",required:!0,minLength:6,placeholder:"6 caractères minimum"})]}),h&&f.jsx("p",{className:"connexion__erreur",role:"alert",children:h}),f.jsx("button",{className:"connexion__valider",type:"submit",disabled:g,children:g?"Un instant…":S?"Créer le compte":"Se connecter"})]}),f.jsx("button",{className:"connexion__bascule",type:"button",onClick:b,children:S?"J'ai déjà un compte":"Créer un compte"})]})]})}let su=null,ou=null;async function gh(){if(su)return su;const t=await mh(At(et,tt.config("clubs")));return su=t.exists()?t.data().liste||[]:[],su}async function RA(){if(ou)return ou;const t=await mh(At(et,tt.config("nations")));return ou=t.exists()?t.data().liste||[]:[],ou}function Cc(t,e){const n=e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return n?t.filter(r=>`${r.nom} ${r.alias||""}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(n)):t}const au=["Ton club","Ta sélection","Tes clubs suivis","Tes notifs"];function IL(){const{utilisateur:t}=pl(),{enregistrer:e}=Jr(),[n,r]=x.useState(0),[i,s]=x.useState([]),[o,a]=x.useState([]),[l,c]=x.useState(""),[h,p]=x.useState(null),[g,I]=x.useState(null),[S,N]=x.useState([]),[b,T]=x.useState({matinDuMatch:!0,uneHeureAvant:!0,coupDEnvoi:!0,actuImportante:!0,touteActu:!1}),[E,w]=x.useState(!1);x.useEffect(()=>{gh().then(s),RA().then(a)},[]),x.useEffect(()=>{c("")},[n]);const D=x.useMemo(()=>Cc(i,l),[i,l]),L=x.useMemo(()=>Cc(o,l),[o,l]),j=x.useMemo(()=>D.filter(R=>R.id!==(h==null?void 0:h.id)),[D,h]),v=R=>{N(C=>C.some(oe=>oe.id===R.id)?C.filter(oe=>oe.id!==R.id):C.length>=fi?C:[...C,R])},_=R=>{T(C=>({...C,[R]:!C[R]}))},A=()=>n===0?!!h:n===1?!!g:!0,P=async()=>{w(!0),await e({clubFavori:h,nationFavorite:g,clubsSuivis:S,notifications:b,onboardingTermine:!0})},k=()=>{n<au.length-1?r(n+1):P()};return f.jsxs("div",{className:"onb",children:[f.jsxs("header",{className:"onb__tete",children:[f.jsxs("p",{className:"onb__compteur",children:["Étape ",n+1," sur ",au.length]}),f.jsx("div",{className:"onb__jauge",children:au.map((R,C)=>f.jsx("span",{className:`onb__cran${C<=n?" onb__cran--fait":""}`},C))})]}),f.jsxs("div",{className:"onb__corps",children:[n===0&&f.jsxs(f.Fragment,{children:[f.jsx("h2",{className:"onb__titre",children:"Quel est ton club ?"}),f.jsx("p",{className:"onb__aide",children:"Il ouvre ton accueil et passe avant tout le reste."}),f.jsx("input",{className:"onb__recherche",type:"search",value:l,onChange:R=>c(R.target.value),placeholder:"Chercher un club"}),f.jsx("ul",{className:"onb__liste",children:D.map(R=>f.jsx("li",{children:f.jsx("button",{className:`onb__choix${(h==null?void 0:h.id)===R.id?" onb__choix--actif":""}`,onClick:()=>p(R),children:f.jsx("span",{className:"onb__choix-nom",children:R.nom})})},R.id))})]}),n===1&&f.jsxs(f.Fragment,{children:[f.jsx("h2",{className:"onb__titre",children:"Et ta sélection ?"}),f.jsx("p",{className:"onb__aide",children:"Ses matchs apparaîtront pendant les trêves internationales."}),f.jsx("input",{className:"onb__recherche",type:"search",value:l,onChange:R=>c(R.target.value),placeholder:"Chercher une sélection"}),f.jsx("ul",{className:"onb__liste",children:L.map(R=>f.jsx("li",{children:f.jsx("button",{className:`onb__choix${(g==null?void 0:g.id)===R.id?" onb__choix--actif":""}`,onClick:()=>I(R),children:f.jsx("span",{className:"onb__choix-nom",children:R.nom})})},R.id))})]}),n===2&&f.jsxs(f.Fragment,{children:[f.jsx("h2",{className:"onb__titre",children:"Tu suis d'autres clubs ?"}),f.jsxs("p",{className:"onb__aide",children:[S.length," sur ",fi," choisis. Tu peux aussi passer cette étape."]}),f.jsx("input",{className:"onb__recherche",type:"search",value:l,onChange:R=>c(R.target.value),placeholder:"Chercher un club"}),f.jsx("ul",{className:"onb__liste",children:j.map(R=>{const C=S.some(oe=>oe.id===R.id),H=S.length>=fi&&!C;return f.jsx("li",{children:f.jsxs("button",{className:`onb__choix${C?" onb__choix--actif":""}`,onClick:()=>v(R),disabled:H,children:[f.jsx("span",{className:"onb__choix-nom",children:R.nom}),C&&f.jsx("span",{className:"onb__choix-marque",children:"Suivi"})]})},R.id)})})]}),n===3&&f.jsxs(f.Fragment,{children:[f.jsx("h2",{className:"onb__titre",children:"Qu'est-ce qu'on te signale ?"}),f.jsx("p",{className:"onb__aide",children:"Tu pourras changer ça à tout moment dans les réglages."}),f.jsx("ul",{className:"onb__notifs",children:[["matinDuMatch","Le matin du match","Vers 9h, avec la chaîne"],["uneHeureAvant","1 heure avant","Rappel avant le coup d'envoi"],["coupDEnvoi","Au coup d'envoi","Le match commence"],["actuImportante","Actu importante","Mercato, blessure, groupe"],["touteActu","Toute l'actu","Chaque article publié"]].map(([R,C,H])=>f.jsxs("li",{className:"onb__notif",children:[f.jsxs("div",{children:[f.jsx("p",{className:"onb__notif-titre",children:C}),f.jsx("p",{className:"onb__notif-detail",children:H})]}),f.jsx("button",{className:`bascule${b[R]?" bascule--on":""}`,onClick:()=>_(R),role:"switch","aria-checked":b[R],"aria-label":C})]},R))})]})]}),f.jsxs("footer",{className:"onb__pied",children:[n>0&&f.jsx("button",{className:"onb__retour",onClick:()=>r(n-1),children:"Retour"}),f.jsx("button",{className:"onb__suivant",onClick:k,disabled:!A()||E,children:E?"Un instant…":n===au.length-1?`C'est parti, ${(t==null?void 0:t.displayName)||""}`.trim():"Continuer"})]})]})}function NA({depuis:t=kA(),nombre:e=60}={}){const[n,r]=x.useState([]),[i,s]=x.useState(!0),[o,a]=x.useState(null);return x.useEffect(()=>{const l=gA(Ym(et,tt.diffusions()),xM("debut",">=",t),_A("debut","asc"),yA(e));return sn(l,c=>{r(c.docs.map(h=>{var g,I;const p=h.data();return{id:h.id,...p,debutISO:p.debutISO||((I=(g=p.debut)==null?void 0:g.toDate)==null?void 0:I.call(g).toISOString())||null}})),s(!1)},c=>{a(c),s(!1)})},[t.getTime(),e]),{diffusions:n,chargement:i,erreur:o}}function kA(){const t=new Date;return t.setHours(0,0,0,0),t}function TL(t){const e=kA();return e.setDate(e.getDate()-t),e}function Fe(t,{libelleSucces:e="Mise à jour effectuée.",libelleErreur:n="Échec de la mise à jour, réessaie."}={}){const[r,i]=x.useState(!1),{notifier:s}=PA();return[x.useCallback(async(...a)=>{i(!0);try{const l=await t(...a),c=typeof e=="function"?e(l):e;return s(c,{type:"succes"}),l}catch(l){const c=typeof n=="function"?n(l):n;throw s(c,{type:"erreur"}),l}finally{i(!1)}},[t,e,n,s]),r]}const SL=30*60*1e3;function bA(t){var c;const[e,n]=x.useState([]),[r,i]=x.useState(!0);x.useEffect(()=>sn(At(et,tt.scoresDirect()),h=>{n(h.exists()?h.data().matchs||[]:[]),i(!1)},()=>i(!1)),[]);const s=x.useMemo(()=>e.filter(h=>!h.termine||!h.termineDetecteLe?!0:Date.now()-h.termineDetecteLe<SL),[e]),o=(c=t==null?void 0:t.clubFavori)==null?void 0:c.id,a=x.useMemo(()=>o?s.find(h=>(h.clubs||[]).includes(o)):null,[s,o]),l=x.useMemo(()=>s.filter(h=>h!==a),[s,a]);return{matchFavori:a,autresMatchs:l,aDesMatchsEnDirect:s.length>0,chargement:r}}function DA(t=1e3){const[e,n]=x.useState(()=>new Date);return x.useEffect(()=>{const r=setInterval(()=>n(new Date),t);return()=>clearInterval(r)},[t]),e}function _h(){const[t,e]=x.useState(!1);return x.useEffect(()=>sn(At(et,tt.config("debug")),n=>e(!!(n.exists()&&n.data().actif)),()=>e(!1)),[]),t}const AL=["cf","ac","as","sc","rc","ssc","afc","club","de","du","les","la","le"],CL={sg:"saintgermain",rennais:"rennes"},xL=new Set(["real","athletic","atletico","sporting","deportivo","racing","union"]);function up(t=""){return t.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[’'`]/g," ").replace(/[^a-z0-9]+/g," ").trim().split(" ").filter(e=>e&&!AL.includes(e)).map(e=>CL[e]||e)}function bE(t=""){return up(t).join("")||t.toLowerCase().replace(/[^a-z0-9]+/g,"")}function PL(t,e){const n=up(t),r=up(e),i=n.join(""),s=r.join("");if(!i||!s)return!1;if(i===s)return!0;const[o,a,l]=i.length<=s.length?[n,i,s]:[r,s,i];return!(a.length<4||!l.includes(a)||o.length===1&&xL.has(o[0]))}function RL(t,e){const n=bE(t),r=bE(e);return!!n&&n===r}function fg(t,e){return[t.nom,t.court].filter(Boolean).some(i=>PL(i,e))?!0:(t.alias||"").split(" ").filter(Boolean).some(i=>RL(i,e))}function NL(t,e){const n=[e==null?void 0:e.clubFavori,...(e==null?void 0:e.clubsSuivis)||[]].filter(Boolean);for(const r of n)if(fg(r,t))return r.id;return null}function DE(t,e){if(!t)return t;const n=(e||[]).find(r=>fg(r,t));return(n==null?void 0:n.court)||t}const Ei={CLUB_FAVORI:1,AFFICHE_CROISEE:2,CLUB_SUIVI:3},kL=105*60*1e3;function bL(t){var n;const e=new Set;(n=t==null?void 0:t.clubFavori)!=null&&n.id&&e.add(t.clubFavori.id);for(const r of(t==null?void 0:t.clubsSuivis)||[])r.id&&e.add(r.id);return e}function DL(t,e){var o;const n=bL(e),r=(t.clubs||[]).filter(a=>n.has(a));if(r.length===0)return null;const i=(o=e==null?void 0:e.clubFavori)==null?void 0:o.id;if(i&&r.includes(i))return{priorite:Ei.CLUB_FAVORI,motif:"Ton club"};if(r.length>=2)return{priorite:Ei.AFFICHE_CROISEE,motif:"Deux clubs que tu suis"};const s=((e==null?void 0:e.clubsSuivis)||[]).find(a=>a.id===r[0]);return{priorite:Ei.CLUB_SUIVI,motif:`Tu suis ${(s==null?void 0:s.court)||(s==null?void 0:s.nom)||"ce club"}`}}function VA(t,e,n){const r=[];for(const i of t){if(!i.debutISO)continue;const s=DL(i,e);if(!s)continue;const o=n?{domicile:DE(i.domicile,n),exterieur:DE(i.exterieur,n)}:{};r.push({...i,...o,...s})}return r.sort((i,s)=>{const o=Date.parse(i.debutISO),a=Date.parse(s.debutISO);return o!==a?o-a:i.priorite-s.priorite})}function VL(t){const e=[];for(let n=0;n<t.length;n++)for(let r=n+1;r<t.length;r++){const i=t[n],s=t[r];Math.abs(Date.parse(i.debutISO)-Date.parse(s.debutISO))<kL&&e.push([i,s])}return e}function $o(t,e=new Date){const n=new Date(t);return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function Vu(t){return new Date(t).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}function OA(t){return new Date(t).toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}function cp(t,e){const n=t.clubs||[];return e.find(r=>(r.clubs||[]).some(i=>n.includes(i)))||null}const OL={confirme:null,a_verifier:null,manquant:"Chaîne inconnue"};function MA({match:t,enCours:e=!1,matchLive:n,onCorriger:r}){const i=t.priorite===Ei.CLUB_FAVORI,s=t.priorite===Ei.AFFICHE_CROISEE,o=t.chaines||[],a=OL[t.statut],l=t.termine===!0&&t.scoreDomicile!=null&&t.scoreExterieur!=null,c=!l&&!!n&&(n.termine||n.minute!=null),h=l||c&&n.termine,p=l?t.scoreDomicile:(n==null?void 0:n.scoreDomicile)??0,g=l?t.scoreExterieur:(n==null?void 0:n.scoreExterieur)??0,I=l||c,S=!h&&!c&&e,N=c&&!n.termine||S,b=h?"Terminé":c?n.minute!=null?`● ${n.minute}'`:"● En cours":S?"● En cours":Vu(t.debutISO);return f.jsxs("article",{className:`match${i?" match--favori":""}${s?" match--croisee":""}${N?" match--en-cours":""}`,children:[f.jsxs("div",{className:"match__tete",children:[f.jsx("span",{className:"match__competition",children:t.competition||"Match"}),t.motif&&f.jsx("span",{className:`match__marque${s?" match__marque--croisee":""}`,children:t.motif})]}),f.jsxs("div",{className:"match__affiche",children:[f.jsx("span",{className:"match__equipe",children:t.domicile}),I?f.jsxs("span",{className:"match__score",children:[p," – ",g]}):f.jsx("span",{className:"match__separateur",children:"vs"}),f.jsx("span",{className:"match__equipe",children:t.exterieur})]}),f.jsxs("div",{className:"match__pied",children:[f.jsx("span",{className:`match__heure${h?" match__heure--termine":""}${N?" match__heure--en-cours":""}`,children:b}),o.length>0?o.map(T=>f.jsx("span",{className:`chaine${T.statut==="a_verifier"?" chaine--incertaine":""}`,children:T.nom},T.nom)):f.jsx("button",{className:"chaine chaine--absente",onClick:()=>r==null?void 0:r(t),children:"Ajouter la chaîne"}),a&&f.jsx("span",{className:"match__statut",children:a})]})]})}function LA({actu:t,onOuvrir:e}){const[n,r]=x.useState(!1),i=!!t.image&&!n,s=t.publieLeISO?new Date(t.publieLeISO).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}):"";return f.jsxs("button",{className:`actu${i?" actu--image":""}`,onClick:()=>e==null?void 0:e(t),children:[f.jsx("span",{className:"actu__date",children:s}),f.jsxs("div",{className:"actu__corps",children:[t.categorie&&f.jsx("span",{className:`actu__categorie${t.importante?" actu__categorie--chaude":""}`,children:t.categorie}),f.jsx("h3",{className:"actu__titre",children:t.titre})]}),i&&f.jsx("img",{className:"actu__image",src:t.image,alt:"",loading:"lazy",onError:()=>r(!0)})]})}function pg({ouvert:t,message:e,texteConfirmer:n="Confirmer",texteAnnuler:r="Annuler",onConfirm:i,onCancel:s}){return x.useEffect(()=>{if(!t)return;const o=a=>{a.key==="Escape"&&(s==null||s())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t,s]),t?f.jsx("div",{className:"modale",id:"confirmModal",role:"dialog","aria-modal":"true",onClick:s,children:f.jsxs("div",{className:"modale__boite",onClick:o=>o.stopPropagation(),children:[f.jsx("div",{className:"modale__message",children:e}),f.jsxs("div",{className:"modale__actions",children:[f.jsx("button",{className:"modale__bouton modale__bouton--annuler",onClick:s,children:r}),f.jsx("button",{className:"modale__bouton modale__bouton--confirmer",onClick:i,children:n})]})]})}):null}function hp(t){return t.termine||t.minute!=null}function ML({matchFavori:t,autresMatchs:e}){if(!t&&e.length===0)return null;const n=t&&hp(t),r=e.filter(hp);let i,s;return n?(i=[t],s=r):r.length>0?(i=r,s=[]):(i=t?[t]:e,s=[]),f.jsxs("div",{className:"direct",children:[i.map(o=>f.jsx(LL,{match:o},o.idBrut)),s.length>0&&f.jsx("div",{className:"direct__secondaires",children:s.map(o=>f.jsx(jL,{match:o},o.idBrut))})]})}function LL({match:t}){const e=hp(t);return f.jsxs("div",{className:`direct__favori${t.termine?" direct__favori--termine":""}${e?"":" direct__favori--a-venir"}`,children:[f.jsx("span",{className:"direct__puce","aria-hidden":"true",children:t.termine?"TERMINÉ":e?"● DIRECT":"À VENIR"}),f.jsxs("div",{className:"direct__affiche",children:[f.jsx("span",{className:"direct__equipe",children:t.domicile}),f.jsxs("span",{className:"direct__score",children:[t.scoreDomicile??0," – ",t.scoreExterieur??0]}),f.jsx("span",{className:"direct__equipe",children:t.exterieur})]}),t.minute!=null&&f.jsxs("span",{className:"direct__minute",children:[t.minute,"'"]})]})}function jL({match:t}){return f.jsxs("div",{className:`direct__ligne${t.termine?" direct__ligne--termine":""}`,children:[f.jsx("span",{className:`direct__puce direct__puce--petite${t.termine?" direct__puce--petite-termine":""}`,"aria-hidden":"true",children:"●"}),f.jsxs("span",{className:"direct__ligne-texte",children:[t.domicile," ",t.scoreDomicile??0," – ",t.scoreExterieur??0," ",t.exterieur]}),f.jsx("span",{className:"direct__ligne-minute",children:t.termine?"Fin":`${t.minute}'`})]})}function mg({titre:t="Zone de test",actions:e}){return f.jsxs("div",{className:"panneau-test",children:[f.jsxs("p",{className:"panneau-test__titre",children:["🧪 ",t]}),f.jsx("div",{className:"panneau-test__boutons",children:e.map(({libelle:n,onClick:r,enCours:i,efface:s})=>f.jsx("button",{className:`panneau-test__bouton${s?" panneau-test__bouton--efface":""}`,onClick:r,disabled:i,children:n},n))})]})}function FL({onOuvrirArticle:t}){const{preferences:e}=Jr(),{diffusions:n,chargement:r}=NA(),{actus:i,chargement:s}=dg(),{matchFavori:o,autresMatchs:a,aDesMatchsEnDirect:l}=bA(e),c=_h(),[h,p]=x.useState(null),[g,I]=x.useState(""),[S,N]=x.useState([]),[b,T]=x.useState(1),[E,w]=x.useState(!1),[D,L]=x.useState(!1);x.useEffect(()=>{gh().then(N)},[]);const j=DA(3e4),v=x.useMemo(()=>VA(n,e,S),[n,e,S]),_=x.useMemo(()=>v.filter(Y=>$o(Y.debutISO)),[v]),A=x.useMemo(()=>i.filter(Y=>Y.publieLeISO&&$o(Y.publieLeISO)),[i]),P=x.useMemo(()=>i.filter(Y=>Y.publieLeISO&&$o(Y.publieLeISO,new Date(Date.now()-24*60*60*1e3))),[i]),k=b===2?P:A,R=x.useMemo(()=>{const Y=new Set;for(const je of[o,...a].filter(Boolean))if(!(!je.termine&&je.minute==null))for(const rr of je.clubs||[])Y.add(rr);return Y},[o,a]),C=x.useMemo(()=>[o,...a].filter(Boolean),[o,a]),H=2*60*60*1e3+45*60*1e3,oe=Y=>{if(Y.termine)return"termine";if((Y.clubs||[]).some(rr=>R.has(rr)))return"en_cours";const je=Date.parse(Y.debutISO);return!Number.isFinite(je)||je>j.getTime()?"a_venir":j.getTime()-je<H?"en_cours":"termine"},_e=x.useMemo(()=>_.filter(Y=>{const je=oe(Y);return je==="termine"?!1:je==="en_cours"?Y.priorite===Ei.CLUB_FAVORI:!0}),[_,j,R]),Ee=x.useMemo(()=>v.find(Y=>Date.parse(Y.debutISO)>j.getTime()),[v,j]),z=x.useMemo(()=>Ee&&v.find(Y=>Y.priorite===Ei.CLUB_FAVORI&&Date.parse(Y.debutISO)>j.getTime()&&$o(Y.debutISO,new Date(Ee.debutISO)))||null,[v,j,Ee]),$=x.useMemo(()=>VL(_e),[_e]),Z=z||Ee||_e[0],ne=Z&&!cp(Z,C)?Z:null,de=x.useMemo(()=>_e.filter(Y=>Y.id!==(ne==null?void 0:ne.id)),[_e,ne]),Se=Y=>{if(!Y)return null;const je=S.find(rr=>fg(rr,Y));return je!=null&&je.logo?`/Ton-paris/${je.logo.replace(/^\//,"")}`:null},Pt=x.useMemo(()=>!ne||S.length===0?null:Se(ne.domicile),[ne,S]),Rt=x.useMemo(()=>!ne||S.length===0?null:Se(ne.exterieur),[ne,S]);x.useEffect(()=>{w(!1)},[Pt]),x.useEffect(()=>{L(!1)},[Rt]);const[on]=Fe(()=>Ge(We,"corrigerChaine")({matchId:h.id,chaine:g.trim()}),{libelleSucces:"Chaîne enregistrée.",libelleErreur:"Échec de l'enregistrement de la chaîne."}),an=async()=>{if(!(!h||!g.trim()))try{await on()}catch{}finally{p(null),I("")}},[Eh,ml]=Fe(()=>Ge(We,"rafraichirMaxifootNews")(),{libelleSucces:"Actu à jour.",libelleErreur:"Échec de la mise à jour de l'actu."}),vn=Y=>Ge(We,"injecterScoreTest")({scenario:Y}),[Gi,uo]=Fe(()=>vn("favori"),{libelleSucces:'Scénario "club favori en direct" injecté.',libelleErreur:"Échec de l'injection."}),[co,ho]=Fe(()=>vn("autre"),{libelleSucces:'Scénario "autre club suivi" injecté.',libelleErreur:"Échec de l'injection."}),[fo,gl]=Fe(()=>vn("les_deux"),{libelleSucces:'Scénario "les deux à la fois" injecté.',libelleErreur:"Échec de l'injection."}),[wh,Ih]=Fe(()=>vn("termine"),{libelleSucces:'Scénario "match terminé" injecté.',libelleErreur:"Échec de l'injection."}),[_l,po]=Fe(()=>Ge(We,"effacerScoreTest")(),{libelleSucces:"Scores de test effacés.",libelleErreur:"Échec de l'effacement."}),[yl,Th]=Fe(()=>vn("reel"),{libelleSucces:Y=>`Scrapé : ${Y.match}${Y.enCours?" (en direct)":""}`,libelleErreur:Y=>(Y==null?void 0:Y.message)||"Échec du scraping réel."});return f.jsxs(f.Fragment,{children:[c&&f.jsx("div",{style:{padding:"18px 18px 0"},children:f.jsx(mg,{titre:"Scores live de test",actions:[{libelle:"Favori en direct",onClick:()=>Gi().catch(()=>{}),enCours:uo},{libelle:"Autre club en direct",onClick:()=>co().catch(()=>{}),enCours:ho},{libelle:"Les deux",onClick:()=>fo().catch(()=>{}),enCours:gl},{libelle:"Match terminé",onClick:()=>wh().catch(()=>{}),enCours:Ih},{libelle:"Scraper un match réel",onClick:()=>yl().catch(()=>{}),enCours:Th},{libelle:"Effacer",onClick:()=>_l().catch(()=>{}),enCours:po,efface:!0}]})}),l&&f.jsx(ML,{matchFavori:o,autresMatchs:a}),ne&&f.jsxs("section",{className:"une",children:[f.jsxs("div",{className:"une__logos",children:[Pt&&!E&&f.jsx("img",{className:"une__logo",src:Pt,alt:"","aria-hidden":"true",loading:"eager",onError:()=>w(!0)}),Pt&&!E&&Rt&&!D&&f.jsx("span",{className:"une__vs","aria-hidden":"true",children:"VS"}),Rt&&!D&&f.jsx("img",{className:"une__logo",src:Rt,alt:"","aria-hidden":"true",loading:"eager",onError:()=>L(!0)})]}),f.jsxs("div",{className:"une__contenu",children:[f.jsxs("h2",{className:"une__titre",children:[ne.domicile," ",f.jsx("em",{children:"reçoit"})," ",ne.exterieur]}),f.jsxs("p",{className:"une__details",children:[f.jsx("span",{className:"une__heure",children:Vu(ne.debutISO)}),[ne.competition,$o(ne.debutISO)?null:OA(ne.debutISO)].filter(Boolean).join(" · "),(ne.chaines||[]).map(Y=>f.jsx("span",{className:`une__chaine${ne.statut==="a_verifier"?" une__chaine--incertaine":""}`,children:Y.nom},Y.nom))]})]})]}),(r||de.length>0||$.length>0)&&f.jsxs("section",{className:"section",children:[f.jsxs("div",{className:"section__tete",children:[f.jsx("h2",{className:"section__titre",children:"Aujourd'hui"}),f.jsx(Hc,{className:"section__lien",to:"/matchs",children:"Tout le calendrier"})]}),r&&f.jsx("p",{className:"attente",children:"Chargement du programme…"}),$.length>0&&f.jsx("div",{className:"croise",children:f.jsxs("p",{children:[f.jsx("strong",{children:"Deux affiches en même temps."})," ",$[0][0].domicile," – ",$[0][0].exterieur," à"," ",Vu($[0][0].debutISO),", ",$[0][1].domicile," –"," ",$[0][1].exterieur," à ",Vu($[0][1].debutISO),"."]})}),de.map(Y=>f.jsx(MA,{match:Y,enCours:oe(Y)==="en_cours",matchLive:cp(Y,C),onCorriger:je=>{p(je),I("")}},Y.id))]}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Actu PSG"})}),!s&&P.length>0&&f.jsxs("div",{className:"onglets actu-onglets",children:[f.jsx("button",{type:"button",className:`onglets__item${b===1?" onglets__item--actif":""}`,onClick:()=>T(1),children:"Aujourd'hui"}),f.jsx("button",{type:"button",className:`onglets__item${b===2?" onglets__item--actif":""}`,onClick:()=>T(2),children:"Hier"})]}),s&&f.jsx("p",{className:"attente",children:"Chargement de l'actu…"}),!s&&k.length===0&&f.jsx("p",{className:"attente",children:b===2?"Rien hier.":"Rien de neuf pour l'instant."}),k.slice(0,12).map(Y=>f.jsx(LA,{actu:Y,onOuvrir:t},Y.id)),!s&&b===1&&f.jsx("button",{className:"rafraichir",onClick:()=>Eh().catch(()=>{}),disabled:ml,children:ml?"Mise à jour en cours…":"Rafraîchir l'actu"})]}),f.jsx(pg,{ouvert:!!h,message:f.jsxs(f.Fragment,{children:[f.jsxs("span",{className:"correction__intro",children:["Sur quelle chaîne passe ",h==null?void 0:h.domicile," – ",h==null?void 0:h.exterieur," ?"]}),f.jsx("input",{className:"correction__saisie",type:"text",value:g,onChange:Y=>I(Y.target.value),placeholder:"Ligue 1+, Canal+, DAZN…",autoFocus:!0})]}),texteConfirmer:"Enregistrer",onConfirm:an,onCancel:()=>{p(null),I("")}})]})}const UL=["dim","lun","mar","mer","jeu","ven","sam"];function lu(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function BL({jourSelectionne:t,onSelectionner:e,nbJoursApres:n=4}){const r=new Date;r.setHours(0,0,0,0);const i=[],s=new Date(r);s.setDate(s.getDate()-1),i.push({cle:lu(s),libelle:"Hier"}),i.push({cle:lu(r),libelle:"Aujourd'hui"});const o=new Date(r);o.setDate(o.getDate()+1),i.push({cle:lu(o),libelle:"Demain"});for(let a=2;a<=n+1;a++){const l=new Date(r);l.setDate(l.getDate()+a),i.push({cle:lu(l),libelle:`${UL[l.getDay()]} ${l.getDate()}`})}return f.jsx("div",{className:"nav-dates",role:"tablist","aria-label":"Choisir un jour",children:i.map(a=>f.jsx("button",{role:"tab","aria-selected":t===a.cle,className:`nav-dates__item${t===a.cle?" nav-dates__item--actif":""}`,onClick:()=>e(a.cle),children:a.libelle},a.cle))})}const $L=4;function jA(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function zL(t){return jA(new Date(t))}function qL(){return jA(new Date)}function KL(){const{preferences:t}=Jr(),{diffusions:e,chargement:n}=NA({depuis:TL(1),nombre:200}),{matchFavori:r,autresMatchs:i}=bA(t),[s,o]=x.useState(qL()),[a,l]=x.useState(null),[c,h]=x.useState(""),[p,g]=x.useState([]);x.useEffect(()=>{gh().then(g)},[]);const I=x.useMemo(()=>[r,...i].filter(Boolean),[r,i]),S=x.useMemo(()=>VA(e,t,p),[e,t,p]),N=x.useMemo(()=>S.filter(L=>zL(L.debutISO)===s),[S,s]),b=N[0]?OA(N[0].debutISO):null,[T,E]=Fe(()=>Ge(We,"rafraichirDiffusions")(),{libelleSucces:"Chaînes à jour.",libelleErreur:"Échec de la mise à jour des chaînes."}),[w]=Fe(()=>Ge(We,"corrigerChaine")({matchId:a.id,chaine:c.trim()}),{libelleSucces:"Chaîne enregistrée.",libelleErreur:"Échec de l'enregistrement de la chaîne."}),D=async()=>{if(!(!a||!c.trim()))try{await w()}catch{}finally{l(null),h("")}};return f.jsxs("section",{className:"section",children:[f.jsx(BL,{jourSelectionne:s,onSelectionner:o,nbJoursApres:$L}),n&&f.jsx("p",{className:"attente",children:"Chargement du calendrier…"}),!n&&N.length===0&&f.jsxs("div",{className:"vide",children:[f.jsx("p",{className:"vide__titre",children:"Rien de programmé"}),f.jsx("p",{className:"vide__texte",children:"Aucun match programmé ce jour-là."})]}),N.length>0&&f.jsxs("div",{className:"jour",children:[b&&f.jsx("h2",{className:"jour__titre",children:b}),N.map(L=>f.jsx(MA,{match:L,matchLive:cp(L,I),onCorriger:j=>{l(j),h("")}},L.id))]}),!n&&f.jsx("button",{className:"rafraichir",onClick:()=>T().catch(()=>{}),disabled:E,children:E?"Mise à jour en cours…":"Mettre à jour les chaînes"}),f.jsx(pg,{ouvert:!!a,message:f.jsxs(f.Fragment,{children:[f.jsxs("span",{className:"correction__intro",children:["Sur quelle chaîne passe ",a==null?void 0:a.domicile," – ",a==null?void 0:a.exterieur," ?"]}),f.jsx("input",{className:"correction__saisie",type:"text",value:c,onChange:L=>h(L.target.value),placeholder:"Ligue 1+, Canal+, DAZN…",autoFocus:!0})]}),texteConfirmer:"Enregistrer",onConfirm:D,onCancel:()=>{l(null),h("")}})]})}const VE="psg";function GL(){const[t,e]=x.useState(null),[n,r]=x.useState(null),[i,s]=x.useState(!0),[o,a]=x.useState(!0);x.useEffect(()=>sn(At(et,tt.compoProbable(VE)),g=>{e(g.exists()?g.data():null),s(!1)},()=>s(!1)),[]),x.useEffect(()=>sn(At(et,tt.compoOfficielle(VE)),g=>{r(g.exists()?g.data():null),a(!1)},()=>a(!1)),[]);const l=i||o,c=(n==null?void 0:n.titreBreve)&&(t==null?void 0:t.titreBreve)&&n.titreBreve.toLowerCase().replace(/\s*probables?\s*$/,"").trim()===t.titreBreve.toLowerCase().replace(/\s*probables?\s*$/,"").trim(),h=n&&(c||!t)?n:t;return{compo:h,estOfficielle:h===n&&!!n,probable:t,officielle:n,chargement:l}}function WL(t=""){return t.normalize("NFD").replace(/[̀-ͯ]/g,"")}function dp(t=""){return WL(t).toLowerCase()}function HL(t,e){const n=dp((e==null?void 0:e.nom)||"");return n.length<3?!1:dp([t.titre,t.resume,t.corps].filter(Boolean).join(" ")).includes(n)}function QL(t,e){return e?t.filter(n=>HL(n,e)):[]}function wi(t){return(t==null?void 0:t.id)||(t==null?void 0:t.nom)||null}function FA(t,e){return e&&(t||[]).find(n=>wi(n)===e)||null}function gg(t){return t?`/Ton-paris/${t.replace(/^\//,"")}`:null}function OE(t=""){return dp(t).replace(/[’'`.-]/g," ").replace(/[^a-z0-9 ]+/g," ").trim().split(/\s+/).filter(Boolean)}function ME(t,e){const n=OE(t),r=OE(e);if(n.length===0||r.length===0)return!1;const i=n[n.length-1],s=r[r.length-1];if(i!==s)return!1;const o=n.length>1?n[0]:null,a=r.length>1?r[0]:null;if(!o||!a)return!0;const[l,c]=o.length<=a.length?[o,a]:[a,o];return c.startsWith(l)}function JL(t,e){if(!e)return t||[];const n=Object.values(e);return(t||[]).map(r=>{var s;const i=n.find(o=>ME(r.nom,o==null?void 0:o.nom)||r.nomComplet&&ME(r.nomComplet,o==null?void 0:o.nom));return i?{...r,photoListe:i.photoListe||r.photoListe||null,photoHero:i.photoHero||r.photoHero||null,numeroMaillot:r.numeroMaillot??i.numeroMaillot??null,nomComplet:i.nomComplet||r.nomComplet||null,dateNaissance:i.dateNaissance||r.dateNaissance||null,lieuNaissance:i.lieuNaissance||r.lieuNaissance||null,pied:i.pied||r.pied||null,taille:i.taille||r.taille||null,poids:i.poids||r.poids||null,distinctions:(s=i.distinctions)!=null&&s.length?i.distinctions:r.distinctions||[]}:r})}const LE="psg";function _g(){const[t,e]=x.useState(null),[n,r]=x.useState(null),[i,s]=x.useState(!0),[o,a]=x.useState(!0);return x.useEffect(()=>sn(At(et,tt.effectif(LE)),c=>{e(c.exists()?c.data():null),s(!1)},()=>s(!1)),[]),x.useEffect(()=>sn(At(et,tt.photosEffectif(LE)),c=>{r(c.exists()&&c.data().joueurs||null),a(!1)},()=>a(!1)),[]),{effectif:x.useMemo(()=>t&&{...t,joueurs:JL(t.joueurs,n)},[t,n]),chargement:i||o}}function YL(t){const e=[t.taille,t.poids].filter(Boolean).join(" / ");return[{cle:"Nom complet",valeur:t.nomComplet},{cle:"Date de naissance",valeur:t.dateNaissance},{cle:"Lieu de naissance",valeur:t.lieuNaissance},{cle:"Profil",valeur:e||null},{cle:"Pied",valeur:t.pied},{cle:"Nationalité",valeur:t.nationalite}].filter(n=>n.valeur)}function UA({joueur:t,onFermer:e}){const[n,r]=x.useState(!1);if(x.useEffect(()=>{if(!t)return;r(!1);const I=S=>{S.key==="Escape"&&(e==null||e())};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[t,e]),!t)return null;const i=t.matchsJoues??0,s=t.titularisations??0,o=t.buts??0,a=t.minutesJouees??0,l=t.cartonsJaunes??0,c=t.cartonsRouges??0,h=t.photoHero?gg(t.photoHero):null,p=h&&!n,g=YL(t);return f.jsx("div",{className:"fiche-modale",role:"dialog","aria-modal":"true",onClick:e,children:f.jsxs("div",{className:"fiche-modale__boite",onClick:I=>I.stopPropagation(),children:[f.jsx("button",{className:"fiche-modale__fermer",onClick:e,"aria-label":"Fermer",children:"×"}),f.jsxs("div",{className:"fiche-modale__hero",children:[t.numeroMaillot!=null&&f.jsx("span",{className:"fiche-modale__numero-geant","aria-hidden":"true",children:t.numeroMaillot}),p?f.jsx("img",{className:"fiche-modale__photo",src:h,alt:"",loading:"eager",onError:()=>r(!0)}):f.jsx("div",{className:"fiche-modale__photo fiche-modale__photo--vide","aria-hidden":"true",children:(t.nom||"?").charAt(0).toUpperCase()}),f.jsxs("div",{className:"fiche-modale__entete",children:[t.poste&&f.jsx("p",{className:"fiche-modale__poste",children:t.poste}),f.jsx("h3",{className:"fiche-modale__nom",children:t.nomComplet||t.nom})]})]}),g.length>0&&f.jsx("dl",{className:"fiche-modale__bio",children:g.map(({cle:I,valeur:S})=>f.jsxs("div",{className:"fiche-modale__bio-champ",children:[f.jsx("dt",{className:"eyebrow",children:I}),f.jsx("dd",{children:S})]},I))}),f.jsxs("div",{className:"fiche-modale__stats",children:[f.jsxs("div",{className:"fiche-modale__stat",children:[f.jsx("span",{className:"fiche-modale__stat-valeur",children:i}),f.jsxs("span",{className:"fiche-modale__stat-cle",children:["Match",i>1?"s":""]})]}),f.jsxs("div",{className:"fiche-modale__stat",children:[f.jsx("span",{className:"fiche-modale__stat-valeur",children:s}),f.jsx("span",{className:"fiche-modale__stat-cle",children:"Titu."})]}),f.jsxs("div",{className:"fiche-modale__stat",children:[f.jsx("span",{className:"fiche-modale__stat-valeur",children:o}),f.jsxs("span",{className:"fiche-modale__stat-cle",children:["But",o>1?"s":""]})]}),f.jsxs("div",{className:"fiche-modale__stat",children:[f.jsxs("span",{className:"fiche-modale__stat-valeur",children:[a,"'"]}),f.jsx("span",{className:"fiche-modale__stat-cle",children:"Minutes"})]})]}),(l>0||c>0)&&f.jsxs("div",{className:"fiche-modale__discipline",children:[l>0&&f.jsxs("span",{className:"fiche-modale__carton fiche-modale__carton--jaune",children:[l," carton",l>1?"s":""," jaune",l>1?"s":""]}),c>0&&f.jsxs("span",{className:"fiche-modale__carton fiche-modale__carton--rouge",children:[c," carton",c>1?"s":""," rouge",c>1?"s":""]})]})]})})}function XL(){const{compo:t,estOfficielle:e,chargement:n}=GL(),{effectif:r}=_g(),i=_h(),[s,o]=x.useState(null),[a,l]=x.useState({}),[c,h]=Fe(()=>Ge(We,"rafraichirCompoPsg")(),{libelleSucces:w=>{var D,L,j,v;return(L=(D=w==null?void 0:w.data)==null?void 0:D.probable)!=null&&L.nouvelle||(v=(j=w==null?void 0:w.data)==null?void 0:j.officielle)!=null&&v.nouvelle?"Nouvelle compo trouvée.":"Rien de neuf pour le moment."},libelleErreur:"Échec de la vérification de la compo."}),[p,g]=Fe(()=>Ge(We,"injecterCompoTest")({officielle:!1}),{libelleSucces:"Compo probable de test injectée.",libelleErreur:"Échec de l'injection."}),[I,S]=Fe(()=>Ge(We,"injecterCompoTest")({officielle:!0}),{libelleSucces:"Compo officielle de test injectée.",libelleErreur:"Échec de l'injection."}),[N,b]=Fe(()=>Ge(We,"effacerCompoTest")(),{libelleSucces:"Compo(s) de test effacée(s).",libelleErreur:"Échec de l'effacement."}),T=i&&f.jsx(mg,{titre:"Compo de test",actions:[{libelle:"Injecter probable",onClick:()=>p().catch(()=>{}),enCours:g},{libelle:"Injecter officielle",onClick:()=>I().catch(()=>{}),enCours:S},{libelle:"Effacer",onClick:()=>N().catch(()=>{}),enCours:b,efface:!0}]}),E=w=>{const D=(r==null?void 0:r.joueurs)||[],L=w.joueurId&&D.find(j=>j.id===w.joueurId)||D.find(j=>j.nom===w.nom);o(L||{nom:w.nom,poste:w.posteEffectif||w.ligne,photo:w.photo||null,numeroMaillot:w.numeroMaillot??null})};return n?f.jsx("p",{className:"attente attente--marge",children:"Chargement de la compo…"}):!t||(t.titulaires||[]).length===0?f.jsxs("section",{className:"vide",children:[f.jsx("p",{className:"vide__titre",children:"Compo probable"}),f.jsx("p",{className:"vide__texte",children:"Pas encore de compo probable annoncée pour le prochain match."}),f.jsx("button",{className:"rafraichir",onClick:()=>c().catch(()=>{}),disabled:h,style:{marginTop:16},children:h?"Recherche en cours…":"Vérifier maintenant"}),T]}):f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Compo ",f.jsx("em",{children:e?"officielle":"probable"})]})}),!e&&f.jsx("p",{className:"compo__etiquette compo__etiquette--probable",children:"Pas encore confirmée — l'officielle sort en général vers l'heure qui précède le match."}),t.titreBreve&&f.jsx("p",{className:"compo__source",children:t.titreBreve}),f.jsxs("div",{className:"terrain",children:[f.jsxs("div",{className:"terrain__pelouse","aria-hidden":"true",children:[f.jsx("div",{className:"terrain__ligne-mediane"}),f.jsx("div",{className:"terrain__rond-central"}),f.jsx("div",{className:"terrain__surface terrain__surface--bas"}),f.jsx("div",{className:"terrain__surface terrain__surface--haut"})]}),t.titulaires.map(w=>{const D=w.joueurId||w.nom,L=w.photo&&!a[D];return f.jsxs("button",{className:"terrain__joueur",style:{left:`${w.x}%`,top:`${w.y}%`},onClick:()=>E(w),children:[L?f.jsx("img",{className:"terrain__pastille terrain__pastille--photo",src:w.photo,alt:"",loading:"eager",onError:()=>l(j=>({...j,[D]:!0}))}):f.jsx("span",{className:"terrain__pastille",children:ZL(w.nom)}),f.jsx("span",{className:"terrain__nom",children:e2(w.nom)})]},w.nom)})]}),t.banc&&t.banc.length>0&&f.jsxs("div",{className:"banc",children:[f.jsx("h3",{className:"banc__titre",children:"Remplaçants"}),f.jsx("ul",{className:"banc__liste",children:t.banc.map(w=>f.jsx("li",{className:"banc__joueur",children:f.jsx("button",{className:"banc__bouton",onClick:()=>E({nom:w}),children:w})},w))})]}),f.jsx("button",{className:"rafraichir",onClick:()=>c().catch(()=>{}),disabled:h,children:h?"Mise à jour en cours…":e?"Vérifier une mise à jour":"Vérifier si l'officielle est sortie"}),T,f.jsx(UA,{joueur:s,onFermer:()=>o(null)})]})}function ZL(t){const e=t.split(/[\s-]+/).filter(Boolean);return e.length===1?e[0].slice(0,3).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}function e2(t){const e=t.split(/[\s-]+/).filter(Boolean);return e[e.length-1]}function t2(t){const[e,n]=x.useState([]),[r,i]=x.useState([]),[s,o]=x.useState(!0);return x.useEffect(()=>sn(Ym(et,tt.classements()),l=>{n(l.docs.map(c=>({id:c.id,...c.data()}))),o(!1)},()=>o(!1)),[]),x.useEffect(()=>{mh(At(et,tt.config("clubs"))).then(l=>{i(l.exists()?l.data().liste||[]:[])})},[]),{classements:x.useMemo(()=>{const l=t==null?void 0:t.clubFavori,c=(t==null?void 0:t.clubsSuivis)||[],h=l==null?void 0:l.championnat,p=new Set([h,...c.map(I=>I.championnat),"ligue-des-champions"].filter(Boolean)),g=new Map(e.map(I=>[I.id,I]));return[...p].map(I=>g.get(I)||r2(I,r))},[e,r,t]),chargement:s}}const n2={"ligue-1":"Ligue 1",liga:"Liga","serie-a":"Serie A",bundesliga:"Bundesliga","premier-league":"Premier League","ligue-des-champions":"Ligue des Champions"};function r2(t,e){const n=e.filter(r=>r.championnat===t).sort((r,i)=>r.nom.localeCompare(i.nom));return{id:t,libelle:n2[t]||t,saisonDemarree:!1,saison:null,saisonPrecedente:!1,journee:null,groupes:[{libelle:null,lignes:n.map((r,i)=>({position:i+1,equipe:r.court||r.nom,nomComplet:r.nom,joues:0,gagnes:0,nuls:0,perdus:0,marques:0,encaisses:0,difference:0,points:0,forme:null}))}]}}function i2(){var c;const{preferences:t}=Jr(),{classements:e,chargement:n}=t2(t),[r,i]=x.useState(null),[s,o]=Fe(()=>Ge(We,"rafraichirClassements")(),{libelleSucces:"Classement à jour.",libelleErreur:"Échec de la mise à jour du classement."});x.useEffect(()=>{!r&&e.length>0&&i(e[0].id)},[e,r]);const a=x.useMemo(()=>e.find(h=>h.id===r)||e[0]||null,[e,r]),l=(c=t==null?void 0:t.clubFavori)==null?void 0:c.id;return n?f.jsx("p",{className:"attente attente--marge",children:"Chargement des classements…"}):e.length===0?f.jsxs("section",{className:"vide",children:[f.jsx("p",{className:"vide__titre",children:"Classement"}),f.jsx("p",{className:"vide__texte",children:"Choisis un club favori pour voir son classement."})]}):f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"filtres",children:e.map(h=>f.jsx("button",{className:`filtres__item${(a==null?void 0:a.id)===h.id?" filtres__item--actif":""}`,onClick:()=>i(h.id),children:h.libelle},h.id))}),(a==null?void 0:a.saisonDemarree)===!1&&f.jsx("p",{className:"classement__journee",children:"Saison pas encore commencée — classement à titre indicatif"}),(a==null?void 0:a.saisonPrecedente)&&f.jsxs("p",{className:"classement__journee classement__journee--alerte",children:["Saison ",a.saison," (précédente) — la nouvelle saison n'a pas encore de classement chez la source"]}),!(a!=null&&a.saisonPrecedente)&&(a==null?void 0:a.saisonDemarree)!==!1&&(a==null?void 0:a.journee)!=null&&f.jsxs("p",{className:"classement__journee",children:["Journée ",a.journee]}),((a==null?void 0:a.groupes)||[]).map((h,p)=>f.jsxs("div",{className:"classement__groupe",children:[h.libelle&&f.jsx("h3",{className:"classement__titre-groupe",children:h.libelle}),f.jsxs("table",{className:"classement",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",className:"classement__rang"}),f.jsx("th",{scope:"col",className:"classement__club",children:"Club"}),f.jsx("th",{scope:"col",children:"J"}),f.jsx("th",{scope:"col",children:"Diff"}),f.jsx("th",{scope:"col",children:"Pts"})]})}),f.jsx("tbody",{children:h.lignes.map(g=>{const I=NL(g.nomComplet||g.equipe,t),S=!!I,N=I===l;return f.jsxs("tr",{className:N?"classement__ligne--favori":S?"classement__ligne--suivi":"",children:[f.jsx("td",{className:"classement__rang",children:g.position}),f.jsx("td",{className:"classement__club",children:g.equipe}),f.jsx("td",{children:g.joues}),f.jsx("td",{children:g.difference>0?`+${g.difference}`:g.difference}),f.jsx("td",{className:"classement__points",children:g.points})]},`${g.position}-${g.equipe}`)})})]})]},h.libelle||p)),f.jsx("button",{className:"rafraichir",onClick:()=>s().catch(()=>{}),disabled:o,children:o?"Mise à jour en cours…":"Mettre à jour le classement"})]})}const s2=["Gardien","Défenseur","Milieu","Attaquant"],o2=[{poste:null,libelle:"Tous"},{poste:"Gardien",libelle:"Gardiens de but"},{poste:"Défenseur",libelle:"Défenseurs"},{poste:"Milieu",libelle:"Milieux de terrain"},{poste:"Attaquant",libelle:"Attaquants"}];function a2({joueur:t,chouchou:e,onOuvrir:n,onChoisirChouchou:r}){const[i,s]=x.useState(!1),o=t.photoListe?gg(t.photoListe):null,a=o&&!i;return f.jsxs("li",{className:"effectif-carte",children:[f.jsx("button",{type:"button",className:`effectif-carte__etoile${e?" effectif-carte__etoile--actif":""}`,onClick:()=>r(t),"aria-label":e?"Ton chouchou":"Choisir comme chouchou","aria-pressed":e,children:e?"★":"☆"}),f.jsxs("button",{type:"button",className:"effectif-carte__ouvrir",onClick:()=>n(t),children:[f.jsxs("div",{className:"effectif-carte__visuel",children:[t.numeroMaillot!=null&&f.jsx("span",{className:"effectif-carte__numero","aria-hidden":"true",children:t.numeroMaillot}),a?f.jsx("img",{className:"effectif-carte__photo",src:o,alt:"",loading:"lazy",onError:()=>s(!0)}):f.jsx("div",{className:"effectif-carte__photo effectif-carte__photo--vide","aria-hidden":"true",children:(t.nom||"?").charAt(0).toUpperCase()})]}),f.jsx("p",{className:"effectif-carte__nom",children:t.nom}),t.poste&&f.jsx("p",{className:"effectif-carte__poste",children:t.poste})]})]})}function l2(){const{effectif:t,chargement:e}=_g(),{preferences:n,enregistrer:r}=Jr(),i=_h(),s=Gc(),[o,a]=x.useState(null),[l,c]=x.useState(null),[h,p]=x.useState(null),[g,I]=Fe(()=>Ge(We,"rafraichirEffectifPsg")(),{libelleSucces:"Effectif à jour.",libelleErreur:v=>(v==null?void 0:v.message)||"Le rafraîchissement a échoué."}),[S]=Fe(async v=>{const _=wi(v);return await r({joueurChouchouId:_}),v},{libelleSucces:v=>`★ ${v.nom} est maintenant ton chouchou.`,libelleErreur:"Impossible de définir ce chouchou pour le moment, réessaie."}),[N,b]=Fe(async()=>{const v=await Ge(We,"diagnosticEffectif")();return c(v.data),v.data},{libelleSucces:"Diagnostic terminé.",libelleErreur:"Échec du diagnostic."}),T=()=>N().catch(v=>c({ok:!1,erreur:v.message})),E=v=>v.photoListe||v.numeroMaillot!=null,w=x.useMemo(()=>{const v=((t==null?void 0:t.joueurs)||[]).filter(E),_=A=>Math.max(0,s2.indexOf(A));return[...v].sort((A,P)=>{const k=_(A.poste)-_(P.poste);return k!==0?k:(A.numeroMaillot??999)-(P.numeroMaillot??999)})},[t]),D=x.useMemo(()=>h?w.filter(v=>v.poste===h):w,[w,h]),L=x.useMemo(()=>FA(t==null?void 0:t.joueurs,n==null?void 0:n.joueurChouchouId),[t,n]),j=v=>{S(v).then(()=>s("/chouchou")).catch(_=>console.error("[Chouchou] échec enregistrement",_))};return e?f.jsx("p",{className:"attente attente--marge",children:"Chargement de l'effectif…"}):f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Effectif ",f.jsx("em",{children:"PSG"})]})}),L&&f.jsxs(Hc,{className:"effectif__bandeau-chouchou",to:"/chouchou",children:["★ Ton chouchou : ",f.jsx("strong",{children:L.nom})," — voir sa fiche →"]}),(t==null?void 0:t.entraineur)&&f.jsxs("p",{className:"effectif__entraineur",children:["Entraîneur : ",f.jsx("strong",{children:t.entraineur.nom}),t.entraineur.nationalite?` · ${t.entraineur.nationalite}`:""]}),w.length===0?f.jsx("p",{className:"attente",children:"Effectif pas encore disponible."}):f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"onglets effectif-onglets",children:o2.map(({poste:v,libelle:_})=>f.jsx("button",{type:"button",className:`onglets__item${h===v?" onglets__item--actif":""}`,onClick:()=>p(v),children:_},_))}),D.length===0?f.jsx("p",{className:"attente",children:"Aucun joueur à ce poste."}):f.jsx("ul",{className:"effectif-grille",children:D.map(v=>f.jsx(a2,{joueur:v,chouchou:!!(n!=null&&n.joueurChouchouId)&&wi(v)===n.joueurChouchouId,onOuvrir:a,onChoisirChouchou:j},wi(v)))})]}),f.jsx("button",{className:"rafraichir",onClick:()=>g().catch(()=>{}),disabled:I,children:I?"Mise à jour en cours…":"Rafraîchir l'effectif"}),i&&f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"rafraichir",onClick:T,disabled:b,style:{marginTop:8},children:b?"Diagnostic en cours…":"Diagnostiquer"}),l&&f.jsx("pre",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:11,color:"var(--acier)",background:"rgba(255,255,255,0.05)",padding:12,marginTop:8,maxHeight:400,overflow:"auto"},children:JSON.stringify(l,null,2)})]}),f.jsx(UA,{joueur:o,onFermer:()=>a(null)})]})}function u2({onOuvrirArticle:t}){var _e,Ee,z;const{effectif:e,chargement:n}=_g(),{actus:r,chargement:i}=dg(),{preferences:s,enregistrer:o}=Jr(),a=Gc(),[l,c]=x.useState(!1),h=x.useMemo(()=>FA(e==null?void 0:e.joueurs,s==null?void 0:s.joueurChouchouId),[e,s]);x.useEffect(()=>{var $;console.debug("[Chouchou] état",{joueurChouchouId:s==null?void 0:s.joueurChouchouId,nbJoueursEffectif:(($=e==null?void 0:e.joueurs)==null?void 0:$.length)??0,idsEffectif:((e==null?void 0:e.joueurs)||[]).map(wi),joueurTrouve:h?{nom:h.nom,id:wi(h)}:null})},[s,e,h]);const p=x.useMemo(()=>QL(r,h),[r,h]),[g,I]=Fe(()=>o({joueurChouchouId:null}),{libelleSucces:"Chouchou retiré — choisis-en un nouveau depuis l’effectif.",libelleErreur:"Impossible de retirer ce chouchou pour le moment, réessaie."}),[S,N]=x.useState(null),[b,T]=x.useState(!1),[E,w]=x.useState(!1),D=h?wi(h):null;if(x.useEffect(()=>{N(null),w(!1),!(!(h!=null&&h.lien)||!D)&&(T(!0),Ge(We,"recupererDetailsJoueur")({joueurId:D,lien:h.lien}).then($=>{console.debug("[Chouchou] détails reçus",$.data),N($.data)}).catch($=>{console.error("[Chouchou] échec récupération détails",$),w(!0)}).finally(()=>T(!1)))},[D,h==null?void 0:h.lien]),n||i)return f.jsx("p",{className:"attente attente--marge",children:"Chargement…"});if(!(s!=null&&s.joueurChouchouId)||!h)return f.jsx("section",{className:"section",children:f.jsxs("div",{className:"vide",children:[f.jsx("p",{className:"vide__titre",children:"Pas encore de chouchou"}),f.jsx("p",{className:"vide__texte",children:"Choisis ton joueur préféré depuis l'effectif : appuie sur l'étoile ★ à côté de son nom."}),f.jsx(Hc,{className:"chouchou__lien-effectif",to:"/effectif",children:"Voir l'effectif →"})]})});const j=h.photoHero?gg(h.photoHero):null,v=j&&!l,_=h.nomComplet||h.nom,A=((_==null?void 0:_.length)||0)>32?" chouchou-hero__nom--tres-long":((_==null?void 0:_.length)||0)>20?" chouchou-hero__nom--long":"",P=h.matchsJoues??0,k=h.titularisations??0,R=h.buts??0,C=h.minutesJouees??0,H=h.cartonsJaunes??0,oe=h.cartonsRouges??0;return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"chouchou-hero",children:[h.numeroMaillot!=null&&f.jsx("span",{className:"chouchou-hero__numero-geant","aria-hidden":"true",children:h.numeroMaillot}),v?f.jsx("img",{className:"chouchou-hero__photo",src:j,alt:"",loading:"eager",onError:()=>c(!0)}):f.jsx("div",{className:"chouchou-hero__photo chouchou-hero__photo--vide","aria-hidden":"true",children:(h.nom||"?").charAt(0).toUpperCase()}),f.jsx("div",{className:"chouchou-hero__voile","aria-hidden":"true"}),f.jsxs("div",{className:"chouchou-hero__texte",children:[f.jsxs("div",{className:"chouchou-hero__badges",children:[f.jsx("span",{className:"eyebrow chouchou-hero__badge",children:"★ Ton chouchou"}),(_e=h.distinctions)==null?void 0:_e.map(($,Z)=>f.jsxs("span",{className:"chouchou-distinction",style:{animationDelay:`${1.47+Z*.12}s`},children:[f.jsx("i",{className:"fa-solid fa-futbol","aria-hidden":"true"})," ",$]},$))]}),h.poste&&f.jsx("p",{className:"chouchou-hero__poste",children:h.poste}),f.jsx("h1",{className:`chouchou-hero__nom display${A}`,children:_}),f.jsx("p",{className:"chouchou-hero__meta",children:[h.nationalite,h.age?`${h.age} ans`:null,h.taille,h.poids].filter(Boolean).join(" · ")}),f.jsx("span",{className:"chouchou-hero__scroll","aria-hidden":"true",children:"▾"})]})]}),f.jsxs("section",{className:"section chouchou-section",children:[f.jsxs("div",{className:"chouchou-stats",children:[f.jsxs("div",{className:"chouchou-stat",children:[f.jsx("span",{className:"chouchou-stat__valeur",children:P}),f.jsxs("span",{className:"chouchou-stat__cle",children:["Match",P>1?"s":""]})]}),f.jsxs("div",{className:"chouchou-stat",children:[f.jsx("span",{className:"chouchou-stat__valeur",children:k}),f.jsx("span",{className:"chouchou-stat__cle",children:"Titu."})]}),f.jsxs("div",{className:"chouchou-stat chouchou-stat--accent",children:[f.jsx("span",{className:"chouchou-stat__valeur",children:R}),f.jsxs("span",{className:"chouchou-stat__cle",children:["But",R>1?"s":""]})]}),f.jsxs("div",{className:"chouchou-stat",children:[f.jsxs("span",{className:"chouchou-stat__valeur",children:[C,"'"]}),f.jsx("span",{className:"chouchou-stat__cle",children:"Minutes"})]})]}),(H>0||oe>0)&&f.jsxs("div",{className:"chouchou-discipline",children:[H>0&&f.jsxs("span",{className:"chouchou-carton chouchou-carton--jaune",children:[H," carton",H>1?"s":""," jaune",H>1?"s":""]}),oe>0&&f.jsxs("span",{className:"chouchou-carton chouchou-carton--rouge",children:[oe," carton",oe>1?"s":""," rouge",oe>1?"s":""]})]}),f.jsx("button",{className:"chouchou-retirer",disabled:I,onClick:()=>{console.debug("[Chouchou] retrait, retour vers effectif"),g().then(()=>a("/effectif")).catch($=>console.error("[Chouchou] échec retrait",$))},children:I?"Retrait en cours…":"Changer de chouchou"})]}),b&&!S&&f.jsx("p",{className:"attente",style:{padding:"0 var(--pad-ecran)"},children:"Chargement des infos détaillées…"}),E&&!S&&f.jsx("p",{className:"chouchou-detail-erreur",children:"Impossible de récupérer les infos détaillées pour le moment."}),S&&(S.debutContrat||S.selectionsNationales!=null)&&f.jsxs("section",{className:"section chouchou-section chouchou-section--serree",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Carte ",f.jsx("em",{children:"d'identité"})]})}),f.jsxs("div",{className:"chouchou-identite",children:[S.debutContrat&&f.jsxs("div",{className:"chouchou-identite__ligne",children:[f.jsx("span",{children:"Sous contrat"}),f.jsxs("strong",{children:[S.debutContrat," → ",S.finContrat||"?"]})]}),S.selectionsNationales!=null&&f.jsxs("div",{className:"chouchou-identite__ligne",children:[f.jsx("span",{children:"Sélections en équipe nationale"}),f.jsxs("strong",{children:[S.selectionsNationales," sél.",S.butsSelection>0?` · ${S.butsSelection} but${S.butsSelection>1?"s":""}`:""]})]}),S.naissanceDetail&&f.jsxs("div",{className:"chouchou-identite__ligne",children:[f.jsx("span",{children:"Naissance"}),f.jsx("strong",{children:S.naissanceDetail.replace(/^Né[e]? le /i,"")})]})]})]}),((Ee=S==null?void 0:S.bilanCompetitions)==null?void 0:Ee.length)>0&&f.jsxs("section",{className:"section chouchou-section chouchou-section--serree",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Bilan par ",f.jsx("em",{children:"compétition"})]})}),f.jsx("div",{className:"chouchou-bilan-scroll",children:f.jsxs("table",{className:"chouchou-bilan",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",children:"Compétition"}),f.jsx("th",{scope:"col",children:"MJ"}),f.jsx("th",{scope:"col",children:"Titu."}),f.jsx("th",{scope:"col",children:"Buts"}),f.jsx("th",{scope:"col",children:"Min."})]})}),f.jsx("tbody",{children:S.bilanCompetitions.map($=>f.jsxs("tr",{className:$.total?"chouchou-bilan__total":"",children:[f.jsx("td",{children:$.competition}),f.jsx("td",{children:$.matchs}),f.jsx("td",{children:$.titularisations}),f.jsx("td",{children:$.buts}),f.jsxs("td",{children:[$.minutes,"'"]})]},$.competition))})]})})]}),((z=S==null?void 0:S.carriere)==null?void 0:z.length)>0&&f.jsxs("section",{className:"section chouchou-section chouchou-section--serree",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Sa ",f.jsx("em",{children:"carrière"})]})}),f.jsx("ul",{className:"chouchou-carriere",children:S.carriere.map(($,Z)=>f.jsxs("li",{className:"chouchou-carriere__ligne",children:[f.jsxs("div",{className:"chouchou-carriere__saison",children:[f.jsx("strong",{children:$.saison}),f.jsx("span",{children:$.club})]}),f.jsxs("div",{className:"chouchou-carriere__stats",children:[f.jsxs("span",{children:[$.matchs," matchs"]}),f.jsxs("span",{children:[$.buts," but",$.buts>1?"s":""]})]})]},`${$.saison}-${Z}`))})]}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Ses actus"})}),p.length===0&&f.jsxs("p",{className:"attente",children:["Pas d'actu récente pour ",h.nom,"."]}),p.map($=>f.jsx(LA,{actu:$,onOuvrir:t},$.id))]})]})}const c2="psg";function h2(){const[t,e]=x.useState(null),[n,r]=x.useState(!0);return x.useEffect(()=>sn(At(et,tt.mercato(c2)),i=>{e(i.exists()?i.data():null),r(!1)},()=>r(!1)),[]),{mercato:t,chargement:n}}function d2(){const[t,e]=x.useState([]),[n,r]=x.useState(!0);return x.useEffect(()=>sn(At(et,tt.fenetresMercato()),i=>{const s=i.exists()?i.data().fenetres||[]:[];e(s.map(o=>{var a,l,c,h;return{...o,debut:((l=(a=o.debut)==null?void 0:a.toDate)==null?void 0:l.call(a))||new Date(o.debut),fin:((h=(c=o.fin)==null?void 0:c.toDate)==null?void 0:h.call(c))||new Date(o.fin)}})),r(!1)},()=>r(!1)),[]),{fenetres:t,chargement:n}}const f2=30;function p2(t,e){return t.find(n=>e>=n.debut&&e<=n.fin)||null}function m2(t,e){return t.filter(n=>n.debut>e).sort((n,r)=>n.debut-r.debut)[0]||null}function jE(t){const e=Math.max(0,Math.floor(t/1e3));return{jours:Math.floor(e/86400),heures:Math.floor(e%86400/3600),minutes:Math.floor(e%3600/60),secondes:e%60}}const FE={ete:"🔥",hiver:"❄️"},UE=24*60*60*1e3;function BE({jours:t,heures:e,minutes:n,secondes:r,compact:i=!1}){const s=o=>String(o).padStart(2,"0");return f.jsxs("div",{className:"mercato-timer__compte","aria-hidden":"true",children:[f.jsxs("span",{className:"mercato-timer__bloc",children:[f.jsx("strong",{children:t}),"j"]}),f.jsxs("span",{className:"mercato-timer__bloc",children:[f.jsx("strong",{children:s(e)}),"h"]}),f.jsxs("span",{className:"mercato-timer__bloc",children:[f.jsx("strong",{children:s(n)}),"m"]}),!i&&f.jsxs("span",{className:"mercato-timer__bloc",children:[f.jsx("strong",{children:s(r)}),"s"]})]})}function g2(){const t=DA(1e3),{fenetres:e}=d2(),n=p2(e,t);if(n){const{jours:l,heures:c,minutes:h,secondes:p}=jE(n.fin-t),g=n.fin-t<UE;return f.jsxs("div",{className:`mercato-timer mercato-timer--ouvert${g?" mercato-timer--urgent":""}`,children:[f.jsxs("span",{className:"mercato-timer__badge",children:[FE[n.type]," Mercato ouvert"]}),f.jsx("p",{className:"mercato-timer__titre display",children:n.libelle}),f.jsx("p",{className:"mercato-timer__sous",children:"Ferme dans"}),f.jsx(BE,{jours:l,heures:c,minutes:h,secondes:p})]})}const r=m2(e,t);if(!r)return null;const i=r.debut-t;if(i>f2*UE)return null;const{jours:s,heures:o,minutes:a}=jE(i);return f.jsxs("div",{className:"mercato-timer mercato-timer--bientot",children:[f.jsxs("span",{className:"mercato-timer__badge",children:[FE[r.type]," Bientôt"]}),f.jsx("p",{className:"mercato-timer__titre display",children:r.libelle}),f.jsx("p",{className:"mercato-timer__sous",children:"Ouvre dans"}),f.jsx(BE,{jours:s,heures:o,minutes:a,compact:!0})]})}const $E=[{cle:"officiels",titre:"Officiels"},{cle:"enDiscussion",titre:"En discussion"},{cle:"rumeurs",titre:"Rumeurs"}];function _2({mouvement:t}){const{joueur:e,joueurDetail:n,sens:r,clubAdverse:i,typeTransfert:s,montant:o}=t,a=n?n.split(",").slice(1).join(",").trim():null;return f.jsxs("li",{className:`mercato__ligne mercato__ligne--${r}`,children:[f.jsx("span",{className:"mercato__sens","aria-hidden":"true",children:r==="arrivee"?"↗":"↘"}),f.jsxs("div",{className:"mercato__corps",children:[f.jsx("p",{className:"mercato__joueur",children:e}),f.jsx("p",{className:"mercato__detail",children:[a,i].filter(Boolean).join(" · ")})]}),f.jsxs("div",{className:"mercato__transfert",children:[s&&f.jsx("span",{className:"mercato__type",children:s}),o&&f.jsx("span",{className:"mercato__montant",children:o})]})]})}function y2(){const{mercato:t,chargement:e}=h2(),[n,r]=Fe(()=>Ge(We,"rafraichirMaxifootPsg")(),{libelleSucces:"Mercato à jour.",libelleErreur:"Échec de la mise à jour du mercato."});if(e)return f.jsx("p",{className:"attente attente--marge",children:"Chargement du mercato…"});const i=$E.reduce((s,{cle:o})=>{var a;return s+(((a=t==null?void 0:t[o])==null?void 0:a.length)||0)},0);return f.jsxs(f.Fragment,{children:[f.jsx(g2,{}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Mercato ",f.jsx("em",{children:"PSG"})]})}),i===0&&f.jsx("p",{className:"attente",children:"Rien à signaler pour l'instant."}),$E.map(({cle:s,titre:o})=>{const a=(t==null?void 0:t[s])||[];return a.length===0?null:f.jsxs("div",{className:"mercato__groupe",children:[f.jsx("h3",{className:"mercato__titre-groupe",children:o}),f.jsx("ul",{className:"mercato__liste",children:a.map((l,c)=>f.jsx(_2,{mouvement:l},`${s}-${c}`))})]},s)}),f.jsx("button",{className:"rafraichir",onClick:()=>n().catch(()=>{}),disabled:r,children:r?"Mise à jour en cours…":"Rafraîchir le mercato"})]})]})}const BA="@firebase/installations",yg="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=1e4,zA=`w:${yg}`,qA="FIS_v2",v2="https://firebaseinstallations.googleapis.com/v1",E2=60*60*1e3,w2="installations",I2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mi=new Bi(w2,I2,T2);function KA(t){return t instanceof yn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA({projectId:t}){return`${v2}/projects/${t}/installations`}function WA(t){return{token:t.token,requestStatus:2,expiresIn:A2(t.expiresIn),creationTime:Date.now()}}async function HA(t,e){const r=(await e.json()).error;return Mi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function QA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S2(t,{refreshToken:e}){const n=QA(t);return n.append("Authorization",C2(e)),n}async function JA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function A2(t){return Number(t.replace("s","000"))}function C2(t){return`${qA} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=GA(t),i=QA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:qA,appId:t.appId,sdkVersion:zA},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await JA(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:WA(c.authToken)}}else throw await HA("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=/^[cdef][\w-]{21}$/,fp="";function N2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=k2(t);return R2.test(n)?n:fp}catch{return fp}}function k2(t){return P2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new Map;function ZA(t,e){const n=yh(t);eC(n,e),b2(n,e)}function eC(t,e){const n=XA.get(t);if(n)for(const r of n)r(e)}function b2(t,e){const n=D2();n&&n.postMessage({key:t,fid:e}),V2()}let pi=null;function D2(){return!pi&&"BroadcastChannel"in self&&(pi=new BroadcastChannel("[Firebase] FID Change"),pi.onmessage=t=>{eC(t.data.key,t.data.fid)}),pi}function V2(){XA.size===0&&pi&&(pi.close(),pi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="firebase-installations-database",M2=1,Li="firebase-installations-store";let Pd=null;function vg(){return Pd||(Pd=Jc(O2,M2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Li)}}})),Pd}async function xc(t,e){const n=yh(t),i=(await vg()).transaction(Li,"readwrite"),s=i.objectStore(Li),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ZA(t,e.fid),e}async function tC(t){const e=yh(t),r=(await vg()).transaction(Li,"readwrite");await r.objectStore(Li).delete(e),await r.done}async function vh(t,e){const n=yh(t),i=(await vg()).transaction(Li,"readwrite"),s=i.objectStore(Li),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ZA(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t){let e;const n=await vh(t.appConfig,r=>{const i=L2(r),s=j2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===fp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function L2(t){const e=t||{fid:N2(),registrationStatus:0};return nC(e)}function j2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Mi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=F2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:U2(t)}:{installationEntry:e}}async function F2(t,e){try{const n=await x2(t,e);return xc(t.appConfig,n)}catch(n){throw KA(n)&&n.customData.serverCode===409?await tC(t.appConfig):await xc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function U2(t){let e=await zE(t.appConfig);for(;e.registrationStatus===1;)await YA(100),e=await zE(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Eg(t);return r||n}return e}function zE(t){return vh(t,e=>{if(!e)throw Mi.create("installation-not-found");return nC(e)})}function nC(t){return B2(t)?{fid:t.fid,registrationStatus:0}:t}function B2(t){return t.registrationStatus===1&&t.registrationTime+$A<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $2({appConfig:t,heartbeatServiceProvider:e},n){const r=z2(t,n),i=S2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:zA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await JA(()=>fetch(r,a));if(l.ok){const c=await l.json();return WA(c)}else throw await HA("Generate Auth Token",l)}function z2(t,{fid:e}){return`${GA(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(t,e=!1){let n;const r=await vh(t.appConfig,s=>{if(!rC(s))throw Mi.create("not-registered");const o=s.authToken;if(!e&&G2(o))return s;if(o.requestStatus===1)return n=q2(t,e),s;{if(!navigator.onLine)throw Mi.create("app-offline");const a=H2(s);return n=K2(t,a),a}});return n?await n:r.authToken}async function q2(t,e){let n=await qE(t.appConfig);for(;n.authToken.requestStatus===1;)await YA(100),n=await qE(t.appConfig);const r=n.authToken;return r.requestStatus===0?wg(t,e):r}function qE(t){return vh(t,e=>{if(!rC(e))throw Mi.create("not-registered");const n=e.authToken;return Q2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function K2(t,e){try{const n=await $2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await xc(t.appConfig,r),n}catch(n){if(KA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tC(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xc(t.appConfig,r)}throw n}}function rC(t){return t!==void 0&&t.registrationStatus===2}function G2(t){return t.requestStatus===2&&!W2(t)}function W2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+E2}function H2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Q2(t){return t.requestStatus===1&&t.requestTime+$A<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Eg(e);return r?r.catch(console.error):wg(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y2(t,e=!1){const n=t;return await X2(n),(await wg(n,e)).token}async function X2(t){const{registrationPromise:e}=await Eg(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t){if(!t||!t.options)throw Rd("App Configuration");if(!t.name)throw Rd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Rd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Rd(t){return Mi.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="installations",ej="installations-internal",tj=t=>{const e=t.getProvider("app").getImmediate(),n=Z2(e),r=$i(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},nj=t=>{const e=t.getProvider("app").getImmediate(),n=$i(e,iC).getImmediate();return{getId:()=>J2(n),getToken:i=>Y2(n,i)}};function rj(){gn(new rn(iC,tj,"PUBLIC")),gn(new rn(ej,nj,"PRIVATE"))}rj();Lt(BA,yg);Lt(BA,yg,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ij="/firebase-messaging-sw.js",sj="/firebase-cloud-messaging-push-scope",sC="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",oj="https://fcmregistrations.googleapis.com/v1",oC="google.c.a.c_id",aj="google.c.a.c_l",lj="google.c.a.ts",uj="google.c.a.e";var KE;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(KE||(KE={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ja;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ja||(Ja={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function cj(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="fcm_token_details_db",hj=5,GE="fcm_token_object_Store";async function dj(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Nd))return null;let e=null;return(await Jc(Nd,hj,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(GE))return;const l=o.objectStore(GE),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:On(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:On(h.auth),p256dh:On(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:On(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:On(h.auth),p256dh:On(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:On(h.vapidKey)}}}}}})).close(),await gd(Nd),await gd("fcm_vapid_details_db"),await gd("undefined"),fj(e)?e:null}function fj(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pj="firebase-messaging-database",mj=1,ji="firebase-messaging-store";let kd=null;function Ig(){return kd||(kd=Jc(pj,mj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ji)}}})),kd}async function aC(t){const e=Sg(t),r=await(await Ig()).transaction(ji).objectStore(ji).get(e);if(r)return r;{const i=await dj(t.appConfig.senderId);if(i)return await Tg(t,i),i}}async function Tg(t,e){const n=Sg(t),i=(await Ig()).transaction(ji,"readwrite");return await i.objectStore(ji).put(e,n),await i.done,e}async function gj(t){const e=Sg(t),r=(await Ig()).transaction(ji,"readwrite");await r.objectStore(ji).delete(e),await r.done}function Sg({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _j={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},pt=new Bi("messaging","Messaging",_j);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yj(t,e){const n=await Cg(t),r=uC(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Ag(t.appConfig),i)).json()}catch(o){throw pt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw pt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw pt.create("token-subscribe-no-token");return s.token}async function vj(t,e){const n=await Cg(t),r=uC(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Ag(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw pt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw pt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw pt.create("token-update-no-token");return s.token}async function lC(t,e){const r={method:"DELETE",headers:await Cg(t)};try{const s=await(await fetch(`${Ag(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw pt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw pt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Ag({projectId:t}){return`${oj}/projects/${t}/registrations`}async function Cg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function uC({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==sC&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ej=7*24*60*60*1e3;async function wj(t){const e=await Sj(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:On(e.getKey("auth")),p256dh:On(e.getKey("p256dh"))},r=await aC(t.firebaseDependencies);if(r){if(Aj(r.subscriptionOptions,n))return Date.now()>=r.createTime+Ej?Tj(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await lC(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return WE(t.firebaseDependencies,n)}else return WE(t.firebaseDependencies,n)}async function Ij(t){const e=await aC(t.firebaseDependencies);e&&(await lC(t.firebaseDependencies,e.token),await gj(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Tj(t,e){try{const n=await vj(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Tg(t.firebaseDependencies,r),n}catch(n){throw n}}async function WE(t,e){const r={token:await yj(t,e),createTime:Date.now(),subscriptionOptions:e};return await Tg(t,r),r.token}async function Sj(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:cj(e)})}function Aj(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Cj(e,t),xj(e,t),Pj(e,t),e}function Cj(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function xj(t,e){e.data&&(t.data=e.data)}function Pj(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rj(t){return typeof t=="object"&&!!t&&oC in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nj(t){if(!t||!t.options)throw bd("App Configuration Object");if(!t.name)throw bd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw bd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function bd(t){return pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kj{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Nj(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t){try{t.swRegistration=await navigator.serviceWorker.register(ij,{scope:sj}),t.swRegistration.update().catch(()=>{})}catch(e){throw pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bj(t,e){if(!e&&!t.swRegistration&&await cC(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw pt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dj(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=sC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(t,e){if(!navigator)throw pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw pt.create("permission-blocked");return await Dj(t,e==null?void 0:e.vapidKey),await bj(t,e==null?void 0:e.serviceWorkerRegistration),wj(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vj(t,e,n){const r=Oj(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[oC],message_name:n[aj],message_time:n[lj],message_device_time:Math.floor(Date.now()/1e3)})}function Oj(t){switch(t){case Ja.NOTIFICATION_CLICKED:return"notification_open";case Ja.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mj(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ja.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(HE(n)):t.onMessageHandler.next(HE(n)));const r=n.data;Rj(r)&&r[uj]==="1"&&await Vj(t,n.messageType,r)}const QE="@firebase/messaging",JE="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lj=t=>{const e=new kj(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Mj(e,n)),e},jj=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>hC(e,r)}};function Fj(){gn(new rn("messaging",Lj,"PUBLIC")),gn(new rn("messaging-internal",jj,"PRIVATE")),Lt(QE,JE),Lt(QE,JE,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(){try{await bT()}catch{return!1}return typeof window<"u"&&cm()&&LN()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uj(t){if(!navigator)throw pt.create("only-available-in-window");return t.swRegistration||await cC(t),Ij(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t=fm()){return dC().then(e=>{if(!e)throw pt.create("unsupported-browser")},e=>{throw pt.create("indexed-db-unsupported")}),$i(xe(t),"messaging").getImmediate()}async function XE(t,e){return t=xe(t),hC(t,e)}function Bj(t){return t=xe(t),Uj(t)}Fj();function $j(t){const[e,n]=x.useState("verification"),[r,i]=x.useState(!1),s=typeof window<"u"&&(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0),o=typeof navigator<"u"&&/iphone|ipad|ipod/i.test(navigator.userAgent);x.useEffect(()=>{let c=!1;async function h(){if(!await dC().catch(()=>!1)||o&&!s){c||n("indisponible");return}if(Notification.permission==="denied"){c||n("refuse");return}c||n(Notification.permission==="granted"?"actif":"inactif")}return h(),()=>{c=!0}},[o,s]);const a=x.useCallback(async()=>{if(t){i(!0);try{const c=await Notification.requestPermission();if(c!=="granted"){n(c==="denied"?"refuse":"inactif");return}const h=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),p=YE(Qa),g=await XE(p,{vapidKey:PE,serviceWorkerRegistration:h});if(!g){n("inactif");return}await Ge(We,"enregistrerAppareil")({jeton:g}),n("actif")}catch{n("inactif")}finally{i(!1)}}},[t]),l=x.useCallback(async()=>{i(!0);try{const c=YE(Qa),h=await XE(c,{vapidKey:PE}).catch(()=>null);h&&(await Ge(We,"retirerAppareil")({jeton:h}),await Bj(c).catch(()=>{})),n("inactif")}finally{i(!1)}},[]);return{etat:e,enCours:r,activer:a,desactiver:l,iOS:o,installee:s}}const zj=[["matinDuMatch","Le matin du match","Vers 9h, avec la chaîne"],["uneHeureAvant","1 heure avant","Rappel avant le coup d'envoi"],["coupDEnvoi","Au coup d'envoi","Le match commence"],["actuImportante","Actu importante","Mercato, blessure, groupe"],["touteActu","Toute l'actu","Chaque article publié"]];function qj(){var k,R,C;const{utilisateur:t,deconnexion:e}=pl(),{preferences:n,enregistrer:r}=Jr(),{etat:i,enCours:s,activer:o,desactiver:a,iOS:l,installee:c}=$j(t),h=_h(),[p,g]=Fe(()=>Ge(We,"envoyerNotifTest")(),{libelleSucces:"Notif de test envoyée — regarde ton appareil.",libelleErreur:H=>(H==null?void 0:H.message)||"Échec de l'envoi de la notif de test."}),[I,S]=x.useState([]),[N,b]=x.useState([]),[T,E]=x.useState(null),[w,D]=x.useState(""),[L,j]=x.useState(!1);x.useEffect(()=>{gh().then(S),RA().then(b)},[]),x.useEffect(()=>{D("")},[T]);const v=(n==null?void 0:n.clubsSuivis)||[],_=x.useMemo(()=>{var _e;if(T==="nation")return Cc(N,w);const H=(_e=n==null?void 0:n.clubFavori)==null?void 0:_e.id,oe=Cc(I,w);return T==="suivis"?oe.filter(Ee=>Ee.id!==H):oe},[T,I,N,w,n]),A=H=>{var oe;r({notifications:{...(n==null?void 0:n.notifications)||{},[H]:!((oe=n==null?void 0:n.notifications)!=null&&oe[H])}})},P=H=>{if(T==="favori"){r({clubFavori:H,clubsSuivis:v.filter(_e=>_e.id!==H.id)}),E(null);return}if(T==="nation"){r({nationFavorite:H}),E(null);return}v.some(_e=>_e.id===H.id)?r({clubsSuivis:v.filter(_e=>_e.id!==H.id)}):v.length<fi&&r({clubsSuivis:[...v,H]})};return f.jsxs(f.Fragment,{children:[f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Tes clubs"})}),f.jsxs("div",{className:"etiquettes",children:[f.jsxs("button",{className:"etiquette etiquette--favori",onClick:()=>E("favori"),children:[((k=n==null?void 0:n.clubFavori)==null?void 0:k.court)||((R=n==null?void 0:n.clubFavori)==null?void 0:R.nom)||"Choisir"," · favori"]}),v.map(H=>f.jsx("button",{className:"etiquette",onClick:()=>E("suivis"),children:H.court||H.nom},H.id)),v.length<fi&&f.jsxs("button",{className:"etiquette etiquette--ajout",onClick:()=>E("suivis"),children:["+ Ajouter (",fi-v.length," restants)"]})]}),f.jsx("div",{className:"etiquettes etiquettes--suite",children:f.jsxs("button",{className:"etiquette etiquette--favori",onClick:()=>E("nation"),children:[((C=n==null?void 0:n.nationFavorite)==null?void 0:C.nom)||"Choisir"," · sélection"]})})]}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Notifications"})}),i==="indisponible"&&f.jsx("p",{className:"avis",children:l&&!c?"Ajoute d'abord l'app à ton écran d'accueil : sur iPhone, c'est la seule façon de recevoir les notifications.":"Ce navigateur ne gère pas les notifications."}),i==="refuse"&&f.jsx("p",{className:"avis",children:"Les notifications sont bloquées pour ce site. Réactive-les dans les réglages de ton navigateur."}),i==="inactif"&&f.jsx("button",{className:"bouton-plein",onClick:o,disabled:s,children:s?"Activation…":"Activer les notifications"}),i==="actif"&&f.jsxs(f.Fragment,{children:[f.jsx("ul",{className:"lignes",children:zj.map(([H,oe,_e])=>{var Ee,z;return f.jsxs("li",{className:"ligne",children:[f.jsxs("div",{children:[f.jsx("p",{className:"ligne__titre",children:oe}),f.jsx("p",{className:"ligne__detail",children:_e})]}),f.jsx("button",{className:`bascule${(Ee=n==null?void 0:n.notifications)!=null&&Ee[H]?" bascule--on":""}`,onClick:()=>A(H),role:"switch","aria-checked":!!((z=n==null?void 0:n.notifications)!=null&&z[H]),"aria-label":oe})]},H)})}),f.jsx("button",{className:"bouton-discret",onClick:a,disabled:s,children:"Ne plus rien recevoir sur cet appareil"}),h&&f.jsx("div",{style:{marginTop:12},children:f.jsx(mg,{titre:"Notifications de test",actions:[{libelle:"Envoyer une notif de test",onClick:()=>p().catch(()=>{}),enCours:g}]})})]})]}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Ton compte"})}),f.jsx("p",{className:"avis avis--doux",children:t==null?void 0:t.email}),f.jsx("button",{className:"bouton-discret",onClick:()=>j(!0),children:"Se déconnecter"})]}),T&&f.jsx("div",{className:"selecteur",onClick:()=>E(null),children:f.jsxs("div",{className:"selecteur__panneau",onClick:H=>H.stopPropagation(),children:[f.jsxs("div",{className:"selecteur__tete",children:[f.jsx("h3",{className:"selecteur__titre",children:T==="favori"?"Ton club":T==="nation"?"Ta sélection":"Tes clubs suivis"}),f.jsx("button",{className:"selecteur__fermer",onClick:()=>E(null),"aria-label":"Fermer",children:"×"})]}),f.jsx("input",{className:"selecteur__recherche",type:"search",value:w,onChange:H=>D(H.target.value),placeholder:"Chercher",autoFocus:!0}),f.jsx("ul",{className:"selecteur__liste",children:_.map(H=>{var Ee,z;const oe=T==="favori"?((Ee=n==null?void 0:n.clubFavori)==null?void 0:Ee.id)===H.id:T==="nation"?((z=n==null?void 0:n.nationFavorite)==null?void 0:z.id)===H.id:v.some($=>$.id===H.id),_e=T==="suivis"&&!oe&&v.length>=fi;return f.jsx("li",{children:f.jsxs("button",{className:`selecteur__choix${oe?" selecteur__choix--actif":""}`,onClick:()=>P(H),disabled:_e,children:[H.nom,oe&&T==="suivis"&&f.jsx("span",{className:"selecteur__marque",children:"Retirer"})]})},H.id)})})]})}),f.jsx(pg,{ouvert:L,message:"Te déconnecter de cet appareil ?",texteConfirmer:"Se déconnecter",onConfirm:()=>{j(!1),e()},onCancel:()=>j(!1)})]})}function Kj(){const{utilisateur:t,chargement:e,deconnexion:n}=pl(),{preferences:r,chargement:i}=Jr(),{actus:s}=dg(),o=uL(s),[a,l]=x.useState(!1),[c,h]=x.useState(null),p=!e&&!i;if(!a)return f.jsx(hL,{pret:p,onTermine:()=>l(!0)});if(!t)return f.jsx(wL,{});if(r&&!r.onboardingTermine)return f.jsx(IL,{});const g=(t.displayName||t.email||"?").charAt(0).toUpperCase();return f.jsxs("div",{className:"shell",children:[f.jsx(pL,{}),f.jsx("header",{className:"shell__header",children:f.jsxs("div",{className:"marque",children:[f.jsxs("h1",{className:"marque__logo",children:["Ici c'est ",f.jsx("em",{children:"ton"})," Paris"]}),f.jsx("span",{className:"marque__profil","aria-label":"Profil",children:g})]})}),f.jsxs("main",{className:"shell__main",children:[f.jsxs(aN,{children:[f.jsx(wn,{path:"/",element:f.jsx(FL,{onOuvrirArticle:h})}),f.jsx(wn,{path:"/matchs",element:f.jsx(KL,{})}),f.jsx(wn,{path:"/compo",element:f.jsx(XL,{})}),f.jsx(wn,{path:"/classement",element:f.jsx(i2,{})}),f.jsx(wn,{path:"/effectif",element:f.jsx(l2,{})}),f.jsx(wn,{path:"/chouchou",element:f.jsx(u2,{onOuvrirArticle:h})}),f.jsx(wn,{path:"/mercato",element:f.jsx(y2,{})}),f.jsx(wn,{path:"/reglages",element:f.jsx(qj,{})}),f.jsx(wn,{path:"*",element:f.jsx(sN,{to:"/",replace:!0})})]}),f.jsx("div",{className:"shell__fin"})]}),f.jsx(gL,{}),f.jsx(_L,{actu:c,onFermer:()=>h(null)}),f.jsx(vL,{ouvert:o.ouvert,actus:o.actus,onFermer:o.fermer,onOuvrirArticle:h}),f.jsx(EL,{})]})}function Gj(){return f.jsx(mN,{basename:"/Ton-paris/",children:f.jsx(lL,{children:f.jsx(sL,{children:f.jsx(oL,{children:f.jsx(Kj,{})})})})})}yR({onNeedRefresh(){},onOfflineReady(){}});hT(document.getElementById("root")).render(f.jsx(x.StrictMode,{children:f.jsx(Gj,{})}));
