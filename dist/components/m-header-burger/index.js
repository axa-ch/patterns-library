var StyleGuideWebComponent=function(){"use strict";var e,t,n,r,o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},i={},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},v=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},b=(e=Object,t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"===("undefined"==typeof Reflect?"undefined":a(Reflect))?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)},function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}),_=function(e){return b(function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),u(n,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in i||(i[e]=0),++i[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}())},g={},m=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,r,i,s);var c=u.preventDefault;return u.preventDefault=function(){c.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function C(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new m(t,c({},r,{detail:n}));return e.dispatchEvent(o)}var O=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),k=/^\s+|\s{2,}|\s+$/g;function w(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function x(e,t){var n=t.className;return t.hasClass||e.push(n),e}function N(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=w(e).test(t);o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}function T(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function E(e,t){var n=w(t,"g");return e.replace(n," ").replace(k," ")}var A=/\s+/,j={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function P(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.capture,s=void 0!==i&&i,u=o.passive,c=void 0===u||u;if(j[t]&&(t=j[t]),!e||!t)return null;var l=void 0===n?"undefined":a(n),p=n&&"string"===l;if("function"===l){if(r){var d=r;s=d.capture,c=d.passive}r=n}for(var f=O?{capture:s,passive:c}:s,h=p?function(t){var o=t.target;for(;!N(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(A),y=v.length,b=0;b<y;++b)e.addEventListener(v[b],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,u=void 0!==s&&s,c=void 0,l=void 0,p=void 0,d=void 0,f=!1,h=t!==u,v=!1!==u;function b(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,h&&(l&&clearTimeout(l),l=setTimeout(_,t)),v&&!p&&(p=setTimeout(g,u)),o&&!f&&(f=!0,d=e.apply(void 0,y(c))),d}return b.flush=function(){(l||p)&&(d=e.apply(void 0,y(c)));return C(),d},b.cancel=C,b;function _(){p&&clearTimeout(p),m()}function g(){l&&clearTimeout(l),m()}function m(){a&&(d=e.apply(void 0,y(c))),l=null,p=null,f=!1}function C(){l&&(clearTimeout(l),l=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var R=window.__subscriptions;function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;R[e]||(R[e]={count:0,queue:[]});var r=R[e].queue;Array.isArray(r)?r.push([e,t,n]):C(n,e,t)}function L(e,t){var n=P(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);R[e]||(R[e]={count:0});var r,o=R[e];return o.count++,o.onsubscribe||(o.onsubscribe=S((r=e,function(){C(document,"pubsub/onsubscribe",r),C(document,"pubsub/onsubscribe/"+r,r),R[r]&&delete R[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete R[e]}}P(document,"pubsub/onsubscribe",function(e){var t=e.detail;R[t]||(R[t]={count:0});var n=R[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=v(e,3),n=t[0],r=t[1],o=t[2];C(o,n,r)}),delete n.queue)});var U,M=function(e,t){return e===t},I=((U=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?U.apply(void 0,arguments):void 0}}}})()(!0),[]);var V=1,q=3,F=8;function z(e,t){var n=e.nodeType,r=e.nodeName;n===V&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,u=null,c=null,l=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],l=p.name,u=p.namespaceURI,c=p.value,!i(l))if(u){var f=p.localName;t.getAttributeNS(u,f||l)!==c&&t.setAttributeNS(u,l,c)}else t.hasAttribute(l)?t.getAttribute(l)!==c&&("null"===c||"undefined"===c?t.removeAttribute(l):t.setAttribute(l,c)):t.setAttribute(l,c);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(l=p.name,u=p.namespaceURI,i(l))continue;u?(l=p.localName||l,e.hasAttributeNS(u,l)||t.removeAttributeNS(u,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==q&&n!==F||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;K(e,t,"checked"),K(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?K(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function K(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var B=3;function W(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(z(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(H(r,n))(o=W(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var u=s;u<t.childNodes.length;u++)if(H(t.childNodes[u],r)){i=t.childNodes[u];break}i?((o=W(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=W(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function H(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===B&&e.nodeValue===t.nodeValue)}var $,Y,G,Z,J=($=Object,Y=$.getPrototypeOf||function(e){return e.__proto__},G=$.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z="object"===("undefined"==typeof Reflect?"undefined":a(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),G(new r,n.prototype)},function(e){var t=Y(e);return G(e,G(function(){return Z(t,arguments,Y(this).constructor)},t))})(function(e){function t(e){var n;s(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var u=f(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="TemplateNoStringReturnException",u}return p(t,e),t}(Error)),X=!!document.createDocumentFragment().children;var Q=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var ne="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function re(){}var oe,ie=0;function ae(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===ie&&(ie++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(ae,t),ie--),t}(n)),e}var se=(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==ne){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=re,n.PropTypes=n,n}()}(oe={exports:{}},oe.exports),oe.exports);Object.keys(se).reduce(ae,se);var ue=se.oneOf(["left","center","right"]),ce=se.oneOf(["left","right"]),le=(se.oneOf(["top","bottom"]),se.oneOf(["up","down"])),pe=se.oneOf(["ok","pending","error","unknown"]),de=se.oneOf(["row","col","rowgroup","colgroup","auto"]),fe=se.oneOfType([se.string,se.number]),he={text:fe,value:se.any,rowspan:fe,colspan:fe,scope:de,align:ue,dense:se.bool},ve={float:ce,strong:se.bool,bold:se.bool},ye=se.oneOfType([se.string,se.number]),be=se.oneOfType([ye,se.shape(c({},he,{sort:le,sortActive:se.bool}))]),_e=se.oneOfType([ye,se.shape(c({},he,ve,{action:se.bool,state:pe}))]),ge=se.oneOfType([ye,se.shape(c({},he,ve))]),me=se.oneOfType([se.arrayOf(be),se.shape({cells:se.arrayOf(be)})]),Ce=se.oneOfType([se.arrayOf(_e),se.shape({cells:se.arrayOf(_e),action:se.bool})]),Oe=se.oneOfType([se.arrayOf(ge),se.shape({cells:se.arrayOf(ge)})]),ke=(se.oneOfType([me,se.arrayOf(me)]),se.oneOfType([Ce,se.arrayOf(Ce)]),se.oneOfType([Oe,se.arrayOf(Oe)]),/[A-Z]/g);function we(e){return e.replace(ke,xe)}function xe(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var Ne=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Te(e,t,n){var r=e;if(n)return function(e,t,n){var r=e;switch(n){case se.string:case se.string.isRequired:return e;case se.bool:case se.bool.isRequired:if(!e||t===e)return!0;case se.number:case se.number.isRequired:case se.object:case se.object.isRequired:case se.array:case se.array.isRequired:default:if(Ne.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return r}(e,t,n);if(e&&t!==e){if(Ne.test(e))try{r=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else r=!0;return r}var Ee=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Ae=/[-_]+/g;function je(e){return e.replace(Ee,Pe)}function Pe(e,t){return 0==+e||Ae.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Se(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[je(t)]);if(r&&!e.hasAttribute(t))return i!==se.bool&&i!==se.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Te(a,t,i)}function Re(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}var De=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Le(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.capture,i=void 0===o||o,a=r.passive,s=void 0===a||a,u=e.ownerDocument.documentElement,c=P(u,t,function(t){var r=t.target;if(!e.contains(r)&&e!==r)return n(t)},{capture:i,passive:s});return De&&(u.style.cursor="pointer"),c}var Ue=Re("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Me="axa-change",Ie="data-prevent-default";((function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var r=!n._lastToggleNode,o=t!==n._lastToggleNode,i=!r&&!o;r?(n._notify(Ue.ENTER,t),n._onInteractive()):o&&n._notify(Ue.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,i&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===Ue.ESCAPE||e.key===Ue.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,r)}return u(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=c({},e.DEFAULTS,n));var r=this._options.containerClass;this._container=r?this._wcNode.querySelector(r):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=P(this._container,Ue.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,r=t.outerClose,o=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=P(e,Ue.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=Le(e,Ue.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=P(e.ownerDocument,Ue.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ie)?Se(e,Ie):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ue.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ve=o(function(e){var t,n;return n=t=function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),n}(),t.version="2.0.1-beta.231",n},function(e){return function(t){function n(){var e,t,r;s(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=L("context/available",r._makeContextReady)},f(r,t)}return p(n,e),u(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,D("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),u(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(){var e,t,r;s(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,i="_"+t,a=n[t],s=r[i];return o||r.shouldUpdateCallback(a,s)?(r.props[t]=a,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},f(r,t)}return p(n,e),u(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=S(function(){return t.updated&&t.updated()},50);var r=this.constructor.observedAttributes;Array.isArray(r)&&r.forEach(function(e){je(e)})}},{key:"connectedCallback",value:function(){var e=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var r=this.constructor.propTypes;t.forEach(function(t){var n=je(t);if(e.hasAttribute(t)){var o=Se(e,t,r[n]);e.props[n]=o}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,r){if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,e,t,r),this.shouldUpdateCallback(r,t)){var o=je(e);if(this.hasAttribute(e)){var i=this.constructor.propTypes;this.props[o]=Te(r,e,i[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==r&&C(this,Me,r,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return n.indexOf(we(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&se.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(we)}}]),n}()},function(e){return function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),u(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=d(e,["template"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,r),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});X||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=r(this.props,this.childrenFragment,this),u=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){u.appendChild(e)});else if(s){if("string"==typeof s)throw new J(this);u.appendChild(s)}if(t)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,u);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(u),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":a(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":a(t)))throw new Error("componentMorph: newTree should be an object");W(t,e)}(this,c),function(){for(var e=void 0;e=I.pop();)delete e.isSameNode;I=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){return s(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),u(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=d(e,["styles"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._styles=r}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()}),qe=(o(Ve,_),o(Ve,function(e){return function(t){function n(){var e,t,r;s(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._appendStyles=function(){n.appendGlobalStyles(r._styles,r.nodeName)},f(r,t)}return p(n,e),u(n,null,[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.uuidv4();if(t&&!g[n]){var r=document.createElement("style"),o=document.createTextNode(t);g[n]=!0,r.appendChild(o),r.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(r)}}}]),n}()},_)(HTMLElement));var Fe=/\n[\s]+$/,ze=/^\n[\s]+/,Ke=/[\s]+$/,Be=/^[\s]+/,We=/[\n\s]+/g,He=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],$e=["code","pre","textarea"];var Ye=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},Ge=function(){var e;return(e=document.createElement("button")).setAttribute("type","button"),e.setAttribute("class","m-header-burger__button js-header-burger__button"),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),s===u-1&&(a=!1,-1===He.indexOf(i)&&-1===$e.indexOf(i)?""===(r=l.nodeValue.replace(ze,"").replace(Ke,"").replace(Fe,"").replace(We," "))?t.removeChild(l):l.nodeValue=r:-1===$e.indexOf(i)&&(o=0===s?"":" ",r=l.nodeValue.replace(ze,o).replace(Be," ").replace(Ke,"").replace(Fe,"").replace(We," "),l.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===He.indexOf(i)&&-1===$e.indexOf(i)?""===(r=l.nodeValue.replace(ze,"").replace(Fe,"").replace(We," "))?t.removeChild(l):l.nodeValue=r:-1===$e.indexOf(i)&&(r=l.nodeValue.replace(Be," ").replace(ze,"").replace(Fe,"").replace(We," "),l.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}}(e,["\n    ",Ye('<axa-icon icon="menu" classes="m-header-burger__icon"></axa-icon>'),"\n\n    ",Ye('<axa-icon icon="cross-gap" classes="m-header-burger__close-icon"></axa-icon>'),"\n  "]),e};function Ze(e){var t=e.ownerDocument;return t.defaultView||t.parentWindow}function Je(e){for(var t=e,n=0;t;)n+=t.offsetTop,t=t.offsetParent;return n}var Xe="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var Qe,et=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,tt=function(){var e=window.requestAnimationFrame||window[et+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),r=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+r)},r);return t=n+r,o}}return e}(),nt=(Qe=(Qe=window.cancelAnimationFrame||window[et+"CancelAnimationFrame"]||window[et+"CancelRequestAnimationFrame"])?Qe.bind(window):function(e){clearTimeout(e)},Re("click","resize","keyup")),rt=function(){function e(t,n){var r=this;s(this,e),this._handleBurgerClick=function(e){e.preventDefault(),r.isOpen?r.close():r.open()},this._handleResize=function(){r.close()},this._handleKeyUp=function(e){var t=e.key,n=e.keyCode;(t===nt.ESCAPE||t===nt.ESC||27===n)&&(e.preventDefault(),r.close())},this.open=function(e){if(!r.isOpen){r.isOpen=!0;var t,n,o,i=Je(r.wcNode);0!==i&&i!==Xe()&&(D("sticky-container/freeze-direction"),t=r.wcNode.parentNode.parentNode.parentNode.parentNode,n=Ze(t),o=Je(t),n.scrollTo(0,o),tt(function(){setTimeout(function(){D("sticky-container/thaw-direction")},50)})),function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=N.apply(void 0,[e].concat(n));if(!0!==o){var i=[].concat(n);Array.isArray(o)&&(i=o.reduce(x,[])),i&&(e.className+=" "+i.join(" "))}}(r.burger,r.options.burgerState),!e&&r._contextNode&&D("header-mobile/open",null,r._contextNode)}},this.close=function(e){r.isOpen&&(r.isOpen=!1,function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=N.apply(void 0,[e].concat(n));if(!1!==o){var i=[].concat(n);if(Array.isArray(o)&&(i=o.reduce(T,[])),i){var a=e.className;e.className=i.reduce(E,a)}}}(r.burger,r.options.burgerState),!e&&r._contextNode&&D("header-mobile/close",null,r._contextNode))},this.wcNode=t,this.options=c({},e.DEFAULTS,n),this.isOpen=!1,this.init()}return u(e,[{key:"init",value:function(){this.burger=this.wcNode.querySelector(this.options.burger),this.on()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=L("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=L("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"on",value:function(){this.off(),this._unBurgerClick=P(this.burger,nt.CLICK,this._handleBurgerClick,{passive:!1}),this._unResize=P(Ze(this.wcNode),nt.RESIZE,this._handleResize),this._unCloseEscape=P(this.wcNode.ownerDocument,nt.KEYUP,this._handleKeyUp,{passive:!1})}},{key:"off",value:function(){this._unBurgerClick&&this._unBurgerClick(),this._unResize&&this._unResize(),this._unCloseEscape&&this._unCloseEscape(),this.offContextEnabled()}},{key:"destroy",value:function(){this.off(),delete this.burger}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();rt.DEFAULTS={burger:".js-header-burger__button",burgerState:"is-burger-open"};var ot,it,at,st=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,qe),u(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-header-burger {\n  display: block; }\n  @media (max-width: 991px) {\n    .m-header-burger {\n      margin-left: auto; }\n      .m-header-search + .m-header-burger {\n        margin-left: 0; } }\n\n.m-header-burger__button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: none;\n  margin-left: 15px;\n  color: #00008f; }\n  .m-header-burger__button:hover, .m-header-burger__button:active, .m-header-burger__button:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (max-width: 991px) {\n    .m-header-burger__button {\n      display: block; } }\n\n.m-header-burger__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor; }\n  .is-burger-open .m-header-burger__icon {\n    display: none; }\n\n.m-header-burger__close-icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  display: none; }\n  .is-burger-open .m-header-burger__close-icon {\n    display: block; }\n",template:Ge}),this.consumeContext("axa-header")}},{key:"connectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-burger",this.burger=new rt(this)}},{key:"disconnectedCallback",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.burger.destroy(),delete this.burger}},{key:"contextCallback",value:function(e){this.burger.contextNode=e}}]),t}();return st.tagName="axa-header-burger",ot=st.tagName,it=st,customElements.get(ot)||customElements.define(ot,it,at),st}();
