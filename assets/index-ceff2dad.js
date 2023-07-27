function fp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mc={exports:{}},ii={},hc={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),pp=Symbol.for("react.portal"),mp=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),yp=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),xp=Symbol.for("react.suspense"),Sp=Symbol.for("react.memo"),kp=Symbol.for("react.lazy"),Ws=Symbol.iterator;function _p(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var yc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vc=Object.assign,gc={};function Un(e,t,n){this.props=e,this.context=t,this.refs=gc,this.updater=n||yc}Un.prototype.isReactComponent={};Un.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Un.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wc(){}wc.prototype=Un.prototype;function Ta(e,t,n){this.props=e,this.context=t,this.refs=gc,this.updater=n||yc}var Oa=Ta.prototype=new wc;Oa.constructor=Ta;vc(Oa,Un.prototype);Oa.isPureReactComponent=!0;var Hs=Array.isArray,xc=Object.prototype.hasOwnProperty,Ia={current:null},Sc={key:!0,ref:!0,__self:!0,__source:!0};function kc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)xc.call(t,r)&&!Sc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Br,type:e,key:i,ref:l,props:o,_owner:Ia.current}}function Cp(e,t){return{$$typeof:Br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function Ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qs=/\/+/g;function Ji(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ep(""+e.key):t.toString(36)}function vo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Br:case pp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ji(l,0):r,Hs(o)?(n="",e!=null&&(n=e.replace(Qs,"$&/")+"/"),vo(o,t,n,"",function(u){return u})):o!=null&&(Ma(o)&&(o=Cp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Qs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Hs(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Ji(i,a);l+=vo(i,t,n,s,o)}else if(s=_p(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Ji(i,a++),l+=vo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Zr(e,t,n){if(e==null)return e;var r=[],o=0;return vo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Np(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},go={transition:null},Pp={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:go,ReactCurrentOwner:Ia};T.Children={map:Zr,forEach:function(e,t,n){Zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zr(e,function(){t++}),t},toArray:function(e){return Zr(e,function(t){return t})||[]},only:function(e){if(!Ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=Un;T.Fragment=mp;T.Profiler=yp;T.PureComponent=Ta;T.StrictMode=hp;T.Suspense=xp;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ia.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)xc.call(t,s)&&!Sc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Br,type:e.type,key:o,ref:i,props:r,_owner:l}};T.createContext=function(e){return e={$$typeof:gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vp,_context:e},e.Consumer=e};T.createElement=kc;T.createFactory=function(e){var t=kc.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:wp,render:e}};T.isValidElement=Ma;T.lazy=function(e){return{$$typeof:kp,_payload:{_status:-1,_result:e},_init:Np}};T.memo=function(e,t){return{$$typeof:Sp,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=go.transition;go.transition={};try{e()}finally{go.transition=t}};T.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};T.useCallback=function(e,t){return Se.current.useCallback(e,t)};T.useContext=function(e){return Se.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};T.useEffect=function(e,t){return Se.current.useEffect(e,t)};T.useId=function(){return Se.current.useId()};T.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return Se.current.useMemo(e,t)};T.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};T.useRef=function(e){return Se.current.useRef(e)};T.useState=function(e){return Se.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return Se.current.useTransition()};T.version="18.2.0";hc.exports=T;var k=hc.exports;const _c=dp(k),zl=fp({__proto__:null,default:_c},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp=k,Rp=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),$p=Object.prototype.hasOwnProperty,Lp=jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tp={key:!0,ref:!0,__self:!0,__source:!0};function Cc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)$p.call(t,r)&&!Tp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Rp,type:e,key:i,ref:l,props:o,_owner:Lp.current}}ii.Fragment=zp;ii.jsx=Cc;ii.jsxs=Cc;mc.exports=ii;var y=mc.exports,$l={},Ec={exports:{}},Ie={},Nc={exports:{}},Pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,$){var L=R.length;R.push($);e:for(;0<L;){var Z=L-1>>>1,oe=R[Z];if(0<o(oe,$))R[Z]=$,R[L]=oe,L=Z;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var $=R[0],L=R.pop();if(L!==$){R[0]=L;e:for(var Z=0,oe=R.length,Kr=oe>>>1;Z<Kr;){var Ht=2*(Z+1)-1,Zi=R[Ht],Qt=Ht+1,Gr=R[Qt];if(0>o(Zi,L))Qt<oe&&0>o(Gr,Zi)?(R[Z]=Gr,R[Qt]=L,Z=Qt):(R[Z]=Zi,R[Ht]=L,Z=Ht);else if(Qt<oe&&0>o(Gr,L))R[Z]=Gr,R[Qt]=L,Z=Qt;else break e}}return $}function o(R,$){var L=R.sortIndex-$.sortIndex;return L!==0?L:R.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],p=1,m=null,h=3,x=!1,g=!1,v=!1,N=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(R){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=R)r(u),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(u)}}function w(R){if(v=!1,d(R),!g)if(n(s)!==null)g=!0,Ki(E);else{var $=n(u);$!==null&&Gi(w,$.startTime-R)}}function E(R,$){g=!1,v&&(v=!1,f(z),z=-1),x=!0;var L=h;try{for(d($),m=n(s);m!==null&&(!(m.expirationTime>$)||R&&!Qe());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,h=m.priorityLevel;var oe=Z(m.expirationTime<=$);$=e.unstable_now(),typeof oe=="function"?m.callback=oe:m===n(s)&&r(s),d($)}else r(s);m=n(s)}if(m!==null)var Kr=!0;else{var Ht=n(u);Ht!==null&&Gi(w,Ht.startTime-$),Kr=!1}return Kr}finally{m=null,h=L,x=!1}}var P=!1,C=null,z=-1,G=5,O=-1;function Qe(){return!(e.unstable_now()-O<G)}function Qn(){if(C!==null){var R=e.unstable_now();O=R;var $=!0;try{$=C(!0,R)}finally{$?Yn():(P=!1,C=null)}}else P=!1}var Yn;if(typeof c=="function")Yn=function(){c(Qn)};else if(typeof MessageChannel<"u"){var Vs=new MessageChannel,cp=Vs.port2;Vs.port1.onmessage=Qn,Yn=function(){cp.postMessage(null)}}else Yn=function(){N(Qn,0)};function Ki(R){C=R,P||(P=!0,Yn())}function Gi(R,$){z=N(function(){R(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){g||x||(g=!0,Ki(E))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var L=h;h=$;try{return R()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,$){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var L=h;h=R;try{return $()}finally{h=L}},e.unstable_scheduleCallback=function(R,$,L){var Z=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Z+L:Z):L=Z,R){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=L+oe,R={id:p++,callback:$,priorityLevel:R,startTime:L,expirationTime:oe,sortIndex:-1},L>Z?(R.sortIndex=L,t(u,R),n(s)===null&&R===n(u)&&(v?(f(z),z=-1):v=!0,Gi(w,L-Z))):(R.sortIndex=oe,t(s,R),g||x||(g=!0,Ki(E))),R},e.unstable_shouldYield=Qe,e.unstable_wrapCallback=function(R){var $=h;return function(){var L=h;h=$;try{return R.apply(this,arguments)}finally{h=L}}}})(Pc);Nc.exports=Pc;var Op=Nc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=k,Oe=Op;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rc=new Set,vr={};function ln(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(vr[e]=t,e=0;e<t.length;e++)Rc.add(t[e])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ll=Object.prototype.hasOwnProperty,Ip=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ys={},Xs={};function Mp(e){return Ll.call(Xs,e)?!0:Ll.call(Ys,e)?!1:Ip.test(e)?Xs[e]=!0:(Ys[e]=!0,!1)}function Dp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fp(e,t,n,r){if(t===null||typeof t>"u"||Dp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Da=/[\-:]([a-z])/g;function Fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Da,Fa);de[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Da,Fa);de[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Da,Fa);de[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Aa(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fp(t,n,o,r)&&(n=null),r||o===null?Mp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Ua=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),zc=Symbol.for("react.provider"),$c=Symbol.for("react.context"),Ba=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),Va=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Lc=Symbol.for("react.offscreen"),Ks=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,qi;function rr(e){if(qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||""}return`
`+qi+e}var bi=!1;function el(e,t){if(!e||bi)return"";bi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{bi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function Ap(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=el(e.type,!1),e;case 11:return e=el(e.type.render,!1),e;case 1:return e=el(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case Tl:return"Profiler";case Ua:return"StrictMode";case Ol:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $c:return(e.displayName||"Context")+".Consumer";case zc:return(e._context.displayName||"Context")+".Provider";case Ba:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Va:return t=e.displayName||null,t!==null?t:Ml(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return Ml(e(t))}catch{}}return null}function Up(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(t);case 8:return t===Ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bp(e){var t=Tc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=Bp(e))}function Oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Dl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ic(e,t){t=t.checked,t!=null&&Aa(e,"checked",t,!1)}function Fl(e,t){Ic(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Al(e,t.type,n):t.hasOwnProperty("defaultValue")&&Al(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Al(e,t,n){(t!=="number"||Lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function En(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Js(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(or(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function Mc(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,Fc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vp=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){Vp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function Ac(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function Uc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ac(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Wp=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vl(e,t){if(t){if(Wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hl=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ql=null,Nn=null,Pn=null;function bs(e){if(e=Hr(e)){if(typeof Ql!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ci(t),Ql(e.stateNode,e.type,t))}}function Bc(e){Nn?Pn?Pn.push(e):Pn=[e]:Nn=e}function Vc(){if(Nn){var e=Nn,t=Pn;if(Pn=Nn=null,bs(e),t)for(e=0;e<t.length;e++)bs(t[e])}}function Wc(e,t){return e(t)}function Hc(){}var tl=!1;function Qc(e,t,n){if(tl)return e(t,n);tl=!0;try{return Wc(e,t,n)}finally{tl=!1,(Nn!==null||Pn!==null)&&(Hc(),Vc())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Yl=!1;if(yt)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Yl=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Yl=!1}function Hp(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var sr=!1,To=null,Oo=!1,Xl=null,Qp={onError:function(e){sr=!0,To=e}};function Yp(e,t,n,r,o,i,l,a,s){sr=!1,To=null,Hp.apply(Qp,arguments)}function Xp(e,t,n,r,o,i,l,a,s){if(Yp.apply(this,arguments),sr){if(sr){var u=To;sr=!1,To=null}else throw Error(S(198));Oo||(Oo=!0,Xl=u)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function eu(e){if(an(e)!==e)throw Error(S(188))}function Kp(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return eu(o),e;if(i===r)return eu(o),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Xc(e){return e=Kp(e),e!==null?Kc(e):null}function Kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kc(e);if(t!==null)return t;e=e.sibling}return null}var Gc=Oe.unstable_scheduleCallback,tu=Oe.unstable_cancelCallback,Gp=Oe.unstable_shouldYield,Zp=Oe.unstable_requestPaint,J=Oe.unstable_now,Jp=Oe.unstable_getCurrentPriorityLevel,Ha=Oe.unstable_ImmediatePriority,Zc=Oe.unstable_UserBlockingPriority,Io=Oe.unstable_NormalPriority,qp=Oe.unstable_LowPriority,Jc=Oe.unstable_IdlePriority,li=null,st=null;function bp(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:n0,e0=Math.log,t0=Math.LN2;function n0(e){return e>>>=0,e===0?32:31-(e0(e)/t0|0)|0}var eo=64,to=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=ir(a):(i&=l,i!==0&&(r=ir(i)))}else l=n&~o,l!==0?r=ir(l):i!==0&&(r=ir(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),o=1<<n,r|=e[n],t&=~o;return r}function r0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ze(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=r0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qc(){var e=eo;return eo<<=1,!(eo&4194240)&&(eo=64),e}function nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function i0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ze(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function bc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ef,Ya,tf,nf,rf,Gl=!1,no=[],Rt=null,zt=null,$t=null,xr=new Map,Sr=new Map,Ct=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nu(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Gn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Hr(t),t!==null&&Ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function a0(e,t,n,r,o){switch(t){case"focusin":return Rt=Gn(Rt,e,t,n,r,o),!0;case"dragenter":return zt=Gn(zt,e,t,n,r,o),!0;case"mouseover":return $t=Gn($t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return xr.set(i,Gn(xr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Sr.set(i,Gn(Sr.get(i)||null,e,t,n,r,o)),!0}return!1}function of(e){var t=Gt(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=Yc(n),t!==null){e.blockedOn=t,rf(e.priority,function(){tf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hl=r,n.target.dispatchEvent(r),Hl=null}else return t=Hr(n),t!==null&&Ya(t),e.blockedOn=n,!1;t.shift()}return!0}function ru(e,t,n){wo(e)&&n.delete(t)}function s0(){Gl=!1,Rt!==null&&wo(Rt)&&(Rt=null),zt!==null&&wo(zt)&&(zt=null),$t!==null&&wo($t)&&($t=null),xr.forEach(ru),Sr.forEach(ru)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,s0)))}function kr(e){function t(o){return Zn(o,e)}if(0<no.length){Zn(no[0],e);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&Zn(Rt,e),zt!==null&&Zn(zt,e),$t!==null&&Zn($t,e),xr.forEach(t),Sr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)of(n),n.blockedOn===null&&Ct.shift()}var jn=xt.ReactCurrentBatchConfig,Do=!0;function u0(e,t,n,r){var o=F,i=jn.transition;jn.transition=null;try{F=1,Xa(e,t,n,r)}finally{F=o,jn.transition=i}}function c0(e,t,n,r){var o=F,i=jn.transition;jn.transition=null;try{F=4,Xa(e,t,n,r)}finally{F=o,jn.transition=i}}function Xa(e,t,n,r){if(Do){var o=Zl(e,t,n,r);if(o===null)dl(e,t,r,Fo,n),nu(e,r);else if(a0(o,e,t,n,r))r.stopPropagation();else if(nu(e,r),t&4&&-1<l0.indexOf(e)){for(;o!==null;){var i=Hr(o);if(i!==null&&ef(i),i=Zl(e,t,n,r),i===null&&dl(e,t,r,Fo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else dl(e,t,r,null,n)}}var Fo=null;function Zl(e,t,n,r){if(Fo=null,e=Wa(r),e=Gt(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fo=e,null}function lf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jp()){case Ha:return 1;case Zc:return 4;case Io:case qp:return 16;case Jc:return 536870912;default:return 16}default:return 16}}var Nt=null,Ka=null,xo=null;function af(){if(xo)return xo;var e,t=Ka,n=t.length,r,o="value"in Nt?Nt.value:Nt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return xo=o.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function ou(){return!1}function Me(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ro:ou,this.isPropagationStopped=ou,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=Me(Bn),Wr=X({},Bn,{view:0,detail:0}),f0=Me(Wr),rl,ol,Jn,ai=X({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(rl=e.screenX-Jn.screenX,ol=e.screenY-Jn.screenY):ol=rl=0,Jn=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),iu=Me(ai),d0=X({},ai,{dataTransfer:0}),p0=Me(d0),m0=X({},Wr,{relatedTarget:0}),il=Me(m0),h0=X({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),y0=Me(h0),v0=X({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g0=Me(v0),w0=X({},Bn,{data:0}),lu=Me(w0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=k0[e])?!!t[e]:!1}function Za(){return _0}var C0=X({},Wr,{key:function(e){if(e.key){var t=x0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Za,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E0=Me(C0),N0=X({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),au=Me(N0),P0=X({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Za}),j0=Me(P0),R0=X({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),z0=Me(R0),$0=X({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=Me($0),T0=[9,13,27,32],Ja=yt&&"CompositionEvent"in window,ur=null;yt&&"documentMode"in document&&(ur=document.documentMode);var O0=yt&&"TextEvent"in window&&!ur,sf=yt&&(!Ja||ur&&8<ur&&11>=ur),su=String.fromCharCode(32),uu=!1;function uf(e,t){switch(e){case"keyup":return T0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function I0(e,t){switch(e){case"compositionend":return cf(t);case"keypress":return t.which!==32?null:(uu=!0,su);case"textInput":return e=t.data,e===su&&uu?null:e;default:return null}}function M0(e,t){if(hn)return e==="compositionend"||!Ja&&uf(e,t)?(e=af(),xo=Ka=Nt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sf&&t.locale!=="ko"?null:t.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D0[e.type]:t==="textarea"}function ff(e,t,n,r){Bc(r),t=Ao(t,"onChange"),0<t.length&&(n=new Ga("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,_r=null;function F0(e){kf(e,0)}function si(e){var t=gn(e);if(Oc(t))return e}function A0(e,t){if(e==="change")return t}var df=!1;if(yt){var ll;if(yt){var al="oninput"in document;if(!al){var fu=document.createElement("div");fu.setAttribute("oninput","return;"),al=typeof fu.oninput=="function"}ll=al}else ll=!1;df=ll&&(!document.documentMode||9<document.documentMode)}function du(){cr&&(cr.detachEvent("onpropertychange",pf),_r=cr=null)}function pf(e){if(e.propertyName==="value"&&si(_r)){var t=[];ff(t,_r,e,Wa(e)),Qc(F0,t)}}function U0(e,t,n){e==="focusin"?(du(),cr=t,_r=n,cr.attachEvent("onpropertychange",pf)):e==="focusout"&&du()}function B0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(_r)}function V0(e,t){if(e==="click")return si(t)}function W0(e,t){if(e==="input"||e==="change")return si(t)}function H0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:H0;function Cr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ll.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mu(e,t){var n=pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pu(n)}}function mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hf(){for(var e=window,t=Lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lo(e.document)}return t}function qa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Q0(e){var t=hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mf(n.ownerDocument.documentElement,n)){if(r!==null&&qa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=mu(n,i);var l=mu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Y0=yt&&"documentMode"in document&&11>=document.documentMode,yn=null,Jl=null,fr=null,ql=!1;function hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ql||yn==null||yn!==Lo(r)||(r=yn,"selectionStart"in r&&qa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&Cr(fr,r)||(fr=r,r=Ao(Jl,"onSelect"),0<r.length&&(t=new Ga("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yn)))}function oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},sl={},yf={};yt&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function ui(e){if(sl[e])return sl[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return sl[e]=t[n];return e}var vf=ui("animationend"),gf=ui("animationiteration"),wf=ui("animationstart"),xf=ui("transitionend"),Sf=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){Sf.set(e,t),ln(t,[e])}for(var ul=0;ul<yu.length;ul++){var cl=yu[ul],X0=cl.toLowerCase(),K0=cl[0].toUpperCase()+cl.slice(1);Ut(X0,"on"+K0)}Ut(vf,"onAnimationEnd");Ut(gf,"onAnimationIteration");Ut(wf,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(xf,"onTransitionEnd");Ln("onMouseEnter",["mouseout","mouseover"]);Ln("onMouseLeave",["mouseout","mouseover"]);Ln("onPointerEnter",["pointerout","pointerover"]);Ln("onPointerLeave",["pointerout","pointerover"]);ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xp(r,t,void 0,e),e.currentTarget=null}function kf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;vu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;vu(o,a,u),i=s}}}if(Oo)throw e=Xl,Oo=!1,Xl=null,e}function V(e,t){var n=t[ra];n===void 0&&(n=t[ra]=new Set);var r=e+"__bubble";n.has(r)||(_f(t,e,2,!1),n.add(r))}function fl(e,t,n){var r=0;t&&(r|=4),_f(n,e,r,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[io]){e[io]=!0,Rc.forEach(function(n){n!=="selectionchange"&&(G0.has(n)||fl(n,!1,e),fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,fl("selectionchange",!1,t))}}function _f(e,t,n,r){switch(lf(t)){case 1:var o=u0;break;case 4:o=c0;break;default:o=Xa}n=o.bind(null,t,n,e),o=void 0,!Yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function dl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Gt(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Qc(function(){var u=i,p=Wa(n),m=[];e:{var h=Sf.get(e);if(h!==void 0){var x=Ga,g=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":x=E0;break;case"focusin":g="focus",x=il;break;case"focusout":g="blur",x=il;break;case"beforeblur":case"afterblur":x=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=j0;break;case vf:case gf:case wf:x=y0;break;case xf:x=z0;break;case"scroll":x=f0;break;case"wheel":x=L0;break;case"copy":case"cut":case"paste":x=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=au}var v=(t&4)!==0,N=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,d;c!==null;){d=c;var w=d.stateNode;if(d.tag===5&&w!==null&&(d=w,f!==null&&(w=wr(c,f),w!=null&&v.push(Nr(c,w,d)))),N)break;c=c.return}0<v.length&&(h=new x(h,g,null,n,p),m.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Hl&&(g=n.relatedTarget||n.fromElement)&&(Gt(g)||g[vt]))break e;if((x||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,x?(g=n.relatedTarget||n.toElement,x=u,g=g?Gt(g):null,g!==null&&(N=an(g),g!==N||g.tag!==5&&g.tag!==6)&&(g=null)):(x=null,g=u),x!==g)){if(v=iu,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=au,w="onPointerLeave",f="onPointerEnter",c="pointer"),N=x==null?h:gn(x),d=g==null?h:gn(g),h=new v(w,c+"leave",x,n,p),h.target=N,h.relatedTarget=d,w=null,Gt(p)===u&&(v=new v(f,c+"enter",g,n,p),v.target=d,v.relatedTarget=N,w=v),N=w,x&&g)t:{for(v=x,f=g,c=0,d=v;d;d=un(d))c++;for(d=0,w=f;w;w=un(w))d++;for(;0<c-d;)v=un(v),c--;for(;0<d-c;)f=un(f),d--;for(;c--;){if(v===f||f!==null&&v===f.alternate)break t;v=un(v),f=un(f)}v=null}else v=null;x!==null&&gu(m,h,x,v,!1),g!==null&&N!==null&&gu(m,N,g,v,!0)}}e:{if(h=u?gn(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var E=A0;else if(cu(h))if(df)E=W0;else{E=B0;var P=U0}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=V0);if(E&&(E=E(e,u))){ff(m,E,n,p);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Al(h,"number",h.value)}switch(P=u?gn(u):window,e){case"focusin":(cu(P)||P.contentEditable==="true")&&(yn=P,Jl=u,fr=null);break;case"focusout":fr=Jl=yn=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,hu(m,n,p);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":hu(m,n,p)}var C;if(Ja)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else hn?uf(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(sf&&n.locale!=="ko"&&(hn||z!=="onCompositionStart"?z==="onCompositionEnd"&&hn&&(C=af()):(Nt=p,Ka="value"in Nt?Nt.value:Nt.textContent,hn=!0)),P=Ao(u,z),0<P.length&&(z=new lu(z,e,null,n,p),m.push({event:z,listeners:P}),C?z.data=C:(C=cf(n),C!==null&&(z.data=C)))),(C=O0?I0(e,n):M0(e,n))&&(u=Ao(u,"onBeforeInput"),0<u.length&&(p=new lu("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=C))}kf(m,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ao(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=wr(e,n),i!=null&&r.unshift(Nr(e,i,o)),i=wr(e,t),i!=null&&r.push(Nr(e,i,o))),e=e.return}return r}function un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=wr(n,i),s!=null&&l.unshift(Nr(n,s,a))):o||(s=wr(n,i),s!=null&&l.push(Nr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Z0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function wu(e){return(typeof e=="string"?e:""+e).replace(Z0,`
`).replace(J0,"")}function lo(e,t,n){if(t=wu(t),wu(e)!==t&&n)throw Error(S(425))}function Uo(){}var bl=null,ea=null;function ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var na=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,xu=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof xu<"u"?function(e){return xu.resolve(null).then(e).catch(em)}:na;function em(e){setTimeout(function(){throw e})}function pl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);kr(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Vn,Pr="__reactProps$"+Vn,vt="__reactContainer$"+Vn,ra="__reactEvents$"+Vn,tm="__reactListeners$"+Vn,nm="__reactHandles$"+Vn;function Gt(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Su(e);e!==null;){if(n=e[lt])return n;e=Su(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){return e=e[lt]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ci(e){return e[Pr]||null}var oa=[],wn=-1;function Bt(e){return{current:e}}function W(e){0>wn||(e.current=oa[wn],oa[wn]=null,wn--)}function B(e,t){wn++,oa[wn]=e.current,e.current=t}var At={},ve=Bt(At),Ee=Bt(!1),en=At;function Tn(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function Bo(){W(Ee),W(ve)}function ku(e,t,n){if(ve.current!==At)throw Error(S(168));B(ve,t),B(Ee,n)}function Cf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,Up(e)||"Unknown",o));return X({},n,r)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,en=ve.current,B(ve,e),B(Ee,Ee.current),!0}function _u(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Cf(e,t,en),r.__reactInternalMemoizedMergedChildContext=e,W(Ee),W(ve),B(ve,e)):W(Ee),B(Ee,n)}var dt=null,fi=!1,ml=!1;function Ef(e){dt===null?dt=[e]:dt.push(e)}function rm(e){fi=!0,Ef(e)}function Vt(){if(!ml&&dt!==null){ml=!0;var e=0,t=F;try{var n=dt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,fi=!1}catch(o){throw dt!==null&&(dt=dt.slice(e+1)),Gc(Ha,Vt),o}finally{F=t,ml=!1}}return null}var xn=[],Sn=0,Wo=null,Ho=0,Fe=[],Ae=0,tn=null,pt=1,mt="";function Yt(e,t){xn[Sn++]=Ho,xn[Sn++]=Wo,Wo=e,Ho=t}function Nf(e,t,n){Fe[Ae++]=pt,Fe[Ae++]=mt,Fe[Ae++]=tn,tn=e;var r=pt;e=mt;var o=32-Ze(r)-1;r&=~(1<<o),n+=1;var i=32-Ze(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,pt=1<<32-Ze(t)+o|n<<o|r,mt=i+e}else pt=1<<i|n<<o|r,mt=e}function ba(e){e.return!==null&&(Yt(e,1),Nf(e,1,0))}function es(e){for(;e===Wo;)Wo=xn[--Sn],xn[Sn]=null,Ho=xn[--Sn],xn[Sn]=null;for(;e===tn;)tn=Fe[--Ae],Fe[Ae]=null,mt=Fe[--Ae],Fe[Ae]=null,pt=Fe[--Ae],Fe[Ae]=null}var Le=null,$e=null,H=!1,Ge=null;function Pf(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,$e=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tn!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,$e=null,!0):!1;default:return!1}}function ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function la(e){if(H){var t=$e;if(t){var n=t;if(!Cu(e,t)){if(ia(e))throw Error(S(418));t=Lt(n.nextSibling);var r=Le;t&&Cu(e,t)?Pf(r,n):(e.flags=e.flags&-4097|2,H=!1,Le=e)}}else{if(ia(e))throw Error(S(418));e.flags=e.flags&-4097|2,H=!1,Le=e}}}function Eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function ao(e){if(e!==Le)return!1;if(!H)return Eu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ta(e.type,e.memoizedProps)),t&&(t=$e)){if(ia(e))throw jf(),Error(S(418));for(;t;)Pf(e,t),t=Lt(t.nextSibling)}if(Eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Le?Lt(e.stateNode.nextSibling):null;return!0}function jf(){for(var e=$e;e;)e=Lt(e.nextSibling)}function On(){$e=Le=null,H=!1}function ts(e){Ge===null?Ge=[e]:Ge.push(e)}var om=xt.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Qo=Bt(null),Yo=null,kn=null,ns=null;function rs(){ns=kn=Yo=null}function os(e){var t=Qo.current;W(Qo),e._currentValue=t}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){Yo=e,ns=kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ve(e){var t=e._currentValue;if(ns!==e)if(e={context:e,memoizedValue:t,next:null},kn===null){if(Yo===null)throw Error(S(308));kn=e,Yo.dependencies={lanes:0,firstContext:e}}else kn=kn.next=e;return t}var Zt=null;function is(e){Zt===null?Zt=[e]:Zt.push(e)}function Rf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,is(t)):(n.next=o.next,o.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,gt(e,n)}return o=r.interleaved,o===null?(t.next=t,is(r)):(t.next=o.next,o.next=t),r.interleaved=t,gt(e,n)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xo(e,t,n,r){var o=e.updateQueue;_t=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=s))}if(i!==null){var m=o.baseState;l=0,p=u=s=null,a=i;do{var h=a.lane,x=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,v=a;switch(h=t,x=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){m=g.call(x,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(x,m,h):g,h==null)break e;m=X({},m,h);break e;case 2:_t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=x,s=m):p=p.next=x,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);rn|=l,e.lanes=l,e.memoizedState=m}}function Pu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var $f=new jc.Component().refs;function sa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var di={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=It(e),i=ht(r,o);i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,o),t!==null&&(Je(t,e,o,r),ko(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=It(e),i=ht(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Tt(e,i,o),t!==null&&(Je(t,e,o,r),ko(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=It(e),o=ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=Tt(e,o,r),t!==null&&(Je(t,e,r,n),ko(t,e,r))}};function ju(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(o,i):!0}function Lf(e,t,n){var r=!1,o=At,i=t.contextType;return typeof i=="object"&&i!==null?i=Ve(i):(o=Ne(t)?en:ve.current,r=t.contextTypes,i=(r=r!=null)?Tn(e,o):At),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=di,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ru(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&di.enqueueReplaceState(t,t.state,null)}function ua(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=$f,ls(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ve(i):(i=Ne(t)?en:ve.current,o.context=Tn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(sa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&di.enqueueReplaceState(o,o.state,null),Xo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===$f&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function so(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function Tf(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Mt(f,c),f.index=0,f.sibling=null,f}function i(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,d,w){return c===null||c.tag!==6?(c=Sl(d,f.mode,w),c.return=f,c):(c=o(c,d),c.return=f,c)}function s(f,c,d,w){var E=d.type;return E===mn?p(f,c,d.props.children,w,d.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kt&&zu(E)===c.type)?(w=o(c,d.props),w.ref=qn(f,c,d),w.return=f,w):(w=jo(d.type,d.key,d.props,null,f.mode,w),w.ref=qn(f,c,d),w.return=f,w)}function u(f,c,d,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=kl(d,f.mode,w),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function p(f,c,d,w,E){return c===null||c.tag!==7?(c=bt(d,f.mode,w,E),c.return=f,c):(c=o(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Sl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Jr:return d=jo(c.type,c.key,c.props,null,f.mode,d),d.ref=qn(f,null,c),d.return=f,d;case pn:return c=kl(c,f.mode,d),c.return=f,c;case kt:var w=c._init;return m(f,w(c._payload),d)}if(or(c)||Xn(c))return c=bt(c,f.mode,d,null),c.return=f,c;so(f,c)}return null}function h(f,c,d,w){var E=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:a(f,c,""+d,w);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Jr:return d.key===E?s(f,c,d,w):null;case pn:return d.key===E?u(f,c,d,w):null;case kt:return E=d._init,h(f,c,E(d._payload),w)}if(or(d)||Xn(d))return E!==null?null:p(f,c,d,w,null);so(f,d)}return null}function x(f,c,d,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(d)||null,a(c,f,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Jr:return f=f.get(w.key===null?d:w.key)||null,s(c,f,w,E);case pn:return f=f.get(w.key===null?d:w.key)||null,u(c,f,w,E);case kt:var P=w._init;return x(f,c,d,P(w._payload),E)}if(or(w)||Xn(w))return f=f.get(d)||null,p(c,f,w,E,null);so(c,w)}return null}function g(f,c,d,w){for(var E=null,P=null,C=c,z=c=0,G=null;C!==null&&z<d.length;z++){C.index>z?(G=C,C=null):G=C.sibling;var O=h(f,C,d[z],w);if(O===null){C===null&&(C=G);break}e&&C&&O.alternate===null&&t(f,C),c=i(O,c,z),P===null?E=O:P.sibling=O,P=O,C=G}if(z===d.length)return n(f,C),H&&Yt(f,z),E;if(C===null){for(;z<d.length;z++)C=m(f,d[z],w),C!==null&&(c=i(C,c,z),P===null?E=C:P.sibling=C,P=C);return H&&Yt(f,z),E}for(C=r(f,C);z<d.length;z++)G=x(C,f,z,d[z],w),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?z:G.key),c=i(G,c,z),P===null?E=G:P.sibling=G,P=G);return e&&C.forEach(function(Qe){return t(f,Qe)}),H&&Yt(f,z),E}function v(f,c,d,w){var E=Xn(d);if(typeof E!="function")throw Error(S(150));if(d=E.call(d),d==null)throw Error(S(151));for(var P=E=null,C=c,z=c=0,G=null,O=d.next();C!==null&&!O.done;z++,O=d.next()){C.index>z?(G=C,C=null):G=C.sibling;var Qe=h(f,C,O.value,w);if(Qe===null){C===null&&(C=G);break}e&&C&&Qe.alternate===null&&t(f,C),c=i(Qe,c,z),P===null?E=Qe:P.sibling=Qe,P=Qe,C=G}if(O.done)return n(f,C),H&&Yt(f,z),E;if(C===null){for(;!O.done;z++,O=d.next())O=m(f,O.value,w),O!==null&&(c=i(O,c,z),P===null?E=O:P.sibling=O,P=O);return H&&Yt(f,z),E}for(C=r(f,C);!O.done;z++,O=d.next())O=x(C,f,z,O.value,w),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?z:O.key),c=i(O,c,z),P===null?E=O:P.sibling=O,P=O);return e&&C.forEach(function(Qn){return t(f,Qn)}),H&&Yt(f,z),E}function N(f,c,d,w){if(typeof d=="object"&&d!==null&&d.type===mn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Jr:e:{for(var E=d.key,P=c;P!==null;){if(P.key===E){if(E=d.type,E===mn){if(P.tag===7){n(f,P.sibling),c=o(P,d.props.children),c.return=f,f=c;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kt&&zu(E)===P.type){n(f,P.sibling),c=o(P,d.props),c.ref=qn(f,P,d),c.return=f,f=c;break e}n(f,P);break}else t(f,P);P=P.sibling}d.type===mn?(c=bt(d.props.children,f.mode,w,d.key),c.return=f,f=c):(w=jo(d.type,d.key,d.props,null,f.mode,w),w.ref=qn(f,c,d),w.return=f,f=w)}return l(f);case pn:e:{for(P=d.key;c!==null;){if(c.key===P)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=kl(d,f.mode,w),c.return=f,f=c}return l(f);case kt:return P=d._init,N(f,c,P(d._payload),w)}if(or(d))return g(f,c,d,w);if(Xn(d))return v(f,c,d,w);so(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=Sl(d,f.mode,w),c.return=f,f=c),l(f)):n(f,c)}return N}var In=Tf(!0),Of=Tf(!1),Qr={},ut=Bt(Qr),jr=Bt(Qr),Rr=Bt(Qr);function Jt(e){if(e===Qr)throw Error(S(174));return e}function as(e,t){switch(B(Rr,t),B(jr,e),B(ut,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bl(t,e)}W(ut),B(ut,t)}function Mn(){W(ut),W(jr),W(Rr)}function If(e){Jt(Rr.current);var t=Jt(ut.current),n=Bl(t,e.type);t!==n&&(B(jr,e),B(ut,n))}function ss(e){jr.current===e&&(W(ut),W(jr))}var Q=Bt(0);function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hl=[];function us(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var _o=xt.ReactCurrentDispatcher,yl=xt.ReactCurrentBatchConfig,nn=0,Y=null,ne=null,ie=null,Go=!1,dr=!1,zr=0,im=0;function pe(){throw Error(S(321))}function cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function fs(e,t,n,r,o,i){if(nn=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_o.current=e===null||e.memoizedState===null?um:cm,e=n(r,o),dr){i=0;do{if(dr=!1,zr=0,25<=i)throw Error(S(301));i+=1,ie=ne=null,t.updateQueue=null,_o.current=fm,e=n(r,o)}while(dr)}if(_o.current=Zo,t=ne!==null&&ne.next!==null,nn=0,ie=ne=Y=null,Go=!1,t)throw Error(S(300));return e}function ds(){var e=zr!==0;return zr=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Y.memoizedState=ie=e:ie=ie.next=e,ie}function We(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?Y.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?Y.memoizedState=ie=e:ie=ie.next=e}return ie}function $r(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var p=u.lane;if((nn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=m,l=r):s=s.next=m,Y.lanes|=p,rn|=p}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,qe(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,rn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gl(e){var t=We(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);qe(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Mf(){}function Df(e,t){var n=Y,r=We(),o=t(),i=!qe(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,ps(Uf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Lr(9,Af.bind(null,n,r,o,t),void 0,null),ae===null)throw Error(S(349));nn&30||Ff(n,t,o)}return o}function Ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Af(e,t,n,r){t.value=n,t.getSnapshot=r,Bf(t)&&Vf(e)}function Uf(e,t,n){return n(function(){Bf(t)&&Vf(e)})}function Bf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Vf(e){var t=gt(e,1);t!==null&&Je(t,e,1,-1)}function $u(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=sm.bind(null,Y,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wf(){return We().memoizedState}function Co(e,t,n,r){var o=tt();Y.flags|=e,o.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function pi(e,t,n,r){var o=We();r=r===void 0?null:r;var i=void 0;if(ne!==null){var l=ne.memoizedState;if(i=l.destroy,r!==null&&cs(r,l.deps)){o.memoizedState=Lr(t,n,i,r);return}}Y.flags|=e,o.memoizedState=Lr(1|t,n,i,r)}function Lu(e,t){return Co(8390656,8,e,t)}function ps(e,t){return pi(2048,8,e,t)}function Hf(e,t){return pi(4,2,e,t)}function Qf(e,t){return pi(4,4,e,t)}function Yf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xf(e,t,n){return n=n!=null?n.concat([e]):null,pi(4,4,Yf.bind(null,t,e),n)}function ms(){}function Kf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zf(e,t,n){return nn&21?(qe(n,t)||(n=qc(),Y.lanes|=n,rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function lm(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),t()}finally{F=n,yl.transition=r}}function Jf(){return We().memoizedState}function am(e,t,n){var r=It(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qf(e))bf(t,n);else if(n=Rf(e,t,n,r),n!==null){var o=xe();Je(n,e,r,o),ed(n,t,r)}}function sm(e,t,n){var r=It(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qf(e))bf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,qe(a,l)){var s=t.interleaved;s===null?(o.next=o,is(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Rf(e,t,o,r),n!==null&&(o=xe(),Je(n,e,r,o),ed(n,t,r))}}function qf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function bf(e,t){dr=Go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ed(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}var Zo={readContext:Ve,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},um={readContext:Ve,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Co(4194308,4,Yf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){return Co(4,2,e,t)},useMemo:function(e,t){var n=tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=am.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:ms,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=lm.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=tt();if(H){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ae===null)throw Error(S(349));nn&30||Ff(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Lu(Uf.bind(null,r,i,e),[e]),r.flags|=2048,Lr(9,Af.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=tt(),t=ae.identifierPrefix;if(H){var n=mt,r=pt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=im++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cm={readContext:Ve,useCallback:Kf,useContext:Ve,useEffect:ps,useImperativeHandle:Xf,useInsertionEffect:Hf,useLayoutEffect:Qf,useMemo:Gf,useReducer:vl,useRef:Wf,useState:function(){return vl($r)},useDebugValue:ms,useDeferredValue:function(e){var t=We();return Zf(t,ne.memoizedState,e)},useTransition:function(){var e=vl($r)[0],t=We().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:Df,useId:Jf,unstable_isNewReconciler:!1},fm={readContext:Ve,useCallback:Kf,useContext:Ve,useEffect:ps,useImperativeHandle:Xf,useInsertionEffect:Hf,useLayoutEffect:Qf,useMemo:Gf,useReducer:gl,useRef:Wf,useState:function(){return gl($r)},useDebugValue:ms,useDeferredValue:function(e){var t=We();return ne===null?t.memoizedState=e:Zf(t,ne.memoizedState,e)},useTransition:function(){var e=gl($r)[0],t=We().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:Df,useId:Jf,unstable_isNewReconciler:!1};function Dn(e,t){try{var n="",r=t;do n+=Ap(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dm=typeof WeakMap=="function"?WeakMap:Map;function td(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qo||(qo=!0,xa=r),ca(e,t)},n}function nd(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ca(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ca(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Tu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Nm.bind(null,e,t,n),t.then(e,e))}function Ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Iu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Tt(n,t,1))),n.lanes|=1),e)}var pm=xt.ReactCurrentOwner,Ce=!1;function we(e,t,n,r){t.child=e===null?Of(t,null,n,r):In(t,e.child,n,r)}function Mu(e,t,n,r,o){n=n.render;var i=t.ref;return Rn(t,o),r=fs(e,t,n,r,i,o),n=ds(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(H&&n&&ba(t),t.flags|=1,we(e,t,r,o),t.child)}function Du(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ks(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,rd(e,t,i,r,o)):(e=jo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(l,r)&&e.ref===t.ref)return wt(e,t,o)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function rd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Cr(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,wt(e,t,o)}return fa(e,t,n,r,o)}function od(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Cn,ze),ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Cn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(Cn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(Cn,ze),ze|=r;return we(e,t,o,n),t.child}function id(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fa(e,t,n,r,o){var i=Ne(n)?en:ve.current;return i=Tn(t,i),Rn(t,o),n=fs(e,t,n,r,i,o),r=ds(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wt(e,t,o)):(H&&r&&ba(t),t.flags|=1,we(e,t,n,o),t.child)}function Fu(e,t,n,r,o){if(Ne(n)){var i=!0;Vo(t)}else i=!1;if(Rn(t,o),t.stateNode===null)Eo(e,t),Lf(t,n,r),ua(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ve(u):(u=Ne(n)?en:ve.current,u=Tn(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ru(t,l,r,u),_t=!1;var h=t.memoizedState;l.state=h,Xo(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Ee.current||_t?(typeof p=="function"&&(sa(t,n,p,r),s=t.memoizedState),(a=_t||ju(t,n,a,r,h,s,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,zf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Xe(t.type,a),l.props=u,m=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ve(s):(s=Ne(n)?en:ve.current,s=Tn(t,s));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||h!==s)&&Ru(t,l,r,s),_t=!1,h=t.memoizedState,l.state=h,Xo(t,r,l,o);var g=t.memoizedState;a!==m||h!==g||Ee.current||_t?(typeof x=="function"&&(sa(t,n,x,r),g=t.memoizedState),(u=_t||ju(t,n,u,r,h,g,s)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return da(e,t,n,r,i,o)}function da(e,t,n,r,o,i){id(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&_u(t,n,!1),wt(e,t,i);r=t.stateNode,pm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=In(t,e.child,null,i),t.child=In(t,null,a,i)):we(e,t,a,i),t.memoizedState=r.state,o&&_u(t,n,!0),t.child}function ld(e){var t=e.stateNode;t.pendingContext?ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ku(e,t.context,!1),as(e,t.containerInfo)}function Au(e,t,n,r,o){return On(),ts(o),t.flags|=256,we(e,t,n,r),t.child}var pa={dehydrated:null,treeContext:null,retryLane:0};function ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function ad(e,t,n){var r=t.pendingProps,o=Q.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(Q,o&1),e===null)return la(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=yi(l,r,0,null),e=bt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ma(n),t.memoizedState=pa,e):hs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return mm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Mt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Mt(a,i):(i=bt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ma(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=pa,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hs(e,t){return t=yi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&ts(r),In(t,e.child,null,n),e=hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=wl(Error(S(422))),uo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=yi({mode:"visible",children:r.children},o,0,null),i=bt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&In(t,e.child,null,l),t.child.memoizedState=ma(l),t.memoizedState=pa,i);if(!(t.mode&1))return uo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=wl(i,r,void 0),uo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ce||a){if(r=ae,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,gt(e,o),Je(r,e,o,-1))}return Ss(),r=wl(Error(S(421))),uo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Pm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,$e=Lt(o.nextSibling),Le=t,H=!0,Ge=null,e!==null&&(Fe[Ae++]=pt,Fe[Ae++]=mt,Fe[Ae++]=tn,pt=e.id,mt=e.overflow,tn=t),t=hs(t,r.children),t.flags|=4096,t)}function Uu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function xl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function sd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uu(e,n,t);else if(e.tag===19)Uu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ko(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),xl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ko(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}xl(t,!0,n,null,i);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hm(e,t,n){switch(t.tag){case 3:ld(t),On();break;case 5:If(t);break;case 1:Ne(t.type)&&Vo(t);break;case 4:as(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Qo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?ad(e,t,n):(B(Q,Q.current&1),e=wt(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,od(e,t,n)}return wt(e,t,n)}var ud,ha,cd,fd;ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ha=function(){};cd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Jt(ut.current);var i=null;switch(n){case"input":o=Dl(e,o),r=Dl(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=Ul(e,o),r=Ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Uo)}Vl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&V("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};fd=function(e,t,n,r){n!==r&&(t.flags|=4)};function bn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ym(e,t,n){var r=t.pendingProps;switch(es(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Ne(t.type)&&Bo(),me(t),null;case 3:return r=t.stateNode,Mn(),W(Ee),W(ve),us(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(_a(Ge),Ge=null))),ha(e,t),me(t),null;case 5:ss(t);var o=Jt(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)cd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return me(t),null}if(e=Jt(ut.current),ao(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[lt]=t,r[Pr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<lr.length;o++)V(lr[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Gs(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Js(r,i),V("invalid",r)}Vl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&lo(r.textContent,a,e),o=["children",""+a]):vr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&V("scroll",r)}switch(n){case"input":qr(r),Zs(r,i,!0);break;case"textarea":qr(r),qs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Uo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[lt]=t,e[Pr]=r,ud(e,t,!1,!1),t.stateNode=e;e:{switch(l=Wl(n,r),n){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<lr.length;o++)V(lr[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Gs(e,r),o=Dl(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":Js(e,r),o=Ul(e,r),V("invalid",e);break;default:o=r}Vl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Uc(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Fc(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&gr(e,s):typeof s=="number"&&gr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&V("scroll",e):s!=null&&Aa(e,i,s,l))}switch(n){case"input":qr(e),Zs(e,r,!1);break;case"textarea":qr(e),qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?En(e,!!r.multiple,i,!1):r.defaultValue!=null&&En(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)fd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Jt(Rr.current),Jt(ut.current),ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(i=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return me(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&$e!==null&&t.mode&1&&!(t.flags&128))jf(),On(),t.flags|=98560,i=!1;else if(i=ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[lt]=t}else On(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),i=!1}else Ge!==null&&(_a(Ge),Ge=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?re===0&&(re=3):Ss())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Mn(),ha(e,t),e===null&&Er(t.stateNode.containerInfo),me(t),null;case 10:return os(t.type._context),me(t),null;case 17:return Ne(t.type)&&Bo(),me(t),null;case 19:if(W(Q),i=t.memoizedState,i===null)return me(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)bn(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ko(e),l!==null){for(t.flags|=128,bn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>Fn&&(t.flags|=128,r=!0,bn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ko(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!H)return me(t),null}else 2*J()-i.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,bn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return xs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function vm(e,t){switch(es(t),t.tag){case 1:return Ne(t.type)&&Bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),W(Ee),W(ve),us(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ss(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return Mn(),null;case 10:return os(t.type._context),null;case 22:case 23:return xs(),null;case 24:return null;default:return null}}var co=!1,ye=!1,gm=typeof WeakSet=="function"?WeakSet:Set,j=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function ya(e,t,n){try{n()}catch(r){K(e,t,r)}}var Bu=!1;function wm(e,t){if(bl=Do,e=hf(),qa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,p=0,m=e,h=null;t:for(;;){for(var x;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(s=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(x=m.firstChild)!==null;)h=m,m=x;for(;;){if(m===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++p===r&&(s=l),(x=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ea={focusedElem:e,selectionRange:n},Do=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,N=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xe(t.type,v),N);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return g=Bu,Bu=!1,g}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ya(t,n,i)}o=o.next}while(o!==r)}}function mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function va(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Pr],delete t[ra],delete t[tm],delete t[nm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pd(e){return e.tag===5||e.tag===3||e.tag===4}function Vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Uo));else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}var ue=null,Ke=!1;function St(e,t,n){for(n=n.child;n!==null;)md(e,t,n),n=n.sibling}function md(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 5:ye||_n(n,t);case 6:var r=ue,o=Ke;ue=null,St(e,t,n),ue=r,Ke=o,ue!==null&&(Ke?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ke?(e=ue,n=n.stateNode,e.nodeType===8?pl(e.parentNode,n):e.nodeType===1&&pl(e,n),kr(e)):pl(ue,n.stateNode));break;case 4:r=ue,o=Ke,ue=n.stateNode.containerInfo,Ke=!0,St(e,t,n),ue=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ya(n,t,l),o=o.next}while(o!==r)}St(e,t,n);break;case 1:if(!ye&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}St(e,t,n);break;case 21:St(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,St(e,t,n),ye=r):St(e,t,n);break;default:St(e,t,n)}}function Wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gm),t.forEach(function(r){var o=jm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ke=!1;break e;case 3:ue=a.stateNode.containerInfo,Ke=!0;break e;case 4:ue=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ue===null)throw Error(S(160));md(i,l,o),ue=null,Ke=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){K(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hd(t,e),t=t.sibling}function hd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),be(e),r&4){try{pr(3,e,e.return),mi(3,e)}catch(v){K(e,e.return,v)}try{pr(5,e,e.return)}catch(v){K(e,e.return,v)}}break;case 1:Ye(t,e),be(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(Ye(t,e),be(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var o=e.stateNode;try{gr(o,"")}catch(v){K(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ic(o,i),Wl(a,l);var u=Wl(a,i);for(l=0;l<s.length;l+=2){var p=s[l],m=s[l+1];p==="style"?Uc(o,m):p==="dangerouslySetInnerHTML"?Fc(o,m):p==="children"?gr(o,m):Aa(o,p,m,u)}switch(a){case"input":Fl(o,i);break;case"textarea":Mc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?En(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?En(o,!!i.multiple,i.defaultValue,!0):En(o,!!i.multiple,i.multiple?[]:"",!1))}o[Pr]=i}catch(v){K(e,e.return,v)}}break;case 6:if(Ye(t,e),be(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){K(e,e.return,v)}}break;case 3:if(Ye(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(v){K(e,e.return,v)}break;case 4:Ye(t,e),be(e);break;case 13:Ye(t,e),be(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(gs=J())),r&4&&Wu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||p,Ye(t,e),ye=u):Ye(t,e),be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(j=e,p=e.child;p!==null;){for(m=j=p;j!==null;){switch(h=j,x=h.child,h.tag){case 0:case 11:case 14:case 15:pr(4,h,h.return);break;case 1:_n(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){K(r,n,v)}}break;case 5:_n(h,h.return);break;case 22:if(h.memoizedState!==null){Qu(m);continue}}x!==null?(x.return=h,j=x):Qu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Ac("display",l))}catch(v){K(e,e.return,v)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){K(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ye(t,e),be(e),r&4&&Wu(e);break;case 21:break;default:Ye(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pd(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(gr(o,""),r.flags&=-33);var i=Vu(e);wa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Vu(e);ga(e,a,l);break;default:throw Error(S(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xm(e,t,n){j=e,yd(e)}function yd(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||co;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ye;a=co;var u=ye;if(co=l,(ye=s)&&!u)for(j=o;j!==null;)l=j,s=l.child,l.tag===22&&l.memoizedState!==null?Yu(o):s!==null?(s.return=l,j=s):Yu(o);for(;i!==null;)j=i,yd(i),i=i.sibling;j=o,co=a,ye=u}Hu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):Hu(e)}}function Hu(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||mi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&kr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ye||t.flags&512&&va(t)}catch(h){K(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Qu(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Yu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mi(4,t)}catch(s){K(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){K(t,o,s)}}var i=t.return;try{va(t)}catch(s){K(t,i,s)}break;case 5:var l=t.return;try{va(t)}catch(s){K(t,l,s)}}}catch(s){K(t,t.return,s)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Sm=Math.ceil,Jo=xt.ReactCurrentDispatcher,ys=xt.ReactCurrentOwner,Be=xt.ReactCurrentBatchConfig,I=0,ae=null,ee=null,fe=0,ze=0,Cn=Bt(0),re=0,Tr=null,rn=0,hi=0,vs=0,mr=null,_e=null,gs=0,Fn=1/0,ft=null,qo=!1,xa=null,Ot=null,fo=!1,Pt=null,bo=0,hr=0,Sa=null,No=-1,Po=0;function xe(){return I&6?J():No!==-1?No:No=J()}function It(e){return e.mode&1?I&2&&fe!==0?fe&-fe:om.transition!==null?(Po===0&&(Po=qc()),Po):(e=F,e!==0||(e=window.event,e=e===void 0?16:lf(e.type)),e):1}function Je(e,t,n,r){if(50<hr)throw hr=0,Sa=null,Error(S(185));Vr(e,n,r),(!(I&2)||e!==ae)&&(e===ae&&(!(I&2)&&(hi|=n),re===4&&Et(e,fe)),Pe(e,r),n===1&&I===0&&!(t.mode&1)&&(Fn=J()+500,fi&&Vt()))}function Pe(e,t){var n=e.callbackNode;o0(e,t);var r=Mo(e,e===ae?fe:0);if(r===0)n!==null&&tu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tu(n),t===1)e.tag===0?rm(Xu.bind(null,e)):Ef(Xu.bind(null,e)),b0(function(){!(I&6)&&Vt()}),n=null;else{switch(bc(r)){case 1:n=Ha;break;case 4:n=Zc;break;case 16:n=Io;break;case 536870912:n=Jc;break;default:n=Io}n=Cd(n,vd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vd(e,t){if(No=-1,Po=0,I&6)throw Error(S(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Mo(e,e===ae?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ei(e,r);else{t=r;var o=I;I|=2;var i=wd();(ae!==e||fe!==t)&&(ft=null,Fn=J()+500,qt(e,t));do try{Cm();break}catch(a){gd(e,a)}while(1);rs(),Jo.current=i,I=o,ee!==null?t=0:(ae=null,fe=0,t=re)}if(t!==0){if(t===2&&(o=Kl(e),o!==0&&(r=o,t=ka(e,o))),t===1)throw n=Tr,qt(e,0),Et(e,r),Pe(e,J()),n;if(t===6)Et(e,r);else{if(o=e.current.alternate,!(r&30)&&!km(o)&&(t=ei(e,r),t===2&&(i=Kl(e),i!==0&&(r=i,t=ka(e,i))),t===1))throw n=Tr,qt(e,0),Et(e,r),Pe(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Xt(e,_e,ft);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=gs+500-J(),10<t)){if(Mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=na(Xt.bind(null,e,_e,ft),t);break}Xt(e,_e,ft);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ze(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sm(r/1960))-r,10<r){e.timeoutHandle=na(Xt.bind(null,e,_e,ft),r);break}Xt(e,_e,ft);break;case 5:Xt(e,_e,ft);break;default:throw Error(S(329))}}}return Pe(e,J()),e.callbackNode===n?vd.bind(null,e):null}function ka(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=ei(e,t),e!==2&&(t=_e,_e=n,t!==null&&_a(t)),e}function _a(e){_e===null?_e=e:_e.push.apply(_e,e)}function km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~vs,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Xu(e){if(I&6)throw Error(S(327));zn();var t=Mo(e,0);if(!(t&1))return Pe(e,J()),null;var n=ei(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=ka(e,r))}if(n===1)throw n=Tr,qt(e,0),Et(e,t),Pe(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,_e,ft),Pe(e,J()),null}function ws(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Fn=J()+500,fi&&Vt())}}function on(e){Pt!==null&&Pt.tag===0&&!(I&6)&&zn();var t=I;I|=1;var n=Be.transition,r=F;try{if(Be.transition=null,F=1,e)return e()}finally{F=r,Be.transition=n,I=t,!(I&6)&&Vt()}}function xs(){ze=Cn.current,W(Cn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,q0(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(es(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bo();break;case 3:Mn(),W(Ee),W(ve),us();break;case 5:ss(r);break;case 4:Mn();break;case 13:W(Q);break;case 19:W(Q);break;case 10:os(r.type._context);break;case 22:case 23:xs()}n=n.return}if(ae=e,ee=e=Mt(e.current,null),fe=ze=t,re=0,Tr=null,vs=hi=rn=0,_e=mr=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Zt=null}return e}function gd(e,t){do{var n=ee;try{if(rs(),_o.current=Zo,Go){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Go=!1}if(nn=0,ie=ne=Y=null,dr=!1,zr=0,ys.current=null,n===null||n.return===null){re=1,Tr=t,ee=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=fe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=a,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Ou(l);if(x!==null){x.flags&=-257,Iu(x,l,a,i,t),x.mode&1&&Tu(i,u,t),t=x,s=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(s),t.updateQueue=v}else g.add(s);break e}else{if(!(t&1)){Tu(i,u,t),Ss();break e}s=Error(S(426))}}else if(H&&a.mode&1){var N=Ou(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Iu(N,l,a,i,t),ts(Dn(s,a));break e}}i=s=Dn(s,a),re!==4&&(re=2),mr===null?mr=[i]:mr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=td(i,s,t);Nu(i,f);break e;case 1:a=s;var c=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ot===null||!Ot.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=nd(i,a,t);Nu(i,w);break e}}i=i.return}while(i!==null)}Sd(n)}catch(E){t=E,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function wd(){var e=Jo.current;return Jo.current=Zo,e===null?Zo:e}function Ss(){(re===0||re===3||re===2)&&(re=4),ae===null||!(rn&268435455)&&!(hi&268435455)||Et(ae,fe)}function ei(e,t){var n=I;I|=2;var r=wd();(ae!==e||fe!==t)&&(ft=null,qt(e,t));do try{_m();break}catch(o){gd(e,o)}while(1);if(rs(),I=n,Jo.current=r,ee!==null)throw Error(S(261));return ae=null,fe=0,re}function _m(){for(;ee!==null;)xd(ee)}function Cm(){for(;ee!==null&&!Gp();)xd(ee)}function xd(e){var t=_d(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Sd(e):ee=t,ys.current=null}function Sd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vm(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(n=ym(n,t,ze),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Xt(e,t,n){var r=F,o=Be.transition;try{Be.transition=null,F=1,Em(e,t,n,r)}finally{Be.transition=o,F=r}return null}function Em(e,t,n,r){do zn();while(Pt!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(i0(e,i),e===ae&&(ee=ae=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,Cd(Io,function(){return zn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=F;F=1;var a=I;I|=4,ys.current=null,wm(e,n),hd(n,e),Q0(ea),Do=!!bl,ea=bl=null,e.current=n,xm(n),Zp(),I=a,F=l,Be.transition=i}else e.current=n;if(fo&&(fo=!1,Pt=e,bo=o),i=e.pendingLanes,i===0&&(Ot=null),bp(n.stateNode),Pe(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(qo)throw qo=!1,e=xa,xa=null,e;return bo&1&&e.tag!==0&&zn(),i=e.pendingLanes,i&1?e===Sa?hr++:(hr=0,Sa=e):hr=0,Vt(),null}function zn(){if(Pt!==null){var e=bc(bo),t=Be.transition,n=F;try{if(Be.transition=null,F=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,bo=0,I&6)throw Error(S(331));var o=I;for(I|=4,j=e.current;j!==null;){var i=j,l=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(j=u;j!==null;){var p=j;switch(p.tag){case 0:case 11:case 15:pr(8,p,i)}var m=p.child;if(m!==null)m.return=p,j=m;else for(;j!==null;){p=j;var h=p.sibling,x=p.return;if(dd(p),p===u){j=null;break}if(h!==null){h.return=x,j=h;break}j=x}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var N=v.sibling;v.sibling=null,v=N}while(v!==null)}}j=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,j=l;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){l=j;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,j=d;else e:for(l=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mi(9,a)}}catch(E){K(a,a.return,E)}if(a===l){j=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,j=w;break e}j=a.return}}if(I=o,Vt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(li,e)}catch{}r=!0}return r}finally{F=n,Be.transition=t}}return!1}function Ku(e,t,n){t=Dn(n,t),t=td(e,t,1),e=Tt(e,t,1),t=xe(),e!==null&&(Vr(e,1,t),Pe(e,t))}function K(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Dn(n,e),e=nd(t,e,1),t=Tt(t,e,1),e=xe(),t!==null&&(Vr(t,1,e),Pe(t,e));break}}t=t.return}}function Nm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(fe&n)===n&&(re===4||re===3&&(fe&130023424)===fe&&500>J()-gs?qt(e,0):vs|=n),Pe(e,t)}function kd(e,t){t===0&&(e.mode&1?(t=to,to<<=1,!(to&130023424)&&(to=4194304)):t=1);var n=xe();e=gt(e,t),e!==null&&(Vr(e,t,n),Pe(e,n))}function Pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kd(e,n)}function jm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),kd(e,n)}var _d;_d=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,hm(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,H&&t.flags&1048576&&Nf(t,Ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Eo(e,t),e=t.pendingProps;var o=Tn(t,ve.current);Rn(t,n),o=fs(null,t,r,e,o,n);var i=ds();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,Vo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ls(t),o.updater=di,t.stateNode=o,o._reactInternals=t,ua(t,r,e,n),t=da(null,t,r,!0,i,n)):(t.tag=0,H&&i&&ba(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Eo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=zm(r),e=Xe(r,e),o){case 0:t=fa(null,t,r,e,n);break e;case 1:t=Fu(null,t,r,e,n);break e;case 11:t=Mu(null,t,r,e,n);break e;case 14:t=Du(null,t,r,Xe(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),fa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Fu(e,t,r,o,n);case 3:e:{if(ld(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,o=i.element,zf(e,t),Xo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Dn(Error(S(423)),t),t=Au(e,t,r,n,o);break e}else if(r!==o){o=Dn(Error(S(424)),t),t=Au(e,t,r,n,o);break e}else for($e=Lt(t.stateNode.containerInfo.firstChild),Le=t,H=!0,Ge=null,n=Of(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===o){t=wt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return If(t),e===null&&la(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ta(r,o)?l=null:i!==null&&ta(r,i)&&(t.flags|=32),id(e,t),we(e,t,l,n),t.child;case 6:return e===null&&la(t),null;case 13:return ad(e,t,n);case 4:return as(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=In(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Mu(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(Qo,r._currentValue),r._currentValue=l,i!==null)if(qe(i.value,l)){if(i.children===o.children&&!Ee.current){t=wt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=ht(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),aa(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),aa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Rn(t,n),o=Ve(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=Xe(r,t.pendingProps),o=Xe(r.type,o),Du(e,t,r,o,n);case 15:return rd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Eo(e,t),t.tag=1,Ne(r)?(e=!0,Vo(t)):e=!1,Rn(t,n),Lf(t,r,o),ua(t,r,o,n),da(null,t,r,!0,e,n);case 19:return sd(e,t,n);case 22:return od(e,t,n)}throw Error(S(156,t.tag))};function Cd(e,t){return Gc(e,t)}function Rm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Rm(e,t,n,r)}function ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zm(e){if(typeof e=="function")return ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ba)return 11;if(e===Va)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ks(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mn:return bt(n.children,o,i,t);case Ua:l=8,o|=8;break;case Tl:return e=Ue(12,n,t,o|2),e.elementType=Tl,e.lanes=i,e;case Ol:return e=Ue(13,n,t,o),e.elementType=Ol,e.lanes=i,e;case Il:return e=Ue(19,n,t,o),e.elementType=Il,e.lanes=i,e;case Lc:return yi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zc:l=10;break e;case $c:l=9;break e;case Ba:l=11;break e;case Va:l=14;break e;case kt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ue(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function bt(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function yi(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=Lc,e.lanes=n,e.stateNode={isHidden:!1},e}function Sl(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function kl(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $m(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _s(e,t,n,r,o,i,l,a,s){return e=new $m(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ue(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(i),e}function Lm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ed(e){if(!e)return At;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Cf(e,n,t)}return t}function Nd(e,t,n,r,o,i,l,a,s){return e=_s(n,r,!0,e,o,i,l,a,s),e.context=Ed(null),n=e.current,r=xe(),o=It(n),i=ht(r,o),i.callback=t??null,Tt(n,i,o),e.current.lanes=o,Vr(e,o,r),Pe(e,r),e}function vi(e,t,n,r){var o=t.current,i=xe(),l=It(o);return n=Ed(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tt(o,t,l),e!==null&&(Je(e,o,l,i),ko(e,o,l)),l}function ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cs(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function Tm(){return null}var Pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}gi.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));vi(e,t,null,null)};gi.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){vi(null,e,null,null)}),t[vt]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=nf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&of(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zu(){}function Om(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ti(l);i.call(u)}}var l=Nd(t,r,e,0,null,!1,!1,"",Zu);return e._reactRootContainer=l,e[vt]=l.current,Er(e.nodeType===8?e.parentNode:e),on(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ti(s);a.call(u)}}var s=_s(e,0,!1,null,null,!1,!1,"",Zu);return e._reactRootContainer=s,e[vt]=s.current,Er(e.nodeType===8?e.parentNode:e),on(function(){vi(t,s,n,r)}),s}function xi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ti(l);a.call(s)}}vi(t,l,e,o)}else l=Om(n,t,e,o,r);return ti(l)}ef=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(Qa(t,n|1),Pe(t,J()),!(I&6)&&(Fn=J()+500,Vt()))}break;case 13:on(function(){var r=gt(e,1);if(r!==null){var o=xe();Je(r,e,1,o)}}),Cs(e,1)}};Ya=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=xe();Je(t,e,134217728,n)}Cs(e,134217728)}};tf=function(e){if(e.tag===13){var t=It(e),n=gt(e,t);if(n!==null){var r=xe();Je(n,e,t,r)}Cs(e,t)}};nf=function(){return F};rf=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ql=function(e,t,n){switch(t){case"input":if(Fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ci(r);if(!o)throw Error(S(90));Oc(r),Fl(r,o)}}}break;case"textarea":Mc(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}};Wc=ws;Hc=on;var Im={usingClientEntryPoint:!1,Events:[Hr,gn,ci,Bc,Vc,ws]},er={findFiberByHostInstance:Gt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mm={bundleType:er.bundleType,version:er.version,rendererPackageName:er.rendererPackageName,rendererConfig:er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xc(e),e===null?null:e.stateNode},findFiberByHostInstance:er.findFiberByHostInstance||Tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{li=po.inject(Mm),st=po}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Im;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(S(200));return Lm(e,t,null,n)};Ie.createRoot=function(e,t){if(!Ns(e))throw Error(S(299));var n=!1,r="",o=Pd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=_s(e,1,!1,null,null,n,!1,r,o),e[vt]=t.current,Er(e.nodeType===8?e.parentNode:e),new Es(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Xc(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return on(e)};Ie.hydrate=function(e,t,n){if(!wi(t))throw Error(S(200));return xi(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Pd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Nd(t,null,e,1,n??null,o,!1,i,l),e[vt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new gi(t)};Ie.render=function(e,t,n){if(!wi(t))throw Error(S(200));return xi(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!wi(e))throw Error(S(40));return e._reactRootContainer?(on(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Ie.unstable_batchedUpdates=ws;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wi(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return xi(e,t,n,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";function jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)}catch(e){console.error(e)}}jd(),Ec.exports=Ie;var Dm=Ec.exports,Ju=Dm;$l.createRoot=Ju.createRoot,$l.hydrateRoot=Ju.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Or.apply(this,arguments)}var jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jt||(jt={}));const qu="popstate";function Fm(e){e===void 0&&(e={});function t(o,i){let{pathname:l="/",search:a="",hash:s=""}=sn(o.location.hash.substr(1));return Ca("",{pathname:l,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let l=o.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof i=="string"?i:ni(i))}function r(o,i){Si(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Um(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Si(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Am(){return Math.random().toString(36).substr(2,8)}function bu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ca(e,t,n,r){return n===void 0&&(n=null),Or({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?sn(t):t,{state:n,key:t&&t.key||r||Am()})}function ni(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function sn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Um(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=jt.Pop,s=null,u=p();u==null&&(u=0,l.replaceState(Or({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function m(){a=jt.Pop;let N=p(),f=N==null?null:N-u;u=N,s&&s({action:a,location:v.location,delta:f})}function h(N,f){a=jt.Push;let c=Ca(v.location,N,f);n&&n(c,N),u=p()+1;let d=bu(c,u),w=v.createHref(c);try{l.pushState(d,"",w)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(w)}i&&s&&s({action:a,location:v.location,delta:1})}function x(N,f){a=jt.Replace;let c=Ca(v.location,N,f);n&&n(c,N),u=p();let d=bu(c,u),w=v.createHref(c);l.replaceState(d,"",w),i&&s&&s({action:a,location:v.location,delta:0})}function g(N){let f=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof N=="string"?N:ni(N);return te(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let v={get action(){return a},get location(){return e(o,l)},listen(N){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(qu,m),s=N,()=>{o.removeEventListener(qu,m),s=null}},createHref(N){return t(o,N)},createURL:g,encodeLocation(N){let f=g(N);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:x,go(N){return l.go(N)}};return v}var ec;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ec||(ec={}));function Bm(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?sn(t):t,o=Ps(r.pathname||"/",n);if(o==null)return null;let i=Rd(e);Vm(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=Jm(i[a],eh(o));return l}function Rd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Dt([r,s.relativePath]),p=n.concat(s);i.children&&i.children.length>0&&(te(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rd(i.children,t,p,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Gm(u,i.index),routesMeta:p})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of zd(i.path))o(i,l,s)}),t}function zd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=zd(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Vm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Zm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wm=/^:\w+$/,Hm=3,Qm=2,Ym=1,Xm=10,Km=-2,tc=e=>e==="*";function Gm(e,t){let n=e.split("/"),r=n.length;return n.some(tc)&&(r+=Km),t&&(r+=Qm),n.filter(o=>!tc(o)).reduce((o,i)=>o+(Wm.test(i)?Hm:i===""?Ym:Xm),r)}function Zm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Jm(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",p=qm({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!p)return null;Object.assign(r,p.params);let m=a.route;i.push({params:r,pathname:Dt([o,p.pathname]),pathnameBase:oh(Dt([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=Dt([o,p.pathnameBase]))}return i}function qm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=bm(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,p,m)=>{if(p==="*"){let h=a[m]||"";l=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[p]=th(a[m]||"",p),u},{}),pathname:i,pathnameBase:l,pattern:e}}function bm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Si(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function eh(e){try{return decodeURI(e)}catch(t){return Si(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function th(e,t){try{return decodeURIComponent(e)}catch(n){return Si(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ps(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function nh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?sn(e):e;return{pathname:n?n.startsWith("/")?n:rh(n,t):t,search:ih(r),hash:lh(o)}}function rh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function _l(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $d(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ld(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=sn(e):(o=Or({},e),te(!o.pathname||!o.pathname.includes("?"),_l("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),_l("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),_l("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let m=t.length-1;if(l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),m-=1;o.pathname=h.join("/")}a=m>=0?t[m]:"/"}let s=nh(o,a),u=l&&l!=="/"&&l.endsWith("/"),p=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const Dt=e=>e.join("/").replace(/\/\/+/g,"/"),oh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ih=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ah(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Td=["post","put","patch","delete"];new Set(Td);const sh=["get",...Td];new Set(sh);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(this,arguments)}const js=k.createContext(null),uh=k.createContext(null),Wn=k.createContext(null),ki=k.createContext(null),Wt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Od=k.createContext(null);function ch(e,t){let{relative:n}=t===void 0?{}:t;Yr()||te(!1);let{basename:r,navigator:o}=k.useContext(Wn),{hash:i,pathname:l,search:a}=Md(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Dt([r,l])),o.createHref({pathname:s,search:a,hash:i})}function Yr(){return k.useContext(ki)!=null}function _i(){return Yr()||te(!1),k.useContext(ki).location}function Id(e){k.useContext(Wn).static||k.useLayoutEffect(e)}function fh(){let{isDataRoute:e}=k.useContext(Wt);return e?Eh():dh()}function dh(){Yr()||te(!1);let e=k.useContext(js),{basename:t,navigator:n}=k.useContext(Wn),{matches:r}=k.useContext(Wt),{pathname:o}=_i(),i=JSON.stringify($d(r).map(s=>s.pathnameBase)),l=k.useRef(!1);return Id(()=>{l.current=!0}),k.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let p=Ld(s,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Dt([t,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[t,n,i,o,e])}function ph(){let{matches:e}=k.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function Md(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext(Wt),{pathname:o}=_i(),i=JSON.stringify($d(r).map(l=>l.pathnameBase));return k.useMemo(()=>Ld(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function mh(e,t){return hh(e,t)}function hh(e,t,n){Yr()||te(!1);let{navigator:r}=k.useContext(Wn),{matches:o}=k.useContext(Wt),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=_i(),u;if(t){var p;let v=typeof t=="string"?sn(t):t;a==="/"||(p=v.pathname)!=null&&p.startsWith(a)||te(!1),u=v}else u=s;let m=u.pathname||"/",h=a==="/"?m:m.slice(a.length)||"/",x=Bm(e,{pathname:h}),g=xh(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Dt([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Dt([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n);return t&&g?k.createElement(ki.Provider,{value:{location:ri({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:jt.Pop}},g):g}function yh(){let e=Ch(),t=ah(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,i)}const vh=k.createElement(yh,null);class gh extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement(Wt.Provider,{value:this.props.routeContext},k.createElement(Od.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wh(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(js);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Wt.Provider,{value:t},r)}function xh(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=i.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||te(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,s,u)=>{let p=s.route.id?l==null?void 0:l[s.route.id]:null,m=null;n&&(m=s.route.errorElement||vh);let h=t.concat(i.slice(0,u+1)),x=()=>{let g;return p?g=m:s.route.Component?g=k.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=a,k.createElement(wh,{match:s,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?k.createElement(gh,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var Ea;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Ea||(Ea={}));var Ir;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Ir||(Ir={}));function Sh(e){let t=k.useContext(js);return t||te(!1),t}function kh(e){let t=k.useContext(uh);return t||te(!1),t}function _h(e){let t=k.useContext(Wt);return t||te(!1),t}function Dd(e){let t=_h(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Ch(){var e;let t=k.useContext(Od),n=kh(Ir.UseRouteError),r=Dd(Ir.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Eh(){let{router:e}=Sh(Ea.UseNavigateStable),t=Dd(Ir.UseNavigateStable),n=k.useRef(!1);return Id(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ri({fromRouteId:t},i)))},[e,t])}function dn(e){te(!1)}function Nh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=jt.Pop,navigator:i,static:l=!1}=e;Yr()&&te(!1);let a=t.replace(/^\/*/,"/"),s=k.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=sn(r));let{pathname:u="/",search:p="",hash:m="",state:h=null,key:x="default"}=r,g=k.useMemo(()=>{let v=Ps(u,a);return v==null?null:{location:{pathname:v,search:p,hash:m,state:h,key:x},navigationType:o}},[a,u,p,m,h,x,o]);return g==null?null:k.createElement(Wn.Provider,{value:s},k.createElement(ki.Provider,{children:n,value:g}))}function Ph(e){let{children:t,location:n}=e;return mh(Na(t),n)}var nc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(nc||(nc={}));new Promise(()=>{});function Na(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,Na(r.props.children,i));return}r.type!==dn&&te(!1),!r.props.index||!r.props.children||te(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Na(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}function jh(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Rh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zh(e,t){return e.button===0&&(!t||t==="_self")&&!Rh(e)}const $h=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Lh="startTransition",rc=zl[Lh];function Th(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=Fm({window:o,v5Compat:!0}));let l=i.current,[a,s]=k.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=k.useCallback(m=>{u&&rc?rc(()=>s(m)):s(m)},[s,u]);return k.useLayoutEffect(()=>l.listen(p),[l,p]),k.createElement(Nh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const Oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ih=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,le=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:p}=t,m=jh(t,$h),{basename:h}=k.useContext(Wn),x,g=!1;if(typeof u=="string"&&Ih.test(u)&&(x=u,Oh))try{let c=new URL(window.location.href),d=u.startsWith("//")?new URL(c.protocol+u):new URL(u),w=Ps(d.pathname,h);d.origin===c.origin&&w!=null?u=w+d.search+d.hash:g=!0}catch{}let v=ch(u,{relative:o}),N=Mh(u,{replace:l,state:a,target:s,preventScrollReset:p,relative:o});function f(c){r&&r(c),c.defaultPrevented||N(c)}return k.createElement("a",Pa({},m,{href:x||v,onClick:g||i?r:f,ref:n,target:s}))});var oc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(oc||(oc={}));var ic;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ic||(ic={}));function Mh(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=fh(),s=_i(),u=Md(e,{relative:l});return k.useCallback(p=>{if(zh(p,n)){p.preventDefault();let m=r!==void 0?r:ni(s)===ni(u);a(e,{replace:m,state:o,preventScrollReset:i,relative:l})}},[s,a,u,r,o,n,e,i,l])}const Dh="_container_1ydnm_1",Fh="_name_1ydnm_25",Ah="_icon_1ydnm_39",Uh="_logo_1ydnm_49",Bh="_sticky_1ydnm_67",Vh="_showNav_1ydnm_1",Wh="_links_1ydnm_101",Hh="_bordered_1ydnm_1",Qh="_menu_1ydnm_187",Yh="_menuButton_1ydnm_209",nt={container:Dh,name:Fh,icon:Ah,logo:Uh,sticky:Bh,showNav:Vh,links:Wh,bordered:Hh,menu:Qh,menuButton:Yh},Xh="/assets/logo-57272f2b.png",Kh="_container_1mykz_1",Gh="_init_1mykz_1",Zh="_hidden_1mykz_89",Jh="_exit_1mykz_1",qh="_notShow_1mykz_101",Kt={container:Kh,init:Gh,hidden:Zh,exit:Jh,notShow:qh},bh="_container_jkj6u_1",e1="_init_jkj6u_1",t1="_links_jkj6u_63",n1="_hidden_jkj6u_75",r1="_exit_jkj6u_1",o1="_notShow_jkj6u_107",Re={container:bh,init:e1,links:t1,hidden:n1,exit:r1,notShow:o1},Mr=(e,t)=>{e.classList.remove(t.notShow),e.classList.toggle(t.hidden)?setTimeout(()=>{e.style.display="none"},300):e.style.display="flex"},Rs=()=>{const e=document.querySelector(`li > a[href='${window.location.pathname}']`);e===null?setTimeout(()=>{Rs()},500):e.style.fontWeight="800"},i1=()=>{const e=document.querySelector("#navbar");e!==null&&(window.scrollY>e.offsetTop+60?e.classList.add(nt.sticky):e.classList.remove(nt.sticky))},at=()=>{window.scroll({top:0,behavior:"smooth"})},l1=(e,t)=>{e.classList.add(t.hidden)},Fd=()=>{const e=document.getElementById(Re.container);l1(e,Re)};window.onscroll=i1;window.addEventListener("load",()=>Rs());const a1=()=>{const e=()=>{const t=document.getElementsByClassName(Kt.container);Mr(t[0],Kt)};return y.jsxs("div",{className:`${Kt.notShow} ${Kt.hidden} ${Kt.container}`,onClick:()=>{at(),e()},children:[y.jsx(le,{to:"/players/2024",children:"2024"}),y.jsx(le,{to:"/players/2025",children:"2025"}),y.jsx(le,{to:"/players/2026",children:"2026"}),y.jsx(le,{to:"/players/2027",children:"2027"}),y.jsx(le,{to:"/players/2028",children:"2028"})]})},s1="_container_1hgez_1",u1="_showAnimation_1hgez_1",c1="_content_1hgez_51",f1="_links_1hgez_63",d1="_header_1hgez_89",p1="_hidden_1hgez_109",m1="_exit_1hgez_1",h1="_notShow_1hgez_139",rt={container:s1,showAnimation:u1,content:c1,links:f1,header:d1,hidden:p1,exit:m1,notShow:h1},y1=()=>{const e=()=>{const t=document.getElementsByClassName(rt.container);Mr(t[0],rt)};return y.jsx("div",{className:`${rt.container} ${rt.hidden} ${rt.notShow}`,children:y.jsxs("div",{className:rt.content,children:[y.jsxs("div",{className:rt.header,children:[y.jsx("h1",{children:"Elegibles"}),y.jsx("button",{onClick:e,children:y.jsx("i",{className:"fa-solid fa-x"})})]}),y.jsxs("div",{className:rt.links,onClick:()=>{e(),at(),Fd()},children:[y.jsx(le,{to:"/players/2024",children:"2024"}),y.jsx(le,{to:"/players/2025",children:"2025"}),y.jsx(le,{to:"/players/2026",children:"2026"}),y.jsx(le,{to:"/players/2027",children:"2027"}),y.jsx(le,{to:"/players/2028",children:"2028"})]})]})})},v1=()=>{window.addEventListener("scroll",Fd);const e=()=>{const t=document.getElementsByClassName(rt.container);Mr(t[0],rt)};return y.jsxs("div",{children:[y.jsxs("div",{className:`${Re.notShow} ${Re.hidden} ${Re.container} hideOnScroll`,id:Re.container,children:[y.jsx(le,{className:Re.links,to:"/",onClick:at,children:"Inicio"}),y.jsx(le,{className:Re.links,to:"/about",onClick:at,children:"Quienes Somos"}),y.jsx("button",{onClick:e,children:y.jsx("p",{className:Re.links,children:"Elegibles"})}),y.jsx(le,{className:Re.links,to:"/trajectory",onClick:at,children:"Trayectoria"}),y.jsx(le,{className:Re.links,to:"/contact",onClick:at,children:"Contacto"})]}),y.jsx(y1,{})]})},g1=()=>y.jsxs("div",{children:[y.jsxs("nav",{className:nt.container,id:"navbar",children:[y.jsxs("div",{className:nt.logo,children:[y.jsx("img",{className:nt.icon,src:Xh,alt:""}),y.jsx("h1",{className:nt.name,children:"MANACLA BASEBALL ACADEMY"})]}),y.jsxs("div",{className:nt.links,children:[y.jsx(le,{to:"/",onClick:at,children:"Inicio"}),y.jsx(le,{to:"/about",onClick:at,children:"Quienes Somos"}),y.jsxs("div",{className:nt.menu,children:[y.jsx("p",{onClick:()=>{const e=document.getElementsByClassName(Kt.container);Mr(e[0],Kt)},children:"Elegibles"}),y.jsx(a1,{})]}),y.jsx(le,{to:"/trajectory",onClick:at,children:"Trayectoria"}),y.jsx(le,{to:"/contact",onClick:at,children:"Contacto"})]}),y.jsx("div",{className:nt.menuButton,children:y.jsx("button",{className:nt.icon,onClick:()=>{const e=document.getElementsByClassName(Re.container);Mr(e[0],Re)},children:y.jsx("i",{className:"fa-solid fa-bars"})})})]}),y.jsx(v1,{})]});function w1(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function x1(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var S1=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(x1(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=w1(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),he="-ms-",oi="-moz-",M="-webkit-",Ad="comm",zs="rule",$s="decl",k1="@import",Ud="@keyframes",_1="@layer",C1=Math.abs,Ci=String.fromCharCode,E1=Object.assign;function N1(e,t){return ce(e,0)^45?(((t<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function Bd(e){return e.trim()}function P1(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function ja(e,t){return e.indexOf(t)}function ce(e,t){return e.charCodeAt(t)|0}function Dr(e,t,n){return e.slice(t,n)}function ot(e){return e.length}function Ls(e){return e.length}function mo(e,t){return t.push(e),e}function j1(e,t){return e.map(t).join("")}var Ei=1,An=1,Vd=0,je=0,b=0,Hn="";function Ni(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ei,column:An,length:l,return:""}}function tr(e,t){return E1(Ni("",null,null,"",null,null,0),e,{length:-e.length},t)}function R1(){return b}function z1(){return b=je>0?ce(Hn,--je):0,An--,b===10&&(An=1,Ei--),b}function Te(){return b=je<Vd?ce(Hn,je++):0,An++,b===10&&(An=1,Ei++),b}function ct(){return ce(Hn,je)}function Ro(){return je}function Xr(e,t){return Dr(Hn,e,t)}function Fr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wd(e){return Ei=An=1,Vd=ot(Hn=e),je=0,[]}function Hd(e){return Hn="",e}function zo(e){return Bd(Xr(je-1,Ra(e===91?e+2:e===40?e+1:e)))}function $1(e){for(;(b=ct())&&b<33;)Te();return Fr(e)>2||Fr(b)>3?"":" "}function L1(e,t){for(;--t&&Te()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return Xr(e,Ro()+(t<6&&ct()==32&&Te()==32))}function Ra(e){for(;Te();)switch(b){case e:return je;case 34:case 39:e!==34&&e!==39&&Ra(b);break;case 40:e===41&&Ra(e);break;case 92:Te();break}return je}function T1(e,t){for(;Te()&&e+b!==47+10;)if(e+b===42+42&&ct()===47)break;return"/*"+Xr(t,je-1)+"*"+Ci(e===47?e:Te())}function O1(e){for(;!Fr(ct());)Te();return Xr(e,je)}function I1(e){return Hd($o("",null,null,null,[""],e=Wd(e),0,[0],e))}function $o(e,t,n,r,o,i,l,a,s){for(var u=0,p=0,m=l,h=0,x=0,g=0,v=1,N=1,f=1,c=0,d="",w=o,E=i,P=r,C=d;N;)switch(g=c,c=Te()){case 40:if(g!=108&&ce(C,m-1)==58){ja(C+=D(zo(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=zo(c);break;case 9:case 10:case 13:case 32:C+=$1(g);break;case 92:C+=L1(Ro()-1,7);continue;case 47:switch(ct()){case 42:case 47:mo(M1(T1(Te(),Ro()),t,n),s);break;default:C+="/"}break;case 123*v:a[u++]=ot(C)*f;case 125*v:case 59:case 0:switch(c){case 0:case 125:N=0;case 59+p:f==-1&&(C=D(C,/\f/g,"")),x>0&&ot(C)-m&&mo(x>32?ac(C+";",r,n,m-1):ac(D(C," ","")+";",r,n,m-2),s);break;case 59:C+=";";default:if(mo(P=lc(C,t,n,u,p,o,a,d,w=[],E=[],m),i),c===123)if(p===0)$o(C,t,P,P,w,i,m,a,E);else switch(h===99&&ce(C,3)===110?100:h){case 100:case 108:case 109:case 115:$o(e,P,P,r&&mo(lc(e,P,P,0,0,o,a,d,o,w=[],m),E),o,E,m,a,r?w:E);break;default:$o(C,P,P,P,[""],E,0,a,E)}}u=p=x=0,v=f=1,d=C="",m=l;break;case 58:m=1+ot(C),x=g;default:if(v<1){if(c==123)--v;else if(c==125&&v++==0&&z1()==125)continue}switch(C+=Ci(c),c*v){case 38:f=p>0?1:(C+="\f",-1);break;case 44:a[u++]=(ot(C)-1)*f,f=1;break;case 64:ct()===45&&(C+=zo(Te())),h=ct(),p=m=ot(d=C+=O1(Ro())),c++;break;case 45:g===45&&ot(C)==2&&(v=0)}}return i}function lc(e,t,n,r,o,i,l,a,s,u,p){for(var m=o-1,h=o===0?i:[""],x=Ls(h),g=0,v=0,N=0;g<r;++g)for(var f=0,c=Dr(e,m+1,m=C1(v=l[g])),d=e;f<x;++f)(d=Bd(v>0?h[f]+" "+c:D(c,/&\f/g,h[f])))&&(s[N++]=d);return Ni(e,t,n,o===0?zs:a,s,u,p)}function M1(e,t,n){return Ni(e,t,n,Ad,Ci(R1()),Dr(e,2,-2),0)}function ac(e,t,n,r){return Ni(e,t,n,$s,Dr(e,0,r),Dr(e,r+1,-1),r)}function $n(e,t){for(var n="",r=Ls(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function D1(e,t,n,r){switch(e.type){case _1:if(e.children.length)break;case k1:case $s:return e.return=e.return||e.value;case Ad:return"";case Ud:return e.return=e.value+"{"+$n(e.children,r)+"}";case zs:e.value=e.props.join(",")}return ot(n=$n(e.children,r))?e.return=e.value+"{"+n+"}":""}function F1(e){var t=Ls(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function A1(e){return function(t){t.root||(t=t.return)&&e(t)}}function U1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var B1=function(t,n,r){for(var o=0,i=0;o=i,i=ct(),o===38&&i===12&&(n[r]=1),!Fr(i);)Te();return Xr(t,je)},V1=function(t,n){var r=-1,o=44;do switch(Fr(o)){case 0:o===38&&ct()===12&&(n[r]=1),t[r]+=B1(je-1,n,r);break;case 2:t[r]+=zo(o);break;case 4:if(o===44){t[++r]=ct()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ci(o)}while(o=Te());return t},W1=function(t,n){return Hd(V1(Wd(t),n))},sc=new WeakMap,H1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!sc.get(r))&&!o){sc.set(t,!0);for(var i=[],l=W1(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var p=0;p<a.length;p++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[p]):a[p]+" "+l[s]}}},Q1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Qd(e,t){switch(N1(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+oi+e+he+e+e;case 6828:case 4268:return M+e+he+e+e;case 6165:return M+e+he+"flex-"+e+e;case 5187:return M+e+D(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+he+"flex-$1$2")+e;case 5443:return M+e+he+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return M+e+he+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return M+e+he+D(e,"shrink","negative")+e;case 5292:return M+e+he+D(e,"basis","preferred-size")+e;case 6060:return M+"box-"+D(e,"-grow","")+M+e+he+D(e,"grow","positive")+e;case 4554:return M+D(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ot(e)-1-t>6)switch(ce(e,t+1)){case 109:if(ce(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+oi+(ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ja(e,"stretch")?Qd(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ce(e,t+1)!==115)break;case 6444:switch(ce(e,ot(e)-3-(~ja(e,"!important")&&10))){case 107:return D(e,":",":"+M)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(ce(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(ce(e,t+11)){case 114:return M+e+he+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+he+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+he+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return M+e+he+e+e}return e}var Y1=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case $s:t.return=Qd(t.value,t.length);break;case Ud:return $n([tr(t,{value:D(t.value,"@","@"+M)})],o);case zs:if(t.length)return j1(t.props,function(i){switch(P1(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return $n([tr(t,{props:[D(i,/:(read-\w+)/,":"+oi+"$1")]})],o);case"::placeholder":return $n([tr(t,{props:[D(i,/:(plac\w+)/,":"+M+"input-$1")]}),tr(t,{props:[D(i,/:(plac\w+)/,":"+oi+"$1")]}),tr(t,{props:[D(i,/:(plac\w+)/,he+"input-$1")]})],o)}return""})}},X1=[Y1],K1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var N=v.getAttribute("data-emotion");N.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||X1,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var N=v.getAttribute("data-emotion").split(" "),f=1;f<N.length;f++)i[N[f]]=!0;a.push(v)});var s,u=[H1,Q1];{var p,m=[D1,A1(function(v){p.insert(v)})],h=F1(u.concat(o,m)),x=function(N){return $n(I1(N),h)};s=function(N,f,c,d){p=c,x(N?N+"{"+f.styles+"}":f.styles),d&&(g.inserted[f.name]=!0)}}var g={key:n,sheet:new S1({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return g.sheet.hydrate(a),g},Yd={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,Ts=se?Symbol.for("react.element"):60103,Os=se?Symbol.for("react.portal"):60106,Pi=se?Symbol.for("react.fragment"):60107,ji=se?Symbol.for("react.strict_mode"):60108,Ri=se?Symbol.for("react.profiler"):60114,zi=se?Symbol.for("react.provider"):60109,$i=se?Symbol.for("react.context"):60110,Is=se?Symbol.for("react.async_mode"):60111,Li=se?Symbol.for("react.concurrent_mode"):60111,Ti=se?Symbol.for("react.forward_ref"):60112,Oi=se?Symbol.for("react.suspense"):60113,G1=se?Symbol.for("react.suspense_list"):60120,Ii=se?Symbol.for("react.memo"):60115,Mi=se?Symbol.for("react.lazy"):60116,Z1=se?Symbol.for("react.block"):60121,J1=se?Symbol.for("react.fundamental"):60117,q1=se?Symbol.for("react.responder"):60118,b1=se?Symbol.for("react.scope"):60119;function De(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ts:switch(e=e.type,e){case Is:case Li:case Pi:case Ri:case ji:case Oi:return e;default:switch(e=e&&e.$$typeof,e){case $i:case Ti:case Mi:case Ii:case zi:return e;default:return t}}case Os:return t}}}function Xd(e){return De(e)===Li}A.AsyncMode=Is;A.ConcurrentMode=Li;A.ContextConsumer=$i;A.ContextProvider=zi;A.Element=Ts;A.ForwardRef=Ti;A.Fragment=Pi;A.Lazy=Mi;A.Memo=Ii;A.Portal=Os;A.Profiler=Ri;A.StrictMode=ji;A.Suspense=Oi;A.isAsyncMode=function(e){return Xd(e)||De(e)===Is};A.isConcurrentMode=Xd;A.isContextConsumer=function(e){return De(e)===$i};A.isContextProvider=function(e){return De(e)===zi};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ts};A.isForwardRef=function(e){return De(e)===Ti};A.isFragment=function(e){return De(e)===Pi};A.isLazy=function(e){return De(e)===Mi};A.isMemo=function(e){return De(e)===Ii};A.isPortal=function(e){return De(e)===Os};A.isProfiler=function(e){return De(e)===Ri};A.isStrictMode=function(e){return De(e)===ji};A.isSuspense=function(e){return De(e)===Oi};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pi||e===Li||e===Ri||e===ji||e===Oi||e===G1||typeof e=="object"&&e!==null&&(e.$$typeof===Mi||e.$$typeof===Ii||e.$$typeof===zi||e.$$typeof===$i||e.$$typeof===Ti||e.$$typeof===J1||e.$$typeof===q1||e.$$typeof===b1||e.$$typeof===Z1)};A.typeOf=De;Yd.exports=A;var ey=Yd.exports,Kd=ey,ty={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ny={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gd={};Gd[Kd.ForwardRef]=ty;Gd[Kd.Memo]=ny;var ry=!0;function Zd(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Ms=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||ry===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Jd=function(t,n,r){Ms(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function oy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var iy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ly=/[A-Z]|^ms/g,ay=/_EMO_([^_]+?)_([^]*?)_EMO_/g,qd=function(t){return t.charCodeAt(1)===45},uc=function(t){return t!=null&&typeof t!="boolean"},Cl=U1(function(e){return qd(e)?e:e.replace(ly,"-$&").toLowerCase()}),cc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(ay,function(r,o,i){return it={name:o,styles:i,next:it},o})}return iy[t]!==1&&!qd(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ar(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return it={name:n.name,styles:n.styles,next:it},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)it={name:r.name,styles:r.styles,next:it},r=r.next;var o=n.styles+";";return o}return sy(e,t,n)}case"function":{if(e!==void 0){var i=it,l=n(e);return it=i,Ar(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function sy(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Ar(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":uc(l)&&(r+=Cl(i)+":"+cc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)uc(l[a])&&(r+=Cl(i)+":"+cc(i,l[a])+";");else{var s=Ar(e,t,l);switch(i){case"animation":case"animationName":{r+=Cl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var fc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,it,Ds=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";it=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Ar(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=Ar(r,n,t[a]),o&&(i+=l[a]);fc.lastIndex=0;for(var s="",u;(u=fc.exec(i))!==null;)s+="-"+u[1];var p=oy(i)+s;return{name:p,styles:i,next:it}},uy=function(t){return t()},cy=zl["useInsertionEffect"]?zl["useInsertionEffect"]:!1,bd=cy||uy,Fs={}.hasOwnProperty,ep=k.createContext(typeof HTMLElement<"u"?K1({key:"css"}):null);ep.Provider;var tp=function(t){return k.forwardRef(function(n,r){var o=k.useContext(ep);return t(n,o,r)})},np=k.createContext({}),za="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",fy=function(t,n){var r={};for(var o in n)Fs.call(n,o)&&(r[o]=n[o]);return r[za]=t,r},dy=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Ms(n,r,o),bd(function(){return Jd(n,r,o)}),null},py=tp(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[za],i=[r],l="";typeof e.className=="string"?l=Zd(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=Ds(i,void 0,k.useContext(np));l+=t.key+"-"+a.name;var s={};for(var u in e)Fs.call(e,u)&&u!=="css"&&u!==za&&(s[u]=e[u]);return s.ref=n,s.className=l,k.createElement(k.Fragment,null,k.createElement(dy,{cache:t,serialized:a,isStringTag:typeof o=="string"}),k.createElement(o,s))}),my=py,hy=y.Fragment;function q(e,t,n){return Fs.call(t,"css")?y.jsx(my,fy(e,t),n):y.jsx(e,t,n)}function rp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ds(t)}var _=function(){var t=rp.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},yy=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function vy(e,t,n){var r=[],o=Zd(e,r,n);return r.length<2?n:o+t(r)}var gy=function(t){var n=t.cache,r=t.serializedArr;return bd(function(){for(var o=0;o<r.length;o++)Jd(n,r[o],!1)}),null},El=tp(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];var h=Ds(p,t.registered);return r.push(h),Ms(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,p=new Array(u),m=0;m<u;m++)p[m]=arguments[m];return vy(t.registered,o,yy(p))},l={css:o,cx:i,theme:k.useContext(np)},a=e.children(l);return n=!0,k.createElement(k.Fragment,null,k.createElement(gy,{cache:t,serializedArr:r}),a)}),wy=Object.defineProperty,xy=(e,t,n)=>t in e?wy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ho=(e,t,n)=>(xy(e,typeof t!="symbol"?t+"":t,n),n),$a=new Map,yo=new WeakMap,dc=0,Sy=void 0;function ky(e){return e?(yo.has(e)||(dc+=1,yo.set(e,dc.toString())),yo.get(e)):"0"}function _y(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?ky(e.root):e[t]}`).toString()}function Cy(e){let t=_y(e),n=$a.get(t);if(!n){const r=new Map;let o;const i=new IntersectionObserver(l=>{l.forEach(a=>{var s;const u=a.isIntersecting&&o.some(p=>a.intersectionRatio>=p);e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(p=>{p(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},$a.set(t,n)}return n}function op(e,t,n={},r=Sy){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const s=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:l}=Cy(n);let a=l.get(e)||[];return l.has(e)||l.set(e,a),a.push(t),i.observe(e),function(){a.splice(a.indexOf(t),1),a.length===0&&(l.delete(e),i.unobserve(e)),l.size===0&&(i.disconnect(),$a.delete(o))}}function Ey(e){return typeof e.children!="function"}var pc=class extends k.Component{constructor(e){super(e),ho(this,"node",null),ho(this,"_unobserveCb",null),ho(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ho(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),Ey(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:i}=this.props;this._unobserveCb=op(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:x,entry:g}=this.state;return e({inView:x,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:i,onChange:l,skip:a,trackVisibility:s,delay:u,initialInView:p,fallbackInView:m,...h}=this.props;return k.createElement(t||"div",{ref:this.handleNode,...h},e)}};function ip({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:i,skip:l,initialInView:a,fallbackInView:s,onChange:u}={}){var p;const[m,h]=k.useState(null),x=k.useRef(),[g,v]=k.useState({inView:!!a,entry:void 0});x.current=u,k.useEffect(()=>{if(l||!m)return;let d;return d=op(m,(w,E)=>{v({inView:w,entry:E}),x.current&&x.current(w,E),E.isIntersecting&&i&&d&&(d(),d=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},s),()=>{d&&d()}},[Array.isArray(e)?e.toString():e,m,o,r,i,l,n,s,t]);const N=(p=g.entry)==null?void 0:p.target,f=k.useRef();!m&&N&&!i&&!l&&f.current!==N&&(f.current=N,v({inView:!!a,entry:void 0}));const c=[h,g.inView,g.entry];return c.ref=c[0],c.inView=c[1],c.entry=c[2],c}var lp={exports:{}},U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Fi=Symbol.for("react.strict_mode"),Ai=Symbol.for("react.profiler"),Ui=Symbol.for("react.provider"),Bi=Symbol.for("react.context"),Ny=Symbol.for("react.server_context"),Vi=Symbol.for("react.forward_ref"),Wi=Symbol.for("react.suspense"),Hi=Symbol.for("react.suspense_list"),Qi=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),Py=Symbol.for("react.offscreen"),ap;ap=Symbol.for("react.module.reference");function He(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case As:switch(e=e.type,e){case Di:case Ai:case Fi:case Wi:case Hi:return e;default:switch(e=e&&e.$$typeof,e){case Ny:case Bi:case Vi:case Yi:case Qi:case Ui:return e;default:return t}}case Us:return t}}}U.ContextConsumer=Bi;U.ContextProvider=Ui;U.Element=As;U.ForwardRef=Vi;U.Fragment=Di;U.Lazy=Yi;U.Memo=Qi;U.Portal=Us;U.Profiler=Ai;U.StrictMode=Fi;U.Suspense=Wi;U.SuspenseList=Hi;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return He(e)===Bi};U.isContextProvider=function(e){return He(e)===Ui};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===As};U.isForwardRef=function(e){return He(e)===Vi};U.isFragment=function(e){return He(e)===Di};U.isLazy=function(e){return He(e)===Yi};U.isMemo=function(e){return He(e)===Qi};U.isPortal=function(e){return He(e)===Us};U.isProfiler=function(e){return He(e)===Ai};U.isStrictMode=function(e){return He(e)===Fi};U.isSuspense=function(e){return He(e)===Wi};U.isSuspenseList=function(e){return He(e)===Hi};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Di||e===Ai||e===Fi||e===Wi||e===Hi||e===Py||typeof e=="object"&&e!==null&&(e.$$typeof===Yi||e.$$typeof===Qi||e.$$typeof===Ui||e.$$typeof===Bi||e.$$typeof===Vi||e.$$typeof===ap||e.getModuleId!==void 0)};U.typeOf=He;lp.exports=U;var jy=lp.exports;_`
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
`,$y=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ly=_`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ty=_`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bs=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Oy=_`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Iy=_`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,My=_`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dy=_`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fy=_`
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
`,Uy=_`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function By({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Bs,iterationCount:o=1}){return rp`
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
  `}function Vy(e){return e==null}function Wy(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function sp(e,t){return n=>n?e():t()}function Ur(e){return sp(e,()=>null)}function La(e){return Ur(()=>({opacity:0}))(e)}const Xi=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Bs,triggerOnce:a=!1,className:s,style:u,childClassName:p,childStyle:m,children:h,onVisibilityChange:x}=e,g=k.useMemo(()=>By({keyframes:l,duration:o}),[o,l]);return Vy(h)?null:Wy(h)?q(Qy,{...e,animationStyles:g,children:String(h)}):jy.isFragment(h)?q(up,{...e,animationStyles:g}):q(hy,{children:k.Children.map(h,(v,N)=>{if(!k.isValidElement(v))return null;const f=r+(t?N*o*n:0);switch(v.type){case"ol":case"ul":return q(El,{children:({cx:c})=>q(v.type,{...v.props,className:c(s,v.props.className),style:Object.assign({},u,v.props.style),children:q(Xi,{...e,children:v.props.children})})});case"li":return q(pc,{threshold:i,triggerOnce:a,onChange:x,children:({inView:c,ref:d})=>q(El,{children:({cx:w})=>q(v.type,{...v.props,ref:d,className:w(p,v.props.className),css:Ur(()=>g)(c),style:Object.assign({},m,v.props.style,La(!c),{animationDelay:f+"ms"})})})});default:return q(pc,{threshold:i,triggerOnce:a,onChange:x,children:({inView:c,ref:d})=>q("div",{ref:d,className:s,css:Ur(()=>g)(c),style:Object.assign({},u,La(!c),{animationDelay:f+"ms"}),children:q(El,{children:({cx:w})=>q(v.type,{...v.props,className:w(p,v.props.className),style:Object.assign({},m,v.props.style)})})})})}})})},Hy={display:"inline-block",whiteSpace:"pre"},Qy=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,className:s,style:u,children:p,onVisibilityChange:m}=e,{ref:h,inView:x}=ip({triggerOnce:a,threshold:l,onChange:m});return sp(()=>q("div",{ref:h,className:s,style:Object.assign({},u,Hy),children:p.split("").map((g,v)=>q("span",{css:Ur(()=>t)(x),style:{animationDelay:o+v*i*r+"ms"},children:g},v))}),()=>q(up,{...e,children:p}))(n)},up=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:a}=e,{ref:s,inView:u}=ip({triggerOnce:r,threshold:n,onChange:a});return q("div",{ref:s,className:o,css:Ur(()=>t)(u),style:Object.assign({},i,La(!u)),children:l})};_`
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
`;const Yy=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Xy=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Ky=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Gy=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Zy=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Jy=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,qy=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,by=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,ev=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,tv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,nv=_`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,rv=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ov=_`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function iv(e,t,n){switch(n){case"bottom-left":return t?Xy:zy;case"bottom-right":return t?Ky:$y;case"down":return e?t?Zy:Ty:t?Gy:Ly;case"left":return e?t?qy:Oy:t?Jy:Bs;case"right":return e?t?ev:My:t?by:Iy;case"top-left":return t?tv:Dy;case"top-right":return t?nv:Fy;case"up":return e?t?ov:Uy:t?rv:Ay;default:return t?Yy:Ry}}const yr=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=k.useMemo(()=>iv(t,r,n),[t,n,r]);return q(Xi,{keyframes:i,...o})};_`
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
`;const lv=_`
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
`;const Nl=e=>q(Xi,{keyframes:lv,...e});_`
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
`;const av=_`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,sv=_`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,uv=_`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,cv=_`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,fv=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,dv=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,pv=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,mv=_`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function hv(e,t){switch(t){case"down":return e?fv:av;case"right":return e?pv:uv;case"up":return e?mv:cv;case"left":default:return e?dv:sv}}const yv=e=>{const{direction:t,reverse:n=!1,...r}=e,o=k.useMemo(()=>hv(n,t),[t,n]);return q(Xi,{keyframes:o,...r})};_`
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
`;const vv="_container_yhpbd_1",gv="_quickAccess_yhpbd_55",wv="_content_yhpbd_69",xv="_contact_yhpbd_105",Sv="_location_yhpbd_105",et={container:vv,quickAccess:gv,content:wv,contact:xv,location:Sv},kv=()=>(k.useEffect(Rs),y.jsxs("footer",{className:et.container,children:[y.jsxs("div",{className:et.contact,children:[y.jsx(Nl,{triggerOnce:!0,children:y.jsx("h3",{children:"Contáctanos"})}),y.jsx(yr,{triggerOnce:!0,children:y.jsxs("div",{className:et.content,children:[y.jsxs("a",{href:"https://wa.me/+18296490757",children:[y.jsx("i",{className:`fa-brands fa-whatsapp ${et.whatsapp}`}),"(829) 649-0757"]}),y.jsxs("a",{href:"https://instagram.com/manaclabaseballacademy",target:"_blank",children:[y.jsx("i",{className:`fa-brands fa-instagram ${et.instagram}`}),"@manaclabaseballacademy"]})]})})]}),y.jsxs("div",{className:et.location,children:[y.jsx(Nl,{triggerOnce:!0,children:y.jsx("h3",{children:"Ubicación"})}),y.jsx(yr,{triggerOnce:!0,children:y.jsx("div",{className:et.content,children:y.jsxs("p",{children:[y.jsx("i",{className:`fa-solid fa-location-dot ${et.pin}`}),"Santo Domingo, República Dominicana"]})})})]}),y.jsxs("div",{className:et.quickAccess,children:[y.jsx(Nl,{triggerOnce:!0,children:y.jsx("h3",{children:"Acceso Rápido"})}),y.jsx(yr,{triggerOnce:!0,children:y.jsx("div",{className:et.content,children:y.jsxs("ul",{children:[y.jsx("li",{children:y.jsx("a",{href:"/",children:"Inicio"})}),y.jsx("li",{children:y.jsx("a",{href:"/about",children:"Quienes Somos"})}),y.jsx("li",{children:y.jsx("a",{href:"/trajectory",children:"Trayectoria"})}),y.jsx("li",{children:y.jsx("a",{href:"/contact",children:"Contacto"})})]})})})]})]})),_v="_container_65mjt_1",Cv={container:_v},nr=({Comp:e})=>y.jsxs("div",{className:Cv.container,children:[y.jsx(g1,{}),y.jsx(e,{}),y.jsx(kv,{})]}),Ev="_container_1dch5_1",Nv="_header_1dch5_11",Pv="_mainMedia_1dch5_57",jv="_mainImageContainer_1dch5_99",Rv="_secondSection_1dch5_115",zv="_animatedChild_1dch5_141",$v="_rowReverse_1dch5_183",Lv="_informationPin_1dch5_213",Tv="_pinContainer_1dch5_267",Ov="_name_1dch5_323",cn={container:Ev,header:Nv,mainMedia:Pv,mainImageContainer:jv,secondSection:Rv,animatedChild:zv,rowReverse:$v,informationPin:Lv,pinContainer:Tv,name:Ov},Iv="/assets/main-image-b3d2cbe2.jpg",Mv="/assets/PORTADA-280b7b6a.png",Dv=()=>y.jsxs("div",{className:cn.container,children:[y.jsxs("section",{className:cn.mainMedia,children:[y.jsx("div",{className:cn.mainImageContainer,children:y.jsx("img",{src:Iv,alt:""})}),y.jsxs("div",{className:cn.header,children:[y.jsxs("h1",{children:[y.jsx("span",{className:cn.name,children:"MANACLA"})," BASEBALL ACADEMY"]}),y.jsx("h2",{children:"Academia de las futuras estrellas del baseball"})]})]}),y.jsx("section",{className:cn.secondSection,children:y.jsx("img",{src:Mv,alt:"Portada"})})]});const Fv="_container_43a78_1",Av="_imgContainer_43a78_17",Pl={container:Fv,imgContainer:Av},Uv="/assets/TRAYECTORIA-f45eee44.png",Bv=()=>y.jsx("div",{className:Pl.container,children:y.jsx("div",{className:Pl.secondDiv,children:y.jsx("div",{className:Pl.imgContainer,children:y.jsx("img",{src:Uv,alt:"Imagen de trayectoria"})})})}),Vv="_container_1c87a_1",Wv="_formContainer_1c87a_27",Hv="_gmailButton_1c87a_79",Qv="_wsButton_1c87a_95",Yv="_buttonsContainer_1c87a_127",Xv="_secondDiv_1c87a_139",Kv="_icon_1c87a_153",Gv="_ourMedia_1c87a_175",Zv="_list_1c87a_201",Jv="_socialMedia_1c87a_223",qv="_listTitle_1c87a_241",bv="_instagram_1c87a_249",eg="_liNumber_1c87a_261",tg="_mediaContainer_1c87a_271",ge={container:Vv,formContainer:Wv,gmailButton:Hv,wsButton:Qv,buttonsContainer:Yv,secondDiv:Xv,icon:Kv,ourMedia:Gv,list:Zv,socialMedia:Jv,listTitle:qv,instagram:bv,liNumber:eg,mediaContainer:tg},ng=()=>{const[e,t]=k.useState("");return y.jsxs("div",{className:ge.container,children:[y.jsx("h1",{children:"Contacto"}),y.jsxs("div",{className:ge.secondDiv,children:[y.jsxs("div",{className:ge.ourMedia,children:[y.jsx("h2",{children:"Nuestros medios"}),y.jsx("div",{className:ge.mediaContainer,children:y.jsxs("ul",{className:ge.list,children:[y.jsxs("li",{className:ge.liNumber,children:[y.jsx("span",{className:ge.listTitle,children:"Teléfono:"}),y.jsx("a",{href:"https://wa.me/+18296490757",target:"_blank",className:ge.phone,children:"(829) 649-0757"})]}),y.jsxs("li",{children:[y.jsx("span",{className:ge.listTitle,children:"Redes Sociales:"}),y.jsx("ul",{className:ge.socialMedia,children:y.jsx("li",{children:y.jsxs("a",{className:ge.instagramLink,href:"https://instagram.com/manaclabaseballacademy",target:"_blank",children:[y.jsx("i",{className:`fa-brands fa-instagram ${ge.instagram}`})," @manaclabaseballacademy"]})})})]})]})})]}),y.jsxs("div",{className:ge.formContainer,children:[y.jsx("h2",{children:"Ponte en contacto con nosotros ya"}),y.jsx("form",{action:"",children:y.jsx("textarea",{placeholder:"Escribe tu mensaje aqui!",onChange:n=>t(n.target.value)})}),y.jsx("div",{className:ge.buttonsContainer,children:y.jsxs("a",{className:ge.wsButton,target:"_blank",href:`https://wa.me/+18098648668?text=${e}`,children:[y.jsx("i",{className:"fa-brands fa-whatsapp"}),"Whatsapp"]})})]})]})]})},rg="_container_1ozq8_1",og="_information_1ozq8_19",ig="_media_1ozq8_31",jl={container:rg,information:og,media:ig},lg=()=>y.jsxs("div",{className:jl.container,children:[y.jsx("div",{className:jl.media,children:y.jsx("img",{src:"",alt:"Imagen Sobre Nosotros"})}),y.jsx("div",{className:jl.information,children:y.jsx("p",{children:"Somos un equipo de profesionales dispuestos a contribuir con el desarrollo de jóvenes con deseos de superarse y alcanzar sus sueños en el Baseball, convertirse en en este campo deportivo e impulsarlo a convertirse en jugadores profesionales."})})]}),ag=[{id:1,name:"Alex",lastName:"González",picturePath:"",videoPath:"",description:"Shortstop with exceptional fielding skills and a powerful bat.",year:"2024"},{id:2,name:"Samantha",lastName:"Ramirez",picturePath:"",videoPath:"",description:"Talented pitcher known for her curveball and control on the mound.",year:"2024"},{id:3,name:"Elijah",lastName:"Martinez",picturePath:"",videoPath:"",description:"Outfielder with great speed and a knack for making spectacular catches.",year:"2024"},{id:4,name:"Isabella",lastName:"López",picturePath:"",videoPath:"",description:"Reliable catcher with a strong arm and a keen eye at the plate.",year:"2024"},{id:5,name:"Liam",lastName:"Sanchez",picturePath:"",videoPath:"",description:"Hard-hitting first baseman with a high on-base percentage.",year:"2024"},{id:6,name:"Ava",lastName:"Flores",picturePath:"",videoPath:"",description:"Skilled infielder with a quick release and precise throws.",year:"2025"},{id:7,name:"Noah",lastName:"Rivera",picturePath:"",videoPath:"",description:"Dominant left-handed pitcher with a devastating slider.",year:"2025"},{id:8,name:"Olivia",lastName:"Gutierrez",picturePath:"",videoPath:"",description:"Versatile utility player who can play multiple positions.",year:"2025"},{id:9,name:"William",lastName:"Diaz",picturePath:"",videoPath:"",description:"Reliable relief pitcher with a deceptive changeup.",year:"2025"},{id:10,name:"Sophia",lastName:"Ortiz",picturePath:"",videoPath:"",description:"Power-hitting outfielder known for her home run prowess.",year:"2025"},{id:11,name:"James",lastName:"Hernandez",picturePath:"",videoPath:"",description:"Strong-armed third baseman with quick reflexes.",year:"2026"},{id:12,name:"Emily",lastName:"Vargas",picturePath:"",videoPath:"",description:"Energetic and speedy leadoff hitter with excellent bunting skills.",year:"2026"},{id:13,name:"Benjamin",lastName:"Jimenez",picturePath:"",videoPath:"",description:"Crafty pitcher with an impressive array of off-speed pitches.",year:"2026"},{id:14,name:"Mia",lastName:"Silva",picturePath:"",videoPath:"",description:"Dynamic base-stealer with an aggressive playing style.",year:"2026"},{id:15,name:"Ethan",lastName:"Rojas",picturePath:"",videoPath:"",description:"Reliable closer with a high-velocity fastball.",year:"2026"},{id:16,name:"Amelia",lastName:"Perez",picturePath:"",videoPath:"",description:"Smooth-fielding second baseman with a consistent bat.",year:"2027"},{id:17,name:"Michael",lastName:"Garcia",picturePath:"",videoPath:"",description:"Powerful right fielder with a cannon arm.",year:"2027"},{id:18,name:"Camila",lastName:"Torres",picturePath:"",videoPath:"",description:"Patient hitter with a high on-base percentage.",year:"2027"},{id:19,name:"Alexander",lastName:"Reyes",picturePath:"",videoPath:"",description:"Evasive base-runner with excellent instincts on the bases.",year:"2027"},{id:20,name:"Avery",lastName:"Gomez",picturePath:"",videoPath:"",description:"Reliable starting pitcher with a good mix of pitches.",year:"2027"},{id:21,name:"Evelyn",lastName:"Herrera",picturePath:"",videoPath:"",description:"Agile and quick shortstop known for her diving plays.",year:"2028"},{id:22,name:"Daniel",lastName:"Castillo",picturePath:"",videoPath:"",description:"Consistent contact hitter with gap-to-gap power.",year:"2028"},{id:23,name:"Harper",lastName:"Andrade",picturePath:"",videoPath:"",description:"Reliable left-handed pitcher with pinpoint control.",year:"2028"},{id:24,name:"Sebastian",lastName:"Fernandez",picturePath:"",videoPath:"",description:"Strong and agile center fielder with a great arm.",year:"2028"},{id:25,name:"Luna",lastName:"Mendoza",picturePath:"",videoPath:"",description:"Versatile switch-hitter capable of playing multiple positions.",year:"2028"}],sg="_container_18u23_1",ug="_header_18u23_21",cg="_imgContainer_18u23_35",fg="_video_18u23_55",dg="_secondDiv_18u23_89",pg="_description_18u23_107",fn={container:sg,header:ug,imgContainer:cg,video:fg,secondDiv:dg,description:pg},mg=({player:e})=>y.jsx(yv,{triggerOnce:!0,children:y.jsx(yr,{triggerOnce:!0,delay:5,children:y.jsxs("div",{className:fn.container,children:[y.jsxs("div",{className:fn.secondDiv,children:[y.jsxs("div",{className:fn.header,children:[y.jsx("div",{className:fn.imgContainer,children:y.jsx("img",{src:"",alt:"Imagen Pelotero"})}),y.jsx("h2",{children:`${e.name} ${e.lastName}`})]}),y.jsx("div",{className:fn.description,children:y.jsx(yr,{cascade:!0,damping:.1,children:y.jsx("p",{children:e.description})})})]}),y.jsx("div",{className:fn.video,children:y.jsx("video",{src:""})})]})})}),hg="_container_17fcs_1",yg="_players_17fcs_11",Rl={container:hg,players:yg},vg=()=>{const t=ph().year,n=[];return ag.map(r=>{r.year===t&&n.push(r)}),console.log(n),y.jsxs("div",{className:Rl.container,children:[y.jsxs("h1",{children:["Elegibles ",t]}),y.jsx("div",{className:Rl.players,children:n[0]!==null?n.map(r=>y.jsx(mg,{player:r})):y.jsx("div",{className:Rl.notFound,children:y.jsxs("h2",{children:["No hay elegibles para el ",t]})})})]})};$l.createRoot(document.getElementById("root")).render(y.jsx(_c.StrictMode,{children:y.jsx(Th,{children:y.jsxs(Ph,{children:[y.jsx(dn,{path:"/",Component:()=>y.jsx(nr,{Comp:Dv})}),y.jsx(dn,{path:"/trajectory",Component:()=>y.jsx(nr,{Comp:Bv})}),y.jsx(dn,{path:"/contact",Component:()=>y.jsx(nr,{Comp:ng})}),y.jsx(dn,{path:"/about",Component:()=>y.jsx(nr,{Comp:lg})}),y.jsx(dn,{path:"/players/:year",Component:()=>y.jsx(nr,{Comp:vg})})]})})}));
