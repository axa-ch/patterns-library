!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";var t,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},d=function t(e,n,o){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},p=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},a=function(t,e){var n={};for(var o in t)0<=e.indexOf(o)||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},h=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},f=function t(e,n,o,i){var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},s=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},g=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},n=(function(t){!function(){var a={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var i=s.apply(null,n);i&&t.push(i)}else if("object"===o)for(var r in n)a.call(n,r)&&n[r]&&t.push(r)}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):window.classNames=s}()}(t={exports:{}},t.exports),t.exports),c={},l=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,i=e.cancelable,r=void 0!==i&&i,a=e.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(t,o,r,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},c}}();function y(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new l(e,r({},o,{detail:n}));return t.dispatchEvent(i)}var b=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}(),o=/^\s+|\s{2,}|\s+$/g;function v(t,e){return new RegExp("^"+t+"$|^"+t+"\\s|\\s"+t+"\\s|\\s"+t+"$",e)}function m(t){for(var e=arguments.length,n=Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var i=C.apply(void 0,[t].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(k,[])),r&&(t.className+=" "+r.join(" "))}}function k(t,e){var n=e.className;return e.hasClass||t.push(n),t}function C(t){for(var n=t.className,o=!1,i=!0,e=arguments.length,r=Array(1<e?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];var s=r.map(function(t){var e=v(t).test(n);e?o=!0:i=!1;return{className:t,hasClass:e}});return!(!i&&!o)&&s}function x(t){for(var e=arguments.length,n=Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var i=C.apply(void 0,[t].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(O,[])),r){var a=t.className;t.className=r.reduce(w,a)}}}function O(t,e){var n=e.className;return e.hasClass&&t.push(n),t}function w(t,e){var n=v(e,"g");return t.replace(n," ").replace(o," ")}var A=/\s+/,N={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==t[i=n[r]])return e[i];return""}()};function S(n,t,o,i){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},r=e.capture,a=void 0!==r&&r,s=e.passive,c=void 0===s||s;if(N[t]&&(t=N[t]),!n||!t)return null;var l=void 0===o?"undefined":_(o),u=o&&"string"===l;if("function"===l){if(i){var d=i;a=d.capture,c=d.passive}i=o}for(var p=b?{capture:a,passive:c}:a,h=u?function(t){var e=t.target;for(;!C(e,o)&&e!==n;)e=e.parentNode;if(e!==n)return i(t,e)}:i,f=t.split(A),y=f.length,v=0;v<y;++v)n.addEventListener(f[v],h,p);return function t(){for(var e=0;e<y;++e)n.removeEventListener(f[e],h,p);!function(t,e){if(!t)return;for(var n=Object.keys(t),o=n.length,i=0;i<o;++i){var r=n[i];if(t[r]===e)return delete t[r]}}(this,t)}}function T(o){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,r=void 0!==e&&e,n=t.trailing,a=void 0===n||n,s=t.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=i!==c,y=!1!==c;function v(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return l=e,f&&(u&&clearTimeout(u),u=setTimeout(_,i)),y&&!d&&(d=setTimeout(b,c)),r&&!h&&(h=!0,p=o.apply(void 0,g(l))),p}return v.flush=function(){(u||d)&&(p=o.apply(void 0,g(l)));return k(),p},v.cancel=k,v;function _(){d&&clearTimeout(d),m()}function b(){u&&clearTimeout(u),m()}function m(){a&&(p=o.apply(void 0,g(l))),d=u=null,h=!1}function k(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var E=window.__subscriptions;function j(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;E[t]||(E[t]={count:0,queue:[]});var o=E[t].queue;Array.isArray(o)?o.push([t,e,n]):y(n,t,e)}function D(t,e){var n=S(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);E[t]||(E[t]={count:0});var o,i=E[t];return i.count++,i.onsubscribe||(i.onsubscribe=T((o=t,function(){y(document,"pubsub/onsubscribe",o),y(document,"pubsub/onsubscribe/"+o,o),E[o]&&delete E[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete E[t]}}S(document,"pubsub/onsubscribe",function(t){var e=t.detail;E[e]||(E[e]={count:0});var n=E[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=s(t,3),n=e[0],o=e[1],i=e[2];y(i,n,o)}),delete n.queue)});var P,e=function(t,e){return t===e},I=(P=function(){var t;return(t=console).log.apply(t,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var t=arguments.length,o=Array(t),e=0;e<t;e++)o[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return i.apply(void 0,[].concat(o,e))?P.apply(void 0,arguments):void 0}}}}()(!0),function(t){function c(t,e){var n;u(this,c);for(var o="\n    Native Property >>>"+t+"<<< exists already at "+e.nodeName+"#"+e._id+" and evaluates to -> "+e[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,r=Array(2<i?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];var s=h(this,(n=c.__proto__||Object.getPrototypeOf(c)).call.apply(n,[this,o].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(s,c),s.name="PropertyExistsException",s}return p(c,t),c}(Error)),L=/[A-Z]/g;function R(t,e,n){var o=t.toLowerCase(),i=n.charAt(e+1);return 0===e||i.toUpperCase()===i?o:"-"+o}var F=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function U(e,n){var t=e;if(e&&n!==e){if(F.test(e))try{t=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else t=!0;return t}var M=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,V=/[-_]+/g;function z(t){return t.replace(M,B)}function B(t,e){return 0==+t||V.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var W=["title","checked","disabled"],q=[];var H=1,K=3,$=8;function Y(t,e){var n=t.nodeType,o=t.nodeName;n===H&&function(t,e){for(var n=e.attributes,o=t.attributes,i=null,r=null,a=null,s=null,c=o.length-1;0<=c;--c)if(s=o[c],a=s.name,i=s.namespaceURI,r=s.value,i){var l=s.localName;e.getAttributeNS(i,l||a)!==r&&e.setAttributeNS(i,a,r)}else e.hasAttribute(a)?e.getAttribute(a)!==r&&("null"===r||"undefined"===r?e.removeAttribute(a):e.setAttribute(a,r)):e.setAttribute(a,r);for(var u=n.length-1;0<=u;--u)!1!==(s=n[u]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,t.hasAttributeNS(i,a)||e.removeAttributeNS(i,a)):t.hasAttributeNS(null,a)||e.removeAttribute(a))}(t,e),n!==K&&n!==$||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===o?function(t,e){var n=t.value,o=e.value;G(t,e,"checked"),G(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===o?G(t,e,"selected"):"TEXTAREA"===o&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function G(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var X=3;function Z(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(Y(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=e.childNodes[s],o=t.childNodes[s-a],n||o;s++)if(o)if(n)if(J(o,n))(i=Z(o,n))!==n&&(e.replaceChild(i,n),a++);else{r=null;for(var c=s;c<e.childNodes.length;c++)if(J(e.childNodes[c],o)){r=e.childNodes[c];break}r?((i=Z(o,r))!==r&&a++,e.insertBefore(i,n)):o.id||n.id?(e.insertBefore(o,n),a++):(i=Z(o,n))!==n&&(e.replaceChild(i,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),s--}(t,e),e):null:t}function J(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===X&&t.nodeValue===e.nodeValue)}var Q=function(t){function s(t){var e;u(this,s);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(1<o?o-1:0),r=1;r<o;r++)i[r-1]=arguments[r];var a=h(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,t),s}(Error),tt=!!document.createDocumentFragment().children;function et(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(et.prototype,HTMLElement.prototype),Object.setPrototypeOf(et,HTMLElement);var nt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(e){return function(t){function a(){var t,e,n;u(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(e=n=h(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(i))))._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,t)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=D("context/available",n._makeContextReady)},h(n,e)}return p(a,e),i(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,j("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),a}()},function(e){return function(t){function n(){return u(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,e),i(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function l(t){u(this,l);var c=h(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,t));c._reduceProps=function(t,e){var n=t.props,o=t.shouldUpdate,i=c._hasKeys[e];if(-1===W.indexOf(e)&&i)throw new I(e,c);var r="_"+e,a=n[e],s=c[r];return o||c.shouldUpdateCallback(a,s)?(c[r]=a,c._props[e]=a,i&&f(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),e,a,c),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},c._isConnected=!1,c._props={},c._hasKeys={},c.updatedDebounced=T(function(){return c.updated&&c.updated()},50);var e=c.constructor.observedAttributes;return Array.isArray(e)&&e.forEach(function(t){var e,n=z(t),o=n in c;if(-1===W.indexOf(n)&&o)throw new I(n,c);c._hasKeys[n]=o,Object.defineProperty(c,n,e={get:function(){return this._props[n]},set:function(t){this.shouldUpdateCallback(this._props[n],t)&&(this._props[n]=t,o&&f(e.__proto__||Object.getPrototypeOf(e),n,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),c}return p(l,e),i(l,[{key:"connectedCallback",value:function(){var i=this;if(d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this)&&d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var e=z(t);if(i.hasAttribute(t)){var n=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=U(n,e)}(i,t),o=i._hasKeys[e];i._props[e]=n,o&&f(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),e,n,i)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(this.shouldUpdateCallback(n,e)){var o=z(t);this.hasAttribute(t)?this[o]=U(n):this[o]=null}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return-1<n.indexOf(t.replace(L,R))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),l}()},function(e){return function(t){function c(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=a(t,["template"]);u(this,c);var o=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,n));return o._template=e,o._hasTemplate=!!e,o._hasRendered=!1,o.updated=o.render,o}return p(c,e),i(c,[{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});tt||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var r=e(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(r))r.forEach(function(t){a.appendChild(t)});else if(r){if("string"==typeof r)throw new Q(this);a.appendChild(r)}if(t)d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: newTree should be an object");Z(e,t)}(this,s),function(){for(var t=void 0;t=q.pop();)delete t.isSameNode;q=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),c}()},function(e){return function(t){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,o=a(t,["styles"]);u(this,r);var i=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i._styles=n,i}return p(r,e),i(r,[{key:"connectedCallback",value:function(){d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),r}()})(function(t){function o(t){u(this,o);var e,n=h(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t));return n._id=((e=n.nodeName)in c||(c[e]=0),++c[e]),n}return p(o,et),i(o,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),o}()),ot={},it=function(t){function a(){var t,e,n;u(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(e=n=h(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(i))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,e)}return p(a,nt),i(a,null,[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:nt.uuidv4();if(t&&!ot[e]){var n=document.createElement("style"),o=document.createTextNode(t);ot[e]=!0,n.appendChild(o),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),a}();function rt(t,e){customElements.get(t)||customElements.define(t,e)}var at=/\n[\s]+$/,st=/^\n[\s]+/,ct=/[\s]+$/,lt=/^[\s]+/,ut=/[\n\s]+/g,dt=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],pt=["code","pre","textarea"],ht=function t(e,n){if(Array.isArray(n))for(var o,i,r=e.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))t(e,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=e.childNodes[e.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),e.appendChild(l),u=l),s===c-1&&(a=!1,-1===dt.indexOf(r)&&-1===pt.indexOf(r)?""===(o=u.nodeValue.replace(st,"").replace(ct,"").replace(at,"").replace(ut," "))?e.removeChild(u):u.nodeValue=o:-1===pt.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(st,i).replace(lt," ").replace(ct,"").replace(at,"").replace(ut," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===dt.indexOf(r)&&-1===pt.indexOf(r)?""===(o=u.nodeValue.replace(st,"").replace(at,"").replace(ut," "))?e.removeChild(u):u.nodeValue=o:-1===pt.indexOf(r)&&(o=u.nodeValue.replace(lt," ").replace(st,"").replace(at,"").replace(ut," "),u.nodeValue=o));var d=l.nodeName;d&&(r=d.toLowerCase()),e.appendChild(l)}}}};function ft(t,e){var n,o;return[(n=document.createElement("div"),n.setAttribute("class","o-sticky__placeholder js-sticky__placeholder"),n),(o=document.createElement("div"),o.setAttribute("class","o-sticky__box js-sticky__box"),ht(o,[e]),o)]}var yt="pageYOffset"in window?function(){return window.pageYOffset}:function(){var t=document,e=t.body;return t.documentElement.scrollTop||e.scrollTop||0};var vt,_t=function(){if(!window.getComputedStyle)return null;var t=window.getComputedStyle(document.documentElement,""),e=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1],lowercase:e,css:"-"+e+"-",js:e[0].toUpperCase()+e.slice(1)}}().lowercase,bt=function(){var t=window.requestAnimationFrame||window[_t+"RequestAnimationFrame"];if(t)t=t.bind(window);else{var i=0;t=function(t){var e=Date.now(),n=Math.max(0,16-(e-i)),o=setTimeout(function(){t(e+n)},n);return i=e+n,o}}return t}(),mt=(vt=(vt=window.cancelAnimationFrame||window[_t+"CancelAnimationFrame"]||window[_t+"CancelRequestAnimationFrame"])?vt.bind(window):function(t){clearTimeout(t)},void 0),kt=0,gt=["resize","orientationchange"].join(" "),Ct=[gt,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),xt=function(){function t(){var f=this;u(this,t),this._change=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).type;0<=gt.indexOf(t)&&(f.forceRepaint=!0),f.framePending||bt(function(){for(var t=f.containerNodes,e=f.forceRepaint,n=f.lastScrollTop,o=f.isDirectionFrozen,i=f.lastDirection,r=yt(),a=r-n,s=o?i:0<a?1:a<0?-1:i,c=0,l=t.length;c<l;c++){var u=t[c],d=u.getBoundingClientRect(),p=d.top,h=d.bottom;j("sticky-container/"+(p<=0&&0<=h?"active":"idle"),{containerTop:p,containerBottom:h,direction:s,forceRepaint:e},u)}f.lastScrollTop=r,f.lastDirection=s,f.framePending=!1,f.forceRepaint=!1})},this._freezeDirection=function(){f.isDirectionFrozen=!0,f.lastDirection=-1},this._thawDirection=function(){f.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return i(t,[{key:"addContainer",value:function(t){this.containerNodes.push(t),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=S(window,Ct,this._change),this._unFreezeDirection=D("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=D("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(t){var e,n,o;t&&(e=this.containerNodes,n=t,-1<(o=e.indexOf(n))&&e.splice(o,1)),--kt<=0&&mt&&(this._off(),delete this.containerNodes,mt=null)}}]),t}();function Ot(){return mt||(mt=new xt),kt++,mt}function wt(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=e.length,i={},r=0;r<o;++r){var a=e[r];i[a.toUpperCase()]=a}return i}function At(t,e){for(var n=[],o=Object.keys(e),i=o.length,r=0;r<i;++r){var a=o[r];n.push(a+":"+e[a]+";")}t.style.cssText=n.join("")}var Nt=wt("IS_IN_FLOW","IS_STICKY","IS_BOTTOM"),St=function(){function e(t){u(this,e),Tt.call(this),this.wcNode=t,this.state=Nt.IS_IN_FLOW,this.lastDirection=0,this.placeholder=t.querySelector(e.DEFAULTS.placeholderClass),this.box=t.querySelector(e.DEFAULTS.boxClass),this.spy=Ot()}return i(e,[{key:"_on",value:function(){this._off(),this._unActive=D("sticky-container/active",this._update,this._contextNode),this._unIdle=D("sticky-container/idle",this._update,this._contextNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(),delete this.spy,delete this.roodNode,delete this.placeholder,delete this.box,delete this._contextNode}},{key:"contextNode",set:function(t){this._contextNode=t,this._on()}}]),e}();St.DEFAULTS={placeholderClass:".js-sticky__placeholder",boxClass:".js-sticky__box",isStickyClass:"is-sticky-sticky",isBottomClass:"is-sticky-bottom",isScrollUp:"is-sticky-scroll-up",isScrollDown:"is-sticky-scroll-down"};var Tt=function(){var v=this;this._update=function(t){var e=t.detail,n=e.containerBottom,o=e.direction,i=e.forceRepaint,r=v.wcNode,a=v.state,s=o!==v.lastDirection,c=r.offsetHeight,l=r.offsetWidth,u=r.getBoundingClientRect(),d=u.left,p=u.top,h=0<p,f=p<=0&&c<=n,y=p<=0&&n<c;s&&1===o?(m(r,St.DEFAULTS.isScrollDown),x(r,St.DEFAULTS.isScrollUp)):s&&-1===o&&(m(r,St.DEFAULTS.isScrollUp),x(r,St.DEFAULTS.isScrollDown)),f&&(i||a!==Nt.IS_STICKY)&&(v.state=Nt.IS_STICKY,m(r,St.DEFAULTS.isStickyClass),x(r,St.DEFAULTS.isBottomClass),At(v.placeholder,{height:c+"px"}),At(v.box,{left:d+"px",width:l+"px"})),y&&(i||a!==Nt.IS_BOTTOM)&&(v.state=Nt.IS_BOTTOM,x(r,St.DEFAULTS.isStickyClass),m(r,St.DEFAULTS.isBottomClass),At(v.placeholder,{height:c+"px"}),At(v.box,{left:d+"px",width:l+"px"})),h&&(i||a!==Nt.IS_IN_FLOW)&&(v.state=Nt.IS_IN_FLOW,x(r,St.DEFAULTS.isStickyClass),x(r,St.DEFAULTS.isBottomClass),At(v.placeholder,{height:""}),At(v.box,{left:"",width:""}))}},Et=wt("IS_IDLE","IS_ACTIVE"),jt=function(){function n(t){var e=this;u(this,n),this._active=function(){e.state!==Et.IS_ACTIVE&&(e.state=Et.IS_ACTIVE,m(e.roodNode,n.DEFAULTS.isActiveClass),x(e.roodNode,n.DEFAULTS.isIdleClass))},this._idle=function(){e.state!==Et.IS_IDLE&&(e.state=Et.IS_IDLE,m(e.roodNode,n.DEFAULTS.isIdleClass),x(e.roodNode,n.DEFAULTS.isActiveClass))},this.roodNode=t,this.state=Et.IS_IDLE,this.spy=Ot(),this.spy.addContainer(t),this._on()}return i(n,[{key:"_on",value:function(){this._off(),this._unActive=D("sticky-container/active",this._active,this.roodNode),this._unIdle=D("sticky-container/idle",this._idle,this.roodNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(this.roodNode),delete this.spy,delete this.roodNode}}]),n}();jt.DEFAULTS={isActiveClass:"is-sticky-container-active",isIdleClass:"is-sticky-container-idle"};var Dt=function(t){function e(){u(this,e);var t=h(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{styles:".o-sticky-container {\n  position: relative;\n  display: block; }\n\n.o-sticky-container--debug {\n  background: rgba(255, 255, 0, 0.5); }\n  .o-sticky-container--debug::before {\n    content: ''; }\n  .o-sticky-container--debug.is-sticky-container-active {\n    background: green; }\n    .o-sticky-container--debug.is-sticky-container-active::before {\n      content: 'is-active'; }\n  .o-sticky-container--debug.is-sticky-container-idle::before {\n    content: 'is-idle'; }\n"}));return t.provideContext(),t}return p(e,it),i(e,null,[{key:"observedAttributes",get:function(){return["debug"]}}]),i(e,[{key:"connectedCallback",value:function(){d(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this);var t=this.debug;this.className=n(this.initialClassName,"o-sticky-container js-sticky-container",{"o-sticky-container--debug":t}),this.stickyContainer=new jt(this)}},{key:"disconnectedCallback",value:function(){this.stickyContainer&&(this.stickyContainer.destroy(),delete this.stickyContainer)}}]),e}();Dt.tagName="axa-sticky-container";var Pt=function(t){function e(){u(this,e);var t=h(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{styles:".o-sticky {\n  display: block; }\n\n.o-sticky__placeholder {\n  display: block;\n  height: 0; }\n\n.o-sticky__box {\n  display: block; }\n  .is-sticky-sticky > .o-sticky__box {\n    position: fixed;\n    top: 0;\n    z-index: 1020; }\n  .is-sticky-bottom > .o-sticky__box {\n    position: absolute;\n    bottom: 0;\n    z-index: 1020; }\n  .is-sticky-in-flow > .o-sticky__box {\n    position: static; }\n\n.o-sticky--debug > .o-sticky__box {\n  background: rgba(0, 0, 255, 0.5);\n  color: #fff; }\n  .o-sticky--debug > .o-sticky__box::before, .o-sticky--debug > .o-sticky__box::after {\n    content: '';\n    color: yellow; }\n\n.o-sticky--debug.is-sticky-sticky > .o-sticky__box {\n  background: rgba(255, 0, 0, 0.7); }\n  .o-sticky--debug.is-sticky-sticky > .o-sticky__box::before {\n    content: 'is-sticky'; }\n\n.o-sticky--debug.is-sticky-bottom > .o-sticky__box {\n  background: rgba(255, 165, 0, 0.7); }\n  .o-sticky--debug.is-sticky-bottom > .o-sticky__box::before {\n    content: 'is-bottom'; }\n\n.o-sticky--debug.is-sticky-in-flow > .o-sticky__box::before {\n  content: 'is-in-flow'; }\n\n.o-sticky--debug.is-sticky-scroll-up > .o-sticky__box::after {\n  content: 'is-scroll-up'; }\n\n.o-sticky--debug.is-sticky-scroll-down > .o-sticky__box::after {\n  content: 'is-scroll-down'; }\n",template:ft}));return t.consumeContext("axa-sticky-container"),t}return p(e,it),i(e,null,[{key:"observedAttributes",get:function(){return["debug"]}}]),i(e,[{key:"willRenderCallback",value:function(){var t=this.debug;this.className=n(this.initialClassName,"o-sticky js-sticky",{"o-sticky--debug":t})}},{key:"didRenderCallback",value:function(){this.sticky&&this.sticky.destroy(),this.sticky=new St(this);var t=this.contextNode;t&&this.contextCallback(t)}},{key:"contextCallback",value:function(t){this.sticky&&(this.sticky.contextNode=t)}},{key:"disconnectedCallback",value:function(){this.sticky&&(this.sticky.destroy(),delete this.sticky)}}]),e}();return Pt.tagName="axa-sticky",rt(Dt.tagName,Dt),rt(Pt.tagName,Pt),{AXASticky:Pt,AXAStickyContainer:Dt}});
