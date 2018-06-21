!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e={},t=function(t){return t in e||(e[t]=0),++e[t]},n=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,u=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,u);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},c=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var u=i.set;void 0!==u&&u.call(o,r)}return r},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new n(t,a({},o,{detail:r}));return e.dispatchEvent(i)}var v=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function y(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var u=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&u}var b=/\s+/,_={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function m(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,u=void 0!==a&&a,s=i.passive,c=void 0===s||s;if(_[t]&&(t=_[t]),!e||!t)return null;var l=void 0===n?"undefined":r(n),d=n&&"string"===l;if("function"===l){if(o){var p=o;u=p.capture,c=p.passive}o=n}for(var f=v?{capture:u,passive:c}:u,h=d?function(t){var r=t.target;for(;!y(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,m=t.split(b),g=m.length,O=0;O<g;++O)e.addEventListener(m[O],h,f);return function t(){for(var n=0;n<g;++n)e.removeEventListener(m[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,u=n.maxWait,s=void 0!==u&&u,c=void 0,l=void 0,d=void 0,p=void 0,h=!1,v=t!==s,y=!1!==s;function b(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,v&&(l&&clearTimeout(l),l=setTimeout(_,t)),y&&!d&&(d=setTimeout(m,s)),o&&!h&&(h=!0,p=e.apply(void 0,f(c))),p}return b.flush=function(){(l||d)&&(p=e.apply(void 0,f(c)));return O(),p},b.cancel=O,b;function _(){d&&clearTimeout(d),g()}function m(){l&&clearTimeout(l),g()}function g(){a&&(p=e.apply(void 0,f(c))),l=null,d=null,h=!1}function O(){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),c=void 0,h=!1}}var O={};function C(e,t){var n=m(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);O[e]||(O[e]={count:0});var r,o=O[e];return o.count++,o.onsubscribe||(o.onsubscribe=g((r=e,function(){h(document,"pubsub/onsubscribe",r),h(document,"pubsub/onsubscribe/"+r,r),O[r]&&delete O[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete O[e]}}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;O[t]||(O[t]={count:0});var n=O[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=p(e,3),n=t[0],r=t[1],o=t[2];h(o,n,r)}),delete n.queue)});var x,w=function(e,t){return e===t},k=((x=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?x.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var r;o(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,u=Array(a>2?a-2:0),s=2;s<a;s++)u[s-2]=arguments[s];var c=l(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,i].concat(u)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return s(t,e),t}(Error)),A=/[A-Z]/g;function N(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var E=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function P(e,t){var n=e;if(e&&t!==e){if(E.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var j=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,T=/[-_]+/g;function S(e){return e.replace(j,R)}function R(e,t){return 0==+e||T.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var L=["title","checked","disabled"],M=[];var D=1,V=3,U=8;function I(e,t){var n=e.nodeType,r=e.nodeName;n===D&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,u=null,s=r.length-1;s>=0;--s)if(u=r[s],a=u.name,o=u.namespaceURI,i=u.value,o){var c=u.localName;t.getAttributeNS(o,c||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var l=n.length-1;l>=0;--l)!1!==(u=n[l]).specified&&(a=u.name,(o=u.namespaceURI)?(a=u.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==V&&n!==U||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;W(e,t,"checked"),W(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?W(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function W(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var H=3;function F(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(I(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,u=0;n=t.childNodes[u],r=e.childNodes[u-a],n||r;u++)if(r)if(n)if(q(r,n))(o=F(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var s=u;s<t.childNodes.length;s++)if(q(t.childNodes[s],r)){i=t.childNodes[s];break}i?((o=F(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=F(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),u--}(e,t),t):null:e}function q(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===H&&e.nodeValue===t.nodeValue)}var $=function(e){function t(e){var n;o(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];var s=l(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="TemplateNoStringReturnException",s}return s(t,e),t}(Error);function K(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(K.prototype,HTMLElement.prototype),Object.setPrototypeOf(K,HTMLElement);var z,G,B,Z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,r;o(this,n);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return t=r=l(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=C("context/available",r._makeContextReady)},l(r,t)}return s(n,e),i(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;O[e]||(O[e]={count:0,queue:[]});var r=O[e].queue;Array.isArray(r)?r.push([e,t,n]):h(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return o(this,n),l(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return s(n,e),i(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){o(this,n);var t=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,r){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[r];if(-1===L.indexOf(r)&&a)throw new k(r,t);var u="_"+r,s=o[r],c=t[u];return i||t.shouldUpdateCallback(s,c)?(t[u]=s,t._props[r]=s,a&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,s,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=g(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=S(e),o=r in t;if(-1===L.indexOf(r)&&o)throw new k(r,t);t._hasKeys[r]=o,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,o&&d(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return s(n,e),i(n,[{key:"connectedCallback",value:function(){var e=this;if(u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var r=S(t);if(e.hasAttribute(t)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=P(n,t)}(e,t),i=e._hasKeys[r];e._props[r]=o,i&&d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[S(e)]=P(n))}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(A,N))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=c(e,["template"]);o(this,n);var i=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return s(n,e),i(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});var s=o(this._props,this.childrenFragment),c=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){c.appendChild(e)});else if(s){if("string"==typeof s)throw new $(this);c.appendChild(s)}if(t)u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");F(t,e)}(this,l),function(){for(var e=void 0;e=M.pop();)delete e.isSameNode;M=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,i=c(e,["styles"]);o(this,n);var a=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return a._styles=r,a}return s(n,e),i(n,[{key:"connectedCallback",value:function(){u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&u(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function n(e){o(this,n);var r=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return r._id=t(r.nodeName),r}return s(n,K),i(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),J={},X=function(e){function t(){var e,n,r;o(this,t);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},l(r,n)}return s(t,Z),i(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z.uuidv4();if(e&&!J[t]){var n=document.createElement("style"),r=document.createTextNode(e);J[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}(),Q=".a-icon {\n  width: 50px;\n  height: 50px; }\n\n.a-icon--small {\n  width: 25px;\n  height: 25px; }\n",Y=/\n[\s]+$/,ee=/^\n[\s]+/,te=/[\s]+$/,ne=/^[\s]+/,re=/[\n\s]+/g,oe=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ie=["code","pre","textarea"],ae="http://www.w3.org/2000/svg",ue="#src--assets--icons--",se=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.icon,o=n.classes,i=void 0===o?"a-icon":o,a=n.pathPrefix,u=(window.__axaPLibConfig||{}).iconsPath||ue;return!0===a?u=ue:!1===a?u="":"string"==typeof a&&(u=a),(t=document.createElementNS(ae,"svg")).setAttribute("class",""+String(i)),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,u=0,s=n.length;u<s;u++){var c=n[u];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var l=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,l&&"#text"===l.nodeName?l.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),l=c),u===s-1&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=l.nodeValue.replace(ee,"").replace(te,"").replace(Y,"").replace(re," "))?t.removeChild(l):l.nodeValue=r:-1===ie.indexOf(i)&&(o=0===u?"":" ",r=l.nodeValue.replace(ee,o).replace(ne," ").replace(te,"").replace(Y,"").replace(re," "),l.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===oe.indexOf(i)&&-1===ie.indexOf(i)?""===(r=l.nodeValue.replace(ee,"").replace(Y,"").replace(re," "))?t.removeChild(l):l.nodeValue=r:-1===ie.indexOf(i)&&(r=l.nodeValue.replace(ne," ").replace(ee,"").replace(Y,"").replace(re," "),l.nodeValue=r));var d=c.nodeName;d&&(i=d.toLowerCase()),t.appendChild(c)}}}}(t,["\n      ",(e=document.createElementNS(ae,"use"),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+String(u)+String(r)),e.setAttribute("href",""+String(u)+String(r)),e),"\n    "]),t},ce=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Q,template:se}))}return s(t,X),i(t,null,[{key:"observedAttributes",get:function(){return["icon","classes","path-prefix"]}}]),t}();return ce.tagName="axa-icon",z=function(){window.customElements.define(ce.tagName,ce)},G=0,B=function(){if(0===G)try{z.apply(void 0,arguments),G+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",B,!1),document.addEventListener("WebComponentsReady",B,!1),ce});
