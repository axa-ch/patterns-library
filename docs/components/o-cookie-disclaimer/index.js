var StyleGuideWebComponent=function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},r=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(){}var h,v=(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=f,n.PropTypes=n}()}(h={exports:{}},h.exports),h.exports),y=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===y&&(y++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(b,n),y--),n}(n)),e}var m=v;Object.keys(m).reduce(b,m);var g,k,C,x,w=m.oneOf(["left","center","right"]),T=m.oneOf(["left","right"]),N=(m.oneOf(["top","bottom"]),m.oneOf(["up","down"])),A=m.oneOf(["ok","pending","error","unknown"]),j=m.oneOf(["row","col","rowgroup","colgroup","auto"]),E=m.oneOfType([m.string,m.number]),P={text:E,value:m.any,rowspan:E,colspan:E,scope:j,align:w,dense:m.bool},S={float:T,strong:m.bool,bold:m.bool},R=m.oneOfType([m.string,m.number]),D=m.oneOfType([R,m.shape(i({},P,{sort:N,sortActive:m.bool}))]),L=m.oneOfType([R,m.shape(i({},P,S,{action:m.bool,state:A}))]),I=m.oneOfType([R,m.shape(i({},P,S))]),U=m.oneOfType([m.arrayOf(D),m.shape({cells:m.arrayOf(D)})]),M=m.oneOfType([m.arrayOf(L),m.shape({cells:m.arrayOf(L),action:m.bool})]),V=m.oneOfType([m.arrayOf(I),m.shape({cells:m.arrayOf(I)})]),q=(m.oneOfType([U,m.arrayOf(U)]),m.oneOfType([M,m.arrayOf(M)]),m.oneOfType([V,m.arrayOf(V)]),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}),F={},H=(g=Object,k=g.getPrototypeOf||function(e){return e.__proto__},C=g.setPrototypeOf||function(e,t){return e.__proto__=t,e},x="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),C(new o,n.prototype)},function(e){var t=k(e);return C(e,C(function(){return x(t,arguments,k(this).constructor)},t))}),W=function(n){return H(function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),u(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in F||(F[e]=0),++F[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},K={},$=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function z(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new $(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var B=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function G(e){for(var r=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var J=/\s+/,Y={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function Z(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(Y[e]&&(e=Y[e]),!n||!e)return null;var l=void 0===o?"undefined":_(o),u=o&&"string"===l;if("function"===l){if(r){var p=r;a=p.capture,c=p.passive}r=o}for(var d=B?{capture:a,passive:c}:a,f=u?function(e){var t=e.target;for(;!G(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(J),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function X(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,p=void 0,d=void 0,f=!1,h=r!==c,v=!1!==c;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(u&&clearTimeout(u),u=setTimeout(_,r)),v&&!p&&(p=setTimeout(b,c)),i&&!f&&(f=!0,d=o.apply(void 0,O(l))),d}return y.flush=function(){(u||p)&&(d=o.apply(void 0,O(l)));return g(),d},y.cancel=g,y;function _(){p&&clearTimeout(p),m()}function b(){u&&clearTimeout(u),m()}function m(){a&&(d=o.apply(void 0,O(l))),p=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var Q=window.__subscriptions;function ee(e,t){var n=Z(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);Q[e]||(Q[e]={count:0});var o,r=Q[e];return r.count++,r.onsubscribe||(r.onsubscribe=X((o=e,function(){z(document,"pubsub/onsubscribe",o),z(document,"pubsub/onsubscribe/"+o,o),Q[o]&&delete Q[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete Q[e]}}Z(document,"pubsub/onsubscribe",function(e){var t=e.detail;Q[t]||(Q[t]={count:0});var n=Q[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],r=t[2];z(r,n,o)}),delete n.queue)});var te,ne=function(e,t){return e===t},oe=((te=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:ne;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?te.apply(void 0,arguments):void 0}}}})()(!0),[]);var re=1,ie=3,ae=8;function se(e,t){var n=e.nodeType,o=e.nodeName;n===re&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,c=p.namespaceURI,l=p.value,!i(u))if(c){var f=p.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;0<=h;--h)if(!1!==(p=a[h]).specified){if(u=p.name,c=p.namespaceURI,i(u))continue;c?(u=p.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ie&&n!==ae||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ce(e,t,"checked"),ce(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ce(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ce(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var le=3;function ue(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(se(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(pe(o,n))(r=ue(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(pe(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=ue(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=ue(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function pe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===le&&e.nodeValue===t.nodeValue)}var de,fe,he,ve,ye=(de=Object,fe=de.getPrototypeOf||function(e){return e.__proto__},he=de.setPrototypeOf||function(e,t){return e.__proto__=t,e},ve="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),he(new o,n.prototype)},function(e){var t=fe(e);return he(e,he(function(){return ve(t,arguments,fe(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return o(s,e),s}(Error)),_e=!!document.createDocumentFragment().children,be=/[A-Z]/g;function me(e){return e.replace(be,ge)}function ge(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Oe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function ke(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case m.string:case m.string.isRequired:return t;case m.bool:case m.bool.isRequired:if(!t||n===t)return!0;case m.number:case m.number.isRequired:case m.object:case m.object.isRequired:case m.array:case m.array.isRequired:default:if(Oe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Oe.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var Ce=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,xe=/[-_]+/g;function we(e){return e.replace(Ce,Te)}function Te(e,t){return 0==+e||xe.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ne(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[we(t)]);if(o&&!e.hasAttribute(t))return i!==m.bool&&i!==m.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=ke(a,t,i)}var Ae=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function je(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=Z(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=l,Ae&&(t.style.cursor="pointer"),u}var Ee=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Pe="axa-change",Se="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Ee.ENTER,t),i._onInteractive()):o&&i._notify(Ee.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Ee.ESCAPE||e.key===Ee.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return u(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=Z(this._container,Ee.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=Z(this._container,Ee.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=je(this._container,Ee.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=Z(this._container.ownerDocument,Ee.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Se)?Ne(e,Se):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ee.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Re=q(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,n),t}(),e.version="2.0.1-beta.228",t},function(t){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=ee("context/available",n._makeContextReady)},d(n,t)}return o(a,t),u(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;Q[e]||(Q[e]={count:0,queue:[]});var o=Q[e].queue;Array.isArray(o)?o.push([e,t,n]):z(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return l(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),u(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){var e,t,s;l(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=s=d(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o))))._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r="_"+t,i=n[t],a=s[r];return o||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},d(s,t)}return o(i,t),u(i,[{key:"init",value:function(e){var t=this;p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=X(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){we(e)})}},{key:"connectedCallback",value:function(){var o=this;if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=we(e);if(o.hasAttribute(e)){var n=Ne(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=we(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=ke(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&z(this,Pe,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(me(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&m.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(me)}}]),i}()},function(t){return function(e){function c(){return l(this,c),d(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return o(c,t),u(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});_e||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new ye(this);a.appendChild(i)}if(e)p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");ue(t,e)}(this,s),function(){for(var e=void 0;e=oe.pop();)delete e.isSameNode;oe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function r(){return l(this,r),d(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return o(r,t),u(r,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&p(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()}),De=(q(Re,W),q(Re,function(r){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},d(n,t)}return o(a,r),u(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(e&&!K[t]){var n=document.createElement("style"),o=document.createTextNode(e);K[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},W)(HTMLElement));var Le,Ie,Ue,Me=/\n[\s]+$/,Ve=/^\n[\s]+/,qe=/[\s]+$/,Fe=/^[\s]+/,He=/[\n\s]+/g,We=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ke=["code","pre","textarea"],$e=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===We.indexOf(i)&&-1===Ke.indexOf(i)?""===(o=u.nodeValue.replace(Ve,"").replace(qe,"").replace(Me,"").replace(He," "))?t.removeChild(u):u.nodeValue=o:-1===Ke.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(Ve,r).replace(Fe," ").replace(qe,"").replace(Me,"").replace(He," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===We.indexOf(i)&&-1===Ke.indexOf(i)?""===(o=u.nodeValue.replace(Ve,"").replace(Me,"").replace(He," "))?t.removeChild(u):u.nodeValue=o:-1===Ke.indexOf(i)&&(o=u.nodeValue.replace(Fe," ").replace(Ve,"").replace(Me,"").replace(He," "),u.nodeValue=o));var p=l.nodeName;p&&(i=p.toLowerCase()),t.appendChild(l)}}}},ze=function(e,t){var n,o,r,i,a,s,c=e.classes,l=e.buttonName,u=e.title,p=e.fixed,d=void 0!==p&&p;return(s=document.createElement("article")).setAttribute("class",String(c)+" "+String(d?"o-cookie-disclaimer--fixed":"")),$e(s,["\n    ",(a=document.createElement("axa-container"),$e(a,["\n      ",(o=document.createElement("div"),o.setAttribute("class","o-cookie-disclaimer__container o-cookie-disclaimer__container--lx"),$e(o,["\n        ",(n=document.createElement("h1"),n.setAttribute("class","o-cookie-disclaimer__title"),$e(n,[u]),n),"\n        ",t,"\n      "]),o),"\n      ",(i=document.createElement("div"),i.setAttribute("class","o-cookie-disclaimer__container o-cookie-disclaimer__container--rx"),$e(i,["\n        ",(r=document.createElement("axa-button"),r.setAttribute("ghost","ghost"),r.setAttribute("classes","js-cookie-disclaimer__button"),r.setAttribute("color","white"),r.setAttribute("tag","button"),$e(r,[l]),r),"\n      "]),i),"\n    "]),a),"\n  "]),s},Be=window||global,Ge=function(){function t(e){l(this,t),this.wcNode=e,this._off=null}return u(t,[{key:"init",value:function(){var t=this;this._off=Z(this.wcNode.querySelector(".js-cookie-disclaimer__button"),"click",function(){t.cleanupWcNode();var e=Be.localStorage;e&&e.setItem("axa-ch-cookie-disclaimer-accepted",(new Date).getTime())})}},{key:"cleanupWcNode",value:function(){this.wcNode.parentNode.removeChild(this.wcNode)}},{key:"hasAccepted",value:function(){return!!Be.localStorage.getItem("axa-ch-cookie-disclaimer-accepted")}},{key:"destroy",value:function(){"function"==typeof this._off&&this._off(),delete this.wcNode}},{key:"off",get:function(){return this._off}}]),t}(),Je=function(e){function t(){return l(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,De),u(t,[{key:"init",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".o-cookie-disclaimer {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  background-color: #5f5f5f;\n  color: #fff; }\n  .o-cookie-disclaimer p {\n    margin-top: 0; }\n  @media (min-width: 768px) {\n    .o-cookie-disclaimer .u-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; } }\n\n.o-cookie-disclaimer--fixed {\n  z-index: 2000;\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n.o-cookie-disclaimer__title {\n  text-transform: uppercase;\n  font-size: 16px; }\n\n.o-cookie-disclaimer__container {\n  width: 100%; }\n\n@media (min-width: 768px) {\n  .o-cookie-disclaimer__container--lx {\n    width: 70%; } }\n\n.o-cookie-disclaimer__container--rx {\n  margin-top: 16px;\n  text-align: center; }\n  @media (min-width: 768px) {\n    .o-cookie-disclaimer__container--rx {\n      width: calc(30% - 30px);\n      margin-top: 0;\n      margin-left: 30px;\n      text-align: left; } }\n",template:ze}),this.disclaimerHandler=new Ge(this)}},{key:"connectedCallback",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" o-cookie-disclaimer"}},{key:"disconnectedCallback",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.disclaimerHandler.destroy(),delete this.disclaimerHandler}},{key:"render",value:function(){this.disclaimerHandler.hasAccepted()?this.disclaimerHandler.cleanupWcNode():p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this)}},{key:"didRenderCallback",value:function(){this.disclaimerHandler.init()}}]),t}();return Je.tagName="axa-cookie-disclaimer",Je.propTypes={classes:m.string,buttonName:m.string,title:m.string,fixed:m.bool},Le=Je.tagName,Ie=Je,customElements.get(Le)||customElements.define(Le,Ie,Ue),Je}();
