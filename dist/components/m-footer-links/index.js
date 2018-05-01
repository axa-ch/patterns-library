var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=(function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var a=void 0===r?"undefined":t(r);if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(o.apply(null,r));else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}(e={exports:{}},e.exports),e.exports),p=1,h=3,f=8;function v(e,t){var n=e.nodeType,o=e.nodeName;n===p&&function(e,t){for(var n=t.attributes,o=e.attributes,i=null,r=null,a=null,s=null,l=o.length-1;l>=0;--l)if(s=o[l],a=s.name,i=s.namespaceURI,r=s.value,i){var c=s.localName;t.getAttributeNS(i,c||a)!==r&&t.setAttributeNS(i,a,r)}else t.hasAttribute(a)?t.getAttribute(a)!==r&&("null"===r||"undefined"===r?t.removeAttribute(a):t.setAttribute(a,r)):t.setAttribute(a,r);for(var u=n.length-1;u>=0;--u)!1!==(s=n[u]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==h&&n!==f||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;m(e,t,"checked"),m(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?m(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function m(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var _=3;function y(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(v(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(b(o,n))(i=y(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var l=s;l<t.childNodes.length;l++)if(b(t.childNodes[l],o)){r=t.childNodes[l];break}r?((i=y(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=y(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function b(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===_&&e.nodeValue===t.nodeValue)}var g=[];function k(e){e.isSameNode=function(){return!0},g.push(e)}var x=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function w(e,t){var n=e;if(e&&t!==e){if(x.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}function C(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=w(n,t)}var A=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function O(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new A(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var E=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),N=/^\s+|\s{2,}|\s+$/g;function T(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function j(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=P.apply(void 0,[e].concat(n));if(!0!==i){var r=[].concat(n);Array.isArray(i)&&(r=i.reduce(S,[])),r&&(e.className+=" "+r.join(" "))}}function S(e,t){var n=t.className;return t.hasClass||e.push(n),e}function P(e){for(var t=e.className,n=!1,o=!0,i=arguments.length,r=Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];var s=r.map(function(e){var i=T(e).test(t);i?n=!0:o=!1;return{className:e,hasClass:i}});return!(!o&&!n)&&s}function D(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=P.apply(void 0,[e].concat(n));if(!1!==i){var r=[].concat(n);if(Array.isArray(i)&&(r=i.reduce(L,[])),r){var a=e.className;e.className=r.reduce(R,a)}}}function L(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function R(e,t){var n=T(t,"g");return e.replace(n," ").replace(N," ")}var M=/\s+/,U={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function F(e,n,o,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=r.capture,s=void 0!==a&&a,l=r.passive,c=void 0===l||l;if(U[n]&&(n=U[n]),!e||!n)return null;var u=void 0===o?"undefined":t(o),d=o&&"string"===u;if("function"===u){if(i){var p=i;s=p.capture,c=p.passive}i=o}for(var h=E?{capture:s,passive:c}:s,f=d?function(t){var n=t.target;for(;!P(n,o)&&n!==e;)n=n.parentNode;if(n!==e)return i(t,n)}:i,v=n.split(M),m=v.length,_=0;_<m;++_)e.addEventListener(v[_],f,h);return function t(){for(var n=0;n<m;++n)e.removeEventListener(v[n],f,h);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,t)}}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,a=void 0===r||r,s=n.maxWait,l=void 0!==s&&s,c=void 0,d=void 0,p=void 0,h=void 0,f=!1,v=t!==l,m=!1!==l;function _(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return c=o,v&&(d&&clearTimeout(d),d=setTimeout(y,t)),m&&!p&&(p=setTimeout(b,l)),i&&!f&&(f=!0,h=e.apply(void 0,u(c))),h}return _.flush=function(){(d||p)&&(h=e.apply(void 0,u(c)));return k(),h},_.cancel=k,_;function y(){p&&clearTimeout(p),g()}function b(){d&&clearTimeout(d),g()}function g(){a&&(h=e.apply(void 0,u(c))),d=null,p=null,f=!1}function k(){d&&(clearTimeout(d),d=null),p&&(clearTimeout(p),p=null),c=void 0,f=!1}}var V={};function z(e,t){var n=F(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);V[e]||(V[e]={count:0});var o,i=V[e];return i.count++,i.onsubscribe||(i.onsubscribe=I((o=e,function(){O(document,"pubsub/onsubscribe",o),O(document,"pubsub/onsubscribe/"+o,o),V[o]&&delete V[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete V[e]}}F(document,"pubsub/onsubscribe",function(e){var t=e.detail;V[t]||(V[t]={count:0});var n=V[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],i=t[2];O(i,n,o)}),delete n.queue)});var q=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,K=/[-_]+/g;function H(e){return e.replace(q,W)}function W(e,t){return 0==+e||K.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var $=/[A-Z]/g;function B(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var G=function(e,t){return e===t},Z=function(e){function t(e,o){var i;n(this,t);for(var r="Property >>>"+e+"<<< exists at "+o.nodeName+"#"+o._id+" and evaluates to -> "+o[e],a=arguments.length,l=Array(a>2?a-2:0),c=2;c<a;c++)l[c-2]=arguments[c];var u=s(this,(i=t.__proto__||Object.getPrototypeOf(t)).call.apply(i,[this,r].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return a(t,e),t}(Error);function J(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(J.prototype,HTMLElement.prototype),Object.setPrototypeOf(J,HTMLElement);var X,Y="throwed",Q=["title","checked","disabled"],ee={},te=function(e){return e in ee||(ee[e]=0),++ee[e]},ne=((X=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return function(){return e.apply(void 0,[].concat(n,o))?X.apply(void 0,arguments):void 0}}}})()(!0),function(e){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];n(this,i);var o=s(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));o._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,a=o._hasKeys[t];if(-1===Q.indexOf(t)&&a)throw new Z(t,o);var s="_"+t,c=n[t],u=o[s];return r||o.shouldUpdateCallback(c,u)?(o[s]=c,o._props[t]=c,a&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),t,c,o),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=z("context/enabled",o._makeContextReady)},o._initialise(e,t),o._id=te(o.nodeName),o._props={},o._hasKeys={},o.reRender=I(function(){return o.render()},50);var r=o.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var t,n=H(e),i=n in o;if(-1===Q.indexOf(n)&&i)throw new Z(n,o);o._hasKeys[n]=i,Object.defineProperty(o,n,t={get:function(){return this["_"+n]},set:function(e){var o="_"+n;this.shouldUpdateCallback(this[o],e)&&(this[o]=e,this._props[n]=e,i&&l(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),o}return a(i,J),o(i,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var e=this;if(!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=H(t);if(e.hasAttribute(t)){var o=C(e,t),r=e._hasKeys[n];e["_"+n]=o,e._props[n]=o,r&&l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),n,o,e)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[H(e)]=w(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes;Object.keys(e).filter(function(e){return t.indexOf(e.replace($,B))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var o=this._template;try{if(n){for(var a=document.createDocumentFragment(),s=[];this.firstChild;)s.push(this.firstChild),a.appendChild(this.firstChild);this._lightDOMRefs=s,this.childrenFragment=a}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!1);k(t),k(n),e.childrenFragment.appendChild(n)});var l=o(this._props,this.childrenFragment),c=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){c.appendChild(e)});else if(l){if("string"==typeof l){var u=new Error(Y);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),u}c.appendChild(l)}if(n)r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,c);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(c),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");y(n,e)}(this,d),function(){for(var e=void 0;e=g.pop();)delete e.isSameNode;g=[]}(),this._isMorphing=!1}}catch(u){u.message!==Y&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+u+"\n\nStack Trace: "+u.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):r(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;V[e]||(V[e]={count:0,queue:[]});var o=V[e].queue;Array.isArray(o)?o.push([e,t,n]):O(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else l(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),i}()),oe={},ie=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,ne),o(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ne.uuidv4();if(e&&!oe[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),oe[e]=!0}}}]),t}(),re=".m-footer-links {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  display: block;\n  margin-left: 0 !important; }\n  @media (max-width: 991px) {\n    .m-footer-links {\n      max-width: 33.33333%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 33.33333%;\n              flex: 0 0 33.33333%; } }\n  @media (max-width: 575px) {\n    .m-footer-links {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      padding: 0; } }\n\n.m-footer-links__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-footer-links__block {\n  margin-left: 60px; }\n  .m-footer-links__block:first-child {\n    margin-left: 0; }\n  @media (max-width: 575px) {\n    .m-footer-links__block {\n      position: relative; } }\n\n.m-footer-links__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__category {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em;\n      cursor: pointer;\n      position: relative;\n      padding: 20px 60px 20px 30px;\n      border-bottom: 1px solid #2425aa;\n      background: #3b3fd8; } }\n  @media (max-width: 575px) and (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n      .m-footer-links__category:hover, .m-footer-links__category:active, .m-footer-links__category:focus {\n        cursor: pointer; } }\n\n.m-footer-links__category__icon {\n  width: 10px;\n  height: 10px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  margin-top: -5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  display: none; }\n  .is-dropdown-open .m-footer-links__category__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  @media (max-width: 575px) {\n    .m-footer-links__category__icon {\n      display: block; } }\n\n.m-footer-links__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: block;\n  padding-top: 15px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list {\n      padding-top: 10px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list {\n      position: absolute;\n      top: 100%;\n      z-index: 1000;\n      height: 0;\n      min-width: 100%;\n      overflow: hidden;\n      -webkit-transition: height 0.3s ease;\n      transition: height 0.3s ease;\n      position: static;\n      display: block;\n      margin: 0;\n      padding: 0;\n      background: #3032c1; }\n      .is-dropdown-open > .m-footer-links__list {\n        height: auto; } }\n  @media (min-width: 576px) {\n    .m-footer-links__list {\n      height: auto !important; } }\n\n.m-footer-links__list-item {\n  display: block;\n  width: 100%;\n  margin-top: 10px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list-item {\n      margin-top: 8px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list-item {\n      margin-top: 0;\n      border-bottom: 1px solid #3b3fd8; }\n      .m-footer-links__list-item:last-child {\n        border-bottom: none; } }\n\n.m-footer-links__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 5px 0;\n  color: #fff; }\n  @media (min-width: 576px) {\n    .m-footer-links__link {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .is-footer-links__list-item-active > .m-footer-links__link, .m-footer-links__link:hover, .m-footer-links__link:active, .m-footer-links__link:focus {\n    color: rgba(255, 255, 255, 0.65);\n    text-decoration: none; }\n  @media (max-width: 575px) {\n    .m-footer-links__link {\n      padding: 20px 30px; } }\n\n.m-footer-links--cols-2 {\n  max-width: 41.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%; }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list {\n      -webkit-column-count: 2;\n              column-count: 2; } }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list-item {\n      display: inline-block; } }\n  @media (max-width: 991px) {\n    .m-footer-links--cols-2 {\n      max-width: 66.66667%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 66.66667%;\n              flex: 0 0 66.66667%; } }\n  @media (max-width: 575px) {\n    .m-footer-links--cols-2 {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n",ae=/\n[\s]+$/,se=/^\n[\s]+/,le=/[\s]+$/,ce=/^[\s]+/,ue=/[\n\s]+/g,de=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],pe=["code","pre","textarea"],he=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===de.indexOf(r)&&-1===pe.indexOf(r)?""===(o=u.nodeValue.replace(se,"").replace(le,"").replace(ae,"").replace(ue," "))?t.removeChild(u):u.nodeValue=o:-1===pe.indexOf(r)&&(i=0===s?"":" ",o=u.nodeValue.replace(se,i).replace(ce," ").replace(le,"").replace(ae,"").replace(ue," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===de.indexOf(r)&&-1===pe.indexOf(r)?""===(o=u.nodeValue.replace(se,"").replace(ae,"").replace(ue," "))?t.removeChild(u):u.nodeValue=o:-1===pe.indexOf(r)&&(o=u.nodeValue.replace(ce," ").replace(se,"").replace(ae,"").replace(ue," "),u.nodeValue=o));var d=c.nodeName;d&&(r=d.toLowerCase()),t.appendChild(c)}}}};var fe=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},ve='<axa-icon icon="angle-bracket-down" classes="m-footer-links__category__icon"></axa-icon>';function me(e){var t,n,o,i=e.title,r=e.items;return(o=document.createElement("div")).setAttribute("class","m-footer-links__block js-dropdown"),he(o,["\n    ",(t=document.createElement("strong"),t.setAttribute("class","m-footer-links__category js-dropdown__toggle"),he(t,[i,fe(ve)]),t),"\n\n    ",(n=document.createElement("ul"),n.setAttribute("class","m-footer-links__list"),he(n,["\n      ",Array.isArray(r)&&r.map(function(e,t){var n,o,i=e.name,r=e.url,a=e.isActive;return(o=document.createElement("li")).setAttribute("class","m-footer-links__list-item "+String(a?"is-footer-links__list-item-active":"")),he(o,["\n          ",(n=document.createElement("a"),n.setAttribute("href",""+String(r)),n.setAttribute("index",""+String(t)),n.setAttribute("class","m-footer-links__link js-footer-links__link"),he(n,[i]),n),"\n        "]),o}),"\n    "]),n),"\n  "]),o}var _e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ye(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,r=void 0===i||i,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=F(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:r,passive:s});return _e&&(l.style.cursor="pointer"),c}var be=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),ge="data-prevent-default",ke=function(){function e(t){var o=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this._handleClick=function(e,t){o.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!o._lastToggleNode,i=t!==o._lastToggleNode,r=!n&&!i;n?(o._notify(be.ENTER,t),o._onInteractive()):i&&o._notify(be.MOVE,t,o._lastToggleNode),o._lastToggleNode=t,r&&o._options.sameClickClose&&o._close()},this._handleClose=function(e,t){o.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),o._close()},this._handleKeyUp=function(e){(e.key===be.ESCAPE||e.key===be.ESC||27===e.keyCode)&&(e.preventDefault(),o._close())},this._init(t,i)}return o(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=i({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=F(this._container,be.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=F(this._container,be.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ye(this._container,be.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=F(this._container.ownerDocument,be.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ge)?C(e,ge):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(be.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),e}();ke.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var xe,we=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Ce=function(){var e=window.requestAnimationFrame||window[we+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+o)},o);return t=n+o,i}}return e}(),Ae=(xe=(xe=window.cancelAnimationFrame||window[we+"CancelAnimationFrame"]||window[we+"CancelRequestAnimationFrame"])?xe.bind(window):function(e){clearTimeout(e)},function(e){function t(e,o){n(this,t),o=i({},t.DEFAULTS,o);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return r.handleTransitionEnd=function(e){"height"===e.propertyName&&(r.isOpen&&(e.target.style.height=""),r.offInteractive(),D(r.wcNode,r.options.isAnimatingClass))},r.options=o,r.wcNode=e,r.isOpen=!1,r}return a(t,ke),o(t,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=F(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;if(!this.isOpen){this.isOpen=!0,j(t,this.options.isAnimatingClass),n.style.overflow="scroll";var o=n.scrollHeight;n.style.overflow="",this.onInteractive(),n.style.height=o+"px",j(t,this.options.isOpenClass)}}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,i=o.scrollHeight;this.isOpen&&(this.isOpen=!1,this.onInteractive(),j(n,this.options.isAnimatingClass),Ce(function(){o.style.height=i+"px",Ce(function(){D(n,t.options.isOpenClass),o.style.height=0})}))}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",D(e,this.options.isOpenClass))}},{key:"destroy",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),t}());Ae.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open",isAnimatingClass:"is-dropdown-animating"};var Oe=function(){function e(t,o){n(this,e),this.wcNode=t,this.options=i({},e.DEFAULTS,o),this.handleClick=this.handleClick.bind(this),this.on()}return o(e,[{key:"on",value:function(){var e=this;this.off(),this.unsubscribe=z("device-state/change",function(t){var n=t.detail.breakpoint,o="xs".indexOf(n)>-1;o&&!e.dropDown?e.dropDown=new Ae(e.wcNode):!o&&e.dropDown&&(e.dropDown.destroy(),delete e.dropDown)}),this.unClick=F(this.wcNode,"click",this.options.link,this.handleClick,{passive:!1})}},{key:"off",value:function(){this.unsubscribe&&this.unsubscribe(),this.unClick&&this.unClick()}},{key:"handleClick",value:function(e,t){var n=C(t,"index"),o=this.wcNode.items;O(this.wcNode,"axa-click",o[n],{bubbles:!0,cancelable:!0,composed:!0})||e.preventDefault()}},{key:"destroy",value:function(){this.off(),this.dropDown&&(this.dropDown.destroy(),delete this.dropDown),delete this.wcNode}}]),e}();Oe.DEFAULTS={link:"js-footer-links__link"};var Ee,Ne,Te,je=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,re,me))}return a(t,ie),o(t,null,[{key:"observedAttributes",get:function(){return["cols","items","title"]}}]),o(t,[{key:"connectedCallback",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this)}},{key:"willRenderCallback",value:function(){var e,t,n,o=this.cols;this.className=d(this.initialClassName,"m-footer-links",(n=o,(t="m-footer-links--cols-"+o)in(e={"m-footer-links--cols":o})?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}},{key:"didRenderCallback",value:function(){this.footerLinks&&this.footerLinks.destroy(),this.footerLinks=new Oe(this)}},{key:"disconnectedCallback",value:function(){this.footerLinks&&(this.footerLinks.destroy(),delete this.footerLinks)}}]),t}();return Ee=function(){window.customElements.define("axa-footer-links",je)},Ne=0,Te=function(){if(0===Ne)try{Ee.apply(void 0,arguments),Ne+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",Te,!1),document.addEventListener("WebComponentsReady",Te,!1),je}();
