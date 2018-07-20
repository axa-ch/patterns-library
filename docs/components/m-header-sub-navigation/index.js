var StyleGuideWebComponent=function(){"use strict";var e,m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0},h=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,r,i){var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,i)}else if("value"in o&&o.writable)o.value=r;else{var s=o.set;void 0!==s&&s.call(i,r)}return r},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},b=(function(e){!function(){var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":m(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=s.apply(null,n);i&&e.push(i)}else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}(e={exports:{}},e.exports),e.exports),v=/\n[\s]+$/,_=/^\n[\s]+/,g=/[\s]+$/,y=/^[\s]+/,w=/[\n\s]+/g,k=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],O=["code","pre","textarea"],C=function e(t,n){if(Array.isArray(n))for(var r,i,o=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var d=n[s];if(Array.isArray(d))e(t,d);else{("number"==typeof d||"boolean"==typeof d||"function"==typeof d||d instanceof Date||d instanceof RegExp)&&(d=d.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof d)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=d:(d=document.createTextNode(d),t.appendChild(d),u=d),s===l-1&&(a=!1,-1===k.indexOf(o)&&-1===O.indexOf(o)?""===(r=u.nodeValue.replace(_,"").replace(g,"").replace(v,"").replace(w," "))?t.removeChild(u):u.nodeValue=r:-1===O.indexOf(o)&&(i=0===s?"":" ",r=u.nodeValue.replace(_,i).replace(y," ").replace(g,"").replace(v,"").replace(w," "),u.nodeValue=r));else if(d&&d.nodeType){a&&(a=!1,-1===k.indexOf(o)&&-1===O.indexOf(o)?""===(r=u.nodeValue.replace(_,"").replace(v,"").replace(w," "))?t.removeChild(u):u.nodeValue=r:-1===O.indexOf(o)&&(r=u.nodeValue.replace(y," ").replace(_,"").replace(v,"").replace(w," "),u.nodeValue=r));var c=d.nodeName;c&&(o=c.toLowerCase()),t.appendChild(d)}}}};var d=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},A=function(e){var t,n,r=e.url,i=void 0===r?"":r,o=e.name,a=e.isActive,s=e.preventDefault,l=void 0===s?"false":s;return(n=document.createElement("li")).setAttribute("class","m-header-sub-navigation__list-item"),C(n,["\n    ",(t=document.createElement("a"),t.setAttribute("data-prevent-default",""+String(l)),t.setAttribute("href",""+String(i)),t.setAttribute("class",""+String(b("m-header-sub-navigation__link","js-header-navigation-close",{"is-header-sub-navigation-active":a}))),C(t,[d(o)]),t),"\n  "]),n},E=function(e){var t,n,r=e.columns,i=e.col,d=e.isWide;return(t=document.createElement("div")).setAttribute("class","m-header-sub-navigation__row m-header-sub-navigation__row--col-"+String(i||(2===(n=r.length)?n:n%3==0&&n%4!=0?3:4))),C(t,["\n\n  ",Array.isArray(r)&&r.map(function(e){var t,n,r,i,o=e.links,a=e.title,s=e.url,l=void 0===s?"":s;return(r=document.createElement("div")).setAttribute("class",""+String(b("m-header-sub-navigation__block",{"m-header-sub-navigation__block--wide":d}))),C(r,["\n      ",(t=document.createElement("strong"),t.setAttribute("class","m-header-sub-navigation__category"),C(t,["\n        ",l?(i=document.createElement("a"),i.setAttribute("href",""+String(l)),i.setAttribute("class","m-header-sub-navigation__category__link"),C(i,[a]),i):a,"\n      "]),t),"\n\n      ",(n=document.createElement("ul"),n.setAttribute("class","m-header-sub-navigation__list"),C(n,["\n        ",o&&o.map(A),"\n      "]),n),"\n    "]),r}),"\n  "]),t},n=function(e){var t=e.items,n=e.indexUrl,r=e.indexTitle,i=[];if(Array.isArray(t)){var o,a,s,l,d,u;if(r&&n)i.push(((u=document.createElement("div")).setAttribute("class","m-header-sub-navigation__index"),C(u,["\n          ",(d=document.createElement("div"),d.setAttribute("class","m-header-sub-navigation__index-box"),C(d,["\n            ",(a=document.createElement("a"),a.setAttribute("href",""+String(n)),a.setAttribute("class","m-header-sub-navigation__index-link js-header-navigation-close"),C(a,[r]),a),"\n            ",(l=document.createElement("button"),l.setAttribute("type","button"),l.setAttribute("class","m-header-sub-navigation__index-close js-header-navigation-close"),C(l,["\n              Close\n              ",(s=document.createElement("axa-icon"),s.setAttribute("icon","cross-gap"),s.setAttribute("classes","m-header-sub-navigation__index-close__icon"),s),"\n            "]),l),"\n          "]),d),"\n        "]),u));i.push(((o=document.createElement("div")).setAttribute("class","m-header-sub-navigation__box"),C(o,["\n        ",t&&t.map(E),"\n      "]),o))}return i},l={},N=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,i=t.cancelable,o=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,o,s);var d=l.preventDefault;return l.preventDefault=function(){d.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function j(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=new N(t,o({},r,{detail:n}));return e.dispatchEvent(i)}var P=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function T(e){for(var i=e.className,o=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(i);var n,r;t?o=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!o)&&s}var S=/\s+/,R={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,i=void 0,o=0;o<r;++o)if(void 0!==e[i=n[o]])return t[i];return""}()};function M(n,e,r,i){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},o=t.capture,a=void 0!==o&&o,s=t.passive,l=void 0===s||s;if(R[e]&&(e=R[e]),!n||!e)return null;var d=void 0===r?"undefined":m(r),u=r&&"string"===d;if("function"===d){if(i){var c=i;a=c.capture,l=c.passive}i=r}for(var h=P?{capture:a,passive:l}:a,p=u?function(e){var t=e.target;for(;!T(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return i(e,t)}:i,f=e.split(S),b=f.length,v=0;v<b;++v)n.addEventListener(f[v],p,h);return function e(){for(var t=0;t<b;++t)n.removeEventListener(f[t],p,h);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,i=0;i<r;++i){var o=n[i];if(e[o]===t)return delete e[o]}}(this,e)}}function L(r){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,o=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,d=void 0,u=void 0,c=void 0,h=void 0,p=!1,f=i!==l,b=!1!==l;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return d=t,f&&(u&&clearTimeout(u),u=setTimeout(m,i)),b&&!c&&(c=setTimeout(_,l)),o&&!p&&(p=!0,h=r.apply(void 0,x(d))),h}return v.flush=function(){(u||c)&&(h=r.apply(void 0,x(d)));return y(),h},v.cancel=y,v;function m(){c&&clearTimeout(c),g()}function _(){u&&clearTimeout(u),g()}function g(){a&&(h=r.apply(void 0,x(d))),c=u=null,p=!1}function y(){u&&(clearTimeout(u),u=null),c&&(clearTimeout(c),c=null),d=void 0,p=!1}}window.__subscriptions=window.__subscriptions||{};var D=window.__subscriptions;function V(e,t){var n=M(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);D[e]||(D[e]={count:0});var r,i=D[e];return i.count++,i.onsubscribe||(i.onsubscribe=L((r=e,function(){j(document,"pubsub/onsubscribe",r),j(document,"pubsub/onsubscribe/"+r,r),D[r]&&delete D[r].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete D[e]}}M(document,"pubsub/onsubscribe",function(e){var t=e.detail;D[t]||(D[t]={count:0});var n=D[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=s(e,3),n=t[0],r=t[1],i=t[2];j(i,n,r)}),delete n.queue)});var U,t=function(e,t){return e===t},I=(U=function(){var e;return(e=console).log.apply(e,arguments)},function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return i.apply(void 0,[].concat(r,t))?U.apply(void 0,arguments):void 0}}}}()(!0),function(e){function l(e,t){var n;u(this,l);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,o=Array(2<i?i-2:0),a=2;a<i;a++)o[a-2]=arguments[a];var s=p(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,r].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return h(l,e),l}(Error)),r=/[A-Z]/g;function z(e,t,n){var r=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?r:"-"+r}var F=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function H(t,n){var e=t;if(t&&n!==t){if(F.test(t))try{e=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else e=!0;return e}var W=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,B=/[-_]+/g;function q(e){return e.replace(W,$)}function $(e,t){return 0==+e||B.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var K=["title","checked","disabled"],G=[];var Z=1,J=3,X=8;function Q(e,t){var n=e.nodeType,r=e.nodeName;n===Z&&function(e,t){for(var n=t.attributes,r=e.attributes,i=null,o=null,a=null,s=null,l=r.length-1;0<=l;--l)if(s=r[l],a=s.name,i=s.namespaceURI,o=s.value,i){var d=s.localName;t.getAttributeNS(i,d||a)!==o&&t.setAttributeNS(i,a,o)}else t.hasAttribute(a)?t.getAttribute(a)!==o&&("null"===o||"undefined"===o?t.removeAttribute(a):t.setAttribute(a,o)):t.setAttribute(a,o);for(var u=n.length-1;0<=u;--u)!1!==(s=n[u]).specified&&(a=s.name,(i=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(i,a)||t.removeAttributeNS(i,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==J&&n!==X||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;Y(e,t,"checked"),Y(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?Y(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function Y(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ee=3;function te(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Q(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,i=void 0,o=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(ne(r,n))(i=te(r,n))!==n&&(t.replaceChild(i,n),a++);else{o=null;for(var l=s;l<t.childNodes.length;l++)if(ne(t.childNodes[l],r)){o=t.childNodes[l];break}o?((i=te(r,o))!==o&&a++,t.insertBefore(i,n)):r.id||n.id?(t.insertBefore(r,n),a++):(i=te(r,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function ne(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ee&&e.nodeValue===t.nodeValue)}var re=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,i=Array(1<r?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a=p(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return h(s,e),s}(Error),ie=!!document.createDocumentFragment().children;function oe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(oe.prototype,HTMLElement.prototype),Object.setPrototypeOf(oe,HTMLElement);var ae=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=V("context/available",n._makeContextReady)},p(n,t)}return h(a,t),i(a,[{key:"connectedCallback",value:function(){c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&c(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;D[e]||(D[e]={count:0,queue:[]});var r=D[e].queue;Array.isArray(r)?r.push([e,t,n]):j(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),p(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return h(n,t),i(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function d(e){u(this,d);var l=p(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,e));l._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,i=l._hasKeys[t];if(-1===K.indexOf(t)&&i)throw new I(t,l);var o="_"+t,a=n[t],s=l[o];return r||l.shouldUpdateCallback(a,s)?(l[o]=a,l._props[t]=a,i&&f(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=L(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=q(e),r=n in l;if(-1===K.indexOf(n)&&r)throw new I(n,l);l._hasKeys[n]=r,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&f(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),l}return h(d,t),i(d,[{key:"connectedCallback",value:function(){var i=this;if(c(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"connectedCallback",this)&&c(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var t=q(e);if(i.hasAttribute(e)){var n=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=H(n,t)}(i,e),r=i._hasKeys[t];i._props[t]=n,r&&f(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),t,n,i)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=q(e);this.hasAttribute(e)?this[r]=H(n):this[r]=null}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return-1<n.indexOf(e.replace(r,z))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),d}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var r=p(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return h(l,t),i(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ie||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var o=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(o))o.forEach(function(e){a.appendChild(e)});else if(o){if("string"==typeof o)throw new re(this);a.appendChild(o)}if(e)c(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":m(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":m(t)))throw new Error("componentMorph: newTree should be an object");te(t,e)}(this,s),function(){for(var e=void 0;e=G.pop();)delete e.isSameNode;G=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);u(this,o);var i=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,r));return i._styles=n,i}return h(o,t),i(o,[{key:"connectedCallback",value:function(){c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&c(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),o}()})(function(e){function r(e){u(this,r);var t,n=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return n._id=((t=n.nodeName)in l||(l[t]=0),++l[t]),n}return h(r,oe),i(r,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),r}()),se={},le=function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return(t=n=p(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},p(n,t)}return h(a,ae),i(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:ae.uuidv4();if(e&&!se[t]){var n=document.createElement("style"),r=document.createTextNode(e);se[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var de,ue,ce=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:"@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-sub-navigation {\n  display: none;\n  background: #fff;\n  border-bottom: 2px solid #ccc;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n  text-align: left; }\n  .is-header-sub-navigation-open .m-header-sub-navigation {\n    display: block; }\n\n.m-header-sub-navigation--flyout {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 2px; }\n\n.m-header-sub-navigation__index {\n  background: #fafafa; }\n\n.m-header-sub-navigation__index-box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__index-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__index-link:hover, .m-header-sub-navigation__index-link:active, .m-header-sub-navigation__index-link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n\n.m-header-sub-navigation__index-close {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding-right: 44px;\n  margin-left: auto;\n  text-transform: uppercase;\n  border: none;\n  background: transparent;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-sub-navigation__index-close:hover, .m-header-sub-navigation__index-close:active, .m-header-sub-navigation__index-close:focus {\n    color: #00005b;\n    cursor: pointer;\n    outline: none; }\n\n.m-header-sub-navigation__index-close__icon {\n  width: 23px;\n  height: 23px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -11.5px; }\n\n.m-header-sub-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  padding-top: 30px;\n  padding-bottom: 40px; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -30px;\n  margin-left: -30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .m-header-sub-navigation__row + .m-header-sub-navigation__row > .m-header-sub-navigation__block {\n    padding-top: 30px; }\n\n.m-header-sub-navigation__block {\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  padding: 0 30px;\n  border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__block:last-child {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block {\n    max-width: 50%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    padding-right: 45px;\n    padding-left: 45px; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(n + 3) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(2n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(n + 4) {\n      padding-top: 30px;\n      border-right: 1px solid #ccc; }\n    .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(3n) {\n      border: none; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(n + 5) {\n    padding-top: 30px;\n    border-right: 1px solid #ccc; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(4n) {\n    border: none; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(1):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(2):first-child ~ * {\n    max-width: 25%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    padding-right: 45px;\n    padding-left: 45px; }\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child,\n  .m-header-sub-navigation__row:not(.m-header-sub-navigation__row--col-2):not(.m-header-sub-navigation__row--col-3):not(.m-header-sub-navigation__row--col-4) .m-header-sub-navigation__block:nth-last-child(3n):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n\n.m-header-sub-navigation__row--col-2 {\n  margin-right: -45px;\n  margin-left: -45px; }\n\n.m-header-sub-navigation__row--col-3 {\n  margin-right: -65px;\n  margin-left: -65px; }\n\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child,\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * {\n  max-width: 50%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child .m-header-sub-navigation__list,\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * .m-header-sub-navigation__list {\n    -webkit-column-count: 2;\n            column-count: 2; }\n\n.m-header-sub-navigation__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  color: #00008f;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-sub-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-top: 15px; }\n\n.m-header-sub-navigation__list-item {\n  display: block; }\n\n.m-header-sub-navigation__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: inline-block;\n  width: 100%;\n  padding: 4px 0;\n  line-height: 1.3 !important; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__link.is-header-sub-navigation-active, .m-header-sub-navigation__link:hover, .m-header-sub-navigation__link:active, .m-header-sub-navigation__link:focus {\n    color: #00005b;\n    text-decoration: none;\n    font-weight: 600;\n    letter-spacing: -0.005em; }\n",template:n}))}return h(t,le),i(t,null,[{key:"observedAttributes",get:function(){return["flyout","index-title","index-url","items"]}}]),i(t,[{key:"willRenderCallback",value:function(){var e=this.flyout;this.className=b(this.initialClassName,"m-header-sub-navigation js-header-sub-navigation",{"m-header-sub-navigation--flyout":e})}}]),t}();return ce.tagName="axa-header-sub-navigation",de=ce.tagName,ue=ce,customElements.get(de)||customElements.define(de,ue),ce}();
