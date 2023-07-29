function oh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Id={exports:{}},so={},zd={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),lh=Symbol.for("react.portal"),sh=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),dh=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),ph=Symbol.for("react.suspense"),hh=Symbol.for("react.memo"),vh=Symbol.for("react.lazy"),Oc=Symbol.iterator;function gh(e){return e===null||typeof e!="object"?null:(e=Oc&&e[Oc]||e["@@iterator"],typeof e=="function"?e:null)}var Rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ad=Object.assign,Ld={};function hr(e,t,n){this.props=e,this.context=t,this.refs=Ld,this.updater=n||Rd}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $d(){}$d.prototype=hr.prototype;function lu(e,t,n){this.props=e,this.context=t,this.refs=Ld,this.updater=n||Rd}var su=lu.prototype=new $d;su.constructor=lu;Ad(su,hr.prototype);su.isPureReactComponent=!0;var jc=Array.isArray,Md=Object.prototype.hasOwnProperty,uu={current:null},Dd={key:!0,ref:!0,__self:!0,__source:!0};function Fd(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Md.call(t,r)&&!Dd.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:_a,type:e,key:i,ref:o,props:a,_owner:uu.current}}function yh(e,t){return{$$typeof:_a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===_a}function wh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tc=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wh(""+e.key):t.toString(36)}function pi(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case _a:case lh:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+il(o,0):r,jc(a)?(n="",e!=null&&(n=e.replace(Tc,"$&/")+"/"),pi(a,t,n,"",function(u){return u})):a!=null&&(cu(a)&&(a=yh(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Tc,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",jc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+il(i,l);o+=pi(i,t,n,s,a)}else if(s=gh(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+il(i,l++),o+=pi(i,t,n,s,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ma(e,t,n){if(e==null)return e;var r=[],a=0;return pi(e,r,"","",function(i){return t.call(n,i,a++)}),r}function xh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},hi={transition:null},kh={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:hi,ReactCurrentOwner:uu};$.Children={map:Ma,forEach:function(e,t,n){Ma(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ma(e,function(){t++}),t},toArray:function(e){return Ma(e,function(t){return t})||[]},only:function(e){if(!cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=hr;$.Fragment=sh;$.Profiler=ch;$.PureComponent=lu;$.StrictMode=uh;$.Suspense=ph;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kh;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ad({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=uu.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Md.call(t,s)&&!Dd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_a,type:e.type,key:a,ref:i,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:dh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fh,_context:e},e.Consumer=e};$.createElement=Fd;$.createFactory=function(e){var t=Fd.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:mh,render:e}};$.isValidElement=cu;$.lazy=function(e){return{$$typeof:vh,_payload:{_status:-1,_result:e},_init:xh}};$.memo=function(e,t){return{$$typeof:hh,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=hi.transition;hi.transition={};try{e()}finally{hi.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Ne.current.useCallback(e,t)};$.useContext=function(e){return Ne.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ne.current.useEffect(e,t)};$.useId=function(){return Ne.current.useId()};$.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ne.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};$.useRef=function(e){return Ne.current.useRef(e)};$.useState=function(e){return Ne.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ne.current.useTransition()};$.version="18.2.0";zd.exports=$;var S=zd.exports;const uo=Td(S),Vl=oh({__proto__:null,default:uo},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh=S,Ch=Symbol.for("react.element"),_h=Symbol.for("react.fragment"),Eh=Object.prototype.hasOwnProperty,bh=Sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ph={key:!0,ref:!0,__self:!0,__source:!0};function Ud(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Eh.call(t,r)&&!Ph.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ch,type:e,key:i,ref:o,props:a,_owner:bh.current}}so.Fragment=_h;so.jsx=Ud;so.jsxs=Ud;Id.exports=so;var v=Id.exports,Yl={},Bd={exports:{}},We={},Wd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,z){var R=j.length;j.push(z);e:for(;0<R;){var re=R-1>>>1,de=j[re];if(0<a(de,z))j[re]=z,j[R]=de,R=re;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var z=j[0],R=j.pop();if(R!==z){j[0]=R;e:for(var re=0,de=j.length,La=de>>>1;re<La;){var cn=2*(re+1)-1,al=j[cn],fn=cn+1,$a=j[fn];if(0>a(al,R))fn<de&&0>a($a,al)?(j[re]=$a,j[fn]=R,re=fn):(j[re]=al,j[cn]=R,re=cn);else if(fn<de&&0>a($a,R))j[re]=$a,j[fn]=R,re=fn;else break e}}return z}function a(j,z){var R=j.sortIndex-z.sortIndex;return R!==0?R:j.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],f=1,d=null,h=3,y=!1,w=!1,g=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=j)r(u),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(u)}}function x(j){if(g=!1,p(j),!w)if(n(s)!==null)w=!0,nl(k);else{var z=n(u);z!==null&&rl(x,z.startTime-j)}}function k(j,z){w=!1,g&&(g=!1,m(I),I=-1),y=!0;var R=h;try{for(p(z),d=n(s);d!==null&&(!(d.expirationTime>z)||j&&!et());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var de=re(d.expirationTime<=z);z=e.unstable_now(),typeof de=="function"?d.callback=de:d===n(s)&&r(s),p(z)}else r(s);d=n(s)}if(d!==null)var La=!0;else{var cn=n(u);cn!==null&&rl(x,cn.startTime-z),La=!1}return La}finally{d=null,h=R,y=!1}}var P=!1,E=null,I=-1,U=5,A=-1;function et(){return!(e.unstable_now()-A<U)}function kr(){if(E!==null){var j=e.unstable_now();A=j;var z=!0;try{z=E(!0,j)}finally{z?Sr():(P=!1,E=null)}}else P=!1}var Sr;if(typeof c=="function")Sr=function(){c(kr)};else if(typeof MessageChannel<"u"){var Nc=new MessageChannel,ih=Nc.port2;Nc.port1.onmessage=kr,Sr=function(){ih.postMessage(null)}}else Sr=function(){_(kr,0)};function nl(j){E=j,P||(P=!0,Sr())}function rl(j,z){I=_(function(){j(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,nl(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var R=h;h=z;try{return j()}finally{h=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var R=h;h=j;try{return z()}finally{h=R}},e.unstable_scheduleCallback=function(j,z,R){var re=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?re+R:re):R=re,j){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=R+de,j={id:f++,callback:z,priorityLevel:j,startTime:R,expirationTime:de,sortIndex:-1},R>re?(j.sortIndex=R,t(u,j),n(s)===null&&j===n(u)&&(g?(m(I),I=-1):g=!0,rl(x,R-re))):(j.sortIndex=de,t(s,j),w||y||(w=!0,nl(k))),j},e.unstable_shouldYield=et,e.unstable_wrapCallback=function(j){var z=h;return function(){var R=h;h=z;try{return j.apply(this,arguments)}finally{h=R}}}})(Vd);Wd.exports=Vd;var Nh=Wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=S,Be=Nh;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,Kr={};function jn(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Kr[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,Oh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ic={},zc={};function jh(e){return Hl.call(zc,e)?!0:Hl.call(Ic,e)?!1:Oh.test(e)?zc[e]=!0:(Ic[e]=!0,!1)}function Th(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ih(e,t,n,r){if(t===null||typeof t>"u"||Th(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var fu=/[\-:]([a-z])/g;function du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fu,du);we[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fu,du);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fu,du);we[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function mu(e,t,n,r){var a=we.hasOwnProperty(t)?we[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ih(t,n,a,r)&&(n=null),r||a===null?jh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),pu=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),Qd=Symbol.for("react.provider"),Xd=Symbol.for("react.context"),hu=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),vu=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Kd=Symbol.for("react.offscreen"),Rc=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=Rc&&e[Rc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ol;function Ir(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var ll=!1;function sl(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||a[o]!==i[l]){var s=`
`+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ir(e):""}function zh(e){switch(e.tag){case 5:return Ir(e.type);case 16:return Ir("Lazy");case 13:return Ir("Suspense");case 19:return Ir("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function Gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case $n:return"Portal";case Ql:return"Profiler";case pu:return"StrictMode";case Xl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xd:return(e.displayName||"Context")+".Consumer";case Qd:return(e._context.displayName||"Context")+".Provider";case hu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vu:return t=e.displayName||null,t!==null?t:Gl(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return Gl(e(t))}catch{}}return null}function Rh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gl(t);case 8:return t===pu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ah(e){var t=Gd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fa(e){e._valueTracker||(e._valueTracker=Ah(e))}function Jd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zd(e,t){t=t.checked,t!=null&&mu(e,"checked",t,!1)}function Zl(e,t){Zd(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&ql(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ql(e,t,n){(t!=="number"||Ti(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function es(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $c(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(zr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function qd(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function em(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ts(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?em(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ua,tm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ua.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lh=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){Lh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$r[t]=$r[e]})});function nm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$r.hasOwnProperty(e)&&$r[e]?(""+t).trim():t+"px"}function rm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=nm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var $h=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ns(e,t){if(t){if($h[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function rs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var as=null;function gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var is=null,qn=null,er=null;function Dc(e){if(e=Pa(e)){if(typeof is!="function")throw Error(C(280));var t=e.stateNode;t&&(t=ho(t),is(e.stateNode,e.type,t))}}function am(e){qn?er?er.push(e):er=[e]:qn=e}function im(){if(qn){var e=qn,t=er;if(er=qn=null,Dc(e),t)for(e=0;e<t.length;e++)Dc(t[e])}}function om(e,t){return e(t)}function lm(){}var ul=!1;function sm(e,t,n){if(ul)return e(t,n);ul=!0;try{return om(e,t,n)}finally{ul=!1,(qn!==null||er!==null)&&(lm(),im())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var os=!1;if(Et)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){os=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{os=!1}function Mh(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Mr=!1,Ii=null,zi=!1,ls=null,Dh={onError:function(e){Mr=!0,Ii=e}};function Fh(e,t,n,r,a,i,o,l,s){Mr=!1,Ii=null,Mh.apply(Dh,arguments)}function Uh(e,t,n,r,a,i,o,l,s){if(Fh.apply(this,arguments),Mr){if(Mr){var u=Ii;Mr=!1,Ii=null}else throw Error(C(198));zi||(zi=!0,ls=u)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function um(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fc(e){if(Tn(e)!==e)throw Error(C(188))}function Bh(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Fc(a),e;if(i===r)return Fc(a),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function cm(e){return e=Bh(e),e!==null?fm(e):null}function fm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fm(e);if(t!==null)return t;e=e.sibling}return null}var dm=Be.unstable_scheduleCallback,Uc=Be.unstable_cancelCallback,Wh=Be.unstable_shouldYield,Vh=Be.unstable_requestPaint,ie=Be.unstable_now,Yh=Be.unstable_getCurrentPriorityLevel,yu=Be.unstable_ImmediatePriority,mm=Be.unstable_UserBlockingPriority,Ri=Be.unstable_NormalPriority,Hh=Be.unstable_LowPriority,pm=Be.unstable_IdlePriority,co=null,gt=null;function Qh(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(co,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Gh,Xh=Math.log,Kh=Math.LN2;function Gh(e){return e>>>=0,e===0?32:31-(Xh(e)/Kh|0)|0}var Ba=64,Wa=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~a;l!==0?r=Rr(l):(i&=o,i!==0&&(r=Rr(i)))}else o=n&~a,o!==0?r=Rr(o):i!==0&&(r=Rr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),a=1<<n,r|=e[n],t&=~a;return r}function Jh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];s===-1?(!(l&n)||l&r)&&(a[o]=Jh(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hm(){var e=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),e}function cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ea(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function qh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function wu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var B=0;function vm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var gm,xu,ym,wm,xm,us=!1,Va=[],Vt=null,Yt=null,Ht=null,Zr=new Map,qr=new Map,Mt=[],e1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bc(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function Er(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Pa(t),t!==null&&xu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function t1(e,t,n,r,a){switch(t){case"focusin":return Vt=Er(Vt,e,t,n,r,a),!0;case"dragenter":return Yt=Er(Yt,e,t,n,r,a),!0;case"mouseover":return Ht=Er(Ht,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Zr.set(i,Er(Zr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,qr.set(i,Er(qr.get(i)||null,e,t,n,r,a)),!0}return!1}function km(e){var t=vn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=um(n),t!==null){e.blockedOn=t,xm(e.priority,function(){ym(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);as=r,n.target.dispatchEvent(r),as=null}else return t=Pa(n),t!==null&&xu(t),e.blockedOn=n,!1;t.shift()}return!0}function Wc(e,t,n){vi(e)&&n.delete(t)}function n1(){us=!1,Vt!==null&&vi(Vt)&&(Vt=null),Yt!==null&&vi(Yt)&&(Yt=null),Ht!==null&&vi(Ht)&&(Ht=null),Zr.forEach(Wc),qr.forEach(Wc)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,us||(us=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,n1)))}function ea(e){function t(a){return br(a,e)}if(0<Va.length){br(Va[0],e);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&br(Vt,e),Yt!==null&&br(Yt,e),Ht!==null&&br(Ht,e),Zr.forEach(t),qr.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)km(n),n.blockedOn===null&&Mt.shift()}var tr=It.ReactCurrentBatchConfig,Li=!0;function r1(e,t,n,r){var a=B,i=tr.transition;tr.transition=null;try{B=1,ku(e,t,n,r)}finally{B=a,tr.transition=i}}function a1(e,t,n,r){var a=B,i=tr.transition;tr.transition=null;try{B=4,ku(e,t,n,r)}finally{B=a,tr.transition=i}}function ku(e,t,n,r){if(Li){var a=cs(e,t,n,r);if(a===null)xl(e,t,r,$i,n),Bc(e,r);else if(t1(a,e,t,n,r))r.stopPropagation();else if(Bc(e,r),t&4&&-1<e1.indexOf(e)){for(;a!==null;){var i=Pa(a);if(i!==null&&gm(i),i=cs(e,t,n,r),i===null&&xl(e,t,r,$i,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var $i=null;function cs(e,t,n,r){if($i=null,e=gu(r),e=vn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=um(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $i=e,null}function Sm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yh()){case yu:return 1;case mm:return 4;case Ri:case Hh:return 16;case pm:return 536870912;default:return 16}default:return 16}}var Ft=null,Su=null,gi=null;function Cm(){if(gi)return gi;var e,t=Su,n=t.length,r,a="value"in Ft?Ft.value:Ft.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return gi=a.slice(e,1<r?1-r:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ya(){return!0}function Vc(){return!1}function Ve(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ya:Vc,this.isPropagationStopped=Vc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),t}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=Ve(vr),ba=ee({},vr,{view:0,detail:0}),i1=Ve(ba),fl,dl,Pr,fo=ee({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(fl=e.screenX-Pr.screenX,dl=e.screenY-Pr.screenY):dl=fl=0,Pr=e),fl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),Yc=Ve(fo),o1=ee({},fo,{dataTransfer:0}),l1=Ve(o1),s1=ee({},ba,{relatedTarget:0}),ml=Ve(s1),u1=ee({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),c1=Ve(u1),f1=ee({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),d1=Ve(f1),m1=ee({},vr,{data:0}),Hc=Ve(m1),p1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=v1[e])?!!t[e]:!1}function _u(){return g1}var y1=ee({},ba,{key:function(e){if(e.key){var t=p1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?h1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w1=Ve(y1),x1=ee({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qc=Ve(x1),k1=ee({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),S1=Ve(k1),C1=ee({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_1=Ve(C1),E1=ee({},fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b1=Ve(E1),P1=[9,13,27,32],Eu=Et&&"CompositionEvent"in window,Dr=null;Et&&"documentMode"in document&&(Dr=document.documentMode);var N1=Et&&"TextEvent"in window&&!Dr,_m=Et&&(!Eu||Dr&&8<Dr&&11>=Dr),Xc=String.fromCharCode(32),Kc=!1;function Em(e,t){switch(e){case"keyup":return P1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function O1(e,t){switch(e){case"compositionend":return bm(t);case"keypress":return t.which!==32?null:(Kc=!0,Xc);case"textInput":return e=t.data,e===Xc&&Kc?null:e;default:return null}}function j1(e,t){if(Dn)return e==="compositionend"||!Eu&&Em(e,t)?(e=Cm(),gi=Su=Ft=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _m&&t.locale!=="ko"?null:t.data;default:return null}}var T1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!T1[e.type]:t==="textarea"}function Pm(e,t,n,r){am(r),t=Mi(t,"onChange"),0<t.length&&(n=new Cu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,ta=null;function I1(e){Mm(e,0)}function mo(e){var t=Bn(e);if(Jd(t))return e}function z1(e,t){if(e==="change")return t}var Nm=!1;if(Et){var pl;if(Et){var hl="oninput"in document;if(!hl){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),hl=typeof Jc.oninput=="function"}pl=hl}else pl=!1;Nm=pl&&(!document.documentMode||9<document.documentMode)}function Zc(){Fr&&(Fr.detachEvent("onpropertychange",Om),ta=Fr=null)}function Om(e){if(e.propertyName==="value"&&mo(ta)){var t=[];Pm(t,ta,e,gu(e)),sm(I1,t)}}function R1(e,t,n){e==="focusin"?(Zc(),Fr=t,ta=n,Fr.attachEvent("onpropertychange",Om)):e==="focusout"&&Zc()}function A1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mo(ta)}function L1(e,t){if(e==="click")return mo(t)}function $1(e,t){if(e==="input"||e==="change")return mo(t)}function M1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:M1;function na(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Hl.call(t,a)||!st(e[a],t[a]))return!1}return!0}function qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ef(e,t){var n=qc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qc(n)}}function jm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tm(){for(var e=window,t=Ti();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ti(e.document)}return t}function bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D1(e){var t=Tm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jm(n.ownerDocument.documentElement,n)){if(r!==null&&bu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=ef(n,i);var o=ef(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var F1=Et&&"documentMode"in document&&11>=document.documentMode,Fn=null,fs=null,Ur=null,ds=!1;function tf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ds||Fn==null||Fn!==Ti(r)||(r=Fn,"selectionStart"in r&&bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&na(Ur,r)||(Ur=r,r=Mi(fs,"onSelect"),0<r.length&&(t=new Cu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fn)))}function Ha(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},vl={},Im={};Et&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function po(e){if(vl[e])return vl[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Im)return vl[e]=t[n];return e}var zm=po("animationend"),Rm=po("animationiteration"),Am=po("animationstart"),Lm=po("transitionend"),$m=new Map,nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){$m.set(e,t),jn(t,[e])}for(var gl=0;gl<nf.length;gl++){var yl=nf[gl],U1=yl.toLowerCase(),B1=yl[0].toUpperCase()+yl.slice(1);on(U1,"on"+B1)}on(zm,"onAnimationEnd");on(Rm,"onAnimationIteration");on(Am,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(Lm,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));function rf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uh(r,t,void 0,e),e.currentTarget=null}function Mm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;rf(a,l,u),i=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;rf(a,l,u),i=s}}}if(zi)throw e=ls,zi=!1,ls=null,e}function H(e,t){var n=t[gs];n===void 0&&(n=t[gs]=new Set);var r=e+"__bubble";n.has(r)||(Dm(t,e,2,!1),n.add(r))}function wl(e,t,n){var r=0;t&&(r|=4),Dm(n,e,r,t)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function ra(e){if(!e[Qa]){e[Qa]=!0,Hd.forEach(function(n){n!=="selectionchange"&&(W1.has(n)||wl(n,!1,e),wl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qa]||(t[Qa]=!0,wl("selectionchange",!1,t))}}function Dm(e,t,n,r){switch(Sm(t)){case 1:var a=r1;break;case 4:a=a1;break;default:a=ku}n=a.bind(null,t,n,e),a=void 0,!os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;o=o.return}for(;l!==null;){if(o=vn(l),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}l=l.parentNode}}r=r.return}sm(function(){var u=i,f=gu(n),d=[];e:{var h=$m.get(e);if(h!==void 0){var y=Cu,w=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":y=w1;break;case"focusin":w="focus",y=ml;break;case"focusout":w="blur",y=ml;break;case"beforeblur":case"afterblur":y=ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=l1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=S1;break;case zm:case Rm:case Am:y=c1;break;case Lm:y=_1;break;case"scroll":y=i1;break;case"wheel":y=b1;break;case"copy":case"cut":case"paste":y=d1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Qc}var g=(t&4)!==0,_=!g&&e==="scroll",m=g?h!==null?h+"Capture":null:h;g=[];for(var c=u,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,m!==null&&(x=Jr(c,m),x!=null&&g.push(aa(c,x,p)))),_)break;c=c.return}0<g.length&&(h=new y(h,w,null,n,f),d.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==as&&(w=n.relatedTarget||n.fromElement)&&(vn(w)||w[bt]))break e;if((y||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?vn(w):null,w!==null&&(_=Tn(w),w!==_||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(g=Yc,x="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=Qc,x="onPointerLeave",m="onPointerEnter",c="pointer"),_=y==null?h:Bn(y),p=w==null?h:Bn(w),h=new g(x,c+"leave",y,n,f),h.target=_,h.relatedTarget=p,x=null,vn(f)===u&&(g=new g(m,c+"enter",w,n,f),g.target=p,g.relatedTarget=_,x=g),_=x,y&&w)t:{for(g=y,m=w,c=0,p=g;p;p=zn(p))c++;for(p=0,x=m;x;x=zn(x))p++;for(;0<c-p;)g=zn(g),c--;for(;0<p-c;)m=zn(m),p--;for(;c--;){if(g===m||m!==null&&g===m.alternate)break t;g=zn(g),m=zn(m)}g=null}else g=null;y!==null&&af(d,h,y,g,!1),w!==null&&_!==null&&af(d,_,w,g,!0)}}e:{if(h=u?Bn(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var k=z1;else if(Gc(h))if(Nm)k=$1;else{k=A1;var P=R1}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=L1);if(k&&(k=k(e,u))){Pm(d,k,n,f);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&ql(h,"number",h.value)}switch(P=u?Bn(u):window,e){case"focusin":(Gc(P)||P.contentEditable==="true")&&(Fn=P,fs=u,Ur=null);break;case"focusout":Ur=fs=Fn=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,tf(d,n,f);break;case"selectionchange":if(F1)break;case"keydown":case"keyup":tf(d,n,f)}var E;if(Eu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Dn?Em(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(_m&&n.locale!=="ko"&&(Dn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Dn&&(E=Cm()):(Ft=f,Su="value"in Ft?Ft.value:Ft.textContent,Dn=!0)),P=Mi(u,I),0<P.length&&(I=new Hc(I,e,null,n,f),d.push({event:I,listeners:P}),E?I.data=E:(E=bm(n),E!==null&&(I.data=E)))),(E=N1?O1(e,n):j1(e,n))&&(u=Mi(u,"onBeforeInput"),0<u.length&&(f=new Hc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=E))}Mm(d,t)})}function aa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Jr(e,n),i!=null&&r.unshift(aa(e,i,a)),i=Jr(e,t),i!=null&&r.push(aa(e,i,a))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function af(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,a?(s=Jr(n,i),s!=null&&o.unshift(aa(n,s,l))):a||(s=Jr(n,i),s!=null&&o.push(aa(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var V1=/\r\n?/g,Y1=/\u0000|\uFFFD/g;function of(e){return(typeof e=="string"?e:""+e).replace(V1,`
`).replace(Y1,"")}function Xa(e,t,n){if(t=of(t),of(e)!==t&&n)throw Error(C(425))}function Di(){}var ms=null,ps=null;function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vs=typeof setTimeout=="function"?setTimeout:void 0,H1=typeof clearTimeout=="function"?clearTimeout:void 0,lf=typeof Promise=="function"?Promise:void 0,Q1=typeof queueMicrotask=="function"?queueMicrotask:typeof lf<"u"?function(e){return lf.resolve(null).then(e).catch(X1)}:vs;function X1(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),ea(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);ea(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),ht="__reactFiber$"+gr,ia="__reactProps$"+gr,bt="__reactContainer$"+gr,gs="__reactEvents$"+gr,K1="__reactListeners$"+gr,G1="__reactHandles$"+gr;function vn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sf(e);e!==null;){if(n=e[ht])return n;e=sf(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){return e=e[ht]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ho(e){return e[ia]||null}var ys=[],Wn=-1;function ln(e){return{current:e}}function K(e){0>Wn||(e.current=ys[Wn],ys[Wn]=null,Wn--)}function Y(e,t){Wn++,ys[Wn]=e.current,e.current=t}var tn={},_e=ln(tn),ze=ln(!1),Cn=tn;function lr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Re(e){return e=e.childContextTypes,e!=null}function Fi(){K(ze),K(_e)}function uf(e,t,n){if(_e.current!==tn)throw Error(C(168));Y(_e,t),Y(ze,n)}function Fm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(C(108,Rh(e)||"Unknown",a));return ee({},n,r)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,Cn=_e.current,Y(_e,e),Y(ze,ze.current),!0}function cf(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Fm(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,K(ze),K(_e),Y(_e,e)):K(ze),Y(ze,n)}var kt=null,vo=!1,Sl=!1;function Um(e){kt===null?kt=[e]:kt.push(e)}function J1(e){vo=!0,Um(e)}function sn(){if(!Sl&&kt!==null){Sl=!0;var e=0,t=B;try{var n=kt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,vo=!1}catch(a){throw kt!==null&&(kt=kt.slice(e+1)),dm(yu,sn),a}finally{B=t,Sl=!1}}return null}var Vn=[],Yn=0,Bi=null,Wi=0,Qe=[],Xe=0,_n=null,St=1,Ct="";function dn(e,t){Vn[Yn++]=Wi,Vn[Yn++]=Bi,Bi=e,Wi=t}function Bm(e,t,n){Qe[Xe++]=St,Qe[Xe++]=Ct,Qe[Xe++]=_n,_n=e;var r=St;e=Ct;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,St=1<<32-ot(t)+a|n<<a|r,Ct=i+e}else St=1<<i|n<<a|r,Ct=e}function Pu(e){e.return!==null&&(dn(e,1),Bm(e,1,0))}function Nu(e){for(;e===Bi;)Bi=Vn[--Yn],Vn[Yn]=null,Wi=Vn[--Yn],Vn[Yn]=null;for(;e===_n;)_n=Qe[--Xe],Qe[Xe]=null,Ct=Qe[--Xe],Qe[Xe]=null,St=Qe[--Xe],Qe[Xe]=null}var Fe=null,De=null,J=!1,at=null;function Wm(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ff(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,De=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:St,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,De=null,!0):!1;default:return!1}}function ws(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xs(e){if(J){var t=De;if(t){var n=t;if(!ff(e,t)){if(ws(e))throw Error(C(418));t=Qt(n.nextSibling);var r=Fe;t&&ff(e,t)?Wm(r,n):(e.flags=e.flags&-4097|2,J=!1,Fe=e)}}else{if(ws(e))throw Error(C(418));e.flags=e.flags&-4097|2,J=!1,Fe=e}}}function df(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function Ka(e){if(e!==Fe)return!1;if(!J)return df(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hs(e.type,e.memoizedProps)),t&&(t=De)){if(ws(e))throw Vm(),Error(C(418));for(;t;)Wm(e,t),t=Qt(t.nextSibling)}if(df(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Fe?Qt(e.stateNode.nextSibling):null;return!0}function Vm(){for(var e=De;e;)e=Qt(e.nextSibling)}function sr(){De=Fe=null,J=!1}function Ou(e){at===null?at=[e]:at.push(e)}var Z1=It.ReactCurrentBatchConfig;function nt(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vi=ln(null),Yi=null,Hn=null,ju=null;function Tu(){ju=Hn=Yi=null}function Iu(e){var t=Vi.current;K(Vi),e._currentValue=t}function ks(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){Yi=e,ju=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(ju!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(Yi===null)throw Error(C(308));Hn=e,Yi.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var gn=null;function zu(e){gn===null?gn=[e]:gn.push(e)}function Ym(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,zu(t)):(n.next=a.next,a.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Pt(e,n)}return a=r.interleaved,a===null?(t.next=t,zu(r)):(t.next=a.next,a.next=t),r.interleaved=t,Pt(e,n)}function wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wu(e,n)}}function mf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var a=e.updateQueue;$t=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?i=u:o.next=u,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var d=a.baseState;o=0,f=u=s=null,l=i;do{var h=l.lane,y=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,g=l;switch(h=t,y=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){d=w.call(y,d,h);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,h=typeof w=="function"?w.call(y,d,h):w,h==null)break e;d=ee({},d,h);break e;case 2:$t=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,s=d):f=f.next=y,o|=h;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(1);if(f===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);bn|=o,e.lanes=o,e.memoizedState=d}}function pf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(C(191,a));a.call(r)}}}var Qm=new Yd.Component().refs;function Ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var go={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),a=Gt(e),i=_t(r,a);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,a),t!==null&&(lt(t,e,a,r),wi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),a=Gt(e),i=_t(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,a),t!==null&&(lt(t,e,a,r),wi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Gt(e),a=_t(n,r);a.tag=2,t!=null&&(a.callback=t),t=Xt(e,a,r),t!==null&&(lt(t,e,r,n),wi(t,e,r))}};function hf(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!na(n,r)||!na(a,i):!0}function Xm(e,t,n){var r=!1,a=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=Je(i):(a=Re(t)?Cn:_e.current,r=t.contextTypes,i=(r=r!=null)?lr(e,a):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function vf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Qm,Ru(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Je(i):(i=Re(t)?Cn:_e.current,a.context=lr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ss(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&go.enqueueReplaceState(a,a.state,null),Hi(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=a.refs;l===Qm&&(l=a.refs={}),o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Ga(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gf(e){var t=e._init;return t(e._payload)}function Km(e){function t(m,c){if(e){var p=m.deletions;p===null?(m.deletions=[c],m.flags|=16):p.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)t(m,c),c=c.sibling;return null}function r(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function a(m,c){return m=Jt(m,c),m.index=0,m.sibling=null,m}function i(m,c,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<c?(m.flags|=2,c):p):(m.flags|=2,c)):(m.flags|=1048576,c)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,c,p,x){return c===null||c.tag!==6?(c=Ol(p,m.mode,x),c.return=m,c):(c=a(c,p),c.return=m,c)}function s(m,c,p,x){var k=p.type;return k===Mn?f(m,c,p.props.children,x,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lt&&gf(k)===c.type)?(x=a(c,p.props),x.ref=Nr(m,c,p),x.return=m,x):(x=Ei(p.type,p.key,p.props,null,m.mode,x),x.ref=Nr(m,c,p),x.return=m,x)}function u(m,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=jl(p,m.mode,x),c.return=m,c):(c=a(c,p.children||[]),c.return=m,c)}function f(m,c,p,x,k){return c===null||c.tag!==7?(c=Sn(p,m.mode,x,k),c.return=m,c):(c=a(c,p),c.return=m,c)}function d(m,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ol(""+c,m.mode,p),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Da:return p=Ei(c.type,c.key,c.props,null,m.mode,p),p.ref=Nr(m,null,c),p.return=m,p;case $n:return c=jl(c,m.mode,p),c.return=m,c;case Lt:var x=c._init;return d(m,x(c._payload),p)}if(zr(c)||Cr(c))return c=Sn(c,m.mode,p,null),c.return=m,c;Ga(m,c)}return null}function h(m,c,p,x){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(m,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Da:return p.key===k?s(m,c,p,x):null;case $n:return p.key===k?u(m,c,p,x):null;case Lt:return k=p._init,h(m,c,k(p._payload),x)}if(zr(p)||Cr(p))return k!==null?null:f(m,c,p,x,null);Ga(m,p)}return null}function y(m,c,p,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(p)||null,l(c,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Da:return m=m.get(x.key===null?p:x.key)||null,s(c,m,x,k);case $n:return m=m.get(x.key===null?p:x.key)||null,u(c,m,x,k);case Lt:var P=x._init;return y(m,c,p,P(x._payload),k)}if(zr(x)||Cr(x))return m=m.get(p)||null,f(c,m,x,k,null);Ga(c,x)}return null}function w(m,c,p,x){for(var k=null,P=null,E=c,I=c=0,U=null;E!==null&&I<p.length;I++){E.index>I?(U=E,E=null):U=E.sibling;var A=h(m,E,p[I],x);if(A===null){E===null&&(E=U);break}e&&E&&A.alternate===null&&t(m,E),c=i(A,c,I),P===null?k=A:P.sibling=A,P=A,E=U}if(I===p.length)return n(m,E),J&&dn(m,I),k;if(E===null){for(;I<p.length;I++)E=d(m,p[I],x),E!==null&&(c=i(E,c,I),P===null?k=E:P.sibling=E,P=E);return J&&dn(m,I),k}for(E=r(m,E);I<p.length;I++)U=y(E,m,I,p[I],x),U!==null&&(e&&U.alternate!==null&&E.delete(U.key===null?I:U.key),c=i(U,c,I),P===null?k=U:P.sibling=U,P=U);return e&&E.forEach(function(et){return t(m,et)}),J&&dn(m,I),k}function g(m,c,p,x){var k=Cr(p);if(typeof k!="function")throw Error(C(150));if(p=k.call(p),p==null)throw Error(C(151));for(var P=k=null,E=c,I=c=0,U=null,A=p.next();E!==null&&!A.done;I++,A=p.next()){E.index>I?(U=E,E=null):U=E.sibling;var et=h(m,E,A.value,x);if(et===null){E===null&&(E=U);break}e&&E&&et.alternate===null&&t(m,E),c=i(et,c,I),P===null?k=et:P.sibling=et,P=et,E=U}if(A.done)return n(m,E),J&&dn(m,I),k;if(E===null){for(;!A.done;I++,A=p.next())A=d(m,A.value,x),A!==null&&(c=i(A,c,I),P===null?k=A:P.sibling=A,P=A);return J&&dn(m,I),k}for(E=r(m,E);!A.done;I++,A=p.next())A=y(E,m,I,A.value,x),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?I:A.key),c=i(A,c,I),P===null?k=A:P.sibling=A,P=A);return e&&E.forEach(function(kr){return t(m,kr)}),J&&dn(m,I),k}function _(m,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Mn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Da:e:{for(var k=p.key,P=c;P!==null;){if(P.key===k){if(k=p.type,k===Mn){if(P.tag===7){n(m,P.sibling),c=a(P,p.props.children),c.return=m,m=c;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lt&&gf(k)===P.type){n(m,P.sibling),c=a(P,p.props),c.ref=Nr(m,P,p),c.return=m,m=c;break e}n(m,P);break}else t(m,P);P=P.sibling}p.type===Mn?(c=Sn(p.props.children,m.mode,x,p.key),c.return=m,m=c):(x=Ei(p.type,p.key,p.props,null,m.mode,x),x.ref=Nr(m,c,p),x.return=m,m=x)}return o(m);case $n:e:{for(P=p.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(m,c.sibling),c=a(c,p.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else t(m,c);c=c.sibling}c=jl(p,m.mode,x),c.return=m,m=c}return o(m);case Lt:return P=p._init,_(m,c,P(p._payload),x)}if(zr(p))return w(m,c,p,x);if(Cr(p))return g(m,c,p,x);Ga(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(m,c.sibling),c=a(c,p),c.return=m,m=c):(n(m,c),c=Ol(p,m.mode,x),c.return=m,m=c),o(m)):n(m,c)}return _}var ur=Km(!0),Gm=Km(!1),Na={},yt=ln(Na),oa=ln(Na),la=ln(Na);function yn(e){if(e===Na)throw Error(C(174));return e}function Au(e,t){switch(Y(la,t),Y(oa,e),Y(yt,Na),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ts(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ts(t,e)}K(yt),Y(yt,t)}function cr(){K(yt),K(oa),K(la)}function Jm(e){yn(la.current);var t=yn(yt.current),n=ts(t,e.type);t!==n&&(Y(oa,e),Y(yt,n))}function Lu(e){oa.current===e&&(K(yt),K(oa))}var Z=ln(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cl=[];function $u(){for(var e=0;e<Cl.length;e++)Cl[e]._workInProgressVersionPrimary=null;Cl.length=0}var xi=It.ReactCurrentDispatcher,_l=It.ReactCurrentBatchConfig,En=0,q=null,ue=null,me=null,Xi=!1,Br=!1,sa=0,q1=0;function xe(){throw Error(C(321))}function Mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Du(e,t,n,r,a,i){if(En=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?rv:av,e=n(r,a),Br){i=0;do{if(Br=!1,sa=0,25<=i)throw Error(C(301));i+=1,me=ue=null,t.updateQueue=null,xi.current=iv,e=n(r,a)}while(Br)}if(xi.current=Ki,t=ue!==null&&ue.next!==null,En=0,me=ue=q=null,Xi=!1,t)throw Error(C(300));return e}function Fu(){var e=sa!==0;return sa=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?q.memoizedState=me=e:me=me.next=e,me}function Ze(){if(ue===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=me===null?q.memoizedState:me.next;if(t!==null)me=t,ue=e;else{if(e===null)throw Error(C(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},me===null?q.memoizedState=me=e:me=me.next=e}return me}function ua(e,t){return typeof t=="function"?t(e):t}function El(e){var t=Ze(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ue,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=o=null,s=null,u=i;do{var f=u.lane;if((En&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,q.lanes|=f,bn|=f}u=u.next}while(u!==null&&u!==i);s===null?o=r:s.next=l,st(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,q.lanes|=i,bn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);st(i,t.memoizedState)||(Ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Zm(){}function qm(e,t){var n=q,r=Ze(),a=t(),i=!st(r.memoizedState,a);if(i&&(r.memoizedState=a,Ie=!0),r=r.queue,Uu(np.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,ca(9,tp.bind(null,n,r,a,t),void 0,null),pe===null)throw Error(C(349));En&30||ep(n,t,a)}return a}function ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tp(e,t,n,r){t.value=n,t.getSnapshot=r,rp(t)&&ap(e)}function np(e,t,n){return n(function(){rp(t)&&ap(e)})}function rp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function ap(e){var t=Pt(e,1);t!==null&&lt(t,e,1,-1)}function yf(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t.queue=e,e=e.dispatch=nv.bind(null,q,e),[t.memoizedState,e]}function ca(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ip(){return Ze().memoizedState}function ki(e,t,n,r){var a=ft();q.flags|=e,a.memoizedState=ca(1|t,n,void 0,r===void 0?null:r)}function yo(e,t,n,r){var a=Ze();r=r===void 0?null:r;var i=void 0;if(ue!==null){var o=ue.memoizedState;if(i=o.destroy,r!==null&&Mu(r,o.deps)){a.memoizedState=ca(t,n,i,r);return}}q.flags|=e,a.memoizedState=ca(1|t,n,i,r)}function wf(e,t){return ki(8390656,8,e,t)}function Uu(e,t){return yo(2048,8,e,t)}function op(e,t){return yo(4,2,e,t)}function lp(e,t){return yo(4,4,e,t)}function sp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function up(e,t,n){return n=n!=null?n.concat([e]):null,yo(4,4,sp.bind(null,t,e),n)}function Bu(){}function cp(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fp(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dp(e,t,n){return En&21?(st(n,t)||(n=hm(),q.lanes|=n,bn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function ev(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=_l.transition;_l.transition={};try{e(!1),t()}finally{B=n,_l.transition=r}}function mp(){return Ze().memoizedState}function tv(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pp(e))hp(t,n);else if(n=Ym(e,t,n,r),n!==null){var a=Pe();lt(n,e,r,a),vp(n,t,r)}}function nv(e,t,n){var r=Gt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pp(e))hp(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,st(l,o)){var s=t.interleaved;s===null?(a.next=a,zu(t)):(a.next=s.next,s.next=a),t.interleaved=a;return}}catch{}finally{}n=Ym(e,t,a,r),n!==null&&(a=Pe(),lt(n,e,r,a),vp(n,t,r))}}function pp(e){var t=e.alternate;return e===q||t!==null&&t===q}function hp(e,t){Br=Xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wu(e,n)}}var Ki={readContext:Je,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},rv={readContext:Je,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:wf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ki(4194308,4,sp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return ki(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tv.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:yf,useDebugValue:Bu,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=yf(!1),t=e[0];return e=ev.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,a=ft();if(J){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),pe===null)throw Error(C(349));En&30||ep(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,wf(np.bind(null,r,i,e),[e]),r.flags|=2048,ca(9,tp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=pe.identifierPrefix;if(J){var n=Ct,r=St;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=q1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},av={readContext:Je,useCallback:cp,useContext:Je,useEffect:Uu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:fp,useReducer:El,useRef:ip,useState:function(){return El(ua)},useDebugValue:Bu,useDeferredValue:function(e){var t=Ze();return dp(t,ue.memoizedState,e)},useTransition:function(){var e=El(ua)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Zm,useSyncExternalStore:qm,useId:mp,unstable_isNewReconciler:!1},iv={readContext:Je,useCallback:cp,useContext:Je,useEffect:Uu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:fp,useReducer:bl,useRef:ip,useState:function(){return bl(ua)},useDebugValue:Bu,useDeferredValue:function(e){var t=Ze();return ue===null?t.memoizedState=e:dp(t,ue.memoizedState,e)},useTransition:function(){var e=bl(ua)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Zm,useSyncExternalStore:qm,useId:mp,unstable_isNewReconciler:!1};function fr(e,t){try{var n="",r=t;do n+=zh(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _s(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ov=typeof WeakMap=="function"?WeakMap:Map;function gp(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ji||(Ji=!0,Rs=r),_s(e,t)},n}function yp(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){_s(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_s(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function xf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ov;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=xv.bind(null,e,t,n),t.then(e,e))}function kf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sf(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e)}var lv=It.ReactCurrentOwner,Ie=!1;function be(e,t,n,r){t.child=e===null?Gm(t,null,n,r):ur(t,e.child,n,r)}function Cf(e,t,n,r,a){n=n.render;var i=t.ref;return nr(t,a),r=Du(e,t,n,r,i,a),n=Fu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nt(e,t,a)):(J&&n&&Pu(t),t.flags|=1,be(e,t,r,a),t.child)}function _f(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!Gu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,wp(e,t,i,r,a)):(e=Ei(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(o,r)&&e.ref===t.ref)return Nt(e,t,a)}return t.flags|=1,e=Jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function wp(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(na(i,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Nt(e,t,a)}return Es(e,t,n,r,a)}function xp(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Xn,$e),$e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Xn,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Y(Xn,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Y(Xn,$e),$e|=r;return be(e,t,a,n),t.child}function kp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Es(e,t,n,r,a){var i=Re(n)?Cn:_e.current;return i=lr(t,i),nr(t,a),n=Du(e,t,n,r,i,a),r=Fu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Nt(e,t,a)):(J&&r&&Pu(t),t.flags|=1,be(e,t,n,a),t.child)}function Ef(e,t,n,r,a){if(Re(n)){var i=!0;Ui(t)}else i=!1;if(nr(t,a),t.stateNode===null)Si(e,t),Xm(t,n,r),Cs(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Re(n)?Cn:_e.current,u=lr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&vf(t,o,r,u),$t=!1;var h=t.memoizedState;o.state=h,Hi(t,r,o,a),s=t.memoizedState,l!==r||h!==s||ze.current||$t?(typeof f=="function"&&(Ss(t,n,f,r),s=t.memoizedState),(l=$t||hf(t,n,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Hm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nt(t.type,l),o.props=u,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Je(s):(s=Re(n)?Cn:_e.current,s=lr(t,s));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&vf(t,o,r,s),$t=!1,h=t.memoizedState,o.state=h,Hi(t,r,o,a);var w=t.memoizedState;l!==d||h!==w||ze.current||$t?(typeof y=="function"&&(Ss(t,n,y,r),w=t.memoizedState),(u=$t||hf(t,n,u,r,h,w,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return bs(e,t,n,r,i,a)}function bs(e,t,n,r,a,i){kp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&cf(t,n,!1),Nt(e,t,i);r=t.stateNode,lv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ur(t,e.child,null,i),t.child=ur(t,null,l,i)):be(e,t,l,i),t.memoizedState=r.state,a&&cf(t,n,!0),t.child}function Sp(e){var t=e.stateNode;t.pendingContext?uf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uf(e,t.context,!1),Au(e,t.containerInfo)}function bf(e,t,n,r,a){return sr(),Ou(a),t.flags|=256,be(e,t,n,r),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cp(e,t,n){var r=t.pendingProps,a=Z.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Y(Z,a&1),e===null)return xs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ko(o,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ns(n),t.memoizedState=Ps,e):Wu(t,o));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return sv(e,t,o,r,l,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,l=a.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Jt(a,s),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=Jt(l,i):(i=Sn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ns(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ps,r}return i=e.child,e=i.sibling,r=Jt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wu(e,t){return t=ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ja(e,t,n,r){return r!==null&&Ou(r),ur(t,e.child,null,n),e=Wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sv(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(C(422))),Ja(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=ko({mode:"visible",children:r.children},a,0,null),i=Sn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ur(t,e.child,null,o),t.child.memoizedState=Ns(o),t.memoizedState=Ps,i);if(!(t.mode&1))return Ja(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(C(419)),r=Pl(i,r,void 0),Ja(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ie||l){if(r=pe,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Pt(e,a),lt(r,e,a,-1))}return Ku(),r=Pl(Error(C(421))),Ja(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=kv.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,De=Qt(a.nextSibling),Fe=t,J=!0,at=null,e!==null&&(Qe[Xe++]=St,Qe[Xe++]=Ct,Qe[Xe++]=_n,St=e.id,Ct=e.overflow,_n=t),t=Wu(t,r.children),t.flags|=4096,t)}function Pf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ks(e.return,t,n)}function Nl(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function _p(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(be(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pf(e,n,t);else if(e.tag===19)Pf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(Z,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Nl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Qi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Nl(t,!0,n,null,i);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function uv(e,t,n){switch(t.tag){case 3:Sp(t),sr();break;case 5:Jm(t);break;case 1:Re(t.type)&&Ui(t);break;case 4:Au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Y(Vi,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Cp(e,t,n):(Y(Z,Z.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);Y(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _p(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,xp(e,t,n)}return Nt(e,t,n)}var Ep,Os,bp,Pp;Ep=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Os=function(){};bp=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,yn(yt.current);var i=null;switch(n){case"input":a=Jl(e,a),r=Jl(e,r),i=[];break;case"select":a=ee({},a,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":a=es(e,a),r=es(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}ns(n,r);var o;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&H("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Pp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cv(e,t,n){var r=t.pendingProps;switch(Nu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Re(t.type)&&Fi(),ke(t),null;case 3:return r=t.stateNode,cr(),K(ze),K(_e),$u(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&($s(at),at=null))),Os(e,t),ke(t),null;case 5:Lu(t);var a=yn(la.current);if(n=t.type,e!==null&&t.stateNode!=null)bp(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ke(t),null}if(e=yn(yt.current),Ka(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ht]=t,r[ia]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(a=0;a<Ar.length;a++)H(Ar[a],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ac(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":$c(r,i),H("invalid",r)}ns(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Xa(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Xa(r.textContent,l,e),a=["children",""+l]):Kr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Fa(r),Lc(r,i,!0);break;case"textarea":Fa(r),Mc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Di)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=em(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ht]=t,e[ia]=r,Ep(e,t,!1,!1),t.stateNode=e;e:{switch(o=rs(n,r),n){case"dialog":H("cancel",e),H("close",e),a=r;break;case"iframe":case"object":case"embed":H("load",e),a=r;break;case"video":case"audio":for(a=0;a<Ar.length;a++)H(Ar[a],e);a=r;break;case"source":H("error",e),a=r;break;case"img":case"image":case"link":H("error",e),H("load",e),a=r;break;case"details":H("toggle",e),a=r;break;case"input":Ac(e,r),a=Jl(e,r),H("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ee({},r,{value:void 0}),H("invalid",e);break;case"textarea":$c(e,r),a=es(e,r),H("invalid",e);break;default:a=r}ns(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?rm(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&tm(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Gr(e,s):typeof s=="number"&&Gr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&mu(e,i,s,o))}switch(n){case"input":Fa(e),Lc(e,r,!1);break;case"textarea":Fa(e),Mc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)Pp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=yn(la.current),yn(yt.current),Ka(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(i=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Xa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return ke(t),null;case 13:if(K(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&De!==null&&t.mode&1&&!(t.flags&128))Vm(),sr(),t.flags|=98560,i=!1;else if(i=Ka(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[ht]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),i=!1}else at!==null&&($s(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ce===0&&(ce=3):Ku())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return cr(),Os(e,t),e===null&&ra(t.stateNode.containerInfo),ke(t),null;case 10:return Iu(t.type._context),ke(t),null;case 17:return Re(t.type)&&Fi(),ke(t),null;case 19:if(K(Z),i=t.memoizedState,i===null)return ke(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Or(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Qi(e),o!==null){for(t.flags|=128,Or(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&ie()>dr&&(t.flags|=128,r=!0,Or(i,!1),t.lanes=4194304)}else{if(!r)if(e=Qi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!J)return ke(t),null}else 2*ie()-i.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,Or(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ie(),t.sibling=null,n=Z.current,Y(Z,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return Xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function fv(e,t){switch(Nu(t),t.tag){case 1:return Re(t.type)&&Fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),K(ze),K(_e),$u(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lu(t),null;case 13:if(K(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Z),null;case 4:return cr(),null;case 10:return Iu(t.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var Za=!1,Ce=!1,dv=typeof WeakSet=="function"?WeakSet:Set,O=null;function Qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function js(e,t,n){try{n()}catch(r){te(e,t,r)}}var Nf=!1;function mv(e,t){if(ms=Li,e=Tm(),bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var y;d!==n||a!==0&&d.nodeType!==3||(l=o+a),d!==i||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===e)break t;if(h===n&&++u===a&&(l=o),h===i&&++f===r&&(s=o),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ps={focusedElem:e,selectionRange:n},Li=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,_=w.memoizedState,m=t.stateNode,c=m.getSnapshotBeforeUpdate(t.elementType===t.type?g:nt(t.type,g),_);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=Nf,Nf=!1,w}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&js(t,n,i)}a=a.next}while(a!==r)}}function wo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ts(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Np(e){var t=e.alternate;t!==null&&(e.alternate=null,Np(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[ia],delete t[gs],delete t[K1],delete t[G1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Op(e){return e.tag===5||e.tag===3||e.tag===4}function Of(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Is(e,t,n),e=e.sibling;e!==null;)Is(e,t,n),e=e.sibling}function zs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zs(e,t,n),e=e.sibling;e!==null;)zs(e,t,n),e=e.sibling}var ve=null,rt=!1;function Rt(e,t,n){for(n=n.child;n!==null;)jp(e,t,n),n=n.sibling}function jp(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(co,n)}catch{}switch(n.tag){case 5:Ce||Qn(n,t);case 6:var r=ve,a=rt;ve=null,Rt(e,t,n),ve=r,rt=a,ve!==null&&(rt?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(rt?(e=ve,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),ea(e)):kl(ve,n.stateNode));break;case 4:r=ve,a=rt,ve=n.stateNode.containerInfo,rt=!0,Rt(e,t,n),ve=r,rt=a;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&js(n,t,o),a=a.next}while(a!==r)}Rt(e,t,n);break;case 1:if(!Ce&&(Qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}Rt(e,t,n);break;case 21:Rt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Rt(e,t,n),Ce=r):Rt(e,t,n);break;default:Rt(e,t,n)}}function jf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dv),t.forEach(function(r){var a=Sv.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,rt=!1;break e;case 3:ve=l.stateNode.containerInfo,rt=!0;break e;case 4:ve=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(ve===null)throw Error(C(160));jp(i,o,a),ve=null,rt=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){te(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tp(t,e),t=t.sibling}function Tp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),ut(e),r&4){try{Wr(3,e,e.return),wo(3,e)}catch(g){te(e,e.return,g)}try{Wr(5,e,e.return)}catch(g){te(e,e.return,g)}}break;case 1:tt(t,e),ut(e),r&512&&n!==null&&Qn(n,n.return);break;case 5:if(tt(t,e),ut(e),r&512&&n!==null&&Qn(n,n.return),e.flags&32){var a=e.stateNode;try{Gr(a,"")}catch(g){te(e,e.return,g)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Zd(a,i),rs(l,o);var u=rs(l,i);for(o=0;o<s.length;o+=2){var f=s[o],d=s[o+1];f==="style"?rm(a,d):f==="dangerouslySetInnerHTML"?tm(a,d):f==="children"?Gr(a,d):mu(a,f,d,u)}switch(l){case"input":Zl(a,i);break;case"textarea":qd(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Zn(a,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?Zn(a,!!i.multiple,i.defaultValue,!0):Zn(a,!!i.multiple,i.multiple?[]:"",!1))}a[ia]=i}catch(g){te(e,e.return,g)}}break;case 6:if(tt(t,e),ut(e),r&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(g){te(e,e.return,g)}}break;case 3:if(tt(t,e),ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(t.containerInfo)}catch(g){te(e,e.return,g)}break;case 4:tt(t,e),ut(e);break;case 13:tt(t,e),ut(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Hu=ie())),r&4&&jf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||f,tt(t,e),Ce=u):tt(t,e),ut(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(d=O=f;O!==null;){switch(h=O,y=h.child,h.tag){case 0:case 11:case 14:case 15:Wr(4,h,h.return);break;case 1:Qn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){te(r,n,g)}}break;case 5:Qn(h,h.return);break;case 22:if(h.memoizedState!==null){If(d);continue}}y!==null?(y.return=h,O=y):If(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{a=d.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=nm("display",o))}catch(g){te(e,e.return,g)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){te(e,e.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tt(t,e),ut(e),r&4&&jf(e);break;case 21:break;default:tt(t,e),ut(e)}}function ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Op(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Gr(a,""),r.flags&=-33);var i=Of(e);zs(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Of(e);Is(e,l,o);break;default:throw Error(C(161))}}catch(s){te(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pv(e,t,n){O=e,Ip(e)}function Ip(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var a=O,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Za;if(!o){var l=a.alternate,s=l!==null&&l.memoizedState!==null||Ce;l=Za;var u=Ce;if(Za=o,(Ce=s)&&!u)for(O=a;O!==null;)o=O,s=o.child,o.tag===22&&o.memoizedState!==null?zf(a):s!==null?(s.return=o,O=s):zf(a);for(;i!==null;)O=i,Ip(i),i=i.sibling;O=a,Za=l,Ce=u}Tf(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,O=i):Tf(e)}}function Tf(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||wo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&pf(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pf(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ea(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ce||t.flags&512&&Ts(t)}catch(h){te(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function If(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function zf(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wo(4,t)}catch(s){te(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(s){te(t,a,s)}}var i=t.return;try{Ts(t)}catch(s){te(t,i,s)}break;case 5:var o=t.return;try{Ts(t)}catch(s){te(t,o,s)}}}catch(s){te(t,t.return,s)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var hv=Math.ceil,Gi=It.ReactCurrentDispatcher,Vu=It.ReactCurrentOwner,Ge=It.ReactCurrentBatchConfig,M=0,pe=null,le=null,ye=0,$e=0,Xn=ln(0),ce=0,fa=null,bn=0,xo=0,Yu=0,Vr=null,Te=null,Hu=0,dr=1/0,xt=null,Ji=!1,Rs=null,Kt=null,qa=!1,Ut=null,Zi=0,Yr=0,As=null,Ci=-1,_i=0;function Pe(){return M&6?ie():Ci!==-1?Ci:Ci=ie()}function Gt(e){return e.mode&1?M&2&&ye!==0?ye&-ye:Z1.transition!==null?(_i===0&&(_i=hm()),_i):(e=B,e!==0||(e=window.event,e=e===void 0?16:Sm(e.type)),e):1}function lt(e,t,n,r){if(50<Yr)throw Yr=0,As=null,Error(C(185));Ea(e,n,r),(!(M&2)||e!==pe)&&(e===pe&&(!(M&2)&&(xo|=n),ce===4&&Dt(e,ye)),Ae(e,r),n===1&&M===0&&!(t.mode&1)&&(dr=ie()+500,vo&&sn()))}function Ae(e,t){var n=e.callbackNode;Zh(e,t);var r=Ai(e,e===pe?ye:0);if(r===0)n!==null&&Uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uc(n),t===1)e.tag===0?J1(Rf.bind(null,e)):Um(Rf.bind(null,e)),Q1(function(){!(M&6)&&sn()}),n=null;else{switch(vm(r)){case 1:n=yu;break;case 4:n=mm;break;case 16:n=Ri;break;case 536870912:n=pm;break;default:n=Ri}n=Fp(n,zp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zp(e,t){if(Ci=-1,_i=0,M&6)throw Error(C(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=Ai(e,e===pe?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qi(e,r);else{t=r;var a=M;M|=2;var i=Ap();(pe!==e||ye!==t)&&(xt=null,dr=ie()+500,kn(e,t));do try{yv();break}catch(l){Rp(e,l)}while(1);Tu(),Gi.current=i,M=a,le!==null?t=0:(pe=null,ye=0,t=ce)}if(t!==0){if(t===2&&(a=ss(e),a!==0&&(r=a,t=Ls(e,a))),t===1)throw n=fa,kn(e,0),Dt(e,r),Ae(e,ie()),n;if(t===6)Dt(e,r);else{if(a=e.current.alternate,!(r&30)&&!vv(a)&&(t=qi(e,r),t===2&&(i=ss(e),i!==0&&(r=i,t=Ls(e,i))),t===1))throw n=fa,kn(e,0),Dt(e,r),Ae(e,ie()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:mn(e,Te,xt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Hu+500-ie(),10<t)){if(Ai(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=vs(mn.bind(null,e,Te,xt),t);break}mn(e,Te,xt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-ot(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hv(r/1960))-r,10<r){e.timeoutHandle=vs(mn.bind(null,e,Te,xt),r);break}mn(e,Te,xt);break;case 5:mn(e,Te,xt);break;default:throw Error(C(329))}}}return Ae(e,ie()),e.callbackNode===n?zp.bind(null,e):null}function Ls(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=qi(e,t),e!==2&&(t=Te,Te=n,t!==null&&$s(t)),e}function $s(e){Te===null?Te=e:Te.push.apply(Te,e)}function vv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!st(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Yu,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function Rf(e){if(M&6)throw Error(C(327));rr();var t=Ai(e,0);if(!(t&1))return Ae(e,ie()),null;var n=qi(e,t);if(e.tag!==0&&n===2){var r=ss(e);r!==0&&(t=r,n=Ls(e,r))}if(n===1)throw n=fa,kn(e,0),Dt(e,t),Ae(e,ie()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Te,xt),Ae(e,ie()),null}function Qu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(dr=ie()+500,vo&&sn())}}function Pn(e){Ut!==null&&Ut.tag===0&&!(M&6)&&rr();var t=M;M|=1;var n=Ge.transition,r=B;try{if(Ge.transition=null,B=1,e)return e()}finally{B=r,Ge.transition=n,M=t,!(M&6)&&sn()}}function Xu(){$e=Xn.current,K(Xn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,H1(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Nu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fi();break;case 3:cr(),K(ze),K(_e),$u();break;case 5:Lu(r);break;case 4:cr();break;case 13:K(Z);break;case 19:K(Z);break;case 10:Iu(r.type._context);break;case 22:case 23:Xu()}n=n.return}if(pe=e,le=e=Jt(e.current,null),ye=$e=t,ce=0,fa=null,Yu=xo=bn=0,Te=Vr=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}gn=null}return e}function Rp(e,t){do{var n=le;try{if(Tu(),xi.current=Ki,Xi){for(var r=q.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Xi=!1}if(En=0,me=ue=q=null,Br=!1,sa=0,Vu.current=null,n===null||n.return===null){ce=1,fa=t,le=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=ye,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=kf(o);if(y!==null){y.flags&=-257,Sf(y,o,l,i,t),y.mode&1&&xf(i,u,t),t=y,s=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(s),t.updateQueue=g}else w.add(s);break e}else{if(!(t&1)){xf(i,u,t),Ku();break e}s=Error(C(426))}}else if(J&&l.mode&1){var _=kf(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Sf(_,o,l,i,t),Ou(fr(s,l));break e}}i=s=fr(s,l),ce!==4&&(ce=2),Vr===null?Vr=[i]:Vr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=gp(i,s,t);mf(i,m);break e;case 1:l=s;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Kt===null||!Kt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=yp(i,l,t);mf(i,x);break e}}i=i.return}while(i!==null)}$p(n)}catch(k){t=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function Ap(){var e=Gi.current;return Gi.current=Ki,e===null?Ki:e}function Ku(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(bn&268435455)&&!(xo&268435455)||Dt(pe,ye)}function qi(e,t){var n=M;M|=2;var r=Ap();(pe!==e||ye!==t)&&(xt=null,kn(e,t));do try{gv();break}catch(a){Rp(e,a)}while(1);if(Tu(),M=n,Gi.current=r,le!==null)throw Error(C(261));return pe=null,ye=0,ce}function gv(){for(;le!==null;)Lp(le)}function yv(){for(;le!==null&&!Wh();)Lp(le)}function Lp(e){var t=Dp(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?$p(e):le=t,Vu.current=null}function $p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fv(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=cv(n,t,$e),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function mn(e,t,n){var r=B,a=Ge.transition;try{Ge.transition=null,B=1,wv(e,t,n,r)}finally{Ge.transition=a,B=r}return null}function wv(e,t,n,r){do rr();while(Ut!==null);if(M&6)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(qh(e,i),e===pe&&(le=pe=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qa||(qa=!0,Fp(Ri,function(){return rr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ge.transition,Ge.transition=null;var o=B;B=1;var l=M;M|=4,Vu.current=null,mv(e,n),Tp(n,e),D1(ps),Li=!!ms,ps=ms=null,e.current=n,pv(n),Vh(),M=l,B=o,Ge.transition=i}else e.current=n;if(qa&&(qa=!1,Ut=e,Zi=a),i=e.pendingLanes,i===0&&(Kt=null),Qh(n.stateNode),Ae(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ji)throw Ji=!1,e=Rs,Rs=null,e;return Zi&1&&e.tag!==0&&rr(),i=e.pendingLanes,i&1?e===As?Yr++:(Yr=0,As=e):Yr=0,sn(),null}function rr(){if(Ut!==null){var e=vm(Zi),t=Ge.transition,n=B;try{if(Ge.transition=null,B=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,Zi=0,M&6)throw Error(C(331));var a=M;for(M|=4,O=e.current;O!==null;){var i=O,o=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:Wr(8,f,i)}var d=f.child;if(d!==null)d.return=f,O=d;else for(;O!==null;){f=O;var h=f.sibling,y=f.return;if(Np(f),f===u){O=null;break}if(h!==null){h.return=y,O=h;break}O=y}}}var w=i.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}O=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,O=o;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,O=m;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){o=O;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,O=p;else e:for(o=c;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wo(9,l)}}catch(k){te(l,l.return,k)}if(l===o){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(M=a,sn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(co,e)}catch{}r=!0}return r}finally{B=n,Ge.transition=t}}return!1}function Af(e,t,n){t=fr(n,t),t=gp(e,t,1),e=Xt(e,t,1),t=Pe(),e!==null&&(Ea(e,1,t),Ae(e,t))}function te(e,t,n){if(e.tag===3)Af(e,e,n);else for(;t!==null;){if(t.tag===3){Af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=fr(n,e),e=yp(t,e,1),t=Xt(t,e,1),e=Pe(),t!==null&&(Ea(t,1,e),Ae(t,e));break}}t=t.return}}function xv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ye&n)===n&&(ce===4||ce===3&&(ye&130023424)===ye&&500>ie()-Hu?kn(e,0):Yu|=n),Ae(e,t)}function Mp(e,t){t===0&&(e.mode&1?(t=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):t=1);var n=Pe();e=Pt(e,t),e!==null&&(Ea(e,t,n),Ae(e,n))}function kv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mp(e,n)}function Sv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Mp(e,n)}var Dp;Dp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,uv(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,J&&t.flags&1048576&&Bm(t,Wi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Si(e,t),e=t.pendingProps;var a=lr(t,_e.current);nr(t,n),a=Du(null,t,r,e,a,n);var i=Fu();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(i=!0,Ui(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ru(t),a.updater=go,t.stateNode=a,a._reactInternals=t,Cs(t,r,e,n),t=bs(null,t,r,!0,i,n)):(t.tag=0,J&&i&&Pu(t),be(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Si(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=_v(r),e=nt(r,e),a){case 0:t=Es(null,t,r,e,n);break e;case 1:t=Ef(null,t,r,e,n);break e;case 11:t=Cf(null,t,r,e,n);break e;case 14:t=_f(null,t,r,nt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nt(r,a),Es(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nt(r,a),Ef(e,t,r,a,n);case 3:e:{if(Sp(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Hm(e,t),Hi(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=fr(Error(C(423)),t),t=bf(e,t,r,n,a);break e}else if(r!==a){a=fr(Error(C(424)),t),t=bf(e,t,r,n,a);break e}else for(De=Qt(t.stateNode.containerInfo.firstChild),Fe=t,J=!0,at=null,n=Gm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===a){t=Nt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Jm(t),e===null&&xs(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,hs(r,a)?o=null:i!==null&&hs(r,i)&&(t.flags|=32),kp(e,t),be(e,t,o,n),t.child;case 6:return e===null&&xs(t),null;case 13:return Cp(e,t,n);case 4:return Au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ur(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nt(r,a),Cf(e,t,r,a,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Y(Vi,r._currentValue),r._currentValue=o,i!==null)if(st(i.value,o)){if(i.children===a.children&&!ze.current){t=Nt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=_t(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ks(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ks(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}be(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nr(t,n),a=Je(a),r=r(a),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,a=nt(r,t.pendingProps),a=nt(r.type,a),_f(e,t,r,a,n);case 15:return wp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nt(r,a),Si(e,t),t.tag=1,Re(r)?(e=!0,Ui(t)):e=!1,nr(t,n),Xm(t,r,a),Cs(t,r,a,n),bs(null,t,r,!0,e,n);case 19:return _p(e,t,n);case 22:return xp(e,t,n)}throw Error(C(156,t.tag))};function Fp(e,t){return dm(e,t)}function Cv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new Cv(e,t,n,r)}function Gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _v(e){if(typeof e=="function")return Gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===hu)return 11;if(e===vu)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ei(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")Gu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mn:return Sn(n.children,a,i,t);case pu:o=8,a|=8;break;case Ql:return e=Ke(12,n,t,a|2),e.elementType=Ql,e.lanes=i,e;case Xl:return e=Ke(13,n,t,a),e.elementType=Xl,e.lanes=i,e;case Kl:return e=Ke(19,n,t,a),e.elementType=Kl,e.lanes=i,e;case Kd:return ko(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qd:o=10;break e;case Xd:o=9;break e;case hu:o=11;break e;case vu:o=14;break e;case Lt:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ke(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function ko(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=Kd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ol(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ev(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ju(e,t,n,r,a,i,o,l,s){return e=new Ev(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ru(i),e}function bv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Up(e){if(!e)return tn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Re(n))return Fm(e,n,t)}return t}function Bp(e,t,n,r,a,i,o,l,s){return e=Ju(n,r,!0,e,a,i,o,l,s),e.context=Up(null),n=e.current,r=Pe(),a=Gt(n),i=_t(r,a),i.callback=t??null,Xt(n,i,a),e.current.lanes=a,Ea(e,a,r),Ae(e,r),e}function So(e,t,n,r){var a=t.current,i=Pe(),o=Gt(a);return n=Up(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(a,t,o),e!==null&&(lt(e,a,o,i),wi(e,a,o)),o}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zu(e,t){Lf(e,t),(e=e.alternate)&&Lf(e,t)}function Pv(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function qu(e){this._internalRoot=e}Co.prototype.render=qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));So(e,t,null,null)};Co.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pn(function(){So(null,e,null,null)}),t[bt]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var t=wm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&km(e)}};function ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $f(){}function Nv(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=eo(o);i.call(u)}}var o=Bp(t,r,e,0,null,!1,!1,"",$f);return e._reactRootContainer=o,e[bt]=o.current,ra(e.nodeType===8?e.parentNode:e),Pn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=eo(s);l.call(u)}}var s=Ju(e,0,!1,null,null,!1,!1,"",$f);return e._reactRootContainer=s,e[bt]=s.current,ra(e.nodeType===8?e.parentNode:e),Pn(function(){So(t,s,n,r)}),s}function Eo(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var l=a;a=function(){var s=eo(o);l.call(s)}}So(t,o,e,a)}else o=Nv(n,t,e,a,r);return eo(o)}gm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(wu(t,n|1),Ae(t,ie()),!(M&6)&&(dr=ie()+500,sn()))}break;case 13:Pn(function(){var r=Pt(e,1);if(r!==null){var a=Pe();lt(r,e,1,a)}}),Zu(e,1)}};xu=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=Pe();lt(t,e,134217728,n)}Zu(e,134217728)}};ym=function(e){if(e.tag===13){var t=Gt(e),n=Pt(e,t);if(n!==null){var r=Pe();lt(n,e,t,r)}Zu(e,t)}};wm=function(){return B};xm=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};is=function(e,t,n){switch(t){case"input":if(Zl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ho(r);if(!a)throw Error(C(90));Jd(r),Zl(r,a)}}}break;case"textarea":qd(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};om=Qu;lm=Pn;var Ov={usingClientEntryPoint:!1,Events:[Pa,Bn,ho,am,im,Qu]},jr={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jv={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cm(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{co=ei.inject(jv),gt=ei}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ov;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ec(t))throw Error(C(200));return bv(e,t,null,n)};We.createRoot=function(e,t){if(!ec(e))throw Error(C(299));var n=!1,r="",a=Wp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ju(e,1,!1,null,null,n,!1,r,a),e[bt]=t.current,ra(e.nodeType===8?e.parentNode:e),new qu(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=cm(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return Pn(e)};We.hydrate=function(e,t,n){if(!_o(t))throw Error(C(200));return Eo(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!ec(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=Wp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bp(t,null,e,1,n??null,a,!1,i,o),e[bt]=t.current,ra(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Co(t)};We.render=function(e,t,n){if(!_o(t))throw Error(C(200));return Eo(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!_o(e))throw Error(C(40));return e._reactRootContainer?(Pn(function(){Eo(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};We.unstable_batchedUpdates=Qu;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_o(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Eo(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function Vp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vp)}catch(e){console.error(e)}}Vp(),Bd.exports=We;var Tv=Bd.exports,Mf=Tv;Yl.createRoot=Mf.createRoot,Yl.hydrateRoot=Mf.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},da.apply(this,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const Df="popstate";function Iv(e){e===void 0&&(e={});function t(a,i){let{pathname:o="/",search:l="",hash:s=""}=In(a.location.hash.substr(1));return Ms("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let o=a.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let s=a.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof i=="string"?i:to(i))}function r(a,i){bo(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Rv(t,n,r,e)}function se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function bo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zv(){return Math.random().toString(36).substr(2,8)}function Ff(e,t){return{usr:e.state,key:e.key,idx:t}}function Ms(e,t,n,r){return n===void 0&&(n=null),da({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?In(t):t,{state:n,key:t&&t.key||r||zv()})}function to(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function In(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Rv(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Bt.Pop,s=null,u=f();u==null&&(u=0,o.replaceState(da({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){l=Bt.Pop;let _=f(),m=_==null?null:_-u;u=_,s&&s({action:l,location:g.location,delta:m})}function h(_,m){l=Bt.Push;let c=Ms(g.location,_,m);n&&n(c,_),u=f()+1;let p=Ff(c,u),x=g.createHref(c);try{o.pushState(p,"",x)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(x)}i&&s&&s({action:l,location:g.location,delta:1})}function y(_,m){l=Bt.Replace;let c=Ms(g.location,_,m);n&&n(c,_),u=f();let p=Ff(c,u),x=g.createHref(c);o.replaceState(p,"",x),i&&s&&s({action:l,location:g.location,delta:0})}function w(_){let m=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof _=="string"?_:to(_);return se(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let g={get action(){return l},get location(){return e(a,o)},listen(_){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(Df,d),s=_,()=>{a.removeEventListener(Df,d),s=null}},createHref(_){return t(a,_)},createURL:w,encodeLocation(_){let m=w(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:y,go(_){return o.go(_)}};return g}var Uf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Uf||(Uf={}));function Av(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?In(t):t,a=tc(r.pathname||"/",n);if(a==null)return null;let i=Yp(e);Lv(i);let o=null;for(let l=0;o==null&&l<i.length;++l)o=Yv(i[l],Xv(a));return o}function Yp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(se(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Zt([r,s.relativePath]),f=n.concat(s);i.children&&i.children.length>0&&(se(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Yp(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Wv(u,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,o);else for(let s of Hp(i.path))a(i,o,s)}),t}function Hp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=Hp(r.join("/")),l=[];return l.push(...o.map(s=>s===""?i:[i,s].join("/"))),a&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Lv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $v=/^:\w+$/,Mv=3,Dv=2,Fv=1,Uv=10,Bv=-2,Bf=e=>e==="*";function Wv(e,t){let n=e.split("/"),r=n.length;return n.some(Bf)&&(r+=Bv),t&&(r+=Dv),n.filter(a=>!Bf(a)).reduce((a,i)=>a+($v.test(i)?Mv:i===""?Fv:Uv),r)}function Vv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Yv(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let l=n[o],s=o===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=Hv({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;i.push({params:r,pathname:Zt([a,f.pathname]),pathnameBase:Zv(Zt([a,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(a=Zt([a,f.pathnameBase]))}return i}function Hv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Qv(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let h=l[d]||"";o=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=Kv(l[d]||"",f),u},{}),pathname:i,pathnameBase:o,pattern:e}}function Qv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),bo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Xv(e){try{return decodeURI(e)}catch(t){return bo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Kv(e,t){try{return decodeURIComponent(e)}catch(n){return bo(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function tc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Gv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?In(e):e;return{pathname:n?n.startsWith("/")?n:Jv(n,t):t,search:qv(r),hash:eg(a)}}function Jv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Tl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xp(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=In(e):(a=da({},e),se(!a.pathname||!a.pathname.includes("?"),Tl("?","pathname","search",a)),se(!a.pathname||!a.pathname.includes("#"),Tl("#","pathname","hash",a)),se(!a.search||!a.search.includes("#"),Tl("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;a.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=Gv(a,l),u=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),Zv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,eg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Kp=["post","put","patch","delete"];new Set(Kp);const ng=["get",...Kp];new Set(ng);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},no.apply(this,arguments)}const nc=S.createContext(null),rg=S.createContext(null),yr=S.createContext(null),Po=S.createContext(null),un=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Gp=S.createContext(null);function ag(e,t){let{relative:n}=t===void 0?{}:t;Oa()||se(!1);let{basename:r,navigator:a}=S.useContext(yr),{hash:i,pathname:o,search:l}=Zp(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Zt([r,o])),a.createHref({pathname:s,search:l,hash:i})}function Oa(){return S.useContext(Po)!=null}function No(){return Oa()||se(!1),S.useContext(Po).location}function Jp(e){S.useContext(yr).static||S.useLayoutEffect(e)}function ig(){let{isDataRoute:e}=S.useContext(un);return e?wg():og()}function og(){Oa()||se(!1);let e=S.useContext(nc),{basename:t,navigator:n}=S.useContext(yr),{matches:r}=S.useContext(un),{pathname:a}=No(),i=JSON.stringify(Qp(r).map(s=>s.pathnameBase)),o=S.useRef(!1);return Jp(()=>{o.current=!0}),S.useCallback(function(s,u){if(u===void 0&&(u={}),!o.current)return;if(typeof s=="number"){n.go(s);return}let f=Xp(s,JSON.parse(i),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Zt([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,i,a,e])}function lg(){let{matches:e}=S.useContext(un),t=e[e.length-1];return t?t.params:{}}function Zp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(un),{pathname:a}=No(),i=JSON.stringify(Qp(r).map(o=>o.pathnameBase));return S.useMemo(()=>Xp(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function sg(e,t){return ug(e,t)}function ug(e,t,n){Oa()||se(!1);let{navigator:r}=S.useContext(yr),{matches:a}=S.useContext(un),i=a[a.length-1],o=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=No(),u;if(t){var f;let g=typeof t=="string"?In(t):t;l==="/"||(f=g.pathname)!=null&&f.startsWith(l)||se(!1),u=g}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",y=Av(e,{pathname:h}),w=pg(y&&y.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Zt([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:Zt([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),a,n);return t&&w?S.createElement(Po.Provider,{value:{location:no({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Bt.Pop}},w):w}function cg(){let e=yg(),t=tg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:a},n):null,i)}const fg=S.createElement(cg,null);class dg extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(un.Provider,{value:this.props.routeContext},S.createElement(Gp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mg(e){let{routeContext:t,match:n,children:r}=e,a=S.useContext(nc);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(un.Provider,{value:t},r)}function pg(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let l=i.findIndex(s=>s.route.id&&(o==null?void 0:o[s.route.id]));l>=0||se(!1),i=i.slice(0,Math.min(i.length,l+1))}return i.reduceRight((l,s,u)=>{let f=s.route.id?o==null?void 0:o[s.route.id]:null,d=null;n&&(d=s.route.errorElement||fg);let h=t.concat(i.slice(0,u+1)),y=()=>{let w;return f?w=d:s.route.Component?w=S.createElement(s.route.Component,null):s.route.element?w=s.route.element:w=l,S.createElement(mg,{match:s,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:w})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?S.createElement(dg,{location:n.location,revalidation:n.revalidation,component:d,error:f,children:y(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):y()},null)}var Ds;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Ds||(Ds={}));var ma;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ma||(ma={}));function hg(e){let t=S.useContext(nc);return t||se(!1),t}function vg(e){let t=S.useContext(rg);return t||se(!1),t}function gg(e){let t=S.useContext(un);return t||se(!1),t}function qp(e){let t=gg(),n=t.matches[t.matches.length-1];return n.route.id||se(!1),n.route.id}function yg(){var e;let t=S.useContext(Gp),n=vg(ma.UseRouteError),r=qp(ma.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function wg(){let{router:e}=hg(Ds.UseNavigateStable),t=qp(ma.UseNavigateStable),n=S.useRef(!1);return Jp(()=>{n.current=!0}),S.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,no({fromRouteId:t},i)))},[e,t])}function pn(e){se(!1)}function xg(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Bt.Pop,navigator:i,static:o=!1}=e;Oa()&&se(!1);let l=t.replace(/^\/*/,"/"),s=S.useMemo(()=>({basename:l,navigator:i,static:o}),[l,i,o]);typeof r=="string"&&(r=In(r));let{pathname:u="/",search:f="",hash:d="",state:h=null,key:y="default"}=r,w=S.useMemo(()=>{let g=tc(u,l);return g==null?null:{location:{pathname:g,search:f,hash:d,state:h,key:y},navigationType:a}},[l,u,f,d,h,y,a]);return w==null?null:S.createElement(yr.Provider,{value:s},S.createElement(Po.Provider,{children:n,value:w}))}function kg(e){let{children:t,location:n}=e;return sg(Fs(t),n)}var Wf;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Wf||(Wf={}));new Promise(()=>{});function Fs(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,a)=>{if(!S.isValidElement(r))return;let i=[...t,a];if(r.type===S.Fragment){n.push.apply(n,Fs(r.props.children,i));return}r.type!==pn&&se(!1),!r.props.index||!r.props.children||se(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fs(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Us(){return Us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Us.apply(this,arguments)}function Sg(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Cg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _g(e,t){return e.button===0&&(!t||t==="_self")&&!Cg(e)}const Eg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],bg="startTransition",Vf=Vl[bg];function Pg(e){let{basename:t,children:n,future:r,window:a}=e,i=S.useRef();i.current==null&&(i.current=Iv({window:a,v5Compat:!0}));let o=i.current,[l,s]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=S.useCallback(d=>{u&&Vf?Vf(()=>s(d)):s(d)},[s,u]);return S.useLayoutEffect(()=>o.listen(f),[o,f]),S.createElement(xg,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const Ng=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Og=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,X=S.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:f}=t,d=Sg(t,Eg),{basename:h}=S.useContext(yr),y,w=!1;if(typeof u=="string"&&Og.test(u)&&(y=u,Ng))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),x=tc(p.pathname,h);p.origin===c.origin&&x!=null?u=x+p.search+p.hash:w=!0}catch{}let g=ag(u,{relative:a}),_=jg(u,{replace:o,state:l,target:s,preventScrollReset:f,relative:a});function m(c){r&&r(c),c.defaultPrevented||_(c)}return S.createElement("a",Us({},d,{href:y||g,onClick:w||i?r:m,ref:n,target:s}))});var Yf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Yf||(Yf={}));var Hf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Hf||(Hf={}));function jg(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o}=t===void 0?{}:t,l=ig(),s=No(),u=Zp(e,{relative:o});return S.useCallback(f=>{if(_g(f,n)){f.preventDefault();let d=r!==void 0?r:to(s)===to(u);l(e,{replace:d,state:a,preventScrollReset:i,relative:o})}},[s,l,u,r,a,n,e,i,o])}const Tg="_container_1e61y_1",Ig="_name_1e61y_25",zg="_icon_1e61y_39",Rg="_logo_1e61y_49",Ag="_sticky_1e61y_67",Lg="_showNav_1e61y_1",$g="_links_1e61y_101",Mg="_link_1e61y_101",Dg="_bordered_1e61y_1",Fg="_menu_1e61y_195",Ug="_menuButton_1e61y_217",Ee={container:Tg,name:Ig,icon:zg,logo:Rg,sticky:Ag,showNav:Lg,links:$g,link:Mg,bordered:Dg,menu:Fg,menuButton:Ug},Bg="/assets/logo-57272f2b.png",Wg="_container_1mykz_1",Vg="_init_1mykz_1",Yg="_hidden_1mykz_89",Hg="_exit_1mykz_1",Qg="_notShow_1mykz_101",hn={container:Wg,init:Vg,hidden:Yg,exit:Hg,notShow:Qg},Xg="_container_u649f_1",Kg="_init_u649f_1",Gg="_links_u649f_63",Jg="_hidden_u649f_75",Zg="_exit_u649f_1",qg="_notShow_u649f_107",je={container:Xg,init:Kg,links:Gg,hidden:Jg,exit:Zg,notShow:qg},pa=(e,t)=>{e.classList.remove(t.notShow),e.classList.toggle(t.hidden)?setTimeout(()=>{e.style.display="none"},300):e.style.display="flex"},ja=e=>{const t=document.querySelector(`li > a[href='#/${e}']`);t!==null&&(console.log(t),t.style.fontWeight="800")},ey=()=>{const e=document.querySelector("#navbar");e!==null&&(window.scrollY>e.offsetTop+60?e.classList.add(Ee.sticky):e.classList.remove(Ee.sticky))},Me=()=>{window.scroll({top:0,behavior:"smooth"})},ty=(e,t)=>{e.classList.add(t.hidden)},e0=()=>{const e=document.getElementById(je.container);ty(e,je)};window.onscroll=ey;const ny=()=>{const e=()=>{const t=document.getElementsByClassName(hn.container);pa(t[0],hn)};return v.jsxs("div",{className:`${hn.notShow} ${hn.hidden} ${hn.container}`,onClick:()=>{Me(),e()},children:[v.jsx(X,{to:"/players/2024",children:"2024"}),v.jsx(X,{to:"/players/2025",children:"2025"}),v.jsx(X,{to:"/players/2026",children:"2026"}),v.jsx(X,{to:"/players/2027",children:"2027"}),v.jsx(X,{to:"/players/2028",children:"2028"})]})},ry="_container_1hgez_1",ay="_showAnimation_1hgez_1",iy="_content_1hgez_51",oy="_links_1hgez_63",ly="_header_1hgez_89",sy="_hidden_1hgez_109",uy="_exit_1hgez_1",cy="_notShow_1hgez_139",dt={container:ry,showAnimation:ay,content:iy,links:oy,header:ly,hidden:sy,exit:uy,notShow:cy},fy=()=>{const e=()=>{const t=document.getElementsByClassName(dt.container);pa(t[0],dt)};return v.jsx("div",{className:`${dt.container} ${dt.hidden} ${dt.notShow}`,children:v.jsxs("div",{className:dt.content,children:[v.jsxs("div",{className:dt.header,children:[v.jsx("h1",{children:"Elegibles"}),v.jsx("button",{onClick:e,children:v.jsx("i",{className:"fa-solid fa-x"})})]}),v.jsxs("div",{className:dt.links,onClick:()=>{e(),Me(),e0()},children:[v.jsx(X,{to:"/players/2024",children:"2024"}),v.jsx(X,{to:"/players/2025",children:"2025"}),v.jsx(X,{to:"/players/2026",children:"2026"}),v.jsx(X,{to:"/players/2027",children:"2027"}),v.jsx(X,{to:"/players/2028",children:"2028"})]})]})})},dy=()=>{window.addEventListener("scroll",e0);const e=()=>{const t=document.getElementsByClassName(dt.container);pa(t[0],dt)};return v.jsxs("div",{children:[v.jsxs("div",{className:`${je.notShow} ${je.hidden} ${je.container} hideOnScroll`,id:je.container,children:[v.jsx(X,{className:je.links,to:"/",onClick:Me,children:"Inicio"}),v.jsx(X,{className:je.links,to:"/about",onClick:Me,children:"Quienes Somos"}),v.jsx("button",{onClick:e,children:v.jsx("p",{className:je.links,children:"Elegibles"})}),v.jsx(X,{className:je.links,to:"/trajectory",onClick:Me,children:"Trayectoria"}),v.jsx(X,{className:je.link,to:"/activities",onClick:Me,children:"Actividades"}),v.jsx(X,{className:je.links,to:"/contact",onClick:Me,children:"Contacto"})]}),v.jsx(fy,{})]})};function Qf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qf(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ro(e){"@babel/helpers - typeof";return ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ro(e)}function my(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function py(e,t,n){return t&&Xf(e.prototype,t),n&&Xf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rc(e,t){return vy(e)||yy(e,t)||t0(e,t)||xy()}function Ta(e){return hy(e)||gy(e)||t0(e)||wy()}function hy(e){if(Array.isArray(e))return Bs(e)}function vy(e){if(Array.isArray(e))return e}function gy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yy(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,l;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(s){i=!0,l=s}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}return r}}function t0(e,t){if(e){if(typeof e=="string")return Bs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bs(e,t)}}function Bs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Kf=function(){},ac={},n0={},r0=null,a0={mark:Kf,measure:Kf};try{typeof window<"u"&&(ac=window),typeof document<"u"&&(n0=document),typeof MutationObserver<"u"&&(r0=MutationObserver),typeof performance<"u"&&(a0=performance)}catch{}var ky=ac.navigator||{},Gf=ky.userAgent,Jf=Gf===void 0?"":Gf,nn=ac,G=n0,Zf=r0,ti=a0;nn.document;var zt=!!G.documentElement&&!!G.head&&typeof G.addEventListener=="function"&&typeof G.createElement=="function",i0=~Jf.indexOf("MSIE")||~Jf.indexOf("Trident/"),ni,ri,ai,ii,oi,Ot="___FONT_AWESOME___",Ws=16,o0="fa",l0="svg-inline--fa",Nn="data-fa-i2svg",Vs="data-fa-pseudo-element",Sy="data-fa-pseudo-element-pending",ic="data-prefix",oc="data-icon",qf="fontawesome-i2svg",Cy="async",_y=["HTML","HEAD","STYLE","SCRIPT"],s0=function(){try{return!0}catch{return!1}}(),Q="classic",ne="sharp",lc=[Q,ne];function Ia(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Q]}})}var ha=Ia((ni={},fe(ni,Q,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(ni,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ni)),va=Ia((ri={},fe(ri,Q,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(ri,ne,{solid:"fass",regular:"fasr",light:"fasl"}),ri)),ga=Ia((ai={},fe(ai,Q,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(ai,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ai)),Ey=Ia((ii={},fe(ii,Q,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(ii,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ii)),by=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,u0="fa-layers-text",Py=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ny=Ia((oi={},fe(oi,Q,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(oi,ne,{900:"fass",400:"fasr",300:"fasl"}),oi)),c0=[1,2,3,4,5,6,7,8,9,10],Oy=c0.concat([11,12,13,14,15,16,17,18,19,20]),jy=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ya=new Set;Object.keys(va[Q]).map(ya.add.bind(ya));Object.keys(va[ne]).map(ya.add.bind(ya));var Ty=[].concat(lc,Ta(ya),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wn.GROUP,wn.SWAP_OPACITY,wn.PRIMARY,wn.SECONDARY]).concat(c0.map(function(e){return"".concat(e,"x")})).concat(Oy.map(function(e){return"w-".concat(e)})),Hr=nn.FontAwesomeConfig||{};function Iy(e){var t=G.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function zy(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(G&&typeof G.querySelector=="function"){var Ry=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ry.forEach(function(e){var t=rc(e,2),n=t[0],r=t[1],a=zy(Iy(n));a!=null&&(Hr[r]=a)})}var f0={styleDefault:"solid",familyDefault:"classic",cssPrefix:o0,replacementClass:l0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Hr.familyPrefix&&(Hr.cssPrefix=Hr.familyPrefix);var mr=N(N({},f0),Hr);mr.autoReplaceSvg||(mr.observeMutations=!1);var T={};Object.keys(f0).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){mr[e]=n,Qr.forEach(function(r){return r(T)})},get:function(){return mr[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){mr.cssPrefix=t,Qr.forEach(function(n){return n(T)})},get:function(){return mr.cssPrefix}});nn.FontAwesomeConfig=T;var Qr=[];function Ay(e){return Qr.push(e),function(){Qr.splice(Qr.indexOf(e),1)}}var At=Ws,vt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ly(e){if(!(!e||!zt)){var t=G.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=G.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return G.head.insertBefore(t,r),e}}var $y="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wa(){for(var e=12,t="";e-- >0;)t+=$y[Math.random()*62|0];return t}function wr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function sc(e){return e.classList?wr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function d0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function My(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(d0(e[n]),'" ')},"").trim()}function Oo(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function uc(e){return e.size!==vt.size||e.x!==vt.x||e.y!==vt.y||e.rotate!==vt.rotate||e.flipX||e.flipY}function Dy(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:u}}function Fy(e){var t=e.transform,n=e.width,r=n===void 0?Ws:n,a=e.height,i=a===void 0?Ws:a,o=e.startCentered,l=o===void 0?!1:o,s="";return l&&i0?s+="translate(".concat(t.x/At-r/2,"em, ").concat(t.y/At-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/At,"em), calc(-50% + ").concat(t.y/At,"em)) "):s+="translate(".concat(t.x/At,"em, ").concat(t.y/At,"em) "),s+="scale(".concat(t.size/At*(t.flipX?-1:1),", ").concat(t.size/At*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Uy=`:root, :host {
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
}`;function m0(){var e=o0,t=l0,n=T.cssPrefix,r=T.replacementClass,a=Uy;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return a}var ed=!1;function Il(){T.autoAddCss&&!ed&&(Ly(m0()),ed=!0)}var By={mixout:function(){return{dom:{css:m0,insertCss:Il}}},hooks:function(){return{beforeDOMElementCreation:function(){Il()},beforeI2svg:function(){Il()}}}},jt=nn||{};jt[Ot]||(jt[Ot]={});jt[Ot].styles||(jt[Ot].styles={});jt[Ot].hooks||(jt[Ot].hooks={});jt[Ot].shims||(jt[Ot].shims=[]);var it=jt[Ot],p0=[],Wy=function e(){G.removeEventListener("DOMContentLoaded",e),ao=1,p0.map(function(t){return t()})},ao=!1;zt&&(ao=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),ao||G.addEventListener("DOMContentLoaded",Wy));function Vy(e){zt&&(ao?setTimeout(e,0):p0.push(e))}function za(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?d0(e):"<".concat(t," ").concat(My(r),">").concat(i.map(za).join(""),"</").concat(t,">")}function td(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Yy=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},zl=function(t,n,r,a){var i=Object.keys(t),o=i.length,l=a!==void 0?Yy(n,a):n,s,u,f;for(r===void 0?(s=1,f=t[i[0]]):(s=0,f=r);s<o;s++)u=i[s],f=l(f,t[u],u,t);return f};function Hy(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ys(e){var t=Hy(e);return t.length===1?t[0].toString(16):null}function Qy(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function nd(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=nd(t);typeof it.hooks.addPack=="function"&&!a?it.hooks.addPack(e,nd(t)):it.styles[e]=N(N({},it.styles[e]||{}),i),e==="fas"&&Hs("fa",t)}var li,si,ui,Kn=it.styles,Xy=it.shims,Ky=(li={},fe(li,Q,Object.values(ga[Q])),fe(li,ne,Object.values(ga[ne])),li),cc=null,h0={},v0={},g0={},y0={},w0={},Gy=(si={},fe(si,Q,Object.keys(ha[Q])),fe(si,ne,Object.keys(ha[ne])),si);function Jy(e){return~Ty.indexOf(e)}function Zy(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Jy(a)?a:null}var x0=function(){var t=function(i){return zl(Kn,function(o,l,s){return o[s]=zl(l,i,{}),o},{})};h0=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){a[s.toString(16)]=o})}return a}),v0=t(function(a,i,o){if(a[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){a[s]=o})}return a}),w0=t(function(a,i,o){var l=i[2];return a[o]=o,l.forEach(function(s){a[s]=o}),a});var n="far"in Kn||T.autoFetchSvg,r=zl(Xy,function(a,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(a.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});g0=r.names,y0=r.unicodes,cc=jo(T.styleDefault,{family:T.familyDefault})};Ay(function(e){cc=jo(e.styleDefault,{family:T.familyDefault})});x0();function fc(e,t){return(h0[e]||{})[t]}function qy(e,t){return(v0[e]||{})[t]}function xn(e,t){return(w0[e]||{})[t]}function k0(e){return g0[e]||{prefix:null,iconName:null}}function e2(e){var t=y0[e],n=fc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rn(){return cc}var dc=function(){return{prefix:null,iconName:null,rest:[]}};function jo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Q:n,a=ha[r][e],i=va[r][e]||va[r][a],o=e in it.styles?e:null;return i||o||null}var rd=(ui={},fe(ui,Q,Object.keys(ga[Q])),fe(ui,ne,Object.keys(ga[ne])),ui);function To(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},fe(t,Q,"".concat(T.cssPrefix,"-").concat(Q)),fe(t,ne,"".concat(T.cssPrefix,"-").concat(ne)),t),o=null,l=Q;(e.includes(i[Q])||e.some(function(u){return rd[Q].includes(u)}))&&(l=Q),(e.includes(i[ne])||e.some(function(u){return rd[ne].includes(u)}))&&(l=ne);var s=e.reduce(function(u,f){var d=Zy(T.cssPrefix,f);if(Kn[f]?(f=Ky[l].includes(f)?Ey[l][f]:f,o=f,u.prefix=f):Gy[l].indexOf(f)>-1?(o=f,u.prefix=jo(f,{family:l})):d?u.iconName=d:f!==T.replacementClass&&f!==i[Q]&&f!==i[ne]&&u.rest.push(f),!a&&u.prefix&&u.iconName){var h=o==="fa"?k0(u.iconName):{},y=xn(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||y||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Kn.far&&Kn.fas&&!T.autoFetchSvg&&(u.prefix="fas")}return u},dc());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===ne&&(Kn.fass||T.autoFetchSvg)&&(s.prefix="fass",s.iconName=xn(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=rn()||"fas"),s}var t2=function(){function e(){my(this,e),this.definitions={}}return py(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=N(N({},n.definitions[l]||{}),o[l]),Hs(l,o[l]);var s=ga[Q][l];s&&Hs(s,o[l]),x0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),ad=[],Gn={},ar={},n2=Object.keys(ar);function r2(e,t){var n=t.mixoutsTo;return ad=e,Gn={},Object.keys(ar).forEach(function(r){n2.indexOf(r)===-1&&delete ar[r]}),ad.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ro(a[o])==="object"&&Object.keys(a[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=a[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Gn[o]||(Gn[o]=[]),Gn[o].push(i[o])})}r.provides&&r.provides(ar)}),n}function Qs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Gn[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function On(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Gn[e]||[];a.forEach(function(i){i.apply(null,n)})}function Tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ar[e]?ar[e].apply(null,t):void 0}function Xs(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||rn();if(t)return t=xn(n,t)||t,td(S0.definitions,n,t)||td(it.styles,n,t)}var S0=new t2,a2=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,On("noAuto")},i2={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zt?(On("beforeI2svg",t),Tt("pseudoElements2svg",t),Tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Vy(function(){l2({autoReplaceSvgRoot:n}),On("watch",t)})}},o2={icon:function(t){if(t===null)return null;if(ro(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=jo(t[0]);return{prefix:r,iconName:xn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(by))){var a=To(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||rn(),iconName:xn(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=rn();return{prefix:i,iconName:xn(i,t)||t}}}},Ye={noAuto:a2,config:T,dom:i2,parse:o2,library:S0,findIconDefinition:Xs,toHtml:za},l2=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?G:n;(Object.keys(it.styles).length>0||T.autoFetchSvg)&&zt&&T.autoReplaceSvg&&Ye.dom.i2svg({node:r})};function Io(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return za(r)})}}),Object.defineProperty(e,"node",{get:function(){if(zt){var r=G.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function s2(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(uc(o)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};a.style=Oo(N(N({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function u2(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},a),{},{id:o}),children:r}]}]}function mc(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,y=h===void 0?!1:h,w=r.found?r:n,g=w.width,_=w.height,m=a==="fak",c=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(U){return d.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(d.classes).join(" "),p={children:[],attributes:N(N({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(_)})},x=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/_*16*.0625,"em")}:{};y&&(p.attributes[Nn]=""),s&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(f||wa())},children:[s]}),delete p.attributes.title);var k=N(N({},p),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:N(N({},x),d.styles)}),P=r.found&&n.found?Tt("generateAbstractMask",k)||{children:[],attributes:{}}:Tt("generateAbstractIcon",k)||{children:[],attributes:{}},E=P.children,I=P.attributes;return k.children=E,k.attributes=I,l?u2(k):s2(k)}function id(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,l=e.watchable,s=l===void 0?!1:l,u=N(N(N({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[Nn]="");var f=N({},o.styles);uc(a)&&(f.transform=Fy({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Oo(f);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function c2(e){var t=e.content,n=e.title,r=e.extra,a=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Oo(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Rl=it.styles;function Ks(e){var t=e[0],n=e[1],r=e.slice(4),a=rc(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(wn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(wn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(wn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var f2={found:!1,width:512,height:512};function d2(e,t){!s0&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Gs(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=rn()),new Promise(function(r,a){if(Tt("missingIconAbstract"),n==="fa"){var i=k0(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Rl[t]&&Rl[t][e]){var o=Rl[t][e];return r(Ks(o))}d2(e,t),r(N(N({},f2),{},{icon:T.showMissingIcons&&e?Tt("missingIconAbstract")||{}:{}}))})}var od=function(){},Js=T.measurePerformance&&ti&&ti.mark&&ti.measure?ti:{mark:od,measure:od},Lr='FA "6.4.0"',m2=function(t){return Js.mark("".concat(Lr," ").concat(t," begins")),function(){return C0(t)}},C0=function(t){Js.mark("".concat(Lr," ").concat(t," ends")),Js.measure("".concat(Lr," ").concat(t),"".concat(Lr," ").concat(t," begins"),"".concat(Lr," ").concat(t," ends"))},pc={begin:m2,end:C0},bi=function(){};function ld(e){var t=e.getAttribute?e.getAttribute(Nn):null;return typeof t=="string"}function p2(e){var t=e.getAttribute?e.getAttribute(ic):null,n=e.getAttribute?e.getAttribute(oc):null;return t&&n}function h2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function v2(){if(T.autoReplaceSvg===!0)return Pi.replace;var e=Pi[T.autoReplaceSvg];return e||Pi.replace}function g2(e){return G.createElementNS("http://www.w3.org/2000/svg",e)}function y2(e){return G.createElement(e)}function _0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?g2:y2:n;if(typeof e=="string")return G.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(_0(o,{ceFn:r}))}),a}function w2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(_0(a),n)}),n.getAttribute(Nn)===null&&T.keepOriginalSource){var r=G.createComment(w2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~sc(n).indexOf(T.replacementClass))return Pi.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,s){return s===T.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return za(l)}).join(`
`);n.setAttribute(Nn,""),n.innerHTML=o}};function sd(e){e()}function E0(e,t){var n=typeof t=="function"?t:bi;if(e.length===0)n();else{var r=sd;T.mutateApproach===Cy&&(r=nn.requestAnimationFrame||sd),r(function(){var a=v2(),i=pc.begin("mutate");e.map(a),i(),n()})}}var hc=!1;function b0(){hc=!0}function Zs(){hc=!1}var io=null;function ud(e){if(Zf&&T.observeMutations){var t=e.treeCallback,n=t===void 0?bi:t,r=e.nodeCallback,a=r===void 0?bi:r,i=e.pseudoElementsCallback,o=i===void 0?bi:i,l=e.observeMutationsRoot,s=l===void 0?G:l;io=new Zf(function(u){if(!hc){var f=rn();wr(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!ld(d.addedNodes[0])&&(T.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&T.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&ld(d.target)&&~jy.indexOf(d.attributeName))if(d.attributeName==="class"&&p2(d.target)){var h=To(sc(d.target)),y=h.prefix,w=h.iconName;d.target.setAttribute(ic,y||f),w&&d.target.setAttribute(oc,w)}else h2(d.target)&&a(d.target)})}}),zt&&io.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function x2(){io&&io.disconnect()}function k2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function S2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=To(sc(e));return a.prefix||(a.prefix=rn()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=qy(a.prefix,e.innerText)||fc(a.prefix,Ys(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function C2(e){var t=wr(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||wa()):(t["aria-hidden"]="true",t.focusable="false")),t}function _2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function cd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=S2(e),r=n.iconName,a=n.prefix,i=n.rest,o=C2(e),l=Qs("parseNodeAttributes",{},e),s=t.styleParser?k2(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:vt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var E2=it.styles;function P0(e){var t=T.autoReplaceSvg==="nest"?cd(e,{styleParser:!1}):cd(e);return~t.extra.classes.indexOf(u0)?Tt("generateLayersText",e,t):Tt("generateSvgReplacementMutation",e,t)}var an=new Set;lc.map(function(e){an.add("fa-".concat(e))});Object.keys(ha[Q]).map(an.add.bind(an));Object.keys(ha[ne]).map(an.add.bind(an));an=Ta(an);function fd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zt)return Promise.resolve();var n=G.documentElement.classList,r=function(d){return n.add("".concat(qf,"-").concat(d))},a=function(d){return n.remove("".concat(qf,"-").concat(d))},i=T.autoFetchSvg?an:lc.map(function(f){return"fa-".concat(f)}).concat(Object.keys(E2));i.includes("fa")||i.push("fa");var o=[".".concat(u0,":not([").concat(Nn,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Nn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=wr(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),a("complete");else return Promise.resolve();var s=pc.begin("onTree"),u=l.reduce(function(f,d){try{var h=P0(d);h&&f.push(h)}catch(y){s0||y.name==="MissingIcon"&&console.error(y)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(h){E0(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),d(h)})})}function b2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P0(e).then(function(n){n&&E0([n],t)})}function P2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Xs(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Xs(a||{})),e(r,N(N({},n),{},{mask:a}))}}var N2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?vt:r,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,h=d===void 0?null:d,y=n.titleId,w=y===void 0?null:y,g=n.classes,_=g===void 0?[]:g,m=n.attributes,c=m===void 0?{}:m,p=n.styles,x=p===void 0?{}:p;if(t){var k=t.prefix,P=t.iconName,E=t.icon;return Io(N({type:"icon"},t),function(){return On("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(h?c["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(w||wa()):(c["aria-hidden"]="true",c.focusable="false")),mc({icons:{main:Ks(E),mask:s?Ks(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:P,transform:N(N({},vt),a),symbol:o,title:h,maskId:f,titleId:w,extra:{attributes:c,styles:x,classes:_}})})}},O2={mixout:function(){return{icon:P2(N2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=fd,n.nodeCallback=b2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?G:r,i=n.callback,o=i===void 0?function(){}:i;return fd(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(y,w){Promise.all([Gs(a,l),f.iconName?Gs(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var _=rc(g,2),m=_[0],c=_[1];y([n,mc({icons:{main:m,mask:c},prefix:l,iconName:a,transform:s,symbol:u,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,l=n.styles,s=Oo(l);s.length>0&&(a.style=s);var u;return uc(o)&&(u=Tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},j2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Io({type:"layer"},function(){On("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(Ta(i)).join(" ")},children:o}]})}}}},T2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return Io({type:"counter",content:n},function(){return On("beforeDOMElementCreation",{content:n,params:r}),c2({content:n.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(Ta(l))}})})}}}},I2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?vt:a,o=r.title,l=o===void 0?null:o,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,h=r.styles,y=h===void 0?{}:h;return Io({type:"text",content:n},function(){return On("beforeDOMElementCreation",{content:n,params:r}),id({content:n,transform:N(N({},vt),i),title:l,extra:{attributes:d,styles:y,classes:["".concat(T.cssPrefix,"-layers-text")].concat(Ta(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,l=null,s=null;if(i0){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,id({content:n.innerHTML,width:l,height:s,transform:i,title:a,extra:o,watchable:!0})])}}},z2=new RegExp('"',"ug"),dd=[1105920,1112319];function R2(e){var t=e.replace(z2,""),n=Qy(t,0),r=n>=dd[0]&&n<=dd[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ys(a?t[0]:t),isSecondary:r||a}}function md(e,t){var n="".concat(Sy).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=wr(e.children),o=i.filter(function(E){return E.getAttribute(Vs)===t})[0],l=nn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Py),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return e.removeChild(o),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?ne:Q,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?va[h][s[2].toLowerCase()]:Ny[h][u],w=R2(d),g=w.value,_=w.isSecondary,m=s[0].startsWith("FontAwesome"),c=fc(y,g),p=c;if(m){var x=e2(g);x.iconName&&x.prefix&&(c=x.iconName,y=x.prefix)}if(c&&!_&&(!o||o.getAttribute(ic)!==y||o.getAttribute(oc)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var k=_2(),P=k.extra;P.attributes[Vs]=t,Gs(c,y).then(function(E){var I=mc(N(N({},k),{},{icons:{main:E,mask:dc()},prefix:y,iconName:p,extra:P,watchable:!0})),U=G.createElement("svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=I.map(function(A){return za(A)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function A2(e){return Promise.all([md(e,"::before"),md(e,"::after")])}function L2(e){return e.parentNode!==document.head&&!~_y.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Vs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pd(e){if(zt)return new Promise(function(t,n){var r=wr(e.querySelectorAll("*")).filter(L2).map(A2),a=pc.begin("searchPseudoElements");b0(),Promise.all(r).then(function(){a(),Zs(),t()}).catch(function(){a(),Zs(),n()})})}var $2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?G:r;T.searchPseudoElements&&pd(a)}}},hd=!1,M2={mixout:function(){return{dom:{unwatch:function(){b0(),hd=!0}}}},hooks:function(){return{bootstrap:function(){ud(Qs("mutationObserverCallbacks",{}))},noAuto:function(){x2()},watch:function(n){var r=n.observeMutationsRoot;hd?Zs():ud(Qs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},vd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},D2={mixout:function(){return{parse:{transform:function(n){return vd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=vd(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},y={outer:l,inner:d,path:h};return{tag:"g",attributes:N({},y.outer),children:[{tag:"g",attributes:N({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),y.path)}]}]}}}},Al={x:0,y:0,width:"100%",height:"100%"};function gd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function F2(e){return e.tag==="g"?e.children:[e]}var U2={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?To(a.split(" ").map(function(o){return o.trim()})):dc();return i.prefix||(i.prefix=rn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,f=i.icon,d=o.width,h=o.icon,y=Dy({transform:s,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:N(N({},Al),{},{fill:"white"})},g=f.children?{children:f.children.map(gd)}:{},_={tag:"g",attributes:N({},y.inner),children:[gd(N({tag:f.tag,attributes:N(N({},f.attributes),y.path)},g))]},m={tag:"g",attributes:N({},y.outer),children:[_]},c="mask-".concat(l||wa()),p="clip-".concat(l||wa()),x={tag:"mask",attributes:N(N({},Al),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:F2(h)},x]};return r.push(k,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(c,")")},Al)}),{children:r,attributes:a}}}},B2={provides:function(t){var n=!1;nn.matchMedia&&(n=nn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:N(N({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:N(N({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:N(N({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},W2={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},V2=[By,O2,j2,T2,I2,$2,M2,D2,U2,B2,W2];r2(V2,{mixoutsTo:Ye});Ye.noAuto;Ye.config;Ye.library;Ye.dom;var qs=Ye.parse;Ye.findIconDefinition;Ye.toHtml;var Y2=Ye.icon;Ye.layer;Ye.text;Ye.counter;var N0={exports:{}},H2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Q2=H2,X2=Q2;function O0(){}function j0(){}j0.resetWarningCache=O0;var K2=function(){function e(r,a,i,o,l,s){if(s!==X2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:j0,resetWarningCache:O0};return n.PropTypes=n,n};N0.exports=K2();var G2=N0.exports;const L=Td(G2);function yd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Wt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yd(Object(n),!0).forEach(function(r){Jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oo(e){"@babel/helpers - typeof";return oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oo(e)}function Jn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J2(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Z2(e,t){if(e==null)return{};var n=J2(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function eu(e){return q2(e)||ew(e)||tw(e)||nw()}function q2(e){if(Array.isArray(e))return tu(e)}function ew(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tw(e,t){if(e){if(typeof e=="string")return tu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tu(e,t)}}function tu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function nw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rw(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,y=e.inverse,w=e.border,g=e.listItem,_=e.flip,m=e.size,c=e.rotation,p=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":y,"fa-border":w,"fa-li":g,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Jn(t,"fa-".concat(m),typeof m<"u"&&m!==null),Jn(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),Jn(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),Jn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(k){return x[k]?k:null}).filter(function(k){return k})}function aw(e){return e=e-0,e===e}function T0(e){return aw(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var iw=["style"];function ow(e){return e.charAt(0).toUpperCase()+e.slice(1)}function lw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=T0(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[ow(a)]=i:t[a]=i,t},{})}function I0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return I0(e,s)}),a=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=lw(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[T0(u)]=f}return s},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Z2(n,iw);return a.attrs.style=Wt(Wt({},a.attrs.style),o),e.apply(void 0,[t.tag,Wt(Wt({},a.attrs),l)].concat(eu(r)))}var z0=!1;try{z0=!0}catch{}function sw(){if(!z0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function wd(e){if(e&&oo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qs.icon)return qs.icon(e);if(e===null)return null;if(e&&oo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ll(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Jn({},e,t):{}}var qt=uo.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,l=e.titleId,s=e.maskId,u=wd(n),f=Ll("classes",[].concat(eu(rw(e)),eu(i.split(" ")))),d=Ll("transform",typeof e.transform=="string"?qs.transform(e.transform):e.transform),h=Ll("mask",wd(r)),y=Y2(u,Wt(Wt(Wt(Wt({},f),d),h),{},{symbol:a,title:o,titleId:l,maskId:s}));if(!y)return sw("Could not find icon",u),null;var w=y.abstract,g={ref:t};return Object.keys(e).forEach(function(_){qt.defaultProps.hasOwnProperty(_)||(g[_]=e[_])}),uw(w[0],g)});qt.displayName="FontAwesomeIcon";qt.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};qt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var uw=I0.bind(null,uo.createElement),cw={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},fw={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};const dw=()=>v.jsxs("div",{children:[v.jsxs("nav",{className:Ee.container,id:"navbar",children:[v.jsxs("div",{className:Ee.logo,children:[v.jsx("img",{className:Ee.icon,src:Bg,alt:""}),v.jsx("h1",{className:Ee.name,children:"MANACLA BASEBALL ACADEMY"})]}),v.jsxs("div",{className:Ee.links,children:[v.jsx(X,{className:Ee.link,to:"/",onClick:Me,children:"Inicio"}),v.jsx(X,{className:Ee.link,to:"/about",onClick:Me,children:"Nosotros"}),v.jsxs("div",{className:Ee.menu,children:[v.jsx("p",{onClick:()=>{const e=document.getElementsByClassName(hn.container);pa(e[0],hn)},children:"Elegibles"}),v.jsx(ny,{})]}),v.jsx(X,{className:Ee.link,to:"/trajectory",onClick:Me,children:"Trayectoria"}),v.jsx(X,{className:Ee.link,to:"/activities",onClick:Me,children:"Actividades"}),v.jsx(X,{className:Ee.link,to:"/contact",onClick:Me,children:"Contacto"})]}),v.jsx("div",{className:Ee.menuButton,children:v.jsx("button",{className:Ee.icon,onClick:()=>{const e=document.getElementsByClassName(je.container);pa(e[0],je)},children:v.jsx(qt,{className:"bar",icon:cw})})})]}),v.jsx(dy,{})]});function mw(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function pw(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var hw=function(){function e(n){var r=this;this._insertTag=function(a){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(a,i),r.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(pw(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=mw(a);try{i.insertRule(r,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Se="-ms-",lo="-moz-",D="-webkit-",R0="comm",vc="rule",gc="decl",vw="@import",A0="@keyframes",gw="@layer",yw=Math.abs,zo=String.fromCharCode,ww=Object.assign;function xw(e,t){return ge(e,0)^45?(((t<<2^ge(e,0))<<2^ge(e,1))<<2^ge(e,2))<<2^ge(e,3):0}function L0(e){return e.trim()}function kw(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function nu(e,t){return e.indexOf(t)}function ge(e,t){return e.charCodeAt(t)|0}function xa(e,t,n){return e.slice(t,n)}function mt(e){return e.length}function yc(e){return e.length}function ci(e,t){return t.push(e),e}function Sw(e,t){return e.map(t).join("")}var Ro=1,pr=1,$0=0,Le=0,oe=0,xr="";function Ao(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Ro,column:pr,length:o,return:""}}function Tr(e,t){return ww(Ao("",null,null,"",null,null,0),e,{length:-e.length},t)}function Cw(){return oe}function _w(){return oe=Le>0?ge(xr,--Le):0,pr--,oe===10&&(pr=1,Ro--),oe}function Ue(){return oe=Le<$0?ge(xr,Le++):0,pr++,oe===10&&(pr=1,Ro++),oe}function wt(){return ge(xr,Le)}function Ni(){return Le}function Ra(e,t){return xa(xr,e,t)}function ka(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M0(e){return Ro=pr=1,$0=mt(xr=e),Le=0,[]}function D0(e){return xr="",e}function Oi(e){return L0(Ra(Le-1,ru(e===91?e+2:e===40?e+1:e)))}function Ew(e){for(;(oe=wt())&&oe<33;)Ue();return ka(e)>2||ka(oe)>3?"":" "}function bw(e,t){for(;--t&&Ue()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return Ra(e,Ni()+(t<6&&wt()==32&&Ue()==32))}function ru(e){for(;Ue();)switch(oe){case e:return Le;case 34:case 39:e!==34&&e!==39&&ru(oe);break;case 40:e===41&&ru(e);break;case 92:Ue();break}return Le}function Pw(e,t){for(;Ue()&&e+oe!==47+10;)if(e+oe===42+42&&wt()===47)break;return"/*"+Ra(t,Le-1)+"*"+zo(e===47?e:Ue())}function Nw(e){for(;!ka(wt());)Ue();return Ra(e,Le)}function Ow(e){return D0(ji("",null,null,null,[""],e=M0(e),0,[0],e))}function ji(e,t,n,r,a,i,o,l,s){for(var u=0,f=0,d=o,h=0,y=0,w=0,g=1,_=1,m=1,c=0,p="",x=a,k=i,P=r,E=p;_;)switch(w=c,c=Ue()){case 40:if(w!=108&&ge(E,d-1)==58){nu(E+=F(Oi(c),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:E+=Oi(c);break;case 9:case 10:case 13:case 32:E+=Ew(w);break;case 92:E+=bw(Ni()-1,7);continue;case 47:switch(wt()){case 42:case 47:ci(jw(Pw(Ue(),Ni()),t,n),s);break;default:E+="/"}break;case 123*g:l[u++]=mt(E)*m;case 125*g:case 59:case 0:switch(c){case 0:case 125:_=0;case 59+f:m==-1&&(E=F(E,/\f/g,"")),y>0&&mt(E)-d&&ci(y>32?kd(E+";",r,n,d-1):kd(F(E," ","")+";",r,n,d-2),s);break;case 59:E+=";";default:if(ci(P=xd(E,t,n,u,f,a,l,p,x=[],k=[],d),i),c===123)if(f===0)ji(E,t,P,P,x,i,d,l,k);else switch(h===99&&ge(E,3)===110?100:h){case 100:case 108:case 109:case 115:ji(e,P,P,r&&ci(xd(e,P,P,0,0,a,l,p,a,x=[],d),k),a,k,d,l,r?x:k);break;default:ji(E,P,P,P,[""],k,0,l,k)}}u=f=y=0,g=m=1,p=E="",d=o;break;case 58:d=1+mt(E),y=w;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&_w()==125)continue}switch(E+=zo(c),c*g){case 38:m=f>0?1:(E+="\f",-1);break;case 44:l[u++]=(mt(E)-1)*m,m=1;break;case 64:wt()===45&&(E+=Oi(Ue())),h=wt(),f=d=mt(p=E+=Nw(Ni())),c++;break;case 45:w===45&&mt(E)==2&&(g=0)}}return i}function xd(e,t,n,r,a,i,o,l,s,u,f){for(var d=a-1,h=a===0?i:[""],y=yc(h),w=0,g=0,_=0;w<r;++w)for(var m=0,c=xa(e,d+1,d=yw(g=o[w])),p=e;m<y;++m)(p=L0(g>0?h[m]+" "+c:F(c,/&\f/g,h[m])))&&(s[_++]=p);return Ao(e,t,n,a===0?vc:l,s,u,f)}function jw(e,t,n){return Ao(e,t,n,R0,zo(Cw()),xa(e,2,-2),0)}function kd(e,t,n,r){return Ao(e,t,n,gc,xa(e,0,r),xa(e,r+1,-1),r)}function ir(e,t){for(var n="",r=yc(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function Tw(e,t,n,r){switch(e.type){case gw:if(e.children.length)break;case vw:case gc:return e.return=e.return||e.value;case R0:return"";case A0:return e.return=e.value+"{"+ir(e.children,r)+"}";case vc:e.value=e.props.join(",")}return mt(n=ir(e.children,r))?e.return=e.value+"{"+n+"}":""}function Iw(e){var t=yc(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}function zw(e){return function(t){t.root||(t=t.return)&&e(t)}}function Rw(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Aw=function(t,n,r){for(var a=0,i=0;a=i,i=wt(),a===38&&i===12&&(n[r]=1),!ka(i);)Ue();return Ra(t,Le)},Lw=function(t,n){var r=-1,a=44;do switch(ka(a)){case 0:a===38&&wt()===12&&(n[r]=1),t[r]+=Aw(Le-1,n,r);break;case 2:t[r]+=Oi(a);break;case 4:if(a===44){t[++r]=wt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=zo(a)}while(a=Ue());return t},$w=function(t,n){return D0(Lw(M0(t),n))},Sd=new WeakMap,Mw=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Sd.get(r))&&!a){Sd.set(t,!0);for(var i=[],o=$w(n,i),l=r.props,s=0,u=0;s<o.length;s++)for(var f=0;f<l.length;f++,u++)t.props[u]=i[s]?o[s].replace(/&\f/g,l[f]):l[f]+" "+o[s]}}},Dw=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function F0(e,t){switch(xw(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+lo+e+Se+e+e;case 6828:case 4268:return D+e+Se+e+e;case 6165:return D+e+Se+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+Se+"flex-$1$2")+e;case 5443:return D+e+Se+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+Se+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+Se+F(e,"shrink","negative")+e;case 5292:return D+e+Se+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+Se+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+Se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mt(e)-1-t>6)switch(ge(e,t+1)){case 109:if(ge(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+lo+(ge(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~nu(e,"stretch")?F0(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ge(e,t+1)!==115)break;case 6444:switch(ge(e,mt(e)-3-(~nu(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(ge(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+Se+"$2box$3")+e}break;case 5936:switch(ge(e,t+11)){case 114:return D+e+Se+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+Se+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+Se+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+Se+e+e}return e}var Fw=function(t,n,r,a){if(t.length>-1&&!t.return)switch(t.type){case gc:t.return=F0(t.value,t.length);break;case A0:return ir([Tr(t,{value:F(t.value,"@","@"+D)})],a);case vc:if(t.length)return Sw(t.props,function(i){switch(kw(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ir([Tr(t,{props:[F(i,/:(read-\w+)/,":"+lo+"$1")]})],a);case"::placeholder":return ir([Tr(t,{props:[F(i,/:(plac\w+)/,":"+D+"input-$1")]}),Tr(t,{props:[F(i,/:(plac\w+)/,":"+lo+"$1")]}),Tr(t,{props:[F(i,/:(plac\w+)/,Se+"input-$1")]})],a)}return""})}},Uw=[Fw],Bw=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var _=g.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var a=t.stylisPlugins||Uw,i={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var _=g.getAttribute("data-emotion").split(" "),m=1;m<_.length;m++)i[_[m]]=!0;l.push(g)});var s,u=[Mw,Dw];{var f,d=[Tw,zw(function(g){f.insert(g)})],h=Iw(u.concat(a,d)),y=function(_){return ir(Ow(_),h)};s=function(_,m,c,p){f=c,y(_?_+"{"+m.styles+"}":m.styles),p&&(w.inserted[m.name]=!0)}}var w={key:n,sheet:new hw({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return w.sheet.hydrate(l),w},U0={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he=typeof Symbol=="function"&&Symbol.for,wc=he?Symbol.for("react.element"):60103,xc=he?Symbol.for("react.portal"):60106,Lo=he?Symbol.for("react.fragment"):60107,$o=he?Symbol.for("react.strict_mode"):60108,Mo=he?Symbol.for("react.profiler"):60114,Do=he?Symbol.for("react.provider"):60109,Fo=he?Symbol.for("react.context"):60110,kc=he?Symbol.for("react.async_mode"):60111,Uo=he?Symbol.for("react.concurrent_mode"):60111,Bo=he?Symbol.for("react.forward_ref"):60112,Wo=he?Symbol.for("react.suspense"):60113,Ww=he?Symbol.for("react.suspense_list"):60120,Vo=he?Symbol.for("react.memo"):60115,Yo=he?Symbol.for("react.lazy"):60116,Vw=he?Symbol.for("react.block"):60121,Yw=he?Symbol.for("react.fundamental"):60117,Hw=he?Symbol.for("react.responder"):60118,Qw=he?Symbol.for("react.scope"):60119;function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case wc:switch(e=e.type,e){case kc:case Uo:case Lo:case Mo:case $o:case Wo:return e;default:switch(e=e&&e.$$typeof,e){case Fo:case Bo:case Yo:case Vo:case Do:return e;default:return t}}case xc:return t}}}function B0(e){return He(e)===Uo}W.AsyncMode=kc;W.ConcurrentMode=Uo;W.ContextConsumer=Fo;W.ContextProvider=Do;W.Element=wc;W.ForwardRef=Bo;W.Fragment=Lo;W.Lazy=Yo;W.Memo=Vo;W.Portal=xc;W.Profiler=Mo;W.StrictMode=$o;W.Suspense=Wo;W.isAsyncMode=function(e){return B0(e)||He(e)===kc};W.isConcurrentMode=B0;W.isContextConsumer=function(e){return He(e)===Fo};W.isContextProvider=function(e){return He(e)===Do};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===wc};W.isForwardRef=function(e){return He(e)===Bo};W.isFragment=function(e){return He(e)===Lo};W.isLazy=function(e){return He(e)===Yo};W.isMemo=function(e){return He(e)===Vo};W.isPortal=function(e){return He(e)===xc};W.isProfiler=function(e){return He(e)===Mo};W.isStrictMode=function(e){return He(e)===$o};W.isSuspense=function(e){return He(e)===Wo};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Lo||e===Uo||e===Mo||e===$o||e===Wo||e===Ww||typeof e=="object"&&e!==null&&(e.$$typeof===Yo||e.$$typeof===Vo||e.$$typeof===Do||e.$$typeof===Fo||e.$$typeof===Bo||e.$$typeof===Yw||e.$$typeof===Hw||e.$$typeof===Qw||e.$$typeof===Vw)};W.typeOf=He;U0.exports=W;var Xw=U0.exports,W0=Xw,Kw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},V0={};V0[W0.ForwardRef]=Kw;V0[W0.Memo]=Gw;var Jw=!0;function Y0(e,t,n){var r="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):r+=a+" "}),r}var Sc=function(t,n,r){var a=t.key+"-"+n.name;(r===!1||Jw===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},H0=function(t,n,r){Sc(t,n,r);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+a:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function Zw(e){for(var t=0,n,r=0,a=e.length;a>=4;++r,a-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var qw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ex=/[A-Z]|^ms/g,tx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Q0=function(t){return t.charCodeAt(1)===45},Cd=function(t){return t!=null&&typeof t!="boolean"},$l=Rw(function(e){return Q0(e)?e:e.replace(ex,"-$&").toLowerCase()}),_d=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(tx,function(r,a,i){return pt={name:a,styles:i,next:pt},a})}return qw[t]!==1&&!Q0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Sa(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return pt={name:n.name,styles:n.styles,next:pt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)pt={name:r.name,styles:r.styles,next:pt},r=r.next;var a=n.styles+";";return a}return nx(e,t,n)}case"function":{if(e!==void 0){var i=pt,o=n(e);return pt=i,Sa(e,t,o)}break}}if(t==null)return n;var l=t[n];return l!==void 0?l:n}function nx(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Sa(e,t,n[a])+";";else for(var i in n){var o=n[i];if(typeof o!="object")t!=null&&t[o]!==void 0?r+=i+"{"+t[o]+"}":Cd(o)&&(r+=$l(i)+":"+_d(i,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)Cd(o[l])&&(r+=$l(i)+":"+_d(i,o[l])+";");else{var s=Sa(e,t,o);switch(i){case"animation":case"animationName":{r+=$l(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var Ed=/label:\s*([^\s;\n{]+)\s*(;|$)/g,pt,Cc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,i="";pt=void 0;var o=t[0];o==null||o.raw===void 0?(a=!1,i+=Sa(r,n,o)):i+=o[0];for(var l=1;l<t.length;l++)i+=Sa(r,n,t[l]),a&&(i+=o[l]);Ed.lastIndex=0;for(var s="",u;(u=Ed.exec(i))!==null;)s+="-"+u[1];var f=Zw(i)+s;return{name:f,styles:i,next:pt}},rx=function(t){return t()},ax=Vl["useInsertionEffect"]?Vl["useInsertionEffect"]:!1,X0=ax||rx,_c={}.hasOwnProperty,K0=S.createContext(typeof HTMLElement<"u"?Bw({key:"css"}):null);K0.Provider;var G0=function(t){return S.forwardRef(function(n,r){var a=S.useContext(K0);return t(n,a,r)})},J0=S.createContext({}),au="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",ix=function(t,n){var r={};for(var a in n)_c.call(n,a)&&(r[a]=n[a]);return r[au]=t,r},ox=function(t){var n=t.cache,r=t.serialized,a=t.isStringTag;return Sc(n,r,a),X0(function(){return H0(n,r,a)}),null},lx=G0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var a=e[au],i=[r],o="";typeof e.className=="string"?o=Y0(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var l=Cc(i,void 0,S.useContext(J0));o+=t.key+"-"+l.name;var s={};for(var u in e)_c.call(e,u)&&u!=="css"&&u!==au&&(s[u]=e[u]);return s.ref=n,s.className=o,S.createElement(S.Fragment,null,S.createElement(ox,{cache:t,serialized:l,isStringTag:typeof a=="string"}),S.createElement(a,s))}),sx=lx,ux=v.Fragment;function ae(e,t,n){return _c.call(t,"css")?v.jsx(sx,ix(e,t),n):v.jsx(e,t,n)}function Z0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Cc(t)}var b=function(){var t=Z0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},cx=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var l in i)i[l]&&l&&(o&&(o+=" "),o+=l)}break}default:o=i}o&&(a&&(a+=" "),a+=o)}}return a};function fx(e,t,n){var r=[],a=Y0(e,r,n);return r.length<2?n:a+t(r)}var dx=function(t){var n=t.cache,r=t.serializedArr;return X0(function(){for(var a=0;a<r.length;a++)H0(n,r[a],!1)}),null},Ml=G0(function(e,t){var n=!1,r=[],a=function(){for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];var h=Cc(f,t.registered);return r.push(h),Sc(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];return fx(t.registered,a,cx(f))},o={css:a,cx:i,theme:S.useContext(J0)},l=e.children(o);return n=!0,S.createElement(S.Fragment,null,S.createElement(dx,{cache:t,serializedArr:r}),l)}),mx=Object.defineProperty,px=(e,t,n)=>t in e?mx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fi=(e,t,n)=>(px(e,typeof t!="symbol"?t+"":t,n),n),iu=new Map,di=new WeakMap,bd=0,hx=void 0;function vx(e){return e?(di.has(e)||(bd+=1,di.set(e,bd.toString())),di.get(e)):"0"}function gx(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?vx(e.root):e[t]}`).toString()}function yx(e){let t=gx(e),n=iu.get(t);if(!n){const r=new Map;let a;const i=new IntersectionObserver(o=>{o.forEach(l=>{var s;const u=l.isIntersecting&&a.some(f=>l.intersectionRatio>=f);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=u),(s=r.get(l.target))==null||s.forEach(f=>{f(u,l)})})},e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},iu.set(t,n)}return n}function q0(e,t,n={},r=hx){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:a,observer:i,elements:o}=yx(n);let l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),iu.delete(a))}}function wx(e){return typeof e.children!="function"}var Pd=class extends S.Component{constructor(e){super(e),fi(this,"node",null),fi(this,"_unobserveCb",null),fi(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),fi(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),wx(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:i}=this.props;this._unobserveCb=q0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:y,entry:w}=this.state;return e({inView:y,entry:w,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:a,rootMargin:i,onChange:o,skip:l,trackVisibility:s,delay:u,initialInView:f,fallbackInView:d,...h}=this.props;return S.createElement(t||"div",{ref:this.handleNode,...h},e)}};function eh({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:a,triggerOnce:i,skip:o,initialInView:l,fallbackInView:s,onChange:u}={}){var f;const[d,h]=S.useState(null),y=S.useRef(),[w,g]=S.useState({inView:!!l,entry:void 0});y.current=u,S.useEffect(()=>{if(o||!d)return;let p;return p=q0(d,(x,k)=>{g({inView:x,entry:k}),y.current&&y.current(x,k),k.isIntersecting&&i&&p&&(p(),p=void 0)},{root:a,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,d,a,r,i,o,n,s,t]);const _=(f=w.entry)==null?void 0:f.target,m=S.useRef();!d&&_&&!i&&!o&&m.current!==_&&(m.current=_,g({inView:!!l,entry:void 0}));const c=[h,w.inView,w.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var th={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=Symbol.for("react.element"),bc=Symbol.for("react.portal"),Ho=Symbol.for("react.fragment"),Qo=Symbol.for("react.strict_mode"),Xo=Symbol.for("react.profiler"),Ko=Symbol.for("react.provider"),Go=Symbol.for("react.context"),xx=Symbol.for("react.server_context"),Jo=Symbol.for("react.forward_ref"),Zo=Symbol.for("react.suspense"),qo=Symbol.for("react.suspense_list"),el=Symbol.for("react.memo"),tl=Symbol.for("react.lazy"),kx=Symbol.for("react.offscreen"),nh;nh=Symbol.for("react.module.reference");function qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ec:switch(e=e.type,e){case Ho:case Xo:case Qo:case Zo:case qo:return e;default:switch(e=e&&e.$$typeof,e){case xx:case Go:case Jo:case tl:case el:case Ko:return e;default:return t}}case bc:return t}}}V.ContextConsumer=Go;V.ContextProvider=Ko;V.Element=Ec;V.ForwardRef=Jo;V.Fragment=Ho;V.Lazy=tl;V.Memo=el;V.Portal=bc;V.Profiler=Xo;V.StrictMode=Qo;V.Suspense=Zo;V.SuspenseList=qo;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return qe(e)===Go};V.isContextProvider=function(e){return qe(e)===Ko};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ec};V.isForwardRef=function(e){return qe(e)===Jo};V.isFragment=function(e){return qe(e)===Ho};V.isLazy=function(e){return qe(e)===tl};V.isMemo=function(e){return qe(e)===el};V.isPortal=function(e){return qe(e)===bc};V.isProfiler=function(e){return qe(e)===Xo};V.isStrictMode=function(e){return qe(e)===Qo};V.isSuspense=function(e){return qe(e)===Zo};V.isSuspenseList=function(e){return qe(e)===qo};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ho||e===Xo||e===Qo||e===Zo||e===qo||e===kx||typeof e=="object"&&e!==null&&(e.$$typeof===tl||e.$$typeof===el||e.$$typeof===Ko||e.$$typeof===Go||e.$$typeof===Jo||e.$$typeof===nh||e.getModuleId!==void 0)};V.typeOf=qe;th.exports=V;var Sx=th.exports;b`
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
`;const Cx=b`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,_x=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ex=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bx=b`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Px=b`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pc=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nx=b`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ox=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,jx=b`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Tx=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ix=b`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zx=b`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rx=b`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Ax({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Pc,iterationCount:a=1}){return Z0`
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
  `}function Lx(e){return e==null}function $x(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function rh(e,t){return n=>n?e():t()}function Ca(e){return rh(e,()=>null)}function ou(e){return Ca(()=>({opacity:0}))(e)}const Aa=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:a=1e3,fraction:i=0,keyframes:o=Pc,triggerOnce:l=!1,className:s,style:u,childClassName:f,childStyle:d,children:h,onVisibilityChange:y}=e,w=S.useMemo(()=>Ax({keyframes:o,duration:a}),[a,o]);return Lx(h)?null:$x(h)?ae(Dx,{...e,animationStyles:w,children:String(h)}):Sx.isFragment(h)?ae(ah,{...e,animationStyles:w}):ae(ux,{children:S.Children.map(h,(g,_)=>{if(!S.isValidElement(g))return null;const m=r+(t?_*a*n:0);switch(g.type){case"ol":case"ul":return ae(Ml,{children:({cx:c})=>ae(g.type,{...g.props,className:c(s,g.props.className),style:Object.assign({},u,g.props.style),children:ae(Aa,{...e,children:g.props.children})})});case"li":return ae(Pd,{threshold:i,triggerOnce:l,onChange:y,children:({inView:c,ref:p})=>ae(Ml,{children:({cx:x})=>ae(g.type,{...g.props,ref:p,className:x(f,g.props.className),css:Ca(()=>w)(c),style:Object.assign({},d,g.props.style,ou(!c),{animationDelay:m+"ms"})})})});default:return ae(Pd,{threshold:i,triggerOnce:l,onChange:y,children:({inView:c,ref:p})=>ae("div",{ref:p,className:s,css:Ca(()=>w)(c),style:Object.assign({},u,ou(!c),{animationDelay:m+"ms"}),children:ae(Ml,{children:({cx:x})=>ae(g.type,{...g.props,className:x(f,g.props.className),style:Object.assign({},d,g.props.style)})})})})}})})},Mx={display:"inline-block",whiteSpace:"pre"},Dx=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:i=1e3,fraction:o=0,triggerOnce:l=!1,className:s,style:u,children:f,onVisibilityChange:d}=e,{ref:h,inView:y}=eh({triggerOnce:l,threshold:o,onChange:d});return rh(()=>ae("div",{ref:h,className:s,style:Object.assign({},u,Mx),children:f.split("").map((w,g)=>ae("span",{css:Ca(()=>t)(y),style:{animationDelay:a+g*i*r+"ms"},children:w},g))}),()=>ae(ah,{...e,children:f}))(n)},ah=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:i,children:o,onVisibilityChange:l}=e,{ref:s,inView:u}=eh({triggerOnce:r,threshold:n,onChange:l});return ae("div",{ref:s,className:a,css:Ca(()=>t)(u),style:Object.assign({},i,ou(!u)),children:o})};b`
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
`;const Fx=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ux=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Bx=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Wx=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Vx=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Yx=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Hx=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Qx=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Xx=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Kx=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Gx=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Jx=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Zx=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function qx(e,t,n){switch(n){case"bottom-left":return t?Ux:_x;case"bottom-right":return t?Bx:Ex;case"down":return e?t?Vx:Px:t?Wx:bx;case"left":return e?t?Hx:Nx:t?Yx:Pc;case"right":return e?t?Xx:jx:t?Qx:Ox;case"top-left":return t?Kx:Tx;case"top-right":return t?Gx:Ix;case"up":return e?t?Zx:Rx:t?Jx:zx;default:return t?Fx:Cx}}const Xr=e=>{const{big:t=!1,direction:n,reverse:r=!1,...a}=e,i=S.useMemo(()=>qx(t,r,n),[t,n,r]);return ae(Aa,{keyframes:i,...a})};b`
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
`;const e3=b`
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
`;const Dl=e=>ae(Aa,{keyframes:e3,...e});b`
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
`;const t3=b`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,n3=b`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,r3=b`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,a3=b`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,i3=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,o3=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,l3=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,s3=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function u3(e,t){switch(t){case"down":return e?i3:t3;case"right":return e?l3:r3;case"up":return e?s3:a3;case"left":default:return e?o3:n3}}const c3=e=>{const{direction:t,reverse:n=!1,...r}=e,a=S.useMemo(()=>u3(n,t),[t,n]);return ae(Aa,{keyframes:a,...r})},f3=b`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,d3=b`
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
`,m3=b`
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
`,p3=b`
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
`,h3=b`
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
`,v3=b`
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
`,g3=b`
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
`,y3=b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,w3=b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,x3=b`
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
`;function k3(e,t){switch(t){case"down":return e?g3:d3;case"left":return e?y3:m3;case"right":return e?w3:p3;case"up":return e?x3:h3;default:return e?v3:f3}}const S3=e=>{const{direction:t,reverse:n=!1,...r}=e,a=S.useMemo(()=>k3(n,t),[t,n]);return ae(Aa,{keyframes:a,...r})},C3="_container_1d48r_1",_3="_icons_1d48r_45",E3="_quickAccess_1d48r_55",b3="_content_1d48r_69",P3="_contact_1d48r_105",N3="_location_1d48r_105",ct={container:C3,icons:_3,quickAccess:E3,content:b3,contact:P3,location:N3};var O3={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},j3={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};const T3=()=>v.jsxs("footer",{className:ct.container,children:[v.jsxs("div",{className:ct.contact,children:[v.jsx(Dl,{triggerOnce:!0,children:v.jsx("h3",{children:"Contáctanos"})}),v.jsx(Xr,{triggerOnce:!0,children:v.jsxs("div",{className:ct.content,children:[v.jsxs("a",{href:"https://wa.me/+18296490757",children:[v.jsx(qt,{icon:j3,className:ct.icons}),"(829) 649-0757"]}),v.jsxs("a",{href:"https://instagram.com/manaclabaseballacademy",target:"_blank",children:[v.jsx(qt,{icon:O3,className:ct.icons}),"@manaclabaseballacademy"]})]})})]}),v.jsxs("div",{className:ct.location,children:[v.jsx(Dl,{triggerOnce:!0,children:v.jsx("h3",{children:"Ubicación"})}),v.jsx(Xr,{triggerOnce:!0,children:v.jsx("div",{className:ct.content,children:v.jsxs("p",{children:[v.jsx(qt,{icon:fw,className:ct.icons}),"Santo Domingo, República Dominicana"]})})})]}),v.jsxs("div",{className:ct.quickAccess,children:[v.jsx(Dl,{triggerOnce:!0,children:v.jsx("h3",{children:"Acceso Rápido"})}),v.jsx(Xr,{triggerOnce:!0,children:v.jsx("div",{className:ct.content,children:v.jsxs("ul",{onClick:Me,children:[v.jsx("li",{children:v.jsx(X,{to:"/",children:"Inicio"})}),v.jsx("li",{children:v.jsx(X,{to:"/about",children:"Quienes Somos"})}),v.jsx("li",{children:v.jsx(X,{to:"/trajectory",children:"Trayectoria"})}),v.jsx("li",{children:v.jsx(X,{to:"/activities",children:"Actividades"})}),v.jsx("li",{children:v.jsx(X,{to:"/contact",children:"Contacto"})})]})})})]})]}),I3="_container_65mjt_1",z3={container:I3},Rn=({Comp:e})=>v.jsxs("div",{className:z3.container,children:[v.jsx(dw,{}),v.jsx(e,{}),v.jsx(T3,{})]}),R3="_container_p67y2_1",A3="_header_p67y2_13",L3="_mainMedia_p67y2_59",$3="_mainImageContainer_p67y2_101",M3="_secondSection_p67y2_117",D3="_animatedChild_p67y2_151",F3="_pinContainer_p67y2_179",U3="_name_p67y2_235",An={container:R3,header:A3,mainMedia:L3,mainImageContainer:$3,secondSection:M3,animatedChild:D3,pinContainer:F3,name:U3},B3="/assets/main-image-b3d2cbe2.jpg",W3="/assets/PORTADA-min-3a8e0a6c.svg",V3=()=>(S.useEffect(()=>{ja("")},[]),v.jsxs("div",{className:An.container,children:[v.jsxs("section",{className:An.mainMedia,children:[v.jsx("div",{className:An.mainImageContainer,children:v.jsx("img",{src:B3,alt:""})}),v.jsxs("div",{className:An.header,children:[v.jsxs("h1",{children:[v.jsx("span",{className:An.name,children:"MANACLA"})," BASEBALL ACADEMY"]}),v.jsx("h2",{children:"Academia de las futuras estrellas del baseball"})]})]}),v.jsx("section",{className:An.secondSection,children:v.jsx("img",{src:W3,alt:"Portada"})})]}));const Y3="_container_1sejl_1",H3="_secondDiv_1sejl_21",Q3="_imgContainer_1sejl_33",Fl={container:Y3,secondDiv:H3,imgContainer:Q3},X3="/assets/TRAYECTORIA-min-93f8eace.svg",Nd=[{id:1,name:"John Doe",position:"CEO",image:""},{id:2,name:"Jane Smith",position:"CTO",image:""},{id:3,name:"Michael Johnson",position:"COO",image:""},{id:4,name:"Emily Davis",position:"Lead Developer",image:""},{id:5,name:"Robert Brown",position:"Marketing Manager",image:""},{id:6,name:"Sophia Lee",position:"HR Manager",image:""},{id:7,name:"William Wilson",position:"Sales Representative",image:""},{id:8,name:"Olivia Martin",position:"Graphic Designer",image:""},{id:9,name:"James Taylor",position:"Financial Analyst",image:""},{id:10,name:"Ava Anderson",position:"Customer Support",image:""}],K3="_container_1qxo6_1",G3="_imgContainer_1qxo6_13",J3="_textContainer_1qxo6_33",Z3="_secondDiv_1qxo6_47",mi={container:K3,imgContainer:G3,textContainer:J3,secondDiv:Z3},q3=({content:e})=>v.jsx("div",{className:mi.container,children:v.jsxs("div",{className:mi.secondDiv,children:[v.jsx("div",{className:mi.imgContainer,children:v.jsx("img",{src:e.image,alt:"Imagen miembro"})}),v.jsxs("div",{className:mi.textContainer,children:[v.jsx("h3",{children:e.name}),v.jsx("p",{children:e.position})]})]})}),ek={},tk=()=>v.jsxs("div",{className:ek.container,children:[v.jsx("h1",{children:"Miembros del equipo"}),Nd.length!==0?Nd.map(e=>v.jsx(q3,{content:e})):v.jsx("h2",{children:"Aun no hay miembros"})]}),nk=()=>(S.useEffect(()=>{ja("trajectory")},[]),v.jsx("div",{className:Fl.container,children:v.jsxs("div",{className:Fl.secondDiv,children:[v.jsx("div",{className:Fl.imgContainer,children:v.jsx("img",{src:X3,alt:"Imagen de trayectoria"})}),v.jsx(tk,{})]})})),rk="_container_o31le_1",ak="_wsButton_o31le_53",ik="_secondDiv_o31le_69",ok="_icon_o31le_99",Ul={container:rk,wsButton:ak,secondDiv:ik,icon:ok},lk=()=>(S.useEffect(()=>{ja("contact")},[]),v.jsxs("div",{className:Ul.container,children:[v.jsx("h1",{children:"Contacto"}),v.jsx("div",{className:Ul.secondDiv,children:v.jsxs("a",{className:Ul.wsButton,target:"_blank",href:"https://wa.me/+18296490757",children:[v.jsx("i",{className:"fa-brands fa-whatsapp"}),"Whatsapp"]})})]})),sk="_container_1ozq8_1",uk="_information_1ozq8_19",ck="_media_1ozq8_31",Bl={container:sk,information:uk,media:ck},fk=()=>(S.useEffect(()=>{ja("about")},[]),v.jsxs("div",{className:Bl.container,children:[v.jsx("div",{className:Bl.media,children:v.jsx("img",{src:"",alt:"Imagen Sobre Nosotros"})}),v.jsx("div",{className:Bl.information,children:v.jsx("p",{children:"Somos un equipo de profesionales dispuestos a contribuir con el desarrollo de jóvenes con deseos de superarse y alcanzar sus sueños en el Baseball, convertirse en en este campo deportivo e impulsarlo a convertirse en jugadores profesionales."})})]})),dk=[{id:1,name:"Alex",lastName:"González",picturePath:"",videoPath:"",description:"Shortstop with exceptional fielding skills and a powerful bat.",year:"2024"},{id:2,name:"Samantha",lastName:"Ramirez",picturePath:"",videoPath:"",description:"Talented pitcher known for her curveball and control on the mound.",year:"2024"},{id:3,name:"Elijah",lastName:"Martinez",picturePath:"",videoPath:"",description:"Outfielder with great speed and a knack for making spectacular catches.",year:"2024"},{id:4,name:"Isabella",lastName:"López",picturePath:"",videoPath:"",description:"Reliable catcher with a strong arm and a keen eye at the plate.",year:"2024"},{id:5,name:"Liam",lastName:"Sanchez",picturePath:"",videoPath:"",description:"Hard-hitting first baseman with a high on-base percentage.",year:"2024"},{id:6,name:"Ava",lastName:"Flores",picturePath:"",videoPath:"",description:"Skilled infielder with a quick release and precise throws.",year:"2025"},{id:7,name:"Noah",lastName:"Rivera",picturePath:"",videoPath:"",description:"Dominant left-handed pitcher with a devastating slider.",year:"2025"},{id:8,name:"Olivia",lastName:"Gutierrez",picturePath:"",videoPath:"",description:"Versatile utility player who can play multiple positions.",year:"2025"},{id:9,name:"William",lastName:"Diaz",picturePath:"",videoPath:"",description:"Reliable relief pitcher with a deceptive changeup.",year:"2025"},{id:10,name:"Sophia",lastName:"Ortiz",picturePath:"",videoPath:"",description:"Power-hitting outfielder known for her home run prowess.",year:"2025"},{id:11,name:"James",lastName:"Hernandez",picturePath:"",videoPath:"",description:"Strong-armed third baseman with quick reflexes.",year:"2026"},{id:12,name:"Emily",lastName:"Vargas",picturePath:"",videoPath:"",description:"Energetic and speedy leadoff hitter with excellent bunting skills.",year:"2026"},{id:13,name:"Benjamin",lastName:"Jimenez",picturePath:"",videoPath:"",description:"Crafty pitcher with an impressive array of off-speed pitches.",year:"2026"},{id:14,name:"Mia",lastName:"Silva",picturePath:"",videoPath:"",description:"Dynamic base-stealer with an aggressive playing style.",year:"2026"},{id:15,name:"Ethan",lastName:"Rojas",picturePath:"",videoPath:"",description:"Reliable closer with a high-velocity fastball.",year:"2026"},{id:16,name:"Amelia",lastName:"Perez",picturePath:"",videoPath:"",description:"Smooth-fielding second baseman with a consistent bat.",year:"2027"},{id:17,name:"Michael",lastName:"Garcia",picturePath:"",videoPath:"",description:"Powerful right fielder with a cannon arm.",year:"2027"},{id:18,name:"Camila",lastName:"Torres",picturePath:"",videoPath:"",description:"Patient hitter with a high on-base percentage.",year:"2027"},{id:19,name:"Alexander",lastName:"Reyes",picturePath:"",videoPath:"",description:"Evasive base-runner with excellent instincts on the bases.",year:"2027"},{id:20,name:"Avery",lastName:"Gomez",picturePath:"",videoPath:"",description:"Reliable starting pitcher with a good mix of pitches.",year:"2027"},{id:21,name:"Evelyn",lastName:"Herrera",picturePath:"",videoPath:"",description:"Agile and quick shortstop known for her diving plays.",year:"2028"},{id:22,name:"Daniel",lastName:"Castillo",picturePath:"",videoPath:"",description:"Consistent contact hitter with gap-to-gap power.",year:"2028"},{id:23,name:"Harper",lastName:"Andrade",picturePath:"",videoPath:"",description:"Reliable left-handed pitcher with pinpoint control.",year:"2028"},{id:24,name:"Sebastian",lastName:"Fernandez",picturePath:"",videoPath:"",description:"Strong and agile center fielder with a great arm.",year:"2028"},{id:25,name:"Luna",lastName:"Mendoza",picturePath:"",videoPath:"",description:"Versatile switch-hitter capable of playing multiple positions.",year:"2028"}],mk="_container_18u23_1",pk="_header_18u23_21",hk="_imgContainer_18u23_35",vk="_video_18u23_55",gk="_secondDiv_18u23_89",yk="_description_18u23_107",Ln={container:mk,header:pk,imgContainer:hk,video:vk,secondDiv:gk,description:yk},wk=({player:e})=>v.jsx(c3,{triggerOnce:!0,children:v.jsx(Xr,{triggerOnce:!0,delay:5,children:v.jsxs("div",{className:Ln.container,children:[v.jsxs("div",{className:Ln.secondDiv,children:[v.jsxs("div",{className:Ln.header,children:[v.jsx("div",{className:Ln.imgContainer,children:v.jsx("img",{src:"",alt:"Imagen Pelotero"})}),v.jsx("h2",{children:`${e.name} ${e.lastName}`})]}),v.jsx("div",{className:Ln.description,children:v.jsx(Xr,{cascade:!0,damping:.1,children:v.jsx("p",{children:e.description})})})]}),v.jsx("div",{className:Ln.video,children:v.jsx("video",{src:""})})]})})}),xk="_container_17fcs_1",kk="_players_17fcs_11",Wl={container:xk,players:kk},Sk=()=>{const t=lg().year,n=[];return dk.map(r=>{r.year===t&&n.push(r)}),console.log(n),v.jsxs("div",{className:Wl.container,children:[v.jsxs("h1",{children:["Elegibles ",t]}),v.jsx("div",{className:Wl.players,children:n[0]!==null?n.map(r=>v.jsx(wk,{player:r})):v.jsx("div",{className:Wl.notFound,children:v.jsxs("h2",{children:["No hay elegibles para el ",t]})})})]})},Ck="_container_zpjy1_1",_k="_imageContainer_zpjy1_23",Od={container:Ck,imageContainer:_k},Ek=({content:e})=>v.jsxs("div",{className:Od.container,children:[v.jsx("h2",{children:e.name}),v.jsx("div",{className:Od.imageContainer,children:v.jsx("img",{src:e.image,alt:"Imagen actividad"})}),v.jsx("p",{children:e.description})]}),jd=[{id:1,image:"",name:"Actividad 1",description:"Descripcion de la actividad"},{id:2,image:"",name:"Actividad 2",description:"Descripcion de la actividad"}],bk="_container_bb2fq_1",Pk={container:bk},Nk=()=>(S.useEffect(()=>{ja("activities")},[]),v.jsx("div",{className:Pk.container,children:jd.length!==0?jd.map(e=>v.jsx(S3,{duration:500,triggerOnce:!0,children:v.jsx(Ek,{content:e})},e.id)):v.jsx("h1",{children:"No hay actividades"})}));Yl.createRoot(document.getElementById("root")).render(v.jsx(uo.StrictMode,{children:v.jsx(Pg,{children:v.jsxs(kg,{children:[v.jsx(pn,{path:"/",Component:()=>v.jsx(Rn,{Comp:V3})}),v.jsx(pn,{path:"/trajectory",Component:()=>v.jsx(Rn,{Comp:nk})}),v.jsx(pn,{path:"/contact",Component:()=>v.jsx(Rn,{Comp:lk})}),v.jsx(pn,{path:"/about",Component:()=>v.jsx(Rn,{Comp:fk})}),v.jsx(pn,{path:"/players/:year",Component:()=>v.jsx(Rn,{Comp:Sk})}),v.jsx(pn,{path:"/activities",Component:()=>v.jsx(Rn,{Comp:Nk})})]})})}));
