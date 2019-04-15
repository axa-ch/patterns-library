!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";function t(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function e(t,e){return t(e={exports:{}},e.exports),e.exports}var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},a=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},o=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){var n={};for(var o in t)0<=e.indexOf(o)||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},p=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},r=function t(e,n,o,r){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},c=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},n=e(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116;function v(t){if("object"===(void 0===t?"undefined":m(t))&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case p:case i:case s:case a:case f:return t;default:switch(t=t&&t.$$typeof){case u:case d:case c:return t;default:return e}}case y:case h:case r:return e}}}function _(t){return v(t)===p}e.typeOf=v,e.AsyncMode=l,e.ConcurrentMode=p,e.ContextConsumer=u,e.ContextProvider=c,e.Element=o,e.ForwardRef=d,e.Fragment=i,e.Lazy=y,e.Memo=h,e.Portal=r,e.Profiler=s,e.StrictMode=a,e.Suspense=f,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===p||t===s||t===a||t===f||"object"===(void 0===t?"undefined":m(t))&&null!==t&&(t.$$typeof===y||t.$$typeof===h||t.$$typeof===c||t.$$typeof===u||t.$$typeof===d)},e.isAsyncMode=function(t){return _(t)||v(t)===l},e.isConcurrentMode=_,e.isContextConsumer=function(t){return v(t)===u},e.isContextProvider=function(t){return v(t)===c},e.isElement=function(t){return"object"===(void 0===t?"undefined":m(t))&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return v(t)===d},e.isFragment=function(t){return v(t)===i},e.isLazy=function(t){return v(t)===y},e.isMemo=function(t){return v(t)===h},e.isPortal=function(t){return v(t)===r},e.isProfiler=function(t){return v(t)===s},e.isStrictMode=function(t){return v(t)===a},e.isSuspense=function(t){return v(t)===f}});t(n);n.typeOf,n.AsyncMode,n.ConcurrentMode,n.ContextConsumer,n.ContextProvider,n.Element,n.ForwardRef,n.Fragment,n.Lazy,n.Memo,n.Portal,n.Profiler,n.StrictMode,n.Suspense,n.isValidElementType,n.isAsyncMode,n.isConcurrentMode,n.isContextConsumer,n.isContextProvider,n.isElement,n.isForwardRef,n.isFragment,n.isLazy,n.isMemo,n.isPortal,n.isProfiler,n.isStrictMode,n.isSuspense;var d=e(function(t,e){});t(d);d.typeOf,d.AsyncMode,d.ConcurrentMode,d.ContextConsumer,d.ContextProvider,d.Element,d.ForwardRef,d.Fragment,d.Lazy,d.Memo,d.Portal,d.Profiler,d.StrictMode,d.Suspense,d.isValidElementType,d.isAsyncMode,d.isConcurrentMode,d.isContextConsumer,d.isContextProvider,d.isElement,d.isForwardRef,d.isFragment,d.isLazy,d.isMemo,d.isPortal,d.isProfiler,d.isStrictMode,d.isSuspense,e(function(t){t.exports=n});var f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}})()&&Object.assign,Function.call.bind(Object.prototype.hasOwnProperty);function v(){}function _(){}_.resetWarningCache=v;var b,g,O,k,x=e(function(t){t.exports=function(){function t(t,e,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:_,resetWarningCache:v};return n.PropTypes=n}()}),P=e(function(t){!function(){var a={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=void 0===n?"undefined":m(n);if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var r=s.apply(null,n);r&&t.push(r)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):window.classNames=s}()}),w=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}},T={},j=(b=Object,g=b.getPrototypeOf||function(t){return t.__proto__},O=b.setPrototypeOf||function(t,e){return t.__proto__=e,t},k="object"===("undefined"==typeof Reflect?"undefined":m(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),O(new o,n.prototype)},function(t){var e=g(t);return O(t,O(function(){return k(e,arguments,g(this).constructor)},e))}),E=function(n){return j(function(t){function e(){return u(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,n),a(e,[{key:"init",value:function(){this._id=function(t){return t in T||(T[t]=0),++T[t]}(this.nodeName),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}())},N={},A=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(t,o,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},c}}();function S(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new A(e,i({},o,{detail:n}));return t.dispatchEvent(r)}var R=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function M(t){for(var n=t.className,o=!1,r=!0,e=arguments.length,i=Array(1<e?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];var s=i.map(function(t){var e=function(t,e){return new RegExp("^"+t+"$|^"+t+"\\s|\\s"+t+"\\s|\\s"+t+"$",e)}(t).test(n);e?o=!0:r=!1;return{className:t,hasClass:e}});return!(!r&&!o)&&s}function D(t,e){if(!t)return!1;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}return!1}var L=/\s+/,F={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return""}()};function I(n,t,o,r){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,s=e.passive,c=void 0===s||s;if(F[t]&&(t=F[t]),!n||!t)return null;var u=void 0===o?"undefined":m(o),l=o&&"string"===u;if("function"===u){if(r){var p=r;a=p.capture,c=p.passive}r=o}for(var d=R?{capture:a,passive:c}:a,f=l?function(t){var e=t.target;for(;!M(e,o)&&e!==n;)e=e.parentNode;if(e!==n)return r(t,e)}:r,h=t.split(L),y=h.length,v=0;v<y;++v)n.addEventListener(h[v],f,d);return function t(){for(var e=0;e<y;++e)n.removeEventListener(h[e],f,d);D(this,t)}}function U(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,s=t.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,p=void 0,d=void 0,f=!1,h=r!==c,y=!1!==c;function v(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return u=e,h&&(l&&clearTimeout(l),l=setTimeout(_,r)),y&&!p&&(p=setTimeout(m,c)),i&&!f&&(f=!0,d=o.apply(void 0,C(u))),d}return v.flush=function(){(l||p)&&(d=o.apply(void 0,C(u)));return g(),d},v.cancel=g,v;function _(){p&&clearTimeout(p),b()}function m(){l&&clearTimeout(l),b()}function b(){a&&(d=o.apply(void 0,C(u))),p=l=null,f=!1}function g(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var $=window.__subscriptions;function V(t,e){var n=I(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);$[t]||($[t]={count:0});var o=$[t];return o.count++,o.onsubscribe||(o.onsubscribe=U(function(t){return function(){S(document,"pubsub/onsubscribe",t),S(document,"pubsub/onsubscribe/"+t,t),$[t]&&delete $[t].unsubscribe}}(t),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete $[t]}}I(document,"pubsub/onsubscribe",function(t){var e=t.detail;$[e]||($[e]={count:0});var n=$[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=c(t,3),n=e[0],o=e[1],r=e[2];S(r,n,o)}),delete n.queue)});var q,z=function(t,e){return t===e},W=(q=function(){var t;return(t=console).log.apply(t,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:z;return function(){for(var t=arguments.length,o=Array(t),e=0;e<t;e++)o[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,e))?q.apply(void 0,arguments):void 0}}}}()(!0),[]);var K=1,H=3,G=8;function B(t,e){var n=t.nodeType;n===K&&function(t,e){for(var n=e.skipChildren&&e.skipChildren(),o=e.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(t){return n&&r&&-1===o.indexOf(t)},a=e.attributes,s=t.attributes,c=null,u=null,l=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],l=p.name,c=p.namespaceURI,u=p.value,!i(l))if(c){var f=p.localName;e.getAttributeNS(c,f||l)!==u&&e.setAttributeNS(c,l,u)}else e.hasAttribute(l)?e.getAttribute(l)!==u&&("null"===u||"undefined"===u?e.removeAttribute(l):e.setAttribute(l,u)):e.setAttribute(l,u);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(l=p.name,c=p.namespaceURI,i(l))continue;c?(l=p.localName||l,t.hasAttributeNS(c,l)||e.removeAttributeNS(c,l)):t.hasAttributeNS(null,l)||e.removeAttribute(l)}}(t,e),n!==H&&n!==G||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue)}function J(t,e){var n=t.nodeName;"INPUT"===n?function(t,e){var n=t.value,o=e.value;Y(t,e,"checked"),Y(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===n?function(t,e){Y(t,e,"selected")}(t,e):"TEXTAREA"===n?function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e):"SELECT"===n&&function(t,e){var n=-1,o=0,r=e.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}e.selectedIndex=n}(0,e)}function Y(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var Z=3;function X(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(B(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=e.childNodes[s],o=t.childNodes[s-a],n||o;s++)if(o)if(n)if(Q(o,n))(r=X(o,n))!==n&&(e.replaceChild(r,n),a++);else{i=null;for(var c=s;c<e.childNodes.length;c++)if(Q(e.childNodes[c],o)){i=e.childNodes[c];break}i?((r=X(o,i))!==i&&a++,e.insertBefore(r,n)):o.id||n.id?(e.insertBefore(o,n),a++):(r=X(o,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),s--}(t,e),J(t,e),e):null:t}function Q(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===Z&&t.nodeValue===e.nodeValue)}var tt,et,nt,ot,rt=(tt=Object,et=tt.getPrototypeOf||function(t){return t.__proto__},nt=tt.setPrototypeOf||function(t,e){return t.__proto__=e,t},ot="object"===("undefined"==typeof Reflect?"undefined":m(Reflect))?Reflect.construct:function(t,e,n){var o,r=[null];return r.push.apply(r,e),o=t.bind.apply(t,r),nt(new o,n.prototype)},function(t){var e=et(t);return nt(t,nt(function(){return ot(e,arguments,et(this).constructor)},e))})(function(t){function s(t){var e;u(this,s);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=p(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return o(s,t),s}(Error)),it=!!document.createDocumentFragment().children,at=0;function st(t,e){var n=t[e];return"function"==typeof n&&(t[e]=function(e){function n(){return e.apply(void 0,arguments)}return 0===at&&(at++,Object.keys(e).map(function(t){return n[t]=e[t],t}).reduce(st,n),at--),n}(n)),t}var ct=x;Object.keys(ct).reduce(st,ct);var ut=ct.oneOf(["left","center","right"]),lt=ct.oneOf(["left","right"]),pt=(ct.oneOf(["top","bottom"]),ct.oneOf(["up","down"])),dt=ct.oneOf(["ok","pending","error","unknown"]),ft=ct.oneOf(["row","col","rowgroup","colgroup","auto"]),ht=ct.oneOfType([ct.string,ct.number]),yt={text:ht,value:ct.any,rowspan:ht,colspan:ht,scope:ft,align:ut,dense:ct.bool},vt={float:lt,strong:ct.bool,bold:ct.bool},_t=ct.oneOfType([ct.string,ct.number]),mt=ct.oneOfType([_t,ct.shape(i({},yt,{sort:pt,sortActive:ct.bool}))]),bt=ct.oneOfType([_t,ct.shape(i({},yt,vt,{action:ct.bool,state:dt}))]),gt=ct.oneOfType([_t,ct.shape(i({},yt,vt))]),Ct=ct.oneOfType([ct.arrayOf(mt),ct.shape({cells:ct.arrayOf(mt)})]),Ot=ct.oneOfType([ct.arrayOf(bt),ct.shape({cells:ct.arrayOf(bt),action:ct.bool})]),kt=ct.oneOfType([ct.arrayOf(gt),ct.shape({cells:ct.arrayOf(gt)})]),xt=(ct.oneOfType([Ct,ct.arrayOf(Ct)]),ct.oneOfType([Ot,ct.arrayOf(Ot)]),ct.oneOfType([kt,ct.arrayOf(kt)]),/[A-Z]/g);function Pt(t){return t.replace(xt,wt)}function wt(t,e,n){var o=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?o:"-"+o}var Tt=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function jt(e,n,t){var o=e;if(t)return function(e,n,t){var o=e;switch(t){case ct.string:case ct.string.isRequired:return e;case ct.bool:case ct.bool.isRequired:if(!e||n===e)return!0;case ct.number:case ct.number.isRequired:case ct.object:case ct.object.isRequired:case ct.array:case ct.array.isRequired:default:if(Tt.test(e))try{o=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}return o}(e,n,t);if(e&&n!==e){if(Tt.test(e))try{o=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else o=!0;return o}var Et=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Nt=/[-_]+/g;function At(t){return t.replace(Et,St)}function St(t,e){return 0==+t||Nt.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function Rt(t,e,n){var o=1===t.nodeType,r=t.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[At(e)]);if(o&&!t.hasAttribute(e))return i!==ct.bool&&i!==ct.bool.isRequired&&void 0;var a=t.value;return e?a=t.getAttribute(e):e=t.name,a=jt(a,e,i)}var Mt=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Dt(n,t,o){var e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=e.capture,i=void 0===r||r,a=e.passive,s=void 0===a||a,c=n.ownerDocument.documentElement,u=I(c,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return o(t)},{capture:i,passive:s});return function(t){Mt&&(t.style.cursor="pointer")}(c),u}var Lt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=e.length,r={},i=0;i<o;++i){var a=e[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Ft="axa-change",It="data-prevent-default";(function(){function o(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!i._lastToggleNode,o=e!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Lt.ENTER,e),i._onInteractive()):o&&i._notify(Lt.MOVE,e,i._lastToggleNode),i._lastToggleNode=e,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),i._close()},this._handleKeyUp=function(t){(t.key===Lt.ESCAPE||t.key===Lt.ESC||27===t.keyCode)&&(t.preventDefault(),i._close())},this._init(t,e)}return a(o,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=i({},o.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=I(this._container,Lt.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var t=this._container,e=this._options,n=e.closeClass,o=e.outerClose,r=e.escapeClose,i=e.preventDefault;n&&(this._unCloseClick=I(t,Lt.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Dt(t,Lt.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=I(t.ownerDocument,Lt.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(It)?Rt(t,It):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Lt.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o})().DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ut=w(function(n){var t,e;return e=t=function(t){function e(){return u(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,n),e}(),t.version="2.0.1-beta.264",e},function(e){return function(t){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),a(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;e.contextNode&&(clearTimeout(e.timeoutId),e.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),e.unContextEnabled&&e.unContextEnabled(),e.unContextEnabled=V("context/available",e._makeContextReady)}}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;$[t]||($[t]={count:0,queue:[]});var o=$[t].queue;Array.isArray(o)?o.push([t,e,n]):S(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),n}()},function(e){return function(t){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,e),a(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(t.__isPatching=!0,this._lightDOMRefs.push(t),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);e.__isPatching=!0,this._lightDOMRefs=[e],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);e.__isPatching=!0,this._lightDOMRefs=[e],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children).map(function(t){return t.__isPatching=!0,t}),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function i(){return u(this,i),p(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return o(i,e),a(i,[{key:"init",value:function(t){var e=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,t),this._isConnected=!1,this.props={},this.updatedDebounced=U(function(){return e.updated&&e.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(t){At(t)})}},{key:"connectedCallback",value:function(){var o=this;if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var e=At(t);if(o.hasAttribute(t)){var n=Rt(o,t,r[e]);o.props[e]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,t,e,n),this.shouldUpdateCallback(n,e)){var o=At(t);if(this.hasAttribute(t)){var r=this.constructor.propTypes;this.props[o]=jt(n,t,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===t&&null!==n&&S(this,Ft,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(t){var a=this;l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var e=this.constructor.observedAttributes,n=void 0===e?[]:e,o=Object.keys(t).filter(function(t){return-1<n.indexOf(Pt(t))}).reduce(function(t,e){var n=t.props,o=t.shouldUpdate,r=n[e],i=a.props&&a.props[e]?a.props[e]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[e]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:t,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var t=this.constructor,e=t.propTypes,n=t.tagName,o=this.props;e&&ct.checkPropTypes(e,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var t=this.propTypes;return t&&Object.keys(t).map(Pt)}}]),i}()},function(e){return function(t){function c(){return u(this,c),p(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return o(c,e),a(c,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=s(t,["template"]);l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){if(!0===t.__isPatching)return n.childrenFragment.appendChild(t),void delete t.__isPatching;var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});it||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new rt(this);a.appendChild(i)}if(t)l(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":m(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":m(e)))throw new Error("componentMorph: newTree should be an object");X(e,t)}(this,s),function(){for(var t=void 0;t=W.pop();)delete t.isSameNode;W=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),c}()},function(e){return function(t){function r(){return u(this,r),p(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return o(r,e),a(r,[{key:"init",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,o=s(t,["styles"]);l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),r}()}),$t=(w(Ut,E),w(Ut,function(r){return function(t){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,r),a(n,[{key:"init",value:function(t){var e=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,t),this._appendStyles=function(){n.appendGlobalStyles(e._styles,e.nodeName)}}}],[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(t&&!N[e]){var n=document.createElement("style"),o=document.createTextNode(t);N[e]=!0,n.appendChild(o),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),n}()},E));var Vt,qt,zt,Wt=$t(HTMLTableRowElement),Kt=function(t){function e(){return u(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,Wt),a(e,[{key:"init",value:function(){l(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this,{styles:"@media (max-width: 767px) {\n  .m-tr {\n    display: block;\n    padding: 20px 0;\n    border-top: 1px solid #e5e5e5; } }\n\n@media (max-width: 767px) {\n  .m-tr--head {\n    display: none; } }\n\n@media (max-width: 767px) {\n  .m-tr--foot {\n    display: none; } }\n\n.m-tr--dense th,\n.m-tr--dense td {\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n.m-tr--action:hover, .m-tr--action:focus {\n  cursor: pointer; }\n  .m-tr--action:hover .a-th,\n  .m-tr--action:hover .a-td,\n  .m-tr--action:hover td,\n  .m-tr--action:hover th, .m-tr--action:focus .a-th,\n  .m-tr--action:focus .a-td,\n  .m-tr--action:focus td,\n  .m-tr--action:focus th {\n    color: #00008f;\n    border-top-color: #00008f;\n    border-bottom: 1px solid #00008f; }\n    .m-tr--action:hover .a-th:first-child,\n    .m-tr--action:hover .a-td:first-child,\n    .m-tr--action:hover td:first-child,\n    .m-tr--action:hover th:first-child, .m-tr--action:focus .a-th:first-child,\n    .m-tr--action:focus .a-td:first-child,\n    .m-tr--action:focus td:first-child,\n    .m-tr--action:focus th:first-child {\n      border-left-color: #00008f; }\n    .m-tr--action:hover .a-th:last-child,\n    .m-tr--action:hover .a-td:last-child,\n    .m-tr--action:hover td:last-child,\n    .m-tr--action:hover th:last-child, .m-tr--action:focus .a-th:last-child,\n    .m-tr--action:focus .a-td:last-child,\n    .m-tr--action:focus td:last-child,\n    .m-tr--action:focus th:last-child {\n      border-right-color: #00008f; }\n  @media (max-width: 767px) {\n    .m-tr--action:hover, .m-tr--action:focus {\n      margin-left: -1px;\n      margin-right: -1px;\n      padding-top: 19px;\n      padding-bottom: 19px;\n      border: 1px solid #00008f; }\n      .m-tr--action:hover .a-th,\n      .m-tr--action:hover .a-td,\n      .m-tr--action:hover td,\n      .m-tr--action:hover th, .m-tr--action:focus .a-th,\n      .m-tr--action:focus .a-td,\n      .m-tr--action:focus td,\n      .m-tr--action:focus th {\n        border-color: transparent; }\n        .m-tr--action:hover .a-th:first-child, .m-tr--action:hover .a-th:last-child,\n        .m-tr--action:hover .a-td:first-child,\n        .m-tr--action:hover .a-td:last-child,\n        .m-tr--action:hover td:first-child,\n        .m-tr--action:hover td:last-child,\n        .m-tr--action:hover th:first-child,\n        .m-tr--action:hover th:last-child, .m-tr--action:focus .a-th:first-child, .m-tr--action:focus .a-th:last-child,\n        .m-tr--action:focus .a-td:first-child,\n        .m-tr--action:focus .a-td:last-child,\n        .m-tr--action:focus td:first-child,\n        .m-tr--action:focus td:last-child,\n        .m-tr--action:focus th:first-child,\n        .m-tr--action:focus th:last-child {\n          border-color: transparent; } }\n"})}},{key:"willRenderCallback",value:function(){var t=this.props,e=t.classes,n=t.head,o=t.foot,r=t.action,i=t.dense;this.className=P("m-tr",e,{"m-tr--head":n,"m-tr--foot":o,"m-tr--action":r,"m-tr--dense":i})}}]),e}();return Kt.tagName="axa-tr",Kt.builtInTagName="tr",Kt.propTypes={classes:x.string,head:x.bool,foot:x.bool,action:x.bool,dense:x.bool},Vt=Kt.tagName,zt={extends:(qt=Kt).builtInTagName},customElements.get(Vt)||customElements.define(Vt,qt,zt),Kt});
