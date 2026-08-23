function OC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function MC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var GE={exports:{}},Tc={},WE={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),LC=Symbol.for("react.portal"),jC=Symbol.for("react.fragment"),FC=Symbol.for("react.strict_mode"),UC=Symbol.for("react.profiler"),BC=Symbol.for("react.provider"),$C=Symbol.for("react.context"),zC=Symbol.for("react.forward_ref"),qC=Symbol.for("react.suspense"),KC=Symbol.for("react.memo"),GC=Symbol.for("react.lazy"),g_=Symbol.iterator;function WC(t){return t===null||typeof t!="object"?null:(t=g_&&t[g_]||t["@@iterator"],typeof t=="function"?t:null)}var HE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},QE=Object.assign,JE={};function Js(t,e,n){this.props=t,this.context=e,this.refs=JE,this.updater=n||HE}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function YE(){}YE.prototype=Js.prototype;function ap(t,e,n){this.props=t,this.context=e,this.refs=JE,this.updater=n||HE}var lp=ap.prototype=new YE;lp.constructor=ap;QE(lp,Js.prototype);lp.isPureReactComponent=!0;var __=Array.isArray,XE=Object.prototype.hasOwnProperty,up={current:null},ZE={key:!0,ref:!0,__self:!0,__source:!0};function ew(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)XE.call(e,r)&&!ZE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qa,type:t,key:s,ref:o,props:i,_owner:up.current}}function HC(t,e){return{$$typeof:Qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qa}function QC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var y_=/\/+/g;function Oh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?QC(""+t.key):e.toString(36)}function iu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qa:case LC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Oh(o,0):r,__(i)?(n="",t!=null&&(n=t.replace(y_,"$&/")+"/"),iu(i,e,n,"",function(c){return c})):i!=null&&(cp(i)&&(i=HC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(y_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",__(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Oh(s,a);o+=iu(s,e,n,l,i)}else if(l=WC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Oh(s,a++),o+=iu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Nl(t,e,n){if(t==null)return t;var r=[],i=0;return iu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},su={transition:null},YC={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:su,ReactCurrentOwner:up};function tw(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Nl,forEach:function(t,e,n){Nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Nl(t,function(){e++}),e},toArray:function(t){return Nl(t,function(e){return e})||[]},only:function(t){if(!cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Js;se.Fragment=jC;se.Profiler=UC;se.PureComponent=ap;se.StrictMode=FC;se.Suspense=qC;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YC;se.act=tw;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=QE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=up.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)XE.call(e,l)&&!ZE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Qa,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:$C,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BC,_context:t},t.Consumer=t};se.createElement=ew;se.createFactory=function(t){var e=ew.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:zC,render:t}};se.isValidElement=cp;se.lazy=function(t){return{$$typeof:GC,_payload:{_status:-1,_result:t},_init:JC}};se.memo=function(t,e){return{$$typeof:KC,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=su.transition;su.transition={};try{t()}finally{su.transition=e}};se.unstable_act=tw;se.useCallback=function(t,e){return St.current.useCallback(t,e)};se.useContext=function(t){return St.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return St.current.useDeferredValue(t)};se.useEffect=function(t,e){return St.current.useEffect(t,e)};se.useId=function(){return St.current.useId()};se.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return St.current.useMemo(t,e)};se.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};se.useRef=function(t){return St.current.useRef(t)};se.useState=function(t){return St.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return St.current.useTransition()};se.version="18.3.1";WE.exports=se;var R=WE.exports;const XC=MC(R),ZC=OC({__proto__:null,default:XC},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=R,tx=Symbol.for("react.element"),nx=Symbol.for("react.fragment"),rx=Object.prototype.hasOwnProperty,ix=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sx={key:!0,ref:!0,__self:!0,__source:!0};function nw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rx.call(e,r)&&!sx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tx,type:t,key:s,ref:o,props:i,_owner:ix.current}}Tc.Fragment=nx;Tc.jsx=nw;Tc.jsxs=nw;GE.exports=Tc;var f=GE.exports,rw={exports:{}},zt={},iw={exports:{}},sw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Y){var te=q.length;q.push(Y);e:for(;0<te;){var ye=te-1>>>1,de=q[ye];if(0<i(de,Y))q[ye]=Y,q[te]=de,te=ye;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Y=q[0],te=q.pop();if(te!==Y){q[0]=te;e:for(var ye=0,de=q.length,Ie=de>>>1;ye<Ie;){var pt=2*(ye+1)-1,rn=q[pt],sn=pt+1,on=q[sn];if(0>i(rn,te))sn<de&&0>i(on,rn)?(q[ye]=on,q[sn]=te,ye=sn):(q[ye]=rn,q[pt]=te,ye=pt);else if(sn<de&&0>i(on,te))q[ye]=on,q[sn]=te,ye=sn;else break e}}return Y}function i(q,Y){var te=q.sortIndex-Y.sortIndex;return te!==0?te:q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,p=null,g=3,w=!1,I=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(q){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=q)r(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function b(q){if(k=!1,y(q),!I)if(n(l)!==null)I=!0,Kt(M);else{var Y=n(c);Y!==null&&Gt(b,Y.startTime-q)}}function M(q,Y){I=!1,k&&(k=!1,T(v),v=-1),w=!0;var te=g;try{for(y(Y),p=n(l);p!==null&&(!(p.expirationTime>Y)||q&&!P());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,g=p.priorityLevel;var de=ye(p.expirationTime<=Y);Y=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(l)&&r(l),y(Y)}else r(l);p=n(l)}if(p!==null)var Ie=!0;else{var pt=n(c);pt!==null&&Gt(b,pt.startTime-Y),Ie=!1}return Ie}finally{p=null,g=te,w=!1}}var F=!1,S=null,v=-1,C=5,x=-1;function P(){return!(t.unstable_now()-x<C)}function N(){if(S!==null){var q=t.unstable_now();x=q;var Y=!0;try{Y=S(!0,q)}finally{Y?A():(F=!1,S=null)}}else F=!1}var A;if(typeof E=="function")A=function(){E(N)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,G=ie.port2;ie.port1.onmessage=N,A=function(){G.postMessage(null)}}else A=function(){D(N,0)};function Kt(q){S=q,F||(F=!0,A())}function Gt(q,Y){v=D(function(){q(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){I||w||(I=!0,Kt(M))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(q){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var te=g;g=Y;try{return q()}finally{g=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Y){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var te=g;g=q;try{return Y()}finally{g=te}},t.unstable_scheduleCallback=function(q,Y,te){var ye=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ye+te:ye):te=ye,q){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=te+de,q={id:h++,callback:Y,priorityLevel:q,startTime:te,expirationTime:de,sortIndex:-1},te>ye?(q.sortIndex=te,e(c,q),n(l)===null&&q===n(c)&&(k?(T(v),v=-1):k=!0,Gt(b,te-ye))):(q.sortIndex=de,e(l,q),I||w||(I=!0,Kt(M))),q},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(q){var Y=g;return function(){var te=g;g=Y;try{return q.apply(this,arguments)}finally{g=te}}}})(sw);iw.exports=sw;var ox=iw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=R,Bt=ox;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ow=new Set,fa={};function ji(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(fa[t]=e,t=0;t<e.length;t++)ow.add(e[t])}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pd=Object.prototype.hasOwnProperty,lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v_={},E_={};function ux(t){return Pd.call(E_,t)?!0:Pd.call(v_,t)?!1:lx.test(t)?E_[t]=!0:(v_[t]=!0,!1)}function cx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hx(t,e,n,r){if(e===null||typeof e>"u"||cx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var hp=/[\-:]([a-z])/g;function dp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hp,dp);nt[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hp,dp);nt[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hp,dp);nt[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function fp(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hx(e,n,i,r)&&(n=null),r||i===null?ux(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zn=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),aw=Symbol.for("react.provider"),lw=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),gp=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),uw=Symbol.for("react.offscreen"),w_=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=w_&&t[w_]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Mh;function Bo(t){if(Mh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mh=e&&e[1]||""}return`
`+Mh+t}var Lh=!1;function jh(t,e){if(!t||Lh)return"";Lh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function dx(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=jh(t.type,!1),t;case 11:return t=jh(t.type.render,!1),t;case 1:return t=jh(t.type,!0),t;default:return""}}function bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case as:return"Portal";case Rd:return"Profiler";case pp:return"StrictMode";case Nd:return"Suspense";case kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lw:return(t.displayName||"Context")+".Consumer";case aw:return(t._context.displayName||"Context")+".Provider";case mp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gp:return e=t.displayName||null,e!==null?e:bd(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return bd(t(e))}catch{}}return null}function fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(e);case 8:return e===pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function px(t){var e=cw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bl(t){t._valueTracker||(t._valueTracker=px(t))}function hw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Nu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dd(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function I_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dw(t,e){e=e.checked,e!=null&&fp(t,"checked",e,!1)}function Vd(t,e){dw(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Od(t,e.type,n):e.hasOwnProperty("defaultValue")&&Od(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function T_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Od(t,e,n){(e!=="number"||Nu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function Es(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function S_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if($o(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function fw(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function A_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ld(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Dl,mw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Dl=Dl||document.createElement("div"),Dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mx=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){mx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function gw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function _w(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gx=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jd(t,e){if(e){if(gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ud=null;function _p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bd=null,ws=null,Is=null;function C_(t){if(t=Xa(t)){if(typeof Bd!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Pc(e),Bd(t.stateNode,t.type,e))}}function yw(t){ws?Is?Is.push(t):Is=[t]:ws=t}function vw(){if(ws){var t=ws,e=Is;if(Is=ws=null,C_(t),e)for(t=0;t<e.length;t++)C_(e[t])}}function Ew(t,e){return t(e)}function ww(){}var Fh=!1;function Iw(t,e,n){if(Fh)return t(e,n);Fh=!0;try{return Ew(t,e,n)}finally{Fh=!1,(ws!==null||Is!==null)&&(ww(),vw())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=Pc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var $d=!1;if(Gn)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){$d=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{$d=!1}function _x(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Zo=!1,ku=null,bu=!1,zd=null,yx={onError:function(t){Zo=!0,ku=t}};function vx(t,e,n,r,i,s,o,a,l){Zo=!1,ku=null,_x.apply(yx,arguments)}function Ex(t,e,n,r,i,s,o,a,l){if(vx.apply(this,arguments),Zo){if(Zo){var c=ku;Zo=!1,ku=null}else throw Error(B(198));bu||(bu=!0,zd=c)}}function Fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x_(t){if(Fi(t)!==t)throw Error(B(188))}function wx(t){var e=t.alternate;if(!e){if(e=Fi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return x_(i),t;if(s===r)return x_(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Sw(t){return t=wx(t),t!==null?Aw(t):null}function Aw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Aw(t);if(e!==null)return e;t=t.sibling}return null}var Cw=Bt.unstable_scheduleCallback,P_=Bt.unstable_cancelCallback,Ix=Bt.unstable_shouldYield,Tx=Bt.unstable_requestPaint,Me=Bt.unstable_now,Sx=Bt.unstable_getCurrentPriorityLevel,yp=Bt.unstable_ImmediatePriority,xw=Bt.unstable_UserBlockingPriority,Du=Bt.unstable_NormalPriority,Ax=Bt.unstable_LowPriority,Pw=Bt.unstable_IdlePriority,Sc=null,Cn=null;function Cx(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Sc,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:Rx,xx=Math.log,Px=Math.LN2;function Rx(t){return t>>>=0,t===0?32:31-(xx(t)/Px|0)|0}var Vl=64,Ol=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=zo(a):(s&=o,s!==0&&(r=zo(s)))}else o=n&~i,o!==0?r=zo(o):s!==0&&(r=zo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),i=1<<n,r|=t[n],e&=~i;return r}function Nx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Nx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function qd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rw(){var t=Vl;return Vl<<=1,!(Vl&4194240)&&(Vl=64),t}function Uh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function bx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function Nw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kw,Ep,bw,Dw,Vw,Kd=!1,Ml=[],Tr=null,Sr=null,Ar=null,ga=new Map,_a=new Map,dr=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function R_(t,e){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Ro(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xa(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Vx(t,e,n,r,i){switch(e){case"focusin":return Tr=Ro(Tr,t,e,n,r,i),!0;case"dragenter":return Sr=Ro(Sr,t,e,n,r,i),!0;case"mouseover":return Ar=Ro(Ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,Ro(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_a.set(s,Ro(_a.get(s)||null,t,e,n,r,i)),!0}return!1}function Ow(t){var e=ui(t.target);if(e!==null){var n=Fi(e);if(n!==null){if(e=n.tag,e===13){if(e=Tw(n),e!==null){t.blockedOn=e,Vw(t.priority,function(){bw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ud=r,n.target.dispatchEvent(r),Ud=null}else return e=Xa(n),e!==null&&Ep(e),t.blockedOn=n,!1;e.shift()}return!0}function N_(t,e,n){ou(t)&&n.delete(e)}function Ox(){Kd=!1,Tr!==null&&ou(Tr)&&(Tr=null),Sr!==null&&ou(Sr)&&(Sr=null),Ar!==null&&ou(Ar)&&(Ar=null),ga.forEach(N_),_a.forEach(N_)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,Kd||(Kd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,Ox)))}function ya(t){function e(i){return No(i,t)}if(0<Ml.length){No(Ml[0],t);for(var n=1;n<Ml.length;n++){var r=Ml[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tr!==null&&No(Tr,t),Sr!==null&&No(Sr,t),Ar!==null&&No(Ar,t),ga.forEach(e),_a.forEach(e),n=0;n<dr.length;n++)r=dr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)Ow(n),n.blockedOn===null&&dr.shift()}var Ts=Zn.ReactCurrentBatchConfig,Ou=!0;function Mx(t,e,n,r){var i=pe,s=Ts.transition;Ts.transition=null;try{pe=1,wp(t,e,n,r)}finally{pe=i,Ts.transition=s}}function Lx(t,e,n,r){var i=pe,s=Ts.transition;Ts.transition=null;try{pe=4,wp(t,e,n,r)}finally{pe=i,Ts.transition=s}}function wp(t,e,n,r){if(Ou){var i=Gd(t,e,n,r);if(i===null)Jh(t,e,r,Mu,n),R_(t,r);else if(Vx(i,t,e,n,r))r.stopPropagation();else if(R_(t,r),e&4&&-1<Dx.indexOf(t)){for(;i!==null;){var s=Xa(i);if(s!==null&&kw(s),s=Gd(t,e,n,r),s===null&&Jh(t,e,r,Mu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jh(t,e,r,null,n)}}var Mu=null;function Gd(t,e,n,r){if(Mu=null,t=_p(r),t=ui(t),t!==null)if(e=Fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mu=t,null}function Mw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sx()){case yp:return 1;case xw:return 4;case Du:case Ax:return 16;case Pw:return 536870912;default:return 16}default:return 16}}var vr=null,Ip=null,au=null;function Lw(){if(au)return au;var t,e=Ip,n=e.length,r,i="value"in vr?vr.value:vr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return au=i.slice(t,1<r?1-r:void 0)}function lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function k_(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ll:k_,this.isPropagationStopped=k_,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tp=qt(Ys),Ya=be({},Ys,{view:0,detail:0}),jx=qt(Ya),Bh,$h,ko,Ac=be({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ko&&(ko&&t.type==="mousemove"?(Bh=t.screenX-ko.screenX,$h=t.screenY-ko.screenY):$h=Bh=0,ko=t),Bh)},movementY:function(t){return"movementY"in t?t.movementY:$h}}),b_=qt(Ac),Fx=be({},Ac,{dataTransfer:0}),Ux=qt(Fx),Bx=be({},Ya,{relatedTarget:0}),zh=qt(Bx),$x=be({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),zx=qt($x),qx=be({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kx=qt(qx),Gx=be({},Ys,{data:0}),D_=qt(Gx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qx[t])?!!e[t]:!1}function Sp(){return Jx}var Yx=be({},Ya,{key:function(t){if(t.key){var e=Wx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sp,charCode:function(t){return t.type==="keypress"?lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xx=qt(Yx),Zx=be({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),V_=qt(Zx),eP=be({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sp}),tP=qt(eP),nP=be({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),rP=qt(nP),iP=be({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sP=qt(iP),oP=[9,13,27,32],Ap=Gn&&"CompositionEvent"in window,ea=null;Gn&&"documentMode"in document&&(ea=document.documentMode);var aP=Gn&&"TextEvent"in window&&!ea,jw=Gn&&(!Ap||ea&&8<ea&&11>=ea),O_=" ",M_=!1;function Fw(t,e){switch(t){case"keyup":return oP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function lP(t,e){switch(t){case"compositionend":return Uw(e);case"keypress":return e.which!==32?null:(M_=!0,O_);case"textInput":return t=e.data,t===O_&&M_?null:t;default:return null}}function uP(t,e){if(us)return t==="compositionend"||!Ap&&Fw(t,e)?(t=Lw(),au=Ip=vr=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jw&&e.locale!=="ko"?null:e.data;default:return null}}var cP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cP[t.type]:e==="textarea"}function Bw(t,e,n,r){yw(r),e=Lu(e,"onChange"),0<e.length&&(n=new Tp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ta=null,va=null;function hP(t){Xw(t,0)}function Cc(t){var e=ds(t);if(hw(e))return t}function dP(t,e){if(t==="change")return e}var $w=!1;if(Gn){var qh;if(Gn){var Kh="oninput"in document;if(!Kh){var j_=document.createElement("div");j_.setAttribute("oninput","return;"),Kh=typeof j_.oninput=="function"}qh=Kh}else qh=!1;$w=qh&&(!document.documentMode||9<document.documentMode)}function F_(){ta&&(ta.detachEvent("onpropertychange",zw),va=ta=null)}function zw(t){if(t.propertyName==="value"&&Cc(va)){var e=[];Bw(e,va,t,_p(t)),Iw(hP,e)}}function fP(t,e,n){t==="focusin"?(F_(),ta=e,va=n,ta.attachEvent("onpropertychange",zw)):t==="focusout"&&F_()}function pP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(va)}function mP(t,e){if(t==="click")return Cc(e)}function gP(t,e){if(t==="input"||t==="change")return Cc(e)}function _P(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pn=typeof Object.is=="function"?Object.is:_P;function Ea(t,e){if(pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pd.call(e,i)||!pn(t[i],e[i]))return!1}return!0}function U_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function B_(t,e){var n=U_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=U_(n)}}function qw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kw(){for(var t=window,e=Nu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nu(t.document)}return e}function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yP(t){var e=Kw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qw(n.ownerDocument.documentElement,n)){if(r!==null&&Cp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=B_(n,s);var o=B_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vP=Gn&&"documentMode"in document&&11>=document.documentMode,cs=null,Wd=null,na=null,Hd=!1;function $_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||cs==null||cs!==Nu(r)||(r=cs,"selectionStart"in r&&Cp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),na&&Ea(na,r)||(na=r,r=Lu(Wd,"onSelect"),0<r.length&&(e=new Tp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cs)))}function jl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:jl("Animation","AnimationEnd"),animationiteration:jl("Animation","AnimationIteration"),animationstart:jl("Animation","AnimationStart"),transitionend:jl("Transition","TransitionEnd")},Gh={},Gw={};Gn&&(Gw=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function xc(t){if(Gh[t])return Gh[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gw)return Gh[t]=e[n];return t}var Ww=xc("animationend"),Hw=xc("animationiteration"),Qw=xc("animationstart"),Jw=xc("transitionend"),Yw=new Map,z_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){Yw.set(t,e),ji(e,[t])}for(var Wh=0;Wh<z_.length;Wh++){var Hh=z_[Wh],EP=Hh.toLowerCase(),wP=Hh[0].toUpperCase()+Hh.slice(1);Ur(EP,"on"+wP)}Ur(Ww,"onAnimationEnd");Ur(Hw,"onAnimationIteration");Ur(Qw,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(Jw,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IP=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function q_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ex(r,e,void 0,t),t.currentTarget=null}function Xw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;q_(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;q_(i,a,c),s=l}}}if(bu)throw t=zd,bu=!1,zd=null,t}function Ee(t,e){var n=e[Zd];n===void 0&&(n=e[Zd]=new Set);var r=t+"__bubble";n.has(r)||(Zw(e,t,2,!1),n.add(r))}function Qh(t,e,n){var r=0;e&&(r|=4),Zw(n,t,r,e)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[Fl]){t[Fl]=!0,ow.forEach(function(n){n!=="selectionchange"&&(IP.has(n)||Qh(n,!1,t),Qh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fl]||(e[Fl]=!0,Qh("selectionchange",!1,e))}}function Zw(t,e,n,r){switch(Mw(e)){case 1:var i=Mx;break;case 4:i=Lx;break;default:i=wp}n=i.bind(null,e,n,t),i=void 0,!$d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ui(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Iw(function(){var c=s,h=_p(n),p=[];e:{var g=Yw.get(t);if(g!==void 0){var w=Tp,I=t;switch(t){case"keypress":if(lu(n)===0)break e;case"keydown":case"keyup":w=Xx;break;case"focusin":I="focus",w=zh;break;case"focusout":I="blur",w=zh;break;case"beforeblur":case"afterblur":w=zh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=b_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=tP;break;case Ww:case Hw:case Qw:w=zx;break;case Jw:w=rP;break;case"scroll":w=jx;break;case"wheel":w=sP;break;case"copy":case"cut":case"paste":w=Kx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=V_}var k=(e&4)!==0,D=!k&&t==="scroll",T=k?g!==null?g+"Capture":null:g;k=[];for(var E=c,y;E!==null;){y=E;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,T!==null&&(b=ma(E,T),b!=null&&k.push(Ia(E,b,y)))),D)break;E=E.return}0<k.length&&(g=new w(g,I,null,n,h),p.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==Ud&&(I=n.relatedTarget||n.fromElement)&&(ui(I)||I[Wn]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(I=n.relatedTarget||n.toElement,w=c,I=I?ui(I):null,I!==null&&(D=Fi(I),I!==D||I.tag!==5&&I.tag!==6)&&(I=null)):(w=null,I=c),w!==I)){if(k=b_,b="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(k=V_,b="onPointerLeave",T="onPointerEnter",E="pointer"),D=w==null?g:ds(w),y=I==null?g:ds(I),g=new k(b,E+"leave",w,n,h),g.target=D,g.relatedTarget=y,b=null,ui(h)===c&&(k=new k(T,E+"enter",I,n,h),k.target=y,k.relatedTarget=D,b=k),D=b,w&&I)t:{for(k=w,T=I,E=0,y=k;y;y=Yi(y))E++;for(y=0,b=T;b;b=Yi(b))y++;for(;0<E-y;)k=Yi(k),E--;for(;0<y-E;)T=Yi(T),y--;for(;E--;){if(k===T||T!==null&&k===T.alternate)break t;k=Yi(k),T=Yi(T)}k=null}else k=null;w!==null&&K_(p,g,w,k,!1),I!==null&&D!==null&&K_(p,D,I,k,!0)}}e:{if(g=c?ds(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var M=dP;else if(L_(g))if($w)M=gP;else{M=pP;var F=fP}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=mP);if(M&&(M=M(t,c))){Bw(p,M,n,h);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Od(g,"number",g.value)}switch(F=c?ds(c):window,t){case"focusin":(L_(F)||F.contentEditable==="true")&&(cs=F,Wd=c,na=null);break;case"focusout":na=Wd=cs=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,$_(p,n,h);break;case"selectionchange":if(vP)break;case"keydown":case"keyup":$_(p,n,h)}var S;if(Ap)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else us?Fw(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(jw&&n.locale!=="ko"&&(us||v!=="onCompositionStart"?v==="onCompositionEnd"&&us&&(S=Lw()):(vr=h,Ip="value"in vr?vr.value:vr.textContent,us=!0)),F=Lu(c,v),0<F.length&&(v=new D_(v,t,null,n,h),p.push({event:v,listeners:F}),S?v.data=S:(S=Uw(n),S!==null&&(v.data=S)))),(S=aP?lP(t,n):uP(t,n))&&(c=Lu(c,"onBeforeInput"),0<c.length&&(h=new D_("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=S))}Xw(p,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(Ia(t,s,i)),s=ma(t,e),s!=null&&r.push(Ia(t,s,i))),t=t.return}return r}function Yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function K_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ma(n,s),l!=null&&o.unshift(Ia(n,l,a))):i||(l=ma(n,s),l!=null&&o.push(Ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TP=/\r\n?/g,SP=/\u0000|\uFFFD/g;function G_(t){return(typeof t=="string"?t:""+t).replace(TP,`
`).replace(SP,"")}function Ul(t,e,n){if(e=G_(e),G_(t)!==e&&n)throw Error(B(425))}function ju(){}var Qd=null,Jd=null;function Yd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xd=typeof setTimeout=="function"?setTimeout:void 0,AP=typeof clearTimeout=="function"?clearTimeout:void 0,W_=typeof Promise=="function"?Promise:void 0,CP=typeof queueMicrotask=="function"?queueMicrotask:typeof W_<"u"?function(t){return W_.resolve(null).then(t).catch(xP)}:Xd;function xP(t){setTimeout(function(){throw t})}function Yh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ya(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ya(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function H_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),In="__reactFiber$"+Xs,Ta="__reactProps$"+Xs,Wn="__reactContainer$"+Xs,Zd="__reactEvents$"+Xs,PP="__reactListeners$"+Xs,RP="__reactHandles$"+Xs;function ui(t){var e=t[In];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[In]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=H_(t);t!==null;){if(n=t[In])return n;t=H_(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[In]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Pc(t){return t[Ta]||null}var ef=[],fs=-1;function Br(t){return{current:t}}function we(t){0>fs||(t.current=ef[fs],ef[fs]=null,fs--)}function _e(t,e){fs++,ef[fs]=t.current,t.current=e}var Mr={},ft=Br(Mr),Nt=Br(!1),wi=Mr;function bs(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Fu(){we(Nt),we(ft)}function Q_(t,e,n){if(ft.current!==Mr)throw Error(B(168));_e(ft,e),_e(Nt,n)}function eI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,fx(t)||"Unknown",i));return be({},n,r)}function Uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,wi=ft.current,_e(ft,t),_e(Nt,Nt.current),!0}function J_(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=eI(t,e,wi),r.__reactInternalMemoizedMergedChildContext=t,we(Nt),we(ft),_e(ft,t)):we(Nt),_e(Nt,n)}var On=null,Rc=!1,Xh=!1;function tI(t){On===null?On=[t]:On.push(t)}function NP(t){Rc=!0,tI(t)}function $r(){if(!Xh&&On!==null){Xh=!0;var t=0,e=pe;try{var n=On;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,Rc=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),Cw(yp,$r),i}finally{pe=e,Xh=!1}}return null}var ps=[],ms=0,Bu=null,$u=0,Wt=[],Ht=0,Ii=null,Mn=1,Ln="";function ti(t,e){ps[ms++]=$u,ps[ms++]=Bu,Bu=t,$u=e}function nI(t,e,n){Wt[Ht++]=Mn,Wt[Ht++]=Ln,Wt[Ht++]=Ii,Ii=t;var r=Mn;t=Ln;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mn=1<<32-dn(e)+i|n<<i|r,Ln=s+t}else Mn=1<<s|n<<i|r,Ln=t}function xp(t){t.return!==null&&(ti(t,1),nI(t,1,0))}function Pp(t){for(;t===Bu;)Bu=ps[--ms],ps[ms]=null,$u=ps[--ms],ps[ms]=null;for(;t===Ii;)Ii=Wt[--Ht],Wt[Ht]=null,Ln=Wt[--Ht],Wt[Ht]=null,Mn=Wt[--Ht],Wt[Ht]=null}var Ut=null,Lt=null,Se=!1,hn=null;function rI(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Y_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Lt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ii!==null?{id:Mn,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Lt=null,!0):!1;default:return!1}}function tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nf(t){if(Se){var e=Lt;if(e){var n=e;if(!Y_(t,e)){if(tf(t))throw Error(B(418));e=Cr(n.nextSibling);var r=Ut;e&&Y_(t,e)?rI(r,n):(t.flags=t.flags&-4097|2,Se=!1,Ut=t)}}else{if(tf(t))throw Error(B(418));t.flags=t.flags&-4097|2,Se=!1,Ut=t}}}function X_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Bl(t){if(t!==Ut)return!1;if(!Se)return X_(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yd(t.type,t.memoizedProps)),e&&(e=Lt)){if(tf(t))throw iI(),Error(B(418));for(;e;)rI(t,e),e=Cr(e.nextSibling)}if(X_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Lt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Lt=null}}else Lt=Ut?Cr(t.stateNode.nextSibling):null;return!0}function iI(){for(var t=Lt;t;)t=Cr(t.nextSibling)}function Ds(){Lt=Ut=null,Se=!1}function Rp(t){hn===null?hn=[t]:hn.push(t)}var kP=Zn.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function $l(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Z_(t){var e=t._init;return e(t._payload)}function sI(t){function e(T,E){if(t){var y=T.deletions;y===null?(T.deletions=[E],T.flags|=16):y.push(E)}}function n(T,E){if(!t)return null;for(;E!==null;)e(T,E),E=E.sibling;return null}function r(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function i(T,E){return T=Nr(T,E),T.index=0,T.sibling=null,T}function s(T,E,y){return T.index=y,t?(y=T.alternate,y!==null?(y=y.index,y<E?(T.flags|=2,E):y):(T.flags|=2,E)):(T.flags|=1048576,E)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,E,y,b){return E===null||E.tag!==6?(E=sd(y,T.mode,b),E.return=T,E):(E=i(E,y),E.return=T,E)}function l(T,E,y,b){var M=y.type;return M===ls?h(T,E,y.props.children,b,y.key):E!==null&&(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===cr&&Z_(M)===E.type)?(b=i(E,y.props),b.ref=bo(T,E,y),b.return=T,b):(b=mu(y.type,y.key,y.props,null,T.mode,b),b.ref=bo(T,E,y),b.return=T,b)}function c(T,E,y,b){return E===null||E.tag!==4||E.stateNode.containerInfo!==y.containerInfo||E.stateNode.implementation!==y.implementation?(E=od(y,T.mode,b),E.return=T,E):(E=i(E,y.children||[]),E.return=T,E)}function h(T,E,y,b,M){return E===null||E.tag!==7?(E=mi(y,T.mode,b,M),E.return=T,E):(E=i(E,y),E.return=T,E)}function p(T,E,y){if(typeof E=="string"&&E!==""||typeof E=="number")return E=sd(""+E,T.mode,y),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case kl:return y=mu(E.type,E.key,E.props,null,T.mode,y),y.ref=bo(T,null,E),y.return=T,y;case as:return E=od(E,T.mode,y),E.return=T,E;case cr:var b=E._init;return p(T,b(E._payload),y)}if($o(E)||xo(E))return E=mi(E,T.mode,y,null),E.return=T,E;$l(T,E)}return null}function g(T,E,y,b){var M=E!==null?E.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return M!==null?null:a(T,E,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case kl:return y.key===M?l(T,E,y,b):null;case as:return y.key===M?c(T,E,y,b):null;case cr:return M=y._init,g(T,E,M(y._payload),b)}if($o(y)||xo(y))return M!==null?null:h(T,E,y,b,null);$l(T,y)}return null}function w(T,E,y,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return T=T.get(y)||null,a(E,T,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case kl:return T=T.get(b.key===null?y:b.key)||null,l(E,T,b,M);case as:return T=T.get(b.key===null?y:b.key)||null,c(E,T,b,M);case cr:var F=b._init;return w(T,E,y,F(b._payload),M)}if($o(b)||xo(b))return T=T.get(y)||null,h(E,T,b,M,null);$l(E,b)}return null}function I(T,E,y,b){for(var M=null,F=null,S=E,v=E=0,C=null;S!==null&&v<y.length;v++){S.index>v?(C=S,S=null):C=S.sibling;var x=g(T,S,y[v],b);if(x===null){S===null&&(S=C);break}t&&S&&x.alternate===null&&e(T,S),E=s(x,E,v),F===null?M=x:F.sibling=x,F=x,S=C}if(v===y.length)return n(T,S),Se&&ti(T,v),M;if(S===null){for(;v<y.length;v++)S=p(T,y[v],b),S!==null&&(E=s(S,E,v),F===null?M=S:F.sibling=S,F=S);return Se&&ti(T,v),M}for(S=r(T,S);v<y.length;v++)C=w(S,T,v,y[v],b),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?v:C.key),E=s(C,E,v),F===null?M=C:F.sibling=C,F=C);return t&&S.forEach(function(P){return e(T,P)}),Se&&ti(T,v),M}function k(T,E,y,b){var M=xo(y);if(typeof M!="function")throw Error(B(150));if(y=M.call(y),y==null)throw Error(B(151));for(var F=M=null,S=E,v=E=0,C=null,x=y.next();S!==null&&!x.done;v++,x=y.next()){S.index>v?(C=S,S=null):C=S.sibling;var P=g(T,S,x.value,b);if(P===null){S===null&&(S=C);break}t&&S&&P.alternate===null&&e(T,S),E=s(P,E,v),F===null?M=P:F.sibling=P,F=P,S=C}if(x.done)return n(T,S),Se&&ti(T,v),M;if(S===null){for(;!x.done;v++,x=y.next())x=p(T,x.value,b),x!==null&&(E=s(x,E,v),F===null?M=x:F.sibling=x,F=x);return Se&&ti(T,v),M}for(S=r(T,S);!x.done;v++,x=y.next())x=w(S,T,v,x.value,b),x!==null&&(t&&x.alternate!==null&&S.delete(x.key===null?v:x.key),E=s(x,E,v),F===null?M=x:F.sibling=x,F=x);return t&&S.forEach(function(N){return e(T,N)}),Se&&ti(T,v),M}function D(T,E,y,b){if(typeof y=="object"&&y!==null&&y.type===ls&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case kl:e:{for(var M=y.key,F=E;F!==null;){if(F.key===M){if(M=y.type,M===ls){if(F.tag===7){n(T,F.sibling),E=i(F,y.props.children),E.return=T,T=E;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===cr&&Z_(M)===F.type){n(T,F.sibling),E=i(F,y.props),E.ref=bo(T,F,y),E.return=T,T=E;break e}n(T,F);break}else e(T,F);F=F.sibling}y.type===ls?(E=mi(y.props.children,T.mode,b,y.key),E.return=T,T=E):(b=mu(y.type,y.key,y.props,null,T.mode,b),b.ref=bo(T,E,y),b.return=T,T=b)}return o(T);case as:e:{for(F=y.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===y.containerInfo&&E.stateNode.implementation===y.implementation){n(T,E.sibling),E=i(E,y.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else e(T,E);E=E.sibling}E=od(y,T.mode,b),E.return=T,T=E}return o(T);case cr:return F=y._init,D(T,E,F(y._payload),b)}if($o(y))return I(T,E,y,b);if(xo(y))return k(T,E,y,b);$l(T,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,E!==null&&E.tag===6?(n(T,E.sibling),E=i(E,y),E.return=T,T=E):(n(T,E),E=sd(y,T.mode,b),E.return=T,T=E),o(T)):n(T,E)}return D}var Vs=sI(!0),oI=sI(!1),zu=Br(null),qu=null,gs=null,Np=null;function kp(){Np=gs=qu=null}function bp(t){var e=zu.current;we(zu),t._currentValue=e}function rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){qu=t,Np=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(Np!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(qu===null)throw Error(B(308));gs=t,qu.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var ci=null;function Dp(t){ci===null?ci=[t]:ci.push(t)}function aI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Dp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Hn(t,n)}return i=r.interleaved,i===null?(e.next=e,Dp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Hn(t,n)}function uu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vp(t,n)}}function ey(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ku(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,h=c=l=null,a=s;do{var g=a.lane,w=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,k=a;switch(g=e,w=n,k.tag){case 1:if(I=k.payload,typeof I=="function"){p=I.call(w,p,g);break e}p=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=k.payload,g=typeof I=="function"?I.call(w,p,g):I,g==null)break e;p=be({},p,g);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=w,l=p):h=h.next=w,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Si|=o,t.lanes=o,t.memoizedState=p}}function ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Za={},xn=Br(Za),Sa=Br(Za),Aa=Br(Za);function hi(t){if(t===Za)throw Error(B(174));return t}function Op(t,e){switch(_e(Aa,e),_e(Sa,t),_e(xn,Za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ld(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ld(e,t)}we(xn),_e(xn,e)}function Os(){we(xn),we(Sa),we(Aa)}function uI(t){hi(Aa.current);var e=hi(xn.current),n=Ld(e,t.type);e!==n&&(_e(Sa,t),_e(xn,n))}function Mp(t){Sa.current===t&&(we(xn),we(Sa))}var xe=Br(0);function Gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zh=[];function Lp(){for(var t=0;t<Zh.length;t++)Zh[t]._workInProgressVersionPrimary=null;Zh.length=0}var cu=Zn.ReactCurrentDispatcher,ed=Zn.ReactCurrentBatchConfig,Ti=0,Re=null,$e=null,We=null,Wu=!1,ra=!1,Ca=0,bP=0;function lt(){throw Error(B(321))}function jp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pn(t[n],e[n]))return!1;return!0}function Fp(t,e,n,r,i,s){if(Ti=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cu.current=t===null||t.memoizedState===null?MP:LP,t=n(r,i),ra){s=0;do{if(ra=!1,Ca=0,25<=s)throw Error(B(301));s+=1,We=$e=null,e.updateQueue=null,cu.current=jP,t=n(r,i)}while(ra)}if(cu.current=Hu,e=$e!==null&&$e.next!==null,Ti=0,We=$e=Re=null,Wu=!1,e)throw Error(B(300));return t}function Up(){var t=Ca!==0;return Ca=0,t}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Re.memoizedState=We=t:We=We.next=t,We}function tn(){if($e===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=We===null?Re.memoizedState:We.next;if(e!==null)We=e,$e=t;else{if(t===null)throw Error(B(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},We===null?Re.memoizedState=We=t:We=We.next=t}return We}function xa(t,e){return typeof e=="function"?e(t):e}function td(t){var e=tn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=$e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ti&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,Re.lanes|=h,Si|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,pn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nd(t){var e=tn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);pn(s,e.memoizedState)||(Rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cI(){}function hI(t,e){var n=Re,r=tn(),i=e(),s=!pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Rt=!0),r=r.queue,Bp(pI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Pa(9,fI.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(B(349));Ti&30||dI(n,e,i)}return i}function dI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fI(t,e,n,r){e.value=n,e.getSnapshot=r,mI(e)&&gI(t)}function pI(t,e,n){return n(function(){mI(e)&&gI(t)})}function mI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pn(t,n)}catch{return!0}}function gI(t){var e=Hn(t,1);e!==null&&fn(e,t,1,-1)}function ny(t){var e=wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},e.queue=t,t=t.dispatch=OP.bind(null,Re,t),[e.memoizedState,t]}function Pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _I(){return tn().memoizedState}function hu(t,e,n,r){var i=wn();Re.flags|=t,i.memoizedState=Pa(1|e,n,void 0,r===void 0?null:r)}function Nc(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if($e!==null){var o=$e.memoizedState;if(s=o.destroy,r!==null&&jp(r,o.deps)){i.memoizedState=Pa(e,n,s,r);return}}Re.flags|=t,i.memoizedState=Pa(1|e,n,s,r)}function ry(t,e){return hu(8390656,8,t,e)}function Bp(t,e){return Nc(2048,8,t,e)}function yI(t,e){return Nc(4,2,t,e)}function vI(t,e){return Nc(4,4,t,e)}function EI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function wI(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,EI.bind(null,e,t),n)}function $p(){}function II(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function TI(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function SI(t,e,n){return Ti&21?(pn(n,e)||(n=Rw(),Re.lanes|=n,Si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function DP(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=ed.transition;ed.transition={};try{t(!1),e()}finally{pe=n,ed.transition=r}}function AI(){return tn().memoizedState}function VP(t,e,n){var r=Rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},CI(t))xI(e,n);else if(n=aI(t,e,n,r),n!==null){var i=Et();fn(n,t,r,i),PI(n,e,r)}}function OP(t,e,n){var r=Rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(CI(t))xI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,pn(a,o)){var l=e.interleaved;l===null?(i.next=i,Dp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=aI(t,e,i,r),n!==null&&(i=Et(),fn(n,t,r,i),PI(n,e,r))}}function CI(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function xI(t,e){ra=Wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function PI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vp(t,n)}}var Hu={readContext:en,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},MP={readContext:en,useCallback:function(t,e){return wn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:ry,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hu(4194308,4,EI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hu(4194308,4,t,e)},useInsertionEffect:function(t,e){return hu(4,2,t,e)},useMemo:function(t,e){var n=wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=VP.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=wn();return t={current:t},e.memoizedState=t},useState:ny,useDebugValue:$p,useDeferredValue:function(t){return wn().memoizedState=t},useTransition:function(){var t=ny(!1),e=t[0];return t=DP.bind(null,t[1]),wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=wn();if(Se){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),Je===null)throw Error(B(349));Ti&30||dI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ry(pI.bind(null,r,s,t),[t]),r.flags|=2048,Pa(9,fI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wn(),e=Je.identifierPrefix;if(Se){var n=Ln,r=Mn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=bP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LP={readContext:en,useCallback:II,useContext:en,useEffect:Bp,useImperativeHandle:wI,useInsertionEffect:yI,useLayoutEffect:vI,useMemo:TI,useReducer:td,useRef:_I,useState:function(){return td(xa)},useDebugValue:$p,useDeferredValue:function(t){var e=tn();return SI(e,$e.memoizedState,t)},useTransition:function(){var t=td(xa)[0],e=tn().memoizedState;return[t,e]},useMutableSource:cI,useSyncExternalStore:hI,useId:AI,unstable_isNewReconciler:!1},jP={readContext:en,useCallback:II,useContext:en,useEffect:Bp,useImperativeHandle:wI,useInsertionEffect:yI,useLayoutEffect:vI,useMemo:TI,useReducer:nd,useRef:_I,useState:function(){return nd(xa)},useDebugValue:$p,useDeferredValue:function(t){var e=tn();return $e===null?e.memoizedState=t:SI(e,$e.memoizedState,t)},useTransition:function(){var t=nd(xa)[0],e=tn().memoizedState;return[t,e]},useMutableSource:cI,useSyncExternalStore:hI,useId:AI,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kc={isMounted:function(t){return(t=t._reactInternals)?Fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Rr(t),s=$n(r,i);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(fn(e,t,i,r),uu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Rr(t),s=$n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,i),e!==null&&(fn(e,t,i,r),uu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Rr(t),i=$n(n,r);i.tag=2,e!=null&&(i.callback=e),e=xr(t,i,r),e!==null&&(fn(e,t,r,n),uu(e,t,r))}};function iy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,r)||!Ea(i,s):!0}function RI(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=kt(e)?wi:ft.current,r=e.contextTypes,s=(r=r!=null)?bs(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kc.enqueueReplaceState(e,e.state,null)}function of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=kt(e)?wi:ft.current,i.context=bs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kc.enqueueReplaceState(i,i.state,null),Ku(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",r=e;do n+=dx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function rd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FP=typeof WeakMap=="function"?WeakMap:Map;function NI(t,e,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ju||(Ju=!0,_f=r),af(t,e)},n}function kI(t,e,n){n=$n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){af(t,e),typeof r!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function oy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZP.bind(null,t,e,n),e.then(t,t))}function ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ly(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$n(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var UP=Zn.ReactCurrentOwner,Rt=!1;function _t(t,e,n,r){e.child=t===null?oI(e,null,n,r):Vs(e,t.child,n,r)}function uy(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=Fp(t,e,n,r,s,i),n=Up(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Se&&n&&xp(e),e.flags|=1,_t(t,e,r,i),e.child)}function cy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Jp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bI(t,e,s,r,i)):(t=mu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(o,r)&&t.ref===e.ref)return Qn(t,e,i)}return e.flags|=1,t=Nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function bI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ea(s,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Qn(t,e,i)}return lf(t,e,n,r,i)}function DI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(ys,Mt),Mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(ys,Mt),Mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(ys,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(ys,Mt),Mt|=r;return _t(t,e,i,n),e.child}function VI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lf(t,e,n,r,i){var s=kt(n)?wi:ft.current;return s=bs(e,s),Ss(e,i),n=Fp(t,e,n,r,s,i),r=Up(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Se&&r&&xp(e),e.flags|=1,_t(t,e,n,i),e.child)}function hy(t,e,n,r,i){if(kt(n)){var s=!0;Uu(e)}else s=!1;if(Ss(e,i),e.stateNode===null)du(t,e),RI(e,n,r),of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=en(c):(c=kt(n)?wi:ft.current,c=bs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&sy(e,o,r,c),hr=!1;var g=e.memoizedState;o.state=g,Ku(e,r,o,i),l=e.memoizedState,a!==r||g!==l||Nt.current||hr?(typeof h=="function"&&(sf(e,n,h,r),l=e.memoizedState),(a=hr||iy(e,n,a,r,g,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,lI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:un(e.type,a),o.props=c,p=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=en(l):(l=kt(n)?wi:ft.current,l=bs(e,l));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||g!==l)&&sy(e,o,r,l),hr=!1,g=e.memoizedState,o.state=g,Ku(e,r,o,i);var I=e.memoizedState;a!==p||g!==I||Nt.current||hr?(typeof w=="function"&&(sf(e,n,w,r),I=e.memoizedState),(c=hr||iy(e,n,c,r,g,I,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return uf(t,e,n,r,s,i)}function uf(t,e,n,r,i,s){VI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&J_(e,n,!1),Qn(t,e,s);r=e.stateNode,UP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,a,s)):_t(t,e,a,s),e.memoizedState=r.state,i&&J_(e,n,!0),e.child}function OI(t){var e=t.stateNode;e.pendingContext?Q_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Q_(t,e.context,!1),Op(t,e.containerInfo)}function dy(t,e,n,r,i){return Ds(),Rp(i),e.flags|=256,_t(t,e,n,r),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function MI(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(xe,i&1),t===null)return nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vc(o,r,0,null),t=mi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hf(n),e.memoizedState=cf,t):zp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return BP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=mi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cf,r}return s=t.child,t=s.sibling,r=Nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zp(t,e){return e=Vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zl(t,e,n,r){return r!==null&&Rp(r),Vs(e,t.child,null,n),t=zp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=rd(Error(B(422))),zl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Vc({mode:"visible",children:r.children},i,0,null),s=mi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vs(e,t.child,null,o),e.child.memoizedState=hf(o),e.memoizedState=cf,s);if(!(e.mode&1))return zl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=rd(s,r,void 0),zl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hn(t,i),fn(r,t,i,-1))}return Qp(),r=rd(Error(B(421))),zl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Lt=Cr(i.nextSibling),Ut=e,Se=!0,hn=null,t!==null&&(Wt[Ht++]=Mn,Wt[Ht++]=Ln,Wt[Ht++]=Ii,Mn=t.id,Ln=t.overflow,Ii=e),e=zp(e,r.children),e.flags|=4096,e)}function fy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rf(t.return,e,n)}function id(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function LI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(_t(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fy(t,n,e);else if(t.tag===19)fy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),id(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}id(e,!0,n,null,s);break;case"together":id(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function du(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $P(t,e,n){switch(e.tag){case 3:OI(e),Ds();break;case 5:uI(e);break;case 1:kt(e.type)&&Uu(e);break;case 4:Op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(zu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?MI(t,e,n):(_e(xe,xe.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);_e(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return LI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,DI(t,e,n)}return Qn(t,e,n)}var jI,df,FI,UI;jI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};df=function(){};FI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hi(xn.current);var s=null;switch(n){case"input":i=Dd(t,i),r=Dd(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=Md(t,i),r=Md(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ju)}jd(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};UI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Do(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zP(t,e,n){var r=e.pendingProps;switch(Pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return kt(e.type)&&Fu(),ut(e),null;case 3:return r=e.stateNode,Os(),we(Nt),we(ft),Lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(Ef(hn),hn=null))),df(t,e),ut(e),null;case 5:Mp(e);var i=hi(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)FI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return ut(e),null}if(t=hi(xn.current),Bl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[In]=e,r[Ta]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<qo.length;i++)Ee(qo[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":I_(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":S_(r,s),Ee("invalid",r)}jd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ul(r.textContent,a,t),i=["children",""+a]):fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":bl(r),T_(r,s,!0);break;case"textarea":bl(r),A_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ju)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[In]=e,t[Ta]=r,jI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fd(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<qo.length;i++)Ee(qo[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":I_(t,r),i=Dd(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":S_(t,r),i=Md(t,r),Ee("invalid",t);break;default:i=r}jd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_w(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ee("scroll",t):l!=null&&fp(t,s,l,o))}switch(n){case"input":bl(t),T_(t,r,!1);break;case"textarea":bl(t),A_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Es(t,!!r.multiple,s,!1):r.defaultValue!=null&&Es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ju)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)UI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=hi(Aa.current),hi(xn.current),Bl(e)){if(r=e.stateNode,n=e.memoizedProps,r[In]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ul(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[In]=e,e.stateNode=r}return ut(e),null;case 13:if(we(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Lt!==null&&e.mode&1&&!(e.flags&128))iI(),Ds(),e.flags|=98560,s=!1;else if(s=Bl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[In]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else hn!==null&&(Ef(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?ze===0&&(ze=3):Qp())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return Os(),df(t,e),t===null&&wa(e.stateNode.containerInfo),ut(e),null;case 10:return bp(e.type._context),ut(e),null;case 17:return kt(e.type)&&Fu(),ut(e),null;case 19:if(we(xe),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Do(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gu(t),o!==null){for(e.flags|=128,Do(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>Ls&&(e.flags|=128,r=!0,Do(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return ut(e),null}else 2*Me()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,r=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=xe.current,_e(xe,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Hp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Mt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function qP(t,e){switch(Pp(e),e.tag){case 1:return kt(e.type)&&Fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Os(),we(Nt),we(ft),Lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mp(e),null;case 13:if(we(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(xe),null;case 4:return Os(),null;case 10:return bp(e.type._context),null;case 22:case 23:return Hp(),null;case 24:return null;default:return null}}var ql=!1,ht=!1,KP=typeof WeakSet=="function"?WeakSet:Set,W=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function ff(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var py=!1;function GP(t,e){if(Qd=Ou,t=Kw(),Cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,p=t,g=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)g=p,p=w;for(;;){if(p===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++h===r&&(l=o),(w=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jd={focusedElem:t,selectionRange:n},Ou=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var k=I.memoizedProps,D=I.memoizedState,T=e.stateNode,E=T.getSnapshotBeforeUpdate(e.elementType===e.type?k:un(e.type,k),D);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){Ve(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return I=py,py=!1,I}function ia(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ff(e,n,s)}i=i.next}while(i!==r)}}function bc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function BI(t){var e=t.alternate;e!==null&&(t.alternate=null,BI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[In],delete e[Ta],delete e[Zd],delete e[PP],delete e[RP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $I(t){return t.tag===5||t.tag===3||t.tag===4}function my(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$I(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ju));else if(r!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}function gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gf(t,e,n),t=t.sibling;t!==null;)gf(t,e,n),t=t.sibling}var Ze=null,cn=!1;function or(t,e,n){for(n=n.child;n!==null;)zI(t,e,n),n=n.sibling}function zI(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Sc,n)}catch{}switch(n.tag){case 5:ht||_s(n,e);case 6:var r=Ze,i=cn;Ze=null,or(t,e,n),Ze=r,cn=i,Ze!==null&&(cn?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(cn?(t=Ze,n=n.stateNode,t.nodeType===8?Yh(t.parentNode,n):t.nodeType===1&&Yh(t,n),ya(t)):Yh(Ze,n.stateNode));break;case 4:r=Ze,i=cn,Ze=n.stateNode.containerInfo,cn=!0,or(t,e,n),Ze=r,cn=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ff(n,e,o),i=i.next}while(i!==r)}or(t,e,n);break;case 1:if(!ht&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,or(t,e,n),ht=r):or(t,e,n);break;default:or(t,e,n)}}function gy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KP),e.forEach(function(r){var i=tR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ze=a.stateNode,cn=!1;break e;case 3:Ze=a.stateNode.containerInfo,cn=!0;break e;case 4:Ze=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(Ze===null)throw Error(B(160));zI(s,o,i),Ze=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qI(e,t),e=e.sibling}function qI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),vn(t),r&4){try{ia(3,t,t.return),bc(3,t)}catch(k){Ve(t,t.return,k)}try{ia(5,t,t.return)}catch(k){Ve(t,t.return,k)}}break;case 1:ln(e,t),vn(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(ln(e,t),vn(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{pa(i,"")}catch(k){Ve(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dw(i,s),Fd(a,o);var c=Fd(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?_w(i,p):h==="dangerouslySetInnerHTML"?mw(i,p):h==="children"?pa(i,p):fp(i,h,p,c)}switch(a){case"input":Vd(i,s);break;case"textarea":fw(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Es(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?Es(i,!!s.multiple,s.defaultValue,!0):Es(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ta]=s}catch(k){Ve(t,t.return,k)}}break;case 6:if(ln(e,t),vn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ve(t,t.return,k)}}break;case 3:if(ln(e,t),vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(k){Ve(t,t.return,k)}break;case 4:ln(e,t),vn(t);break;case 13:ln(e,t),vn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gp=Me())),r&4&&gy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ht=(c=ht)||h,ln(e,t),ht=c):ln(e,t),vn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(W=t,h=t.child;h!==null;){for(p=W=h;W!==null;){switch(g=W,w=g.child,g.tag){case 0:case 11:case 14:case 15:ia(4,g,g.return);break;case 1:_s(g,g.return);var I=g.stateNode;if(typeof I.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(k){Ve(r,n,k)}}break;case 5:_s(g,g.return);break;case 22:if(g.memoizedState!==null){yy(p);continue}}w!==null?(w.return=g,W=w):yy(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gw("display",o))}catch(k){Ve(t,t.return,k)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Ve(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ln(e,t),vn(t),r&4&&gy(t);break;case 21:break;default:ln(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($I(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var s=my(t);gf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=my(t);mf(t,a,o);break;default:throw Error(B(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WP(t,e,n){W=t,KI(t)}function KI(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ql;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ht;a=ql;var c=ht;if(ql=o,(ht=l)&&!c)for(W=i;W!==null;)o=W,l=o.child,o.tag===22&&o.memoizedState!==null?vy(i):l!==null?(l.return=o,W=l):vy(i);for(;s!==null;)W=s,KI(s),s=s.sibling;W=i,ql=a,ht=c}_y(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):_y(t)}}function _y(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ht||bc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ty(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ty(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ya(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}ht||e.flags&512&&pf(e)}catch(g){Ve(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function yy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function vy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bc(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{pf(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{pf(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){W=null;break}var a=e.sibling;if(a!==null){a.return=e.return,W=a;break}W=e.return}}var HP=Math.ceil,Qu=Zn.ReactCurrentDispatcher,qp=Zn.ReactCurrentOwner,Xt=Zn.ReactCurrentBatchConfig,ue=0,Je=null,Fe=null,tt=0,Mt=0,ys=Br(0),ze=0,Ra=null,Si=0,Dc=0,Kp=0,sa=null,xt=null,Gp=0,Ls=1/0,Dn=null,Ju=!1,_f=null,Pr=null,Kl=!1,Er=null,Yu=0,oa=0,yf=null,fu=-1,pu=0;function Et(){return ue&6?Me():fu!==-1?fu:fu=Me()}function Rr(t){return t.mode&1?ue&2&&tt!==0?tt&-tt:kP.transition!==null?(pu===0&&(pu=Rw()),pu):(t=pe,t!==0||(t=window.event,t=t===void 0?16:Mw(t.type)),t):1}function fn(t,e,n,r){if(50<oa)throw oa=0,yf=null,Error(B(185));Ja(t,n,r),(!(ue&2)||t!==Je)&&(t===Je&&(!(ue&2)&&(Dc|=n),ze===4&&fr(t,tt)),bt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Ls=Me()+500,Rc&&$r()))}function bt(t,e){var n=t.callbackNode;kx(t,e);var r=Vu(t,t===Je?tt:0);if(r===0)n!==null&&P_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&P_(n),e===1)t.tag===0?NP(Ey.bind(null,t)):tI(Ey.bind(null,t)),CP(function(){!(ue&6)&&$r()}),n=null;else{switch(Nw(r)){case 1:n=yp;break;case 4:n=xw;break;case 16:n=Du;break;case 536870912:n=Pw;break;default:n=Du}n=ZI(n,GI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function GI(t,e){if(fu=-1,pu=0,ue&6)throw Error(B(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var r=Vu(t,t===Je?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xu(t,r);else{e=r;var i=ue;ue|=2;var s=HI();(Je!==t||tt!==e)&&(Dn=null,Ls=Me()+500,pi(t,e));do try{YP();break}catch(a){WI(t,a)}while(!0);kp(),Qu.current=s,ue=i,Fe!==null?e=0:(Je=null,tt=0,e=ze)}if(e!==0){if(e===2&&(i=qd(t),i!==0&&(r=i,e=vf(t,i))),e===1)throw n=Ra,pi(t,0),fr(t,r),bt(t,Me()),n;if(e===6)fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!QP(i)&&(e=Xu(t,r),e===2&&(s=qd(t),s!==0&&(r=s,e=vf(t,s))),e===1))throw n=Ra,pi(t,0),fr(t,r),bt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ni(t,xt,Dn);break;case 3:if(fr(t,r),(r&130023424)===r&&(e=Gp+500-Me(),10<e)){if(Vu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xd(ni.bind(null,t,xt,Dn),e);break}ni(t,xt,Dn);break;case 4:if(fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HP(r/1960))-r,10<r){t.timeoutHandle=Xd(ni.bind(null,t,xt,Dn),r);break}ni(t,xt,Dn);break;case 5:ni(t,xt,Dn);break;default:throw Error(B(329))}}}return bt(t,Me()),t.callbackNode===n?GI.bind(null,t):null}function vf(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(pi(t,e).flags|=256),t=Xu(t,e),t!==2&&(e=xt,xt=n,e!==null&&Ef(e)),t}function Ef(t){xt===null?xt=t:xt.push.apply(xt,t)}function QP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~Kp,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function Ey(t){if(ue&6)throw Error(B(327));As();var e=Vu(t,0);if(!(e&1))return bt(t,Me()),null;var n=Xu(t,e);if(t.tag!==0&&n===2){var r=qd(t);r!==0&&(e=r,n=vf(t,r))}if(n===1)throw n=Ra,pi(t,0),fr(t,e),bt(t,Me()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ni(t,xt,Dn),bt(t,Me()),null}function Wp(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Ls=Me()+500,Rc&&$r())}}function Ai(t){Er!==null&&Er.tag===0&&!(ue&6)&&As();var e=ue;ue|=1;var n=Xt.transition,r=pe;try{if(Xt.transition=null,pe=1,t)return t()}finally{pe=r,Xt.transition=n,ue=e,!(ue&6)&&$r()}}function Hp(){Mt=ys.current,we(ys)}function pi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AP(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Pp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:Os(),we(Nt),we(ft),Lp();break;case 5:Mp(r);break;case 4:Os();break;case 13:we(xe);break;case 19:we(xe);break;case 10:bp(r.type._context);break;case 22:case 23:Hp()}n=n.return}if(Je=t,Fe=t=Nr(t.current,null),tt=Mt=e,ze=0,Ra=null,Kp=Dc=Si=0,xt=sa=null,ci!==null){for(e=0;e<ci.length;e++)if(n=ci[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ci=null}return t}function WI(t,e){do{var n=Fe;try{if(kp(),cu.current=Hu,Wu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wu=!1}if(Ti=0,We=$e=Re=null,ra=!1,Ca=0,qp.current=null,n===null||n.return===null){ze=1,Ra=e,Fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=ay(o);if(w!==null){w.flags&=-257,ly(w,o,a,s,e),w.mode&1&&oy(s,c,e),e=w,l=c;var I=e.updateQueue;if(I===null){var k=new Set;k.add(l),e.updateQueue=k}else I.add(l);break e}else{if(!(e&1)){oy(s,c,e),Qp();break e}l=Error(B(426))}}else if(Se&&a.mode&1){var D=ay(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),ly(D,o,a,s,e),Rp(Ms(l,a));break e}}s=l=Ms(l,a),ze!==4&&(ze=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=NI(s,l,e);ey(s,T);break e;case 1:a=l;var E=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Pr===null||!Pr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=kI(s,a,e);ey(s,b);break e}}s=s.return}while(s!==null)}JI(n)}catch(M){e=M,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function HI(){var t=Qu.current;return Qu.current=Hu,t===null?Hu:t}function Qp(){(ze===0||ze===3||ze===2)&&(ze=4),Je===null||!(Si&268435455)&&!(Dc&268435455)||fr(Je,tt)}function Xu(t,e){var n=ue;ue|=2;var r=HI();(Je!==t||tt!==e)&&(Dn=null,pi(t,e));do try{JP();break}catch(i){WI(t,i)}while(!0);if(kp(),ue=n,Qu.current=r,Fe!==null)throw Error(B(261));return Je=null,tt=0,ze}function JP(){for(;Fe!==null;)QI(Fe)}function YP(){for(;Fe!==null&&!Ix();)QI(Fe)}function QI(t){var e=XI(t.alternate,t,Mt);t.memoizedProps=t.pendingProps,e===null?JI(t):Fe=e,qp.current=null}function JI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qP(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Fe=null;return}}else if(n=zP(n,e,Mt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);ze===0&&(ze=5)}function ni(t,e,n){var r=pe,i=Xt.transition;try{Xt.transition=null,pe=1,XP(t,e,n,r)}finally{Xt.transition=i,pe=r}return null}function XP(t,e,n,r){do As();while(Er!==null);if(ue&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bx(t,s),t===Je&&(Fe=Je=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kl||(Kl=!0,ZI(Du,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xt.transition,Xt.transition=null;var o=pe;pe=1;var a=ue;ue|=4,qp.current=null,GP(t,n),qI(n,t),yP(Jd),Ou=!!Qd,Jd=Qd=null,t.current=n,WP(n),Tx(),ue=a,pe=o,Xt.transition=s}else t.current=n;if(Kl&&(Kl=!1,Er=t,Yu=i),s=t.pendingLanes,s===0&&(Pr=null),Cx(n.stateNode),bt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ju)throw Ju=!1,t=_f,_f=null,t;return Yu&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===yf?oa++:(oa=0,yf=t):oa=0,$r(),null}function As(){if(Er!==null){var t=Nw(Yu),e=Xt.transition,n=pe;try{if(Xt.transition=null,pe=16>t?16:t,Er===null)var r=!1;else{if(t=Er,Er=null,Yu=0,ue&6)throw Error(B(331));var i=ue;for(ue|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(W=c;W!==null;){var h=W;switch(h.tag){case 0:case 11:case 15:ia(8,h,s)}var p=h.child;if(p!==null)p.return=h,W=p;else for(;W!==null;){h=W;var g=h.sibling,w=h.return;if(BI(h),h===c){W=null;break}if(g!==null){g.return=w,W=g;break}W=w}}}var I=s.alternate;if(I!==null){var k=I.child;if(k!==null){I.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ia(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var E=t.current;for(W=E;W!==null;){o=W;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,W=y;else e:for(o=E;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bc(9,a)}}catch(M){Ve(a,a.return,M)}if(a===o){W=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,W=b;break e}W=a.return}}if(ue=i,$r(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Sc,t)}catch{}r=!0}return r}finally{pe=n,Xt.transition=e}}return!1}function wy(t,e,n){e=Ms(n,e),e=NI(t,e,1),t=xr(t,e,1),e=Et(),t!==null&&(Ja(t,1,e),bt(t,e))}function Ve(t,e,n){if(t.tag===3)wy(t,t,n);else for(;e!==null;){if(e.tag===3){wy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pr===null||!Pr.has(r))){t=Ms(n,t),t=kI(e,t,1),e=xr(e,t,1),t=Et(),e!==null&&(Ja(e,1,t),bt(e,t));break}}e=e.return}}function ZP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(tt&n)===n&&(ze===4||ze===3&&(tt&130023424)===tt&&500>Me()-Gp?pi(t,0):Kp|=n),bt(t,e)}function YI(t,e){e===0&&(t.mode&1?(e=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):e=1);var n=Et();t=Hn(t,e),t!==null&&(Ja(t,e,n),bt(t,n))}function eR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),YI(t,n)}function tR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),YI(t,n)}var XI;XI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,$P(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Se&&e.flags&1048576&&nI(e,$u,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;du(t,e),t=e.pendingProps;var i=bs(e,ft.current);Ss(e,n),i=Fp(null,e,r,t,i,n);var s=Up();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vp(e),i.updater=kc,e.stateNode=i,i._reactInternals=e,of(e,r,t,n),e=uf(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&xp(e),_t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(du(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rR(r),t=un(r,t),i){case 0:e=lf(null,e,r,t,n);break e;case 1:e=hy(null,e,r,t,n);break e;case 11:e=uy(null,e,r,t,n);break e;case 14:e=cy(null,e,r,un(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),lf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),hy(t,e,r,i,n);case 3:e:{if(OI(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,lI(t,e),Ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ms(Error(B(423)),e),e=dy(t,e,r,n,i);break e}else if(r!==i){i=Ms(Error(B(424)),e),e=dy(t,e,r,n,i);break e}else for(Lt=Cr(e.stateNode.containerInfo.firstChild),Ut=e,Se=!0,hn=null,n=oI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),r===i){e=Qn(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return uI(e),t===null&&nf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yd(r,i)?o=null:s!==null&&Yd(r,s)&&(e.flags|=32),VI(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&nf(e),null;case 13:return MI(t,e,n);case 4:return Op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vs(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),uy(t,e,r,i,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(zu,r._currentValue),r._currentValue=o,s!==null)if(pn(s.value,o)){if(s.children===i.children&&!Nt.current){e=Qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$n(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}_t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=en(i),r=r(i),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),cy(t,e,r,i,n);case 15:return bI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),du(t,e),e.tag=1,kt(r)?(t=!0,Uu(e)):t=!1,Ss(e,n),RI(e,r,i),of(e,r,i,n),uf(null,e,r,!0,t,n);case 19:return LI(t,e,n);case 22:return DI(t,e,n)}throw Error(B(156,e.tag))};function ZI(t,e){return Cw(t,e)}function nR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new nR(t,e,n,r)}function Jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rR(t){if(typeof t=="function")return Jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mp)return 11;if(t===gp)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Jp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ls:return mi(n.children,i,s,e);case pp:o=8,i|=8;break;case Rd:return t=Qt(12,n,e,i|2),t.elementType=Rd,t.lanes=s,t;case Nd:return t=Qt(13,n,e,i),t.elementType=Nd,t.lanes=s,t;case kd:return t=Qt(19,n,e,i),t.elementType=kd,t.lanes=s,t;case uw:return Vc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case aw:o=10;break e;case lw:o=9;break e;case mp:o=11;break e;case gp:o=14;break e;case cr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mi(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function Vc(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=uw,t.lanes=n,t.stateNode={isHidden:!1},t}function sd(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function od(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uh(0),this.expirationTimes=Uh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yp(t,e,n,r,i,s,o,a,l){return t=new iR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(s),t}function sR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function eT(t){if(!t)return Mr;t=t._reactInternals;e:{if(Fi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(kt(n))return eI(t,n,e)}return e}function tT(t,e,n,r,i,s,o,a,l){return t=Yp(n,r,!0,t,i,s,o,a,l),t.context=eT(null),n=t.current,r=Et(),i=Rr(n),s=$n(r,i),s.callback=e??null,xr(n,s,i),t.current.lanes=i,Ja(t,i,r),bt(t,r),t}function Oc(t,e,n,r){var i=e.current,s=Et(),o=Rr(i);return n=eT(n),e.context===null?e.context=n:e.pendingContext=n,e=$n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xr(i,e,o),t!==null&&(fn(t,i,o,s),uu(t,i,o)),o}function Zu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Iy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xp(t,e){Iy(t,e),(t=t.alternate)&&Iy(t,e)}function oR(){return null}var nT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zp(t){this._internalRoot=t}Mc.prototype.render=Zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Oc(t,e,null,null)};Mc.prototype.unmount=Zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ai(function(){Oc(null,t,null,null)}),e[Wn]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&Ow(t)}};function em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ty(){}function aR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Zu(o);s.call(c)}}var o=tT(e,r,t,0,null,!1,!1,"",Ty);return t._reactRootContainer=o,t[Wn]=o.current,wa(t.nodeType===8?t.parentNode:t),Ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Zu(l);a.call(c)}}var l=Yp(t,0,!1,null,null,!1,!1,"",Ty);return t._reactRootContainer=l,t[Wn]=l.current,wa(t.nodeType===8?t.parentNode:t),Ai(function(){Oc(e,l,n,r)}),l}function jc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Zu(o);a.call(l)}}Oc(e,o,t,i)}else o=aR(n,e,t,i,r);return Zu(o)}kw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(vp(e,n|1),bt(e,Me()),!(ue&6)&&(Ls=Me()+500,$r()))}break;case 13:Ai(function(){var r=Hn(t,1);if(r!==null){var i=Et();fn(r,t,1,i)}}),Xp(t,1)}};Ep=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=Et();fn(e,t,134217728,n)}Xp(t,134217728)}};bw=function(t){if(t.tag===13){var e=Rr(t),n=Hn(t,e);if(n!==null){var r=Et();fn(n,t,e,r)}Xp(t,e)}};Dw=function(){return pe};Vw=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Bd=function(t,e,n){switch(e){case"input":if(Vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pc(r);if(!i)throw Error(B(90));hw(r),Vd(r,i)}}}break;case"textarea":fw(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};Ew=Wp;ww=Ai;var lR={usingClientEntryPoint:!1,Events:[Xa,ds,Pc,yw,vw,Wp]},Vo={findFiberByHostInstance:ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uR={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sw(t),t===null?null:t.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||oR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{Sc=Gl.inject(uR),Cn=Gl}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lR;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!em(e))throw Error(B(200));return sR(t,e,null,n)};zt.createRoot=function(t,e){if(!em(t))throw Error(B(299));var n=!1,r="",i=nT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Yp(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,wa(t.nodeType===8?t.parentNode:t),new Zp(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Sw(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Ai(t)};zt.hydrate=function(t,e,n){if(!Lc(e))throw Error(B(200));return jc(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!em(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=nT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tT(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,wa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Mc(e)};zt.render=function(t,e,n){if(!Lc(e))throw Error(B(200));return jc(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!Lc(t))throw Error(B(40));return t._reactRootContainer?(Ai(function(){jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};zt.unstable_batchedUpdates=Wp;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return jc(t,e,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function rT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rT)}catch(t){console.error(t)}}rT(),rw.exports=zt;var cR=rw.exports,iT,Sy=cR;iT=Sy.createRoot,Sy.hydrateRoot;const hR="modulepreload",dR=function(t){return"/Ton-paris/"+t},Ay={},fR=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=dR(l),l in Ay)return;Ay[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":hR,c||(p.as="script"),p.crossOrigin="",p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),c)return new Promise((g,w)=>{p.addEventListener("load",g),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function pR(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let a,l,c;const h=async(g=!0)=>{await l,await(c==null?void 0:c())};async function p(){if("serviceWorker"in navigator){if(a=await fR(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/Ton-paris/sw.js",{scope:"/Ton-paris/",type:"classic"})).catch(g=>{o==null||o(g)}),!a)return;c=async()=>{await(a==null?void 0:a.messageSkipWaiting())};{let g=!1;const w=()=>{g=!0,a==null||a.addEventListener("controlling",I=>{I.isUpdate&&window.location.reload()}),n==null||n()};a.addEventListener("installed",I=>{typeof I.isUpdate>"u"?typeof I.isExternal<"u"?I.isExternal?w():!g&&(r==null||r()):I.isExternal?window.location.reload():!g&&(r==null||r()):I.isUpdate||r==null||r()}),a.addEventListener("waiting",w),a.addEventListener("externalwaiting",w)}a.register({immediate:e}).then(g=>{s?s("/Ton-paris/sw.js",g):i==null||i(g)}).catch(g=>{o==null||o(g)})}}return l=p(),h}/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Na(){return Na=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Na.apply(null,arguments)}var wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wr||(wr={}));const Cy="popstate";function mR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return wf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ec(i)}return _R(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function sT(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gR(){return Math.random().toString(36).substr(2,8)}function xy(t,e){return{usr:t.state,key:t.key,idx:e}}function wf(t,e,n,r){return n===void 0&&(n=null),Na({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Zs(e):e,{state:n,key:e&&e.key||r||gR()})}function ec(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function _R(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wr.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Na({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=wr.Pop;let D=h(),T=D==null?null:D-c;c=D,l&&l({action:a,location:k.location,delta:T})}function g(D,T){a=wr.Push;let E=wf(k.location,D,T);c=h()+1;let y=xy(E,c),b=k.createHref(E);try{o.pushState(y,"",b)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(b)}s&&l&&l({action:a,location:k.location,delta:1})}function w(D,T){a=wr.Replace;let E=wf(k.location,D,T);c=h();let y=xy(E,c),b=k.createHref(E);o.replaceState(y,"",b),s&&l&&l({action:a,location:k.location,delta:0})}function I(D){let T=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof D=="string"?D:ec(D);return E=E.replace(/ $/,"%20"),Ne(T,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,T)}let k={get action(){return a},get location(){return t(i,o)},listen(D){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cy,p),l=D,()=>{i.removeEventListener(Cy,p),l=null}},createHref(D){return e(i,D)},createURL:I,encodeLocation(D){let T=I(D);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:g,replace:w,go(D){return o.go(D)}};return k}var Py;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Py||(Py={}));function yR(t,e,n){return n===void 0&&(n="/"),vR(t,e,n)}function vR(t,e,n,r){let i=typeof e=="string"?Zs(e):e,s=js(i.pathname||"/",n);if(s==null)return null;let o=oT(t);ER(o);let a=null,l=kR(s);for(let c=0;a==null&&c<o.length;++c)a=RR(o[c],l);return a}function oT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=kr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),oT(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:xR(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of aT(s.path))i(s,o,l)}),e}function aT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=aT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ER(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wR=/^:[\w-]+$/,IR=3,TR=2,SR=1,AR=10,CR=-2,Ry=t=>t==="*";function xR(t,e){let n=t.split("/"),r=n.length;return n.some(Ry)&&(r+=CR),e&&(r+=TR),n.filter(i=>!Ry(i)).reduce((i,s)=>i+(wR.test(s)?IR:s===""?SR:AR),r)}function PR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function RR(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=If({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),g=l.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:kr([s,p.pathname]),pathnameBase:VR(kr([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=kr([s,p.pathnameBase]))}return o}function If(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=NR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:g,isOptional:w}=h;if(g==="*"){let k=a[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const I=a[p];return w&&!I?c[g]=void 0:c[g]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function NR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sT(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sT(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function js(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function bR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Zs(t):t,s;return n?(n=lT(n),n.startsWith("/")?s=Ny(n.substring(1),"/"):s=Ny(n,e)):s=e,{pathname:s,search:OR(r),hash:MR(i)}}function Ny(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ad(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function DR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tm(t,e){let n=DR(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function nm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Zs(t):(i=Na({},t),Ne(!i.pathname||!i.pathname.includes("?"),ad("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),ad("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),ad("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}a=p>=0?e[p]:"/"}let l=bR(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const lT=t=>t.replace(/\/\/+/g,"/"),kr=t=>lT(t.join("/")),VR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),OR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,MR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const uT=["post","put","patch","delete"];new Set(uT);const jR=["get",...uT];new Set(jR);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ka.apply(null,arguments)}const Fc=R.createContext(null),cT=R.createContext(null),er=R.createContext(null),Uc=R.createContext(null),zr=R.createContext({outlet:null,matches:[],isDataRoute:!1}),hT=R.createContext(null);function FR(t,e){let{relative:n}=e===void 0?{}:e;eo()||Ne(!1);let{basename:r,navigator:i}=R.useContext(er),{hash:s,pathname:o,search:a}=$c(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:kr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function eo(){return R.useContext(Uc)!=null}function to(){return eo()||Ne(!1),R.useContext(Uc).location}function dT(t){R.useContext(er).static||R.useLayoutEffect(t)}function Bc(){let{isDataRoute:t}=R.useContext(zr);return t?XR():UR()}function UR(){eo()||Ne(!1);let t=R.useContext(Fc),{basename:e,future:n,navigator:r}=R.useContext(er),{matches:i}=R.useContext(zr),{pathname:s}=to(),o=JSON.stringify(tm(i,n.v7_relativeSplatPath)),a=R.useRef(!1);return dT(()=>{a.current=!0}),R.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=nm(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:kr([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,s,t])}function $c(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=R.useContext(er),{matches:i}=R.useContext(zr),{pathname:s}=to(),o=JSON.stringify(tm(i,r.v7_relativeSplatPath));return R.useMemo(()=>nm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function BR(t,e){return $R(t,e)}function $R(t,e,n,r){eo()||Ne(!1);let{navigator:i}=R.useContext(er),{matches:s}=R.useContext(zr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=to(),h;if(e){var p;let D=typeof e=="string"?Zs(e):e;l==="/"||(p=D.pathname)!=null&&p.startsWith(l)||Ne(!1),h=D}else h=c;let g=h.pathname||"/",w=g;if(l!=="/"){let D=l.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(D.length).join("/")}let I=yR(t,{pathname:w}),k=WR(I&&I.map(D=>Object.assign({},D,{params:Object.assign({},a,D.params),pathname:kr([l,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?l:kr([l,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return e&&k?R.createElement(Uc.Provider,{value:{location:ka({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:wr.Pop}},k):k}function zR(){let t=YR(),e=LR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,null)}const qR=R.createElement(zR,null);class KR extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(zr.Provider,{value:this.props.routeContext},R.createElement(hT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GR(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(Fc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(zr.Provider,{value:e},r)}function WR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||Ne(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:w}=n,I=p.route.loader&&g[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||I){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,p,g)=>{let w,I=!1,k=null,D=null;n&&(w=a&&p.route.id?a[p.route.id]:void 0,k=p.route.errorElement||qR,l&&(c<0&&g===0?(ZR("route-fallback"),I=!0,D=null):c===g&&(I=!0,D=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),E=()=>{let y;return w?y=k:I?y=D:p.route.Component?y=R.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=h,R.createElement(GR,{match:p,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?R.createElement(KR,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}var fT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(fT||{}),pT=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pT||{});function HR(t){let e=R.useContext(Fc);return e||Ne(!1),e}function QR(t){let e=R.useContext(cT);return e||Ne(!1),e}function JR(t){let e=R.useContext(zr);return e||Ne(!1),e}function mT(t){let e=JR(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function YR(){var t;let e=R.useContext(hT),n=QR(),r=mT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function XR(){let{router:t}=HR(fT.UseNavigateStable),e=mT(pT.UseNavigateStable),n=R.useRef(!1);return dT(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ka({fromRouteId:e},s)))},[t,e])}const ky={};function ZR(t,e,n){ky[t]||(ky[t]=!0)}function eN(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function tN(t){let{to:e,replace:n,state:r,relative:i}=t;eo()||Ne(!1);let{future:s,static:o}=R.useContext(er),{matches:a}=R.useContext(zr),{pathname:l}=to(),c=Bc(),h=nm(e,tm(a,s.v7_relativeSplatPath),l,i==="path"),p=JSON.stringify(h);return R.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function En(t){Ne(!1)}function nN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wr.Pop,navigator:s,static:o=!1,future:a}=t;eo()&&Ne(!1);let l=e.replace(/^\/*/,"/"),c=R.useMemo(()=>({basename:l,navigator:s,static:o,future:ka({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Zs(r));let{pathname:h="/",search:p="",hash:g="",state:w=null,key:I="default"}=r,k=R.useMemo(()=>{let D=js(h,l);return D==null?null:{location:{pathname:D,search:p,hash:g,state:w,key:I},navigationType:i}},[l,h,p,g,w,I,i]);return k==null?null:R.createElement(er.Provider,{value:c},R.createElement(Uc.Provider,{children:n,value:k}))}function rN(t){let{children:e,location:n}=t;return BR(Tf(e),n)}new Promise(()=>{});function Tf(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,Tf(r.props.children,s));return}r.type!==En&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Tf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tc.apply(null,arguments)}function gT(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function iN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function sN(t,e){return t.button===0&&(!e||e==="_self")&&!iN(t)}const oN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],aN=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],lN="6";try{window.__reactRouterVersion=lN}catch{}const uN=R.createContext({isTransitioning:!1}),cN="startTransition",by=ZC[cN];function hN(t){let{basename:e,children:n,future:r,window:i}=t,s=R.useRef();s.current==null&&(s.current=mR({window:i,v5Compat:!0}));let o=s.current,[a,l]=R.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=R.useCallback(p=>{c&&by?by(()=>l(p)):l(p)},[l,c]);return R.useLayoutEffect(()=>o.listen(h),[o,h]),R.useEffect(()=>eN(r),[r]),R.createElement(nN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const dN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zc=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:p}=e,g=gT(e,oN),{basename:w}=R.useContext(er),I,k=!1;if(typeof c=="string"&&fN.test(c)&&(I=c,dN))try{let y=new URL(window.location.href),b=c.startsWith("//")?new URL(y.protocol+c):new URL(c),M=js(b.pathname,w);b.origin===y.origin&&M!=null?c=M+b.search+b.hash:k=!0}catch{}let D=FR(c,{relative:i}),T=gN(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:p});function E(y){r&&r(y),y.defaultPrevented||T(y)}return R.createElement("a",tc({},g,{href:I||D,onClick:k||s?r:E,ref:n,target:l}))}),pN=R.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:h}=e,p=gT(e,aN),g=$c(l,{relative:p.relative}),w=to(),I=R.useContext(cT),{navigator:k,basename:D}=R.useContext(er),T=I!=null&&_N(g)&&c===!0,E=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,y=w.pathname,b=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;i||(y=y.toLowerCase(),b=b?b.toLowerCase():null,E=E.toLowerCase()),b&&D&&(b=js(b,D)||b);const M=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let F=y===E||!o&&y.startsWith(E)&&y.charAt(M)==="/",S=b!=null&&(b===E||!o&&b.startsWith(E)&&b.charAt(E.length)==="/"),v={isActive:F,isPending:S,isTransitioning:T},C=F?r:void 0,x;typeof s=="function"?x=s(v):x=[s,F?"active":null,S?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(v):a;return R.createElement(zc,tc({},p,{"aria-current":C,className:x,ref:n,style:P,to:l,viewTransition:c}),typeof h=="function"?h(v):h)});var Sf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Sf||(Sf={}));var Dy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dy||(Dy={}));function mN(t){let e=R.useContext(Fc);return e||Ne(!1),e}function gN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Bc(),c=to(),h=$c(t,{relative:o});return R.useCallback(p=>{if(sN(p,n)){p.preventDefault();let g=r!==void 0?r:ec(c)===ec(h);l(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}function _N(t,e){e===void 0&&(e={});let n=R.useContext(uN);n==null&&Ne(!1);let{basename:r}=mN(Sf.useViewTransitionState),i=$c(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=js(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=js(n.nextLocation.pathname,r)||n.nextLocation.pathname;return If(i.pathname,o)!=null||If(i.pathname,s)!=null}var Vy={};/**
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
 */const _T=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,w=c&63;l||(w=64,o||(g=64)),r.push(n[h],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_T(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new vN;const g=s<<2|a>>4;if(r.push(g),c!==64){const w=a<<4&240|c>>2;if(r.push(w),p!==64){const I=c<<6&192|p;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EN=function(t){const e=_T(t);return yT.encodeByteArray(e,!0)},vT=function(t){return EN(t).replace(/\./g,"")},ET=function(t){try{return yT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IN=()=>wN().__FIREBASE_DEFAULTS__,TN=()=>{if(typeof process>"u"||typeof Vy>"u")return;const t=Vy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ET(t[1]);return e&&JSON.parse(e)},qc=()=>{try{return IN()||TN()||SN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wT=t=>{var e,n;return(n=(e=qc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AN=t=>{const e=wT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},IT=()=>{var t;return(t=qc())===null||t===void 0?void 0:t.config},TT=t=>{var e;return(e=qc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class CN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function PN(){var t;const e=(t=qc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function NN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bN(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ST(){return!PN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rm(){try{return typeof indexedDB=="object"}catch{return!1}}function AT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function DN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const VN="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VN,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ui.prototype.create)}}class Ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ON(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yn(i,a,r)}}function ON(t,e){return t.replace(MN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const MN=/\{\$([^}]+)}/g;function LN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Oy(s)&&Oy(o)){if(!ba(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Oy(t){return t!==null&&typeof t=="object"}/**
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
 */function el(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ko(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jN(t,e){const n=new FN(t,e);return n.subscribe.bind(n)}class FN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ld),i.error===void 0&&(i.error=ld),i.complete===void 0&&(i.complete=ld);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ld(){}/**
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
 */function Ae(t){return t&&t._delegate?t._delegate:t}class nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ri="[DEFAULT]";/**
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
 */class BN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zN(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$N(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $N(t){return t===ri?void 0:t}function zN(t){return t.instantiationMode==="EAGER"}/**
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
 */class qN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const KN={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},GN=oe.INFO,WN={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},HN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class im{constructor(e){this.name=e,this._logLevel=GN,this._logHandler=HN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const QN=(t,e)=>e.some(n=>t instanceof n);let My,Ly;function JN(){return My||(My=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YN(){return Ly||(Ly=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CT=new WeakMap,Af=new WeakMap,xT=new WeakMap,ud=new WeakMap,sm=new WeakMap;function XN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CT.set(n,t)}).catch(()=>{}),sm.set(e,t),e}function ZN(t){if(Af.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Af.set(t,e)}let Cf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Af.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ek(t){Cf=t(Cf)}function tk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cd(this),e,...n);return xT.set(r,e.sort?e.sort():[e]),zn(r)}:YN().includes(t)?function(...e){return t.apply(cd(this),e),zn(CT.get(this))}:function(...e){return zn(t.apply(cd(this),e))}}function nk(t){return typeof t=="function"?tk(t):(t instanceof IDBTransaction&&ZN(t),QN(t,JN())?new Proxy(t,Cf):t)}function zn(t){if(t instanceof IDBRequest)return XN(t);if(ud.has(t))return ud.get(t);const e=nk(t);return e!==t&&(ud.set(t,e),sm.set(e,t)),e}const cd=t=>sm.get(t);function Kc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function hd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),zn(n).then(()=>{})}const rk=["get","getKey","getAll","getAllKeys","count"],ik=["put","add","delete","clear"],dd=new Map;function jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dd.get(e))return dd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ik.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return dd.set(e,s),s}ek(t=>({...t,get:(e,n,r)=>jy(e,n)||t.get(e,n,r),has:(e,n)=>!!jy(e,n)||t.has(e,n)}));/**
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
 */class sk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ok(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ok(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xf="@firebase/app",Fy="0.10.13";/**
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
 */const Jn=new im("@firebase/app"),ak="@firebase/app-compat",lk="@firebase/analytics-compat",uk="@firebase/analytics",ck="@firebase/app-check-compat",hk="@firebase/app-check",dk="@firebase/auth",fk="@firebase/auth-compat",pk="@firebase/database",mk="@firebase/data-connect",gk="@firebase/database-compat",_k="@firebase/functions",yk="@firebase/functions-compat",vk="@firebase/installations",Ek="@firebase/installations-compat",wk="@firebase/messaging",Ik="@firebase/messaging-compat",Tk="@firebase/performance",Sk="@firebase/performance-compat",Ak="@firebase/remote-config",Ck="@firebase/remote-config-compat",xk="@firebase/storage",Pk="@firebase/storage-compat",Rk="@firebase/firestore",Nk="@firebase/vertexai-preview",kk="@firebase/firestore-compat",bk="firebase",Dk="10.14.1";/**
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
 */const Pf="[DEFAULT]",Vk={[xf]:"fire-core",[ak]:"fire-core-compat",[uk]:"fire-analytics",[lk]:"fire-analytics-compat",[hk]:"fire-app-check",[ck]:"fire-app-check-compat",[dk]:"fire-auth",[fk]:"fire-auth-compat",[pk]:"fire-rtdb",[mk]:"fire-data-connect",[gk]:"fire-rtdb-compat",[_k]:"fire-fn",[yk]:"fire-fn-compat",[vk]:"fire-iid",[Ek]:"fire-iid-compat",[wk]:"fire-fcm",[Ik]:"fire-fcm-compat",[Tk]:"fire-perf",[Sk]:"fire-perf-compat",[Ak]:"fire-rc",[Ck]:"fire-rc-compat",[xk]:"fire-gcs",[Pk]:"fire-gcs-compat",[Rk]:"fire-fst",[kk]:"fire-fst-compat",[Nk]:"fire-vertex","fire-js":"fire-js",[bk]:"fire-js-all"};/**
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
 */const nc=new Map,Ok=new Map,Rf=new Map;function Uy(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mn(t){const e=t.name;if(Rf.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;Rf.set(e,t);for(const n of nc.values())Uy(n,t);for(const n of Ok.values())Uy(n,t);return!0}function Bi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
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
 */const Mk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new Ui("app","Firebase",Mk);/**
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
 */class Lk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const no=Dk;function PT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw br.create("bad-app-name",{appName:String(i)});if(n||(n=IT()),!n)throw br.create("no-options");const s=nc.get(i);if(s){if(ba(n,s.options)&&ba(r,s.config))return s;throw br.create("duplicate-app",{appName:i})}const o=new qN(i);for(const l of Rf.values())o.addComponent(l);const a=new Lk(n,r,o);return nc.set(i,a),a}function om(t=Pf){const e=nc.get(t);if(!e&&t===Pf&&IT())return PT();if(!e)throw br.create("no-app",{appName:t});return e}function Dt(t,e,n){var r;let i=(r=Vk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(a.join(" "));return}mn(new nn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jk="firebase-heartbeat-database",Fk=1,Da="firebase-heartbeat-store";let fd=null;function RT(){return fd||(fd=Kc(jk,Fk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Da)}catch(n){console.warn(n)}}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),fd}async function Uk(t){try{const n=(await RT()).transaction(Da),r=await n.objectStore(Da).get(NT(t));return await n.done,r}catch(e){if(e instanceof yn)Jn.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function By(t,e){try{const r=(await RT()).transaction(Da,"readwrite");await r.objectStore(Da).put(e,NT(t)),await r.done}catch(n){if(n instanceof yn)Jn.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function NT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Bk=1024,$k=30*24*60*60*1e3;class zk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$y();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$k}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$y(),{heartbeatsToSend:r,unsentEntries:i}=qk(this._heartbeatsCache.heartbeats),s=vT(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Jn.warn(n),""}}}function $y(){return new Date().toISOString().substring(0,10)}function qk(t,e=Bk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rm()?AT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Uk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return By(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return By(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zy(t){return vT(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Gk(t){mn(new nn("platform-logger",e=>new sk(e),"PRIVATE")),mn(new nn("heartbeat",e=>new zk(e),"PRIVATE")),Dt(xf,Fy,t),Dt(xf,Fy,"esm2017"),Dt("fire-js","")}Gk("");function am(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wk=kT,bT=new Ui("auth","Firebase",kT());/**
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
 */const rc=new im("@firebase/auth");function Hk(t,...e){rc.logLevel<=oe.WARN&&rc.warn(`Auth (${no}): ${t}`,...e)}function gu(t,...e){rc.logLevel<=oe.ERROR&&rc.error(`Auth (${no}): ${t}`,...e)}/**
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
 */function gn(t,...e){throw lm(t,...e)}function Pn(t,...e){return lm(t,...e)}function DT(t,e,n){const r=Object.assign(Object.assign({},Wk()),{[e]:n});return new Ui("auth","Firebase",r).create(e,{appName:t.name})}function qn(t){return DT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bT.create(t,...e)}function X(t,e,...n){if(!t)throw lm(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gu(e),new Error(e)}function Yn(t,e){t||jn(e)}/**
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
 */function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qk(){return qy()==="http:"||qy()==="https:"}function qy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Jk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qk()||NN()||"connection"in navigator)?navigator.onLine:!0}function Yk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class tl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=xN()||kN()}get(){return Jk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function um(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class VT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zk=new tl(3e4,6e4);function qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,i={}){return OT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=el(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return RN()||(c.referrerPolicy="no-referrer"),VT.fetch()(MT(t,t.config.apiHost,n,a),c)})}async function OT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xk),e);try{const i=new tb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Wl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw DT(t,h,c);gn(t,h)}}catch(i){if(i instanceof yn)throw i;gn(t,"network-request-failed",{message:String(i)})}}async function nl(t,e,n,r,i={}){const s=await tr(t,e,n,r,i);return"mfaPendingCredential"in s&&gn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function MT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?um(t.config,i):`${t.config.apiScheme}://${i}`}function eb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),Zk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(t,e,r);return i.customData._tokenResponse=n,i}function Ky(t){return t!==void 0&&t.enterprise!==void 0}class nb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rb(t,e){return tr(t,"GET","/v2/recaptchaConfig",qr(t,e))}/**
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
 */async function ib(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function LT(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function aa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sb(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),i=cm(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:aa(pd(i.auth_time)),issuedAtTime:aa(pd(i.iat)),expirationTime:aa(pd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pd(t){return Number(t)*1e3}function cm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const i=ET(n);return i?JSON.parse(i):(gu("Failed to decode base64 JWT payload"),null)}catch(i){return gu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gy(t){const e=cm(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&ob(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ob({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ab{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=aa(this.lastLoginAt),this.creationTime=aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fs(t,LT(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jT(s.providerUserInfo):[],a=ub(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new kf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function lb(t){const e=Ae(t);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ub(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jT(t){return t.map(e=>{var{providerId:n}=e,r=am(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cb(t,e){const n=await OT(t,{},async()=>{const r=el({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=MT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",VT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hb(t,e){return tr(t,"POST","/v2/accounts:revokeToken",qr(t,e))}/**
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
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Gy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function ar(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=am(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ab(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sb(this,e)}reload(){return lb(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(qn(this.auth));const e=await this.getIdToken();return await Fs(this,ib(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:b,isAnonymous:M,providerData:F,stsTokenManager:S}=n;X(y&&S,e,"internal-error");const v=Cs.fromJSON(this.name,S);X(typeof y=="string",e,"internal-error"),ar(p,e.name),ar(g,e.name),X(typeof b=="boolean",e,"internal-error"),X(typeof M=="boolean",e,"internal-error"),ar(w,e.name),ar(I,e.name),ar(k,e.name),ar(D,e.name),ar(T,e.name),ar(E,e.name);const C=new Fn({uid:y,auth:e,email:g,emailVerified:b,displayName:p,isAnonymous:M,photoURL:I,phoneNumber:w,tenantId:k,stsTokenManager:v,createdAt:T,lastLoginAt:E});return F&&Array.isArray(F)&&(C.providerData=F.map(x=>Object.assign({},x))),D&&(C._redirectEventId=D),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Cs;i.updateFromServerResponse(n);const s=new Fn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ic(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];X(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?jT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Cs;a.updateFromIdToken(r);const l=new Fn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new kf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Wy=new Map;function Un(t){Yn(t instanceof Function,"Expected a class definition");let e=Wy.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wy.set(t,e),e)}/**
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
 */class FT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FT.type="NONE";const Hy=FT;/**
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
 */function _u(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_u(this.userKey,i.apiKey,s),this.fullPersistenceKey=_u("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Un(Hy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Un(Hy);const o=_u(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const p=Fn._fromJSON(e,h);c!==s&&(a=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new xs(s,e,r))}}/**
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
 */function Qy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KT(e))return"Blackberry";if(GT(e))return"Webos";if(BT(e))return"Safari";if((e.includes("chrome/")||$T(e))&&!e.includes("edge/"))return"Chrome";if(qT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UT(t=qe()){return/firefox\//i.test(t)}function BT(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $T(t=qe()){return/crios\//i.test(t)}function zT(t=qe()){return/iemobile/i.test(t)}function qT(t=qe()){return/android/i.test(t)}function KT(t=qe()){return/blackberry/i.test(t)}function GT(t=qe()){return/webos/i.test(t)}function hm(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function db(t=qe()){var e;return hm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fb(){return bN()&&document.documentMode===10}function WT(t=qe()){return hm(t)||qT(t)||GT(t)||KT(t)||/windows phone/i.test(t)||zT(t)}/**
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
 */function HT(t,e=[]){let n;switch(t){case"Browser":n=Qy(qe());break;case"Worker":n=`${Qy(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${no}/${r}`}/**
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
 */class pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mb(t,e={}){return tr(t,"GET","/v2/passwordPolicy",qr(t,e))}/**
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
 */const gb=6;class _b{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class yb{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jy(this),this.idTokenSubscription=new Jy(this),this.beforeStateQueue=new pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await LT(this,{idToken:e}),r=await Fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(qn(this));const n=e?Ae(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mb(this),n=new _b(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Hk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $i(t){return Ae(t)}class Jy{constructor(e){this.auth=e,this.observer=null,this.addObserver=jN(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vb(t){Gc=t}function QT(t){return Gc.loadJS(t)}function Eb(){return Gc.recaptchaEnterpriseScript}function wb(){return Gc.gapiScript}function Ib(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Tb="recaptcha-enterprise",Sb="NO_RECAPTCHA";class Ab{constructor(e){this.type=Tb,this.auth=$i(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nb(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ky(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Sb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ky(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Eb();l.length!==0&&(l+=a),QT(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Yy(t,e,n,r=!1){const i=new Ab(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Yy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Yy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function Cb(t,e){const n=Bi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ba(s,e??{}))return i;gn(i,"already-initialized")}return n.initialize({options:e})}function xb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pb(t,e,n){const r=$i(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=JT(e),{host:o,port:a}=Rb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Nb()}function JT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rb(t){const e=JT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xy(o)}}}function Xy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function kb(t,e){return tr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bb(t,e){return nl(t,"POST","/v1/accounts:signInWithPassword",qr(t,e))}/**
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
 */async function Db(t,e){return nl(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}async function Vb(t,e){return nl(t,"POST","/v1/accounts:signInWithEmailLink",qr(t,e))}/**
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
 */class Va extends dm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Va(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Va(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(e,n,"signInWithPassword",bb);case"emailLink":return Db(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bf(e,r,"signUpPassword",kb);case"emailLink":return Vb(e,{idToken:n,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ps(t,e){return nl(t,"POST","/v1/accounts:signInWithIdp",qr(t,e))}/**
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
 */const Ob="http://localhost";class Ci extends dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=am(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:Ob,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=el(n)}return e}}/**
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
 */function Mb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lb(t){const e=Ko(Go(t)).link,n=e?Ko(Go(e)).deep_link_id:null,r=Ko(Go(t)).deep_link_id;return(r?Ko(Go(r)).link:null)||r||n||e||t}class fm{constructor(e){var n,r,i,s,o,a;const l=Ko(Go(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Mb((i=l.mode)!==null&&i!==void 0?i:null);X(c&&h&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lb(e);try{return new fm(n)}catch{return null}}}/**
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
 */class ro{constructor(){this.providerId=ro.PROVIDER_ID}static credential(e,n){return Va._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fm.parseLink(n);return X(r,"argument-error"),Va._fromEmailAndCode(e,r.code,r.tenantId)}}ro.PROVIDER_ID="password";ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class YT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rl extends YT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pr extends rl{constructor(){super("facebook.com")}static credential(e){return Ci._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class mr extends rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ci._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
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
 */class gr extends rl{constructor(){super("github.com")}static credential(e){return Ci._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
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
 */class _r extends rl{constructor(){super("twitter.com")}static credential(e,n){return Ci._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
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
 */async function jb(t,e){return nl(t,"POST","/v1/accounts:signUp",qr(t,e))}/**
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
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fn._fromIdTokenResponse(e,r,i),o=Zy(r);return new xi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zy(r);return new xi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sc extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new sc(e,n,r,i)}}function XT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(t,s,e,r):s})}async function Fb(t,e,n=!1){const r=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
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
 */async function Ub(t,e,n=!1){const{auth:r}=t;if(Tn(r.app))return Promise.reject(qn(r));const i="reauthenticate";try{const s=await Fs(t,XT(r,i,e,t),n);X(s.idToken,r,"internal-error");const o=cm(s.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),xi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),s}}/**
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
 */async function ZT(t,e,n=!1){if(Tn(t.app))return Promise.reject(qn(t));const r="signIn",i=await XT(t,r,e),s=await xi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Bb(t,e){return ZT($i(t),e)}/**
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
 */async function e0(t){const e=$i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $b(t,e,n){if(Tn(t.app))return Promise.reject(qn(t));const r=$i(t),o=await bf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&e0(t),l}),a=await xi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function zb(t,e,n){return Tn(t.app)?Promise.reject(qn(t)):Bb(Ae(t),ro.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&e0(t),r})}/**
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
 */async function qb(t,e){return tr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Kb(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ae(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fs(r,qb(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}/**
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
 */function Gb(t,e){return Ae(t).setPersistence(e)}function Wb(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function Hb(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function Qb(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function Jb(t){return Ae(t).signOut()}const oc="__sak";/**
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
 */class t0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oc,"1"),this.storage.removeItem(oc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Yb=1e3,Xb=10;class n0 extends t0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}n0.type="LOCAL";const r0=n0;/**
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
 */class i0 extends t0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i0.type="SESSION";const s0=i0;/**
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
 */function Zb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Zb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
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
 */function pm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class e1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=pm("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Rn(){return window}function t1(t){Rn().location.href=t}/**
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
 */function o0(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function n1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function i1(){return o0()?self:null}/**
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
 */const a0="firebaseLocalStorageDb",s1=1,ac="firebaseLocalStorage",l0="fbase_key";class il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hc(t,e){return t.transaction([ac],e?"readwrite":"readonly").objectStore(ac)}function o1(){const t=indexedDB.deleteDatabase(a0);return new il(t).toPromise()}function Df(){const t=indexedDB.open(a0,s1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ac,{keyPath:l0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ac)?e(r):(r.close(),await o1(),e(await Df()))})})}async function ev(t,e,n){const r=Hc(t,!0).put({[l0]:e,value:n});return new il(r).toPromise()}async function a1(t,e){const n=Hc(t,!1).get(e),r=await new il(n).toPromise();return r===void 0?null:r.value}function tv(t,e){const n=Hc(t,!0).delete(e);return new il(n).toPromise()}const l1=800,u1=3;class u0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Df(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>u1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(i1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await n1(),!this.activeServiceWorker)return;this.sender=new e1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Df();return await ev(e,oc,"1"),await tv(e,oc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ev(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>a1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hc(i,!1).getAll();return new il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u0.type="LOCAL";const c1=u0;new tl(3e4,6e4);/**
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
 */function h1(t,e){return e?Un(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mm extends dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function d1(t){return ZT(t.auth,new mm(t),t.bypassAuthState)}function f1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Ub(n,new mm(t),t.bypassAuthState)}async function p1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Fb(n,new mm(t),t.bypassAuthState)}/**
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
 */class c0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return d1;case"linkViaPopup":case"linkViaRedirect":return p1;case"reauthViaPopup":case"reauthViaRedirect":return f1;default:gn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const m1=new tl(2e3,1e4);class vs extends c0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=pm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m1.get())};e()}}vs.currentPopupAction=null;/**
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
 */const g1="pendingRedirect",yu=new Map;class _1 extends c0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yu.get(this.auth._key());if(!e){try{const r=await y1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yu.set(this.auth._key(),e)}return this.bypassAuthState||yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y1(t,e){const n=w1(e),r=E1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function v1(t,e){yu.set(t._key(),e)}function E1(t){return Un(t._redirectPersistence)}function w1(t){return _u(g1,t.config.apiKey,t.name)}async function I1(t,e,n=!1){if(Tn(t.app))return Promise.reject(qn(t));const r=$i(t),i=h1(r,e),o=await new _1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const T1=10*60*1e3;class S1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!h0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=T1&&this.cachedEventUids.clear(),this.cachedEventUids.has(nv(e))}saveEventToCache(e){this.cachedEventUids.add(nv(e)),this.lastProcessedEventTime=Date.now()}}function nv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function h0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h0(t);default:return!1}}/**
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
 */async function C1(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
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
 */const x1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P1=/^https?/;async function R1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await C1(t);for(const n of e)try{if(N1(n))return}catch{}gn(t,"unauthorized-domain")}function N1(t){const e=Nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!P1.test(n))return!1;if(x1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const k1=new tl(3e4,6e4);function rv(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function b1(t){return new Promise((e,n)=>{var r,i,s;function o(){rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rv(),n(Pn(t,"network-request-failed"))},timeout:k1.get()})}if(!((i=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Rn().gapi)===null||s===void 0)&&s.load)o();else{const a=Ib("iframefcb");return Rn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},QT(`${wb()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vu=null,e})}let vu=null;function D1(t){return vu=vu||b1(t),vu}/**
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
 */const V1=new tl(5e3,15e3),O1="__/auth/iframe",M1="emulator/auth/iframe",L1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function F1(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?um(e,M1):`https://${t.config.authDomain}/${O1}`,r={apiKey:e.apiKey,appName:t.name,v:no},i=j1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${el(r).slice(1)}`}async function U1(t){const e=await D1(t),n=Rn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:F1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=Rn().setTimeout(()=>{s(o)},V1.get());function l(){Rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const B1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$1=500,z1=600,q1="_blank",K1="http://localhost";class iv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G1(t,e,n,r=$1,i=z1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},B1),{width:r.toString(),height:i.toString(),top:s,left:o}),c=qe().toLowerCase();n&&(a=$T(c)?q1:n),UT(c)&&(e=e||K1,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[w,I])=>`${g}${w}=${I},`,"");if(db(c)&&a!=="_self")return W1(e||"",a),new iv(null);const p=window.open(e||"",a,h);X(p,t,"popup-blocked");try{p.focus()}catch{}return new iv(p)}function W1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const H1="__/auth/handler",Q1="emulator/auth/handler",J1=encodeURIComponent("fac");async function sv(t,e,n,r,i,s){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:no,eventId:i};if(e instanceof YT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof rl){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${J1}=${encodeURIComponent(l)}`:"";return`${Y1(t)}?${el(a).slice(1)}${c}`}function Y1({config:t}){return t.emulator?um(t,Q1):`https://${t.authDomain}/${H1}`}/**
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
 */const md="webStorageSupport";class X1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s0,this._completeRedirectFn=I1,this._overrideRedirectResult=v1}async _openPopup(e,n,r,i){var s;Yn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sv(e,n,r,Nf(),i);return G1(e,o,pm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sv(e,n,r,Nf(),i);return t1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await U1(e),r=new S1(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(md,{type:md},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[md];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WT()||BT()||hm()}}const Z1=X1;var ov="@firebase/auth",av="1.7.9";/**
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
 */class eD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nD(t){mn(new nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HT(t)},c=new yb(r,i,s,l);return xb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mn(new nn("auth-internal",e=>{const n=$i(e.getProvider("auth").getImmediate());return(r=>new eD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(ov,av,tD(t)),Dt(ov,av,"esm2017")}/**
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
 */const rD=5*60,iD=TT("authIdTokenMaxAge")||rD;let lv=null;const sD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iD)return;const i=n==null?void 0:n.token;lv!==i&&(lv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oD(t=om()){const e=Bi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cb(t,{popupRedirectResolver:Z1,persistence:[c1,r0,s0]}),r=TT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sD(s.toString());Hb(n,o,()=>o(n.currentUser)),Wb(n,a=>o(a))}}const i=wT("auth");return i&&Pb(n,`http://${i}`),n}function aD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nD("Browser");var uv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi,d0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,v){function C(){}C.prototype=v.prototype,S.D=v.prototype,S.prototype=new C,S.prototype.constructor=S,S.C=function(x,P,N){for(var A=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)A[ie-2]=arguments[ie];return v.prototype[P].apply(x,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,v,C){C||(C=0);var x=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)x[P]=v.charCodeAt(C++)|v.charCodeAt(C++)<<8|v.charCodeAt(C++)<<16|v.charCodeAt(C++)<<24;else for(P=0;16>P;++P)x[P]=v[C++]|v[C++]<<8|v[C++]<<16|v[C++]<<24;v=S.g[0],C=S.g[1],P=S.g[2];var N=S.g[3],A=v+(N^C&(P^N))+x[0]+3614090360&4294967295;v=C+(A<<7&4294967295|A>>>25),A=N+(P^v&(C^P))+x[1]+3905402710&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(C^N&(v^C))+x[2]+606105819&4294967295,P=N+(A<<17&4294967295|A>>>15),A=C+(v^P&(N^v))+x[3]+3250441966&4294967295,C=P+(A<<22&4294967295|A>>>10),A=v+(N^C&(P^N))+x[4]+4118548399&4294967295,v=C+(A<<7&4294967295|A>>>25),A=N+(P^v&(C^P))+x[5]+1200080426&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(C^N&(v^C))+x[6]+2821735955&4294967295,P=N+(A<<17&4294967295|A>>>15),A=C+(v^P&(N^v))+x[7]+4249261313&4294967295,C=P+(A<<22&4294967295|A>>>10),A=v+(N^C&(P^N))+x[8]+1770035416&4294967295,v=C+(A<<7&4294967295|A>>>25),A=N+(P^v&(C^P))+x[9]+2336552879&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(C^N&(v^C))+x[10]+4294925233&4294967295,P=N+(A<<17&4294967295|A>>>15),A=C+(v^P&(N^v))+x[11]+2304563134&4294967295,C=P+(A<<22&4294967295|A>>>10),A=v+(N^C&(P^N))+x[12]+1804603682&4294967295,v=C+(A<<7&4294967295|A>>>25),A=N+(P^v&(C^P))+x[13]+4254626195&4294967295,N=v+(A<<12&4294967295|A>>>20),A=P+(C^N&(v^C))+x[14]+2792965006&4294967295,P=N+(A<<17&4294967295|A>>>15),A=C+(v^P&(N^v))+x[15]+1236535329&4294967295,C=P+(A<<22&4294967295|A>>>10),A=v+(P^N&(C^P))+x[1]+4129170786&4294967295,v=C+(A<<5&4294967295|A>>>27),A=N+(C^P&(v^C))+x[6]+3225465664&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^C&(N^v))+x[11]+643717713&4294967295,P=N+(A<<14&4294967295|A>>>18),A=C+(N^v&(P^N))+x[0]+3921069994&4294967295,C=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(C^P))+x[5]+3593408605&4294967295,v=C+(A<<5&4294967295|A>>>27),A=N+(C^P&(v^C))+x[10]+38016083&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^C&(N^v))+x[15]+3634488961&4294967295,P=N+(A<<14&4294967295|A>>>18),A=C+(N^v&(P^N))+x[4]+3889429448&4294967295,C=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(C^P))+x[9]+568446438&4294967295,v=C+(A<<5&4294967295|A>>>27),A=N+(C^P&(v^C))+x[14]+3275163606&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^C&(N^v))+x[3]+4107603335&4294967295,P=N+(A<<14&4294967295|A>>>18),A=C+(N^v&(P^N))+x[8]+1163531501&4294967295,C=P+(A<<20&4294967295|A>>>12),A=v+(P^N&(C^P))+x[13]+2850285829&4294967295,v=C+(A<<5&4294967295|A>>>27),A=N+(C^P&(v^C))+x[2]+4243563512&4294967295,N=v+(A<<9&4294967295|A>>>23),A=P+(v^C&(N^v))+x[7]+1735328473&4294967295,P=N+(A<<14&4294967295|A>>>18),A=C+(N^v&(P^N))+x[12]+2368359562&4294967295,C=P+(A<<20&4294967295|A>>>12),A=v+(C^P^N)+x[5]+4294588738&4294967295,v=C+(A<<4&4294967295|A>>>28),A=N+(v^C^P)+x[8]+2272392833&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^C)+x[11]+1839030562&4294967295,P=N+(A<<16&4294967295|A>>>16),A=C+(P^N^v)+x[14]+4259657740&4294967295,C=P+(A<<23&4294967295|A>>>9),A=v+(C^P^N)+x[1]+2763975236&4294967295,v=C+(A<<4&4294967295|A>>>28),A=N+(v^C^P)+x[4]+1272893353&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^C)+x[7]+4139469664&4294967295,P=N+(A<<16&4294967295|A>>>16),A=C+(P^N^v)+x[10]+3200236656&4294967295,C=P+(A<<23&4294967295|A>>>9),A=v+(C^P^N)+x[13]+681279174&4294967295,v=C+(A<<4&4294967295|A>>>28),A=N+(v^C^P)+x[0]+3936430074&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^C)+x[3]+3572445317&4294967295,P=N+(A<<16&4294967295|A>>>16),A=C+(P^N^v)+x[6]+76029189&4294967295,C=P+(A<<23&4294967295|A>>>9),A=v+(C^P^N)+x[9]+3654602809&4294967295,v=C+(A<<4&4294967295|A>>>28),A=N+(v^C^P)+x[12]+3873151461&4294967295,N=v+(A<<11&4294967295|A>>>21),A=P+(N^v^C)+x[15]+530742520&4294967295,P=N+(A<<16&4294967295|A>>>16),A=C+(P^N^v)+x[2]+3299628645&4294967295,C=P+(A<<23&4294967295|A>>>9),A=v+(P^(C|~N))+x[0]+4096336452&4294967295,v=C+(A<<6&4294967295|A>>>26),A=N+(C^(v|~P))+x[7]+1126891415&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~C))+x[14]+2878612391&4294967295,P=N+(A<<15&4294967295|A>>>17),A=C+(N^(P|~v))+x[5]+4237533241&4294967295,C=P+(A<<21&4294967295|A>>>11),A=v+(P^(C|~N))+x[12]+1700485571&4294967295,v=C+(A<<6&4294967295|A>>>26),A=N+(C^(v|~P))+x[3]+2399980690&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~C))+x[10]+4293915773&4294967295,P=N+(A<<15&4294967295|A>>>17),A=C+(N^(P|~v))+x[1]+2240044497&4294967295,C=P+(A<<21&4294967295|A>>>11),A=v+(P^(C|~N))+x[8]+1873313359&4294967295,v=C+(A<<6&4294967295|A>>>26),A=N+(C^(v|~P))+x[15]+4264355552&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~C))+x[6]+2734768916&4294967295,P=N+(A<<15&4294967295|A>>>17),A=C+(N^(P|~v))+x[13]+1309151649&4294967295,C=P+(A<<21&4294967295|A>>>11),A=v+(P^(C|~N))+x[4]+4149444226&4294967295,v=C+(A<<6&4294967295|A>>>26),A=N+(C^(v|~P))+x[11]+3174756917&4294967295,N=v+(A<<10&4294967295|A>>>22),A=P+(v^(N|~C))+x[2]+718787259&4294967295,P=N+(A<<15&4294967295|A>>>17),A=C+(N^(P|~v))+x[9]+3951481745&4294967295,S.g[0]=S.g[0]+v&4294967295,S.g[1]=S.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+P&4294967295,S.g[3]=S.g[3]+N&4294967295}r.prototype.u=function(S,v){v===void 0&&(v=S.length);for(var C=v-this.blockSize,x=this.B,P=this.h,N=0;N<v;){if(P==0)for(;N<=C;)i(this,S,N),N+=this.blockSize;if(typeof S=="string"){for(;N<v;)if(x[P++]=S.charCodeAt(N++),P==this.blockSize){i(this,x),P=0;break}}else for(;N<v;)if(x[P++]=S[N++],P==this.blockSize){i(this,x),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var v=1;v<S.length-8;++v)S[v]=0;var C=8*this.o;for(v=S.length-8;v<S.length;++v)S[v]=C&255,C/=256;for(this.u(S),S=Array(16),v=C=0;4>v;++v)for(var x=0;32>x;x+=8)S[C++]=this.g[v]>>>x&255;return S};function s(S,v){var C=a;return Object.prototype.hasOwnProperty.call(C,S)?C[S]:C[S]=v(S)}function o(S,v){this.h=v;for(var C=[],x=!0,P=S.length-1;0<=P;P--){var N=S[P]|0;x&&N==v||(C[P]=N,x=!1)}this.g=C}var a={};function l(S){return-128<=S&&128>S?s(S,function(v){return new o([v|0],0>v?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return p;if(0>S)return D(c(-S));for(var v=[],C=1,x=0;S>=C;x++)v[x]=S/C|0,C*=4294967296;return new o(v,0)}function h(S,v){if(S.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S.charAt(0)=="-")return D(h(S.substring(1),v));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(v,8)),x=p,P=0;P<S.length;P+=8){var N=Math.min(8,S.length-P),A=parseInt(S.substring(P,P+N),v);8>N?(N=c(Math.pow(v,N)),x=x.j(N).add(c(A))):(x=x.j(C),x=x.add(c(A)))}return x}var p=l(0),g=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();for(var S=0,v=1,C=0;C<this.g.length;C++){var x=this.i(C);S+=(0<=x?x:4294967296+x)*v,v*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(I(this))return"0";if(k(this))return"-"+D(this).toString(S);for(var v=c(Math.pow(S,6)),C=this,x="";;){var P=b(C,v).g;C=T(C,P.j(v));var N=((0<C.g.length?C.g[0]:C.h)>>>0).toString(S);if(C=P,I(C))return N+x;for(;6>N.length;)N="0"+N;x=N+x}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function I(S){if(S.h!=0)return!1;for(var v=0;v<S.g.length;v++)if(S.g[v]!=0)return!1;return!0}function k(S){return S.h==-1}t.l=function(S){return S=T(this,S),k(S)?-1:I(S)?0:1};function D(S){for(var v=S.g.length,C=[],x=0;x<v;x++)C[x]=~S.g[x];return new o(C,~S.h).add(g)}t.abs=function(){return k(this)?D(this):this},t.add=function(S){for(var v=Math.max(this.g.length,S.g.length),C=[],x=0,P=0;P<=v;P++){var N=x+(this.i(P)&65535)+(S.i(P)&65535),A=(N>>>16)+(this.i(P)>>>16)+(S.i(P)>>>16);x=A>>>16,N&=65535,A&=65535,C[P]=A<<16|N}return new o(C,C[C.length-1]&-2147483648?-1:0)};function T(S,v){return S.add(D(v))}t.j=function(S){if(I(this)||I(S))return p;if(k(this))return k(S)?D(this).j(D(S)):D(D(this).j(S));if(k(S))return D(this.j(D(S)));if(0>this.l(w)&&0>S.l(w))return c(this.m()*S.m());for(var v=this.g.length+S.g.length,C=[],x=0;x<2*v;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var P=0;P<S.g.length;P++){var N=this.i(x)>>>16,A=this.i(x)&65535,ie=S.i(P)>>>16,G=S.i(P)&65535;C[2*x+2*P]+=A*G,E(C,2*x+2*P),C[2*x+2*P+1]+=N*G,E(C,2*x+2*P+1),C[2*x+2*P+1]+=A*ie,E(C,2*x+2*P+1),C[2*x+2*P+2]+=N*ie,E(C,2*x+2*P+2)}for(x=0;x<v;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=v;x<2*v;x++)C[x]=0;return new o(C,0)};function E(S,v){for(;(S[v]&65535)!=S[v];)S[v+1]+=S[v]>>>16,S[v]&=65535,v++}function y(S,v){this.g=S,this.h=v}function b(S,v){if(I(v))throw Error("division by zero");if(I(S))return new y(p,p);if(k(S))return v=b(D(S),v),new y(D(v.g),D(v.h));if(k(v))return v=b(S,D(v)),new y(D(v.g),v.h);if(30<S.g.length){if(k(S)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var C=g,x=v;0>=x.l(S);)C=M(C),x=M(x);var P=F(C,1),N=F(x,1);for(x=F(x,2),C=F(C,2);!I(x);){var A=N.add(x);0>=A.l(S)&&(P=P.add(C),N=A),x=F(x,1),C=F(C,1)}return v=T(S,P.j(v)),new y(P,v)}for(P=p;0<=S.l(v);){for(C=Math.max(1,Math.floor(S.m()/v.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),N=c(C),A=N.j(v);k(A)||0<A.l(S);)C-=x,N=c(C),A=N.j(v);I(N)&&(N=g),P=P.add(N),S=T(S,A)}return new y(P,S)}t.A=function(S){return b(this,S).h},t.and=function(S){for(var v=Math.max(this.g.length,S.g.length),C=[],x=0;x<v;x++)C[x]=this.i(x)&S.i(x);return new o(C,this.h&S.h)},t.or=function(S){for(var v=Math.max(this.g.length,S.g.length),C=[],x=0;x<v;x++)C[x]=this.i(x)|S.i(x);return new o(C,this.h|S.h)},t.xor=function(S){for(var v=Math.max(this.g.length,S.g.length),C=[],x=0;x<v;x++)C[x]=this.i(x)^S.i(x);return new o(C,this.h^S.h)};function M(S){for(var v=S.g.length+1,C=[],x=0;x<v;x++)C[x]=S.i(x)<<1|S.i(x-1)>>>31;return new o(C,S.h)}function F(S,v){var C=v>>5;v%=32;for(var x=S.g.length-C,P=[],N=0;N<x;N++)P[N]=0<v?S.i(N+C)>>>v|S.i(N+C+1)<<32-v:S.i(N+C);return new o(P,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,d0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,gi=o}).apply(typeof uv<"u"?uv:typeof self<"u"?self:typeof window<"u"?window:{});var Hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var f0,Wo,p0,Eu,Vf,m0,g0,_0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,m){return u==Array.prototype||u==Object.prototype||(u[d]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hl=="object"&&Hl];for(var d=0;d<u.length;++d){var m=u[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var m=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var V=u[_];if(!(V in m))break e;m=m[V]}u=u[u.length-1],_=m[u],d=d(_),d!=_&&d!=null&&e(m,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var m=0,_=!1,V={next:function(){if(!_&&m<u.length){var L=m++;return{value:d(L,u[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,m){return u.call.apply(u.bind,arguments)}function p(u,d,m){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),u.apply(d,V)}}return function(){return u.apply(d,arguments)}}function g(u,d,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function w(u,d){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function I(u,d){function m(){}m.prototype=d.prototype,u.aa=d.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(_,V,L){for(var $=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)$[ge-2]=arguments[ge];return d.prototype[V].apply(_,$)}}function k(u){const d=u.length;if(0<d){const m=Array(d);for(let _=0;_<d;_++)m[_]=u[_];return m}return[]}function D(u,d){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(l(_)){const V=u.length||0,L=_.length||0;u.length=V+L;for(let $=0;$<L;$++)u[V+$]=_[$]}else u.push(_)}}class T{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(u){return/^[\s\xa0]*$/.test(u)}function y(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function b(u){return b[" "](u),u}b[" "]=function(){};var M=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function F(u,d,m){for(const _ in u)d.call(m,u[_],_,u)}function S(u,d){for(const m in u)d.call(void 0,u[m],m,u)}function v(u){const d={};for(const m in u)d[m]=u[m];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,d){let m,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(m in _)u[m]=_[m];for(let L=0;L<C.length;L++)m=C[L],Object.prototype.hasOwnProperty.call(_,m)&&(u[m]=_[m])}}function P(u){var d=1;u=u.split(":");const m=[];for(;0<d&&u.length;)m.push(u.shift()),d--;return u.length&&m.push(u.join(":")),m}function N(u){a.setTimeout(()=>{throw u},0)}function A(){var u=Y;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class ie{constructor(){this.h=this.g=null}add(d,m){const _=G.get();_.set(d,m),this.h?this.h.next=_:this.g=_,this.h=_}}var G=new T(()=>new Kt,u=>u.reset());class Kt{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Gt,q=!1,Y=new ie,te=()=>{const u=a.Promise.resolve(void 0);Gt=()=>{u.then(ye)}};var ye=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(m){N(m)}var d=G;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}q=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var pt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return u}();function rn(u,d){if(Ie.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(M){e:{try{b(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else m=="mouseover"?d=u.fromElement:m=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:sn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&rn.aa.h.call(this)}}I(rn,Ie);var sn={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var on="closure_listenable_"+(1e6*Math.random()|0),ph=0;function mh(u,d,m,_,V){this.listener=u,this.proxy=null,this.src=d,this.type=m,this.capture=!!_,this.ha=V,this.key=++ph,this.da=this.fa=!1}function Ki(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Gi(u){this.src=u,this.g={},this.h=0}Gi.prototype.add=function(u,d,m,_,V){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var $=co(u,d,_,V);return-1<$?(d=u[$],m||(d.fa=!1)):(d=new mh(d,this.src,L,!!_,V),d.fa=m,u.push(d)),d};function uo(u,d){var m=d.type;if(m in u.g){var _=u.g[m],V=Array.prototype.indexOf.call(_,d,void 0),L;(L=0<=V)&&Array.prototype.splice.call(_,V,1),L&&(Ki(d),u.g[m].length==0&&(delete u.g[m],u.h--))}}function co(u,d,m,_){for(var V=0;V<u.length;++V){var L=u[V];if(!L.da&&L.listener==d&&L.capture==!!m&&L.ha==_)return V}return-1}var ho="closure_lm_"+(1e6*Math.random()|0),fo={};function fl(u,d,m,_,V){if(Array.isArray(d)){for(var L=0;L<d.length;L++)fl(u,d[L],m,_,V);return null}return m=Eg(m),u&&u[on]?u.K(d,m,c(_)?!!_.capture:!1,V):Z(u,d,m,!1,_,V)}function Z(u,d,m,_,V,L){if(!d)throw Error("Invalid event type");var $=c(V)?!!V.capture:!!V,ge=_h(u);if(ge||(u[ho]=ge=new Gi(u)),m=ge.add(d,m,_,$,L),m.proxy)return m;if(_=Be(),m.proxy=_,_.src=u,_.listener=m,u.addEventListener)pt||(V=$),V===void 0&&(V=!1),u.addEventListener(d.toString(),_,V);else if(u.attachEvent)u.attachEvent(vg(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Be(){function u(m){return d.call(u.src,u.listener,m)}const d=lC;return u}function nr(u,d,m,_,V){if(Array.isArray(d))for(var L=0;L<d.length;L++)nr(u,d[L],m,_,V);else _=c(_)?!!_.capture:!!_,m=Eg(m),u&&u[on]?(u=u.i,d=String(d).toString(),d in u.g&&(L=u.g[d],m=co(L,m,_,V),-1<m&&(Ki(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete u.g[d],u.h--)))):u&&(u=_h(u))&&(d=u.g[d.toString()],u=-1,d&&(u=co(d,m,_,V)),(m=-1<u?d[u]:null)&&gh(m))}function gh(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[on])uo(d.i,u);else{var m=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(m,_,u.capture):d.detachEvent?d.detachEvent(vg(m),_):d.addListener&&d.removeListener&&d.removeListener(_),(m=_h(d))?(uo(m,u),m.h==0&&(m.src=null,d[ho]=null)):Ki(u)}}}function vg(u){return u in fo?fo[u]:fo[u]="on"+u}function lC(u,d){if(u.da)u=!0;else{d=new rn(d,this);var m=u.listener,_=u.ha||u.src;u.fa&&gh(u),u=m.call(_,d)}return u}function _h(u){return u=u[ho],u instanceof Gi?u:null}var yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eg(u){return typeof u=="function"?u:(u[yh]||(u[yh]=function(d){return u.handleEvent(d)}),u[yh])}function st(){de.call(this),this.i=new Gi(this),this.M=this,this.F=null}I(st,de),st.prototype[on]=!0,st.prototype.removeEventListener=function(u,d,m,_){nr(this,u,d,m,_)};function mt(u,d){var m,_=u.F;if(_)for(m=[];_;_=_.F)m.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new Ie(d,u);else if(d instanceof Ie)d.target=d.target||u;else{var V=d;d=new Ie(_,u),x(d,V)}if(V=!0,m)for(var L=m.length-1;0<=L;L--){var $=d.g=m[L];V=pl($,_,!0,d)&&V}if($=d.g=u,V=pl($,_,!0,d)&&V,V=pl($,_,!1,d)&&V,m)for(L=0;L<m.length;L++)$=d.g=m[L],V=pl($,_,!1,d)&&V}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var m=u.g[d],_=0;_<m.length;_++)Ki(m[_]);delete u.g[d],u.h--}}this.F=null},st.prototype.K=function(u,d,m,_){return this.i.add(String(u),d,!1,m,_)},st.prototype.L=function(u,d,m,_){return this.i.add(String(u),d,!0,m,_)};function pl(u,d,m,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,L=0;L<d.length;++L){var $=d[L];if($&&!$.da&&$.capture==m){var ge=$.listener,Ye=$.ha||$.src;$.fa&&uo(u.i,$),V=ge.call(Ye,_)!==!1&&V}}return V&&!_.defaultPrevented}function wg(u,d,m){if(typeof u=="function")m&&(u=g(u,m));else if(u&&typeof u.handleEvent=="function")u=g(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Ig(u){u.g=wg(()=>{u.g=null,u.i&&(u.i=!1,Ig(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class uC extends de{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ig(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function po(u){de.call(this),this.h=u,this.g={}}I(po,de);var Tg=[];function Sg(u){F(u.g,function(d,m){this.g.hasOwnProperty(m)&&gh(d)},u),u.g={}}po.prototype.N=function(){po.aa.N.call(this),Sg(this)},po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vh=a.JSON.stringify,cC=a.JSON.parse,hC=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Eh(){}Eh.prototype.h=null;function Ag(u){return u.h||(u.h=u.i())}function Cg(){}var mo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wh(){Ie.call(this,"d")}I(wh,Ie);function Ih(){Ie.call(this,"c")}I(Ih,Ie);var Jr={},xg=null;function ml(){return xg=xg||new st}Jr.La="serverreachability";function Pg(u){Ie.call(this,Jr.La,u)}I(Pg,Ie);function go(u){const d=ml();mt(d,new Pg(d))}Jr.STAT_EVENT="statevent";function Rg(u,d){Ie.call(this,Jr.STAT_EVENT,u),this.stat=d}I(Rg,Ie);function gt(u){const d=ml();mt(d,new Rg(d,u))}Jr.Ma="timingevent";function Ng(u,d){Ie.call(this,Jr.Ma,u),this.size=d}I(Ng,Ie);function _o(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function yo(){this.g=!0}yo.prototype.xa=function(){this.g=!1};function dC(u,d,m,_,V,L){u.info(function(){if(u.g)if(L)for(var $="",ge=L.split("&"),Ye=0;Ye<ge.length;Ye++){var ce=ge[Ye].split("=");if(1<ce.length){var ot=ce[0];ce=ce[1];var at=ot.split("_");$=2<=at.length&&at[1]=="type"?$+(ot+"="+ce+"&"):$+(ot+"=redacted&")}}else $=null;else $=L;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+d+`
`+m+`
`+$})}function fC(u,d,m,_,V,L,$){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+d+`
`+m+`
`+L+" "+$})}function Wi(u,d,m,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+mC(u,m)+(_?" "+_:"")})}function pC(u,d){u.info(function(){return"TIMEOUT: "+d})}yo.prototype.info=function(){};function mC(u,d){if(!u.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var _=m[u];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var L=V[0];if(L!="noop"&&L!="stop"&&L!="close")for(var $=1;$<V.length;$++)V[$]=""}}}}return vh(m)}catch{return d}}var gl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},kg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Th;function _l(){}I(_l,Eh),_l.prototype.g=function(){return new XMLHttpRequest},_l.prototype.i=function(){return{}},Th=new _l;function rr(u,d,m,_){this.j=u,this.i=d,this.l=m,this.R=_||1,this.U=new po(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bg}function bg(){this.i=null,this.g="",this.h=!1}var Dg={},Sh={};function Ah(u,d,m){u.L=1,u.v=wl(kn(d)),u.m=m,u.P=!0,Vg(u,null)}function Vg(u,d){u.F=Date.now(),yl(u),u.A=kn(u.v);var m=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),Hg(m.i,"t",_),u.C=0,m=u.j.J,u.h=new bg,u.g=d_(u.j,m?d:null,!u.m),0<u.O&&(u.M=new uC(g(u.Y,u,u.g),u.O)),d=u.U,m=u.g,_=u.ca;var V="readystatechange";Array.isArray(V)||(V&&(Tg[0]=V.toString()),V=Tg);for(var L=0;L<V.length;L++){var $=fl(m,V[L],_||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=u.H?v(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),go(),dC(u.i,u.u,u.A,u.l,u.R,u.m)}rr.prototype.ca=function(u){u=u.target;const d=this.M;d&&bn(u)==3?d.j():this.Y(u)},rr.prototype.Y=function(u){try{if(u==this.g)e:{const at=bn(this.g);var d=this.g.Ba();const Ji=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||t_(this.g)))){this.J||at!=4||d==7||(d==8||0>=Ji?go(3):go(2)),Ch(this);var m=this.g.Z();this.X=m;t:if(Og(this)){var _=t_(this.g);u="";var V=_.length,L=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yr(this),vo(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(L&&d==V-1)});_.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=m==200,fC(this.i,this.u,this.A,this.l,this.R,at,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,Ye=this.g;if((ge=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ge)){var ce=ge;break t}}ce=null}if(m=ce)Wi(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xh(this,m);else{this.o=!1,this.s=3,gt(12),Yr(this),vo(this);break e}}if(this.P){m=!0;let an;for(;!this.J&&this.C<$.length;)if(an=gC(this,$),an==Sh){at==4&&(this.s=4,gt(14),m=!1),Wi(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Dg){this.s=4,gt(15),Wi(this.i,this.l,$,"[Invalid Chunk]"),m=!1;break}else Wi(this.i,this.l,an,null),xh(this,an);if(Og(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||$.length!=0||this.h.h||(this.s=1,gt(16),m=!1),this.o=this.o&&m,!m)Wi(this.i,this.l,$,"[Invalid Chunked Response]"),Yr(this),vo(this);else if(0<$.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Dh(ot),ot.M=!0,gt(11))}}else Wi(this.i,this.l,$,null),xh(this,$);at==4&&Yr(this),this.o&&!this.J&&(at==4?l_(this.j,this):(this.o=!1,yl(this)))}else DC(this.g),m==400&&0<$.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Yr(this),vo(this)}}}catch{}finally{}};function Og(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function gC(u,d){var m=u.C,_=d.indexOf(`
`,m);return _==-1?Sh:(m=Number(d.substring(m,_)),isNaN(m)?Dg:(_+=1,_+m>d.length?Sh:(d=d.slice(_,_+m),u.C=_+m,d)))}rr.prototype.cancel=function(){this.J=!0,Yr(this)};function yl(u){u.S=Date.now()+u.I,Mg(u,u.I)}function Mg(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=_o(g(u.ba,u),d)}function Ch(u){u.B&&(a.clearTimeout(u.B),u.B=null)}rr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(pC(this.i,this.A),this.L!=2&&(go(),gt(17)),Yr(this),this.s=2,vo(this)):Mg(this,this.S-u)};function vo(u){u.j.G==0||u.J||l_(u.j,u)}function Yr(u){Ch(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Sg(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function xh(u,d){try{var m=u.j;if(m.G!=0&&(m.g==u||Ph(m.h,u))){if(!u.K&&Ph(m.h,u)&&m.G==3){try{var _=m.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)xl(m),Al(m);else break e;bh(m),gt(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=_o(g(m.Za,m),6e3));if(1>=Fg(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Zr(m,11)}else if((u.K||m.g==u)&&xl(m),!E(d))for(V=m.Da.g.parse(d),d=0;d<V.length;d++){let ce=V[d];if(m.T=ce[0],ce=ce[1],m.G==2)if(ce[0]=="c"){m.K=ce[1],m.ia=ce[2];const ot=ce[3];ot!=null&&(m.la=ot,m.j.info("VER="+m.la));const at=ce[4];at!=null&&(m.Aa=at,m.j.info("SVER="+m.Aa));const Ji=ce[5];Ji!=null&&typeof Ji=="number"&&0<Ji&&(_=1.5*Ji,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const an=u.g;if(an){const Rl=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rl){var L=_.h;L.g||Rl.indexOf("spdy")==-1&&Rl.indexOf("quic")==-1&&Rl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Rh(L,L.h),L.h=null))}if(_.D){const Vh=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Vh&&(_.ya=Vh,ve(_.I,_.D,Vh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var $=u;if(_.qa=h_(_,_.J?_.ia:null,_.W),$.K){Ug(_.h,$);var ge=$,Ye=_.L;Ye&&(ge.I=Ye),ge.B&&(Ch(ge),yl(ge)),_.g=$}else o_(_);0<m.i.length&&Cl(m)}else ce[0]!="stop"&&ce[0]!="close"||Zr(m,7);else m.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Zr(m,7):kh(m):ce[0]!="noop"&&m.l&&m.l.ta(ce),m.v=0)}}go(4)}catch{}}var _C=class{constructor(u,d){this.g=u,this.map=d}};function Lg(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jg(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Fg(u){return u.h?1:u.g?u.g.size:0}function Ph(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function Rh(u,d){u.g?u.g.add(d):u.h=d}function Ug(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}Lg.prototype.cancel=function(){if(this.i=Bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Bg(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const m of u.g.values())d=d.concat(m.D);return d}return k(u.i)}function yC(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],m=u.length,_=0;_<m;_++)d.push(u[_]);return d}d=[],m=0;for(_ in u)d[m++]=u[_];return d}function vC(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var m=0;m<u;m++)d.push(m);return d}d=[],m=0;for(const _ in u)d[m++]=_;return d}}}function $g(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var m=vC(u),_=yC(u),V=_.length,L=0;L<V;L++)d.call(void 0,_[L],m&&m[L],u)}var zg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EC(u,d){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var _=u[m].indexOf("="),V=null;if(0<=_){var L=u[m].substring(0,_);V=u[m].substring(_+1)}else L=u[m];d(L,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Xr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Xr){this.h=u.h,vl(this,u.j),this.o=u.o,this.g=u.g,El(this,u.s),this.l=u.l;var d=u.i,m=new Io;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),qg(this,m),this.m=u.m}else u&&(d=String(u).match(zg))?(this.h=!1,vl(this,d[1]||"",!0),this.o=Eo(d[2]||""),this.g=Eo(d[3]||"",!0),El(this,d[4]),this.l=Eo(d[5]||"",!0),qg(this,d[6]||"",!0),this.m=Eo(d[7]||"")):(this.h=!1,this.i=new Io(null,this.h))}Xr.prototype.toString=function(){var u=[],d=this.j;d&&u.push(wo(d,Kg,!0),":");var m=this.g;return(m||d=="file")&&(u.push("//"),(d=this.o)&&u.push(wo(d,Kg,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(wo(m,m.charAt(0)=="/"?TC:IC,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",wo(m,AC)),u.join("")};function kn(u){return new Xr(u)}function vl(u,d,m){u.j=m?Eo(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function El(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function qg(u,d,m){d instanceof Io?(u.i=d,CC(u.i,u.h)):(m||(d=wo(d,SC)),u.i=new Io(d,u.h))}function ve(u,d,m){u.i.set(d,m)}function wl(u){return ve(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Eo(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function wo(u,d,m){return typeof u=="string"?(u=encodeURI(u).replace(d,wC),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function wC(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Kg=/[#\/\?@]/g,IC=/[#\?:]/g,TC=/[#\?]/g,SC=/[#\?@]/g,AC=/#/g;function Io(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function ir(u){u.g||(u.g=new Map,u.h=0,u.i&&EC(u.i,function(d,m){u.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Io.prototype,t.add=function(u,d){ir(this),this.i=null,u=Hi(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(d),this.h+=1,this};function Gg(u,d){ir(u),d=Hi(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Wg(u,d){return ir(u),d=Hi(u,d),u.g.has(d)}t.forEach=function(u,d){ir(this),this.g.forEach(function(m,_){m.forEach(function(V){u.call(d,V,_,this)},this)},this)},t.na=function(){ir(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let _=0;_<d.length;_++){const V=u[_];for(let L=0;L<V.length;L++)m.push(d[_])}return m},t.V=function(u){ir(this);let d=[];if(typeof u=="string")Wg(this,u)&&(d=d.concat(this.g.get(Hi(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)d=d.concat(u[m])}return d},t.set=function(u,d){return ir(this),this.i=null,u=Hi(this,u),Wg(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function Hg(u,d,m){Gg(u,d),0<m.length&&(u.i=null,u.g.set(Hi(u,d),k(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var _=d[m];const L=encodeURIComponent(String(_)),$=this.V(_);for(_=0;_<$.length;_++){var V=L;$[_]!==""&&(V+="="+encodeURIComponent(String($[_]))),u.push(V)}}return this.i=u.join("&")};function Hi(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function CC(u,d){d&&!u.j&&(ir(u),u.i=null,u.g.forEach(function(m,_){var V=_.toLowerCase();_!=V&&(Gg(this,_),Hg(this,V,m))},u)),u.j=d}function xC(u,d){const m=new yo;if(a.Image){const _=new Image;_.onload=w(sr,m,"TestLoadImage: loaded",!0,d,_),_.onerror=w(sr,m,"TestLoadImage: error",!1,d,_),_.onabort=w(sr,m,"TestLoadImage: abort",!1,d,_),_.ontimeout=w(sr,m,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function PC(u,d){const m=new yo,_=new AbortController,V=setTimeout(()=>{_.abort(),sr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(L=>{clearTimeout(V),L.ok?sr(m,"TestPingServer: ok",!0,d):sr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),sr(m,"TestPingServer: error",!1,d)})}function sr(u,d,m,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(m)}catch{}}function RC(){this.g=new hC}function NC(u,d,m){const _=m||"";try{$g(u,function(V,L){let $=V;c(V)&&($=vh(V)),d.push(_+L+"="+encodeURIComponent($))})}catch(V){throw d.push(_+"type="+encodeURIComponent("_badmap")),V}}function Il(u){this.l=u.Ub||null,this.j=u.eb||!1}I(Il,Eh),Il.prototype.g=function(){return new Tl(this.l,this.j)},Il.prototype.i=function(u){return function(){return u}}({});function Tl(u,d){st.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Tl,st),t=Tl.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,So(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,To(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,So(this)),this.g&&(this.readyState=3,So(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qg(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qg(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?To(this):So(this),this.readyState==3&&Qg(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,To(this))},t.Qa=function(u){this.g&&(this.response=u,To(this))},t.ga=function(){this.g&&To(this)};function To(u){u.readyState=4,u.l=null,u.j=null,u.v=null,So(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=d.next();return u.join(`\r
`)};function So(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Jg(u){let d="";return F(u,function(m,_){d+=_,d+=":",d+=m,d+=`\r
`}),d}function Nh(u,d,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=Jg(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):ve(u,d,m))}function De(u){st.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(De,st);var kC=/^https?$/i,bC=["POST","PUT"];t=De.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Th.g(),this.v=this.o?Ag(this.o):Ag(Th),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(L){Yg(this,L);return}if(u=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)m.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())m.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),V=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(bC,d,void 0))||_||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of m)this.g.setRequestHeader(L,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{e_(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){Yg(this,L)}};function Yg(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Xg(u),Sl(u)}function Xg(u){u.A||(u.A=!0,mt(u,"complete"),mt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,mt(this,"complete"),mt(this,"abort"),Sl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sl(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zg(this):this.bb())},t.bb=function(){Zg(this)};function Zg(u){if(u.h&&typeof o<"u"&&(!u.v[1]||bn(u)!=4||u.Z()!=2)){if(u.u&&bn(u)==4)wg(u.Ea,0,u);else if(mt(u,"readystatechange"),bn(u)==4){u.h=!1;try{const $=u.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var _;if(_=$===0){var V=String(u.D).match(zg)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),_=!kC.test(V?V.toLowerCase():"")}m=_}if(m)mt(u,"complete"),mt(u,"success");else{u.m=6;try{var L=2<bn(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",Xg(u)}}finally{Sl(u)}}}}function Sl(u,d){if(u.g){e_(u);const m=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||mt(u,"ready");try{m.onreadystatechange=_}catch{}}}function e_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function bn(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),cC(d)}};function t_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function DC(u){const d={};u=(u.g&&2<=bn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(E(u[_]))continue;var m=P(u[_]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=d[V]||[];d[V]=L,L.push(m)}S(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ao(u,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||d}function n_(u){this.Aa=0,this.i=[],this.j=new yo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ao("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ao("baseRetryDelayMs",5e3,u),this.cb=Ao("retryDelaySeedMs",1e4,u),this.Wa=Ao("forwardChannelMaxRetries",2,u),this.wa=Ao("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Lg(u&&u.concurrentRequestLimit),this.Da=new RC,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=n_.prototype,t.la=8,t.G=1,t.connect=function(u,d,m,_){gt(0),this.W=u,this.H=d||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=h_(this,null,this.W),Cl(this)};function kh(u){if(r_(u),u.G==3){var d=u.U++,m=kn(u.I);if(ve(m,"SID",u.K),ve(m,"RID",d),ve(m,"TYPE","terminate"),Co(u,m),d=new rr(u,u.j,d),d.L=2,d.v=wl(kn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=d_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),yl(d)}c_(u)}function Al(u){u.g&&(Dh(u),u.g.cancel(),u.g=null)}function r_(u){Al(u),u.u&&(a.clearTimeout(u.u),u.u=null),xl(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Cl(u){if(!jg(u.h)&&!u.s){u.s=!0;var d=u.Ga;Gt||te(),q||(Gt(),q=!0),Y.add(d,u),u.B=0}}function VC(u,d){return Fg(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=_o(g(u.Ga,u,d),u_(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const V=new rr(this,this.j,u);let L=this.o;if(this.S&&(L?(L=v(L),x(L,this.S)):L=this.S),this.m!==null||this.O||(V.H=L,L=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=s_(this,V,d),m=kn(this.I),ve(m,"RID",u),ve(m,"CVER",22),this.D&&ve(m,"X-HTTP-Session-Id",this.D),Co(this,m),L&&(this.O?d="headers="+encodeURIComponent(String(Jg(L)))+"&"+d:this.m&&Nh(m,this.m,L)),Rh(this.h,V),this.Ua&&ve(m,"TYPE","init"),this.P?(ve(m,"$req",d),ve(m,"SID","null"),V.T=!0,Ah(V,m,null)):Ah(V,m,d),this.G=2}}else this.G==3&&(u?i_(this,u):this.i.length==0||jg(this.h)||i_(this))};function i_(u,d){var m;d?m=d.l:m=u.U++;const _=kn(u.I);ve(_,"SID",u.K),ve(_,"RID",m),ve(_,"AID",u.T),Co(u,_),u.m&&u.o&&Nh(_,u.m,u.o),m=new rr(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),d&&(u.i=d.D.concat(u.i)),d=s_(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Rh(u.h,m),Ah(m,_,d)}function Co(u,d){u.H&&F(u.H,function(m,_){ve(d,_,m)}),u.l&&$g({},function(m,_){ve(d,_,m)})}function s_(u,d,m){m=Math.min(u.i.length,m);var _=u.l?g(u.l.Na,u.l,u):null;e:{var V=u.i;let L=-1;for(;;){const $=["count="+m];L==-1?0<m?(L=V[0].g,$.push("ofs="+L)):L=0:$.push("ofs="+L);let ge=!0;for(let Ye=0;Ye<m;Ye++){let ce=V[Ye].g;const ot=V[Ye].map;if(ce-=L,0>ce)L=Math.max(0,V[Ye].g-100),ge=!1;else try{NC(ot,$,"req"+ce+"_")}catch{_&&_(ot)}}if(ge){_=$.join("&");break e}}}return u=u.i.splice(0,m),d.D=u,_}function o_(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;Gt||te(),q||(Gt(),q=!0),Y.add(d,u),u.v=0}}function bh(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=_o(g(u.Fa,u),u_(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,a_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=_o(g(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Al(this),a_(this))};function Dh(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function a_(u){u.g=new rr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=kn(u.qa);ve(d,"RID","rpc"),ve(d,"SID",u.K),ve(d,"AID",u.T),ve(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&ve(d,"TO",u.ja),ve(d,"TYPE","xmlhttp"),Co(u,d),u.m&&u.o&&Nh(d,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=wl(kn(d)),m.m=null,m.P=!0,Vg(m,u)}t.Za=function(){this.C!=null&&(this.C=null,Al(this),bh(this),gt(19))};function xl(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function l_(u,d){var m=null;if(u.g==d){xl(u),Dh(u),u.g=null;var _=2}else if(Ph(u.h,d))m=d.D,Ug(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var V=u.B;_=ml(),mt(_,new Ng(_,m)),Cl(u)}else o_(u);else if(V=d.s,V==3||V==0&&0<d.X||!(_==1&&VC(u,d)||_==2&&bh(u)))switch(m&&0<m.length&&(d=u.h,d.i=d.i.concat(m)),V){case 1:Zr(u,5);break;case 4:Zr(u,10);break;case 3:Zr(u,6);break;default:Zr(u,2)}}}function u_(u,d){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*d}function Zr(u,d){if(u.j.info("Error code "+d),d==2){var m=g(u.fb,u),_=u.Xa;const V=!_;_=new Xr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||vl(_,"https"),wl(_),V?xC(_.toString(),m):PC(_.toString(),m)}else gt(2);u.G=0,u.l&&u.l.sa(d),c_(u),r_(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function c_(u){if(u.G=0,u.ka=[],u.l){const d=Bg(u.h);(d.length!=0||u.i.length!=0)&&(D(u.ka,d),D(u.ka,u.i),u.h.i.length=0,k(u.i),u.i.length=0),u.l.ra()}}function h_(u,d,m){var _=m instanceof Xr?kn(m):new Xr(m);if(_.g!="")d&&(_.g=d+"."+_.g),El(_,_.s);else{var V=a.location;_=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var L=new Xr(null);_&&vl(L,_),d&&(L.g=d),V&&El(L,V),m&&(L.l=m),_=L}return m=u.D,d=u.ya,m&&d&&ve(_,m,d),ve(_,"VER",u.la),Co(u,_),_}function d_(u,d,m){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new De(new Il({eb:m})):new De(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function f_(){}t=f_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Pl(){}Pl.prototype.g=function(u,d){return new Ot(u,d)};function Ot(u,d){st.call(this),this.g=new n_(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!E(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!E(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Qi(this)}I(Ot,st),Ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){kh(this.g)},Ot.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=vh(u),u=m);d.i.push(new _C(d.Ya++,u)),d.G==3&&Cl(d)},Ot.prototype.N=function(){this.g.l=null,delete this.j,kh(this.g),delete this.g,Ot.aa.N.call(this)};function p_(u){wh.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const m in d){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}I(p_,wh);function m_(){Ih.call(this),this.status=1}I(m_,Ih);function Qi(u){this.g=u}I(Qi,f_),Qi.prototype.ua=function(){mt(this.g,"a")},Qi.prototype.ta=function(u){mt(this.g,new p_(u))},Qi.prototype.sa=function(u){mt(this.g,new m_)},Qi.prototype.ra=function(){mt(this.g,"b")},Pl.prototype.createWebChannel=Pl.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,_0=function(){return new Pl},g0=function(){return ml()},m0=Jr,Vf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gl.NO_ERROR=0,gl.TIMEOUT=8,gl.HTTP_ERROR=6,Eu=gl,kg.COMPLETE="complete",p0=kg,Cg.EventType=mo,mo.OPEN="a",mo.CLOSE="b",mo.ERROR="c",mo.MESSAGE="d",st.prototype.listen=st.prototype.K,Wo=Cg,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,f0=De}).apply(typeof Hl<"u"?Hl:typeof self<"u"?self:typeof window<"u"?window:{});const cv="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */const Pi=new im("@firebase/firestore");function ns(){return Pi.logLevel}function U(t,...e){if(Pi.logLevel<=oe.DEBUG){const n=e.map(gm);Pi.debug(`Firestore (${io}): ${t}`,...n)}}function vt(t,...e){if(Pi.logLevel<=oe.ERROR){const n=e.map(gm);Pi.error(`Firestore (${io}): ${t}`,...n)}}function Oa(t,...e){if(Pi.logLevel<=oe.WARN){const n=e.map(gm);Pi.warn(`Firestore (${io}): ${t}`,...n)}}function gm(t){if(typeof t=="string")return t;try{/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+t;throw vt(e),new Error(e)}function Q(t,e){t||H()}function ee(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lD{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class cD{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Q(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new lD(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new yt(e)}}class hD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Q(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.R=n.token,new fD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function mD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class y0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function v0(t){return t+"\0"}/**
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
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new ke(0,0))}static max(){return new J(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ma{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ma.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ma?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class he extends Ma{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const gD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Ma{construct(e,n,r){return new Pe(e,n,r)}static isValidIdentifier(e){return gD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pe(n)}static emptyPath(){return new Pe([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(he.fromString(e))}static fromName(e){return new K(he.fromString(e).popFirst(5))}static empty(){return new K(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new he(e.slice()))}}/**
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
 */class lc{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Of(t){return t.fields.find(e=>e.kind===2)}function ii(t){return t.fields.filter(e=>e.kind!==2)}lc.UNKNOWN_ID=-1;class wu{constructor(e,n){this.fieldPath=e,this.kind=n}}class La{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new La(0,$t.min())}}function _D(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new $t(i,K.empty(),e)}function E0(t){return new $t(t.readTime,t.key,-1)}class $t{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $t(J.min(),K.empty(),-1)}static max(){return new $t(J.max(),K.empty(),-1)}}function _m(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const w0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class I0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zi(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==w0)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Qc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Kn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new la(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=ym(r.target.error);this.V.reject(new la(e,i))}}static open(e,n,r,i){try{return new Qc(n,e.transaction(i,r))}catch(s){throw new la(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new vD(n)}}class Dr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Dr.S(qe())===12.2&&vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),si(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!rm())return!1;if(Dr.v())return!0;const e=qe(),n=Dr.S(e),r=0<n&&n<10,i=T0(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new la(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new z(j.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new z(j.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new la(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Qc.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function T0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class yD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return si(this.B.delete())}}class la extends z{constructor(e,n){super(j.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Kr(t){return t.name==="IndexedDbTransactionError"}class vD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),si(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),si(this.store.add(e))}get(e){return si(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),si(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),si(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=ym(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new yD(a),c=n(a.primaryKey,a.value,l);if(c instanceof O){const h=c.catch(p=>(l.done(),O.reject(p)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function si(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=ym(r.target.error);n(i)}})}let hv=!1;function ym(t){const e=Dr.S(qe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hv||(hv=!0,setTimeout(()=>{throw r},0)),r}}return t}class ED{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Kr(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await zi(n)}await this.X(6e4)})}}class wD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=E0(s);_m(o,r)>0&&(r=o)}),new $t(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Jt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jt.oe=-1;function Jc(t){return t==null}function ja(t){return t===0&&1/t==-1/0}function ID(t){return typeof t=="number"&&Number.isInteger(t)&&!ja(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function wt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dv(e)),e=TD(t.get(n),e);return dv(e)}function TD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function dv(t){return t+""}function Sn(t){const e=t.length;if(Q(e>=2),e===2)return Q(t.charAt(0)===""&&t.charAt(1)===""),he.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&H(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:H()}s=o+2}return new he(r)}/**
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
 */const fv=["userId","batchId"];/**
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
 */function Iu(t,e){return[t,wt(e)]}function S0(t,e,n){return[t,wt(e),n]}const SD={},AD=["prefixPath","collectionGroup","readTime","documentId"],CD=["prefixPath","collectionGroup","documentId"],xD=["collectionGroup","readTime","prefixPath","documentId"],PD=["canonicalId","targetId"],RD=["targetId","path"],ND=["path","targetId"],kD=["collectionId","parent"],bD=["indexId","uid"],DD=["uid","sequenceNumber"],VD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],OD=["indexId","uid","orderedDocumentKey"],MD=["userId","collectionPath","documentId"],LD=["userId","collectionPath","largestBatchId"],jD=["userId","collectionGroup","largestBatchId"],A0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],FD=[...A0,"documentOverlays"],C0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],x0=C0,vm=[...x0,"indexConfiguration","indexState","indexEntries"],UD=vm,BD=[...vm,"globals"];/**
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
 */class Mf extends I0{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Ke(t,e){const n=ee(t);return Dr.F(n._e,e)}/**
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
 */function pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function so(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function P0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ql(this.root,e,this.comparator,!0)}}class Ql{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??et.RED,this.left=i??et.EMPTY,this.right=s??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,i,s){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mv(this.data.getIterator())}getIteratorFrom(e){return new mv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class mv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xi(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Yt{constructor(e){this.fields=e,e.sort(Pe.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new me(Pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class R0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new R0("Invalid base64 string: "+s):s}}(e);return new Ue(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const $D=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Q(!!t),typeof t=="string"){let e=0;const n=$D.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
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
 */function Em(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wm(t){const e=t.mapValue.fields.__previous_value__;return Em(e)?wm(e):e}function Fa(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class zD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ri{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ri("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ri&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Tu={nullValue:"NULL_VALUE"};function Ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Em(t)?4:N0(t)?9007199254740991:Yc(t)?10:11:H()}function Nn(t,e){if(t===e)return!0;const n=Ni(t);if(n!==Ni(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fa(t).isEqual(Fa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xn(i.timestampValue),a=Xn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Lr(i.bytesValue).isEqual(Lr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Te(i.doubleValue),a=Te(s.doubleValue);return o===a?ja(o)===ja(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(pv(o)!==pv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Nn(o[l],a[l])))return!1;return!0}(t,e);default:return H()}}function Ua(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function jr(t,e){if(t===e)return 0;const n=Ni(t),r=Ni(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Te(s.integerValue||s.doubleValue),l=Te(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return gv(t.timestampValue,e.timestampValue);case 4:return gv(Fa(t),Fa(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Lr(s),l=Lr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ne(a[c],l[c]);if(h!==0)return h}return ne(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ne(Te(s.latitude),Te(o.latitude));return a!==0?a:ne(Te(s.longitude),Te(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _v(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const p=s.fields||{},g=o.fields||{},w=(a=p.value)===null||a===void 0?void 0:a.arrayValue,I=(l=g.value)===null||l===void 0?void 0:l.arrayValue,k=ne(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:_v(w,I)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ir.mapValue&&o===Ir.mapValue)return 0;if(s===Ir.mapValue)return 1;if(o===Ir.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=ne(l[p],h[p]);if(g!==0)return g;const w=jr(a[l[p]],c[h[p]]);if(w!==0)return w}return ne(l.length,h.length)}(t.mapValue,e.mapValue);default:throw H()}}function gv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Xn(t),r=Xn(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function _v(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=jr(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Bs(t){return Lf(t)}function Lf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Lf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Lf(n.fields[o])}`;return i+"}"}(t.mapValue):H()}function Ba(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jf(t){return!!t&&"integerValue"in t}function $a(t){return!!t&&"arrayValue"in t}function yv(t){return!!t&&"nullValue"in t}function vv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Su(t){return!!t&&"mapValue"in t}function Yc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return so(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function N0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const k0={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function qD(t){return"nullValue"in t?Tu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ba(Ri.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?Yc(t)?k0:{mapValue:{}}:H()}function KD(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ba(Ri.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?k0:"mapValue"in t?Yc(t)?{mapValue:{}}:Ir:H()}function Ev(t,e){const n=jr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function wv(t,e){const n=jr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ua(n)}setAll(e){let n=Pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ua(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){so(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(ua(this.value))}}function b0(t){const e=[];return so(t.fields,(n,r)=>{const i=new Pe([n]);if(Su(r)){const s=b0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yt(e)}/**
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
 */class Oe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Oe(e,0,J.min(),J.min(),J.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new Oe(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Oe(e,2,n,J.min(),J.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,J.min(),J.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class $s{constructor(e,n){this.position=e,this.inclusive=n}}function Iv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=jr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class za{constructor(e,n="asc"){this.field=e,this.dir=n}}function GD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class D0{}class ae extends D0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WD(e,n,r):n==="array-contains"?new JD(e,r):n==="in"?new F0(e,r):n==="not-in"?new YD(e,r):n==="array-contains-any"?new XD(e,r):new ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HD(e,r):new QD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jr(n,this.value)):n!==null&&Ni(this.value)===Ni(n)&&this.matchesComparison(jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fe extends D0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fe(e,n)}matches(e){return zs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zs(t){return t.op==="and"}function Ff(t){return t.op==="or"}function Im(t){return V0(t)&&zs(t)}function V0(t){for(const e of t.filters)if(e instanceof fe)return!1;return!0}function Uf(t){if(t instanceof ae)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(Im(t))return t.filters.map(e=>Uf(e)).join(",");{const e=t.filters.map(n=>Uf(n)).join(",");return`${t.op}(${e})`}}function O0(t,e){return t instanceof ae?function(r,i){return i instanceof ae&&r.op===i.op&&r.field.isEqual(i.field)&&Nn(r.value,i.value)}(t,e):t instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&O0(o,i.filters[a]),!0):!1}(t,e):void H()}function M0(t,e){const n=t.filters.concat(e);return fe.create(n,t.op)}function L0(t){return t instanceof ae?function(n){return`${n.field.canonicalString()} ${n.op} ${Bs(n.value)}`}(t):t instanceof fe?function(n){return n.op.toString()+" {"+n.getFilters().map(L0).join(" ,")+"}"}(t):"Filter"}class WD extends ae{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class HD extends ae{constructor(e,n){super(e,"in",n),this.keys=j0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class QD extends ae{constructor(e,n){super(e,"not-in",n),this.keys=j0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function j0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class JD extends ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $a(n)&&Ua(n.arrayValue,this.value)}}class F0 extends ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ua(this.value.arrayValue,n)}}class YD extends ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ua(this.value.arrayValue,n)}}class XD extends ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$a(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ua(this.value.arrayValue,r))}}/**
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
 */class ZD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Bf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ZD(t,e,n,r,i,s,o)}function ki(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bs(r)).join(",")),e.ue=n}return e.ue}function sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!GD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!O0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tv(t.startAt,e.startAt)&&Tv(t.endAt,e.endAt)}function uc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function cc(t,e){return t.filters.filter(n=>n instanceof ae&&n.field.isEqual(e))}function Sv(t,e,n){let r=Tu,i=!0;for(const s of cc(t,e)){let o=Tu,a=!0;switch(s.op){case"<":case"<=":o=qD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Tu}Ev({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Ev({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Av(t,e,n){let r=Ir,i=!0;for(const s of cc(t,e)){let o=Ir,a=!0;switch(s.op){case">=":case">":o=KD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ir}wv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];wv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class oo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eV(t,e,n,r,i,s,o,a){return new oo(t,e,n,r,i,s,o,a)}function ol(t){return new oo(t)}function Cv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function U0(t){return t.collectionGroup!==null}function ca(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new me(Pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new za(s,r))}),n.has(Pe.keyField().canonicalString())||e.ce.push(new za(Pe.keyField(),r))}return e.ce}function Zt(t){const e=ee(t);return e.le||(e.le=tV(e,ca(t))),e.le}function tV(t,e){if(t.limitType==="F")return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new za(i.field,s)});const n=t.endAt?new $s(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $s(t.startAt.position,t.startAt.inclusive):null;return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $f(t,e){const n=t.filters.concat([e]);return new oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hc(t,e,n){return new oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xc(t,e){return sl(Zt(t),Zt(e))&&t.limitType===e.limitType}function B0(t){return`${ki(Zt(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>L0(i)).join(", ")}]`),Jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bs(i)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function al(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ca(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Iv(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ca(r),i)||r.endAt&&!function(o,a,l){const c=Iv(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ca(r),i))}(t,e)}function nV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $0(t){return(e,n)=>{let r=!1;for(const i of ca(t)){const s=rV(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rV(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?jr(l,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){so(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return P0(this.inner)}size(){return this.innerSize}}/**
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
 */const iV=new Ce(K.comparator);function jt(){return iV}const z0=new Ce(K.comparator);function Ho(...t){let e=z0;for(const n of t)e=e.insert(n.key,n);return e}function q0(t){let e=z0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function An(){return ha()}function K0(){return ha()}function ha(){return new Gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const sV=new Ce(K.comparator),oV=new me(K.comparator);function re(...t){let e=oV;for(const n of t)e=e.add(n);return e}const aV=new me(ne);function lV(){return aV}/**
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
 */function Tm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ja(e)?"-0":e}}function G0(t){return{integerValue:""+t}}function uV(t,e){return ID(e)?G0(e):Tm(t,e)}/**
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
 */class Zc{constructor(){this._=void 0}}function cV(t,e,n){return t instanceof qs?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Em(s)&&(s=wm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ks?H0(t,e):t instanceof Gs?Q0(t,e):function(i,s){const o=W0(i,s),a=xv(o)+xv(i.Pe);return jf(o)&&jf(i.Pe)?G0(a):Tm(i.serializer,a)}(t,e)}function hV(t,e,n){return t instanceof Ks?H0(t,e):t instanceof Gs?Q0(t,e):n}function W0(t,e){return t instanceof qa?function(r){return jf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class qs extends Zc{}class Ks extends Zc{constructor(e){super(),this.elements=e}}function H0(t,e){const n=J0(e);for(const r of t.elements)n.some(i=>Nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends Zc{constructor(e){super(),this.elements=e}}function Q0(t,e){let n=J0(e);for(const r of t.elements)n=n.filter(i=>!Nn(i,r));return{arrayValue:{values:n}}}class qa extends Zc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xv(t){return Te(t.integerValue||t.doubleValue)}function J0(t){return $a(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Y0{constructor(e,n){this.field=e,this.transform=n}}function dV(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ks&&i instanceof Ks||r instanceof Gs&&i instanceof Gs?Us(r.elements,i.elements,Nn):r instanceof qa&&i instanceof qa?Nn(r.Pe,i.Pe):r instanceof qs&&i instanceof qs}(t.transform,e.transform)}class fV{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Au(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class eh{}function X0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Sm(t.key,Ft.none()):new ao(t.key,t.data,Ft.none());{const n=t.data,r=Pt.empty();let i=new me(Pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(t.key,r,new Yt(i.toArray()),Ft.none())}}function pV(t,e,n){t instanceof ao?function(i,s,o){const a=i.value.clone(),l=Rv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(i,s,o){if(!Au(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Rv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Z0(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function da(t,e,n,r){return t instanceof ao?function(s,o,a,l){if(!Au(s.precondition,o))return a;const c=s.value.clone(),h=Nv(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(s,o,a,l){if(!Au(s.precondition,o))return a;const c=Nv(s.fieldTransforms,l,o),h=o.data;return h.setAll(Z0(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,a){return Au(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function mV(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=W0(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function Pv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Us(r,i,(s,o)=>dV(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ao extends eh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends eh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Rv(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hV(o,a,n[i]))}return r}function Nv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cV(s,o,e))}return r}class Sm extends eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eS extends eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Am{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pV(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=K0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=X0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,(n,r)=>Pv(n,r))&&Us(this.baseMutations,e.baseMutations,(n,r)=>Pv(n,r))}}class Cm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=function(){return sV}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cm(e,n,r,i)}}/**
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
 */class xm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Le,le;function _V(t){switch(t){default:return H();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function tS(t){if(t===void 0)return vt("GRPC error has no .code"),j.UNKNOWN;switch(t){case Le.OK:return j.OK;case Le.CANCELLED:return j.CANCELLED;case Le.UNKNOWN:return j.UNKNOWN;case Le.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Le.INTERNAL:return j.INTERNAL;case Le.UNAVAILABLE:return j.UNAVAILABLE;case Le.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Le.NOT_FOUND:return j.NOT_FOUND;case Le.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Le.ABORTED:return j.ABORTED;case Le.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Le.DATA_LOSS:return j.DATA_LOSS;default:return H()}}(le=Le||(Le={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yV(){return new TextEncoder}/**
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
 */const vV=new gi([4294967295,4294967295],0);function kv(t){const e=yV().encode(t),n=new d0;return n.update(e),new Uint8Array(n.digest())}function bv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new gi([n,r],0),new gi([i,s],0)]}class Pm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qo(`Invalid padding: ${n}`);if(r<0)throw new Qo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=gi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(gi.fromNumber(r)));return i.compare(vV)===1&&(i=new gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=kv(e),[r,i]=bv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Pm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=kv(e),[r,i]=bv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class th{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ll.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new th(J.min(),i,new Ce(ne),jt(),re())}}class ll{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ll(r,n,re(),re(),re())}}/**
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
 */class Cu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class nS{constructor(e,n){this.targetId=e,this.me=n}}class rS{constructor(e,n,r=Ue.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Dv{constructor(){this.fe=0,this.ge=Ov(),this.pe=Ue.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new ll(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ov()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class EV{constructor(e){this.Le=e,this.Be=new Map,this.ke=jt(),this.qe=Vv(),this.Qe=new Ce(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(uc(s))if(r===0){const o=new K(s.path);this.Ue(n,o,Oe.newNoDocument(o,J.min()))}else Q(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Lr(r).toUint8Array()}catch(l){if(l instanceof R0)return Oa("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Pm(o,i,s)}catch(l){return Oa(l instanceof Qo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&uc(a.target)){const l=new K(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Oe.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=re();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new th(e,n,this.Qe,this.ke,r);return this.ke=jt(),this.qe=Vv(),this.Qe=new Ce(ne),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Dv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new me(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Dv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Vv(){return new Ce(K.comparator)}function Ov(){return new Ce(K.comparator)}const wV={asc:"ASCENDING",desc:"DESCENDING"},IV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},TV={and:"AND",or:"OR"};class SV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zf(t,e){return t.useProto3Json||Jc(e)?e:{value:e}}function Ws(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AV(t,e){return Ws(t,e.toTimestamp())}function It(t){return Q(!!t),J.fromTimestamp(function(n){const r=Xn(n);return new ke(r.seconds,r.nanos)}(t))}function Rm(t,e){return qf(t,e).canonicalString()}function qf(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sS(t){const e=he.fromString(t);return Q(pS(e)),e}function dc(t,e){return Rm(t.databaseId,e.path)}function _i(t,e){const n=sS(e);if(n.get(1)!==t.databaseId.projectId)throw new z(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(lS(n))}function oS(t,e){return Rm(t.databaseId,e)}function aS(t){const e=sS(t);return e.length===4?he.emptyPath():lS(e)}function Kf(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lS(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mv(t,e,n){return{name:dc(t,e),fields:n.value.mapValue.fields}}function CV(t,e,n){const r=_i(t,e.name),i=It(e.updateTime),s=e.createTime?It(e.createTime):J.min(),o=new Pt({mapValue:{fields:e.fields}}),a=Oe.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function xV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Q(h===void 0||typeof h=="string"),Ue.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ue.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?j.UNKNOWN:tS(c.code);return new z(h,c.message||"")}(o);n=new rS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_i(t,r.document.name),s=It(r.document.updateTime),o=r.document.createTime?It(r.document.createTime):J.min(),a=new Pt({mapValue:{fields:r.document.fields}}),l=Oe.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new Cu(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_i(t,r.document),s=r.readTime?It(r.readTime):J.min(),o=Oe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Cu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_i(t,r.document),s=r.removedTargetIds||[];n=new Cu([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new gV(i,s),a=r.targetId;n=new nS(a,o)}}return n}function fc(t,e){let n;if(e instanceof ao)n={update:Mv(t,e.key,e.value)};else if(e instanceof Sm)n={delete:dc(t,e.key)};else if(e instanceof Wr)n={update:Mv(t,e.key,e.data),updateMask:DV(e.fieldMask)};else{if(!(e instanceof eS))return H();n={verify:dc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof qs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qa)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:AV(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function Gf(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ft.updateTime(It(s.updateTime)):s.exists!==void 0?Ft.exists(s.exists):Ft.none()}(e.currentDocument):Ft.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Q(a.setToServerValue==="REQUEST_TIME"),l=new qs;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new Ks(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new Gs(h)}else"increment"in a?l=new qa(o,a.increment):H();const c=Pe.fromServerFormat(a.fieldPath);return new Y0(c,l)}(t,i)):[];if(e.update){e.update.name;const i=_i(t,e.update.name),s=new Pt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Yt(c.map(h=>Pe.fromServerFormat(h)))}(e.updateMask);return new Wr(i,s,o,n,r)}return new ao(i,s,n,r)}if(e.delete){const i=_i(t,e.delete);return new Sm(i,n)}if(e.verify){const i=_i(t,e.verify);return new eS(i,n)}return H()}function PV(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?It(i.updateTime):It(s);return o.isEqual(J.min())&&(o=It(s)),new fV(o,i.transformResults||[])}(n,e))):[]}function uS(t,e){return{documents:[oS(t,e.path)]}}function cS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oS(t,i);const s=function(c){if(c.length!==0)return fS(fe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:is(g.field),direction:NV(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=zf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function hS(t){let e=aS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(p){const g=dS(p);return g instanceof fe&&Im(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(I){return new za(ss(I.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(p){let g;return g=typeof p=="object"?p.value:p,Jc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,w=p.values||[];return new $s(w,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,w=p.values||[];return new $s(w,g)}(n.endAt)),eV(e,i,o,s,a,"F",l,c)}function RV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ss(n.unaryFilter.field);return ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ss(n.unaryFilter.field);return ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return ae.create(ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fe.create(n.compositeFilter.filters.map(r=>dS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function NV(t){return wV[t]}function kV(t){return IV[t]}function bV(t){return TV[t]}function is(t){return{fieldPath:t.canonicalString()}}function ss(t){return Pe.fromServerFormat(t.fieldPath)}function fS(t){return t instanceof ae?function(n){if(n.op==="=="){if(vv(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NAN"}};if(yv(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vv(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NAN"}};if(yv(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(n.field),op:kV(n.op),value:n.value}}}(t):t instanceof fe?function(n){const r=n.getFilters().map(i=>fS(i));return r.length===1?r[0]:{compositeFilter:{op:bV(n.op),filters:r}}}(t):H()}function DV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Bn{constructor(e,n,r,i,s=J.min(),o=J.min(),a=Ue.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mS{constructor(e){this.ct=e}}function VV(t,e){let n;if(e.document)n=CV(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=Di(e.noDocument.readTime);n=Oe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=K.fromSegments(e.unknownDocument.path),i=Di(e.unknownDocument.version);n=Oe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ke(i[0],i[1]);return J.fromTimestamp(s)}(e.readTime)),n}function Lv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:pc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:dc(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ws(s,o.version.toTimestamp()),createTime:Ws(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:bi(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:n.path.toArray(),version:bi(e.version)}}return r}function pc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function bi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Di(t){const e=new ke(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function oi(t,e){const n=(e.baseMutations||[]).map(s=>Gf(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Gf(t.ct,s)),i=ke.fromMillis(e.localWriteTimeMs);return new Am(e.batchId,i,n,r)}function Jo(t){const e=Di(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Di(t.lastLimboFreeSnapshotVersion):J.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Q(s.documents.length===1),Zt(ol(aS(s.documents[0])))}(t.query):function(s){return Zt(hS(s))}(t.query),new Bn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ue.fromBase64String(t.resumeToken))}function gS(t,e){const n=bi(e.snapshotVersion),r=bi(e.lastLimboFreeSnapshotVersion);let i;i=uc(e.target)?uS(t.ct,e.target):cS(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ki(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function _S(t){const e=hS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hc(e,e.limit,"L"):e}function gd(t,e){return new xm(e.largestBatchId,Gf(t.ct,e.overlayMutation))}function jv(t,e){const n=e.path.lastSegment();return[t,wt(e.path.popLast()),n]}function Fv(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:bi(r.readTime),documentKey:wt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class OV{getBundleMetadata(e,n){return Uv(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Di(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Uv(e).put(function(i){return{bundleId:i.id,createTime:bi(It(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Bv(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:_S(s.bundledQuery),readTime:Di(s.readTime)}}(r)})}saveNamedQuery(e,n){return Bv(e).put(function(i){return{name:i.name,readTime:bi(It(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Uv(t){return Ke(t,"bundles")}function Bv(t){return Ke(t,"namedQueries")}/**
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
 */class nh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new nh(e,r)}getOverlay(e,n){return Oo(e).get(jv(this.userId,n)).next(r=>r?gd(this.serializer,r):null)}getOverlays(e,n){const r=An();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new xm(n,o);i.push(this.ht(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(wt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Oo(e).j("collectionPathOverlayIndex",a))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=An(),s=wt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Oo(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=gd(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=An();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Oo(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const p=gd(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return Oo(e).put(function(i,s,o){const[a,l,c]=jv(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:fc(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Oo(t){return Ke(t,"documentOverlays")}/**
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
 */class MV{Pt(e){return Ke(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Ue.fromUint8Array(r):Ue.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class ai{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Te(e.integerValue));else if("doubleValue"in e){const r=Te(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),ja(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Xn(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(Lr(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?N0(e)?this.dt(n,Number.MAX_SAFE_INTEGER):Yc(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):H()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Te(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),K.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}ai.vt=new ai;function LV(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function $v(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=LV(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class jV{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=$v(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=$v(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class FV{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class UV{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Mo{constructor(){this.jt=new jV,this.Ht=new FV(this.jt),this.Jt=new UV(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class li{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new li(this.indexId,this.documentKey,this.arrayValue,r)}}function lr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=zv(t.arrayValue,e.arrayValue),n!==0?n:(n=zv(t.directionalValue,e.directionalValue),n!==0?n:K.comparator(t.documentKey,e.documentKey)))}function zv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class qv{constructor(e){this.Xt=new me((n,r)=>Pe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Q(e.collectionGroup===this.collectionId),this.nn)return!1;const n=Of(e);if(n!==void 0&&!this.sn(n))return!1;const r=ii(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new me(Pe.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new wu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new wu(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new wu(r.field,r.dir==="asc"?0:1)));return new lc(lc.UNKNOWN_ID,this.collectionId,n,La.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function yS(t){var e,n;if(Q(t instanceof ae||t instanceof fe),t instanceof ae){if(t instanceof F0){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ae.create(t.field,"==",s)))||[];return fe.create(i,"or")}return t}const r=t.filters.map(i=>yS(i));return fe.create(r,t.op)}function BV(t){if(t.getFilters().length===0)return[];const e=Qf(yS(t));return Q(vS(e)),Wf(e)||Hf(e)?[e]:e.getFilters()}function Wf(t){return t instanceof ae}function Hf(t){return t instanceof fe&&Im(t)}function vS(t){return Wf(t)||Hf(t)||function(n){if(n instanceof fe&&Ff(n)){for(const r of n.getFilters())if(!Wf(r)&&!Hf(r))return!1;return!0}return!1}(t)}function Qf(t){if(Q(t instanceof ae||t instanceof fe),t instanceof ae)return t;if(t.filters.length===1)return Qf(t.filters[0]);const e=t.filters.map(r=>Qf(r));let n=fe.create(e,t.op);return n=mc(n),vS(n)?n:(Q(n instanceof fe),Q(zs(n)),Q(n.filters.length>1),n.filters.reduce((r,i)=>Nm(r,i)))}function Nm(t,e){let n;return Q(t instanceof ae||t instanceof fe),Q(e instanceof ae||e instanceof fe),n=t instanceof ae?e instanceof ae?function(i,s){return fe.create([i,s],"and")}(t,e):Kv(t,e):e instanceof ae?Kv(e,t):function(i,s){if(Q(i.filters.length>0&&s.filters.length>0),zs(i)&&zs(s))return M0(i,s.getFilters());const o=Ff(i)?i:s,a=Ff(i)?s:i,l=o.filters.map(c=>Nm(c,a));return fe.create(l,"or")}(t,e),mc(n)}function Kv(t,e){if(zs(e))return M0(e,t.getFilters());{const n=e.filters.map(r=>Nm(t,r));return fe.create(n,"or")}}function mc(t){if(Q(t instanceof ae||t instanceof fe),t instanceof ae)return t;const e=t.getFilters();if(e.length===1)return mc(e[0]);if(V0(t))return t;const n=e.map(i=>mc(i)),r=[];return n.forEach(i=>{i instanceof ae?r.push(i):i instanceof fe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:fe.create(r,t.op)}/**
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
 */class $V{constructor(){this.un=new km}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve($t.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve($t.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class km{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new me(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new me(he.comparator)).toArray()}}/**
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
 */const Jl=new Uint8Array(0);class zV{constructor(e,n){this.databaseId=n,this.cn=new km,this.ln=new Gr(r=>ki(r),(r,i)=>sl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:wt(i)};return Gv(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[v0(n),""],!1,!0);return Gv(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Sn(o.parent))}return r})}addFieldIndex(e,n){const r=Lo(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=es(e);return s.next(a=>{o.put(Fv(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Lo(e),i=es(e),s=Zi(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Lo(e),r=Zi(e),i=es(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return O.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new qv(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Zi(e);let i=!0;const s=new Map;return O.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=re();const a=[];return O.forEach(s,(l,c)=>{U("IndexedDbIndexManager",`Using index ${function(y){return`id=${y.indexId}|cg=${y.collectionGroup}|f=${y.fields.map(b=>`${b.fieldPath}:${b.kind}`).join(",")}`}(l)} to execute ${ki(n)}`);const h=function(y,b){const M=Of(b);if(M===void 0)return null;for(const F of cc(y,M.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,l),p=function(y,b){const M=new Map;for(const F of ii(b))for(const S of cc(y,F.fieldPath))switch(S.op){case"==":case"in":M.set(F.fieldPath.canonicalString(),S.value);break;case"not-in":case"!=":return M.set(F.fieldPath.canonicalString(),S.value),Array.from(M.values())}return null}(c,l),g=function(y,b){const M=[];let F=!0;for(const S of ii(b)){const v=S.kind===0?Sv(y,S.fieldPath,y.startAt):Av(y,S.fieldPath,y.startAt);M.push(v.value),F&&(F=v.inclusive)}return new $s(M,F)}(c,l),w=function(y,b){const M=[];let F=!0;for(const S of ii(b)){const v=S.kind===0?Av(y,S.fieldPath,y.endAt):Sv(y,S.fieldPath,y.endAt);M.push(v.value),F&&(F=v.inclusive)}return new $s(M,F)}(c,l),I=this.In(l,c,g),k=this.In(l,c,w),D=this.Tn(l,c,p),T=this.En(l.indexId,h,I,g.inclusive,k,w.inclusive,D);return O.forEach(T,E=>r.G(E,n.limit).next(y=>{y.forEach(b=>{const M=K.fromSegments(b.documentKey);o.has(M)||(o=o.add(M),a.push(M))})}))}).next(()=>a)}return O.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=BV(fe.create(e.filters,"and")).map(r=>Bf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let p=0;p<l;++p){const g=n?this.dn(n[p/c]):Jl,w=this.An(e,g,r[p%c],i),I=this.Rn(e,g,s[p%c],o),k=a.map(D=>this.An(e,g,D,!0));h.push(...this.createRange(w,I,k))}return h}An(e,n,r,i){const s=new li(e,K.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new li(e,K.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new qv(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return O.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new me(Pe.comparator),h=!1;for(const p of l.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:c=c.add(g.field));for(const p of l.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new Mo;for(const i of ii(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);ai.vt.It(s,o)}return r.zt()}dn(e){const n=new Mo;return ai.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new Mo;return ai.vt.It(Ba(this.databaseId,n),r.Yt(function(s){const o=ii(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new Mo);let s=0;for(const o of ii(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&$a(a))i=this.gn(i,o,a);else{const c=l.Yt(o.kind);ai.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Mo;l.seed(a.zt()),ai.vt.It(o,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof ae&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Lo(e),i=es(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,p){const g=p?new La(p.sequenceNumber,new $t(Di(p.readTime),new K(Sn(p.documentKey)),p.largestBatchId)):La.empty(),w=h.fields.map(([I,k])=>new wu(Pe.fromServerFormat(I),k));return new lc(h.indexId,h.collectionGroup,w,g)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ne(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Lo(e),s=es(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>O.forEach(a,l=>s.put(Fv(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,l=>this.wn(e,i,l).next(c=>{const h=this.Sn(s,l);return c.isEqual(h)?O.resolve():this.bn(e,s,l,c,h)}))))})}Dn(e,n,r,i){return Zi(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Zi(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Zi(e);let s=new me(lr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new li(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new me(lr);const i=this.Vn(n,e);if(i==null)return r;const s=Of(n);if(s!=null){const o=e.data.field(s.fieldPath);if($a(o))for(const a of o.arrayValue.values||[])r=r.add(new li(n.indexId,e.key,this.dn(a),i))}else r=r.add(new li(n.indexId,e.key,Jl,i));return r}bn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,p,g){const w=l.getIterator(),I=c.getIterator();let k=Xi(w),D=Xi(I);for(;k||D;){let T=!1,E=!1;if(k&&D){const y=h(k,D);y<0?E=!0:y>0&&(T=!0)}else k!=null?E=!0:T=!0;T?(p(D),D=Xi(I)):E?(g(k),k=Xi(w)):(k=Xi(w),D=Xi(I))}}(i,s,lr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),O.waitFor(o)}yn(e){let n=1;return es(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>lr(o,a)).filter((o,a,l)=>!a||lr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=lr(o,e),l=lr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Jl,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Jl,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return lr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Wv)}getMinOffset(e,n){return O.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||H())).next(Wv)}}function Gv(t){return Ke(t,"collectionParents")}function Zi(t){return Ke(t,"indexEntries")}function Lo(t){return Ke(t,"indexConfiguration")}function es(t){return Ke(t,"indexState")}function Wv(t){Q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;_m(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new $t(e.readTime,e.documentKey,n)}/**
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
 */const Hv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ct{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function ES(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,p,g)=>(a++,g.delete()));s.push(l.next(()=>{Q(a===1)}));const c=[];for(const h of n.mutations){const p=S0(e,h.key.path,n.batchId);s.push(i.delete(p)),c.push(h.key)}return O.waitFor(s).next(()=>c)}function gc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw H();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(41943040,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);class rh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){Q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new rh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ur(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=os(e),o=ur(e);return o.add({}).next(a=>{Q(typeof a=="number");const l=new Am(a,n,r,i),c=function(w,I,k){const D=k.baseMutations.map(E=>fc(w.ct,E)),T=k.mutations.map(E=>fc(w.ct,E));return{userId:I,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:D,mutations:T}}(this.serializer,this.userId,l),h=[];let p=new me((g,w)=>ne(g.canonicalString(),w.canonicalString()));for(const g of i){const w=S0(this.userId,g.key.path,a);p=p.add(g.key.path.popLast()),h.push(o.put(c)),h.push(s.put(w,SD))}return p.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),O.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return ur(e).get(n).next(r=>r?(Q(r.userId===this.userId),oi(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?O.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ur(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(Q(a.batchId>=r),s=oi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ur(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ur(e).U("userMutationsIndex",n).next(r=>r.map(i=>oi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Iu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return os(e).J({range:i},(o,a,l)=>{const[c,h,p]=o,g=Sn(h);if(c===this.userId&&n.path.isEqual(g))return ur(e).get(p).next(w=>{if(!w)throw H();Q(w.userId===this.userId),s.push(oi(this.serializer,w))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new me(ne);const i=[];return n.forEach(s=>{const o=Iu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=os(e).J({range:a},(c,h,p)=>{const[g,w,I]=c,k=Sn(w);g===this.userId&&s.path.isEqual(k)?r=r.add(I):p.done()});i.push(l)}),O.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Iu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new me(ne);return os(e).J({range:o},(l,c,h)=>{const[p,g,w]=l,I=Sn(g);p===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(w)):h.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ur(e).get(s).next(o=>{if(o===null)throw H();Q(o.userId===this.userId),r.push(oi(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return ES(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return os(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Sn(s[1]);i.push(l)}else a.done()}).next(()=>{Q(i.length===0)})})}containsKey(e,n){return wS(e,this.userId,n)}Nn(e){return IS(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function wS(t,e,n){const r=Iu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return os(t).J({range:s,H:!0},(a,l,c)=>{const[h,p,g]=a;h===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function ur(t){return Ke(t,"mutations")}function os(t){return Ke(t,"documentMutations")}function IS(t){return Ke(t,"mutationQueues")}/**
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
 */class Vi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vi(0)}static kn(){return new Vi(-1)}}/**
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
 */class qV{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Vi(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>J.fromTimestamp(new ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ts(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ts(e).J((o,a)=>{const l=Jo(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ts(e).J((r,i)=>{const s=Jo(i);n(s)})}qn(e){return Qv(e).get("targetGlobalKey").next(n=>(Q(n!==null),n))}Qn(e,n){return Qv(e).put("targetGlobalKey",n)}Kn(e,n){return ts(e).put(gS(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ki(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ts(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Jo(a);sl(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=yr(e);return n.forEach(o=>{const a=wt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=yr(e);return O.forEach(n,s=>{const o=wt(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=yr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=yr(e);let s=re();return i.J({range:r,H:!0},(o,a,l)=>{const c=Sn(o[1]),h=new K(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=wt(n.path),i=IDBKeyRange.bound([r],[v0(r)],!1,!0);let s=0;return yr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return ts(e).get(n).next(r=>r?Jo(r):null)}}function ts(t){return Ke(t,"targets")}function Qv(t){return Ke(t,"targetGlobal")}function yr(t){return Ke(t,"targetDocuments")}/**
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
 */function Jv([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class KV{constructor(e){this.Un=e,this.buffer=new me(Jv),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Jv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Kr(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await zi(n)}await this.Hn(3e5)})}}class WV{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Jt.oe);const r=new KV(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Hv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hv):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),ns()<=oe.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${p} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function HV(t,e){return new WV(t,e)}/**
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
 */class QV{constructor(e,n){this.db=e,this.garbageCollector=HV(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return Yl(e,r)}removeReference(e,n,r){return Yl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Yl(e,n)}nr(e,n){return function(i,s){let o=!1;return IS(i).Y(a=>wS(i,a,s).next(l=>(l&&(o=!0),O.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const l=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),yr(e).delete(function(p){return[0,wt(p.path)]}(o))))});i.push(l)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Yl(e,n)}tr(e,n){const r=yr(e);let i,s=Jt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==Jt.oe&&n(new K(Sn(i)),s),s=c,i=l):s=Jt.oe}).next(()=>{s!==Jt.oe&&n(new K(Sn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Yl(t,e){return yr(t).put(function(r,i){return{targetId:0,path:wt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class TS{constructor(){this.changes=new Gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JV{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ei(e).put(r)}removeEntry(e,n,r){return ei(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],pc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Oe.newInvalidDocument(n);return ei(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(jo(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Oe.newInvalidDocument(n)};return ei(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(jo(n))},(i,s)=>{r={document:this.ir(n,s),size:gc(s)}}).next(()=>r)}getEntries(e,n){let r=jt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=jt(),i=new Ce(K.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,gc(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return O.resolve();let i=new me(Zv);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(jo(i.first()),jo(i.last())),o=i.getIterator();let a=o.getNext();return ei(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const p=K.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Zv(a,p)<0;)r(a,null),a=o.getNext();a&&a.isEqual(p)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(jo(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),pc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ei(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=jt();for(const p of c){const g=this.ir(K.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(al(n,g)||i.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=jt();const o=Xv(n,r),a=Xv(n,$t.max());return ei(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const p=this.ir(K.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new YV(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Yv(e).get("remoteDocumentGlobalKey").next(n=>(Q(!!n),n))}rr(e,n){return Yv(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=VV(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Oe.newInvalidDocument(e)}}function SS(t){return new JV(t)}class YV extends TS{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Gr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new me((s,o)=>ne(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Lv(this.cr.serializer,o);i=i.add(s.path.popLast());const c=gc(l);r+=c-a.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Lv(this.cr.serializer,o.convertToNoDocument(J.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Yv(t){return Ke(t,"remoteDocumentGlobal")}function ei(t){return Ke(t,"remoteDocumentsV14")}function jo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Xv(t,e){const n=e.documentKey.path.toArray();return[t,pc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Zv(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ne(n[s],r[s]),i)return i;return i=ne(n.length,r.length),i||(i=ne(n[n.length-2],r[r.length-2]),i||ne(n[n.length-1],r[r.length-1]))}/**
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
 */class XV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class AS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&da(r.mutation,i,Yt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=An();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ho();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=An();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=jt();const o=ha(),a=function(){return ha()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Wr)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),da(h.mutation,c,h.mutation.getFieldMask(),ke.now())):o.set(c.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var p;return a.set(c,new XV(h,(p=o.get(c))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ha();let i=new Ce((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Yt.empty();h=a.applyToLocalView(c,h),r.set(l,h);const p=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,p)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,p=K0();h.forEach(g=>{if(!s.has(g)){const w=X0(n.get(g),r.get(g));w!==null&&p.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):U0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(An());let a=-1,l=s;return o.next(c=>O.forEach(c,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(h)?O.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,re())).next(h=>({batchId:a,changes:q0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ho();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ho();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const c=function(p,g){return new oo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Oe.newInvalidDocument(h)))});let a=Ho();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&da(h.mutation,c,Yt.empty(),ke.now()),al(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class ZV{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:It(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:_S(i.bundledQuery),readTime:It(i.readTime)}}(n)),O.resolve()}}/**
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
 */class eO{constructor(){this.overlays=new Ce(K.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=An();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=An(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=An(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=An(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xm(n,r));let s=this.Ir.get(n);s===void 0&&(s=re(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class tO{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class bm{constructor(){this.Tr=new me(Ge.Er),this.dr=new me(Ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ge(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new he([])),r=new Ge(n,e),i=new Ge(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new he([])),r=new Ge(n,e),i=new Ge(n,e+1);let s=re();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ge(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ne(e.wr,n.wr)}static Ar(e,n){return ne(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class nO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new me(Ge.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Am(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Ge(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),i=new Ge(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new me(ne);return n.forEach(i=>{const s=new Ge(i,0),o=new Ge(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ge(new K(s),0);let a=new me(ne);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),O.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,i=>{const s=new Ge(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ge(n,0),i=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rO{constructor(e){this.Mr=e,this.docs=function(){return new Ce(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let r=jt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=jt();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_m(E0(h),r)<=0||(i.has(h.key)||al(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iO(this)}getSize(e){return O.resolve(this.size)}}class iO extends TS{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class sO{constructor(e){this.persistence=e,this.Nr=new Gr(n=>ki(n),sl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new bm,this.targetCount=0,this.kr=Vi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
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
 */class CS{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Jt(0),this.Kr=!1,this.Kr=!0,this.$r=new tO,this.referenceDelegate=e(this),this.Ur=new sO(this),this.indexManager=new $V,this.remoteDocumentCache=function(i){return new rO(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mS(n),this.Gr=new ZV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new nO(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new oO(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class oO extends I0{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.Jr=new bm,this.Yr=null}static Zr(e){return new ih(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class aO{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Qc("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fv,{unique:!0}),l.createObjectStore("documentMutations")}(e),eE(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),eE(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fv,{unique:!0});const p=c.store("mutations"),g=h.map(w=>p.put(w));return O.waitFor(g)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:MD});c.createIndex("collectionPathOverlayIndex",LD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",jD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:AD});c.createIndex("documentKeyIndex",CD),c.createIndex("collectionGroupIndex",xD)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:bD}).createIndex("sequenceNumberIndex",DD,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:VD}).createIndex("documentKeyIndex",OD,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=gc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>O.forEach(a,l=>{Q(l.userId===s.userId);const c=oi(this.serializer,l);return ES(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new he(o),c=function(p){return[0,wt(p)]}(l);s.push(n.get(c).next(h=>h?O.resolve():(p=>n.put({targetId:0,path:wt(p),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>O.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:kD});const r=n.store("collectionParents"),i=new km,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:wt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new he(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=Sn(a);return s(h.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=Jo(i),o=gS(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(p){return p.document?new K(he.fromString(p.document.name).popFirst(5)):p.noDocument?K.fromSegments(p.noDocument.path):p.unknownDocument?K.fromSegments(p.unknownDocument.path):H()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>O.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=SS(this.serializer),s=new CS(ih.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:re();oi(this.serializer,l).keys().forEach(p=>h=h.add(p)),a.set(l.userId,h)}),O.forEach(a,(l,c)=>{const h=new yt(c),p=nh.lt(this.serializer,h),g=s.getIndexManager(h),w=rh.lt(h,this.serializer,g,s.referenceDelegate);return new AS(i,w,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Mf(n,Jt.oe),l).next()})})}}function eE(t){t.createObjectStore("targetDocuments",{keyPath:RD}).createIndex("documentTargetsIndex",ND,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",PD,{unique:!0}),t.createObjectStore("targetGlobal")}const _d="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Dm{constructor(e,n,r,i,s,o,a,l,c,h,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!Dm.D())throw new z(j.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new QV(this,i),this.Ai=n+"main",this.serializer=new mS(l),this.Ri=new Dr(this.Ai,this.hi,new aO(this.serializer)),this.$r=new MV,this.Ur=new qV(this.referenceDelegate,this.serializer),this.remoteDocumentCache=SS(this.serializer),this.Gr=new OV,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&vt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(j.FAILED_PRECONDITION,_d);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Jt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Xl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(Kr(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Fo(e).get("owner").next(n=>O.resolve(this.vi(n)))}Ci(e){return Xl(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ke(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?O.resolve(!0):Fo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new z(j.FAILED_PRECONDITION,_d);return!1}}return!(!this.networkEnabled||!this.inForeground)||Xl(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Mf(e,Jt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>Xl(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return rh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new zV(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return nh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?BD:l===16?UD:l===15?vm:l===14?x0:l===13?C0:l===12?FD:l===11?A0:void H()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new Mf(a,this.Qr?this.Qr.next():Jt.oe),n==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new z(j.FAILED_PRECONDITION,w0);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Fo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new z(j.FAILED_PRECONDITION,_d)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Fo(e).put("owner",n)}static D(){return Dr.D()}bi(e){const n=Fo(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):O.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;ST()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return vt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){vt("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Fo(t){return Ke(t,"owner")}function Xl(t){return Ke(t,"clientMetadata")}function lO(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Vm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vm(e,n.fromCache,r,i)}}/**
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
 */class uO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xS{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ST()?8:T0(qe())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new uO;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ns()<=oe.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(ns()<=oe.DEBUG&&U("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ns()<=oe.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):O.resolve())}Yi(e,n){if(Cv(n))return O.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hc(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,hc(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return Cv(n)||i.isEqual(J.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?O.resolve(null):(ns()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rs(n)),this.rs(e,o,n,_D(i,-1)).next(a=>a))})}ts(e,n){let r=new me($0(e));return n.forEach((i,s)=>{al(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ns()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",rs(n)),this.Ji.getDocumentsMatchingQuery(e,n,$t.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class cO{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ce(ne),this._s=new Gr(s=>ki(s),sl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AS(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function PS(t,e,n,r){return new cO(t,e,n,r)}async function RS(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function hO(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const p=c.batch,g=p.keys();let w=O.resolve();return g.forEach(I=>{w=w.next(()=>h.getEntry(l,I)).next(k=>{const D=c.docVersions.get(I);Q(D!==null),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),h.addEntry(k)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function NS(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function dO(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,p)=>{const g=i.get(p);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,p)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ue.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),i=i.insert(p,w),function(k,D,T){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,w,h)&&a.push(n.Ur.updateTargetData(s,w))});let l=jt(),c=re();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(fO(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(J.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function fO(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=jt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function pO(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mO(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jf(t,e,n){const r=ee(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function tE(t,e,n){const r=ee(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const p=ee(l),g=p._s.get(h);return g!==void 0?O.resolve(p.os.get(g)):p.Ur.getTargetData(c,h)}(r,o,Zt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(a=>(gO(r,nV(e),a),{documents:a,Ts:s})))}function gO(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class nE{constructor(){this.activeTargetIds=lV()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kS{constructor(){this.so=new nE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new nE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _O{_o(e){}shutdown(){}}/**
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
 */class rE{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zl=null;function yd(){return Zl===null?Zl=function(){return 268435456+Math.round(2147483648*Math.random())}():Zl++,"0x"+Zl.toString(16)}/**
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
 */const yO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vO{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ct="WebChannelConnection";class EO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=yd(),l=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(U("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Oa("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=yO[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=yd();return new Promise((o,a)=>{const l=new f0;l.setWithCredentials(!0),l.listenOnce(p0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Eu.NO_ERROR:const h=l.getResponseJson();U(ct,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Eu.TIMEOUT:U(ct,`RPC '${e}' ${s} timed out`),a(new z(j.DEADLINE_EXCEEDED,"Request time out"));break;case Eu.HTTP_ERROR:const p=l.getStatus();if(U(ct,`RPC '${e}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const I=function(D){const T=D.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(w.status);a(new z(I,w.message))}else a(new z(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(j.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{U(ct,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(ct,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=yd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_0(),a=g0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");U(ct,`Creating RPC '${e}' stream ${i}: ${h}`,l);const p=o.createWebChannel(h,l);let g=!1,w=!1;const I=new vO({Io:D=>{w?U(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(U(ct,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),U(ct,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},To:()=>p.close()}),k=(D,T,E)=>{D.listen(T,y=>{try{E(y)}catch(b){setTimeout(()=>{throw b},0)}})};return k(p,Wo.EventType.OPEN,()=>{w||(U(ct,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),k(p,Wo.EventType.CLOSE,()=>{w||(w=!0,U(ct,`RPC '${e}' stream ${i} transport closed`),I.So())}),k(p,Wo.EventType.ERROR,D=>{w||(w=!0,Oa(ct,`RPC '${e}' stream ${i} transport errored:`,D),I.So(new z(j.UNAVAILABLE,"The operation could not be completed")))}),k(p,Wo.EventType.MESSAGE,D=>{var T;if(!w){const E=D.data[0];Q(!!E);const y=E,b=y.error||((T=y[0])===null||T===void 0?void 0:T.error);if(b){U(ct,`RPC '${e}' stream ${i} received error:`,b);const M=b.status;let F=function(C){const x=Le[C];if(x!==void 0)return tS(x)}(M),S=b.message;F===void 0&&(F=j.INTERNAL,S="Unknown error status: "+M+" with message "+b.message),w=!0,I.So(new z(F,S)),p.close()}else U(ct,`RPC '${e}' stream ${i} received:`,E),I.bo(E)}}),k(a,m0.STAT_EVENT,D=>{D.stat===Vf.PROXY?U(ct,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Vf.NOPROXY&&U(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}/**
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
 */function wO(){return typeof window<"u"?window:null}function xu(){return typeof document<"u"?document:null}/**
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
 */function sh(t){return new SV(t,!0)}/**
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
 */class bS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class DS{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new bS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(vt(n.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new z(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IO extends DS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=xV(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?It(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Kf(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=uc(l)?{documents:uS(s,l)}:{query:cS(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=iS(s,o.resumeToken);const c=zf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Ws(s,o.snapshotVersion.toTimestamp());const c=zf(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=RV(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Kf(this.serializer),n.removeTarget=e,this.a_(n)}}class TO extends DS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=PV(e.writeResults,e.commitTime),r=It(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Kf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fc(this.serializer,r))};this.a_(n)}}/**
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
 */class SO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new z(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,qf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,qf(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class AO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(vt(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class CO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{qi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ee(l);c.L_.add(4),await ul(c),c.q_.set("Unknown"),c.L_.delete(4),await oh(c)}(this))})}),this.q_=new AO(r,i)}}async function oh(t){if(qi(t))for(const e of t.B_)await e(!0)}async function ul(t){for(const e of t.B_)await e(!1)}function VS(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),jm(n)?Lm(n):lo(n).r_()&&Mm(n,e))}function Om(t,e){const n=ee(t),r=lo(n);n.N_.delete(e),r.r_()&&OS(n,e),n.N_.size===0&&(r.r_()?r.o_():qi(n)&&n.q_.set("Unknown"))}function Mm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).A_(e)}function OS(t,e){t.Q_.xe(e),lo(t).R_(e)}function Lm(t){t.Q_=new EV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.q_.v_()}function jm(t){return qi(t)&&!lo(t).n_()&&t.N_.size>0}function qi(t){return ee(t).L_.size===0}function MS(t){t.Q_=void 0}async function xO(t){t.q_.set("Online")}async function PO(t){t.N_.forEach((e,n)=>{Mm(t,e)})}async function RO(t,e){MS(t),jm(t)?(t.q_.M_(e),Lm(t)):t.q_.set("Unknown")}async function NO(t,e,n){if(t.q_.set("Online"),e instanceof rS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _c(t,r)}else if(e instanceof Cu?t.Q_.Ke(e):e instanceof nS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await NS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(Ue.EMPTY_BYTE_STRING,h.snapshotVersion)),OS(s,l);const p=new Bn(h.target,l,c,h.sequenceNumber);Mm(s,p)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await _c(t,r)}}async function _c(t,e,n){if(!Kr(e))throw e;t.L_.add(1),await ul(t),t.q_.set("Offline"),n||(n=()=>NS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await oh(t)})}function LS(t,e){return e().catch(n=>_c(t,n,e))}async function cl(t){const e=ee(t),n=Fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;kO(e);)try{const i=await pO(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,bO(e,i)}catch(i){await _c(e,i)}jS(e)&&FS(e)}function kO(t){return qi(t)&&t.O_.length<10}function bO(t,e){t.O_.push(e);const n=Fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function jS(t){return qi(t)&&!Fr(t).n_()&&t.O_.length>0}function FS(t){Fr(t).start()}async function DO(t){Fr(t).p_()}async function VO(t){const e=Fr(t);for(const n of t.O_)e.m_(n.mutations)}async function OO(t,e,n){const r=t.O_.shift(),i=Cm.from(r,e,n);await LS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cl(t)}async function MO(t,e){e&&Fr(t).V_&&await async function(r,i){if(function(o){return _V(o)&&o!==j.ABORTED}(i.code)){const s=r.O_.shift();Fr(r).s_(),await LS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cl(r)}}(t,e),jS(t)&&FS(t)}async function iE(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=qi(n);n.L_.add(3),await ul(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await oh(n)}async function LO(t,e){const n=ee(t);e?(n.L_.delete(2),await oh(n)):e||(n.L_.add(2),await ul(n),n.q_.set("Unknown"))}function lo(t){return t.K_||(t.K_=function(n,r,i){const s=ee(n);return s.w_(),new IO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:xO.bind(null,t),Ro:PO.bind(null,t),mo:RO.bind(null,t),d_:NO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),jm(t)?Lm(t):t.q_.set("Unknown")):(await t.K_.stop(),MS(t))})),t.K_}function Fr(t){return t.U_||(t.U_=function(n,r,i){const s=ee(n);return s.w_(),new TO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DO.bind(null,t),mo:MO.bind(null,t),f_:VO.bind(null,t),g_:OO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await cl(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Fm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Fm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Um(t,e){if(vt("AsyncQueue",`${e}: ${t}`),Kr(t))return new z(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ho(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class sE{constructor(){this.W_=new Ce(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hs(e,n,Rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class jO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class FO{constructor(){this.queries=oE(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=oE(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new z(j.ABORTED,"Firestore shutting down"))}}function oE(){return new Gr(t=>B0(t),Xc)}async function US(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new jO,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Um(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Bm(n)}async function BS(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UO(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Bm(n)}function BO(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Bm(t){t.Y_.forEach(e=>{e.next()})}var Yf,aE;(aE=Yf||(Yf={})).ea="default",aE.Cache="cache";class $S{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Yf.Cache}}/**
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
 */class zS{constructor(e){this.key=e}}class qS{constructor(e){this.key=e}}class $O{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=$0(e),this.Ra=new Rs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new sE,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const g=i.get(h),w=al(this.query,p)?p:null,I=!!g&&this.mutatedKeys.has(g.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let D=!1;g&&w?g.data.isEqual(w.data)?I!==k&&(r.track({type:3,doc:w}),D=!0):this.ga(g,w)||(r.track({type:2,doc:w}),D=!0,(l&&this.Aa(w,l)>0||c&&this.Aa(w,c)<0)&&(a=!0)):!g&&w?(r.track({type:0,doc:w}),D=!0):g&&!w&&(r.track({type:1,doc:g}),D=!0,(l||c)&&(a=!0)),D&&(w?(o=o.add(w),s=k?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,p)=>function(w,I){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return k(w)-k(I)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Hs(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new sE,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new qS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new zS(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qO{constructor(e){this.key=e,this.va=!1}}class KO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Gr(a=>B0(a),Xc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(K.comparator),this.Na=new Map,this.La=new bm,this.Ba={},this.ka=new Map,this.qa=Vi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function GO(t,e,n=!0){const r=JS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await KS(r,e,n,!0),i}async function WO(t,e){const n=JS(t);await KS(n,e,!0,!1)}async function KS(t,e,n,r){const i=await mO(t.localStore,Zt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await HO(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&VS(t.remoteStore,i),a}async function HO(t,e,n,r,i){t.Ka=(p,g,w)=>async function(k,D,T,E){let y=D.view.ma(T);y.ns&&(y=await tE(k.localStore,D.query,!1).then(({documents:S})=>D.view.ma(S,y)));const b=E&&E.targetChanges.get(D.targetId),M=E&&E.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(y,k.isPrimaryClient,b,M);return uE(k,D.targetId,F.wa),F.snapshot}(t,p,g,w);const s=await tE(t.localStore,e,!0),o=new $O(e,s.Ts),a=o.ma(s.documents),l=ll.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);uE(t,n,c.wa);const h=new zO(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function QO(t,e,n){const r=ee(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Xc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Om(r.remoteStore,i.targetId),Xf(r,i.targetId)}).catch(zi)):(Xf(r,i.targetId),await Jf(r.localStore,i.targetId,!0))}async function JO(t,e){const n=ee(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Om(n.remoteStore,r.targetId))}async function YO(t,e,n){const r=YS(t);try{const i=await function(o,a){const l=ee(o),c=ke.now(),h=a.reduce((w,I)=>w.add(I.key),re());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let I=jt(),k=re();return l.cs.getEntries(w,h).next(D=>{I=D,I.forEach((T,E)=>{E.isValidDocument()||(k=k.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,I)).next(D=>{p=D;const T=[];for(const E of a){const y=mV(E,p.get(E.key).overlayedDocument);y!=null&&T.push(new Wr(E.key,y,b0(y.value.mapValue),Ft.exists(!0)))}return l.mutationQueue.addMutationBatch(w,c,T,a)}).next(D=>{g=D;const T=D.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(w,D.batchId,T)})}).then(()=>({batchId:g.batchId,changes:q0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ce(ne)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await hl(r,i.changes),await cl(r.remoteStore)}catch(i){const s=Um(i,"Failed to persist write");n.reject(s)}}async function GS(t,e){const n=ee(t);try{const r=await dO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Q(o.va):i.removedDocuments.size>0&&(Q(o.va),o.va=!1))}),await hl(n,r,e)}catch(r){await zi(r)}}function lE(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ee(o);l.onlineState=a;let c=!1;l.queries.forEach((h,p)=>{for(const g of p.j_)g.Z_(a)&&(c=!0)}),c&&Bm(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XO(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ce(K.comparator);o=o.insert(s,Oe.newNoDocument(s,J.min()));const a=re().add(s),l=new th(J.min(),new Map,new Ce(ne),o,a);await GS(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),$m(r)}else await Jf(r.localStore,e,!1).then(()=>Xf(r,e,n)).catch(zi)}async function ZO(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await hO(n.localStore,e);HS(n,r,null),WS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hl(n,i)}catch(i){await zi(i)}}async function eM(t,e,n){const r=ee(t);try{const i=await function(o,a){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(p=>(Q(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(c,p))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);HS(r,e,n),WS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await hl(r,i)}catch(i){await zi(i)}}function WS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function HS(t,e,n){const r=ee(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Xf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||QS(t,r)})}function QS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Om(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),$m(t))}function uE(t,e,n){for(const r of n)r instanceof zS?(t.La.addReference(r.key,e),tM(t,r)):r instanceof qS?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||QS(t,r.key)):H()}function tM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),$m(t))}function $m(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(he.fromString(e)),r=t.qa.next();t.Na.set(r,new qO(n)),t.Oa=t.Oa.insert(n,r),VS(t.remoteStore,new Bn(Zt(ol(n.path)),r,"TargetPurposeLimboResolution",Jt.oe))}}async function hl(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Vm.Wi(l.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=ee(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(c,g=>O.forEach(g.$i,w=>h.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>O.forEach(g.Ui,w=>h.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!Kr(p))throw p;U("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const w=h.os.get(g),I=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(g,k)}}}(r.localStore,s))}async function nM(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await RS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new z(j.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hl(n,r.hs)}}function rM(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let i=re();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function JS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=GS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XO.bind(null,e),e.Ca.d_=UO.bind(null,e.eventManager),e.Ca.$a=BO.bind(null,e.eventManager),e}function YS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eM.bind(null,e),e}class Ka{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return PS(this.persistence,new xS,e.initialUser,this.serializer)}Ga(e){return new CS(ih.Zr,this.serializer)}Wa(e){return new kS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ka.provider={build:()=>new Ka};class iM extends Ka{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await YS(this.Ja.syncEngine),await cl(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return PS(this.persistence,new xS,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new GV(r,e.asyncQueue,n)}Ha(e,n){const r=new wD(n,this.persistence);return new ED(e.asyncQueue,r)}Ga(e){const n=lO(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new Dm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,wO(),xu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new kS}}class yc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nM.bind(null,this.syncEngine),await LO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FO}()}createDatastore(e){const n=sh(e.databaseInfo.databaseId),r=function(s){return new EO(s)}(e.databaseInfo);return function(s,o,a,l){return new SO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new CO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>lE(this.syncEngine,n,0),function(){return rE.D()?new rE:new _O}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const p=new KO(i,s,o,a,l,c);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ul(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}yc.provider={build:()=>new yc};/**
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
 */class XS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):vt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class sM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=y0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Um(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vd(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await RS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oM(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>iE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>iE(e.remoteStore,i)),t._onlineComponents=e}async function oM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await vd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Oa("Error using user provided cache. Falling back to memory cache: "+n),await vd(t,new Ka)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await vd(t,new Ka);return t._offlineComponents}async function ZS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await cE(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await cE(t,new yc))),t._onlineComponents}function aM(t){return ZS(t).then(e=>e.syncEngine)}async function Zf(t){const e=await ZS(t),n=e.eventManager;return n.onListen=GO.bind(null,e.syncEngine),n.onUnlisten=QO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JO.bind(null,e.syncEngine),n}function lM(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new XS({next:g=>{h.Za(),o.enqueueAndForget(()=>BS(s,p));const w=g.docs.has(a);!w&&g.fromCache?c.reject(new z(j.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?c.reject(new z(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new $S(ol(a.path),h,{includeMetadataChanges:!0,_a:!0});return US(s,p)}(await Zf(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function eA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hE=new Map;/**
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
 */function tA(t,e,n){if(!n)throw new z(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uM(t,e,n,r){if(e===!0&&r===!0)throw new z(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dE(t){if(!K.isDocumentKey(t))throw new z(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fE(t){if(K.isDocumentKey(t))throw new z(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ah(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function yi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ah(t);throw new z(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function cM(t,e){if(e<=0)throw new z(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class pE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uD;switch(r.type){case"firstParty":return new dD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hE.get(n);r&&(U("ComponentProvider","Removing Datastore"),hE.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Vr extends Hr{constructor(e,n,r){super(e,n,ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new K(e))}withConverter(e){return new Vr(this.firestore,e,this._path)}}function qm(t,e,...n){if(t=Ae(t),tA("collection","path",e),t instanceof zm){const r=he.fromString(e,...n);return fE(r),new Vr(t,null,r)}{if(!(t instanceof Tt||t instanceof Vr))throw new z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return fE(r),new Vr(t.firestore,null,r)}}function Vt(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=y0.newId()),tA("doc","path",e),t instanceof zm){const r=he.fromString(e,...n);return dE(r),new Tt(t,null,new K(r))}{if(!(t instanceof Tt||t instanceof Vr))throw new z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return dE(r),new Tt(t.firestore,t instanceof Vr?t.converter:null,new K(r))}}/**
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
 */class mE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bS(this,"async_queue_retry"),this.Vu=()=>{const r=xu();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=xu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=xu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Kn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Kr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw vt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Fm.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function gE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ga extends zm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new mE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mE(e),this._firestoreClient=void 0,await e}}}function hM(t,e,n){n||(n="(default)");const r=Bi(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(ba(s,e))return i;throw new z(j.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new z(j.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function Km(t){if(t._terminated)throw new z(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dM(t),t._firestoreClient}function dM(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new zD(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,eA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new sM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(Ue.fromBase64String(e))}catch(n){throw new z(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wm{constructor(e){this._methodName=e}}/**
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
 */class Hm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */class Qm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const fM=/^__.*__$/;class pM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ao(e,this.data,n,this.fieldTransforms)}}function nA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Jm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Jm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return vc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(nA(this.Cu)&&fM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class mM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sh(e)}Qu(e,n,r,i=!1){return new Jm({Cu:e,methodName:n,qu:r,path:Pe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rA(t){const e=t._freezeSettings(),n=sh(t._databaseId);return new mM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gM(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);oA("Data must be an object, but it was:",o,r);const a=iA(r,o);let l,c;if(s.merge)l=new Yt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const p of s.mergeFields){const g=yM(e,p,n);if(!o.contains(g))throw new z(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);EM(h,g)||h.push(g)}l=new Yt(h),c=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,c=o.fieldTransforms;return new pM(new Pt(a),l,c)}class Ym extends Wm{_toFieldTransform(e){return new Y0(e.path,new qs)}isEqual(e){return e instanceof Ym}}function _M(t,e,n,r=!1){return Xm(n,t.Qu(r?4:3,e))}function Xm(t,e){if(sA(t=Ae(t)))return oA("Unsupported field value:",e,t),iA(t,e);if(t instanceof Wm)return function(r,i){if(!nA(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Xm(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uV(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:Ws(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ws(i.serializer,s)}}if(r instanceof Hm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qs)return{bytesValue:iS(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Rm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Qm)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return Tm(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ah(r)}`)}(t,e)}function iA(t,e){const n={};return P0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):so(t,(r,i)=>{const s=Xm(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Hm||t instanceof Qs||t instanceof Tt||t instanceof Wm||t instanceof Qm)}function oA(t,e,n){if(!sA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ah(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function yM(t,e,n){if((e=Ae(e))instanceof Gm)return e._internalPath;if(typeof e=="string")return aA(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const vM=new RegExp("[~\\*/\\[\\]]");function aA(t,e,n){if(e.search(vM)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gm(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(j.INVALID_ARGUMENT,a+t+l)}function EM(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class lA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wM extends lA{data(){return super.data()}}function lh(t,e){return typeof e=="string"?aA(t,e):e instanceof Gm?e._internalPath:e._delegate._internalPath}/**
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
 */function IM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zm{}class eg extends Zm{}function uA(t,e,...n){let r=[];e instanceof Zm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof tg).length,a=s.filter(l=>l instanceof uh).length;if(o>1||o>0&&a>0)throw new z(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class uh extends eg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new uh(e,n,r)}_apply(e){const n=this._parse(e);return dA(e._query,n),new Hr(e.firestore,e.converter,$f(e._query,n))}_parse(e){const n=rA(e.firestore);return function(s,o,a,l,c,h,p){let g;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new z(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){yE(p,h);const w=[];for(const I of p)w.push(_E(l,s,I));g={arrayValue:{values:w}}}else g=_E(l,s,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||yE(p,h),g=_M(a,o,p,h==="in"||h==="not-in");return ae.create(c,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function TM(t,e,n){const r=e,i=lh("where",t);return uh._create(i,r,n)}class tg extends Zm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new tg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)dA(o,l),o=$f(o,l)}(e._query,n),new Hr(e.firestore,e.converter,$f(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ng extends eg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ng(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new z(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new z(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new za(s,o)}(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new oo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function cA(t,e="asc"){const n=e,r=lh("orderBy",t);return ng._create(r,n)}class rg extends eg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new rg(e,n,r)}_apply(e){return new Hr(e.firestore,e.converter,hc(e._query,this._limit,this._limitType))}}function hA(t){return cM("limit",t),rg._create("limit",t,"F")}function _E(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new z(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!U0(e)&&n.indexOf("/")!==-1)throw new z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!K.isDocumentKey(r))throw new z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ba(t,new K(r))}if(n instanceof Tt)return Ba(t,n._key);throw new z(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ah(n)}.`)}function yE(t,e){if(!Array.isArray(t)||t.length===0)throw new z(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class SM{convertValue(e,n="none"){switch(Ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return so(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Te(o.doubleValue));return new Qm(s)}convertGeoPoint(e){return new Hm(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fa(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);Q(pS(r));const i=new Ri(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function AM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fA extends lA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Pu extends fA{data(e={}){return super.data(e)}}class CM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Yo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pu(this._firestore,this._userDataWriter,r.key,r,new Yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Yo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Pu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Yo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:xM(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
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
 */function ch(t){t=yi(t,Tt);const e=yi(t.firestore,Ga);return lM(Km(e),t._key).then(n=>mA(e,t,n))}class pA extends SM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function ep(t,e,n){t=yi(t,Tt);const r=yi(t.firestore,Ga),i=AM(t.converter,e,n);return PM(r,[gM(rA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ft.none())])}function _n(t,...e){var n,r,i;t=Ae(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||gE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(gE(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,c,h;if(t instanceof Tt)c=yi(t.firestore,Ga),h=ol(t._key.path),l={next:p=>{e[o]&&e[o](mA(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=yi(t,Hr);c=yi(p.firestore,Ga),h=p._query;const g=new pA(c);l={next:w=>{e[o]&&e[o](new CM(c,g,p,w))},error:e[o+1],complete:e[o+2]},IM(t._query)}return function(g,w,I,k){const D=new XS(k),T=new $S(w,D,I);return g.asyncQueue.enqueueAndForget(async()=>US(await Zf(g),T)),()=>{D.Za(),g.asyncQueue.enqueueAndForget(async()=>BS(await Zf(g),T))}}(Km(c),h,a,l)}function PM(t,e){return function(r,i){const s=new Kn;return r.asyncQueue.enqueueAndForget(async()=>YO(await aM(r),i,s)),s.promise}(Km(t),e)}function mA(t,e,n){const r=n.docs.get(e._key),i=new pA(t);return new fA(t,i,e._key,r,new Yo(n.hasPendingWrites,n.fromCache),e.converter)}class RM{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=gA(),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function NM(t){return new RM(t)}class kM{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=yc.provider,this._offlineComponentProvider={build:n=>new iM(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}function gA(t){return new kM(void 0)}function tp(){return new Ym("serverTimestamp")}(function(e,n=!0){(function(i){io=i})(no),mn(new nn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ga(new cD(r.getProvider("auth-internal")),new pD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ri(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Dt(cv,"4.7.3",e),Dt(cv,"4.7.3","esm2017")})();var bM="firebase",DM="10.14.1";/**
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
 */Dt(bM,DM,"app");/**
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
 */const VM="type.googleapis.com/google.protobuf.Int64Value",OM="type.googleapis.com/google.protobuf.UInt64Value";function _A(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function np(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>np(e));if(typeof t=="function"||typeof t=="object")return _A(t,e=>np(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Ec(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case VM:case OM:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Ec(e)):typeof t=="function"||typeof t=="object"?_A(t,e=>Ec(e)):t}/**
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
 */const ig="functions";/**
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
 */const vE={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ns extends yn{constructor(e,n,r){super(`${ig}/${e}`,n||""),this.details=r}}function MM(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function LM(t,e){let n=MM(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!vE[o])return new Ns("internal","internal");n=vE[o],r=o}const a=s.message;typeof a=="string"&&(r=a),i=s.details,i!==void 0&&(i=Ec(i))}}catch{}return n==="ok"?null:new Ns(n,r,i)}/**
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
 */class jM{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
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
 */const rp="us-central1";function FM(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Ns("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class UM{constructor(e,n,r,i,s=rp,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new jM(n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(s);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=rp}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function BM(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function $M(t,e,n){return r=>qM(t,e,r,{})}async function zM(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function qM(t,e,n,r){const i=t._url(e);return KM(t,i,n,r)}async function KM(t,e,n,r){n=np(n);const i={data:n},s={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const a=r.timeout||7e4,l=FM(a),c=await Promise.race([zM(e,i,s,t.fetchImpl),l.promise,t.cancelAllRequests]);if(l.cancel(),!c)throw new Ns("cancelled","Firebase Functions instance was deleted.");const h=LM(c.status,c.json);if(h)throw h;if(!c.json)throw new Ns("internal","Response is not valid JSON object.");let p=c.json.data;if(typeof p>"u"&&(p=c.json.result),typeof p>"u")throw new Ns("internal","Response is missing data field.");return{data:Ec(p)}}const EE="@firebase/functions",wE="0.11.8";/**
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
 */const GM="auth-internal",WM="app-check-internal",HM="messaging-internal";function QM(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(GM),a=r.getProvider(HM),l=r.getProvider(WM);return new UM(s,o,a,l,i,t)};mn(new nn(ig,n,"PUBLIC").setMultipleInstances(!0)),Dt(EE,wE,e),Dt(EE,wE,"esm2017")}/**
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
 */function JM(t=om(),e=rp){const r=Bi(Ae(t),ig).getImmediate({identifier:e}),i=AN("functions");return i&&YM(r,...i),r}function YM(t,e,n){BM(Ae(t),e,n)}function He(t,e,n){return $M(Ae(t),e)}QM(fetch.bind(self));const XM={apiKey:"AIzaSyBQDetC-J1AfOD20h6cYLKHWACSxFSsWJI",authDomain:"ton-paris.firebaseapp.com",projectId:"ton-paris",storageBucket:"ton-paris.firebasestorage.app",messagingSenderId:"669449450778",appId:"1:669449450778:web:732d76c1d2a5c5b4e228a3"},Wa=PT(XM),Uo=oD(Wa),Qe=JM(Wa,"europe-west9"),rt=hM(Wa,{localCache:NM({tabManager:gA()})}),IE="BMbLRXdRv5SHMSa9gLR1ZvtGS4-9McmV-Qz-S2V6AO-DSFATHsg4EYLvOmwusUehxpeYrHVp5HPtkpRJUY5zEN0",Xe="ton-paris",it={config:t=>`tenants/${Xe}/config/${t}`,admin:t=>`tenants/${Xe}/admins/${t}`,utilisateur:t=>`tenants/${Xe}/users/${t}`,preferences:t=>`tenants/${Xe}/users/${t}/prefs/principal`,jetons:t=>`tenants/${Xe}/users/${t}/pushTokens`,matchs:()=>`tenants/${Xe}/matches`,diffusions:()=>`tenants/${Xe}/tvBroadcasts`,classements:()=>`tenants/${Xe}/standings`,actus:()=>`tenants/${Xe}/news`,mercato:t=>`tenants/${Xe}/mercato/${t}`,effectif:t=>`tenants/${Xe}/effectifs/${t}`,compoProbable:t=>`tenants/${Xe}/compoProbable/${t}`,compoOfficielle:t=>`tenants/${Xe}/compoOfficielle/${t}`,scoresDirect:()=>`tenants/${Xe}/live/scores`,fenetresMercato:()=>`tenants/${Xe}/config/fenetresMercato`,detailsJoueur:t=>`tenants/${Xe}/detailsJoueurs/${t}`,journaux:()=>`tenants/${Xe}/scrapeLogs`},yA=R.createContext(null),ZM={"auth/invalid-email":"Cette adresse e-mail n'est pas valide.","auth/invalid-credential":"Adresse ou mot de passe incorrect.","auth/wrong-password":"Adresse ou mot de passe incorrect.","auth/user-not-found":"Aucun compte ne correspond à cette adresse.","auth/email-already-in-use":"Un compte existe déjà avec cette adresse.","auth/weak-password":"Le mot de passe doit faire au moins 6 caractères.","auth/too-many-requests":"Trop de tentatives. Réessaie dans quelques minutes.","auth/network-request-failed":"Connexion impossible. Vérifie ton réseau."};function eL(t){return ZM[t]||"Quelque chose s'est mal passé. Réessaie."}function tL({children:t}){const[e,n]=R.useState(null),[r,i]=R.useState(!0);R.useEffect(()=>(Gb(Uo,r0).catch(()=>{}),Qb(Uo,l=>{n(l),i(!1)})),[]);const s=async(l,c)=>{const{user:h}=await zb(Uo,l.trim(),c);return h},o=async(l,c,h)=>{const{user:p}=await $b(Uo,l.trim(),c);await Kb(p,{displayName:h.trim()});const g=Vt(rt,it.utilisateur(p.uid));await ep(g,{prenom:h.trim(),email:l.trim(),creeLe:tp()});const w=Vt(rt,it.admin(p.uid));return(await ch(w)).exists()||await ep(w,{prenom:h.trim(),creeLe:tp()},{merge:!0}),p},a=()=>Jb(Uo);return f.jsx(yA.Provider,{value:{utilisateur:e,chargement:r,connexion:s,inscription:o,deconnexion:a},children:t})}function dl(){const t=R.useContext(yA);if(!t)throw new Error("useAuth doit être utilisé dans FournisseurAuth");return t}const vA=R.createContext(null),Ed={clubFavori:null,nationFavorite:null,clubsSuivis:[],joueurChouchouId:null,notifications:{matinDuMatch:!0,uneHeureAvant:!0,coupDEnvoi:!0,actuImportante:!0,touteActu:!1},abonnementsTv:[],onboardingTermine:!1},di=2;function nL({children:t}){const{utilisateur:e}=dl(),[n,r]=R.useState(null),[i,s]=R.useState(!0);R.useEffect(()=>{if(!e){r(null),s(!1);return}s(!0);const a=Vt(rt,it.preferences(e.uid));return _n(a,l=>{r(l.exists()?{...Ed,...l.data()}:Ed),s(!1)},()=>{r(Ed),s(!1)})},[e]);const o=R.useCallback(async a=>{if(!e)return;const l=Vt(rt,it.preferences(e.uid));await ep(l,{...a,majLe:tp()},{merge:!0})},[e]);return f.jsx(vA.Provider,{value:{preferences:n,chargement:i,enregistrer:o},children:t})}function Qr(){const t=R.useContext(vA);if(!t)throw new Error("usePreferences doit être utilisé dans FournisseurPreferences");return t}const EA=R.createContext(null),rL=3200;function iL({children:t}){const[e,n]=R.useState([]),r=R.useRef(0),i=R.useCallback(o=>{n(a=>a.filter(l=>l.id!==o))},[]),s=R.useCallback((o,{type:a="succes"}={})=>{const l=++r.current;n(c=>[...c,{id:l,message:o,type:a}]),setTimeout(()=>i(l),rL)},[i]);return f.jsx(EA.Provider,{value:{toasts:e,notifier:s,retirer:i},children:t})}function wA(){const t=R.useContext(EA);if(!t)throw new Error("useToasts doit être utilisé dans FournisseurToasts");return t}function sg({nombre:t=60}={}){const[e,n]=R.useState([]),[r,i]=R.useState(!0);return R.useEffect(()=>{const s=uA(qm(rt,it.actus()),cA("publieLe","desc"),hA(t));return _n(s,o=>{n(o.docs.map(a=>{var c,h;const l=a.data();return{id:a.id,...l,publieLeISO:((h=(c=l.publieLe)==null?void 0:c.toDate)==null?void 0:h.call(c).toISOString())||null}})),i(!1)},()=>i(!1))},[t]),{actus:e,chargement:r}}const wd="ton-paris:digest-derniere-visite",TE="ton-paris:digest-vu-le";function SE(t){try{return localStorage.getItem(t)}catch{return null}}function Id(t,e){try{localStorage.setItem(t,e)}catch{}}function sL(t){const[e,n]=R.useState(!1),[r,i]=R.useState(null);R.useEffect(()=>{const a=SE(wd);if(!a){const l=new Date(Date.now()-864e5).toISOString();Id(wd,l),i(new Date(l));return}i(new Date(a))},[]);const s=R.useMemo(()=>r?t.filter(a=>{const l=a.publieLeISO?new Date(a.publieLeISO):null;return l&&l>r}):[],[t,r]);return R.useEffect(()=>{if(r===null||s.length===0)return;const a=new Date().toDateString();SE(TE)!==a&&n(!0)},[r,s]),{ouvert:e,actus:s,fermer:()=>{n(!1);const a=new Date;Id(wd,a.toISOString()),Id(TE,a.toDateString())}}}const oL=3500;function aL({pret:t=!0,onTermine:e}){const[n,r]=R.useState(!1);return R.useEffect(()=>{let i=!1;const s=setTimeout(()=>{i||(r(!0),setTimeout(()=>{i||e==null||e()},750))},oL);return()=>{i=!0,clearTimeout(s)}},[e]),f.jsxs("div",{className:`splash${n?" splash--sortie":""}`,role:"status","aria-live":"polite",children:[f.jsx("div",{className:"splash__bande splash__bande--rouge"}),f.jsx("div",{className:"splash__bande splash__bande--blanche"}),f.jsxs("div",{className:"splash__mots",children:[f.jsx("span",{className:"splash__ligne splash__ligne--1",children:f.jsx("i",{children:"Ici c'est"})}),f.jsx("span",{className:"splash__ligne splash__ligne--2",children:f.jsx("i",{children:"Ton"})}),f.jsx("span",{className:"splash__ligne splash__ligne--3",children:f.jsx("i",{children:"Paris"})})]}),f.jsx("div",{className:"splash__barre",children:f.jsx("span",{className:t?"splash__barre-jauge":"splash__barre-jauge splash__barre-jauge--boucle"})}),f.jsx("p",{className:"splash__etat",children:"Chargement du programme"})]})}const AE="tonparis.install.refuse";function lL(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function uL(){return/iphone|ipad|ipod/i.test(window.navigator.userAgent)&&!window.MSStream}function cL(){const[t,e]=R.useState(null),[n,r]=R.useState(!1),[i,s]=R.useState(!1);R.useEffect(()=>{if(lL()||sessionStorage.getItem(AE))return;if(uL()){s(!0),r(!0);return}const l=h=>{h.preventDefault(),e(h),r(!0)};window.addEventListener("beforeinstallprompt",l);const c=()=>r(!1);return window.addEventListener("appinstalled",c),()=>{window.removeEventListener("beforeinstallprompt",l),window.removeEventListener("appinstalled",c)}},[]);const o=async()=>{if(!t)return;t.prompt();const{outcome:l}=await t.userChoice;l==="accepted"&&r(!1),e(null)},a=()=>{sessionStorage.setItem(AE,"1"),r(!1)};return n?f.jsxs("aside",{className:"invite",role:"complementary",children:[f.jsxs("p",{className:"invite__texte",children:[f.jsx("strong",{children:"Ajoute l'app à ton écran d'accueil."})," ",i?"Appuie sur Partager, puis « Sur l'écran d'accueil ». C'est la condition pour recevoir les notifs de match.":"Notifs des matchs et ouverture instantanée."]}),!i&&f.jsx("button",{className:"invite__action",onClick:o,children:"Installer"}),f.jsx("button",{className:"invite__fermer",onClick:a,"aria-label":"Masquer l'invitation",children:"×"})]}):null}const hL=[{chemin:"/",libelle:"Accueil",icone:"fa-solid fa-house",exact:!0},{chemin:"/matchs",libelle:"Matchs",icone:"fa-solid fa-calendar-days"},{chemin:"/compo",libelle:"Compo",icone:"fa-solid fa-users-rectangle"},{chemin:"/classement",libelle:"Classement",icone:"fa-solid fa-ranking-star"},{chemin:"/effectif",libelle:"Effectif",icone:"fa-solid fa-users"},{chemin:"/mercato",libelle:"Mercato",icone:"fa-solid fa-right-left"},{chemin:"/reglages",libelle:"Réglages",icone:"fa-solid fa-gear"}];function dL(){return f.jsx("nav",{className:"nav","aria-label":"Navigation principale",children:hL.map(({chemin:t,libelle:e,icone:n,exact:r})=>f.jsxs(pN,{to:t,end:r,className:({isActive:i})=>`nav__item${i?" nav__item--actif":""}`,children:[f.jsx("i",{className:`nav__icone ${n}`,"aria-hidden":"true"}),f.jsx("span",{className:"nav__libelle",children:e})]},t))})}function fL({actu:t,onFermer:e}){if(R.useEffect(()=>{if(!t)return;const r=i=>{i.key==="Escape"&&(e==null||e())};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t,e]),!t)return null;const n=t.publieLeISO?new Date(t.publieLeISO).toLocaleDateString("fr-FR",{day:"numeric",month:"long"}):"";return f.jsx("div",{className:"article-modale",role:"dialog","aria-modal":"true",onClick:e,children:f.jsxs("div",{className:"article-modale__boite",onClick:r=>r.stopPropagation(),children:[f.jsx("button",{className:"article-modale__fermer",onClick:e,"aria-label":"Fermer",children:"×"}),t.image&&f.jsx("img",{className:"article-modale__image",src:t.image,alt:"",loading:"eager"}),f.jsxs("div",{className:"article-modale__contenu",children:[t.categorie&&f.jsx("span",{className:`article-modale__categorie${t.importante?" article-modale__categorie--chaude":""}`,children:t.categorie}),f.jsx("h2",{className:"article-modale__titre",children:t.titre}),n&&f.jsx("p",{className:"article-modale__meta",children:n}),t.corps?t.corps.split(`

`).map((r,i)=>f.jsx("p",{className:"article-modale__resume",children:r},i)):t.resume&&f.jsx("p",{className:"article-modale__resume",children:t.resume})]})]})})}function pL(t){return t?t.split(/\n(?=##\s)/).map(n=>n.trim()).filter(Boolean).map(n=>{const r=n.match(/^##\s*(.+?)\s*\n([\s\S]*)$/);return r?{titre:r[1].trim(),texte:r[2].trim()}:{titre:null,texte:n}}):[]}function mL({ouvert:t,actus:e,onFermer:n,onOuvrirArticle:r}){const[i,s]=R.useState(null),[o,a]=R.useState(!1);if(R.useEffect(()=>{if(!t)return;const c=h=>{h.key==="Escape"&&(n==null||n())};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[t,n]),R.useEffect(()=>{if(!t||e.length===0){s(null);return}a(!0),s(null);const c=e.map(h=>({id:h.id,titre:h.titre,resume:h.resume||null}));He(Qe,"genererDigest")({articles:c}).then(h=>{var p;return s(((p=h.data)==null?void 0:p.resume)||null)}).catch(()=>s(null)).finally(()=>a(!1))},[t,e]),!t)return null;const l=pL(i);return f.jsx("div",{className:"digest",role:"dialog","aria-modal":"true",onClick:n,children:f.jsxs("div",{className:"digest__boite",onClick:c=>c.stopPropagation(),children:[f.jsx("span",{className:"digest__etiquette",children:"Depuis ta dernière visite"}),f.jsxs("h2",{className:"digest__titre",children:["Actus ",f.jsx("em",{children:"PSG"})]}),o&&f.jsx("p",{className:"digest__resume digest__resume--attente",children:"Résumé en préparation…"}),!o&&l.length===0&&f.jsx("p",{className:"digest__resume digest__resume--attente",children:"Résumé indisponible pour le moment, reviens plus tard."}),l.length>0&&f.jsx("div",{className:"digest__resume",children:l.map((c,h)=>f.jsxs("div",{className:"digest__section",children:[c.titre&&f.jsx("h3",{className:"digest__section-titre",children:c.titre}),f.jsx("p",{className:"digest__section-texte",children:c.texte})]},h))}),f.jsx("button",{className:"digest__fermer",onClick:n,children:"Vu, merci"})]})})}function gL(){const{toasts:t,retirer:e}=wA();return t.length===0?null:f.jsx("div",{className:"toasts",role:"status","aria-live":"polite",children:t.map(n=>f.jsxs("div",{className:`toast toast--${n.type}`,onClick:()=>e(n.id),children:[f.jsx("span",{className:"toast__puce","aria-hidden":"true",children:n.type==="erreur"?"!":"✓"}),f.jsx("span",{className:"toast__texte",children:n.message})]},n.id))})}function _L(){const{connexion:t,inscription:e}=dl(),[n,r]=R.useState("connexion"),[i,s]=R.useState(""),[o,a]=R.useState(""),[l,c]=R.useState(""),[h,p]=R.useState(""),[g,w]=R.useState(!1),I=n==="inscription",k=async T=>{if(T.preventDefault(),p(""),I&&!i.trim()){p("Indique ton prénom.");return}w(!0);try{I?await e(o,l,i):await t(o,l)}catch(E){p(eL(E.code)),w(!1)}},D=()=>{r(I?"connexion":"inscription"),p("")};return f.jsxs("div",{className:"connexion",children:[f.jsx("div",{className:"connexion__bande"}),f.jsxs("div",{className:"connexion__contenu",children:[f.jsxs("h1",{className:"connexion__marque",children:[f.jsx("span",{children:"Ici c'est"}),f.jsx("em",{children:"Ton"}),f.jsx("em",{children:"Paris"})]}),f.jsxs("form",{className:"connexion__form",onSubmit:k,children:[I&&f.jsxs("label",{className:"champ",children:[f.jsx("span",{className:"champ__label",children:"Prénom"}),f.jsx("input",{className:"champ__saisie",type:"text",value:i,onChange:T=>s(T.target.value),autoComplete:"given-name",placeholder:"Dylan"})]}),f.jsxs("label",{className:"champ",children:[f.jsx("span",{className:"champ__label",children:"Adresse e-mail"}),f.jsx("input",{className:"champ__saisie",type:"email",value:o,onChange:T=>a(T.target.value),autoComplete:"email",required:!0,placeholder:"toi@exemple.fr"})]}),f.jsxs("label",{className:"champ",children:[f.jsx("span",{className:"champ__label",children:"Mot de passe"}),f.jsx("input",{className:"champ__saisie",type:"password",value:l,onChange:T=>c(T.target.value),autoComplete:I?"new-password":"current-password",required:!0,minLength:6,placeholder:"6 caractères minimum"})]}),h&&f.jsx("p",{className:"connexion__erreur",role:"alert",children:h}),f.jsx("button",{className:"connexion__valider",type:"submit",disabled:g,children:g?"Un instant…":I?"Créer le compte":"Se connecter"})]}),f.jsx("button",{className:"connexion__bascule",type:"button",onClick:D,children:I?"J'ai déjà un compte":"Créer un compte"})]})]})}let eu=null,tu=null;async function hh(){if(eu)return eu;const t=await ch(Vt(rt,it.config("clubs")));return eu=t.exists()?t.data().liste||[]:[],eu}async function IA(){if(tu)return tu;const t=await ch(Vt(rt,it.config("nations")));return tu=t.exists()?t.data().liste||[]:[],tu}function wc(t,e){const n=e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return n?t.filter(r=>`${r.nom} ${r.alias||""}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(n)):t}const nu=["Ton club","Ta sélection","Tes clubs suivis","Tes notifs"];function yL(){const{utilisateur:t}=dl(),{enregistrer:e}=Qr(),[n,r]=R.useState(0),[i,s]=R.useState([]),[o,a]=R.useState([]),[l,c]=R.useState(""),[h,p]=R.useState(null),[g,w]=R.useState(null),[I,k]=R.useState([]),[D,T]=R.useState({matinDuMatch:!0,uneHeureAvant:!0,coupDEnvoi:!0,actuImportante:!0,touteActu:!1}),[E,y]=R.useState(!1);R.useEffect(()=>{hh().then(s),IA().then(a)},[]),R.useEffect(()=>{c("")},[n]);const b=R.useMemo(()=>wc(i,l),[i,l]),M=R.useMemo(()=>wc(o,l),[o,l]),F=R.useMemo(()=>b.filter(N=>N.id!==(h==null?void 0:h.id)),[b,h]),S=N=>{k(A=>A.some(G=>G.id===N.id)?A.filter(G=>G.id!==N.id):A.length>=di?A:[...A,N])},v=N=>{T(A=>({...A,[N]:!A[N]}))},C=()=>n===0?!!h:n===1?!!g:!0,x=async()=>{y(!0),await e({clubFavori:h,nationFavorite:g,clubsSuivis:I,notifications:D,onboardingTermine:!0})},P=()=>{n<nu.length-1?r(n+1):x()};return f.jsxs("div",{className:"onb",children:[f.jsxs("header",{className:"onb__tete",children:[f.jsxs("p",{className:"onb__compteur",children:["Étape ",n+1," sur ",nu.length]}),f.jsx("div",{className:"onb__jauge",children:nu.map((N,A)=>f.jsx("span",{className:`onb__cran${A<=n?" onb__cran--fait":""}`},A))})]}),f.jsxs("div",{className:"onb__corps",children:[n===0&&f.jsxs(f.Fragment,{children:[f.jsx("h2",{className:"onb__titre",children:"Quel est ton club ?"}),f.jsx("p",{className:"onb__aide",children:"Il ouvre ton accueil et passe avant tout le reste."}),f.jsx("input",{className:"onb__recherche",type:"search",value:l,onChange:N=>c(N.target.value),placeholder:"Chercher un club"}),f.jsx("ul",{className:"onb__liste",children:b.map(N=>f.jsx("li",{children:f.jsx("button",{className:`onb__choix${(h==null?void 0:h.id)===N.id?" onb__choix--actif":""}`,onClick:()=>p(N),children:f.jsx("span",{className:"onb__choix-nom",children:N.nom})})},N.id))})]}),n===1&&f.jsxs(f.Fragment,{children:[f.jsx("h2",{className:"onb__titre",children:"Et ta sélection ?"}),f.jsx("p",{className:"onb__aide",children:"Ses matchs apparaîtront pendant les trêves internationales."}),f.jsx("input",{className:"onb__recherche",type:"search",value:l,onChange:N=>c(N.target.value),placeholder:"Chercher une sélection"}),f.jsx("ul",{className:"onb__liste",children:M.map(N=>f.jsx("li",{children:f.jsx("button",{className:`onb__choix${(g==null?void 0:g.id)===N.id?" onb__choix--actif":""}`,onClick:()=>w(N),children:f.jsx("span",{className:"onb__choix-nom",children:N.nom})})},N.id))})]}),n===2&&f.jsxs(f.Fragment,{children:[f.jsx("h2",{className:"onb__titre",children:"Tu suis d'autres clubs ?"}),f.jsxs("p",{className:"onb__aide",children:[I.length," sur ",di," choisis. Tu peux aussi passer cette étape."]}),f.jsx("input",{className:"onb__recherche",type:"search",value:l,onChange:N=>c(N.target.value),placeholder:"Chercher un club"}),f.jsx("ul",{className:"onb__liste",children:F.map(N=>{const A=I.some(G=>G.id===N.id),ie=I.length>=di&&!A;return f.jsx("li",{children:f.jsxs("button",{className:`onb__choix${A?" onb__choix--actif":""}`,onClick:()=>S(N),disabled:ie,children:[f.jsx("span",{className:"onb__choix-nom",children:N.nom}),A&&f.jsx("span",{className:"onb__choix-marque",children:"Suivi"})]})},N.id)})})]}),n===3&&f.jsxs(f.Fragment,{children:[f.jsx("h2",{className:"onb__titre",children:"Qu'est-ce qu'on te signale ?"}),f.jsx("p",{className:"onb__aide",children:"Tu pourras changer ça à tout moment dans les réglages."}),f.jsx("ul",{className:"onb__notifs",children:[["matinDuMatch","Le matin du match","Vers 9h, avec la chaîne"],["uneHeureAvant","1 heure avant","Rappel avant le coup d'envoi"],["coupDEnvoi","Au coup d'envoi","Le match commence"],["actuImportante","Actu importante","Mercato, blessure, groupe"],["touteActu","Toute l'actu","Chaque article publié"]].map(([N,A,ie])=>f.jsxs("li",{className:"onb__notif",children:[f.jsxs("div",{children:[f.jsx("p",{className:"onb__notif-titre",children:A}),f.jsx("p",{className:"onb__notif-detail",children:ie})]}),f.jsx("button",{className:`bascule${D[N]?" bascule--on":""}`,onClick:()=>v(N),role:"switch","aria-checked":D[N],"aria-label":A})]},N))})]})]}),f.jsxs("footer",{className:"onb__pied",children:[n>0&&f.jsx("button",{className:"onb__retour",onClick:()=>r(n-1),children:"Retour"}),f.jsx("button",{className:"onb__suivant",onClick:P,disabled:!C()||E,children:E?"Un instant…":n===nu.length-1?`C'est parti, ${(t==null?void 0:t.displayName)||""}`.trim():"Continuer"})]})]})}function TA({depuis:t=SA(),nombre:e=60}={}){const[n,r]=R.useState([]),[i,s]=R.useState(!0),[o,a]=R.useState(null);return R.useEffect(()=>{const l=uA(qm(rt,it.diffusions()),TM("debut",">=",t),cA("debut","asc"),hA(e));return _n(l,c=>{r(c.docs.map(h=>{var g,w;const p=h.data();return{id:h.id,...p,debutISO:p.debutISO||((w=(g=p.debut)==null?void 0:g.toDate)==null?void 0:w.call(g).toISOString())||null}})),s(!1)},c=>{a(c),s(!1)})},[t.getTime(),e]),{diffusions:n,chargement:i,erreur:o}}function SA(){const t=new Date;return t.setHours(0,0,0,0),t}function vL(t){const e=SA();return e.setDate(e.getDate()-t),e}function je(t,{libelleSucces:e="Mise à jour effectuée.",libelleErreur:n="Échec de la mise à jour, réessaie."}={}){const[r,i]=R.useState(!1),{notifier:s}=wA();return[R.useCallback(async(...a)=>{i(!0);try{const l=await t(...a),c=typeof e=="function"?e(l):e;return s(c,{type:"succes"}),l}catch(l){const c=typeof n=="function"?n(l):n;throw s(c,{type:"erreur"}),l}finally{i(!1)}},[t,e,n,s]),r]}const EL=30*60*1e3;function AA(t){var c;const[e,n]=R.useState([]),[r,i]=R.useState(!0);R.useEffect(()=>_n(Vt(rt,it.scoresDirect()),h=>{n(h.exists()?h.data().matchs||[]:[]),i(!1)},()=>i(!1)),[]);const s=R.useMemo(()=>e.filter(h=>!h.termine||!h.termineDetecteLe?!0:Date.now()-h.termineDetecteLe<EL),[e]),o=(c=t==null?void 0:t.clubFavori)==null?void 0:c.id,a=R.useMemo(()=>o?s.find(h=>(h.clubs||[]).includes(o)):null,[s,o]),l=R.useMemo(()=>s.filter(h=>h!==a),[s,a]);return{matchFavori:a,autresMatchs:l,aDesMatchsEnDirect:s.length>0,chargement:r}}function CA(t=1e3){const[e,n]=R.useState(()=>new Date);return R.useEffect(()=>{const r=setInterval(()=>n(new Date),t);return()=>clearInterval(r)},[t]),e}function og(){const[t,e]=R.useState(!1);return R.useEffect(()=>_n(Vt(rt,it.config("debug")),n=>e(!!(n.exists()&&n.data().actif)),()=>e(!1)),[]),t}const wL=["cf","ac","as","sc","rc","ssc","afc","club","de","du","les","la","le"],IL={sg:"saintgermain"},TL=new Set(["real","athletic","atletico","sporting","deportivo","racing","union"]);function ip(t=""){return t.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[’'`]/g," ").replace(/[^a-z0-9]+/g," ").trim().split(" ").filter(e=>e&&!wL.includes(e)).map(e=>IL[e]||e)}function CE(t=""){return ip(t).join("")||t.toLowerCase().replace(/[^a-z0-9]+/g,"")}function SL(t,e){const n=ip(t),r=ip(e),i=n.join(""),s=r.join("");if(!i||!s)return!1;if(i===s)return!0;const[o,a,l]=i.length<=s.length?[n,i,s]:[r,s,i];return!(a.length<4||!l.includes(a)||o.length===1&&TL.has(o[0]))}function AL(t,e){const n=CE(t),r=CE(e);return!!n&&n===r}function ag(t,e){return[t.nom,t.court].filter(Boolean).some(i=>SL(i,e))?!0:(t.alias||"").split(" ").filter(Boolean).some(i=>AL(i,e))}function CL(t,e){const n=[e==null?void 0:e.clubFavori,...(e==null?void 0:e.clubsSuivis)||[]].filter(Boolean);for(const r of n)if(ag(r,t))return r.id;return null}function xE(t,e){if(!t)return t;const n=(e||[]).find(r=>ag(r,t));return(n==null?void 0:n.court)||t}const vi={CLUB_FAVORI:1,AFFICHE_CROISEE:2,CLUB_SUIVI:3},xL=105*60*1e3;function PL(t){var n;const e=new Set;(n=t==null?void 0:t.clubFavori)!=null&&n.id&&e.add(t.clubFavori.id);for(const r of(t==null?void 0:t.clubsSuivis)||[])r.id&&e.add(r.id);return e}function RL(t,e){var o;const n=PL(e),r=(t.clubs||[]).filter(a=>n.has(a));if(r.length===0)return null;const i=(o=e==null?void 0:e.clubFavori)==null?void 0:o.id;if(i&&r.includes(i))return{priorite:vi.CLUB_FAVORI,motif:"Ton club"};if(r.length>=2)return{priorite:vi.AFFICHE_CROISEE,motif:"Deux clubs que tu suis"};const s=((e==null?void 0:e.clubsSuivis)||[]).find(a=>a.id===r[0]);return{priorite:vi.CLUB_SUIVI,motif:`Tu suis ${(s==null?void 0:s.court)||(s==null?void 0:s.nom)||"ce club"}`}}function xA(t,e,n){const r=[];for(const i of t){if(!i.debutISO)continue;const s=RL(i,e);if(!s)continue;const o=n?{domicile:xE(i.domicile,n),exterieur:xE(i.exterieur,n)}:{};r.push({...i,...o,...s})}return r.sort((i,s)=>{const o=Date.parse(i.debutISO),a=Date.parse(s.debutISO);return o!==a?o-a:i.priorite-s.priorite})}function NL(t){const e=[];for(let n=0;n<t.length;n++)for(let r=n+1;r<t.length;r++){const i=t[n],s=t[r];Math.abs(Date.parse(i.debutISO)-Date.parse(s.debutISO))<xL&&e.push([i,s])}return e}function PE(t,e=new Date){const n=new Date(t);return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function Ru(t){return new Date(t).toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}function PA(t){return new Date(t).toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}function RA(t,e){const n=t.clubs||[];return e.find(r=>(r.clubs||[]).some(i=>n.includes(i)))||null}const kL={confirme:null,a_verifier:null,manquant:"Chaîne inconnue"};function NA({match:t,enCours:e=!1,matchLive:n,onCorriger:r}){const i=t.priorite===vi.CLUB_FAVORI,s=t.priorite===vi.AFFICHE_CROISEE,o=t.chaines||[],a=kL[t.statut],l=t.termine===!0&&t.scoreDomicile!=null&&t.scoreExterieur!=null,c=!l&&!!n&&(n.termine||n.minute!=null),h=l||c&&n.termine,p=l?t.scoreDomicile:(n==null?void 0:n.scoreDomicile)??0,g=l?t.scoreExterieur:(n==null?void 0:n.scoreExterieur)??0,w=l||c,I=!h&&!c&&e,k=c&&!n.termine||I,D=h?"Terminé":c?n.minute!=null?`● ${n.minute}'`:"● En cours":I?"● En cours":Ru(t.debutISO);return f.jsxs("article",{className:`match${i?" match--favori":""}${s?" match--croisee":""}${k?" match--en-cours":""}`,children:[f.jsxs("div",{className:"match__tete",children:[f.jsx("span",{className:"match__competition",children:t.competition||"Match"}),t.motif&&f.jsx("span",{className:`match__marque${s?" match__marque--croisee":""}`,children:t.motif})]}),f.jsxs("div",{className:"match__affiche",children:[f.jsx("span",{className:"match__equipe",children:t.domicile}),w?f.jsxs("span",{className:"match__score",children:[p," – ",g]}):f.jsx("span",{className:"match__separateur",children:"vs"}),f.jsx("span",{className:"match__equipe",children:t.exterieur})]}),f.jsxs("div",{className:"match__pied",children:[f.jsx("span",{className:`match__heure${h?" match__heure--termine":""}${k?" match__heure--en-cours":""}`,children:D}),o.length>0?o.map(T=>f.jsx("span",{className:`chaine${T.statut==="a_verifier"?" chaine--incertaine":""}`,children:T.nom},T.nom)):f.jsx("button",{className:"chaine chaine--absente",onClick:()=>r==null?void 0:r(t),children:"Ajouter la chaîne"}),a&&f.jsx("span",{className:"match__statut",children:a})]})]})}function kA({actu:t,onOuvrir:e}){const[n,r]=R.useState(!1),i=!!t.image&&!n,s=t.publieLeISO?new Date(t.publieLeISO).toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}):"";return f.jsxs("button",{className:`actu${i?" actu--image":""}`,onClick:()=>e==null?void 0:e(t),children:[f.jsx("span",{className:"actu__date",children:s}),f.jsxs("div",{className:"actu__corps",children:[t.categorie&&f.jsx("span",{className:`actu__categorie${t.importante?" actu__categorie--chaude":""}`,children:t.categorie}),f.jsx("h3",{className:"actu__titre",children:t.titre})]}),i&&f.jsx("img",{className:"actu__image",src:t.image,alt:"",loading:"lazy",onError:()=>r(!0)})]})}function lg({ouvert:t,message:e,texteConfirmer:n="Confirmer",texteAnnuler:r="Annuler",onConfirm:i,onCancel:s}){return R.useEffect(()=>{if(!t)return;const o=a=>{a.key==="Escape"&&(s==null||s())};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[t,s]),t?f.jsx("div",{className:"modale",id:"confirmModal",role:"dialog","aria-modal":"true",onClick:s,children:f.jsxs("div",{className:"modale__boite",onClick:o=>o.stopPropagation(),children:[f.jsx("div",{className:"modale__message",children:e}),f.jsxs("div",{className:"modale__actions",children:[f.jsx("button",{className:"modale__bouton modale__bouton--annuler",onClick:s,children:r}),f.jsx("button",{className:"modale__bouton modale__bouton--confirmer",onClick:i,children:n})]})]})}):null}function sp(t){return t.termine||t.minute!=null}function bL({matchFavori:t,autresMatchs:e}){if(!t&&e.length===0)return null;const n=t&&sp(t),r=e.filter(sp);let i,s;return n?(i=[t],s=r):r.length>0?(i=r,s=[]):(i=t?[t]:e,s=[]),f.jsxs("div",{className:"direct",children:[i.map(o=>f.jsx(DL,{match:o},o.idBrut)),s.length>0&&f.jsx("div",{className:"direct__secondaires",children:s.map(o=>f.jsx(VL,{match:o},o.idBrut))})]})}function DL({match:t}){const e=sp(t);return f.jsxs("div",{className:`direct__favori${t.termine?" direct__favori--termine":""}${e?"":" direct__favori--a-venir"}`,children:[f.jsx("span",{className:"direct__puce","aria-hidden":"true",children:t.termine?"TERMINÉ":e?"● DIRECT":"À VENIR"}),f.jsxs("div",{className:"direct__affiche",children:[f.jsx("span",{className:"direct__equipe",children:t.domicile}),f.jsxs("span",{className:"direct__score",children:[t.scoreDomicile??0," – ",t.scoreExterieur??0]}),f.jsx("span",{className:"direct__equipe",children:t.exterieur})]}),t.minute!=null&&f.jsxs("span",{className:"direct__minute",children:[t.minute,"'"]})]})}function VL({match:t}){return f.jsxs("div",{className:`direct__ligne${t.termine?" direct__ligne--termine":""}`,children:[f.jsx("span",{className:`direct__puce direct__puce--petite${t.termine?" direct__puce--petite-termine":""}`,"aria-hidden":"true",children:"●"}),f.jsxs("span",{className:"direct__ligne-texte",children:[t.domicile," ",t.scoreDomicile??0," – ",t.scoreExterieur??0," ",t.exterieur]}),f.jsx("span",{className:"direct__ligne-minute",children:t.termine?"Fin":`${t.minute}'`})]})}function bA({titre:t="Zone de test",actions:e}){return f.jsxs("div",{className:"panneau-test",children:[f.jsxs("p",{className:"panneau-test__titre",children:["🧪 ",t]}),f.jsx("div",{className:"panneau-test__boutons",children:e.map(({libelle:n,onClick:r,enCours:i,efface:s})=>f.jsx("button",{className:`panneau-test__bouton${s?" panneau-test__bouton--efface":""}`,onClick:r,disabled:i,children:n},n))})]})}function OL({onOuvrirArticle:t}){const{preferences:e}=Qr(),{diffusions:n,chargement:r}=TA(),{actus:i,chargement:s}=sg(),{matchFavori:o,autresMatchs:a,aDesMatchsEnDirect:l}=AA(e),c=og(),[h,p]=R.useState(null),[g,w]=R.useState(""),[I,k]=R.useState([]),[D,T]=R.useState(!1),[E,y]=R.useState(!1);R.useEffect(()=>{hh().then(k)},[]);const b=CA(3e4),M=R.useMemo(()=>xA(n,e,I),[n,e,I]),F=R.useMemo(()=>M.filter(Z=>PE(Z.debutISO)),[M]),S=R.useMemo(()=>{const Z=new Set;for(const Be of[o,...a].filter(Boolean))if(!(!Be.termine&&Be.minute==null))for(const nr of Be.clubs||[])Z.add(nr);return Z},[o,a]),v=R.useMemo(()=>[o,...a].filter(Boolean),[o,a]),C=2*60*60*1e3+45*60*1e3,x=Z=>{if(Z.termine)return"termine";if((Z.clubs||[]).some(nr=>S.has(nr)))return"en_cours";const Be=Date.parse(Z.debutISO);return!Number.isFinite(Be)||Be>b.getTime()?"a_venir":b.getTime()-Be<C?"en_cours":"termine"},P=R.useMemo(()=>F.filter(Z=>{const Be=x(Z);return Be==="termine"?!1:Be==="en_cours"?Z.priorite===vi.CLUB_FAVORI:!0}),[F,b,S]),N=R.useMemo(()=>M.find(Z=>Date.parse(Z.debutISO)>b.getTime()),[M,b]),A=R.useMemo(()=>M.find(Z=>Z.priorite===vi.CLUB_FAVORI&&Date.parse(Z.debutISO)>b.getTime()),[M,b]),ie=R.useMemo(()=>NL(P),[P]),G=o?null:A||N||P[0],Kt=R.useMemo(()=>P.filter(Z=>Z.id!==(G==null?void 0:G.id)),[P,G]),Gt=Z=>{if(!Z)return null;const Be=I.find(nr=>ag(nr,Z));return Be!=null&&Be.logo?`/Ton-paris/${Be.logo.replace(/^\//,"")}`:null},q=R.useMemo(()=>!G||I.length===0?null:Gt(G.domicile),[G,I]),Y=R.useMemo(()=>!G||I.length===0?null:Gt(G.exterieur),[G,I]);R.useEffect(()=>{T(!1)},[q]),R.useEffect(()=>{y(!1)},[Y]);const[te]=je(()=>He(Qe,"corrigerChaine")({matchId:h.id,chaine:g.trim()}),{libelleSucces:"Chaîne enregistrée.",libelleErreur:"Échec de l'enregistrement de la chaîne."}),ye=async()=>{if(!(!h||!g.trim()))try{await te()}catch{}finally{p(null),w("")}},[de,Ie]=je(()=>He(Qe,"rafraichirMaxifootNews")(),{libelleSucces:"Actu à jour.",libelleErreur:"Échec de la mise à jour de l'actu."}),pt=Z=>He(Qe,"injecterScoreTest")({scenario:Z}),[rn,sn]=je(()=>pt("favori"),{libelleSucces:'Scénario "club favori en direct" injecté.',libelleErreur:"Échec de l'injection."}),[on,ph]=je(()=>pt("autre"),{libelleSucces:'Scénario "autre club suivi" injecté.',libelleErreur:"Échec de l'injection."}),[mh,Ki]=je(()=>pt("les_deux"),{libelleSucces:'Scénario "les deux à la fois" injecté.',libelleErreur:"Échec de l'injection."}),[Gi,uo]=je(()=>pt("termine"),{libelleSucces:'Scénario "match terminé" injecté.',libelleErreur:"Échec de l'injection."}),[co,ho]=je(()=>He(Qe,"effacerScoreTest")(),{libelleSucces:"Scores de test effacés.",libelleErreur:"Échec de l'effacement."}),[fo,fl]=je(()=>pt("reel"),{libelleSucces:Z=>`Scrapé : ${Z.match}${Z.enCours?" (en direct)":""}`,libelleErreur:Z=>(Z==null?void 0:Z.message)||"Échec du scraping réel."});return f.jsxs(f.Fragment,{children:[c&&f.jsx("div",{style:{padding:"18px 18px 0"},children:f.jsx(bA,{titre:"Scores live de test",actions:[{libelle:"Favori en direct",onClick:()=>rn().catch(()=>{}),enCours:sn},{libelle:"Autre club en direct",onClick:()=>on().catch(()=>{}),enCours:ph},{libelle:"Les deux",onClick:()=>mh().catch(()=>{}),enCours:Ki},{libelle:"Match terminé",onClick:()=>Gi().catch(()=>{}),enCours:uo},{libelle:"Scraper un match réel",onClick:()=>fo().catch(()=>{}),enCours:fl},{libelle:"Effacer",onClick:()=>co().catch(()=>{}),enCours:ho,efface:!0}]})}),l&&f.jsx(bL,{matchFavori:o,autresMatchs:a}),G&&f.jsxs("section",{className:"une",children:[f.jsxs("div",{className:"une__logos",children:[q&&!D&&f.jsx("img",{className:"une__logo",src:q,alt:"","aria-hidden":"true",loading:"eager",onError:()=>T(!0)}),q&&!D&&Y&&!E&&f.jsx("span",{className:"une__vs","aria-hidden":"true",children:"VS"}),Y&&!E&&f.jsx("img",{className:"une__logo",src:Y,alt:"","aria-hidden":"true",loading:"eager",onError:()=>y(!0)})]}),f.jsxs("div",{className:"une__contenu",children:[f.jsxs("h2",{className:"une__titre",children:[G.domicile," ",f.jsx("em",{children:"reçoit"})," ",G.exterieur]}),f.jsxs("p",{className:"une__details",children:[f.jsx("span",{className:"une__heure",children:Ru(G.debutISO)}),[G.competition,PE(G.debutISO)?null:PA(G.debutISO)].filter(Boolean).join(" · "),(G.chaines||[]).map(Z=>f.jsx("span",{className:`une__chaine${G.statut==="a_verifier"?" une__chaine--incertaine":""}`,children:Z.nom},Z.nom))]})]})]}),(r||Kt.length>0||ie.length>0)&&f.jsxs("section",{className:"section",children:[f.jsxs("div",{className:"section__tete",children:[f.jsx("h2",{className:"section__titre",children:"Aujourd'hui"}),f.jsx(zc,{className:"section__lien",to:"/matchs",children:"Tout le calendrier"})]}),r&&f.jsx("p",{className:"attente",children:"Chargement du programme…"}),ie.length>0&&f.jsx("div",{className:"croise",children:f.jsxs("p",{children:[f.jsx("strong",{children:"Deux affiches en même temps."})," ",ie[0][0].domicile," – ",ie[0][0].exterieur," à"," ",Ru(ie[0][0].debutISO),", ",ie[0][1].domicile," –"," ",ie[0][1].exterieur," à ",Ru(ie[0][1].debutISO),"."]})}),Kt.map(Z=>f.jsx(NA,{match:Z,enCours:x(Z)==="en_cours",matchLive:RA(Z,v),onCorriger:Be=>{p(Be),w("")}},Z.id))]}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Actu PSG"})}),s&&f.jsx("p",{className:"attente",children:"Chargement de l'actu…"}),!s&&i.length===0&&f.jsx("p",{className:"attente",children:"Rien de neuf pour l'instant."}),i.slice(0,12).map(Z=>f.jsx(kA,{actu:Z,onOuvrir:t},Z.id)),!s&&f.jsx("button",{className:"rafraichir",onClick:()=>de().catch(()=>{}),disabled:Ie,children:Ie?"Mise à jour en cours…":"Rafraîchir l'actu"})]}),f.jsx(lg,{ouvert:!!h,message:f.jsxs(f.Fragment,{children:[f.jsxs("span",{className:"correction__intro",children:["Sur quelle chaîne passe ",h==null?void 0:h.domicile," – ",h==null?void 0:h.exterieur," ?"]}),f.jsx("input",{className:"correction__saisie",type:"text",value:g,onChange:Z=>w(Z.target.value),placeholder:"Ligue 1+, Canal+, DAZN…",autoFocus:!0})]}),texteConfirmer:"Enregistrer",onConfirm:ye,onCancel:()=>{p(null),w("")}})]})}const ML=["dim","lun","mar","mer","jeu","ven","sam"];function ru(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function LL({jourSelectionne:t,onSelectionner:e,nbJoursApres:n=4}){const r=new Date;r.setHours(0,0,0,0);const i=[],s=new Date(r);s.setDate(s.getDate()-1),i.push({cle:ru(s),libelle:"Hier"}),i.push({cle:ru(r),libelle:"Aujourd'hui"});const o=new Date(r);o.setDate(o.getDate()+1),i.push({cle:ru(o),libelle:"Demain"});for(let a=2;a<=n+1;a++){const l=new Date(r);l.setDate(l.getDate()+a),i.push({cle:ru(l),libelle:`${ML[l.getDay()]} ${l.getDate()}`})}return f.jsx("div",{className:"nav-dates",role:"tablist","aria-label":"Choisir un jour",children:i.map(a=>f.jsx("button",{role:"tab","aria-selected":t===a.cle,className:`nav-dates__item${t===a.cle?" nav-dates__item--actif":""}`,onClick:()=>e(a.cle),children:a.libelle},a.cle))})}const jL=4;function DA(t){const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${e}-${n}-${r}`}function FL(t){return DA(new Date(t))}function UL(){return DA(new Date)}function BL(){const{preferences:t}=Qr(),{diffusions:e,chargement:n}=TA({depuis:vL(1),nombre:200}),{matchFavori:r,autresMatchs:i}=AA(t),[s,o]=R.useState(UL()),[a,l]=R.useState(null),[c,h]=R.useState(""),[p,g]=R.useState([]);R.useEffect(()=>{hh().then(g)},[]);const w=R.useMemo(()=>[r,...i].filter(Boolean),[r,i]),I=R.useMemo(()=>xA(e,t,p),[e,t,p]),k=R.useMemo(()=>I.filter(M=>FL(M.debutISO)===s),[I,s]),D=k[0]?PA(k[0].debutISO):null,[T,E]=je(()=>He(Qe,"rafraichirDiffusions")(),{libelleSucces:"Chaînes à jour.",libelleErreur:"Échec de la mise à jour des chaînes."}),[y]=je(()=>He(Qe,"corrigerChaine")({matchId:a.id,chaine:c.trim()}),{libelleSucces:"Chaîne enregistrée.",libelleErreur:"Échec de l'enregistrement de la chaîne."}),b=async()=>{if(!(!a||!c.trim()))try{await y()}catch{}finally{l(null),h("")}};return f.jsxs("section",{className:"section",children:[f.jsx(LL,{jourSelectionne:s,onSelectionner:o,nbJoursApres:jL}),n&&f.jsx("p",{className:"attente",children:"Chargement du calendrier…"}),!n&&k.length===0&&f.jsxs("div",{className:"vide",children:[f.jsx("p",{className:"vide__titre",children:"Rien de programmé"}),f.jsx("p",{className:"vide__texte",children:"Aucun match programmé ce jour-là."})]}),k.length>0&&f.jsxs("div",{className:"jour",children:[D&&f.jsx("h2",{className:"jour__titre",children:D}),k.map(M=>f.jsx(NA,{match:M,matchLive:RA(M,w),onCorriger:F=>{l(F),h("")}},M.id))]}),!n&&f.jsx("button",{className:"rafraichir",onClick:()=>T().catch(()=>{}),disabled:E,children:E?"Mise à jour en cours…":"Mettre à jour les chaînes"}),f.jsx(lg,{ouvert:!!a,message:f.jsxs(f.Fragment,{children:[f.jsxs("span",{className:"correction__intro",children:["Sur quelle chaîne passe ",a==null?void 0:a.domicile," – ",a==null?void 0:a.exterieur," ?"]}),f.jsx("input",{className:"correction__saisie",type:"text",value:c,onChange:M=>h(M.target.value),placeholder:"Ligue 1+, Canal+, DAZN…",autoFocus:!0})]}),texteConfirmer:"Enregistrer",onConfirm:b,onCancel:()=>{l(null),h("")}})]})}const RE="psg";function $L(){const[t,e]=R.useState(null),[n,r]=R.useState(null),[i,s]=R.useState(!0),[o,a]=R.useState(!0);R.useEffect(()=>_n(Vt(rt,it.compoProbable(RE)),g=>{e(g.exists()?g.data():null),s(!1)},()=>s(!1)),[]),R.useEffect(()=>_n(Vt(rt,it.compoOfficielle(RE)),g=>{r(g.exists()?g.data():null),a(!1)},()=>a(!1)),[]);const l=i||o,c=(n==null?void 0:n.titreBreve)&&(t==null?void 0:t.titreBreve)&&n.titreBreve.toLowerCase().replace(/\s*probables?\s*$/,"").trim()===t.titreBreve.toLowerCase().replace(/\s*probables?\s*$/,"").trim(),h=n&&(c||!t)?n:t;return{compo:h,estOfficielle:h===n&&!!n,probable:t,officielle:n,chargement:l}}const zL="psg";function ug(){const[t,e]=R.useState(null),[n,r]=R.useState(!0);return R.useEffect(()=>_n(Vt(rt,it.effectif(zL)),i=>{e(i.exists()?i.data():null),r(!1)},()=>r(!1)),[]),{effectif:t,chargement:n}}function VA({joueur:t,onFermer:e}){const[n,r]=R.useState(!1);if(R.useEffect(()=>{if(!t)return;r(!1);const p=g=>{g.key==="Escape"&&(e==null||e())};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)},[t,e]),!t)return null;const i=t.matchsJoues??0,s=t.titularisations??0,o=t.buts??0,a=t.minutesJouees??0,l=t.cartonsJaunes??0,c=t.cartonsRouges??0,h=t.photo&&!n;return f.jsx("div",{className:"fiche-modale",role:"dialog","aria-modal":"true",onClick:e,children:f.jsxs("div",{className:"fiche-modale__boite",onClick:p=>p.stopPropagation(),children:[f.jsx("button",{className:"fiche-modale__fermer",onClick:e,"aria-label":"Fermer",children:"×"}),f.jsxs("div",{className:"fiche-modale__portrait",children:[h?f.jsx("img",{className:"fiche-modale__photo",src:t.photo,alt:"",loading:"eager",onError:()=>r(!0)}):f.jsx("div",{className:"fiche-modale__photo fiche-modale__photo--vide","aria-hidden":"true",children:(t.nom||"?").charAt(0).toUpperCase()}),t.numeroMaillot!=null&&f.jsx("div",{className:"fiche-modale__numero",children:t.numeroMaillot})]}),f.jsxs("div",{className:"fiche-modale__entete",children:[t.poste&&f.jsx("p",{className:"fiche-modale__poste",children:t.poste}),f.jsx("h3",{className:"fiche-modale__nom",children:t.nomComplet||t.nom}),f.jsx("p",{className:"fiche-modale__meta",children:[t.nationalite,t.age?`${t.age} ans`:null,t.taille,t.poids].filter(Boolean).join(" · ")})]}),f.jsxs("div",{className:"fiche-modale__stats",children:[f.jsxs("div",{className:"fiche-modale__stat",children:[f.jsx("span",{className:"fiche-modale__stat-valeur",children:i}),f.jsxs("span",{className:"fiche-modale__stat-cle",children:["Match",i>1?"s":""]})]}),f.jsxs("div",{className:"fiche-modale__stat",children:[f.jsx("span",{className:"fiche-modale__stat-valeur",children:s}),f.jsx("span",{className:"fiche-modale__stat-cle",children:"Titu."})]}),f.jsxs("div",{className:"fiche-modale__stat",children:[f.jsx("span",{className:"fiche-modale__stat-valeur",children:o}),f.jsxs("span",{className:"fiche-modale__stat-cle",children:["But",o>1?"s":""]})]}),f.jsxs("div",{className:"fiche-modale__stat",children:[f.jsxs("span",{className:"fiche-modale__stat-valeur",children:[a,"'"]}),f.jsx("span",{className:"fiche-modale__stat-cle",children:"Minutes"})]})]}),(l>0||c>0)&&f.jsxs("div",{className:"fiche-modale__discipline",children:[l>0&&f.jsxs("span",{className:"fiche-modale__carton fiche-modale__carton--jaune",children:[l," carton",l>1?"s":""," jaune",l>1?"s":""]}),c>0&&f.jsxs("span",{className:"fiche-modale__carton fiche-modale__carton--rouge",children:[c," carton",c>1?"s":""," rouge",c>1?"s":""]})]})]})})}function qL(){const{compo:t,estOfficielle:e,chargement:n}=$L(),{effectif:r}=ug(),i=og(),[s,o]=R.useState(null),[a,l]=R.useState({}),[c,h]=je(()=>He(Qe,"rafraichirCompoPsg")(),{libelleSucces:y=>{var b,M,F,S;return(M=(b=y==null?void 0:y.data)==null?void 0:b.probable)!=null&&M.nouvelle||(S=(F=y==null?void 0:y.data)==null?void 0:F.officielle)!=null&&S.nouvelle?"Nouvelle compo trouvée.":"Rien de neuf pour le moment."},libelleErreur:"Échec de la vérification de la compo."}),[p,g]=je(()=>He(Qe,"injecterCompoTest")({officielle:!1}),{libelleSucces:"Compo probable de test injectée.",libelleErreur:"Échec de l'injection."}),[w,I]=je(()=>He(Qe,"injecterCompoTest")({officielle:!0}),{libelleSucces:"Compo officielle de test injectée.",libelleErreur:"Échec de l'injection."}),[k,D]=je(()=>He(Qe,"effacerCompoTest")(),{libelleSucces:"Compo(s) de test effacée(s).",libelleErreur:"Échec de l'effacement."}),T=i&&f.jsx(bA,{titre:"Compo de test",actions:[{libelle:"Injecter probable",onClick:()=>p().catch(()=>{}),enCours:g},{libelle:"Injecter officielle",onClick:()=>w().catch(()=>{}),enCours:I},{libelle:"Effacer",onClick:()=>k().catch(()=>{}),enCours:D,efface:!0}]}),E=y=>{const b=(r==null?void 0:r.joueurs)||[],M=y.joueurId&&b.find(F=>F.id===y.joueurId)||b.find(F=>F.nom===y.nom);o(M||{nom:y.nom,poste:y.posteEffectif||y.ligne,photo:y.photo||null,numeroMaillot:y.numeroMaillot??null})};return n?f.jsx("p",{className:"attente attente--marge",children:"Chargement de la compo…"}):!t||(t.titulaires||[]).length===0?f.jsxs("section",{className:"vide",children:[f.jsx("p",{className:"vide__titre",children:"Compo probable"}),f.jsx("p",{className:"vide__texte",children:"Pas encore de compo probable annoncée pour le prochain match."}),f.jsx("button",{className:"rafraichir",onClick:()=>c().catch(()=>{}),disabled:h,style:{marginTop:16},children:h?"Recherche en cours…":"Vérifier maintenant"}),T]}):f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Compo ",f.jsx("em",{children:e?"officielle":"probable"})]})}),!e&&f.jsx("p",{className:"compo__etiquette compo__etiquette--probable",children:"Pas encore confirmée — l'officielle sort en général vers l'heure qui précède le match."}),t.titreBreve&&f.jsx("p",{className:"compo__source",children:t.titreBreve}),f.jsxs("div",{className:"terrain",children:[f.jsxs("div",{className:"terrain__pelouse","aria-hidden":"true",children:[f.jsx("div",{className:"terrain__ligne-mediane"}),f.jsx("div",{className:"terrain__rond-central"}),f.jsx("div",{className:"terrain__surface terrain__surface--bas"}),f.jsx("div",{className:"terrain__surface terrain__surface--haut"})]}),t.titulaires.map(y=>{const b=y.joueurId||y.nom,M=y.photo&&!a[b];return f.jsxs("button",{className:"terrain__joueur",style:{left:`${y.x}%`,top:`${y.y}%`},onClick:()=>E(y),children:[M?f.jsx("img",{className:"terrain__pastille terrain__pastille--photo",src:y.photo,alt:"",loading:"eager",onError:()=>l(F=>({...F,[b]:!0}))}):f.jsx("span",{className:"terrain__pastille",children:KL(y.nom)}),f.jsx("span",{className:"terrain__nom",children:GL(y.nom)})]},y.nom)})]}),t.banc&&t.banc.length>0&&f.jsxs("div",{className:"banc",children:[f.jsx("h3",{className:"banc__titre",children:"Remplaçants"}),f.jsx("ul",{className:"banc__liste",children:t.banc.map(y=>f.jsx("li",{className:"banc__joueur",children:f.jsx("button",{className:"banc__bouton",onClick:()=>E({nom:y}),children:y})},y))})]}),f.jsx("button",{className:"rafraichir",onClick:()=>c().catch(()=>{}),disabled:h,children:h?"Mise à jour en cours…":e?"Vérifier une mise à jour":"Vérifier si l'officielle est sortie"}),T,f.jsx(VA,{joueur:s,onFermer:()=>o(null)})]})}function KL(t){const e=t.split(/[\s-]+/).filter(Boolean);return e.length===1?e[0].slice(0,3).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}function GL(t){const e=t.split(/[\s-]+/).filter(Boolean);return e[e.length-1]}function WL(t){const[e,n]=R.useState([]),[r,i]=R.useState([]),[s,o]=R.useState(!0);return R.useEffect(()=>_n(qm(rt,it.classements()),l=>{n(l.docs.map(c=>({id:c.id,...c.data()}))),o(!1)},()=>o(!1)),[]),R.useEffect(()=>{ch(Vt(rt,it.config("clubs"))).then(l=>{i(l.exists()?l.data().liste||[]:[])})},[]),{classements:R.useMemo(()=>{const l=t==null?void 0:t.clubFavori,c=(t==null?void 0:t.clubsSuivis)||[],h=l==null?void 0:l.championnat,p=new Set([h,...c.map(w=>w.championnat),"ligue-des-champions"].filter(Boolean)),g=new Map(e.map(w=>[w.id,w]));return[...p].map(w=>g.get(w)||QL(w,r))},[e,r,t]),chargement:s}}const HL={"ligue-1":"Ligue 1",liga:"Liga","serie-a":"Serie A",bundesliga:"Bundesliga","premier-league":"Premier League","ligue-des-champions":"Ligue des Champions"};function QL(t,e){const n=e.filter(r=>r.championnat===t).sort((r,i)=>r.nom.localeCompare(i.nom));return{id:t,libelle:HL[t]||t,saisonDemarree:!1,saison:null,saisonPrecedente:!1,journee:null,groupes:[{libelle:null,lignes:n.map((r,i)=>({position:i+1,equipe:r.court||r.nom,nomComplet:r.nom,joues:0,gagnes:0,nuls:0,perdus:0,marques:0,encaisses:0,difference:0,points:0,forme:null}))}]}}function JL(){var c;const{preferences:t}=Qr(),{classements:e,chargement:n}=WL(t),[r,i]=R.useState(null),[s,o]=je(()=>He(Qe,"rafraichirClassements")(),{libelleSucces:"Classement à jour.",libelleErreur:"Échec de la mise à jour du classement."});R.useEffect(()=>{!r&&e.length>0&&i(e[0].id)},[e,r]);const a=R.useMemo(()=>e.find(h=>h.id===r)||e[0]||null,[e,r]),l=(c=t==null?void 0:t.clubFavori)==null?void 0:c.id;return n?f.jsx("p",{className:"attente attente--marge",children:"Chargement des classements…"}):e.length===0?f.jsxs("section",{className:"vide",children:[f.jsx("p",{className:"vide__titre",children:"Classement"}),f.jsx("p",{className:"vide__texte",children:"Choisis un club favori pour voir son classement."})]}):f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"filtres",children:e.map(h=>f.jsx("button",{className:`filtres__item${(a==null?void 0:a.id)===h.id?" filtres__item--actif":""}`,onClick:()=>i(h.id),children:h.libelle},h.id))}),(a==null?void 0:a.saisonDemarree)===!1&&f.jsx("p",{className:"classement__journee",children:"Saison pas encore commencée — classement à titre indicatif"}),(a==null?void 0:a.saisonPrecedente)&&f.jsxs("p",{className:"classement__journee classement__journee--alerte",children:["Saison ",a.saison," (précédente) — la nouvelle saison n'a pas encore de classement chez la source"]}),!(a!=null&&a.saisonPrecedente)&&(a==null?void 0:a.saisonDemarree)!==!1&&(a==null?void 0:a.journee)!=null&&f.jsxs("p",{className:"classement__journee",children:["Journée ",a.journee]}),((a==null?void 0:a.groupes)||[]).map((h,p)=>f.jsxs("div",{className:"classement__groupe",children:[h.libelle&&f.jsx("h3",{className:"classement__titre-groupe",children:h.libelle}),f.jsxs("table",{className:"classement",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",className:"classement__rang"}),f.jsx("th",{scope:"col",className:"classement__club",children:"Club"}),f.jsx("th",{scope:"col",children:"J"}),f.jsx("th",{scope:"col",children:"Diff"}),f.jsx("th",{scope:"col",children:"Pts"})]})}),f.jsx("tbody",{children:h.lignes.map(g=>{const w=CL(g.nomComplet||g.equipe,t),I=!!w,k=w===l;return f.jsxs("tr",{className:k?"classement__ligne--favori":I?"classement__ligne--suivi":"",children:[f.jsx("td",{className:"classement__rang",children:g.position}),f.jsx("td",{className:"classement__club",children:g.equipe}),f.jsx("td",{children:g.joues}),f.jsx("td",{children:g.difference>0?`+${g.difference}`:g.difference}),f.jsx("td",{className:"classement__points",children:g.points})]},`${g.position}-${g.equipe}`)})})]})]},h.libelle||p)),f.jsx("button",{className:"rafraichir",onClick:()=>s().catch(()=>{}),disabled:o,children:o?"Mise à jour en cours…":"Mettre à jour le classement"})]})}function YL(t=""){return t.normalize("NFD").replace(/[̀-ͯ]/g,"")}function NE(t=""){return YL(t).toLowerCase()}function XL(t,e){const n=NE((e==null?void 0:e.nom)||"");return n.length<3?!1:NE([t.titre,t.resume,t.corps].filter(Boolean).join(" ")).includes(n)}function ZL(t,e){return e?t.filter(n=>XL(n,e)):[]}function Ei(t){return(t==null?void 0:t.id)||(t==null?void 0:t.nom)||null}function OA(t,e){return e&&(t||[]).find(n=>Ei(n)===e)||null}const ej=["Gardien","Défenseur","Milieu","Attaquant"];function tj({joueur:t,chouchou:e,onOuvrir:n,onChoisirChouchou:r}){const{nom:i,nationalite:s,age:o,matchsJoues:a,titularisations:l,buts:c,cartonsJaunes:h,cartonsRouges:p,minutesJouees:g}=t;return f.jsxs("li",{className:"effectif__ligne",children:[f.jsx("button",{type:"button",className:`effectif__etoile${e?" effectif__etoile--actif":""}`,onClick:()=>{console.debug("[Effectif] étoile cliquée",{nom:t.nom,id:t.id}),r(t)},"aria-label":e?"Ton chouchou":"Choisir comme chouchou","aria-pressed":e,children:e?"★":"☆"}),f.jsxs("button",{type:"button",className:"effectif__ouvrir",onClick:()=>{console.debug("[Effectif] ligne cliquée (ouverture fiche)",{nom:t.nom}),n(t)},children:[f.jsxs("div",{className:"effectif__corps",children:[f.jsx("p",{className:"effectif__joueur",children:i}),f.jsx("p",{className:"effectif__detail",children:[s,o?`${o} ans`:null].filter(Boolean).join(" · ")})]}),f.jsxs("div",{className:"effectif__stats",children:[f.jsxs("span",{className:"effectif__stat",title:"Matchs joués (titularisations)",children:[a," ",f.jsx("em",{children:l>0?`(${l} tit.)`:""})]}),c>0&&f.jsxs("span",{className:"effectif__stat effectif__stat--but",title:"Buts",children:["⚽ ",c]}),h>0&&f.jsx("span",{className:"effectif__stat effectif__stat--jaune",title:"Cartons jaunes",children:h}),p>0&&f.jsx("span",{className:"effectif__stat effectif__stat--rouge",title:"Cartons rouges",children:p}),f.jsxs("span",{className:"effectif__stat effectif__stat--minutes",title:"Minutes jouées",children:[g,"'"]})]})]})]})}function nj(){const{effectif:t,chargement:e}=ug(),{preferences:n,enregistrer:r}=Qr(),i=og(),s=Bc(),[o,a]=R.useState(null),[l,c]=R.useState(null),[h,p]=je(()=>He(Qe,"rafraichirEffectifPsg")(),{libelleSucces:"Effectif à jour.",libelleErreur:y=>(y==null?void 0:y.message)||"Le rafraîchissement a échoué."}),[g]=je(async y=>{const b=Ei(y);return console.debug("[Chouchou] sélection",{nom:y.nom,id:b}),await r({joueurChouchouId:b}),y},{libelleSucces:y=>`★ ${y.nom} est maintenant ton chouchou.`,libelleErreur:"Impossible de définir ce chouchou pour le moment, réessaie."}),[w,I]=je(async()=>{const y=await He(Qe,"diagnosticEffectif")();return c(y.data),y.data},{libelleSucces:"Diagnostic terminé.",libelleErreur:"Échec du diagnostic."}),k=()=>w().catch(y=>c({ok:!1,erreur:y.message})),D=R.useMemo(()=>{const y=(t==null?void 0:t.joueurs)||[];return ej.map(b=>({poste:b,joueurs:y.filter(M=>M.poste===b)})).filter(b=>b.joueurs.length>0)},[t]),T=R.useMemo(()=>OA(t==null?void 0:t.joueurs,n==null?void 0:n.joueurChouchouId),[t,n]),E=y=>{g(y).then(()=>s("/chouchou")).catch(b=>console.error("[Chouchou] échec enregistrement",b))};return e?f.jsx("p",{className:"attente attente--marge",children:"Chargement de l'effectif…"}):f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Effectif ",f.jsx("em",{children:"PSG"})]})}),T&&f.jsxs(zc,{className:"effectif__bandeau-chouchou",to:"/chouchou",children:["★ Ton chouchou : ",f.jsx("strong",{children:T.nom})," — voir sa fiche →"]}),D.length===0&&f.jsx("p",{className:"attente",children:"Effectif pas encore disponible."}),(t==null?void 0:t.entraineur)&&f.jsxs("p",{className:"effectif__entraineur",children:["Entraîneur : ",f.jsx("strong",{children:t.entraineur.nom}),t.entraineur.nationalite?` · ${t.entraineur.nationalite}`:""]}),D.map(({poste:y,joueurs:b})=>f.jsxs("div",{className:"effectif__groupe",children:[f.jsxs("h3",{className:"effectif__titre-groupe",children:[y,b.length>1?"s":""]}),f.jsx("ul",{className:"effectif__liste",children:b.map(M=>f.jsx(tj,{joueur:M,chouchou:!!(n!=null&&n.joueurChouchouId)&&Ei(M)===n.joueurChouchouId,onOuvrir:a,onChoisirChouchou:E},Ei(M)))})]},y)),f.jsx("button",{className:"rafraichir",onClick:()=>h().catch(()=>{}),disabled:p,children:p?"Mise à jour en cours…":"Rafraîchir l'effectif"}),i&&f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"rafraichir",onClick:k,disabled:I,style:{marginTop:8},children:I?"Diagnostic en cours…":"Diagnostiquer"}),l&&f.jsx("pre",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:11,color:"var(--acier)",background:"rgba(255,255,255,0.05)",padding:12,marginTop:8,maxHeight:400,overflow:"auto"},children:JSON.stringify(l,null,2)})]}),f.jsx(VA,{joueur:o,onFermer:()=>a(null)})]})}function rj({onOuvrirArticle:t}){var A,ie;const{effectif:e,chargement:n}=ug(),{actus:r,chargement:i}=sg(),{preferences:s,enregistrer:o}=Qr(),a=Bc(),[l,c]=R.useState(!1),h=R.useMemo(()=>OA(e==null?void 0:e.joueurs,s==null?void 0:s.joueurChouchouId),[e,s]);R.useEffect(()=>{var G;console.debug("[Chouchou] état",{joueurChouchouId:s==null?void 0:s.joueurChouchouId,nbJoueursEffectif:((G=e==null?void 0:e.joueurs)==null?void 0:G.length)??0,idsEffectif:((e==null?void 0:e.joueurs)||[]).map(Ei),joueurTrouve:h?{nom:h.nom,id:Ei(h)}:null})},[s,e,h]);const p=R.useMemo(()=>ZL(r,h),[r,h]),[g,w]=je(()=>o({joueurChouchouId:null}),{libelleSucces:"Chouchou retiré — choisis-en un nouveau depuis l’effectif.",libelleErreur:"Impossible de retirer ce chouchou pour le moment, réessaie."}),[I,k]=R.useState(null),[D,T]=R.useState(!1),[E,y]=R.useState(!1),b=h?Ei(h):null;if(R.useEffect(()=>{k(null),y(!1),!(!(h!=null&&h.lien)||!b)&&(T(!0),He(Qe,"recupererDetailsJoueur")({joueurId:b,lien:h.lien}).then(G=>{console.debug("[Chouchou] détails reçus",G.data),k(G.data)}).catch(G=>{console.error("[Chouchou] échec récupération détails",G),y(!0)}).finally(()=>T(!1)))},[b,h==null?void 0:h.lien]),n||i)return f.jsx("p",{className:"attente attente--marge",children:"Chargement…"});if(!(s!=null&&s.joueurChouchouId)||!h)return f.jsx("section",{className:"section",children:f.jsxs("div",{className:"vide",children:[f.jsx("p",{className:"vide__titre",children:"Pas encore de chouchou"}),f.jsx("p",{className:"vide__texte",children:"Choisis ton joueur préféré depuis l'effectif : appuie sur l'étoile ★ à côté de son nom."}),f.jsx(zc,{className:"chouchou__lien-effectif",to:"/effectif",children:"Voir l'effectif →"})]})});const F=h.photo&&!l,S=h.matchsJoues??0,v=h.titularisations??0,C=h.buts??0,x=h.minutesJouees??0,P=h.cartonsJaunes??0,N=h.cartonsRouges??0;return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"chouchou-hero",children:[h.numeroMaillot!=null&&f.jsx("span",{className:"chouchou-hero__fantome","aria-hidden":"true",children:h.numeroMaillot}),f.jsx("div",{className:"chouchou-hero__portrait",children:F?f.jsx("img",{className:"chouchou-hero__photo",src:h.photo,alt:"",loading:"eager",onError:()=>c(!0)}):f.jsx("div",{className:"chouchou-hero__photo chouchou-hero__photo--vide","aria-hidden":"true",children:(h.nom||"?").charAt(0).toUpperCase()})}),f.jsx("div",{className:"chouchou-hero__voile","aria-hidden":"true"}),f.jsxs("div",{className:"chouchou-hero__texte",children:[f.jsx("span",{className:"eyebrow chouchou-hero__badge",children:"★ Ton chouchou"}),h.poste&&f.jsx("p",{className:"chouchou-hero__poste",children:h.poste}),f.jsx("h1",{className:"chouchou-hero__nom display",children:h.nomComplet||h.nom}),f.jsx("p",{className:"chouchou-hero__meta",children:[h.nationalite,h.age?`${h.age} ans`:null,h.taille,h.poids].filter(Boolean).join(" · ")})]})]}),f.jsxs("section",{className:"section chouchou-section",children:[f.jsxs("div",{className:"chouchou-stats",children:[f.jsxs("div",{className:"chouchou-stat",children:[f.jsx("span",{className:"chouchou-stat__valeur",children:S}),f.jsxs("span",{className:"chouchou-stat__cle",children:["Match",S>1?"s":""]})]}),f.jsxs("div",{className:"chouchou-stat",children:[f.jsx("span",{className:"chouchou-stat__valeur",children:v}),f.jsx("span",{className:"chouchou-stat__cle",children:"Titu."})]}),f.jsxs("div",{className:"chouchou-stat chouchou-stat--accent",children:[f.jsx("span",{className:"chouchou-stat__valeur",children:C}),f.jsxs("span",{className:"chouchou-stat__cle",children:["But",C>1?"s":""]})]}),f.jsxs("div",{className:"chouchou-stat",children:[f.jsxs("span",{className:"chouchou-stat__valeur",children:[x,"'"]}),f.jsx("span",{className:"chouchou-stat__cle",children:"Minutes"})]})]}),(P>0||N>0)&&f.jsxs("div",{className:"chouchou-discipline",children:[P>0&&f.jsxs("span",{className:"chouchou-carton chouchou-carton--jaune",children:[P," carton",P>1?"s":""," jaune",P>1?"s":""]}),N>0&&f.jsxs("span",{className:"chouchou-carton chouchou-carton--rouge",children:[N," carton",N>1?"s":""," rouge",N>1?"s":""]})]}),f.jsx("button",{className:"chouchou-retirer",disabled:w,onClick:()=>{console.debug("[Chouchou] retrait, retour vers effectif"),g().then(()=>a("/effectif")).catch(G=>console.error("[Chouchou] échec retrait",G))},children:w?"Retrait en cours…":"Changer de chouchou"})]}),D&&!I&&f.jsx("p",{className:"attente",style:{padding:"0 var(--pad-ecran)"},children:"Chargement des infos détaillées…"}),E&&!I&&f.jsx("p",{className:"chouchou-detail-erreur",children:"Impossible de récupérer les infos détaillées pour le moment."}),I&&(I.debutContrat||I.selectionsNationales!=null)&&f.jsxs("section",{className:"section chouchou-section chouchou-section--serree",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Carte ",f.jsx("em",{children:"d'identité"})]})}),f.jsxs("div",{className:"chouchou-identite",children:[I.debutContrat&&f.jsxs("div",{className:"chouchou-identite__ligne",children:[f.jsx("span",{children:"Sous contrat"}),f.jsxs("strong",{children:[I.debutContrat," → ",I.finContrat||"?"]})]}),I.selectionsNationales!=null&&f.jsxs("div",{className:"chouchou-identite__ligne",children:[f.jsx("span",{children:"Sélections en équipe nationale"}),f.jsxs("strong",{children:[I.selectionsNationales," sél.",I.butsSelection>0?` · ${I.butsSelection} but${I.butsSelection>1?"s":""}`:""]})]}),I.naissanceDetail&&f.jsxs("div",{className:"chouchou-identite__ligne",children:[f.jsx("span",{children:"Naissance"}),f.jsx("strong",{children:I.naissanceDetail.replace(/^Né[e]? le /i,"")})]})]})]}),((A=I==null?void 0:I.bilanCompetitions)==null?void 0:A.length)>0&&f.jsxs("section",{className:"section chouchou-section chouchou-section--serree",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Bilan par ",f.jsx("em",{children:"compétition"})]})}),f.jsx("div",{className:"chouchou-bilan-scroll",children:f.jsxs("table",{className:"chouchou-bilan",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",children:"Compétition"}),f.jsx("th",{scope:"col",children:"MJ"}),f.jsx("th",{scope:"col",children:"Titu."}),f.jsx("th",{scope:"col",children:"Buts"}),f.jsx("th",{scope:"col",children:"Min."})]})}),f.jsx("tbody",{children:I.bilanCompetitions.map(G=>f.jsxs("tr",{className:G.total?"chouchou-bilan__total":"",children:[f.jsx("td",{children:G.competition}),f.jsx("td",{children:G.matchs}),f.jsx("td",{children:G.titularisations}),f.jsx("td",{children:G.buts}),f.jsxs("td",{children:[G.minutes,"'"]})]},G.competition))})]})})]}),((ie=I==null?void 0:I.carriere)==null?void 0:ie.length)>0&&f.jsxs("section",{className:"section chouchou-section chouchou-section--serree",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Sa ",f.jsx("em",{children:"carrière"})]})}),f.jsx("ul",{className:"chouchou-carriere",children:I.carriere.map((G,Kt)=>f.jsxs("li",{className:"chouchou-carriere__ligne",children:[f.jsxs("div",{className:"chouchou-carriere__saison",children:[f.jsx("strong",{children:G.saison}),f.jsx("span",{children:G.club})]}),f.jsxs("div",{className:"chouchou-carriere__stats",children:[f.jsxs("span",{children:[G.matchs," matchs"]}),f.jsxs("span",{children:[G.buts," but",G.buts>1?"s":""]})]})]},`${G.saison}-${Kt}`))})]}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Ses actus"})}),p.length===0&&f.jsxs("p",{className:"attente",children:["Pas d'actu récente pour ",h.nom,"."]}),p.map(G=>f.jsx(kA,{actu:G,onOuvrir:t},G.id))]})]})}const ij="psg";function sj(){const[t,e]=R.useState(null),[n,r]=R.useState(!0);return R.useEffect(()=>_n(Vt(rt,it.mercato(ij)),i=>{e(i.exists()?i.data():null),r(!1)},()=>r(!1)),[]),{mercato:t,chargement:n}}function oj(){const[t,e]=R.useState([]),[n,r]=R.useState(!0);return R.useEffect(()=>_n(Vt(rt,it.fenetresMercato()),i=>{const s=i.exists()?i.data().fenetres||[]:[];e(s.map(o=>{var a,l,c,h;return{...o,debut:((l=(a=o.debut)==null?void 0:a.toDate)==null?void 0:l.call(a))||new Date(o.debut),fin:((h=(c=o.fin)==null?void 0:c.toDate)==null?void 0:h.call(c))||new Date(o.fin)}})),r(!1)},()=>r(!1)),[]),{fenetres:t,chargement:n}}const aj=30;function lj(t,e){return t.find(n=>e>=n.debut&&e<=n.fin)||null}function uj(t,e){return t.filter(n=>n.debut>e).sort((n,r)=>n.debut-r.debut)[0]||null}function kE(t){const e=Math.max(0,Math.floor(t/1e3));return{jours:Math.floor(e/86400),heures:Math.floor(e%86400/3600),minutes:Math.floor(e%3600/60),secondes:e%60}}const bE={ete:"🔥",hiver:"❄️"},DE=24*60*60*1e3;function VE({jours:t,heures:e,minutes:n,secondes:r,compact:i=!1}){const s=o=>String(o).padStart(2,"0");return f.jsxs("div",{className:"mercato-timer__compte","aria-hidden":"true",children:[f.jsxs("span",{className:"mercato-timer__bloc",children:[f.jsx("strong",{children:t}),"j"]}),f.jsxs("span",{className:"mercato-timer__bloc",children:[f.jsx("strong",{children:s(e)}),"h"]}),f.jsxs("span",{className:"mercato-timer__bloc",children:[f.jsx("strong",{children:s(n)}),"m"]}),!i&&f.jsxs("span",{className:"mercato-timer__bloc",children:[f.jsx("strong",{children:s(r)}),"s"]})]})}function cj(){const t=CA(1e3),{fenetres:e}=oj(),n=lj(e,t);if(n){const{jours:l,heures:c,minutes:h,secondes:p}=kE(n.fin-t),g=n.fin-t<DE;return f.jsxs("div",{className:`mercato-timer mercato-timer--ouvert${g?" mercato-timer--urgent":""}`,children:[f.jsxs("span",{className:"mercato-timer__badge",children:[bE[n.type]," Mercato ouvert"]}),f.jsx("p",{className:"mercato-timer__titre display",children:n.libelle}),f.jsx("p",{className:"mercato-timer__sous",children:"Ferme dans"}),f.jsx(VE,{jours:l,heures:c,minutes:h,secondes:p})]})}const r=uj(e,t);if(!r)return null;const i=r.debut-t;if(i>aj*DE)return null;const{jours:s,heures:o,minutes:a}=kE(i);return f.jsxs("div",{className:"mercato-timer mercato-timer--bientot",children:[f.jsxs("span",{className:"mercato-timer__badge",children:[bE[r.type]," Bientôt"]}),f.jsx("p",{className:"mercato-timer__titre display",children:r.libelle}),f.jsx("p",{className:"mercato-timer__sous",children:"Ouvre dans"}),f.jsx(VE,{jours:s,heures:o,minutes:a,compact:!0})]})}const OE=[{cle:"officiels",titre:"Officiels"},{cle:"enDiscussion",titre:"En discussion"},{cle:"rumeurs",titre:"Rumeurs"}];function hj({mouvement:t}){const{joueur:e,joueurDetail:n,sens:r,clubAdverse:i,typeTransfert:s,montant:o}=t,a=n?n.split(",").slice(1).join(",").trim():null;return f.jsxs("li",{className:`mercato__ligne mercato__ligne--${r}`,children:[f.jsx("span",{className:"mercato__sens","aria-hidden":"true",children:r==="arrivee"?"↗":"↘"}),f.jsxs("div",{className:"mercato__corps",children:[f.jsx("p",{className:"mercato__joueur",children:e}),f.jsx("p",{className:"mercato__detail",children:[a,i].filter(Boolean).join(" · ")})]}),f.jsxs("div",{className:"mercato__transfert",children:[s&&f.jsx("span",{className:"mercato__type",children:s}),o&&f.jsx("span",{className:"mercato__montant",children:o})]})]})}function dj(){const{mercato:t,chargement:e}=sj(),[n,r]=je(()=>He(Qe,"rafraichirMaxifootPsg")(),{libelleSucces:"Mercato à jour.",libelleErreur:"Échec de la mise à jour du mercato."});if(e)return f.jsx("p",{className:"attente attente--marge",children:"Chargement du mercato…"});const i=OE.reduce((s,{cle:o})=>{var a;return s+(((a=t==null?void 0:t[o])==null?void 0:a.length)||0)},0);return f.jsxs(f.Fragment,{children:[f.jsx(cj,{}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsxs("h2",{className:"section__titre",children:["Mercato ",f.jsx("em",{children:"PSG"})]})}),i===0&&f.jsx("p",{className:"attente",children:"Rien à signaler pour l'instant."}),OE.map(({cle:s,titre:o})=>{const a=(t==null?void 0:t[s])||[];return a.length===0?null:f.jsxs("div",{className:"mercato__groupe",children:[f.jsx("h3",{className:"mercato__titre-groupe",children:o}),f.jsx("ul",{className:"mercato__liste",children:a.map((l,c)=>f.jsx(hj,{mouvement:l},`${s}-${c}`))})]},s)}),f.jsx("button",{className:"rafraichir",onClick:()=>n().catch(()=>{}),disabled:r,children:r?"Mise à jour en cours…":"Rafraîchir le mercato"})]})]})}const MA="@firebase/installations",cg="0.6.9";/**
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
 */const LA=1e4,jA=`w:${cg}`,FA="FIS_v2",fj="https://firebaseinstallations.googleapis.com/v1",pj=60*60*1e3,mj="installations",gj="Installations";/**
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
 */const _j={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Oi=new Ui(mj,gj,_j);function UA(t){return t instanceof yn&&t.code.includes("request-failed")}/**
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
 */function BA({projectId:t}){return`${fj}/projects/${t}/installations`}function $A(t){return{token:t.token,requestStatus:2,expiresIn:vj(t.expiresIn),creationTime:Date.now()}}async function zA(t,e){const r=(await e.json()).error;return Oi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function yj(t,{refreshToken:e}){const n=qA(t);return n.append("Authorization",Ej(e)),n}async function KA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function vj(t){return Number(t.replace("s","000"))}function Ej(t){return`${FA} ${t}`}/**
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
 */async function wj({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=BA(t),i=qA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:FA,appId:t.appId,sdkVersion:jA},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await KA(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:$A(c.authToken)}}else throw await zA("Create Installation",l)}/**
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
 */function GA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Ij(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Tj=/^[cdef][\w-]{21}$/,op="";function Sj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Aj(t);return Tj.test(n)?n:op}catch{return op}}function Aj(t){return Ij(t).substr(0,22)}/**
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
 */function dh(t){return`${t.appName}!${t.appId}`}/**
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
 */const WA=new Map;function HA(t,e){const n=dh(t);QA(n,e),Cj(n,e)}function QA(t,e){const n=WA.get(t);if(n)for(const r of n)r(e)}function Cj(t,e){const n=xj();n&&n.postMessage({key:t,fid:e}),Pj()}let fi=null;function xj(){return!fi&&"BroadcastChannel"in self&&(fi=new BroadcastChannel("[Firebase] FID Change"),fi.onmessage=t=>{QA(t.data.key,t.data.fid)}),fi}function Pj(){WA.size===0&&fi&&(fi.close(),fi=null)}/**
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
 */const Rj="firebase-installations-database",Nj=1,Mi="firebase-installations-store";let Td=null;function hg(){return Td||(Td=Kc(Rj,Nj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mi)}}})),Td}async function Ic(t,e){const n=dh(t),i=(await hg()).transaction(Mi,"readwrite"),s=i.objectStore(Mi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&HA(t,e.fid),e}async function JA(t){const e=dh(t),r=(await hg()).transaction(Mi,"readwrite");await r.objectStore(Mi).delete(e),await r.done}async function fh(t,e){const n=dh(t),i=(await hg()).transaction(Mi,"readwrite"),s=i.objectStore(Mi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&HA(t,a.fid),a}/**
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
 */async function dg(t){let e;const n=await fh(t.appConfig,r=>{const i=kj(r),s=bj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===op?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function kj(t){const e=t||{fid:Sj(),registrationStatus:0};return YA(e)}function bj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Oi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Dj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Vj(t)}:{installationEntry:e}}async function Dj(t,e){try{const n=await wj(t,e);return Ic(t.appConfig,n)}catch(n){throw UA(n)&&n.customData.serverCode===409?await JA(t.appConfig):await Ic(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Vj(t){let e=await ME(t.appConfig);for(;e.registrationStatus===1;)await GA(100),e=await ME(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await dg(t);return r||n}return e}function ME(t){return fh(t,e=>{if(!e)throw Oi.create("installation-not-found");return YA(e)})}function YA(t){return Oj(t)?{fid:t.fid,registrationStatus:0}:t}function Oj(t){return t.registrationStatus===1&&t.registrationTime+LA<Date.now()}/**
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
 */async function Mj({appConfig:t,heartbeatServiceProvider:e},n){const r=Lj(t,n),i=yj(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:jA,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await KA(()=>fetch(r,a));if(l.ok){const c=await l.json();return $A(c)}else throw await zA("Generate Auth Token",l)}function Lj(t,{fid:e}){return`${BA(t)}/${e}/authTokens:generate`}/**
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
 */async function fg(t,e=!1){let n;const r=await fh(t.appConfig,s=>{if(!XA(s))throw Oi.create("not-registered");const o=s.authToken;if(!e&&Uj(o))return s;if(o.requestStatus===1)return n=jj(t,e),s;{if(!navigator.onLine)throw Oi.create("app-offline");const a=$j(s);return n=Fj(t,a),a}});return n?await n:r.authToken}async function jj(t,e){let n=await LE(t.appConfig);for(;n.authToken.requestStatus===1;)await GA(100),n=await LE(t.appConfig);const r=n.authToken;return r.requestStatus===0?fg(t,e):r}function LE(t){return fh(t,e=>{if(!XA(e))throw Oi.create("not-registered");const n=e.authToken;return zj(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Fj(t,e){try{const n=await Mj(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ic(t.appConfig,r),n}catch(n){if(UA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await JA(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ic(t.appConfig,r)}throw n}}function XA(t){return t!==void 0&&t.registrationStatus===2}function Uj(t){return t.requestStatus===2&&!Bj(t)}function Bj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pj}function $j(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function zj(t){return t.requestStatus===1&&t.requestTime+LA<Date.now()}/**
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
 */async function qj(t){const e=t,{installationEntry:n,registrationPromise:r}=await dg(e);return r?r.catch(console.error):fg(e).catch(console.error),n.fid}/**
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
 */async function Kj(t,e=!1){const n=t;return await Gj(n),(await fg(n,e)).token}async function Gj(t){const{registrationPromise:e}=await dg(t);e&&await e}/**
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
 */function Wj(t){if(!t||!t.options)throw Sd("App Configuration");if(!t.name)throw Sd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Sd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Sd(t){return Oi.create("missing-app-config-values",{valueName:t})}/**
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
 */const ZA="installations",Hj="installations-internal",Qj=t=>{const e=t.getProvider("app").getImmediate(),n=Wj(e),r=Bi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Jj=t=>{const e=t.getProvider("app").getImmediate(),n=Bi(e,ZA).getImmediate();return{getId:()=>qj(n),getToken:i=>Kj(n,i)}};function Yj(){mn(new nn(ZA,Qj,"PUBLIC")),mn(new nn(Hj,Jj,"PRIVATE"))}Yj();Dt(MA,cg);Dt(MA,cg,"esm2017");/**
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
 */const Xj="/firebase-messaging-sw.js",Zj="/firebase-cloud-messaging-push-scope",eC="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",e2="https://fcmregistrations.googleapis.com/v1",tC="google.c.a.c_id",t2="google.c.a.c_l",n2="google.c.a.ts",r2="google.c.a.e";var jE;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(jE||(jE={}));/**
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
 */var Ha;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ha||(Ha={}));/**
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
 */function Vn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function i2(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Ad="fcm_token_details_db",s2=5,FE="fcm_token_object_Store";async function o2(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Ad))return null;let e=null;return(await Kc(Ad,s2,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(FE))return;const l=o.objectStore(FE),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const h=c;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:Vn(h.vapidKey)}}}else if(i===3){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Vn(h.auth),p256dh:Vn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Vn(h.vapidKey)}}}else if(i===4){const h=c;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Vn(h.auth),p256dh:Vn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Vn(h.vapidKey)}}}}}})).close(),await hd(Ad),await hd("fcm_vapid_details_db"),await hd("undefined"),a2(e)?e:null}function a2(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const l2="firebase-messaging-database",u2=1,Li="firebase-messaging-store";let Cd=null;function pg(){return Cd||(Cd=Kc(l2,u2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Li)}}})),Cd}async function nC(t){const e=gg(t),r=await(await pg()).transaction(Li).objectStore(Li).get(e);if(r)return r;{const i=await o2(t.appConfig.senderId);if(i)return await mg(t,i),i}}async function mg(t,e){const n=gg(t),i=(await pg()).transaction(Li,"readwrite");return await i.objectStore(Li).put(e,n),await i.done,e}async function c2(t){const e=gg(t),r=(await pg()).transaction(Li,"readwrite");await r.objectStore(Li).delete(e),await r.done}function gg({appConfig:t}){return t.appId}/**
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
 */const h2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},dt=new Ui("messaging","Messaging",h2);/**
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
 */async function d2(t,e){const n=await yg(t),r=iC(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(_g(t.appConfig),i)).json()}catch(o){throw dt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw dt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw dt.create("token-subscribe-no-token");return s.token}async function f2(t,e){const n=await yg(t),r=iC(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${_g(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw dt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw dt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw dt.create("token-update-no-token");return s.token}async function rC(t,e){const r={method:"DELETE",headers:await yg(t)};try{const s=await(await fetch(`${_g(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw dt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw dt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function _g({projectId:t}){return`${e2}/projects/${t}/registrations`}async function yg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function iC({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==eC&&(i.web.applicationPubKey=r),i}/**
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
 */const p2=7*24*60*60*1e3;async function m2(t){const e=await y2(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Vn(e.getKey("auth")),p256dh:Vn(e.getKey("p256dh"))},r=await nC(t.firebaseDependencies);if(r){if(v2(r.subscriptionOptions,n))return Date.now()>=r.createTime+p2?_2(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await rC(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return UE(t.firebaseDependencies,n)}else return UE(t.firebaseDependencies,n)}async function g2(t){const e=await nC(t.firebaseDependencies);e&&(await rC(t.firebaseDependencies,e.token),await c2(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function _2(t,e){try{const n=await f2(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await mg(t.firebaseDependencies,r),n}catch(n){throw n}}async function UE(t,e){const r={token:await d2(t,e),createTime:Date.now(),subscriptionOptions:e};return await mg(t,r),r.token}async function y2(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:i2(e)})}function v2(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function BE(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return E2(e,t),w2(e,t),I2(e,t),e}function E2(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function w2(t,e){e.data&&(t.data=e.data)}function I2(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function T2(t){return typeof t=="object"&&!!t&&tC in t}/**
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
 */function S2(t){if(!t||!t.options)throw xd("App Configuration Object");if(!t.name)throw xd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw xd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function xd(t){return dt.create("missing-app-config-values",{valueName:t})}/**
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
 */class A2{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=S2(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function sC(t){try{t.swRegistration=await navigator.serviceWorker.register(Xj,{scope:Zj}),t.swRegistration.update().catch(()=>{})}catch(e){throw dt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function C2(t,e){if(!e&&!t.swRegistration&&await sC(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw dt.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function x2(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=eC)}/**
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
 */async function oC(t,e){if(!navigator)throw dt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw dt.create("permission-blocked");return await x2(t,e==null?void 0:e.vapidKey),await C2(t,e==null?void 0:e.serviceWorkerRegistration),m2(t)}/**
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
 */async function P2(t,e,n){const r=R2(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[tC],message_name:n[t2],message_time:n[n2],message_device_time:Math.floor(Date.now()/1e3)})}function R2(t){switch(t){case Ha.NOTIFICATION_CLICKED:return"notification_open";case Ha.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function N2(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ha.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(BE(n)):t.onMessageHandler.next(BE(n)));const r=n.data;T2(r)&&r[r2]==="1"&&await P2(t,n.messageType,r)}const $E="@firebase/messaging",zE="0.12.12";/**
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
 */const k2=t=>{const e=new A2(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>N2(e,n)),e},b2=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>oC(e,r)}};function D2(){mn(new nn("messaging",k2,"PUBLIC")),mn(new nn("messaging-internal",b2,"PRIVATE")),Dt($E,zE),Dt($E,zE,"esm2017")}/**
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
 */async function aC(){try{await AT()}catch{return!1}return typeof window<"u"&&rm()&&DN()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function V2(t){if(!navigator)throw dt.create("only-available-in-window");return t.swRegistration||await sC(t),g2(t)}/**
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
 */function qE(t=om()){return aC().then(e=>{if(!e)throw dt.create("unsupported-browser")},e=>{throw dt.create("indexed-db-unsupported")}),Bi(Ae(t),"messaging").getImmediate()}async function KE(t,e){return t=Ae(t),oC(t,e)}function O2(t){return t=Ae(t),V2(t)}D2();function M2(t){const[e,n]=R.useState("verification"),[r,i]=R.useState(!1),s=typeof window<"u"&&(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0),o=typeof navigator<"u"&&/iphone|ipad|ipod/i.test(navigator.userAgent);R.useEffect(()=>{let c=!1;async function h(){if(!await aC().catch(()=>!1)||o&&!s){c||n("indisponible");return}if(Notification.permission==="denied"){c||n("refuse");return}c||n(Notification.permission==="granted"?"actif":"inactif")}return h(),()=>{c=!0}},[o,s]);const a=R.useCallback(async()=>{if(t){i(!0);try{const c=await Notification.requestPermission();if(c!=="granted"){n(c==="denied"?"refuse":"inactif");return}const h=await navigator.serviceWorker.register("/firebase-messaging-sw.js"),p=qE(Wa),g=await KE(p,{vapidKey:IE,serviceWorkerRegistration:h});if(!g){n("inactif");return}await He(Qe,"enregistrerAppareil")({jeton:g}),n("actif")}catch{n("inactif")}finally{i(!1)}}},[t]),l=R.useCallback(async()=>{i(!0);try{const c=qE(Wa),h=await KE(c,{vapidKey:IE}).catch(()=>null);h&&(await He(Qe,"retirerAppareil")({jeton:h}),await O2(c).catch(()=>{})),n("inactif")}finally{i(!1)}},[]);return{etat:e,enCours:r,activer:a,desactiver:l,iOS:o,installee:s}}const L2=[["matinDuMatch","Le matin du match","Vers 9h, avec la chaîne"],["uneHeureAvant","1 heure avant","Rappel avant le coup d'envoi"],["coupDEnvoi","Au coup d'envoi","Le match commence"],["actuImportante","Actu importante","Mercato, blessure, groupe"],["touteActu","Toute l'actu","Chaque article publié"]];function j2(){var v,C,x;const{utilisateur:t,deconnexion:e}=dl(),{preferences:n,enregistrer:r}=Qr(),{etat:i,enCours:s,activer:o,desactiver:a,iOS:l,installee:c}=M2(t),[h,p]=R.useState([]),[g,w]=R.useState([]),[I,k]=R.useState(null),[D,T]=R.useState(""),[E,y]=R.useState(!1);R.useEffect(()=>{hh().then(p),IA().then(w)},[]),R.useEffect(()=>{T("")},[I]);const b=(n==null?void 0:n.clubsSuivis)||[],M=R.useMemo(()=>{var A;if(I==="nation")return wc(g,D);const P=(A=n==null?void 0:n.clubFavori)==null?void 0:A.id,N=wc(h,D);return I==="suivis"?N.filter(ie=>ie.id!==P):N},[I,h,g,D,n]),F=P=>{var N;r({notifications:{...(n==null?void 0:n.notifications)||{},[P]:!((N=n==null?void 0:n.notifications)!=null&&N[P])}})},S=P=>{if(I==="favori"){r({clubFavori:P,clubsSuivis:b.filter(A=>A.id!==P.id)}),k(null);return}if(I==="nation"){r({nationFavorite:P}),k(null);return}b.some(A=>A.id===P.id)?r({clubsSuivis:b.filter(A=>A.id!==P.id)}):b.length<di&&r({clubsSuivis:[...b,P]})};return f.jsxs(f.Fragment,{children:[f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Tes clubs"})}),f.jsxs("div",{className:"etiquettes",children:[f.jsxs("button",{className:"etiquette etiquette--favori",onClick:()=>k("favori"),children:[((v=n==null?void 0:n.clubFavori)==null?void 0:v.court)||((C=n==null?void 0:n.clubFavori)==null?void 0:C.nom)||"Choisir"," · favori"]}),b.map(P=>f.jsx("button",{className:"etiquette",onClick:()=>k("suivis"),children:P.court||P.nom},P.id)),b.length<di&&f.jsxs("button",{className:"etiquette etiquette--ajout",onClick:()=>k("suivis"),children:["+ Ajouter (",di-b.length," restants)"]})]}),f.jsx("div",{className:"etiquettes etiquettes--suite",children:f.jsxs("button",{className:"etiquette etiquette--favori",onClick:()=>k("nation"),children:[((x=n==null?void 0:n.nationFavorite)==null?void 0:x.nom)||"Choisir"," · sélection"]})})]}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Notifications"})}),i==="indisponible"&&f.jsx("p",{className:"avis",children:l&&!c?"Ajoute d'abord l'app à ton écran d'accueil : sur iPhone, c'est la seule façon de recevoir les notifications.":"Ce navigateur ne gère pas les notifications."}),i==="refuse"&&f.jsx("p",{className:"avis",children:"Les notifications sont bloquées pour ce site. Réactive-les dans les réglages de ton navigateur."}),i==="inactif"&&f.jsx("button",{className:"bouton-plein",onClick:o,disabled:s,children:s?"Activation…":"Activer les notifications"}),i==="actif"&&f.jsxs(f.Fragment,{children:[f.jsx("ul",{className:"lignes",children:L2.map(([P,N,A])=>{var ie,G;return f.jsxs("li",{className:"ligne",children:[f.jsxs("div",{children:[f.jsx("p",{className:"ligne__titre",children:N}),f.jsx("p",{className:"ligne__detail",children:A})]}),f.jsx("button",{className:`bascule${(ie=n==null?void 0:n.notifications)!=null&&ie[P]?" bascule--on":""}`,onClick:()=>F(P),role:"switch","aria-checked":!!((G=n==null?void 0:n.notifications)!=null&&G[P]),"aria-label":N})]},P)})}),f.jsx("button",{className:"bouton-discret",onClick:a,disabled:s,children:"Ne plus rien recevoir sur cet appareil"})]})]}),f.jsxs("section",{className:"section",children:[f.jsx("div",{className:"section__tete",children:f.jsx("h2",{className:"section__titre",children:"Ton compte"})}),f.jsx("p",{className:"avis avis--doux",children:t==null?void 0:t.email}),f.jsx("button",{className:"bouton-discret",onClick:()=>y(!0),children:"Se déconnecter"})]}),I&&f.jsx("div",{className:"selecteur",onClick:()=>k(null),children:f.jsxs("div",{className:"selecteur__panneau",onClick:P=>P.stopPropagation(),children:[f.jsxs("div",{className:"selecteur__tete",children:[f.jsx("h3",{className:"selecteur__titre",children:I==="favori"?"Ton club":I==="nation"?"Ta sélection":"Tes clubs suivis"}),f.jsx("button",{className:"selecteur__fermer",onClick:()=>k(null),"aria-label":"Fermer",children:"×"})]}),f.jsx("input",{className:"selecteur__recherche",type:"search",value:D,onChange:P=>T(P.target.value),placeholder:"Chercher",autoFocus:!0}),f.jsx("ul",{className:"selecteur__liste",children:M.map(P=>{var ie,G;const N=I==="favori"?((ie=n==null?void 0:n.clubFavori)==null?void 0:ie.id)===P.id:I==="nation"?((G=n==null?void 0:n.nationFavorite)==null?void 0:G.id)===P.id:b.some(Kt=>Kt.id===P.id),A=I==="suivis"&&!N&&b.length>=di;return f.jsx("li",{children:f.jsxs("button",{className:`selecteur__choix${N?" selecteur__choix--actif":""}`,onClick:()=>S(P),disabled:A,children:[P.nom,N&&I==="suivis"&&f.jsx("span",{className:"selecteur__marque",children:"Retirer"})]})},P.id)})})]})}),f.jsx(lg,{ouvert:E,message:"Te déconnecter de cet appareil ?",texteConfirmer:"Se déconnecter",onConfirm:()=>{y(!1),e()},onCancel:()=>y(!1)})]})}function F2(){const{utilisateur:t,chargement:e,deconnexion:n}=dl(),{preferences:r,chargement:i}=Qr(),{actus:s}=sg(),o=sL(s),[a,l]=R.useState(!1),[c,h]=R.useState(null),p=!e&&!i;if(!a)return f.jsx(aL,{pret:p,onTermine:()=>l(!0)});if(!t)return f.jsx(_L,{});if(r&&!r.onboardingTermine)return f.jsx(yL,{});const g=(t.displayName||t.email||"?").charAt(0).toUpperCase();return f.jsxs("div",{className:"shell",children:[f.jsx(cL,{}),f.jsx("header",{className:"shell__header",children:f.jsxs("div",{className:"marque",children:[f.jsxs("h1",{className:"marque__logo",children:["Ici c'est ",f.jsx("em",{children:"ton"})," Paris"]}),f.jsx("span",{className:"marque__profil","aria-label":"Profil",children:g})]})}),f.jsxs("main",{className:"shell__main",children:[f.jsxs(rN,{children:[f.jsx(En,{path:"/",element:f.jsx(OL,{onOuvrirArticle:h})}),f.jsx(En,{path:"/matchs",element:f.jsx(BL,{})}),f.jsx(En,{path:"/compo",element:f.jsx(qL,{})}),f.jsx(En,{path:"/classement",element:f.jsx(JL,{})}),f.jsx(En,{path:"/effectif",element:f.jsx(nj,{})}),f.jsx(En,{path:"/chouchou",element:f.jsx(rj,{onOuvrirArticle:h})}),f.jsx(En,{path:"/mercato",element:f.jsx(dj,{})}),f.jsx(En,{path:"/reglages",element:f.jsx(j2,{})}),f.jsx(En,{path:"*",element:f.jsx(tN,{to:"/",replace:!0})})]}),f.jsx("div",{className:"shell__fin"})]}),f.jsx(dL,{}),f.jsx(fL,{actu:c,onFermer:()=>h(null)}),f.jsx(mL,{ouvert:o.ouvert,actus:o.actus,onFermer:o.fermer,onOuvrirArticle:h}),f.jsx(gL,{})]})}function U2(){return f.jsx(hN,{basename:"/Ton-paris/",children:f.jsx(iL,{children:f.jsx(tL,{children:f.jsx(nL,{children:f.jsx(F2,{})})})})})}pR({onNeedRefresh(){},onOfflineReady(){}});iT(document.getElementById("root")).render(f.jsx(R.StrictMode,{children:f.jsx(U2,{})}));
