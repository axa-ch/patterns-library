var StyleGuideWebComponent=function(){"use strict";var e,y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var l=i.set;void 0!==l&&l.call(o,r)}return r},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},s=(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":y(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)i.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}(e={exports:{}},e.exports),e.exports),t={},c=function(e){return e in t||(t[e]=0),++t[e]},h=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function v(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new h(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var _=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function m(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var l=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&l}var g=/\s+/,O={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function b(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,l=t.passive,s=void 0===l||l;if(O[e]&&(e=O[e]),!n||!e)return null;var c=void 0===r?"undefined":y(r),u=r&&"string"===c;if("function"===c){if(o){var d=o;a=d.capture,s=d.passive}o=r}for(var p=_?{capture:a,passive:s}:a,f=u?function(e){var t=e.target;for(;!m(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,h=e.split(g),v=h.length,b=0;b<v;++b)n.addEventListener(h[b],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function C(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,l=e.maxWait,s=void 0!==l&&l,c=void 0,u=void 0,d=void 0,p=void 0,f=!1,h=o!==s,v=!1!==s;function b(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(y,o)),v&&!d&&(d=setTimeout(_,s)),i&&!f&&(f=!0,p=r.apply(void 0,x(c))),p}return b.flush=function(){(u||d)&&(p=r.apply(void 0,x(c)));return g(),p},b.cancel=g,b;function y(){d&&clearTimeout(d),m()}function _(){u&&clearTimeout(u),m()}function m(){a&&(p=r.apply(void 0,x(c))),d=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}var k={};function A(e,t){var n=b(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);k[e]||(k[e]={count:0});var r,o=k[e];return o.count++,o.onsubscribe||(o.onsubscribe=C((r=e,function(){v(document,"pubsub/onsubscribe",r),v(document,"pubsub/onsubscribe/"+r,r),k[r]&&delete k[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete k[e]}}b(document,"pubsub/onsubscribe",function(e){var t=e.detail;k[t]||(k[t]={count:0});var n=k[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];v(o,n,r)}),delete n.queue)});var w,n=function(e,t){return e===t},E=((w=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:n;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?w.apply(void 0,arguments):void 0}}}})()(!0),function(e){function s(e,t){var n;u(this,s);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var l=p(this,(n=s.__proto__||Object.getPrototypeOf(s)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,s),l.name="PropertyExistsException",l}return o(s,e),s}(Error)),N=/[A-Z]/g;function P(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function T(t,n){var e=t;if(t&&n!==t){if(j.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function M(e){return e.replace(S,L)}function L(e,t){return 0==+e||R.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=["title","checked","disabled"],V=[];var U=1,I=3,W=8;function H(e,t){var n=e.nodeType,r=e.nodeName;n===U&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,l=null,s=r.length-1;0<=s;--s)if(l=r[s],a=l.name,o=l.namespaceURI,i=l.value,o){var c=l.localName;t.getAttributeNS(o,c||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;0<=u;--u)!1!==(l=n[u]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==I&&n!==W||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;F(e,t,"checked"),F(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?F(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function F(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var q=3;function $(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(H(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,l=0;n=t.childNodes[l],r=e.childNodes[l-a],n||r;l++)if(r)if(n)if(K(r,n))(o=$(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var s=l;s<t.childNodes.length;s++)if(K(t.childNodes[s],r)){i=t.childNodes[s];break}i?((o=$(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=$(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),l--}(e,t),t):null:e}function K(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===q&&e.nodeValue===t.nodeValue)}var z=function(e){function l(e){var t;u(this,l);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=p(this,(t=l.__proto__||Object.getPrototypeOf(l)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,l),a.name="TemplateNoStringReturnException",a}return o(l,e),l}(Error);function G(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(G.prototype,HTMLElement.prototype),Object.setPrototypeOf(G,HTMLElement);var B=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=A("context/available",n._makeContextReady)},p(n,t)}return o(a,t),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;k[e]||(k[e]={count:0,queue:[]});var r=k[e].queue;Array.isArray(r)?r.push([e,t,n]):v(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var s=p(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));s._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=s._hasKeys[t];if(-1===D.indexOf(t)&&o)throw new E(t,s);var i="_"+t,a=n[t],l=s[i];return r||s.shouldUpdateCallback(a,l)?(s[i]=a,s._props[t]=a,o&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,s),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},s._isConnected=!1,s._props={},s._hasKeys={},s.updatedDebounced=C(function(){return s.updated&&s.updated()},50);var t=s.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=M(e),r=n in s;if(-1===D.indexOf(n)&&r)throw new E(n,s);s._hasKeys[n]=r,Object.defineProperty(s,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&f(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),s}return o(c,t),r(c,[{key:"connectedCallback",value:function(){var o=this;if(d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=M(e);if(o.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=T(n,t)}(o,e),r=o._hasKeys[t];o._props[t]=n,r&&f(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[M(e)]=T(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(N,P))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,s);var r=p(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return o(s,t),r(s,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});var i=t(this._props,this.childrenFragment),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new z(this);a.appendChild(i)}if(e)d(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: newTree should be an object");$(t,e)}(this,l),function(){for(var e=void 0;e=V.pop();)delete e.isSameNode;V=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);u(this,i);var o=p(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return o(i,t),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=c(t.nodeName),t}return o(n,G),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),Z={},J=function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},p(n,t)}return o(a,B),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:B.uuidv4();if(e&&!Z[t]){var n=document.createElement("style"),r=document.createTextNode(e);Z[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}(),X='.a-radio:hover:not(.a-radio--disabled):not(.a-radio--error) {\n  color: #00008f; }\n  .a-radio:hover:not(.a-radio--disabled):not(.a-radio--error) .a-radio__icon {\n    border-color: #00008f; }\n    .a-radio:hover:not(.a-radio--disabled):not(.a-radio--error) .a-radio__icon::after {\n      border-color: #00008f; }\n\n.a-radio .a-radio__wrapper {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.5; }\n\n.a-radio .a-radio__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-radio .a-radio__input:focus + .a-radio__icon {\n    border-color: #00008f; }\n    .a-radio .a-radio__input:focus + .a-radio__icon::after {\n      border-color: #00008f; }\n  .a-radio .a-radio__input:checked + .a-radio__icon::after {\n    border-color: #00008f;\n    background-color: #00008f; }\n  .a-radio .a-radio__input:disabled + .a-radio__icon {\n    cursor: default;\n    border-color: #999; }\n    .a-radio .a-radio__input:disabled + .a-radio__icon::after {\n      border-color: transparent; }\n\n.a-radio .a-radio__icon {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 18px;\n  height: 18px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 20px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid #999;\n  cursor: pointer;\n  border-radius: 50%; }\n  .a-radio .a-radio__icon::after {\n    width: 8px;\n    height: 8px;\n    border: 1px solid transparent;\n    content: ""; }\n  .a-radio .a-radio__icon::after {\n    border-radius: 50%; }\n\n.a-radio--error {\n  color: #c91432; }\n  .a-radio--error .a-radio__icon {\n    border-color: #c91432; }\n\n.a-radio--disabled {\n  color: #999; }\n',Q=/\n[\s]+$/,Y=/^\n[\s]+/,ee=/[\s]+$/,te=/^[\s]+/,ne=/[\n\s]+/g,re=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],oe=["code","pre","textarea"],ie=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),l===s-1&&(a=!1,-1===re.indexOf(i)&&-1===oe.indexOf(i)?""===(r=u.nodeValue.replace(Y,"").replace(ee,"").replace(Q,"").replace(ne," "))?t.removeChild(u):u.nodeValue=r:-1===oe.indexOf(i)&&(o=0===l?"":" ",r=u.nodeValue.replace(Y,o).replace(te," ").replace(ee,"").replace(Q,"").replace(ne," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===re.indexOf(i)&&-1===oe.indexOf(i)?""===(r=u.nodeValue.replace(Y,"").replace(Q,"").replace(ne," "))?t.removeChild(u):u.nodeValue=r:-1===oe.indexOf(i)&&(r=u.nodeValue.replace(te," ").replace(Y,"").replace(Q,"").replace(ne," "),u.nodeValue=r));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}};function ae(e,t){var n,r,o,i=e.inputId,a=void 0===i?B.uuidv4():i,l=e.value,s=e.name,c=e.checked,u=void 0!==c&&c,d=e.disabled,p=void 0!==d&&d;return(o=document.createElement("label")).setAttribute("class","a-radio__wrapper"),ie(o,["\n    ",(n=document.createElement("input"),n.setAttribute("id",""+String(a)),n.setAttribute("type","radio"),n.setAttribute("name",""+String(s)),u&&n.setAttribute("checked","checked"),n.setAttribute("value",""+String(l)),p&&n.setAttribute("disabled","disabled"),n.setAttribute("class","a-radio__input"),n),"\n    ",(r=document.createElement("span"),r.setAttribute("class","a-radio__icon"),r),t,"\n  "]),o}var le,se,ce,ue=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:X,template:ae}))}return o(t,J),r(t,null,[{key:"observedAttributes",get:function(){return["input-id","error","value","name","checked","disabled"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e=this.error,t=this.checked,n=this.disabled;this.className=s(this.initialClassName,"a-radio",{"a-radio--error":e,"a-radio--checked":t,"a-radio--disabled":n})}}]),t}();return ue.tagName="axa-radio",le=function(){window.customElements.define(ue.tagName,ue)},se=0,ce=function(){if(0===se)try{le.apply(void 0,arguments),se+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ce,!1),document.addEventListener("WebComponentsReady",ce,!1),ue}();
