function nh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Pd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nd={exports:{}},io={},Od={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ea=Symbol.for("react.element"),rh=Symbol.for("react.portal"),ah=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),oh=Symbol.for("react.profiler"),lh=Symbol.for("react.provider"),sh=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),ch=Symbol.for("react.suspense"),fh=Symbol.for("react.memo"),dh=Symbol.for("react.lazy"),Nc=Symbol.iterator;function mh(e){return e===null||typeof e!="object"?null:(e=Nc&&e[Nc]||e["@@iterator"],typeof e=="function"?e:null)}var Td={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Id=Object.assign,Rd={};function mr(e,t,n){this.props=e,this.context=t,this.refs=Rd,this.updater=n||Td}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zd(){}zd.prototype=mr.prototype;function au(e,t,n){this.props=e,this.context=t,this.refs=Rd,this.updater=n||Td}var iu=au.prototype=new zd;iu.constructor=au;Id(iu,mr.prototype);iu.isPureReactComponent=!0;var Oc=Array.isArray,jd=Object.prototype.hasOwnProperty,ou={current:null},Ad={key:!0,ref:!0,__self:!0,__source:!0};function Ld(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)jd.call(t,r)&&!Ad.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:Ea,type:e,key:i,ref:o,props:a,_owner:ou.current}}function ph(e,t){return{$$typeof:Ea,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ea}function hh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tc=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hh(""+e.key):t.toString(36)}function fi(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ea:case rh:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+nl(o,0):r,Oc(a)?(n="",e!=null&&(n=e.replace(Tc,"$&/")+"/"),fi(a,t,n,"",function(u){return u})):a!=null&&(lu(a)&&(a=ph(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Tc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Oc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+nl(i,l);o+=fi(i,t,n,s,a)}else if(s=mh(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+nl(i,l++),o+=fi(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function La(e,t,n){if(e==null)return e;var r=[],a=0;return fi(e,r,"","",function(i){return t.call(n,i,a++)}),r}function vh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},di={transition:null},yh={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:di,ReactCurrentOwner:ou};$.Children={map:La,forEach:function(e,t,n){La(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return La(e,function(){t++}),t},toArray:function(e){return La(e,function(t){return t})||[]},only:function(e){if(!lu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=mr;$.Fragment=ah;$.Profiler=oh;$.PureComponent=au;$.StrictMode=ih;$.Suspense=ch;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yh;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Id({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ou.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)jd.call(t,s)&&!Ad.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ea,type:e.type,key:a,ref:i,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:sh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lh,_context:e},e.Consumer=e};$.createElement=Ld;$.createFactory=function(e){var t=Ld.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:uh,render:e}};$.isValidElement=lu;$.lazy=function(e){return{$$typeof:dh,_payload:{_status:-1,_result:e},_init:vh}};$.memo=function(e,t){return{$$typeof:fh,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=di.transition;di.transition={};try{e()}finally{di.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Pe.current.useCallback(e,t)};$.useContext=function(e){return Pe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};$.useEffect=function(e,t){return Pe.current.useEffect(e,t)};$.useId=function(){return Pe.current.useId()};$.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Pe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};$.useRef=function(e){return Pe.current.useRef(e)};$.useState=function(e){return Pe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Pe.current.useTransition()};$.version="18.2.0";Od.exports=$;var _=Od.exports;const oo=Pd(_),Ul=nh({__proto__:null,default:oo},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh=_,wh=Symbol.for("react.element"),xh=Symbol.for("react.fragment"),kh=Object.prototype.hasOwnProperty,Sh=gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ch={key:!0,ref:!0,__self:!0,__source:!0};function $d(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)kh.call(t,r)&&!Ch.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:wh,type:e,key:i,ref:o,props:a,_owner:Sh.current}}io.Fragment=xh;io.jsx=$d;io.jsxs=$d;Nd.exports=io;var w=Nd.exports,Bl={},Md={exports:{}},Be={},Dd={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,z){var j=T.length;T.push(z);e:for(;0<j;){var re=j-1>>>1,de=T[re];if(0<a(de,z))T[re]=z,T[j]=de,j=re;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var z=T[0],j=T.pop();if(j!==z){T[0]=j;e:for(var re=0,de=T.length,ja=de>>>1;re<ja;){var cn=2*(re+1)-1,tl=T[cn],fn=cn+1,Aa=T[fn];if(0>a(tl,j))fn<de&&0>a(Aa,tl)?(T[re]=Aa,T[fn]=j,re=fn):(T[re]=tl,T[cn]=j,re=cn);else if(fn<de&&0>a(Aa,j))T[re]=Aa,T[fn]=j,re=fn;else break e}}return z}function a(T,z){var j=T.sortIndex-z.sortIndex;return j!==0?j:T.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,d=null,h=3,y=!1,g=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=T)r(u),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(u)}}function x(T){if(v=!1,p(T),!g)if(n(s)!==null)g=!0,qo(k);else{var z=n(u);z!==null&&el(x,z.startTime-T)}}function k(T,z){g=!1,v&&(v=!1,m(R),R=-1),y=!0;var j=h;try{for(p(z),d=n(s);d!==null&&(!(d.expirationTime>z)||T&&!qe());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var de=re(d.expirationTime<=z);z=e.unstable_now(),typeof de=="function"?d.callback=de:d===n(s)&&r(s),p(z)}else r(s);d=n(s)}if(d!==null)var ja=!0;else{var cn=n(u);cn!==null&&el(x,cn.startTime-z),ja=!1}return ja}finally{d=null,h=j,y=!1}}var P=!1,E=null,R=-1,U=5,A=-1;function qe(){return!(e.unstable_now()-A<U)}function xr(){if(E!==null){var T=e.unstable_now();A=T;var z=!0;try{z=E(!0,T)}finally{z?kr():(P=!1,E=null)}}else P=!1}var kr;if(typeof c=="function")kr=function(){c(xr)};else if(typeof MessageChannel<"u"){var Pc=new MessageChannel,th=Pc.port2;Pc.port1.onmessage=xr,kr=function(){th.postMessage(null)}}else kr=function(){C(xr,0)};function qo(T){E=T,P||(P=!0,kr())}function el(T,z){R=C(function(){T(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,qo(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var j=h;h=z;try{return T()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,z){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var j=h;h=T;try{return z()}finally{h=j}},e.unstable_scheduleCallback=function(T,z,j){var re=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?re+j:re):j=re,T){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=j+de,T={id:f++,callback:z,priorityLevel:T,startTime:j,expirationTime:de,sortIndex:-1},j>re?(T.sortIndex=j,t(u,T),n(s)===null&&T===n(u)&&(v?(m(R),R=-1):v=!0,el(x,j-re))):(T.sortIndex=de,t(s,T),g||y||(g=!0,qo(k))),T},e.unstable_shouldYield=qe,e.unstable_wrapCallback=function(T){var z=h;return function(){var j=h;h=z;try{return T.apply(this,arguments)}finally{h=j}}}})(Fd);Dd.exports=Fd;var Eh=Dd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=_,Ue=Eh;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bd=new Set,Kr={};function On(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Kr[e]=t,e=0;e<t.length;e++)Bd.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,_h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ic={},Rc={};function bh(e){return Wl.call(Rc,e)?!0:Wl.call(Ic,e)?!1:_h.test(e)?Rc[e]=!0:(Ic[e]=!0,!1)}function Ph(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nh(e,t,n,r){if(t===null||typeof t>"u"||Ph(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var su=/[\-:]([a-z])/g;function uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(su,uu);we[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(su,uu);we[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(su,uu);we[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function cu(e,t,n,r){var a=we.hasOwnProperty(t)?we[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nh(t,n,a,r)&&(n=null),r||a===null?bh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),An=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Vd=Symbol.for("react.context"),du=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),mu=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Yd=Symbol.for("react.offscreen"),zc=Symbol.iterator;function Sr(e){return e===null||typeof e!="object"?null:(e=zc&&e[zc]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,rl;function Rr(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var al=!1;function il(e,t){if(!e||al)return"";al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rr(e):""}function Oh(e){switch(e.tag){case 5:return Rr(e.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return e=il(e.type,!1),e;case 11:return e=il(e.type.render,!1),e;case 1:return e=il(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case An:return"Portal";case Vl:return"Profiler";case fu:return"StrictMode";case Yl:return"Suspense";case Hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vd:return(e.displayName||"Context")+".Consumer";case Wd:return(e._context.displayName||"Context")+".Provider";case du:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mu:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function Th(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ih(e){var t=Hd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ma(e){e._valueTracker||(e._valueTracker=Ih(e))}function Qd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xd(e,t){t=t.checked,t!=null&&cu(e,"checked",t,!1)}function Kl(e,t){Xd(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gl(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ac(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gl(e,t,n){(t!=="number"||Ni(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Gn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Zl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(zr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Kd(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $c(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Da,Zd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rh=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){Rh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$r[t]=$r[e]})});function Jd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$r.hasOwnProperty(e)&&$r[e]?(""+t).trim():t+"px"}function qd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Jd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var zh=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,t){if(t){if(zh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function es(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,Zn=null,Jn=null;function Mc(e){if(e=Pa(e)){if(typeof ns!="function")throw Error(S(280));var t=e.stateNode;t&&(t=fo(t),ns(e.stateNode,e.type,t))}}function em(e){Zn?Jn?Jn.push(e):Jn=[e]:Zn=e}function tm(){if(Zn){var e=Zn,t=Jn;if(Jn=Zn=null,Mc(e),t)for(e=0;e<t.length;e++)Mc(t[e])}}function nm(e,t){return e(t)}function rm(){}var ol=!1;function am(e,t,n){if(ol)return e(t,n);ol=!0;try{return nm(e,t,n)}finally{ol=!1,(Zn!==null||Jn!==null)&&(rm(),tm())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=fo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var rs=!1;if(_t)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{rs=!1}function jh(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Mr=!1,Oi=null,Ti=!1,as=null,Ah={onError:function(e){Mr=!0,Oi=e}};function Lh(e,t,n,r,a,i,o,l,s){Mr=!1,Oi=null,jh.apply(Ah,arguments)}function $h(e,t,n,r,a,i,o,l,s){if(Lh.apply(this,arguments),Mr){if(Mr){var u=Oi;Mr=!1,Oi=null}else throw Error(S(198));Ti||(Ti=!0,as=u)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function im(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dc(e){if(Tn(e)!==e)throw Error(S(188))}function Mh(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Dc(a),e;if(i===r)return Dc(a),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function om(e){return e=Mh(e),e!==null?lm(e):null}function lm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lm(e);if(t!==null)return t;e=e.sibling}return null}var sm=Ue.unstable_scheduleCallback,Fc=Ue.unstable_cancelCallback,Dh=Ue.unstable_shouldYield,Fh=Ue.unstable_requestPaint,ae=Ue.unstable_now,Uh=Ue.unstable_getCurrentPriorityLevel,hu=Ue.unstable_ImmediatePriority,um=Ue.unstable_UserBlockingPriority,Ii=Ue.unstable_NormalPriority,Bh=Ue.unstable_LowPriority,cm=Ue.unstable_IdlePriority,lo=null,yt=null;function Wh(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(lo,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Hh,Vh=Math.log,Yh=Math.LN2;function Hh(e){return e>>>=0,e===0?32:31-(Vh(e)/Yh|0)|0}var Fa=64,Ua=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ri(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=jr(l):(i&=o,i!==0&&(r=jr(i)))}else o=n&~a,o!==0?r=jr(o):i!==0&&(r=jr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),a=1<<n,r|=e[n],t&=~a;return r}function Qh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];s===-1?(!(l&n)||l&r)&&(a[o]=Qh(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fm(){var e=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),e}function ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _a(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function Kh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function vu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var B=0;function dm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mm,yu,pm,hm,vm,os=!1,Ba=[],Vt=null,Yt=null,Ht=null,Jr=new Map,qr=new Map,Mt=[],Gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uc(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function Er(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Pa(t),t!==null&&yu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Zh(e,t,n,r,a){switch(t){case"focusin":return Vt=Er(Vt,e,t,n,r,a),!0;case"dragenter":return Yt=Er(Yt,e,t,n,r,a),!0;case"mouseover":return Ht=Er(Ht,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Jr.set(i,Er(Jr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,qr.set(i,Er(qr.get(i)||null,e,t,n,r,a)),!0}return!1}function ym(e){var t=hn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=im(n),t!==null){e.blockedOn=t,vm(e.priority,function(){pm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ls(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ts=r,n.target.dispatchEvent(r),ts=null}else return t=Pa(n),t!==null&&yu(t),e.blockedOn=n,!1;t.shift()}return!0}function Bc(e,t,n){mi(e)&&n.delete(t)}function Jh(){os=!1,Vt!==null&&mi(Vt)&&(Vt=null),Yt!==null&&mi(Yt)&&(Yt=null),Ht!==null&&mi(Ht)&&(Ht=null),Jr.forEach(Bc),qr.forEach(Bc)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,os||(os=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,Jh)))}function ea(e){function t(a){return _r(a,e)}if(0<Ba.length){_r(Ba[0],e);for(var n=1;n<Ba.length;n++){var r=Ba[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&_r(Vt,e),Yt!==null&&_r(Yt,e),Ht!==null&&_r(Ht,e),Jr.forEach(t),qr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)ym(n),n.blockedOn===null&&Mt.shift()}var qn=Rt.ReactCurrentBatchConfig,zi=!0;function qh(e,t,n,r){var a=B,i=qn.transition;qn.transition=null;try{B=1,gu(e,t,n,r)}finally{B=a,qn.transition=i}}function e1(e,t,n,r){var a=B,i=qn.transition;qn.transition=null;try{B=4,gu(e,t,n,r)}finally{B=a,qn.transition=i}}function gu(e,t,n,r){if(zi){var a=ls(e,t,n,r);if(a===null)yl(e,t,r,ji,n),Uc(e,r);else if(Zh(a,e,t,n,r))r.stopPropagation();else if(Uc(e,r),t&4&&-1<Gh.indexOf(e)){for(;a!==null;){var i=Pa(a);if(i!==null&&mm(i),i=ls(e,t,n,r),i===null&&yl(e,t,r,ji,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else yl(e,t,r,null,n)}}var ji=null;function ls(e,t,n,r){if(ji=null,e=pu(r),e=hn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=im(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ji=e,null}function gm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uh()){case hu:return 1;case um:return 4;case Ii:case Bh:return 16;case cm:return 536870912;default:return 16}default:return 16}}var Ft=null,wu=null,pi=null;function wm(){if(pi)return pi;var e,t=wu,n=t.length,r,a="value"in Ft?Ft.value:Ft.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return pi=a.slice(e,1<r?1-r:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wa(){return!0}function Wc(){return!1}function We(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wa:Wc,this.isPropagationStopped=Wc,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=We(pr),ba=q({},pr,{view:0,detail:0}),t1=We(ba),sl,ul,br,so=q({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ku,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(sl=e.screenX-br.screenX,ul=e.screenY-br.screenY):ul=sl=0,br=e),sl)},movementY:function(e){return"movementY"in e?e.movementY:ul}}),Vc=We(so),n1=q({},so,{dataTransfer:0}),r1=We(n1),a1=q({},ba,{relatedTarget:0}),cl=We(a1),i1=q({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),o1=We(i1),l1=q({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s1=We(l1),u1=q({},pr,{data:0}),Yc=We(u1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d1[e])?!!t[e]:!1}function ku(){return m1}var p1=q({},ba,{key:function(e){if(e.key){var t=c1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ku,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h1=We(p1),v1=q({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hc=We(v1),y1=q({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ku}),g1=We(y1),w1=q({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),x1=We(w1),k1=q({},so,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S1=We(k1),C1=[9,13,27,32],Su=_t&&"CompositionEvent"in window,Dr=null;_t&&"documentMode"in document&&(Dr=document.documentMode);var E1=_t&&"TextEvent"in window&&!Dr,xm=_t&&(!Su||Dr&&8<Dr&&11>=Dr),Qc=String.fromCharCode(32),Xc=!1;function km(e,t){switch(e){case"keyup":return C1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function _1(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(Xc=!0,Qc);case"textInput":return e=t.data,e===Qc&&Xc?null:e;default:return null}}function b1(e,t){if($n)return e==="compositionend"||!Su&&km(e,t)?(e=wm(),pi=wu=Ft=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xm&&t.locale!=="ko"?null:t.data;default:return null}}var P1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!P1[e.type]:t==="textarea"}function Cm(e,t,n,r){em(r),t=Ai(t,"onChange"),0<t.length&&(n=new xu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,ta=null;function N1(e){jm(e,0)}function uo(e){var t=Fn(e);if(Qd(t))return e}function O1(e,t){if(e==="change")return t}var Em=!1;if(_t){var fl;if(_t){var dl="oninput"in document;if(!dl){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),dl=typeof Gc.oninput=="function"}fl=dl}else fl=!1;Em=fl&&(!document.documentMode||9<document.documentMode)}function Zc(){Fr&&(Fr.detachEvent("onpropertychange",_m),ta=Fr=null)}function _m(e){if(e.propertyName==="value"&&uo(ta)){var t=[];Cm(t,ta,e,pu(e)),am(N1,t)}}function T1(e,t,n){e==="focusin"?(Zc(),Fr=t,ta=n,Fr.attachEvent("onpropertychange",_m)):e==="focusout"&&Zc()}function I1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uo(ta)}function R1(e,t){if(e==="click")return uo(t)}function z1(e,t){if(e==="input"||e==="change")return uo(t)}function j1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:j1;function na(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Wl.call(t,a)||!st(e[a],t[a]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qc(e,t){var n=Jc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jc(n)}}function bm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pm(){for(var e=window,t=Ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ni(e.document)}return t}function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function A1(e){var t=Pm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bm(n.ownerDocument.documentElement,n)){if(r!==null&&Cu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=qc(n,i);var o=qc(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L1=_t&&"documentMode"in document&&11>=document.documentMode,Mn=null,ss=null,Ur=null,us=!1;function ef(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;us||Mn==null||Mn!==Ni(r)||(r=Mn,"selectionStart"in r&&Cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&na(Ur,r)||(Ur=r,r=Ai(ss,"onSelect"),0<r.length&&(t=new xu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Va(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},ml={},Nm={};_t&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function co(e){if(ml[e])return ml[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nm)return ml[e]=t[n];return e}var Om=co("animationend"),Tm=co("animationiteration"),Im=co("animationstart"),Rm=co("transitionend"),zm=new Map,tf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){zm.set(e,t),On(t,[e])}for(var pl=0;pl<tf.length;pl++){var hl=tf[pl],$1=hl.toLowerCase(),M1=hl[0].toUpperCase()+hl.slice(1);on($1,"on"+M1)}on(Om,"onAnimationEnd");on(Tm,"onAnimationIteration");on(Im,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(Rm,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function nf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$h(r,t,void 0,e),e.currentTarget=null}function jm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;nf(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;nf(a,l,u),i=s}}}if(Ti)throw e=as,Ti=!1,as=null,e}function H(e,t){var n=t[ps];n===void 0&&(n=t[ps]=new Set);var r=e+"__bubble";n.has(r)||(Am(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),Am(n,e,r,t)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function ra(e){if(!e[Ya]){e[Ya]=!0,Bd.forEach(function(n){n!=="selectionchange"&&(D1.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ya]||(t[Ya]=!0,vl("selectionchange",!1,t))}}function Am(e,t,n,r){switch(gm(t)){case 1:var a=qh;break;case 4:a=e1;break;default:a=gu}n=a.bind(null,t,n,e),a=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function yl(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=hn(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}am(function(){var u=i,f=pu(n),d=[];e:{var h=zm.get(e);if(h!==void 0){var y=xu,g=e;switch(e){case"keypress":if(hi(n)===0)break e;case"keydown":case"keyup":y=h1;break;case"focusin":g="focus",y=cl;break;case"focusout":g="blur",y=cl;break;case"beforeblur":case"afterblur":y=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=r1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=g1;break;case Om:case Tm:case Im:y=o1;break;case Rm:y=x1;break;case"scroll":y=t1;break;case"wheel":y=S1;break;case"copy":case"cut":case"paste":y=s1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Hc}var v=(t&4)!==0,C=!v&&e==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,m!==null&&(x=Zr(c,m),x!=null&&v.push(aa(c,x,p)))),C)break;c=c.return}0<v.length&&(h=new y(h,g,null,n,f),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ts&&(g=n.relatedTarget||n.fromElement)&&(hn(g)||g[bt]))break e;if((y||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?hn(g):null,g!==null&&(C=Tn(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(v=Vc,x="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Hc,x="onPointerLeave",m="onPointerEnter",c="pointer"),C=y==null?h:Fn(y),p=g==null?h:Fn(g),h=new v(x,c+"leave",y,n,f),h.target=C,h.relatedTarget=p,x=null,hn(f)===u&&(v=new v(m,c+"enter",g,n,f),v.target=p,v.relatedTarget=C,x=v),C=x,y&&g)t:{for(v=y,m=g,c=0,p=v;p;p=In(p))c++;for(p=0,x=m;x;x=In(x))p++;for(;0<c-p;)v=In(v),c--;for(;0<p-c;)m=In(m),p--;for(;c--;){if(v===m||m!==null&&v===m.alternate)break t;v=In(v),m=In(m)}v=null}else v=null;y!==null&&rf(d,h,y,v,!1),g!==null&&C!==null&&rf(d,C,g,v,!0)}}e:{if(h=u?Fn(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var k=O1;else if(Kc(h))if(Em)k=z1;else{k=I1;var P=T1}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=R1);if(k&&(k=k(e,u))){Cm(d,k,n,f);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Gl(h,"number",h.value)}switch(P=u?Fn(u):window,e){case"focusin":(Kc(P)||P.contentEditable==="true")&&(Mn=P,ss=u,Ur=null);break;case"focusout":Ur=ss=Mn=null;break;case"mousedown":us=!0;break;case"contextmenu":case"mouseup":case"dragend":us=!1,ef(d,n,f);break;case"selectionchange":if(L1)break;case"keydown":case"keyup":ef(d,n,f)}var E;if(Su)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else $n?km(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(xm&&n.locale!=="ko"&&($n||R!=="onCompositionStart"?R==="onCompositionEnd"&&$n&&(E=wm()):(Ft=f,wu="value"in Ft?Ft.value:Ft.textContent,$n=!0)),P=Ai(u,R),0<P.length&&(R=new Yc(R,e,null,n,f),d.push({event:R,listeners:P}),E?R.data=E:(E=Sm(n),E!==null&&(R.data=E)))),(E=E1?_1(e,n):b1(e,n))&&(u=Ai(u,"onBeforeInput"),0<u.length&&(f=new Yc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=E))}jm(d,t)})}function aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ai(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Zr(e,n),i!=null&&r.unshift(aa(e,i,a)),i=Zr(e,t),i!=null&&r.push(aa(e,i,a))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rf(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Zr(n,i),s!=null&&o.unshift(aa(n,s,l))):a||(s=Zr(n,i),s!=null&&o.push(aa(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var F1=/\r\n?/g,U1=/\u0000|\uFFFD/g;function af(e){return(typeof e=="string"?e:""+e).replace(F1,`
`).replace(U1,"")}function Ha(e,t,n){if(t=af(t),af(e)!==t&&n)throw Error(S(425))}function Li(){}var cs=null,fs=null;function ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ms=typeof setTimeout=="function"?setTimeout:void 0,B1=typeof clearTimeout=="function"?clearTimeout:void 0,of=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof of<"u"?function(e){return of.resolve(null).then(e).catch(V1)}:ms;function V1(e){setTimeout(function(){throw e})}function gl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),ea(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);ea(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),ht="__reactFiber$"+hr,ia="__reactProps$"+hr,bt="__reactContainer$"+hr,ps="__reactEvents$"+hr,Y1="__reactListeners$"+hr,H1="__reactHandles$"+hr;function hn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lf(e);e!==null;){if(n=e[ht])return n;e=lf(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){return e=e[ht]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function fo(e){return e[ia]||null}var hs=[],Un=-1;function ln(e){return{current:e}}function X(e){0>Un||(e.current=hs[Un],hs[Un]=null,Un--)}function Y(e,t){Un++,hs[Un]=e.current,e.current=t}var tn={},Ee=ln(tn),Re=ln(!1),Sn=tn;function ir(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ze(e){return e=e.childContextTypes,e!=null}function $i(){X(Re),X(Ee)}function sf(e,t,n){if(Ee.current!==tn)throw Error(S(168));Y(Ee,t),Y(Re,n)}function Lm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(S(108,Th(e)||"Unknown",a));return q({},n,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,Sn=Ee.current,Y(Ee,e),Y(Re,Re.current),!0}function uf(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Lm(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,X(Re),X(Ee),Y(Ee,e)):X(Re),Y(Re,n)}var kt=null,mo=!1,wl=!1;function $m(e){kt===null?kt=[e]:kt.push(e)}function Q1(e){mo=!0,$m(e)}function sn(){if(!wl&&kt!==null){wl=!0;var e=0,t=B;try{var n=kt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,mo=!1}catch(a){throw kt!==null&&(kt=kt.slice(e+1)),sm(hu,sn),a}finally{B=t,wl=!1}}return null}var Bn=[],Wn=0,Di=null,Fi=0,He=[],Qe=0,Cn=null,St=1,Ct="";function dn(e,t){Bn[Wn++]=Fi,Bn[Wn++]=Di,Di=e,Fi=t}function Mm(e,t,n){He[Qe++]=St,He[Qe++]=Ct,He[Qe++]=Cn,Cn=e;var r=St;e=Ct;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,St=1<<32-ot(t)+a|n<<a|r,Ct=i+e}else St=1<<i|n<<a|r,Ct=e}function Eu(e){e.return!==null&&(dn(e,1),Mm(e,1,0))}function _u(e){for(;e===Di;)Di=Bn[--Wn],Bn[Wn]=null,Fi=Bn[--Wn],Bn[Wn]=null;for(;e===Cn;)Cn=He[--Qe],He[Qe]=null,Ct=He[--Qe],He[Qe]=null,St=He[--Qe],He[Qe]=null}var De=null,Me=null,G=!1,rt=null;function Dm(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Me=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Me=null,!0):!1;default:return!1}}function vs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ys(e){if(G){var t=Me;if(t){var n=t;if(!cf(e,t)){if(vs(e))throw Error(S(418));t=Qt(n.nextSibling);var r=De;t&&cf(e,t)?Dm(r,n):(e.flags=e.flags&-4097|2,G=!1,De=e)}}else{if(vs(e))throw Error(S(418));e.flags=e.flags&-4097|2,G=!1,De=e}}}function ff(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Qa(e){if(e!==De)return!1;if(!G)return ff(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ds(e.type,e.memoizedProps)),t&&(t=Me)){if(vs(e))throw Fm(),Error(S(418));for(;t;)Dm(e,t),t=Qt(t.nextSibling)}if(ff(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=De?Qt(e.stateNode.nextSibling):null;return!0}function Fm(){for(var e=Me;e;)e=Qt(e.nextSibling)}function or(){Me=De=null,G=!1}function bu(e){rt===null?rt=[e]:rt.push(e)}var X1=Rt.ReactCurrentBatchConfig;function tt(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ui=ln(null),Bi=null,Vn=null,Pu=null;function Nu(){Pu=Vn=Bi=null}function Ou(e){var t=Ui.current;X(Ui),e._currentValue=t}function gs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){Bi=e,Pu=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Pu!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(Bi===null)throw Error(S(308));Vn=e,Bi.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var vn=null;function Tu(e){vn===null?vn=[e]:vn.push(e)}function Um(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Tu(t)):(n.next=a.next,a.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Pt(e,n)}return a=r.interleaved,a===null?(t.next=t,Tu(r)):(t.next=a.next,a.next=t),r.interleaved=t,Pt(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vu(e,n)}}function df(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wi(e,t,n,r){var a=e.updateQueue;$t=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=a.baseState;o=0,f=u=s=null,l=i;do{var h=l.lane,y=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(h=t,y=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(y,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(y,d,h):g,h==null)break e;d=q({},d,h);break e;case 2:$t=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,s=d):f=f.next=y,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);_n|=o,e.lanes=o,e.memoizedState=d}}function mf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(S(191,a));a.call(r)}}}var Wm=new Ud.Component().refs;function ws(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var po={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),a=Gt(e),i=Et(r,a);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,a),t!==null&&(lt(t,e,a,r),vi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),a=Gt(e),i=Et(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,a),t!==null&&(lt(t,e,a,r),vi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Gt(e),a=Et(n,r);a.tag=2,t!=null&&(a.callback=t),t=Xt(e,a,r),t!==null&&(lt(t,e,r,n),vi(t,e,r))}};function pf(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!na(n,r)||!na(a,i):!0}function Vm(e,t,n){var r=!1,a=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(a=ze(t)?Sn:Ee.current,r=t.contextTypes,i=(r=r!=null)?ir(e,a):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function hf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function xs(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Wm,Iu(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Ge(i):(i=ze(t)?Sn:Ee.current,a.context=ir(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ws(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&po.enqueueReplaceState(a,a.state,null),Wi(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===Wm&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Xa(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vf(e){var t=e._init;return t(e._payload)}function Ym(e){function t(m,c){if(e){var p=m.deletions;p===null?(m.deletions=[c],m.flags|=16):p.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function a(m,c){return m=Zt(m,c),m.index=0,m.sibling=null,m}function i(m,c,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<c?(m.flags|=2,c):p):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,p,x){return c===null||c.tag!==6?(c=bl(p,m.mode,x),c.return=m,c):(c=a(c,p),c.return=m,c)}function s(m,c,p,x){var k=p.type;return k===Ln?f(m,c,p.props.children,x,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lt&&vf(k)===c.type)?(x=a(c,p.props),x.ref=Pr(m,c,p),x.return=m,x):(x=Si(p.type,p.key,p.props,null,m.mode,x),x.ref=Pr(m,c,p),x.return=m,x)}function u(m,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Pl(p,m.mode,x),c.return=m,c):(c=a(c,p.children||[]),c.return=m,c)}function f(m,c,p,x,k){return c===null||c.tag!==7?(c=kn(p,m.mode,x,k),c.return=m,c):(c=a(c,p),c.return=m,c)}function d(m,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bl(""+c,m.mode,p),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case $a:return p=Si(c.type,c.key,c.props,null,m.mode,p),p.ref=Pr(m,null,c),p.return=m,p;case An:return c=Pl(c,m.mode,p),c.return=m,c;case Lt:var x=c._init;return d(m,x(c._payload),p)}if(zr(c)||Sr(c))return c=kn(c,m.mode,p,null),c.return=m,c;Xa(m,c)}return null}function h(m,c,p,x){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(m,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $a:return p.key===k?s(m,c,p,x):null;case An:return p.key===k?u(m,c,p,x):null;case Lt:return k=p._init,h(m,c,k(p._payload),x)}if(zr(p)||Sr(p))return k!==null?null:f(m,c,p,x,null);Xa(m,p)}return null}function y(m,c,p,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(p)||null,l(c,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $a:return m=m.get(x.key===null?p:x.key)||null,s(c,m,x,k);case An:return m=m.get(x.key===null?p:x.key)||null,u(c,m,x,k);case Lt:var P=x._init;return y(m,c,p,P(x._payload),k)}if(zr(x)||Sr(x))return m=m.get(p)||null,f(c,m,x,k,null);Xa(c,x)}return null}function g(m,c,p,x){for(var k=null,P=null,E=c,R=c=0,U=null;E!==null&&R<p.length;R++){E.index>R?(U=E,E=null):U=E.sibling;var A=h(m,E,p[R],x);if(A===null){E===null&&(E=U);break}e&&E&&A.alternate===null&&t(m,E),c=i(A,c,R),P===null?k=A:P.sibling=A,P=A,E=U}if(R===p.length)return n(m,E),G&&dn(m,R),k;if(E===null){for(;R<p.length;R++)E=d(m,p[R],x),E!==null&&(c=i(E,c,R),P===null?k=E:P.sibling=E,P=E);return G&&dn(m,R),k}for(E=r(m,E);R<p.length;R++)U=y(E,m,R,p[R],x),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?R:U.key),c=i(U,c,R),P===null?k=U:P.sibling=U,P=U);return e&&E.forEach(function(qe){return t(m,qe)}),G&&dn(m,R),k}function v(m,c,p,x){var k=Sr(p);if(typeof k!="function")throw Error(S(150));if(p=k.call(p),p==null)throw Error(S(151));for(var P=k=null,E=c,R=c=0,U=null,A=p.next();E!==null&&!A.done;R++,A=p.next()){E.index>R?(U=E,E=null):U=E.sibling;var qe=h(m,E,A.value,x);if(qe===null){E===null&&(E=U);break}e&&E&&qe.alternate===null&&t(m,E),c=i(qe,c,R),P===null?k=qe:P.sibling=qe,P=qe,E=U}if(A.done)return n(m,E),G&&dn(m,R),k;if(E===null){for(;!A.done;R++,A=p.next())A=d(m,A.value,x),A!==null&&(c=i(A,c,R),P===null?k=A:P.sibling=A,P=A);return G&&dn(m,R),k}for(E=r(m,E);!A.done;R++,A=p.next())A=y(E,m,R,A.value,x),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?R:A.key),c=i(A,c,R),P===null?k=A:P.sibling=A,P=A);return e&&E.forEach(function(xr){return t(m,xr)}),G&&dn(m,R),k}function C(m,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Ln&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case $a:e:{for(var k=p.key,P=c;P!==null;){if(P.key===k){if(k=p.type,k===Ln){if(P.tag===7){n(m,P.sibling),c=a(P,p.props.children),c.return=m,m=c;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lt&&vf(k)===P.type){n(m,P.sibling),c=a(P,p.props),c.ref=Pr(m,P,p),c.return=m,m=c;break e}n(m,P);break}else t(m,P);P=P.sibling}p.type===Ln?(c=kn(p.props.children,m.mode,x,p.key),c.return=m,m=c):(x=Si(p.type,p.key,p.props,null,m.mode,x),x.ref=Pr(m,c,p),x.return=m,m=x)}return o(m);case An:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(m,c.sibling),c=a(c,p.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=Pl(p,m.mode,x),c.return=m,m=c}return o(m);case Lt:return P=p._init,C(m,c,P(p._payload),x)}if(zr(p))return g(m,c,p,x);if(Sr(p))return v(m,c,p,x);Xa(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(m,c.sibling),c=a(c,p),c.return=m,m=c):(n(m,c),c=bl(p,m.mode,x),c.return=m,m=c),o(m)):n(m,c)}return C}var lr=Ym(!0),Hm=Ym(!1),Na={},gt=ln(Na),oa=ln(Na),la=ln(Na);function yn(e){if(e===Na)throw Error(S(174));return e}function Ru(e,t){switch(Y(la,t),Y(oa,e),Y(gt,Na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jl(t,e)}X(gt),Y(gt,t)}function sr(){X(gt),X(oa),X(la)}function Qm(e){yn(la.current);var t=yn(gt.current),n=Jl(t,e.type);t!==n&&(Y(oa,e),Y(gt,n))}function zu(e){oa.current===e&&(X(gt),X(oa))}var Z=ln(0);function Vi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function ju(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var yi=Rt.ReactCurrentDispatcher,kl=Rt.ReactCurrentBatchConfig,En=0,J=null,ue=null,me=null,Yi=!1,Br=!1,sa=0,K1=0;function xe(){throw Error(S(321))}function Au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Lu(e,t,n,r,a,i){if(En=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?q1:ev,e=n(r,a),Br){i=0;do{if(Br=!1,sa=0,25<=i)throw Error(S(301));i+=1,me=ue=null,t.updateQueue=null,yi.current=tv,e=n(r,a)}while(Br)}if(yi.current=Hi,t=ue!==null&&ue.next!==null,En=0,me=ue=J=null,Yi=!1,t)throw Error(S(300));return e}function $u(){var e=sa!==0;return sa=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?J.memoizedState=me=e:me=me.next=e,me}function Ze(){if(ue===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=me===null?J.memoizedState:me.next;if(t!==null)me=t,ue=e;else{if(e===null)throw Error(S(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},me===null?J.memoizedState=me=e:me=me.next=e}return me}function ua(e,t){return typeof t=="function"?t(e):t}function Sl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ue,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var f=u.lane;if((En&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,J.lanes|=f,_n|=f}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,st(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,J.lanes|=i,_n|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);st(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Xm(){}function Km(e,t){var n=J,r=Ze(),a=t(),i=!st(r.memoizedState,a);if(i&&(r.memoizedState=a,Ie=!0),r=r.queue,Mu(Jm.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,ca(9,Zm.bind(null,n,r,a,t),void 0,null),pe===null)throw Error(S(349));En&30||Gm(n,t,a)}return a}function Gm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zm(e,t,n,r){t.value=n,t.getSnapshot=r,qm(t)&&ep(e)}function Jm(e,t,n){return n(function(){qm(t)&&ep(e)})}function qm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function ep(e){var t=Pt(e,1);t!==null&&lt(t,e,1,-1)}function yf(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t.queue=e,e=e.dispatch=J1.bind(null,J,e),[t.memoizedState,e]}function ca(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tp(){return Ze().memoizedState}function gi(e,t,n,r){var a=ft();J.flags|=e,a.memoizedState=ca(1|t,n,void 0,r===void 0?null:r)}function ho(e,t,n,r){var a=Ze();r=r===void 0?null:r;var i=void 0;if(ue!==null){var o=ue.memoizedState;if(i=o.destroy,r!==null&&Au(r,o.deps)){a.memoizedState=ca(t,n,i,r);return}}J.flags|=e,a.memoizedState=ca(1|t,n,i,r)}function gf(e,t){return gi(8390656,8,e,t)}function Mu(e,t){return ho(2048,8,e,t)}function np(e,t){return ho(4,2,e,t)}function rp(e,t){return ho(4,4,e,t)}function ap(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ip(e,t,n){return n=n!=null?n.concat([e]):null,ho(4,4,ap.bind(null,t,e),n)}function Du(){}function op(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Au(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function lp(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Au(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sp(e,t,n){return En&21?(st(n,t)||(n=fm(),J.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function G1(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{B=n,kl.transition=r}}function up(){return Ze().memoizedState}function Z1(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cp(e))fp(t,n);else if(n=Um(e,t,n,r),n!==null){var a=be();lt(n,e,r,a),dp(n,t,r)}}function J1(e,t,n){var r=Gt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cp(e))fp(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,st(l,o)){var s=t.interleaved;s===null?(a.next=a,Tu(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=Um(e,t,a,r),n!==null&&(a=be(),lt(n,e,r,a),dp(n,t,r))}}function cp(e){var t=e.alternate;return e===J||t!==null&&t===J}function fp(e,t){Br=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vu(e,n)}}var Hi={readContext:Ge,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},q1={readContext:Ge,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:gf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,gi(4194308,4,ap.bind(null,t,e),n)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return gi(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z1.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:yf,useDebugValue:Du,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=yf(!1),t=e[0];return e=G1.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,a=ft();if(G){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),pe===null)throw Error(S(349));En&30||Gm(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,gf(Jm.bind(null,r,i,e),[e]),r.flags|=2048,ca(9,Zm.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=pe.identifierPrefix;if(G){var n=Ct,r=St;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=K1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ev={readContext:Ge,useCallback:op,useContext:Ge,useEffect:Mu,useImperativeHandle:ip,useInsertionEffect:np,useLayoutEffect:rp,useMemo:lp,useReducer:Sl,useRef:tp,useState:function(){return Sl(ua)},useDebugValue:Du,useDeferredValue:function(e){var t=Ze();return sp(t,ue.memoizedState,e)},useTransition:function(){var e=Sl(ua)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Xm,useSyncExternalStore:Km,useId:up,unstable_isNewReconciler:!1},tv={readContext:Ge,useCallback:op,useContext:Ge,useEffect:Mu,useImperativeHandle:ip,useInsertionEffect:np,useLayoutEffect:rp,useMemo:lp,useReducer:Cl,useRef:tp,useState:function(){return Cl(ua)},useDebugValue:Du,useDeferredValue:function(e){var t=Ze();return ue===null?t.memoizedState=e:sp(t,ue.memoizedState,e)},useTransition:function(){var e=Cl(ua)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Xm,useSyncExternalStore:Km,useId:up,unstable_isNewReconciler:!1};function ur(e,t){try{var n="",r=t;do n+=Oh(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function El(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ks(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nv=typeof WeakMap=="function"?WeakMap:Map;function mp(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xi||(Xi=!0,Is=r),ks(e,t)},n}function pp(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){ks(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ks(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function wf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nv;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=vv.bind(null,e,t,n),t.then(e,e))}function xf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kf(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e)}var rv=Rt.ReactCurrentOwner,Ie=!1;function _e(e,t,n,r){t.child=e===null?Hm(t,null,n,r):lr(t,e.child,n,r)}function Sf(e,t,n,r,a){n=n.render;var i=t.ref;return er(t,a),r=Lu(e,t,n,r,i,a),n=$u(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nt(e,t,a)):(G&&n&&Eu(t),t.flags|=1,_e(e,t,r,a),t.child)}function Cf(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Qu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hp(e,t,i,r,a)):(e=Si(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,r)&&e.ref===t.ref)return Nt(e,t,a)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(na(i,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Nt(e,t,a)}return Ss(e,t,n,r,a)}function vp(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Hn,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Hn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Y(Hn,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Y(Hn,$e),$e|=r;return _e(e,t,a,n),t.child}function yp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ss(e,t,n,r,a){var i=ze(n)?Sn:Ee.current;return i=ir(t,i),er(t,a),n=Lu(e,t,n,r,i,a),r=$u(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nt(e,t,a)):(G&&r&&Eu(t),t.flags|=1,_e(e,t,n,a),t.child)}function Ef(e,t,n,r,a){if(ze(n)){var i=!0;Mi(t)}else i=!1;if(er(t,a),t.stateNode===null)wi(e,t),Vm(t,n,r),xs(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ge(u):(u=ze(n)?Sn:Ee.current,u=ir(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&hf(t,o,r,u),$t=!1;var h=t.memoizedState;o.state=h,Wi(t,r,o,a),s=t.memoizedState,l!==r||h!==s||Re.current||$t?(typeof f=="function"&&(ws(t,n,f,r),s=t.memoizedState),(l=$t||pf(t,n,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Bm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tt(t.type,l),o.props=u,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ge(s):(s=ze(n)?Sn:Ee.current,s=ir(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&hf(t,o,r,s),$t=!1,h=t.memoizedState,o.state=h,Wi(t,r,o,a);var g=t.memoizedState;l!==d||h!==g||Re.current||$t?(typeof y=="function"&&(ws(t,n,y,r),g=t.memoizedState),(u=$t||pf(t,n,u,r,h,g,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Cs(e,t,n,r,i,a)}function Cs(e,t,n,r,a,i){yp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&uf(t,n,!1),Nt(e,t,i);r=t.stateNode,rv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=lr(t,e.child,null,i),t.child=lr(t,null,l,i)):_e(e,t,l,i),t.memoizedState=r.state,a&&uf(t,n,!0),t.child}function gp(e){var t=e.stateNode;t.pendingContext?sf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sf(e,t.context,!1),Ru(e,t.containerInfo)}function _f(e,t,n,r,a){return or(),bu(a),t.flags|=256,_e(e,t,n,r),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function wp(e,t,n){var r=t.pendingProps,a=Z.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Y(Z,a&1),e===null)return ys(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=go(o,r,0,null),e=kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=_s(n),t.memoizedState=Es,e):Fu(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return av(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Zt(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Zt(l,i):(i=kn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?_s(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Es,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fu(e,t){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ka(e,t,n,r){return r!==null&&bu(r),lr(t,e.child,null,n),e=Fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function av(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=El(Error(S(422))),Ka(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=go({mode:"visible",children:r.children},a,0,null),i=kn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&lr(t,e.child,null,o),t.child.memoizedState=_s(o),t.memoizedState=Es,i);if(!(t.mode&1))return Ka(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(S(419)),r=El(i,r,void 0),Ka(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ie||l){if(r=pe,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Pt(e,a),lt(r,e,a,-1))}return Hu(),r=El(Error(S(421))),Ka(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=yv.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Me=Qt(a.nextSibling),De=t,G=!0,rt=null,e!==null&&(He[Qe++]=St,He[Qe++]=Ct,He[Qe++]=Cn,St=e.id,Ct=e.overflow,Cn=t),t=Fu(t,r.children),t.flags|=4096,t)}function bf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gs(e.return,t,n)}function _l(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function xp(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(_e(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bf(e,n,t);else if(e.tag===19)bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(Z,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Vi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),_l(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Vi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}_l(t,!0,n,null,i);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iv(e,t,n){switch(t.tag){case 3:gp(t),or();break;case 5:Qm(t);break;case 1:ze(t.type)&&Mi(t);break;case 4:Ru(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Y(Ui,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?wp(e,t,n):(Y(Z,Z.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);Y(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xp(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,vp(e,t,n)}return Nt(e,t,n)}var kp,bs,Sp,Cp;kp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};Sp=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,yn(gt.current);var i=null;switch(n){case"input":a=Xl(e,a),r=Xl(e,r),i=[];break;case"select":a=q({},a,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":a=Zl(e,a),r=Zl(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Li)}ql(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Cp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ov(e,t,n){var r=t.pendingProps;switch(_u(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return ze(t.type)&&$i(),ke(t),null;case 3:return r=t.stateNode,sr(),X(Re),X(Ee),ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(js(rt),rt=null))),bs(e,t),ke(t),null;case 5:zu(t);var a=yn(la.current);if(n=t.type,e!==null&&t.stateNode!=null)Sp(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ke(t),null}if(e=yn(gt.current),Qa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ht]=t,r[ia]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(a=0;a<Ar.length;a++)H(Ar[a],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":jc(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Lc(r,i),H("invalid",r)}ql(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ha(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ha(r.textContent,l,e),a=["children",""+l]):Kr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Ma(r),Ac(r,i,!0);break;case"textarea":Ma(r),$c(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Li)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ht]=t,e[ia]=r,kp(e,t,!1,!1),t.stateNode=e;e:{switch(o=es(n,r),n){case"dialog":H("cancel",e),H("close",e),a=r;break;case"iframe":case"object":case"embed":H("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ar.length;a++)H(Ar[a],e);a=r;break;case"source":H("error",e),a=r;break;case"img":case"image":case"link":H("error",e),H("load",e),a=r;break;case"details":H("toggle",e),a=r;break;case"input":jc(e,r),a=Xl(e,r),H("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Lc(e,r),a=Zl(e,r),H("invalid",e);break;default:a=r}ql(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?qd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Gr(e,s):typeof s=="number"&&Gr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&cu(e,i,s,o))}switch(n){case"input":Ma(e),Ac(e,r,!1);break;case"textarea":Ma(e),$c(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)Cp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=yn(la.current),yn(gt.current),Qa(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(i=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:Ha(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ha(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return ke(t),null;case 13:if(X(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Me!==null&&t.mode&1&&!(t.flags&128))Fm(),or(),t.flags|=98560,i=!1;else if(i=Qa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[ht]=t}else or(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),i=!1}else rt!==null&&(js(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ce===0&&(ce=3):Hu())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return sr(),bs(e,t),e===null&&ra(t.stateNode.containerInfo),ke(t),null;case 10:return Ou(t.type._context),ke(t),null;case 17:return ze(t.type)&&$i(),ke(t),null;case 19:if(X(Z),i=t.memoizedState,i===null)return ke(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Nr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vi(e),o!==null){for(t.flags|=128,Nr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>cr&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Vi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!G)return ke(t),null}else 2*ae()-i.renderingStartTime>cr&&n!==1073741824&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=Z.current,Y(Z,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return Yu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function lv(e,t){switch(_u(t),t.tag){case 1:return ze(t.type)&&$i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),X(Re),X(Ee),ju(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zu(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return sr(),null;case 10:return Ou(t.type._context),null;case 22:case 23:return Yu(),null;case 24:return null;default:return null}}var Ga=!1,Ce=!1,sv=typeof WeakSet=="function"?WeakSet:Set,O=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ps(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Pf=!1;function uv(e,t){if(cs=zi,e=Pm(),Cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var y;d!==n||a!==0&&d.nodeType!==3||(l=o+a),d!==i||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===e)break t;if(h===n&&++u===a&&(l=o),h===i&&++f===r&&(s=o),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(fs={focusedElem:e,selectionRange:n},zi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,C=g.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:tt(t.type,v),C);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){ee(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return g=Pf,Pf=!1,g}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Ps(t,n,i)}a=a.next}while(a!==r)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ns(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ep(e){var t=e.alternate;t!==null&&(e.alternate=null,Ep(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[ia],delete t[ps],delete t[Y1],delete t[H1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _p(e){return e.tag===5||e.tag===3||e.tag===4}function Nf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Li));else if(r!==4&&(e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}function Ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ts(e,t,n),e=e.sibling;e!==null;)Ts(e,t,n),e=e.sibling}var ve=null,nt=!1;function jt(e,t,n){for(n=n.child;n!==null;)bp(e,t,n),n=n.sibling}function bp(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(lo,n)}catch{}switch(n.tag){case 5:Ce||Yn(n,t);case 6:var r=ve,a=nt;ve=null,jt(e,t,n),ve=r,nt=a,ve!==null&&(nt?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(nt?(e=ve,n=n.stateNode,e.nodeType===8?gl(e.parentNode,n):e.nodeType===1&&gl(e,n),ea(e)):gl(ve,n.stateNode));break;case 4:r=ve,a=nt,ve=n.stateNode.containerInfo,nt=!0,jt(e,t,n),ve=r,nt=a;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ps(n,t,o),a=a.next}while(a!==r)}jt(e,t,n);break;case 1:if(!Ce&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,t,l)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,jt(e,t,n),Ce=r):jt(e,t,n);break;default:jt(e,t,n)}}function Of(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sv),t.forEach(function(r){var a=gv.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,nt=!1;break e;case 3:ve=l.stateNode.containerInfo,nt=!0;break e;case 4:ve=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(ve===null)throw Error(S(160));bp(i,o,a),ve=null,nt=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){ee(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pp(t,e),t=t.sibling}function Pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),ut(e),r&4){try{Wr(3,e,e.return),vo(3,e)}catch(v){ee(e,e.return,v)}try{Wr(5,e,e.return)}catch(v){ee(e,e.return,v)}}break;case 1:et(t,e),ut(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(et(t,e),ut(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var a=e.stateNode;try{Gr(a,"")}catch(v){ee(e,e.return,v)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Xd(a,i),es(l,o);var u=es(l,i);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?qd(a,d):f==="dangerouslySetInnerHTML"?Zd(a,d):f==="children"?Gr(a,d):cu(a,f,d,u)}switch(l){case"input":Kl(a,i);break;case"textarea":Kd(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Gn(a,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?Gn(a,!!i.multiple,i.defaultValue,!0):Gn(a,!!i.multiple,i.multiple?[]:"",!1))}a[ia]=i}catch(v){ee(e,e.return,v)}}break;case 6:if(et(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(v){ee(e,e.return,v)}}break;case 3:if(et(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(t.containerInfo)}catch(v){ee(e,e.return,v)}break;case 4:et(t,e),ut(e);break;case 13:et(t,e),ut(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Wu=ae())),r&4&&Of(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||f,et(t,e),Ce=u):et(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(d=O=f;O!==null;){switch(h=O,y=h.child,h.tag){case 0:case 11:case 14:case 15:Wr(4,h,h.return);break;case 1:Yn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){ee(r,n,v)}}break;case 5:Yn(h,h.return);break;case 22:if(h.memoizedState!==null){If(d);continue}}y!==null?(y.return=h,O=y):If(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Jd("display",o))}catch(v){ee(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ee(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:et(t,e),ut(e),r&4&&Of(e);break;case 21:break;default:et(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_p(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Gr(a,""),r.flags&=-33);var i=Nf(e);Ts(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nf(e);Os(e,l,o);break;default:throw Error(S(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cv(e,t,n){O=e,Np(e)}function Np(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var a=O,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Ga;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||Ce;l=Ga;var u=Ce;if(Ga=o,(Ce=s)&&!u)for(O=a;O!==null;)o=O,s=o.child,o.tag===22&&o.memoizedState!==null?Rf(a):s!==null?(s.return=o,O=s):Rf(a);for(;i!==null;)O=i,Np(i),i=i.sibling;O=a,Ga=l,Ce=u}Tf(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,O=i):Tf(e)}}function Tf(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&mf(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mf(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ea(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ce||t.flags&512&&Ns(t)}catch(h){ee(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function If(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Rf(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vo(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){ee(t,a,s)}}var i=t.return;try{Ns(t)}catch(s){ee(t,i,s)}break;case 5:var o=t.return;try{Ns(t)}catch(s){ee(t,o,s)}}}catch(s){ee(t,t.return,s)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var fv=Math.ceil,Qi=Rt.ReactCurrentDispatcher,Uu=Rt.ReactCurrentOwner,Ke=Rt.ReactCurrentBatchConfig,M=0,pe=null,le=null,ge=0,$e=0,Hn=ln(0),ce=0,fa=null,_n=0,yo=0,Bu=0,Vr=null,Te=null,Wu=0,cr=1/0,xt=null,Xi=!1,Is=null,Kt=null,Za=!1,Ut=null,Ki=0,Yr=0,Rs=null,xi=-1,ki=0;function be(){return M&6?ae():xi!==-1?xi:xi=ae()}function Gt(e){return e.mode&1?M&2&&ge!==0?ge&-ge:X1.transition!==null?(ki===0&&(ki=fm()),ki):(e=B,e!==0||(e=window.event,e=e===void 0?16:gm(e.type)),e):1}function lt(e,t,n,r){if(50<Yr)throw Yr=0,Rs=null,Error(S(185));_a(e,n,r),(!(M&2)||e!==pe)&&(e===pe&&(!(M&2)&&(yo|=n),ce===4&&Dt(e,ge)),je(e,r),n===1&&M===0&&!(t.mode&1)&&(cr=ae()+500,mo&&sn()))}function je(e,t){var n=e.callbackNode;Xh(e,t);var r=Ri(e,e===pe?ge:0);if(r===0)n!==null&&Fc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fc(n),t===1)e.tag===0?Q1(zf.bind(null,e)):$m(zf.bind(null,e)),W1(function(){!(M&6)&&sn()}),n=null;else{switch(dm(r)){case 1:n=hu;break;case 4:n=um;break;case 16:n=Ii;break;case 536870912:n=cm;break;default:n=Ii}n=Lp(n,Op.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Op(e,t){if(xi=-1,ki=0,M&6)throw Error(S(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=Ri(e,e===pe?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gi(e,r);else{t=r;var a=M;M|=2;var i=Ip();(pe!==e||ge!==t)&&(xt=null,cr=ae()+500,xn(e,t));do try{pv();break}catch(l){Tp(e,l)}while(1);Nu(),Qi.current=i,M=a,le!==null?t=0:(pe=null,ge=0,t=ce)}if(t!==0){if(t===2&&(a=is(e),a!==0&&(r=a,t=zs(e,a))),t===1)throw n=fa,xn(e,0),Dt(e,r),je(e,ae()),n;if(t===6)Dt(e,r);else{if(a=e.current.alternate,!(r&30)&&!dv(a)&&(t=Gi(e,r),t===2&&(i=is(e),i!==0&&(r=i,t=zs(e,i))),t===1))throw n=fa,xn(e,0),Dt(e,r),je(e,ae()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:mn(e,Te,xt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Wu+500-ae(),10<t)){if(Ri(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ms(mn.bind(null,e,Te,xt),t);break}mn(e,Te,xt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-ot(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fv(r/1960))-r,10<r){e.timeoutHandle=ms(mn.bind(null,e,Te,xt),r);break}mn(e,Te,xt);break;case 5:mn(e,Te,xt);break;default:throw Error(S(329))}}}return je(e,ae()),e.callbackNode===n?Op.bind(null,e):null}function zs(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Gi(e,t),e!==2&&(t=Te,Te=n,t!==null&&js(t)),e}function js(e){Te===null?Te=e:Te.push.apply(Te,e)}function dv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!st(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Bu,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function zf(e){if(M&6)throw Error(S(327));tr();var t=Ri(e,0);if(!(t&1))return je(e,ae()),null;var n=Gi(e,t);if(e.tag!==0&&n===2){var r=is(e);r!==0&&(t=r,n=zs(e,r))}if(n===1)throw n=fa,xn(e,0),Dt(e,t),je(e,ae()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Te,xt),je(e,ae()),null}function Vu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(cr=ae()+500,mo&&sn())}}function bn(e){Ut!==null&&Ut.tag===0&&!(M&6)&&tr();var t=M;M|=1;var n=Ke.transition,r=B;try{if(Ke.transition=null,B=1,e)return e()}finally{B=r,Ke.transition=n,M=t,!(M&6)&&sn()}}function Yu(){$e=Hn.current,X(Hn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B1(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(_u(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$i();break;case 3:sr(),X(Re),X(Ee),ju();break;case 5:zu(r);break;case 4:sr();break;case 13:X(Z);break;case 19:X(Z);break;case 10:Ou(r.type._context);break;case 22:case 23:Yu()}n=n.return}if(pe=e,le=e=Zt(e.current,null),ge=$e=t,ce=0,fa=null,Bu=yo=_n=0,Te=Vr=null,vn!==null){for(t=0;t<vn.length;t++)if(n=vn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}vn=null}return e}function Tp(e,t){do{var n=le;try{if(Nu(),yi.current=Hi,Yi){for(var r=J.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Yi=!1}if(En=0,me=ue=J=null,Br=!1,sa=0,Uu.current=null,n===null||n.return===null){ce=1,fa=t,le=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=ge,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=xf(o);if(y!==null){y.flags&=-257,kf(y,o,l,i,t),y.mode&1&&wf(i,u,t),t=y,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){wf(i,u,t),Hu();break e}s=Error(S(426))}}else if(G&&l.mode&1){var C=xf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),kf(C,o,l,i,t),bu(ur(s,l));break e}}i=s=ur(s,l),ce!==4&&(ce=2),Vr===null?Vr=[i]:Vr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=mp(i,s,t);df(i,m);break e;case 1:l=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Kt===null||!Kt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=pp(i,l,t);df(i,x);break e}}i=i.return}while(i!==null)}zp(n)}catch(k){t=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function Ip(){var e=Qi.current;return Qi.current=Hi,e===null?Hi:e}function Hu(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(_n&268435455)&&!(yo&268435455)||Dt(pe,ge)}function Gi(e,t){var n=M;M|=2;var r=Ip();(pe!==e||ge!==t)&&(xt=null,xn(e,t));do try{mv();break}catch(a){Tp(e,a)}while(1);if(Nu(),M=n,Qi.current=r,le!==null)throw Error(S(261));return pe=null,ge=0,ce}function mv(){for(;le!==null;)Rp(le)}function pv(){for(;le!==null&&!Dh();)Rp(le)}function Rp(e){var t=Ap(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?zp(e):le=t,Uu.current=null}function zp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lv(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=ov(n,t,$e),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function mn(e,t,n){var r=B,a=Ke.transition;try{Ke.transition=null,B=1,hv(e,t,n,r)}finally{Ke.transition=a,B=r}return null}function hv(e,t,n,r){do tr();while(Ut!==null);if(M&6)throw Error(S(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Kh(e,i),e===pe&&(le=pe=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,Lp(Ii,function(){return tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ke.transition,Ke.transition=null;var o=B;B=1;var l=M;M|=4,Uu.current=null,uv(e,n),Pp(n,e),A1(fs),zi=!!cs,fs=cs=null,e.current=n,cv(n),Fh(),M=l,B=o,Ke.transition=i}else e.current=n;if(Za&&(Za=!1,Ut=e,Ki=a),i=e.pendingLanes,i===0&&(Kt=null),Wh(n.stateNode),je(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Xi)throw Xi=!1,e=Is,Is=null,e;return Ki&1&&e.tag!==0&&tr(),i=e.pendingLanes,i&1?e===Rs?Yr++:(Yr=0,Rs=e):Yr=0,sn(),null}function tr(){if(Ut!==null){var e=dm(Ki),t=Ke.transition,n=B;try{if(Ke.transition=null,B=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,Ki=0,M&6)throw Error(S(331));var a=M;for(M|=4,O=e.current;O!==null;){var i=O,o=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:Wr(8,f,i)}var d=f.child;if(d!==null)d.return=f,O=d;else for(;O!==null;){f=O;var h=f.sibling,y=f.return;if(Ep(f),f===u){O=null;break}if(h!==null){h.return=y,O=h;break}O=y}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}O=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,O=o;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,O=m;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){o=O;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,O=p;else e:for(o=c;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vo(9,l)}}catch(k){ee(l,l.return,k)}if(l===o){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(M=a,sn(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(lo,e)}catch{}r=!0}return r}finally{B=n,Ke.transition=t}}return!1}function jf(e,t,n){t=ur(n,t),t=mp(e,t,1),e=Xt(e,t,1),t=be(),e!==null&&(_a(e,1,t),je(e,t))}function ee(e,t,n){if(e.tag===3)jf(e,e,n);else for(;t!==null;){if(t.tag===3){jf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=ur(n,e),e=pp(t,e,1),t=Xt(t,e,1),e=be(),t!==null&&(_a(t,1,e),je(t,e));break}}t=t.return}}function vv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ge&n)===n&&(ce===4||ce===3&&(ge&130023424)===ge&&500>ae()-Wu?xn(e,0):Bu|=n),je(e,t)}function jp(e,t){t===0&&(e.mode&1?(t=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):t=1);var n=be();e=Pt(e,t),e!==null&&(_a(e,t,n),je(e,n))}function yv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jp(e,n)}function gv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),jp(e,n)}var Ap;Ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,iv(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,G&&t.flags&1048576&&Mm(t,Fi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wi(e,t),e=t.pendingProps;var a=ir(t,Ee.current);er(t,n),a=Lu(null,t,r,e,a,n);var i=$u();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(i=!0,Mi(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Iu(t),a.updater=po,t.stateNode=a,a._reactInternals=t,xs(t,r,e,n),t=Cs(null,t,r,!0,i,n)):(t.tag=0,G&&i&&Eu(t),_e(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wi(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=xv(r),e=tt(r,e),a){case 0:t=Ss(null,t,r,e,n);break e;case 1:t=Ef(null,t,r,e,n);break e;case 11:t=Sf(null,t,r,e,n);break e;case 14:t=Cf(null,t,r,tt(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:tt(r,a),Ss(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:tt(r,a),Ef(e,t,r,a,n);case 3:e:{if(gp(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Bm(e,t),Wi(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=ur(Error(S(423)),t),t=_f(e,t,r,n,a);break e}else if(r!==a){a=ur(Error(S(424)),t),t=_f(e,t,r,n,a);break e}else for(Me=Qt(t.stateNode.containerInfo.firstChild),De=t,G=!0,rt=null,n=Hm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===a){t=Nt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return Qm(t),e===null&&ys(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,ds(r,a)?o=null:i!==null&&ds(r,i)&&(t.flags|=32),yp(e,t),_e(e,t,o,n),t.child;case 6:return e===null&&ys(t),null;case 13:return wp(e,t,n);case 4:return Ru(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:tt(r,a),Sf(e,t,r,a,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Y(Ui,r._currentValue),r._currentValue=o,i!==null)if(st(i.value,o)){if(i.children===a.children&&!Re.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Et(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),gs(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gs(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}_e(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,er(t,n),a=Ge(a),r=r(a),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,a=tt(r,t.pendingProps),a=tt(r.type,a),Cf(e,t,r,a,n);case 15:return hp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:tt(r,a),wi(e,t),t.tag=1,ze(r)?(e=!0,Mi(t)):e=!1,er(t,n),Vm(t,r,a),xs(t,r,a,n),Cs(null,t,r,!0,e,n);case 19:return xp(e,t,n);case 22:return vp(e,t,n)}throw Error(S(156,t.tag))};function Lp(e,t){return sm(e,t)}function wv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new wv(e,t,n,r)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xv(e){if(typeof e=="function")return Qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===du)return 11;if(e===mu)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Si(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Qu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ln:return kn(n.children,a,i,t);case fu:o=8,a|=8;break;case Vl:return e=Xe(12,n,t,a|2),e.elementType=Vl,e.lanes=i,e;case Yl:return e=Xe(13,n,t,a),e.elementType=Yl,e.lanes=i,e;case Hl:return e=Xe(19,n,t,a),e.elementType=Hl,e.lanes=i,e;case Yd:return go(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wd:o=10;break e;case Vd:o=9;break e;case du:o=11;break e;case mu:o=14;break e;case Lt:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Xe(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function kn(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=Yd,e.lanes=n,e.stateNode={isHidden:!1},e}function bl(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function Pl(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kv(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ll(0),this.expirationTimes=ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ll(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Xu(e,t,n,r,a,i,o,l,s){return e=new kv(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Xe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(i),e}function Sv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:An,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $p(e){if(!e)return tn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ze(n))return Lm(e,n,t)}return t}function Mp(e,t,n,r,a,i,o,l,s){return e=Xu(n,r,!0,e,a,i,o,l,s),e.context=$p(null),n=e.current,r=be(),a=Gt(n),i=Et(r,a),i.callback=t??null,Xt(n,i,a),e.current.lanes=a,_a(e,a,r),je(e,r),e}function wo(e,t,n,r){var a=t.current,i=be(),o=Gt(a);return n=$p(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(a,t,o),e!==null&&(lt(e,a,o,i),vi(e,a,o)),o}function Zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){Af(e,t),(e=e.alternate)&&Af(e,t)}function Cv(){return null}var Dp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}xo.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));wo(e,t,null,null)};xo.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){wo(null,e,null,null)}),t[bt]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=hm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&ym(e)}};function Zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lf(){}function Ev(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=Zi(o);i.call(u)}}var o=Mp(t,r,e,0,null,!1,!1,"",Lf);return e._reactRootContainer=o,e[bt]=o.current,ra(e.nodeType===8?e.parentNode:e),bn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=Zi(s);l.call(u)}}var s=Xu(e,0,!1,null,null,!1,!1,"",Lf);return e._reactRootContainer=s,e[bt]=s.current,ra(e.nodeType===8?e.parentNode:e),bn(function(){wo(t,s,n,r)}),s}function So(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=Zi(o);l.call(s)}}wo(t,o,e,a)}else o=Ev(n,t,e,a,r);return Zi(o)}mm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jr(t.pendingLanes);n!==0&&(vu(t,n|1),je(t,ae()),!(M&6)&&(cr=ae()+500,sn()))}break;case 13:bn(function(){var r=Pt(e,1);if(r!==null){var a=be();lt(r,e,1,a)}}),Ku(e,1)}};yu=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=be();lt(t,e,134217728,n)}Ku(e,134217728)}};pm=function(e){if(e.tag===13){var t=Gt(e),n=Pt(e,t);if(n!==null){var r=be();lt(n,e,t,r)}Ku(e,t)}};hm=function(){return B};vm=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};ns=function(e,t,n){switch(t){case"input":if(Kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=fo(r);if(!a)throw Error(S(90));Qd(r),Kl(r,a)}}}break;case"textarea":Kd(e,n);break;case"select":t=n.value,t!=null&&Gn(e,!!n.multiple,t,!1)}};nm=Vu;rm=bn;var _v={usingClientEntryPoint:!1,Events:[Pa,Fn,fo,em,tm,Vu]},Or={findFiberByHostInstance:hn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bv={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=om(e),e===null?null:e.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||Cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{lo=Ja.inject(bv),yt=Ja}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(t))throw Error(S(200));return Sv(e,t,null,n)};Be.createRoot=function(e,t){if(!Zu(e))throw Error(S(299));var n=!1,r="",a=Dp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Xu(e,1,!1,null,null,n,!1,r,a),e[bt]=t.current,ra(e.nodeType===8?e.parentNode:e),new Gu(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=om(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return bn(e)};Be.hydrate=function(e,t,n){if(!ko(t))throw Error(S(200));return So(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!Zu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=Dp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Mp(t,null,e,1,n??null,a,!1,i,o),e[bt]=t.current,ra(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new xo(t)};Be.render=function(e,t,n){if(!ko(t))throw Error(S(200));return So(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!ko(e))throw Error(S(40));return e._reactRootContainer?(bn(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};Be.unstable_batchedUpdates=Vu;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return So(e,t,n,!1,r)};Be.version="18.2.0-next-9e3b772b8-20220608";function Fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fp)}catch(e){console.error(e)}}Fp(),Md.exports=Be;var Pv=Md.exports,$f=Pv;Bl.createRoot=$f.createRoot,Bl.hydrateRoot=$f.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const Mf="popstate";function Nv(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:l}=r.location;return As("",{pathname:i,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Ji(a)}return Tv(t,n,null,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ju(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ov(){return Math.random().toString(36).substr(2,8)}function Df(e,t){return{usr:e.state,key:e.key,idx:t}}function As(e,t,n,r){return n===void 0&&(n=null),da({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vr(t):t,{state:n,key:t&&t.key||r||Ov()})}function Ji(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Tv(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Bt.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(da({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){l=Bt.Pop;let C=f(),m=C==null?null:C-u;u=C,s&&s({action:l,location:v.location,delta:m})}function h(C,m){l=Bt.Push;let c=As(v.location,C,m);n&&n(c,C),u=f()+1;let p=Df(c,u),x=v.createHref(c);try{o.pushState(p,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(x)}i&&s&&s({action:l,location:v.location,delta:1})}function y(C,m){l=Bt.Replace;let c=As(v.location,C,m);n&&n(c,C),u=f();let p=Df(c,u),x=v.createHref(c);o.replaceState(p,"",x),i&&s&&s({action:l,location:v.location,delta:0})}function g(C){let m=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof C=="string"?C:Ji(C);return se(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let v={get action(){return l},get location(){return e(a,o)},listen(C){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Mf,d),s=C,()=>{a.removeEventListener(Mf,d),s=null}},createHref(C){return t(a,C)},createURL:g,encodeLocation(C){let m=g(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:y,go(C){return o.go(C)}};return v}var Ff;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ff||(Ff={}));function Iv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?vr(t):t,a=qu(r.pathname||"/",n);if(a==null)return null;let i=Up(e);Rv(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=Uv(i[l],Vv(a));return o}function Up(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(se(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Jt([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(se(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Up(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Dv(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of Bp(i.path))a(i,o,s)}),t}function Bp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=Bp(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Rv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zv=/^:\w+$/,jv=3,Av=2,Lv=1,$v=10,Mv=-2,Uf=e=>e==="*";function Dv(e,t){let n=e.split("/"),r=n.length;return n.some(Uf)&&(r+=Mv),t&&(r+=Av),n.filter(a=>!Uf(a)).reduce((a,i)=>a+(zv.test(i)?jv:i===""?Lv:$v),r)}function Fv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Uv(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=Bv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;i.push({params:r,pathname:Jt([a,f.pathname]),pathnameBase:Xv(Jt([a,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(a=Jt([a,f.pathnameBase]))}return i}function Bv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Wv(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let h=l[d]||"";o=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=Yv(l[d]||"",f),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Wv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ju(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Vv(e){try{return decodeURI(e)}catch(t){return Ju(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Yv(e,t){try{return decodeURIComponent(e)}catch(n){return Ju(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function qu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Hv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?vr(e):e;return{pathname:n?n.startsWith("/")?n:Qv(n,t):t,search:Kv(r),hash:Gv(a)}}function Qv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Nl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Vp(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=vr(e):(a=da({},e),se(!a.pathname||!a.pathname.includes("?"),Nl("?","pathname","search",a)),se(!a.pathname||!a.pathname.includes("#"),Nl("#","pathname","hash",a)),se(!a.search||!a.search.includes("#"),Nl("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;a.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=Hv(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Jt=e=>e.join("/").replace(/\/\/+/g,"/"),Xv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yp=["post","put","patch","delete"];new Set(Yp);const Jv=["get",...Yp];new Set(Jv);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}const ec=_.createContext(null),qv=_.createContext(null),yr=_.createContext(null),Co=_.createContext(null),un=_.createContext({outlet:null,matches:[],isDataRoute:!1}),Hp=_.createContext(null);function ey(e,t){let{relative:n}=t===void 0?{}:t;Oa()||se(!1);let{basename:r,navigator:a}=_.useContext(yr),{hash:i,pathname:o,search:l}=Xp(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Jt([r,o])),a.createHref({pathname:s,search:l,hash:i})}function Oa(){return _.useContext(Co)!=null}function Eo(){return Oa()||se(!1),_.useContext(Co).location}function Qp(e){_.useContext(yr).static||_.useLayoutEffect(e)}function ty(){let{isDataRoute:e}=_.useContext(un);return e?hy():ny()}function ny(){Oa()||se(!1);let e=_.useContext(ec),{basename:t,navigator:n}=_.useContext(yr),{matches:r}=_.useContext(un),{pathname:a}=Eo(),i=JSON.stringify(Wp(r).map(s=>s.pathnameBase)),o=_.useRef(!1);return Qp(()=>{o.current=!0}),_.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let f=Vp(s,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Jt([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,i,a,e])}function ry(){let{matches:e}=_.useContext(un),t=e[e.length-1];return t?t.params:{}}function Xp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=_.useContext(un),{pathname:a}=Eo(),i=JSON.stringify(Wp(r).map(o=>o.pathnameBase));return _.useMemo(()=>Vp(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function ay(e,t){return iy(e,t)}function iy(e,t,n){Oa()||se(!1);let{navigator:r}=_.useContext(yr),{matches:a}=_.useContext(un),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=Eo(),u;if(t){var f;let v=typeof t=="string"?vr(t):t;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||se(!1),u=v}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",y=Iv(e,{pathname:h}),g=cy(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Jt([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Jt([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),a,n);return t&&g?_.createElement(Co.Provider,{value:{location:qi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Bt.Pop}},g):g}function oy(){let e=py(),t=Zv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:a},n):null,i)}const ly=_.createElement(oy,null);class sy extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?_.createElement(un.Provider,{value:this.props.routeContext},_.createElement(Hp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uy(e){let{routeContext:t,match:n,children:r}=e,a=_.useContext(ec);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(un.Provider,{value:t},r)}function cy(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=i.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||se(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,s,u)=>{let f=s.route.id?o==null?void 0:o[s.route.id]:null,d=null;n&&(d=s.route.errorElement||ly);let h=t.concat(i.slice(0,u+1)),y=()=>{let g;return f?g=d:s.route.Component?g=_.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=l,_.createElement(uy,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?_.createElement(sy,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:y(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):y()},null)}var Ls;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Ls||(Ls={}));var ma;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ma||(ma={}));function fy(e){let t=_.useContext(ec);return t||se(!1),t}function dy(e){let t=_.useContext(qv);return t||se(!1),t}function my(e){let t=_.useContext(un);return t||se(!1),t}function Kp(e){let t=my(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function py(){var e;let t=_.useContext(Hp),n=dy(ma.UseRouteError),r=Kp(ma.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function hy(){let{router:e}=fy(Ls.UseNavigateStable),t=Kp(ma.UseNavigateStable),n=_.useRef(!1);return Qp(()=>{n.current=!0}),_.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,qi({fromRouteId:t},i)))},[e,t])}function jn(e){se(!1)}function vy(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Bt.Pop,navigator:i,static:o=!1}=e;Oa()&&se(!1);let l=t.replace(/^\/*/,"/"),s=_.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof r=="string"&&(r=vr(r));let{pathname:u="/",search:f="",hash:d="",state:h=null,key:y="default"}=r,g=_.useMemo(()=>{let v=qu(u,l);return v==null?null:{location:{pathname:v,search:f,hash:d,state:h,key:y},navigationType:a}},[l,u,f,d,h,y,a]);return g==null?null:_.createElement(yr.Provider,{value:s},_.createElement(Co.Provider,{children:n,value:g}))}function yy(e){let{children:t,location:n}=e;return ay($s(t),n)}var Bf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Bf||(Bf={}));new Promise(()=>{});function $s(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,a)=>{if(!_.isValidElement(r))return;let i=[...t,a];if(r.type===_.Fragment){n.push.apply(n,$s(r.props.children,i));return}r.type!==jn&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$s(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ms.apply(this,arguments)}function gy(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function wy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xy(e,t){return e.button===0&&(!t||t==="_self")&&!wy(e)}const ky=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Sy="startTransition",Wf=Ul[Sy];function Cy(e){let{basename:t,children:n,future:r,window:a}=e,i=_.useRef();i.current==null&&(i.current=Nv({window:a,v5Compat:!0}));let o=i.current,[l,s]=_.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=_.useCallback(d=>{u&&Wf?Wf(()=>s(d)):s(d)},[s,u]);return _.useLayoutEffect(()=>o.listen(f),[o,f]),_.createElement(vy,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const Ey=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=_.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:f}=t,d=gy(t,ky),{basename:h}=_.useContext(yr),y,g=!1;if(typeof u=="string"&&_y.test(u)&&(y=u,Ey))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),x=qu(p.pathname,h);p.origin===c.origin&&x!=null?u=x+p.search+p.hash:g=!0}catch{}let v=ey(u,{relative:a}),C=by(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:a});function m(c){r&&r(c),c.defaultPrevented||C(c)}return _.createElement("a",Ms({},d,{href:y||v,onClick:g||i?r:m,ref:n,target:s}))});var Vf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Vf||(Vf={}));var Yf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yf||(Yf={}));function by(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o}=t===void 0?{}:t,l=ty(),s=Eo(),u=Xp(e,{relative:o});return _.useCallback(f=>{if(xy(f,n)){f.preventDefault();let d=r!==void 0?r:Ji(s)===Ji(u);l(e,{replace:d,state:a,preventScrollReset:i,relative:o})}},[s,l,u,r,a,n,e,i,o])}const Py="_container_1ocny_1",Ny="_name_1ocny_25",Oy="_icon_1ocny_39",Ty="_logo_1ocny_49",Iy="_sticky_1ocny_67",Ry="_showNav_1ocny_1",zy="_links_1ocny_101",jy="_link_1ocny_101",Ay="_bordered_1ocny_1",Ly="_menu_1ocny_195",$y="_menuButton_1ocny_217",Oe={container:Py,name:Ny,icon:Oy,logo:Ty,sticky:Iy,showNav:Ry,links:zy,link:jy,bordered:Ay,menu:Ly,menuButton:$y},My="/assets/logo-57272f2b.png",Dy="_container_1mykz_1",Fy="_init_1mykz_1",Uy="_hidden_1mykz_89",By="_exit_1mykz_1",Wy="_notShow_1mykz_101",pn={container:Dy,init:Fy,hidden:Uy,exit:By,notShow:Wy},Vy="_container_19bku_1",Yy="_init_19bku_1",Hy="_links_19bku_63",Qy="_hidden_19bku_75",Xy="_exit_19bku_1",Ky="_notShow_19bku_107",Le={container:Vy,init:Yy,links:Hy,hidden:Qy,exit:Xy,notShow:Ky},pa=(e,t)=>{e.classList.remove(t.notShow),e.classList.toggle(t.hidden)?setTimeout(()=>{e.style.display="none"},300):e.style.display="flex"},tc=()=>{const e=document.querySelector(`li > a[href='${window.location.pathname}']`);e===null?setTimeout(()=>{tc()},500):e.style.fontWeight="800"},Gy=()=>{const e=document.querySelector("#navbar");e!==null&&(window.scrollY>e.offsetTop+60?e.classList.add(Oe.sticky):e.classList.remove(Oe.sticky))},at=()=>{window.scroll({top:0,behavior:"smooth"})},Zy=(e,t)=>{e.classList.add(t.hidden)},Gp=()=>{const e=document.getElementById(Le.container);Zy(e,Le)};window.onscroll=Gy;window.addEventListener("load",()=>tc());const Jy=()=>{const e=()=>{const t=document.getElementsByClassName(pn.container);pa(t[0],pn)};return w.jsxs("div",{className:`${pn.notShow} ${pn.hidden} ${pn.container}`,onClick:()=>{at(),e()},children:[w.jsx(ne,{to:"/players/2024",children:"2024"}),w.jsx(ne,{to:"/players/2025",children:"2025"}),w.jsx(ne,{to:"/players/2026",children:"2026"}),w.jsx(ne,{to:"/players/2027",children:"2027"}),w.jsx(ne,{to:"/players/2028",children:"2028"})]})},qy="_container_1hgez_1",eg="_showAnimation_1hgez_1",tg="_content_1hgez_51",ng="_links_1hgez_63",rg="_header_1hgez_89",ag="_hidden_1hgez_109",ig="_exit_1hgez_1",og="_notShow_1hgez_139",dt={container:qy,showAnimation:eg,content:tg,links:ng,header:rg,hidden:ag,exit:ig,notShow:og},lg=()=>{const e=()=>{const t=document.getElementsByClassName(dt.container);pa(t[0],dt)};return w.jsx("div",{className:`${dt.container} ${dt.hidden} ${dt.notShow}`,children:w.jsxs("div",{className:dt.content,children:[w.jsxs("div",{className:dt.header,children:[w.jsx("h1",{children:"Elegibles"}),w.jsx("button",{onClick:e,children:w.jsx("i",{className:"fa-solid fa-x"})})]}),w.jsxs("div",{className:dt.links,onClick:()=>{e(),at(),Gp()},children:[w.jsx(ne,{to:"/players/2024",children:"2024"}),w.jsx(ne,{to:"/players/2025",children:"2025"}),w.jsx(ne,{to:"/players/2026",children:"2026"}),w.jsx(ne,{to:"/players/2027",children:"2027"}),w.jsx(ne,{to:"/players/2028",children:"2028"})]})]})})},sg=()=>{window.addEventListener("scroll",Gp);const e=()=>{const t=document.getElementsByClassName(dt.container);pa(t[0],dt)};return w.jsxs("div",{children:[w.jsxs("div",{className:`${Le.notShow} ${Le.hidden} ${Le.container} hideOnScroll`,id:Le.container,children:[w.jsx(ne,{className:Le.links,to:"/",onClick:at,children:"Inicio"}),w.jsx(ne,{className:Le.links,to:"/about",onClick:at,children:"Quienes Somos"}),w.jsx("button",{onClick:e,children:w.jsx("p",{className:Le.links,children:"Elegibles"})}),w.jsx(ne,{className:Le.links,to:"/trajectory",onClick:at,children:"Trayectoria"}),w.jsx(ne,{className:Le.links,to:"/contact",onClick:at,children:"Contacto"})]}),w.jsx(lg,{})]})};function Hf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hf(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function eo(e){"@babel/helpers - typeof";return eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},eo(e)}function ug(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cg(e,t,n){return t&&Qf(e.prototype,t),n&&Qf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nc(e,t){return dg(e)||pg(e,t)||Zp(e,t)||vg()}function Ta(e){return fg(e)||mg(e)||Zp(e)||hg()}function fg(e){if(Array.isArray(e))return Ds(e)}function dg(e){if(Array.isArray(e))return e}function mg(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pg(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function Zp(e,t){if(e){if(typeof e=="string")return Ds(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ds(e,t)}}function Ds(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hg(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vg(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Xf=function(){},rc={},Jp={},qp=null,e0={mark:Xf,measure:Xf};try{typeof window<"u"&&(rc=window),typeof document<"u"&&(Jp=document),typeof MutationObserver<"u"&&(qp=MutationObserver),typeof performance<"u"&&(e0=performance)}catch{}var yg=rc.navigator||{},Kf=yg.userAgent,Gf=Kf===void 0?"":Kf,nn=rc,K=Jp,Zf=qp,qa=e0;nn.document;var zt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",t0=~Gf.indexOf("MSIE")||~Gf.indexOf("Trident/"),ei,ti,ni,ri,ai,Ot="___FONT_AWESOME___",Fs=16,n0="fa",r0="svg-inline--fa",Pn="data-fa-i2svg",Us="data-fa-pseudo-element",gg="data-fa-pseudo-element-pending",ac="data-prefix",ic="data-icon",Jf="fontawesome-i2svg",wg="async",xg=["HTML","HEAD","STYLE","SCRIPT"],a0=function(){try{return!0}catch{return!1}}(),Q="classic",te="sharp",oc=[Q,te];function Ia(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var ha=Ia((ei={},fe(ei,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(ei,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ei)),va=Ia((ti={},fe(ti,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(ti,te,{solid:"fass",regular:"fasr",light:"fasl"}),ti)),ya=Ia((ni={},fe(ni,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(ni,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ni)),kg=Ia((ri={},fe(ri,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(ri,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ri)),Sg=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,i0="fa-layers-text",Cg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Eg=Ia((ai={},fe(ai,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(ai,te,{900:"fass",400:"fasr",300:"fasl"}),ai)),o0=[1,2,3,4,5,6,7,8,9,10],_g=o0.concat([11,12,13,14,15,16,17,18,19,20]),bg=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ga=new Set;Object.keys(va[Q]).map(ga.add.bind(ga));Object.keys(va[te]).map(ga.add.bind(ga));var Pg=[].concat(oc,Ta(ga),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gn.GROUP,gn.SWAP_OPACITY,gn.PRIMARY,gn.SECONDARY]).concat(o0.map(function(e){return"".concat(e,"x")})).concat(_g.map(function(e){return"w-".concat(e)})),Hr=nn.FontAwesomeConfig||{};function Ng(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Og(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var Tg=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tg.forEach(function(e){var t=nc(e,2),n=t[0],r=t[1],a=Og(Ng(n));a!=null&&(Hr[r]=a)})}var l0={styleDefault:"solid",familyDefault:"classic",cssPrefix:n0,replacementClass:r0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Hr.familyPrefix&&(Hr.cssPrefix=Hr.familyPrefix);var fr=N(N({},l0),Hr);fr.autoReplaceSvg||(fr.observeMutations=!1);var I={};Object.keys(l0).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){fr[e]=n,Qr.forEach(function(r){return r(I)})},get:function(){return fr[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){fr.cssPrefix=t,Qr.forEach(function(n){return n(I)})},get:function(){return fr.cssPrefix}});nn.FontAwesomeConfig=I;var Qr=[];function Ig(e){return Qr.push(e),function(){Qr.splice(Qr.indexOf(e),1)}}var At=Fs,vt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rg(e){if(!(!e||!zt)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return K.head.insertBefore(t,r),e}}var zg="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wa(){for(var e=12,t="";e-- >0;)t+=zg[Math.random()*62|0];return t}function gr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function lc(e){return e.classList?gr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function s0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jg(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(s0(e[n]),'" ')},"").trim()}function _o(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function sc(e){return e.size!==vt.size||e.x!==vt.x||e.y!==vt.y||e.rotate!==vt.rotate||e.flipX||e.flipY}function Ag(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function Lg(e){var t=e.transform,n=e.width,r=n===void 0?Fs:n,a=e.height,i=a===void 0?Fs:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&t0?s+="translate(".concat(t.x/At-r/2,"em, ").concat(t.y/At-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/At,"em), calc(-50% + ").concat(t.y/At,"em)) "):s+="translate(".concat(t.x/At,"em, ").concat(t.y/At,"em) "),s+="scale(".concat(t.size/At*(t.flipX?-1:1),", ").concat(t.size/At*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var $g=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function u0(){var e=n0,t=r0,n=I.cssPrefix,r=I.replacementClass,a=$g;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var qf=!1;function Ol(){I.autoAddCss&&!qf&&(Rg(u0()),qf=!0)}var Mg={mixout:function(){return{dom:{css:u0,insertCss:Ol}}},hooks:function(){return{beforeDOMElementCreation:function(){Ol()},beforeI2svg:function(){Ol()}}}},Tt=nn||{};Tt[Ot]||(Tt[Ot]={});Tt[Ot].styles||(Tt[Ot].styles={});Tt[Ot].hooks||(Tt[Ot].hooks={});Tt[Ot].shims||(Tt[Ot].shims=[]);var it=Tt[Ot],c0=[],Dg=function e(){K.removeEventListener("DOMContentLoaded",e),to=1,c0.map(function(t){return t()})},to=!1;zt&&(to=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),to||K.addEventListener("DOMContentLoaded",Dg));function Fg(e){zt&&(to?setTimeout(e,0):c0.push(e))}function Ra(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?s0(e):"<".concat(t," ").concat(jg(r),">").concat(i.map(Ra).join(""),"</").concat(t,">")}function ed(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ug=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Tl=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?Ug(n,a):n,s,u,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,t[u],u,t);return f};function Bg(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Bs(e){var t=Bg(e);return t.length===1?t[0].toString(16):null}function Wg(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function td(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ws(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=td(t);typeof it.hooks.addPack=="function"&&!a?it.hooks.addPack(e,td(t)):it.styles[e]=N(N({},it.styles[e]||{}),i),e==="fas"&&Ws("fa",t)}var ii,oi,li,Qn=it.styles,Vg=it.shims,Yg=(ii={},fe(ii,Q,Object.values(ya[Q])),fe(ii,te,Object.values(ya[te])),ii),uc=null,f0={},d0={},m0={},p0={},h0={},Hg=(oi={},fe(oi,Q,Object.keys(ha[Q])),fe(oi,te,Object.keys(ha[te])),oi);function Qg(e){return~Pg.indexOf(e)}function Xg(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Qg(a)?a:null}var v0=function(){var t=function(i){return Tl(Qn,function(o,l,s){return o[s]=Tl(l,i,{}),o},{})};f0=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),d0=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),h0=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in Qn||I.autoFetchSvg,r=Tl(Vg,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});m0=r.names,p0=r.unicodes,uc=bo(I.styleDefault,{family:I.familyDefault})};Ig(function(e){uc=bo(e.styleDefault,{family:I.familyDefault})});v0();function cc(e,t){return(f0[e]||{})[t]}function Kg(e,t){return(d0[e]||{})[t]}function wn(e,t){return(h0[e]||{})[t]}function y0(e){return m0[e]||{prefix:null,iconName:null}}function Gg(e){var t=p0[e],n=cc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rn(){return uc}var fc=function(){return{prefix:null,iconName:null,rest:[]}};function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,a=ha[r][e],i=va[r][e]||va[r][a],o=e in it.styles?e:null;return i||o||null}var nd=(li={},fe(li,Q,Object.keys(ya[Q])),fe(li,te,Object.keys(ya[te])),li);function Po(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},fe(t,Q,"".concat(I.cssPrefix,"-").concat(Q)),fe(t,te,"".concat(I.cssPrefix,"-").concat(te)),t),o=null,l=Q;(e.includes(i[Q])||e.some(function(u){return nd[Q].includes(u)}))&&(l=Q),(e.includes(i[te])||e.some(function(u){return nd[te].includes(u)}))&&(l=te);var s=e.reduce(function(u,f){var d=Xg(I.cssPrefix,f);if(Qn[f]?(f=Yg[l].includes(f)?kg[l][f]:f,o=f,u.prefix=f):Hg[l].indexOf(f)>-1?(o=f,u.prefix=bo(f,{family:l})):d?u.iconName=d:f!==I.replacementClass&&f!==i[Q]&&f!==i[te]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var h=o==="fa"?y0(u.iconName):{},y=wn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||y||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Qn.far&&Qn.fas&&!I.autoFetchSvg&&(u.prefix="fas")}return u},fc());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===te&&(Qn.fass||I.autoFetchSvg)&&(s.prefix="fass",s.iconName=wn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=rn()||"fas"),s}var Zg=function(){function e(){ug(this,e),this.definitions={}}return cg(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=N(N({},n.definitions[l]||{}),o[l]),Ws(l,o[l]);var s=ya[Q][l];s&&Ws(s,o[l]),v0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),rd=[],Xn={},nr={},Jg=Object.keys(nr);function qg(e,t){var n=t.mixoutsTo;return rd=e,Xn={},Object.keys(nr).forEach(function(r){Jg.indexOf(r)===-1&&delete nr[r]}),rd.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),eo(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Xn[o]||(Xn[o]=[]),Xn[o].push(i[o])})}r.provides&&r.provides(nr)}),n}function Vs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Xn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Nn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Xn[e]||[];a.forEach(function(i){i.apply(null,n)})}function It(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return nr[e]?nr[e].apply(null,t):void 0}function Ys(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||rn();if(t)return t=wn(n,t)||t,ed(g0.definitions,n,t)||ed(it.styles,n,t)}var g0=new Zg,e2=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,Nn("noAuto")},t2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zt?(Nn("beforeI2svg",t),It("pseudoElements2svg",t),It("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Fg(function(){r2({autoReplaceSvgRoot:n}),Nn("watch",t)})}},n2={icon:function(t){if(t===null)return null;if(eo(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:wn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=bo(t[0]);return{prefix:r,iconName:wn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Sg))){var a=Po(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||rn(),iconName:wn(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=rn();return{prefix:i,iconName:wn(i,t)||t}}}},Ve={noAuto:e2,config:I,dom:t2,parse:n2,library:g0,findIconDefinition:Ys,toHtml:Ra},r2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(it.styles).length>0||I.autoFetchSvg)&&zt&&I.autoReplaceSvg&&Ve.dom.i2svg({node:r})};function No(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ra(r)})}}),Object.defineProperty(e,"node",{get:function(){if(zt){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function a2(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(sc(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};a.style=_o(N(N({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function i2(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},a),{},{id:o}),children:r}]}]}function dc(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,y=h===void 0?!1:h,g=r.found?r:n,v=g.width,C=g.height,m=a==="fak",c=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(U){return d.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(d.classes).join(" "),p={children:[],attributes:N(N({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(C)})},x=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/C*16*.0625,"em")}:{};y&&(p.attributes[Pn]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||wa())},children:[s]}),delete p.attributes.title);var k=N(N({},p),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:N(N({},x),d.styles)}),P=r.found&&n.found?It("generateAbstractMask",k)||{children:[],attributes:{}}:It("generateAbstractIcon",k)||{children:[],attributes:{}},E=P.children,R=P.attributes;return k.children=E,k.attributes=R,l?i2(k):a2(k)}function ad(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=N(N(N({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[Pn]="");var f=N({},o.styles);sc(a)&&(f.transform=Lg({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=_o(f);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function o2(e){var t=e.content,n=e.title,r=e.extra,a=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=_o(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Il=it.styles;function Hs(e){var t=e[0],n=e[1],r=e.slice(4),a=nc(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(gn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(gn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(gn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var l2={found:!1,width:512,height:512};function s2(e,t){!a0&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Qs(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=rn()),new Promise(function(r,a){if(It("missingIconAbstract"),n==="fa"){var i=y0(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Il[t]&&Il[t][e]){var o=Il[t][e];return r(Hs(o))}s2(e,t),r(N(N({},l2),{},{icon:I.showMissingIcons&&e?It("missingIconAbstract")||{}:{}}))})}var id=function(){},Xs=I.measurePerformance&&qa&&qa.mark&&qa.measure?qa:{mark:id,measure:id},Lr='FA "6.4.0"',u2=function(t){return Xs.mark("".concat(Lr," ").concat(t," begins")),function(){return w0(t)}},w0=function(t){Xs.mark("".concat(Lr," ").concat(t," ends")),Xs.measure("".concat(Lr," ").concat(t),"".concat(Lr," ").concat(t," begins"),"".concat(Lr," ").concat(t," ends"))},mc={begin:u2,end:w0},Ci=function(){};function od(e){var t=e.getAttribute?e.getAttribute(Pn):null;return typeof t=="string"}function c2(e){var t=e.getAttribute?e.getAttribute(ac):null,n=e.getAttribute?e.getAttribute(ic):null;return t&&n}function f2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function d2(){if(I.autoReplaceSvg===!0)return Ei.replace;var e=Ei[I.autoReplaceSvg];return e||Ei.replace}function m2(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function p2(e){return K.createElement(e)}function x0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?m2:p2:n;if(typeof e=="string")return K.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(x0(o,{ceFn:r}))}),a}function h2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ei={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(x0(a),n)}),n.getAttribute(Pn)===null&&I.keepOriginalSource){var r=K.createComment(h2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~lc(n).indexOf(I.replacementClass))return Ei.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===I.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return Ra(l)}).join(`
`);n.setAttribute(Pn,""),n.innerHTML=o}};function ld(e){e()}function k0(e,t){var n=typeof t=="function"?t:Ci;if(e.length===0)n();else{var r=ld;I.mutateApproach===wg&&(r=nn.requestAnimationFrame||ld),r(function(){var a=d2(),i=mc.begin("mutate");e.map(a),i(),n()})}}var pc=!1;function S0(){pc=!0}function Ks(){pc=!1}var no=null;function sd(e){if(Zf&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Ci:t,r=e.nodeCallback,a=r===void 0?Ci:r,i=e.pseudoElementsCallback,o=i===void 0?Ci:i,l=e.observeMutationsRoot,s=l===void 0?K:l;no=new Zf(function(u){if(!pc){var f=rn();gr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!od(d.addedNodes[0])&&(I.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&I.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&od(d.target)&&~bg.indexOf(d.attributeName))if(d.attributeName==="class"&&c2(d.target)){var h=Po(lc(d.target)),y=h.prefix,g=h.iconName;d.target.setAttribute(ac,y||f),g&&d.target.setAttribute(ic,g)}else f2(d.target)&&a(d.target)})}}),zt&&no.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function v2(){no&&no.disconnect()}function y2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function g2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Po(lc(e));return a.prefix||(a.prefix=rn()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Kg(a.prefix,e.innerText)||cc(a.prefix,Bs(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function w2(e){var t=gr(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||wa()):(t["aria-hidden"]="true",t.focusable="false")),t}function x2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ud(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=g2(e),r=n.iconName,a=n.prefix,i=n.rest,o=w2(e),l=Vs("parseNodeAttributes",{},e),s=t.styleParser?y2(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:vt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var k2=it.styles;function C0(e){var t=I.autoReplaceSvg==="nest"?ud(e,{styleParser:!1}):ud(e);return~t.extra.classes.indexOf(i0)?It("generateLayersText",e,t):It("generateSvgReplacementMutation",e,t)}var an=new Set;oc.map(function(e){an.add("fa-".concat(e))});Object.keys(ha[Q]).map(an.add.bind(an));Object.keys(ha[te]).map(an.add.bind(an));an=Ta(an);function cd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zt)return Promise.resolve();var n=K.documentElement.classList,r=function(d){return n.add("".concat(Jf,"-").concat(d))},a=function(d){return n.remove("".concat(Jf,"-").concat(d))},i=I.autoFetchSvg?an:oc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(k2));i.includes("fa")||i.push("fa");var o=[".".concat(i0,":not([").concat(Pn,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Pn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=gr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=mc.begin("onTree"),u=l.reduce(function(f,d){try{var h=C0(d);h&&f.push(h)}catch(y){a0||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(h){k0(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),d(h)})})}function S2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;C0(e).then(function(n){n&&k0([n],t)})}function C2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ys(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ys(a||{})),e(r,N(N({},n),{},{mask:a}))}}var E2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?vt:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,h=d===void 0?null:d,y=n.titleId,g=y===void 0?null:y,v=n.classes,C=v===void 0?[]:v,m=n.attributes,c=m===void 0?{}:m,p=n.styles,x=p===void 0?{}:p;if(t){var k=t.prefix,P=t.iconName,E=t.icon;return No(N({type:"icon"},t),function(){return Nn("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?c["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(g||wa()):(c["aria-hidden"]="true",c.focusable="false")),dc({icons:{main:Hs(E),mask:s?Hs(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:P,transform:N(N({},vt),a),symbol:o,title:h,maskId:f,titleId:g,extra:{attributes:c,styles:x,classes:C}})})}},_2={mixout:function(){return{icon:C2(E2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=cd,n.nodeCallback=S2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?K:r,i=n.callback,o=i===void 0?function(){}:i;return cd(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(y,g){Promise.all([Qs(a,l),f.iconName?Qs(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var C=nc(v,2),m=C[0],c=C[1];y([n,dc({icons:{main:m,mask:c},prefix:l,iconName:a,transform:s,symbol:u,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=_o(l);s.length>0&&(a.style=s);var u;return sc(o)&&(u=It("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},b2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return No({type:"layer"},function(){Nn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(Ta(i)).join(" ")},children:o}]})}}}},P2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return No({type:"counter",content:n},function(){return Nn("beforeDOMElementCreation",{content:n,params:r}),o2({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(Ta(l))}})})}}}},N2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?vt:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,h=r.styles,y=h===void 0?{}:h;return No({type:"text",content:n},function(){return Nn("beforeDOMElementCreation",{content:n,params:r}),ad({content:n,transform:N(N({},vt),i),title:l,extra:{attributes:d,styles:y,classes:["".concat(I.cssPrefix,"-layers-text")].concat(Ta(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(t0){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ad({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},O2=new RegExp('"',"ug"),fd=[1105920,1112319];function T2(e){var t=e.replace(O2,""),n=Wg(t,0),r=n>=fd[0]&&n<=fd[1],a=t.length===2?t[0]===t[1]:!1;return{value:Bs(a?t[0]:t),isSecondary:r||a}}function dd(e,t){var n="".concat(gg).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=gr(e.children),o=i.filter(function(E){return E.getAttribute(Us)===t})[0],l=nn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Cg),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?te:Q,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?va[h][s[2].toLowerCase()]:Eg[h][u],g=T2(d),v=g.value,C=g.isSecondary,m=s[0].startsWith("FontAwesome"),c=cc(y,v),p=c;if(m){var x=Gg(v);x.iconName&&x.prefix&&(c=x.iconName,y=x.prefix)}if(c&&!C&&(!o||o.getAttribute(ac)!==y||o.getAttribute(ic)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var k=x2(),P=k.extra;P.attributes[Us]=t,Qs(c,y).then(function(E){var R=dc(N(N({},k),{},{icons:{main:E,mask:fc()},prefix:y,iconName:p,extra:P,watchable:!0})),U=K.createElement("svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=R.map(function(A){return Ra(A)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function I2(e){return Promise.all([dd(e,"::before"),dd(e,"::after")])}function R2(e){return e.parentNode!==document.head&&!~xg.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Us)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function md(e){if(zt)return new Promise(function(t,n){var r=gr(e.querySelectorAll("*")).filter(R2).map(I2),a=mc.begin("searchPseudoElements");S0(),Promise.all(r).then(function(){a(),Ks(),t()}).catch(function(){a(),Ks(),n()})})}var z2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=md,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?K:r;I.searchPseudoElements&&md(a)}}},pd=!1,j2={mixout:function(){return{dom:{unwatch:function(){S0(),pd=!0}}}},hooks:function(){return{bootstrap:function(){sd(Vs("mutationObserverCallbacks",{}))},noAuto:function(){v2()},watch:function(n){var r=n.observeMutationsRoot;pd?Ks():sd(Vs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},hd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},A2={mixout:function(){return{parse:{transform:function(n){return hd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=hd(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:l,inner:d,path:h};return{tag:"g",attributes:N({},y.outer),children:[{tag:"g",attributes:N({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),y.path)}]}]}}}},Rl={x:0,y:0,width:"100%",height:"100%"};function vd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function L2(e){return e.tag==="g"?e.children:[e]}var $2={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Po(a.split(" ").map(function(o){return o.trim()})):fc();return i.prefix||(i.prefix=rn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,f=i.icon,d=o.width,h=o.icon,y=Ag({transform:s,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:N(N({},Rl),{},{fill:"white"})},v=f.children?{children:f.children.map(vd)}:{},C={tag:"g",attributes:N({},y.inner),children:[vd(N({tag:f.tag,attributes:N(N({},f.attributes),y.path)},v))]},m={tag:"g",attributes:N({},y.outer),children:[C]},c="mask-".concat(l||wa()),p="clip-".concat(l||wa()),x={tag:"mask",attributes:N(N({},Rl),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:L2(h)},x]};return r.push(k,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},Rl)}),{children:r,attributes:a}}}},M2={provides:function(t){var n=!1;nn.matchMedia&&(n=nn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:N(N({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:N(N({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:N(N({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},D2={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},F2=[Mg,_2,b2,P2,N2,z2,j2,A2,$2,M2,D2];qg(F2,{mixoutsTo:Ve});Ve.noAuto;Ve.config;Ve.library;Ve.dom;var Gs=Ve.parse;Ve.findIconDefinition;Ve.toHtml;var U2=Ve.icon;Ve.layer;Ve.text;Ve.counter;var E0={exports:{}},B2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",W2=B2,V2=W2;function _0(){}function b0(){}b0.resetWarningCache=_0;var Y2=function(){function e(r,a,i,o,l,s){if(s!==V2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b0,resetWarningCache:_0};return n.PropTypes=n,n};E0.exports=Y2();var H2=E0.exports;const L=Pd(H2);function yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Wt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yd(Object(n),!0).forEach(function(r){Kn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ro(e){"@babel/helpers - typeof";return ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ro(e)}function Kn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q2(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function X2(e,t){if(e==null)return{};var n=Q2(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Zs(e){return K2(e)||G2(e)||Z2(e)||J2()}function K2(e){if(Array.isArray(e))return Js(e)}function G2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Z2(e,t){if(e){if(typeof e=="string")return Js(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Js(e,t)}}function Js(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function J2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q2(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,y=e.inverse,g=e.border,v=e.listItem,C=e.flip,m=e.size,c=e.rotation,p=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":y,"fa-border":g,"fa-li":v,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},Kn(t,"fa-".concat(m),typeof m<"u"&&m!==null),Kn(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Kn(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),Kn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(k){return x[k]?k:null}).filter(function(k){return k})}function ew(e){return e=e-0,e===e}function P0(e){return ew(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var tw=["style"];function nw(e){return e.charAt(0).toUpperCase()+e.slice(1)}function rw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=P0(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[nw(a)]=i:t[a]=i,t},{})}function N0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return N0(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=rw(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[P0(u)]=f}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=X2(n,tw);return a.attrs.style=Wt(Wt({},a.attrs.style),o),e.apply(void 0,[t.tag,Wt(Wt({},a.attrs),l)].concat(Zs(r)))}var O0=!1;try{O0=!0}catch{}function aw(){if(!O0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function gd(e){if(e&&ro(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Gs.icon)return Gs.icon(e);if(e===null)return null;if(e&&ro(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function zl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Kn({},e,t):{}}var qt=oo.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,u=gd(n),f=zl("classes",[].concat(Zs(q2(e)),Zs(i.split(" ")))),d=zl("transform",typeof e.transform=="string"?Gs.transform(e.transform):e.transform),h=zl("mask",gd(r)),y=U2(u,Wt(Wt(Wt(Wt({},f),d),h),{},{symbol:a,title:o,titleId:l,maskId:s}));if(!y)return aw("Could not find icon",u),null;var g=y.abstract,v={ref:t};return Object.keys(e).forEach(function(C){qt.defaultProps.hasOwnProperty(C)||(v[C]=e[C])}),iw(g[0],v)});qt.displayName="FontAwesomeIcon";qt.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};qt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var iw=N0.bind(null,oo.createElement),ow={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},lw={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};const sw=()=>w.jsxs("div",{children:[w.jsxs("nav",{className:Oe.container,id:"navbar",children:[w.jsxs("div",{className:Oe.logo,children:[w.jsx("img",{className:Oe.icon,src:My,alt:""}),w.jsx("h1",{className:Oe.name,children:"MANACLA BASEBALL ACADEMY"})]}),w.jsxs("div",{className:Oe.links,children:[w.jsx(ne,{className:Oe.link,to:"/",onClick:at,children:"Inicio"}),w.jsx(ne,{className:Oe.link,to:"/about",onClick:at,children:"Quienes Somos"}),w.jsxs("div",{className:Oe.menu,children:[w.jsx("p",{onClick:()=>{const e=document.getElementsByClassName(pn.container);pa(e[0],pn)},children:"Elegibles"}),w.jsx(Jy,{})]}),w.jsx(ne,{className:Oe.link,to:"/trajectory",onClick:at,children:"Trayectoria"}),w.jsx(ne,{className:Oe.link,to:"/contact",onClick:at,children:"Contacto"})]}),w.jsx("div",{className:Oe.menuButton,children:w.jsx("button",{className:Oe.icon,onClick:()=>{const e=document.getElementsByClassName(Le.container);pa(e[0],Le)},children:w.jsx(qt,{className:"bar",icon:ow})})})]}),w.jsx(sg,{})]});function uw(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function cw(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var fw=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(cw(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=uw(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Se="-ms-",ao="-moz-",D="-webkit-",T0="comm",hc="rule",vc="decl",dw="@import",I0="@keyframes",mw="@layer",pw=Math.abs,Oo=String.fromCharCode,hw=Object.assign;function vw(e,t){return ye(e,0)^45?(((t<<2^ye(e,0))<<2^ye(e,1))<<2^ye(e,2))<<2^ye(e,3):0}function R0(e){return e.trim()}function yw(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function qs(e,t){return e.indexOf(t)}function ye(e,t){return e.charCodeAt(t)|0}function xa(e,t,n){return e.slice(t,n)}function mt(e){return e.length}function yc(e){return e.length}function si(e,t){return t.push(e),e}function gw(e,t){return e.map(t).join("")}var To=1,dr=1,z0=0,Ae=0,oe=0,wr="";function Io(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:To,column:dr,length:o,return:""}}function Tr(e,t){return hw(Io("",null,null,"",null,null,0),e,{length:-e.length},t)}function ww(){return oe}function xw(){return oe=Ae>0?ye(wr,--Ae):0,dr--,oe===10&&(dr=1,To--),oe}function Fe(){return oe=Ae<z0?ye(wr,Ae++):0,dr++,oe===10&&(dr=1,To++),oe}function wt(){return ye(wr,Ae)}function _i(){return Ae}function za(e,t){return xa(wr,e,t)}function ka(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j0(e){return To=dr=1,z0=mt(wr=e),Ae=0,[]}function A0(e){return wr="",e}function bi(e){return R0(za(Ae-1,eu(e===91?e+2:e===40?e+1:e)))}function kw(e){for(;(oe=wt())&&oe<33;)Fe();return ka(e)>2||ka(oe)>3?"":" "}function Sw(e,t){for(;--t&&Fe()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return za(e,_i()+(t<6&&wt()==32&&Fe()==32))}function eu(e){for(;Fe();)switch(oe){case e:return Ae;case 34:case 39:e!==34&&e!==39&&eu(oe);break;case 40:e===41&&eu(e);break;case 92:Fe();break}return Ae}function Cw(e,t){for(;Fe()&&e+oe!==47+10;)if(e+oe===42+42&&wt()===47)break;return"/*"+za(t,Ae-1)+"*"+Oo(e===47?e:Fe())}function Ew(e){for(;!ka(wt());)Fe();return za(e,Ae)}function _w(e){return A0(Pi("",null,null,null,[""],e=j0(e),0,[0],e))}function Pi(e,t,n,r,a,i,o,l,s){for(var u=0,f=0,d=o,h=0,y=0,g=0,v=1,C=1,m=1,c=0,p="",x=a,k=i,P=r,E=p;C;)switch(g=c,c=Fe()){case 40:if(g!=108&&ye(E,d-1)==58){qs(E+=F(bi(c),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:E+=bi(c);break;case 9:case 10:case 13:case 32:E+=kw(g);break;case 92:E+=Sw(_i()-1,7);continue;case 47:switch(wt()){case 42:case 47:si(bw(Cw(Fe(),_i()),t,n),s);break;default:E+="/"}break;case 123*v:l[u++]=mt(E)*m;case 125*v:case 59:case 0:switch(c){case 0:case 125:C=0;case 59+f:m==-1&&(E=F(E,/\f/g,"")),y>0&&mt(E)-d&&si(y>32?xd(E+";",r,n,d-1):xd(F(E," ","")+";",r,n,d-2),s);break;case 59:E+=";";default:if(si(P=wd(E,t,n,u,f,a,l,p,x=[],k=[],d),i),c===123)if(f===0)Pi(E,t,P,P,x,i,d,l,k);else switch(h===99&&ye(E,3)===110?100:h){case 100:case 108:case 109:case 115:Pi(e,P,P,r&&si(wd(e,P,P,0,0,a,l,p,a,x=[],d),k),a,k,d,l,r?x:k);break;default:Pi(E,P,P,P,[""],k,0,l,k)}}u=f=y=0,v=m=1,p=E="",d=o;break;case 58:d=1+mt(E),y=g;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&xw()==125)continue}switch(E+=Oo(c),c*v){case 38:m=f>0?1:(E+="\f",-1);break;case 44:l[u++]=(mt(E)-1)*m,m=1;break;case 64:wt()===45&&(E+=bi(Fe())),h=wt(),f=d=mt(p=E+=Ew(_i())),c++;break;case 45:g===45&&mt(E)==2&&(v=0)}}return i}function wd(e,t,n,r,a,i,o,l,s,u,f){for(var d=a-1,h=a===0?i:[""],y=yc(h),g=0,v=0,C=0;g<r;++g)for(var m=0,c=xa(e,d+1,d=pw(v=o[g])),p=e;m<y;++m)(p=R0(v>0?h[m]+" "+c:F(c,/&\f/g,h[m])))&&(s[C++]=p);return Io(e,t,n,a===0?hc:l,s,u,f)}function bw(e,t,n){return Io(e,t,n,T0,Oo(ww()),xa(e,2,-2),0)}function xd(e,t,n,r){return Io(e,t,n,vc,xa(e,0,r),xa(e,r+1,-1),r)}function rr(e,t){for(var n="",r=yc(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Pw(e,t,n,r){switch(e.type){case mw:if(e.children.length)break;case dw:case vc:return e.return=e.return||e.value;case T0:return"";case I0:return e.return=e.value+"{"+rr(e.children,r)+"}";case hc:e.value=e.props.join(",")}return mt(n=rr(e.children,r))?e.return=e.value+"{"+n+"}":""}function Nw(e){var t=yc(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}function Ow(e){return function(t){t.root||(t=t.return)&&e(t)}}function Tw(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Iw=function(t,n,r){for(var a=0,i=0;a=i,i=wt(),a===38&&i===12&&(n[r]=1),!ka(i);)Fe();return za(t,Ae)},Rw=function(t,n){var r=-1,a=44;do switch(ka(a)){case 0:a===38&&wt()===12&&(n[r]=1),t[r]+=Iw(Ae-1,n,r);break;case 2:t[r]+=bi(a);break;case 4:if(a===44){t[++r]=wt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Oo(a)}while(a=Fe());return t},zw=function(t,n){return A0(Rw(j0(t),n))},kd=new WeakMap,jw=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!kd.get(r))&&!a){kd.set(t,!0);for(var i=[],o=zw(n,i),l=r.props,s=0,u=0;s<o.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=i[s]?o[s].replace(/&\f/g,l[f]):l[f]+" "+o[s]}}},Aw=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function L0(e,t){switch(vw(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+ao+e+Se+e+e;case 6828:case 4268:return D+e+Se+e+e;case 6165:return D+e+Se+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return D+e+Se+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+Se+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+Se+F(e,"shrink","negative")+e;case 5292:return D+e+Se+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+Se+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mt(e)-1-t>6)switch(ye(e,t+1)){case 109:if(ye(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+ao+(ye(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qs(e,"stretch")?L0(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ye(e,t+1)!==115)break;case 6444:switch(ye(e,mt(e)-3-(~qs(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(ye(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+Se+"$2box$3")+e}break;case 5936:switch(ye(e,t+11)){case 114:return D+e+Se+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+Se+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+Se+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+Se+e+e}return e}var Lw=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case vc:t.return=L0(t.value,t.length);break;case I0:return rr([Tr(t,{value:F(t.value,"@","@"+D)})],a);case hc:if(t.length)return gw(t.props,function(i){switch(yw(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return rr([Tr(t,{props:[F(i,/:(read-\w+)/,":"+ao+"$1")]})],a);case"::placeholder":return rr([Tr(t,{props:[F(i,/:(plac\w+)/,":"+D+"input-$1")]}),Tr(t,{props:[F(i,/:(plac\w+)/,":"+ao+"$1")]}),Tr(t,{props:[F(i,/:(plac\w+)/,Se+"input-$1")]})],a)}return""})}},$w=[Lw],Mw=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var C=v.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var a=t.stylisPlugins||$w,i={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var C=v.getAttribute("data-emotion").split(" "),m=1;m<C.length;m++)i[C[m]]=!0;l.push(v)});var s,u=[jw,Aw];{var f,d=[Pw,Ow(function(v){f.insert(v)})],h=Nw(u.concat(a,d)),y=function(C){return rr(_w(C),h)};s=function(C,m,c,p){f=c,y(C?C+"{"+m.styles+"}":m.styles),p&&(g.inserted[m.name]=!0)}}var g={key:n,sheet:new fw({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(l),g},$0={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he=typeof Symbol=="function"&&Symbol.for,gc=he?Symbol.for("react.element"):60103,wc=he?Symbol.for("react.portal"):60106,Ro=he?Symbol.for("react.fragment"):60107,zo=he?Symbol.for("react.strict_mode"):60108,jo=he?Symbol.for("react.profiler"):60114,Ao=he?Symbol.for("react.provider"):60109,Lo=he?Symbol.for("react.context"):60110,xc=he?Symbol.for("react.async_mode"):60111,$o=he?Symbol.for("react.concurrent_mode"):60111,Mo=he?Symbol.for("react.forward_ref"):60112,Do=he?Symbol.for("react.suspense"):60113,Dw=he?Symbol.for("react.suspense_list"):60120,Fo=he?Symbol.for("react.memo"):60115,Uo=he?Symbol.for("react.lazy"):60116,Fw=he?Symbol.for("react.block"):60121,Uw=he?Symbol.for("react.fundamental"):60117,Bw=he?Symbol.for("react.responder"):60118,Ww=he?Symbol.for("react.scope"):60119;function Ye(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gc:switch(e=e.type,e){case xc:case $o:case Ro:case jo:case zo:case Do:return e;default:switch(e=e&&e.$$typeof,e){case Lo:case Mo:case Uo:case Fo:case Ao:return e;default:return t}}case wc:return t}}}function M0(e){return Ye(e)===$o}W.AsyncMode=xc;W.ConcurrentMode=$o;W.ContextConsumer=Lo;W.ContextProvider=Ao;W.Element=gc;W.ForwardRef=Mo;W.Fragment=Ro;W.Lazy=Uo;W.Memo=Fo;W.Portal=wc;W.Profiler=jo;W.StrictMode=zo;W.Suspense=Do;W.isAsyncMode=function(e){return M0(e)||Ye(e)===xc};W.isConcurrentMode=M0;W.isContextConsumer=function(e){return Ye(e)===Lo};W.isContextProvider=function(e){return Ye(e)===Ao};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gc};W.isForwardRef=function(e){return Ye(e)===Mo};W.isFragment=function(e){return Ye(e)===Ro};W.isLazy=function(e){return Ye(e)===Uo};W.isMemo=function(e){return Ye(e)===Fo};W.isPortal=function(e){return Ye(e)===wc};W.isProfiler=function(e){return Ye(e)===jo};W.isStrictMode=function(e){return Ye(e)===zo};W.isSuspense=function(e){return Ye(e)===Do};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ro||e===$o||e===jo||e===zo||e===Do||e===Dw||typeof e=="object"&&e!==null&&(e.$$typeof===Uo||e.$$typeof===Fo||e.$$typeof===Ao||e.$$typeof===Lo||e.$$typeof===Mo||e.$$typeof===Uw||e.$$typeof===Bw||e.$$typeof===Ww||e.$$typeof===Fw)};W.typeOf=Ye;$0.exports=W;var Vw=$0.exports,D0=Vw,Yw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F0={};F0[D0.ForwardRef]=Yw;F0[D0.Memo]=Hw;var Qw=!0;function U0(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var kc=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||Qw===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},B0=function(t,n,r){kc(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Xw(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Kw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gw=/[A-Z]|^ms/g,Zw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,W0=function(t){return t.charCodeAt(1)===45},Sd=function(t){return t!=null&&typeof t!="boolean"},jl=Tw(function(e){return W0(e)?e:e.replace(Gw,"-$&").toLowerCase()}),Cd=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Zw,function(r,a,i){return pt={name:a,styles:i,next:pt},a})}return Kw[t]!==1&&!W0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Sa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var a=n.styles+";";return a}return Jw(e,t,n)}case"function":{if(e!==void 0){var i=pt,o=n(e);return pt=i,Sa(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function Jw(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Sa(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Sd(o)&&(r+=jl(i)+":"+Cd(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)Sd(o[l])&&(r+=jl(i)+":"+Cd(i,o[l])+";");else{var s=Sa(e,t,o);switch(i){case"animation":case"animationName":{r+=jl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var Ed=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,Sc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";pt=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Sa(r,n,o)):i+=o[0];for(var l=1;l<t.length;l++)i+=Sa(r,n,t[l]),a&&(i+=o[l]);Ed.lastIndex=0;for(var s="",u;(u=Ed.exec(i))!==null;)s+="-"+u[1];var f=Xw(i)+s;return{name:f,styles:i,next:pt}},qw=function(t){return t()},e3=Ul["useInsertionEffect"]?Ul["useInsertionEffect"]:!1,V0=e3||qw,Cc={}.hasOwnProperty,Y0=_.createContext(typeof HTMLElement<"u"?Mw({key:"css"}):null);Y0.Provider;var H0=function(t){return _.forwardRef(function(n,r){var a=_.useContext(Y0);return t(n,a,r)})},Q0=_.createContext({}),tu="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",t3=function(t,n){var r={};for(var a in n)Cc.call(n,a)&&(r[a]=n[a]);return r[tu]=t,r},n3=function(t){var n=t.cache,r=t.serialized,a=t.isStringTag;return kc(n,r,a),V0(function(){return B0(n,r,a)}),null},r3=H0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var a=e[tu],i=[r],o="";typeof e.className=="string"?o=U0(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var l=Sc(i,void 0,_.useContext(Q0));o+=t.key+"-"+l.name;var s={};for(var u in e)Cc.call(e,u)&&u!=="css"&&u!==tu&&(s[u]=e[u]);return s.ref=n,s.className=o,_.createElement(_.Fragment,null,_.createElement(n3,{cache:t,serialized:l,isStringTag:typeof a=="string"}),_.createElement(a,s))}),a3=r3,i3=w.Fragment;function ie(e,t,n){return Cc.call(t,"css")?w.jsx(a3,t3(e,t),n):w.jsx(e,t,n)}function X0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Sc(t)}var b=function(){var t=X0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},o3=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var l in i)i[l]&&l&&(o&&(o+=" "),o+=l)}break}default:o=i}o&&(a&&(a+=" "),a+=o)}}return a};function l3(e,t,n){var r=[],a=U0(e,r,n);return r.length<2?n:a+t(r)}var s3=function(t){var n=t.cache,r=t.serializedArr;return V0(function(){for(var a=0;a<r.length;a++)B0(n,r[a],!1)}),null},Al=H0(function(e,t){var n=!1,r=[],a=function(){for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];var h=Sc(f,t.registered);return r.push(h),kc(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];return l3(t.registered,a,o3(f))},o={css:a,cx:i,theme:_.useContext(Q0)},l=e.children(o);return n=!0,_.createElement(_.Fragment,null,_.createElement(s3,{cache:t,serializedArr:r}),l)}),u3=Object.defineProperty,c3=(e,t,n)=>t in e?u3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ui=(e,t,n)=>(c3(e,typeof t!="symbol"?t+"":t,n),n),nu=new Map,ci=new WeakMap,_d=0,f3=void 0;function d3(e){return e?(ci.has(e)||(_d+=1,ci.set(e,_d.toString())),ci.get(e)):"0"}function m3(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?d3(e.root):e[t]}`).toString()}function p3(e){let t=m3(e),n=nu.get(t);if(!n){const r=new Map;let a;const i=new IntersectionObserver(o=>{o.forEach(l=>{var s;const u=l.isIntersecting&&a.some(f=>l.intersectionRatio>=f);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(s=r.get(l.target))==null||s.forEach(f=>{f(u,l)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},nu.set(t,n)}return n}function K0(e,t,n={},r=f3){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:a,observer:i,elements:o}=p3(n);let l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),nu.delete(a))}}function h3(e){return typeof e.children!="function"}var bd=class extends _.Component{constructor(e){super(e),ui(this,"node",null),ui(this,"_unobserveCb",null),ui(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ui(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),h3(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:i}=this.props;this._unobserveCb=K0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:y,entry:g}=this.state;return e({inView:y,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:a,rootMargin:i,onChange:o,skip:l,trackVisibility:s,delay:u,initialInView:f,fallbackInView:d,...h}=this.props;return _.createElement(t||"div",{ref:this.handleNode,...h},e)}};function G0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:a,triggerOnce:i,skip:o,initialInView:l,fallbackInView:s,onChange:u}={}){var f;const[d,h]=_.useState(null),y=_.useRef(),[g,v]=_.useState({inView:!!l,entry:void 0});y.current=u,_.useEffect(()=>{if(o||!d)return;let p;return p=K0(d,(x,k)=>{v({inView:x,entry:k}),y.current&&y.current(x,k),k.isIntersecting&&i&&p&&(p(),p=void 0)},{root:a,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,d,a,r,i,o,n,s,t]);const C=(f=g.entry)==null?void 0:f.target,m=_.useRef();!d&&C&&!i&&!o&&m.current!==C&&(m.current=C,v({inView:!!l,entry:void 0}));const c=[h,g.inView,g.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var Z0={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=Symbol.for("react.element"),_c=Symbol.for("react.portal"),Bo=Symbol.for("react.fragment"),Wo=Symbol.for("react.strict_mode"),Vo=Symbol.for("react.profiler"),Yo=Symbol.for("react.provider"),Ho=Symbol.for("react.context"),v3=Symbol.for("react.server_context"),Qo=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),Ko=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),Zo=Symbol.for("react.lazy"),y3=Symbol.for("react.offscreen"),J0;J0=Symbol.for("react.module.reference");function Je(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ec:switch(e=e.type,e){case Bo:case Vo:case Wo:case Xo:case Ko:return e;default:switch(e=e&&e.$$typeof,e){case v3:case Ho:case Qo:case Zo:case Go:case Yo:return e;default:return t}}case _c:return t}}}V.ContextConsumer=Ho;V.ContextProvider=Yo;V.Element=Ec;V.ForwardRef=Qo;V.Fragment=Bo;V.Lazy=Zo;V.Memo=Go;V.Portal=_c;V.Profiler=Vo;V.StrictMode=Wo;V.Suspense=Xo;V.SuspenseList=Ko;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Je(e)===Ho};V.isContextProvider=function(e){return Je(e)===Yo};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ec};V.isForwardRef=function(e){return Je(e)===Qo};V.isFragment=function(e){return Je(e)===Bo};V.isLazy=function(e){return Je(e)===Zo};V.isMemo=function(e){return Je(e)===Go};V.isPortal=function(e){return Je(e)===_c};V.isProfiler=function(e){return Je(e)===Vo};V.isStrictMode=function(e){return Je(e)===Wo};V.isSuspense=function(e){return Je(e)===Xo};V.isSuspenseList=function(e){return Je(e)===Ko};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Bo||e===Vo||e===Wo||e===Xo||e===Ko||e===y3||typeof e=="object"&&e!==null&&(e.$$typeof===Zo||e.$$typeof===Go||e.$$typeof===Yo||e.$$typeof===Ho||e.$$typeof===Qo||e.$$typeof===J0||e.getModuleId!==void 0)};V.typeOf=Je;Z0.exports=V;var g3=Z0.exports;b`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;b`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;b`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;b`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;b`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;b`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;b`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;b`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;b`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;b`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;b`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;b`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;b`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const w3=b`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,x3=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,k3=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,S3=b`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,C3=b`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bc=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,E3=b`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_3=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,b3=b`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,P3=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,N3=b`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,O3=b`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,T3=b`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function I3({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=bc,iterationCount:a=1}){return X0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function R3(e){return e==null}function z3(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function q0(e,t){return n=>n?e():t()}function Ca(e){return q0(e,()=>null)}function ru(e){return Ca(()=>({opacity:0}))(e)}const Jo=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:a=1e3,fraction:i=0,keyframes:o=bc,triggerOnce:l=!1,className:s,style:u,childClassName:f,childStyle:d,children:h,onVisibilityChange:y}=e,g=_.useMemo(()=>I3({keyframes:o,duration:a}),[a,o]);return R3(h)?null:z3(h)?ie(A3,{...e,animationStyles:g,children:String(h)}):g3.isFragment(h)?ie(eh,{...e,animationStyles:g}):ie(i3,{children:_.Children.map(h,(v,C)=>{if(!_.isValidElement(v))return null;const m=r+(t?C*a*n:0);switch(v.type){case"ol":case"ul":return ie(Al,{children:({cx:c})=>ie(v.type,{...v.props,className:c(s,v.props.className),style:Object.assign({},u,v.props.style),children:ie(Jo,{...e,children:v.props.children})})});case"li":return ie(bd,{threshold:i,triggerOnce:l,onChange:y,children:({inView:c,ref:p})=>ie(Al,{children:({cx:x})=>ie(v.type,{...v.props,ref:p,className:x(f,v.props.className),css:Ca(()=>g)(c),style:Object.assign({},d,v.props.style,ru(!c),{animationDelay:m+"ms"})})})});default:return ie(bd,{threshold:i,triggerOnce:l,onChange:y,children:({inView:c,ref:p})=>ie("div",{ref:p,className:s,css:Ca(()=>g)(c),style:Object.assign({},u,ru(!c),{animationDelay:m+"ms"}),children:ie(Al,{children:({cx:x})=>ie(v.type,{...v.props,className:x(f,v.props.className),style:Object.assign({},d,v.props.style)})})})})}})})},j3={display:"inline-block",whiteSpace:"pre"},A3=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:i=1e3,fraction:o=0,triggerOnce:l=!1,className:s,style:u,children:f,onVisibilityChange:d}=e,{ref:h,inView:y}=G0({triggerOnce:l,threshold:o,onChange:d});return q0(()=>ie("div",{ref:h,className:s,style:Object.assign({},u,j3),children:f.split("").map((g,v)=>ie("span",{css:Ca(()=>t)(y),style:{animationDelay:a+v*i*r+"ms"},children:g},v))}),()=>ie(eh,{...e,children:f}))(n)},eh=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:i,children:o,onVisibilityChange:l}=e,{ref:s,inView:u}=G0({triggerOnce:r,threshold:n,onChange:l});return ie("div",{ref:s,className:a,css:Ca(()=>t)(u),style:Object.assign({},i,ru(!u)),children:o})};b`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;b`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;b`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;b`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;b`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const L3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,$3=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,M3=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,D3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,F3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,U3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,B3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,W3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,V3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Y3=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,H3=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Q3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,X3=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function K3(e,t,n){switch(n){case"bottom-left":return t?$3:x3;case"bottom-right":return t?M3:k3;case"down":return e?t?F3:C3:t?D3:S3;case"left":return e?t?B3:E3:t?U3:bc;case"right":return e?t?V3:b3:t?W3:_3;case"top-left":return t?Y3:P3;case"top-right":return t?H3:N3;case"up":return e?t?X3:T3:t?Q3:O3;default:return t?L3:w3}}const Xr=e=>{const{big:t=!1,direction:n,reverse:r=!1,...a}=e,i=_.useMemo(()=>K3(t,r,n),[t,n,r]);return ie(Jo,{keyframes:i,...a})};b`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;b`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;b`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;b`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;b`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;b`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;const G3=b`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;const Ll=e=>ie(Jo,{keyframes:G3,...e});b`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const Z3=b`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,J3=b`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,q3=b`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ex=b`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tx=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,nx=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,rx=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,ax=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function ix(e,t){switch(t){case"down":return e?tx:Z3;case"right":return e?rx:q3;case"up":return e?ax:ex;case"left":default:return e?nx:J3}}const ox=e=>{const{direction:t,reverse:n=!1,...r}=e,a=_.useMemo(()=>ix(n,t),[t,n]);return ie(Jo,{keyframes:a,...r})};b`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const lx="_container_1rn0b_1",sx="_icons_1rn0b_45",ux="_quickAccess_1rn0b_55",cx="_content_1rn0b_69",fx="_contact_1rn0b_105",dx="_location_1rn0b_105",ct={container:lx,icons:sx,quickAccess:ux,content:cx,contact:fx,location:dx};var mx={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},px={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};const hx=()=>(_.useEffect(tc),w.jsxs("footer",{className:ct.container,children:[w.jsxs("div",{className:ct.contact,children:[w.jsx(Ll,{triggerOnce:!0,children:w.jsx("h3",{children:"Contáctanos"})}),w.jsx(Xr,{triggerOnce:!0,children:w.jsxs("div",{className:ct.content,children:[w.jsxs("a",{href:"https://wa.me/+18296490757",children:[w.jsx(qt,{icon:px,className:ct.icons}),"(829) 649-0757"]}),w.jsxs("a",{href:"https://instagram.com/manaclabaseballacademy",target:"_blank",children:[w.jsx(qt,{icon:mx,className:ct.icons}),"@manaclabaseballacademy"]})]})})]}),w.jsxs("div",{className:ct.location,children:[w.jsx(Ll,{triggerOnce:!0,children:w.jsx("h3",{children:"Ubicación"})}),w.jsx(Xr,{triggerOnce:!0,children:w.jsx("div",{className:ct.content,children:w.jsxs("p",{children:[w.jsx(qt,{icon:lw,className:ct.icons}),"Santo Domingo, República Dominicana"]})})})]}),w.jsxs("div",{className:ct.quickAccess,children:[w.jsx(Ll,{triggerOnce:!0,children:w.jsx("h3",{children:"Acceso Rápido"})}),w.jsx(Xr,{triggerOnce:!0,children:w.jsx("div",{className:ct.content,children:w.jsxs("ul",{onClick:at,children:[w.jsx("li",{children:w.jsx(ne,{to:"/",children:"Inicio"})}),w.jsx("li",{children:w.jsx(ne,{to:"/about",children:"Quienes Somos"})}),w.jsx("li",{children:w.jsx(ne,{to:"/trajectory",children:"Trayectoria"})}),w.jsx("li",{children:w.jsx(ne,{to:"/contact",children:"Contacto"})})]})})})]})]})),vx="_container_65mjt_1",yx={container:vx},Ir=({Comp:e})=>w.jsxs("div",{className:yx.container,children:[w.jsx(sw,{}),w.jsx(e,{}),w.jsx(hx,{})]}),gx="_container_p67y2_1",wx="_header_p67y2_13",xx="_mainMedia_p67y2_59",kx="_mainImageContainer_p67y2_101",Sx="_secondSection_p67y2_117",Cx="_animatedChild_p67y2_151",Ex="_pinContainer_p67y2_179",_x="_name_p67y2_235",Rn={container:gx,header:wx,mainMedia:xx,mainImageContainer:kx,secondSection:Sx,animatedChild:Cx,pinContainer:Ex,name:_x},bx="/assets/main-image-b3d2cbe2.jpg",Px="/assets/PORTADA-min-3a8e0a6c.svg",Nx=()=>w.jsxs("div",{className:Rn.container,children:[w.jsxs("section",{className:Rn.mainMedia,children:[w.jsx("div",{className:Rn.mainImageContainer,children:w.jsx("img",{src:bx,alt:""})}),w.jsxs("div",{className:Rn.header,children:[w.jsxs("h1",{children:[w.jsx("span",{className:Rn.name,children:"MANACLA"})," BASEBALL ACADEMY"]}),w.jsx("h2",{children:"Academia de las futuras estrellas del baseball"})]})]}),w.jsx("section",{className:Rn.secondSection,children:w.jsx("img",{src:Px,alt:"Portada"})})]});const Ox="_container_1q6y2_1",Tx="_secondDiv_1q6y2_19",Ix="_imgContainer_1q6y2_27",$l={container:Ox,secondDiv:Tx,imgContainer:Ix},Rx="/assets/TRAYECTORIA-min-93f8eace.svg",zx=()=>w.jsx("div",{className:$l.container,children:w.jsx("div",{className:$l.secondDiv,children:w.jsx("div",{className:$l.imgContainer,children:w.jsx("img",{src:Rx,alt:"Imagen de trayectoria"})})})}),jx="_container_o31le_1",Ax="_wsButton_o31le_53",Lx="_secondDiv_o31le_69",$x="_icon_o31le_99",Ml={container:jx,wsButton:Ax,secondDiv:Lx,icon:$x},Mx=()=>w.jsxs("div",{className:Ml.container,children:[w.jsx("h1",{children:"Contacto"}),w.jsx("div",{className:Ml.secondDiv,children:w.jsxs("a",{className:Ml.wsButton,target:"_blank",href:"https://wa.me/+18296490757",children:[w.jsx("i",{className:"fa-brands fa-whatsapp"}),"Whatsapp"]})})]}),Dx="_container_1ozq8_1",Fx="_information_1ozq8_19",Ux="_media_1ozq8_31",Dl={container:Dx,information:Fx,media:Ux},Bx=()=>w.jsxs("div",{className:Dl.container,children:[w.jsx("div",{className:Dl.media,children:w.jsx("img",{src:"",alt:"Imagen Sobre Nosotros"})}),w.jsx("div",{className:Dl.information,children:w.jsx("p",{children:"Somos un equipo de profesionales dispuestos a contribuir con el desarrollo de jóvenes con deseos de superarse y alcanzar sus sueños en el Baseball, convertirse en en este campo deportivo e impulsarlo a convertirse en jugadores profesionales."})})]}),Wx=[{id:1,name:"Alex",lastName:"González",picturePath:"",videoPath:"",description:"Shortstop with exceptional fielding skills and a powerful bat.",year:"2024"},{id:2,name:"Samantha",lastName:"Ramirez",picturePath:"",videoPath:"",description:"Talented pitcher known for her curveball and control on the mound.",year:"2024"},{id:3,name:"Elijah",lastName:"Martinez",picturePath:"",videoPath:"",description:"Outfielder with great speed and a knack for making spectacular catches.",year:"2024"},{id:4,name:"Isabella",lastName:"López",picturePath:"",videoPath:"",description:"Reliable catcher with a strong arm and a keen eye at the plate.",year:"2024"},{id:5,name:"Liam",lastName:"Sanchez",picturePath:"",videoPath:"",description:"Hard-hitting first baseman with a high on-base percentage.",year:"2024"},{id:6,name:"Ava",lastName:"Flores",picturePath:"",videoPath:"",description:"Skilled infielder with a quick release and precise throws.",year:"2025"},{id:7,name:"Noah",lastName:"Rivera",picturePath:"",videoPath:"",description:"Dominant left-handed pitcher with a devastating slider.",year:"2025"},{id:8,name:"Olivia",lastName:"Gutierrez",picturePath:"",videoPath:"",description:"Versatile utility player who can play multiple positions.",year:"2025"},{id:9,name:"William",lastName:"Diaz",picturePath:"",videoPath:"",description:"Reliable relief pitcher with a deceptive changeup.",year:"2025"},{id:10,name:"Sophia",lastName:"Ortiz",picturePath:"",videoPath:"",description:"Power-hitting outfielder known for her home run prowess.",year:"2025"},{id:11,name:"James",lastName:"Hernandez",picturePath:"",videoPath:"",description:"Strong-armed third baseman with quick reflexes.",year:"2026"},{id:12,name:"Emily",lastName:"Vargas",picturePath:"",videoPath:"",description:"Energetic and speedy leadoff hitter with excellent bunting skills.",year:"2026"},{id:13,name:"Benjamin",lastName:"Jimenez",picturePath:"",videoPath:"",description:"Crafty pitcher with an impressive array of off-speed pitches.",year:"2026"},{id:14,name:"Mia",lastName:"Silva",picturePath:"",videoPath:"",description:"Dynamic base-stealer with an aggressive playing style.",year:"2026"},{id:15,name:"Ethan",lastName:"Rojas",picturePath:"",videoPath:"",description:"Reliable closer with a high-velocity fastball.",year:"2026"},{id:16,name:"Amelia",lastName:"Perez",picturePath:"",videoPath:"",description:"Smooth-fielding second baseman with a consistent bat.",year:"2027"},{id:17,name:"Michael",lastName:"Garcia",picturePath:"",videoPath:"",description:"Powerful right fielder with a cannon arm.",year:"2027"},{id:18,name:"Camila",lastName:"Torres",picturePath:"",videoPath:"",description:"Patient hitter with a high on-base percentage.",year:"2027"},{id:19,name:"Alexander",lastName:"Reyes",picturePath:"",videoPath:"",description:"Evasive base-runner with excellent instincts on the bases.",year:"2027"},{id:20,name:"Avery",lastName:"Gomez",picturePath:"",videoPath:"",description:"Reliable starting pitcher with a good mix of pitches.",year:"2027"},{id:21,name:"Evelyn",lastName:"Herrera",picturePath:"",videoPath:"",description:"Agile and quick shortstop known for her diving plays.",year:"2028"},{id:22,name:"Daniel",lastName:"Castillo",picturePath:"",videoPath:"",description:"Consistent contact hitter with gap-to-gap power.",year:"2028"},{id:23,name:"Harper",lastName:"Andrade",picturePath:"",videoPath:"",description:"Reliable left-handed pitcher with pinpoint control.",year:"2028"},{id:24,name:"Sebastian",lastName:"Fernandez",picturePath:"",videoPath:"",description:"Strong and agile center fielder with a great arm.",year:"2028"},{id:25,name:"Luna",lastName:"Mendoza",picturePath:"",videoPath:"",description:"Versatile switch-hitter capable of playing multiple positions.",year:"2028"}],Vx="_container_18u23_1",Yx="_header_18u23_21",Hx="_imgContainer_18u23_35",Qx="_video_18u23_55",Xx="_secondDiv_18u23_89",Kx="_description_18u23_107",zn={container:Vx,header:Yx,imgContainer:Hx,video:Qx,secondDiv:Xx,description:Kx},Gx=({player:e})=>w.jsx(ox,{triggerOnce:!0,children:w.jsx(Xr,{triggerOnce:!0,delay:5,children:w.jsxs("div",{className:zn.container,children:[w.jsxs("div",{className:zn.secondDiv,children:[w.jsxs("div",{className:zn.header,children:[w.jsx("div",{className:zn.imgContainer,children:w.jsx("img",{src:"",alt:"Imagen Pelotero"})}),w.jsx("h2",{children:`${e.name} ${e.lastName}`})]}),w.jsx("div",{className:zn.description,children:w.jsx(Xr,{cascade:!0,damping:.1,children:w.jsx("p",{children:e.description})})})]}),w.jsx("div",{className:zn.video,children:w.jsx("video",{src:""})})]})})}),Zx="_container_17fcs_1",Jx="_players_17fcs_11",Fl={container:Zx,players:Jx},qx=()=>{const t=ry().year,n=[];return Wx.map(r=>{r.year===t&&n.push(r)}),console.log(n),w.jsxs("div",{className:Fl.container,children:[w.jsxs("h1",{children:["Elegibles ",t]}),w.jsx("div",{className:Fl.players,children:n[0]!==null?n.map(r=>w.jsx(Gx,{player:r})):w.jsx("div",{className:Fl.notFound,children:w.jsxs("h2",{children:["No hay elegibles para el ",t]})})})]})};Bl.createRoot(document.getElementById("root")).render(w.jsx(oo.StrictMode,{children:w.jsx(Cy,{children:w.jsxs(yy,{children:[w.jsx(jn,{path:"/",Component:()=>w.jsx(Ir,{Comp:Nx})}),w.jsx(jn,{path:"/trajectory",Component:()=>w.jsx(Ir,{Comp:zx})}),w.jsx(jn,{path:"/contact",Component:()=>w.jsx(Ir,{Comp:Mx})}),w.jsx(jn,{path:"/about",Component:()=>w.jsx(Ir,{Comp:Bx})}),w.jsx(jn,{path:"/players/:year",Component:()=>w.jsx(Ir,{Comp:qx})})]})})}));
