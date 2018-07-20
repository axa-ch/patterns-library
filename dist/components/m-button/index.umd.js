!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";var p=/\n[\s]+$/,f=/^\n[\s]+/,h=/[\s]+$/,b=/^[\s]+/,m=/[\n\s]+/g,v=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],g=["code","pre","textarea"],k=function t(e,n){if(Array.isArray(n))for(var o,r,i=e.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var l=n[s];if(Array.isArray(l))t(e,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=e.childNodes[e.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),e.appendChild(l),c=l),s===u-1&&(a=!1,-1===v.indexOf(i)&&-1===g.indexOf(i)?""===(o=c.nodeValue.replace(f,"").replace(h,"").replace(p,"").replace(m," "))?e.removeChild(c):c.nodeValue=o:-1===g.indexOf(i)&&(r=0===s?"":" ",o=c.nodeValue.replace(f,r).replace(b," ").replace(h,"").replace(p,"").replace(m," "),c.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===v.indexOf(i)&&-1===g.indexOf(i)?""===(o=c.nodeValue.replace(f,"").replace(p,"").replace(m," "))?e.removeChild(c):c.nodeValue=o:-1===g.indexOf(i)&&(o=c.nodeValue.replace(b," ").replace(f,"").replace(p,"").replace(m," "),c.nodeValue=o));var d=l.nodeName;d&&(i=d.toLowerCase()),e.appendChild(l)}}}};var x=function(t){var e,n=document.createElement("div");return n.innerHTML=t,e=n.childNodes,Array.isArray(e)?e:[].slice.call(e)};var t,y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),w=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},d=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},_=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},a=function(t,e){var n={};for(var o in t)0<=e.indexOf(o)||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},C=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},O=function t(e,n,o,r){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},s=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},N=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},A=(function(t){!function(){var a={}.hasOwnProperty;function s(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=void 0===n?"undefined":y(n);if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var r=s.apply(null,n);r&&t.push(r)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}t.exports?(s.default=s,t.exports=s):window.classNames=s}()}(t={exports:{}},t.exports),t.exports);function n(t,e){var n,o,r,i=t.tag,a=void 0===i?"button":i,s=t.color,u=t.href,l=void 0===u?"#":u,c=t.size,d=t.ghost,p=t.classes,f=t.motion,h=t.gpu,b=t.arrow,m=t.icon,v=void 0===m?"":m,g=A("m-button","js-button",p,(w(n={},"m-button--"+s,s),w(n,"m-button--"+c,c),w(n,"m-button--ghost",d),w(n,"m-button--motion",f),w(n,"m-button--gpu",h),w(n,"m-button--arrow",b),w(n,"m-button--generic-icon",v&&!b),n)),y=void 0,_=void 0;return b?y=x('<axa-icon icon="arrow" classes="m-button__arrow"></axa-icon>'):v&&(_=x('<axa-icon icon="'+v+'" classes="m-button__icon"></axa-icon>')),"a"===a.toLowerCase()?((r=document.createElement("a")).setAttribute("href",""+String(l)),r.setAttribute("class",""+String(g)),k(r,["\n      ",e,"\n      ",y||_,"\n    "]),r):((o=document.createElement("button")).setAttribute("type","button"),o.setAttribute("class",""+String(g)),k(o,["\n      ",e,"\n      ",y||_,"\n    "]),o)}var u={},l=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,o=void 0!==n&&n,r=e.cancelable,i=void 0!==r&&r,a=e.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(t,o,i,s);var l=u.preventDefault;return u.preventDefault=function(){l.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},u}}();function E(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new l(e,i({},o,{detail:n}));return t.dispatchEvent(r)}var T=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function P(t){for(var r=t.className,i=!1,a=!0,e=arguments.length,n=Array(1<e?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var s=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(r);var n,o;e?i=!0:a=!1;return{className:t,hasClass:e}});return!(!a&&!i)&&s}var j=/\s+/,S={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==t[r=n[i]])return e[r];return""}()};function R(n,t,o,r){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=e.capture,a=void 0!==i&&i,s=e.passive,u=void 0===s||s;if(S[t]&&(t=S[t]),!n||!t)return null;var l=void 0===o?"undefined":y(o),c=o&&"string"===l;if("function"===l){if(r){var d=r;a=d.capture,u=d.passive}r=o}for(var p=T?{capture:a,passive:u}:a,f=c?function(t){var e=t.target;for(;!P(e,o)&&e!==n;)e=e.parentNode;if(e!==n)return r(t,e)}:r,h=t.split(j),b=h.length,m=0;m<b;++m)n.addEventListener(h[m],f,p);return function t(){for(var e=0;e<b;++e)n.removeEventListener(h[e],f,p);!function(t,e){if(!t)return;for(var n=Object.keys(t),o=n.length,r=0;r<o;++r){var i=n[r];if(t[i]===e)return delete t[i]}}(this,t)}}function D(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,i=void 0!==e&&e,n=t.trailing,a=void 0===n||n,s=t.maxWait,u=void 0!==s&&s,l=void 0,c=void 0,d=void 0,p=void 0,f=!1,h=r!==u,b=!1!==u;function m(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return l=e,h&&(c&&clearTimeout(c),c=setTimeout(v,r)),b&&!d&&(d=setTimeout(g,u)),i&&!f&&(f=!0,p=o.apply(void 0,N(l))),p}return m.flush=function(){(c||d)&&(p=o.apply(void 0,N(l)));return _(),p},m.cancel=_,m;function v(){d&&clearTimeout(d),y()}function g(){c&&clearTimeout(c),y()}function y(){a&&(p=o.apply(void 0,N(l))),d=c=null,f=!1}function _(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var L=window.__subscriptions;function M(t,e){var n=R(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);L[t]||(L[t]={count:0});var o,r=L[t];return r.count++,r.onsubscribe||(r.onsubscribe=D((o=t,function(){E(document,"pubsub/onsubscribe",o),E(document,"pubsub/onsubscribe/"+o,o),L[o]&&delete L[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete L[t]}}R(document,"pubsub/onsubscribe",function(t){var e=t.detail;L[e]||(L[e]={count:0});var n=L[e],o=n.queue;Array.isArray(o)&&(o.forEach(function(t){var e=s(t,3),n=e[0],o=e[1],r=e[2];E(r,n,o)}),delete n.queue)});var U,e=function(t,e){return t===e},I=(U=function(){var t;return(t=console).log.apply(t,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:e;return function(){for(var t=arguments.length,o=Array(t),e=0;e<t;e++)o[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,e))?U.apply(void 0,arguments):void 0}}}}()(!0),function(t){function u(t,e){var n;c(this,u);for(var o="\n    Native Property >>>"+t+"<<< exists already at "+e.nodeName+"#"+e._id+" and evaluates to -> "+e[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,i=Array(2<r?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s=C(this,(n=u.__proto__||Object.getPrototypeOf(u)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,u),s.name="PropertyExistsException",s}return _(u,t),u}(Error)),o=/[A-Z]/g;function V(t,e,n){var o=t.toLowerCase(),r=n.charAt(e+1);return 0===e||r.toUpperCase()===r?o:"-"+o}var z=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function F(e,n){var t=e;if(e&&n!==e){if(z.test(e))try{t=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else t=!0;return t}var K=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,H=/[-_]+/g;function q(t){return t.replace(K,W)}function W(t,e){return 0==+t||H.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}function $(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=F(n,e)}var B=["title","checked","disabled"],G=[];var X=1,Y=3,Z=8;function J(t,e){var n=t.nodeType,o=t.nodeName;n===X&&function(t,e){for(var n=e.attributes,o=t.attributes,r=null,i=null,a=null,s=null,u=o.length-1;0<=u;--u)if(s=o[u],a=s.name,r=s.namespaceURI,i=s.value,r){var l=s.localName;e.getAttributeNS(r,l||a)!==i&&e.setAttributeNS(r,a,i)}else e.hasAttribute(a)?e.getAttribute(a)!==i&&("null"===i||"undefined"===i?e.removeAttribute(a):e.setAttribute(a,i)):e.setAttribute(a,i);for(var c=n.length-1;0<=c;--c)!1!==(s=n[c]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,t.hasAttributeNS(r,a)||e.removeAttributeNS(r,a)):t.hasAttributeNS(null,a)||e.removeAttribute(a))}(t,e),n!==Y&&n!==Z||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===o?function(t,e){var n=t.value,o=e.value;Q(t,e,"checked"),Q(t,e,"disabled"),n!==o&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===o?Q(t,e,"selected"):"TEXTAREA"===o&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function Q(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var tt=3;function et(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(J(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=e.childNodes[s],o=t.childNodes[s-a],n||o;s++)if(o)if(n)if(nt(o,n))(r=et(o,n))!==n&&(e.replaceChild(r,n),a++);else{i=null;for(var u=s;u<e.childNodes.length;u++)if(nt(e.childNodes[u],o)){i=e.childNodes[u];break}i?((r=et(o,i))!==i&&a++,e.insertBefore(r,n)):o.id||n.id?(e.insertBefore(o,n),a++):(r=et(o,n))!==n&&(e.replaceChild(r,n),a++)}else e.appendChild(o),a++;else e.removeChild(n),s--}(t,e),e):null:t}function nt(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===tt&&t.nodeValue===e.nodeValue)}var ot=function(t){function s(t){var e;c(this,s);for(var n="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=C(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return _(s,t),s}(Error),rt=!!document.createDocumentFragment().children;function it(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(it.prototype,HTMLElement.prototype),Object.setPrototypeOf(it,HTMLElement);var at=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(e){return function(t){function a(){var t,e,n;c(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=n=C(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(r))))._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,t)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=M("context/available",n._makeContextReady)},C(n,e)}return _(a,e),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;L[t]||(L[t]={count:0,queue:[]});var o=L[t].queue;Array.isArray(o)?o.push([t,e,n]):E(n,t,e)}("context/available",this.__contextName=t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),a}()},function(e){return function(t){function n(){return c(this,n),C(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return _(n,e),r(n,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else O(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else O(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else O(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",t,this)}}]),n}()},function(e){return function(t){function l(t){c(this,l);var u=C(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,t));u._reduceProps=function(t,e){var n=t.props,o=t.shouldUpdate,r=u._hasKeys[e];if(-1===B.indexOf(e)&&r)throw new I(e,u);var i="_"+e,a=n[e],s=u[i];return o||u.shouldUpdateCallback(a,s)?(u[i]=a,u._props[e]=a,r&&O(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),e,a,u),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},u._isConnected=!1,u._props={},u._hasKeys={},u.updatedDebounced=D(function(){return u.updated&&u.updated()},50);var e=u.constructor.observedAttributes;return Array.isArray(e)&&e.forEach(function(t){var e,n=q(t),o=n in u;if(-1===B.indexOf(n)&&o)throw new I(n,u);u._hasKeys[n]=o,Object.defineProperty(u,n,e={get:function(){return this._props[n]},set:function(t){this.shouldUpdateCallback(this._props[n],t)&&(this._props[n]=t,o&&O(e.__proto__||Object.getPrototypeOf(e),n,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),u}return _(l,e),r(l,[{key:"connectedCallback",value:function(){var r=this;if(d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this)&&d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var e=q(t);if(r.hasAttribute(t)){var n=$(r,t),o=r._hasKeys[e];r._props[e]=n,o&&O(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),e,n,r)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(this.shouldUpdateCallback(n,e)){var o=q(t);this.hasAttribute(t)?this[o]=F(n):this[o]=null}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return-1<n.indexOf(t.replace(o,V))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),l}()},function(e){return function(t){function u(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.template,n=a(t,["template"]);c(this,u);var o=C(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,n));return o._template=e,o._hasTemplate=!!e,o._hasRendered=!1,o.updated=o.render,o}return _(u,e),r(u,[{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!0);n.childrenFragment.appendChild(e)});rt||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var i=e(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(t){a.appendChild(t)});else if(i){if("string"==typeof i)throw new ot(this);a.appendChild(i)}if(t)d(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":y(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":y(e)))throw new Error("componentMorph: newTree should be an object");et(e,t)}(this,s),function(){for(var t=void 0;t=G.pop();)delete t.isSameNode;G=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),u}()},function(e){return function(t){function i(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,n=void 0===e?"":e,o=a(t,["styles"]);c(this,i);var r=C(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return _(i,e),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),i}()})(function(t){function o(t){c(this,o);var e,n=C(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t));return n._id=((e=n.nodeName)in u||(u[e]=0),++u[e]),n}return _(o,it),r(o,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),o}()),st={},ut=function(t){function a(){var t,e,n;c(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=n=C(this,(t=a.__proto__||Object.getPrototypeOf(a)).call.apply(t,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},C(n,e)}return _(a,at),r(a,null,[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:at.uuidv4();if(t&&!st[e]){var n=document.createElement("style"),o=document.createTextNode(t);st[e]=!0,n.appendChild(o),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),a}();var lt=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ct(n,t,o){var e,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,u=void 0===s||s,l=n.ownerDocument.documentElement,c=R(l,t,function(t){var e=t.target;if(!n.contains(e)&&n!==e)return o(t)},{capture:a,passive:u});return e=l,lt&&(e.style.cursor="pointer"),c}var dt=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var o=e.length,r={},i=0;i<o;++i){var a=e[i];r[a.toUpperCase()]=a}return r}("click","keyup","enter","move","leave","Escape","Esc"),pt="axa-click",ft="data-prevent-default";(function(){function o(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,o),this._handleClick=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault();var n=!i._lastToggleNode,o=e!==i._lastToggleNode,r=!n&&!o;n?(i._notify(dt.ENTER,e),i._onInteractive()):o&&i._notify(dt.MOVE,e,i._lastToggleNode),i._lastToggleNode=e,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(t,e){i.shouldPreventDefault(e||t.currentTarget)&&t.preventDefault(),i._close()},this._handleKeyUp=function(t){(t.key===dt.ESCAPE||t.key===dt.ESC||27===t.keyCode)&&(t.preventDefault(),i._close())},this._init(t,e)}return r(o,[{key:"_init",value:function(t,e){t&&(this._wcNode=t),e&&(this._options=i({},o.DEFAULTS,e));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=R(this._container,dt.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=R(this._container,dt.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ct(this._container,dt.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=R(this._container.ownerDocument,dt.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(t){return t.hasAttribute(ft)?$(t,ft):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(dt.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(t,e,n){t in this&&"function"==typeof this[t]&&this[t](e,n)}},{key:"enter",value:function(t){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(t,e){}},{key:"leave",value:function(t){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ht=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c(this,n),this.wcNode=t,this.options=i({},n.DEFAULTS,e),this.handleClick=this.handleClick.bind(this),this.init()}return r(n,[{key:"init",value:function(){this.button=this.wcNode.querySelector(this.options.button),this.on()}},{key:"on",value:function(){this.off(),this.unClick=R(this.button,"click",this.handleClick,{passive:!1})}},{key:"off",value:function(){this.unClick&&this.unClick()}},{key:"handleClick",value:function(t){E(this.wcNode,pt,null,{bubbles:!0,cancelable:!0,composed:!0})||t.preventDefault()}},{key:"destroy",value:function(){this.off(),this.button&&delete this.button,this.wcNode&&delete this.wcNode,this.options&&delete this.options,delete this.handleClick}}]),n}();ht.DEFAULTS={button:".js-button"};var bt,mt,vt=function(t){function e(){return c(this,e),C(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{styles:"@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-button {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10px 30px;\n  border-width: 2px;\n  border-style: solid;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  color: #fff;\n  background: #00008f;\n  border-color: #00008f;\n  border-bottom-color: #00005b; }\n  @media (min-width: 576px) {\n    .m-button {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-button:hover, .m-button:active, .m-button:focus {\n    cursor: pointer;\n    text-decoration: none;\n    outline: none; }\n  .m-button:disabled {\n    cursor: default !important; }\n  a.m-button {\n    display: inline-block; }\n  .m-button:hover, .m-button:active, .m-button:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .m-button:disabled {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button__icon {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: -2px;\n  margin-bottom: 0;\n  height: calc(100% + 2px);\n  padding: 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-left: 2px solid currentColor; }\n\n.m-button__arrow {\n  width: 13px;\n  height: 13px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -6.5px;\n  right: 30px; }\n\n.m-button--red {\n  color: #fff;\n  background: #f07662;\n  border-color: #f07662;\n  border-bottom-color: #ec4d33; }\n  .m-button--red:hover, .m-button--red:active, .m-button--red:focus {\n    background: #ec4d33;\n    border-color: #ec4d33;\n    color: #fff; }\n  .m-button--red:disabled {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button--white {\n  color: #fff;\n  background: #fff;\n  border-color: #fff;\n  border-bottom-color: #00005b; }\n  .m-button--white:hover, .m-button--white:active, .m-button--white:focus {\n    background: #00005b;\n    border-color: #00005b;\n    color: #fff; }\n  .m-button--white:disabled {\n    background: #999 !important;\n    border-color: #999 !important; }\n\n.m-button--ghost {\n  color: #00008f;\n  background: transparent;\n  border-color: #00008f; }\n  .m-button--ghost:hover, .m-button--ghost:active, .m-button--ghost:focus {\n    color: #00005b;\n    background: transparent;\n    border-color: #00005b; }\n  .m-button--ghost.m-button--red {\n    color: #f07662;\n    background: transparent;\n    border-color: #f07662; }\n    .m-button--ghost.m-button--red:hover, .m-button--ghost.m-button--red:active, .m-button--ghost.m-button--red:focus {\n      color: #ec4d33;\n      background: transparent;\n      border-color: #ec4d33; }\n  .m-button--ghost.m-button--white {\n    color: #fff;\n    background: transparent;\n    border-color: #fff; }\n    .m-button--ghost.m-button--white:hover, .m-button--ghost.m-button--white:active, .m-button--ghost.m-button--white:focus {\n      color: #3b3fd8;\n      background: #fff;\n      border-color: #fff; }\n\n.m-button--gpu {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.m-button--motion {\n  z-index: 0;\n  overflow: hidden;\n  -webkit-transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;\n  transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s; }\n  .m-button--motion::after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: -1;\n    display: block;\n    width: 0.001px;\n    height: 550px;\n    content: '';\n    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);\n            transform: translateX(-50%) translateY(-50%) rotate(45deg);\n    -webkit-transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;\n    transition: width 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s; }\n  .m-button--motion:hover::after, .m-button--motion:focus::after {\n    width: 110%; }\n  .m-button--motion::after {\n    background: #00005b; }\n  .m-button--motion:hover, .m-button--motion:focus {\n    background: #00008f;\n    color: #fff; }\n    .m-button--motion:hover::after, .m-button--motion:focus::after {\n      background: #00005b; }\n  .m-button--motion.m-button--red::after {\n    background: #ec4d33; }\n  .m-button--motion.m-button--red:hover, .m-button--motion.m-button--red:focus {\n    background: #f07662;\n    color: #fff; }\n    .m-button--motion.m-button--red:hover::after, .m-button--motion.m-button--red:focus::after {\n      background: #ec4d33; }\n  .m-button--motion.m-button--white::after {\n    background: #fff; }\n  .m-button--motion.m-button--white:hover, .m-button--motion.m-button--white:focus {\n    background: #fff;\n    color: #3b3fd8; }\n    .m-button--motion.m-button--white:hover::after, .m-button--motion.m-button--white:focus::after {\n      background: #fff; }\n  .m-button--motion.m-button--ghost {\n    background: transparent !important; }\n  .m-button--motion:hover .m-button__arrow, .m-button--motion:active .m-button__arrow, .m-button--motion:focus .m-button__arrow {\n    -webkit-animation-duration: 0.6s;\n            animation-duration: 0.6s;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    -webkit-animation-name: fadeOutRightInLeft;\n            animation-name: fadeOutRightInLeft; }\n\n.m-button--generic-icon {\n  padding-right: 70px;\n  overflow: hidden; }\n\n.m-button--arrow {\n  padding-right: 55px; }\n\n.m-button--x-pad-20 {\n  padding-right: 20px;\n  padding-left: 20px; }\n  .m-button--x-pad-20.m-button--arrow {\n    padding-right: 45px; }\n  .m-button--x-pad-20 .m-button__arrow {\n    right: 20px; }\n\n.m-button--x-pad-40 {\n  padding-right: 40px;\n  padding-left: 40px; }\n  .m-button--x-pad-40.m-button--arrow {\n    padding-right: 65px; }\n  .m-button--x-pad-40 .m-button__arrow {\n    right: 40px; }\n\n.m-button--sm {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 5.5px;\n  padding-bottom: 5.5px;\n  border-width: 1px; }\n  @media (min-width: 576px) {\n    .m-button--sm {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-button--sm .m-button__icon {\n    width: 30px;\n    height: 30px;\n    height: calc(100% + 1px);\n    padding: 5px;\n    margin-top: -1px;\n    border-left: 1px solid currentColor; }\n  .m-button--sm.m-button--generic-icon {\n    padding-right: 60px;\n    overflow: hidden; }\n\n.m-button--lg {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 11px;\n  padding-bottom: 11px; }\n  @media (min-width: 576px) {\n    .m-button--lg {\n      font-size: 16px; } }\n  .m-button--lg.m-button--arrow {\n    padding-right: 59px; }\n  .m-button--lg .m-button__icon {\n    width: 50px;\n    height: 50px;\n    height: calc(100% + 2px);\n    padding: 11px; }\n  .m-button--lg .m-button__arrow {\n    width: 17px;\n    height: 17px;\n    margin-top: -8.5px; }\n  .m-button--lg.m-button--generic-icon {\n    padding-right: 80px;\n    overflow: hidden; }\n",template:n}))}return _(e,ut),r(e,null,[{key:"observedAttributes",get:function(){return["arrow","classes","color","ghost","motion","size","tag","href","icon"]}}]),r(e,[{key:"didRenderCallback",value:function(){this.button&&this.button.destroy(),this.button=new ht(this)}},{key:"disconnectedCallback",value:function(){this.button&&(this.button.destroy(),delete this.button)}}]),e}();return vt.tagName="axa-button",bt=vt.tagName,mt=vt,customElements.get(bt)||customElements.define(bt,mt),vt});
