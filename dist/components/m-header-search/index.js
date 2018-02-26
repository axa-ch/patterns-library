var StyleGuideWebComponent=function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,a=void 0!==o&&o,i=t.detail,s=void 0===i?void 0:i,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,a,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new n(t,i({},o,{detail:r}));e.dispatchEvent(a)}function d(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var h=/\s+/,p={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,a=0;a<r;++a)if(void 0!==e[o=n[a]])return t[o];return""}()};function m(e,t,n,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(p[t]&&(t=p[t]),!e||!t)return null;var i=void 0===n?"undefined":r(n);"function"===i&&(a=!!o,o=n);for(var s=n&&"string"===i?function(t){var r=t.target;for(;!d(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,l=t.split(h),c=l.length,u=0;u<c;++u)e.addEventListener(l[u],s,a);return function t(){for(var n=0;n<c;++n)e.removeEventListener(l[n],s,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var a=n[o];if(e[a]===t)return delete e[a]}}(this,t)}}var v={};function y(e,t){var n=m(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);v[e]||(v[e]={count:0});var r,o=v[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,a=n.trailing,i=void 0===a||a,s=n.maxWait,l=void 0!==s&&s,c=void 0,f=void 0,d=void 0,h=void 0,p=!1,m=t!==l,v=!1!==l;function y(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return c=r,m&&(f&&clearTimeout(f),f=setTimeout(g,t)),v&&!d&&(d=setTimeout(b,l)),o&&!p&&(p=!0,h=e.apply(void 0,u(c))),h}return y.flush=function(){return(f||d)&&(h=e.apply(void 0,u(c))),_(),h},y.cancel=_,y;function g(){d&&clearTimeout(d),x()}function b(){f&&clearTimeout(f),x()}function x(){i&&(h=e.apply(void 0,u(c))),f=null,d=null,p=!1}function _(){f&&(clearTimeout(f),f=null),d&&(clearTimeout(d),d=null),c=void 0,p=!1}}((r=e,function(){f(document,"pubsub/onsubscribe",r),f(document,"pubsub/onsubscribe/"+r,r),v[r]&&delete v[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete v[e]}}function g(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;v[t]||(v[t]={count:0});var n=v[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];f(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(g.prototype,HTMLElement.prototype),Object.setPrototypeOf(g,HTMLElement);var b={},x="throwed",_=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,n);var r=l(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,t),r}return s(n,g),a(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},r=e.attributes,o=r.length,a=0;a<o;++a){var i=r[a];n[i.name]=t(i)}return n}(this),r);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var a=new Error(x);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),a}this.appendChild(o)}this._hasRendered=!0}catch(a){a.message!==x&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+a+"\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;v[e]||(v[e]={count:0,queue:[]});var r=v[e].queue;Array.isArray(r)?r.push([e,t,n]):f(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=y("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),C=(function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,_),a(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,_),a(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.uuidv4();if(e&&!b[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),b[e]=!0}}}]),t}()),w=".m-header-search {\n  display: block; }\n  @media (max-width: 991px) {\n    .m-header-search {\n      margin-left: auto; } }\n\n.m-header-search__form {\n  display: block;\n  padding: 6px 0 6px 20px;\n  margin-left: 20px;\n  border-left: 1px solid #ccc; }\n  @media (max-width: 991px) {\n    .m-header-search__form {\n      padding-left: 0;\n      padding-right: 20px;\n      border-left: none;\n      border-right: 1px solid #ccc; } }\n\n.m-header-search__input {\n  display: none; }\n\n.m-header-search__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  color: #7f7f7f; }\n";var k=function(e){return function(t,n,r){for(var o in n)o in O&&(n[O[o]]=n[o],delete n[o]);return e(t,n,r)}},O={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var E=1,A=2,T=3,S=4,N=5,j=6,L=7,P=8,M=9,F=10,R=11,D=12,G=13;var z=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var $,q=/\n[\s]+$/,V=/^\n[\s]+/,W=/[\s]+$/,B=/^[\s]+/,I=/[\n\s]+/g,H=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],J=["code","pre"],Z=function e(t,n){if(Array.isArray(n))for(var r,o,a=t.nodeName.toLowerCase(),i=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)i=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(i=!1,-1===H.indexOf(a)&&-1===J.indexOf(a)?""===(r=u.nodeValue.replace(V,"").replace(W,"").replace(q,"").replace(I," "))?t.removeChild(u):u.nodeValue=r:-1===J.indexOf(a)&&(o=0===s?"":" ",r=u.nodeValue.replace(V,o).replace(B," ").replace(W,"").replace(q,"").replace(I," "),u.nodeValue=r));else if(c&&c.nodeType){i&&(i=!1,-1===H.indexOf(a)&&-1===J.indexOf(a)?""===(r=u.nodeValue.replace(V,"").replace(q,"").replace(I," "))?t.removeChild(u):u.nodeValue=r:-1===J.indexOf(a)&&(r=u.nodeValue.replace(B," ").replace(V,"").replace(q,"").replace(I," "),u.nodeValue=r));var f=c.nodeName;f&&(a=f.toLowerCase()),t.appendChild(c)}}}},K=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",i=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,r,s){var l;-1!==i.indexOf(e)&&(r.namespace=t);var c=!1;if(r.namespace&&(c=r.namespace,delete r.namespace),c)l=document.createElementNS(c,e);else{if(e===a)return document.createComment(r.comment);l=document.createElement(e)}for(var u in r)if(r.hasOwnProperty(u)){var f=u.toLowerCase(),d=r[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==o.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?l[u]=d:c?"xlink:href"===u?l.setAttributeNS(n,u,d):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,d):l.setAttribute(u,d)}return Z(l,s),l}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=k(e)),function(a){for(var i=E,s="",l=arguments.length,c=[],u=0;u<a.length;u++)if(u<l-1){var f=arguments[u+1],d=k(a[u]),h=i;h===F&&(h=P),h===M&&(h=P),h===L&&(h=P),h===S&&(h=N),d.push([0,h,f]),c.push.apply(c,d)}else c.push.apply(c,k(a[u]));var p,m=[null,{},[]],v=[[m,-1]];for(u=0;u<c.length;u++){var y=v[v.length-1][0],g=(d=c[u])[0];if(g===A&&/^\//.test(d[1])){var b=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(g===A){var x=[d[1],{},[]];y[2].push(x),v.push([x,y[2].length-1])}else if(g===N||0===g&&d[1]===N){for(var _,C="";u<c.length;u++)if(c[u][0]===N)C=n(C,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==N)break;if("object"!==r(c[u][2])||C)C=n(C,c[u][2]);else for(_ in c[u][2])c[u][2].hasOwnProperty(_)&&!y[1][_]&&(y[1][_]=c[u][2][_])}c[u][0]===R&&u++;for(var w=u;u<c.length;u++)if(c[u][0]===P||c[u][0]===N)y[1][C]?""===c[u][1]||(y[1][C]=n(y[1][C],c[u][1])):y[1][C]=o(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==P&&c[u][1]!==N){!C.length||y[1][C]||u!==w||c[u][0]!==T&&c[u][0]!==D||(y[1][C]=C.toLowerCase()),c[u][0]===T&&u--;break}y[1][C]?""===c[u][2]||(y[1][C]=n(y[1][C],c[u][2])):y[1][C]=o(c[u][2])}}else if(g===N)y[1][d[1]]=!0;else if(0===g&&d[1]===N)y[1][d[2]]=!0;else if(g===T)p=y[0],z.test(p)&&v.length&&(b=v[v.length-1][1],v.pop(),v[v.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===g&&d[1]===E)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=n("",d[2])),Array.isArray(d[2][0])?y[2].push.apply(y[2],d[2]):y[2].push(d[2]);else if(g===E)y[2].push(d[1]);else if(g!==R&&g!==D)throw new Error("unhandled: "+g)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function k(e){var n,r=[];i===L&&(i=S);for(var o=0;o<e.length;o++){var a=e.charAt(o);i===E&&"<"===a?(s.length&&r.push([E,s]),s="",i=A):">"===a&&(n=i)!==M&&n!==F&&i!==G?(i===A?r.push([A,s]):i===N?r.push([N,s]):i===P&&s.length&&r.push([P,s]),r.push([T]),s="",i=E):i===G&&/-$/.test(s)&&"-"===a?(t.comments&&r.push([P,s.substr(0,s.length-1)],[T]),s="",i=E):i===A&&/^!--$/.test(s)?(t.comments&&r.push([A,s],[N,"comment"],[R]),s=a,i=G):i===E||i===G?s+=a:i===A&&/\s/.test(a)?(r.push([A,s]),s="",i=S):i===A?s+=a:i===S&&/[^\s"'=/]/.test(a)?(i=N,s=a):i===S&&/\s/.test(a)?(s.length&&r.push([N,s]),r.push([D])):i===N&&/\s/.test(a)?(r.push([N,s]),s="",i=j):i===N&&"="===a?(r.push([N,s],[R]),s="",i=L):i===N?s+=a:i!==j&&i!==S||"="!==a?i!==j&&i!==S||/\s/.test(a)?i===L&&'"'===a?i=F:i===L&&"'"===a?i=M:i===F&&'"'===a?(r.push([P,s],[D]),s="",i=S):i===M&&"'"===a?(r.push([P,s],[D]),s="",i=S):i!==L||/\s/.test(a)?i===P&&/\s/.test(a)?(r.push([P,s],[D]),s="",i=S):i!==P&&i!==M&&i!==F||(s+=a):(i=P,o--):(r.push([D]),/[\w-]/.test(a)?(s+=a,i=N):i=S):(r.push([R]),i=L)}return i===E&&s.length?(r.push([E,s]),s=""):i===P&&s.length?(r.push([P,s]),s=""):i===F&&s.length?(r.push([P,s]),s=""):i===M&&s.length?(r.push([P,s]),s=""):i===N&&(r.push([N,s]),s=""),r}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}($={exports:{}},$.exports),$.exports);K.createElement;var Q,U,X,Y,ee,te=function(e){return"undefined"!=typeof window?((n=document.createElement("div")).innerHTML=e,r=n.childNodes,Array.isArray(r)?r:[].slice.call(r)):((t=new String(e)).__encoded=!0,t);var t,n,r},ne=(Q=['\n  <form class="m-header-search__form" action="','" method="','">\n    <a class="m-header-search__page-link" href="','">\n      ','\n    </a>\n\n    <input type="text" class="m-header-search__input" placeholder="search..." />\n  </form>\n'],U=['\n  <form class="m-header-search__form" action="','" method="','">\n    <a class="m-header-search__page-link" href="','">\n      ','\n    </a>\n\n    <input type="text" class="m-header-search__input" placeholder="search..." />\n  </form>\n'],Object.freeze(Object.defineProperties(Q,{raw:{value:Object.freeze(U)}}))),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=e.href,r=e.method;return K(ne,t,void 0===r?"POST":r,n,te('<axa-icon id="search-left" classes="m-header-search__icon"></axa-icon>'))},oe=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,w,re))}return s(t,C),a(t,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-search"}}]),t}();return X=function(){window.customElements.define("axa-header-search",oe)},Y=0,ee=function(){if(0===Y)try{X.apply(void 0,arguments),Y+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ee,!1),document.addEventListener("WebComponentsReady",ee,!1),oe}();
