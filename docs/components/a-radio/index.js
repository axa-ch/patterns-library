var StyleGuideWebComponent=function(){"use strict";var e,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var r={};for(var n in e)0<=t.indexOf(n)||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,r,n,o){var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,r,n,o)}else if("value"in i&&i.writable)i.value=n;else{var l=i.set;void 0!==l&&l.call(o,n)}return n},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},n=(function(e){!function(){var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=void 0===r?"undefined":_(r);if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var o=l.apply(null,r);o&&e.push(o)}else if("object"===n)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):window.classNames=l}()}(e={exports:{}},e.exports),e.exports),s={},c=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=t.bubbles,n=void 0!==r&&r,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,n,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function v(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new c(t,i({},n,{detail:r}));return e.dispatchEvent(o)}var y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),r=function(){};window.addEventListener("testPassiveEventSupport",r,t),window.removeEventListener("testPassiveEventSupport",r,t)}return e}();function m(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,r=Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var l=r.map(function(e){var t=(r=e,new RegExp("^"+r+"$|^"+r+"\\s|\\s"+r+"\\s|\\s"+r+"$",n)).test(o);var r,n;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&l}var g=/\s+/,O={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},r=Object.keys(t),n=r.length,o=void 0,i=0;i<n;++i)if(void 0!==e[o=r[i]])return t[o];return""}()};function b(r,e,n,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,l=t.passive,s=void 0===l||l;if(O[e]&&(e=O[e]),!r||!e)return null;var c=void 0===n?"undefined":_(n),u=n&&"string"===c;if("function"===c){if(o){var d=o;a=d.capture,s=d.passive}o=n}for(var p=y?{capture:a,passive:s}:a,f=u?function(e){var t=e.target;for(;!m(t,n)&&t!==r;)t=t.parentNode;if(t!==r)return o(e,t)}:o,h=e.split(g),v=h.length,b=0;b<v;++b)r.addEventListener(h[b],f,p);return function e(){for(var t=0;t<v;++t)r.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var r=Object.keys(e),n=r.length,o=0;o<n;++o){var i=r[o];if(e[i]===t)return delete e[i]}}(this,e)}}function C(n){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,r=e.trailing,a=void 0===r||r,l=e.maxWait,s=void 0!==l&&l,c=void 0,u=void 0,d=void 0,p=void 0,f=!1,h=o!==s,v=!1!==s;function b(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return c=t,h&&(u&&clearTimeout(u),u=setTimeout(_,o)),v&&!d&&(d=setTimeout(y,s)),i&&!f&&(f=!0,p=n.apply(void 0,x(c))),p}return b.flush=function(){(u||d)&&(p=n.apply(void 0,x(c)));return g(),p},b.cancel=g,b;function _(){d&&clearTimeout(d),m()}function y(){u&&clearTimeout(u),m()}function m(){a&&(p=n.apply(void 0,x(c))),d=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),c=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var k=window.__subscriptions;function w(e,t){var r=b(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);k[e]||(k[e]={count:0});var n,o=k[e];return o.count++,o.onsubscribe||(o.onsubscribe=C((n=e,function(){v(document,"pubsub/onsubscribe",n),v(document,"pubsub/onsubscribe/"+n,n),k[n]&&delete k[n].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,r.call(this),o.count<=0&&delete k[e]}}b(document,"pubsub/onsubscribe",function(e){var t=e.detail;k[t]||(k[t]={count:0});var r=k[t],n=r.queue;Array.isArray(n)&&(n.forEach(function(e){var t=l(e,3),r=t[0],n=t[1],o=t[2];v(o,r,n)}),delete r.queue)});var A,t=function(e,t){return e===t},N=(A=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t;return function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){return o.apply(void 0,[].concat(n,t))?A.apply(void 0,arguments):void 0}}}}()(!0),function(e){function s(e,t){var r;u(this,s);for(var n="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var l=f(this,(r=s.__proto__||Object.getPrototypeOf(s)).call.apply(r,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(l,s),l.name="PropertyExistsException",l}return p(s,e),s}(Error)),E=/[A-Z]/g;function P(e,t,r){var n=e.toLowerCase(),o=r.charAt(t+1);return 0===t||o.toUpperCase()===o?n:"-"+n}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function T(t,r){var e=t;if(t&&r!==t){if(j.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+r+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var r=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,S=/[-_]+/g;function R(e){return e.replace(r,M)}function M(e,t){return 0==+e||S.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var L=["title","checked","disabled"],D=[];var V=1,U=3,I=8;function F(e,t){var r=e.nodeType,n=e.nodeName;r===V&&function(e,t){for(var r=t.attributes,n=e.attributes,o=null,i=null,a=null,l=null,s=n.length-1;0<=s;--s)if(l=n[s],a=l.name,o=l.namespaceURI,i=l.value,o){var c=l.localName;t.getAttributeNS(o,c||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=r.length-1;0<=u;--u)!1!==(l=r[u]).specified&&(a=l.name,(o=l.namespaceURI)?(a=l.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),r!==U&&r!==I||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===n?function(e,t){var r=e.value,n=t.value;H(e,t,"checked"),H(e,t,"disabled"),r!==n&&(t.setAttribute("value",r),t.value=r);"null"===r&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=r):t.removeAttribute("value")}(e,t):"OPTION"===n?H(e,t,"selected"):"TEXTAREA"===n&&function(e,t){var r=e.value;r!==t.value&&(t.value=r);if(t.firstChild&&t.firstChild.nodeValue!==r){if(""===r&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=r}}(e,t)}function H(e,t,r){e[r]!==t[r]&&(t[r]=e[r],e[r]?t.setAttribute(r,""):t.removeAttribute(r))}var W=3;function q(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(F(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var r=void 0,n=void 0,o=void 0,i=void 0,a=0,l=0;r=t.childNodes[l],n=e.childNodes[l-a],r||n;l++)if(n)if(r)if($(n,r))(o=q(n,r))!==r&&(t.replaceChild(o,r),a++);else{i=null;for(var s=l;s<t.childNodes.length;s++)if($(t.childNodes[s],n)){i=t.childNodes[s];break}i?((o=q(n,i))!==i&&a++,t.insertBefore(o,r)):n.id||r.id?(t.insertBefore(n,r),a++):(o=q(n,r))!==r&&(t.replaceChild(o,r),a++)}else t.appendChild(n),a++;else t.removeChild(r),l--}(e,t),t):null:e}function $(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===W&&e.nodeValue===t.nodeValue)}var K=function(e){function l(e){var t;u(this,l);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",n=arguments.length,o=Array(1<n?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a=f(this,(t=l.__proto__||Object.getPrototypeOf(l)).call.apply(t,[this,r].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,l),a.name="TemplateNoStringReturnException",a}return p(l,e),l}(Error),z=!!document.createDocumentFragment().children;function G(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(G.prototype,HTMLElement.prototype),Object.setPrototypeOf(G,HTMLElement);var B=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,r;u(this,a);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=r=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=w("context/available",r._makeContextReady)},f(r,t)}return p(a,t),o(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;k[e]||(k[e]={count:0,queue:[]});var n=k[e].queue;Array.isArray(n)?n.push([e,t,r]):v(r,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function r(){return u(this,r),f(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,t),o(r,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerHTML",e,this)}}]),r}()},function(t){return function(e){function c(e){u(this,c);var s=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));s._reduceProps=function(e,t){var r=e.props,n=e.shouldUpdate,o=s._hasKeys[t];if(-1===L.indexOf(t)&&o)throw new N(t,s);var i="_"+t,a=r[t],l=s[i];return n||s.shouldUpdateCallback(a,l)?(s[i]=a,s._props[t]=a,o&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,s),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},s._isConnected=!1,s._props={},s._hasKeys={},s.updatedDebounced=C(function(){return s.updated&&s.updated()},50);var t=s.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,r=R(e),n=r in s;if(-1===L.indexOf(r)&&n)throw new N(r,s);s._hasKeys[r]=n,Object.defineProperty(s,r,t={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,n&&h(t.__proto__||Object.getPrototypeOf(t),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),s}return p(c,t),o(c,[{key:"connectedCallback",value:function(){var o=this;if(d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=R(e);if(o.hasAttribute(e)){var r=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var r=e.value;return t?r=e.getAttribute(t):t=e.name,r=T(r,t)}(o,e),n=o._hasKeys[t];o._props[t]=r,n&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,r,o)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,r){if(this.shouldUpdateCallback(r,t)){var n=R(e);this.hasAttribute(e)?this[n]=T(r):this[n]=null}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,r=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<r.indexOf(e.replace(E,P))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=a(e,["template"]);u(this,s);var n=f(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,r));return n._template=t,n._hasTemplate=!!t,n._hasRendered=!1,n.updated=n.render,n}return p(s,t),o(s,[{key:"render",value:function(){var r=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var n=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),n.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=n}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);r.childrenFragment.appendChild(t)});z||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new K(this);a.appendChild(i)}if(e)d(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"appendChild",this).call(this,a);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");q(t,e)}(this,l),function(){for(var e=void 0;e=D.pop();)delete e.isSameNode;D=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),s}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,n=a(e,["styles"]);u(this,i);var o=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,n));return o._styles=r,o}return p(i,t),o(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),r=document.createTextNode(this._styles);t.appendChild(r),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t,r=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return r._id=((t=r.nodeName)in s||(s[t]=0),++s[t]),r}return p(n,G),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),Z={},J=function(e){function a(){var e,t,r;u(this,a);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=r=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(r._styles,r.nodeName)},f(r,t)}return p(a,B),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:B.uuidv4();if(e&&!Z[t]){var r=document.createElement("style"),n=document.createTextNode(e);Z[t]=!0,r.appendChild(n),r.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(r)}}}]),a}();var X=/\n[\s]+$/,Q=/^\n[\s]+/,Y=/[\s]+$/,ee=/^[\s]+/,te=/[\n\s]+/g,re=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ne=["code","pre","textarea"],oe=function e(t,r){if(Array.isArray(r))for(var n,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=r.length;l<s;l++){var c=r[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),l===s-1&&(a=!1,-1===re.indexOf(i)&&-1===ne.indexOf(i)?""===(n=u.nodeValue.replace(Q,"").replace(Y,"").replace(X,"").replace(te," "))?t.removeChild(u):u.nodeValue=n:-1===ne.indexOf(i)&&(o=0===l?"":" ",n=u.nodeValue.replace(Q,o).replace(ee," ").replace(Y,"").replace(X,"").replace(te," "),u.nodeValue=n));else if(c&&c.nodeType){a&&(a=!1,-1===re.indexOf(i)&&-1===ne.indexOf(i)?""===(n=u.nodeValue.replace(Q,"").replace(X,"").replace(te," "))?t.removeChild(u):u.nodeValue=n:-1===ne.indexOf(i)&&(n=u.nodeValue.replace(ee," ").replace(Q,"").replace(X,"").replace(te," "),u.nodeValue=n));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}};function ie(e,t){var r,n,o,i=e.inputId,a=void 0===i?B.uuidv4():i,l=e.value,s=e.name,c=e.checked,u=void 0!==c&&c,d=e.disabled,p=void 0!==d&&d;return(o=document.createElement("label")).setAttribute("class","a-radio__wrapper"),oe(o,["\n    ",(r=document.createElement("input"),r.setAttribute("id",""+String(a)),r.setAttribute("type","radio"),r.setAttribute("name",""+String(s)),u&&r.setAttribute("checked","checked"),r.setAttribute("value",""+String(l)),p&&r.setAttribute("disabled","disabled"),r.setAttribute("class","a-radio__input"),r),"\n    ",(n=document.createElement("span"),n.setAttribute("class","a-radio__icon"),n),t,"\n  "]),o}var ae,le,se=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:'.a-radio:hover:not(.a-radio--disabled):not(.a-radio--error) {\n  color: #00008f; }\n  .a-radio:hover:not(.a-radio--disabled):not(.a-radio--error) .a-radio__icon {\n    border-color: #00008f; }\n    .a-radio:hover:not(.a-radio--disabled):not(.a-radio--error) .a-radio__icon::after {\n      border-color: #00008f; }\n\n.a-radio .a-radio__wrapper {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  min-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  line-height: 1.5; }\n\n.a-radio .a-radio__input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip: rect(0, 0, 0, 0);\n  margin: -1px;\n  overflow: hidden; }\n  .a-radio .a-radio__input:focus + .a-radio__icon {\n    border-color: #00008f; }\n    .a-radio .a-radio__input:focus + .a-radio__icon::after {\n      border-color: #00008f; }\n  .a-radio .a-radio__input:checked + .a-radio__icon::after {\n    border-color: #00008f;\n    background-color: #00008f; }\n  .a-radio .a-radio__input:disabled + .a-radio__icon {\n    cursor: default;\n    border-color: #999; }\n    .a-radio .a-radio__input:disabled + .a-radio__icon::after {\n      border-color: transparent; }\n\n.a-radio .a-radio__icon {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 18px;\n  height: 18px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 20px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  border: 1px solid #999;\n  cursor: pointer;\n  border-radius: 50%; }\n  .a-radio .a-radio__icon::after {\n    width: 8px;\n    height: 8px;\n    border: 1px solid transparent;\n    content: ""; }\n  .a-radio .a-radio__icon::after {\n    border-radius: 50%; }\n\n.a-radio--error {\n  color: #c91432; }\n  .a-radio--error .a-radio__icon {\n    border-color: #c91432; }\n\n.a-radio--disabled {\n  color: #999; }\n',template:ie}))}return p(t,J),o(t,null,[{key:"observedAttributes",get:function(){return["input-id","error","value","name","checked","disabled"]}}]),o(t,[{key:"willRenderCallback",value:function(){var e=this.error,t=this.checked,r=this.disabled;this.className=n(this.initialClassName,"a-radio",{"a-radio--error":e,"a-radio--checked":t,"a-radio--disabled":r})}}]),t}();return se.tagName="axa-radio",ae=se.tagName,le=se,customElements.get(ae)||customElements.define(ae,le),se}();
