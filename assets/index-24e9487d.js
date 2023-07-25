function dp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function pp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hc={exports:{}},ai={},yc={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),mp=Symbol.for("react.portal"),hp=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),vp=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),Sp=Symbol.for("react.suspense"),kp=Symbol.for("react.memo"),_p=Symbol.for("react.lazy"),Hs=Symbol.iterator;function Cp(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}var vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,wc={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||vc}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xc(){}xc.prototype=Vn.prototype;function La(e,t,n){this.props=e,this.context=t,this.refs=wc,this.updater=n||vc}var Ia=La.prototype=new xc;Ia.constructor=La;gc(Ia,Vn.prototype);Ia.isPureReactComponent=!0;var Qs=Array.isArray,Sc=Object.prototype.hasOwnProperty,Ma={current:null},kc={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Sc.call(t,r)&&!kc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Wr,type:e,key:i,ref:l,props:o,_owner:Ma.current}}function Ep(e,t){return{$$typeof:Wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Da(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr}function Np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ys=/\/+/g;function bi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Np(""+e.key):t.toString(36)}function wo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Wr:case mp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+bi(l,0):r,Qs(o)?(n="",e!=null&&(n=e.replace(Ys,"$&/")+"/"),wo(o,t,n,"",function(u){return u})):o!=null&&(Da(o)&&(o=Ep(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ys,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Qs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+bi(i,a);l+=wo(i,t,n,s,o)}else if(s=Cp(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+bi(i,a++),l+=wo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function qr(e,t,n){if(e==null)return e;var r=[],o=0;return wo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Pp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},xo={transition:null},jp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:xo,ReactCurrentOwner:Ma};T.Children={map:qr,forEach:function(e,t,n){qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qr(e,function(){t++}),t},toArray:function(e){return qr(e,function(t){return t})||[]},only:function(e){if(!Da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=Vn;T.Fragment=hp;T.Profiler=vp;T.PureComponent=La;T.StrictMode=yp;T.Suspense=Sp;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ma.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Sc.call(t,s)&&!kc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Wr,type:e.type,key:o,ref:i,props:r,_owner:l}};T.createContext=function(e){return e={$$typeof:wp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gp,_context:e},e.Consumer=e};T.createElement=_c;T.createFactory=function(e){var t=_c.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:xp,render:e}};T.isValidElement=Da;T.lazy=function(e){return{$$typeof:_p,_payload:{_status:-1,_result:e},_init:Pp}};T.memo=function(e,t){return{$$typeof:kp,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=xo.transition;xo.transition={};try{e()}finally{xo.transition=t}};T.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};T.useCallback=function(e,t){return Se.current.useCallback(e,t)};T.useContext=function(e){return Se.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};T.useEffect=function(e,t){return Se.current.useEffect(e,t)};T.useId=function(){return Se.current.useId()};T.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return Se.current.useMemo(e,t)};T.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};T.useRef=function(e){return Se.current.useRef(e)};T.useState=function(e){return Se.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return Se.current.useTransition()};T.version="18.2.0";yc.exports=T;var k=yc.exports;const Cc=pp(k),zl=dp({__proto__:null,default:Cc},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=k,Rp=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),Op=Object.prototype.hasOwnProperty,Tp=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lp={key:!0,ref:!0,__self:!0,__source:!0};function Ec(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Op.call(t,r)&&!Lp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Rp,type:e,key:i,ref:l,props:o,_owner:Tp.current}}ai.Fragment=zp;ai.jsx=Ec;ai.jsxs=Ec;hc.exports=ai;var m=hc.exports,Ol={},Nc={exports:{}},Ie={},Pc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,z){var O=$.length;$.push(z);e:for(;0<O;){var Z=O-1>>>1,oe=$[Z];if(0<o(oe,z))$[Z]=z,$[O]=oe,O=Z;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var z=$[0],O=$.pop();if(O!==z){$[0]=O;e:for(var Z=0,oe=$.length,Zr=oe>>>1;Z<Zr;){var Qt=2*(Z+1)-1,qi=$[Qt],Yt=Qt+1,Jr=$[Yt];if(0>o(qi,O))Yt<oe&&0>o(Jr,qi)?($[Z]=Jr,$[Yt]=O,Z=Yt):($[Z]=qi,$[Qt]=O,Z=Qt);else if(Yt<oe&&0>o(Jr,O))$[Z]=Jr,$[Yt]=O,Z=Yt;else break e}}return z}function o($,z){var O=$.sortIndex-z.sortIndex;return O!==0?O:$.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,h=null,y=3,x=!1,g=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d($){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=$)r(u),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(u)}}function w($){if(v=!1,d($),!g)if(n(s)!==null)g=!0,Zi(E);else{var z=n(u);z!==null&&Ji(w,z.startTime-$)}}function E($,z){g=!1,v&&(v=!1,f(R),R=-1),x=!0;var O=y;try{for(d(z),h=n(s);h!==null&&(!(h.expirationTime>z)||$&&!Ye());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,y=h.priorityLevel;var oe=Z(h.expirationTime<=z);z=e.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(s)&&r(s),d(z)}else r(s);h=n(s)}if(h!==null)var Zr=!0;else{var Qt=n(u);Qt!==null&&Ji(w,Qt.startTime-z),Zr=!1}return Zr}finally{h=null,y=O,x=!1}}var P=!1,C=null,R=-1,G=5,L=-1;function Ye(){return!(e.unstable_now()-L<G)}function Xn(){if(C!==null){var $=e.unstable_now();L=$;var z=!0;try{z=C(!0,$)}finally{z?Kn():(P=!1,C=null)}}else P=!1}var Kn;if(typeof c=="function")Kn=function(){c(Xn)};else if(typeof MessageChannel<"u"){var Ws=new MessageChannel,fp=Ws.port2;Ws.port1.onmessage=Xn,Kn=function(){fp.postMessage(null)}}else Kn=function(){N(Xn,0)};function Zi($){C=$,P||(P=!0,Kn())}function Ji($,z){R=N(function(){$(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){g||x||(g=!0,Zi(E))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function($){switch(y){case 1:case 2:case 3:var z=3;break;default:z=y}var O=y;y=z;try{return $()}finally{y=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var O=y;y=$;try{return z()}finally{y=O}},e.unstable_scheduleCallback=function($,z,O){var Z=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Z+O:Z):O=Z,$){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=O+oe,$={id:p++,callback:z,priorityLevel:$,startTime:O,expirationTime:oe,sortIndex:-1},O>Z?($.sortIndex=O,t(u,$),n(s)===null&&$===n(u)&&(v?(f(R),R=-1):v=!0,Ji(w,O-Z))):($.sortIndex=oe,t(s,$),g||x||(g=!0,Zi(E))),$},e.unstable_shouldYield=Ye,e.unstable_wrapCallback=function($){var z=y;return function(){var O=y;y=z;try{return $.apply(this,arguments)}finally{y=O}}}})(jc);Pc.exports=jc;var Ip=Pc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=k,Le=Ip;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rc=new Set,wr={};function sn(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(wr[e]=t,e=0;e<t.length;e++)Rc.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,Mp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xs={},Ks={};function Dp(e){return Tl.call(Ks,e)?!0:Tl.call(Xs,e)?!1:Mp.test(e)?Ks[e]=!0:(Xs[e]=!0,!1)}function Fp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Up(e,t,n,r){if(t===null||typeof t>"u"||Fp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fa=/[\-:]([a-z])/g;function Ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fa,Ua);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fa,Ua);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fa,Ua);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Aa(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Up(t,n,o,r)&&(n=null),r||o===null?Dp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,br=Symbol.for("react.element"),mn=Symbol.for("react.portal"),hn=Symbol.for("react.fragment"),Ba=Symbol.for("react.strict_mode"),Ll=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Va=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Wa=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Tc=Symbol.for("react.offscreen"),Gs=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,el;function lr(e){if(el===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function nl(e,t){if(!e||tl)return"";tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function Ap(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hn:return"Fragment";case mn:return"Portal";case Ll:return"Profiler";case Ba:return"StrictMode";case Il:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Oc:return(e.displayName||"Context")+".Consumer";case zc:return(e._context.displayName||"Context")+".Provider";case Va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wa:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function Bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===Ba?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vp(e){var t=Lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){e._valueTracker||(e._valueTracker=Vp(e))}function Ic(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mc(e,t){t=t.checked,t!=null&&Aa(e,"checked",t,!1)}function Ul(e,t){Mc(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,n):t.hasOwnProperty("defaultValue")&&Al(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Js(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Al(e,t,n){(t!=="number"||Lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(ar(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function Dc(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function bs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,Uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wp=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){Wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function Ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function Bc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ac(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Hp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wl(e,t){if(t){if(Hp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ql=null;function Ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,Pn=null,jn=null;function eu(e){if(e=Yr(e)){if(typeof Yl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=di(t),Yl(e.stateNode,e.type,t))}}function Vc(e){Pn?jn?jn.push(e):jn=[e]:Pn=e}function Wc(){if(Pn){var e=Pn,t=jn;if(jn=Pn=null,eu(e),t)for(e=0;e<t.length;e++)eu(t[e])}}function Hc(e,t){return e(t)}function Qc(){}var rl=!1;function Yc(e,t,n){if(rl)return e(t,n);rl=!0;try{return Hc(e,t,n)}finally{rl=!1,(Pn!==null||jn!==null)&&(Qc(),Wc())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=di(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Xl=!1;if(vt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{Xl=!1}function Qp(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var fr=!1,Io=null,Mo=!1,Kl=null,Yp={onError:function(e){fr=!0,Io=e}};function Xp(e,t,n,r,o,i,l,a,s){fr=!1,Io=null,Qp.apply(Yp,arguments)}function Kp(e,t,n,r,o,i,l,a,s){if(Xp.apply(this,arguments),fr){if(fr){var u=Io;fr=!1,Io=null}else throw Error(S(198));Mo||(Mo=!0,Kl=u)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tu(e){if(un(e)!==e)throw Error(S(188))}function Gp(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return tu(o),e;if(i===r)return tu(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Kc(e){return e=Gp(e),e!==null?Gc(e):null}function Gc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gc(e);if(t!==null)return t;e=e.sibling}return null}var Zc=Le.unstable_scheduleCallback,nu=Le.unstable_cancelCallback,Zp=Le.unstable_shouldYield,Jp=Le.unstable_requestPaint,J=Le.unstable_now,qp=Le.unstable_getCurrentPriorityLevel,Qa=Le.unstable_ImmediatePriority,Jc=Le.unstable_UserBlockingPriority,Do=Le.unstable_NormalPriority,bp=Le.unstable_LowPriority,qc=Le.unstable_IdlePriority,si=null,ut=null;function e0(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(si,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:r0,t0=Math.log,n0=Math.LN2;function r0(e){return e>>>=0,e===0?32:31-(t0(e)/n0|0)|0}var no=64,ro=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=sr(a):(i&=l,i!==0&&(r=sr(i)))}else l=n&~o,l!==0?r=sr(l):i!==0&&(r=sr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function o0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-qe(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=o0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Gl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bc(){var e=no;return no<<=1,!(no&4194240)&&(no=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function l0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ya(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tf,Xa,nf,rf,of,Zl=!1,oo=[],Rt=null,zt=null,Ot=null,kr=new Map,_r=new Map,Et=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ru(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function Jn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Yr(t),t!==null&&Xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function s0(e,t,n,r,o){switch(t){case"focusin":return Rt=Jn(Rt,e,t,n,r,o),!0;case"dragenter":return zt=Jn(zt,e,t,n,r,o),!0;case"mouseover":return Ot=Jn(Ot,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return kr.set(i,Jn(kr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,_r.set(i,Jn(_r.get(i)||null,e,t,n,r,o)),!0}return!1}function lf(e){var t=Jt(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=Xc(n),t!==null){e.blockedOn=t,of(e.priority,function(){nf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ql=r,n.target.dispatchEvent(r),Ql=null}else return t=Yr(n),t!==null&&Xa(t),e.blockedOn=n,!1;t.shift()}return!0}function ou(e,t,n){So(e)&&n.delete(t)}function u0(){Zl=!1,Rt!==null&&So(Rt)&&(Rt=null),zt!==null&&So(zt)&&(zt=null),Ot!==null&&So(Ot)&&(Ot=null),kr.forEach(ou),_r.forEach(ou)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,u0)))}function Cr(e){function t(o){return qn(o,e)}if(0<oo.length){qn(oo[0],e);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&qn(Rt,e),zt!==null&&qn(zt,e),Ot!==null&&qn(Ot,e),kr.forEach(t),_r.forEach(t),n=0;n<Et.length;n++)r=Et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Et.length&&(n=Et[0],n.blockedOn===null);)lf(n),n.blockedOn===null&&Et.shift()}var $n=St.ReactCurrentBatchConfig,Uo=!0;function c0(e,t,n,r){var o=F,i=$n.transition;$n.transition=null;try{F=1,Ka(e,t,n,r)}finally{F=o,$n.transition=i}}function f0(e,t,n,r){var o=F,i=$n.transition;$n.transition=null;try{F=4,Ka(e,t,n,r)}finally{F=o,$n.transition=i}}function Ka(e,t,n,r){if(Uo){var o=Jl(e,t,n,r);if(o===null)ml(e,t,r,Ao,n),ru(e,r);else if(s0(o,e,t,n,r))r.stopPropagation();else if(ru(e,r),t&4&&-1<a0.indexOf(e)){for(;o!==null;){var i=Yr(o);if(i!==null&&tf(i),i=Jl(e,t,n,r),i===null&&ml(e,t,r,Ao,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ml(e,t,r,null,n)}}var Ao=null;function Jl(e,t,n,r){if(Ao=null,e=Ha(r),e=Jt(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ao=e,null}function af(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qp()){case Qa:return 1;case Jc:return 4;case Do:case bp:return 16;case qc:return 536870912;default:return 16}default:return 16}}var Pt=null,Ga=null,ko=null;function sf(){if(ko)return ko;var e,t=Ga,n=t.length,r,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ko=o.slice(e,1<r?1-r:void 0)}function _o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function iu(){return!1}function Me(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?io:iu,this.isPropagationStopped=iu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Za=Me(Wn),Qr=X({},Wn,{view:0,detail:0}),d0=Me(Qr),il,ll,bn,ui=X({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ja,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(il=e.screenX-bn.screenX,ll=e.screenY-bn.screenY):ll=il=0,bn=e),il)},movementY:function(e){return"movementY"in e?e.movementY:ll}}),lu=Me(ui),p0=X({},ui,{dataTransfer:0}),m0=Me(p0),h0=X({},Qr,{relatedTarget:0}),al=Me(h0),y0=X({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),v0=Me(y0),g0=X({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w0=Me(g0),x0=X({},Wn,{data:0}),au=Me(x0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_0[e])?!!t[e]:!1}function Ja(){return C0}var E0=X({},Qr,{key:function(e){if(e.key){var t=S0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ja,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),N0=Me(E0),P0=X({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),su=Me(P0),j0=X({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ja}),$0=Me(j0),R0=X({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),z0=Me(R0),O0=X({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),T0=Me(O0),L0=[9,13,27,32],qa=vt&&"CompositionEvent"in window,dr=null;vt&&"documentMode"in document&&(dr=document.documentMode);var I0=vt&&"TextEvent"in window&&!dr,uf=vt&&(!qa||dr&&8<dr&&11>=dr),uu=String.fromCharCode(32),cu=!1;function cf(e,t){switch(e){case"keyup":return L0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function M0(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(cu=!0,uu);case"textInput":return e=t.data,e===uu&&cu?null:e;default:return null}}function D0(e,t){if(yn)return e==="compositionend"||!qa&&cf(e,t)?(e=sf(),ko=Ga=Pt=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uf&&t.locale!=="ko"?null:t.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F0[e.type]:t==="textarea"}function df(e,t,n,r){Vc(r),t=Bo(t,"onChange"),0<t.length&&(n=new Za("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,Er=null;function U0(e){_f(e,0)}function ci(e){var t=wn(e);if(Ic(t))return e}function A0(e,t){if(e==="change")return t}var pf=!1;if(vt){var sl;if(vt){var ul="oninput"in document;if(!ul){var du=document.createElement("div");du.setAttribute("oninput","return;"),ul=typeof du.oninput=="function"}sl=ul}else sl=!1;pf=sl&&(!document.documentMode||9<document.documentMode)}function pu(){pr&&(pr.detachEvent("onpropertychange",mf),Er=pr=null)}function mf(e){if(e.propertyName==="value"&&ci(Er)){var t=[];df(t,Er,e,Ha(e)),Yc(U0,t)}}function B0(e,t,n){e==="focusin"?(pu(),pr=t,Er=n,pr.attachEvent("onpropertychange",mf)):e==="focusout"&&pu()}function V0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ci(Er)}function W0(e,t){if(e==="click")return ci(t)}function H0(e,t){if(e==="input"||e==="change")return ci(t)}function Q0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Q0;function Nr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Tl.call(t,o)||!et(e[o],t[o]))return!1}return!0}function mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hu(e,t){var n=mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mu(n)}}function hf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yf(){for(var e=window,t=Lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lo(e.document)}return t}function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y0(e){var t=yf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hf(n.ownerDocument.documentElement,n)){if(r!==null&&ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=hu(n,i);var l=hu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var X0=vt&&"documentMode"in document&&11>=document.documentMode,vn=null,ql=null,mr=null,bl=!1;function yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bl||vn==null||vn!==Lo(r)||(r=vn,"selectionStart"in r&&ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&Nr(mr,r)||(mr=r,r=Bo(ql,"onSelect"),0<r.length&&(t=new Za("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},cl={},vf={};vt&&(vf=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function fi(e){if(cl[e])return cl[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vf)return cl[e]=t[n];return e}var gf=fi("animationend"),wf=fi("animationiteration"),xf=fi("animationstart"),Sf=fi("transitionend"),kf=new Map,vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){kf.set(e,t),sn(t,[e])}for(var fl=0;fl<vu.length;fl++){var dl=vu[fl],K0=dl.toLowerCase(),G0=dl[0].toUpperCase()+dl.slice(1);Bt(K0,"on"+G0)}Bt(gf,"onAnimationEnd");Bt(wf,"onAnimationIteration");Bt(xf,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(Sf,"onTransitionEnd");Ln("onMouseEnter",["mouseout","mouseover"]);Ln("onMouseLeave",["mouseout","mouseover"]);Ln("onPointerEnter",["pointerout","pointerover"]);Ln("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kp(r,t,void 0,e),e.currentTarget=null}function _f(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;gu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;gu(o,a,u),i=s}}}if(Mo)throw e=Kl,Mo=!1,Kl=null,e}function V(e,t){var n=t[oa];n===void 0&&(n=t[oa]=new Set);var r=e+"__bubble";n.has(r)||(Cf(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),Cf(n,e,r,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[ao]){e[ao]=!0,Rc.forEach(function(n){n!=="selectionchange"&&(Z0.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,pl("selectionchange",!1,t))}}function Cf(e,t,n,r){switch(af(t)){case 1:var o=c0;break;case 4:o=f0;break;default:o=Ka}n=o.bind(null,t,n,e),o=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ml(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Jt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Yc(function(){var u=i,p=Ha(n),h=[];e:{var y=kf.get(e);if(y!==void 0){var x=Za,g=e;switch(e){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":x=N0;break;case"focusin":g="focus",x=al;break;case"focusout":g="blur",x=al;break;case"beforeblur":case"afterblur":x=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=$0;break;case gf:case wf:case xf:x=v0;break;case Sf:x=z0;break;case"scroll":x=d0;break;case"wheel":x=T0;break;case"copy":case"cut":case"paste":x=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=su}var v=(t&4)!==0,N=!v&&e==="scroll",f=v?y!==null?y+"Capture":null:y;v=[];for(var c=u,d;c!==null;){d=c;var w=d.stateNode;if(d.tag===5&&w!==null&&(d=w,f!==null&&(w=Sr(c,f),w!=null&&v.push(jr(c,w,d)))),N)break;c=c.return}0<v.length&&(y=new x(y,g,null,n,p),h.push({event:y,listeners:v}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",y&&n!==Ql&&(g=n.relatedTarget||n.fromElement)&&(Jt(g)||g[gt]))break e;if((x||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,x?(g=n.relatedTarget||n.toElement,x=u,g=g?Jt(g):null,g!==null&&(N=un(g),g!==N||g.tag!==5&&g.tag!==6)&&(g=null)):(x=null,g=u),x!==g)){if(v=lu,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=su,w="onPointerLeave",f="onPointerEnter",c="pointer"),N=x==null?y:wn(x),d=g==null?y:wn(g),y=new v(w,c+"leave",x,n,p),y.target=N,y.relatedTarget=d,w=null,Jt(p)===u&&(v=new v(f,c+"enter",g,n,p),v.target=d,v.relatedTarget=N,w=v),N=w,x&&g)t:{for(v=x,f=g,c=0,d=v;d;d=fn(d))c++;for(d=0,w=f;w;w=fn(w))d++;for(;0<c-d;)v=fn(v),c--;for(;0<d-c;)f=fn(f),d--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=fn(v),f=fn(f)}v=null}else v=null;x!==null&&wu(h,y,x,v,!1),g!==null&&N!==null&&wu(h,N,g,v,!0)}}e:{if(y=u?wn(u):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var E=A0;else if(fu(y))if(pf)E=H0;else{E=V0;var P=B0}else(x=y.nodeName)&&x.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=W0);if(E&&(E=E(e,u))){df(h,E,n,p);break e}P&&P(e,y,u),e==="focusout"&&(P=y._wrapperState)&&P.controlled&&y.type==="number"&&Al(y,"number",y.value)}switch(P=u?wn(u):window,e){case"focusin":(fu(P)||P.contentEditable==="true")&&(vn=P,ql=u,mr=null);break;case"focusout":mr=ql=vn=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,yu(h,n,p);break;case"selectionchange":if(X0)break;case"keydown":case"keyup":yu(h,n,p)}var C;if(qa)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else yn?cf(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(uf&&n.locale!=="ko"&&(yn||R!=="onCompositionStart"?R==="onCompositionEnd"&&yn&&(C=sf()):(Pt=p,Ga="value"in Pt?Pt.value:Pt.textContent,yn=!0)),P=Bo(u,R),0<P.length&&(R=new au(R,e,null,n,p),h.push({event:R,listeners:P}),C?R.data=C:(C=ff(n),C!==null&&(R.data=C)))),(C=I0?M0(e,n):D0(e,n))&&(u=Bo(u,"onBeforeInput"),0<u.length&&(p=new au("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=C))}_f(h,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Sr(e,n),i!=null&&r.unshift(jr(e,i,o)),i=Sr(e,t),i!=null&&r.push(jr(e,i,o))),e=e.return}return r}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Sr(n,i),s!=null&&l.unshift(jr(n,s,a))):o||(s=Sr(n,i),s!=null&&l.push(jr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var J0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function xu(e){return(typeof e=="string"?e:""+e).replace(J0,`
`).replace(q0,"")}function so(e,t,n){if(t=xu(t),xu(e)!==t&&n)throw Error(S(425))}function Vo(){}var ea=null,ta=null;function na(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ra=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,Su=typeof Promise=="function"?Promise:void 0,em=typeof queueMicrotask=="function"?queueMicrotask:typeof Su<"u"?function(e){return Su.resolve(null).then(e).catch(tm)}:ra;function tm(e){setTimeout(function(){throw e})}function hl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Cr(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),at="__reactFiber$"+Hn,$r="__reactProps$"+Hn,gt="__reactContainer$"+Hn,oa="__reactEvents$"+Hn,nm="__reactListeners$"+Hn,rm="__reactHandles$"+Hn;function Jt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ku(e);e!==null;){if(n=e[at])return n;e=ku(e)}return t}e=n,n=e.parentNode}return null}function Yr(e){return e=e[at]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function di(e){return e[$r]||null}var ia=[],xn=-1;function Vt(e){return{current:e}}function W(e){0>xn||(e.current=ia[xn],ia[xn]=null,xn--)}function B(e,t){xn++,ia[xn]=e.current,e.current=t}var At={},ve=Vt(At),Ee=Vt(!1),nn=At;function In(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function Wo(){W(Ee),W(ve)}function _u(e,t,n){if(ve.current!==At)throw Error(S(168));B(ve,t),B(Ee,n)}function Ef(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Bp(e)||"Unknown",o));return X({},n,r)}function Ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,nn=ve.current,B(ve,e),B(Ee,Ee.current),!0}function Cu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Ef(e,t,nn),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(ve),B(ve,e)):W(Ee),B(Ee,n)}var pt=null,pi=!1,yl=!1;function Nf(e){pt===null?pt=[e]:pt.push(e)}function om(e){pi=!0,Nf(e)}function Wt(){if(!yl&&pt!==null){yl=!0;var e=0,t=F;try{var n=pt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,pi=!1}catch(o){throw pt!==null&&(pt=pt.slice(e+1)),Zc(Qa,Wt),o}finally{F=t,yl=!1}}return null}var Sn=[],kn=0,Qo=null,Yo=0,Ue=[],Ae=0,rn=null,mt=1,ht="";function Xt(e,t){Sn[kn++]=Yo,Sn[kn++]=Qo,Qo=e,Yo=t}function Pf(e,t,n){Ue[Ae++]=mt,Ue[Ae++]=ht,Ue[Ae++]=rn,rn=e;var r=mt;e=ht;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var i=32-qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,mt=1<<32-qe(t)+o|n<<o|r,ht=i+e}else mt=1<<i|n<<o|r,ht=e}function es(e){e.return!==null&&(Xt(e,1),Pf(e,1,0))}function ts(e){for(;e===Qo;)Qo=Sn[--kn],Sn[kn]=null,Yo=Sn[--kn],Sn[kn]=null;for(;e===rn;)rn=Ue[--Ae],Ue[Ae]=null,ht=Ue[--Ae],Ue[Ae]=null,mt=Ue[--Ae],Ue[Ae]=null}var Oe=null,ze=null,H=!1,Je=null;function jf(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Eu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,ze=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=rn!==null?{id:mt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,ze=null,!0):!1;default:return!1}}function la(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(H){var t=ze;if(t){var n=t;if(!Eu(e,t)){if(la(e))throw Error(S(418));t=Tt(n.nextSibling);var r=Oe;t&&Eu(e,t)?jf(r,n):(e.flags=e.flags&-4097|2,H=!1,Oe=e)}}else{if(la(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,Oe=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function uo(e){if(e!==Oe)return!1;if(!H)return Nu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!na(e.type,e.memoizedProps)),t&&(t=ze)){if(la(e))throw $f(),Error(S(418));for(;t;)jf(e,t),t=Tt(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Tt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Oe?Tt(e.stateNode.nextSibling):null;return!0}function $f(){for(var e=ze;e;)e=Tt(e.nextSibling)}function Mn(){ze=Oe=null,H=!1}function ns(e){Je===null?Je=[e]:Je.push(e)}var im=St.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xo=Vt(null),Ko=null,_n=null,rs=null;function os(){rs=_n=Ko=null}function is(e){var t=Xo.current;W(Xo),e._currentValue=t}function sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){Ko=e,rs=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(rs!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(Ko===null)throw Error(S(308));_n=e,Ko.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var qt=null;function ls(e){qt===null?qt=[e]:qt.push(e)}function Rf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ls(t)):(n.next=o.next,o.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ct=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Lt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,wt(e,n)}return o=r.interleaved,o===null?(t.next=t,ls(r)):(t.next=o.next,o.next=t),r.interleaved=t,wt(e,n)}function Co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ya(e,n)}}function Pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var o=e.updateQueue;Ct=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var h=o.baseState;l=0,p=u=s=null,a=i;do{var y=a.lane,x=a.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,v=a;switch(y=t,x=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(x,h,y);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,y=typeof g=="function"?g.call(x,h,y):g,y==null)break e;h=X({},h,y);break e;case 2:Ct=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[a]:y.push(a))}else x={eventTime:x,lane:y,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=x,s=h):p=p.next=x,l|=y;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;y=a,a=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(1);if(p===null&&(s=h),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ln|=l,e.lanes=l,e.memoizedState=h}}function ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var Of=new $c.Component().refs;function ua(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mi={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Mt(e),i=yt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Lt(e,i,o),t!==null&&(be(t,e,o,r),Co(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Mt(e),i=yt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Lt(e,i,o),t!==null&&(be(t,e,o,r),Co(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Mt(e),o=yt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Lt(e,o,r),t!==null&&(be(t,e,r,n),Co(t,e,r))}};function $u(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(o,i):!0}function Tf(e,t,n){var r=!1,o=At,i=t.contextType;return typeof i=="object"&&i!==null?i=We(i):(o=Ne(t)?nn:ve.current,r=t.contextTypes,i=(r=r!=null)?In(e,o):At),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ru(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mi.enqueueReplaceState(t,t.state,null)}function ca(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Of,as(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=We(i):(i=Ne(t)?nn:ve.current,o.context=In(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ua(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&mi.enqueueReplaceState(o,o.state,null),Go(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Of&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function Lf(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Dt(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,w){return c===null||c.tag!==6?(c=_l(d,f.mode,w),c.return=f,c):(c=o(c,d),c.return=f,c)}function s(f,c,d,w){var E=d.type;return E===hn?p(f,c,d.props.children,w,d.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&zu(E)===c.type)?(w=o(c,d.props),w.ref=er(f,c,d),w.return=f,w):(w=Ro(d.type,d.key,d.props,null,f.mode,w),w.ref=er(f,c,d),w.return=f,w)}function u(f,c,d,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Cl(d,f.mode,w),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function p(f,c,d,w,E){return c===null||c.tag!==7?(c=tn(d,f.mode,w,E),c.return=f,c):(c=o(c,d),c.return=f,c)}function h(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=_l(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case br:return d=Ro(c.type,c.key,c.props,null,f.mode,d),d.ref=er(f,null,c),d.return=f,d;case mn:return c=Cl(c,f.mode,d),c.return=f,c;case _t:var w=c._init;return h(f,w(c._payload),d)}if(ar(c)||Gn(c))return c=tn(c,f.mode,d,null),c.return=f,c;co(f,c)}return null}function y(f,c,d,w){var E=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(f,c,""+d,w);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case br:return d.key===E?s(f,c,d,w):null;case mn:return d.key===E?u(f,c,d,w):null;case _t:return E=d._init,y(f,c,E(d._payload),w)}if(ar(d)||Gn(d))return E!==null?null:p(f,c,d,w,null);co(f,d)}return null}function x(f,c,d,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(d)||null,a(c,f,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case br:return f=f.get(w.key===null?d:w.key)||null,s(c,f,w,E);case mn:return f=f.get(w.key===null?d:w.key)||null,u(c,f,w,E);case _t:var P=w._init;return x(f,c,d,P(w._payload),E)}if(ar(w)||Gn(w))return f=f.get(d)||null,p(c,f,w,E,null);co(c,w)}return null}function g(f,c,d,w){for(var E=null,P=null,C=c,R=c=0,G=null;C!==null&&R<d.length;R++){C.index>R?(G=C,C=null):G=C.sibling;var L=y(f,C,d[R],w);if(L===null){C===null&&(C=G);break}e&&C&&L.alternate===null&&t(f,C),c=i(L,c,R),P===null?E=L:P.sibling=L,P=L,C=G}if(R===d.length)return n(f,C),H&&Xt(f,R),E;if(C===null){for(;R<d.length;R++)C=h(f,d[R],w),C!==null&&(c=i(C,c,R),P===null?E=C:P.sibling=C,P=C);return H&&Xt(f,R),E}for(C=r(f,C);R<d.length;R++)G=x(C,f,R,d[R],w),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?R:G.key),c=i(G,c,R),P===null?E=G:P.sibling=G,P=G);return e&&C.forEach(function(Ye){return t(f,Ye)}),H&&Xt(f,R),E}function v(f,c,d,w){var E=Gn(d);if(typeof E!="function")throw Error(S(150));if(d=E.call(d),d==null)throw Error(S(151));for(var P=E=null,C=c,R=c=0,G=null,L=d.next();C!==null&&!L.done;R++,L=d.next()){C.index>R?(G=C,C=null):G=C.sibling;var Ye=y(f,C,L.value,w);if(Ye===null){C===null&&(C=G);break}e&&C&&Ye.alternate===null&&t(f,C),c=i(Ye,c,R),P===null?E=Ye:P.sibling=Ye,P=Ye,C=G}if(L.done)return n(f,C),H&&Xt(f,R),E;if(C===null){for(;!L.done;R++,L=d.next())L=h(f,L.value,w),L!==null&&(c=i(L,c,R),P===null?E=L:P.sibling=L,P=L);return H&&Xt(f,R),E}for(C=r(f,C);!L.done;R++,L=d.next())L=x(C,f,R,L.value,w),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?R:L.key),c=i(L,c,R),P===null?E=L:P.sibling=L,P=L);return e&&C.forEach(function(Xn){return t(f,Xn)}),H&&Xt(f,R),E}function N(f,c,d,w){if(typeof d=="object"&&d!==null&&d.type===hn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case br:e:{for(var E=d.key,P=c;P!==null;){if(P.key===E){if(E=d.type,E===hn){if(P.tag===7){n(f,P.sibling),c=o(P,d.props.children),c.return=f,f=c;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&zu(E)===P.type){n(f,P.sibling),c=o(P,d.props),c.ref=er(f,P,d),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}d.type===hn?(c=tn(d.props.children,f.mode,w,d.key),c.return=f,f=c):(w=Ro(d.type,d.key,d.props,null,f.mode,w),w.ref=er(f,c,d),w.return=f,f=w)}return l(f);case mn:e:{for(P=d.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Cl(d,f.mode,w),c.return=f,f=c}return l(f);case _t:return P=d._init,N(f,c,P(d._payload),w)}if(ar(d))return g(f,c,d,w);if(Gn(d))return v(f,c,d,w);co(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=_l(d,f.mode,w),c.return=f,f=c),l(f)):n(f,c)}return N}var Dn=Lf(!0),If=Lf(!1),Xr={},ct=Vt(Xr),Rr=Vt(Xr),zr=Vt(Xr);function bt(e){if(e===Xr)throw Error(S(174));return e}function ss(e,t){switch(B(zr,t),B(Rr,e),B(ct,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}W(ct),B(ct,t)}function Fn(){W(ct),W(Rr),W(zr)}function Mf(e){bt(zr.current);var t=bt(ct.current),n=Vl(t,e.type);t!==n&&(B(Rr,e),B(ct,n))}function us(e){Rr.current===e&&(W(ct),W(Rr))}var Q=Vt(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function cs(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var Eo=St.ReactCurrentDispatcher,gl=St.ReactCurrentBatchConfig,on=0,Y=null,ne=null,ie=null,Jo=!1,hr=!1,Or=0,lm=0;function pe(){throw Error(S(321))}function fs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function ds(e,t,n,r,o,i){if(on=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?cm:fm,e=n(r,o),hr){i=0;do{if(hr=!1,Or=0,25<=i)throw Error(S(301));i+=1,ie=ne=null,t.updateQueue=null,Eo.current=dm,e=n(r,o)}while(hr)}if(Eo.current=qo,t=ne!==null&&ne.next!==null,on=0,ie=ne=Y=null,Jo=!1,t)throw Error(S(300));return e}function ps(){var e=Or!==0;return Or=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function He(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function Tr(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=He(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((on&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,Y.lanes|=p,ln|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,et(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,ln|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=He(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);et(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Df(){}function Ff(e,t){var n=Y,r=He(),o=t(),i=!et(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,ms(Bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Lr(9,Af.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(S(349));on&30||Uf(n,t,o)}return o}function Uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Af(e,t,n,r){t.value=n,t.getSnapshot=r,Vf(t)&&Wf(e)}function Bf(e,t,n){return n(function(){Vf(t)&&Wf(e)})}function Vf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function Wf(e){var t=wt(e,1);t!==null&&be(t,e,1,-1)}function Ou(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=um.bind(null,Y,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hf(){return He().memoizedState}function No(e,t,n,r){var o=nt();Y.flags|=e,o.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function hi(e,t,n,r){var o=He();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&fs(r,l.deps)){o.memoizedState=Lr(t,n,i,r);return}}Y.flags|=e,o.memoizedState=Lr(1|t,n,i,r)}function Tu(e,t){return No(8390656,8,e,t)}function ms(e,t){return hi(2048,8,e,t)}function Qf(e,t){return hi(4,2,e,t)}function Yf(e,t){return hi(4,4,e,t)}function Xf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kf(e,t,n){return n=n!=null?n.concat([e]):null,hi(4,4,Xf.bind(null,t,e),n)}function hs(){}function Gf(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zf(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jf(e,t,n){return on&21?(et(n,t)||(n=bc(),Y.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function am(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=gl.transition;gl.transition={};try{e(!1),t()}finally{F=n,gl.transition=r}}function qf(){return He().memoizedState}function sm(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bf(e))ed(t,n);else if(n=Rf(e,t,n,r),n!==null){var o=xe();be(n,e,r,o),td(n,t,r)}}function um(e,t,n){var r=Mt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bf(e))ed(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,et(a,l)){var s=t.interleaved;s===null?(o.next=o,ls(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Rf(e,t,o,r),n!==null&&(o=xe(),be(n,e,r,o),td(n,t,r))}}function bf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function ed(e,t){hr=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function td(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ya(e,n)}}var qo={readContext:We,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},cm={readContext:We,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Tu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,No(4194308,4,Xf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sm.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:Ou,useDebugValue:hs,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=Ou(!1),t=e[0];return e=am.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=nt();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ae===null)throw Error(S(349));on&30||Uf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Tu(Bf.bind(null,r,i,e),[e]),r.flags|=2048,Lr(9,Af.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=nt(),t=ae.identifierPrefix;if(H){var n=ht,r=mt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fm={readContext:We,useCallback:Gf,useContext:We,useEffect:ms,useImperativeHandle:Kf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:Zf,useReducer:wl,useRef:Hf,useState:function(){return wl(Tr)},useDebugValue:hs,useDeferredValue:function(e){var t=He();return Jf(t,ne.memoizedState,e)},useTransition:function(){var e=wl(Tr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Ff,useId:qf,unstable_isNewReconciler:!1},dm={readContext:We,useCallback:Gf,useContext:We,useEffect:ms,useImperativeHandle:Kf,useInsertionEffect:Qf,useLayoutEffect:Yf,useMemo:Zf,useReducer:xl,useRef:Hf,useState:function(){return xl(Tr)},useDebugValue:hs,useDeferredValue:function(e){var t=He();return ne===null?t.memoizedState=e:Jf(t,ne.memoizedState,e)},useTransition:function(){var e=xl(Tr)[0],t=He().memoizedState;return[e,t]},useMutableSource:Df,useSyncExternalStore:Ff,useId:qf,unstable_isNewReconciler:!1};function Un(e,t){try{var n="",r=t;do n+=Ap(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pm=typeof WeakMap=="function"?WeakMap:Map;function nd(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ei||(ei=!0,Sa=r),fa(e,t)},n}function rd(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){fa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){fa(e,t),typeof r!="function"&&(It===null?It=new Set([this]):It.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pm.bind(null,e,t,n),t.then(e,e))}function Iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Lt(n,t,1))),n.lanes|=1),e)}var mm=St.ReactCurrentOwner,Ce=!1;function we(e,t,n,r){t.child=e===null?If(t,null,n,r):Dn(t,e.child,n,r)}function Du(e,t,n,r,o){n=n.render;var i=t.ref;return Rn(t,o),r=ds(e,t,n,r,i,o),n=ps(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(H&&n&&es(t),t.flags|=1,we(e,t,r,o),t.child)}function Fu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!_s(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,od(e,t,i,r,o)):(e=Ro(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(l,r)&&e.ref===t.ref)return xt(e,t,o)}return t.flags|=1,e=Dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function od(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Nr(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,xt(e,t,o)}return da(e,t,n,r,o)}function id(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(En,Re),Re|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(En,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(En,Re),Re|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(En,Re),Re|=r;return we(e,t,o,n),t.child}function ld(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function da(e,t,n,r,o){var i=Ne(n)?nn:ve.current;return i=In(t,i),Rn(t,o),n=ds(e,t,n,r,i,o),r=ps(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(H&&r&&es(t),t.flags|=1,we(e,t,n,o),t.child)}function Uu(e,t,n,r,o){if(Ne(n)){var i=!0;Ho(t)}else i=!1;if(Rn(t,o),t.stateNode===null)Po(e,t),Tf(t,n,r),ca(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ne(n)?nn:ve.current,u=In(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ru(t,l,r,u),Ct=!1;var y=t.memoizedState;l.state=y,Go(t,r,l,o),s=t.memoizedState,a!==r||y!==s||Ee.current||Ct?(typeof p=="function"&&(ua(t,n,p,r),s=t.memoizedState),(a=Ct||$u(t,n,a,r,y,s,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,zf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ge(t.type,a),l.props=u,h=t.pendingProps,y=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=We(s):(s=Ne(n)?nn:ve.current,s=In(t,s));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||y!==s)&&Ru(t,l,r,s),Ct=!1,y=t.memoizedState,l.state=y,Go(t,r,l,o);var g=t.memoizedState;a!==h||y!==g||Ee.current||Ct?(typeof x=="function"&&(ua(t,n,x,r),g=t.memoizedState),(u=Ct||$u(t,n,u,r,y,g,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return pa(e,t,n,r,i,o)}function pa(e,t,n,r,o,i){ld(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Cu(t,n,!1),xt(e,t,i);r=t.stateNode,mm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Dn(t,e.child,null,i),t.child=Dn(t,null,a,i)):we(e,t,a,i),t.memoizedState=r.state,o&&Cu(t,n,!0),t.child}function ad(e){var t=e.stateNode;t.pendingContext?_u(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_u(e,t.context,!1),ss(e,t.containerInfo)}function Au(e,t,n,r,o){return Mn(),ns(o),t.flags|=256,we(e,t,n,r),t.child}var ma={dehydrated:null,treeContext:null,retryLane:0};function ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function sd(e,t,n){var r=t.pendingProps,o=Q.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(Q,o&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=gi(l,r,0,null),e=tn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ha(n),t.memoizedState=ma,e):ys(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return hm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Dt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Dt(a,i):(i=tn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ha(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ma,r}return i=e.child,e=i.sibling,r=Dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ys(e,t){return t=gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&ns(r),Dn(t,e.child,null,n),e=ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(S(422))),fo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=gi({mode:"visible",children:r.children},o,0,null),i=tn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Dn(t,e.child,null,l),t.child.memoizedState=ha(l),t.memoizedState=ma,i);if(!(t.mode&1))return fo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=Sl(i,r,void 0),fo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ce||a){if(r=ae,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,wt(e,o),be(r,e,o,-1))}return ks(),r=Sl(Error(S(421))),fo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ze=Tt(o.nextSibling),Oe=t,H=!0,Je=null,e!==null&&(Ue[Ae++]=mt,Ue[Ae++]=ht,Ue[Ae++]=rn,mt=e.id,ht=e.overflow,rn=t),t=ys(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sa(e.return,t,n)}function kl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ud(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),kl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}kl(t,!0,n,null,i);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ym(e,t,n){switch(t.tag){case 3:ad(t),Mn();break;case 5:Mf(t);break;case 1:Ne(t.type)&&Ho(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Xo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?sd(e,t,n):(B(Q,Q.current&1),e=xt(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ud(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,id(e,t,n)}return xt(e,t,n)}var cd,ya,fd,dd;cd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ya=function(){};fd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,bt(ct.current);var i=null;switch(n){case"input":o=Fl(e,o),r=Fl(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=Bl(e,o),r=Bl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vo)}Wl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&V("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function tr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vm(e,t,n){var r=t.pendingProps;switch(ts(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ne(t.type)&&Wo(),me(t),null;case 3:return r=t.stateNode,Fn(),W(Ee),W(ve),cs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(Ca(Je),Je=null))),ya(e,t),me(t),null;case 5:us(t);var o=bt(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)fd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=bt(ct.current),uo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[at]=t,r[$r]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<ur.length;o++)V(ur[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Zs(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":qs(r,i),V("invalid",r)}Wl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&so(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&so(r.textContent,a,e),o=["children",""+a]):wr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":eo(r),Js(r,i,!0);break;case"textarea":eo(r),bs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[at]=t,e[$r]=r,cd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Hl(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<ur.length;o++)V(ur[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Zs(e,r),o=Fl(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":qs(e,r),o=Bl(e,r),V("invalid",e);break;default:o=r}Wl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Bc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Uc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xr(e,s):typeof s=="number"&&xr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(wr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&V("scroll",e):s!=null&&Aa(e,i,s,l))}switch(n){case"input":eo(e),Js(e,r,!1);break;case"textarea":eo(e),bs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Nn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=bt(zr.current),bt(ct.current),uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(i=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:so(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return me(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&ze!==null&&t.mode&1&&!(t.flags&128))$f(),Mn(),t.flags|=98560,i=!1;else if(i=uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[at]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Je!==null&&(Ca(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?re===0&&(re=3):ks())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Fn(),ya(e,t),e===null&&Pr(t.stateNode.containerInfo),me(t),null;case 10:return is(t.type._context),me(t),null;case 17:return Ne(t.type)&&Wo(),me(t),null;case 19:if(W(Q),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)tr(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Zo(e),l!==null){for(t.flags|=128,tr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>An&&(t.flags|=128,r=!0,tr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!H)return me(t),null}else 2*J()-i.renderingStartTime>An&&n!==1073741824&&(t.flags|=128,r=!0,tr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Ss(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function gm(e,t){switch(ts(t),t.tag){case 1:return Ne(t.type)&&Wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fn(),W(Ee),W(ve),cs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return us(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return Fn(),null;case 10:return is(t.type._context),null;case 22:case 23:return Ss(),null;case 24:return null;default:return null}}var po=!1,ye=!1,wm=typeof WeakSet=="function"?WeakSet:Set,j=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function va(e,t,n){try{n()}catch(r){K(e,t,r)}}var Vu=!1;function xm(e,t){if(ea=Uo,e=yf(),ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,h=e,y=null;t:for(;;){for(var x;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)y=h,h=x;for(;;){if(h===e)break t;if(y===n&&++u===o&&(a=l),y===i&&++p===r&&(s=l),(x=h.nextSibling)!==null)break;h=y,y=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Uo=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,N=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ge(t.type,v),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=Vu,Vu=!1,g}function yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&va(t,n,i)}o=o.next}while(o!==r)}}function yi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ga(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pd(e){var t=e.alternate;t!==null&&(e.alternate=null,pd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[$r],delete t[oa],delete t[nm],delete t[rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function md(e){return e.tag===5||e.tag===3||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vo));else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}function xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xa(e,t,n),e=e.sibling;e!==null;)xa(e,t,n),e=e.sibling}var ue=null,Ze=!1;function kt(e,t,n){for(n=n.child;n!==null;)hd(e,t,n),n=n.sibling}function hd(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(si,n)}catch{}switch(n.tag){case 5:ye||Cn(n,t);case 6:var r=ue,o=Ze;ue=null,kt(e,t,n),ue=r,Ze=o,ue!==null&&(Ze?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ze?(e=ue,n=n.stateNode,e.nodeType===8?hl(e.parentNode,n):e.nodeType===1&&hl(e,n),Cr(e)):hl(ue,n.stateNode));break;case 4:r=ue,o=Ze,ue=n.stateNode.containerInfo,Ze=!0,kt(e,t,n),ue=r,Ze=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&va(n,t,l),o=o.next}while(o!==r)}kt(e,t,n);break;case 1:if(!ye&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,kt(e,t,n),ye=r):kt(e,t,n);break;default:kt(e,t,n)}}function Hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wm),t.forEach(function(r){var o=$m.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ze=!1;break e;case 3:ue=a.stateNode.containerInfo,Ze=!0;break e;case 4:ue=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(ue===null)throw Error(S(160));hd(i,l,o),ue=null,Ze=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){K(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),tt(e),r&4){try{yr(3,e,e.return),yi(3,e)}catch(v){K(e,e.return,v)}try{yr(5,e,e.return)}catch(v){K(e,e.return,v)}}break;case 1:Xe(t,e),tt(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Xe(t,e),tt(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var o=e.stateNode;try{xr(o,"")}catch(v){K(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Mc(o,i),Hl(a,l);var u=Hl(a,i);for(l=0;l<s.length;l+=2){var p=s[l],h=s[l+1];p==="style"?Bc(o,h):p==="dangerouslySetInnerHTML"?Uc(o,h):p==="children"?xr(o,h):Aa(o,p,h,u)}switch(a){case"input":Ul(o,i);break;case"textarea":Dc(o,i);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Nn(o,!!i.multiple,x,!1):y!==!!i.multiple&&(i.defaultValue!=null?Nn(o,!!i.multiple,i.defaultValue,!0):Nn(o,!!i.multiple,i.multiple?[]:"",!1))}o[$r]=i}catch(v){K(e,e.return,v)}}break;case 6:if(Xe(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){K(e,e.return,v)}}break;case 3:if(Xe(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(v){K(e,e.return,v)}break;case 4:Xe(t,e),tt(e);break;case 13:Xe(t,e),tt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ws=J())),r&4&&Hu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||p,Xe(t,e),ye=u):Xe(t,e),tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(j=e,p=e.child;p!==null;){for(h=j=p;j!==null;){switch(y=j,x=y.child,y.tag){case 0:case 11:case 14:case 15:yr(4,y,y.return);break;case 1:Cn(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){K(r,n,v)}}break;case 5:Cn(y,y.return);break;case 22:if(y.memoizedState!==null){Yu(h);continue}}x!==null?(x.return=y,j=x):Yu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ac("display",l))}catch(v){K(e,e.return,v)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){K(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xe(t,e),tt(e),r&4&&Hu(e);break;case 21:break;default:Xe(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(md(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(xr(o,""),r.flags&=-33);var i=Wu(e);xa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Wu(e);wa(e,a,l);break;default:throw Error(S(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e,t,n){j=e,vd(e)}function vd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||po;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ye;a=po;var u=ye;if(po=l,(ye=s)&&!u)for(j=o;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?Xu(o):s!==null?(s.return=l,j=s):Xu(o);for(;i!==null;)j=i,vd(i),i=i.sibling;j=o,po=a,ye=u}Qu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):Qu(e)}}function Qu(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||yi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ju(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ju(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Cr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ye||t.flags&512&&ga(t)}catch(y){K(t,t.return,y)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Yu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Xu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yi(4,t)}catch(s){K(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){K(t,o,s)}}var i=t.return;try{ga(t)}catch(s){K(t,i,s)}break;case 5:var l=t.return;try{ga(t)}catch(s){K(t,l,s)}}}catch(s){K(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var km=Math.ceil,bo=St.ReactCurrentDispatcher,vs=St.ReactCurrentOwner,Ve=St.ReactCurrentBatchConfig,I=0,ae=null,ee=null,fe=0,Re=0,En=Vt(0),re=0,Ir=null,ln=0,vi=0,gs=0,vr=null,_e=null,ws=0,An=1/0,dt=null,ei=!1,Sa=null,It=null,mo=!1,jt=null,ti=0,gr=0,ka=null,jo=-1,$o=0;function xe(){return I&6?J():jo!==-1?jo:jo=J()}function Mt(e){return e.mode&1?I&2&&fe!==0?fe&-fe:im.transition!==null?($o===0&&($o=bc()),$o):(e=F,e!==0||(e=window.event,e=e===void 0?16:af(e.type)),e):1}function be(e,t,n,r){if(50<gr)throw gr=0,ka=null,Error(S(185));Hr(e,n,r),(!(I&2)||e!==ae)&&(e===ae&&(!(I&2)&&(vi|=n),re===4&&Nt(e,fe)),Pe(e,r),n===1&&I===0&&!(t.mode&1)&&(An=J()+500,pi&&Wt()))}function Pe(e,t){var n=e.callbackNode;i0(e,t);var r=Fo(e,e===ae?fe:0);if(r===0)n!==null&&nu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nu(n),t===1)e.tag===0?om(Ku.bind(null,e)):Nf(Ku.bind(null,e)),em(function(){!(I&6)&&Wt()}),n=null;else{switch(ef(r)){case 1:n=Qa;break;case 4:n=Jc;break;case 16:n=Do;break;case 536870912:n=qc;break;default:n=Do}n=Ed(n,gd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gd(e,t){if(jo=-1,$o=0,I&6)throw Error(S(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Fo(e,e===ae?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ni(e,r);else{t=r;var o=I;I|=2;var i=xd();(ae!==e||fe!==t)&&(dt=null,An=J()+500,en(e,t));do try{Em();break}catch(a){wd(e,a)}while(1);os(),bo.current=i,I=o,ee!==null?t=0:(ae=null,fe=0,t=re)}if(t!==0){if(t===2&&(o=Gl(e),o!==0&&(r=o,t=_a(e,o))),t===1)throw n=Ir,en(e,0),Nt(e,r),Pe(e,J()),n;if(t===6)Nt(e,r);else{if(o=e.current.alternate,!(r&30)&&!_m(o)&&(t=ni(e,r),t===2&&(i=Gl(e),i!==0&&(r=i,t=_a(e,i))),t===1))throw n=Ir,en(e,0),Nt(e,r),Pe(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Kt(e,_e,dt);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=ws+500-J(),10<t)){if(Fo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ra(Kt.bind(null,e,_e,dt),t);break}Kt(e,_e,dt);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*km(r/1960))-r,10<r){e.timeoutHandle=ra(Kt.bind(null,e,_e,dt),r);break}Kt(e,_e,dt);break;case 5:Kt(e,_e,dt);break;default:throw Error(S(329))}}}return Pe(e,J()),e.callbackNode===n?gd.bind(null,e):null}function _a(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=ni(e,t),e!==2&&(t=_e,_e=n,t!==null&&Ca(t)),e}function Ca(e){_e===null?_e=e:_e.push.apply(_e,e)}function _m(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!et(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~gs,t&=~vi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function Ku(e){if(I&6)throw Error(S(327));zn();var t=Fo(e,0);if(!(t&1))return Pe(e,J()),null;var n=ni(e,t);if(e.tag!==0&&n===2){var r=Gl(e);r!==0&&(t=r,n=_a(e,r))}if(n===1)throw n=Ir,en(e,0),Nt(e,t),Pe(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,_e,dt),Pe(e,J()),null}function xs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(An=J()+500,pi&&Wt())}}function an(e){jt!==null&&jt.tag===0&&!(I&6)&&zn();var t=I;I|=1;var n=Ve.transition,r=F;try{if(Ve.transition=null,F=1,e)return e()}finally{F=r,Ve.transition=n,I=t,!(I&6)&&Wt()}}function Ss(){Re=En.current,W(En)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,b0(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(ts(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wo();break;case 3:Fn(),W(Ee),W(ve),cs();break;case 5:us(r);break;case 4:Fn();break;case 13:W(Q);break;case 19:W(Q);break;case 10:is(r.type._context);break;case 22:case 23:Ss()}n=n.return}if(ae=e,ee=e=Dt(e.current,null),fe=Re=t,re=0,Ir=null,gs=vi=ln=0,_e=vr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}qt=null}return e}function wd(e,t){do{var n=ee;try{if(os(),Eo.current=qo,Jo){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Jo=!1}if(on=0,ie=ne=Y=null,hr=!1,Or=0,vs.current=null,n===null||n.return===null){re=1,Ir=t,ee=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Iu(l);if(x!==null){x.flags&=-257,Mu(x,l,a,i,t),x.mode&1&&Lu(i,u,t),t=x,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){Lu(i,u,t),ks();break e}s=Error(S(426))}}else if(H&&a.mode&1){var N=Iu(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Mu(N,l,a,i,t),ns(Un(s,a));break e}}i=s=Un(s,a),re!==4&&(re=2),vr===null?vr=[i]:vr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=nd(i,s,t);Pu(i,f);break e;case 1:a=s;var c=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(It===null||!It.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=rd(i,a,t);Pu(i,w);break e}}i=i.return}while(i!==null)}kd(n)}catch(E){t=E,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function xd(){var e=bo.current;return bo.current=qo,e===null?qo:e}function ks(){(re===0||re===3||re===2)&&(re=4),ae===null||!(ln&268435455)&&!(vi&268435455)||Nt(ae,fe)}function ni(e,t){var n=I;I|=2;var r=xd();(ae!==e||fe!==t)&&(dt=null,en(e,t));do try{Cm();break}catch(o){wd(e,o)}while(1);if(os(),I=n,bo.current=r,ee!==null)throw Error(S(261));return ae=null,fe=0,re}function Cm(){for(;ee!==null;)Sd(ee)}function Em(){for(;ee!==null&&!Zp();)Sd(ee)}function Sd(e){var t=Cd(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?kd(e):ee=t,vs.current=null}function kd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gm(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=vm(n,t,Re),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Kt(e,t,n){var r=F,o=Ve.transition;try{Ve.transition=null,F=1,Nm(e,t,n,r)}finally{Ve.transition=o,F=r}return null}function Nm(e,t,n,r){do zn();while(jt!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(l0(e,i),e===ae&&(ee=ae=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Ed(Do,function(){return zn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var l=F;F=1;var a=I;I|=4,vs.current=null,xm(e,n),yd(n,e),Y0(ta),Uo=!!ea,ta=ea=null,e.current=n,Sm(n),Jp(),I=a,F=l,Ve.transition=i}else e.current=n;if(mo&&(mo=!1,jt=e,ti=o),i=e.pendingLanes,i===0&&(It=null),e0(n.stateNode),Pe(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ei)throw ei=!1,e=Sa,Sa=null,e;return ti&1&&e.tag!==0&&zn(),i=e.pendingLanes,i&1?e===ka?gr++:(gr=0,ka=e):gr=0,Wt(),null}function zn(){if(jt!==null){var e=ef(ti),t=Ve.transition,n=F;try{if(Ve.transition=null,F=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,ti=0,I&6)throw Error(S(331));var o=I;for(I|=4,j=e.current;j!==null;){var i=j,l=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(j=u;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:yr(8,p,i)}var h=p.child;if(h!==null)h.return=p,j=h;else for(;j!==null;){p=j;var y=p.sibling,x=p.return;if(pd(p),p===u){j=null;break}if(y!==null){y.return=x,j=y;break}j=x}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}j=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,j=l;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:yr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){l=j;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,j=d;else e:for(l=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yi(9,a)}}catch(E){K(a,a.return,E)}if(a===l){j=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,j=w;break e}j=a.return}}if(I=o,Wt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(si,e)}catch{}r=!0}return r}finally{F=n,Ve.transition=t}}return!1}function Gu(e,t,n){t=Un(n,t),t=nd(e,t,1),e=Lt(e,t,1),t=xe(),e!==null&&(Hr(e,1,t),Pe(e,t))}function K(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){e=Un(n,e),e=rd(t,e,1),t=Lt(t,e,1),e=xe(),t!==null&&(Hr(t,1,e),Pe(t,e));break}}t=t.return}}function Pm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(fe&n)===n&&(re===4||re===3&&(fe&130023424)===fe&&500>J()-ws?en(e,0):gs|=n),Pe(e,t)}function _d(e,t){t===0&&(e.mode&1?(t=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):t=1);var n=xe();e=wt(e,t),e!==null&&(Hr(e,t,n),Pe(e,n))}function jm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_d(e,n)}function $m(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),_d(e,n)}var Cd;Cd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,ym(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,H&&t.flags&1048576&&Pf(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Po(e,t),e=t.pendingProps;var o=In(t,ve.current);Rn(t,n),o=ds(null,t,r,e,o,n);var i=ps();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,Ho(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,as(t),o.updater=mi,t.stateNode=o,o._reactInternals=t,ca(t,r,e,n),t=pa(null,t,r,!0,i,n)):(t.tag=0,H&&i&&es(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=zm(r),e=Ge(r,e),o){case 0:t=da(null,t,r,e,n);break e;case 1:t=Uu(null,t,r,e,n);break e;case 11:t=Du(null,t,r,e,n);break e;case 14:t=Fu(null,t,r,Ge(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),da(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Uu(e,t,r,o,n);case 3:e:{if(ad(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,zf(e,t),Go(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Un(Error(S(423)),t),t=Au(e,t,r,n,o);break e}else if(r!==o){o=Un(Error(S(424)),t),t=Au(e,t,r,n,o);break e}else for(ze=Tt(t.stateNode.containerInfo.firstChild),Oe=t,H=!0,Je=null,n=If(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===o){t=xt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Mf(t),e===null&&aa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,na(r,o)?l=null:i!==null&&na(r,i)&&(t.flags|=32),ld(e,t),we(e,t,l,n),t.child;case 6:return e===null&&aa(t),null;case 13:return sd(e,t,n);case 4:return ss(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Du(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(Xo,r._currentValue),r._currentValue=l,i!==null)if(et(i.value,l)){if(i.children===o.children&&!Ee.current){t=xt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=yt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),sa(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),sa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Rn(t,n),o=We(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=Ge(r,t.pendingProps),o=Ge(r.type,o),Fu(e,t,r,o,n);case 15:return od(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Po(e,t),t.tag=1,Ne(r)?(e=!0,Ho(t)):e=!1,Rn(t,n),Tf(t,r,o),ca(t,r,o,n),pa(null,t,r,!0,e,n);case 19:return ud(e,t,n);case 22:return id(e,t,n)}throw Error(S(156,t.tag))};function Ed(e,t){return Zc(e,t)}function Rm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new Rm(e,t,n,r)}function _s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zm(e){if(typeof e=="function")return _s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Va)return 11;if(e===Wa)return 14}return 2}function Dt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")_s(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case hn:return tn(n.children,o,i,t);case Ba:l=8,o|=8;break;case Ll:return e=Be(12,n,t,o|2),e.elementType=Ll,e.lanes=i,e;case Il:return e=Be(13,n,t,o),e.elementType=Il,e.lanes=i,e;case Ml:return e=Be(19,n,t,o),e.elementType=Ml,e.lanes=i,e;case Tc:return gi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zc:l=10;break e;case Oc:l=9;break e;case Va:l=11;break e;case Wa:l=14;break e;case _t:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Be(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function tn(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function gi(e,t,n,r){return e=Be(22,e,r,t),e.elementType=Tc,e.lanes=n,e.stateNode={isHidden:!1},e}function _l(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function Cl(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Om(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Cs(e,t,n,r,o,i,l,a,s){return e=new Om(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(i),e}function Tm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nd(e){if(!e)return At;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Ef(e,n,t)}return t}function Pd(e,t,n,r,o,i,l,a,s){return e=Cs(n,r,!0,e,o,i,l,a,s),e.context=Nd(null),n=e.current,r=xe(),o=Mt(n),i=yt(r,o),i.callback=t??null,Lt(n,i,o),e.current.lanes=o,Hr(e,o,r),Pe(e,r),e}function wi(e,t,n,r){var o=t.current,i=xe(),l=Mt(o);return n=Nd(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Lt(o,t,l),e!==null&&(be(e,o,l,i),Co(e,o,l)),l}function ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Es(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function Lm(){return null}var jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ns(e){this._internalRoot=e}xi.prototype.render=Ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));wi(e,t,null,null)};xi.prototype.unmount=Ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){wi(null,e,null,null)}),t[gt]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Et.length&&t!==0&&t<Et[n].priority;n++);Et.splice(n,0,e),n===0&&lf(e)}};function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function Im(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ri(l);i.call(u)}}var l=Pd(t,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=l,e[gt]=l.current,Pr(e.nodeType===8?e.parentNode:e),an(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ri(s);a.call(u)}}var s=Cs(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=s,e[gt]=s.current,Pr(e.nodeType===8?e.parentNode:e),an(function(){wi(t,s,n,r)}),s}function ki(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ri(l);a.call(s)}}wi(t,l,e,o)}else l=Im(n,t,e,o,r);return ri(l)}tf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(Ya(t,n|1),Pe(t,J()),!(I&6)&&(An=J()+500,Wt()))}break;case 13:an(function(){var r=wt(e,1);if(r!==null){var o=xe();be(r,e,1,o)}}),Es(e,1)}};Xa=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=xe();be(t,e,134217728,n)}Es(e,134217728)}};nf=function(e){if(e.tag===13){var t=Mt(e),n=wt(e,t);if(n!==null){var r=xe();be(n,e,t,r)}Es(e,t)}};rf=function(){return F};of=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Yl=function(e,t,n){switch(t){case"input":if(Ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=di(r);if(!o)throw Error(S(90));Ic(r),Ul(r,o)}}}break;case"textarea":Dc(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};Hc=xs;Qc=an;var Mm={usingClientEntryPoint:!1,Events:[Yr,wn,di,Vc,Wc,xs]},nr={findFiberByHostInstance:Jt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Dm={bundleType:nr.bundleType,version:nr.version,rendererPackageName:nr.rendererPackageName,rendererConfig:nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kc(e),e===null?null:e.stateNode},findFiberByHostInstance:nr.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{si=ho.inject(Dm),ut=ho}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mm;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ps(t))throw Error(S(200));return Tm(e,t,null,n)};Ie.createRoot=function(e,t){if(!Ps(e))throw Error(S(299));var n=!1,r="",o=jd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Cs(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,Pr(e.nodeType===8?e.parentNode:e),new Ns(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Kc(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return an(e)};Ie.hydrate=function(e,t,n){if(!Si(t))throw Error(S(200));return ki(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Ps(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=jd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Pd(t,null,e,1,n??null,o,!1,i,l),e[gt]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new xi(t)};Ie.render=function(e,t,n){if(!Si(t))throw Error(S(200));return ki(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Si(e))throw Error(S(40));return e._reactRootContainer?(an(function(){ki(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Ie.unstable_batchedUpdates=xs;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Si(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ki(e,t,n,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";function $d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d)}catch(e){console.error(e)}}$d(),Nc.exports=Ie;var Fm=Nc.exports,qu=Fm;Ol.createRoot=qu.createRoot,Ol.hydrateRoot=qu.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mr.apply(this,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const bu="popstate";function Um(e){e===void 0&&(e={});function t(o,i){let{pathname:l="/",search:a="",hash:s=""}=cn(o.location.hash.substr(1));return Ea("",{pathname:l,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let l=o.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof i=="string"?i:oi(i))}function r(o,i){_i(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Bm(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _i(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Am(){return Math.random().toString(36).substr(2,8)}function ec(e,t){return{usr:e.state,key:e.key,idx:t}}function Ea(e,t,n,r){return n===void 0&&(n=null),Mr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cn(t):t,{state:n,key:t&&t.key||r||Am()})}function oi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function cn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Bm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=$t.Pop,s=null,u=p();u==null&&(u=0,l.replaceState(Mr({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function h(){a=$t.Pop;let N=p(),f=N==null?null:N-u;u=N,s&&s({action:a,location:v.location,delta:f})}function y(N,f){a=$t.Push;let c=Ea(v.location,N,f);n&&n(c,N),u=p()+1;let d=ec(c,u),w=v.createHref(c);try{l.pushState(d,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(w)}i&&s&&s({action:a,location:v.location,delta:1})}function x(N,f){a=$t.Replace;let c=Ea(v.location,N,f);n&&n(c,N),u=p();let d=ec(c,u),w=v.createHref(c);l.replaceState(d,"",w),i&&s&&s({action:a,location:v.location,delta:0})}function g(N){let f=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof N=="string"?N:oi(N);return te(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let v={get action(){return a},get location(){return e(o,l)},listen(N){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(bu,h),s=N,()=>{o.removeEventListener(bu,h),s=null}},createHref(N){return t(o,N)},createURL:g,encodeLocation(N){let f=g(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:y,replace:x,go(N){return l.go(N)}};return v}var tc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tc||(tc={}));function Vm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?cn(t):t,o=js(r.pathname||"/",n);if(o==null)return null;let i=Rd(e);Wm(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=qm(i[a],th(o));return l}function Rd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Ft([r,s.relativePath]),p=n.concat(s);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rd(i.children,t,p,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Zm(u,i.index),routesMeta:p})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of zd(i.path))o(i,l,s)}),t}function zd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=zd(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Wm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hm=/^:\w+$/,Qm=3,Ym=2,Xm=1,Km=10,Gm=-2,nc=e=>e==="*";function Zm(e,t){let n=e.split("/"),r=n.length;return n.some(nc)&&(r+=Gm),t&&(r+=Ym),n.filter(o=>!nc(o)).reduce((o,i)=>o+(Hm.test(i)?Qm:i===""?Xm:Km),r)}function Jm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function qm(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",p=bm({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!p)return null;Object.assign(r,p.params);let h=a.route;i.push({params:r,pathname:Ft([o,p.pathname]),pathnameBase:ih(Ft([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=Ft([o,p.pathnameBase]))}return i}function bm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=eh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,p,h)=>{if(p==="*"){let y=a[h]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}return u[p]=nh(a[h]||"",p),u},{}),pathname:i,pathnameBase:l,pattern:e}}function eh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_i(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function th(e){try{return decodeURI(e)}catch(t){return _i(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nh(e,t){try{return decodeURIComponent(e)}catch(n){return _i(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function js(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function rh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?cn(e):e;return{pathname:n?n.startsWith("/")?n:oh(n,t):t,search:lh(r),hash:ah(o)}}function oh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function El(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Od(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Td(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=cn(e):(o=Mr({},e),te(!o.pathname||!o.pathname.includes("?"),El("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),El("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),El("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let h=t.length-1;if(l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),h-=1;o.pathname=y.join("/")}a=h>=0?t[h]:"/"}let s=rh(o,a),u=l&&l!=="/"&&l.endsWith("/"),p=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),ih=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ah=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ld=["post","put","patch","delete"];new Set(Ld);const uh=["get",...Ld];new Set(uh);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ii.apply(this,arguments)}const $s=k.createContext(null),ch=k.createContext(null),Qn=k.createContext(null),Ci=k.createContext(null),Ht=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Id=k.createContext(null);function fh(e,t){let{relative:n}=t===void 0?{}:t;Kr()||te(!1);let{basename:r,navigator:o}=k.useContext(Qn),{hash:i,pathname:l,search:a}=Dd(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Ft([r,l])),o.createHref({pathname:s,search:a,hash:i})}function Kr(){return k.useContext(Ci)!=null}function Ei(){return Kr()||te(!1),k.useContext(Ci).location}function Md(e){k.useContext(Qn).static||k.useLayoutEffect(e)}function dh(){let{isDataRoute:e}=k.useContext(Ht);return e?Nh():ph()}function ph(){Kr()||te(!1);let e=k.useContext($s),{basename:t,navigator:n}=k.useContext(Qn),{matches:r}=k.useContext(Ht),{pathname:o}=Ei(),i=JSON.stringify(Od(r).map(s=>s.pathnameBase)),l=k.useRef(!1);return Md(()=>{l.current=!0}),k.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let p=Td(s,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ft([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,i,o,e])}function mh(){let{matches:e}=k.useContext(Ht),t=e[e.length-1];return t?t.params:{}}function Dd(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext(Ht),{pathname:o}=Ei(),i=JSON.stringify(Od(r).map(l=>l.pathnameBase));return k.useMemo(()=>Td(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function hh(e,t){return yh(e,t)}function yh(e,t,n){Kr()||te(!1);let{navigator:r}=k.useContext(Qn),{matches:o}=k.useContext(Ht),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=Ei(),u;if(t){var p;let v=typeof t=="string"?cn(t):t;a==="/"||(p=v.pathname)!=null&&p.startsWith(a)||te(!1),u=v}else u=s;let h=u.pathname||"/",y=a==="/"?h:h.slice(a.length)||"/",x=Vm(e,{pathname:y}),g=Sh(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Ft([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Ft([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n);return t&&g?k.createElement(Ci.Provider,{value:{location:ii({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$t.Pop}},g):g}function vh(){let e=Eh(),t=sh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,i)}const gh=k.createElement(vh,null);class wh extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(Ht.Provider,{value:this.props.routeContext},k.createElement(Id.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xh(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext($s);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Ht.Provider,{value:t},r)}function Sh(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=i.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||te(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,s,u)=>{let p=s.route.id?l==null?void 0:l[s.route.id]:null,h=null;n&&(h=s.route.errorElement||gh);let y=t.concat(i.slice(0,u+1)),x=()=>{let g;return p?g=h:s.route.Component?g=k.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=a,k.createElement(xh,{match:s,routeContext:{outlet:a,matches:y,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?k.createElement(wh,{location:n.location,revalidation:n.revalidation,component:h,error:p,children:x(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):x()},null)}var Na;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Na||(Na={}));var Dr;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Dr||(Dr={}));function kh(e){let t=k.useContext($s);return t||te(!1),t}function _h(e){let t=k.useContext(ch);return t||te(!1),t}function Ch(e){let t=k.useContext(Ht);return t||te(!1),t}function Fd(e){let t=Ch(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Eh(){var e;let t=k.useContext(Id),n=_h(Dr.UseRouteError),r=Fd(Dr.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Nh(){let{router:e}=kh(Na.UseNavigateStable),t=Fd(Dr.UseNavigateStable),n=k.useRef(!1);return Md(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ii({fromRouteId:t},i)))},[e,t])}function pn(e){te(!1)}function Ph(e){let{basename:t="/",children:n=null,location:r,navigationType:o=$t.Pop,navigator:i,static:l=!1}=e;Kr()&&te(!1);let a=t.replace(/^\/*/,"/"),s=k.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=cn(r));let{pathname:u="/",search:p="",hash:h="",state:y=null,key:x="default"}=r,g=k.useMemo(()=>{let v=js(u,a);return v==null?null:{location:{pathname:v,search:p,hash:h,state:y,key:x},navigationType:o}},[a,u,p,h,y,x,o]);return g==null?null:k.createElement(Qn.Provider,{value:s},k.createElement(Ci.Provider,{children:n,value:g}))}function jh(e){let{children:t,location:n}=e;return hh(Pa(t),n)}var rc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(rc||(rc={}));new Promise(()=>{});function Pa(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,Pa(r.props.children,i));return}r.type!==pn&&te(!1),!r.props.index||!r.props.children||te(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Pa(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ja.apply(this,arguments)}function $h(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Rh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zh(e,t){return e.button===0&&(!t||t==="_self")&&!Rh(e)}const Oh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Th="startTransition",oc=zl[Th];function Lh(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=Um({window:o,v5Compat:!0}));let l=i.current,[a,s]=k.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=k.useCallback(h=>{u&&oc?oc(()=>s(h)):s(h)},[s,u]);return k.useLayoutEffect(()=>l.listen(p),[l,p]),k.createElement(Ph,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const Ih=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,le=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:p}=t,h=$h(t,Oh),{basename:y}=k.useContext(Qn),x,g=!1;if(typeof u=="string"&&Mh.test(u)&&(x=u,Ih))try{let c=new URL(window.location.href),d=u.startsWith("//")?new URL(c.protocol+u):new URL(u),w=js(d.pathname,y);d.origin===c.origin&&w!=null?u=w+d.search+d.hash:g=!0}catch{}let v=fh(u,{relative:o}),N=Dh(u,{replace:l,state:a,target:s,preventScrollReset:p,relative:o});function f(c){r&&r(c),c.defaultPrevented||N(c)}return k.createElement("a",ja({},h,{href:x||v,onClick:g||i?r:f,ref:n,target:s}))});var ic;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ic||(ic={}));var lc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lc||(lc={}));function Dh(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=dh(),s=Ei(),u=Dd(e,{relative:l});return k.useCallback(p=>{if(zh(p,n)){p.preventDefault();let h=r!==void 0?r:oi(s)===oi(u);a(e,{replace:h,state:o,preventScrollReset:i,relative:l})}},[s,a,u,r,o,n,e,i,l])}const Fh="_container_15f58_1",Uh="_name_15f58_25",Ah="_icon_15f58_39",Bh="_logo_15f58_49",Vh="_sticky_15f58_67",Wh="_showNav_15f58_1",Hh="_links_15f58_101",Qh="_bordered_15f58_1",Yh="_menu_15f58_199",Xh="_menuButton_15f58_221",rt={container:Fh,name:Uh,icon:Ah,logo:Bh,sticky:Vh,showNav:Wh,links:Hh,bordered:Qh,menu:Yh,menuButton:Xh},Kh="_container_1mykz_1",Gh="_init_1mykz_1",Zh="_hidden_1mykz_89",Jh="_exit_1mykz_1",qh="_notShow_1mykz_101",Zt={container:Kh,init:Gh,hidden:Zh,exit:Jh,notShow:qh},bh="_container_jkj6u_1",e1="_init_jkj6u_1",t1="_links_jkj6u_63",n1="_hidden_jkj6u_75",r1="_exit_jkj6u_1",o1="_notShow_jkj6u_107",$e={container:bh,init:e1,links:t1,hidden:n1,exit:r1,notShow:o1},Fr=(e,t)=>{e.classList.remove(t.notShow),e.classList.toggle(t.hidden)?setTimeout(()=>{e.style.display="none"},300):e.style.display="flex"},Rs=()=>{const e=document.querySelector(`li > a[href='${window.location.pathname}']`);e===null?setTimeout(()=>{Rs()},500):e.style.fontWeight="800"},i1=()=>{const e=document.querySelector("#navbar");e!==null&&(window.scrollY>e.offsetTop+60?e.classList.add(rt.sticky):e.classList.remove(rt.sticky))},st=()=>{window.scroll({top:0,behavior:"smooth"})},l1=(e,t)=>{e.classList.add(t.hidden)},Ud=()=>{const e=document.getElementById($e.container);l1(e,$e)};window.onscroll=i1;window.addEventListener("load",()=>Rs());const a1=()=>{const e=()=>{const t=document.getElementsByClassName(Zt.container);Fr(t[0],Zt)};return m.jsxs("div",{className:`${Zt.notShow} ${Zt.hidden} ${Zt.container}`,onClick:()=>{st(),e()},children:[m.jsx(le,{to:"/players/2024",children:"2024"}),m.jsx(le,{to:"/players/2025",children:"2025"}),m.jsx(le,{to:"/players/2026",children:"2026"}),m.jsx(le,{to:"/players/2027",children:"2027"}),m.jsx(le,{to:"/players/2028",children:"2028"})]})},s1="_container_1hgez_1",u1="_showAnimation_1hgez_1",c1="_content_1hgez_51",f1="_links_1hgez_63",d1="_header_1hgez_89",p1="_hidden_1hgez_109",m1="_exit_1hgez_1",h1="_notShow_1hgez_139",ot={container:s1,showAnimation:u1,content:c1,links:f1,header:d1,hidden:p1,exit:m1,notShow:h1},y1=()=>{const e=()=>{const t=document.getElementsByClassName(ot.container);Fr(t[0],ot)};return m.jsx("div",{className:`${ot.container} ${ot.hidden} ${ot.notShow}`,children:m.jsxs("div",{className:ot.content,children:[m.jsxs("div",{className:ot.header,children:[m.jsx("h1",{children:"Elegibles"}),m.jsx("button",{onClick:e,children:m.jsx("i",{className:"fa-solid fa-x"})})]}),m.jsxs("div",{className:ot.links,onClick:()=>{e(),st(),Ud()},children:[m.jsx(le,{to:"/players/2024",children:"2024"}),m.jsx(le,{to:"/players/2025",children:"2025"}),m.jsx(le,{to:"/players/2026",children:"2026"}),m.jsx(le,{to:"/players/2027",children:"2027"}),m.jsx(le,{to:"/players/2028",children:"2028"})]})]})})},v1=()=>{window.addEventListener("scroll",Ud);const e=()=>{const t=document.getElementsByClassName(ot.container);Fr(t[0],ot)};return m.jsxs("div",{children:[m.jsxs("div",{className:`${$e.notShow} ${$e.hidden} ${$e.container} hideOnScroll`,id:$e.container,children:[m.jsx(le,{className:$e.links,to:"/",onClick:st,children:"Inicio"}),m.jsx(le,{className:$e.links,to:"/about",onClick:st,children:"Quienes Somos"}),m.jsx("button",{onClick:e,children:m.jsx("p",{className:$e.links,children:"Elegibles"})}),m.jsx(le,{className:$e.links,to:"/trajectory",onClick:st,children:"Trayectoria"}),m.jsx(le,{className:$e.links,to:"/contact",onClick:st,children:"Contacto"})]}),m.jsx(y1,{})]})},g1="/assets/logo-57272f2b.png",w1=()=>m.jsxs("div",{children:[m.jsxs("nav",{className:rt.container,id:"navbar",children:[m.jsxs("div",{className:rt.logo,children:[m.jsx("img",{className:rt.icon,src:g1}),m.jsx("h1",{className:rt.name,children:"MANACLA Baseball"})]}),m.jsxs("div",{className:rt.links,children:[m.jsx(le,{to:"/",onClick:st,children:"Inicio"}),m.jsx(le,{to:"/about",onClick:st,children:"Quienes Somos"}),m.jsxs("div",{className:rt.menu,children:[m.jsx("p",{onClick:()=>{const e=document.getElementsByClassName(Zt.container);Fr(e[0],Zt)},children:"Elegibles"}),m.jsx(a1,{})]}),m.jsx(le,{to:"/trajectory",onClick:st,children:"Trayectoria"}),m.jsx(le,{to:"/contact",onClick:st,children:"Contacto"})]}),m.jsx("div",{className:rt.menuButton,children:m.jsx("button",{className:rt.icon,onClick:()=>{const e=document.getElementsByClassName($e.container);Fr(e[0],$e)},children:m.jsx("i",{className:"fa-solid fa-bars"})})})]}),m.jsx(v1,{})]});function x1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function S1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var k1=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(S1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=x1(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",li="-moz-",M="-webkit-",Ad="comm",zs="rule",Os="decl",_1="@import",Bd="@keyframes",C1="@layer",E1=Math.abs,Ni=String.fromCharCode,N1=Object.assign;function P1(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Vd(e){return e.trim()}function j1(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function $a(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function Ur(e,t,n){return e.slice(t,n)}function it(e){return e.length}function Ts(e){return e.length}function yo(e,t){return t.push(e),e}function $1(e,t){return e.map(t).join("")}var Pi=1,Bn=1,Wd=0,je=0,b=0,Yn="";function ji(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Pi,column:Bn,length:l,return:""}}function rr(e,t){return N1(ji("",null,null,"",null,null,0),e,{length:-e.length},t)}function R1(){return b}function z1(){return b=je>0?ce(Yn,--je):0,Bn--,b===10&&(Bn=1,Pi--),b}function Te(){return b=je<Wd?ce(Yn,je++):0,Bn++,b===10&&(Bn=1,Pi++),b}function ft(){return ce(Yn,je)}function zo(){return je}function Gr(e,t){return Ur(Yn,e,t)}function Ar(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hd(e){return Pi=Bn=1,Wd=it(Yn=e),je=0,[]}function Qd(e){return Yn="",e}function Oo(e){return Vd(Gr(je-1,Ra(e===91?e+2:e===40?e+1:e)))}function O1(e){for(;(b=ft())&&b<33;)Te();return Ar(e)>2||Ar(b)>3?"":" "}function T1(e,t){for(;--t&&Te()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return Gr(e,zo()+(t<6&&ft()==32&&Te()==32))}function Ra(e){for(;Te();)switch(b){case e:return je;case 34:case 39:e!==34&&e!==39&&Ra(b);break;case 40:e===41&&Ra(e);break;case 92:Te();break}return je}function L1(e,t){for(;Te()&&e+b!==47+10;)if(e+b===42+42&&ft()===47)break;return"/*"+Gr(t,je-1)+"*"+Ni(e===47?e:Te())}function I1(e){for(;!Ar(ft());)Te();return Gr(e,je)}function M1(e){return Qd(To("",null,null,null,[""],e=Hd(e),0,[0],e))}function To(e,t,n,r,o,i,l,a,s){for(var u=0,p=0,h=l,y=0,x=0,g=0,v=1,N=1,f=1,c=0,d="",w=o,E=i,P=r,C=d;N;)switch(g=c,c=Te()){case 40:if(g!=108&&ce(C,h-1)==58){$a(C+=D(Oo(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=Oo(c);break;case 9:case 10:case 13:case 32:C+=O1(g);break;case 92:C+=T1(zo()-1,7);continue;case 47:switch(ft()){case 42:case 47:yo(D1(L1(Te(),zo()),t,n),s);break;default:C+="/"}break;case 123*v:a[u++]=it(C)*f;case 125*v:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+p:f==-1&&(C=D(C,/\f/g,"")),x>0&&it(C)-h&&yo(x>32?sc(C+";",r,n,h-1):sc(D(C," ","")+";",r,n,h-2),s);break;case 59:C+=";";default:if(yo(P=ac(C,t,n,u,p,o,a,d,w=[],E=[],h),i),c===123)if(p===0)To(C,t,P,P,w,i,h,a,E);else switch(y===99&&ce(C,3)===110?100:y){case 100:case 108:case 109:case 115:To(e,P,P,r&&yo(ac(e,P,P,0,0,o,a,d,o,w=[],h),E),o,E,h,a,r?w:E);break;default:To(C,P,P,P,[""],E,0,a,E)}}u=p=x=0,v=f=1,d=C="",h=l;break;case 58:h=1+it(C),x=g;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&z1()==125)continue}switch(C+=Ni(c),c*v){case 38:f=p>0?1:(C+="\f",-1);break;case 44:a[u++]=(it(C)-1)*f,f=1;break;case 64:ft()===45&&(C+=Oo(Te())),y=ft(),p=h=it(d=C+=I1(zo())),c++;break;case 45:g===45&&it(C)==2&&(v=0)}}return i}function ac(e,t,n,r,o,i,l,a,s,u,p){for(var h=o-1,y=o===0?i:[""],x=Ts(y),g=0,v=0,N=0;g<r;++g)for(var f=0,c=Ur(e,h+1,h=E1(v=l[g])),d=e;f<x;++f)(d=Vd(v>0?y[f]+" "+c:D(c,/&\f/g,y[f])))&&(s[N++]=d);return ji(e,t,n,o===0?zs:a,s,u,p)}function D1(e,t,n){return ji(e,t,n,Ad,Ni(R1()),Ur(e,2,-2),0)}function sc(e,t,n,r){return ji(e,t,n,Os,Ur(e,0,r),Ur(e,r+1,-1),r)}function On(e,t){for(var n="",r=Ts(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function F1(e,t,n,r){switch(e.type){case C1:if(e.children.length)break;case _1:case Os:return e.return=e.return||e.value;case Ad:return"";case Bd:return e.return=e.value+"{"+On(e.children,r)+"}";case zs:e.value=e.props.join(",")}return it(n=On(e.children,r))?e.return=e.value+"{"+n+"}":""}function U1(e){var t=Ts(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function A1(e){return function(t){t.root||(t=t.return)&&e(t)}}function B1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var V1=function(t,n,r){for(var o=0,i=0;o=i,i=ft(),o===38&&i===12&&(n[r]=1),!Ar(i);)Te();return Gr(t,je)},W1=function(t,n){var r=-1,o=44;do switch(Ar(o)){case 0:o===38&&ft()===12&&(n[r]=1),t[r]+=V1(je-1,n,r);break;case 2:t[r]+=Oo(o);break;case 4:if(o===44){t[++r]=ft()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ni(o)}while(o=Te());return t},H1=function(t,n){return Qd(W1(Hd(t),n))},uc=new WeakMap,Q1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!uc.get(r))&&!o){uc.set(t,!0);for(var i=[],l=H1(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var p=0;p<a.length;p++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[p]):a[p]+" "+l[s]}}},Y1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Yd(e,t){switch(P1(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+li+e+he+e+e;case 6828:case 4268:return M+e+he+e+e;case 6165:return M+e+he+"flex-"+e+e;case 5187:return M+e+D(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return M+e+he+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return M+e+he+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+he+D(e,"shrink","negative")+e;case 5292:return M+e+he+D(e,"basis","preferred-size")+e;case 6060:return M+"box-"+D(e,"-grow","")+M+e+he+D(e,"grow","positive")+e;case 4554:return M+D(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+li+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$a(e,"stretch")?Yd(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ce(e,t+1)!==115)break;case 6444:switch(ce(e,it(e)-3-(~$a(e,"!important")&&10))){case 107:return D(e,":",":"+M)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(ce(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(ce(e,t+11)){case 114:return M+e+he+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+he+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+he+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+he+e+e}return e}var X1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Os:t.return=Yd(t.value,t.length);break;case Bd:return On([rr(t,{value:D(t.value,"@","@"+M)})],o);case zs:if(t.length)return $1(t.props,function(i){switch(j1(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return On([rr(t,{props:[D(i,/:(read-\w+)/,":"+li+"$1")]})],o);case"::placeholder":return On([rr(t,{props:[D(i,/:(plac\w+)/,":"+M+"input-$1")]}),rr(t,{props:[D(i,/:(plac\w+)/,":"+li+"$1")]}),rr(t,{props:[D(i,/:(plac\w+)/,he+"input-$1")]})],o)}return""})}},K1=[X1],G1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var N=v.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||K1,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var N=v.getAttribute("data-emotion").split(" "),f=1;f<N.length;f++)i[N[f]]=!0;a.push(v)});var s,u=[Q1,Y1];{var p,h=[F1,A1(function(v){p.insert(v)})],y=U1(u.concat(o,h)),x=function(N){return On(M1(N),y)};s=function(N,f,c,d){p=c,x(N?N+"{"+f.styles+"}":f.styles),d&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new k1({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(a),g},Xd={exports:{}},U={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,Ls=se?Symbol.for("react.element"):60103,Is=se?Symbol.for("react.portal"):60106,$i=se?Symbol.for("react.fragment"):60107,Ri=se?Symbol.for("react.strict_mode"):60108,zi=se?Symbol.for("react.profiler"):60114,Oi=se?Symbol.for("react.provider"):60109,Ti=se?Symbol.for("react.context"):60110,Ms=se?Symbol.for("react.async_mode"):60111,Li=se?Symbol.for("react.concurrent_mode"):60111,Ii=se?Symbol.for("react.forward_ref"):60112,Mi=se?Symbol.for("react.suspense"):60113,Z1=se?Symbol.for("react.suspense_list"):60120,Di=se?Symbol.for("react.memo"):60115,Fi=se?Symbol.for("react.lazy"):60116,J1=se?Symbol.for("react.block"):60121,q1=se?Symbol.for("react.fundamental"):60117,b1=se?Symbol.for("react.responder"):60118,ey=se?Symbol.for("react.scope"):60119;function De(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ls:switch(e=e.type,e){case Ms:case Li:case $i:case zi:case Ri:case Mi:return e;default:switch(e=e&&e.$$typeof,e){case Ti:case Ii:case Fi:case Di:case Oi:return e;default:return t}}case Is:return t}}}function Kd(e){return De(e)===Li}U.AsyncMode=Ms;U.ConcurrentMode=Li;U.ContextConsumer=Ti;U.ContextProvider=Oi;U.Element=Ls;U.ForwardRef=Ii;U.Fragment=$i;U.Lazy=Fi;U.Memo=Di;U.Portal=Is;U.Profiler=zi;U.StrictMode=Ri;U.Suspense=Mi;U.isAsyncMode=function(e){return Kd(e)||De(e)===Ms};U.isConcurrentMode=Kd;U.isContextConsumer=function(e){return De(e)===Ti};U.isContextProvider=function(e){return De(e)===Oi};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls};U.isForwardRef=function(e){return De(e)===Ii};U.isFragment=function(e){return De(e)===$i};U.isLazy=function(e){return De(e)===Fi};U.isMemo=function(e){return De(e)===Di};U.isPortal=function(e){return De(e)===Is};U.isProfiler=function(e){return De(e)===zi};U.isStrictMode=function(e){return De(e)===Ri};U.isSuspense=function(e){return De(e)===Mi};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$i||e===Li||e===zi||e===Ri||e===Mi||e===Z1||typeof e=="object"&&e!==null&&(e.$$typeof===Fi||e.$$typeof===Di||e.$$typeof===Oi||e.$$typeof===Ti||e.$$typeof===Ii||e.$$typeof===q1||e.$$typeof===b1||e.$$typeof===ey||e.$$typeof===J1)};U.typeOf=De;Xd.exports=U;var ty=Xd.exports,Gd=ty,ny={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ry={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zd={};Zd[Gd.ForwardRef]=ny;Zd[Gd.Memo]=ry;var oy=!0;function Jd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Ds=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||oy===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},qd=function(t,n,r){Ds(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function iy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ly={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ay=/[A-Z]|^ms/g,sy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,bd=function(t){return t.charCodeAt(1)===45},cc=function(t){return t!=null&&typeof t!="boolean"},Nl=B1(function(e){return bd(e)?e:e.replace(ay,"-$&").toLowerCase()}),fc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(sy,function(r,o,i){return lt={name:o,styles:i,next:lt},o})}return ly[t]!==1&&!bd(t)&&typeof n=="number"&&n!==0?n+"px":n};function Br(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return lt={name:n.name,styles:n.styles,next:lt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)lt={name:r.name,styles:r.styles,next:lt},r=r.next;var o=n.styles+";";return o}return uy(e,t,n)}case"function":{if(e!==void 0){var i=lt,l=n(e);return lt=i,Br(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function uy(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Br(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":cc(l)&&(r+=Nl(i)+":"+fc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)cc(l[a])&&(r+=Nl(i)+":"+fc(i,l[a])+";");else{var s=Br(e,t,l);switch(i){case"animation":case"animationName":{r+=Nl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var dc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,lt,Fs=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";lt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Br(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=Br(r,n,t[a]),o&&(i+=l[a]);dc.lastIndex=0;for(var s="",u;(u=dc.exec(i))!==null;)s+="-"+u[1];var p=iy(i)+s;return{name:p,styles:i,next:lt}},cy=function(t){return t()},fy=zl["useInsertionEffect"]?zl["useInsertionEffect"]:!1,ep=fy||cy,Us={}.hasOwnProperty,tp=k.createContext(typeof HTMLElement<"u"?G1({key:"css"}):null);tp.Provider;var np=function(t){return k.forwardRef(function(n,r){var o=k.useContext(tp);return t(n,o,r)})},rp=k.createContext({}),za="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",dy=function(t,n){var r={};for(var o in n)Us.call(n,o)&&(r[o]=n[o]);return r[za]=t,r},py=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Ds(n,r,o),ep(function(){return qd(n,r,o)}),null},my=np(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[za],i=[r],l="";typeof e.className=="string"?l=Jd(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=Fs(i,void 0,k.useContext(rp));l+=t.key+"-"+a.name;var s={};for(var u in e)Us.call(e,u)&&u!=="css"&&u!==za&&(s[u]=e[u]);return s.ref=n,s.className=l,k.createElement(k.Fragment,null,k.createElement(py,{cache:t,serialized:a,isStringTag:typeof o=="string"}),k.createElement(o,s))}),hy=my,yy=m.Fragment;function q(e,t,n){return Us.call(t,"css")?m.jsx(hy,dy(e,t),n):m.jsx(e,t,n)}function op(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Fs(t)}var _=function(){var t=op.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},vy=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function gy(e,t,n){var r=[],o=Jd(e,r,n);return r.length<2?n:o+t(r)}var wy=function(t){var n=t.cache,r=t.serializedArr;return ep(function(){for(var o=0;o<r.length;o++)qd(n,r[o],!1)}),null},Pl=np(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,p=new Array(u),h=0;h<u;h++)p[h]=arguments[h];var y=Fs(p,t.registered);return r.push(y),Ds(t,y,!1),t.key+"-"+y.name},i=function(){for(var u=arguments.length,p=new Array(u),h=0;h<u;h++)p[h]=arguments[h];return gy(t.registered,o,vy(p))},l={css:o,cx:i,theme:k.useContext(rp)},a=e.children(l);return n=!0,k.createElement(k.Fragment,null,k.createElement(wy,{cache:t,serializedArr:r}),a)}),xy=Object.defineProperty,Sy=(e,t,n)=>t in e?xy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vo=(e,t,n)=>(Sy(e,typeof t!="symbol"?t+"":t,n),n),Oa=new Map,go=new WeakMap,pc=0,ky=void 0;function _y(e){return e?(go.has(e)||(pc+=1,go.set(e,pc.toString())),go.get(e)):"0"}function Cy(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?_y(e.root):e[t]}`).toString()}function Ey(e){let t=Cy(e),n=Oa.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&o.some(p=>a.intersectionRatio>=p);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(p=>{p(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Oa.set(t,n)}return n}function ip(e,t,n={},r=ky){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=Ey(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),Oa.delete(o))}}function Ny(e){return typeof e.children!="function"}var mc=class extends k.Component{constructor(e){super(e),vo(this,"node",null),vo(this,"_unobserveCb",null),vo(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),vo(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Ny(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=ip(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:x,entry:g}=this.state;return e({inView:x,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:u,initialInView:p,fallbackInView:h,...y}=this.props;return k.createElement(t||"div",{ref:this.handleNode,...y},e)}};function lp({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var p;const[h,y]=k.useState(null),x=k.useRef(),[g,v]=k.useState({inView:!!a,entry:void 0});x.current=u,k.useEffect(()=>{if(l||!h)return;let d;return d=ip(h,(w,E)=>{v({inView:w,entry:E}),x.current&&x.current(w,E),E.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,h,o,r,i,l,n,s,t]);const N=(p=g.entry)==null?void 0:p.target,f=k.useRef();!h&&N&&!i&&!l&&f.current!==N&&(f.current=N,v({inView:!!a,entry:void 0}));const c=[y,g.inView,g.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var ap={exports:{}},A={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),Ui=Symbol.for("react.fragment"),Ai=Symbol.for("react.strict_mode"),Bi=Symbol.for("react.profiler"),Vi=Symbol.for("react.provider"),Wi=Symbol.for("react.context"),Py=Symbol.for("react.server_context"),Hi=Symbol.for("react.forward_ref"),Qi=Symbol.for("react.suspense"),Yi=Symbol.for("react.suspense_list"),Xi=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),jy=Symbol.for("react.offscreen"),sp;sp=Symbol.for("react.module.reference");function Qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case As:switch(e=e.type,e){case Ui:case Bi:case Ai:case Qi:case Yi:return e;default:switch(e=e&&e.$$typeof,e){case Py:case Wi:case Hi:case Ki:case Xi:case Vi:return e;default:return t}}case Bs:return t}}}A.ContextConsumer=Wi;A.ContextProvider=Vi;A.Element=As;A.ForwardRef=Hi;A.Fragment=Ui;A.Lazy=Ki;A.Memo=Xi;A.Portal=Bs;A.Profiler=Bi;A.StrictMode=Ai;A.Suspense=Qi;A.SuspenseList=Yi;A.isAsyncMode=function(){return!1};A.isConcurrentMode=function(){return!1};A.isContextConsumer=function(e){return Qe(e)===Wi};A.isContextProvider=function(e){return Qe(e)===Vi};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===As};A.isForwardRef=function(e){return Qe(e)===Hi};A.isFragment=function(e){return Qe(e)===Ui};A.isLazy=function(e){return Qe(e)===Ki};A.isMemo=function(e){return Qe(e)===Xi};A.isPortal=function(e){return Qe(e)===Bs};A.isProfiler=function(e){return Qe(e)===Bi};A.isStrictMode=function(e){return Qe(e)===Ai};A.isSuspense=function(e){return Qe(e)===Qi};A.isSuspenseList=function(e){return Qe(e)===Yi};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ui||e===Bi||e===Ai||e===Qi||e===Yi||e===jy||typeof e=="object"&&e!==null&&(e.$$typeof===Ki||e.$$typeof===Xi||e.$$typeof===Vi||e.$$typeof===Wi||e.$$typeof===Hi||e.$$typeof===sp||e.getModuleId!==void 0)};A.typeOf=Qe;ap.exports=A;var $y=ap.exports;_`
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
`;_`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;_`
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
`;_`
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
`;_`
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
`;_`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;const Ry=_`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,zy=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Oy=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ty=_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ly=_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vs=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Iy=_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,My=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dy=_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fy=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Uy=_`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ay=_`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,By=_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Vy({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Vs,iterationCount:o=1}){return op`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Wy(e){return e==null}function Hy(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function up(e,t){return n=>n?e():t()}function Vr(e){return up(e,()=>null)}function Ta(e){return Vr(()=>({opacity:0}))(e)}const Gi=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Vs,triggerOnce:a=!1,className:s,style:u,childClassName:p,childStyle:h,children:y,onVisibilityChange:x}=e,g=k.useMemo(()=>Vy({keyframes:l,duration:o}),[o,l]);return Wy(y)?null:Hy(y)?q(Yy,{...e,animationStyles:g,children:String(y)}):$y.isFragment(y)?q(cp,{...e,animationStyles:g}):q(yy,{children:k.Children.map(y,(v,N)=>{if(!k.isValidElement(v))return null;const f=r+(t?N*o*n:0);switch(v.type){case"ol":case"ul":return q(Pl,{children:({cx:c})=>q(v.type,{...v.props,className:c(s,v.props.className),style:Object.assign({},u,v.props.style),children:q(Gi,{...e,children:v.props.children})})});case"li":return q(mc,{threshold:i,triggerOnce:a,onChange:x,children:({inView:c,ref:d})=>q(Pl,{children:({cx:w})=>q(v.type,{...v.props,ref:d,className:w(p,v.props.className),css:Vr(()=>g)(c),style:Object.assign({},h,v.props.style,Ta(!c),{animationDelay:f+"ms"})})})});default:return q(mc,{threshold:i,triggerOnce:a,onChange:x,children:({inView:c,ref:d})=>q("div",{ref:d,className:s,css:Vr(()=>g)(c),style:Object.assign({},u,Ta(!c),{animationDelay:f+"ms"}),children:q(Pl,{children:({cx:w})=>q(v.type,{...v.props,className:w(p,v.props.className),style:Object.assign({},h,v.props.style)})})})})}})})},Qy={display:"inline-block",whiteSpace:"pre"},Yy=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:p,onVisibilityChange:h}=e,{ref:y,inView:x}=lp({triggerOnce:a,threshold:l,onChange:h});return up(()=>q("div",{ref:y,className:s,style:Object.assign({},u,Qy),children:p.split("").map((g,v)=>q("span",{css:Vr(()=>t)(x),style:{animationDelay:o+v*i*r+"ms"},children:g},v))}),()=>q(cp,{...e,children:p}))(n)},cp=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=lp({triggerOnce:r,threshold:n,onChange:a});return q("div",{ref:s,className:o,css:Vr(()=>t)(u),style:Object.assign({},i,Ta(!u)),children:l})};_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;_`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;_`
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
`;const Xy=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ky=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Gy=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Zy=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Jy=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,qy=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,by=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ev=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,tv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,nv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,rv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ov=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,iv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function lv(e,t,n){switch(n){case"bottom-left":return t?Ky:zy;case"bottom-right":return t?Gy:Oy;case"down":return e?t?Jy:Ly:t?Zy:Ty;case"left":return e?t?by:Iy:t?qy:Vs;case"right":return e?t?tv:Dy:t?ev:My;case"top-left":return t?nv:Fy;case"top-right":return t?rv:Uy;case"up":return e?t?iv:By:t?ov:Ay;default:return t?Xy:Ry}}const Tn=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=k.useMemo(()=>lv(t,r,n),[t,n,r]);return q(Gi,{keyframes:i,...o})};_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;const av=_`
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
`;_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;const jl=e=>q(Gi,{keyframes:av,...e});_`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;_`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const sv=_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,uv=_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,cv=_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,fv=_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,dv=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,pv=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,mv=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,hv=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function yv(e,t){switch(t){case"down":return e?dv:sv;case"right":return e?mv:cv;case"up":return e?hv:fv;case"left":default:return e?pv:uv}}const Gt=e=>{const{direction:t,reverse:n=!1,...r}=e,o=k.useMemo(()=>yv(n,t),[t,n]);return q(Gi,{keyframes:o,...r})};_`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
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
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;_`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;_`
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
`;const vv="_container_hhw1p_1",gv="_quickAccess_hhw1p_55",wv="_content_hhw1p_69",xv="_contact_hhw1p_105",Sv="_location_hhw1p_105",kv="_whatsapp_hhw1p_129",_v="_instagram_hhw1p_137",Cv="_pin_hhw1p_145",Ev="_credit_hhw1p_161",Ke={container:vv,quickAccess:gv,content:wv,contact:xv,location:Sv,whatsapp:kv,instagram:_v,pin:Cv,credit:Ev},Nv=()=>(k.useEffect(Rs),m.jsxs("footer",{className:Ke.container,children:[m.jsxs("div",{className:Ke.contact,children:[m.jsx(jl,{triggerOnce:!0,children:m.jsx("h3",{children:"Contáctanos"})}),m.jsx(Tn,{triggerOnce:!0,children:m.jsxs("div",{className:Ke.content,children:[m.jsxs("a",{href:"",children:[m.jsx("i",{className:`fa-brands fa-whatsapp ${Ke.whatsapp}`}),"(809)-000-0000"]}),m.jsxs("a",{href:"https://instagram.com/manaclabaseballacademy",target:"_blank",children:[m.jsx("i",{className:`fa-brands fa-instagram ${Ke.instagram}`}),"@manaclabaseballacademy"]})]})})]}),m.jsxs("div",{className:Ke.location,children:[m.jsx(jl,{triggerOnce:!0,children:m.jsx("h3",{children:"Ubicación"})}),m.jsx(Tn,{triggerOnce:!0,children:m.jsx("div",{className:Ke.content,children:m.jsxs("a",{href:"",children:[m.jsx("i",{className:`fa-solid fa-location-dot ${Ke.pin}`}),"Calle, Ciudad, Pais"]})})})]}),m.jsxs("div",{className:Ke.quickAccess,children:[m.jsx(jl,{triggerOnce:!0,children:m.jsx("h3",{children:"Acceso Rápido"})}),m.jsx(Tn,{triggerOnce:!0,children:m.jsx("div",{className:Ke.content,children:m.jsxs("ul",{children:[m.jsx("li",{children:m.jsx("a",{href:"/",children:"Inicio"})}),m.jsx("li",{children:m.jsx("a",{href:"/about",children:"Quienes Somos"})}),m.jsx("li",{children:m.jsx("a",{href:"/trajectory",children:"Trayectoria"})}),m.jsx("li",{children:m.jsx("a",{href:"/contact",children:"Contacto"})})]})})})]}),m.jsx("div",{className:Ke.credit,children:m.jsx("a",{target:"_blank",href:"https://lordicon.com",children:"Animated icons by Lordicon.com"})})]})),Pv="_container_65mjt_1",jv={container:Pv},or=({Comp:e})=>m.jsxs("div",{className:jv.container,children:[m.jsx(w1,{}),m.jsx(e,{}),m.jsx(Nv,{})]}),$v="_container_ga0wc_1",Rv="_header_ga0wc_11",zv="_name_ga0wc_45",Ov="_mainMedia_ga0wc_67",Tv="_mainImageContainer_ga0wc_111",Lv="_secondSection_ga0wc_127",Iv="_animatedChild_ga0wc_153",Mv="_rowReverse_ga0wc_195",Dv="_informationPin_ga0wc_225",Fv="_pinContainer_ga0wc_279",Fe={container:$v,header:Rv,name:zv,mainMedia:Ov,mainImageContainer:Tv,secondSection:Lv,animatedChild:Iv,rowReverse:Mv,informationPin:Dv,pinContainer:Fv},Uv="/assets/home-page-1-b0cb1dcf.jpg",Av="/assets/home-page-2-02876cc6.jpg",Bv="/assets/main-image-b3d2cbe2.jpg",Vv=()=>m.jsxs("div",{className:Fe.container,children:[m.jsxs("section",{className:Fe.mainMedia,children:[m.jsx("div",{className:Fe.mainImageContainer,children:m.jsx("img",{src:Bv,alt:""})}),m.jsxs("div",{className:Fe.header,children:[m.jsxs("h1",{children:[m.jsx("span",{className:Fe.name,children:"MANACLA"})," BASEBALL ACADEMY"]}),m.jsx("h2",{children:"Academia de las futuras estrellas del baseball"})]})]}),m.jsxs("section",{className:Fe.secondSection,children:[m.jsx(Tn,{triggerOnce:!0,children:m.jsx("h3",{children:"Informaciones"})}),m.jsxs("div",{className:Fe.animatedChild,children:[m.jsx(Gt,{triggerOnce:!0,children:m.jsx("p",{children:"En nuestra academia, creemos en el poder transformador de este deporte, donde cada swing, cada lanzamiento y cada corrida de bases representa una oportunidad para superar los límites, aprender lecciones de vida y forjar el carácter de los jugadores."})}),m.jsx(Gt,{triggerOnce:!0,direction:"right",children:m.jsx("img",{src:Uv,alt:"Playing baseball photo"})})]}),m.jsxs("div",{className:`${Fe.rowReverse} ${Fe.animatedChild}`,children:[m.jsx(Gt,{triggerOnce:!0,direction:"right",children:m.jsx("p",{children:"Conocemos la importancia del desarrollo integral de nuestros jugadores, no solo en términos físicos y técnicos, sino también en su carácter, mentalidad y resiliencia, fomentando valores como el trabajo en equipo, la disciplina y el liderazgo que los acompañarán durante toda su vida."})}),m.jsx(Gt,{triggerOnce:!0,children:m.jsx("img",{src:Av,alt:"Playing baseball photo"})})]}),m.jsxs("div",{className:Fe.animatedChild,children:[m.jsx(Gt,{triggerOnce:!0,children:m.jsx("p",{children:"Estamos ubicados en (Provincia), República Dominicana"})}),m.jsx(Gt,{triggerOnce:!0,direction:"right",children:m.jsx("div",{className:Fe.pinContainer,children:m.jsx("i",{className:`${Fe.informationPin} fa-solid fa-location-dot`})})})]})]})]});const Wv="_container_1acri_1",Hv="_imgContainer_1acri_39",Qv="_secondDiv_1acri_59",Yv="_information_1acri_77",ir={container:Wv,imgContainer:Hv,secondDiv:Qv,information:Yv},Xv=()=>m.jsxs("div",{className:ir.container,children:[m.jsx("h1",{children:"Trayectoria"}),m.jsxs("div",{className:ir.secondDiv,children:[m.jsx("div",{className:ir.imgContainer,children:m.jsx("img",{src:"",alt:"Imagen de trayectoria"})}),m.jsx("div",{className:ir.information,children:m.jsx("p",{children:"Informacion"})})]}),m.jsx("div",{className:ir.decoration})]}),Kv="_container_1f9v4_1",Gv="_formContainer_1f9v4_25",Zv="_gmailButton_1f9v4_75",Jv="_wsButton_1f9v4_91",qv="_buttonsContainer_1f9v4_123",bv="_secondDiv_1f9v4_135",eg="_icon_1f9v4_149",tg="_ourMedia_1f9v4_171",ng="_list_1f9v4_189",rg="_socialMedia_1f9v4_201",og="_listTitle_1f9v4_217",ig="_instagram_1f9v4_225",ge={container:Kv,formContainer:Gv,gmailButton:Zv,wsButton:Jv,buttonsContainer:qv,secondDiv:bv,icon:eg,ourMedia:tg,list:ng,socialMedia:rg,listTitle:og,instagram:ig},lg="/assets/wired-lineal-981-consultation-b6df62e9.webp",ag=()=>{const[e,t]=k.useState("");return m.jsxs("div",{className:ge.container,children:[m.jsx("h1",{children:"Contacto"}),m.jsxs("div",{className:ge.secondDiv,children:[m.jsx("div",{className:ge.icon,children:m.jsx("img",{src:lg,alt:""})}),m.jsxs("div",{className:ge.ourMedia,children:[m.jsx("h2",{children:"Nuestros medios"}),m.jsx("div",{className:ge.mediaContainer,children:m.jsxs("ul",{className:ge.list,children:[m.jsxs("li",{children:[m.jsx("span",{className:ge.listTitle,children:"Correo:"})," example@gmail.com"]}),m.jsxs("li",{children:[m.jsx("span",{className:ge.listTitle,children:"Teléfono:"})," (809)-000-0000"]}),m.jsxs("li",{children:[m.jsx("span",{className:ge.listTitle,children:"Redes Sociales:"}),m.jsx("ul",{className:ge.socialMedia,children:m.jsx("li",{children:m.jsxs("a",{href:"https://instagram.com/manaclabaseballacademy",target:"_blank",children:[m.jsx("i",{className:`fa-brands fa-instagram ${ge.instagram}`})," @manaclabaseballacademy"]})})})]})]})})]}),m.jsxs("div",{className:ge.formContainer,children:[m.jsx("h2",{children:"Ponte en contacto con nosotros ya"}),m.jsx("form",{action:"",children:m.jsx("textarea",{placeholder:"Escribe tu mensaje aqui!",onChange:n=>t(n.target.value)})}),m.jsxs("div",{className:ge.buttonsContainer,children:[m.jsxs("a",{className:ge.gmailButton,target:"_blank",href:`mailto:emmanuel28.05.2006@gmail.com?subject=Baseball%20Academy&body=${e}`,children:[m.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"}),"Gmail"]}),m.jsxs("a",{className:ge.wsButton,target:"_blank",href:`https://wa.me/+18098648668?text=${e}`,children:[m.jsx("i",{className:"fa-brands fa-whatsapp"}),"Whatsapp"]})]})]})]})]})},sg="_container_137s2_1",ug="_information_137s2_15",$l={container:sg,information:ug},cg=()=>m.jsxs("div",{className:$l.container,children:[m.jsx("h1",{children:"Sobre nosotros"}),m.jsx("div",{className:$l.information,children:m.jsx("p",{children:"Somos un equipo de profesionales dispuestos a contribuir con el desarrollo de jóvenes con deseos de superarse y alcanzar sus sueños en el Baseball, convertirse en en este campo deportivo e impulsarlo a convertirse en jugadores profesionales."})}),m.jsx("div",{className:$l.decoration})]}),fg=[{id:1,name:"Alex",lastName:"González",picturePath:"",videoPath:"",description:"Shortstop with exceptional fielding skills and a powerful bat.",year:"2024"},{id:2,name:"Samantha",lastName:"Ramirez",picturePath:"",videoPath:"",description:"Talented pitcher known for her curveball and control on the mound.",year:"2024"},{id:3,name:"Elijah",lastName:"Martinez",picturePath:"",videoPath:"",description:"Outfielder with great speed and a knack for making spectacular catches.",year:"2024"},{id:4,name:"Isabella",lastName:"López",picturePath:"",videoPath:"",description:"Reliable catcher with a strong arm and a keen eye at the plate.",year:"2024"},{id:5,name:"Liam",lastName:"Sanchez",picturePath:"",videoPath:"",description:"Hard-hitting first baseman with a high on-base percentage.",year:"2024"},{id:6,name:"Ava",lastName:"Flores",picturePath:"",videoPath:"",description:"Skilled infielder with a quick release and precise throws.",year:"2025"},{id:7,name:"Noah",lastName:"Rivera",picturePath:"",videoPath:"",description:"Dominant left-handed pitcher with a devastating slider.",year:"2025"},{id:8,name:"Olivia",lastName:"Gutierrez",picturePath:"",videoPath:"",description:"Versatile utility player who can play multiple positions.",year:"2025"},{id:9,name:"William",lastName:"Diaz",picturePath:"",videoPath:"",description:"Reliable relief pitcher with a deceptive changeup.",year:"2025"},{id:10,name:"Sophia",lastName:"Ortiz",picturePath:"",videoPath:"",description:"Power-hitting outfielder known for her home run prowess.",year:"2025"},{id:11,name:"James",lastName:"Hernandez",picturePath:"",videoPath:"",description:"Strong-armed third baseman with quick reflexes.",year:"2026"},{id:12,name:"Emily",lastName:"Vargas",picturePath:"",videoPath:"",description:"Energetic and speedy leadoff hitter with excellent bunting skills.",year:"2026"},{id:13,name:"Benjamin",lastName:"Jimenez",picturePath:"",videoPath:"",description:"Crafty pitcher with an impressive array of off-speed pitches.",year:"2026"},{id:14,name:"Mia",lastName:"Silva",picturePath:"",videoPath:"",description:"Dynamic base-stealer with an aggressive playing style.",year:"2026"},{id:15,name:"Ethan",lastName:"Rojas",picturePath:"",videoPath:"",description:"Reliable closer with a high-velocity fastball.",year:"2026"},{id:16,name:"Amelia",lastName:"Perez",picturePath:"",videoPath:"",description:"Smooth-fielding second baseman with a consistent bat.",year:"2027"},{id:17,name:"Michael",lastName:"Garcia",picturePath:"",videoPath:"",description:"Powerful right fielder with a cannon arm.",year:"2027"},{id:18,name:"Camila",lastName:"Torres",picturePath:"",videoPath:"",description:"Patient hitter with a high on-base percentage.",year:"2027"},{id:19,name:"Alexander",lastName:"Reyes",picturePath:"",videoPath:"",description:"Evasive base-runner with excellent instincts on the bases.",year:"2027"},{id:20,name:"Avery",lastName:"Gomez",picturePath:"",videoPath:"",description:"Reliable starting pitcher with a good mix of pitches.",year:"2027"},{id:21,name:"Evelyn",lastName:"Herrera",picturePath:"",videoPath:"",description:"Agile and quick shortstop known for her diving plays.",year:"2028"},{id:22,name:"Daniel",lastName:"Castillo",picturePath:"",videoPath:"",description:"Consistent contact hitter with gap-to-gap power.",year:"2028"},{id:23,name:"Harper",lastName:"Andrade",picturePath:"",videoPath:"",description:"Reliable left-handed pitcher with pinpoint control.",year:"2028"},{id:24,name:"Sebastian",lastName:"Fernandez",picturePath:"",videoPath:"",description:"Strong and agile center fielder with a great arm.",year:"2028"},{id:25,name:"Luna",lastName:"Mendoza",picturePath:"",videoPath:"",description:"Versatile switch-hitter capable of playing multiple positions.",year:"2028"}],dg="_container_18u23_1",pg="_header_18u23_21",mg="_imgContainer_18u23_35",hg="_video_18u23_55",yg="_secondDiv_18u23_89",vg="_description_18u23_107",dn={container:dg,header:pg,imgContainer:mg,video:hg,secondDiv:yg,description:vg},gg=({player:e})=>m.jsx(Gt,{triggerOnce:!0,children:m.jsx(Tn,{triggerOnce:!0,delay:5,children:m.jsxs("div",{className:dn.container,children:[m.jsxs("div",{className:dn.secondDiv,children:[m.jsxs("div",{className:dn.header,children:[m.jsx("div",{className:dn.imgContainer,children:m.jsx("img",{src:"",alt:"Imagen Pelotero"})}),m.jsx("h2",{children:`${e.name} ${e.lastName}`})]}),m.jsx("div",{className:dn.description,children:m.jsx(Tn,{cascade:!0,damping:.1,children:m.jsx("p",{children:e.description})})})]}),m.jsx("div",{className:dn.video,children:m.jsx("video",{src:""})})]})})}),wg="_container_17fcs_1",xg="_players_17fcs_11",Rl={container:wg,players:xg},Sg=()=>{const t=mh().year,n=[];return fg.map(r=>{r.year===t&&n.push(r)}),console.log(n),m.jsxs("div",{className:Rl.container,children:[m.jsxs("h1",{children:["Elegibles ",t]}),m.jsx("div",{className:Rl.players,children:n[0]!==null?n.map(r=>m.jsx(gg,{player:r})):m.jsx("div",{className:Rl.notFound,children:m.jsxs("h2",{children:["No hay elegibles para el ",t]})})})]})};Ol.createRoot(document.getElementById("root")).render(m.jsx(Cc.StrictMode,{children:m.jsx(Lh,{children:m.jsxs(jh,{children:[m.jsx(pn,{path:"/",Component:()=>m.jsx(or,{Comp:Vv})}),m.jsx(pn,{path:"/trajectory",Component:()=>m.jsx(or,{Comp:Xv})}),m.jsx(pn,{path:"/contact",Component:()=>m.jsx(or,{Comp:ag})}),m.jsx(pn,{path:"/about",Component:()=>m.jsx(or,{Comp:cg})}),m.jsx(pn,{path:"/players/:year",Component:()=>m.jsx(or,{Comp:Sg})})]})})}));