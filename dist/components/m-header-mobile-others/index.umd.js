!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=".m-header-mobile-others {\n  display: block;\n  background: #fafafa; }\n\n.m-header-mobile-others__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-others__list-item {\n  display: block;\n  border-top: 1px solid #e5e5e5; }\n  .m-header-mobile-others__list-item:first-child {\n    border-top: none; }\n\n.m-header-mobile-others__link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  cursor: pointer;\n  display: block;\n  padding: 20px 60px;\n  color: #999;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-mobile-others__link {\n      font-size: 16px; } }\n  .m-header-mobile-others__link.is-header-mobile-others-active, .m-header-mobile-others__link:hover, .m-header-mobile-others__link:active, .m-header-mobile-others__link:focus {\n    text-decoration: none;\n    color: #00008f; }\n";var t=function(e){return function(t,r,o){for(var i in r)i in n&&(r[n[i]]=r[i],delete r[i]);return e(t,r,o)}},n={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=1,h=2,p=3,m=4,v=5,b=6,y=7,g=8,x=9,_=10,C=11,k=12,w=13;var O=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var E,A=/\n[\s]+$/,T=/^\n[\s]+/,j=/[\s]+$/,N=/^[\s]+/,S=/[\n\s]+/g,L=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],P=["code","pre"],F=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var u=n[l];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),l===s-1&&(a=!1,-1===L.indexOf(i)&&-1===P.indexOf(i)?""===(r=c.nodeValue.replace(T,"").replace(j,"").replace(A,"").replace(S," "))?t.removeChild(c):c.nodeValue=r:-1===P.indexOf(i)&&(o=0===l?"":" ",r=c.nodeValue.replace(T,o).replace(N," ").replace(j,"").replace(A,"").replace(S," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===L.indexOf(i)&&-1===P.indexOf(i)?""===(r=c.nodeValue.replace(T,"").replace(A,"").replace(S," "))?t.removeChild(c):c.nodeValue=r:-1===P.indexOf(i)&&(r=c.nodeValue.replace(N," ").replace(T,"").replace(A,"").replace(S," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},M=(function(e){var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,t,r){var s;-1!==l.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)s=document.createElementNS(u,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var c in t)if(t.hasOwnProperty(c)){var f=c.toLowerCase(),d=t[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==i.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?s[c]=d:u?"xlink:href"===c?s.setAttributeNS(o,c,d):/^xmlns($|:)/i.test(c)||s.setAttributeNS(null,c,d):s.setAttribute(c,d)}return F(s,r),s}e.exports=function(e,n){n||(n={});var o=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=t(e)),function(t){for(var a=d,l="",s=arguments.length,u=[],c=0;c<t.length;c++)if(c<s-1){var f=arguments[c+1],E=z(t[c]),A=a;A===_&&(A=g),A===x&&(A=g),A===y&&(A=g),A===m&&(A=v),E.push([0,A,f]),u.push.apply(u,E)}else u.push.apply(u,z(t[c]));var T,j=[null,{},[]],N=[[j,-1]];for(c=0;c<u.length;c++){var S=N[N.length-1][0],L=(E=u[c])[0];if(L===h&&/^\//.test(E[1])){var P=N[N.length-1][1];N.length>1&&(N.pop(),N[N.length-1][0][2][P]=e(S[0],S[1],S[2].length?S[2]:void 0))}else if(L===h){var F=[E[1],{},[]];S[2].push(F),N.push([F,S[2].length-1])}else if(L===v||0===L&&E[1]===v){for(var M,R="";c<u.length;c++)if(u[c][0]===v)R=o(R,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==v)break;if("object"!==r(u[c][2])||R)R=o(R,u[c][2]);else for(M in u[c][2])u[c][2].hasOwnProperty(M)&&!S[1][M]&&(S[1][M]=u[c][2][M])}u[c][0]===C&&c++;for(var D=c;c<u.length;c++)if(u[c][0]===g||u[c][0]===v)S[1][R]?""===u[c][1]||(S[1][R]=o(S[1][R],u[c][1])):S[1][R]=i(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==g&&u[c][1]!==v){!R.length||S[1][R]||c!==D||u[c][0]!==p&&u[c][0]!==k||(S[1][R]=R.toLowerCase()),u[c][0]===p&&c--;break}S[1][R]?""===u[c][2]||(S[1][R]=o(S[1][R],u[c][2])):S[1][R]=i(u[c][2])}}else if(L===v)S[1][E[1]]=!0;else if(0===L&&E[1]===v)S[1][E[2]]=!0;else if(L===p)T=S[0],O.test(T)&&N.length&&(P=N[N.length-1][1],N.pop(),N[N.length-1][0][2][P]=e(S[0],S[1],S[2].length?S[2]:void 0));else if(0===L&&E[1]===d)void 0===E[2]||null===E[2]?E[2]="":E[2]||(E[2]=o("",E[2])),Array.isArray(E[2][0])?S[2].push.apply(S[2],E[2]):S[2].push(E[2]);else if(L===d)S[2].push(E[1]);else if(L!==C&&L!==k)throw new Error("unhandled: "+L)}if(j[2].length>1&&/^\s*$/.test(j[2][0])&&j[2].shift(),j[2].length>2||2===j[2].length&&/\S/.test(j[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(j[2][0])&&"string"==typeof j[2][0][0]&&Array.isArray(j[2][0][2])&&(j[2][0]=e(j[2][0][0],j[2][0][1],j[2][0][2])),j[2][0];function z(e){var t,r=[];a===y&&(a=m);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===d&&"<"===i?(l.length&&r.push([d,l]),l="",a=h):">"===i&&(t=a)!==x&&t!==_&&a!==w?(a===h?r.push([h,l]):a===v?r.push([v,l]):a===g&&l.length&&r.push([g,l]),r.push([p]),l="",a=d):a===w&&/-$/.test(l)&&"-"===i?(n.comments&&r.push([g,l.substr(0,l.length-1)],[p]),l="",a=d):a===h&&/^!--$/.test(l)?(n.comments&&r.push([h,l],[v,"comment"],[C]),l=i,a=w):a===d||a===w?l+=i:a===h&&/\s/.test(i)?(r.push([h,l]),l="",a=m):a===h?l+=i:a===m&&/[^\s"'=/]/.test(i)?(a=v,l=i):a===m&&/\s/.test(i)?(l.length&&r.push([v,l]),r.push([k])):a===v&&/\s/.test(i)?(r.push([v,l]),l="",a=b):a===v&&"="===i?(r.push([v,l],[C]),l="",a=y):a===v?l+=i:a!==b&&a!==m||"="!==i?a!==b&&a!==m||/\s/.test(i)?a===y&&'"'===i?a=_:a===y&&"'"===i?a=x:a===_&&'"'===i?(r.push([g,l],[k]),l="",a=m):a===x&&"'"===i?(r.push([g,l],[k]),l="",a=m):a!==y||/\s/.test(i)?a===g&&/\s/.test(i)?(r.push([g,l],[k]),l="",a=m):a!==g&&a!==x&&a!==_||(l+=i):(a=g,o--):(r.push([k]),/[\w-]/.test(i)?(l+=i,a=v):a=m):(r.push([C]),a=y)}return a===d&&l.length?(r.push([d,l]),l=""):a===g&&l.length?(r.push([g,l]),l=""):a===_&&l.length?(r.push([g,l]),l=""):a===x&&l.length?(r.push([g,l]),l=""):a===v&&(r.push([v,l]),l=""),r}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:o("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(E={exports:{}},E.exports),E.exports),R=(M.createElement,c(['\n  <ul class="m-header-mobile-others__list">\n    ',"\n  </ul>\n"],['\n  <ul class="m-header-mobile-others__list">\n    ',"\n  </ul>\n"])),D=c(['\n      <li class="m-header-mobile-others__list-item">\n        <a href="','" class="m-header-mobile-others__link js-header-mobile-close ','">',"</a>\n      </li>"],['\n      <li class="m-header-mobile-others__list-item">\n        <a href="','" class="m-header-mobile-others__link js-header-mobile-close ','">',"</a>\n      </li>"]),z=function(e){var t=e.items;return M(R,t&&t.map(function(e){var t=e.name,n=e.url,r=e.isActive;return M(D,n,void 0!==r&&r&&"is-header-mobile-others-active",t)}))},G=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function $(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(G.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var q=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var u=s.preventDefault;return s.preventDefault=function(){u.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function V(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new q(t,a({},r,{detail:n}));e.dispatchEvent(o)}function W(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var B=/\s+/,I={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function H(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(I[t]&&(t=I[t]),!e||!t)return null;var a=void 0===n?"undefined":r(n);"function"===a&&(i=!!o,o=n);for(var l=n&&"string"===a?function(t){var r=t.target;for(;!W(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,s=t.split(B),u=s.length,c=0;c<u;++c)e.addEventListener(s[c],l,i);return function t(){for(var n=0;n<u;++n)e.removeEventListener(s[n],l,i);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var J={};function Z(e,t){var n=H(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);J[e]||(J[e]={count:0});var r,o=J[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,l=n.maxWait,s=void 0!==l&&l,u=void 0,c=void 0,d=void 0,h=void 0,p=!1,m=t!==s,v=!1!==s;function b(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,m&&(c&&clearTimeout(c),c=setTimeout(y,t)),v&&!d&&(d=setTimeout(g,s)),o&&!p&&(p=!0,h=e.apply(void 0,f(u))),h}return b.flush=function(){return(c||d)&&(h=e.apply(void 0,f(u))),_(),h},b.cancel=_,b;function y(){d&&clearTimeout(d),x()}function g(){c&&clearTimeout(c),x()}function x(){a&&(h=e.apply(void 0,f(u))),c=null,d=null,p=!1}function _(){c&&(clearTimeout(c),c=null),d&&(clearTimeout(d),d=null),u=void 0,p=!1}}((r=e,function(){V(document,"pubsub/onsubscribe",r),V(document,"pubsub/onsubscribe/"+r,r),J[r]&&delete J[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete J[e]}}function K(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}H(document,"pubsub/onsubscribe",function(e){var t=e.detail;J[t]||(J[t]={count:0});var n=J[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];V(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(K.prototype,HTMLElement.prototype),Object.setPrototypeOf(K,HTMLElement);var Q,U,X,Y={},ee="throwed",te=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];o(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,n),r}return l(t,K),i(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t={},n=e.attributes,r=n.length,o=0;o<r;++o){var i=n[o];t[i.name]=$(i)}return t}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var o=new Error(ee);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){o.message!==ee&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;J[e]||(J[e]={count:0,queue:[]});var r=J[e].queue;Array.isArray(r)?r.push([e,t,n]):V(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=Z("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),ne=(function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,te),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,te),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:te.uuidv4();if(e&&!Y[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),Y[e]=!0}}}]),t}()),re=function(t){function n(){return o(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,z))}return l(n,ne),i(n,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-mobile-others"}}]),n}();return Q=function(){window.customElements.define("axa-header-mobile-others",re)},U=0,X=function(){if(0===U)try{Q.apply(void 0,arguments),U+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",X,!1),document.addEventListener("WebComponentsReady",X,!1),re});
