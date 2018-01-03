!function(){"use strict";function e(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new s(t,d({},o,{detail:n}));e.dispatchEvent(i)}function t(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function n(e,n){return t(n).test(e.className)}function o(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}return!1}function i(e,t,i,r){function a(){for(var t=0;t<h;++t)e.removeEventListener(d[t],c,s);o(this,a)}var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(b[t]&&(t=b[t]),!e||!t)return null;var u=void 0===i?"undefined":l(i);"function"===u&&(s=!!r,r=i);for(var c=i&&"string"===u?function(t){for(var o=t.target;!n(o,i)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,d=t.split(_),h=d.length,f=0;f<h;++f)e.addEventListener(d[f],c,s);return a}function r(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var a=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,s=function(){function e(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,r,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var t=new window.CustomEvent("test");if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=(function(){function e(e){this.value=e}function t(t){function n(i,r){try{var a=t[i](r),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){n("next",e)},function(e){n("throw",e)}):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}(i=i.next)?n(i.key,i.arg):r=null}var i,r;this._invoke=function(e,t){return new Promise(function(o,a){var s={key:e,arg:t,resolve:o,reject:a,next:null};r?r=r.next=s:(i=r=s,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},h=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(o)},f=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},g=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},y=/^\s+|\s{2,}|\s+$/g,_=/\s+/,b={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(i=n[r],void 0!==e[i])return t[i];return null}()},w={};i(document,"pubsub/onsubscribe",function(t){var n=t.detail;w[n]||(w[n]={count:0});var o=w[n],i=o.queue;Array.isArray(i)&&(i.forEach(function(t){var n=g(t,3),o=n[0],i=n[1];e(n[2],o,i)}),delete o.queue)}),Object.setPrototypeOf(r.prototype,HTMLElement.prototype),Object.setPrototypeOf(r,HTMLElement);var x={},k=function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];u(this,n);var o=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return o._makeContextReady=o._makeContextReady.bind(o),o._initialise(e,t),o}return f(n,r),c(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,o=n.length,i=0;i<o;++i){var r=n[i];t[r.name]=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(a.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}(r)}return t}(this),n);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var i=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),i}this.appendChild(o)}this._hasRendered=!0}catch(i){"throwed"!==i.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+i+"\n\nStack Trace: "+i.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;w[t]||(w[t]={count:0,queue:[]});var i=w[t].queue;Array.isArray(i)?i.push([t,n,o]):e(o,t,n)}("context/enabled",t)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var t=this;this.contextNode?(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){t.contextCallback(t.contextNode)},10)):this.unContextEnabled||(this.unContextEnabled=function(t,n){var o=i(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,n);w[t]||(w[t]={count:0});var r=w[t];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){function t(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return h=o,y&&(f&&clearTimeout(f),f=setTimeout(function(){p&&clearTimeout(p),n()},i)),_&&!p&&(p=setTimeout(function(){f&&clearTimeout(f),n()},d)),s&&!m&&(m=!0,g=e.apply(void 0,v(h))),g}function n(){u&&(g=e.apply(void 0,v(h))),f=null,p=null,m=!1}function o(){f&&(clearTimeout(f),f=null),p&&(clearTimeout(p),p=null),h=void 0,m=!1}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=r.leading,s=void 0!==a&&a,l=r.trailing,u=void 0===l||l,c=r.maxWait,d=void 0!==c&&c,h=void 0,f=void 0,p=void 0,g=void 0,m=!1,y=i!==d,_=!1!==d;return t.flush=function(){return(f||p)&&(g=e.apply(void 0,v(h))),o(),g},t.cancel=o,t}(function(t){return function(){e(document,"pubsub/onsubscribe",t),e(document,"pubsub/onsubscribe/"+t,t),w[t]&&delete w[t].unsubscribe}}(t),100)),r.onsubscribe(),function(){r.count--,o.call(this),r.count<=0&&delete w[t]}}("context/enabled",this._makeContextReady))}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),C=(function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,k),c(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,k),c(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.uuidv4();if(e&&!x[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),x[e]=!0}}}]),t}()),E=".m-header-languages {\n  position: relative;\n  display: block; }\n\n.m-header-languages__drop-down-toggle {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding: 10.5px 50px 10.5px 20px;\n  color: #7f7f7f;\n  text-transform: uppercase; }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    outline: none;\n    cursor: pointer; }\n  @media (min-width: 576px) {\n    .m-header-languages__drop-down-toggle {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-header-languages__drop-down-toggle {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-header-languages__drop-down-toggle {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-header-languages__drop-down-toggle:hover, .m-header-languages__drop-down-toggle:active, .m-header-languages__drop-down-toggle:focus {\n    cursor: pointer; }\n\n.m-header-languages__drop-down-icon {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  display: block;\n  width: 16px;\n  height: 16px;\n  margin-top: -8px;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease; }\n  .is-open .m-header-languages__drop-down-icon {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n\n.m-header-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 100%;\n  z-index: 1070;\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease;\n  background: #fafafa;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-open > .m-header-languages__list {\n    height: auto; }\n\n.m-header-languages__list-item {\n  display: block;\n  border-width: 0 1px;\n  border-color: #e5e5e5;\n  border-style: solid; }\n  .m-header-languages__list-item:first-child {\n    border-top-width: 1px; }\n  .m-header-languages__list-item:last-child {\n    border-bottom-color: #ccc;\n    border-bottom-width: 2px; }\n\n.m-header-languages__list-link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 10px 20px;\n  text-transform: uppercase;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-header-languages__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 768px) {\n    .m-header-languages__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 992px) {\n    .m-header-languages__list-link {\n      font-size: 13px;\n      font-weight: 600;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  .m-header-languages__list-link.is-active, .m-header-languages__list-link:hover, .m-header-languages__list-link:active, .m-header-languages__list-link:focus {\n    text-decoration: none;\n    color: #00005b; }\n",O=function(e){return function(t,n,o){for(var i in n)i in T&&(n[T[i]]=n[i],delete n[i]);return e(t,n,o)}},T={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},N=1,A=2,S=3,j=4,L=5,P=6,D=7,F=8,M=9,I=10,R=11,z=12,q=13,U=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),G=/\n[\s]+$/,V=/^\n[\s]+/,$=/[\s]+$/,K=/^[\s]+/,W=/[\n\s]+/g,B=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],H=["code","pre"],J=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===B.indexOf(r)&&-1===H.indexOf(r)?""===(o=c.nodeValue.replace(V,"").replace($,"").replace(G,"").replace(W," "))?t.removeChild(c):c.nodeValue=o:-1===H.indexOf(r)&&(i=0===s?"":" ",o=c.nodeValue.replace(V,i).replace(K," ").replace($,"").replace(G,"").replace(W," "),c.nodeValue=o));else if(u&&u.nodeType){a&&(a=!1,-1===B.indexOf(r)&&-1===H.indexOf(r)?""===(o=c.nodeValue.replace(V,"").replace(G,"").replace(W," "))?t.removeChild(c):c.nodeValue=o:-1===H.indexOf(r)&&(o=c.nodeValue.replace(K," ").replace(V,"").replace(G,"").replace(W," "),c.nodeValue=o));var d=u.nodeName;d&&(r=d.toLowerCase()),t.appendChild(u)}}}},Y=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){function t(e,t,s){var l;-1!==a.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)l=document.createElementNS(u,e);else{if(e===r)return document.createComment(t.comment);l=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var d=c.toLowerCase(),h=t[c];if("classname"===d&&(d="class",c="class"),"htmlFor"===c&&(c="for"),-1!==i.indexOf(d))if("true"===h)h=d;else if("false"===h)continue;"on"===d.slice(0,2)?l[c]=h:u?"xlink:href"===c?l.setAttributeNS(o,c,h):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,h):l.setAttribute(c,h)}return J(l,s),l}var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],r="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":l(e))?e:o("",e)}t||(t={});var o=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=O(e)),function(i){function r(e){var n=[];a===D&&(a=j);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===N&&"<"===i?(s.length&&n.push([N,s]),s="",a=A):">"!==i||function(e){return e===M||e===I}(a)||a===q?a===q&&/-$/.test(s)&&"-"===i?(t.comments&&n.push([F,s.substr(0,s.length-1)],[S]),s="",a=N):a===A&&/^!--$/.test(s)?(t.comments&&n.push([A,s],[L,"comment"],[R]),s=i,a=q):a===N||a===q?s+=i:a===A&&/\s/.test(i)?(n.push([A,s]),s="",a=j):a===A?s+=i:a===j&&/[^\s"'=/]/.test(i)?(a=L,s=i):a===j&&/\s/.test(i)?(s.length&&n.push([L,s]),n.push([z])):a===L&&/\s/.test(i)?(n.push([L,s]),s="",a=P):a===L&&"="===i?(n.push([L,s],[R]),s="",a=D):a===L?s+=i:a!==P&&a!==j||"="!==i?a!==P&&a!==j||/\s/.test(i)?a===D&&'"'===i?a=I:a===D&&"'"===i?a=M:a===I&&'"'===i?(n.push([F,s],[z]),s="",a=j):a===M&&"'"===i?(n.push([F,s],[z]),s="",a=j):a!==D||/\s/.test(i)?a===F&&/\s/.test(i)?(n.push([F,s],[z]),s="",a=j):a!==F&&a!==M&&a!==I||(s+=i):(a=F,o--):(n.push([z]),/[\w-]/.test(i)?(s+=i,a=L):a=j):(n.push([R]),a=D):(a===A?n.push([A,s]):a===L?n.push([L,s]):a===F&&s.length&&n.push([F,s]),n.push([S]),s="",a=N)}return a===N&&s.length?(n.push([N,s]),s=""):a===F&&s.length?(n.push([F,s]),s=""):a===I&&s.length?(n.push([F,s]),s=""):a===M&&s.length?(n.push([F,s]),s=""):a===L&&(n.push([L,s]),s=""),n}for(var a=N,s="",u=arguments.length,c=[],d=0;d<i.length;d++)if(d<u-1){var h=arguments[d+1],f=r(i[d]),p=a;p===I&&(p=F),p===M&&(p=F),p===D&&(p=F),p===j&&(p=L),f.push([0,p,h]),c.push.apply(c,f)}else c.push.apply(c,r(i[d]));for(var g=[null,{},[]],m=[[g,-1]],d=0;d<c.length;d++){var v=m[m.length-1][0],y=(f=c[d])[0];if(y===A&&/^\//.test(f[1]))k=m[m.length-1][1],m.length>1&&(m.pop(),m[m.length-1][0][2][k]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(y===A){var _=[f[1],{},[]];v[2].push(_),m.push([_,v[2].length-1])}else if(y===L||0===y&&f[1]===L){for(var b,w="";d<c.length;d++)if(c[d][0]===L)w=o(w,c[d][1]);else{if(0!==c[d][0]||c[d][1]!==L)break;if("object"!==l(c[d][2])||w)w=o(w,c[d][2]);else for(b in c[d][2])c[d][2].hasOwnProperty(b)&&!v[1][b]&&(v[1][b]=c[d][2][b])}c[d][0]===R&&d++;for(var x=d;d<c.length;d++)if(c[d][0]===F||c[d][0]===L)v[1][w]?""===c[d][1]||(v[1][w]=o(v[1][w],c[d][1])):v[1][w]=n(c[d][1]);else{if(0!==c[d][0]||c[d][1]!==F&&c[d][1]!==L){!w.length||v[1][w]||d!==x||c[d][0]!==S&&c[d][0]!==z||(v[1][w]=w.toLowerCase()),c[d][0]===S&&d--;break}v[1][w]?""===c[d][2]||(v[1][w]=o(v[1][w],c[d][2])):v[1][w]=n(c[d][2])}}else if(y===L)v[1][f[1]]=!0;else if(0===y&&f[1]===L)v[1][f[2]]=!0;else if(y===S){if(function(e){return U.test(e)}(v[0])&&m.length){var k=m[m.length-1][1];m.pop(),m[m.length-1][0][2][k]=e(v[0],v[1],v[2].length?v[2]:void 0)}}else if(0===y&&f[1]===N)void 0===f[2]||null===f[2]?f[2]="":f[2]||(f[2]=o("",f[2])),Array.isArray(f[2][0])?v[2].push.apply(v[2],f[2]):v[2].push(f[2]);else if(y===N)v[2].push(f[1]);else if(y!==R&&y!==z)throw new Error("unhandled: "+y)}if(g[2].length>1&&/^\s*$/.test(g[2][0])&&g[2].shift(),g[2].length>2||2===g[2].length&&/\S/.test(g[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(g[2][0])&&"string"==typeof g[2][0][0]&&Array.isArray(g[2][0][2])&&(g[2][0]=e(g[2][0][0],g[2][0][1],g[2][0][2])),g[2][0]}}(t,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=t}),Z=function(e){return"undefined"!=typeof window?function(){var t=document.createElement("div");return t.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(t.childNodes)}():function(){var t=new String(e);return t.__encoded=!0,t}()},Q=m(['\n  <button type="button" class="m-header-languages__drop-down-toggle js-dropdown__toggle">\n    ','\n    <axa-icon id="angle-bracket-right" classes="m-header-languages__drop-down-icon"></axa-icon>\n  </button>\n'],['\n  <button type="button" class="m-header-languages__drop-down-toggle js-dropdown__toggle">\n    ','\n    <axa-icon id="angle-bracket-right" classes="m-header-languages__drop-down-icon"></axa-icon>\n  </button>\n']),X=m(['\n  <ul class="m-header-languages__list">\n    ',"\n  </ul>\n"],['\n  <ul class="m-header-languages__list">\n    ',"\n  </ul>\n"]),ee=m(['\n      <li class="m-header-languages__list-item">\n        <a class="m-header-languages__list-link','" href="','">\n          ',"\n        </a>\n      </li>\n    "],['\n      <li class="m-header-languages__list-item">\n        <a class="m-header-languages__list-link','" href="','">\n          ',"\n        </a>\n      </li>\n    "]),te=function(e){var t=e.items;return[Y(Q,t[0].name),Y(X,t&&t.map(function(e,t){var n=e.url,o=e.name;return Y(ee,0===t?" is-active":"",n,Z(o))}))]},ne=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","keyup","enter","move","leave","Escape","Esc"),oe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u(this,e),this._rootNode=t,this._options=d({},e.DEFAULTS,n),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init()}return c(e,[{key:"_init",value:function(){var e=this._options.containerClass;this._container=e?this._rootNode.querySelector(e):this._rootNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=i(this._container,ne.CLICK,this._options.toggleClass,this._handleClick)}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=i(this._container,ne.CLICK,this._options.closeClass,this._handleClose)),this._options.outerClose&&(this._unOuterClick=function(e,t,n){function i(){s.removeEventListener(t,r,a),o(this,i)}function r(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)}var a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=e.ownerDocument.documentElement;return s.addEventListener(t,r,a),i}(this._container,ne.CLICK,this._handleClose)),this._options.escapeClose&&(this._unCloseEscape=i(this._container.ownerDocument,ne.KEYUP,this._handleKeyUp))}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this._options.useDefaultEvent||e.preventDefault();var n=!this._lastToggleNode,o=t!==this._lastToggleNode,i=!n&&!o;n?(this._notify(ne.ENTER,t),this._onInteractive()):o&&this._notify(ne.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,i&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e){this._options.useDefaultEvent||e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===ne.ESCAPE||e.key===ne.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ne.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._rootNode,delete this._options}}]),e}();oe.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,useDefaultEvent:!1};var ie=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,re=function(){var e=window.requestAnimationFrame||window[ie+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),i=setTimeout(function(){e(n+o)},o);return t=n+o,i}}return e}(),ae=(function(){var e=window.cancelAnimationFrame||window[ie+"CancelAnimationFrame"]||window[ie+"CancelRequestAnimationFrame"];e=e?e.bind(window):function(e){clearTimeout(e)}}(),function(e){function o(e,t){u(this,o),t=d({},o.DEFAULTS,t);var n=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.options=t,n.rootNode=e,n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n}return f(o,oe),c(o,[{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=i(this.rootNode,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"enter",value:function(e){var t=e.parentNode,o=t.lastElementChild;o.style.overflow="scroll";var i=o.scrollHeight;o.style.overflow="",this.onInteractive(),o.style.height=i+"px",function(e,t){n(e,t)||(e.className+=" "+t)}(t,"is-open")}},{key:"leave",value:function(e){var o=e.parentNode,i=o.lastElementChild,r=i.scrollHeight;this.offInteractive(),re(function(){i.style.height=r+"px",re(function(){!function(e,o){if(n(e,o)){var i=t(o,"g");e.className=e.className.replace(i," ").replace(y," ")}}(o,"is-open"),i.style.height=0})})}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"destroy",value:function(){h(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"destroy",this).call(this),delete this.rootNode,delete this.options}}]),o}());ae.DEFAULTS={containerClass:".js-dropdown",toggleClass:"js-dropdown__toggle",isOpenClass:"is-open"};var se=function(e){function t(){return u(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,E,te))}return f(t,C),c(t,[{key:"connectedCallback",value:function(){h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-languages js-dropdown",this.dropDown=new ae(this,{containerClass:null})}},{key:"disconnectedCallback",value:function(){h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.dropDown.destroy(),delete this.dropDown}}]),t}();!function(e){var t=0,n=function(){if(0===t)try{e.apply(void 0,arguments),t+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",n,!1),document.addEventListener("WebComponentsReady",n,!1)}(function(){window.customElements.define("axa-header-languages",se)})}();
