var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},d=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},o=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(){}var v=e(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=f,n.PropTypes=n}()}),y=0;function g(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===y&&(y++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(g,n),y--),n}(n)),e}var b=v;Object.keys(b).reduce(g,b);var m=b.oneOf(["left","center","right"]),w=b.oneOf(["left","right"]);function O(r){function e(e,t,n){return null==e[t]?null:r(e,t,n)}return e.isRequired=r,e}var k=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;O(function(e,t,n){if(!k.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});b.oneOf(["top","bottom"]);var A=b.oneOf(["up","down"]),x=b.oneOf(["ok","pending","error","unknown"]),E=b.oneOf(["row","col","rowgroup","colgroup","auto"]),N=b.oneOfType([b.string,b.number]),T={text:N,value:b.any,rowspan:N,colspan:N,scope:E,align:m,dense:b.bool},j={float:w,strong:b.bool,bold:b.bool},P=b.oneOfType([b.string,b.number]),S=b.oneOfType([P,b.shape(i({},T,{sort:A,sortActive:b.bool}))]),R=b.oneOfType([P,b.shape(i({},T,j,{action:b.bool,state:x}))]),D=b.oneOfType([P,b.shape(i({},T,j))]),I=b.oneOfType([b.arrayOf(S),b.shape({cells:b.arrayOf(S)})]),L=b.oneOfType([b.arrayOf(R),b.shape({cells:b.arrayOf(R),action:b.bool})]),U=b.oneOfType([b.arrayOf(D),b.shape({cells:b.arrayOf(D)})]);b.oneOfType([I,b.arrayOf(I)]),b.oneOfType([L,b.arrayOf(L)]),b.oneOfType([U,b.arrayOf(U)]);var M,V,q,F,H=O(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},K={},W=(M=Object,V=M.getPrototypeOf||function(e){return e.__proto__},q=M.setPrototypeOf||function(e,t){return e.__proto__=t,e},F="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),q(new r,n.prototype)},function(e){var t=V(e);return q(e,q(function(){return F(t,arguments,V(this).constructor)},t))}),X=function(n){return W(function(e){function t(){return c(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),u(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in K||(K[e]=0),++K[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},G={},$=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function B(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new $(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var Z=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),J=/^\s+|\s{2,}|\s+$/g;function Y(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function Q(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=te.apply(void 0,[e].concat(n));if(!0!==o){var i=[].concat(n);Array.isArray(o)&&(i=o.reduce(ee,[])),i&&(e.className+=" "+i.join(" "))}}function ee(e,t){var n=t.className;return t.hasClass||e.push(n),e}function te(e){for(var n=e.className,r=!1,o=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=Y(e).test(n);t?r=!0:o=!1;return{className:e,hasClass:t}});return!(!o&&!r)&&s}function ne(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=te.apply(void 0,[e].concat(n));if(!1!==o){var i=[].concat(n);if(Array.isArray(o)&&(i=o.reduce(re,[])),i){var a=e.className;e.className=i.reduce(oe,a)}}}function re(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function oe(e,t){var n=Y(t,"g");return e.replace(n," ").replace(J," ")}var ie=/\s+/,ae={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function se(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(ae[e]&&(e=ae[e]),!n||!e)return null;var c=void 0===r?"undefined":_(r),u=r&&"string"===c;if("function"===c){if(o){var p=o;a=p.capture,l=p.passive}o=r}for(var d=Z?{capture:a,passive:l}:a,h=u?function(e){var t=e.target;for(;!te(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,f=e.split(ie),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],h,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function le(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,d=void 0,h=!1,f=o!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(u&&clearTimeout(u),u=setTimeout(_,o)),v&&!p&&(p=setTimeout(g,l)),i&&!h&&(h=!0,d=r.apply(void 0,C(c))),d}return y.flush=function(){(u||p)&&(d=r.apply(void 0,C(c)));return m(),d},y.cancel=m,y;function _(){p&&clearTimeout(p),b()}function g(){u&&clearTimeout(u),b()}function b(){a&&(d=r.apply(void 0,C(c))),p=u=null,h=!1}function m(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var ce=window.__subscriptions;function ue(e,t){var n=se(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ce[e]||(ce[e]={count:0});var r,o=ce[e];return o.count++,o.onsubscribe||(o.onsubscribe=le((r=e,function(){B(document,"pubsub/onsubscribe",r),B(document,"pubsub/onsubscribe/"+r,r),ce[r]&&delete ce[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete ce[e]}}se(document,"pubsub/onsubscribe",function(e){var t=e.detail;ce[t]||(ce[t]={count:0});var n=ce[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];B(o,n,r)}),delete n.queue)});var pe,de=function(e,t){return e===t},he=((pe=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:de;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?pe.apply(void 0,arguments):void 0}}}})()(!0),[]);var fe=1,ve=3,ye=8;function _e(e,t){var n=e.nodeType,r=e.nodeName;n===fe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var h=p.localName;t.getAttributeNS(l,h||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var f=a.length-1;0<=f;--f)if(!1!==(p=a[f]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ve&&n!==ye||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;ge(e,t,"checked"),ge(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?ge(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ge(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var be=3;function me(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(_e(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(Ce(r,n))(o=me(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(Ce(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=me(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=me(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Ce(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===be&&e.nodeValue===t.nodeValue)}var we,Oe,ke,Ae,xe=(we=Object,Oe=we.getPrototypeOf||function(e){return e.__proto__},ke=we.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ae="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var r,o=[null];return o.push.apply(o,t),r=e.bind.apply(e,o),ke(new r,n.prototype)},function(e){var t=Oe(e);return ke(e,ke(function(){return Ae(t,arguments,Oe(this).constructor)},t))})(function(e){function s(e){var t;c(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return d(s,e),s}(Error)),Ee=!!document.createDocumentFragment().children,Ne=/[A-Z]/g;function Te(e){return e.replace(Ne,je)}function je(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var Pe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Se(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case b.string:case b.string.isRequired:return t;case b.bool:case b.bool.isRequired:if(!t||n===t)return!0;case b.number:case b.number.isRequired:case b.object:case b.object.isRequired:case b.array:case b.array.isRequired:default:if(Pe.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(Pe.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var Re=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,De=/[-_]+/g;function Ie(e){return e.replace(Re,Le)}function Le(e,t){return 0==+e||De.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ue(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[Ie(t)]);if(r&&!e.hasAttribute(t))return i!==b.bool&&i!==b.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Se(a,t,i)}var Me=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ve(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=se(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:l});return t=c,Me&&(t.style.cursor="pointer"),u}var qe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Fe={AXA_CLICK:"axa-click",AXA_LOAD:"axa-load",AXA_CHANGE:"axa-change",AXA_SWIPE_UP:"axa-swipe-up",AXA_SWIPE_DOWN:"axa-swipe-down",AXA_SWIPE_LEFT:"axa-swipe-left",AXA_SWIPE_RIGHT:"axa-swipe-right"},He="data-prevent-default",ze=function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(qe.ENTER,t),i._onInteractive()):r&&i._notify(qe.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===qe.ESCAPE||e.key===qe.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return u(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=se(this._container,qe.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,r=t.outerClose,o=t.escapeClose,i=t.preventDefault;n&&(this._unCloseClick=se(e,qe.CLICK,n,this._handleClose,{passive:!i})),r&&(this._unOuterClick=Ve(e,qe.CLICK,this._handleClose,{passive:!i})),o&&(this._unCloseEscape=se(e.ownerDocument,qe.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(He)?Ue(e,He):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(qe.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}();ze.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ke=z(function(n){var e,t;return t=e=function(e){function t(){return c(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,n),t}(),e.version="2.0.1-beta.233",t},function(t){return function(e){function a(){var e,t,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=ue("context/available",n._makeContextReady)},h(n,t)}return d(a,t),u(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ce[e]||(ce[e]={count:0,queue:[]});var r=ce[e].queue;Array.isArray(r)?r.push([e,t,n]):B(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return c(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return d(n,t),u(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){var e,t,s;c(this,i);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=s=h(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r))))._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o="_"+t,i=n[t],a=s[o];return r||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},h(s,t)}return d(i,t),u(i,[{key:"init",value:function(e){var t=this;p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=le(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Ie(e)})}},{key:"connectedCallback",value:function(){var r=this;if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var o=this.constructor.propTypes;e.forEach(function(e){var t=Ie(e);if(r.hasAttribute(e)){var n=Ue(r,e,o[t]);r.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var r=Ie(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this.props[r]=Se(n,e,o[r])}else this.props[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&B(this,Fe.AXA_CHANGE,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(Te(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&b.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Te)}}]),i}()},function(t){return function(e){function l(){return c(this,l),h(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return d(l,t),u(l,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Ee||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new xe(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");me(t,e)}(this,s),function(){for(var e=void 0;e=he.pop();)delete e.isSameNode;he=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function o(){return c(this,o),h(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return d(o,t),u(o,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"init",this).call(this,r),this._styles=n}},{key:"connectedCallback",value:function(){p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&p(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()}),We=(z(Ke,X),z(Ke,function(o){return function(e){function a(){var e,t,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return d(a,o),u(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.uuidv4();if(e&&!G[t]){var n=document.createElement("style"),r=document.createTextNode(e);G[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},X)(HTMLElement));var Xe=/\n[\s]+$/,Ge=/^\n[\s]+/,$e=/[\s]+$/,Be=/^[\s]+/,Ze=/[\n\s]+/g,Je=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ye=["code","pre","textarea"],Qe=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===Je.indexOf(i)&&-1===Ye.indexOf(i)?""===(r=u.nodeValue.replace(Ge,"").replace($e,"").replace(Xe,"").replace(Ze," "))?t.removeChild(u):u.nodeValue=r:-1===Ye.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(Ge,o).replace(Be," ").replace($e,"").replace(Xe,"").replace(Ze," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===Je.indexOf(i)&&-1===Ye.indexOf(i)?""===(r=u.nodeValue.replace(Ge,"").replace(Xe,"").replace(Ze," "))?t.removeChild(u):u.nodeValue=r:-1===Ye.indexOf(i)&&(r=u.nodeValue.replace(Be," ").replace(Ge,"").replace(Xe,"").replace(Ze," "),u.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}};var et,tt=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},nt=e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":_(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),rt=function(e){var t,n,r,c=e.value,o=e.items;return[(n=document.createElement("button"),n.setAttribute("type","button"),n.setAttribute("class","m-header-languages__drop-down-toggle js-dropdown__toggle"),Qe(n,["\n    ",function(t,e){if(!e||!Array.isArray(e)||!e.length)return"";var n=e.filter(function(e){return e.name===t})[0];return n?n.name:e[0].name}(c,o),"\n    ",(t=document.createElement("axa-icon"),t.setAttribute("icon","angle-bracket-down"),t.setAttribute("classes","m-header-languages__drop-down-icon"),t),"\n  "]),n),(r=document.createElement("ul"),r.setAttribute("class","m-header-languages__list js-dropdown__content"),Qe(r,["\n    ",Array.isArray(o)&&o.map(function(e){var t,n,r=e.url,o=void 0===r?"":r,i=e.name,a=e.code,s=void 0===a?i:a,l=e.isActive;return(n=document.createElement("li")).setAttribute("class","m-header-languages__list-item"),Qe(n,["\n        ",(t=document.createElement("a"),t.setAttribute("data-index",""+String(i)),t.setAttribute("data-selected",""+String(i===c?"true":"false")),t.setAttribute("href",""+String(o)),t.setAttribute("lang",""+String(s)),t.setAttribute("class",""+String(nt("m-header-languages__list-link","js-header-languages__list-link",{"is-header-languages-active":l}))),Qe(t,["\n          ",tt(i),"\n        "]),t),"\n      "]),n}),"\n  "]),r)]},ot=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,it=function(){var e=window.requestAnimationFrame||window[ot+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var o=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-o)),r=setTimeout(function(){e(t+n)},n);return o=t+n,r}}return e}(),at=(et=(et=window.cancelAnimationFrame||window[ot+"CancelAnimationFrame"]||window[ot+"CancelRequestAnimationFrame"])?et.bind(window):function(e){clearTimeout(e)},function(e){function r(e,t){c(this,r),t=i({},r.DEFAULTS,t);var n=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return n.handleTransitionEnd=function(e){"height"===e.propertyName&&(n._removeHeightOnElement(e.target),n.offInteractive(),ne(n.wcNode,n.options.isAnimatingClass))},n.handleClick=function(e){if(e.preventDefault(),n.offClicks(),n.wcNode.getAttribute("value")===e.target.dataset.index)n.leave(n.lastToggleNode),n.deleteLastToggleNode();else{var t=e.target.dataset.index;n.wcNode.setAttribute("value",t)}},n.handleChange=function(e){e.preventDefault(),n.wcNode&&n.wcNode.setAttribute("value",e.target.value)},n.options=t,n.wcNode=e,n.isOpen=!1,n.unInputEnd&&n.unInputEnd(),n.unInputEnd=se(n.wcNode,qe.CHANGE,n.options.nativeSelectClass,n.handleChange,{capture:!0,passive:!1}),n}return d(r,ze),u(r,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=se(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"onClicks",value:function(){this.offClicks(),this.unClickEnd=se(this.wcNode,qe.CLICK,this.options.selectClass,this.handleClick,{capture:!0,passive:!1})}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"offClicks",value:function(){this.unClickEnd&&this.unClickEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;if(!this.isOpen){this.isOpen=!0,Q(t,this.options.isAnimatingClass),n.style.overflow="scroll";var r=n.scrollHeight;n.style.overflow="",this.onInteractive(),this.onClicks(),n.style.height=r+"px",Q(t,this.options.isOpenClass)}}},{key:"leave",value:function(e){var t=this,n=e.parentNode,r=n.lastElementChild,o=r.scrollHeight;this.isOpen&&(this.isOpen=!1,this.onInteractive(),this.onClicks(),Q(n,this.options.isAnimatingClass),it(function(){r.style.height=o+"px",it(function(){ne(n,t.options.isOpenClass),r.style.height=0})}))}},{key:"_removeHeightOnElement",value:function(e){this.isOpen&&(e.style.height="")}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",ne(e,this.options.isOpenClass))}},{key:"destroy",value:function(){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),r}());at.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",nativeSelectClass:"js-dropdown__native-select",isOpenClass:"is-dropdown-open",isAnimatingClass:"is-dropdown-animating",selectClass:"js-dropdown__content"};var st,lt,ct,ut=function(e){function a(){var e,t,n;c(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o)))).handleClick=function(e){var t=e.target.lang;B(n,Fe.AXA_CLICK,t,{bubbles:!0,cancelable:!0,composed:!0})||e.preventDefault()},h(n,t)}return d(a,We),u(a,[{key:"init",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"init",this).call(this,{styles:".m-header-languages {\n  position: relative;\n  display: block;\n  text-align: left; }\n\n.m-header-languages__drop-down-toggle {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  position: relative;\n  padding: 10.5px 50px 10.5px 20px;\n  color: #7f7f7f;\n  text-transform: uppercase; }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-header-languages__drop-down-toggle {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    cursor: pointer; }\n\n.m-header-languages__drop-down-icon {\n  width: 16px;\n  height: 16px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  margin-top: -8px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-dropdown-open .m-header-languages__drop-down-icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.m-header-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  z-index: 1070;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  background: #fafafa;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-dropdown-open > .m-header-languages__list {\n    height: auto; }\n\n.m-header-languages__list-item {\n  display: block;\n  border-width: 0 1px;\n  border-color: #e5e5e5;\n  border-style: solid; }\n  .m-header-languages__list-item:first-child {\n    border-top-width: 1px; }\n  .m-header-languages__list-item:last-child {\n    border-bottom-color: #ccc;\n    border-bottom-width: 2px; }\n\n.m-header-languages__list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-header-languages__list-link {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-languages__list-link.is-header-languages-active, .m-header-languages__list-link:hover, .m-header-languages__list-link:active, .m-header-languages__list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n",template:rt})}},{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.unClickEnd=se(this,qe.CLICK,"js-header-languages__list-link",this.handleClick,{capture:!0,passive:!1})}},{key:"willRenderCallback",value:function(){this.className=this.initialClassName+" m-header-languages js-dropdown"}},{key:"didRenderCallback",value:function(){this.dropDown&&this.dropDown.destroy(),this.dropDown=new at(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.dropDown&&(this.dropDown.destroy(),delete this.dropDown),this.unClickEnd&&this.unClickEnd()}}]),a}();return ut.tagName="axa-header-languages",ut.propTypes={items:b.arrayOf(b.shape({url:H,name:b.string,code:b.string,isActive:b.bool})),value:N},st=ut.tagName,lt=ut,customElements.get(st)||customElements.define(st,lt,ct),ut}();
