var StyleGuideWebComponent=function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},n=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function v(e){if("object"===(void 0===e?"undefined":b(e))&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case p:case i:case s:case a:case d:return e;default:switch(e=e&&e.$$typeof){case c:case f:case u:return e;default:return t}}case y:case h:case o:return t}}}function _(e){return v(e)===p}t.typeOf=v,t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=c,t.ContextProvider=u,t.Element=r,t.ForwardRef=f,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===d||"object"===(void 0===e?"undefined":b(e))&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===u||e.$$typeof===c||e.$$typeof===f)},t.isAsyncMode=function(e){return _(e)||v(e)===l},t.isConcurrentMode=_,t.isContextConsumer=function(e){return v(e)===c},t.isContextProvider=function(e){return v(e)===u},t.isElement=function(e){return"object"===(void 0===e?"undefined":b(e))&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return v(e)===f},t.isFragment=function(e){return v(e)===i},t.isLazy=function(e){return v(e)===y},t.isMemo=function(e){return v(e)===h},t.isPortal=function(e){return v(e)===o},t.isProfiler=function(e){return v(e)===s},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===d}});e(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var f=t(function(e,t){});e(f);f.typeOf,f.AsyncMode,f.ConcurrentMode,f.ContextConsumer,f.ContextProvider,f.Element,f.ForwardRef,f.Fragment,f.Lazy,f.Memo,f.Portal,f.Profiler,f.StrictMode,f.Suspense,f.isValidElementType,f.isAsyncMode,f.isConcurrentMode,f.isContextConsumer,f.isContextProvider,f.isElement,f.isForwardRef,f.isFragment,f.isLazy,f.isMemo,f.isPortal,f.isProfiler,f.isStrictMode,f.isSuspense,t(function(e){e.exports=n});var d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function _(){}_.resetWarningCache=v;var m=t(function(e){e.exports=function(){function e(e,t,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_,resetWarningCache:v};return n.PropTypes=n}()}),g=0;function O(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===g&&(g++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(O,n),g--),n}(n)),e}var k=m;Object.keys(k).reduce(O,k);var x,w,P,T,j=k.oneOf(["left","center","right"]),E=k.oneOf(["left","right"]),N=(k.oneOf(["top","bottom"]),k.oneOf(["up","down"])),A=k.oneOf(["ok","pending","error","unknown"]),S=k.oneOf(["row","col","rowgroup","colgroup","auto"]),R=k.oneOfType([k.string,k.number]),M={text:R,value:k.any,rowspan:R,colspan:R,scope:S,align:j,dense:k.bool},L={float:E,strong:k.bool,bold:k.bool},D=k.oneOfType([k.string,k.number]),F=k.oneOfType([D,k.shape(i({},M,{sort:N,sortActive:k.bool}))]),U=k.oneOfType([D,k.shape(i({},M,L,{action:k.bool,state:A}))]),V=k.oneOfType([D,k.shape(i({},M,L))]),I=k.oneOfType([k.arrayOf(F),k.shape({cells:k.arrayOf(F)})]),$=k.oneOfType([k.arrayOf(U),k.shape({cells:k.arrayOf(U),action:k.bool})]),q=k.oneOfType([k.arrayOf(V),k.shape({cells:k.arrayOf(V)})]),z=(k.oneOfType([I,k.arrayOf(I)]),k.oneOfType([$,k.arrayOf($)]),k.oneOfType([q,k.arrayOf(q)]),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}),W={},K=(x=Object,w=x.getPrototypeOf||function(e){return e.__proto__},P=x.setPrototypeOf||function(e,t){return e.__proto__=t,e},T="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),P(new r,n.prototype)},function(e){var t=w(e);return P(e,P(function(){return T(t,arguments,w(this).constructor)},t))}),H=function(n){return K(function(e){function t(){return c(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,n),a(t,[{key:"init",value:function(){this._id=function(e){return e in W||(W[e]=0),++W[e]}(this.nodeName),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},G={},B=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function J(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new B(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var Y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function Z(e){for(var n=e.className,r=!1,o=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(e).test(n);t?r=!0:o=!1;return{className:e,hasClass:t}});return!(!o&&!r)&&s}function X(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}return!1}var Q=/\s+/,ee={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function te(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,u=void 0===s||s;if(ee[e]&&(e=ee[e]),!n||!e)return null;var c=void 0===r?"undefined":b(r),l=r&&"string"===c;if("function"===c){if(o){var p=o;a=p.capture,u=p.passive}o=r}for(var f=Y?{capture:a,passive:u}:a,d=l?function(e){var t=e.target;for(;!Z(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(Q),y=h.length,v=0;v<y;++v)n.addEventListener(h[v],d,f);return function e(){for(var t=0;t<y;++t)n.removeEventListener(h[t],d,f);X(this,e)}}function ne(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,p=void 0,f=void 0,d=!1,h=o!==u,y=!1!==u;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(l&&clearTimeout(l),l=setTimeout(_,o)),y&&!p&&(p=setTimeout(b,u)),i&&!d&&(d=!0,f=r.apply(void 0,C(c))),f}return v.flush=function(){(l||p)&&(f=r.apply(void 0,C(c)));return g(),f},v.cancel=g,v;function _(){p&&clearTimeout(p),m()}function b(){l&&clearTimeout(l),m()}function m(){a&&(f=r.apply(void 0,C(c))),p=l=null,d=!1}function g(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),c=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var re=window.__subscriptions;function oe(e,t){var n=te(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);re[e]||(re[e]={count:0});var r=re[e];return r.count++,r.onsubscribe||(r.onsubscribe=ne(function(e){return function(){J(document,"pubsub/onsubscribe",e),J(document,"pubsub/onsubscribe/"+e,e),re[e]&&delete re[e].unsubscribe}}(e),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete re[e]}}te(document,"pubsub/onsubscribe",function(e){var t=e.detail;re[t]||(re[t]={count:0});var n=re[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];J(o,n,r)}),delete n.queue)});var ie,ae=function(e,t){return e===t},se=(ie=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ae;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?ie.apply(void 0,arguments):void 0}}}}()(!0),[]);var ue=1,ce=3,le=8;function pe(e,t){var n=e.nodeType;n===ue&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,u=null,c=null,l=null,p=null,f=s.length-1;0<=f;--f)if(p=s[f],l=p.name,u=p.namespaceURI,c=p.value,!i(l))if(u){var d=p.localName;t.getAttributeNS(u,d||l)!==c&&t.setAttributeNS(u,l,c)}else t.hasAttribute(l)?t.getAttribute(l)!==c&&("null"===c||"undefined"===c?t.removeAttribute(l):t.setAttribute(l,c)):t.setAttribute(l,c);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(l=p.name,u=p.namespaceURI,i(l))continue;u?(l=p.localName||l,e.hasAttributeNS(u,l)||t.removeAttributeNS(u,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==ce&&n!==le||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function fe(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,r=t.value;de(e,t,"checked"),de(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?function(e,t){de(e,t,"selected")}(e,t):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,r=0,o=t.firstChild,i=void 0,a=void 0;for(;o;)if("OPTGROUP"===(a=o.nodeName&&o.nodeName.toUpperCase()))o=(i=o).firstChild;else{if("OPTION"===a){if(o.hasAttributeNS(null,"selected")){n=r;break}r+=1}!(o=o.nextSibling)&&i&&(o=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function de(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var he=3;function ye(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(pe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(ve(r,n))(o=ye(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(ve(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=ye(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=ye(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),fe(e,t),t):null:e}function ve(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===he&&e.nodeValue===t.nodeValue)}var _e,be,me,ge,Ce=(_e=Object,be=_e.getPrototypeOf||function(e){return e.__proto__},me=_e.setPrototypeOf||function(e,t){return e.__proto__=t,e},ge="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),me(new r,n.prototype)},function(e){var t=be(e);return me(e,me(function(){return ge(t,arguments,be(this).constructor)},t))})(function(e){function s(e){var t;c(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return r(s,e),s}(Error)),Oe=!!document.createDocumentFragment().children,ke=/[A-Z]/g;function xe(e){return e.replace(ke,we)}function we(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var Pe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Te(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case k.string:case k.string.isRequired:return t;case k.bool:case k.bool.isRequired:if(!t||n===t)return!0;case k.number:case k.number.isRequired:case k.object:case k.object.isRequired:case k.array:case k.array.isRequired:default:if(Pe.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(Pe.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var je=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ee=/[-_]+/g;function Ne(e){return e.replace(je,Ae)}function Ae(e,t){return 0==+e||Ee.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Se(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[Ne(t)]);if(r&&!e.hasAttribute(t))return i!==k.bool&&i!==k.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Te(a,t,i)}var Re=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Me(n,e,r){var t=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=t.capture,i=void 0===o||o,a=t.passive,s=void 0===a||a,u=n.ownerDocument.documentElement,c=te(u,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:i,passive:s});return function(e){Re&&(e.style.cursor="pointer")}(u),c}var Le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),De="axa-change",Fe="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(Le.ENTER,t),i._onInteractive()):r&&i._notify(Le.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Le.ESCAPE||e.key===Le.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return a(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=te(this._container,Le.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,r=t.outerClose,o=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=te(e,Le.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=Me(e,Le.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=te(e.ownerDocument,Le.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Fe)?Se(e,Fe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Le.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ue=z(function(n){var e,t;return t=e=function(e){function t(){return c(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,n),t}(),e.version="2.0.1-beta.263",t},function(t){return function(e){function n(){return c(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,t),a(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=oe("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;re[e]||(re[e]={count:0,queue:[]});var r=re[e].queue;Array.isArray(r)?r.push([e,t,n]):J(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return c(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){return c(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return r(i,t),a(i,[{key:"init",value:function(e){var t=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=ne(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ne(e)})}},{key:"connectedCallback",value:function(){var r=this;if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=Ne(e);if(r.hasAttribute(e)){var n=Se(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var r=Ne(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=Te(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&J(this,De,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(xe(e))}).reduce(function(e,t){var n=e.props,r=e.shouldUpdate,o=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return r||a.shouldUpdateCallback(o,i)?(a.props[t]=o,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected?this.updated&&this.updated():r&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,r=this.props;t&&k.checkPropTypes(t,r,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(xe)}}]),i}()},function(t){return function(e){function u(){return c(this,u),p(this,(u.__proto__||Object.getPrototypeOf(u)).apply(this,arguments))}return r(u,t),a(u,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);l(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Oe||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Ce(this);a.appendChild(i)}if(e)l(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: newTree should be an object");ye(t,e)}(this,s),function(){for(var e=void 0;e=se.pop();)delete e.isSameNode;se=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),u}()},function(t){return function(e){function o(){return c(this,o),p(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return r(o,t),a(o,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=s(e,["styles"]);l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()}),Ve=(z(Ue,H),z(Ue,function(o){return function(e){function n(){return c(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,o),a(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(e&&!G[t]){var n=document.createElement("style"),r=document.createTextNode(e);G[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},H)(HTMLElement));var Ie,$e,qe,ze=/\n[\s]+$/,We=/^\n[\s]+/,Ke=/[\s]+$/,He=/^[\s]+/,Ge=/[\n\s]+/g,Be=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Je=["code","pre","textarea"],Ye=t(function(e){!function(){var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":b(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=s.apply(null,n);o&&e.push(o)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}),Ze=function(e,t){var n,r=e.fluid,o=e.classes,i=void 0===o?"":o;return(n=document.createElement("article")).setAttribute("class",String(Ye({"u-container":!r,"u-container-fluid":r}))+" "+String(i)),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===Be.indexOf(i)&&-1===Je.indexOf(i)?""===(r=l.nodeValue.replace(We,"").replace(Ke,"").replace(ze,"").replace(Ge," "))?t.removeChild(l):l.nodeValue=r:-1===Je.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(We,o).replace(He," ").replace(Ke,"").replace(ze,"").replace(Ge," "),l.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===Be.indexOf(i)&&-1===Je.indexOf(i)?""===(r=l.nodeValue.replace(We,"").replace(ze,"").replace(Ge," "))?t.removeChild(l):l.nodeValue=r:-1===Je.indexOf(i)&&(r=l.nodeValue.replace(He," ").replace(We,"").replace(ze,"").replace(Ge," "),l.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}}(n,[t]),n},Xe=function(e){function t(){return c(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,Ve),a(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".u-container {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto; }\n  @media (min-width: 576px) {\n    .u-container {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .u-container {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .u-container {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .u-container {\n      max-width: 1140px; } }\n\n.u-container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto; }\n\n.o-container {\n  display: block; }\n",template:Ze})}},{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-container"}}]),t}();return Xe.tagName="axa-container",Xe.propTypes={fluid:k.bool,classes:k.string},Ie=Xe.tagName,$e=Xe,customElements.get(Ie)||customElements.define(Ie,$e,qe),Xe}();
