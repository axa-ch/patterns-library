var StyleGuideWebComponent=function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},r=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},n=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function v(e){if("object"===(void 0===e?"undefined":b(e))&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case p:case i:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case u:case d:case c:return e;default:return t}}case y:case h:case r:return t}}}function _(e){return v(e)===p}t.typeOf=v,t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=o,t.ForwardRef=d,t.Fragment=i,t.Lazy=y,t.Memo=h,t.Portal=r,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===f||"object"===(void 0===e?"undefined":b(e))&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===c||e.$$typeof===u||e.$$typeof===d)},t.isAsyncMode=function(e){return _(e)||v(e)===l},t.isConcurrentMode=_,t.isContextConsumer=function(e){return v(e)===u},t.isContextProvider=function(e){return v(e)===c},t.isElement=function(e){return"object"===(void 0===e?"undefined":b(e))&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===i},t.isLazy=function(e){return v(e)===y},t.isMemo=function(e){return v(e)===h},t.isPortal=function(e){return v(e)===r},t.isProfiler=function(e){return v(e)===s},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===f}});e(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var d=t(function(e,t){});e(d);d.typeOf,d.AsyncMode,d.ConcurrentMode,d.ContextConsumer,d.ContextProvider,d.Element,d.ForwardRef,d.Fragment,d.Lazy,d.Memo,d.Portal,d.Profiler,d.StrictMode,d.Suspense,d.isValidElementType,d.isAsyncMode,d.isConcurrentMode,d.isContextConsumer,d.isContextProvider,d.isElement,d.isForwardRef,d.isFragment,d.isLazy,d.isMemo,d.isPortal,d.isProfiler,d.isStrictMode,d.isSuspense,t(function(e){e.exports=n});var f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function _(){}_.resetWarningCache=v;var m=t(function(e){e.exports=function(){function e(e,t,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_,resetWarningCache:v};return n.PropTypes=n}()}),g=0;function O(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===g&&(g++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(O,n),g--),n}(n)),e}var k=m;Object.keys(k).reduce(O,k);var x,w,P,E,T=k.oneOf(["left","center","right"]),j=k.oneOf(["left","right"]),A=(k.oneOf(["top","bottom"]),k.oneOf(["up","down"])),S=k.oneOf(["ok","pending","error","unknown"]),N=k.oneOf(["row","col","rowgroup","colgroup","auto"]),M=k.oneOfType([k.string,k.number]),R={text:M,value:k.any,rowspan:M,colspan:M,scope:N,align:T,dense:k.bool},L={float:j,strong:k.bool,bold:k.bool},D=k.oneOfType([k.string,k.number]),F=k.oneOfType([D,k.shape(i({},R,{sort:A,sortActive:k.bool}))]),U=k.oneOfType([D,k.shape(i({},R,L,{action:k.bool,state:S}))]),V=k.oneOfType([D,k.shape(i({},R,L))]),I=k.oneOfType([k.arrayOf(F),k.shape({cells:k.arrayOf(F)})]),$=k.oneOfType([k.arrayOf(U),k.shape({cells:k.arrayOf(U),action:k.bool})]),q=k.oneOfType([k.arrayOf(V),k.shape({cells:k.arrayOf(V)})]),z=(k.oneOfType([I,k.arrayOf(I)]),k.oneOfType([$,k.arrayOf($)]),k.oneOfType([q,k.arrayOf(q)]),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}),H={},W=(x=Object,w=x.getPrototypeOf||function(e){return e.__proto__},P=x.setPrototypeOf||function(e,t){return e.__proto__=t,e},E="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),P(new o,n.prototype)},function(e){var t=w(e);return P(e,P(function(){return E(t,arguments,w(this).constructor)},t))}),K=function(n){return W(function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),a(t,[{key:"init",value:function(){this._id=function(e){return e in H||(H[e]=0),++H[e]}(this.nodeName),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},B={},G=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function Y(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new G(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var Z=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function J(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=function(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function X(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}return!1}var Q=/\s+/,ee={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function te(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(ee[e]&&(e=ee[e]),!n||!e)return null;var u=void 0===o?"undefined":b(o),l=o&&"string"===u;if("function"===u){if(r){var p=r;a=p.capture,c=p.passive}r=o}for(var d=Z?{capture:a,passive:c}:a,f=l?function(e){var t=e.target;for(;!J(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(Q),y=h.length,v=0;v<y;++v)n.addEventListener(h[v],f,d);return function e(){for(var t=0;t<y;++t)n.removeEventListener(h[t],f,d);X(this,e)}}function ne(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,p=void 0,d=void 0,f=!1,h=r!==c,y=!1!==c;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,h&&(l&&clearTimeout(l),l=setTimeout(_,r)),y&&!p&&(p=setTimeout(b,c)),i&&!f&&(f=!0,d=o.apply(void 0,C(u))),d}return v.flush=function(){(l||p)&&(d=o.apply(void 0,C(u)));return g(),d},v.cancel=g,v;function _(){p&&clearTimeout(p),m()}function b(){l&&clearTimeout(l),m()}function m(){a&&(d=o.apply(void 0,C(u))),p=l=null,f=!1}function g(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var oe=window.__subscriptions;function re(e,t){var n=te(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);oe[e]||(oe[e]={count:0});var o=oe[e];return o.count++,o.onsubscribe||(o.onsubscribe=ne(function(e){return function(){Y(document,"pubsub/onsubscribe",e),Y(document,"pubsub/onsubscribe/"+e,e),oe[e]&&delete oe[e].unsubscribe}}(e),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete oe[e]}}te(document,"pubsub/onsubscribe",function(e){var t=e.detail;oe[t]||(oe[t]={count:0});var n=oe[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],r=t[2];Y(r,n,o)}),delete n.queue)});var ie,ae=function(e,t){return e===t},se=(ie=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ae;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?ie.apply(void 0,arguments):void 0}}}}()(!0),[]);var ce=1,ue=3,le=8;function pe(e,t){var n=e.nodeType;n===ce&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,u=null,l=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var f=p.localName;t.getAttributeNS(c,f||l)!==u&&t.setAttributeNS(c,l,u)}else t.hasAttribute(l)?t.getAttribute(l)!==u&&("null"===u||"undefined"===u?t.removeAttribute(l):t.setAttribute(l,u)):t.setAttribute(l,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,e.hasAttributeNS(c,l)||t.removeAttributeNS(c,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==ue&&n!==le||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function de(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;fe(e,t,"checked"),fe(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?function(e,t){fe(e,t,"selected")}(e,t):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,r=t.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function fe(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var he=3;function ye(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(pe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(ve(o,n))(r=ye(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(ve(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=ye(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ye(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),de(e,t),t):null:e}function ve(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===he&&e.nodeValue===t.nodeValue)}var _e,be,me,ge,Ce=(_e=Object,be=_e.getPrototypeOf||function(e){return e.__proto__},me=_e.setPrototypeOf||function(e,t){return e.__proto__=t,e},ge="object"===("undefined"==typeof Reflect?"undefined":b(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),me(new o,n.prototype)},function(e){var t=be(e);return me(e,me(function(){return ge(t,arguments,be(this).constructor)},t))})(function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return o(s,e),s}(Error)),Oe=!!document.createDocumentFragment().children,ke=/[A-Z]/g;function xe(e){return e.replace(ke,we)}function we(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Pe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ee(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case k.string:case k.string.isRequired:return t;case k.bool:case k.bool.isRequired:if(!t||n===t)return!0;case k.number:case k.number.isRequired:case k.object:case k.object.isRequired:case k.array:case k.array.isRequired:default:if(Pe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Pe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var Te=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,je=/[-_]+/g;function Ae(e){return e.replace(Te,Se)}function Se(e,t){return 0==+e||je.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ne(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Ae(t)]);if(o&&!e.hasAttribute(t))return i!==k.bool&&i!==k.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ee(a,t,i)}var Me=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Re(n,e,o){var t=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=t.capture,i=void 0===r||r,a=t.passive,s=void 0===a||a,c=n.ownerDocument.documentElement,u=te(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:i,passive:s});return function(e){Me&&(e.style.cursor="pointer")}(c),u}var Le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),De="axa-change",Fe="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Le.ENTER,t),i._onInteractive()):o&&i._notify(Le.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Le.ESCAPE||e.key===Le.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return a(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=te(this._container,Le.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,r=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=te(e,Le.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Re(e,Le.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=te(e.ownerDocument,Le.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Fe)?Ne(e,Fe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Le.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ue=z(function(n){var e,t;return t=e=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),t}(),e.version="2.0.1-beta.264",t},function(t){return function(e){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),a(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=re("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;oe[e]||(oe[e]={count:0,queue:[]});var o=oe[e].queue;Array.isArray(o)?o.push([e,t,n]):Y(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(e.__isPatching=!0,this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);t.__isPatching=!0,this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children).map(function(e){return e.__isPatching=!0,e}),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){return u(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return o(i,t),a(i,[{key:"init",value:function(e){var t=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=ne(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ae(e)})}},{key:"connectedCallback",value:function(){var o=this;if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=Ae(e);if(o.hasAttribute(e)){var n=Ne(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Ae(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Ee(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&Y(this,De,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(xe(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,r=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[t]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&k.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(xe)}}]),i}()},function(t){return function(e){function c(){return u(this,c),p(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return o(c,t),a(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){if(!0===e.__isPatching)return n.childrenFragment.appendChild(e),void delete e.__isPatching;var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Oe||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Ce(this);a.appendChild(i)}if(e)l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: newTree should be an object");ye(t,e)}(this,s),function(){for(var e=void 0;e=se.pop();)delete e.isSameNode;se=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function r(){return u(this,r),p(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return o(r,t),a(r,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=s(e,["styles"]);l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()}),Ve=(z(Ue,K),z(Ue,function(r){return function(e){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,r),a(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(e&&!B[t]){var n=document.createElement("style"),o=document.createTextNode(e);B[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},K)(HTMLElement));var Ie=/\n[\s]+$/,$e=/^\n[\s]+/,qe=/[\s]+$/,ze=/^[\s]+/,He=/[\n\s]+/g,We=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ke=["code","pre","textarea"],Be=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),l=u),s===c-1&&(a=!1,-1===We.indexOf(i)&&-1===Ke.indexOf(i)?""===(o=l.nodeValue.replace($e,"").replace(qe,"").replace(Ie,"").replace(He," "))?t.removeChild(l):l.nodeValue=o:-1===Ke.indexOf(i)&&(r=0===s?"":" ",o=l.nodeValue.replace($e,r).replace(ze," ").replace(qe,"").replace(Ie,"").replace(He," "),l.nodeValue=o));else if(u&&u.nodeType){a&&(a=!1,-1===We.indexOf(i)&&-1===Ke.indexOf(i)?""===(o=l.nodeValue.replace($e,"").replace(Ie,"").replace(He," "))?t.removeChild(l):l.nodeValue=o:-1===Ke.indexOf(i)&&(o=l.nodeValue.replace(ze," ").replace($e,"").replace(Ie,"").replace(He," "),l.nodeValue=o));var p=u.nodeName;p&&(i=p.toLowerCase()),t.appendChild(u)}}}},Ge=function(e,t){var n,o,r,i,a,s=e.open;return(a=document.createElement("article")).setAttribute("tabindex","0"),a.setAttribute("class","js-modal m-modal "+String(s?"":"m-modal--hidden")),Be(a,["\n    ",(i=document.createElement("div"),i.setAttribute("class","m-modal__content js-modal__content"),Be(i,["\n      ",(o=document.createElement("button"),o.setAttribute("class","js-modal-close-button m-modal__close-button"),Be(o,[(n=document.createElement("axa-icon"),n.setAttribute("icon","cross-gap"),n)]),o),"\n      ",(r=document.createElement("div"),Be(r,[t]),r),"\n    "]),i),"\n  "]),a};var Ye,Ze,Je,Xe=function(e){function i(){return u(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return o(i,Ve),a(i,[{key:"closeModal",value:function(){this.removeAttribute("open")}},{key:"closeModalByClickingOutside",value:function(e){e.target===this.querySelector(".js-modal")&&this.closeModal()}},{key:"closeModalOnEsc",value:function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||this.closeModal()}},{key:"init",value:function(){l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,{styles:".m-modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 2147483647;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: #fff; }\n  @media (min-width: 768px) {\n    .m-modal {\n      background-color: black;\n      background-color: rgba(0, 0, 0, 0.4); } }\n\n.m-modal--hidden {\n  display: none; }\n\n.m-modal__content {\n  position: relative;\n  margin: auto;\n  padding: 20px;\n  width: 100%;\n  min-height: 100%;\n  max-width: 800px;\n  background-color: #fff;\n  text-align: center; }\n  @media (min-width: 768px) {\n    .m-modal__content {\n      margin-top: 20vh;\n      width: 80vw;\n      min-height: auto;\n      border: 1px solid #888; } }\n  @media (min-width: 992px) {\n    .m-modal__content {\n      margin-top: 20vh;\n      min-height: auto;\n      width: 70vw; } }\n\n.m-modal__close-button {\n  position: absolute;\n  right: 20px;\n  color: #00008f; }\n\n.m-modal__close-button:hover,\n.m-modal__close-button:focus {\n  color: #00005b; }\n\nbutton.m-modal__close-button {\n  background: transparent;\n  border: none;\n  width: 30px;\n  height: 30px; }\n  button.m-modal__close-button:hover, button.m-modal__close-button:active, button.m-modal__close-button:focus {\n    outline: none;\n    cursor: pointer; }\n",template:Ge})}},{key:"connectedCallback",value:function(){var t=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this.style.removeProperty("display"),this.closeModalOnEscFunction=function(e){return t.closeModalOnEsc(e)};var n=function(){return t.closeModal()},e=this.querySelectorAll("axa-button[data-modal-close]"),o=Array.from(e);o&&o.length&&o.forEach(function(e){return e.addEventListener("click",n)}),this.onEscReleased=te(document,Le.KEYUP,this.closeModalOnEscFunction),this.addEventListener("click",function(e){return t.closeModalByClickingOutside(e)}),this.querySelector(".js-modal-close-button").addEventListener("click",n)}},{key:"disconnectedCallback",value:function(){this.onEscReleased()}},{key:"didRenderCallback",value:function(){for(var e,t=this,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];(e=l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"didRenderCallback",this)).call.apply(e,[this].concat(o)),this._setMarginTop(),this._unResize&&this._unResize(),this._unResize=te(function(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}(this),Le.RESIZE,ne(function(){t._setMarginTop()},300))}},{key:"_setMarginTop",value:function(){var e=this.querySelector(".js-modal .js-modal__content"),t=e.offsetHeight,n=e.style,o=Math.max(document.documentElement.clientHeight,window.innerHeight||0);if(t&&o){var r=(o-t)/2;n.marginTop=0<r?r+"px":"0px"}}},{key:"open",set:function(e){this.setAttribute("open",e)},get:function(){return this.getAttribute("open")}}],[{key:"observedAttributes",get:function(){return["open"]}}]),i}();return Xe.tagName="axa-modal",Xe.propTypes={open:k.bool},Ye=Xe.tagName,Ze=Xe,customElements.get(Ye)||customElements.define(Ye,Ze,Je),Xe}();
