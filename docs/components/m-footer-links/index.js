var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(o):void 0},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=e(function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i];if(r){var s=void 0===r?"undefined":t(r);if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r))e.push(o.apply(null,r));else if("object"===s)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}),d=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function h(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(d.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var p=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,s=t.detail,a=void 0===s?void 0:s,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,a);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function m(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=new p(t,i({},o,{detail:n}));e.dispatchEvent(r)}var v=/^\s+|\s{2,}|\s+$/g;function y(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function g(e,t){return y(t).test(e.className)}function _(e,t){if(g(e,t)){var n=y(t,"g");e.className=e.className.replace(n," ").replace(v," ")}}function b(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}return!1}var x=/\s+/,k={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function w(e,n,o,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(k[n]&&(n=k[n]),!e||!n)return null;var s=void 0===o?"undefined":t(o);"function"===s&&(r=!!i,i=o);for(var a=o&&"string"===s?function(t){var n=t.target;for(;!g(n,o)&&n!==e;)n=n.parentNode;if(n!==e)return i(t,n)}:i,l=n.split(x),c=l.length,u=0;u<c;++u)e.addEventListener(l[u],a,r);return function t(){for(var n=0;n<c;++n)e.removeEventListener(l[n],a,r);b(this,t)}}var C={};function E(e,t){var n=w(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);C[e]||(C[e]={count:0});var o,i=C[e];return i.count++,i.onsubscribe||(i.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,s=void 0===r||r,a=n.maxWait,l=void 0!==a&&a,c=void 0,f=void 0,d=void 0,h=void 0,p=!1,m=t!==l,v=!1!==l;function y(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return c=o,m&&(f&&clearTimeout(f),f=setTimeout(g,t)),v&&!d&&(d=setTimeout(_,l)),i&&!p&&(p=!0,h=e.apply(void 0,u(c))),h}return y.flush=function(){return(f||d)&&(h=e.apply(void 0,u(c))),x(),h},y.cancel=x,y;function g(){d&&clearTimeout(d),b()}function _(){f&&clearTimeout(f),b()}function b(){s&&(h=e.apply(void 0,u(c))),f=null,d=null,p=!1}function x(){f&&(clearTimeout(f),f=null),d&&(clearTimeout(d),d=null),c=void 0,p=!1}}((o=e,function(){m(document,"pubsub/onsubscribe",o),m(document,"pubsub/onsubscribe/"+o,o),C[o]&&delete C[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete C[e]}}function O(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}w(document,"pubsub/onsubscribe",function(e){var t=e.detail;C[t]||(C[t]={count:0});var n=C[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=l(e,3),n=t[0],o=t[1],i=t[2];m(i,n,o)}),delete n.queue)}),Object.setPrototypeOf(O.prototype,HTMLElement.prototype),Object.setPrototypeOf(O,HTMLElement);var N={},T="throwed",A=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments[1];n(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i._makeContextReady=i._makeContextReady.bind(i),i._initialise(e,o),i}return s(t,O),o(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,o=n.length,i=0;i<o;++i){var r=n[i];t[r.name]=h(r)}return t}(this),n);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error(T);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){i.message!==T&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[e]||(C[e]={count:0,queue:[]});var o=C[e].queue;Array.isArray(o)?o.push([e,t,n]):m(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=E("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),j=(function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,A),o(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,A),o(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A.uuidv4();if(e&&!N[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),N[e]=!0}}}]),t}()),L=".m-footer-links {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  display: block;\n  margin-left: 0 !important; }\n  @media (max-width: 991px) {\n    .m-footer-links {\n      max-width: 33.33333%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 33.33333%;\n              flex: 0 0 33.33333%; } }\n  @media (max-width: 575px) {\n    .m-footer-links {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto;\n      padding: 0; } }\n\n.m-footer-links__row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.m-footer-links__block {\n  margin-left: 60px; }\n  .m-footer-links__block:first-child {\n    margin-left: 0; }\n  @media (max-width: 575px) {\n    .m-footer-links__block {\n      position: relative; } }\n\n.m-footer-links__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__category {\n      font-size: 14px;\n      font-weight: 600;\n      line-height: 1.5;\n      letter-spacing: 0.02em;\n      cursor: pointer;\n      position: relative;\n      padding: 20px 60px 20px 30px;\n      border-bottom: 1px solid #2425aa;\n      background: #3b3fd8; } }\n  @media (max-width: 575px) and (min-width: 576px) {\n    .m-footer-links__category {\n      font-size: 16px; } }\n  @media (max-width: 575px) {\n      .m-footer-links__category:hover, .m-footer-links__category:active, .m-footer-links__category:focus {\n        cursor: pointer; } }\n\n.m-footer-links__category__icon {\n  width: 10px;\n  height: 10px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  margin-top: -5px;\n  color: #999;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  display: none; }\n  .is-dropdown-open .m-footer-links__category__icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  @media (max-width: 575px) {\n    .m-footer-links__category__icon {\n      display: block; } }\n\n.m-footer-links__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: block;\n  padding-top: 15px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list {\n      padding-top: 10px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list {\n      position: absolute;\n      top: 100%;\n      z-index: 1000;\n      height: 0;\n      min-width: 100%;\n      overflow: hidden;\n      -webkit-transition: height 0.3s ease;\n      transition: height 0.3s ease;\n      position: static;\n      display: block;\n      margin: 0;\n      padding: 0;\n      background: #3032c1; }\n      .is-dropdown-open > .m-footer-links__list {\n        height: auto; } }\n  @media (min-width: 576px) {\n    .m-footer-links__list {\n      height: auto !important; } }\n\n.m-footer-links__list-item {\n  display: block;\n  width: 100%;\n  margin-top: 10px; }\n  @media (max-width: 991px) {\n    .m-footer-links__list-item {\n      margin-top: 8px; } }\n  @media (max-width: 575px) {\n    .m-footer-links__list-item {\n      margin-top: 0;\n      border-bottom: 1px solid #3b3fd8; }\n      .m-footer-links__list-item:last-child {\n        border-bottom: none; } }\n\n.m-footer-links__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 5px 0;\n  color: #fff; }\n  @media (min-width: 576px) {\n    .m-footer-links__link {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-footer-links__link:hover, .m-footer-links__link:active, .m-footer-links__link:focus {\n    color: rgba(255, 255, 255, 0.65);\n    text-decoration: none; }\n  @media (max-width: 575px) {\n    .m-footer-links__link {\n      padding: 20px 30px; } }\n\n.m-footer-links--cols-2 {\n  max-width: 41.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%; }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list {\n      -webkit-column-count: 2;\n              column-count: 2; } }\n  @media (min-width: 576px) {\n    .m-footer-links--cols-2 .m-footer-links__list-item {\n      display: inline-block; } }\n  @media (max-width: 991px) {\n    .m-footer-links--cols-2 {\n      max-width: 66.66667%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 66.66667%;\n              flex: 0 0 66.66667%; } }\n  @media (max-width: 575px) {\n    .m-footer-links--cols-2 {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n",S=function(e){return function(t,n,o){for(var i in n)i in D&&(n[D[i]]=n[i],delete n[i]);return e(t,n,o)}},D={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var P=1,F=2,M=3,R=4,I=5,z=6,q=7,U=8,G=9,V=10,$=11,K=12,B=13;var W=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var H=/\n[\s]+$/,J=/^\n[\s]+/,Y=/[\s]+$/,Z=/^[\s]+/,Q=/[\n\s]+/g,X=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ee=["code","pre"],te=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),s=!1,a=0,l=n.length;a<l;a++){var c=n[a];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)s=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),a===l-1&&(s=!1,-1===X.indexOf(r)&&-1===ee.indexOf(r)?""===(o=u.nodeValue.replace(J,"").replace(Y,"").replace(H,"").replace(Q," "))?t.removeChild(u):u.nodeValue=o:-1===ee.indexOf(r)&&(i=0===a?"":" ",o=u.nodeValue.replace(J,i).replace(Z," ").replace(Y,"").replace(H,"").replace(Q," "),u.nodeValue=o));else if(c&&c.nodeType){s&&(s=!1,-1===X.indexOf(r)&&-1===ee.indexOf(r)?""===(o=u.nodeValue.replace(J,"").replace(H,"").replace(Q," "))?t.removeChild(u):u.nodeValue=o:-1===ee.indexOf(r)&&(o=u.nodeValue.replace(Z," ").replace(J,"").replace(H,"").replace(Q," "),u.nodeValue=o));var f=c.nodeName;f&&(r=f.toLowerCase()),t.appendChild(c)}}}},ne=e(function(e){var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",s=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function a(e,t,a){var l;-1!==s.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)l=document.createElementNS(c,e);else{if(e===r)return document.createComment(t.comment);l=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var f=u.toLowerCase(),d=t[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?l[u]=d:c?"xlink:href"===u?l.setAttributeNS(o,u,d):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,d):l.setAttribute(u,d)}return te(l,a),l}e.exports=function(e,n){n||(n={});var o=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=S(e)),function(r){for(var s=P,a="",l=arguments.length,c=[],u=0;u<r.length;u++)if(u<l-1){var f=arguments[u+1],d=C(r[u]),h=s;h===V&&(h=U),h===G&&(h=U),h===q&&(h=U),h===R&&(h=I),d.push([0,h,f]),c.push.apply(c,d)}else c.push.apply(c,C(r[u]));var p,m=[null,{},[]],v=[[m,-1]];for(u=0;u<c.length;u++){var y=v[v.length-1][0],g=(d=c[u])[0];if(g===F&&/^\//.test(d[1])){var _=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][_]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(g===F){var b=[d[1],{},[]];y[2].push(b),v.push([b,y[2].length-1])}else if(g===I||0===g&&d[1]===I){for(var x,k="";u<c.length;u++)if(c[u][0]===I)k=o(k,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==I)break;if("object"!==t(c[u][2])||k)k=o(k,c[u][2]);else for(x in c[u][2])c[u][2].hasOwnProperty(x)&&!y[1][x]&&(y[1][x]=c[u][2][x])}c[u][0]===$&&u++;for(var w=u;u<c.length;u++)if(c[u][0]===U||c[u][0]===I)y[1][k]?""===c[u][1]||(y[1][k]=o(y[1][k],c[u][1])):y[1][k]=i(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==U&&c[u][1]!==I){!k.length||y[1][k]||u!==w||c[u][0]!==M&&c[u][0]!==K||(y[1][k]=k.toLowerCase()),c[u][0]===M&&u--;break}y[1][k]?""===c[u][2]||(y[1][k]=o(y[1][k],c[u][2])):y[1][k]=i(c[u][2])}}else if(g===I)y[1][d[1]]=!0;else if(0===g&&d[1]===I)y[1][d[2]]=!0;else if(g===M)p=y[0],W.test(p)&&v.length&&(_=v[v.length-1][1],v.pop(),v[v.length-1][0][2][_]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===g&&d[1]===P)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=o("",d[2])),Array.isArray(d[2][0])?y[2].push.apply(y[2],d[2]):y[2].push(d[2]);else if(g===P)y[2].push(d[1]);else if(g!==$&&g!==K)throw new Error("unhandled: "+g)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function C(e){var t,o=[];s===q&&(s=R);for(var i=0;i<e.length;i++){var r=e.charAt(i);s===P&&"<"===r?(a.length&&o.push([P,a]),a="",s=F):">"===r&&(t=s)!==G&&t!==V&&s!==B?(s===F?o.push([F,a]):s===I?o.push([I,a]):s===U&&a.length&&o.push([U,a]),o.push([M]),a="",s=P):s===B&&/-$/.test(a)&&"-"===r?(n.comments&&o.push([U,a.substr(0,a.length-1)],[M]),a="",s=P):s===F&&/^!--$/.test(a)?(n.comments&&o.push([F,a],[I,"comment"],[$]),a=r,s=B):s===P||s===B?a+=r:s===F&&/\s/.test(r)?(o.push([F,a]),a="",s=R):s===F?a+=r:s===R&&/[^\s"'=/]/.test(r)?(s=I,a=r):s===R&&/\s/.test(r)?(a.length&&o.push([I,a]),o.push([K])):s===I&&/\s/.test(r)?(o.push([I,a]),a="",s=z):s===I&&"="===r?(o.push([I,a],[$]),a="",s=q):s===I?a+=r:s!==z&&s!==R||"="!==r?s!==z&&s!==R||/\s/.test(r)?s===q&&'"'===r?s=V:s===q&&"'"===r?s=G:s===V&&'"'===r?(o.push([U,a],[K]),a="",s=R):s===G&&"'"===r?(o.push([U,a],[K]),a="",s=R):s!==q||/\s/.test(r)?s===U&&/\s/.test(r)?(o.push([U,a],[K]),a="",s=R):s!==U&&s!==G&&s!==V||(a+=r):(s=U,i--):(o.push([K]),/[\w-]/.test(r)?(a+=r,s=I):s=R):(o.push([$]),s=q)}return s===P&&a.length?(o.push([P,a]),a=""):s===U&&a.length?(o.push([U,a]),a=""):s===V&&a.length?(o.push([U,a]),a=""):s===G&&a.length?(o.push([U,a]),a=""):s===I&&(o.push([I,a]),a=""),o}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":t(e))?e:o("",e)}}(a,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=a});ne.createElement;var oe=function(e){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=e,o=n.childNodes,Array.isArray(o)?o:[].slice.call(o)):((t=new String(e)).__encoded=!0,t);var t,n,o},ie=c(['<div class="m-footer-links__block js-dropdown">\n    <strong class="m-footer-links__category js-dropdown__toggle">',"",'</strong>\n\n    <ul class="m-footer-links__list">\n      ',"\n    </ul>\n  </div>"],['<div class="m-footer-links__block js-dropdown">\n    <strong class="m-footer-links__category js-dropdown__toggle">',"",'</strong>\n\n    <ul class="m-footer-links__list">\n      ',"\n    </ul>\n  </div>"]),re=c(['\n        <li class="m-footer-links__list-item">\n          <a class="m-footer-links__link" href="','">',"</a>\n        </li>\n      "],['\n        <li class="m-footer-links__list-item">\n          <a class="m-footer-links__link" href="','">',"</a>\n        </li>\n      "]),se='<axa-icon id="angle-bracket-down" classes="m-footer-links__category__icon"></axa-icon>';function ae(e){var t=e.title,n=e.items;return ne(ie,t,oe(se),n.map(function(e){var t=e.name,n=e.url;return ne(re,n,t)}))}var le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var s=t[r];i[s.toUpperCase()]=s}return i}("click","keyup","enter","move","leave","Escape","Esc"),ce=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this._wcNode=t,this._options=i({},e.DEFAULTS,o),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return o(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._wcNode.querySelector(e):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=w(this._container,le.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=w(this._container,le.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(e,t,n){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=e.ownerDocument.documentElement;return i.addEventListener(t,r,o),function e(){i.removeEventListener(t,r,o),b(this,e)};function r(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)}}(this._container,le.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=w(this._container.ownerDocument,le.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this._options.useDefaultEvent||e.preventDefault();var n=!this._lastToggleNode,o=t!==this._lastToggleNode,i=!n&&!o;n?(this._notify(le.ENTER,t),this._onInteractive()):o&&this._notify(le.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,i&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===le.ESCAPE||e.key===le.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(le.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),e}();ce.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var ue,fe=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,de=function(){var e=window.requestAnimationFrame||window[fe+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+o)},o);return t=n+o,i}}return e}(),he=(ue=(ue=window.cancelAnimationFrame||window[fe+"CancelAnimationFrame"]||window[fe+"CancelRequestAnimationFrame"])?ue.bind(window):function(e){clearTimeout(e)},function(e){function t(e,o){n(this,t),o=i({},t.DEFAULTS,o);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return r.options=o,r.wcNode=e,r.handleTransitionEnd=r.handleTransitionEnd.bind(r),r}return s(t,ce),o(t,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=w(this.wcNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var t=e.parentNode,n=t.lastElementChild;n.style.overflow="scroll";var o,i,r=n.scrollHeight;n.style.overflow="",this.onInteractive(),n.style.height=r+"px",o=t,i=this.options.isOpenClass,g(o,i)||(o.className+=" "+i)}},{key:"leave",value:function(e){var t=this,n=e.parentNode,o=n.lastElementChild,i=o.scrollHeight;this.offInteractive(),de(function(){o.style.height=i+"px",de(function(){_(n,t.options.isOpenClass),o.style.height=0})})}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"reset",value:function(){var e=this.wcNode.querySelector(this.options.containerClass);e&&(e.lastElementChild.style.height="",_(e,this.options.isOpenClass))}},{key:"destroy",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.reset(),delete this.wcNode,delete this.options}}]),t}());he.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-dropdown-open"};var pe,me,ve,ye=function(){function e(t){n(this,e),this.wcNode=t,this.on()}return o(e,[{key:"on",value:function(){var e=this;this.off(),this.unsubscribe=E("device-state/change",function(t){var n=t.detail.breakpoint,o="xs".indexOf(n)>-1;o&&!e.dropDown?e.dropDown=new he(e.wcNode):!o&&e.dropDown&&(e.dropDown.destroy(),delete e.dropDown)})}},{key:"off",value:function(){this.unsubscribe&&this.unsubscribe()}},{key:"destroy",value:function(){this.off(),this.dropDown&&(this.dropDown.destroy(),delete this.dropDown),delete this.wcNode}}]),e}(),ge=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,L,ae))}return s(t,j),o(t,[{key:"connectedCallback",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e,n,o,i=h(this,"cols");this.className=f(this.initialClassName,"m-footer-links",(o=i,(n="m-footer-links--cols-"+i)in(e={"m-footer-links--cols":i})?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e)),this.footerLinks=new ye(this)}},{key:"disconnectedCallback",value:function(){this.footerLinks&&(this.footerLinks.destroy(),delete this.footerLinks)}}]),t}();return pe=function(){window.customElements.define("axa-footer-links",ge)},me=0,ve=function(){if(0===me)try{pe.apply(void 0,arguments),me+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ve,!1),document.addEventListener("WebComponentsReady",ve,!1),ge}();
