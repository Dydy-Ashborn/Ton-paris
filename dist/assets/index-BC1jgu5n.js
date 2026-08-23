function CC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function PC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var VE={exports:{}},gc={},OE={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=Symbol.for("react.element"),RC=Symbol.for("react.portal"),xC=Symbol.for("react.fragment"),kC=Symbol.for("react.strict_mode"),NC=Symbol.for("react.profiler"),bC=Symbol.for("react.provider"),DC=Symbol.for("react.context"),VC=Symbol.for("react.forward_ref"),OC=Symbol.for("react.suspense"),LC=Symbol.for("react.memo"),MC=Symbol.for("react.lazy"),a_=Symbol.iterator;function jC(t){return t===null||typeof t!="object"?null:(t=a_&&t[a_]||t["@@iterator"],typeof t=="function"?t:null)}var LE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ME=Object.assign,jE={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=jE,this.updater=n||LE}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function FE(){}FE.prototype=Gs.prototype;function Xf(t,e,n){this.props=t,this.context=e,this.refs=jE,this.updater=n||LE}var Zf=Xf.prototype=new FE;Zf.constructor=Xf;ME(Zf,Gs.prototype);Zf.isPureReactComponent=!0;var l_=Array.isArray,UE=Object.prototype.hasOwnProperty,ep={current:null},BE={key:!0,ref:!0,__self:!0,__source:!0};function $E(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)UE.call(e,r)&&!BE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$a,type:t,key:s,ref:o,props:i,_owner:ep.current}}function FC(t,e){return{$$typeof:$a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===$a}function UC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var u_=/\/+/g;function Rh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UC(""+t.key):e.toString(36)}function Jl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $a:case RC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Rh(o,0):r,l_(i)?(n="",t!=null&&(n=t.replace(u_,"$&/")+"/"),Jl(i,e,n,"",function(c){return c})):i!=null&&(tp(i)&&(i=FC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(u_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",l_(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Rh(s,a);o+=Jl(s,e,n,u,i)}else if(u=jC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Rh(s,a++),o+=Jl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Il(t,e,n){if(t==null)return t;var r=[],i=0;return Jl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Yl={transition:null},$C={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:ep};function zE(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Il,forEach:function(t,e,n){Il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Il(t,function(){e++}),e},toArray:function(t){return Il(t,function(e){return e})||[]},only:function(t){if(!tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Gs;ne.Fragment=xC;ne.Profiler=NC;ne.PureComponent=Xf;ne.StrictMode=kC;ne.Suspense=OC;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$C;ne.act=zE;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ME({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ep.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)UE.call(e,u)&&!BE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:$a,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:DC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bC,_context:t},t.Consumer=t};ne.createElement=$E;ne.createFactory=function(t){var e=$E.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:VC,render:t}};ne.isValidElement=tp;ne.lazy=function(t){return{$$typeof:MC,_payload:{_status:-1,_result:t},_init:BC}};ne.memo=function(t,e){return{$$typeof:LC,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};ne.unstable_act=zE;ne.useCallback=function(t,e){return It.current.useCallback(t,e)};ne.useContext=function(t){return It.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return It.current.useDeferredValue(t)};ne.useEffect=function(t,e){return It.current.useEffect(t,e)};ne.useId=function(){return It.current.useId()};ne.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return It.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};ne.useRef=function(t){return It.current.useRef(t)};ne.useState=function(t){return It.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return It.current.useTransition()};ne.version="18.3.1";OE.exports=ne;var k=OE.exports;const zC=PC(k),qC=CC({__proto__:null,default:zC},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KC=k,GC=Symbol.for("react.element"),WC=Symbol.for("react.fragment"),HC=Object.prototype.hasOwnProperty,QC=KC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JC={key:!0,ref:!0,__self:!0,__source:!0};function qE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)HC.call(e,r)&&!JC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:GC,type:t,key:s,ref:o,props:i,_owner:QC.current}}gc.Fragment=WC;gc.jsx=qE;gc.jsxs=qE;VE.exports=gc;var m=VE.exports,KE={exports:{}},Bt={},GE={exports:{}},WE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Y){var Z=q.length;q.push(Y);e:for(;0<Z;){var _e=Z-1>>>1,ue=q[_e];if(0<i(ue,Y))q[_e]=Y,q[Z]=ue,Z=_e;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Y=q[0],Z=q.pop();if(Z!==Y){q[0]=Z;e:for(var _e=0,ue=q.length,Ae=ue>>>1;_e<Ae;){var en=2*(_e+1)-1,tn=q[en],nn=en+1,rn=q[nn];if(0>i(tn,Z))nn<ue&&0>i(rn,tn)?(q[_e]=rn,q[nn]=Z,_e=nn):(q[_e]=tn,q[en]=Z,_e=en);else if(nn<ue&&0>i(rn,Z))q[_e]=rn,q[nn]=Z,_e=nn;else break e}}return Y}function i(q,Y){var Z=q.sortIndex-Y.sortIndex;return Z!==0?Z:q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,g=3,v=!1,P=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(q){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=q)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function b(q){if(N=!1,w(q),!P)if(n(u)!==null)P=!0,xn(F);else{var Y=n(c);Y!==null&&zt(b,Y.startTime-q)}}function F(q,Y){P=!1,N&&(N=!1,S(y),y=-1),v=!0;var Z=g;try{for(w(Y),f=n(u);f!==null&&(!(f.expirationTime>Y)||q&&!R());){var _e=f.callback;if(typeof _e=="function"){f.callback=null,g=f.priorityLevel;var ue=_e(f.expirationTime<=Y);Y=t.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(u)&&r(u),w(Y)}else r(u);f=n(u)}if(f!==null)var Ae=!0;else{var en=n(c);en!==null&&zt(b,en.startTime-Y),Ae=!1}return Ae}finally{f=null,g=Z,v=!1}}var j=!1,T=null,y=-1,A=5,C=-1;function R(){return!(t.unstable_now()-C<A)}function x(){if(T!==null){var q=t.unstable_now();C=q;var Y=!0;try{Y=T(!0,q)}finally{Y?I():(j=!1,T=null)}}else j=!1}var I;if(typeof E=="function")I=function(){E(x)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Oe=fe.port2;fe.port1.onmessage=x,I=function(){Oe.postMessage(null)}}else I=function(){D(x,0)};function xn(q){T=q,j||(j=!0,I())}function zt(q,Y){y=D(function(){q(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){P||v||(P=!0,xn(F))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var Z=g;g=Y;try{return q()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Y){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=g;g=q;try{return Y()}finally{g=Z}},t.unstable_scheduleCallback=function(q,Y,Z){var _e=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?_e+Z:_e):Z=_e,q){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Z+ue,q={id:h++,callback:Y,priorityLevel:q,startTime:Z,expirationTime:ue,sortIndex:-1},Z>_e?(q.sortIndex=Z,e(c,q),n(u)===null&&q===n(c)&&(N?(S(y),y=-1):N=!0,zt(b,Z-_e))):(q.sortIndex=ue,e(u,q),P||v||(P=!0,xn(F))),q},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(q){var Y=g;return function(){var Z=g;g=Y;try{return q.apply(this,arguments)}finally{g=Z}}}})(WE);GE.exports=WE;var YC=GE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XC=k,jt=YC;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var HE=new Set,oa={};function Vi(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(oa[t]=e,t=0;t<e.length;t++)HE.add(e[t])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=Object.prototype.hasOwnProperty,ZC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,c_={},h_={};function eP(t){return wd.call(h_,t)?!0:wd.call(c_,t)?!1:ZC.test(t)?h_[t]=!0:(c_[t]=!0,!1)}function tP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nP(t,e,n,r){if(e===null||typeof e>"u"||tP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var np=/[\-:]([a-z])/g;function rp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(np,rp);et[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(np,rp);et[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(np,rp);et[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ip(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nP(e,n,i,r)&&(n=null),r||i===null?eP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zn=XC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),ns=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),QE=Symbol.for("react.provider"),JE=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),Td=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),ap=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),YE=Symbol.for("react.offscreen"),d_=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=d_&&t[d_]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,xh;function Vo(t){if(xh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xh=e&&e[1]||""}return`
`+xh+t}var kh=!1;function Nh(t,e){if(!t||kh)return"";kh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{kh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function rP(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=Nh(t.type,!1),t;case 11:return t=Nh(t.type.render,!1),t;case 1:return t=Nh(t.type,!0),t;default:return""}}function Ad(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case ns:return"Portal";case Id:return"Profiler";case sp:return"StrictMode";case Td:return"Suspense";case Sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case JE:return(t.displayName||"Context")+".Consumer";case QE:return(t._context.displayName||"Context")+".Provider";case op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ap:return e=t.displayName||null,e!==null?e:Ad(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Ad(t(e))}catch{}}return null}function iP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ad(e);case 8:return e===sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function XE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sP(t){var e=XE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=sP(t))}function ZE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=XE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cd(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function f_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ew(t,e){e=e.checked,e!=null&&ip(t,"checked",e,!1)}function Pd(t,e){ew(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rd(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function p_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rd(t,e,n){(e!=="number"||Iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function ms(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function m_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Oo(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function tw(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function g_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Al,rw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oP=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){oP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function iw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function sw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aP=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nd(t,e){if(e){if(aP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dd=null;function lp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vd=null,gs=null,_s=null;function __(t){if(t=Ka(t)){if(typeof Vd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=wc(e),Vd(t.stateNode,t.type,e))}}function ow(t){gs?_s?_s.push(t):_s=[t]:gs=t}function aw(){if(gs){var t=gs,e=_s;if(_s=gs=null,__(t),e)for(t=0;t<e.length;t++)__(e[t])}}function lw(t,e){return t(e)}function uw(){}var bh=!1;function cw(t,e,n){if(bh)return t(e,n);bh=!0;try{return lw(t,e,n)}finally{bh=!1,(gs!==null||_s!==null)&&(uw(),aw())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var r=wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Od=!1;if(Gn)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Od=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Od=!1}function lP(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Go=!1,Tu=null,Su=!1,Ld=null,uP={onError:function(t){Go=!0,Tu=t}};function cP(t,e,n,r,i,s,o,a,u){Go=!1,Tu=null,lP.apply(uP,arguments)}function hP(t,e,n,r,i,s,o,a,u){if(cP.apply(this,arguments),Go){if(Go){var c=Tu;Go=!1,Tu=null}else throw Error(B(198));Su||(Su=!0,Ld=c)}}function Oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y_(t){if(Oi(t)!==t)throw Error(B(188))}function dP(t){var e=t.alternate;if(!e){if(e=Oi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return y_(i),t;if(s===r)return y_(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function dw(t){return t=dP(t),t!==null?fw(t):null}function fw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fw(t);if(e!==null)return e;t=t.sibling}return null}var pw=jt.unstable_scheduleCallback,v_=jt.unstable_cancelCallback,fP=jt.unstable_shouldYield,pP=jt.unstable_requestPaint,Le=jt.unstable_now,mP=jt.unstable_getCurrentPriorityLevel,up=jt.unstable_ImmediatePriority,mw=jt.unstable_UserBlockingPriority,Au=jt.unstable_NormalPriority,gP=jt.unstable_LowPriority,gw=jt.unstable_IdlePriority,_c=null,Tn=null;function _P(t){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(_c,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:EP,yP=Math.log,vP=Math.LN2;function EP(t){return t>>>=0,t===0?32:31-(yP(t)/vP|0)|0}var Cl=64,Pl=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Lo(a):(s&=o,s!==0&&(r=Lo(s)))}else o=n&~i,o!==0?r=Lo(o):s!==0&&(r=Lo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function wP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=wP(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Md(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _w(){var t=Cl;return Cl<<=1,!(Cl&4194240)&&(Cl=64),t}function Dh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function TP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function yw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vw,hp,Ew,ww,Iw,jd=!1,Rl=[],Ir=null,Tr=null,Sr=null,ua=new Map,ca=new Map,hr=[],SP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function E_(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function Io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ka(e),e!==null&&hp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AP(t,e,n,r,i){switch(e){case"focusin":return Ir=Io(Ir,t,e,n,r,i),!0;case"dragenter":return Tr=Io(Tr,t,e,n,r,i),!0;case"mouseover":return Sr=Io(Sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ua.set(s,Io(ua.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ca.set(s,Io(ca.get(s)||null,t,e,n,r,i)),!0}return!1}function Tw(t){var e=ai(t.target);if(e!==null){var n=Oi(e);if(n!==null){if(e=n.tag,e===13){if(e=hw(n),e!==null){t.blockedOn=e,Iw(t.priority,function(){Ew(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Dd=r,n.target.dispatchEvent(r),Dd=null}else return e=Ka(n),e!==null&&hp(e),t.blockedOn=n,!1;e.shift()}return!0}function w_(t,e,n){Xl(t)&&n.delete(e)}function CP(){jd=!1,Ir!==null&&Xl(Ir)&&(Ir=null),Tr!==null&&Xl(Tr)&&(Tr=null),Sr!==null&&Xl(Sr)&&(Sr=null),ua.forEach(w_),ca.forEach(w_)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,jd||(jd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,CP)))}function ha(t){function e(i){return To(i,t)}if(0<Rl.length){To(Rl[0],t);for(var n=1;n<Rl.length;n++){var r=Rl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&To(Ir,t),Tr!==null&&To(Tr,t),Sr!==null&&To(Sr,t),ua.forEach(e),ca.forEach(e),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)Tw(n),n.blockedOn===null&&hr.shift()}var ys=Zn.ReactCurrentBatchConfig,Pu=!0;function PP(t,e,n,r){var i=he,s=ys.transition;ys.transition=null;try{he=1,dp(t,e,n,r)}finally{he=i,ys.transition=s}}function RP(t,e,n,r){var i=he,s=ys.transition;ys.transition=null;try{he=4,dp(t,e,n,r)}finally{he=i,ys.transition=s}}function dp(t,e,n,r){if(Pu){var i=Fd(t,e,n,r);if(i===null)zh(t,e,r,Ru,n),E_(t,r);else if(AP(i,t,e,n,r))r.stopPropagation();else if(E_(t,r),e&4&&-1<SP.indexOf(t)){for(;i!==null;){var s=Ka(i);if(s!==null&&vw(s),s=Fd(t,e,n,r),s===null&&zh(t,e,r,Ru,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zh(t,e,r,null,n)}}var Ru=null;function Fd(t,e,n,r){if(Ru=null,t=lp(r),t=ai(t),t!==null)if(e=Oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ru=t,null}function Sw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mP()){case up:return 1;case mw:return 4;case Au:case gP:return 16;case gw:return 536870912;default:return 16}default:return 16}}var yr=null,fp=null,Zl=null;function Aw(){if(Zl)return Zl;var t,e=fp,n=e.length,r,i="value"in yr?yr.value:yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zl=i.slice(t,1<r?1-r:void 0)}function eu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function I_(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:I_,this.isPropagationStopped=I_,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pp=$t(Ws),qa=Ne({},Ws,{view:0,detail:0}),xP=$t(qa),Vh,Oh,So,yc=Ne({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Vh=t.screenX-So.screenX,Oh=t.screenY-So.screenY):Oh=Vh=0,So=t),Vh)},movementY:function(t){return"movementY"in t?t.movementY:Oh}}),T_=$t(yc),kP=Ne({},yc,{dataTransfer:0}),NP=$t(kP),bP=Ne({},qa,{relatedTarget:0}),Lh=$t(bP),DP=Ne({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),VP=$t(DP),OP=Ne({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LP=$t(OP),MP=Ne({},Ws,{data:0}),S_=$t(MP),jP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UP[t])?!!e[t]:!1}function mp(){return BP}var $P=Ne({},qa,{key:function(t){if(t.key){var e=jP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=eu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mp,charCode:function(t){return t.type==="keypress"?eu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?eu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zP=$t($P),qP=Ne({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),A_=$t(qP),KP=Ne({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mp}),GP=$t(KP),WP=Ne({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),HP=$t(WP),QP=Ne({},yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JP=$t(QP),YP=[9,13,27,32],gp=Gn&&"CompositionEvent"in window,Wo=null;Gn&&"documentMode"in document&&(Wo=document.documentMode);var XP=Gn&&"TextEvent"in window&&!Wo,Cw=Gn&&(!gp||Wo&&8<Wo&&11>=Wo),C_=" ",P_=!1;function Pw(t,e){switch(t){case"keyup":return YP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function ZP(t,e){switch(t){case"compositionend":return Rw(e);case"keypress":return e.which!==32?null:(P_=!0,C_);case"textInput":return t=e.data,t===C_&&P_?null:t;default:return null}}function eR(t,e){if(is)return t==="compositionend"||!gp&&Pw(t,e)?(t=Aw(),Zl=fp=yr=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cw&&e.locale!=="ko"?null:e.data;default:return null}}var tR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tR[t.type]:e==="textarea"}function xw(t,e,n,r){ow(r),e=xu(e,"onChange"),0<e.length&&(n=new pp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ho=null,da=null;function nR(t){Uw(t,0)}function vc(t){var e=as(t);if(ZE(e))return t}function rR(t,e){if(t==="change")return e}var kw=!1;if(Gn){var Mh;if(Gn){var jh="oninput"in document;if(!jh){var x_=document.createElement("div");x_.setAttribute("oninput","return;"),jh=typeof x_.oninput=="function"}Mh=jh}else Mh=!1;kw=Mh&&(!document.documentMode||9<document.documentMode)}function k_(){Ho&&(Ho.detachEvent("onpropertychange",Nw),da=Ho=null)}function Nw(t){if(t.propertyName==="value"&&vc(da)){var e=[];xw(e,da,t,lp(t)),cw(nR,e)}}function iR(t,e,n){t==="focusin"?(k_(),Ho=e,da=n,Ho.attachEvent("onpropertychange",Nw)):t==="focusout"&&k_()}function sR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(da)}function oR(t,e){if(t==="click")return vc(e)}function aR(t,e){if(t==="input"||t==="change")return vc(e)}function lR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:lR;function fa(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wd.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function N_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function b_(t,e){var n=N_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=N_(n)}}function bw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dw(){for(var t=window,e=Iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Iu(t.document)}return e}function _p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uR(t){var e=Dw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bw(n.ownerDocument.documentElement,n)){if(r!==null&&_p(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=b_(n,s);var o=b_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cR=Gn&&"documentMode"in document&&11>=document.documentMode,ss=null,Ud=null,Qo=null,Bd=!1;function D_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bd||ss==null||ss!==Iu(r)||(r=ss,"selectionStart"in r&&_p(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qo&&fa(Qo,r)||(Qo=r,r=xu(Ud,"onSelect"),0<r.length&&(e=new pp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ss)))}function kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Fh={},Vw={};Gn&&(Vw=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Ec(t){if(Fh[t])return Fh[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vw)return Fh[t]=e[n];return t}var Ow=Ec("animationend"),Lw=Ec("animationiteration"),Mw=Ec("animationstart"),jw=Ec("transitionend"),Fw=new Map,V_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){Fw.set(t,e),Vi(e,[t])}for(var Uh=0;Uh<V_.length;Uh++){var Bh=V_[Uh],hR=Bh.toLowerCase(),dR=Bh[0].toUpperCase()+Bh.slice(1);Fr(hR,"on"+dR)}Fr(Ow,"onAnimationEnd");Fr(Lw,"onAnimationIteration");Fr(Mw,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(jw,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function O_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hP(r,e,void 0,t),t.currentTarget=null}function Uw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;O_(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;O_(i,a,c),s=u}}}if(Su)throw t=Ld,Su=!1,Ld=null,t}function ve(t,e){var n=e[Gd];n===void 0&&(n=e[Gd]=new Set);var r=t+"__bubble";n.has(r)||(Bw(e,t,2,!1),n.add(r))}function $h(t,e,n){var r=0;e&&(r|=4),Bw(n,t,r,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Nl]){t[Nl]=!0,HE.forEach(function(n){n!=="selectionchange"&&(fR.has(n)||$h(n,!1,t),$h(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,$h("selectionchange",!1,e))}}function Bw(t,e,n,r){switch(Sw(e)){case 1:var i=PP;break;case 4:i=RP;break;default:i=dp}n=i.bind(null,e,n,t),i=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ai(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cw(function(){var c=s,h=lp(n),f=[];e:{var g=Fw.get(t);if(g!==void 0){var v=pp,P=t;switch(t){case"keypress":if(eu(n)===0)break e;case"keydown":case"keyup":v=zP;break;case"focusin":P="focus",v=Lh;break;case"focusout":P="blur",v=Lh;break;case"beforeblur":case"afterblur":v=Lh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=T_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=NP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=GP;break;case Ow:case Lw:case Mw:v=VP;break;case jw:v=HP;break;case"scroll":v=xP;break;case"wheel":v=JP;break;case"copy":case"cut":case"paste":v=LP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=A_}var N=(e&4)!==0,D=!N&&t==="scroll",S=N?g!==null?g+"Capture":null:g;N=[];for(var E=c,w;E!==null;){w=E;var b=w.stateNode;if(w.tag===5&&b!==null&&(w=b,S!==null&&(b=la(E,S),b!=null&&N.push(ma(E,b,w)))),D)break;E=E.return}0<N.length&&(g=new v(g,P,null,n,h),f.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==Dd&&(P=n.relatedTarget||n.fromElement)&&(ai(P)||P[Wn]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(P=n.relatedTarget||n.toElement,v=c,P=P?ai(P):null,P!==null&&(D=Oi(P),P!==D||P.tag!==5&&P.tag!==6)&&(P=null)):(v=null,P=c),v!==P)){if(N=T_,b="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=A_,b="onPointerLeave",S="onPointerEnter",E="pointer"),D=v==null?g:as(v),w=P==null?g:as(P),g=new N(b,E+"leave",v,n,h),g.target=D,g.relatedTarget=w,b=null,ai(h)===c&&(N=new N(S,E+"enter",P,n,h),N.target=w,N.relatedTarget=D,b=N),D=b,v&&P)t:{for(N=v,S=P,E=0,w=N;w;w=Gi(w))E++;for(w=0,b=S;b;b=Gi(b))w++;for(;0<E-w;)N=Gi(N),E--;for(;0<w-E;)S=Gi(S),w--;for(;E--;){if(N===S||S!==null&&N===S.alternate)break t;N=Gi(N),S=Gi(S)}N=null}else N=null;v!==null&&L_(f,g,v,N,!1),P!==null&&D!==null&&L_(f,D,P,N,!0)}}e:{if(g=c?as(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var F=rR;else if(R_(g))if(kw)F=aR;else{F=sR;var j=iR}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=oR);if(F&&(F=F(t,c))){xw(f,F,n,h);break e}j&&j(t,g,c),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Rd(g,"number",g.value)}switch(j=c?as(c):window,t){case"focusin":(R_(j)||j.contentEditable==="true")&&(ss=j,Ud=c,Qo=null);break;case"focusout":Qo=Ud=ss=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,D_(f,n,h);break;case"selectionchange":if(cR)break;case"keydown":case"keyup":D_(f,n,h)}var T;if(gp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else is?Pw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Cw&&n.locale!=="ko"&&(is||y!=="onCompositionStart"?y==="onCompositionEnd"&&is&&(T=Aw()):(yr=h,fp="value"in yr?yr.value:yr.textContent,is=!0)),j=xu(c,y),0<j.length&&(y=new S_(y,t,null,n,h),f.push({event:y,listeners:j}),T?y.data=T:(T=Rw(n),T!==null&&(y.data=T)))),(T=XP?ZP(t,n):eR(t,n))&&(c=xu(c,"onBeforeInput"),0<c.length&&(h=new S_("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}Uw(f,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=la(t,n),s!=null&&r.unshift(ma(t,s,i)),s=la(t,e),s!=null&&r.push(ma(t,s,i))),t=t.return}return r}function Gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function L_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=la(n,s),u!=null&&o.unshift(ma(n,u,a))):i||(u=la(n,s),u!=null&&o.push(ma(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pR=/\r\n?/g,mR=/\u0000|\uFFFD/g;function M_(t){return(typeof t=="string"?t:""+t).replace(pR,`
`).replace(mR,"")}function bl(t,e,n){if(e=M_(e),M_(t)!==e&&n)throw Error(B(425))}function ku(){}var $d=null,zd=null;function qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kd=typeof setTimeout=="function"?setTimeout:void 0,gR=typeof clearTimeout=="function"?clearTimeout:void 0,j_=typeof Promise=="function"?Promise:void 0,_R=typeof queueMicrotask=="function"?queueMicrotask:typeof j_<"u"?function(t){return j_.resolve(null).then(t).catch(yR)}:Kd;function yR(t){setTimeout(function(){throw t})}function qh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ha(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ha(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function F_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),vn="__reactFiber$"+Hs,ga="__reactProps$"+Hs,Wn="__reactContainer$"+Hs,Gd="__reactEvents$"+Hs,vR="__reactListeners$"+Hs,ER="__reactHandles$"+Hs;function ai(t){var e=t[vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=F_(t);t!==null;){if(n=t[vn])return n;t=F_(t)}return e}t=n,n=t.parentNode}return null}function Ka(t){return t=t[vn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function wc(t){return t[ga]||null}var Wd=[],ls=-1;function Ur(t){return{current:t}}function Ee(t){0>ls||(t.current=Wd[ls],Wd[ls]=null,ls--)}function ge(t,e){ls++,Wd[ls]=t.current,t.current=e}var Or={},ut=Ur(Or),Rt=Ur(!1),_i=Or;function Rs(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function xt(t){return t=t.childContextTypes,t!=null}function Nu(){Ee(Rt),Ee(ut)}function U_(t,e,n){if(ut.current!==Or)throw Error(B(168));ge(ut,e),ge(Rt,n)}function $w(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,iP(t)||"Unknown",i));return Ne({},n,r)}function bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,_i=ut.current,ge(ut,t),ge(Rt,Rt.current),!0}function B_(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=$w(t,e,_i),r.__reactInternalMemoizedMergedChildContext=t,Ee(Rt),Ee(ut),ge(ut,t)):Ee(Rt),ge(Rt,n)}var On=null,Ic=!1,Kh=!1;function zw(t){On===null?On=[t]:On.push(t)}function wR(t){Ic=!0,zw(t)}function Br(){if(!Kh&&On!==null){Kh=!0;var t=0,e=he;try{var n=On;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,Ic=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),pw(up,Br),i}finally{he=e,Kh=!1}}return null}var us=[],cs=0,Du=null,Vu=0,qt=[],Kt=0,yi=null,Ln=1,Mn="";function Zr(t,e){us[cs++]=Vu,us[cs++]=Du,Du=t,Vu=e}function qw(t,e,n){qt[Kt++]=Ln,qt[Kt++]=Mn,qt[Kt++]=yi,yi=t;var r=Ln;t=Mn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-cn(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function yp(t){t.return!==null&&(Zr(t,1),qw(t,1,0))}function vp(t){for(;t===Du;)Du=us[--cs],us[cs]=null,Vu=us[--cs],us[cs]=null;for(;t===yi;)yi=qt[--Kt],qt[Kt]=null,Mn=qt[--Kt],qt[Kt]=null,Ln=qt[--Kt],qt[Kt]=null}var Mt=null,Vt=null,Ie=!1,un=null;function Kw(t,e){var n=Gt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mt=t,Vt=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mt=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yi!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mt=t,Vt=null,!0):!1;default:return!1}}function Hd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(Ie){var e=Vt;if(e){var n=e;if(!$_(t,e)){if(Hd(t))throw Error(B(418));e=Ar(n.nextSibling);var r=Mt;e&&$_(t,e)?Kw(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Mt=t)}}else{if(Hd(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ie=!1,Mt=t}}}function z_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mt=t}function Dl(t){if(t!==Mt)return!1;if(!Ie)return z_(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qd(t.type,t.memoizedProps)),e&&(e=Vt)){if(Hd(t))throw Gw(),Error(B(418));for(;e;)Kw(t,e),e=Ar(e.nextSibling)}if(z_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Mt?Ar(t.stateNode.nextSibling):null;return!0}function Gw(){for(var t=Vt;t;)t=Ar(t.nextSibling)}function xs(){Vt=Mt=null,Ie=!1}function Ep(t){un===null?un=[t]:un.push(t)}var IR=Zn.ReactCurrentBatchConfig;function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Vl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function q_(t){var e=t._init;return e(t._payload)}function Ww(t){function e(S,E){if(t){var w=S.deletions;w===null?(S.deletions=[E],S.flags|=16):w.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function i(S,E){return S=xr(S,E),S.index=0,S.sibling=null,S}function s(S,E,w){return S.index=w,t?(w=S.alternate,w!==null?(w=w.index,w<E?(S.flags|=2,E):w):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,E,w,b){return E===null||E.tag!==6?(E=Xh(w,S.mode,b),E.return=S,E):(E=i(E,w),E.return=S,E)}function u(S,E,w,b){var F=w.type;return F===rs?h(S,E,w.props.children,b,w.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ur&&q_(F)===E.type)?(b=i(E,w.props),b.ref=Ao(S,E,w),b.return=S,b):(b=au(w.type,w.key,w.props,null,S.mode,b),b.ref=Ao(S,E,w),b.return=S,b)}function c(S,E,w,b){return E===null||E.tag!==4||E.stateNode.containerInfo!==w.containerInfo||E.stateNode.implementation!==w.implementation?(E=Zh(w,S.mode,b),E.return=S,E):(E=i(E,w.children||[]),E.return=S,E)}function h(S,E,w,b,F){return E===null||E.tag!==7?(E=fi(w,S.mode,b,F),E.return=S,E):(E=i(E,w),E.return=S,E)}function f(S,E,w){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Xh(""+E,S.mode,w),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Tl:return w=au(E.type,E.key,E.props,null,S.mode,w),w.ref=Ao(S,null,E),w.return=S,w;case ns:return E=Zh(E,S.mode,w),E.return=S,E;case ur:var b=E._init;return f(S,b(E._payload),w)}if(Oo(E)||Eo(E))return E=fi(E,S.mode,w,null),E.return=S,E;Vl(S,E)}return null}function g(S,E,w,b){var F=E!==null?E.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return F!==null?null:a(S,E,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Tl:return w.key===F?u(S,E,w,b):null;case ns:return w.key===F?c(S,E,w,b):null;case ur:return F=w._init,g(S,E,F(w._payload),b)}if(Oo(w)||Eo(w))return F!==null?null:h(S,E,w,b,null);Vl(S,w)}return null}function v(S,E,w,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(w)||null,a(E,S,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Tl:return S=S.get(b.key===null?w:b.key)||null,u(E,S,b,F);case ns:return S=S.get(b.key===null?w:b.key)||null,c(E,S,b,F);case ur:var j=b._init;return v(S,E,w,j(b._payload),F)}if(Oo(b)||Eo(b))return S=S.get(w)||null,h(E,S,b,F,null);Vl(E,b)}return null}function P(S,E,w,b){for(var F=null,j=null,T=E,y=E=0,A=null;T!==null&&y<w.length;y++){T.index>y?(A=T,T=null):A=T.sibling;var C=g(S,T,w[y],b);if(C===null){T===null&&(T=A);break}t&&T&&C.alternate===null&&e(S,T),E=s(C,E,y),j===null?F=C:j.sibling=C,j=C,T=A}if(y===w.length)return n(S,T),Ie&&Zr(S,y),F;if(T===null){for(;y<w.length;y++)T=f(S,w[y],b),T!==null&&(E=s(T,E,y),j===null?F=T:j.sibling=T,j=T);return Ie&&Zr(S,y),F}for(T=r(S,T);y<w.length;y++)A=v(T,S,y,w[y],b),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?y:A.key),E=s(A,E,y),j===null?F=A:j.sibling=A,j=A);return t&&T.forEach(function(R){return e(S,R)}),Ie&&Zr(S,y),F}function N(S,E,w,b){var F=Eo(w);if(typeof F!="function")throw Error(B(150));if(w=F.call(w),w==null)throw Error(B(151));for(var j=F=null,T=E,y=E=0,A=null,C=w.next();T!==null&&!C.done;y++,C=w.next()){T.index>y?(A=T,T=null):A=T.sibling;var R=g(S,T,C.value,b);if(R===null){T===null&&(T=A);break}t&&T&&R.alternate===null&&e(S,T),E=s(R,E,y),j===null?F=R:j.sibling=R,j=R,T=A}if(C.done)return n(S,T),Ie&&Zr(S,y),F;if(T===null){for(;!C.done;y++,C=w.next())C=f(S,C.value,b),C!==null&&(E=s(C,E,y),j===null?F=C:j.sibling=C,j=C);return Ie&&Zr(S,y),F}for(T=r(S,T);!C.done;y++,C=w.next())C=v(T,S,y,C.value,b),C!==null&&(t&&C.alternate!==null&&T.delete(C.key===null?y:C.key),E=s(C,E,y),j===null?F=C:j.sibling=C,j=C);return t&&T.forEach(function(x){return e(S,x)}),Ie&&Zr(S,y),F}function D(S,E,w,b){if(typeof w=="object"&&w!==null&&w.type===rs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Tl:e:{for(var F=w.key,j=E;j!==null;){if(j.key===F){if(F=w.type,F===rs){if(j.tag===7){n(S,j.sibling),E=i(j,w.props.children),E.return=S,S=E;break e}}else if(j.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===ur&&q_(F)===j.type){n(S,j.sibling),E=i(j,w.props),E.ref=Ao(S,j,w),E.return=S,S=E;break e}n(S,j);break}else e(S,j);j=j.sibling}w.type===rs?(E=fi(w.props.children,S.mode,b,w.key),E.return=S,S=E):(b=au(w.type,w.key,w.props,null,S.mode,b),b.ref=Ao(S,E,w),b.return=S,S=b)}return o(S);case ns:e:{for(j=w.key;E!==null;){if(E.key===j)if(E.tag===4&&E.stateNode.containerInfo===w.containerInfo&&E.stateNode.implementation===w.implementation){n(S,E.sibling),E=i(E,w.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=Zh(w,S.mode,b),E.return=S,S=E}return o(S);case ur:return j=w._init,D(S,E,j(w._payload),b)}if(Oo(w))return P(S,E,w,b);if(Eo(w))return N(S,E,w,b);Vl(S,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,E!==null&&E.tag===6?(n(S,E.sibling),E=i(E,w),E.return=S,S=E):(n(S,E),E=Xh(w,S.mode,b),E.return=S,S=E),o(S)):n(S,E)}return D}var ks=Ww(!0),Hw=Ww(!1),Ou=Ur(null),Lu=null,hs=null,wp=null;function Ip(){wp=hs=Lu=null}function Tp(t){var e=Ou.current;Ee(Ou),t._currentValue=e}function Jd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vs(t,e){Lu=t,wp=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(wp!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Lu===null)throw Error(B(308));hs=t,Lu.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var li=null;function Sp(t){li===null?li=[t]:li.push(t)}function Qw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function Ap(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Hn(t,n)}return i=r.interleaved,i===null?(e.next=e,Sp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Hn(t,n)}function tu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cp(t,n)}}function K_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mu(t,e,n,r){var i=t.updateQueue;cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var g=a.lane,v=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var P=t,N=a;switch(g=e,v=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){f=P.call(v,f,g);break e}f=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,g=typeof P=="function"?P.call(v,f,g):P,g==null)break e;f=Ne({},f,g);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,u=f):h=h.next=v,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ei|=o,t.lanes=o,t.memoizedState=f}}function G_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Ga={},Sn=Ur(Ga),_a=Ur(Ga),ya=Ur(Ga);function ui(t){if(t===Ga)throw Error(B(174));return t}function Cp(t,e){switch(ge(ya,e),ge(_a,t),ge(Sn,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kd(e,t)}Ee(Sn),ge(Sn,e)}function Ns(){Ee(Sn),Ee(_a),Ee(ya)}function Yw(t){ui(ya.current);var e=ui(Sn.current),n=kd(e,t.type);e!==n&&(ge(_a,t),ge(Sn,n))}function Pp(t){_a.current===t&&(Ee(Sn),Ee(_a))}var Ce=Ur(0);function ju(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gh=[];function Rp(){for(var t=0;t<Gh.length;t++)Gh[t]._workInProgressVersionPrimary=null;Gh.length=0}var nu=Zn.ReactCurrentDispatcher,Wh=Zn.ReactCurrentBatchConfig,vi=0,Re=null,Ue=null,Ke=null,Fu=!1,Jo=!1,va=0,TR=0;function it(){throw Error(B(321))}function xp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function kp(t,e,n,r,i,s){if(vi=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nu.current=t===null||t.memoizedState===null?PR:RR,t=n(r,i),Jo){s=0;do{if(Jo=!1,va=0,25<=s)throw Error(B(301));s+=1,Ke=Ue=null,e.updateQueue=null,nu.current=xR,t=n(r,i)}while(Jo)}if(nu.current=Uu,e=Ue!==null&&Ue.next!==null,vi=0,Ke=Ue=Re=null,Fu=!1,e)throw Error(B(300));return t}function Np(){var t=va!==0;return va=0,t}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Re.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Xt(){if(Ue===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ke===null?Re.memoizedState:Ke.next;if(e!==null)Ke=e,Ue=t;else{if(t===null)throw Error(B(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ke===null?Re.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Ea(t,e){return typeof e=="function"?e(t):e}function Hh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Ue,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((vi&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Re.lanes|=h,Ei|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,dn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(Pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Xw(){}function Zw(t,e){var n=Re,r=Xt(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,bp(nI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,wa(9,tI.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(B(349));vi&30||eI(n,e,i)}return i}function eI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tI(t,e,n,r){e.value=n,e.getSnapshot=r,rI(e)&&iI(t)}function nI(t,e,n){return n(function(){rI(e)&&iI(t)})}function rI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function iI(t){var e=Hn(t,1);e!==null&&hn(e,t,1,-1)}function W_(t){var e=yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=CR.bind(null,Re,t),[e.memoizedState,t]}function wa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sI(){return Xt().memoizedState}function ru(t,e,n,r){var i=yn();Re.flags|=t,i.memoizedState=wa(1|e,n,void 0,r===void 0?null:r)}function Tc(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Ue!==null){var o=Ue.memoizedState;if(s=o.destroy,r!==null&&xp(r,o.deps)){i.memoizedState=wa(e,n,s,r);return}}Re.flags|=t,i.memoizedState=wa(1|e,n,s,r)}function H_(t,e){return ru(8390656,8,t,e)}function bp(t,e){return Tc(2048,8,t,e)}function oI(t,e){return Tc(4,2,t,e)}function aI(t,e){return Tc(4,4,t,e)}function lI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uI(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4,4,lI.bind(null,e,t),n)}function Dp(){}function cI(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hI(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&xp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dI(t,e,n){return vi&21?(dn(n,e)||(n=_w(),Re.lanes|=n,Ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function SR(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=Wh.transition;Wh.transition={};try{t(!1),e()}finally{he=n,Wh.transition=r}}function fI(){return Xt().memoizedState}function AR(t,e,n){var r=Rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pI(t))mI(e,n);else if(n=Qw(t,e,n,r),n!==null){var i=yt();hn(n,t,r,i),gI(n,e,r)}}function CR(t,e,n){var r=Rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pI(t))mI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,dn(a,o)){var u=e.interleaved;u===null?(i.next=i,Sp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Qw(t,e,i,r),n!==null&&(i=yt(),hn(n,t,r,i),gI(n,e,r))}}function pI(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function mI(t,e){Jo=Fu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cp(t,n)}}var Uu={readContext:Yt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},PR={readContext:Yt,useCallback:function(t,e){return yn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:H_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ru(4194308,4,lI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ru(4194308,4,t,e)},useInsertionEffect:function(t,e){return ru(4,2,t,e)},useMemo:function(t,e){var n=yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AR.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=yn();return t={current:t},e.memoizedState=t},useState:W_,useDebugValue:Dp,useDeferredValue:function(t){return yn().memoizedState=t},useTransition:function(){var t=W_(!1),e=t[0];return t=SR.bind(null,t[1]),yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=yn();if(Ie){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Ge===null)throw Error(B(349));vi&30||eI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,H_(nI.bind(null,r,s,t),[t]),r.flags|=2048,wa(9,tI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yn(),e=Ge.identifierPrefix;if(Ie){var n=Mn,r=Ln;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RR={readContext:Yt,useCallback:cI,useContext:Yt,useEffect:bp,useImperativeHandle:uI,useInsertionEffect:oI,useLayoutEffect:aI,useMemo:hI,useReducer:Hh,useRef:sI,useState:function(){return Hh(Ea)},useDebugValue:Dp,useDeferredValue:function(t){var e=Xt();return dI(e,Ue.memoizedState,t)},useTransition:function(){var t=Hh(Ea)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:Xw,useSyncExternalStore:Zw,useId:fI,unstable_isNewReconciler:!1},xR={readContext:Yt,useCallback:cI,useContext:Yt,useEffect:bp,useImperativeHandle:uI,useInsertionEffect:oI,useLayoutEffect:aI,useMemo:hI,useReducer:Qh,useRef:sI,useState:function(){return Qh(Ea)},useDebugValue:Dp,useDeferredValue:function(t){var e=Xt();return Ue===null?e.memoizedState=t:dI(e,Ue.memoizedState,t)},useTransition:function(){var t=Qh(Ea)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:Xw,useSyncExternalStore:Zw,useId:fI,unstable_isNewReconciler:!1};function an(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Rr(t),s=$n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(hn(e,t,i,r),tu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Rr(t),s=$n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(hn(e,t,i,r),tu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=Rr(t),i=$n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cr(t,i,r),e!==null&&(hn(e,t,r,n),tu(e,t,r))}};function Q_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!fa(n,r)||!fa(i,s):!0}function _I(t,e,n){var r=!1,i=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=xt(e)?_i:ut.current,r=e.contextTypes,s=(r=r!=null)?Rs(t,i):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function J_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function Xd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ap(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=xt(e)?_i:ut.current,i.context=Rs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sc.enqueueReplaceState(i,i.state,null),Mu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",r=e;do n+=rP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Jh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kR=typeof WeakMap=="function"?WeakMap:Map;function yI(t,e,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$u||($u=!0,cf=r),Zd(t,e)},n}function vI(t,e,n){n=$n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zd(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Y_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qR.bind(null,t,e,n),e.then(t,t))}function X_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Z_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$n(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var NR=Zn.ReactCurrentOwner,Pt=!1;function mt(t,e,n,r){e.child=t===null?Hw(e,null,n,r):ks(e,t.child,n,r)}function ey(t,e,n,r,i){n=n.render;var s=e.ref;return vs(e,i),r=kp(t,e,n,r,s,i),n=Np(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Ie&&n&&yp(e),e.flags|=1,mt(t,e,r,i),e.child)}function ty(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,EI(t,e,s,r,i)):(t=au(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:fa,n(o,r)&&t.ref===e.ref)return Qn(t,e,i)}return e.flags|=1,t=xr(s,r),t.ref=e.ref,t.return=e,e.child=t}function EI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(fa(s,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Qn(t,e,i)}return ef(t,e,n,r,i)}function wI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(fs,Dt),Dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(fs,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(fs,Dt),Dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(fs,Dt),Dt|=r;return mt(t,e,i,n),e.child}function II(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ef(t,e,n,r,i){var s=xt(n)?_i:ut.current;return s=Rs(e,s),vs(e,i),n=kp(t,e,n,r,s,i),r=Np(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Ie&&r&&yp(e),e.flags|=1,mt(t,e,n,i),e.child)}function ny(t,e,n,r,i){if(xt(n)){var s=!0;bu(e)}else s=!1;if(vs(e,i),e.stateNode===null)iu(t,e),_I(e,n,r),Xd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yt(c):(c=xt(n)?_i:ut.current,c=Rs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&J_(e,o,r,c),cr=!1;var g=e.memoizedState;o.state=g,Mu(e,r,o,i),u=e.memoizedState,a!==r||g!==u||Rt.current||cr?(typeof h=="function"&&(Yd(e,n,h,r),u=e.memoizedState),(a=cr||Q_(e,n,a,r,g,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Jw(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:an(e.type,a),o.props=c,f=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Yt(u):(u=xt(n)?_i:ut.current,u=Rs(e,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==u)&&J_(e,o,r,u),cr=!1,g=e.memoizedState,o.state=g,Mu(e,r,o,i);var P=e.memoizedState;a!==f||g!==P||Rt.current||cr?(typeof v=="function"&&(Yd(e,n,v,r),P=e.memoizedState),(c=cr||Q_(e,n,c,r,g,P,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return tf(t,e,n,r,s,i)}function tf(t,e,n,r,i,s){II(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&B_(e,n,!1),Qn(t,e,s);r=e.stateNode,NR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,a,s)):mt(t,e,a,s),e.memoizedState=r.state,i&&B_(e,n,!0),e.child}function TI(t){var e=t.stateNode;e.pendingContext?U_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&U_(t,e.context,!1),Cp(t,e.containerInfo)}function ry(t,e,n,r,i){return xs(),Ep(i),e.flags|=256,mt(t,e,n,r),e.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function SI(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ce,i&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pc(o,r,0,null),t=fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rf(n),e.memoizedState=nf,t):Vp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=xr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xr(a,s):(s=fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nf,r}return s=t.child,t=s.sibling,r=xr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vp(t,e){return e=Pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ol(t,e,n,r){return r!==null&&Ep(r),ks(e,t.child,null,n),t=Vp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Jh(Error(B(422))),Ol(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Pc({mode:"visible",children:r.children},i,0,null),s=fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ks(e,t.child,null,o),e.child.memoizedState=rf(o),e.memoizedState=nf,s);if(!(e.mode&1))return Ol(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Jh(s,r,void 0),Ol(t,e,o,r)}if(a=(o&t.childLanes)!==0,Pt||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hn(t,i),hn(r,t,i,-1))}return Up(),r=Jh(Error(B(421))),Ol(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=Ar(i.nextSibling),Mt=e,Ie=!0,un=null,t!==null&&(qt[Kt++]=Ln,qt[Kt++]=Mn,qt[Kt++]=yi,Ln=t.id,Mn=t.overflow,yi=e),e=Vp(e,r.children),e.flags|=4096,e)}function iy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jd(t.return,e,n)}function Yh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function AI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iy(t,n,e);else if(t.tag===19)iy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ju(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ju(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yh(e,!0,n,null,s);break;case"together":Yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function iu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DR(t,e,n){switch(e.tag){case 3:TI(e),xs();break;case 5:Yw(e);break;case 1:xt(e.type)&&bu(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(Ou,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?SI(t,e,n):(ge(Ce,Ce.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);ge(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return AI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,wI(t,e,n)}return Qn(t,e,n)}var CI,sf,PI,RI;CI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sf=function(){};PI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ui(Sn.current);var s=null;switch(n){case"input":i=Cd(t,i),r=Cd(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=xd(t,i),r=xd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ku)}Nd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};RI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Co(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function VR(t,e,n){var r=e.pendingProps;switch(vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return xt(e.type)&&Nu(),st(e),null;case 3:return r=e.stateNode,Ns(),Ee(Rt),Ee(ut),Rp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(ff(un),un=null))),sf(t,e),st(e),null;case 5:Pp(e);var i=ui(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)PI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return st(e),null}if(t=ui(Sn.current),Dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vn]=e,r[ga]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Mo.length;i++)ve(Mo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":f_(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":m_(r,s),ve("invalid",r)}Nd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&bl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bl(r.textContent,a,t),i=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Sl(r),p_(r,s,!0);break;case"textarea":Sl(r),g_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ku)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vn]=e,t[ga]=r,CI(t,e,!1,!1),e.stateNode=t;e:{switch(o=bd(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mo.length;i++)ve(Mo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":f_(t,r),i=Cd(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ve("invalid",t);break;case"textarea":m_(t,r),i=xd(t,r),ve("invalid",t);break;default:i=r}Nd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?sw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&rw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&aa(t,u):typeof u=="number"&&aa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&ip(t,s,u,o))}switch(n){case"input":Sl(t),p_(t,r,!1);break;case"textarea":Sl(t),g_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ms(t,!!r.multiple,s,!1):r.defaultValue!=null&&ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ku)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)RI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ui(ya.current),ui(Sn.current),Dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[vn]=e,(s=r.nodeValue!==n)&&(t=Mt,t!==null))switch(t.tag){case 3:bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=e,e.stateNode=r}return st(e),null;case 13:if(Ee(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Vt!==null&&e.mode&1&&!(e.flags&128))Gw(),xs(),e.flags|=98560,s=!1;else if(s=Dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[vn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else un!==null&&(ff(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Be===0&&(Be=3):Up())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Ns(),sf(t,e),t===null&&pa(e.stateNode.containerInfo),st(e),null;case 10:return Tp(e.type._context),st(e),null;case 17:return xt(e.type)&&Nu(),st(e),null;case 19:if(Ee(Ce),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Co(s,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ju(t),o!==null){for(e.flags|=128,Co(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>Ds&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304)}else{if(!r)if(t=ju(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return st(e),null}else 2*Le()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,r=!0,Co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Ce.current,ge(Ce,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Fp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Dt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function OR(t,e){switch(vp(e),e.tag){case 1:return xt(e.type)&&Nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),Ee(Rt),Ee(ut),Rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pp(e),null;case 13:if(Ee(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ce),null;case 4:return Ns(),null;case 10:return Tp(e.type._context),null;case 22:case 23:return Fp(),null;case 24:return null;default:return null}}var Ll=!1,at=!1,LR=typeof WeakSet=="function"?WeakSet:Set,G=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function of(t,e,n){try{n()}catch(r){De(t,e,r)}}var sy=!1;function MR(t,e){if($d=Pu,t=Dw(),_p(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,g=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++h===r&&(u=o),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(zd={focusedElem:t,selectionRange:n},Pu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,D=P.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:an(e.type,N),D);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){De(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return P=sy,sy=!1,P}function Yo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&of(e,n,s)}i=i.next}while(i!==r)}}function Ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xI(t){var e=t.alternate;e!==null&&(t.alternate=null,xI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vn],delete e[ga],delete e[Gd],delete e[vR],delete e[ER])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kI(t){return t.tag===5||t.tag===3||t.tag===4}function oy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ku));else if(r!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}function uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}var He=null,ln=!1;function sr(t,e,n){for(n=n.child;n!==null;)NI(t,e,n),n=n.sibling}function NI(t,e,n){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(_c,n)}catch{}switch(n.tag){case 5:at||ds(n,e);case 6:var r=He,i=ln;He=null,sr(t,e,n),He=r,ln=i,He!==null&&(ln?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(ln?(t=He,n=n.stateNode,t.nodeType===8?qh(t.parentNode,n):t.nodeType===1&&qh(t,n),ha(t)):qh(He,n.stateNode));break;case 4:r=He,i=ln,He=n.stateNode.containerInfo,ln=!0,sr(t,e,n),He=r,ln=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&of(n,e,o),i=i.next}while(i!==r)}sr(t,e,n);break;case 1:if(!at&&(ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){De(n,e,a)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,sr(t,e,n),at=r):sr(t,e,n);break;default:sr(t,e,n)}}function ay(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LR),e.forEach(function(r){var i=GR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,ln=!1;break e;case 3:He=a.stateNode.containerInfo,ln=!0;break e;case 4:He=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(He===null)throw Error(B(160));NI(s,o,i),He=null,ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bI(e,t),e=e.sibling}function bI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),_n(t),r&4){try{Yo(3,t,t.return),Ac(3,t)}catch(N){De(t,t.return,N)}try{Yo(5,t,t.return)}catch(N){De(t,t.return,N)}}break;case 1:on(e,t),_n(t),r&512&&n!==null&&ds(n,n.return);break;case 5:if(on(e,t),_n(t),r&512&&n!==null&&ds(n,n.return),t.flags&32){var i=t.stateNode;try{aa(i,"")}catch(N){De(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ew(i,s),bd(a,o);var c=bd(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?sw(i,f):h==="dangerouslySetInnerHTML"?rw(i,f):h==="children"?aa(i,f):ip(i,h,f,c)}switch(a){case"input":Pd(i,s);break;case"textarea":tw(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ms(i,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?ms(i,!!s.multiple,s.defaultValue,!0):ms(i,!!s.multiple,s.multiple?[]:"",!1))}i[ga]=s}catch(N){De(t,t.return,N)}}break;case 6:if(on(e,t),_n(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){De(t,t.return,N)}}break;case 3:if(on(e,t),_n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(N){De(t,t.return,N)}break;case 4:on(e,t),_n(t);break;case 13:on(e,t),_n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mp=Le())),r&4&&ay(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(at=(c=at)||h,on(e,t),at=c):on(e,t),_n(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(f=G=h;G!==null;){switch(g=G,v=g.child,g.tag){case 0:case 11:case 14:case 15:Yo(4,g,g.return);break;case 1:ds(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){De(r,n,N)}}break;case 5:ds(g,g.return);break;case 22:if(g.memoizedState!==null){uy(f);continue}}v!==null?(v.return=g,G=v):uy(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=iw("display",o))}catch(N){De(t,t.return,N)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(N){De(t,t.return,N)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:on(e,t),_n(t),r&4&&ay(t);break;case 21:break;default:on(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kI(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(aa(i,""),r.flags&=-33);var s=oy(t);uf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=oy(t);lf(t,a,o);break;default:throw Error(B(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jR(t,e,n){G=t,DI(t)}function DI(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ll;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||at;a=Ll;var c=at;if(Ll=o,(at=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?cy(i):u!==null?(u.return=o,G=u):cy(i);for(;s!==null;)G=s,DI(s),s=s.sibling;G=i,Ll=a,at=c}ly(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):ly(t)}}function ly(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||Ac(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&G_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}G_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ha(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}at||e.flags&512&&af(e)}catch(g){De(e,e.return,g)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function uy(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function cy(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ac(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{af(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{af(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var FR=Math.ceil,Bu=Zn.ReactCurrentDispatcher,Op=Zn.ReactCurrentOwner,Qt=Zn.ReactCurrentBatchConfig,oe=0,Ge=null,je=null,Ze=0,Dt=0,fs=Ur(0),Be=0,Ia=null,Ei=0,Cc=0,Lp=0,Xo=null,At=null,Mp=0,Ds=1/0,Dn=null,$u=!1,cf=null,Pr=null,Ml=!1,vr=null,zu=0,Zo=0,hf=null,su=-1,ou=0;function yt(){return oe&6?Le():su!==-1?su:su=Le()}function Rr(t){return t.mode&1?oe&2&&Ze!==0?Ze&-Ze:IR.transition!==null?(ou===0&&(ou=_w()),ou):(t=he,t!==0||(t=window.event,t=t===void 0?16:Sw(t.type)),t):1}function hn(t,e,n,r){if(50<Zo)throw Zo=0,hf=null,Error(B(185));za(t,n,r),(!(oe&2)||t!==Ge)&&(t===Ge&&(!(oe&2)&&(Cc|=n),Be===4&&dr(t,Ze)),kt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ds=Le()+500,Ic&&Br()))}function kt(t,e){var n=t.callbackNode;IP(t,e);var r=Cu(t,t===Ge?Ze:0);if(r===0)n!==null&&v_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&v_(n),e===1)t.tag===0?wR(hy.bind(null,t)):zw(hy.bind(null,t)),_R(function(){!(oe&6)&&Br()}),n=null;else{switch(yw(r)){case 1:n=up;break;case 4:n=mw;break;case 16:n=Au;break;case 536870912:n=gw;break;default:n=Au}n=BI(n,VI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function VI(t,e){if(su=-1,ou=0,oe&6)throw Error(B(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var r=Cu(t,t===Ge?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qu(t,r);else{e=r;var i=oe;oe|=2;var s=LI();(Ge!==t||Ze!==e)&&(Dn=null,Ds=Le()+500,di(t,e));do try{$R();break}catch(a){OI(t,a)}while(!0);Ip(),Bu.current=s,oe=i,je!==null?e=0:(Ge=null,Ze=0,e=Be)}if(e!==0){if(e===2&&(i=Md(t),i!==0&&(r=i,e=df(t,i))),e===1)throw n=Ia,di(t,0),dr(t,r),kt(t,Le()),n;if(e===6)dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!UR(i)&&(e=qu(t,r),e===2&&(s=Md(t),s!==0&&(r=s,e=df(t,s))),e===1))throw n=Ia,di(t,0),dr(t,r),kt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ei(t,At,Dn);break;case 3:if(dr(t,r),(r&130023424)===r&&(e=Mp+500-Le(),10<e)){if(Cu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Kd(ei.bind(null,t,At,Dn),e);break}ei(t,At,Dn);break;case 4:if(dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FR(r/1960))-r,10<r){t.timeoutHandle=Kd(ei.bind(null,t,At,Dn),r);break}ei(t,At,Dn);break;case 5:ei(t,At,Dn);break;default:throw Error(B(329))}}}return kt(t,Le()),t.callbackNode===n?VI.bind(null,t):null}function df(t,e){var n=Xo;return t.current.memoizedState.isDehydrated&&(di(t,e).flags|=256),t=qu(t,e),t!==2&&(e=At,At=n,e!==null&&ff(e)),t}function ff(t){At===null?At=t:At.push.apply(At,t)}function UR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~Lp,e&=~Cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function hy(t){if(oe&6)throw Error(B(327));Es();var e=Cu(t,0);if(!(e&1))return kt(t,Le()),null;var n=qu(t,e);if(t.tag!==0&&n===2){var r=Md(t);r!==0&&(e=r,n=df(t,r))}if(n===1)throw n=Ia,di(t,0),dr(t,e),kt(t,Le()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ei(t,At,Dn),kt(t,Le()),null}function jp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ds=Le()+500,Ic&&Br())}}function wi(t){vr!==null&&vr.tag===0&&!(oe&6)&&Es();var e=oe;oe|=1;var n=Qt.transition,r=he;try{if(Qt.transition=null,he=1,t)return t()}finally{he=r,Qt.transition=n,oe=e,!(oe&6)&&Br()}}function Fp(){Dt=fs.current,Ee(fs)}function di(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gR(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(vp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nu();break;case 3:Ns(),Ee(Rt),Ee(ut),Rp();break;case 5:Pp(r);break;case 4:Ns();break;case 13:Ee(Ce);break;case 19:Ee(Ce);break;case 10:Tp(r.type._context);break;case 22:case 23:Fp()}n=n.return}if(Ge=t,je=t=xr(t.current,null),Ze=Dt=e,Be=0,Ia=null,Lp=Cc=Ei=0,At=Xo=null,li!==null){for(e=0;e<li.length;e++)if(n=li[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}li=null}return t}function OI(t,e){do{var n=je;try{if(Ip(),nu.current=Uu,Fu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fu=!1}if(vi=0,Ke=Ue=Re=null,Jo=!1,va=0,Op.current=null,n===null||n.return===null){Be=1,Ia=e,je=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ze,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=X_(o);if(v!==null){v.flags&=-257,Z_(v,o,a,s,e),v.mode&1&&Y_(s,c,e),e=v,u=c;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){Y_(s,c,e),Up();break e}u=Error(B(426))}}else if(Ie&&a.mode&1){var D=X_(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Z_(D,o,a,s,e),Ep(bs(u,a));break e}}s=u=bs(u,a),Be!==4&&(Be=2),Xo===null?Xo=[s]:Xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=yI(s,u,e);K_(s,S);break e;case 1:a=u;var E=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Pr===null||!Pr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=vI(s,a,e);K_(s,b);break e}}s=s.return}while(s!==null)}jI(n)}catch(F){e=F,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function LI(){var t=Bu.current;return Bu.current=Uu,t===null?Uu:t}function Up(){(Be===0||Be===3||Be===2)&&(Be=4),Ge===null||!(Ei&268435455)&&!(Cc&268435455)||dr(Ge,Ze)}function qu(t,e){var n=oe;oe|=2;var r=LI();(Ge!==t||Ze!==e)&&(Dn=null,di(t,e));do try{BR();break}catch(i){OI(t,i)}while(!0);if(Ip(),oe=n,Bu.current=r,je!==null)throw Error(B(261));return Ge=null,Ze=0,Be}function BR(){for(;je!==null;)MI(je)}function $R(){for(;je!==null&&!fP();)MI(je)}function MI(t){var e=UI(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?jI(t):je=e,Op.current=null}function jI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OR(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,je=null;return}}else if(n=VR(n,e,Dt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Be===0&&(Be=5)}function ei(t,e,n){var r=he,i=Qt.transition;try{Qt.transition=null,he=1,zR(t,e,n,r)}finally{Qt.transition=i,he=r}return null}function zR(t,e,n,r){do Es();while(vr!==null);if(oe&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TP(t,s),t===Ge&&(je=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ml||(Ml=!0,BI(Au,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=he;he=1;var a=oe;oe|=4,Op.current=null,MR(t,n),bI(n,t),uR(zd),Pu=!!$d,zd=$d=null,t.current=n,jR(n),pP(),oe=a,he=o,Qt.transition=s}else t.current=n;if(Ml&&(Ml=!1,vr=t,zu=i),s=t.pendingLanes,s===0&&(Pr=null),_P(n.stateNode),kt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($u)throw $u=!1,t=cf,cf=null,t;return zu&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===hf?Zo++:(Zo=0,hf=t):Zo=0,Br(),null}function Es(){if(vr!==null){var t=yw(zu),e=Qt.transition,n=he;try{if(Qt.transition=null,he=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,zu=0,oe&6)throw Error(B(331));var i=oe;for(oe|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(G=c;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:Yo(8,h,s)}var f=h.child;if(f!==null)f.return=h,G=f;else for(;G!==null;){h=G;var g=h.sibling,v=h.return;if(xI(h),h===c){G=null;break}if(g!==null){g.return=v,G=g;break}G=v}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,G=S;break e}G=s.return}}var E=t.current;for(G=E;G!==null;){o=G;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,G=w;else e:for(o=E;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ac(9,a)}}catch(F){De(a,a.return,F)}if(a===o){G=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,G=b;break e}G=a.return}}if(oe=i,Br(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(_c,t)}catch{}r=!0}return r}finally{he=n,Qt.transition=e}}return!1}function dy(t,e,n){e=bs(n,e),e=yI(t,e,1),t=Cr(t,e,1),e=yt(),t!==null&&(za(t,1,e),kt(t,e))}function De(t,e,n){if(t.tag===3)dy(t,t,n);else for(;e!==null;){if(e.tag===3){dy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=bs(n,t),t=vI(e,t,1),e=Cr(e,t,1),t=yt(),e!==null&&(za(e,1,t),kt(e,t));break}}e=e.return}}function qR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Ze&n)===n&&(Be===4||Be===3&&(Ze&130023424)===Ze&&500>Le()-Mp?di(t,0):Lp|=n),kt(t,e)}function FI(t,e){e===0&&(t.mode&1?(e=Pl,Pl<<=1,!(Pl&130023424)&&(Pl=4194304)):e=1);var n=yt();t=Hn(t,e),t!==null&&(za(t,e,n),kt(t,n))}function KR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),FI(t,n)}function GR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),FI(t,n)}var UI;UI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,DR(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,Ie&&e.flags&1048576&&qw(e,Vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;iu(t,e),t=e.pendingProps;var i=Rs(e,ut.current);vs(e,n),i=kp(null,e,r,t,i,n);var s=Np();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(s=!0,bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ap(e),i.updater=Sc,e.stateNode=i,i._reactInternals=e,Xd(e,r,t,n),e=tf(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&yp(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(iu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=HR(r),t=an(r,t),i){case 0:e=ef(null,e,r,t,n);break e;case 1:e=ny(null,e,r,t,n);break e;case 11:e=ey(null,e,r,t,n);break e;case 14:e=ty(null,e,r,an(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),ef(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),ny(t,e,r,i,n);case 3:e:{if(TI(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Jw(t,e),Mu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=bs(Error(B(423)),e),e=ry(t,e,r,n,i);break e}else if(r!==i){i=bs(Error(B(424)),e),e=ry(t,e,r,n,i);break e}else for(Vt=Ar(e.stateNode.containerInfo.firstChild),Mt=e,Ie=!0,un=null,n=Hw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),r===i){e=Qn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return Yw(e),t===null&&Qd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qd(r,i)?o=null:s!==null&&qd(r,s)&&(e.flags|=32),II(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return SI(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ks(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),ey(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(Ou,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!Rt.current){e=Qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=$n(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Jd(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vs(e,n),i=Yt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),ty(t,e,r,i,n);case 15:return EI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),iu(t,e),e.tag=1,xt(r)?(t=!0,bu(e)):t=!1,vs(e,n),_I(e,r,i),Xd(e,r,i,n),tf(null,e,r,!0,t,n);case 19:return AI(t,e,n);case 22:return wI(t,e,n)}throw Error(B(156,e.tag))};function BI(t,e){return pw(t,e)}function WR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(t,e,n,r){return new WR(t,e,n,r)}function Bp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HR(t){if(typeof t=="function")return Bp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===op)return 11;if(t===ap)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Gt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function au(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return fi(n.children,i,s,e);case sp:o=8,i|=8;break;case Id:return t=Gt(12,n,e,i|2),t.elementType=Id,t.lanes=s,t;case Td:return t=Gt(13,n,e,i),t.elementType=Td,t.lanes=s,t;case Sd:return t=Gt(19,n,e,i),t.elementType=Sd,t.lanes=s,t;case YE:return Pc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case QE:o=10;break e;case JE:o=9;break e;case op:o=11;break e;case ap:o=14;break e;case ur:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Gt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fi(t,e,n,r){return t=Gt(7,t,r,e),t.lanes=n,t}function Pc(t,e,n,r){return t=Gt(22,t,r,e),t.elementType=YE,t.lanes=n,t.stateNode={isHidden:!1},t}function Xh(t,e,n){return t=Gt(6,t,null,e),t.lanes=n,t}function Zh(t,e,n){return e=Gt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dh(0),this.expirationTimes=Dh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $p(t,e,n,r,i,s,o,a,u){return t=new QR(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ap(s),t}function JR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $I(t){if(!t)return Or;t=t._reactInternals;e:{if(Oi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(xt(n))return $w(t,n,e)}return e}function zI(t,e,n,r,i,s,o,a,u){return t=$p(n,r,!0,t,i,s,o,a,u),t.context=$I(null),n=t.current,r=yt(),i=Rr(n),s=$n(r,i),s.callback=e??null,Cr(n,s,i),t.current.lanes=i,za(t,i,r),kt(t,r),t}function Rc(t,e,n,r){var i=e.current,s=yt(),o=Rr(i);return n=$I(n),e.context===null?e.context=n:e.pendingContext=n,e=$n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cr(i,e,o),t!==null&&(hn(t,i,o,s),tu(t,i,o)),o}function Ku(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zp(t,e){fy(t,e),(t=t.alternate)&&fy(t,e)}function YR(){return null}var qI=typeof reportError=="function"?reportError:function(t){console.error(t)};function qp(t){this._internalRoot=t}xc.prototype.render=qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Rc(t,e,null,null)};xc.prototype.unmount=qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wi(function(){Rc(null,t,null,null)}),e[Wn]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ww();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&Tw(t)}};function Kp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function py(){}function XR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ku(o);s.call(c)}}var o=zI(e,r,t,0,null,!1,!1,"",py);return t._reactRootContainer=o,t[Wn]=o.current,pa(t.nodeType===8?t.parentNode:t),wi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ku(u);a.call(c)}}var u=$p(t,0,!1,null,null,!1,!1,"",py);return t._reactRootContainer=u,t[Wn]=u.current,pa(t.nodeType===8?t.parentNode:t),wi(function(){Rc(e,u,n,r)}),u}function Nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Ku(o);a.call(u)}}Rc(e,o,t,i)}else o=XR(n,e,t,i,r);return Ku(o)}vw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(cp(e,n|1),kt(e,Le()),!(oe&6)&&(Ds=Le()+500,Br()))}break;case 13:wi(function(){var r=Hn(t,1);if(r!==null){var i=yt();hn(r,t,1,i)}}),zp(t,1)}};hp=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=yt();hn(e,t,134217728,n)}zp(t,134217728)}};Ew=function(t){if(t.tag===13){var e=Rr(t),n=Hn(t,e);if(n!==null){var r=yt();hn(n,t,e,r)}zp(t,e)}};ww=function(){return he};Iw=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Vd=function(t,e,n){switch(e){case"input":if(Pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wc(r);if(!i)throw Error(B(90));ZE(r),Pd(r,i)}}}break;case"textarea":tw(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};lw=jp;uw=wi;var ZR={usingClientEntryPoint:!1,Events:[Ka,as,wc,ow,aw,jp]},Po={findFiberByHostInstance:ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dw(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||YR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{_c=jl.inject(ex),Tn=jl}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZR;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kp(e))throw Error(B(200));return JR(t,e,null,n)};Bt.createRoot=function(t,e){if(!Kp(t))throw Error(B(299));var n=!1,r="",i=qI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$p(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,pa(t.nodeType===8?t.parentNode:t),new qp(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=dw(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return wi(t)};Bt.hydrate=function(t,e,n){if(!kc(e))throw Error(B(200));return Nc(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!Kp(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=qI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zI(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,pa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xc(e)};Bt.render=function(t,e,n){if(!kc(e))throw Error(B(200));return Nc(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!kc(t))throw Error(B(40));return t._reactRootContainer?(wi(function(){Nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};Bt.unstable_batchedUpdates=jp;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Nc(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function KI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KI)}catch(t){console.error(t)}}KI(),KE.exports=Bt;var tx=KE.exports,GI,my=tx;GI=my.createRoot,my.hydrateRoot;const nx="modulepreload",rx=function(t){return"/"+t},gy={},ix=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=rx(u),u in gy)return;gy[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":nx,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function sx(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let a,u,c;const h=async(g=!0)=>{await u,await(c==null?void 0:c())};async function f(){if("serviceWorker"in navigator){if(a=await ix(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/sw.js",{scope:"/",type:"classic"})).catch(g=>{o==null||o(g)}),!a)return;c=async()=>{await(a==null?void 0:a.messageSkipWaiting())};{let g=!1;const v=()=>{g=!0,a==null||a.addEventListener("controlling",P=>{P.isUpdate&&window.location.reload()}),n==null||n()};a.addEventListener("installed",P=>{typeof P.isUpdate>"u"?typeof P.isExternal<"u"?P.isExternal?v():!g&&(r==null||r()):P.isExternal?window.location.reload():!g&&(r==null||r()):P.isUpdate||r==null||r()}),a.addEventListener("waiting",v),a.addEventListener("externalwaiting",v)}a.register({immediate:e}).then(g=>{s?s("/sw.js",g):i==null||i(g)}).catch(g=>{o==null||o(g)})}}return u=f(),h}/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ta.apply(null,arguments)}var Er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Er||(Er={}));const _y="popstate";function ox(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return pf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Gu(i)}return lx(e,n,null,t)}function xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function WI(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ax(){return Math.random().toString(36).substr(2,8)}function yy(t,e){return{usr:t.state,key:t.key,idx:e}}function pf(t,e,n,r){return n===void 0&&(n=null),Ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Qs(e):e,{state:n,key:e&&e.key||r||ax()})}function Gu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Qs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Er.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Ta({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Er.Pop;let D=h(),S=D==null?null:D-c;c=D,u&&u({action:a,location:N.location,delta:S})}function g(D,S){a=Er.Push;let E=pf(N.location,D,S);c=h()+1;let w=yy(E,c),b=N.createHref(E);try{o.pushState(w,"",b)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(b)}s&&u&&u({action:a,location:N.location,delta:1})}function v(D,S){a=Er.Replace;let E=pf(N.location,D,S);c=h();let w=yy(E,c),b=N.createHref(E);o.replaceState(w,"",b),s&&u&&u({action:a,location:N.location,delta:0})}function P(D){let S=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof D=="string"?D:Gu(D);return E=E.replace(/ $/,"%20"),xe(S,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,S)}let N={get action(){return a},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(_y,f),u=D,()=>{i.removeEventListener(_y,f),u=null}},createHref(D){return e(i,D)},createURL:P,encodeLocation(D){let S=P(D);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:v,go(D){return o.go(D)}};return N}var vy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vy||(vy={}));function ux(t,e,n){return n===void 0&&(n="/"),cx(t,e,n)}function cx(t,e,n,r){let i=typeof e=="string"?Qs(e):e,s=Vs(i.pathname||"/",n);if(s==null)return null;let o=HI(t);hx(o);let a=null,u=Ix(s);for(let c=0;a==null&&c<o.length;++c)a=Ex(o[c],u);return a}function HI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(xe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=kr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(xe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),HI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:yx(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of QI(s.path))i(s,o,u)}),e}function QI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=QI(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function hx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dx=/^:[\w-]+$/,fx=3,px=2,mx=1,gx=10,_x=-2,Ey=t=>t==="*";function yx(t,e){let n=t.split("/"),r=n.length;return n.some(Ey)&&(r+=_x),e&&(r+=px),n.filter(i=>!Ey(i)).reduce((i,s)=>i+(dx.test(s)?fx:s===""?mx:gx),r)}function vx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ex(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=mf({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:kr([s,f.pathname]),pathnameBase:Ax(kr([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=kr([s,f.pathnameBase]))}return o}function mf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:g,isOptional:v}=h;if(g==="*"){let N=a[f]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const P=a[f];return v&&!P?c[g]=void 0:c[g]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function wx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),WI(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ix(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return WI(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Tx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qs(t):t,s;return n?(n=JI(n),n.startsWith("/")?s=wy(n.substring(1),"/"):s=wy(n,e)):s=e,{pathname:s,search:Cx(r),hash:Px(i)}}function wy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ed(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Gp(t,e){let n=Sx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Qs(t):(i=Ta({},t),xe(!i.pathname||!i.pathname.includes("?"),ed("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),ed("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),ed("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let u=Tx(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const JI=t=>t.replace(/\/\/+/g,"/"),kr=t=>JI(t.join("/")),Ax=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Cx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Px=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Rx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const YI=["post","put","patch","delete"];new Set(YI);const xx=["get",...YI];new Set(xx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sa(){return Sa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sa.apply(null,arguments)}const bc=k.createContext(null),XI=k.createContext(null),er=k.createContext(null),Dc=k.createContext(null),$r=k.createContext({outlet:null,matches:[],isDataRoute:!1}),ZI=k.createContext(null);function kx(t,e){let{relative:n}=e===void 0?{}:e;Js()||xe(!1);let{basename:r,navigator:i}=k.useContext(er),{hash:s,pathname:o,search:a}=Vc(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:kr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Js(){return k.useContext(Dc)!=null}function Ys(){return Js()||xe(!1),k.useContext(Dc).location}function eT(t){k.useContext(er).static||k.useLayoutEffect(t)}function tT(){let{isDataRoute:t}=k.useContext($r);return t?zx():Nx()}function Nx(){Js()||xe(!1);let t=k.useContext(bc),{basename:e,future:n,navigator:r}=k.useContext(er),{matches:i}=k.useContext($r),{pathname:s}=Ys(),o=JSON.stringify(Gp(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return eT(()=>{a.current=!0}),k.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Wp(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:kr([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function Vc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=k.useContext(er),{matches:i}=k.useContext($r),{pathname:s}=Ys(),o=JSON.stringify(Gp(i,r.v7_relativeSplatPath));return k.useMemo(()=>Wp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function bx(t,e){return Dx(t,e)}function Dx(t,e,n,r){Js()||xe(!1);let{navigator:i}=k.useContext(er),{matches:s}=k.useContext($r),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Ys(),h;if(e){var f;let D=typeof e=="string"?Qs(e):e;u==="/"||(f=D.pathname)!=null&&f.startsWith(u)||xe(!1),h=D}else h=c;let g=h.pathname||"/",v=g;if(u!=="/"){let D=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(D.length).join("/")}let P=ux(t,{pathname:v}),N=jx(P&&P.map(D=>Object.assign({},D,{params:Object.assign({},a,D.params),pathname:kr([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:kr([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&N?k.createElement(Dc.Provider,{value:{location:Sa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Er.Pop}},N):N}function Vx(){let t=$x(),e=Rx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const Ox=k.createElement(Vx,null);class Lx extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement($r.Provider,{value:this.props.routeContext},k.createElement(ZI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Mx(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(bc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement($r.Provider,{value:e},r)}function jx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||xe(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:g,errors:v}=n,P=f.route.loader&&g[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,g)=>{let v,P=!1,N=null,D=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,N=f.route.errorElement||Ox,u&&(c<0&&g===0?(qx("route-fallback"),P=!0,D=null):c===g&&(P=!0,D=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,g+1)),E=()=>{let w;return v?w=N:P?w=D:f.route.Component?w=k.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=h,k.createElement(Mx,{match:f,routeContext:{outlet:h,matches:S,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?k.createElement(Lx,{location:n.location,revalidation:n.revalidation,component:N,error:v,children:E(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):E()},null)}var nT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(nT||{}),rT=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(rT||{});function Fx(t){let e=k.useContext(bc);return e||xe(!1),e}function Ux(t){let e=k.useContext(XI);return e||xe(!1),e}function Bx(t){let e=k.useContext($r);return e||xe(!1),e}function iT(t){let e=Bx(),n=e.matches[e.matches.length-1];return n.route.id||xe(!1),n.route.id}function $x(){var t;let e=k.useContext(ZI),n=Ux(),r=iT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function zx(){let{router:t}=Fx(nT.UseNavigateStable),e=iT(rT.UseNavigateStable),n=k.useRef(!1);return eT(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Sa({fromRouteId:e},s)))},[t,e])}const Iy={};function qx(t,e,n){Iy[t]||(Iy[t]=!0)}function Kx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Gx(t){let{to:e,replace:n,state:r,relative:i}=t;Js()||xe(!1);let{future:s,static:o}=k.useContext(er),{matches:a}=k.useContext($r),{pathname:u}=Ys(),c=tT(),h=Wp(e,Gp(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(h);return k.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function bn(t){xe(!1)}function Wx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Er.Pop,navigator:s,static:o=!1,future:a}=t;Js()&&xe(!1);let u=e.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:s,static:o,future:Sa({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Qs(r));let{pathname:h="/",search:f="",hash:g="",state:v=null,key:P="default"}=r,N=k.useMemo(()=>{let D=Vs(h,u);return D==null?null:{location:{pathname:D,search:f,hash:g,state:v,key:P},navigationType:i}},[u,h,f,g,v,P,i]);return N==null?null:k.createElement(er.Provider,{value:c},k.createElement(Dc.Provider,{children:n,value:N}))}function Hx(t){let{children:e,location:n}=t;return bx(gf(e),n)}new Promise(()=>{});function gf(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,gf(r.props.children,s));return}r.type!==bn&&xe(!1),!r.props.index||!r.props.children||xe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=gf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wu(){return Wu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wu.apply(null,arguments)}function sT(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function Qx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Jx(t,e){return t.button===0&&(!e||e==="_self")&&!Qx(t)}const Yx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Xx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Zx="6";try{window.__reactRouterVersion=Zx}catch{}const ek=k.createContext({isTransitioning:!1}),tk="startTransition",Ty=qC[tk];function nk(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=ox({window:i,v5Compat:!0}));let o=s.current,[a,u]=k.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=k.useCallback(f=>{c&&Ty?Ty(()=>u(f)):u(f)},[u,c]);return k.useLayoutEffect(()=>o.listen(h),[o,h]),k.useEffect(()=>Kx(r),[r]),k.createElement(Wx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const rk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ik=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oT=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=e,g=sT(e,Yx),{basename:v}=k.useContext(er),P,N=!1;if(typeof c=="string"&&ik.test(c)&&(P=c,rk))try{let w=new URL(window.location.href),b=c.startsWith("//")?new URL(w.protocol+c):new URL(c),F=Vs(b.pathname,v);b.origin===w.origin&&F!=null?c=F+b.search+b.hash:N=!0}catch{}let D=kx(c,{relative:i}),S=ak(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:f});function E(w){r&&r(w),w.defaultPrevented||S(w)}return k.createElement("a",Wu({},g,{href:P||D,onClick:N||s?r:E,ref:n,target:u}))}),sk=k.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:u,viewTransition:c,children:h}=e,f=sT(e,Xx),g=Vc(u,{relative:f.relative}),v=Ys(),P=k.useContext(XI),{navigator:N,basename:D}=k.useContext(er),S=P!=null&&lk(g)&&c===!0,E=N.encodeLocation?N.encodeLocation(g).pathname:g.pathname,w=v.pathname,b=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;i||(w=w.toLowerCase(),b=b?b.toLowerCase():null,E=E.toLowerCase()),b&&D&&(b=Vs(b,D)||b);const F=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let j=w===E||!o&&w.startsWith(E)&&w.charAt(F)==="/",T=b!=null&&(b===E||!o&&b.startsWith(E)&&b.charAt(E.length)==="/"),y={isActive:j,isPending:T,isTransitioning:S},A=j?r:void 0,C;typeof s=="function"?C=s(y):C=[s,j?"active":null,T?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(y):a;return k.createElement(oT,Wu({},f,{"aria-current":A,className:C,ref:n,style:R,to:u,viewTransition:c}),typeof h=="function"?h(y):h)});var _f;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_f||(_f={}));var Sy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Sy||(Sy={}));function ok(t){let e=k.useContext(bc);return e||xe(!1),e}function ak(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=tT(),c=Ys(),h=Vc(t,{relative:o});return k.useCallback(f=>{if(Jx(f,n)){f.preventDefault();let g=r!==void 0?r:Gu(c)===Gu(h);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}function lk(t,e){e===void 0&&(e={});let n=k.useContext(ek);n==null&&xe(!1);let{basename:r}=ok(_f.useViewTransitionState),i=Vc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Vs(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Vs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return mf(i.pathname,o)!=null||mf(i.pathname,s)!=null}var Ay={};/**
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
 */const aT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,v=c&63;u||(v=64,o||(g=64)),r.push(n[h],n[f],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new ck;const g=s<<2|a>>4;if(r.push(g),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const P=c<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ck extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hk=function(t){const e=aT(t);return lT.encodeByteArray(e,!0)},uT=function(t){return hk(t).replace(/\./g,"")},cT=function(t){try{return lT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fk=()=>dk().__FIREBASE_DEFAULTS__,pk=()=>{if(typeof process>"u"||typeof Ay>"u")return;const t=Ay.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cT(t[1]);return e&&JSON.parse(e)},Oc=()=>{try{return fk()||pk()||mk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hT=t=>{var e,n;return(n=(e=Oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gk=t=>{const e=hT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dT=()=>{var t;return(t=Oc())===null||t===void 0?void 0:t.config},fT=t=>{var e;return(e=Oc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function vk(){var t;const e=(t=Oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ek(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ik(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tk(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pT(){return!vk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hp(){try{return typeof indexedDB=="object"}catch{return!1}}function mT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Sk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ak="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ak,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ck(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mn(i,a,r)}}function Ck(t,e){return t.replace(Pk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Pk=/\{\$([^}]+)}/g;function Rk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Aa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cy(s)&&Cy(o)){if(!Aa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cy(t){return t!==null&&typeof t=="object"}/**
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
 */function Wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xk(t,e){const n=new kk(t,e);return n.subscribe.bind(n)}class kk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=td),i.error===void 0&&(i.error=td),i.complete===void 0&&(i.complete=td);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function td(){}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ti="[DEFAULT]";/**
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
 */class bk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _k;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vk(e))try{this.getOrInitializeService({instanceIdentifier:ti})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ti){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ti){return this.instances.has(e)}getOptions(e=ti){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ti){return this.component?this.component.multipleInstances?e:ti:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dk(t){return t===ti?void 0:t}function Vk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ok{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Lk={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Mk=re.INFO,jk={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Fk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=jk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qp{constructor(e){this.name=e,this._logLevel=Mk,this._logHandler=Fk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Uk=(t,e)=>e.some(n=>t instanceof n);let Py,Ry;function Bk(){return Py||(Py=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $k(){return Ry||(Ry=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gT=new WeakMap,yf=new WeakMap,_T=new WeakMap,nd=new WeakMap,Jp=new WeakMap;function zk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gT.set(n,t)}).catch(()=>{}),Jp.set(e,t),e}function qk(t){if(yf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yf.set(t,e)}let vf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_T.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kk(t){vf=t(vf)}function Gk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rd(this),e,...n);return _T.set(r,e.sort?e.sort():[e]),zn(r)}:$k().includes(t)?function(...e){return t.apply(rd(this),e),zn(gT.get(this))}:function(...e){return zn(t.apply(rd(this),e))}}function Wk(t){return typeof t=="function"?Gk(t):(t instanceof IDBTransaction&&qk(t),Uk(t,Bk())?new Proxy(t,vf):t)}function zn(t){if(t instanceof IDBRequest)return zk(t);if(nd.has(t))return nd.get(t);const e=Wk(t);return e!==t&&(nd.set(t,e),Jp.set(e,t)),e}const rd=t=>Jp.get(t);function Lc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(zn(o.result),u.oldVersion,u.newVersion,zn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function id(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),zn(n).then(()=>{})}const Hk=["get","getKey","getAll","getAllKeys","count"],Qk=["put","add","delete","clear"],sd=new Map;function xy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sd.get(e))return sd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Qk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hk.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return sd.set(e,s),s}Kk(t=>({...t,get:(e,n,r)=>xy(e,n)||t.get(e,n,r),has:(e,n)=>!!xy(e,n)||t.has(e,n)}));/**
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
 */class Jk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ef="@firebase/app",ky="0.10.13";/**
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
 */const Jn=new Qp("@firebase/app"),Xk="@firebase/app-compat",Zk="@firebase/analytics-compat",eN="@firebase/analytics",tN="@firebase/app-check-compat",nN="@firebase/app-check",rN="@firebase/auth",iN="@firebase/auth-compat",sN="@firebase/database",oN="@firebase/data-connect",aN="@firebase/database-compat",lN="@firebase/functions",uN="@firebase/functions-compat",cN="@firebase/installations",hN="@firebase/installations-compat",dN="@firebase/messaging",fN="@firebase/messaging-compat",pN="@firebase/performance",mN="@firebase/performance-compat",gN="@firebase/remote-config",_N="@firebase/remote-config-compat",yN="@firebase/storage",vN="@firebase/storage-compat",EN="@firebase/firestore",wN="@firebase/vertexai-preview",IN="@firebase/firestore-compat",TN="firebase",SN="10.14.1";/**
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
 */const wf="[DEFAULT]",AN={[Ef]:"fire-core",[Xk]:"fire-core-compat",[eN]:"fire-analytics",[Zk]:"fire-analytics-compat",[nN]:"fire-app-check",[tN]:"fire-app-check-compat",[rN]:"fire-auth",[iN]:"fire-auth-compat",[sN]:"fire-rtdb",[oN]:"fire-data-connect",[aN]:"fire-rtdb-compat",[lN]:"fire-fn",[uN]:"fire-fn-compat",[cN]:"fire-iid",[hN]:"fire-iid-compat",[dN]:"fire-fcm",[fN]:"fire-fcm-compat",[pN]:"fire-perf",[mN]:"fire-perf-compat",[gN]:"fire-rc",[_N]:"fire-rc-compat",[yN]:"fire-gcs",[vN]:"fire-gcs-compat",[EN]:"fire-fst",[IN]:"fire-fst-compat",[wN]:"fire-vertex","fire-js":"fire-js",[TN]:"fire-js-all"};/**
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
 */const Hu=new Map,CN=new Map,If=new Map;function Ny(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fn(t){const e=t.name;if(If.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;If.set(e,t);for(const n of Hu.values())Ny(n,t);for(const n of CN.values())Ny(n,t);return!0}function Mi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function En(t){return t.settings!==void 0}/**
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
 */const PN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Li("app","Firebase",PN);/**
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
 */class RN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Xs=SN;function yT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=dT()),!n)throw Nr.create("no-options");const s=Hu.get(i);if(s){if(Aa(n,s.options)&&Aa(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new Ok(i);for(const u of If.values())o.addComponent(u);const a=new RN(n,r,o);return Hu.set(i,a),a}function Yp(t=wf){const e=Hu.get(t);if(!e&&t===wf&&dT())return yT();if(!e)throw Nr.create("no-app",{appName:t});return e}function Nt(t,e,n){var r;let i=(r=AN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(a.join(" "));return}fn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xN="firebase-heartbeat-database",kN=1,Ca="firebase-heartbeat-store";let od=null;function vT(){return od||(od=Lc(xN,kN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ca)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),od}async function NN(t){try{const n=(await vT()).transaction(Ca),r=await n.objectStore(Ca).get(ET(t));return await n.done,r}catch(e){if(e instanceof mn)Jn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function by(t,e){try{const r=(await vT()).transaction(Ca,"readwrite");await r.objectStore(Ca).put(e,ET(t)),await r.done}catch(n){if(n instanceof mn)Jn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function ET(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bN=1024,DN=30*24*60*60*1e3;class VN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=DN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dy(),{heartbeatsToSend:r,unsentEntries:i}=ON(this._heartbeatsCache.heartbeats),s=uT(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Jn.warn(n),""}}}function Dy(){return new Date().toISOString().substring(0,10)}function ON(t,e=bN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hp()?mT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return by(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return by(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vy(t){return uT(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function MN(t){fn(new Zt("platform-logger",e=>new Jk(e),"PRIVATE")),fn(new Zt("heartbeat",e=>new VN(e),"PRIVATE")),Nt(Ef,ky,t),Nt(Ef,ky,"esm2017"),Nt("fire-js","")}MN("");function Xp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function wT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jN=wT,IT=new Li("auth","Firebase",wT());/**
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
 */const Qu=new Qp("@firebase/auth");function FN(t,...e){Qu.logLevel<=re.WARN&&Qu.warn(`Auth (${Xs}): ${t}`,...e)}function lu(t,...e){Qu.logLevel<=re.ERROR&&Qu.error(`Auth (${Xs}): ${t}`,...e)}/**
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
 */function pn(t,...e){throw Zp(t,...e)}function An(t,...e){return Zp(t,...e)}function TT(t,e,n){const r=Object.assign(Object.assign({},jN()),{[e]:n});return new Li("auth","Firebase",r).create(e,{appName:t.name})}function qn(t){return TT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return IT.create(t,...e)}function J(t,e,...n){if(!t)throw Zp(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lu(e),new Error(e)}function Yn(t,e){t||jn(e)}/**
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
 */function Tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UN(){return Oy()==="http:"||Oy()==="https:"}function Oy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function BN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UN()||wk()||"connection"in navigator)?navigator.onLine:!0}function $N(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=yk()||Ik()}get(){return BN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function em(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ST{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qN=new Ha(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,i={}){return AT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return Ek()||(c.referrerPolicy="no-referrer"),ST.fetch()(CT(t,t.config.apiHost,n,a),c)})}async function AT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zN),e);try{const i=new GN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fl(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw TT(t,h,c);pn(t,h)}}catch(i){if(i instanceof mn)throw i;pn(t,"network-request-failed",{message:String(i)})}}async function Qa(t,e,n,r,i={}){const s=await tr(t,e,n,r,i);return"mfaPendingCredential"in s&&pn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function CT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?em(t.config,i):`${t.config.apiScheme}://${i}`}function KN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),qN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=An(t,e,r);return i.customData._tokenResponse=n,i}function Ly(t){return t!==void 0&&t.enterprise!==void 0}class WN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function HN(t,e){return tr(t,"GET","/v2/recaptchaConfig",zr(t,e))}/**
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
 */async function QN(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function PT(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ea(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JN(t,e=!1){const n=Te(t),r=await n.getIdToken(e),i=tm(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ea(ad(i.auth_time)),issuedAtTime:ea(ad(i.iat)),expirationTime:ea(ad(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ad(t){return Number(t)*1e3}function tm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lu("JWT malformed, contained fewer than 3 sections"),null;try{const i=cT(n);return i?JSON.parse(i):(lu("Failed to decode base64 JWT payload"),null)}catch(i){return lu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function My(t){const e=tm(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Os(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&YN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ea(this.lastLoginAt),this.creationTime=ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ju(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Os(t,PT(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?RT(s.providerUserInfo):[],a=eb(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function ZN(t){const e=Te(t);await Ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function RT(t){return t.map(e=>{var{providerId:n}=e,r=Xp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tb(t,e){const n=await AT(t,{},async()=>{const r=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=CT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ST.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nb(t,e){return tr(t,"POST","/v2/accounts:revokeToken",zr(t,e))}/**
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
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):My(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=My(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ws;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function or(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Os(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JN(this,e)}reload(){return ZN(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ju(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await Os(this,QN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:b,isAnonymous:F,providerData:j,stsTokenManager:T}=n;J(w&&T,e,"internal-error");const y=ws.fromJSON(this.name,T);J(typeof w=="string",e,"internal-error"),or(f,e.name),or(g,e.name),J(typeof b=="boolean",e,"internal-error"),J(typeof F=="boolean",e,"internal-error"),or(v,e.name),or(P,e.name),or(N,e.name),or(D,e.name),or(S,e.name),or(E,e.name);const A=new Fn({uid:w,auth:e,email:g,emailVerified:b,displayName:f,isAnonymous:F,photoURL:P,phoneNumber:v,tenantId:N,stsTokenManager:y,createdAt:S,lastLoginAt:E});return j&&Array.isArray(j)&&(A.providerData=j.map(C=>Object.assign({},C))),D&&(A._redirectEventId=D),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new ws;i.updateFromServerResponse(n);const s=new Fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ju(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?RT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ws;a.updateFromIdToken(r);const u=new Fn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const jy=new Map;function Un(t){Yn(t instanceof Function,"Expected a class definition");let e=jy.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jy.set(t,e),e)}/**
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
 */class xT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xT.type="NONE";const Fy=xT;/**
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
 */function uu(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=uu(this.userKey,i.apiKey,s),this.fullPersistenceKey=uu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(Un(Fy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Un(Fy);const o=uu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Fn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Is(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Is(s,e,r))}}/**
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
 */function Uy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OT(e))return"Blackberry";if(LT(e))return"Webos";if(NT(e))return"Safari";if((e.includes("chrome/")||bT(e))&&!e.includes("edge/"))return"Chrome";if(VT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kT(t=$e()){return/firefox\//i.test(t)}function NT(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bT(t=$e()){return/crios\//i.test(t)}function DT(t=$e()){return/iemobile/i.test(t)}function VT(t=$e()){return/android/i.test(t)}function OT(t=$e()){return/blackberry/i.test(t)}function LT(t=$e()){return/webos/i.test(t)}function nm(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rb(t=$e()){var e;return nm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ib(){return Tk()&&document.documentMode===10}function MT(t=$e()){return nm(t)||VT(t)||LT(t)||OT(t)||/windows phone/i.test(t)||DT(t)}/**
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
 */function jT(t,e=[]){let n;switch(t){case"Browser":n=Uy($e());break;case"Worker":n=`${Uy($e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
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
 */class sb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ob(t,e={}){return tr(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
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
 */const ab=6;class lb{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ab,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ub{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new By(this),this.idTokenSubscription=new By(this),this.beforeStateQueue=new sb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=IT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await PT(this,{idToken:e}),r=await Fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(En(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ju(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$N()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(qn(this));const n=e?Te(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ob(this),n=new lb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ji(t){return Te(t)}class By{constructor(e){this.auth=e,this.observer=null,this.addObserver=xk(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cb(t){Mc=t}function FT(t){return Mc.loadJS(t)}function hb(){return Mc.recaptchaEnterpriseScript}function db(){return Mc.gapiScript}function fb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pb="recaptcha-enterprise",mb="NO_RECAPTCHA";class gb{constructor(e){this.type=pb,this.auth=ji(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{HN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new WN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Ly(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(mb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ly(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hb();u.length!==0&&(u+=a),FT(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function $y(t,e,n,r=!1){const i=new gb(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Af(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $y(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $y(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function _b(t,e){const n=Mi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Aa(s,e??{}))return i;pn(i,"already-initialized")}return n.initialize({options:e})}function yb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vb(t,e,n){const r=ji(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=UT(e),{host:o,port:a}=Eb(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),wb()}function UT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Eb(t){const e=UT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:zy(o)}}}function zy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function Ib(t,e){return tr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Tb(t,e){return Qa(t,"POST","/v1/accounts:signInWithPassword",zr(t,e))}/**
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
 */async function Sb(t,e){return Qa(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}async function Ab(t,e){return Qa(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}/**
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
 */class Pa extends rm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Pa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Af(e,n,"signInWithPassword",Tb);case"emailLink":return Sb(e,{email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Af(e,r,"signUpPassword",Ib);case"emailLink":return Ab(e,{idToken:n,email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ts(t,e){return Qa(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
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
 */const Cb="http://localhost";class Ii extends rm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:Cb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wa(n)}return e}}/**
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
 */function Pb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Rb(t){const e=jo(Fo(t)).link,n=e?jo(Fo(e)).deep_link_id:null,r=jo(Fo(t)).deep_link_id;return(r?jo(Fo(r)).link:null)||r||n||e||t}class im{constructor(e){var n,r,i,s,o,a;const u=jo(Fo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=Pb((i=u.mode)!==null&&i!==void 0?i:null);J(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Rb(e);try{return new im(n)}catch{return null}}}/**
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
 */class Zs{constructor(){this.providerId=Zs.PROVIDER_ID}static credential(e,n){return Pa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=im.parseLink(n);return J(r,"argument-error"),Pa._fromEmailAndCode(e,r.code,r.tenantId)}}Zs.PROVIDER_ID="password";Zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class BT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ja extends BT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fr extends Ja{constructor(){super("facebook.com")}static credential(e){return Ii._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
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
 */class pr extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ii._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
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
 */class mr extends Ja{constructor(){super("github.com")}static credential(e){return Ii._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
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
 */class gr extends Ja{constructor(){super("twitter.com")}static credential(e,n){return Ii._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
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
 */async function xb(t,e){return Qa(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
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
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fn._fromIdTokenResponse(e,r,i),o=qy(r);return new Ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qy(r);return new Ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yu extends mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yu(e,n,r,i)}}function $T(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yu._fromErrorAndOperation(t,s,e,r):s})}async function kb(t,e,n=!1){const r=await Os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",r)}/**
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
 */async function Nb(t,e,n=!1){const{auth:r}=t;if(En(r.app))return Promise.reject(qn(r));const i="reauthenticate";try{const s=await Os(t,$T(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=tm(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),s}}/**
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
 */async function zT(t,e,n=!1){if(En(t.app))return Promise.reject(qn(t));const r="signIn",i=await $T(t,r,e),s=await Ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function bb(t,e){return zT(ji(t),e)}/**
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
 */async function qT(t){const e=ji(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Db(t,e,n){if(En(t.app))return Promise.reject(qn(t));const r=ji(t),o=await Af(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qT(t),u}),a=await Ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Vb(t,e,n){return En(t.app)?Promise.reject(qn(t)):bb(Te(t),Zs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qT(t),r})}/**
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
 */async function Ob(t,e){return tr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Lb(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Te(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Os(r,Ob(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function Mb(t,e){return Te(t).setPersistence(e)}function jb(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function Fb(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function Ub(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function Bb(t){return Te(t).signOut()}const Xu="__sak";/**
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
 */class KT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xu,"1"),this.storage.removeItem(Xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $b=1e3,zb=10;class GT extends KT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=MT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ib()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$b)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}GT.type="LOCAL";const WT=GT;/**
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
 */class HT extends KT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}HT.type="SESSION";const QT=HT;/**
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
 */function qb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await qb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
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
 */function sm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Kb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=sm("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function Gb(t){Cn().location.href=t}/**
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
 */function JT(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function Wb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qb(){return JT()?self:null}/**
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
 */const YT="firebaseLocalStorageDb",Jb=1,Zu="firebaseLocalStorage",XT="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fc(t,e){return t.transaction([Zu],e?"readwrite":"readonly").objectStore(Zu)}function Yb(){const t=indexedDB.deleteDatabase(YT);return new Ya(t).toPromise()}function Cf(){const t=indexedDB.open(YT,Jb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zu,{keyPath:XT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zu)?e(r):(r.close(),await Yb(),e(await Cf()))})})}async function Ky(t,e,n){const r=Fc(t,!0).put({[XT]:e,value:n});return new Ya(r).toPromise()}async function Xb(t,e){const n=Fc(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function Gy(t,e){const n=Fc(t,!0).delete(e);return new Ya(n).toPromise()}const Zb=800,e1=3;class ZT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>e1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(Qb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wb(),!this.activeServiceWorker)return;this.sender=new Kb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cf();return await Ky(e,Xu,"1"),await Gy(e,Xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ky(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fc(i,!1).getAll();return new Ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZT.type="LOCAL";const t1=ZT;new Ha(3e4,6e4);/**
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
 */function n1(t,e){return e?Un(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class om extends rm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function r1(t){return zT(t.auth,new om(t),t.bypassAuthState)}function i1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Nb(n,new om(t),t.bypassAuthState)}async function s1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),kb(n,new om(t),t.bypassAuthState)}/**
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
 */class e0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r1;case"linkViaPopup":case"linkViaRedirect":return s1;case"reauthViaPopup":case"reauthViaRedirect":return i1;default:pn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const o1=new Ha(2e3,1e4);class ps extends e0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o1.get())};e()}}ps.currentPopupAction=null;/**
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
 */const a1="pendingRedirect",cu=new Map;class l1 extends e0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cu.get(this.auth._key());if(!e){try{const r=await u1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cu.set(this.auth._key(),e)}return this.bypassAuthState||cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u1(t,e){const n=d1(e),r=h1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function c1(t,e){cu.set(t._key(),e)}function h1(t){return Un(t._redirectPersistence)}function d1(t){return uu(a1,t.config.apiKey,t.name)}async function f1(t,e,n=!1){if(En(t.app))return Promise.reject(qn(t));const r=ji(t),i=n1(r,e),o=await new l1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const p1=10*60*1e3;class m1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!t0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wy(e))}saveEventToCache(e){this.cachedEventUids.add(Wy(e)),this.lastProcessedEventTime=Date.now()}}function Wy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function t0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return t0(t);default:return!1}}/**
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
 */async function _1(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
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
 */const y1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v1=/^https?/;async function E1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _1(t);for(const n of e)try{if(w1(n))return}catch{}pn(t,"unauthorized-domain")}function w1(t){const e=Tf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!v1.test(n))return!1;if(y1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const I1=new Ha(3e4,6e4);function Hy(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function T1(t){return new Promise((e,n)=>{var r,i,s;function o(){Hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hy(),n(An(t,"network-request-failed"))},timeout:I1.get()})}if(!((i=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Cn().gapi)===null||s===void 0)&&s.load)o();else{const a=fb("iframefcb");return Cn()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},FT(`${db()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw hu=null,e})}let hu=null;function S1(t){return hu=hu||T1(t),hu}/**
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
 */const A1=new Ha(5e3,15e3),C1="__/auth/iframe",P1="emulator/auth/iframe",R1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k1(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?em(e,P1):`https://${t.config.authDomain}/${C1}`,r={apiKey:e.apiKey,appName:t.name,v:Xs},i=x1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wa(r).slice(1)}`}async function N1(t){const e=await S1(t),n=Cn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:k1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=Cn().setTimeout(()=>{s(o)},A1.get());function u(){Cn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const b1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D1=500,V1=600,O1="_blank",L1="http://localhost";class Qy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M1(t,e,n,r=D1,i=V1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},b1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=$e().toLowerCase();n&&(a=bT(c)?O1:n),kT(c)&&(e=e||L1,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[v,P])=>`${g}${v}=${P},`,"");if(rb(c)&&a!=="_self")return j1(e||"",a),new Qy(null);const f=window.open(e||"",a,h);J(f,t,"popup-blocked");try{f.focus()}catch{}return new Qy(f)}function j1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const F1="__/auth/handler",U1="emulator/auth/handler",B1=encodeURIComponent("fac");async function Jy(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xs,eventId:i};if(e instanceof BT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ja){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${B1}=${encodeURIComponent(u)}`:"";return`${$1(t)}?${Wa(a).slice(1)}${c}`}function $1({config:t}){return t.emulator?em(t,U1):`https://${t.authDomain}/${F1}`}/**
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
 */const ld="webStorageSupport";class z1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QT,this._completeRedirectFn=f1,this._overrideRedirectResult=c1}async _openPopup(e,n,r,i){var s;Yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jy(e,n,r,Tf(),i);return M1(e,o,sm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jy(e,n,r,Tf(),i);return Gb(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await N1(e),r=new m1(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ld,{type:ld},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ld];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=E1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MT()||NT()||nm()}}const q1=z1;var Yy="@firebase/auth",Xy="1.7.9";/**
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
 */class K1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function G1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function W1(t){fn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jT(t)},c=new ub(r,i,s,u);return yb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fn(new Zt("auth-internal",e=>{const n=ji(e.getProvider("auth").getImmediate());return(r=>new K1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Yy,Xy,G1(t)),Nt(Yy,Xy,"esm2017")}/**
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
 */const H1=5*60,Q1=fT("authIdTokenMaxAge")||H1;let Zy=null;const J1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q1)return;const i=n==null?void 0:n.token;Zy!==i&&(Zy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Y1(t=Yp()){const e=Mi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_b(t,{popupRedirectResolver:q1,persistence:[t1,WT,QT]}),r=fT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=J1(s.toString());Fb(n,o,()=>o(n.currentUser)),jb(n,a=>o(a))}}const i=hT("auth");return i&&vb(n,`http://${i}`),n}function X1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=An("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",X1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});W1("Browser");var ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pi,n0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function A(){}A.prototype=y.prototype,T.D=y.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(C,R,x){for(var I=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)I[fe-2]=arguments[fe];return y.prototype[R].apply(C,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,A){A||(A=0);var C=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)C[R]=y.charCodeAt(A++)|y.charCodeAt(A++)<<8|y.charCodeAt(A++)<<16|y.charCodeAt(A++)<<24;else for(R=0;16>R;++R)C[R]=y[A++]|y[A++]<<8|y[A++]<<16|y[A++]<<24;y=T.g[0],A=T.g[1],R=T.g[2];var x=T.g[3],I=y+(x^A&(R^x))+C[0]+3614090360&4294967295;y=A+(I<<7&4294967295|I>>>25),I=x+(R^y&(A^R))+C[1]+3905402710&4294967295,x=y+(I<<12&4294967295|I>>>20),I=R+(A^x&(y^A))+C[2]+606105819&4294967295,R=x+(I<<17&4294967295|I>>>15),I=A+(y^R&(x^y))+C[3]+3250441966&4294967295,A=R+(I<<22&4294967295|I>>>10),I=y+(x^A&(R^x))+C[4]+4118548399&4294967295,y=A+(I<<7&4294967295|I>>>25),I=x+(R^y&(A^R))+C[5]+1200080426&4294967295,x=y+(I<<12&4294967295|I>>>20),I=R+(A^x&(y^A))+C[6]+2821735955&4294967295,R=x+(I<<17&4294967295|I>>>15),I=A+(y^R&(x^y))+C[7]+4249261313&4294967295,A=R+(I<<22&4294967295|I>>>10),I=y+(x^A&(R^x))+C[8]+1770035416&4294967295,y=A+(I<<7&4294967295|I>>>25),I=x+(R^y&(A^R))+C[9]+2336552879&4294967295,x=y+(I<<12&4294967295|I>>>20),I=R+(A^x&(y^A))+C[10]+4294925233&4294967295,R=x+(I<<17&4294967295|I>>>15),I=A+(y^R&(x^y))+C[11]+2304563134&4294967295,A=R+(I<<22&4294967295|I>>>10),I=y+(x^A&(R^x))+C[12]+1804603682&4294967295,y=A+(I<<7&4294967295|I>>>25),I=x+(R^y&(A^R))+C[13]+4254626195&4294967295,x=y+(I<<12&4294967295|I>>>20),I=R+(A^x&(y^A))+C[14]+2792965006&4294967295,R=x+(I<<17&4294967295|I>>>15),I=A+(y^R&(x^y))+C[15]+1236535329&4294967295,A=R+(I<<22&4294967295|I>>>10),I=y+(R^x&(A^R))+C[1]+4129170786&4294967295,y=A+(I<<5&4294967295|I>>>27),I=x+(A^R&(y^A))+C[6]+3225465664&4294967295,x=y+(I<<9&4294967295|I>>>23),I=R+(y^A&(x^y))+C[11]+643717713&4294967295,R=x+(I<<14&4294967295|I>>>18),I=A+(x^y&(R^x))+C[0]+3921069994&4294967295,A=R+(I<<20&4294967295|I>>>12),I=y+(R^x&(A^R))+C[5]+3593408605&4294967295,y=A+(I<<5&4294967295|I>>>27),I=x+(A^R&(y^A))+C[10]+38016083&4294967295,x=y+(I<<9&4294967295|I>>>23),I=R+(y^A&(x^y))+C[15]+3634488961&4294967295,R=x+(I<<14&4294967295|I>>>18),I=A+(x^y&(R^x))+C[4]+3889429448&4294967295,A=R+(I<<20&4294967295|I>>>12),I=y+(R^x&(A^R))+C[9]+568446438&4294967295,y=A+(I<<5&4294967295|I>>>27),I=x+(A^R&(y^A))+C[14]+3275163606&4294967295,x=y+(I<<9&4294967295|I>>>23),I=R+(y^A&(x^y))+C[3]+4107603335&4294967295,R=x+(I<<14&4294967295|I>>>18),I=A+(x^y&(R^x))+C[8]+1163531501&4294967295,A=R+(I<<20&4294967295|I>>>12),I=y+(R^x&(A^R))+C[13]+2850285829&4294967295,y=A+(I<<5&4294967295|I>>>27),I=x+(A^R&(y^A))+C[2]+4243563512&4294967295,x=y+(I<<9&4294967295|I>>>23),I=R+(y^A&(x^y))+C[7]+1735328473&4294967295,R=x+(I<<14&4294967295|I>>>18),I=A+(x^y&(R^x))+C[12]+2368359562&4294967295,A=R+(I<<20&4294967295|I>>>12),I=y+(A^R^x)+C[5]+4294588738&4294967295,y=A+(I<<4&4294967295|I>>>28),I=x+(y^A^R)+C[8]+2272392833&4294967295,x=y+(I<<11&4294967295|I>>>21),I=R+(x^y^A)+C[11]+1839030562&4294967295,R=x+(I<<16&4294967295|I>>>16),I=A+(R^x^y)+C[14]+4259657740&4294967295,A=R+(I<<23&4294967295|I>>>9),I=y+(A^R^x)+C[1]+2763975236&4294967295,y=A+(I<<4&4294967295|I>>>28),I=x+(y^A^R)+C[4]+1272893353&4294967295,x=y+(I<<11&4294967295|I>>>21),I=R+(x^y^A)+C[7]+4139469664&4294967295,R=x+(I<<16&4294967295|I>>>16),I=A+(R^x^y)+C[10]+3200236656&4294967295,A=R+(I<<23&4294967295|I>>>9),I=y+(A^R^x)+C[13]+681279174&4294967295,y=A+(I<<4&4294967295|I>>>28),I=x+(y^A^R)+C[0]+3936430074&4294967295,x=y+(I<<11&4294967295|I>>>21),I=R+(x^y^A)+C[3]+3572445317&4294967295,R=x+(I<<16&4294967295|I>>>16),I=A+(R^x^y)+C[6]+76029189&4294967295,A=R+(I<<23&4294967295|I>>>9),I=y+(A^R^x)+C[9]+3654602809&4294967295,y=A+(I<<4&4294967295|I>>>28),I=x+(y^A^R)+C[12]+3873151461&4294967295,x=y+(I<<11&4294967295|I>>>21),I=R+(x^y^A)+C[15]+530742520&4294967295,R=x+(I<<16&4294967295|I>>>16),I=A+(R^x^y)+C[2]+3299628645&4294967295,A=R+(I<<23&4294967295|I>>>9),I=y+(R^(A|~x))+C[0]+4096336452&4294967295,y=A+(I<<6&4294967295|I>>>26),I=x+(A^(y|~R))+C[7]+1126891415&4294967295,x=y+(I<<10&4294967295|I>>>22),I=R+(y^(x|~A))+C[14]+2878612391&4294967295,R=x+(I<<15&4294967295|I>>>17),I=A+(x^(R|~y))+C[5]+4237533241&4294967295,A=R+(I<<21&4294967295|I>>>11),I=y+(R^(A|~x))+C[12]+1700485571&4294967295,y=A+(I<<6&4294967295|I>>>26),I=x+(A^(y|~R))+C[3]+2399980690&4294967295,x=y+(I<<10&4294967295|I>>>22),I=R+(y^(x|~A))+C[10]+4293915773&4294967295,R=x+(I<<15&4294967295|I>>>17),I=A+(x^(R|~y))+C[1]+2240044497&4294967295,A=R+(I<<21&4294967295|I>>>11),I=y+(R^(A|~x))+C[8]+1873313359&4294967295,y=A+(I<<6&4294967295|I>>>26),I=x+(A^(y|~R))+C[15]+4264355552&4294967295,x=y+(I<<10&4294967295|I>>>22),I=R+(y^(x|~A))+C[6]+2734768916&4294967295,R=x+(I<<15&4294967295|I>>>17),I=A+(x^(R|~y))+C[13]+1309151649&4294967295,A=R+(I<<21&4294967295|I>>>11),I=y+(R^(A|~x))+C[4]+4149444226&4294967295,y=A+(I<<6&4294967295|I>>>26),I=x+(A^(y|~R))+C[11]+3174756917&4294967295,x=y+(I<<10&4294967295|I>>>22),I=R+(y^(x|~A))+C[2]+718787259&4294967295,R=x+(I<<15&4294967295|I>>>17),I=A+(x^(R|~y))+C[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+x&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var A=y-this.blockSize,C=this.B,R=this.h,x=0;x<y;){if(R==0)for(;x<=A;)i(this,T,x),x+=this.blockSize;if(typeof T=="string"){for(;x<y;)if(C[R++]=T.charCodeAt(x++),R==this.blockSize){i(this,C),R=0;break}}else for(;x<y;)if(C[R++]=T[x++],R==this.blockSize){i(this,C),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var A=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=A&255,A/=256;for(this.u(T),T=Array(16),y=A=0;4>y;++y)for(var C=0;32>C;C+=8)T[A++]=this.g[y]>>>C&255;return T};function s(T,y){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=y(T)}function o(T,y){this.h=y;for(var A=[],C=!0,R=T.length-1;0<=R;R--){var x=T[R]|0;C&&x==y||(A[R]=x,C=!1)}this.g=A}var a={};function u(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return D(c(-T));for(var y=[],A=1,C=0;T>=A;C++)y[C]=T/A|0,A*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return D(h(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=c(Math.pow(y,8)),C=f,R=0;R<T.length;R+=8){var x=Math.min(8,T.length-R),I=parseInt(T.substring(R,R+x),y);8>x?(x=c(Math.pow(y,x)),C=C.j(x).add(c(I))):(C=C.j(A),C=C.add(c(I)))}return C}var f=u(0),g=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var T=0,y=1,A=0;A<this.g.length;A++){var C=this.i(A);T+=(0<=C?C:4294967296+C)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(N(this))return"-"+D(this).toString(T);for(var y=c(Math.pow(T,6)),A=this,C="";;){var R=b(A,y).g;A=S(A,R.j(y));var x=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=R,P(A))return x+C;for(;6>x.length;)x="0"+x;C=x+C}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=S(this,T),N(T)?-1:P(T)?0:1};function D(T){for(var y=T.g.length,A=[],C=0;C<y;C++)A[C]=~T.g[C];return new o(A,~T.h).add(g)}t.abs=function(){return N(this)?D(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),A=[],C=0,R=0;R<=y;R++){var x=C+(this.i(R)&65535)+(T.i(R)&65535),I=(x>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);C=I>>>16,x&=65535,I&=65535,A[R]=I<<16|x}return new o(A,A[A.length-1]&-2147483648?-1:0)};function S(T,y){return T.add(D(y))}t.j=function(T){if(P(this)||P(T))return f;if(N(this))return N(T)?D(this).j(D(T)):D(D(this).j(T));if(N(T))return D(this.j(D(T)));if(0>this.l(v)&&0>T.l(v))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,A=[],C=0;C<2*y;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var R=0;R<T.g.length;R++){var x=this.i(C)>>>16,I=this.i(C)&65535,fe=T.i(R)>>>16,Oe=T.i(R)&65535;A[2*C+2*R]+=I*Oe,E(A,2*C+2*R),A[2*C+2*R+1]+=x*Oe,E(A,2*C+2*R+1),A[2*C+2*R+1]+=I*fe,E(A,2*C+2*R+1),A[2*C+2*R+2]+=x*fe,E(A,2*C+2*R+2)}for(C=0;C<y;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=y;C<2*y;C++)A[C]=0;return new o(A,0)};function E(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function w(T,y){this.g=T,this.h=y}function b(T,y){if(P(y))throw Error("division by zero");if(P(T))return new w(f,f);if(N(T))return y=b(D(T),y),new w(D(y.g),D(y.h));if(N(y))return y=b(T,D(y)),new w(D(y.g),y.h);if(30<T.g.length){if(N(T)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var A=g,C=y;0>=C.l(T);)A=F(A),C=F(C);var R=j(A,1),x=j(C,1);for(C=j(C,2),A=j(A,2);!P(C);){var I=x.add(C);0>=I.l(T)&&(R=R.add(A),x=I),C=j(C,1),A=j(A,1)}return y=S(T,R.j(y)),new w(R,y)}for(R=f;0<=T.l(y);){for(A=Math.max(1,Math.floor(T.m()/y.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),x=c(A),I=x.j(y);N(I)||0<I.l(T);)A-=C,x=c(A),I=x.j(y);P(x)&&(x=g),R=R.add(x),T=S(T,I)}return new w(R,T)}t.A=function(T){return b(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),A=[],C=0;C<y;C++)A[C]=this.i(C)&T.i(C);return new o(A,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),A=[],C=0;C<y;C++)A[C]=this.i(C)|T.i(C);return new o(A,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),A=[],C=0;C<y;C++)A[C]=this.i(C)^T.i(C);return new o(A,this.h^T.h)};function F(T){for(var y=T.g.length+1,A=[],C=0;C<y;C++)A[C]=T.i(C)<<1|T.i(C-1)>>>31;return new o(A,T.h)}function j(T,y){var A=y>>5;y%=32;for(var C=T.g.length-A,R=[],x=0;x<C;x++)R[x]=0<y?T.i(x+A)>>>y|T.i(x+A+1)<<32-y:T.i(x+A);return new o(R,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,n0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,pi=o}).apply(typeof ev<"u"?ev:typeof self<"u"?self:typeof window<"u"?window:{});var Ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var r0,Uo,i0,du,Pf,s0,o0,a0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ul=="object"&&Ul];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var V=l[_];if(!(V in p))break e;p=p[V]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,_=!1,V={next:function(){if(!_&&p<l.length){var L=p++;return{value:d(L,l[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),l.apply(d,V)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function v(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function P(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,V,L){for(var $=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)$[pe-2]=arguments[pe];return d.prototype[V].apply(_,$)}}function N(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function D(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const V=l.length||0,L=_.length||0;l.length=V+L;for(let $=0;$<L;$++)l[V+$]=_[$]}else l.push(_)}}class S{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function b(l){return b[" "](l),l}b[" "]=function(){};var F=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function j(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function T(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,d){let p,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(p in _)l[p]=_[p];for(let L=0;L<A.length;L++)p=A[L],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function R(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function x(l){a.setTimeout(()=>{throw l},0)}function I(){var l=Y;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class fe{constructor(){this.h=this.g=null}add(d,p){const _=Oe.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Oe=new S(()=>new xn,l=>l.reset());class xn{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,q=!1,Y=new fe,Z=()=>{const l=a.Promise.resolve(void 0);zt=()=>{l.then(_e)}};var _e=()=>{for(var l;l=I();){try{l.h.call(l.g)}catch(p){x(p)}var d=Oe;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}q=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var en=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function tn(l,d){if(Ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(F){e:{try{b(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:nn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&tn.aa.h.call(this)}}P(tn,Ae);var nn={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),ih=0;function me(l,d,p,_,V){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=V,this.key=++ih,this.da=this.fa=!1}function gn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Bi(l){this.src=l,this.g={},this.h=0}Bi.prototype.add=function(l,d,p,_,V){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var $=oh(l,d,_,V);return-1<$?(d=l[$],p||(d.fa=!1)):(d=new me(d,this.src,L,!!_,V),d.fa=p,l.push(d)),d};function sh(l,d){var p=d.type;if(p in l.g){var _=l.g[p],V=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=V)&&Array.prototype.splice.call(_,V,1),L&&(gn(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function oh(l,d,p,_){for(var V=0;V<l.length;++V){var L=l[V];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==_)return V}return-1}var ah="closure_lm_"+(1e6*Math.random()|0),lh={};function lg(l,d,p,_,V){if(Array.isArray(d)){for(var L=0;L<d.length;L++)lg(l,d[L],p,_,V);return null}return p=hg(p),l&&l[rn]?l.K(d,p,c(_)?!!_.capture:!1,V):YA(l,d,p,!1,_,V)}function YA(l,d,p,_,V,L){if(!d)throw Error("Invalid event type");var $=c(V)?!!V.capture:!!V,pe=ch(l);if(pe||(l[ah]=pe=new Bi(l)),p=pe.add(d,p,_,$,L),p.proxy)return p;if(_=XA(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)en||(V=$),V===void 0&&(V=!1),l.addEventListener(d.toString(),_,V);else if(l.attachEvent)l.attachEvent(cg(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function XA(){function l(p){return d.call(l.src,l.listener,p)}const d=ZA;return l}function ug(l,d,p,_,V){if(Array.isArray(d))for(var L=0;L<d.length;L++)ug(l,d[L],p,_,V);else _=c(_)?!!_.capture:!!_,p=hg(p),l&&l[rn]?(l=l.i,d=String(d).toString(),d in l.g&&(L=l.g[d],p=oh(L,p,_,V),-1<p&&(gn(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete l.g[d],l.h--)))):l&&(l=ch(l))&&(d=l.g[d.toString()],l=-1,d&&(l=oh(d,p,_,V)),(p=-1<l?d[l]:null)&&uh(p))}function uh(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[rn])sh(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(cg(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=ch(d))?(sh(p,l),p.h==0&&(p.src=null,d[ah]=null)):gn(l)}}}function cg(l){return l in lh?lh[l]:lh[l]="on"+l}function ZA(l,d){if(l.da)l=!0;else{d=new tn(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&uh(l),l=p.call(_,d)}return l}function ch(l){return l=l[ah],l instanceof Bi?l:null}var hh="__closure_events_fn_"+(1e9*Math.random()>>>0);function hg(l){return typeof l=="function"?l:(l[hh]||(l[hh]=function(d){return l.handleEvent(d)}),l[hh])}function tt(){ue.call(this),this.i=new Bi(this),this.M=this,this.F=null}P(tt,ue),tt.prototype[rn]=!0,tt.prototype.removeEventListener=function(l,d,p,_){ug(this,l,d,p,_)};function dt(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Ae(d,l);else if(d instanceof Ae)d.target=d.target||l;else{var V=d;d=new Ae(_,l),C(d,V)}if(V=!0,p)for(var L=p.length-1;0<=L;L--){var $=d.g=p[L];V=ol($,_,!0,d)&&V}if($=d.g=l,V=ol($,_,!0,d)&&V,V=ol($,_,!1,d)&&V,p)for(L=0;L<p.length;L++)$=d.g=p[L],V=ol($,_,!1,d)&&V}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)gn(p[_]);delete l.g[d],l.h--}}this.F=null},tt.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},tt.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function ol(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,L=0;L<d.length;++L){var $=d[L];if($&&!$.da&&$.capture==p){var pe=$.listener,We=$.ha||$.src;$.fa&&sh(l.i,$),V=pe.call(We,_)!==!1&&V}}return V&&!_.defaultPrevented}function dg(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function fg(l){l.g=dg(()=>{l.g=null,l.i&&(l.i=!1,fg(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class eC extends ue{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:fg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oo(l){ue.call(this),this.h=l,this.g={}}P(oo,ue);var pg=[];function mg(l){j(l.g,function(d,p){this.g.hasOwnProperty(p)&&uh(d)},l),l.g={}}oo.prototype.N=function(){oo.aa.N.call(this),mg(this)},oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dh=a.JSON.stringify,tC=a.JSON.parse,nC=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function fh(){}fh.prototype.h=null;function gg(l){return l.h||(l.h=l.i())}function _g(){}var ao={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ph(){Ae.call(this,"d")}P(ph,Ae);function mh(){Ae.call(this,"c")}P(mh,Ae);var Hr={},yg=null;function al(){return yg=yg||new tt}Hr.La="serverreachability";function vg(l){Ae.call(this,Hr.La,l)}P(vg,Ae);function lo(l){const d=al();dt(d,new vg(d))}Hr.STAT_EVENT="statevent";function Eg(l,d){Ae.call(this,Hr.STAT_EVENT,l),this.stat=d}P(Eg,Ae);function ft(l){const d=al();dt(d,new Eg(d,l))}Hr.Ma="timingevent";function wg(l,d){Ae.call(this,Hr.Ma,l),this.size=d}P(wg,Ae);function uo(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function co(){this.g=!0}co.prototype.xa=function(){this.g=!1};function rC(l,d,p,_,V,L){l.info(function(){if(l.g)if(L)for(var $="",pe=L.split("&"),We=0;We<pe.length;We++){var ae=pe[We].split("=");if(1<ae.length){var nt=ae[0];ae=ae[1];var rt=nt.split("_");$=2<=rt.length&&rt[1]=="type"?$+(nt+"="+ae+"&"):$+(nt+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+d+`
`+p+`
`+$})}function iC(l,d,p,_,V,L,$){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+d+`
`+p+`
`+L+" "+$})}function $i(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+oC(l,p)+(_?" "+_:"")})}function sC(l,d){l.info(function(){return"TIMEOUT: "+d})}co.prototype.info=function(){};function oC(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var L=V[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<V.length;$++)V[$]=""}}}}return dh(p)}catch{return d}}var ll={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ig={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gh;function ul(){}P(ul,fh),ul.prototype.g=function(){return new XMLHttpRequest},ul.prototype.i=function(){return{}},gh=new ul;function nr(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new oo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tg}function Tg(){this.i=null,this.g="",this.h=!1}var Sg={},_h={};function yh(l,d,p){l.L=1,l.v=fl(kn(d)),l.m=p,l.P=!0,Ag(l,null)}function Ag(l,d){l.F=Date.now(),cl(l),l.A=kn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Fg(p.i,"t",_),l.C=0,p=l.j.J,l.h=new Tg,l.g=r_(l.j,p?d:null,!l.m),0<l.O&&(l.M=new eC(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(pg[0]=V.toString()),V=pg);for(var L=0;L<V.length;L++){var $=lg(p,V[L],_||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),lo(),rC(l.i,l.u,l.A,l.l,l.R,l.m)}nr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Nn(l)==3?d.j():this.Y(l)},nr.prototype.Y=function(l){try{if(l==this.g)e:{const rt=Nn(this.g);var d=this.g.Ba();const Ki=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Gg(this.g)))){this.J||rt!=4||d==7||(d==8||0>=Ki?lo(3):lo(2)),vh(this);var p=this.g.Z();this.X=p;t:if(Cg(this)){var _=Gg(this.g);l="";var V=_.length,L=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),ho(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(L&&d==V-1)});_.length=0,this.h.g+=l,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,iC(this.i,this.u,this.A,this.l,this.R,rt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,We=this.g;if((pe=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(pe)){var ae=pe;break t}}ae=null}if(p=ae)$i(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eh(this,p);else{this.o=!1,this.s=3,ft(12),Qr(this),ho(this);break e}}if(this.P){p=!0;let sn;for(;!this.J&&this.C<$.length;)if(sn=aC(this,$),sn==_h){rt==4&&(this.s=4,ft(14),p=!1),$i(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Sg){this.s=4,ft(15),$i(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else $i(this.i,this.l,sn,null),Eh(this,sn);if(Cg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||$.length!=0||this.h.h||(this.s=1,ft(16),p=!1),this.o=this.o&&p,!p)$i(this.i,this.l,$,"[Invalid Chunked Response]"),Qr(this),ho(this);else if(0<$.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Ch(nt),nt.M=!0,ft(11))}}else $i(this.i,this.l,$,null),Eh(this,$);rt==4&&Qr(this),this.o&&!this.J&&(rt==4?Zg(this.j,this):(this.o=!1,cl(this)))}else SC(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Qr(this),ho(this)}}}catch{}finally{}};function Cg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function aC(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?_h:(p=Number(d.substring(p,_)),isNaN(p)?Sg:(_+=1,_+p>d.length?_h:(d=d.slice(_,_+p),l.C=_+p,d)))}nr.prototype.cancel=function(){this.J=!0,Qr(this)};function cl(l){l.S=Date.now()+l.I,Pg(l,l.I)}function Pg(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=uo(g(l.ba,l),d)}function vh(l){l.B&&(a.clearTimeout(l.B),l.B=null)}nr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(sC(this.i,this.A),this.L!=2&&(lo(),ft(17)),Qr(this),this.s=2,ho(this)):Pg(this,this.S-l)};function ho(l){l.j.G==0||l.J||Zg(l.j,l)}function Qr(l){vh(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,mg(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Eh(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||wh(p.h,l))){if(!l.K&&wh(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)vl(p),_l(p);else break e;Ah(p),ft(18)}}else p.za=V[1],0<p.za-p.T&&37500>V[2]&&p.F&&p.v==0&&!p.C&&(p.C=uo(g(p.Za,p),6e3));if(1>=kg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yr(p,11)}else if((l.K||p.g==l)&&vl(p),!E(d))for(V=p.Da.g.parse(d),d=0;d<V.length;d++){let ae=V[d];if(p.T=ae[0],ae=ae[1],p.G==2)if(ae[0]=="c"){p.K=ae[1],p.ia=ae[2];const nt=ae[3];nt!=null&&(p.la=nt,p.j.info("VER="+p.la));const rt=ae[4];rt!=null&&(p.Aa=rt,p.j.info("SVER="+p.Aa));const Ki=ae[5];Ki!=null&&typeof Ki=="number"&&0<Ki&&(_=1.5*Ki,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const sn=l.g;if(sn){const wl=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wl){var L=_.h;L.g||wl.indexOf("spdy")==-1&&wl.indexOf("quic")==-1&&wl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Ih(L,L.h),L.h=null))}if(_.D){const Ph=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ph&&(_.ya=Ph,ye(_.I,_.D,Ph))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var $=l;if(_.qa=n_(_,_.J?_.ia:null,_.W),$.K){Ng(_.h,$);var pe=$,We=_.L;We&&(pe.I=We),pe.B&&(vh(pe),cl(pe)),_.g=$}else Yg(_);0<p.i.length&&yl(p)}else ae[0]!="stop"&&ae[0]!="close"||Yr(p,7);else p.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Yr(p,7):Sh(p):ae[0]!="noop"&&p.l&&p.l.ta(ae),p.v=0)}}lo(4)}catch{}}var lC=class{constructor(l,d){this.g=l,this.map=d}};function Rg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function kg(l){return l.h?1:l.g?l.g.size:0}function wh(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Ih(l,d){l.g?l.g.add(d):l.h=d}function Ng(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Rg.prototype.cancel=function(){if(this.i=bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function bg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return N(l.i)}function uC(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function cC(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Dg(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=cC(l),_=uC(l),V=_.length,L=0;L<V;L++)d.call(void 0,_[L],p&&p[L],l)}var Vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hC(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),V=null;if(0<=_){var L=l[p].substring(0,_);V=l[p].substring(_+1)}else L=l[p];d(L,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Jr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Jr){this.h=l.h,hl(this,l.j),this.o=l.o,this.g=l.g,dl(this,l.s),this.l=l.l;var d=l.i,p=new mo;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Og(this,p),this.m=l.m}else l&&(d=String(l).match(Vg))?(this.h=!1,hl(this,d[1]||"",!0),this.o=fo(d[2]||""),this.g=fo(d[3]||"",!0),dl(this,d[4]),this.l=fo(d[5]||"",!0),Og(this,d[6]||"",!0),this.m=fo(d[7]||"")):(this.h=!1,this.i=new mo(null,this.h))}Jr.prototype.toString=function(){var l=[],d=this.j;d&&l.push(po(d,Lg,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(po(d,Lg,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(po(p,p.charAt(0)=="/"?pC:fC,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",po(p,gC)),l.join("")};function kn(l){return new Jr(l)}function hl(l,d,p){l.j=p?fo(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function dl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Og(l,d,p){d instanceof mo?(l.i=d,_C(l.i,l.h)):(p||(d=po(d,mC)),l.i=new mo(d,l.h))}function ye(l,d,p){l.i.set(d,p)}function fl(l){return ye(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function fo(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function po(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,dC),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function dC(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Lg=/[#\/\?@]/g,fC=/[#\?:]/g,pC=/[#\?]/g,mC=/[#\?@]/g,gC=/#/g;function mo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function rr(l){l.g||(l.g=new Map,l.h=0,l.i&&hC(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=mo.prototype,t.add=function(l,d){rr(this),this.i=null,l=zi(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Mg(l,d){rr(l),d=zi(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function jg(l,d){return rr(l),d=zi(l,d),l.g.has(d)}t.forEach=function(l,d){rr(this),this.g.forEach(function(p,_){p.forEach(function(V){l.call(d,V,_,this)},this)},this)},t.na=function(){rr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const V=l[_];for(let L=0;L<V.length;L++)p.push(d[_])}return p},t.V=function(l){rr(this);let d=[];if(typeof l=="string")jg(this,l)&&(d=d.concat(this.g.get(zi(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return rr(this),this.i=null,l=zi(this,l),jg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Fg(l,d,p){Mg(l,d),0<p.length&&(l.i=null,l.g.set(zi(l,d),N(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const L=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var V=L;$[_]!==""&&(V+="="+encodeURIComponent(String($[_]))),l.push(V)}}return this.i=l.join("&")};function zi(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function _C(l,d){d&&!l.j&&(rr(l),l.i=null,l.g.forEach(function(p,_){var V=_.toLowerCase();_!=V&&(Mg(this,_),Fg(this,V,p))},l)),l.j=d}function yC(l,d){const p=new co;if(a.Image){const _=new Image;_.onload=v(ir,p,"TestLoadImage: loaded",!0,d,_),_.onerror=v(ir,p,"TestLoadImage: error",!1,d,_),_.onabort=v(ir,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=v(ir,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function vC(l,d){const p=new co,_=new AbortController,V=setTimeout(()=>{_.abort(),ir(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(L=>{clearTimeout(V),L.ok?ir(p,"TestPingServer: ok",!0,d):ir(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),ir(p,"TestPingServer: error",!1,d)})}function ir(l,d,p,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(p)}catch{}}function EC(){this.g=new nC}function wC(l,d,p){const _=p||"";try{Dg(l,function(V,L){let $=V;c(V)&&($=dh(V)),d.push(_+L+"="+encodeURIComponent($))})}catch(V){throw d.push(_+"type="+encodeURIComponent("_badmap")),V}}function pl(l){this.l=l.Ub||null,this.j=l.eb||!1}P(pl,fh),pl.prototype.g=function(){return new ml(this.l,this.j)},pl.prototype.i=function(l){return function(){return l}}({});function ml(l,d){tt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ml,tt),t=ml.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,_o(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,_o(this)),this.g&&(this.readyState=3,_o(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ug(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ug(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?go(this):_o(this),this.readyState==3&&Ug(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,go(this))},t.Qa=function(l){this.g&&(this.response=l,go(this))},t.ga=function(){this.g&&go(this)};function go(l){l.readyState=4,l.l=null,l.j=null,l.v=null,_o(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function _o(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ml.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Bg(l){let d="";return j(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Th(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Bg(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):ye(l,d,p))}function be(l){tt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(be,tt);var IC=/^https?$/i,TC=["POST","PUT"];t=be.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gh.g(),this.v=this.o?gg(this.o):gg(gh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(L){$g(this,L);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)p.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())p.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(TC,d,void 0))||_||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of p)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kg(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){$g(this,L)}};function $g(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,zg(l),gl(l)}function zg(l){l.A||(l.A=!0,dt(l,"complete"),dt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,dt(this,"complete"),dt(this,"abort"),gl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gl(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qg(this):this.bb())},t.bb=function(){qg(this)};function qg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Nn(l)!=4||l.Z()!=2)){if(l.u&&Nn(l)==4)dg(l.Ea,0,l);else if(dt(l,"readystatechange"),Nn(l)==4){l.h=!1;try{const $=l.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=$===0){var V=String(l.D).match(Vg)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),_=!IC.test(V?V.toLowerCase():"")}p=_}if(p)dt(l,"complete"),dt(l,"success");else{l.m=6;try{var L=2<Nn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",zg(l)}}finally{gl(l)}}}}function gl(l,d){if(l.g){Kg(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||dt(l,"ready");try{p.onreadystatechange=_}catch{}}}function Kg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Nn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),tC(d)}};function Gg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function SC(l){const d={};l=(l.g&&2<=Nn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(E(l[_]))continue;var p=R(l[_]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[V]||[];d[V]=L,L.push(p)}T(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function Wg(l){this.Aa=0,this.i=[],this.j=new co,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yo("baseRetryDelayMs",5e3,l),this.cb=yo("retryDelaySeedMs",1e4,l),this.Wa=yo("forwardChannelMaxRetries",2,l),this.wa=yo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Rg(l&&l.concurrentRequestLimit),this.Da=new EC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wg.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,_){ft(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=n_(this,null,this.W),yl(this)};function Sh(l){if(Hg(l),l.G==3){var d=l.U++,p=kn(l.I);if(ye(p,"SID",l.K),ye(p,"RID",d),ye(p,"TYPE","terminate"),vo(l,p),d=new nr(l,l.j,d),d.L=2,d.v=fl(kn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=r_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),cl(d)}t_(l)}function _l(l){l.g&&(Ch(l),l.g.cancel(),l.g=null)}function Hg(l){_l(l),l.u&&(a.clearTimeout(l.u),l.u=null),vl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function yl(l){if(!xg(l.h)&&!l.s){l.s=!0;var d=l.Ga;zt||Z(),q||(zt(),q=!0),Y.add(d,l),l.B=0}}function AC(l,d){return kg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=uo(g(l.Ga,l,d),e_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new nr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=y(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(V.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Jg(this,V,d),p=kn(this.I),ye(p,"RID",l),ye(p,"CVER",22),this.D&&ye(p,"X-HTTP-Session-Id",this.D),vo(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(Bg(L)))+"&"+d:this.m&&Th(p,this.m,L)),Ih(this.h,V),this.Ua&&ye(p,"TYPE","init"),this.P?(ye(p,"$req",d),ye(p,"SID","null"),V.T=!0,yh(V,p,null)):yh(V,p,d),this.G=2}}else this.G==3&&(l?Qg(this,l):this.i.length==0||xg(this.h)||Qg(this))};function Qg(l,d){var p;d?p=d.l:p=l.U++;const _=kn(l.I);ye(_,"SID",l.K),ye(_,"RID",p),ye(_,"AID",l.T),vo(l,_),l.m&&l.o&&Th(_,l.m,l.o),p=new nr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Jg(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ih(l.h,p),yh(p,_,d)}function vo(l,d){l.H&&j(l.H,function(p,_){ye(d,_,p)}),l.l&&Dg({},function(p,_){ye(d,_,p)})}function Jg(l,d,p){p=Math.min(l.i.length,p);var _=l.l?g(l.l.Na,l.l,l):null;e:{var V=l.i;let L=-1;for(;;){const $=["count="+p];L==-1?0<p?(L=V[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let pe=!0;for(let We=0;We<p;We++){let ae=V[We].g;const nt=V[We].map;if(ae-=L,0>ae)L=Math.max(0,V[We].g-100),pe=!1;else try{wC(nt,$,"req"+ae+"_")}catch{_&&_(nt)}}if(pe){_=$.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function Yg(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;zt||Z(),q||(zt(),q=!0),Y.add(d,l),l.v=0}}function Ah(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=uo(g(l.Fa,l),e_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Xg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=uo(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),_l(this),Xg(this))};function Ch(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Xg(l){l.g=new nr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=kn(l.qa);ye(d,"RID","rpc"),ye(d,"SID",l.K),ye(d,"AID",l.T),ye(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&ye(d,"TO",l.ja),ye(d,"TYPE","xmlhttp"),vo(l,d),l.m&&l.o&&Th(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=fl(kn(d)),p.m=null,p.P=!0,Ag(p,l)}t.Za=function(){this.C!=null&&(this.C=null,_l(this),Ah(this),ft(19))};function vl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Zg(l,d){var p=null;if(l.g==d){vl(l),Ch(l),l.g=null;var _=2}else if(wh(l.h,d))p=d.D,Ng(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var V=l.B;_=al(),dt(_,new wg(_,p)),yl(l)}else Yg(l);else if(V=d.s,V==3||V==0&&0<d.X||!(_==1&&AC(l,d)||_==2&&Ah(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),V){case 1:Yr(l,5);break;case 4:Yr(l,10);break;case 3:Yr(l,6);break;default:Yr(l,2)}}}function e_(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function Yr(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),_=l.Xa;const V=!_;_=new Jr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||hl(_,"https"),fl(_),V?yC(_.toString(),p):vC(_.toString(),p)}else ft(2);l.G=0,l.l&&l.l.sa(d),t_(l),Hg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function t_(l){if(l.G=0,l.ka=[],l.l){const d=bg(l.h);(d.length!=0||l.i.length!=0)&&(D(l.ka,d),D(l.ka,l.i),l.h.i.length=0,N(l.i),l.i.length=0),l.l.ra()}}function n_(l,d,p){var _=p instanceof Jr?kn(p):new Jr(p);if(_.g!="")d&&(_.g=d+"."+_.g),dl(_,_.s);else{var V=a.location;_=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var L=new Jr(null);_&&hl(L,_),d&&(L.g=d),V&&dl(L,V),p&&(L.l=p),_=L}return p=l.D,d=l.ya,p&&d&&ye(_,p,d),ye(_,"VER",l.la),vo(l,_),_}function r_(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new be(new pl({eb:p})):new be(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function i_(){}t=i_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function El(){}El.prototype.g=function(l,d){return new bt(l,d)};function bt(l,d){tt.call(this),this.g=new Wg(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!E(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new qi(this)}P(bt,tt),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Sh(this.g)},bt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=dh(l),l=p);d.i.push(new lC(d.Ya++,l)),d.G==3&&yl(d)},bt.prototype.N=function(){this.g.l=null,delete this.j,Sh(this.g),delete this.g,bt.aa.N.call(this)};function s_(l){ph.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}P(s_,ph);function o_(){mh.call(this),this.status=1}P(o_,mh);function qi(l){this.g=l}P(qi,i_),qi.prototype.ua=function(){dt(this.g,"a")},qi.prototype.ta=function(l){dt(this.g,new s_(l))},qi.prototype.sa=function(l){dt(this.g,new o_)},qi.prototype.ra=function(){dt(this.g,"b")},El.prototype.createWebChannel=El.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,a0=function(){return new El},o0=function(){return al()},s0=Hr,Pf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ll.NO_ERROR=0,ll.TIMEOUT=8,ll.HTTP_ERROR=6,du=ll,Ig.COMPLETE="complete",i0=Ig,_g.EventType=ao,ao.OPEN="a",ao.CLOSE="b",ao.ERROR="c",ao.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Uo=_g,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,r0=be}).apply(typeof Ul<"u"?Ul:typeof self<"u"?self:typeof window<"u"?window:{});const tv="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let eo="10.14.0";/**
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
 */const Si=new Qp("@firebase/firestore");function Yi(){return Si.logLevel}function U(t,...e){if(Si.logLevel<=re.DEBUG){const n=e.map(am);Si.debug(`Firestore (${eo}): ${t}`,...n)}}function _t(t,...e){if(Si.logLevel<=re.ERROR){const n=e.map(am);Si.error(`Firestore (${eo}): ${t}`,...n)}}function Ra(t,...e){if(Si.logLevel<=re.WARN){const n=e.map(am);Si.warn(`Firestore (${eo}): ${t}`,...n)}}function am(t){if(typeof t=="string")return t;try{/**
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
 */function W(t="Unexpected state"){const e=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: `+t;throw _t(e),new Error(e)}function H(t,e){t||W()}function X(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Z1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class tD{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){H(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new Z1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new gt(e)}}class nD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new nD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){H(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(H(typeof n.token=="string"),this.R=n.token,new iD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function oD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class l0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=oD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Ls(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function u0(t){return t+"\0"}/**
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
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ke(0,0))}static max(){return new Q(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xa{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends xa{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const aD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends xa{construct(e,n,r){return new Pe(e,n,r)}static isValidIdentifier(e){return aD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(le.fromString(e))}static fromName(e){return new K(le.fromString(e).popFirst(5))}static empty(){return new K(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new le(e.slice()))}}/**
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
 */class ec{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Rf(t){return t.fields.find(e=>e.kind===2)}function ni(t){return t.fields.filter(e=>e.kind!==2)}ec.UNKNOWN_ID=-1;class fu{constructor(e,n){this.fieldPath=e,this.kind=n}}class ka{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ka(0,Ft.min())}}function lD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Ft(i,K.empty(),e)}function c0(t){return new Ft(t.readTime,t.key,-1)}class Ft{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ft(Q.min(),K.empty(),-1)}static max(){return new Ft(Q.max(),K.empty(),-1)}}function lm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const h0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class d0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fi(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==h0)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Uc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Kn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ta(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=um(r.target.error);this.V.reject(new ta(e,i))}}static open(e,n,r,i){try{return new Uc(n,e.transaction(i,r))}catch(s){throw new ta(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new cD(n)}}class br{constructor(e,n,r){this.name=e,this.version=n,this.p=r,br.S($e())===12.2&&_t("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),ri(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Hp())return!1;if(br.v())return!0;const e=$e(),n=br.S(e),r=0<n&&n<10,i=f0(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ta(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new z(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new z(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ta(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Uc.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function f0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class uD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ri(this.B.delete())}}class ta extends z{constructor(e,n){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function qr(t){return t.name==="IndexedDbTransactionError"}class cD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ri(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),ri(this.store.add(e))}get(e){return ri(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),ri(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),ri(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=um(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new uD(a),c=n(a.primaryKey,a.value,u);if(c instanceof O){const h=c.catch(f=>(u.done(),O.reject(f)));r.push(h)}u.isDone?i():u.K===null?a.continue():a.continue(u.K)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ri(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=um(r.target.error);n(i)}})}let nv=!1;function um(t){const e=br.S($e());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return nv||(nv=!0,setTimeout(()=>{throw r},0)),r}}return t}class hD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){qr(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Fi(n)}await this.X(6e4)})}}class dD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=c0(s);lm(o,r)>0&&(r=o)}),new Ft(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Wt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wt.oe=-1;function Bc(t){return t==null}function Na(t){return t===0&&1/t==-1/0}function fD(t){return typeof t=="number"&&Number.isInteger(t)&&!Na(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=rv(e)),e=pD(t.get(n),e);return rv(e)}function pD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function rv(t){return t+""}function wn(t){const e=t.length;if(H(e>=2),e===2)return H(t.charAt(0)===""&&t.charAt(1)===""),le.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&W(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:W()}s=o+2}return new le(r)}/**
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
 */const iv=["userId","batchId"];/**
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
 */function pu(t,e){return[t,vt(e)]}function p0(t,e,n){return[t,vt(e),n]}const mD={},gD=["prefixPath","collectionGroup","readTime","documentId"],_D=["prefixPath","collectionGroup","documentId"],yD=["collectionGroup","readTime","prefixPath","documentId"],vD=["canonicalId","targetId"],ED=["targetId","path"],wD=["path","targetId"],ID=["collectionId","parent"],TD=["indexId","uid"],SD=["uid","sequenceNumber"],AD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],CD=["indexId","uid","orderedDocumentKey"],PD=["userId","collectionPath","documentId"],RD=["userId","collectionPath","largestBatchId"],xD=["userId","collectionGroup","largestBatchId"],m0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],kD=[...m0,"documentOverlays"],g0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_0=g0,cm=[..._0,"indexConfiguration","indexState","indexEntries"],ND=cm,bD=[...cm,"globals"];/**
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
 */class xf extends d0{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function ze(t,e){const n=X(t);return br.F(n._e,e)}/**
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
 */function sv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function to(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bl(this.root,e,this.comparator,!0)}}class Bl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class de{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ov(this.data.getIterator())}getIteratorFrom(e){return new ov(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new de(this.comparator);return n.data=e,n}}class ov{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Wi(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new de(Pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ls(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class v0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new v0("Invalid base64 string: "+s):s}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const DD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(H(!!t),typeof t=="string"){let e=0;const n=DD.exec(t);if(H(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
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
 */function hm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dm(t){const e=t.mapValue.fields.__previous_value__;return hm(e)?dm(e):e}function ba(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class VD{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},mu={nullValue:"NULL_VALUE"};function Ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hm(t)?4:E0(t)?9007199254740991:$c(t)?10:11:W()}function Pn(t,e){if(t===e)return!0;const n=Ci(t);if(n!==Ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ba(t).isEqual(ba(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xn(i.timestampValue),a=Xn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Lr(i.bytesValue).isEqual(Lr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?Na(o)===Na(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ls(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(sv(o)!==sv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Pn(o[u],a[u])))return!1;return!0}(t,e);default:return W()}}function Da(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function Mr(t,e){if(t===e)return 0;const n=Ci(t),r=Ci(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),u=we(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return av(t.timestampValue,e.timestampValue);case 4:return av(ba(t),ba(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Lr(s),u=Lr(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ee(a[c],u[c]);if(h!==0)return h}return ee(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(we(s.latitude),we(o.latitude));return a!==0?a:ee(we(s.longitude),we(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},g=o.fields||{},v=(a=f.value)===null||a===void 0?void 0:a.arrayValue,P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=ee(((c=v==null?void 0:v.values)===null||c===void 0?void 0:c.length)||0,((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0);return N!==0?N:lv(v,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===wr.mapValue&&o===wr.mapValue)return 0;if(s===wr.mapValue)return 1;if(o===wr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const g=ee(u[f],h[f]);if(g!==0)return g;const v=Mr(a[u[f]],c[h[f]]);if(v!==0)return v}return ee(u.length,h.length)}(t.mapValue,e.mapValue);default:throw W()}}function av(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Xn(t),r=Xn(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function lv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Mr(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function Ms(t){return kf(t)}function kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kf(n.fields[o])}`;return i+"}"}(t.mapValue):W()}function Va(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nf(t){return!!t&&"integerValue"in t}function Oa(t){return!!t&&"arrayValue"in t}function uv(t){return!!t&&"nullValue"in t}function cv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gu(t){return!!t&&"mapValue"in t}function $c(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function na(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return to(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=na(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=na(t.arrayValue.values[n]);return e}return Object.assign({},t)}function E0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const w0={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function OD(t){return"nullValue"in t?mu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Va(Ai.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?$c(t)?w0:{mapValue:{}}:W()}function LD(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Va(Ai.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?w0:"mapValue"in t?$c(t)?{mapValue:{}}:wr:W()}function hv(t,e){const n=Mr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function dv(t,e){const n=Mr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=na(n)}setAll(e){let n=Pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=na(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){to(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(na(this.value))}}function I0(t){const e=[];return to(t.fields,(n,r)=>{const i=new Pe([n]);if(gu(r)){const s=I0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
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
 */class Ve{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ve(e,0,Q.min(),Q.min(),Q.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Ve(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Ve(e,2,n,Q.min(),Q.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,Q.min(),Q.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class js{constructor(e,n){this.position=e,this.inclusive=n}}function fv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Mr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function pv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class La{constructor(e,n="asc"){this.field=e,this.dir=n}}function MD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class T0{}class ie extends T0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jD(e,n,r):n==="array-contains"?new BD(e,r):n==="in"?new x0(e,r):n==="not-in"?new $D(e,r):n==="array-contains-any"?new zD(e,r):new ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FD(e,r):new UD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mr(n,this.value)):n!==null&&Ci(this.value)===Ci(n)&&this.matchesComparison(Mr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ce extends T0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ce(e,n)}matches(e){return Fs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fs(t){return t.op==="and"}function bf(t){return t.op==="or"}function fm(t){return S0(t)&&Fs(t)}function S0(t){for(const e of t.filters)if(e instanceof ce)return!1;return!0}function Df(t){if(t instanceof ie)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(fm(t))return t.filters.map(e=>Df(e)).join(",");{const e=t.filters.map(n=>Df(n)).join(",");return`${t.op}(${e})`}}function A0(t,e){return t instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&Pn(r.value,i.value)}(t,e):t instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&A0(o,i.filters[a]),!0):!1}(t,e):void W()}function C0(t,e){const n=t.filters.concat(e);return ce.create(n,t.op)}function P0(t){return t instanceof ie?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof ce?function(n){return n.op.toString()+" {"+n.getFilters().map(P0).join(" ,")+"}"}(t):"Filter"}class jD extends ie{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class FD extends ie{constructor(e,n){super(e,"in",n),this.keys=R0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UD extends ie{constructor(e,n){super(e,"not-in",n),this.keys=R0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function R0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class BD extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Oa(n)&&Da(n.arrayValue,this.value)}}class x0 extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Da(this.value.arrayValue,n)}}class $D extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(Da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Da(this.value.arrayValue,n)}}class zD extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Oa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Da(this.value.arrayValue,r))}}/**
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
 */class qD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Vf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qD(t,e,n,r,i,s,o)}function Pi(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Df(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.ue=n}return e.ue}function Xa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pv(t.startAt,e.startAt)&&pv(t.endAt,e.endAt)}function tc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function nc(t,e){return t.filters.filter(n=>n instanceof ie&&n.field.isEqual(e))}function mv(t,e,n){let r=mu,i=!0;for(const s of nc(t,e)){let o=mu,a=!0;switch(s.op){case"<":case"<=":o=OD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=mu}hv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];hv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function gv(t,e,n){let r=wr,i=!0;for(const s of nc(t,e)){let o=wr,a=!0;switch(s.op){case">=":case">":o=LD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=wr}dv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];dv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class no{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KD(t,e,n,r,i,s,o,a){return new no(t,e,n,r,i,s,o,a)}function Za(t){return new no(t)}function _v(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function k0(t){return t.collectionGroup!==null}function ra(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new de(Pe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new La(s,r))}),n.has(Pe.keyField().canonicalString())||e.ce.push(new La(Pe.keyField(),r))}return e.ce}function Jt(t){const e=X(t);return e.le||(e.le=GD(e,ra(t))),e.le}function GD(t,e){if(t.limitType==="F")return Vf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new La(i.field,s)});const n=t.endAt?new js(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new js(t.startAt.position,t.startAt.inclusive):null;return Vf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Of(t,e){const n=t.filters.concat([e]);return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rc(t,e,n){return new no(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zc(t,e){return Xa(Jt(t),Jt(e))&&t.limitType===e.limitType}function N0(t){return`${Pi(Jt(t))}|lt:${t.limitType}`}function Xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>P0(i)).join(", ")}]`),Bc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ms(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ms(i)).join(",")),`Target(${r})`}(Jt(t))}; limitType=${t.limitType})`}function el(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ra(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=fv(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ra(r),i)||r.endAt&&!function(o,a,u){const c=fv(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ra(r),i))}(t,e)}function WD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function b0(t){return(e,n)=>{let r=!1;for(const i of ra(t)){const s=HD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function HD(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Mr(u,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class Kr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){to(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return y0(this.inner)}size(){return this.innerSize}}/**
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
 */const QD=new Se(K.comparator);function Ot(){return QD}const D0=new Se(K.comparator);function Bo(...t){let e=D0;for(const n of t)e=e.insert(n.key,n);return e}function V0(t){let e=D0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function In(){return ia()}function O0(){return ia()}function ia(){return new Kr(t=>t.toString(),(t,e)=>t.isEqual(e))}const JD=new Se(K.comparator),YD=new de(K.comparator);function te(...t){let e=YD;for(const n of t)e=e.add(n);return e}const XD=new de(ee);function ZD(){return XD}/**
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
 */function pm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Na(e)?"-0":e}}function L0(t){return{integerValue:""+t}}function eV(t,e){return fD(e)?L0(e):pm(t,e)}/**
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
 */class qc{constructor(){this._=void 0}}function tV(t,e,n){return t instanceof Us?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hm(s)&&(s=dm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Bs?j0(t,e):t instanceof $s?F0(t,e):function(i,s){const o=M0(i,s),a=yv(o)+yv(i.Pe);return Nf(o)&&Nf(i.Pe)?L0(a):pm(i.serializer,a)}(t,e)}function nV(t,e,n){return t instanceof Bs?j0(t,e):t instanceof $s?F0(t,e):n}function M0(t,e){return t instanceof Ma?function(r){return Nf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Us extends qc{}class Bs extends qc{constructor(e){super(),this.elements=e}}function j0(t,e){const n=U0(e);for(const r of t.elements)n.some(i=>Pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class $s extends qc{constructor(e){super(),this.elements=e}}function F0(t,e){let n=U0(e);for(const r of t.elements)n=n.filter(i=>!Pn(i,r));return{arrayValue:{values:n}}}class Ma extends qc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yv(t){return we(t.integerValue||t.doubleValue)}function U0(t){return Oa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class B0{constructor(e,n){this.field=e,this.transform=n}}function rV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Bs&&i instanceof Bs||r instanceof $s&&i instanceof $s?Ls(r.elements,i.elements,Pn):r instanceof Ma&&i instanceof Ma?Pn(r.Pe,i.Pe):r instanceof Us&&i instanceof Us}(t.transform,e.transform)}class iV{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _u(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kc{}function $0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mm(t.key,Lt.none()):new ro(t.key,t.data,Lt.none());{const n=t.data,r=Ct.empty();let i=new de(Pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Gr(t.key,r,new Ht(i.toArray()),Lt.none())}}function sV(t,e,n){t instanceof ro?function(i,s,o){const a=i.value.clone(),u=Ev(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Gr?function(i,s,o){if(!_u(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ev(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(z0(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function sa(t,e,n,r){return t instanceof ro?function(s,o,a,u){if(!_u(s.precondition,o))return a;const c=s.value.clone(),h=wv(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gr?function(s,o,a,u){if(!_u(s.precondition,o))return a;const c=wv(s.fieldTransforms,u,o),h=o.data;return h.setAll(z0(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return _u(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=M0(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function vv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ls(r,i,(s,o)=>rV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ro extends Kc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gr extends Kc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ev(t,e,n){const r=new Map;H(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,nV(o,a,n[i]))}return r}function wv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tV(s,o,e))}return r}class mm extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q0 extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gm{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=sa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=sa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=O0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=$0(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ls(this.mutations,e.mutations,(n,r)=>vv(n,r))&&Ls(this.baseMutations,e.baseMutations,(n,r)=>vv(n,r))}}class _m{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){H(e.mutations.length===r.length);let i=function(){return JD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new _m(e,n,r,i)}}/**
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
 */class ym{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,se;function lV(t){switch(t){default:return W();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function K0(t){if(t===void 0)return _t("GRPC error has no .code"),M.UNKNOWN;switch(t){case Me.OK:return M.OK;case Me.CANCELLED:return M.CANCELLED;case Me.UNKNOWN:return M.UNKNOWN;case Me.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Me.INTERNAL:return M.INTERNAL;case Me.UNAVAILABLE:return M.UNAVAILABLE;case Me.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Me.NOT_FOUND:return M.NOT_FOUND;case Me.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Me.ABORTED:return M.ABORTED;case Me.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Me.DATA_LOSS:return M.DATA_LOSS;default:return W()}}(se=Me||(Me={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function uV(){return new TextEncoder}/**
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
 */const cV=new pi([4294967295,4294967295],0);function Iv(t){const e=uV().encode(t),n=new n0;return n.update(e),new Uint8Array(n.digest())}function Tv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new pi([n,r],0),new pi([i,s],0)]}class vm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $o(`Invalid padding: ${n}`);if(r<0)throw new $o(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $o(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $o(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=pi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(pi.fromNumber(r)));return i.compare(cV)===1&&(i=new pi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Iv(e),[r,i]=Tv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Iv(e),[r,i]=Tv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $o extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gc(Q.min(),i,new Se(ee),Ot(),te())}}class tl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tl(r,n,te(),te(),te())}}/**
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
 */class yu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class G0{constructor(e,n){this.targetId=e,this.me=n}}class W0{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sv{constructor(){this.fe=0,this.ge=Cv(),this.pe=Fe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W()}}),new tl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Cv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hV{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ot(),this.qe=Av(),this.Qe=new Se(ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(tc(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Ve.newNoDocument(o,Q.min()))}else H(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Lr(r).toUint8Array()}catch(u){if(u instanceof v0)return Ra("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new vm(o,i,s)}catch(u){return Ra(u instanceof $o?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&tc(a.target)){const u=new K(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ve.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Gc(e,n,this.Qe,this.ke,r);return this.ke=Ot(),this.qe=Av(),this.Qe=new Se(ee),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Sv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new de(ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Sv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Av(){return new Se(K.comparator)}function Cv(){return new Se(K.comparator)}const dV={asc:"ASCENDING",desc:"DESCENDING"},fV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pV={and:"AND",or:"OR"};class mV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lf(t,e){return t.useProto3Json||Bc(e)?e:{value:e}}function zs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gV(t,e){return zs(t,e.toTimestamp())}function Et(t){return H(!!t),Q.fromTimestamp(function(n){const r=Xn(n);return new ke(r.seconds,r.nanos)}(t))}function Em(t,e){return Mf(t,e).canonicalString()}function Mf(t,e){const n=function(i){return new le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Q0(t){const e=le.fromString(t);return H(iS(e)),e}function ic(t,e){return Em(t.databaseId,e.path)}function mi(t,e){const n=Q0(e);if(n.get(1)!==t.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(X0(n))}function J0(t,e){return Em(t.databaseId,e)}function Y0(t){const e=Q0(t);return e.length===4?le.emptyPath():X0(e)}function jf(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function X0(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pv(t,e,n){return{name:ic(t,e),fields:n.value.mapValue.fields}}function _V(t,e,n){const r=mi(t,e.name),i=Et(e.updateTime),s=e.createTime?Et(e.createTime):Q.min(),o=new Ct({mapValue:{fields:e.fields}}),a=Ve.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function yV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(H(h===void 0||typeof h=="string"),Fe.fromBase64String(h||"")):(H(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Fe.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?M.UNKNOWN:K0(c.code);return new z(h,c.message||"")}(o);n=new W0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mi(t,r.document.name),s=Et(r.document.updateTime),o=r.document.createTime?Et(r.document.createTime):Q.min(),a=new Ct({mapValue:{fields:r.document.fields}}),u=Ve.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new yu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mi(t,r.document),s=r.readTime?Et(r.readTime):Q.min(),o=Ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new yu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mi(t,r.document),s=r.removedTargetIds||[];n=new yu([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new aV(i,s),a=r.targetId;n=new G0(a,o)}}return n}function sc(t,e){let n;if(e instanceof ro)n={update:Pv(t,e.key,e.value)};else if(e instanceof mm)n={delete:ic(t,e.key)};else if(e instanceof Gr)n={update:Pv(t,e.key,e.data),updateMask:SV(e.fieldMask)};else{if(!(e instanceof q0))return W();n={verify:ic(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Us)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof $s)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:gV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function Ff(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Lt.updateTime(Et(s.updateTime)):s.exists!==void 0?Lt.exists(s.exists):Lt.none()}(e.currentDocument):Lt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let u=null;if("setToServerValue"in a)H(a.setToServerValue==="REQUEST_TIME"),u=new Us;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];u=new Bs(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];u=new $s(h)}else"increment"in a?u=new Ma(o,a.increment):W();const c=Pe.fromServerFormat(a.fieldPath);return new B0(c,u)}(t,i)):[];if(e.update){e.update.name;const i=mi(t,e.update.name),s=new Ct({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Ht(c.map(h=>Pe.fromServerFormat(h)))}(e.updateMask);return new Gr(i,s,o,n,r)}return new ro(i,s,n,r)}if(e.delete){const i=mi(t,e.delete);return new mm(i,n)}if(e.verify){const i=mi(t,e.verify);return new q0(i,n)}return W()}function vV(t,e){return t&&t.length>0?(H(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Et(i.updateTime):Et(s);return o.isEqual(Q.min())&&(o=Et(s)),new iV(o,i.transformResults||[])}(n,e))):[]}function Z0(t,e){return{documents:[J0(t,e.path)]}}function eS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=J0(t,i);const s=function(c){if(c.length!==0)return rS(ce.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:Zi(g.field),direction:wV(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Lf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function tS(t){let e=Y0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){H(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const g=nS(f);return g instanceof ce&&fm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(P){return new La(es(P.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,Bc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(f){const g=!!f.before,v=f.values||[];return new js(v,g)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const g=!f.before,v=f.values||[];return new js(v,g)}(n.endAt)),KD(e,i,o,s,a,"F",u,c)}function EV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=es(n.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(n.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return ie.create(es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ce.create(n.compositeFilter.filters.map(r=>nS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function wV(t){return dV[t]}function IV(t){return fV[t]}function TV(t){return pV[t]}function Zi(t){return{fieldPath:t.canonicalString()}}function es(t){return Pe.fromServerFormat(t.fieldPath)}function rS(t){return t instanceof ie?function(n){if(n.op==="=="){if(cv(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NAN"}};if(uv(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cv(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NAN"}};if(uv(n.value))return{unaryFilter:{field:Zi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zi(n.field),op:IV(n.op),value:n.value}}}(t):t instanceof ce?function(n){const r=n.getFilters().map(i=>rS(i));return r.length===1?r[0]:{compositeFilter:{op:TV(n.op),filters:r}}}(t):W()}function SV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Bn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=Fe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sS{constructor(e){this.ct=e}}function AV(t,e){let n;if(e.document)n=_V(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=xi(e.noDocument.readTime);n=Ve.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return W();{const r=K.fromSegments(e.unknownDocument.path),i=xi(e.unknownDocument.version);n=Ve.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ke(i[0],i[1]);return Q.fromTimestamp(s)}(e.readTime)),n}function Rv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:oc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:ic(s,o.key),fields:o.data.value.mapValue.fields,updateTime:zs(s,o.version.toTimestamp()),createTime:zs(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ri(e.version)};else{if(!e.isUnknownDocument())return W();r.unknownDocument={path:n.path.toArray(),version:Ri(e.version)}}return r}function oc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ri(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function xi(t){const e=new ke(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function ii(t,e){const n=(e.baseMutations||[]).map(s=>Ff(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ff(t.ct,s)),i=ke.fromMillis(e.localWriteTimeMs);return new gm(e.batchId,i,n,r)}function zo(t){const e=xi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?xi(t.lastLimboFreeSnapshotVersion):Q.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return H(s.documents.length===1),Jt(Za(Y0(s.documents[0])))}(t.query):function(s){return Jt(tS(s))}(t.query),new Bn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function oS(t,e){const n=Ri(e.snapshotVersion),r=Ri(e.lastLimboFreeSnapshotVersion);let i;i=tc(e.target)?Z0(t.ct,e.target):eS(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Pi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function aS(t){const e=tS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rc(e,e.limit,"L"):e}function ud(t,e){return new ym(e.largestBatchId,Ff(t.ct,e.overlayMutation))}function xv(t,e){const n=e.path.lastSegment();return[t,vt(e.path.popLast()),n]}function kv(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Ri(r.readTime),documentKey:vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class CV{getBundleMetadata(e,n){return Nv(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:xi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Nv(e).put(function(i){return{bundleId:i.id,createTime:Ri(Et(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return bv(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:aS(s.bundledQuery),readTime:xi(s.readTime)}}(r)})}saveNamedQuery(e,n){return bv(e).put(function(i){return{name:i.name,readTime:Ri(Et(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Nv(t){return ze(t,"bundles")}function bv(t){return ze(t,"namedQueries")}/**
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
 */class Wc{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Wc(e,r)}getOverlay(e,n){return Ro(e).get(xv(this.userId,n)).next(r=>r?ud(this.serializer,r):null)}getOverlays(e,n){const r=In();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new ym(n,o);i.push(this.ht(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ro(e).j("collectionPathOverlayIndex",a))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=In(),s=vt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ro(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=ud(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=In();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ro(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const f=ud(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return Ro(e).put(function(i,s,o){const[a,u,c]=xv(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:sc(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Ro(t){return ze(t,"documentOverlays")}/**
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
 */class PV{Pt(e){return ze(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Fe.fromUint8Array(r):Fe.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class si{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(we(e.integerValue));else if("doubleValue"in e){const r=we(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),Na(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Xn(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(Lr(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?E0(e)?this.dt(n,Number.MAX_SAFE_INTEGER):$c(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):W()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(we(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),K.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}si.vt=new si;function RV(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Dv(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=RV(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class xV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=Dv(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=Dv(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class kV{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class NV{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class xo{constructor(){this.jt=new xV,this.Ht=new kV(this.jt),this.Jt=new NV(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class oi{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new oi(this.indexId,this.documentKey,this.arrayValue,r)}}function ar(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Vv(t.arrayValue,e.arrayValue),n!==0?n:(n=Vv(t.directionalValue,e.directionalValue),n!==0?n:K.comparator(t.documentKey,e.documentKey)))}function Vv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class Ov{constructor(e){this.Xt=new de((n,r)=>Pe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(H(e.collectionGroup===this.collectionId),this.nn)return!1;const n=Rf(e);if(n!==void 0&&!this.sn(n))return!1;const r=ni(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const u=r[s];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new de(Pe.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new fu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new fu(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new fu(r.field,r.dir==="asc"?0:1)));return new ec(ec.UNKNOWN_ID,this.collectionId,n,ka.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function lS(t){var e,n;if(H(t instanceof ie||t instanceof ce),t instanceof ie){if(t instanceof x0){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ie.create(t.field,"==",s)))||[];return ce.create(i,"or")}return t}const r=t.filters.map(i=>lS(i));return ce.create(r,t.op)}function bV(t){if(t.getFilters().length===0)return[];const e=$f(lS(t));return H(uS(e)),Uf(e)||Bf(e)?[e]:e.getFilters()}function Uf(t){return t instanceof ie}function Bf(t){return t instanceof ce&&fm(t)}function uS(t){return Uf(t)||Bf(t)||function(n){if(n instanceof ce&&bf(n)){for(const r of n.getFilters())if(!Uf(r)&&!Bf(r))return!1;return!0}return!1}(t)}function $f(t){if(H(t instanceof ie||t instanceof ce),t instanceof ie)return t;if(t.filters.length===1)return $f(t.filters[0]);const e=t.filters.map(r=>$f(r));let n=ce.create(e,t.op);return n=ac(n),uS(n)?n:(H(n instanceof ce),H(Fs(n)),H(n.filters.length>1),n.filters.reduce((r,i)=>wm(r,i)))}function wm(t,e){let n;return H(t instanceof ie||t instanceof ce),H(e instanceof ie||e instanceof ce),n=t instanceof ie?e instanceof ie?function(i,s){return ce.create([i,s],"and")}(t,e):Lv(t,e):e instanceof ie?Lv(e,t):function(i,s){if(H(i.filters.length>0&&s.filters.length>0),Fs(i)&&Fs(s))return C0(i,s.getFilters());const o=bf(i)?i:s,a=bf(i)?s:i,u=o.filters.map(c=>wm(c,a));return ce.create(u,"or")}(t,e),ac(n)}function Lv(t,e){if(Fs(e))return C0(e,t.getFilters());{const n=e.filters.map(r=>wm(t,r));return ce.create(n,"or")}}function ac(t){if(H(t instanceof ie||t instanceof ce),t instanceof ie)return t;const e=t.getFilters();if(e.length===1)return ac(e[0]);if(S0(t))return t;const n=e.map(i=>ac(i)),r=[];return n.forEach(i=>{i instanceof ie?r.push(i):i instanceof ce&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ce.create(r,t.op)}/**
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
 */class DV{constructor(){this.un=new Im}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Ft.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Ft.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class Im{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new de(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new de(le.comparator)).toArray()}}/**
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
 */const $l=new Uint8Array(0);class VV{constructor(e,n){this.databaseId=n,this.cn=new Im,this.ln=new Kr(r=>Pi(r),(r,i)=>Xa(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:vt(i)};return Mv(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[u0(n),""],!1,!0);return Mv(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(wn(o.parent))}return r})}addFieldIndex(e,n){const r=ko(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Qi(e);return s.next(a=>{o.put(kv(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=ko(e),i=Qi(e),s=Hi(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=ko(e),r=Hi(e),i=Qi(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return O.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Ov(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Hi(e);let i=!0;const s=new Map;return O.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return O.forEach(s,(u,c)=>{U("IndexedDbIndexManager",`Using index ${function(w){return`id=${w.indexId}|cg=${w.collectionGroup}|f=${w.fields.map(b=>`${b.fieldPath}:${b.kind}`).join(",")}`}(u)} to execute ${Pi(n)}`);const h=function(w,b){const F=Rf(b);if(F===void 0)return null;for(const j of nc(w,F.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(c,u),f=function(w,b){const F=new Map;for(const j of ni(b))for(const T of nc(w,j.fieldPath))switch(T.op){case"==":case"in":F.set(j.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return F.set(j.fieldPath.canonicalString(),T.value),Array.from(F.values())}return null}(c,u),g=function(w,b){const F=[];let j=!0;for(const T of ni(b)){const y=T.kind===0?mv(w,T.fieldPath,w.startAt):gv(w,T.fieldPath,w.startAt);F.push(y.value),j&&(j=y.inclusive)}return new js(F,j)}(c,u),v=function(w,b){const F=[];let j=!0;for(const T of ni(b)){const y=T.kind===0?gv(w,T.fieldPath,w.endAt):mv(w,T.fieldPath,w.endAt);F.push(y.value),j&&(j=y.inclusive)}return new js(F,j)}(c,u),P=this.In(u,c,g),N=this.In(u,c,v),D=this.Tn(u,c,f),S=this.En(u.indexId,h,P,g.inclusive,N,v.inclusive,D);return O.forEach(S,E=>r.G(E,n.limit).next(w=>{w.forEach(b=>{const F=K.fromSegments(b.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return O.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=bV(ce.create(e.filters,"and")).map(r=>Vf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),h=[];for(let f=0;f<u;++f){const g=n?this.dn(n[f/c]):$l,v=this.An(e,g,r[f%c],i),P=this.Rn(e,g,s[f%c],o),N=a.map(D=>this.An(e,g,D,!0));h.push(...this.createRange(v,P,N))}return h}An(e,n,r,i){const s=new oi(e,K.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new oi(e,K.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new Ov(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return O.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new de(Pe.comparator),h=!1;for(const f of u.filters)for(const g of f.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:c=c.add(g.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new xo;for(const i of ni(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);si.vt.It(s,o)}return r.zt()}dn(e){const n=new xo;return si.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new xo;return si.vt.It(Va(this.databaseId,n),r.Yt(function(s){const o=ni(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new xo);let s=0;for(const o of ni(e)){const a=r[s++];for(const u of i)if(this.fn(n,o.fieldPath)&&Oa(a))i=this.gn(i,o,a);else{const c=u.Yt(o.kind);si.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new xo;u.seed(a.zt()),si.vt.It(o,u.Yt(n.kind)),s.push(u)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=ko(e),i=Qi(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(h,f){const g=f?new ka(f.sequenceNumber,new Ft(xi(f.readTime),new K(wn(f.documentKey)),f.largestBatchId)):ka.empty(),v=h.fields.map(([P,N])=>new fu(Pe.fromServerFormat(P),N));return new ec(h.indexId,h.collectionGroup,v,g)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=ko(e),s=Qi(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>O.forEach(a,u=>s.put(kv(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,u=>this.wn(e,i,u).next(c=>{const h=this.Sn(s,u);return c.isEqual(h)?O.resolve():this.bn(e,s,u,c,h)}))))})}Dn(e,n,r,i){return Hi(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Hi(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Hi(e);let s=new de(ar);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new oi(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new de(ar);const i=this.Vn(n,e);if(i==null)return r;const s=Rf(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Oa(o))for(const a of o.arrayValue.values||[])r=r.add(new oi(n.indexId,e.key,this.dn(a),i))}else r=r.add(new oi(n.indexId,e.key,$l,i));return r}bn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,h,f,g){const v=u.getIterator(),P=c.getIterator();let N=Wi(v),D=Wi(P);for(;N||D;){let S=!1,E=!1;if(N&&D){const w=h(N,D);w<0?E=!0:w>0&&(S=!0)}else N!=null?E=!0:S=!0;S?(f(D),D=Wi(P)):E?(g(N),N=Wi(v)):(N=Wi(v),D=Wi(P))}}(i,s,ar,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),O.waitFor(o)}yn(e){let n=1;return Qi(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ar(o,a)).filter((o,a,u)=>!a||ar(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ar(o,e),u=ar(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,$l,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,$l,[]];s.push(IDBKeyRange.bound(a,u))}return s}Cn(e,n){return ar(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(jv)}getMinOffset(e,n){return O.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||W())).next(jv)}}function Mv(t){return ze(t,"collectionParents")}function Hi(t){return ze(t,"indexEntries")}function ko(t){return ze(t,"indexConfiguration")}function Qi(t){return ze(t,"indexState")}function jv(t){H(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;lm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Ft(e.readTime,e.documentKey,n)}/**
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
 */const Fv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class St{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function cS(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(h,f,g)=>(a++,g.delete()));s.push(u.next(()=>{H(a===1)}));const c=[];for(const h of n.mutations){const f=p0(e,h.key.path,n.batchId);s.push(i.delete(f)),c.push(h.key)}return O.waitFor(s).next(()=>c)}function lc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw W();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(41943040,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);class Hc{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){H(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Hc(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ts(e),o=lr(e);return o.add({}).next(a=>{H(typeof a=="number");const u=new gm(a,n,r,i),c=function(v,P,N){const D=N.baseMutations.map(E=>sc(v.ct,E)),S=N.mutations.map(E=>sc(v.ct,E));return{userId:P,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:D,mutations:S}}(this.serializer,this.userId,u),h=[];let f=new de((g,v)=>ee(g.canonicalString(),v.canonicalString()));for(const g of i){const v=p0(this.userId,g.key.path,a);f=f.add(g.key.path.popLast()),h.push(o.put(c)),h.push(s.put(v,mD))}return f.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),O.waitFor(h).next(()=>u)})}lookupMutationBatch(e,n){return lr(e).get(n).next(r=>r?(H(r.userId===this.userId),ii(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?O.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return lr(e).J({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(H(a.batchId>=r),s=ii(this.serializer,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return lr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).U("userMutationsIndex",n).next(r=>r.map(i=>ii(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=pu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ts(e).J({range:i},(o,a,u)=>{const[c,h,f]=o,g=wn(h);if(c===this.userId&&n.path.isEqual(g))return lr(e).get(f).next(v=>{if(!v)throw W();H(v.userId===this.userId),s.push(ii(this.serializer,v))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new de(ee);const i=[];return n.forEach(s=>{const o=pu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=ts(e).J({range:a},(c,h,f)=>{const[g,v,P]=c,N=wn(v);g===this.userId&&s.path.isEqual(N)?r=r.add(P):f.done()});i.push(u)}),O.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=pu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new de(ee);return ts(e).J({range:o},(u,c,h)=>{const[f,g,v]=u,P=wn(g);f===this.userId&&r.isPrefixOf(P)?P.length===i&&(a=a.add(v)):h.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(lr(e).get(s).next(o=>{if(o===null)throw W();H(o.userId===this.userId),r.push(ii(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return cS(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ts(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=wn(s[1]);i.push(u)}else a.done()}).next(()=>{H(i.length===0)})})}containsKey(e,n){return hS(e,this.userId,n)}Nn(e){return dS(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function hS(t,e,n){const r=pu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ts(t).J({range:s,H:!0},(a,u,c)=>{const[h,f,g]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function lr(t){return ze(t,"mutations")}function ts(t){return ze(t,"documentMutations")}function dS(t){return ze(t,"mutationQueues")}/**
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
 */class ki{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ki(0)}static kn(){return new ki(-1)}}/**
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
 */class OV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new ki(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>Q.fromTimestamp(new ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ji(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ji(e).J((o,a)=>{const u=zo(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ji(e).J((r,i)=>{const s=zo(i);n(s)})}qn(e){return Uv(e).get("targetGlobalKey").next(n=>(H(n!==null),n))}Qn(e,n){return Uv(e).put("targetGlobalKey",n)}Kn(e,n){return Ji(e).put(oS(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Pi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ji(e).J({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const c=zo(a);Xa(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=_r(e);return n.forEach(o=>{const a=vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=_r(e);return O.forEach(n,s=>{const o=vt(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=_r(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=_r(e);let s=te();return i.J({range:r,H:!0},(o,a,u)=>{const c=wn(o[1]),h=new K(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=vt(n.path),i=IDBKeyRange.bound([r],[u0(r)],!1,!0);let s=0;return _r(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Ji(e).get(n).next(r=>r?zo(r):null)}}function Ji(t){return ze(t,"targets")}function Uv(t){return ze(t,"targetGlobal")}function _r(t){return ze(t,"targetDocuments")}/**
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
 */function Bv([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class LV{constructor(e){this.Un=e,this.buffer=new de(Bv),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qr(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Fi(n)}await this.Hn(3e5)})}}class jV{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Wt.oe);const r=new LV(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Fv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fv):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Yi()<=re.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function FV(t,e){return new jV(t,e)}/**
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
 */class UV{constructor(e,n){this.db=e,this.garbageCollector=FV(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return zl(e,r)}removeReference(e,n,r){return zl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return zl(e,n)}nr(e,n){return function(i,s){let o=!1;return dS(i).Y(a=>hS(i,a,s).next(u=>(u&&(o=!0),O.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),_r(e).delete(function(f){return[0,vt(f.path)]}(o))))});i.push(u)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return zl(e,n)}tr(e,n){const r=_r(e);let i,s=Wt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(s!==Wt.oe&&n(new K(wn(i)),s),s=c,i=u):s=Wt.oe}).next(()=>{s!==Wt.oe&&n(new K(wn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function zl(t,e){return _r(t).put(function(r,i){return{targetId:0,path:vt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class fS{constructor(){this.changes=new Kr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Xr(e).put(r)}removeEntry(e,n,r){return Xr(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],oc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Ve.newInvalidDocument(n);return Xr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(No(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Ve.newInvalidDocument(n)};return Xr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(No(n))},(i,s)=>{r={document:this.ir(n,s),size:lc(s)}}).next(()=>r)}getEntries(e,n){let r=Ot();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Ot(),i=new Se(K.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,lc(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return O.resolve();let i=new de(qv);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(No(i.first()),No(i.last())),o=i.getIterator();let a=o.getNext();return Xr(e).J({index:"documentKeyIndex",range:s},(u,c,h)=>{const f=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&qv(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(No(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),oc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Xr(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=Ot();for(const f of c){const g=this.ir(K.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);g.isFoundDocument()&&(el(n,g)||i.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=Ot();const o=zv(n,r),a=zv(n,Ft.max());return Xr(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const f=this.ir(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new $V(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return $v(e).get("remoteDocumentGlobalKey").next(n=>(H(!!n),n))}rr(e,n){return $v(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=AV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Ve.newInvalidDocument(e)}}function pS(t){return new BV(t)}class $V extends fS{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Kr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new de((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=Rv(this.cr.serializer,o);i=i.add(s.path.popLast());const c=lc(u);r+=c-a.size,n.push(this.cr.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=Rv(this.cr.serializer,o.convertToNoDocument(Q.min()));n.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function $v(t){return ze(t,"remoteDocumentGlobal")}function Xr(t){return ze(t,"remoteDocumentsV14")}function No(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function zv(t,e){const n=e.documentKey.path.toArray();return[t,oc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function qv(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class zV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class mS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&sa(r.mutation,i,Ht.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=In();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Bo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=In();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ot();const o=ia(),a=function(){return ia()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Gr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),sa(h.mutation,c,h.mutation.getFieldMask(),ke.now())):o.set(c.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new zV(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ia();let i=new Se((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Ht.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||te()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=O0();h.forEach(g=>{if(!s.has(g)){const v=$0(n.get(g),r.get(g));v!==null&&f.set(g,v),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):k0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(In());let a=-1,u=s;return o.next(c=>O.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?O.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(h=>({batchId:a,changes:V0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Bo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Bo();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,u=>{const c=function(f,g){return new no(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ve.newInvalidDocument(h)))});let a=Bo();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&sa(h.mutation,c,Ht.empty(),ke.now()),el(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class qV{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Et(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:aS(i.bundledQuery),readTime:Et(i.readTime)}}(n)),O.resolve()}}/**
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
 */class KV{constructor(){this.overlays=new Se(K.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=In();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=In(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=In(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=In(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ym(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class GV{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class Tm{constructor(){this.Tr=new de(qe.Er),this.dr=new de(qe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new qe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new le([])),r=new qe(n,e),i=new qe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new le([])),r=new qe(n,e),i=new qe(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new qe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ee(e.wr,n.wr)}static Ar(e,n){return ee(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class WV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new de(qe.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),i=new qe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new de(ee);return n.forEach(i=>{const s=new qe(i,0),o=new qe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new qe(new K(s),0);let a=new de(ee);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),O.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){H(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,i=>{const s=new qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new qe(n,0),i=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HV{constructor(e){this.Mr=e,this.docs=function(){return new Se(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=Ot();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ve.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ot();const o=n.path,a=new K(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lm(c0(h),r)<=0||(i.has(h.key)||el(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QV(this)}getSize(e){return O.resolve(this.size)}}class QV extends fS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class JV{constructor(e){this.persistence=e,this.Nr=new Kr(n=>Pi(n),Xa),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Tm,this.targetCount=0,this.kr=ki.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ki(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
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
 */class gS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Wt(0),this.Kr=!1,this.Kr=!0,this.$r=new GV,this.referenceDelegate=e(this),this.Ur=new JV(this),this.indexManager=new DV,this.remoteDocumentCache=function(i){return new HV(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new sS(n),this.Gr=new qV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new WV(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new YV(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YV extends d0{constructor(e){super(),this.currentSequenceNumber=e}}class Qc{constructor(e){this.persistence=e,this.Jr=new Tm,this.Yr=null}static Zr(e){return new Qc(e)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class XV{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Uc("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",iv,{unique:!0}),u.createObjectStore("documentMutations")}(e),Kv(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Kv(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(h=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",iv,{unique:!0});const f=c.store("mutations"),g=h.map(v=>f.put(v));return O.waitFor(g)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:PD});c.createIndex("collectionPathOverlayIndex",RD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",xD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:gD});c.createIndex("documentKeyIndex",_D),c.createIndex("collectionGroupIndex",yD)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:TD}).createIndex("sequenceNumberIndex",SD,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:AD}).createIndex("documentKeyIndex",CD,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=lc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>O.forEach(a,u=>{H(u.userId===s.userId);const c=ii(this.serializer,u);return cS(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const u=new le(o),c=function(f){return[0,vt(f)]}(u);s.push(n.get(c).next(h=>h?O.resolve():(f=>n.put({targetId:0,path:vt(f),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>O.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:ID});const r=n.store("collectionParents"),i=new Im,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:vt(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new le(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const h=wn(a);return s(h.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=zo(i),o=oS(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),u=function(f){return f.document?new K(le.fromString(f.document.name).popFirst(5)):f.noDocument?K.fromSegments(f.noDocument.path):f.unknownDocument?K.fromSegments(f.unknownDocument.path):W()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>O.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=pS(this.serializer),s=new gS(Qc.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:te();ii(this.serializer,u).keys().forEach(f=>h=h.add(f)),a.set(u.userId,h)}),O.forEach(a,(u,c)=>{const h=new gt(c),f=Wc.lt(this.serializer,h),g=s.getIndexManager(h),v=Hc.lt(h,this.serializer,g,s.referenceDelegate);return new mS(i,v,f,g).recalculateAndSaveOverlaysForDocumentKeys(new xf(n,Wt.oe),u).next()})})}}function Kv(t){t.createObjectStore("targetDocuments",{keyPath:ED}).createIndex("documentTargetsIndex",wD,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",vD,{unique:!0}),t.createObjectStore("targetGlobal")}const cd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Sm{constructor(e,n,r,i,s,o,a,u,c,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!Sm.D())throw new z(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new UV(this,i),this.Ai=n+"main",this.serializer=new sS(u),this.Ri=new br(this.Ai,this.hi,new XV(this.serializer)),this.$r=new PV,this.Ur=new OV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=pS(this.serializer),this.Gr=new CV,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&_t("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(M.FAILED_PRECONDITION,cd);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Wt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ql(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(qr(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return bo(e).get("owner").next(n=>O.resolve(this.vi(n)))}Ci(e){return ql(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ze(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?O.resolve(!0):bo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new z(M.FAILED_PRECONDITION,cd);return!1}}return!(!this.networkEnabled||!this.inForeground)||ql(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new xf(e,Wt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>ql(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return Hc.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new VV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Wc.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===17?bD:u===16?ND:u===15?cm:u===14?_0:u===13?g0:u===12?kD:u===11?m0:void W()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new xf(a,this.Qr?this.Qr.next():Wt.oe),n==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw _t(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new z(M.FAILED_PRECONDITION,h0);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return bo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new z(M.FAILED_PRECONDITION,cd)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return bo(e).put("owner",n)}static D(){return br.D()}bi(e){const n=bo(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):O.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(_t(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;pT()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return _t("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){_t("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function bo(t){return ze(t,"owner")}function ql(t){return ze(t,"clientMetadata")}function ZV(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Am{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Am(e,n.fromCache,r,i)}}/**
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
 */class eO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _S{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return pT()?8:f0($e())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new eO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Yi()<=re.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Yi()<=re.DEBUG&&U("QueryEngine","Query:",Xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Yi()<=re.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(n))):O.resolve())}Yi(e,n){if(_v(n))return O.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rc(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,rc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return _v(n)||i.isEqual(Q.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?O.resolve(null):(Yi()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xi(n)),this.rs(e,o,n,lD(i,-1)).next(a=>a))})}ts(e,n){let r=new de(b0(e));return n.forEach((i,s)=>{el(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Yi()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Xi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ft.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class tO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Se(ee),this._s=new Kr(s=>Pi(s),Xa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function yS(t,e,n,r){return new tO(t,e,n,r)}async function vS(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function nO(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,g=f.keys();let v=O.resolve();return g.forEach(P=>{v=v.next(()=>h.getEntry(u,P)).next(N=>{const D=c.docVersions.get(P);H(D!==null),N.version.compareTo(D)<0&&(f.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),h.addEntry(N)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ES(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function rO(t,e){const n=X(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const g=i.get(f);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(Fe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(f,v),function(N,D,S){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,v,h)&&a.push(n.Ur.updateTargetData(s,v))});let u=Ot(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(iO(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(Q.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function iO(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ot();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function sO(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oO(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zf(t,e,n){const r=X(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Gv(t,e,n){const r=X(t);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=X(u),g=f._s.get(h);return g!==void 0?O.resolve(f.os.get(g)):f.Ur.getTargetData(c,h)}(r,o,Jt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:te())).next(a=>(aO(r,WD(e),a),{documents:a,Ts:s})))}function aO(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Wv{constructor(){this.activeTargetIds=ZD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wS{constructor(){this.so=new Wv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lO{_o(e){}shutdown(){}}/**
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
 */class Hv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kl=null;function hd(){return Kl===null?Kl=function(){return 268435456+Math.round(2147483648*Math.random())}():Kl++,"0x"+Kl.toString(16)}/**
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
 */const uO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ot="WebChannelConnection";class hO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=hd(),u=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(U("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ra("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+eo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=uO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=hd();return new Promise((o,a)=>{const u=new r0;u.setWithCredentials(!0),u.listenOnce(i0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case du.NO_ERROR:const h=u.getResponseJson();U(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case du.TIMEOUT:U(ot,`RPC '${e}' ${s} timed out`),a(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case du.HTTP_ERROR:const f=u.getStatus();if(U(ot,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const P=function(D){const S=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(v.status);a(new z(P,v.message))}else a(new z(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new z(M.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U(ot,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=hd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=a0(),a=o0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");U(ot,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let g=!1,v=!1;const P=new cO({Io:D=>{v?U(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(U(ot,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),U(ot,`RPC '${e}' stream ${i} sending:`,D),f.send(D))},To:()=>f.close()}),N=(D,S,E)=>{D.listen(S,w=>{try{E(w)}catch(b){setTimeout(()=>{throw b},0)}})};return N(f,Uo.EventType.OPEN,()=>{v||(U(ot,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),N(f,Uo.EventType.CLOSE,()=>{v||(v=!0,U(ot,`RPC '${e}' stream ${i} transport closed`),P.So())}),N(f,Uo.EventType.ERROR,D=>{v||(v=!0,Ra(ot,`RPC '${e}' stream ${i} transport errored:`,D),P.So(new z(M.UNAVAILABLE,"The operation could not be completed")))}),N(f,Uo.EventType.MESSAGE,D=>{var S;if(!v){const E=D.data[0];H(!!E);const w=E,b=w.error||((S=w[0])===null||S===void 0?void 0:S.error);if(b){U(ot,`RPC '${e}' stream ${i} received error:`,b);const F=b.status;let j=function(A){const C=Me[A];if(C!==void 0)return K0(C)}(F),T=b.message;j===void 0&&(j=M.INTERNAL,T="Unknown error status: "+F+" with message "+b.message),v=!0,P.So(new z(j,T)),f.close()}else U(ot,`RPC '${e}' stream ${i} received:`,E),P.bo(E)}}),N(a,s0.STAT_EVENT,D=>{D.stat===Pf.PROXY?U(ot,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Pf.NOPROXY&&U(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}/**
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
 */function dO(){return typeof window<"u"?window:null}function vu(){return typeof document<"u"?document:null}/**
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
 */function Jc(t){return new mV(t,!0)}/**
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
 */class IS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class TS{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new IS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(_t(n.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fO extends TS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=yV(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Et(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jf(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=tc(u)?{documents:Z0(s,u)}:{query:eS(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=H0(s,o.resumeToken);const c=Lf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=zs(s,o.snapshotVersion.toTimestamp());const c=Lf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=EV(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jf(this.serializer),n.removeTarget=e,this.a_(n)}}class pO extends TS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return H(!!e.streamToken),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=vV(e.writeResults,e.commitTime),r=Et(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=jf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sc(this.serializer,r))};this.a_(n)}}/**
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
 */class mO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Mf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Mf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(_t(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _O{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ui(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=X(u);c.L_.add(4),await nl(c),c.q_.set("Unknown"),c.L_.delete(4),await Yc(c)}(this))})}),this.q_=new gO(r,i)}}async function Yc(t){if(Ui(t))for(const e of t.B_)await e(!0)}async function nl(t){for(const e of t.B_)await e(!1)}function SS(t,e){const n=X(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),xm(n)?Rm(n):io(n).r_()&&Pm(n,e))}function Cm(t,e){const n=X(t),r=io(n);n.N_.delete(e),r.r_()&&AS(n,e),n.N_.size===0&&(r.r_()?r.o_():Ui(n)&&n.q_.set("Unknown"))}function Pm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}io(t).A_(e)}function AS(t,e){t.Q_.xe(e),io(t).R_(e)}function Rm(t){t.Q_=new hV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),io(t).start(),t.q_.v_()}function xm(t){return Ui(t)&&!io(t).n_()&&t.N_.size>0}function Ui(t){return X(t).L_.size===0}function CS(t){t.Q_=void 0}async function yO(t){t.q_.set("Online")}async function vO(t){t.N_.forEach((e,n)=>{Pm(t,e)})}async function EO(t,e){CS(t),xm(t)?(t.q_.M_(e),Rm(t)):t.q_.set("Unknown")}async function wO(t,e,n){if(t.q_.set("Online"),e instanceof W0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uc(t,r)}else if(e instanceof yu?t.Q_.Ke(e):e instanceof G0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await ES(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Fe.EMPTY_BYTE_STRING,h.snapshotVersion)),AS(s,u);const f=new Bn(h.target,u,c,h.sequenceNumber);Pm(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await uc(t,r)}}async function uc(t,e,n){if(!qr(e))throw e;t.L_.add(1),await nl(t),t.q_.set("Offline"),n||(n=()=>ES(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Yc(t)})}function PS(t,e){return e().catch(n=>uc(t,n,e))}async function rl(t){const e=X(t),n=jr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;IO(e);)try{const i=await sO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,TO(e,i)}catch(i){await uc(e,i)}RS(e)&&xS(e)}function IO(t){return Ui(t)&&t.O_.length<10}function TO(t,e){t.O_.push(e);const n=jr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function RS(t){return Ui(t)&&!jr(t).n_()&&t.O_.length>0}function xS(t){jr(t).start()}async function SO(t){jr(t).p_()}async function AO(t){const e=jr(t);for(const n of t.O_)e.m_(n.mutations)}async function CO(t,e,n){const r=t.O_.shift(),i=_m.from(r,e,n);await PS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await rl(t)}async function PO(t,e){e&&jr(t).V_&&await async function(r,i){if(function(o){return lV(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();jr(r).s_(),await PS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await rl(r)}}(t,e),RS(t)&&xS(t)}async function Qv(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Ui(n);n.L_.add(3),await nl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Yc(n)}async function RO(t,e){const n=X(t);e?(n.L_.delete(2),await Yc(n)):e||(n.L_.add(2),await nl(n),n.q_.set("Unknown"))}function io(t){return t.K_||(t.K_=function(n,r,i){const s=X(n);return s.w_(),new fO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:yO.bind(null,t),Ro:vO.bind(null,t),mo:EO.bind(null,t),d_:wO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),xm(t)?Rm(t):t.q_.set("Unknown")):(await t.K_.stop(),CS(t))})),t.K_}function jr(t){return t.U_||(t.U_=function(n,r,i){const s=X(n);return s.w_(),new pO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:SO.bind(null,t),mo:PO.bind(null,t),f_:AO.bind(null,t),g_:CO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await rl(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class km{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new km(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nm(t,e){if(_t("AsyncQueue",`${e}: ${t}`),qr(t))return new z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Bo(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Jv{constructor(){this.W_=new Se(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):W():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qs{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qs(e,n,Ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class xO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kO{constructor(){this.queries=Yv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Yv(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new z(M.ABORTED,"Firestore shutting down"))}}function Yv(){return new Kr(t=>N0(t),zc)}async function kS(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new xO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Nm(o,`Initialization of query '${Xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&bm(n)}async function NS(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NO(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&bm(n)}function bO(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function bm(t){t.Y_.forEach(e=>{e.next()})}var qf,Xv;(Xv=qf||(qf={})).ea="default",Xv.Cache="cache";class bS{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qf.Cache}}/**
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
 */class DS{constructor(e){this.key=e}}class VS{constructor(e){this.key=e}}class DO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=b0(e),this.Ra=new Ss(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Jv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const g=i.get(h),v=el(this.query,f)?f:null,P=!!g&&this.mutatedKeys.has(g.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;g&&v?g.data.isEqual(v.data)?P!==N&&(r.track({type:3,doc:v}),D=!0):this.ga(g,v)||(r.track({type:2,doc:v}),D=!0,(u&&this.Aa(v,u)>0||c&&this.Aa(v,c)<0)&&(a=!0)):!g&&v?(r.track({type:0,doc:v}),D=!0):g&&!v&&(r.track({type:1,doc:g}),D=!0,(u||c)&&(a=!0)),D&&(v?(o=o.add(v),s=N?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(v,P){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return N(v)-N(P)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new qs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Jv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new VS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new DS(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return qs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class VO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OO{constructor(e){this.key=e,this.va=!1}}class LO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Kr(a=>N0(a),zc),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(K.comparator),this.Na=new Map,this.La=new Tm,this.Ba={},this.ka=new Map,this.qa=ki.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function MO(t,e,n=!0){const r=US(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await OS(r,e,n,!0),i}async function jO(t,e){const n=US(t);await OS(n,e,!0,!1)}async function OS(t,e,n,r){const i=await oO(t.localStore,Jt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await FO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&SS(t.remoteStore,i),a}async function FO(t,e,n,r,i){t.Ka=(f,g,v)=>async function(N,D,S,E){let w=D.view.ma(S);w.ns&&(w=await Gv(N.localStore,D.query,!1).then(({documents:T})=>D.view.ma(T,w)));const b=E&&E.targetChanges.get(D.targetId),F=E&&E.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(w,N.isPrimaryClient,b,F);return eE(N,D.targetId,j.wa),j.snapshot}(t,f,g,v);const s=await Gv(t.localStore,e,!0),o=new DO(e,s.Ts),a=o.ma(s.documents),u=tl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);eE(t,n,c.wa);const h=new VO(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function UO(t,e,n){const r=X(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!zc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Cm(r.remoteStore,i.targetId),Kf(r,i.targetId)}).catch(Fi)):(Kf(r,i.targetId),await zf(r.localStore,i.targetId,!0))}async function BO(t,e){const n=X(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Cm(n.remoteStore,r.targetId))}async function $O(t,e,n){const r=BS(t);try{const i=await function(o,a){const u=X(o),c=ke.now(),h=a.reduce((v,P)=>v.add(P.key),te());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let P=Ot(),N=te();return u.cs.getEntries(v,h).next(D=>{P=D,P.forEach((S,E)=>{E.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,P)).next(D=>{f=D;const S=[];for(const E of a){const w=oV(E,f.get(E.key).overlayedDocument);w!=null&&S.push(new Gr(E.key,w,I0(w.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(v,c,S,a)}).next(D=>{g=D;const S=D.applyToLocalDocumentSet(f,N);return u.documentOverlayCache.saveOverlays(v,D.batchId,S)})}).then(()=>({batchId:g.batchId,changes:V0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Se(ee)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await il(r,i.changes),await rl(r.remoteStore)}catch(i){const s=Nm(i,"Failed to persist write");n.reject(s)}}async function LS(t,e){const n=X(t);try{const r=await rO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?H(o.va):i.removedDocuments.size>0&&(H(o.va),o.va=!1))}),await il(n,r,e)}catch(r){await Fi(r)}}function Zv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=X(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const g of f.j_)g.Z_(a)&&(c=!0)}),c&&bm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zO(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Se(K.comparator);o=o.insert(s,Ve.newNoDocument(s,Q.min()));const a=te().add(s),u=new Gc(Q.min(),new Map,new Se(ee),o,a);await LS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Dm(r)}else await zf(r.localStore,e,!1).then(()=>Kf(r,e,n)).catch(Fi)}async function qO(t,e){const n=X(t),r=e.batch.batchId;try{const i=await nO(n.localStore,e);jS(n,r,null),MS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await il(n,i)}catch(i){await Fi(i)}}async function KO(t,e,n){const r=X(t);try{const i=await function(o,a){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(H(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);jS(r,e,n),MS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await il(r,i)}catch(i){await Fi(i)}}function MS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function jS(t,e,n){const r=X(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Kf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||FS(t,r)})}function FS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Cm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Dm(t))}function eE(t,e,n){for(const r of n)r instanceof DS?(t.La.addReference(r.key,e),GO(t,r)):r instanceof VS?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||FS(t,r.key)):W()}function GO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),Dm(t))}function Dm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(le.fromString(e)),r=t.qa.next();t.Na.set(r,new OO(n)),t.Oa=t.Oa.insert(n,r),SS(t.remoteStore,new Bn(Jt(Za(n.path)),r,"TargetPurposeLimboResolution",Wt.oe))}}async function il(t,e,n){const r=X(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Am.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=X(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>O.forEach(c,g=>O.forEach(g.$i,v=>h.persistence.referenceDelegate.addReference(f,g.targetId,v)).next(()=>O.forEach(g.Ui,v=>h.persistence.referenceDelegate.removeReference(f,g.targetId,v)))))}catch(f){if(!qr(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const v=h.os.get(g),P=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(P);h.os=h.os.insert(g,N)}}}(r.localStore,s))}async function WO(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await vS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new z(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await il(n,r.hs)}}function HO(t,e){const n=X(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function US(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zO.bind(null,e),e.Ca.d_=NO.bind(null,e.eventManager),e.Ca.$a=bO.bind(null,e.eventManager),e}function BS(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KO.bind(null,e),e}class ja{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return yS(this.persistence,new _S,e.initialUser,this.serializer)}Ga(e){return new gS(Qc.Zr,this.serializer)}Wa(e){return new wS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ja.provider={build:()=>new ja};class QO extends ja{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await BS(this.Ja.syncEngine),await rl(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return yS(this.persistence,new _S,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new MV(r,e.asyncQueue,n)}Ha(e,n){const r=new dD(n,this.persistence);return new hD(e.asyncQueue,r)}Ga(e){const n=ZV(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new Sm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,dO(),vu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new wS}}class cc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WO.bind(null,this.syncEngine),await RO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kO}()}createDatastore(e){const n=Jc(e.databaseInfo.databaseId),r=function(s){return new hO(s)}(e.databaseInfo);return function(s,o,a,u){return new mO(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new _O(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Zv(this.syncEngine,n,0),function(){return Hv.D()?new Hv:new lO}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new LO(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await nl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cc.provider={build:()=>new cc};/**
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
 */class $S{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class JO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=l0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function dd(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YO(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qv(e.remoteStore,i)),t._onlineComponents=e}async function YO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await dd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ra("Error using user provided cache. Falling back to memory cache: "+n),await dd(t,new ja)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await dd(t,new ja);return t._offlineComponents}async function zS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await tE(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await tE(t,new cc))),t._onlineComponents}function XO(t){return zS(t).then(e=>e.syncEngine)}async function Gf(t){const e=await zS(t),n=e.eventManager;return n.onListen=MO.bind(null,e.syncEngine),n.onUnlisten=UO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BO.bind(null,e.syncEngine),n}function ZO(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new $S({next:g=>{h.Za(),o.enqueueAndForget(()=>NS(s,f));const v=g.docs.has(a);!v&&g.fromCache?c.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&u&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new bS(Za(a.path),h,{includeMetadataChanges:!0,_a:!0});return kS(s,f)}(await Gf(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function qS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const nE=new Map;/**
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
 */function KS(t,e,n){if(!n)throw new z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eL(t,e,n,r){if(e===!0&&r===!0)throw new z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rE(t){if(!K.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iE(t){if(K.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function gi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xc(t);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function tL(t,e){if(e<=0)throw new z(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class sE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eD;switch(r.type){case"firstParty":return new rD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nE.get(n);r&&(U("ComponentProvider","Removing Datastore"),nE.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Wr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wr(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Dr extends Wr{constructor(e,n,r){super(e,n,Za(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new K(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function Om(t,e,...n){if(t=Te(t),KS("collection","path",e),t instanceof Vm){const r=le.fromString(e,...n);return iE(r),new Dr(t,null,r)}{if(!(t instanceof wt||t instanceof Dr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return iE(r),new Dr(t.firestore,null,r)}}function Ut(t,e,...n){if(t=Te(t),arguments.length===1&&(e=l0.newId()),KS("doc","path",e),t instanceof Vm){const r=le.fromString(e,...n);return rE(r),new wt(t,null,new K(r))}{if(!(t instanceof wt||t instanceof Dr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return rE(r),new wt(t.firestore,t instanceof Dr?t.converter:null,new K(r))}}/**
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
 */class oE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new IS(this,"async_queue_retry"),this.Vu=()=>{const r=vu();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!qr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw _t("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=km.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function aE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Fa extends Vm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new oE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new oE(e),this._firestoreClient=void 0,await e}}}function nL(t,e,n){n||(n="(default)");const r=Mi(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Aa(s,e))return i;throw new z(M.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new z(M.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function Lm(t){if(t._terminated)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rL(t),t._firestoreClient}function rL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new VD(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,qS(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new JO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ks(Fe.fromBase64String(e))}catch(n){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ks(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Mm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jm{constructor(e){this._methodName=e}}/**
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
 */class Fm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */class Um{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const iL=/^__.*__$/;class sL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ro(e,this.data,n,this.fieldTransforms)}}function GS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class Bm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Bm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return hc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(GS(this.Cu)&&iL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class oL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Jc(e)}Qu(e,n,r,i=!1){return new Bm({Cu:e,methodName:n,qu:r,path:Pe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function WS(t){const e=t._freezeSettings(),n=Jc(t._databaseId);return new oL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aL(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);JS("Data must be an object, but it was:",o,r);const a=HS(r,o);let u,c;if(s.merge)u=new Ht(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const g=uL(e,f,n);if(!o.contains(g))throw new z(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);hL(h,g)||h.push(g)}u=new Ht(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new sL(new Ct(a),u,c)}class $m extends jm{_toFieldTransform(e){return new B0(e.path,new Us)}isEqual(e){return e instanceof $m}}function lL(t,e,n,r=!1){return zm(n,t.Qu(r?4:3,e))}function zm(t,e){if(QS(t=Te(t)))return JS("Unsupported field value:",e,t),HS(t,e);if(t instanceof jm)return function(r,i){if(!GS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=zm(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:zs(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zs(i.serializer,s)}}if(r instanceof Fm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ks)return{bytesValue:H0(i.serializer,r._byteString)};if(r instanceof wt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Em(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Um)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return pm(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Xc(r)}`)}(t,e)}function HS(t,e){const n={};return y0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):to(t,(r,i)=>{const s=zm(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function QS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Fm||t instanceof Ks||t instanceof wt||t instanceof jm||t instanceof Um)}function JS(t,e,n){if(!QS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function uL(t,e,n){if((e=Te(e))instanceof Mm)return e._internalPath;if(typeof e=="string")return YS(t,e);throw hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const cL=new RegExp("[~\\*/\\[\\]]");function YS(t,e,n){if(e.search(cL)>=0)throw hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mm(...e.split("."))._internalPath}catch{throw hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(M.INVALID_ARGUMENT,a+t+u)}function hL(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class XS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dL extends XS{data(){return super.data()}}function Zc(t,e){return typeof e=="string"?YS(t,e):e instanceof Mm?e._internalPath:e._delegate._internalPath}/**
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
 */function fL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qm{}class Km extends qm{}function ZS(t,e,...n){let r=[];e instanceof qm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Gm).length,a=s.filter(u=>u instanceof eh).length;if(o>1||o>0&&a>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class eh extends Km{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new eh(e,n,r)}_apply(e){const n=this._parse(e);return nA(e._query,n),new Wr(e.firestore,e.converter,Of(e._query,n))}_parse(e){const n=WS(e.firestore);return function(s,o,a,u,c,h,f){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){uE(f,h);const v=[];for(const P of f)v.push(lE(u,s,P));g={arrayValue:{values:v}}}else g=lE(u,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||uE(f,h),g=lL(a,o,f,h==="in"||h==="not-in");return ie.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function pL(t,e,n){const r=e,i=Zc("where",t);return eh._create(i,r,n)}class Gm extends qm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ce.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)nA(o,u),o=Of(o,u)}(e._query,n),new Wr(e.firestore,e.converter,Of(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wm extends Km{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new La(s,o)}(e._query,this._field,this._direction);return new Wr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new no(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function eA(t,e="asc"){const n=e,r=Zc("orderBy",t);return Wm._create(r,n)}class Hm extends Km{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Hm(e,n,r)}_apply(e){return new Wr(e.firestore,e.converter,rc(e._query,this._limit,this._limitType))}}function tA(t){return tL("limit",t),Hm._create("limit",t,"F")}function lE(t,e,n){if(typeof(n=Te(n))=="string"){if(n==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!k0(e)&&n.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!K.isDocumentKey(r))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Va(t,new K(r))}if(n instanceof wt)return Va(t,n._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xc(n)}.`)}function uE(t,e){if(!Array.isArray(t)||t.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mL{convertValue(e,n="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return to(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>we(o.doubleValue));return new Um(s)}convertGeoPoint(e){return new Fm(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ba(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);H(iS(r));const i=new Ai(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||_t(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function gL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rA extends XS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Eu extends rA{data(e={}){return super.data(e)}}class _L{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Eu(this._firestore,this._userDataWriter,r.key,r,new qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Eu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Eu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:yL(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function yL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
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
 */function th(t){t=gi(t,wt);const e=gi(t.firestore,Fa);return ZO(Lm(e),t._key).then(n=>sA(e,t,n))}class iA extends mL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function Wf(t,e,n){t=gi(t,wt);const r=gi(t.firestore,Fa),i=gL(t.converter,e,n);return vL(r,[aL(WS(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Lt.none())])}function Rn(t,...e){var n,r,i;t=Te(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||aE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(aE(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let u,c,h;if(t instanceof wt)c=gi(t.firestore,Fa),h=Za(t._key.path),u={next:f=>{e[o]&&e[o](sA(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=gi(t,Wr);c=gi(f.firestore,Fa),h=f._query;const g=new iA(c);u={next:v=>{e[o]&&e[o](new _L(c,g,f,v))},error:e[o+1],complete:e[o+2]},fL(t._query)}return function(g,v,P,N){const D=new $S(N),S=new bS(v,D,P);return g.asyncQueue.enqueueAndForget(async()=>kS(await Gf(g),S)),()=>{D.Za(),g.asyncQueue.enqueueAndForget(async()=>NS(await Gf(g),S))}}(Lm(c),h,a,u)}function vL(t,e){return function(r,i){const s=new Kn;return r.asyncQueue.enqueueAndForget(async()=>$O(await XO(r),i,s)),s.promise}(Lm(t),e)}function sA(t,e,n){const r=n.docs.get(e._key),i=new iA(t);return new rA(t,i,e._key,r,new qo(n.hasPendingWrites,n.fromCache),e.converter)}class EL{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=oA(),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function wL(t){return new EL(t)}class IL{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=cc.provider,this._offlineComponentProvider={build:n=>new QO(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function oA(t){return new IL(void 0)}function Hf(){return new $m("serverTimestamp")}(function(e,n=!0){(function(i){eo=i})(Xs),fn(new Zt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Fa(new tD(r.getProvider("auth-internal")),new sD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Nt(tv,"4.7.3",e),Nt(tv,"4.7.3","esm2017")})();var TL="firebase",SL="10.14.1";/**
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
 */Nt(TL,SL,"app");/**
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
 */const AL="type.googleapis.com/google.protobuf.Int64Value",CL="type.googleapis.com/google.protobuf.UInt64Value";function aA(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Qf(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Qf(e));if(typeof t=="function"||typeof t=="object")return aA(t,e=>Qf(e));throw new Error("Data cannot be encoded in JSON: "+t)}function dc(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case AL:case CL:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>dc(e)):typeof t=="function"||typeof t=="object"?aA(t,e=>dc(e)):t}/**
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
 */const Qm="functions";/**
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
 */const cE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class As extends mn{constructor(e,n,r){super(`${Qm}/${e}`,n||""),this.details=r}}function PL(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function RL(t,e){let n=PL(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!cE[o])return new As("internal","internal");n=cE[o],r=o}const a=s.message;typeof a=="string"&&(r=a),i=s.details,i!==void 0&&(i=dc(i))}}catch{}return n==="ok"?null:new As(n,r,i)}/**
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
 */class xL{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const Jf="us-central1";function kL(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new As("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class NL{constructor(e,n,r,i,s=Jf,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new xL(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=Jf}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function bL(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function DL(t,e,n){return r=>OL(t,e,r,{})}async function VL(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function OL(t,e,n,r){const i=t._url(e);return LL(t,i,n,r)}async function LL(t,e,n,r){n=Qf(n);const i={data:n},s={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,u=kL(a),c=await Promise.race([VL(e,i,s,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!c)throw new As("cancelled","Firebase Functions instance was deleted.");const h=RL(c.status,c.json);if(h)throw h;if(!c.json)throw new As("internal","Response is not valid JSON object.");let f=c.json.data;if(typeof f>"u"&&(f=c.json.result),typeof f>"u")throw new As("internal","Response is missing data field.");return{data:dc(f)}}const hE="@firebase/functions",dE="0.11.8";/**
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
 */const ML="auth-internal",jL="app-check-internal",FL="messaging-internal";function UL(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(ML),a=r.getProvider(FL),u=r.getProvider(jL);return new NL(s,o,a,u,i,t)};fn(new Zt(Qm,n,"PUBLIC").setMultipleInstances(!0)),Nt(hE,dE,e),Nt(hE,dE,"esm2017")}/**
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
 */function BL(t=Yp(),e=Jf){const r=Mi(Te(t),Qm).getImmediate({identifier:e}),i=gk("functions");return i&&$L(r,...i),r}function $L(t,e,n){bL(Te(t),e,n)}function Ye(t,e,n){return DL(Te(t),e)}UL(fetch.bind(self));const zL={apiKey:"AIzaSyBQDetC-J1AfOD20h6cYLKHWACSxFSsWJI",authDomain:"ton-paris.firebaseapp.com",projectId:"ton-paris",storageBucket:"ton-paris.firebasestorage.app",messagingSenderId:"669449450778",appId:"1:669449450778:web:732d76c1d2a5c5b4e228a3"},Ua=yT(zL),Do=Y1(Ua),Xe=BL(Ua,"europe-west9"),ct=nL(Ua,{localCache:wL({tabManager:oA()})}),fE="BMbLRXdRv5SHMSa9gLR1ZvtGS4-9McmV-Qz-S2V6AO-DSFATHsg4EYLvOmwusUehxpeYrHVp5HPtkpRJUY5zEN0",pt="ton-paris",ht={config:t=>`tenants/${pt}/config/${t}`,admin:t=>`tenants/${pt}/admins/${t}`,utilisateur:t=>`tenants/${pt}/users/${t}`,preferences:t=>`tenants/${pt}/users/${t}/prefs/principal`,jetons:t=>`tenants/${pt}/users/${t}/pushTokens`,matchs:()=>`tenants/${pt}/matches`,diffusions:()=>`tenants/${pt}/tvBroadcasts`,classements:()=>`tenants/${pt}/standings`,actus:()=>`tenants/${pt}/news`,mercato:t=>`tenants/${pt}/mercato/${t}`,effectif:t=>`tenants/${pt}/effectifs/${t}`,compoProbable:t=>`tenants/${pt}/compoProbable/${t}`,compoOfficielle:t=>`tenants/${pt}/compoOfficielle/${t}`,scoresDirect:()=>`tenants/${pt}/live/scores`,journaux:()=>`tenants/${pt}/scrapeLogs`},lA=k.createContext(null),qL={"auth/invalid-email":"Cette adresse e-mail n'est pas valide.","auth/invalid-credential":"Adresse ou mot de passe incorrect.","auth/wrong-password":"Adresse ou mot de passe incorrect.","auth/user-not-found":"Aucun compte ne correspond à cette adresse.","auth/email-already-in-use":"Un compte existe déjà avec cette adresse.","auth/weak-password":"Le mot de passe doit faire au moins 6 caractères.","auth/too-many-requests":"Trop de tentatives. Réessaie dans quelques minutes.","auth/network-request-failed":"Connexion impossible. Vérifie ton réseau."};function KL(t){return qL[t]||"Quelque chose s'est mal passé. Réessaie."}function GL({children:t}){const[e,n]=k.useState(null),[r,i]=k.useState(!0);k.useEffect(()=>(Mb(Do,WT).catch(()=>{}),Ub(Do,u=>{n(u),i(!1)})),[]);const s=async(u,c)=>{const{user:h}=await Vb(Do,u.trim(),c);return h},o=async(u,c,h)=>{const{user:f}=await Db(Do,u.trim(),c);await Lb(f,{displayName:h.trim()});const g=Ut(ct,ht.utilisateur(f.uid));await Wf(g,{prenom:h.trim(),email:u.trim(),creeLe:Hf()});const v=Ut(ct,ht.admin(f.uid));return(await th(v)).exists()||await Wf(v,{prenom:h.trim(),creeLe:Hf()},{merge:!0}),f},a=()=>Bb(Do);return m.jsx(lA.Provider,{value:{utilisateur:e,chargement:r,connexion:s,inscription:o,deconnexion:a},children:t})}function sl(){const t=k.useContext(lA);if(!t)throw new Error("useAuth doit être utilisé dans FournisseurAuth");return t}const uA=k.createContext(null),fd={clubFavori:null,nationFavorite:null,clubsSuivis:[],notifications:{matinDuMatch:!0,uneHeureAvant:!0,coupDEnvoi:!0,actuImportante:!0,touteActu:!1},abonnementsTv:[],onboardingTermine:!1},ci=2;function WL({children:t}){const{utilisateur:e}=sl(),[n,r]=k.useState(null),[i,s]=k.useState(!0);k.useEffect(()=>{if(!e){r(null),s(!1);return}s(!0);const a=Ut(ct,ht.preferences(e.uid));return Rn(a,u=>{r(u.exists()?{...fd,...u.data()}:fd),s(!1)},()=>{r(fd),s(!1)})},[e]);const o=k.useCallback(async a=>{if(!e)return;const u=Ut(ct,ht.preferences(e.uid));await Wf(u,{...a,majLe:Hf()},{merge:!0})},[e]);return m.jsx(uA.Provider,{value:{preferences:n,chargement:i,enregistrer:o},children:t})}function so(){const t=k.useContext(uA);if(!t)throw new Error("usePreferences doit être utilisé dans FournisseurPreferences");return t}const cA=k.createContext(null),HL=3200;function QL({children:t}){const[e,n]=k.useState([]),r=k.useRef(0),i=k.useCallback(o=>{n(a=>a.filter(u=>u.id!==o))},[]),s=k.useCallback((o,{type:a="succes"}={})=>{const u=++r.current;n(c=>[...c,{id:u,message:o,type:a}]),setTimeout(()=>i(u),HL)},[i]);return m.jsx(cA.Provider,{value:{toasts:e,notifier:s,retirer:i},children:t})}function hA(){const t=k.useContext(cA);if(!t)throw new Error("useToasts doit être utilisé dans FournisseurToasts");return t}function dA({nombre:t=60}={}){const[e,n]=k.useState([]),[r,i]=k.useState(!0);return k.useEffect(()=>{const s=ZS(Om(ct,ht.actus()),eA("publieLe","desc"),tA(t));return Rn(s,o=>{n(o.docs.map(a=>{var c,h;const u=a.data();return{id:a.id,...u,publieLeISO:((h=(c=u.publieLe)==null?void 0:c.toDate)==null?void 0:h.call(c).toISOString())||null}})),i(!1)},()=>i(!1))},[t]),{actus:e,chargement:r}}const pd="ton-paris:digest-derniere-visite",pE="ton-paris:digest-vu-le";function mE(t){try{return localStorage.getItem(t)}catch{return null}}function md(t,e){try{localStorage.setItem(t,e)}catch{}}function JL(t){const[e,n]=k.useState(!1),[r,i]=k.useState(null);k.useEffect(()=>{const a=mE(pd);if(!a){const u=new Date(Date.now()-864e5).toISOString();md(pd,u),i(new Date(u));return}i(new Date(a))},[]);const s=k.useMemo(()=>r?t.filter(a=>{const u=a.publieLeISO?new Date(a.publieLeISO):null;return u&&u>r}):[],[t,r]);return k.useEffect(()=>{if(r===null||s.length===0)return;const a=new Date().toDateString();mE(pE)!==a&&n(!0)},[r,s]),{ouvert:e,actus:s,fermer:()=>{n(!1);const a=new Date;md(pd,a.toISOString()),md(pE,a.toDateString())}}}const YL=3500;function XL({pret:t=!0,onTermine:e}){const[n,r]=k.useState(!1);return k.useEffect(()=>{let i=!1;const s=setTimeout(()=>{i||(r(!0),setTimeout(()=>{i||e==null||e()},750))},YL);return()=>{i=!0,clearTimeout(s)}},[e]),m.jsxs("div",{className:`splash${n?" splash--sortie":""}`,role:"status","aria-live":"polite",children:[m.jsx("div",{className:"splash__bande splash__bande--rouge"}),m.jsx("div",{className:"splash__bande splash__bande--blanche"}),m.jsxs("div",{className:"splash__mots",children:[m.jsx("span",{className:"splash__ligne splash__ligne--1",children:m.jsx("i",{children:"Ici c'est"})}),m.jsx("span",{className:"splash__ligne splash__ligne--2",children:m.jsx("i",{children:"Ton"})}),m.jsx("span",{className:"splash__ligne splash__ligne--3",children:m.jsx("i",{children:"Paris"})})]}),m.jsx("div",{className:"splash__barre",children:m.jsx("span",{className:t?"splash__barre-jauge":"splash__barre-jauge splash__barre-jauge--boucle"})}),m.jsx("p",{className:"splash__etat",children:"Chargement du programme"})]})}const gE="tonparis.install.refuse";function ZL(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function eM(){return/iphone|ipad|ipod/i.test(window.navigator.userAgent)&&!window.MSStream}function tM(){const[t,e]=k.useState(null),[n,r]=k.useState(!1),[i,s]=k.useState(!1);k.useEffect(()=>{if(ZL()||sessionStorage.getItem(gE))return;if(eM()){s(!0),r(!0);return}const u=h=>{h.preventDefault(),e(h),r(!0)};window.addEventListener("beforeinstallprompt",u);const c=()=>r(!1);return window.addEventListener("appinstalled",c),()=>{window.removeEventListener("beforeinstallprompt",u),window.removeEventListener("appinstalled",c)}},[]);const o=async()=>{if(!t)return;t.prompt();const{outcome:u}=await t.userChoice;u==="accepted"&&r(!1),e(null)},a=()=>{sessionStorage.setItem(gE,"1"),r(!1)};return n?m.jsxs("aside",{className:"invite",role:"complementary",children:[m.jsxs("p",{className:"invite__texte",children:[m.jsx("strong",{children:"Ajoute l'app à ton écran d'accueil."})," ",i?"Appuie sur Partager, puis « Sur l'écran d'accueil ». C'est la condition pour recevoir les notifs de match.":"Notifs des matchs et ouverture instantanée."]}),!i&&m.jsx("button",{className:"invite__action",onClick:o,children:"Installer"}),m.jsx("button",{className:"invite__fermer",onClick:a,"aria-label":"Masquer l'invitation",children:"×"})]}):null}const nM=[{chemin:"/",libelle:"Accueil",icone:"⌂",exact:!0},{chemin:"/matchs",libelle:"Matchs",icone:"▦"},{chemin:"/compo",libelle:"Compo",icone:"⚽"},{chemin:"/classement",libelle:"Classement",icone:"≡"},{chemin:"/effectif",libelle:"Effectif",icone:"☰"},{chemin:"/mercato",libelle:"Mercato",icone:"⇄"},{chemin:"/reglages",libelle:"Réglages",icone:"⚙"}];function rM(){return m.jsx("nav",{className:"nav","aria-label":"Navigation principale",children:nM.map(({chemin:t,libelle:e,icone:n,exact:r})=>m.jsxs(sk,{to:t,end:r,className:({isActive:i})=>`nav__item${i?" nav__item--actif":""}`,children:[m.jsx("span",{className:"nav__icone","aria-hidden":"true",children:n}),m.jsx("span",{className:"nav__libelle",children:e})]},t))})}function iM({actu:t,onFermer:e}){if(k.useEffect(()=>{if(!t)return;const r=i=>{i.key==="Escape"&&(e==null||e())};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t,e]),!t)return null;const n=t.publieLeISO?new Date(t.publieLeISO).toLocaleDateString("fr-FR",{day:"numeric",month:"long"}):"";return m.jsx("div",{className:"article-modale",role:"dialog","aria-modal":"true",onClick:e,children:m.jsxs("div",{className:"article-modale__boite",onClick:r=>r.stopPropagation(),children:[m.jsx("button",{className:"article-modale__fermer",onClick:e,"aria-label":"Fermer",children:"×"}),t.image&&m.jsx("img",{className:"article-modale__image",src:t.image,alt:"",loading:"eager"}),m.jsxs("div",{className:"article-modale__contenu",children:[t.categorie&&m.jsx("span",{className:`article-modale__categorie${t.importante?" article-modale__categorie--chaude":""}`,children:t.categorie}),m.jsx("h2",{className:"article-modale__titre",children:t.titre}),m.jsx("p",{className:"article-modale__meta",children:[t.source,n].filter(Boolean).join(" · ")}),t.corps?t.corps.split(`

`).map((r,i)=>m.jsx("p",{className:"article-modale__resume",children:r},i)):t.resume&&m.jsx("p",{className:"article-modale__resume",children:t.resume}),t.lien&&m.jsxs("a",{className:"article-modale__lien",href:t.lien,target:"_blank",rel:"noopener noreferrer",children:["Lire sur ",t.source||"le site d'origine"," →"]})]})]})})}function sM(t){return t?t.split(/\n(?=##\s)/).map(n=>n.trim()).filter(Boolean).map(n=>{const r=n.match(/^##\s*(.+?)\s*\n([\s\S]*)$/);return r?{titre:r[1].trim(),texte:r[2].trim()}:{titre:null,texte:n}}):[]}function oM({ouvert:t,actus:e,onFermer:n,onOuvrirArticle:r}){const[i,s]=k.useState(null),[o,a]=k.useState(!1);if(k.useEffect(()=>{if(!t)return;const c=h=>{h.key==="Escape"&&(n==null||n())};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[t,n]),k.useEffect(()=>{if(!t||e.length===0){s(null);return}a(!0),s(null);const c=e.map(h=>({id:h.id,titre:h.titre,resume:h.resume||null}));Ye(Xe,"genererDigest")({articles:c}).then(h=>{var f;return s(((f=h.data)==null?void 0:f.resume)||null)}).catch(()=>s(null)).finally(()=>a(!1))},[t,e]),!t)return null;const u=sM(i);return m.jsx("div",{className:"digest",role:"dialog","aria-modal":"true",onClick:n,children:m.jsxs("div",{className:"digest__boite",onClick:c=>c.stopPropagation(),children:[m.jsx("span",{className:"digest__etiquette",children:"Depuis ta dernière visite"}),m.jsxs("h2",{className:"digest__titre",children:["Actus ",m.jsx("em",{children:"PSG"})]}),o&&m.jsx("p",{className:"digest__resume digest__resume--attente",children:"Résumé en préparation…"}),!o&&u.length===0&&m.jsx("p",{className:"digest__resume digest__resume--attente",children:"Résumé indisponible pour le moment, reviens plus tard."}),u.length>0&&m.jsx("div",{className:"digest__resume",children:u.map((c,h)=>m.jsxs("div",{className:"digest__section",children:[c.titre&&m.jsx("h3",{className:"digest__section-titre",children:c.titre}),m.jsx("p",{className:"digest__section-texte",children:c.texte})]},h))}),m.jsx("button",{className:"digest__fermer",onClick:n,children:"Vu, merci"})]})})}function aM(){const{toasts:t,retirer:e}=hA();return t.length===0?null:m.jsx("div",{className:"toasts",role:"status","aria-live":"polite",children:t.map(n=>m.jsxs("div",{className:`toast toast--${n.type}`,onClick:()=>e(n.id),children:[m.jsx("span",{className:"toast__puce","aria-hidden":"true",children:n.type==="erreur"?"!":"✓"}),m.jsx("span",{className:"toast__texte",children:n.message})]},n.id))})}function lM(){const{connexion:t,inscription:e}=sl(),[n,r]=k.useState("connexion"),[i,s]=k.useState(""),[o,a]=k.useState(""),[u,c]=k.useState(""),[h,f]=k.useState(""),[g,v]=k.useState(!1),P=n==="inscription",N=async S=>{if(S.preventDefault(),f(""),P&&!i.trim()){f("Indique ton prénom.");return}v(!0);try{P?await e(o,u,i):await t(o,u)}catch(E){f(KL(E.code)),v(!1)}},D=()=>{r(P?"connexion":"inscription"),f("")};return m.jsxs("div",{className:"connexion",children:[m.jsx("div",{className:"connexion__bande"}),m.jsxs("div",{className:"connexion__contenu",children:[m.jsxs("h1",{className:"connexion__marque",children:[m.jsx("span",{children:"Ici c'est"}),m.jsx("em",{children:"Ton"}),m.jsx("em",{children:"Paris"})]}),m.jsxs("form",{className:"connexion__form",onSubmit:N,children:[P&&m.jsxs("label",{className:"champ",children:[m.jsx("span",{className:"champ__label",children:"Prénom"}),m.jsx("input",{className:"champ__saisie",type:"text",value:i,onChange:S=>s(S.target.value),autoComplete:"given-name",placeholder:"Dylan"})]}),m.jsxs("label",{className:"champ",children:[m.jsx("span",{className:"champ__label",children:"Adresse e-mail"}),m.jsx("input",{className:"champ__saisie",type:"email",value:o,onChange:S=>a(S.target.value),autoComplete:"email",required:!0,placeholder:"toi@exemple.fr"})]}),m.jsxs("label",{className:"champ",children:[m.jsx("span",{className:"champ__label",children:"Mot de passe"}),m.jsx("input",{className:"champ__saisie",type:"password",value:u,onChange:S=>c(S.target.value),autoComplete:P?"new-password":"current-password",required:!0,minLength:6,placeholder:"6 caractères minimum"})]}),h&&m.jsx("p",{className:"connexion__erreur",role:"alert",children:h}),m.jsx("button",{className:"connexion__valider",type:"submit",disabled:g,children:g?"Un instant…":P?"Créer le compte":"Se connecter"})]}),m.jsx("button",{className:"connexion__bascule",type:"button",onClick:D,children:P?"J'ai déjà un compte":"Créer un compte"})]})]})}let Gl=null,Wl=null;async function Jm(){if(Gl)return Gl;const t=await th(Ut(ct,ht.config("clubs")));return Gl=t.exists()?t.data().liste||[]:[],Gl}async function fA(){if(Wl)return Wl;const t=await th(Ut(ct,ht.config("nations")));return Wl=t.exists()?t.data().liste||[]:[],Wl}function fc(t,e){const n=e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return n?t.filter(r=>`${r.nom} ${r.alias||""}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(n)):t}const Hl=["Ton club","Ta sélection","Tes clubs suivis","Tes notifs"];function uM(){const{utilisateur:t}=sl(),{enregistrer:e}=so(),[n,r]=k.useState(0),[i,s]=k.useState([]),[o,a]=k.useState([]),[u,c]=k.useState(""),[h,f]=k.useState(null),[g,v]=k.useState(null),[P,N]=k.useState([]),[D,S]=k.useState({matinDuMatch:!0,uneHeureAvant:!0,coupDEnvoi:!0,actuImportante:!0,touteActu:!1}),[E,w]=k.useState(!1);k.useEffect(()=>{Jm().then(s),fA().then(a)},[]),k.useEffect(()=>{c("")},[n]);const b=k.useMemo(()=>fc(i,u),[i,u]),F=k.useMemo(()=>fc(o,u),[o,u]),j=k.useMemo(()=>b.filter(x=>x.id!==(h==null?void 0:h.id)),[b,h]),T=x=>{N(I=>I.some(Oe=>Oe.id===x.id)?I.filter(Oe=>Oe.id!==x.id):I.length>=ci?I:[...I,x])},y=x=>{S(I=>({...I,[x]:!I[x]}))},A=()=>n===0?!!h:n===1?!!g:!0,C=async()=>{w(!0),await e({clubFavori:h,nationFavorite:g,clubsSuivis:P,notifications:D,onboardingTermine:!0})},R=()=>{n<Hl.length-1?r(n+1):C()};return m.jsxs("div",{className:"onb",children:[m.jsxs("header",{className:"onb__tete",children:[m.jsxs("p",{className:"onb__compteur",children:["Étape ",n+1," sur ",Hl.length]}),m.jsx("div",{className:"onb__jauge",children:Hl.map((x,I)=>m.jsx("span",{className:`onb__cran${I<=n?" onb__cran--fait":""}`},I))})]}),m.jsxs("div",{className:"onb__corps",children:[n===0&&m.jsxs(m.Fragment,{children:[m.jsx("h2",{className:"onb__titre",children:"Quel est ton club ?"}),m.jsx("p",{className:"onb__aide",children:"Il ouvre ton accueil et passe avant tout le reste."}),m.jsx("input",{className:"onb__recherche",type:"search",value:u,onChange:x=>c(x.target.value),placeholder:"Chercher un club"}),m.jsx("ul",{className:"onb__liste",children:b.map(x=>m.jsx("li",{children:m.jsx("button",{className:`onb__choix${(h==null?void 0:h.id)===x.id?" onb__choix--actif":""}`,onClick:()=>f(x),children:m.jsx("span",{className:"onb__choix-nom",children:x.nom})})},x.id))})]}),n===1&&m.jsxs(m.Fragment,{children:[m.jsx("h2",{className:"onb__titre",children:"Et ta sélection ?"}),m.jsx("p",{className:"onb__aide",children:"Ses matchs apparaîtront pendant les trêves internationales."}),m.jsx("input",{className:"onb__recherche",type:"search",value:u,onChange:x=>c(x.target.value),placeholder:"Chercher une sélection"}),m.jsx("ul",{className:"onb__liste",children:F.map(x=>m.jsx("li",{children:m.jsx("button",{className:`onb__choix${(g==null?void 0:g.id)===x.id?" onb__choix--actif":""}`,onClick:()=>v(x),children:m.jsx("span",{className:"onb__choix-nom",children:x.nom})})},x.id))})]}),n===2&&m.jsxs(m.Fragment,{children:[m.jsx("h2",{className:"onb__titre",children:"Tu suis d'autres clubs ?"}),m.jsxs("p",{className:"onb__aide",children:[P.length," sur ",ci," choisis. Tu peux aussi passer cette étape."]}),m.jsx("input",{className:"onb__recherche",type:"search",value:u,onChange:x=>c(x.target.value),placeholder:"Chercher un club"}),m.jsx("ul",{className:"onb__liste",children:j.map(x=>{const I=P.some(Oe=>Oe.id===x.id),fe=P.length>=ci&&!I;return m.jsx("li",{children:m.jsxs("button",{className:`onb__choix${I?" onb__choix--actif":""}`,onClick:()=>T(x),disabled:fe,children:[m.jsx("span",{className:"onb__choix-nom",children:x.nom}),I&&m.jsx("span",{className:"onb__choix-marque",children:"Suivi"})]})},x.id)})})]}),n===3&&m.jsxs(m.Fragment,{children:[m.jsx("h2",{className:"onb__titre",children:"Qu'est-ce qu'on te signale ?"}),m.jsx("p",{className:"onb__aide",children:"Tu pourras changer ça à tout moment dans les réglages."}),m.jsx("ul",{className:"onb__notifs",children:[["matinDuMatch","Le matin du match","Vers 9h, avec la chaîne"],["uneHeureAvant","1 heure avant","Rappel avant le coup d'envoi"],["coupDEnvoi","Au coup d'envoi","Le match commence"],["actuImportante","Actu importante","Mercato, blessure, groupe"],["touteActu","Toute l'actu","Chaque article publié"]].map(([x,I,fe])=>m.jsxs("li",{className:"onb__notif",children:[m.jsxs("div",{children:[m.jsx("p",{className:"onb__notif-titre",children:I}),m.jsx("p",{className:"onb__notif-detail",children:fe})]}),m.jsx("button",{className:`bascule${D[x]?" bascule--on":""}`,onClick:()=>y(x),role:"switch","aria-checked":D[x],"aria-label":I})]},x))})]})]}),m.jsxs("footer",{className:"onb__pied",children:[n>0&&m.jsx("button",{className:"onb__retour",onClick:()=>r(n-1),children:"Retour"}),m.jsx("button",{className:"onb__suivant",onClick:R,disabled:!A()||E,children:E?"Un instant…":n===Hl.length-1?`C'est parti, ${(t==null?void 0:t.displayName)||""}`.trim():"Continuer"})]})]})}function pA({depuis:t=mA(),nombre:e=60}={}){const[n,r]=k.useState([]),[i,s]=k.useState(!0),[o,a]=k.useState(null);return k.useEffect(()=>{const u=ZS(Om(ct,ht.diffusions()),pL("debut",">=",t),eA("debut","asc"),tA(e));return Rn(u,c=>{r(c.docs.map(h=>{var g,v;const f=h.data();return{id:h.id,...f,debutISO:f.debutISO||((v=(g=f.debut)==null?void 0:g.toDate)==null?void 0:v.call(g).toISOString())||null}})),s(!1)},c=>{a(c),s(!1)})},[t.getTime(),e]),{diffusions:n,chargement:i,erreur:o}}function mA(){const t=new Date;return t.setHours(0,0,0,0),t}function cM(t){const e=mA();return e.setDate(e.getDate()-t),e}function Je(t,{libelleSucces:e="Mise à jour effectuée.",libelleErreur:n="Échec de la mise à jour, réessaie."}={}){const[r,i]=k.useState(!1),{notifier:s}=hA();return[k.useCallback(async(...a)=>{i(!0);try{const u=await t(...a),c=typeof e=="function"?e(u):e;return s(c,{type:"succes"}),u}catch(u){const c=typeof n=="function"?n(u):n;throw s(c,{type:"erreur"}),u}finally{i(!1)}},[t,e,n,s]),r]}const hM=30*60*1e3;function dM(t){var c;const[e,n]=k.useState([]),[r,i]=k.useState(!0);k.useEffect(()=>Rn(Ut(ct,ht.scoresDirect()),h=>{n(h.exists()?h.data().matchs||[]:[]),i(!1)},()=>i(!1)),[]);const s=k.useMemo(()=>e.filter(h=>!h.termine||!h.termineDetecteLe?!0:Date.now()-h.termineDetecteLe<hM),[e]),o=(c=t==null?void 0:t.clubFavori)==null?void 0:c.id,a=k.useMemo(()=>o?s.find(h=>(h.clubs||[]).includes(o)):null,[s,o]),u=k.useMemo(()=>s.filter(h=>h!==a),[s,a]);return{matchFavori:a,autresMatchs:u,aDesMatchsEnDirect:s.length>0,chargement:r}}function Ym(){const[t,e]=k.useState(!1);return k.useEffect(()=>Rn(Ut(ct,ht.config("debug")),n=>e(!!(n.exists()&&n.data().actif)),()=>e(!1)),[]),t}const Cs={CLUB_FAVORI:1,AFFICHE_CROISEE:2,CLUB_SUIVI:3},fM=105*60*1e3;function pM(t){var n;const e=new Set;(n=t==null?void 0:t.clubFavori)!=null&&n.id&&e.add(t.clubFavori.id);for(const r of(t==null?void 0:t.clubsSuivis)||[])r.id&&e.add(r.id);return e}function mM(t,e){var o;const n=pM(e),r=(t.clubs||[]).filter(a=>n.has(a));if(r.length===0)return null;const i=(o=e==null?void 0:e.clubFavori)==null?void 0:o.id;if(i&&r.includes(i))return{priorite:Cs.CLUB_FAVORI,motif:"Ton club"};if(r.length>=2)return{priorite:Cs.AFFICHE_CROISEE,motif:"Deux clubs que tu suis"};const s=((e==null?void 0:e.clubsSuivis)||[]).find(a=>a.id===r[0]);return{priorite:Cs.CLUB_SUIVI,motif:`Tu suis ${(s==null?void 0:s.court)||(s==null?void 0:s.nom)||"ce club"}`}}function gA(t,e){const n=[];for(const r of t){if(!r.debutISO)continue;const i=mM(r,e);i&&n.push({...r,...i})}return n.sort((r,i)=>{const s=Date.parse(r.debutISO),o=Date.parse(i.debutISO);return s!==o?s-o:r.priorite-i.priorite})}function gM(t){const e=[];for(let n=0;n<t.length;n++)for(let r=n+1;r<t.length;r++){const i=t[n],s=t[r];Math.abs(Date.parse(i.debutISO)-Date.parse(s.debutISO))<fM&&e.push([i,s])}return e}function _E(t,e=new Date){const n=new Date(t);return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function wu(t){return new Date(t).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}function _A(t){return new Date(t).toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}const _M=["cf","ac","as","sc","rc","ssc","afc","club","de","du","les","la","le"],yM={sg:"saintgermain"};function pc(t=""){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[\u2019'`]/g," ").replace(/[^a-z0-9]+/g," ").trim().split(" ").filter(n=>n&&!_M.includes(n)).map(n=>yM[n]||n).join("")||t.toLowerCase().replace(/[^a-z0-9]+/g,"")}function vM(t,e){const n=pc(t),r=pc(e);if(!n||!r)return!1;if(n===r)return!0;const[i,s]=n.length<=r.length?[n,r]:[r,n];return i.length>=4&&s.includes(i)}function EM(t,e){const n=pc(t),r=pc(e);return!!n&&n===r}function yA(t,e){return[t.nom,t.court].filter(Boolean).some(i=>vM(i,e))?!0:(t.alias||"").split(" ").filter(Boolean).some(i=>EM(i,e))}function wM(t,e){const n=[e==null?void 0:e.clubFavori,...(e==null?void 0:e.clubsSuivis)||[]].filter(Boolean);for(const r of n)if(yA(r,t))return r.id;return null}const IM={confirme:null,a_verifier:"Chaîne à confirmer",manquant:"Chaîne inconnue"};function vA({match:t,onCorriger:e}){const n=t.priorite===Cs.CLUB_FAVORI,r=t.priorite===Cs.AFFICHE_CROISEE,i=t.chaines||[],s=IM[t.statut];return m.jsxs("article",{className:`match${n?" match--favori":""}${r?" match--croisee":""}`,children:[m.jsxs("div",{className:"match__tete",children:[m.jsx("span",{className:"match__competition",children:t.competition||"Match"}),t.motif&&m.jsx("span",{className:`match__marque${r?" match__marque--croisee":""}`,children:t.motif})]}),m.jsxs("div",{className:"match__affiche",children:[m.jsx("span",{className:"match__equipe",children:t.domicile}),m.jsx("span",{className:"match__separateur",children:"vs"}),m.jsx("span",{className:"match__equipe",children:t.exterieur})]}),m.jsxs("div",{className:"match__pied",children:[m.jsx("span",{className:"match__heure",children:wu(t.debutISO)}),i.length>0?i.map(o=>m.jsx("span",{className:`chaine${o.statut==="a_verifier"?" chaine--incertaine":""}`,children:o.nom},o.nom)):m.jsx("button",{className:"chaine chaine--absente",onClick:()=>e==null?void 0:e(t),children:"Ajouter la chaîne"}),s&&m.jsx("span",{className:"match__statut",children:s})]})]})}function TM({actu:t,onOuvrir:e}){const[n,r]=k.useState(!1),i=!!t.image&&!n,s=t.publieLeISO?new Date(t.publieLeISO).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}):"";return m.jsxs("button",{className:`actu${i?" actu--image":""}`,onClick:()=>e==null?void 0:e(t),children:[m.jsx("span",{className:"actu__date",children:s}),m.jsxs("div",{className:"actu__corps",children:[t.categorie&&m.jsx("span",{className:`actu__categorie${t.importante?" actu__categorie--chaude":""}`,children:t.categorie}),m.jsx("h3",{className:"actu__titre",children:t.titre}),m.jsx("span",{className:"actu__source",children:t.source})]}),i&&m.jsx("img",{className:"actu__image",src:t.image,alt:"",loading:"lazy",onError:()=>r(!0)})]})}function Xm({ouvert:t,message:e,texteConfirmer:n="Confirmer",texteAnnuler:r="Annuler",onConfirm:i,onCancel:s}){return k.useEffect(()=>{if(!t)return;const o=a=>{a.key==="Escape"&&(s==null||s())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t,s]),t?m.jsx("div",{className:"modale",id:"confirmModal",role:"dialog","aria-modal":"true",onClick:s,children:m.jsxs("div",{className:"modale__boite",onClick:o=>o.stopPropagation(),children:[m.jsx("div",{className:"modale__message",children:e}),m.jsxs("div",{className:"modale__actions",children:[m.jsx("button",{className:"modale__bouton modale__bouton--annuler",onClick:s,children:r}),m.jsx("button",{className:"modale__bouton modale__bouton--confirmer",onClick:i,children:n})]})]})}):null}function SM({matchFavori:t,autresMatchs:e}){return!t&&e.length===0?null:m.jsxs("div",{className:"direct",children:[t&&m.jsx(AM,{match:t}),e.length>0&&m.jsx("div",{className:"direct__secondaires",children:e.map(n=>m.jsx(CM,{match:n},n.idBrut))})]})}function AM({match:t}){return m.jsxs("div",{className:`direct__favori${t.termine?" direct__favori--termine":""}`,children:[m.jsx("span",{className:"direct__puce","aria-hidden":"true",children:t.termine?"TERMINÉ":"● DIRECT"}),m.jsxs("div",{className:"direct__affiche",children:[m.jsx("span",{className:"direct__equipe",children:t.domicile}),m.jsxs("span",{className:"direct__score",children:[t.scoreDomicile??0," – ",t.scoreExterieur??0]}),m.jsx("span",{className:"direct__equipe",children:t.exterieur})]}),!t.termine&&m.jsx("span",{className:"direct__minute",children:t.minute!=null?`${t.minute}'`:"À venir"})]})}function CM({match:t}){return m.jsxs("div",{className:`direct__ligne${t.termine?" direct__ligne--termine":""}`,children:[m.jsx("span",{className:`direct__puce direct__puce--petite${t.termine?" direct__puce--petite-termine":""}`,"aria-hidden":"true",children:"●"}),m.jsxs("span",{className:"direct__ligne-texte",children:[t.domicile," ",t.scoreDomicile??0," – ",t.scoreExterieur??0," ",t.exterieur]}),m.jsx("span",{className:"direct__ligne-minute",children:t.termine?"Fin":t.minute!=null?`${t.minute}'`:""})]})}function EA({titre:t="Zone de test",actions:e}){return m.jsxs("div",{className:"panneau-test",children:[m.jsxs("p",{className:"panneau-test__titre",children:["🧪 ",t]}),m.jsx("div",{className:"panneau-test__boutons",children:e.map(({libelle:n,onClick:r,enCours:i,efface:s})=>m.jsx("button",{className:`panneau-test__bouton${s?" panneau-test__bouton--efface":""}`,onClick:r,disabled:i,children:n},n))})]})}function PM({onOuvrirArticle:t}){const{preferences:e}=so(),{diffusions:n,chargement:r}=pA(),{actus:i,chargement:s}=dA(),{matchFavori:o,autresMatchs:a,aDesMatchsEnDirect:u}=dM(e),c=Ym(),[h,f]=k.useState(null),[g,v]=k.useState(""),[P,N]=k.useState([]),[D,S]=k.useState(!1),[E,w]=k.useState(!1);k.useEffect(()=>{Jm().then(N)},[]);const b=k.useMemo(()=>gA(n,e),[n,e]),F=k.useMemo(()=>b.filter(me=>_E(me.debutISO)),[b]),j=k.useMemo(()=>F.filter(me=>Date.parse(me.debutISO)>Date.now()),[F]),T=k.useMemo(()=>b.find(me=>Date.parse(me.debutISO)>Date.now()),[b]),y=k.useMemo(()=>b.find(me=>me.priorite===Cs.CLUB_FAVORI&&Date.parse(me.debutISO)>Date.now()),[b]),A=k.useMemo(()=>gM(j),[j]),C=o?null:y||T||j[0],R=me=>{if(!me)return null;const gn=P.find(Bi=>yA(Bi,me));return(gn==null?void 0:gn.logo)||null},x=k.useMemo(()=>!C||P.length===0?null:R(C.domicile),[C,P]),I=k.useMemo(()=>!C||P.length===0?null:R(C.exterieur),[C,P]);k.useEffect(()=>{S(!1)},[x]),k.useEffect(()=>{w(!1)},[I]);const[fe]=Je(()=>Ye(Xe,"corrigerChaine")({matchId:h.id,chaine:g.trim()}),{libelleSucces:"Chaîne enregistrée.",libelleErreur:"Échec de l'enregistrement de la chaîne."}),Oe=async()=>{if(!(!h||!g.trim()))try{await fe()}catch{}finally{f(null),v("")}},[xn,zt]=Je(()=>Ye(Xe,"rafraichirMaxifootNews")(),{libelleSucces:"Actu à jour.",libelleErreur:"Échec de la mise à jour de l'actu."}),q=me=>Ye(Xe,"injecterScoreTest")({scenario:me}),[Y,Z]=Je(()=>q("favori"),{libelleSucces:'Scénario "club favori en direct" injecté.',libelleErreur:"Échec de l'injection."}),[_e,ue]=Je(()=>q("autre"),{libelleSucces:'Scénario "autre club suivi" injecté.',libelleErreur:"Échec de l'injection."}),[Ae,en]=Je(()=>q("les_deux"),{libelleSucces:'Scénario "les deux à la fois" injecté.',libelleErreur:"Échec de l'injection."}),[tn,nn]=Je(()=>q("termine"),{libelleSucces:'Scénario "match terminé" injecté.',libelleErreur:"Échec de l'injection."}),[rn,ih]=Je(()=>Ye(Xe,"effacerScoreTest")(),{libelleSucces:"Scores de test effacés.",libelleErreur:"Échec de l'effacement."});return m.jsxs(m.Fragment,{children:[c&&m.jsx("div",{style:{padding:"18px 18px 0"},children:m.jsx(EA,{titre:"Scores live de test",actions:[{libelle:"Favori en direct",onClick:()=>Y().catch(()=>{}),enCours:Z},{libelle:"Autre club en direct",onClick:()=>_e().catch(()=>{}),enCours:ue},{libelle:"Les deux",onClick:()=>Ae().catch(()=>{}),enCours:en},{libelle:"Match terminé",onClick:()=>tn().catch(()=>{}),enCours:nn},{libelle:"Effacer",onClick:()=>rn().catch(()=>{}),enCours:ih,efface:!0}]})}),u&&m.jsx(SM,{matchFavori:o,autresMatchs:a}),C&&m.jsxs("section",{className:"une",children:[m.jsxs("div",{className:"une__logos",children:[x&&!D&&m.jsx("img",{className:"une__logo",src:x,alt:"","aria-hidden":"true",loading:"eager",onError:()=>S(!0)}),x&&!D&&I&&!E&&m.jsx("span",{className:"une__vs","aria-hidden":"true",children:"VS"}),I&&!E&&m.jsx("img",{className:"une__logo",src:I,alt:"","aria-hidden":"true",loading:"eager",onError:()=>w(!0)})]}),m.jsxs("div",{className:"une__contenu",children:[m.jsxs("h2",{className:"une__titre",children:[C.domicile," ",m.jsx("em",{children:"reçoit"})," ",C.exterieur]}),m.jsxs("p",{className:"une__details",children:[m.jsx("span",{className:"une__heure",children:wu(C.debutISO)}),[C.competition,_E(C.debutISO)?null:_A(C.debutISO)].filter(Boolean).join(" · "),(C.chaines||[]).map(me=>m.jsx("span",{className:`une__chaine${C.statut==="a_verifier"?" une__chaine--incertaine":""}`,children:me.nom},me.nom))]})]})]}),(r||j.length>0)&&m.jsxs("section",{className:"section",children:[m.jsxs("div",{className:"section__tete",children:[m.jsx("h2",{className:"section__titre",children:"Aujourd'hui"}),m.jsx(oT,{className:"section__lien",to:"/matchs",children:"Tout le calendrier"})]}),r&&m.jsx("p",{className:"attente",children:"Chargement du programme…"}),A.length>0&&m.jsx("div",{className:"croise",children:m.jsxs("p",{children:[m.jsx("strong",{children:"Deux affiches en même temps."})," ",A[0][0].domicile," – ",A[0][0].exterieur," à"," ",wu(A[0][0].debutISO),", ",A[0][1].domicile," –"," ",A[0][1].exterieur," à ",wu(A[0][1].debutISO),"."]})}),j.map(me=>m.jsx(vA,{match:me,onCorriger:gn=>{f(gn),v("")}},me.id))]}),m.jsxs("section",{className:"section",children:[m.jsx("div",{className:"section__tete",children:m.jsx("h2",{className:"section__titre",children:"Actu PSG"})}),s&&m.jsx("p",{className:"attente",children:"Chargement de l'actu…"}),!s&&i.length===0&&m.jsx("p",{className:"attente",children:"Rien de neuf pour l'instant."}),i.slice(0,12).map(me=>m.jsx(TM,{actu:me,onOuvrir:t},me.id)),!s&&m.jsx("button",{className:"rafraichir",onClick:()=>xn().catch(()=>{}),disabled:zt,children:zt?"Mise à jour en cours…":"Rafraîchir l'actu"})]}),m.jsx(Xm,{ouvert:!!h,message:m.jsxs(m.Fragment,{children:[m.jsxs("span",{className:"correction__intro",children:["Sur quelle chaîne passe ",h==null?void 0:h.domicile," – ",h==null?void 0:h.exterieur," ?"]}),m.jsx("input",{className:"correction__saisie",type:"text",value:g,onChange:me=>v(me.target.value),placeholder:"Ligue 1+, Canal+, DAZN…",autoFocus:!0})]}),texteConfirmer:"Enregistrer",onConfirm:Oe,onCancel:()=>{f(null),v("")}})]})}const RM=["dim","lun","mar","mer","jeu","ven","sam"];function Ql(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function xM({jourSelectionne:t,onSelectionner:e,nbJoursApres:n=4}){const r=new Date;r.setHours(0,0,0,0);const i=[],s=new Date(r);s.setDate(s.getDate()-1),i.push({cle:Ql(s),libelle:"Hier"}),i.push({cle:Ql(r),libelle:"Aujourd'hui"});const o=new Date(r);o.setDate(o.getDate()+1),i.push({cle:Ql(o),libelle:"Demain"});for(let a=2;a<=n+1;a++){const u=new Date(r);u.setDate(u.getDate()+a),i.push({cle:Ql(u),libelle:`${RM[u.getDay()]} ${u.getDate()}`})}return m.jsx("div",{className:"nav-dates",role:"tablist","aria-label":"Choisir un jour",children:i.map(a=>m.jsx("button",{role:"tab","aria-selected":t===a.cle,className:`nav-dates__item${t===a.cle?" nav-dates__item--actif":""}`,onClick:()=>e(a.cle),children:a.libelle},a.cle))})}const kM=4;function wA(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function NM(t){return wA(new Date(t))}function bM(){return wA(new Date)}function DM(){const{preferences:t}=so(),{diffusions:e,chargement:n}=pA({depuis:cM(1),nombre:200}),[r,i]=k.useState(bM()),[s,o]=k.useState(null),[a,u]=k.useState(""),c=k.useMemo(()=>gA(e,t),[e,t]),h=k.useMemo(()=>c.filter(D=>NM(D.debutISO)===r),[c,r]),f=h[0]?_A(h[0].debutISO):null,[g,v]=Je(()=>Ye(Xe,"rafraichirDiffusions")(),{libelleSucces:"Chaînes à jour.",libelleErreur:"Échec de la mise à jour des chaînes."}),[P]=Je(()=>Ye(Xe,"corrigerChaine")({matchId:s.id,chaine:a.trim()}),{libelleSucces:"Chaîne enregistrée.",libelleErreur:"Échec de l'enregistrement de la chaîne."}),N=async()=>{if(!(!s||!a.trim()))try{await P()}catch{}finally{o(null),u("")}};return m.jsxs("section",{className:"section",children:[m.jsx(xM,{jourSelectionne:r,onSelectionner:i,nbJoursApres:kM}),n&&m.jsx("p",{className:"attente",children:"Chargement du calendrier…"}),!n&&h.length===0&&m.jsxs("div",{className:"vide",children:[m.jsx("p",{className:"vide__titre",children:"Rien de programmé"}),m.jsx("p",{className:"vide__texte",children:"Aucun match programmé ce jour-là."})]}),h.length>0&&m.jsxs("div",{className:"jour",children:[f&&m.jsx("h2",{className:"jour__titre",children:f}),h.map(D=>m.jsx(vA,{match:D,onCorriger:S=>{o(S),u("")}},D.id))]}),!n&&m.jsx("button",{className:"rafraichir",onClick:()=>g().catch(()=>{}),disabled:v,children:v?"Mise à jour en cours…":"Mettre à jour les chaînes"}),m.jsx(Xm,{ouvert:!!s,message:m.jsxs(m.Fragment,{children:[m.jsxs("span",{className:"correction__intro",children:["Sur quelle chaîne passe ",s==null?void 0:s.domicile," – ",s==null?void 0:s.exterieur," ?"]}),m.jsx("input",{className:"correction__saisie",type:"text",value:a,onChange:D=>u(D.target.value),placeholder:"Ligue 1+, Canal+, DAZN…",autoFocus:!0})]}),texteConfirmer:"Enregistrer",onConfirm:N,onCancel:()=>{o(null),u("")}})]})}const yE="psg";function VM(){const[t,e]=k.useState(null),[n,r]=k.useState(null),[i,s]=k.useState(!0),[o,a]=k.useState(!0);k.useEffect(()=>Rn(Ut(ct,ht.compoProbable(yE)),g=>{e(g.exists()?g.data():null),s(!1)},()=>s(!1)),[]),k.useEffect(()=>Rn(Ut(ct,ht.compoOfficielle(yE)),g=>{r(g.exists()?g.data():null),a(!1)},()=>a(!1)),[]);const u=i||o,c=(n==null?void 0:n.titreBreve)&&(t==null?void 0:t.titreBreve)&&n.titreBreve.toLowerCase().replace(/\s*probables?\s*$/,"").trim()===t.titreBreve.toLowerCase().replace(/\s*probables?\s*$/,"").trim(),h=n&&(c||!t)?n:t;return{compo:h,estOfficielle:h===n&&!!n,probable:t,officielle:n,chargement:u}}const OM="psg";function IA(){const[t,e]=k.useState(null),[n,r]=k.useState(!0);return k.useEffect(()=>Rn(Ut(ct,ht.effectif(OM)),i=>{e(i.exists()?i.data():null),r(!1)},()=>r(!1)),[]),{effectif:t,chargement:n}}function TA({joueur:t,onFermer:e}){const[n,r]=k.useState(!1);if(k.useEffect(()=>{if(!t)return;r(!1);const f=g=>{g.key==="Escape"&&(e==null||e())};return document.addEventListener("keydown",f),()=>document.removeEventListener("keydown",f)},[t,e]),!t)return null;const i=t.matchsJoues??0,s=t.titularisations??0,o=t.buts??0,a=t.minutesJouees??0,u=t.cartonsJaunes??0,c=t.cartonsRouges??0,h=t.photo&&!n;return m.jsx("div",{className:"fiche-modale",role:"dialog","aria-modal":"true",onClick:e,children:m.jsxs("div",{className:"fiche-modale__boite",onClick:f=>f.stopPropagation(),children:[m.jsx("button",{className:"fiche-modale__fermer",onClick:e,"aria-label":"Fermer",children:"×"}),m.jsxs("div",{className:"fiche-modale__portrait",children:[h?m.jsx("img",{className:"fiche-modale__photo",src:t.photo,alt:"",loading:"eager",onError:()=>r(!0)}):m.jsx("div",{className:"fiche-modale__photo fiche-modale__photo--vide","aria-hidden":"true",children:(t.nom||"?").charAt(0).toUpperCase()}),t.numeroMaillot!=null&&m.jsx("div",{className:"fiche-modale__numero",children:t.numeroMaillot})]}),m.jsxs("div",{className:"fiche-modale__entete",children:[t.poste&&m.jsx("p",{className:"fiche-modale__poste",children:t.poste}),m.jsx("h3",{className:"fiche-modale__nom",children:t.nomComplet||t.nom}),m.jsx("p",{className:"fiche-modale__meta",children:[t.nationalite,t.age?`${t.age} ans`:null,t.taille,t.poids].filter(Boolean).join(" · ")})]}),m.jsxs("div",{className:"fiche-modale__stats",children:[m.jsxs("div",{className:"fiche-modale__stat",children:[m.jsx("span",{className:"fiche-modale__stat-valeur",children:i}),m.jsxs("span",{className:"fiche-modale__stat-cle",children:["Match",i>1?"s":""]})]}),m.jsxs("div",{className:"fiche-modale__stat",children:[m.jsx("span",{className:"fiche-modale__stat-valeur",children:s}),m.jsx("span",{className:"fiche-modale__stat-cle",children:"Titu."})]}),m.jsxs("div",{className:"fiche-modale__stat",children:[m.jsx("span",{className:"fiche-modale__stat-valeur",children:o}),m.jsxs("span",{className:"fiche-modale__stat-cle",children:["But",o>1?"s":""]})]}),m.jsxs("div",{className:"fiche-modale__stat",children:[m.jsxs("span",{className:"fiche-modale__stat-valeur",children:[a,"'"]}),m.jsx("span",{className:"fiche-modale__stat-cle",children:"Minutes"})]})]}),(u>0||c>0)&&m.jsxs("div",{className:"fiche-modale__discipline",children:[u>0&&m.jsxs("span",{className:"fiche-modale__carton fiche-modale__carton--jaune",children:[u," carton",u>1?"s":""," jaune",u>1?"s":""]}),c>0&&m.jsxs("span",{className:"fiche-modale__carton fiche-modale__carton--rouge",children:[c," carton",c>1?"s":""," rouge",c>1?"s":""]})]})]})})}function LM(){const{compo:t,estOfficielle:e,chargement:n}=VM(),{effectif:r}=IA(),i=Ym(),[s,o]=k.useState(null),[a,u]=k.useState({}),[c,h]=Je(()=>Ye(Xe,"rafraichirCompoPsg")(),{libelleSucces:w=>{var b,F,j,T;return(F=(b=w==null?void 0:w.data)==null?void 0:b.probable)!=null&&F.nouvelle||(T=(j=w==null?void 0:w.data)==null?void 0:j.officielle)!=null&&T.nouvelle?"Nouvelle compo trouvée.":"Rien de neuf pour le moment."},libelleErreur:"Échec de la vérification de la compo."}),[f,g]=Je(()=>Ye(Xe,"injecterCompoTest")({officielle:!1}),{libelleSucces:"Compo probable de test injectée.",libelleErreur:"Échec de l'injection."}),[v,P]=Je(()=>Ye(Xe,"injecterCompoTest")({officielle:!0}),{libelleSucces:"Compo officielle de test injectée.",libelleErreur:"Échec de l'injection."}),[N,D]=Je(()=>Ye(Xe,"effacerCompoTest")(),{libelleSucces:"Compo(s) de test effacée(s).",libelleErreur:"Échec de l'effacement."}),S=i&&m.jsx(EA,{titre:"Compo de test",actions:[{libelle:"Injecter probable",onClick:()=>f().catch(()=>{}),enCours:g},{libelle:"Injecter officielle",onClick:()=>v().catch(()=>{}),enCours:P},{libelle:"Effacer",onClick:()=>N().catch(()=>{}),enCours:D,efface:!0}]}),E=w=>{const b=(r==null?void 0:r.joueurs)||[],F=w.joueurId&&b.find(j=>j.id===w.joueurId)||b.find(j=>j.nom===w.nom);o(F||{nom:w.nom,poste:w.posteEffectif||w.ligne,photo:w.photo||null,numeroMaillot:w.numeroMaillot??null})};return n?m.jsx("p",{className:"attente attente--marge",children:"Chargement de la compo…"}):!t||(t.titulaires||[]).length===0?m.jsxs("section",{className:"vide",children:[m.jsx("p",{className:"vide__titre",children:"Compo probable"}),m.jsx("p",{className:"vide__texte",children:"Pas encore de compo probable annoncée pour le prochain match."}),m.jsx("button",{className:"rafraichir",onClick:()=>c().catch(()=>{}),disabled:h,style:{marginTop:16},children:h?"Recherche en cours…":"Vérifier maintenant"}),S]}):m.jsxs("section",{className:"section",children:[m.jsx("div",{className:"section__tete",children:m.jsxs("h2",{className:"section__titre",children:["Compo ",m.jsx("em",{children:e?"officielle":"probable"})]})}),!e&&m.jsx("p",{className:"compo__etiquette compo__etiquette--probable",children:"Pas encore confirmée — l'officielle sort en général vers l'heure qui précède le match."}),t.titreBreve&&m.jsx("p",{className:"compo__source",children:t.titreBreve}),m.jsxs("div",{className:"terrain",children:[m.jsxs("div",{className:"terrain__pelouse","aria-hidden":"true",children:[m.jsx("div",{className:"terrain__ligne-mediane"}),m.jsx("div",{className:"terrain__rond-central"}),m.jsx("div",{className:"terrain__surface terrain__surface--bas"}),m.jsx("div",{className:"terrain__surface terrain__surface--haut"})]}),t.titulaires.map(w=>{const b=w.joueurId||w.nom,F=w.photo&&!a[b];return m.jsxs("button",{className:"terrain__joueur",style:{left:`${w.x}%`,top:`${w.y}%`},onClick:()=>E(w),children:[F?m.jsx("img",{className:"terrain__pastille terrain__pastille--photo",src:w.photo,alt:"",loading:"eager",onError:()=>u(j=>({...j,[b]:!0}))}):m.jsx("span",{className:"terrain__pastille",children:MM(w.nom)}),m.jsx("span",{className:"terrain__nom",children:jM(w.nom)})]},w.nom)})]}),t.banc&&t.banc.length>0&&m.jsxs("div",{className:"banc",children:[m.jsx("h3",{className:"banc__titre",children:"Remplaçants"}),m.jsx("ul",{className:"banc__liste",children:t.banc.map(w=>m.jsx("li",{className:"banc__joueur",children:w},w))})]}),m.jsx("button",{className:"rafraichir",onClick:()=>c().catch(()=>{}),disabled:h,children:h?"Mise à jour en cours…":e?"Vérifier une mise à jour":"Vérifier si l'officielle est sortie"}),S,m.jsx(TA,{joueur:s,onFermer:()=>o(null)})]})}function MM(t){const e=t.split(/[\s-]+/).filter(Boolean);return e.length===1?e[0].slice(0,3).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}function jM(t){const e=t.split(/[\s-]+/).filter(Boolean);return e[e.length-1]}function FM(t){const[e,n]=k.useState([]),[r,i]=k.useState([]),[s,o]=k.useState(!0);return k.useEffect(()=>Rn(Om(ct,ht.classements()),u=>{n(u.docs.map(c=>({id:c.id,...c.data()}))),o(!1)},()=>o(!1)),[]),k.useEffect(()=>{th(Ut(ct,ht.config("clubs"))).then(u=>{i(u.exists()?u.data().liste||[]:[])})},[]),{classements:k.useMemo(()=>{const u=t==null?void 0:t.clubFavori,c=(t==null?void 0:t.clubsSuivis)||[],h=u==null?void 0:u.championnat,f=new Set([h,...c.map(v=>v.championnat),"ligue-des-champions"].filter(Boolean)),g=new Map(e.map(v=>[v.id,v]));return[...f].map(v=>g.get(v)||BM(v,r))},[e,r,t]),chargement:s}}const UM={"ligue-1":"Ligue 1",liga:"Liga","serie-a":"Serie A",bundesliga:"Bundesliga","premier-league":"Premier League","ligue-des-champions":"Ligue des Champions"};function BM(t,e){const n=e.filter(r=>r.championnat===t).sort((r,i)=>r.nom.localeCompare(i.nom));return{id:t,libelle:UM[t]||t,saisonDemarree:!1,saison:null,saisonPrecedente:!1,journee:null,groupes:[{libelle:null,lignes:n.map((r,i)=>({position:i+1,equipe:r.court||r.nom,nomComplet:r.nom,joues:0,gagnes:0,nuls:0,perdus:0,marques:0,encaisses:0,difference:0,points:0,forme:null}))}]}}function $M(){var c;const{preferences:t}=so(),{classements:e,chargement:n}=FM(t),[r,i]=k.useState(null),[s,o]=Je(()=>Ye(Xe,"rafraichirClassements")(),{libelleSucces:"Classement à jour.",libelleErreur:"Échec de la mise à jour du classement."});k.useEffect(()=>{!r&&e.length>0&&i(e[0].id)},[e,r]);const a=k.useMemo(()=>e.find(h=>h.id===r)||e[0]||null,[e,r]),u=(c=t==null?void 0:t.clubFavori)==null?void 0:c.id;return n?m.jsx("p",{className:"attente attente--marge",children:"Chargement des classements…"}):e.length===0?m.jsxs("section",{className:"vide",children:[m.jsx("p",{className:"vide__titre",children:"Classement"}),m.jsx("p",{className:"vide__texte",children:"Choisis un club favori pour voir son classement."})]}):m.jsxs("section",{className:"section",children:[m.jsx("div",{className:"filtres",children:e.map(h=>m.jsx("button",{className:`filtres__item${(a==null?void 0:a.id)===h.id?" filtres__item--actif":""}`,onClick:()=>i(h.id),children:h.libelle},h.id))}),(a==null?void 0:a.saisonDemarree)===!1&&m.jsx("p",{className:"classement__journee",children:"Saison pas encore commencée — classement à titre indicatif"}),(a==null?void 0:a.saisonPrecedente)&&m.jsxs("p",{className:"classement__journee classement__journee--alerte",children:["Saison ",a.saison," (précédente) — la nouvelle saison n'a pas encore de classement chez la source"]}),!(a!=null&&a.saisonPrecedente)&&(a==null?void 0:a.saisonDemarree)!==!1&&(a==null?void 0:a.journee)!=null&&m.jsxs("p",{className:"classement__journee",children:["Journée ",a.journee]}),((a==null?void 0:a.groupes)||[]).map((h,f)=>m.jsxs("div",{className:"classement__groupe",children:[h.libelle&&m.jsx("h3",{className:"classement__titre-groupe",children:h.libelle}),m.jsxs("table",{className:"classement",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{scope:"col",className:"classement__rang"}),m.jsx("th",{scope:"col",className:"classement__club",children:"Club"}),m.jsx("th",{scope:"col",children:"J"}),m.jsx("th",{scope:"col",children:"Diff"}),m.jsx("th",{scope:"col",children:"Pts"})]})}),m.jsx("tbody",{children:h.lignes.map(g=>{const v=wM(g.nomComplet||g.equipe,t),P=!!v,N=v===u;return m.jsxs("tr",{className:N?"classement__ligne--favori":P?"classement__ligne--suivi":"",children:[m.jsx("td",{className:"classement__rang",children:g.position}),m.jsx("td",{className:"classement__club",children:g.equipe}),m.jsx("td",{children:g.joues}),m.jsx("td",{children:g.difference>0?`+${g.difference}`:g.difference}),m.jsx("td",{className:"classement__points",children:g.points})]},`${g.position}-${g.equipe}`)})})]})]},h.libelle||f)),m.jsx("button",{className:"rafraichir",onClick:()=>s().catch(()=>{}),disabled:o,children:o?"Mise à jour en cours…":"Mettre à jour le classement"})]})}const zM=["Gardien","Défenseur","Milieu","Attaquant"];function qM({joueur:t,onOuvrir:e}){const{nom:n,nationalite:r,age:i,matchsJoues:s,titularisations:o,buts:a,cartonsJaunes:u,cartonsRouges:c,minutesJouees:h}=t;return m.jsxs("li",{className:"effectif__ligne",onClick:()=>e(t),children:[m.jsxs("div",{className:"effectif__corps",children:[m.jsx("p",{className:"effectif__joueur",children:n}),m.jsx("p",{className:"effectif__detail",children:[r,i?`${i} ans`:null].filter(Boolean).join(" · ")})]}),m.jsxs("div",{className:"effectif__stats",children:[m.jsxs("span",{className:"effectif__stat",title:"Matchs joués (titularisations)",children:[s," ",m.jsx("em",{children:o>0?`(${o} tit.)`:""})]}),a>0&&m.jsxs("span",{className:"effectif__stat effectif__stat--but",title:"Buts",children:["⚽ ",a]}),u>0&&m.jsx("span",{className:"effectif__stat effectif__stat--jaune",title:"Cartons jaunes",children:u}),c>0&&m.jsx("span",{className:"effectif__stat effectif__stat--rouge",title:"Cartons rouges",children:c}),m.jsxs("span",{className:"effectif__stat effectif__stat--minutes",title:"Minutes jouées",children:[h,"'"]})]})]})}function KM(){const{effectif:t,chargement:e}=IA(),n=Ym(),[r,i]=k.useState(null),[s,o]=k.useState(null),[a,u]=Je(()=>Ye(Xe,"rafraichirEffectifPsg")(),{libelleSucces:"Effectif à jour.",libelleErreur:v=>(v==null?void 0:v.message)||"Le rafraîchissement a échoué."}),[c,h]=Je(async()=>{const v=await Ye(Xe,"diagnosticEffectif")();return o(v.data),v.data},{libelleSucces:"Diagnostic terminé.",libelleErreur:"Échec du diagnostic."}),f=()=>c().catch(v=>o({ok:!1,erreur:v.message})),g=k.useMemo(()=>{const v=(t==null?void 0:t.joueurs)||[];return zM.map(P=>({poste:P,joueurs:v.filter(N=>N.poste===P)})).filter(P=>P.joueurs.length>0)},[t]);return e?m.jsx("p",{className:"attente attente--marge",children:"Chargement de l'effectif…"}):m.jsxs("section",{className:"section",children:[m.jsx("div",{className:"section__tete",children:m.jsxs("h2",{className:"section__titre",children:["Effectif ",m.jsx("em",{children:"PSG"})]})}),g.length===0&&m.jsx("p",{className:"attente",children:"Effectif pas encore disponible."}),(t==null?void 0:t.entraineur)&&m.jsxs("p",{className:"effectif__entraineur",children:["Entraîneur : ",m.jsx("strong",{children:t.entraineur.nom}),t.entraineur.nationalite?` · ${t.entraineur.nationalite}`:""]}),g.map(({poste:v,joueurs:P})=>m.jsxs("div",{className:"effectif__groupe",children:[m.jsxs("h3",{className:"effectif__titre-groupe",children:[v,P.length>1?"s":""]}),m.jsx("ul",{className:"effectif__liste",children:P.map(N=>m.jsx(qM,{joueur:N,onOuvrir:i},N.id||N.nom))})]},v)),m.jsx("button",{className:"rafraichir",onClick:()=>a().catch(()=>{}),disabled:u,children:u?"Mise à jour en cours…":"Rafraîchir l'effectif"}),n&&m.jsxs(m.Fragment,{children:[m.jsx("button",{className:"rafraichir",onClick:f,disabled:h,style:{marginTop:8},children:h?"Diagnostic en cours…":"Diagnostiquer"}),s&&m.jsx("pre",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:11,color:"var(--acier)",background:"rgba(255,255,255,0.05)",padding:12,marginTop:8,maxHeight:400,overflow:"auto"},children:JSON.stringify(s,null,2)})]}),m.jsx(TA,{joueur:r,onFermer:()=>i(null)})]})}const GM="psg";function WM(){const[t,e]=k.useState(null),[n,r]=k.useState(!0);return k.useEffect(()=>Rn(Ut(ct,ht.mercato(GM)),i=>{e(i.exists()?i.data():null),r(!1)},()=>r(!1)),[]),{mercato:t,chargement:n}}function HM(t=1e3){const[e,n]=k.useState(()=>new Date);return k.useEffect(()=>{const r=setInterval(()=>n(new Date),t);return()=>clearInterval(r)},[t]),e}const SA=[{type:"ete",saison:"2026",libelle:"Mercato d'été",debut:new Date(2026,5,15,0,0,0),fin:new Date(2026,8,1,19,59,0)},{type:"hiver",saison:"2026-2027",libelle:"Mercato d'hiver",debut:new Date(2027,0,1,0,0,0),fin:new Date(2027,1,1,19,59,0)}],QM=30;function JM(t){return SA.find(e=>t>=e.debut&&t<=e.fin)||null}function YM(t){return SA.filter(e=>e.debut>t).sort((e,n)=>e.debut-n.debut)[0]||null}function vE(t){const e=Math.max(0,Math.floor(t/1e3));return{jours:Math.floor(e/86400),heures:Math.floor(e%86400/3600),minutes:Math.floor(e%3600/60),secondes:e%60}}const EE={ete:"🔥",hiver:"❄️"},wE=24*60*60*1e3;function IE({jours:t,heures:e,minutes:n,secondes:r,compact:i=!1}){const s=o=>String(o).padStart(2,"0");return m.jsxs("div",{className:"mercato-timer__compte","aria-hidden":"true",children:[m.jsxs("span",{className:"mercato-timer__bloc",children:[m.jsx("strong",{children:t}),"j"]}),m.jsxs("span",{className:"mercato-timer__bloc",children:[m.jsx("strong",{children:s(e)}),"h"]}),m.jsxs("span",{className:"mercato-timer__bloc",children:[m.jsx("strong",{children:s(n)}),"m"]}),!i&&m.jsxs("span",{className:"mercato-timer__bloc",children:[m.jsx("strong",{children:s(r)}),"s"]})]})}function XM(){const t=HM(1e3),e=JM(t);if(e){const{jours:a,heures:u,minutes:c,secondes:h}=vE(e.fin-t),f=e.fin-t<wE;return m.jsxs("div",{className:`mercato-timer mercato-timer--ouvert${f?" mercato-timer--urgent":""}`,children:[m.jsxs("span",{className:"mercato-timer__badge",children:[EE[e.type]," Mercato ouvert"]}),m.jsx("p",{className:"mercato-timer__titre display",children:e.libelle}),m.jsx("p",{className:"mercato-timer__sous",children:"Ferme dans"}),m.jsx(IE,{jours:a,heures:u,minutes:c,secondes:h})]})}const n=YM(t);if(!n)return null;const r=n.debut-t;if(r>QM*wE)return null;const{jours:i,heures:s,minutes:o}=vE(r);return m.jsxs("div",{className:"mercato-timer mercato-timer--bientot",children:[m.jsxs("span",{className:"mercato-timer__badge",children:[EE[n.type]," Bientôt"]}),m.jsx("p",{className:"mercato-timer__titre display",children:n.libelle}),m.jsx("p",{className:"mercato-timer__sous",children:"Ouvre dans"}),m.jsx(IE,{jours:i,heures:s,minutes:o,compact:!0})]})}const TE=[{cle:"officiels",titre:"Officiels"},{cle:"enDiscussion",titre:"En discussion"},{cle:"rumeurs",titre:"Rumeurs"}];function ZM({mouvement:t}){const{joueur:e,joueurDetail:n,sens:r,clubAdverse:i,typeTransfert:s,montant:o}=t,a=n?n.split(",").slice(1).join(",").trim():null;return m.jsxs("li",{className:`mercato__ligne mercato__ligne--${r}`,children:[m.jsx("span",{className:"mercato__sens","aria-hidden":"true",children:r==="arrivee"?"↗":"↘"}),m.jsxs("div",{className:"mercato__corps",children:[m.jsx("p",{className:"mercato__joueur",children:e}),m.jsx("p",{className:"mercato__detail",children:[a,i].filter(Boolean).join(" · ")})]}),m.jsxs("div",{className:"mercato__transfert",children:[s&&m.jsx("span",{className:"mercato__type",children:s}),o&&m.jsx("span",{className:"mercato__montant",children:o})]})]})}function e2(){const{mercato:t,chargement:e}=WM(),[n,r]=Je(()=>Ye(Xe,"rafraichirMaxifootPsg")(),{libelleSucces:"Mercato à jour.",libelleErreur:"Échec de la mise à jour du mercato."});if(e)return m.jsx("p",{className:"attente attente--marge",children:"Chargement du mercato…"});const i=TE.reduce((s,{cle:o})=>{var a;return s+(((a=t==null?void 0:t[o])==null?void 0:a.length)||0)},0);return m.jsxs(m.Fragment,{children:[m.jsx(XM,{}),m.jsxs("section",{className:"section",children:[m.jsx("div",{className:"section__tete",children:m.jsxs("h2",{className:"section__titre",children:["Mercato ",m.jsx("em",{children:"PSG"})]})}),i===0&&m.jsx("p",{className:"attente",children:"Rien à signaler pour l'instant."}),TE.map(({cle:s,titre:o})=>{const a=(t==null?void 0:t[s])||[];return a.length===0?null:m.jsxs("div",{className:"mercato__groupe",children:[m.jsx("h3",{className:"mercato__titre-groupe",children:o}),m.jsx("ul",{className:"mercato__liste",children:a.map((u,c)=>m.jsx(ZM,{mouvement:u},`${s}-${c}`))})]},s)}),m.jsx("button",{className:"rafraichir",onClick:()=>n().catch(()=>{}),disabled:r,children:r?"Mise à jour en cours…":"Rafraîchir le mercato"})]})]})}const AA="@firebase/installations",Zm="0.6.9";/**
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
 */const CA=1e4,PA=`w:${Zm}`,RA="FIS_v2",t2="https://firebaseinstallations.googleapis.com/v1",n2=60*60*1e3,r2="installations",i2="Installations";/**
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
 */const s2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ni=new Li(r2,i2,s2);function xA(t){return t instanceof mn&&t.code.includes("request-failed")}/**
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
 */function kA({projectId:t}){return`${t2}/projects/${t}/installations`}function NA(t){return{token:t.token,requestStatus:2,expiresIn:a2(t.expiresIn),creationTime:Date.now()}}async function bA(t,e){const r=(await e.json()).error;return Ni.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function DA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function o2(t,{refreshToken:e}){const n=DA(t);return n.append("Authorization",l2(e)),n}async function VA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function a2(t){return Number(t.replace("s","000"))}function l2(t){return`${RA} ${t}`}/**
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
 */async function u2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=kA(t),i=DA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:RA,appId:t.appId,sdkVersion:PA},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await VA(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:NA(c.authToken)}}else throw await bA("Create Installation",u)}/**
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
 */function OA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function c2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const h2=/^[cdef][\w-]{21}$/,Yf="";function d2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=f2(t);return h2.test(n)?n:Yf}catch{return Yf}}function f2(t){return c2(t).substr(0,22)}/**
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
 */function nh(t){return`${t.appName}!${t.appId}`}/**
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
 */const LA=new Map;function MA(t,e){const n=nh(t);jA(n,e),p2(n,e)}function jA(t,e){const n=LA.get(t);if(n)for(const r of n)r(e)}function p2(t,e){const n=m2();n&&n.postMessage({key:t,fid:e}),g2()}let hi=null;function m2(){return!hi&&"BroadcastChannel"in self&&(hi=new BroadcastChannel("[Firebase] FID Change"),hi.onmessage=t=>{jA(t.data.key,t.data.fid)}),hi}function g2(){LA.size===0&&hi&&(hi.close(),hi=null)}/**
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
 */const _2="firebase-installations-database",y2=1,bi="firebase-installations-store";let gd=null;function eg(){return gd||(gd=Lc(_2,y2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bi)}}})),gd}async function mc(t,e){const n=nh(t),i=(await eg()).transaction(bi,"readwrite"),s=i.objectStore(bi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&MA(t,e.fid),e}async function FA(t){const e=nh(t),r=(await eg()).transaction(bi,"readwrite");await r.objectStore(bi).delete(e),await r.done}async function rh(t,e){const n=nh(t),i=(await eg()).transaction(bi,"readwrite"),s=i.objectStore(bi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&MA(t,a.fid),a}/**
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
 */async function tg(t){let e;const n=await rh(t.appConfig,r=>{const i=v2(r),s=E2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Yf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function v2(t){const e=t||{fid:d2(),registrationStatus:0};return UA(e)}function E2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ni.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=w2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:I2(t)}:{installationEntry:e}}async function w2(t,e){try{const n=await u2(t,e);return mc(t.appConfig,n)}catch(n){throw xA(n)&&n.customData.serverCode===409?await FA(t.appConfig):await mc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function I2(t){let e=await SE(t.appConfig);for(;e.registrationStatus===1;)await OA(100),e=await SE(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await tg(t);return r||n}return e}function SE(t){return rh(t,e=>{if(!e)throw Ni.create("installation-not-found");return UA(e)})}function UA(t){return T2(t)?{fid:t.fid,registrationStatus:0}:t}function T2(t){return t.registrationStatus===1&&t.registrationTime+CA<Date.now()}/**
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
 */async function S2({appConfig:t,heartbeatServiceProvider:e},n){const r=A2(t,n),i=o2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:PA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await VA(()=>fetch(r,a));if(u.ok){const c=await u.json();return NA(c)}else throw await bA("Generate Auth Token",u)}function A2(t,{fid:e}){return`${kA(t)}/${e}/authTokens:generate`}/**
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
 */async function ng(t,e=!1){let n;const r=await rh(t.appConfig,s=>{if(!BA(s))throw Ni.create("not-registered");const o=s.authToken;if(!e&&R2(o))return s;if(o.requestStatus===1)return n=C2(t,e),s;{if(!navigator.onLine)throw Ni.create("app-offline");const a=k2(s);return n=P2(t,a),a}});return n?await n:r.authToken}async function C2(t,e){let n=await AE(t.appConfig);for(;n.authToken.requestStatus===1;)await OA(100),n=await AE(t.appConfig);const r=n.authToken;return r.requestStatus===0?ng(t,e):r}function AE(t){return rh(t,e=>{if(!BA(e))throw Ni.create("not-registered");const n=e.authToken;return N2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function P2(t,e){try{const n=await S2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await mc(t.appConfig,r),n}catch(n){if(xA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await FA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mc(t.appConfig,r)}throw n}}function BA(t){return t!==void 0&&t.registrationStatus===2}function R2(t){return t.requestStatus===2&&!x2(t)}function x2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+n2}function k2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function N2(t){return t.requestStatus===1&&t.requestTime+CA<Date.now()}/**
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
 */async function b2(t){const e=t,{installationEntry:n,registrationPromise:r}=await tg(e);return r?r.catch(console.error):ng(e).catch(console.error),n.fid}/**
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
 */async function D2(t,e=!1){const n=t;return await V2(n),(await ng(n,e)).token}async function V2(t){const{registrationPromise:e}=await tg(t);e&&await e}/**
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
 */function O2(t){if(!t||!t.options)throw _d("App Configuration");if(!t.name)throw _d("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _d(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _d(t){return Ni.create("missing-app-config-values",{valueName:t})}/**
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
 */const $A="installations",L2="installations-internal",M2=t=>{const e=t.getProvider("app").getImmediate(),n=O2(e),r=Mi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},j2=t=>{const e=t.getProvider("app").getImmediate(),n=Mi(e,$A).getImmediate();return{getId:()=>b2(n),getToken:i=>D2(n,i)}};function F2(){fn(new Zt($A,M2,"PUBLIC")),fn(new Zt(L2,j2,"PRIVATE"))}F2();Nt(AA,Zm);Nt(AA,Zm,"esm2017");/**
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
 */const U2="/firebase-messaging-sw.js",B2="/firebase-cloud-messaging-push-scope",zA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",$2="https://fcmregistrations.googleapis.com/v1",qA="google.c.a.c_id",z2="google.c.a.c_l",q2="google.c.a.ts",K2="google.c.a.e";var CE;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(CE||(CE={}));/**
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
 */var Ba;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ba||(Ba={}));/**
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
 */function Vn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function G2(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const yd="fcm_token_details_db",W2=5,PE="fcm_token_object_Store";async function H2(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(yd))return null;let e=null;return(await Lc(yd,W2,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(PE))return;const u=o.objectStore(PE),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:Vn(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Vn(h.auth),p256dh:Vn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Vn(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Vn(h.auth),p256dh:Vn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Vn(h.vapidKey)}}}}}})).close(),await id(yd),await id("fcm_vapid_details_db"),await id("undefined"),Q2(e)?e:null}function Q2(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const J2="firebase-messaging-database",Y2=1,Di="firebase-messaging-store";let vd=null;function rg(){return vd||(vd=Lc(J2,Y2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Di)}}})),vd}async function KA(t){const e=sg(t),r=await(await rg()).transaction(Di).objectStore(Di).get(e);if(r)return r;{const i=await H2(t.appConfig.senderId);if(i)return await ig(t,i),i}}async function ig(t,e){const n=sg(t),i=(await rg()).transaction(Di,"readwrite");return await i.objectStore(Di).put(e,n),await i.done,e}async function X2(t){const e=sg(t),r=(await rg()).transaction(Di,"readwrite");await r.objectStore(Di).delete(e),await r.done}function sg({appConfig:t}){return t.appId}/**
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
 */const Z2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},lt=new Li("messaging","Messaging",Z2);/**
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
 */async function ej(t,e){const n=await ag(t),r=WA(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(og(t.appConfig),i)).json()}catch(o){throw lt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw lt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw lt.create("token-subscribe-no-token");return s.token}async function tj(t,e){const n=await ag(t),r=WA(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${og(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw lt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw lt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw lt.create("token-update-no-token");return s.token}async function GA(t,e){const r={method:"DELETE",headers:await ag(t)};try{const s=await(await fetch(`${og(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw lt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw lt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function og({projectId:t}){return`${$2}/projects/${t}/registrations`}async function ag({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function WA({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==zA&&(i.web.applicationPubKey=r),i}/**
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
 */const nj=7*24*60*60*1e3;async function rj(t){const e=await oj(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Vn(e.getKey("auth")),p256dh:Vn(e.getKey("p256dh"))},r=await KA(t.firebaseDependencies);if(r){if(aj(r.subscriptionOptions,n))return Date.now()>=r.createTime+nj?sj(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await GA(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return RE(t.firebaseDependencies,n)}else return RE(t.firebaseDependencies,n)}async function ij(t){const e=await KA(t.firebaseDependencies);e&&(await GA(t.firebaseDependencies,e.token),await X2(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function sj(t,e){try{const n=await tj(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await ig(t.firebaseDependencies,r),n}catch(n){throw n}}async function RE(t,e){const r={token:await ej(t,e),createTime:Date.now(),subscriptionOptions:e};return await ig(t,r),r.token}async function oj(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:G2(e)})}function aj(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function xE(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return lj(e,t),uj(e,t),cj(e,t),e}function lj(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function uj(t,e){e.data&&(t.data=e.data)}function cj(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const u=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
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
 */function hj(t){return typeof t=="object"&&!!t&&qA in t}/**
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
 */function dj(t){if(!t||!t.options)throw Ed("App Configuration Object");if(!t.name)throw Ed("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ed(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ed(t){return lt.create("missing-app-config-values",{valueName:t})}/**
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
 */class fj{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=dj(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function HA(t){try{t.swRegistration=await navigator.serviceWorker.register(U2,{scope:B2}),t.swRegistration.update().catch(()=>{})}catch(e){throw lt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function pj(t,e){if(!e&&!t.swRegistration&&await HA(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw lt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function mj(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=zA)}/**
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
 */async function QA(t,e){if(!navigator)throw lt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw lt.create("permission-blocked");return await mj(t,e==null?void 0:e.vapidKey),await pj(t,e==null?void 0:e.serviceWorkerRegistration),rj(t)}/**
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
 */async function gj(t,e,n){const r=_j(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[qA],message_name:n[z2],message_time:n[q2],message_device_time:Math.floor(Date.now()/1e3)})}function _j(t){switch(t){case Ba.NOTIFICATION_CLICKED:return"notification_open";case Ba.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function yj(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ba.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(xE(n)):t.onMessageHandler.next(xE(n)));const r=n.data;hj(r)&&r[K2]==="1"&&await gj(t,n.messageType,r)}const kE="@firebase/messaging",NE="0.12.12";/**
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
 */const vj=t=>{const e=new fj(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>yj(e,n)),e},Ej=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>QA(e,r)}};function wj(){fn(new Zt("messaging",vj,"PUBLIC")),fn(new Zt("messaging-internal",Ej,"PRIVATE")),Nt(kE,NE),Nt(kE,NE,"esm2017")}/**
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
 */async function JA(){try{await mT()}catch{return!1}return typeof window<"u"&&Hp()&&Sk()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function Ij(t){if(!navigator)throw lt.create("only-available-in-window");return t.swRegistration||await HA(t),ij(t)}/**
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
 */function bE(t=Yp()){return JA().then(e=>{if(!e)throw lt.create("unsupported-browser")},e=>{throw lt.create("indexed-db-unsupported")}),Mi(Te(t),"messaging").getImmediate()}async function DE(t,e){return t=Te(t),QA(t,e)}function Tj(t){return t=Te(t),Ij(t)}wj();function Sj(t){const[e,n]=k.useState("verification"),[r,i]=k.useState(!1),s=typeof window<"u"&&(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0),o=typeof navigator<"u"&&/iphone|ipad|ipod/i.test(navigator.userAgent);k.useEffect(()=>{let c=!1;async function h(){if(!await JA().catch(()=>!1)||o&&!s){c||n("indisponible");return}if(Notification.permission==="denied"){c||n("refuse");return}c||n(Notification.permission==="granted"?"actif":"inactif")}return h(),()=>{c=!0}},[o,s]);const a=k.useCallback(async()=>{if(t){i(!0);try{const c=await Notification.requestPermission();if(c!=="granted"){n(c==="denied"?"refuse":"inactif");return}const h=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),f=bE(Ua),g=await DE(f,{vapidKey:fE,serviceWorkerRegistration:h});if(!g){n("inactif");return}await Ye(Xe,"enregistrerAppareil")({jeton:g}),n("actif")}catch{n("inactif")}finally{i(!1)}}},[t]),u=k.useCallback(async()=>{i(!0);try{const c=bE(Ua),h=await DE(c,{vapidKey:fE}).catch(()=>null);h&&(await Ye(Xe,"retirerAppareil")({jeton:h}),await Tj(c).catch(()=>{})),n("inactif")}finally{i(!1)}},[]);return{etat:e,enCours:r,activer:a,desactiver:u,iOS:o,installee:s}}const Aj=[["matinDuMatch","Le matin du match","Vers 9h, avec la chaîne"],["uneHeureAvant","1 heure avant","Rappel avant le coup d'envoi"],["coupDEnvoi","Au coup d'envoi","Le match commence"],["actuImportante","Actu importante","Mercato, blessure, groupe"],["touteActu","Toute l'actu","Chaque article publié"]];function Cj(){var y,A,C;const{utilisateur:t,deconnexion:e}=sl(),{preferences:n,enregistrer:r}=so(),{etat:i,enCours:s,activer:o,desactiver:a,iOS:u,installee:c}=Sj(t),[h,f]=k.useState([]),[g,v]=k.useState([]),[P,N]=k.useState(null),[D,S]=k.useState(""),[E,w]=k.useState(!1);k.useEffect(()=>{Jm().then(f),fA().then(v)},[]),k.useEffect(()=>{S("")},[P]);const b=(n==null?void 0:n.clubsSuivis)||[],F=k.useMemo(()=>{var I;if(P==="nation")return fc(g,D);const R=(I=n==null?void 0:n.clubFavori)==null?void 0:I.id,x=fc(h,D);return P==="suivis"?x.filter(fe=>fe.id!==R):x},[P,h,g,D,n]),j=R=>{var x;r({notifications:{...(n==null?void 0:n.notifications)||{},[R]:!((x=n==null?void 0:n.notifications)!=null&&x[R])}})},T=R=>{if(P==="favori"){r({clubFavori:R,clubsSuivis:b.filter(I=>I.id!==R.id)}),N(null);return}if(P==="nation"){r({nationFavorite:R}),N(null);return}b.some(I=>I.id===R.id)?r({clubsSuivis:b.filter(I=>I.id!==R.id)}):b.length<ci&&r({clubsSuivis:[...b,R]})};return m.jsxs(m.Fragment,{children:[m.jsxs("section",{className:"section",children:[m.jsx("div",{className:"section__tete",children:m.jsx("h2",{className:"section__titre",children:"Tes clubs"})}),m.jsxs("div",{className:"etiquettes",children:[m.jsxs("button",{className:"etiquette etiquette--favori",onClick:()=>N("favori"),children:[((y=n==null?void 0:n.clubFavori)==null?void 0:y.court)||((A=n==null?void 0:n.clubFavori)==null?void 0:A.nom)||"Choisir"," · favori"]}),b.map(R=>m.jsx("button",{className:"etiquette",onClick:()=>N("suivis"),children:R.court||R.nom},R.id)),b.length<ci&&m.jsxs("button",{className:"etiquette etiquette--ajout",onClick:()=>N("suivis"),children:["+ Ajouter (",ci-b.length," restants)"]})]}),m.jsx("div",{className:"etiquettes etiquettes--suite",children:m.jsxs("button",{className:"etiquette etiquette--favori",onClick:()=>N("nation"),children:[((C=n==null?void 0:n.nationFavorite)==null?void 0:C.nom)||"Choisir"," · sélection"]})})]}),m.jsxs("section",{className:"section",children:[m.jsx("div",{className:"section__tete",children:m.jsx("h2",{className:"section__titre",children:"Notifications"})}),i==="indisponible"&&m.jsx("p",{className:"avis",children:u&&!c?"Ajoute d'abord l'app à ton écran d'accueil : sur iPhone, c'est la seule façon de recevoir les notifications.":"Ce navigateur ne gère pas les notifications."}),i==="refuse"&&m.jsx("p",{className:"avis",children:"Les notifications sont bloquées pour ce site. Réactive-les dans les réglages de ton navigateur."}),i==="inactif"&&m.jsx("button",{className:"bouton-plein",onClick:o,disabled:s,children:s?"Activation…":"Activer les notifications"}),i==="actif"&&m.jsxs(m.Fragment,{children:[m.jsx("ul",{className:"lignes",children:Aj.map(([R,x,I])=>{var fe,Oe;return m.jsxs("li",{className:"ligne",children:[m.jsxs("div",{children:[m.jsx("p",{className:"ligne__titre",children:x}),m.jsx("p",{className:"ligne__detail",children:I})]}),m.jsx("button",{className:`bascule${(fe=n==null?void 0:n.notifications)!=null&&fe[R]?" bascule--on":""}`,onClick:()=>j(R),role:"switch","aria-checked":!!((Oe=n==null?void 0:n.notifications)!=null&&Oe[R]),"aria-label":x})]},R)})}),m.jsx("button",{className:"bouton-discret",onClick:a,disabled:s,children:"Ne plus rien recevoir sur cet appareil"})]})]}),m.jsxs("section",{className:"section",children:[m.jsx("div",{className:"section__tete",children:m.jsx("h2",{className:"section__titre",children:"Ton compte"})}),m.jsx("p",{className:"avis avis--doux",children:t==null?void 0:t.email}),m.jsx("button",{className:"bouton-discret",onClick:()=>w(!0),children:"Se déconnecter"})]}),P&&m.jsx("div",{className:"selecteur",onClick:()=>N(null),children:m.jsxs("div",{className:"selecteur__panneau",onClick:R=>R.stopPropagation(),children:[m.jsxs("div",{className:"selecteur__tete",children:[m.jsx("h3",{className:"selecteur__titre",children:P==="favori"?"Ton club":P==="nation"?"Ta sélection":"Tes clubs suivis"}),m.jsx("button",{className:"selecteur__fermer",onClick:()=>N(null),"aria-label":"Fermer",children:"×"})]}),m.jsx("input",{className:"selecteur__recherche",type:"search",value:D,onChange:R=>S(R.target.value),placeholder:"Chercher",autoFocus:!0}),m.jsx("ul",{className:"selecteur__liste",children:F.map(R=>{var fe,Oe;const x=P==="favori"?((fe=n==null?void 0:n.clubFavori)==null?void 0:fe.id)===R.id:P==="nation"?((Oe=n==null?void 0:n.nationFavorite)==null?void 0:Oe.id)===R.id:b.some(xn=>xn.id===R.id),I=P==="suivis"&&!x&&b.length>=ci;return m.jsx("li",{children:m.jsxs("button",{className:`selecteur__choix${x?" selecteur__choix--actif":""}`,onClick:()=>T(R),disabled:I,children:[R.nom,x&&P==="suivis"&&m.jsx("span",{className:"selecteur__marque",children:"Retirer"})]})},R.id)})})]})}),m.jsx(Xm,{ouvert:E,message:"Te déconnecter de cet appareil ?",texteConfirmer:"Se déconnecter",onConfirm:()=>{w(!1),e()},onCancel:()=>w(!1)})]})}function Pj(){const{utilisateur:t,chargement:e,deconnexion:n}=sl(),{preferences:r,chargement:i}=so(),{actus:s}=dA(),o=JL(s),[a,u]=k.useState(!1),[c,h]=k.useState(null),f=!e&&!i;if(!a)return m.jsx(XL,{pret:f,onTermine:()=>u(!0)});if(!t)return m.jsx(lM,{});if(r&&!r.onboardingTermine)return m.jsx(uM,{});const g=(t.displayName||t.email||"?").charAt(0).toUpperCase();return m.jsxs("div",{className:"shell",children:[m.jsx(tM,{}),m.jsx("header",{className:"shell__header",children:m.jsxs("div",{className:"marque",children:[m.jsxs("h1",{className:"marque__logo",children:["Ici c'est ",m.jsx("em",{children:"ton"})," Paris"]}),m.jsx("span",{className:"marque__profil","aria-label":"Profil",children:g})]})}),m.jsxs("main",{className:"shell__main",children:[m.jsxs(Hx,{children:[m.jsx(bn,{path:"/",element:m.jsx(PM,{onOuvrirArticle:h})}),m.jsx(bn,{path:"/matchs",element:m.jsx(DM,{})}),m.jsx(bn,{path:"/compo",element:m.jsx(LM,{})}),m.jsx(bn,{path:"/classement",element:m.jsx($M,{})}),m.jsx(bn,{path:"/effectif",element:m.jsx(KM,{})}),m.jsx(bn,{path:"/mercato",element:m.jsx(e2,{})}),m.jsx(bn,{path:"/reglages",element:m.jsx(Cj,{})}),m.jsx(bn,{path:"*",element:m.jsx(Gx,{to:"/",replace:!0})})]}),m.jsx("div",{className:"shell__fin"})]}),m.jsx(rM,{}),m.jsx(iM,{actu:c,onFermer:()=>h(null)}),m.jsx(oM,{ouvert:o.ouvert,actus:o.actus,onFermer:o.fermer,onOuvrirArticle:h}),m.jsx(aM,{})]})}function Rj(){return m.jsx(nk,{children:m.jsx(QL,{children:m.jsx(GL,{children:m.jsx(WL,{children:m.jsx(Pj,{})})})})})}sx({onNeedRefresh(){},onOfflineReady(){}});GI(document.getElementById("root")).render(m.jsx(k.StrictMode,{children:m.jsx(Rj,{})}));
