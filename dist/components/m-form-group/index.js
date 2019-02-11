var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},r=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function d(){}var h=e(function(e){e.exports=function(){function e(e,t,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=d,n.PropTypes=n}()}),v=0;function y(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===v&&(v++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(y,n),v--),n}(n)),e}var m=h;Object.keys(m).reduce(y,m);var g,b,C,k,w=m.oneOf(["left","center","right"]),x=m.oneOf(["left","right"]),T=(m.oneOf(["top","bottom"]),m.oneOf(["up","down"])),A=m.oneOf(["ok","pending","error","unknown"]),N=m.oneOf(["row","col","rowgroup","colgroup","auto"]),E=m.oneOfType([m.string,m.number]),j={text:E,value:m.any,rowspan:E,colspan:E,scope:N,align:w,dense:m.bool},P={float:x,strong:m.bool,bold:m.bool},S=m.oneOfType([m.string,m.number]),R=m.oneOfType([S,m.shape(i({},j,{sort:T,sortActive:m.bool}))]),D=m.oneOfType([S,m.shape(i({},j,P,{action:m.bool,state:A}))]),L=m.oneOfType([S,m.shape(i({},j,P))]),I=m.oneOfType([m.arrayOf(R),m.shape({cells:m.arrayOf(R)})]),U=m.oneOfType([m.arrayOf(D),m.shape({cells:m.arrayOf(D),action:m.bool})]),M=m.oneOfType([m.arrayOf(L),m.shape({cells:m.arrayOf(L)})]),V=(m.oneOfType([I,m.arrayOf(I)]),m.oneOfType([U,m.arrayOf(U)]),m.oneOfType([M,m.arrayOf(M)]),e(function(e){!function(){var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=s.apply(null,n);r&&e.push(r)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()})),q=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},F={},z=(g=Object,b=g.getPrototypeOf||function(e){return e.__proto__},C=g.setPrototypeOf||function(e,t){return e.__proto__=t,e},k="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),C(new o,n.prototype)},function(e){var t=b(e);return C(e,C(function(){return k(t,arguments,b(this).constructor)},t))}),H=function(n){return z(function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),a(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in F||(F[e]=0),++F[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},K={},W=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function $(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new W(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var G=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),B=/^\s+|\s{2,}|\s+$/g;function J(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function Y(e,t){var n=t.className;return t.hasClass||e.push(n),e}function Z(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=J(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function X(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function Q(e,t){var n=J(t,"g");return e.replace(n," ").replace(B," ")}function ee(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}return!1}var te=/\s+/,ne={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function oe(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(ne[e]&&(e=ne[e]),!n||!e)return null;var c=void 0===o?"undefined":_(o),u=o&&"string"===c;if("function"===c){if(r){var p=r;a=p.capture,l=p.passive}r=o}for(var f=G?{capture:a,passive:l}:a,d=u?function(e){var t=e.target;for(;!Z(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(te),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],d,f);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],d,f);ee(this,e)}}function re(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,f=void 0,d=!1,h=r!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(_,r)),v&&!p&&(p=setTimeout(m,l)),i&&!d&&(d=!0,f=o.apply(void 0,O(c))),f}return y.flush=function(){(u||p)&&(f=o.apply(void 0,O(c)));return b(),f},y.cancel=b,y;function _(){p&&clearTimeout(p),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(f=o.apply(void 0,O(c))),p=u=null,d=!1}function b(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,d=!1}}window.__subscriptions=window.__subscriptions||{};var ie=window.__subscriptions;function ae(e,t){var n=oe(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ie[e]||(ie[e]={count:0});var o,r=ie[e];return r.count++,r.onsubscribe||(r.onsubscribe=re((o=e,function(){$(document,"pubsub/onsubscribe",o),$(document,"pubsub/onsubscribe/"+o,o),ie[o]&&delete ie[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete ie[e]}}oe(document,"pubsub/onsubscribe",function(e){var t=e.detail;ie[t]||(ie[t]={count:0});var n=ie[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=l(e,3),n=t[0],o=t[1],r=t[2];$(r,n,o)}),delete n.queue)});var se,le=function(e,t){return e===t},ce=(se=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:le;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?se.apply(void 0,arguments):void 0}}}}()(!0),[]);var ue=1,pe=3,fe=8;function de(e,t){var n=e.nodeType;n===ue&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,f=s.length-1;0<=f;--f)if(p=s[f],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var d=p.localName;t.getAttributeNS(l,d||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==pe&&n!==fe||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue)}function he(e,t){var n=e.nodeName;"INPUT"===n?function(e,t){var n=e.value,o=t.value;ve(e,t,"checked"),ve(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===n?ve(e,t,"selected"):"TEXTAREA"===n?function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t):"SELECT"===n&&function(e,t){var n=-1,o=0,r=t.firstChild,i=void 0,a=void 0;for(;r;)if("OPTGROUP"===(a=r.nodeName&&r.nodeName.toUpperCase()))r=(i=r).firstChild;else{if("OPTION"===a){if(r.hasAttributeNS(null,"selected")){n=o;break}o+=1}!(r=r.nextSibling)&&i&&(r=i.nextSibling,i=null)}t.selectedIndex=n}(0,t)}function ve(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ye=3;function _e(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(de(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(me(o,n))(r=_e(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(me(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=_e(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=_e(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),he(e,t),t):null:e}function me(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ye&&e.nodeValue===t.nodeValue)}var ge,be,Oe,Ce,ke=(ge=Object,be=ge.getPrototypeOf||function(e){return e.__proto__},Oe=ge.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ce="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),Oe(new o,n.prototype)},function(e){var t=be(e);return Oe(e,Oe(function(){return Ce(t,arguments,be(this).constructor)},t))})(function(e){function s(e){var t;c(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error)),we=!!document.createDocumentFragment().children,xe=/[A-Z]/g;function Te(e){return e.replace(xe,Ae)}function Ae(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Ne=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ee(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case m.string:case m.string.isRequired:return t;case m.bool:case m.bool.isRequired:if(!t||n===t)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(Ne.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Ne.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var je=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Pe=/[-_]+/g;function Se(e){return e.replace(je,Re)}function Re(e,t){return 0==+e||Pe.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function De(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Se(t)]);if(o&&!e.hasAttribute(t))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ee(a,t,i)}var Le=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ie(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=oe(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:l});return t=c,Le&&(t.style.cursor="pointer"),u}var Ue=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize","paste"),Me="axa-change",Ve="data-prevent-default",qe=function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Ue.ENTER,t),i._onInteractive()):o&&i._notify(Ue.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Ue.ESCAPE||e.key===Ue.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return a(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=oe(this._container,Ue.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,r=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=oe(e,Ue.CLICK,n,this._handleClose,{passive:!i})),o&&(this._unOuterClick=Ie(e,Ue.CLICK,this._handleClose,{passive:!i})),r&&(this._unCloseEscape=oe(e.ownerDocument,Ue.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ve)?De(e,Ve):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ue.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}();qe.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Fe=q(function(n){var e,t;return t=e=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),t}(),e.version="2.0.1-beta.255",t},function(t){return function(e){function n(){return c(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;t.contextNode&&(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode,e)},10)),t.unContextEnabled&&t.unContextEnabled(),t.unContextEnabled=ae("context/available",t._makeContextReady)}}},{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ie[e]||(ie[e]={count:0,queue:[]});var o=ie[e].queue;Array.isArray(o)?o.push([e,t,n]):$(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(t){return function(e){function n(){return c(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),a(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){return c(this,i),f(this,(i.__proto__||Object.getPrototypeOf(i)).apply(this,arguments))}return p(i,t),a(i,[{key:"init",value:function(e){var t=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=re(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Se(e)})}},{key:"connectedCallback",value:function(){var o=this;if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=Se(e);if(o.hasAttribute(e)){var n=De(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Se(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Ee(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&$(this,Me,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var a=this;u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&u(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this);var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(Te(e))}).reduce(function(e,t){var n=e.props,o=e.shouldUpdate,r=n[t],i=a.props&&a.props[t]?a.props[t]:void 0;return o||a.shouldUpdateCallback(r,i)?(a.props[t]=r,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected?this.updated&&this.updated():o&&!this._isConnected&&console.warn("setProps(): Custom Element not connected and props never update",this)}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName,o=this.props;t&&m.checkPropTypes(t,o,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Te)}}]),i}()},function(t){return function(e){function l(){return c(this,l),f(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return p(l,t),a(l,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=s(e,["template"]);u(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});we||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new ke(this);a.appendChild(i)}if(e)u(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");_e(t,e)}(this,s),function(){for(var e=void 0;e=ce.pop();)delete e.isSameNode;ce=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function r(){return c(this,r),f(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,t),a(r,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=s(e,["styles"]);u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&u(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()}),ze=(q(Fe,H),q(Fe,function(r){return function(e){function n(){return c(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,r),a(n,[{key:"init",value:function(e){var t=this;u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._appendStyles=function(){n.appendGlobalStyles(t._styles,t.nodeName)}}}],[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(e&&!K[t]){var n=document.createElement("style"),o=document.createTextNode(e);K[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),n}()},H)(HTMLElement));var He,Ke=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,We=function(){var e=window.requestAnimationFrame||window[Ke+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var r=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-r)),o=setTimeout(function(){e(t+n)},n);return r=t+n,o}}return e}(),$e=(He=(He=window.cancelAnimationFrame||window[Ke+"CancelAnimationFrame"]||window[Ke+"CancelRequestAnimationFrame"])?He.bind(window):function(e){clearTimeout(e)},function(e){function o(e,t){c(this,o),t=i({},o.DEFAULTS,t);var n=f(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.toggleState=function(){n.isOpen?n.close():n.open()},n.handleTransitionEnd=function(e){"height"===e.propertyName&&(e.target.style.height="",n.offInteractive())},n.handleToggleClick=function(){n.toggleState()},n.isOpen=!1,n.options=t,n.wcNode=e,n.init(),n}return p(o,qe),a(o,[{key:"init",value:function(){this.toggle=this.wcNode.querySelector(this.options.toggle),this.info=this.wcNode.querySelector(this.options.info),this.on()}},{key:"on",value:function(){this.off(),this.offToggleClicked=oe(this.toggle,"click",this.handleToggleClick)}},{key:"off",value:function(){this.offToggleClicked&&this.offToggleClicked()}},{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=oe(this.info,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"open",value:function(){var e=this.wcNode,t=e.lastElementChild;if(!this.isOpen){this.isOpen=!0,t.style.overflow="scroll";var n=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=n+"px",function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=Z.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(Y,[])),i&&(e.className+=" "+i.join(" "))}}(e,this.options.isOpen)}}},{key:"close",value:function(){var e=this,t=this.wcNode,n=t.lastElementChild,o=n.scrollHeight;this.isOpen&&(this.isOpen=!1,this.offInteractive(),We(function(){n.style.height=o+"px",We(function(){!function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=Z.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(X,[])),i){var a=e.className;e.className=i.reduce(Q,a)}}}(t,e.options.isOpen),n.style.height=0})}))}},{key:"destroy",value:function(){u(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"destroy",this).call(this),this.off(),this.offInteractive(),delete this.wcNode,delete this.options}}]),o}());$e.DEFAULTS={containerClass:!1,toggle:".js-form-group-info__toggle",info:".js-form-group__info",legendIconWrapper:".js-form-group__legend-icon-wrapper",isOpen:"is-form-group-info-open"};var Ge=/\n[\s]+$/,Be=/^\n[\s]+/,Je=/[\s]+$/,Ye=/^[\s]+/,Ze=/[\n\s]+/g,Xe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Qe=["code","pre","textarea"],et=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===Xe.indexOf(i)&&-1===Qe.indexOf(i)?""===(o=u.nodeValue.replace(Be,"").replace(Je,"").replace(Ge,"").replace(Ze," "))?t.removeChild(u):u.nodeValue=o:-1===Qe.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(Be,r).replace(Ye," ").replace(Je,"").replace(Ge,"").replace(Ze," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===Xe.indexOf(i)&&-1===Qe.indexOf(i)?""===(o=u.nodeValue.replace(Be,"").replace(Ge,"").replace(Ze," "))?t.removeChild(u):u.nodeValue=o:-1===Qe.indexOf(i)&&(o=u.nodeValue.replace(Ye," ").replace(Be,"").replace(Ge,"").replace(Ze," "),u.nodeValue=o));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}};var tt=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)};function nt(e,t){var n,o,r,i,a,s,l,c=e.legend,u=void 0===c?"":c,p=e.info,f=void 0===p?"":p,d=e.error,h=void 0===d?"":d,v=tt('<axa-icon icon="info-open" classes="m-form-group__icon m-form-group__icon--open"></axa-icon>'),y=tt('<axa-icon icon="info-close" classes="m-form-group__icon m-form-group__icon--close"></axa-icon>');return[(a=document.createElement("fieldset"),a.setAttribute("class","m-form-group__fieldset m-form-group__fieldset"),et(a,["\n        ",(r=document.createElement("div"),r.setAttribute("class","m-form-group__legend-icon-wrapper js-form-group__legend-icon-wrapper"),et(r,["\n          ",(n=document.createElement("legend"),n.setAttribute("class","m-form-group__legend"),et(n,["\n            ",u,"\n          "]),n),"\n          ",(o=document.createElement("a"),o.setAttribute("tabindex","0"),o.setAttribute("role","button"),o.setAttribute("class","m-form-group__info-button js-form-group-info__toggle"),et(o,["\n          ",y,"\n          ",v,"\n          "]),o),"\n        "]),r),"\n\n        ",t,"\n        ",(i=document.createElement("span"),i.setAttribute("class","m-form-group__error"),et(i,[h]),i),"\n      "]),a),(l=document.createElement("div"),l.setAttribute("class","m-form-group__info js-form-group__info"),et(l,["\n          ",(s=document.createElement("div"),s.setAttribute("class","m-form-group__info-content"),et(s,[f]),s),"\n      "]),l)]}var ot,rt,it,at=function(e){function t(){return c(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,ze),a(t,[{key:"init",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-form-group {\n  display: block; }\n  .m-form-group:not(:first-child) {\n    margin-top: 15px; }\n    @media (min-width: 768px) {\n      .m-form-group:not(:first-child) {\n        margin-top: 20px; } }\n\n.m-form-group__fieldset {\n  display: block; }\n\n.m-form-group--info .m-form-group__legend {\n  margin-right: 8px; }\n\n.m-form-group--info .m-form-group__info-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.m-form-group--error .m-form-group__error {\n  display: block; }\n\n.m-form-group__legend-icon-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.m-form-group__error {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin: 4px 0;\n  display: none;\n  color: #c91432; }\n  @media (min-width: 576px) {\n    .m-form-group__error {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.m-form-group__legend {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  @media (min-width: 576px) {\n    .m-form-group__legend {\n      font-size: 16px; } }\n\n.m-form-group__info-button {\n  background: transparent;\n  border: none;\n  display: none;\n  margin: 0;\n  margin-right: -1px;\n  padding: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  cursor: pointer; }\n  .m-form-group__info-button:hover, .m-form-group__info-button:active, .m-form-group__info-button:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-form-group__icon {\n  display: block;\n  height: 16px;\n  width: 16px;\n  fill: #00008f; }\n\n.m-form-group__icon--open {\n  display: block; }\n\n.m-form-group__icon--close {\n  display: none; }\n\n.m-form-group__info {\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease; }\n\n.m-form-group__info-content {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding: 20px;\n  color: #fff;\n  background-color: #2425aa;\n  -webkit-box-shadow: inset 0 0 15px #00008f;\n          box-shadow: inset 0 0 15px #00008f; }\n  @media (min-width: 576px) {\n    .m-form-group__info-content {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.is-form-group-info-open .m-form-group__info {\n  height: auto; }\n\n.is-form-group-info-open .m-form-group__icon--close {\n  display: block; }\n\n.is-form-group-info-open .m-form-group__icon--open {\n  display: none; }\n",template:nt})}},{key:"willRenderCallback",value:function(){var e=this.props,t=e.info,n=e.error;this.className=V(this.initialClassName,"m-form-group",{"m-form-group--info":t,"m-form-group--error":n})}},{key:"didRenderCallback",value:function(){this.interaction&&this.interaction.destroy(),this.interaction=new $e(this)}},{key:"disconnectedCallback",value:function(){u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return at.tagName="axa-form-group",at.propTypes={legend:m.string,info:m.string,error:m.string},ot=at.tagName,rt=at,customElements.get(ot)||customElements.define(ot,rt,it),at}();
