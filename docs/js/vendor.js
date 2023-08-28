/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).barba=n()}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));
//# sourceMappingURL=barba.umd.js.map

/* locomotive-scroll v4.1.3 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
(function (global, factory) {
	typeof exports === "object" && typeof module !== "undefined"
		? (module.exports = factory())
		: typeof define === "function" && define.amd
		? define(factory)
		: ((global =
				typeof globalThis !== "undefined"
					? globalThis
					: global || self),
		  (global.LocomotiveScroll = factory()));
})(this, function () {
	"use strict";

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true,
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	function ownKeys(object, enumerableOnly) {
		var keys = Object.keys(object);

		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(object);
			if (enumerableOnly)
				symbols = symbols.filter(function (sym) {
					return Object.getOwnPropertyDescriptor(
						object,
						sym
					).enumerable;
				});
			keys.push.apply(keys, symbols);
		}

		return keys;
	}

	function _objectSpread2(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i] != null ? arguments[i] : {};

			if (i % 2) {
				ownKeys(Object(source), true).forEach(function (key) {
					_defineProperty(target, key, source[key]);
				});
			} else if (Object.getOwnPropertyDescriptors) {
				Object.defineProperties(
					target,
					Object.getOwnPropertyDescriptors(source)
				);
			} else {
				ownKeys(Object(source)).forEach(function (key) {
					Object.defineProperty(
						target,
						key,
						Object.getOwnPropertyDescriptor(source, key)
					);
				});
			}
		}

		return target;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError(
				"Super expression must either be null or a function"
			);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				writable: true,
				configurable: true,
			},
		});
		if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
		_getPrototypeOf = Object.setPrototypeOf
			? Object.getPrototypeOf
			: function _getPrototypeOf(o) {
					return o.__proto__ || Object.getPrototypeOf(o);
			  };
		return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
		_setPrototypeOf =
			Object.setPrototypeOf ||
			function _setPrototypeOf(o, p) {
				o.__proto__ = p;
				return o;
			};

		return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
		if (typeof Reflect === "undefined" || !Reflect.construct) return false;
		if (Reflect.construct.sham) return false;
		if (typeof Proxy === "function") return true;

		try {
			Date.prototype.toString.call(
				Reflect.construct(Date, [], function () {})
			);
			return true;
		} catch (e) {
			return false;
		}
	}

	function _assertThisInitialized(self) {
		if (self === void 0) {
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		}

		return self;
	}

	function _possibleConstructorReturn(self, call) {
		if (call && (typeof call === "object" || typeof call === "function")) {
			return call;
		}

		return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
		var hasNativeReflectConstruct = _isNativeReflectConstruct();

		return function _createSuperInternal() {
			var Super = _getPrototypeOf(Derived),
				result;

			if (hasNativeReflectConstruct) {
				var NewTarget = _getPrototypeOf(this).constructor;

				result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return _possibleConstructorReturn(this, result);
		};
	}

	function _superPropBase(object, property) {
		while (!Object.prototype.hasOwnProperty.call(object, property)) {
			object = _getPrototypeOf(object);
			if (object === null) break;
		}

		return object;
	}

	function _get(target, property, receiver) {
		if (typeof Reflect !== "undefined" && Reflect.get) {
			_get = Reflect.get;
		} else {
			_get = function _get(target, property, receiver) {
				var base = _superPropBase(target, property);

				if (!base) return;
				var desc = Object.getOwnPropertyDescriptor(base, property);

				if (desc.get) {
					return desc.get.call(receiver);
				}

				return desc.value;
			};
		}

		return _get(target, property, receiver || target);
	}

	function _slicedToArray(arr, i) {
		return (
			_arrayWithHoles(arr) ||
			_iterableToArrayLimit(arr, i) ||
			_unsupportedIterableToArray(arr, i) ||
			_nonIterableRest()
		);
	}

	function _toConsumableArray(arr) {
		return (
			_arrayWithoutHoles(arr) ||
			_iterableToArray(arr) ||
			_unsupportedIterableToArray(arr) ||
			_nonIterableSpread()
		);
	}

	function _arrayWithoutHoles(arr) {
		if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}

	function _arrayWithHoles(arr) {
		if (Array.isArray(arr)) return arr;
	}

	function _iterableToArray(iter) {
		if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
			return Array.from(iter);
	}

	function _iterableToArrayLimit(arr, i) {
		if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
			return;
		var _arr = [];
		var _n = true;
		var _d = false;
		var _e = undefined;

		try {
			for (
				var _i = arr[Symbol.iterator](), _s;
				!(_n = (_s = _i.next()).done);
				_n = true
			) {
				_arr.push(_s.value);

				if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;
			_e = err;
		} finally {
			try {
				if (!_n && _i["return"] != null) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}

		return _arr;
	}

	function _unsupportedIterableToArray(o, minLen) {
		if (!o) return;
		if (typeof o === "string") return _arrayLikeToArray(o, minLen);
		var n = Object.prototype.toString.call(o).slice(8, -1);
		if (n === "Object" && o.constructor) n = o.constructor.name;
		if (n === "Map" || n === "Set") return Array.from(o);
		if (
			n === "Arguments" ||
			/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
		)
			return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
		if (len == null || len > arr.length) len = arr.length;

		for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

		return arr2;
	}

	function _nonIterableSpread() {
		throw new TypeError(
			"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
		);
	}

	function _nonIterableRest() {
		throw new TypeError(
			"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
		);
	}

	var defaults = {
		el: document,
		name: "scroll",
		offset: [0, 0],
		repeat: false,
		smooth: false,
		initPosition: {
			x: 0,
			y: 0,
		},
		direction: "vertical",
		gestureDirection: "vertical",
		reloadOnContextChange: false,
		lerp: 0.1,
		class: "is-inview",
		scrollbarContainer: false,
		scrollbarClass: "c-scrollbar",
		scrollingClass: "has-scroll-scrolling",
		draggingClass: "has-scroll-dragging",
		smoothClass: "has-scroll-smooth",
		initClass: "has-scroll-init",
		getSpeed: false,
		getDirection: false,
		scrollFromAnywhere: false,
		multiplier: 1,
		firefoxMultiplier: 50,
		touchMultiplier: 2,
		resetNativeScroll: true,
		tablet: {
			smooth: false,
			direction: "vertical",
			gestureDirection: "vertical",
			breakpoint: 1024,
		},
		smartphone: {
			smooth: false,
			direction: "vertical",
			gestureDirection: "vertical",
		},
	};

	var _default = /*#__PURE__*/ (function () {
		function _default() {
			var options =
				arguments.length > 0 && arguments[0] !== undefined
					? arguments[0]
					: {};

			_classCallCheck(this, _default);

			Object.assign(this, defaults, options);
			this.smartphone = defaults.smartphone;
			if (options.smartphone)
				Object.assign(this.smartphone, options.smartphone);
			this.tablet = defaults.tablet;
			if (options.tablet) Object.assign(this.tablet, options.tablet);
			this.namespace = "locomotive";
			this.html = document.documentElement;
			this.windowHeight = window.innerHeight;
			this.windowWidth = window.innerWidth;
			this.windowMiddle = {
				x: this.windowWidth / 2,
				y: this.windowHeight / 2,
			};
			this.els = {};
			this.currentElements = {};
			this.listeners = {};
			this.hasScrollTicking = false;
			this.hasCallEventSet = false;
			this.checkScroll = this.checkScroll.bind(this);
			this.checkResize = this.checkResize.bind(this);
			this.checkEvent = this.checkEvent.bind(this);
			this.instance = {
				scroll: {
					x: 0,
					y: 0,
				},
				limit: {
					x: this.html.offsetWidth,
					y: this.html.offsetHeight,
				},
				currentElements: this.currentElements,
			};

			if (this.isMobile) {
				if (this.isTablet) {
					this.context = "tablet";
				} else {
					this.context = "smartphone";
				}
			} else {
				this.context = "desktop";
			}

			if (this.isMobile) this.direction = this[this.context].direction;

			if (this.direction === "horizontal") {
				this.directionAxis = "x";
			} else {
				this.directionAxis = "y";
			}

			if (this.getDirection) {
				this.instance.direction = null;
			}

			if (this.getDirection) {
				this.instance.speed = 0;
			}

			this.html.classList.add(this.initClass);
			window.addEventListener("resize", this.checkResize, false);
		}

		_createClass(_default, [
			{
				key: "init",
				value: function init() {
					this.initEvents();
				},
			},
			{
				key: "checkScroll",
				value: function checkScroll() {
					this.dispatchScroll();
				},
			},
			{
				key: "checkResize",
				value: function checkResize() {
					var _this = this;

					if (!this.resizeTick) {
						this.resizeTick = true;
						requestAnimationFrame(function () {
							_this.resize();

							_this.resizeTick = false;
						});
					}
				},
			},
			{
				key: "resize",
				value: function resize() {},
			},
			{
				key: "checkContext",
				value: function checkContext() {
					if (!this.reloadOnContextChange) return;
					this.isMobile =
						/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
							navigator.userAgent
						) ||
						(navigator.platform === "MacIntel" &&
							navigator.maxTouchPoints > 1) ||
						this.windowWidth < this.tablet.breakpoint;
					this.isTablet =
						this.isMobile &&
						this.windowWidth >= this.tablet.breakpoint;
					var oldContext = this.context;

					if (this.isMobile) {
						if (this.isTablet) {
							this.context = "tablet";
						} else {
							this.context = "smartphone";
						}
					} else {
						this.context = "desktop";
					}

					if (oldContext != this.context) {
						var oldSmooth =
							oldContext == "desktop"
								? this.smooth
								: this[oldContext].smooth;
						var newSmooth =
							this.context == "desktop"
								? this.smooth
								: this[this.context].smooth;
						if (oldSmooth != newSmooth) window.location.reload();
					}
				},
			},
			{
				key: "initEvents",
				value: function initEvents() {
					var _this2 = this;

					this.scrollToEls = this.el.querySelectorAll(
						"[data-".concat(this.name, "-to]")
					);
					this.setScrollTo = this.setScrollTo.bind(this);
					this.scrollToEls.forEach(function (el) {
						el.addEventListener("click", _this2.setScrollTo, false);
					});
				},
			},
			{
				key: "setScrollTo",
				value: function setScrollTo(event) {
					event.preventDefault();
					this.scrollTo(
						event.currentTarget.getAttribute(
							"data-".concat(this.name, "-href")
						) || event.currentTarget.getAttribute("href"),
						{
							offset: event.currentTarget.getAttribute(
								"data-".concat(this.name, "-offset")
							),
						}
					);
				},
			},
			{
				key: "addElements",
				value: function addElements() {},
			},
			{
				key: "detectElements",
				value: function detectElements(hasCallEventSet) {
					var _this3 = this;

					var scrollTop = this.instance.scroll.y;
					var scrollBottom = scrollTop + this.windowHeight;
					var scrollLeft = this.instance.scroll.x;
					var scrollRight = scrollLeft + this.windowWidth;
					Object.entries(this.els).forEach(function (_ref) {
						var _ref2 = _slicedToArray(_ref, 2),
							i = _ref2[0],
							el = _ref2[1];

						if (el && (!el.inView || hasCallEventSet)) {
							if (_this3.direction === "horizontal") {
								if (
									scrollRight >= el.left &&
									scrollLeft < el.right
								) {
									_this3.setInView(el, i);
								}
							} else {
								if (
									scrollBottom >= el.top &&
									scrollTop < el.bottom
								) {
									_this3.setInView(el, i);
								}
							}
						}

						if (el && el.inView) {
							if (_this3.direction === "horizontal") {
								var width = el.right - el.left;
								el.progress =
									(_this3.instance.scroll.x -
										(el.left - _this3.windowWidth)) /
									(width + _this3.windowWidth);

								if (
									scrollRight < el.left ||
									scrollLeft > el.right
								) {
									_this3.setOutOfView(el, i);
								}
							} else {
								var height = el.bottom - el.top;
								el.progress =
									(_this3.instance.scroll.y -
										(el.top - _this3.windowHeight)) /
									(height + _this3.windowHeight);

								if (
									scrollBottom < el.top ||
									scrollTop > el.bottom
								) {
									_this3.setOutOfView(el, i);
								}
							}
						}
					}); // this.els = this.els.filter((current, i) => {
					//     return current !== null;
					// });

					this.hasScrollTicking = false;
				},
			},
			{
				key: "setInView",
				value: function setInView(current, i) {
					this.els[i].inView = true;
					current.el.classList.add(current["class"]);
					this.currentElements[i] = current;

					if (current.call && this.hasCallEventSet) {
						this.dispatchCall(current, "enter");

						if (!current.repeat) {
							this.els[i].call = false;
						}
					} // if (!current.repeat && !current.speed && !current.sticky) {
					//     if (!current.call || current.call && this.hasCallEventSet) {
					//        this.els[i] = null
					//     }
					// }
				},
			},
			{
				key: "setOutOfView",
				value: function setOutOfView(current, i) {
					var _this4 = this;

					// if (current.repeat || current.speed !== undefined) {
					this.els[i].inView = false; // }

					Object.keys(this.currentElements).forEach(function (el) {
						el === i && delete _this4.currentElements[el];
					});

					if (current.call && this.hasCallEventSet) {
						this.dispatchCall(current, "exit");
					}

					if (current.repeat) {
						current.el.classList.remove(current["class"]);
					}
				},
			},
			{
				key: "dispatchCall",
				value: function dispatchCall(current, way) {
					this.callWay = way;
					this.callValue = current.call
						.split(",")
						.map(function (item) {
							return item.trim();
						});
					this.callObj = current;
					if (this.callValue.length == 1)
						this.callValue = this.callValue[0];
					var callEvent = new Event(this.namespace + "call");
					this.el.dispatchEvent(callEvent);
				},
			},
			{
				key: "dispatchScroll",
				value: function dispatchScroll() {
					var scrollEvent = new Event(this.namespace + "scroll");
					this.el.dispatchEvent(scrollEvent);
				},
			},
			{
				key: "setEvents",
				value: function setEvents(event, func) {
					if (!this.listeners[event]) {
						this.listeners[event] = [];
					}

					var list = this.listeners[event];
					list.push(func);

					if (list.length === 1) {
						this.el.addEventListener(
							this.namespace + event,
							this.checkEvent,
							false
						);
					}

					if (event === "call") {
						this.hasCallEventSet = true;
						this.detectElements(true);
					}
				},
			},
			{
				key: "unsetEvents",
				value: function unsetEvents(event, func) {
					if (!this.listeners[event]) return;
					var list = this.listeners[event];
					var index = list.indexOf(func);
					if (index < 0) return;
					list.splice(index, 1);

					if (list.index === 0) {
						this.el.removeEventListener(
							this.namespace + event,
							this.checkEvent,
							false
						);
					}
				},
			},
			{
				key: "checkEvent",
				value: function checkEvent(event) {
					var _this5 = this;

					var name = event.type.replace(this.namespace, "");
					var list = this.listeners[name];
					if (!list || list.length === 0) return;
					list.forEach(function (func) {
						switch (name) {
							case "scroll":
								return func(_this5.instance);

							case "call":
								return func(
									_this5.callValue,
									_this5.callWay,
									_this5.callObj
								);

							default:
								return func();
						}
					});
				},
			},
			{
				key: "startScroll",
				value: function startScroll() {},
			},
			{
				key: "stopScroll",
				value: function stopScroll() {},
			},
			{
				key: "setScroll",
				value: function setScroll(x, y) {
					this.instance.scroll = {
						x: 0,
						y: 0,
					};
				},
			},
			{
				key: "destroy",
				value: function destroy() {
					var _this6 = this;

					window.removeEventListener(
						"resize",
						this.checkResize,
						false
					);
					Object.keys(this.listeners).forEach(function (event) {
						_this6.el.removeEventListener(
							_this6.namespace + event,
							_this6.checkEvent,
							false
						);
					});
					this.listeners = {};
					this.scrollToEls.forEach(function (el) {
						el.removeEventListener(
							"click",
							_this6.setScrollTo,
							false
						);
					});
					this.html.classList.remove(this.initClass);
				},
			},
		]);

		return _default;
	})();

	var commonjsGlobal =
		typeof globalThis !== "undefined"
			? globalThis
			: typeof window !== "undefined"
			? window
			: typeof global !== "undefined"
			? global
			: typeof self !== "undefined"
			? self
			: {};

	function createCommonjsModule(fn, module) {
		return (
			(module = { exports: {} }),
			fn(module, module.exports),
			module.exports
		);
	}

	var smoothscroll = createCommonjsModule(function (module, exports) {
		/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
		(function () {
			// polyfill
			function polyfill() {
				// aliases
				var w = window;
				var d = document;

				// return if scroll behavior is supported and polyfill is not forced
				if (
					"scrollBehavior" in d.documentElement.style &&
					w.__forceSmoothScrollPolyfill__ !== true
				) {
					return;
				}

				// globals
				var Element = w.HTMLElement || w.Element;
				var SCROLL_TIME = 468;

				// object gathering original scroll methods
				var original = {
					scroll: w.scroll || w.scrollTo,
					scrollBy: w.scrollBy,
					elementScroll: Element.prototype.scroll || scrollElement,
					scrollIntoView: Element.prototype.scrollIntoView,
				};

				// define timing method
				var now =
					w.performance && w.performance.now
						? w.performance.now.bind(w.performance)
						: Date.now;

				/**
				 * indicates if a the current browser is made by Microsoft
				 * @method isMicrosoftBrowser
				 * @param {String} userAgent
				 * @returns {Boolean}
				 */
				function isMicrosoftBrowser(userAgent) {
					var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];

					return new RegExp(userAgentPatterns.join("|")).test(
						userAgent
					);
				}

				/*
				 * IE has rounding bug rounding down clientHeight and clientWidth and
				 * rounding up scrollHeight and scrollWidth causing false positives
				 * on hasScrollableSpace
				 */
				var ROUNDING_TOLERANCE = isMicrosoftBrowser(
					w.navigator.userAgent
				)
					? 1
					: 0;

				/**
				 * changes scroll position inside an element
				 * @method scrollElement
				 * @param {Number} x
				 * @param {Number} y
				 * @returns {undefined}
				 */
				function scrollElement(x, y) {
					this.scrollLeft = x;
					this.scrollTop = y;
				}

				/**
				 * returns result of applying ease math function to a number
				 * @method ease
				 * @param {Number} k
				 * @returns {Number}
				 */
				function ease(k) {
					return 0.5 * (1 - Math.cos(Math.PI * k));
				}

				/**
				 * indicates if a smooth behavior should be applied
				 * @method shouldBailOut
				 * @param {Number|Object} firstArg
				 * @returns {Boolean}
				 */
				function shouldBailOut(firstArg) {
					if (
						firstArg === null ||
						typeof firstArg !== "object" ||
						firstArg.behavior === undefined ||
						firstArg.behavior === "auto" ||
						firstArg.behavior === "instant"
					) {
						// first argument is not an object/null
						// or behavior is auto, instant or undefined
						return true;
					}

					if (
						typeof firstArg === "object" &&
						firstArg.behavior === "smooth"
					) {
						// first argument is an object and behavior is smooth
						return false;
					}

					// throw error when behavior is not supported
					throw new TypeError(
						"behavior member of ScrollOptions " +
							firstArg.behavior +
							" is not a valid value for enumeration ScrollBehavior."
					);
				}

				/**
				 * indicates if an element has scrollable space in the provided axis
				 * @method hasScrollableSpace
				 * @param {Node} el
				 * @param {String} axis
				 * @returns {Boolean}
				 */
				function hasScrollableSpace(el, axis) {
					if (axis === "Y") {
						return (
							el.clientHeight + ROUNDING_TOLERANCE <
							el.scrollHeight
						);
					}

					if (axis === "X") {
						return (
							el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth
						);
					}
				}

				/**
				 * indicates if an element has a scrollable overflow property in the axis
				 * @method canOverflow
				 * @param {Node} el
				 * @param {String} axis
				 * @returns {Boolean}
				 */
				function canOverflow(el, axis) {
					var overflowValue = w.getComputedStyle(el, null)[
						"overflow" + axis
					];

					return (
						overflowValue === "auto" || overflowValue === "scroll"
					);
				}

				/**
				 * indicates if an element can be scrolled in either axis
				 * @method isScrollable
				 * @param {Node} el
				 * @param {String} axis
				 * @returns {Boolean}
				 */
				function isScrollable(el) {
					var isScrollableY =
						hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
					var isScrollableX =
						hasScrollableSpace(el, "X") && canOverflow(el, "X");

					return isScrollableY || isScrollableX;
				}

				/**
				 * finds scrollable parent of an element
				 * @method findScrollableParent
				 * @param {Node} el
				 * @returns {Node} el
				 */
				function findScrollableParent(el) {
					while (el !== d.body && isScrollable(el) === false) {
						el = el.parentNode || el.host;
					}

					return el;
				}

				/**
				 * self invoked function that, given a context, steps through scrolling
				 * @method step
				 * @param {Object} context
				 * @returns {undefined}
				 */
				function step(context) {
					var time = now();
					var value;
					var currentX;
					var currentY;
					var elapsed = (time - context.startTime) / SCROLL_TIME;

					// avoid elapsed times higher than one
					elapsed = elapsed > 1 ? 1 : elapsed;

					// apply easing to elapsed time
					value = ease(elapsed);

					currentX =
						context.startX + (context.x - context.startX) * value;
					currentY =
						context.startY + (context.y - context.startY) * value;

					context.method.call(context.scrollable, currentX, currentY);

					// scroll more if we have not reached our destination
					if (currentX !== context.x || currentY !== context.y) {
						w.requestAnimationFrame(step.bind(w, context));
					}
				}

				/**
				 * scrolls window or element with a smooth behavior
				 * @method smoothScroll
				 * @param {Object|Node} el
				 * @param {Number} x
				 * @param {Number} y
				 * @returns {undefined}
				 */
				function smoothScroll(el, x, y) {
					var scrollable;
					var startX;
					var startY;
					var method;
					var startTime = now();

					// define scroll context
					if (el === d.body) {
						scrollable = w;
						startX = w.scrollX || w.pageXOffset;
						startY = w.scrollY || w.pageYOffset;
						method = original.scroll;
					} else {
						scrollable = el;
						startX = el.scrollLeft;
						startY = el.scrollTop;
						method = scrollElement;
					}

					// scroll looping over a frame
					step({
						scrollable: scrollable,
						method: method,
						startTime: startTime,
						startX: startX,
						startY: startY,
						x: x,
						y: y,
					});
				}

				// ORIGINAL METHODS OVERRIDES
				// w.scroll and w.scrollTo
				w.scroll = w.scrollTo = function () {
					// avoid action when no arguments are passed
					if (arguments[0] === undefined) {
						return;
					}

					// avoid smooth behavior if not required
					if (shouldBailOut(arguments[0]) === true) {
						original.scroll.call(
							w,
							arguments[0].left !== undefined
								? arguments[0].left
								: typeof arguments[0] !== "object"
								? arguments[0]
								: w.scrollX || w.pageXOffset,
							// use top prop, second argument if present or fallback to scrollY
							arguments[0].top !== undefined
								? arguments[0].top
								: arguments[1] !== undefined
								? arguments[1]
								: w.scrollY || w.pageYOffset
						);

						return;
					}

					// LET THE SMOOTHNESS BEGIN!
					smoothScroll.call(
						w,
						d.body,
						arguments[0].left !== undefined
							? ~~arguments[0].left
							: w.scrollX || w.pageXOffset,
						arguments[0].top !== undefined
							? ~~arguments[0].top
							: w.scrollY || w.pageYOffset
					);
				};

				// w.scrollBy
				w.scrollBy = function () {
					// avoid action when no arguments are passed
					if (arguments[0] === undefined) {
						return;
					}

					// avoid smooth behavior if not required
					if (shouldBailOut(arguments[0])) {
						original.scrollBy.call(
							w,
							arguments[0].left !== undefined
								? arguments[0].left
								: typeof arguments[0] !== "object"
								? arguments[0]
								: 0,
							arguments[0].top !== undefined
								? arguments[0].top
								: arguments[1] !== undefined
								? arguments[1]
								: 0
						);

						return;
					}

					// LET THE SMOOTHNESS BEGIN!
					smoothScroll.call(
						w,
						d.body,
						~~arguments[0].left + (w.scrollX || w.pageXOffset),
						~~arguments[0].top + (w.scrollY || w.pageYOffset)
					);
				};

				// Element.prototype.scroll and Element.prototype.scrollTo
				Element.prototype.scroll = Element.prototype.scrollTo =
					function () {
						// avoid action when no arguments are passed
						if (arguments[0] === undefined) {
							return;
						}

						// avoid smooth behavior if not required
						if (shouldBailOut(arguments[0]) === true) {
							// if one number is passed, throw error to match Firefox implementation
							if (
								typeof arguments[0] === "number" &&
								arguments[1] === undefined
							) {
								throw new SyntaxError(
									"Value could not be converted"
								);
							}

							original.elementScroll.call(
								this,
								// use left prop, first number argument or fallback to scrollLeft
								arguments[0].left !== undefined
									? ~~arguments[0].left
									: typeof arguments[0] !== "object"
									? ~~arguments[0]
									: this.scrollLeft,
								// use top prop, second argument or fallback to scrollTop
								arguments[0].top !== undefined
									? ~~arguments[0].top
									: arguments[1] !== undefined
									? ~~arguments[1]
									: this.scrollTop
							);

							return;
						}

						var left = arguments[0].left;
						var top = arguments[0].top;

						// LET THE SMOOTHNESS BEGIN!
						smoothScroll.call(
							this,
							this,
							typeof left === "undefined"
								? this.scrollLeft
								: ~~left,
							typeof top === "undefined" ? this.scrollTop : ~~top
						);
					};

				// Element.prototype.scrollBy
				Element.prototype.scrollBy = function () {
					// avoid action when no arguments are passed
					if (arguments[0] === undefined) {
						return;
					}

					// avoid smooth behavior if not required
					if (shouldBailOut(arguments[0]) === true) {
						original.elementScroll.call(
							this,
							arguments[0].left !== undefined
								? ~~arguments[0].left + this.scrollLeft
								: ~~arguments[0] + this.scrollLeft,
							arguments[0].top !== undefined
								? ~~arguments[0].top + this.scrollTop
								: ~~arguments[1] + this.scrollTop
						);

						return;
					}

					this.scroll({
						left: ~~arguments[0].left + this.scrollLeft,
						top: ~~arguments[0].top + this.scrollTop,
						behavior: arguments[0].behavior,
					});
				};

				// Element.prototype.scrollIntoView
				Element.prototype.scrollIntoView = function () {
					// avoid smooth behavior if not required
					if (shouldBailOut(arguments[0]) === true) {
						original.scrollIntoView.call(
							this,
							arguments[0] === undefined ? true : arguments[0]
						);

						return;
					}

					// LET THE SMOOTHNESS BEGIN!
					var scrollableParent = findScrollableParent(this);
					var parentRects = scrollableParent.getBoundingClientRect();
					var clientRects = this.getBoundingClientRect();

					if (scrollableParent !== d.body) {
						// reveal element inside parent
						smoothScroll.call(
							this,
							scrollableParent,
							scrollableParent.scrollLeft +
								clientRects.left -
								parentRects.left,
							scrollableParent.scrollTop +
								clientRects.top -
								parentRects.top
						);

						// reveal parent in viewport unless is fixed
						if (
							w.getComputedStyle(scrollableParent).position !==
							"fixed"
						) {
							w.scrollBy({
								left: parentRects.left,
								top: parentRects.top,
								behavior: "smooth",
							});
						}
					} else {
						// reveal element in viewport
						w.scrollBy({
							left: clientRects.left,
							top: clientRects.top,
							behavior: "smooth",
						});
					}
				};
			}

			{
				// commonjs
				module.exports = { polyfill: polyfill };
			}
		})();
	});
	var smoothscroll_1 = smoothscroll.polyfill;

	var _default$1 = /*#__PURE__*/ (function (_Core) {
		_inherits(_default, _Core);

		var _super = _createSuper(_default);

		function _default() {
			var _this;

			var options =
				arguments.length > 0 && arguments[0] !== undefined
					? arguments[0]
					: {};

			_classCallCheck(this, _default);

			_this = _super.call(this, options);

			if (_this.resetNativeScroll) {
				if (history.scrollRestoration) {
					history.scrollRestoration = "manual";
				}

				window.scrollTo(0, 0);
			}

			window.addEventListener("scroll", _this.checkScroll, false);

			if (window.smoothscrollPolyfill === undefined) {
				window.smoothscrollPolyfill = smoothscroll;
				window.smoothscrollPolyfill.polyfill();
			}

			return _this;
		}

		_createClass(_default, [
			{
				key: "init",
				value: function init() {
					this.instance.scroll.y = window.pageYOffset;
					this.addElements();
					this.detectElements();

					_get(
						_getPrototypeOf(_default.prototype),
						"init",
						this
					).call(this);
				},
			},
			{
				key: "checkScroll",
				value: function checkScroll() {
					var _this2 = this;

					_get(
						_getPrototypeOf(_default.prototype),
						"checkScroll",
						this
					).call(this);

					if (this.getDirection) {
						this.addDirection();
					}

					if (this.getSpeed) {
						this.addSpeed();
						this.speedTs = Date.now();
					}

					this.instance.scroll.y = window.pageYOffset;

					if (Object.entries(this.els).length) {
						if (!this.hasScrollTicking) {
							requestAnimationFrame(function () {
								_this2.detectElements();
							});
							this.hasScrollTicking = true;
						}
					}
				},
			},
			{
				key: "addDirection",
				value: function addDirection() {
					if (window.pageYOffset > this.instance.scroll.y) {
						if (this.instance.direction !== "down") {
							this.instance.direction = "down";
						}
					} else if (window.pageYOffset < this.instance.scroll.y) {
						if (this.instance.direction !== "up") {
							this.instance.direction = "up";
						}
					}
				},
			},
			{
				key: "addSpeed",
				value: function addSpeed() {
					if (window.pageYOffset != this.instance.scroll.y) {
						this.instance.speed =
							(window.pageYOffset - this.instance.scroll.y) /
							Math.max(1, Date.now() - this.speedTs);
					} else {
						this.instance.speed = 0;
					}
				},
			},
			{
				key: "resize",
				value: function resize() {
					if (Object.entries(this.els).length) {
						this.windowHeight = window.innerHeight;
						this.updateElements();
					}
				},
			},
			{
				key: "addElements",
				value: function addElements() {
					var _this3 = this;

					this.els = {};
					var els = this.el.querySelectorAll(
						"[data-" + this.name + "]"
					);
					els.forEach(function (el, index) {
						var BCR = el.getBoundingClientRect();
						var cl =
							el.dataset[_this3.name + "Class"] ||
							_this3["class"];
						var id =
							typeof el.dataset[_this3.name + "Id"] === "string"
								? el.dataset[_this3.name + "Id"]
								: index;
						var top;
						var left;
						var offset =
							typeof el.dataset[_this3.name + "Offset"] ===
							"string"
								? el.dataset[_this3.name + "Offset"].split(",")
								: _this3.offset;
						var repeat = el.dataset[_this3.name + "Repeat"];
						var call = el.dataset[_this3.name + "Call"];
						var target = el.dataset[_this3.name + "Target"];
						var targetEl;

						if (target !== undefined) {
							targetEl = document.querySelector(
								"".concat(target)
							);
						} else {
							targetEl = el;
						}

						var targetElBCR = targetEl.getBoundingClientRect();
						top = targetElBCR.top + _this3.instance.scroll.y;
						left = targetElBCR.left + _this3.instance.scroll.x;
						var bottom = top + targetEl.offsetHeight;
						var right = left + targetEl.offsetWidth;

						if (repeat == "false") {
							repeat = false;
						} else if (repeat != undefined) {
							repeat = true;
						} else {
							repeat = _this3.repeat;
						}

						var relativeOffset = _this3.getRelativeOffset(offset);

						top = top + relativeOffset[0];
						bottom = bottom - relativeOffset[1];
						var mappedEl = {
							el: el,
							targetEl: targetEl,
							id: id,
							class: cl,
							top: top,
							bottom: bottom,
							left: left,
							right: right,
							offset: offset,
							progress: 0,
							repeat: repeat,
							inView: false,
							call: call,
						};
						_this3.els[id] = mappedEl;

						if (el.classList.contains(cl)) {
							_this3.setInView(_this3.els[id], id);
						}
					});
				},
			},
			{
				key: "updateElements",
				value: function updateElements() {
					var _this4 = this;

					Object.entries(this.els).forEach(function (_ref) {
						var _ref2 = _slicedToArray(_ref, 2),
							i = _ref2[0],
							el = _ref2[1];

						var top =
							el.targetEl.getBoundingClientRect().top +
							_this4.instance.scroll.y;

						var bottom = top + el.targetEl.offsetHeight;

						var relativeOffset = _this4.getRelativeOffset(
							el.offset
						);

						_this4.els[i].top = top + relativeOffset[0];
						_this4.els[i].bottom = bottom - relativeOffset[1];
					});
					this.hasScrollTicking = false;
				},
			},
			{
				key: "getRelativeOffset",
				value: function getRelativeOffset(offset) {
					var relativeOffset = [0, 0];

					if (offset) {
						for (var i = 0; i < offset.length; i++) {
							if (typeof offset[i] == "string") {
								if (offset[i].includes("%")) {
									relativeOffset[i] = parseInt(
										(offset[i].replace("%", "") *
											this.windowHeight) /
											100
									);
								} else {
									relativeOffset[i] = parseInt(offset[i]);
								}
							} else {
								relativeOffset[i] = offset[i];
							}
						}
					}

					return relativeOffset;
				},
				/**
				 * Scroll to a desired target.
				 *
				 * @param  Available options :
				 *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
				 *          options {object} - Options object for additionnal settings.
				 * @return {void}
				 */
			},
			{
				key: "scrollTo",
				value: function scrollTo(target) {
					var options =
						arguments.length > 1 && arguments[1] !== undefined
							? arguments[1]
							: {};
					// Parse options
					var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

					var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

					if (typeof target === "string") {
						// Selector or boundaries
						if (target === "top") {
							target = this.html;
						} else if (target === "bottom") {
							target =
								this.html.offsetHeight - window.innerHeight;
						} else {
							target = document.querySelector(target); // If the query fails, abort

							if (!target) {
								return;
							}
						}
					} else if (typeof target === "number") {
						// Absolute coordinate
						target = parseInt(target);
					} else if (target && target.tagName);
					else {
						console.warn("`target` parameter is not valid");
						return;
					} // We have a target that is not a coordinate yet, get it

					if (typeof target !== "number") {
						offset =
							target.getBoundingClientRect().top +
							offset +
							this.instance.scroll.y;
					} else {
						offset = target + offset;
					}

					var isTargetReached = function isTargetReached() {
						return (
							parseInt(window.pageYOffset) === parseInt(offset)
						);
					};

					if (callback) {
						if (isTargetReached()) {
							callback();
							return;
						} else {
							var onScroll = function onScroll() {
								if (isTargetReached()) {
									window.removeEventListener(
										"scroll",
										onScroll
									);
									callback();
								}
							};

							window.addEventListener("scroll", onScroll);
						}
					}

					window.scrollTo({
						top: offset,
						behavior: options.duration === 0 ? "auto" : "smooth",
					});
				},
			},
			{
				key: "update",
				value: function update() {
					this.addElements();
					this.detectElements();
				},
			},
			{
				key: "destroy",
				value: function destroy() {
					_get(
						_getPrototypeOf(_default.prototype),
						"destroy",
						this
					).call(this);

					window.removeEventListener(
						"scroll",
						this.checkScroll,
						false
					);
				},
			},
		]);

		return _default;
	})(_default);

	/*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError(
				"Object.assign cannot be called with null or undefined"
			);
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
			test1[5] = "de";
			if (Object.getOwnPropertyNames(test1)[0] === "5") {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2["_" + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join("") !== "0123456789") {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function (letter) {
				test3[letter] = letter;
			});
			if (
				Object.keys(Object.assign({}, test3)).join("") !==
				"abcdefghijklmnopqrst"
			) {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative()
		? Object.assign
		: function (target, source) {
				var from;
				var to = toObject(target);
				var symbols;

				for (var s = 1; s < arguments.length; s++) {
					from = Object(arguments[s]);

					for (var key in from) {
						if (hasOwnProperty.call(from, key)) {
							to[key] = from[key];
						}
					}

					if (getOwnPropertySymbols) {
						symbols = getOwnPropertySymbols(from);
						for (var i = 0; i < symbols.length; i++) {
							if (propIsEnumerable.call(from, symbols[i])) {
								to[symbols[i]] = from[symbols[i]];
							}
						}
					}
				}

				return to;
		  };

	function E() {
		// Keep this empty so it's easier to inherit from
		// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}

	E.prototype = {
		on: function (name, callback, ctx) {
			var e = this.e || (this.e = {});

			(e[name] || (e[name] = [])).push({
				fn: callback,
				ctx: ctx,
			});

			return this;
		},

		once: function (name, callback, ctx) {
			var self = this;
			function listener() {
				self.off(name, listener);
				callback.apply(ctx, arguments);
			}
			listener._ = callback;
			return this.on(name, listener, ctx);
		},

		emit: function (name) {
			var data = [].slice.call(arguments, 1);
			var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
			var i = 0;
			var len = evtArr.length;

			for (i; i < len; i++) {
				evtArr[i].fn.apply(evtArr[i].ctx, data);
			}

			return this;
		},

		off: function (name, callback) {
			var e = this.e || (this.e = {});
			var evts = e[name];
			var liveEvents = [];

			if (evts && callback) {
				for (var i = 0, len = evts.length; i < len; i++) {
					if (evts[i].fn !== callback && evts[i].fn._ !== callback)
						liveEvents.push(evts[i]);
				}
			}

			// Remove event from queue to prevent memory leak
			// Suggested by https://github.com/lazd
			// Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

			liveEvents.length ? (e[name] = liveEvents) : delete e[name];

			return this;
		},
	};

	var tinyEmitter = E;

	var lethargy = createCommonjsModule(function (module, exports) {
		// Generated by CoffeeScript 1.9.2
		(function () {
			var root;

			root = exports !== null ? exports : this;

			root.Lethargy = (function () {
				function Lethargy(stability, sensitivity, tolerance, delay) {
					this.stability =
						stability != null ? Math.abs(stability) : 8;
					this.sensitivity =
						sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
					this.tolerance =
						tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
					this.delay = delay != null ? delay : 150;
					this.lastUpDeltas = function () {
						var i, ref, results;
						results = [];
						for (
							i = 1, ref = this.stability * 2;
							1 <= ref ? i <= ref : i >= ref;
							1 <= ref ? i++ : i--
						) {
							results.push(null);
						}
						return results;
					}.call(this);
					this.lastDownDeltas = function () {
						var i, ref, results;
						results = [];
						for (
							i = 1, ref = this.stability * 2;
							1 <= ref ? i <= ref : i >= ref;
							1 <= ref ? i++ : i--
						) {
							results.push(null);
						}
						return results;
					}.call(this);
					this.deltasTimestamp = function () {
						var i, ref, results;
						results = [];
						for (
							i = 1, ref = this.stability * 2;
							1 <= ref ? i <= ref : i >= ref;
							1 <= ref ? i++ : i--
						) {
							results.push(null);
						}
						return results;
					}.call(this);
				}

				Lethargy.prototype.check = function (e) {
					var lastDelta;
					e = e.originalEvent || e;
					if (e.wheelDelta != null) {
						lastDelta = e.wheelDelta;
					} else if (e.deltaY != null) {
						lastDelta = e.deltaY * -40;
					} else if (e.detail != null || e.detail === 0) {
						lastDelta = e.detail * -40;
					}
					this.deltasTimestamp.push(Date.now());
					this.deltasTimestamp.shift();
					if (lastDelta > 0) {
						this.lastUpDeltas.push(lastDelta);
						this.lastUpDeltas.shift();
						return this.isInertia(1);
					} else {
						this.lastDownDeltas.push(lastDelta);
						this.lastDownDeltas.shift();
						return this.isInertia(-1);
					}
				};

				Lethargy.prototype.isInertia = function (direction) {
					var lastDeltas,
						lastDeltasNew,
						lastDeltasOld,
						newAverage,
						newSum,
						oldAverage,
						oldSum;
					lastDeltas =
						direction === -1
							? this.lastDownDeltas
							: this.lastUpDeltas;
					if (lastDeltas[0] === null) {
						return direction;
					}
					if (
						this.deltasTimestamp[this.stability * 2 - 2] +
							this.delay >
							Date.now() &&
						lastDeltas[0] === lastDeltas[this.stability * 2 - 1]
					) {
						return false;
					}
					lastDeltasOld = lastDeltas.slice(0, this.stability);
					lastDeltasNew = lastDeltas.slice(
						this.stability,
						this.stability * 2
					);
					oldSum = lastDeltasOld.reduce(function (t, s) {
						return t + s;
					});
					newSum = lastDeltasNew.reduce(function (t, s) {
						return t + s;
					});
					oldAverage = oldSum / lastDeltasOld.length;
					newAverage = newSum / lastDeltasNew.length;
					if (
						Math.abs(oldAverage) <
							Math.abs(newAverage * this.tolerance) &&
						this.sensitivity < Math.abs(newAverage)
					) {
						return direction;
					} else {
						return false;
					}
				};

				Lethargy.prototype.showLastUpDeltas = function () {
					return this.lastUpDeltas;
				};

				Lethargy.prototype.showLastDownDeltas = function () {
					return this.lastDownDeltas;
				};

				return Lethargy;
			})();
		}).call(commonjsGlobal);
	});

	var support = (function getSupport() {
		return {
			hasWheelEvent: "onwheel" in document,
			hasMouseWheelEvent: "onmousewheel" in document,
			hasTouch:
				"ontouchstart" in window ||
				window.TouchEvent ||
				(window.DocumentTouch && document instanceof DocumentTouch),
			hasTouchWin:
				navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
			hasPointer: !!window.navigator.msPointerEnabled,
			hasKeyDown: "onkeydown" in document,
			isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
		};
	})();

	var toString = Object.prototype.toString,
		hasOwnProperty$1 = Object.prototype.hasOwnProperty;

	var bindallStandalone = function (object) {
		if (!object)
			return console.warn("bindAll requires at least one argument.");

		var functions = Array.prototype.slice.call(arguments, 1);

		if (functions.length === 0) {
			for (var method in object) {
				if (hasOwnProperty$1.call(object, method)) {
					if (
						typeof object[method] == "function" &&
						toString.call(object[method]) == "[object Function]"
					) {
						functions.push(method);
					}
				}
			}
		}

		for (var i = 0; i < functions.length; i++) {
			var f = functions[i];
			object[f] = bind(object[f], object);
		}
	};

	/*
      Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
      bindAll is only needed for events binding so no need to make slow fixes for constructor
      or partial application.
  */
	function bind(func, context) {
		return function () {
			return func.apply(context, arguments);
		};
	}

	var Lethargy = lethargy.Lethargy;

	var EVT_ID = "virtualscroll";

	var src = VirtualScroll;

	var keyCodes = {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		SPACE: 32,
	};

	function VirtualScroll(options) {
		bindallStandalone(
			this,
			"_onWheel",
			"_onMouseWheel",
			"_onTouchStart",
			"_onTouchMove",
			"_onKeyDown"
		);

		this.el = window;
		if (options && options.el) {
			this.el = options.el;
			delete options.el;
		}
		this.options = objectAssign(
			{
				mouseMultiplier: 1,
				touchMultiplier: 2,
				firefoxMultiplier: 15,
				keyStep: 120,
				preventTouch: false,
				unpreventTouchClass: "vs-touchmove-allowed",
				limitInertia: false,
				useKeyboard: true,
				useTouch: true,
			},
			options
		);

		if (this.options.limitInertia) this._lethargy = new Lethargy();

		this._emitter = new tinyEmitter();
		this._event = {
			y: 0,
			x: 0,
			deltaX: 0,
			deltaY: 0,
		};
		this.touchStartX = null;
		this.touchStartY = null;
		this.bodyTouchAction = null;

		if (this.options.passive !== undefined) {
			this.listenerOptions = { passive: this.options.passive };
		}
	}

	VirtualScroll.prototype._notify = function (e) {
		var evt = this._event;
		evt.x += evt.deltaX;
		evt.y += evt.deltaY;

		this._emitter.emit(EVT_ID, {
			x: evt.x,
			y: evt.y,
			deltaX: evt.deltaX,
			deltaY: evt.deltaY,
			originalEvent: e,
		});
	};

	VirtualScroll.prototype._onWheel = function (e) {
		var options = this.options;
		if (this._lethargy && this._lethargy.check(e) === false) return;
		var evt = this._event;

		// In Chrome and in Firefox (at least the new one)
		evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
		evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

		// for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
		// real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
		if (support.isFirefox && e.deltaMode == 1) {
			evt.deltaX *= options.firefoxMultiplier;
			evt.deltaY *= options.firefoxMultiplier;
		}

		evt.deltaX *= options.mouseMultiplier;
		evt.deltaY *= options.mouseMultiplier;

		this._notify(e);
	};

	VirtualScroll.prototype._onMouseWheel = function (e) {
		if (this.options.limitInertia && this._lethargy.check(e) === false)
			return;

		var evt = this._event;

		// In Safari, IE and in Chrome if 'wheel' isn't defined
		evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
		evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;

		this._notify(e);
	};

	VirtualScroll.prototype._onTouchStart = function (e) {
		var t = e.targetTouches ? e.targetTouches[0] : e;
		this.touchStartX = t.pageX;
		this.touchStartY = t.pageY;
	};

	VirtualScroll.prototype._onTouchMove = function (e) {
		var options = this.options;
		if (
			options.preventTouch &&
			!e.target.classList.contains(options.unpreventTouchClass)
		) {
			e.preventDefault();
		}

		var evt = this._event;

		var t = e.targetTouches ? e.targetTouches[0] : e;

		evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
		evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

		this.touchStartX = t.pageX;
		this.touchStartY = t.pageY;

		this._notify(e);
	};

	VirtualScroll.prototype._onKeyDown = function (e) {
		var evt = this._event;
		evt.deltaX = evt.deltaY = 0;
		var windowHeight = window.innerHeight - 40;

		switch (e.keyCode) {
			case keyCodes.LEFT:
			case keyCodes.UP:
				evt.deltaY = this.options.keyStep;
				break;

			case keyCodes.RIGHT:
			case keyCodes.DOWN:
				evt.deltaY = -this.options.keyStep;
				break;
			case e.shiftKey:
				evt.deltaY = windowHeight;
				break;
			case keyCodes.SPACE:
				evt.deltaY = -windowHeight;
				break;
			default:
				return;
		}

		this._notify(e);
	};

	VirtualScroll.prototype._bind = function () {
		if (support.hasWheelEvent)
			this.el.addEventListener(
				"wheel",
				this._onWheel,
				this.listenerOptions
			);
		if (support.hasMouseWheelEvent)
			this.el.addEventListener(
				"mousewheel",
				this._onMouseWheel,
				this.listenerOptions
			);

		if (support.hasTouch && this.options.useTouch) {
			this.el.addEventListener(
				"touchstart",
				this._onTouchStart,
				this.listenerOptions
			);
			this.el.addEventListener(
				"touchmove",
				this._onTouchMove,
				this.listenerOptions
			);
		}

		if (support.hasPointer && support.hasTouchWin) {
			this.bodyTouchAction = document.body.style.msTouchAction;
			document.body.style.msTouchAction = "none";
			this.el.addEventListener("MSPointerDown", this._onTouchStart, true);
			this.el.addEventListener("MSPointerMove", this._onTouchMove, true);
		}

		if (support.hasKeyDown && this.options.useKeyboard)
			document.addEventListener("keydown", this._onKeyDown);
	};

	VirtualScroll.prototype._unbind = function () {
		if (support.hasWheelEvent)
			this.el.removeEventListener("wheel", this._onWheel);
		if (support.hasMouseWheelEvent)
			this.el.removeEventListener("mousewheel", this._onMouseWheel);

		if (support.hasTouch) {
			this.el.removeEventListener("touchstart", this._onTouchStart);
			this.el.removeEventListener("touchmove", this._onTouchMove);
		}

		if (support.hasPointer && support.hasTouchWin) {
			document.body.style.msTouchAction = this.bodyTouchAction;
			this.el.removeEventListener(
				"MSPointerDown",
				this._onTouchStart,
				true
			);
			this.el.removeEventListener(
				"MSPointerMove",
				this._onTouchMove,
				true
			);
		}

		if (support.hasKeyDown && this.options.useKeyboard)
			document.removeEventListener("keydown", this._onKeyDown);
	};

	VirtualScroll.prototype.on = function (cb, ctx) {
		this._emitter.on(EVT_ID, cb, ctx);

		var events = this._emitter.e;
		if (events && events[EVT_ID] && events[EVT_ID].length === 1)
			this._bind();
	};

	VirtualScroll.prototype.off = function (cb, ctx) {
		this._emitter.off(EVT_ID, cb, ctx);

		var events = this._emitter.e;
		if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
	};

	VirtualScroll.prototype.reset = function () {
		var evt = this._event;
		evt.x = 0;
		evt.y = 0;
	};

	VirtualScroll.prototype.destroy = function () {
		this._emitter.off();
		this._unbind();
	};

	function lerp(start, end, amt) {
		return (1 - amt) * start + amt * end;
	}

	function getTranslate(el) {
		var translate = {};
		if (!window.getComputedStyle) return;
		var style = getComputedStyle(el);
		var transform =
			style.transform || style.webkitTransform || style.mozTransform;
		var mat = transform.match(/^matrix3d\((.+)\)$/);

		if (mat) {
			translate.x = mat ? parseFloat(mat[1].split(", ")[12]) : 0;
			translate.y = mat ? parseFloat(mat[1].split(", ")[13]) : 0;
		} else {
			mat = transform.match(/^matrix\((.+)\)$/);
			translate.x = mat ? parseFloat(mat[1].split(", ")[4]) : 0;
			translate.y = mat ? parseFloat(mat[1].split(", ")[5]) : 0;
		}

		return translate;
	}

	/**
	 * Returns an array containing all the parent nodes of the given node
	 * @param  {object} node
	 * @return {array} parent nodes
	 */
	function getParents(elem) {
		// Set up a parent array
		var parents = []; // Push each parent element to the array

		for (; elem && elem !== document; elem = elem.parentNode) {
			parents.push(elem);
		} // Return our parent array

		return parents;
	} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/

	/**
	 * https://github.com/gre/bezier-easing
	 * BezierEasing - use bezier curve for transition easing function
	 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
	 */

	// These values are established by empiricism with tests (tradeoff: performance VS precision)
	var NEWTON_ITERATIONS = 4;
	var NEWTON_MIN_SLOPE = 0.001;
	var SUBDIVISION_PRECISION = 0.0000001;
	var SUBDIVISION_MAX_ITERATIONS = 10;

	var kSplineTableSize = 11;
	var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

	var float32ArraySupported = typeof Float32Array === "function";

	function A(aA1, aA2) {
		return 1.0 - 3.0 * aA2 + 3.0 * aA1;
	}
	function B(aA1, aA2) {
		return 3.0 * aA2 - 6.0 * aA1;
	}
	function C(aA1) {
		return 3.0 * aA1;
	}

	// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
	function calcBezier(aT, aA1, aA2) {
		return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
	}

	// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
	function getSlope(aT, aA1, aA2) {
		return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
	}

	function binarySubdivide(aX, aA, aB, mX1, mX2) {
		var currentX,
			currentT,
			i = 0;
		do {
			currentT = aA + (aB - aA) / 2.0;
			currentX = calcBezier(currentT, mX1, mX2) - aX;
			if (currentX > 0.0) {
				aB = currentT;
			} else {
				aA = currentT;
			}
		} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
		return currentT;
	}

	function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
		for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
			var currentSlope = getSlope(aGuessT, mX1, mX2);
			if (currentSlope === 0.0) {
				return aGuessT;
			}
			var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
			aGuessT -= currentX / currentSlope;
		}
		return aGuessT;
	}

	function LinearEasing(x) {
		return x;
	}

	var src$1 = function bezier(mX1, mY1, mX2, mY2) {
		if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
			throw new Error("bezier x values must be in [0, 1] range");
		}

		if (mX1 === mY1 && mX2 === mY2) {
			return LinearEasing;
		}

		// Precompute samples table
		var sampleValues = float32ArraySupported
			? new Float32Array(kSplineTableSize)
			: new Array(kSplineTableSize);
		for (var i = 0; i < kSplineTableSize; ++i) {
			sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
		}

		function getTForX(aX) {
			var intervalStart = 0.0;
			var currentSample = 1;
			var lastSample = kSplineTableSize - 1;

			for (
				;
				currentSample !== lastSample &&
				sampleValues[currentSample] <= aX;
				++currentSample
			) {
				intervalStart += kSampleStepSize;
			}
			--currentSample;

			// Interpolate to provide an initial guess for t
			var dist =
				(aX - sampleValues[currentSample]) /
				(sampleValues[currentSample + 1] - sampleValues[currentSample]);
			var guessForT = intervalStart + dist * kSampleStepSize;

			var initialSlope = getSlope(guessForT, mX1, mX2);
			if (initialSlope >= NEWTON_MIN_SLOPE) {
				return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
			} else if (initialSlope === 0.0) {
				return guessForT;
			} else {
				return binarySubdivide(
					aX,
					intervalStart,
					intervalStart + kSampleStepSize,
					mX1,
					mX2
				);
			}
		}

		return function BezierEasing(x) {
			// Because JavaScript number are imprecise, we should guarantee the extremes are right.
			if (x === 0) {
				return 0;
			}
			if (x === 1) {
				return 1;
			}
			return calcBezier(getTForX(x), mY1, mY2);
		};
	};

	var keyCodes$1 = {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		SPACE: 32,
		TAB: 9,
		PAGEUP: 33,
		PAGEDOWN: 34,
		HOME: 36,
		END: 35,
	};

	var _default$2 = /*#__PURE__*/ (function (_Core) {
		_inherits(_default, _Core);

		var _super = _createSuper(_default);

		function _default() {
			var _this;

			var options =
				arguments.length > 0 && arguments[0] !== undefined
					? arguments[0]
					: {};

			_classCallCheck(this, _default);

			if (history.scrollRestoration) {
				history.scrollRestoration = "manual";
			}

			window.scrollTo(0, 0);
			_this = _super.call(this, options);
			if (_this.inertia) _this.lerp = _this.inertia * 0.1;
			_this.isScrolling = false;
			_this.isDraggingScrollbar = false;
			_this.isTicking = false;
			_this.hasScrollTicking = false;
			_this.parallaxElements = {};
			_this.stop = false;
			_this.scrollbarContainer = options.scrollbarContainer;
			_this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
			window.addEventListener("keydown", _this.checkKey, false);
			return _this;
		}

		_createClass(_default, [
			{
				key: "init",
				value: function init() {
					var _this2 = this;

					this.html.classList.add(this.smoothClass);
					this.html.setAttribute(
						"data-".concat(this.name, "-direction"),
						this.direction
					);
					this.instance = _objectSpread2(
						{
							delta: {
								x: this.initPosition.x,
								y: this.initPosition.y,
							},
							scroll: {
								x: this.initPosition.x,
								y: this.initPosition.y,
							},
						},
						this.instance
					);
					this.vs = new src({
						el: this.scrollFromAnywhere ? document : this.el,
						mouseMultiplier:
							navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
						firefoxMultiplier: this.firefoxMultiplier,
						touchMultiplier: this.touchMultiplier,
						useKeyboard: false,
						passive: true,
					});
					this.vs.on(function (e) {
						if (_this2.stop) {
							return;
						}

						if (!_this2.isDraggingScrollbar) {
							requestAnimationFrame(function () {
								_this2.updateDelta(e);

								if (!_this2.isScrolling)
									_this2.startScrolling();
							});
						}
					});
					this.setScrollLimit();
					this.initScrollBar();
					this.addSections();
					this.addElements();
					this.checkScroll(true);
					this.transformElements(true, true);

					_get(
						_getPrototypeOf(_default.prototype),
						"init",
						this
					).call(this);
				},
			},
			{
				key: "setScrollLimit",
				value: function setScrollLimit() {
					this.instance.limit.y =
						this.el.offsetHeight - this.windowHeight;

					if (this.direction === "horizontal") {
						var totalWidth = 0;
						var nodes = this.el.children;

						for (var i = 0; i < nodes.length; i++) {
							totalWidth += nodes[i].offsetWidth;
						}

						this.instance.limit.x = totalWidth - this.windowWidth;
					}
				},
			},
			{
				key: "startScrolling",
				value: function startScrolling() {
					this.startScrollTs = Date.now(); // Record timestamp

					this.isScrolling = true;
					this.checkScroll();
					this.html.classList.add(this.scrollingClass);
				},
			},
			{
				key: "stopScrolling",
				value: function stopScrolling() {
					cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping
					//Pevent scrollbar glitch/locking

					this.startScrollTs = undefined;

					if (this.scrollToRaf) {
						cancelAnimationFrame(this.scrollToRaf);
						this.scrollToRaf = null;
					}

					this.isScrolling = false;
					this.instance.scroll.y = Math.round(this.instance.scroll.y);
					this.html.classList.remove(this.scrollingClass);
				},
			},
			{
				key: "checkKey",
				value: function checkKey(e) {
					var _this3 = this;

					if (this.stop) {
						// If we are stopped, we don't want any scroll to occur because of a keypress
						// Prevent tab to scroll to activeElement
						if (e.keyCode == keyCodes$1.TAB) {
							requestAnimationFrame(function () {
								// Make sure native scroll is always at top of page
								_this3.html.scrollTop = 0;
								document.body.scrollTop = 0;
								_this3.html.scrollLeft = 0;
								document.body.scrollLeft = 0;
							});
						}

						return;
					}

					switch (e.keyCode) {
						case keyCodes$1.TAB:
							// Do not remove the RAF
							// It allows to override the browser's native scrollTo, which is essential
							requestAnimationFrame(function () {
								// Make sure native scroll is always at top of page
								_this3.html.scrollTop = 0;
								document.body.scrollTop = 0;
								_this3.html.scrollLeft = 0;
								document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen

								_this3.scrollTo(document.activeElement, {
									offset: -window.innerHeight / 2,
								});
							});
							break;

						case keyCodes$1.UP:
							if (this.isActiveElementScrollSensitive()) {
								this.instance.delta[this.directionAxis] -= 240;
							}

							break;

						case keyCodes$1.DOWN:
							if (this.isActiveElementScrollSensitive()) {
								this.instance.delta[this.directionAxis] += 240;
							}

							break;

						case keyCodes$1.PAGEUP:
							this.instance.delta[this.directionAxis] -=
								window.innerHeight;
							break;

						case keyCodes$1.PAGEDOWN:
							this.instance.delta[this.directionAxis] +=
								window.innerHeight;
							break;

						case keyCodes$1.HOME:
							this.instance.delta[this.directionAxis] -=
								this.instance.limit[this.directionAxis];
							break;

						case keyCodes$1.END:
							this.instance.delta[this.directionAxis] +=
								this.instance.limit[this.directionAxis];
							break;

						case keyCodes$1.SPACE:
							if (this.isActiveElementScrollSensitive()) {
								if (e.shiftKey) {
									this.instance.delta[this.directionAxis] -=
										window.innerHeight;
								} else {
									this.instance.delta[this.directionAxis] +=
										window.innerHeight;
								}
							}

							break;

						default:
							return;
					}

					if (this.instance.delta[this.directionAxis] < 0)
						this.instance.delta[this.directionAxis] = 0;
					if (
						this.instance.delta[this.directionAxis] >
						this.instance.limit[this.directionAxis]
					)
						this.instance.delta[this.directionAxis] =
							this.instance.limit[this.directionAxis];
					this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

					this.isScrolling = true;
					this.checkScroll();
					this.html.classList.add(this.scrollingClass);
				},
			},
			{
				key: "isActiveElementScrollSensitive",
				value: function isActiveElementScrollSensitive() {
					return (
						!(document.activeElement instanceof HTMLInputElement) &&
						!(
							document.activeElement instanceof
							HTMLTextAreaElement
						) &&
						!(
							document.activeElement instanceof HTMLButtonElement
						) &&
						!(document.activeElement instanceof HTMLSelectElement)
					);
				},
			},
			{
				key: "checkScroll",
				value: function checkScroll() {
					var _this4 = this;

					var forced =
						arguments.length > 0 && arguments[0] !== undefined
							? arguments[0]
							: false;

					if (
						forced ||
						this.isScrolling ||
						this.isDraggingScrollbar
					) {
						if (!this.hasScrollTicking) {
							this.checkScrollRaf = requestAnimationFrame(
								function () {
									return _this4.checkScroll();
								}
							);
							this.hasScrollTicking = true;
						}

						this.updateScroll();
						var distance = Math.abs(
							this.instance.delta[this.directionAxis] -
								this.instance.scroll[this.directionAxis]
						);
						var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms

						if (
							!this.animatingScroll &&
							timeSinceStart > 100 &&
							((distance < 0.5 &&
								this.instance.delta[this.directionAxis] != 0) ||
								(distance < 0.5 &&
									this.instance.delta[this.directionAxis] ==
										0))
						) {
							this.stopScrolling();
						}

						Object.entries(this.sections).forEach(function (_ref) {
							var _ref2 = _slicedToArray(_ref, 2),
								i = _ref2[0],
								section = _ref2[1];

							if (
								section.persistent ||
								(_this4.instance.scroll[_this4.directionAxis] >
									section.offset[_this4.directionAxis] &&
									_this4.instance.scroll[
										_this4.directionAxis
									] < section.limit[_this4.directionAxis])
							) {
								if (_this4.direction === "horizontal") {
									_this4.transform(
										section.el,
										-_this4.instance.scroll[
											_this4.directionAxis
										],
										0
									);
								} else {
									_this4.transform(
										section.el,
										0,
										-_this4.instance.scroll[
											_this4.directionAxis
										]
									);
								}

								if (!section.inView) {
									section.inView = true;
									section.el.style.opacity = 1;
									section.el.style.pointerEvents = "all";
									section.el.setAttribute(
										"data-".concat(
											_this4.name,
											"-section-inview"
										),
										""
									);
								}
							} else {
								if (section.inView || forced) {
									section.inView = false;
									section.el.style.opacity = 0;
									section.el.style.pointerEvents = "none";
									section.el.removeAttribute(
										"data-".concat(
											_this4.name,
											"-section-inview"
										)
									);
								}

								_this4.transform(section.el, 0, 0);
							}
						});

						if (this.getDirection) {
							this.addDirection();
						}

						if (this.getSpeed) {
							this.addSpeed();
							this.speedTs = Date.now();
						}

						this.detectElements();
						this.transformElements();

						if (this.hasScrollbar) {
							var scrollBarTranslation =
								(this.instance.scroll[this.directionAxis] /
									this.instance.limit[this.directionAxis]) *
								this.scrollBarLimit[this.directionAxis];

							if (this.direction === "horizontal") {
								this.transform(
									this.scrollbarThumb,
									scrollBarTranslation,
									0
								);
							} else {
								this.transform(
									this.scrollbarThumb,
									0,
									scrollBarTranslation
								);
							}
						}

						_get(
							_getPrototypeOf(_default.prototype),
							"checkScroll",
							this
						).call(this);

						this.hasScrollTicking = false;
					}
				},
			},
			{
				key: "resize",
				value: function resize() {
					this.windowHeight = window.innerHeight;
					this.windowWidth = window.innerWidth;
					this.checkContext();
					this.windowMiddle = {
						x: this.windowWidth / 2,
						y: this.windowHeight / 2,
					};
					this.update();
				},
			},
			{
				key: "updateDelta",
				value: function updateDelta(e) {
					var delta;
					var gestureDirection =
						this[this.context] &&
						this[this.context].gestureDirection
							? this[this.context].gestureDirection
							: this.gestureDirection;

					if (gestureDirection === "both") {
						delta = e.deltaX + e.deltaY;
					} else if (gestureDirection === "vertical") {
						delta = e.deltaY;
					} else if (gestureDirection === "horizontal") {
						delta = e.deltaX;
					} else {
						delta = e.deltaY;
					}

					this.instance.delta[this.directionAxis] -=
						delta * this.multiplier;
					if (this.instance.delta[this.directionAxis] < 0)
						this.instance.delta[this.directionAxis] = 0;
					if (
						this.instance.delta[this.directionAxis] >
						this.instance.limit[this.directionAxis]
					)
						this.instance.delta[this.directionAxis] =
							this.instance.limit[this.directionAxis];
				},
			},
			{
				key: "updateScroll",
				value: function updateScroll(e) {
					if (this.isScrolling || this.isDraggingScrollbar) {
						this.instance.scroll[this.directionAxis] = lerp(
							this.instance.scroll[this.directionAxis],
							this.instance.delta[this.directionAxis],
							this.lerp
						);
					} else {
						if (
							this.instance.scroll[this.directionAxis] >
							this.instance.limit[this.directionAxis]
						) {
							this.setScroll(
								this.instance.scroll[this.directionAxis],
								this.instance.limit[this.directionAxis]
							);
						} else if (this.instance.scroll.y < 0) {
							this.setScroll(
								this.instance.scroll[this.directionAxis],
								0
							);
						} else {
							this.setScroll(
								this.instance.scroll[this.directionAxis],
								this.instance.delta[this.directionAxis]
							);
						}
					}
				},
			},
			{
				key: "addDirection",
				value: function addDirection() {
					if (this.instance.delta.y > this.instance.scroll.y) {
						if (this.instance.direction !== "down") {
							this.instance.direction = "down";
						}
					} else if (this.instance.delta.y < this.instance.scroll.y) {
						if (this.instance.direction !== "up") {
							this.instance.direction = "up";
						}
					}

					if (this.instance.delta.x > this.instance.scroll.x) {
						if (this.instance.direction !== "right") {
							this.instance.direction = "right";
						}
					} else if (this.instance.delta.x < this.instance.scroll.x) {
						if (this.instance.direction !== "left") {
							this.instance.direction = "left";
						}
					}
				},
			},
			{
				key: "addSpeed",
				value: function addSpeed() {
					if (
						this.instance.delta[this.directionAxis] !=
						this.instance.scroll[this.directionAxis]
					) {
						this.instance.speed =
							(this.instance.delta[this.directionAxis] -
								this.instance.scroll[this.directionAxis]) /
							Math.max(1, Date.now() - this.speedTs);
					} else {
						this.instance.speed = 0;
					}
				},
			},
			{
				key: "initScrollBar",
				value: function initScrollBar() {
					this.scrollbar = document.createElement("span");
					this.scrollbarThumb = document.createElement("span");
					this.scrollbar.classList.add(
						"".concat(this.scrollbarClass)
					);
					this.scrollbarThumb.classList.add(
						"".concat(this.scrollbarClass, "_thumb")
					);
					this.scrollbar.append(this.scrollbarThumb);

					if (this.scrollbarContainer) {
						this.scrollbarContainer.append(this.scrollbar);
					} else {
						document.body.append(this.scrollbar);
					} // Scrollbar Events

					this.getScrollBar = this.getScrollBar.bind(this);
					this.releaseScrollBar = this.releaseScrollBar.bind(this);
					this.moveScrollBar = this.moveScrollBar.bind(this);
					this.scrollbarThumb.addEventListener(
						"mousedown",
						this.getScrollBar
					);
					window.addEventListener("mouseup", this.releaseScrollBar);
					window.addEventListener("mousemove", this.moveScrollBar); // Set scrollbar values

					this.hasScrollbar = false;

					if (this.direction == "horizontal") {
						if (
							this.instance.limit.x + this.windowWidth <=
							this.windowWidth
						) {
							return;
						}
					} else {
						if (
							this.instance.limit.y + this.windowHeight <=
							this.windowHeight
						) {
							return;
						}
					}

					this.hasScrollbar = true;
					this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
					this.scrollbarHeight = this.scrollbarBCR.height;
					this.scrollbarWidth = this.scrollbarBCR.width;

					if (this.direction === "horizontal") {
						this.scrollbarThumb.style.width = "".concat(
							(this.scrollbarWidth * this.scrollbarWidth) /
								(this.instance.limit.x + this.scrollbarWidth),
							"px"
						);
					} else {
						this.scrollbarThumb.style.height = "".concat(
							(this.scrollbarHeight * this.scrollbarHeight) /
								(this.instance.limit.y + this.scrollbarHeight),
							"px"
						);
					}

					this.scrollbarThumbBCR =
						this.scrollbarThumb.getBoundingClientRect();
					this.scrollBarLimit = {
						x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
						y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
					};
				},
			},
			{
				key: "reinitScrollBar",
				value: function reinitScrollBar() {
					this.hasScrollbar = false;

					if (this.direction == "horizontal") {
						if (
							this.instance.limit.x + this.windowWidth <=
							this.windowWidth
						) {
							return;
						}
					} else {
						if (
							this.instance.limit.y + this.windowHeight <=
							this.windowHeight
						) {
							return;
						}
					}

					this.hasScrollbar = true;
					this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
					this.scrollbarHeight = this.scrollbarBCR.height;
					this.scrollbarWidth = this.scrollbarBCR.width;

					if (this.direction === "horizontal") {
						this.scrollbarThumb.style.width = "".concat(
							(this.scrollbarWidth * this.scrollbarWidth) /
								(this.instance.limit.x + this.scrollbarWidth),
							"px"
						);
					} else {
						this.scrollbarThumb.style.height = "".concat(
							(this.scrollbarHeight * this.scrollbarHeight) /
								(this.instance.limit.y + this.scrollbarHeight),
							"px"
						);
					}

					this.scrollbarThumbBCR =
						this.scrollbarThumb.getBoundingClientRect();
					this.scrollBarLimit = {
						x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
						y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
					};
				},
			},
			{
				key: "destroyScrollBar",
				value: function destroyScrollBar() {
					this.scrollbarThumb.removeEventListener(
						"mousedown",
						this.getScrollBar
					);
					window.removeEventListener(
						"mouseup",
						this.releaseScrollBar
					);
					window.removeEventListener("mousemove", this.moveScrollBar);
					this.scrollbar.remove();
				},
			},
			{
				key: "getScrollBar",
				value: function getScrollBar(e) {
					this.isDraggingScrollbar = true;
					this.checkScroll();
					this.html.classList.remove(this.scrollingClass);
					this.html.classList.add(this.draggingClass);
				},
			},
			{
				key: "releaseScrollBar",
				value: function releaseScrollBar(e) {
					this.isDraggingScrollbar = false;

					if (this.isScrolling) {
						this.html.classList.add(this.scrollingClass);
					}

					this.html.classList.remove(this.draggingClass);
				},
			},
			{
				key: "moveScrollBar",
				value: function moveScrollBar(e) {
					var _this5 = this;

					if (this.isDraggingScrollbar) {
						requestAnimationFrame(function () {
							var x =
								((((e.clientX - _this5.scrollbarBCR.left) *
									100) /
									_this5.scrollbarWidth) *
									_this5.instance.limit.x) /
								100;
							var y =
								((((e.clientY - _this5.scrollbarBCR.top) *
									100) /
									_this5.scrollbarHeight) *
									_this5.instance.limit.y) /
								100;

							if (y > 0 && y < _this5.instance.limit.y) {
								_this5.instance.delta.y = y;
							}

							if (x > 0 && x < _this5.instance.limit.x) {
								_this5.instance.delta.x = x;
							}
						});
					}
				},
			},
			{
				key: "addElements",
				value: function addElements() {
					var _this6 = this;

					this.els = {};
					this.parallaxElements = {}; // this.sections.forEach((section, y) => {

					var els = this.el.querySelectorAll(
						"[data-".concat(this.name, "]")
					);
					els.forEach(function (el, index) {
						// Try and find the target's parent section
						var targetParents = getParents(el);
						var section = Object.entries(_this6.sections)
							.map(function (_ref3) {
								var _ref4 = _slicedToArray(_ref3, 2),
									key = _ref4[0],
									section = _ref4[1];

								return section;
							})
							.find(function (section) {
								return targetParents.includes(section.el);
							});
						var cl =
							el.dataset[_this6.name + "Class"] ||
							_this6["class"];
						var id =
							typeof el.dataset[_this6.name + "Id"] === "string"
								? el.dataset[_this6.name + "Id"]
								: "el" + index;
						var top;
						var left;
						var repeat = el.dataset[_this6.name + "Repeat"];
						var call = el.dataset[_this6.name + "Call"];
						var position = el.dataset[_this6.name + "Position"];
						var delay = el.dataset[_this6.name + "Delay"];
						var direction = el.dataset[_this6.name + "Direction"];
						var sticky =
							typeof el.dataset[_this6.name + "Sticky"] ===
							"string";
						var speed = el.dataset[_this6.name + "Speed"]
							? parseFloat(el.dataset[_this6.name + "Speed"]) / 10
							: false;
						var offset =
							typeof el.dataset[_this6.name + "Offset"] ===
							"string"
								? el.dataset[_this6.name + "Offset"].split(",")
								: _this6.offset;
						var target = el.dataset[_this6.name + "Target"];
						var targetEl;

						if (target !== undefined) {
							targetEl = document.querySelector(
								"".concat(target)
							);
						} else {
							targetEl = el;
						}

						var targetElBCR = targetEl.getBoundingClientRect();

						if (section === null) {
							top =
								targetElBCR.top +
								_this6.instance.scroll.y -
								getTranslate(targetEl).y;
							left =
								targetElBCR.left +
								_this6.instance.scroll.x -
								getTranslate(targetEl).x;
						} else {
							if (!section.inView) {
								top =
									targetElBCR.top -
									getTranslate(section.el).y -
									getTranslate(targetEl).y;
								left =
									targetElBCR.left -
									getTranslate(section.el).x -
									getTranslate(targetEl).x;
							} else {
								top =
									targetElBCR.top +
									_this6.instance.scroll.y -
									getTranslate(targetEl).y;
								left =
									targetElBCR.left +
									_this6.instance.scroll.x -
									getTranslate(targetEl).x;
							}
						}

						var bottom = top + targetEl.offsetHeight;
						var right = left + targetEl.offsetWidth;
						var middle = {
							x: (right - left) / 2 + left,
							y: (bottom - top) / 2 + top,
						};

						if (sticky) {
							var elBCR = el.getBoundingClientRect();
							var elTop = elBCR.top;
							var elLeft = elBCR.left;
							var elDistance = {
								x: elLeft - left,
								y: elTop - top,
							};
							top += window.innerHeight;
							left += window.innerWidth;
							bottom =
								elTop +
								targetEl.offsetHeight -
								el.offsetHeight -
								elDistance[_this6.directionAxis];
							right =
								elLeft +
								targetEl.offsetWidth -
								el.offsetWidth -
								elDistance[_this6.directionAxis];
							middle = {
								x: (right - left) / 2 + left,
								y: (bottom - top) / 2 + top,
							};
						}

						if (repeat == "false") {
							repeat = false;
						} else if (repeat != undefined) {
							repeat = true;
						} else {
							repeat = _this6.repeat;
						}

						var relativeOffset = [0, 0];

						if (offset) {
							if (_this6.direction === "horizontal") {
								for (var i = 0; i < offset.length; i++) {
									if (typeof offset[i] == "string") {
										if (offset[i].includes("%")) {
											relativeOffset[i] = parseInt(
												(offset[i].replace("%", "") *
													_this6.windowWidth) /
													100
											);
										} else {
											relativeOffset[i] = parseInt(
												offset[i]
											);
										}
									} else {
										relativeOffset[i] = offset[i];
									}
								}

								left = left + relativeOffset[0];
								right = right - relativeOffset[1];
							} else {
								for (var i = 0; i < offset.length; i++) {
									if (typeof offset[i] == "string") {
										if (offset[i].includes("%")) {
											relativeOffset[i] = parseInt(
												(offset[i].replace("%", "") *
													_this6.windowHeight) /
													100
											);
										} else {
											relativeOffset[i] = parseInt(
												offset[i]
											);
										}
									} else {
										relativeOffset[i] = offset[i];
									}
								}

								top = top + relativeOffset[0];
								bottom = bottom - relativeOffset[1];
							}
						}

						var mappedEl = {
							el: el,
							id: id,
							class: cl,
							section: section,
							top: top,
							middle: middle,
							bottom: bottom,
							left: left,
							right: right,
							offset: offset,
							progress: 0,
							repeat: repeat,
							inView: false,
							call: call,
							speed: speed,
							delay: delay,
							position: position,
							target: targetEl,
							direction: direction,
							sticky: sticky,
						};
						_this6.els[id] = mappedEl;

						if (el.classList.contains(cl)) {
							_this6.setInView(_this6.els[id], id);
						}

						if (speed !== false || sticky) {
							_this6.parallaxElements[id] = mappedEl;
						}
					}); // });
				},
			},
			{
				key: "addSections",
				value: function addSections() {
					var _this7 = this;

					this.sections = {};
					var sections = this.el.querySelectorAll(
						"[data-".concat(this.name, "-section]")
					);

					if (sections.length === 0) {
						sections = [this.el];
					}

					sections.forEach(function (section, index) {
						var id =
							typeof section.dataset[_this7.name + "Id"] ===
							"string"
								? section.dataset[_this7.name + "Id"]
								: "section" + index;
						var sectionBCR = section.getBoundingClientRect();
						var offset = {
							x:
								sectionBCR.left -
								window.innerWidth * 1.5 -
								getTranslate(section).x,
							y:
								sectionBCR.top -
								window.innerHeight * 1.5 -
								getTranslate(section).y,
						};
						var limit = {
							x:
								offset.x +
								sectionBCR.width +
								window.innerWidth * 2,
							y:
								offset.y +
								sectionBCR.height +
								window.innerHeight * 2,
						};
						var persistent =
							typeof section.dataset[
								_this7.name + "Persistent"
							] === "string";
						section.setAttribute("data-scroll-section-id", id);
						var mappedSection = {
							el: section,
							offset: offset,
							limit: limit,
							inView: false,
							persistent: persistent,
							id: id,
						};
						_this7.sections[id] = mappedSection;
					});
				},
			},
			{
				key: "transform",
				value: function transform(element, x, y, delay) {
					var transform;

					if (!delay) {
						transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
							.concat(x, ",")
							.concat(y, ",0,1)");
					} else {
						var start = getTranslate(element);
						var lerpX = lerp(start.x, x, delay);
						var lerpY = lerp(start.y, y, delay);
						transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
							.concat(lerpX, ",")
							.concat(lerpY, ",0,1)");
					}

					element.style.webkitTransform = transform;
					element.style.msTransform = transform;
					element.style.transform = transform;
				},
			},
			{
				key: "transformElements",
				value: function transformElements(isForced) {
					var _this8 = this;

					var setAllElements =
						arguments.length > 1 && arguments[1] !== undefined
							? arguments[1]
							: false;
					var scrollRight = this.instance.scroll.x + this.windowWidth;
					var scrollBottom =
						this.instance.scroll.y + this.windowHeight;
					var scrollMiddle = {
						x: this.instance.scroll.x + this.windowMiddle.x,
						y: this.instance.scroll.y + this.windowMiddle.y,
					};
					Object.entries(this.parallaxElements).forEach(function (
						_ref5
					) {
						var _ref6 = _slicedToArray(_ref5, 2),
							i = _ref6[0],
							current = _ref6[1];

						var transformDistance = false;

						if (isForced) {
							transformDistance = 0;
						}

						if (current.inView || setAllElements) {
							switch (current.position) {
								case "top":
									transformDistance =
										_this8.instance.scroll[
											_this8.directionAxis
										] * -current.speed;
									break;

								case "elementTop":
									transformDistance =
										(scrollBottom - current.top) *
										-current.speed;
									break;

								case "bottom":
									transformDistance =
										(_this8.instance.limit[
											_this8.directionAxis
										] -
											scrollBottom +
											_this8.windowHeight) *
										current.speed;
									break;

								case "left":
									transformDistance =
										_this8.instance.scroll[
											_this8.directionAxis
										] * -current.speed;
									break;

								case "elementLeft":
									transformDistance =
										(scrollRight - current.left) *
										-current.speed;
									break;

								case "right":
									transformDistance =
										(_this8.instance.limit[
											_this8.directionAxis
										] -
											scrollRight +
											_this8.windowHeight) *
										current.speed;
									break;

								default:
									transformDistance =
										(scrollMiddle[_this8.directionAxis] -
											current.middle[
												_this8.directionAxis
											]) *
										-current.speed;
									break;
							}
						}

						if (current.sticky) {
							if (current.inView) {
								if (_this8.direction === "horizontal") {
									transformDistance =
										_this8.instance.scroll.x -
										current.left +
										window.innerWidth;
								} else {
									transformDistance =
										_this8.instance.scroll.y -
										current.top +
										window.innerHeight;
								}
							} else {
								if (_this8.direction === "horizontal") {
									if (
										_this8.instance.scroll.x <
											current.left - window.innerWidth &&
										_this8.instance.scroll.x <
											current.left - window.innerWidth / 2
									) {
										transformDistance = 0;
									} else if (
										_this8.instance.scroll.x >
											current.right &&
										_this8.instance.scroll.x >
											current.right + 100
									) {
										transformDistance =
											current.right -
											current.left +
											window.innerWidth;
									} else {
										transformDistance = false;
									}
								} else {
									if (
										_this8.instance.scroll.y <
											current.top - window.innerHeight &&
										_this8.instance.scroll.y <
											current.top - window.innerHeight / 2
									) {
										transformDistance = 0;
									} else if (
										_this8.instance.scroll.y >
											current.bottom &&
										_this8.instance.scroll.y >
											current.bottom + 100
									) {
										transformDistance =
											current.bottom -
											current.top +
											window.innerHeight;
									} else {
										transformDistance = false;
									}
								}
							}
						}

						if (transformDistance !== false) {
							if (
								current.direction === "horizontal" ||
								(_this8.direction === "horizontal" &&
									current.direction !== "vertical")
							) {
								_this8.transform(
									current.el,
									transformDistance,
									0,
									isForced ? false : current.delay
								);
							} else {
								_this8.transform(
									current.el,
									0,
									transformDistance,
									isForced ? false : current.delay
								);
							}
						}
					});
				},
				/**
				 * Scroll to a desired target.
				 *
				 * @param  Available options :
				 *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
				 *          options {object} - Options object for additionnal settings.
				 * @return {void}
				 */
			},
			{
				key: "scrollTo",
				value: function scrollTo(target) {
					var _this9 = this;

					var options =
						arguments.length > 1 && arguments[1] !== undefined
							? arguments[1]
							: {};
					// Parse options
					var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

					var duration = !isNaN(parseInt(options.duration))
						? parseInt(options.duration)
						: 1000; // Duration of the scroll animation in milliseconds

					var easing = options.easing || [0.25, 0.0, 0.35, 1.0]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/

					var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true

					var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

					easing = src$1.apply(void 0, _toConsumableArray(easing));

					if (typeof target === "string") {
						// Selector or boundaries
						if (target === "top") {
							target = 0;
						} else if (target === "bottom") {
							target = this.instance.limit.y;
						} else if (target === "left") {
							target = 0;
						} else if (target === "right") {
							target = this.instance.limit.x;
						} else {
							target = document.querySelector(target); // If the query fails, abort

							if (!target) {
								return;
							}
						}
					} else if (typeof target === "number") {
						// Absolute coordinate
						target = parseInt(target);
					} else if (target && target.tagName);
					else {
						console.warn("`target` parameter is not valid");
						return;
					} // We have a target that is not a coordinate yet, get it

					if (typeof target !== "number") {
						// Verify the given target belongs to this scroll scope
						var targetInScope = getParents(target).includes(
							this.el
						);

						if (!targetInScope) {
							// If the target isn't inside our main element, abort any action
							return;
						} // Get target offset from top

						var targetBCR = target.getBoundingClientRect();
						var offsetTop = targetBCR.top;
						var offsetLeft = targetBCR.left; // Try and find the target's parent section

						var targetParents = getParents(target);
						var parentSection = targetParents.find(function (
							candidate
						) {
							return Object.entries(_this9.sections) // Get sections associative array as a regular array
								.map(function (_ref7) {
									var _ref8 = _slicedToArray(_ref7, 2),
										key = _ref8[0],
										section = _ref8[1];

									return section;
								}) // map to section only (we dont need the key here)
								.find(function (section) {
									return section.el == candidate;
								}); // finally find the section that matches the candidate
						});
						var parentSectionOffset = 0;

						if (parentSection) {
							parentSectionOffset =
								getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
						} else {
							// if no parent section is found we need to use instance scroll directly
							parentSectionOffset =
								-this.instance.scroll[this.directionAxis];
						} // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)

						if (this.direction === "horizontal") {
							offset = offsetLeft + offset - parentSectionOffset;
						} else {
							offset = offsetTop + offset - parentSectionOffset;
						}
					} else {
						offset = target + offset;
					} // Actual scrollto
					// ==========================================================================
					// Setup

					var scrollStart = parseFloat(
						this.instance.delta[this.directionAxis]
					);
					var scrollTarget = Math.max(
						0,
						Math.min(
							offset,
							this.instance.limit[this.directionAxis]
						)
					); // Make sure our target is in the scroll boundaries

					var scrollDiff = scrollTarget - scrollStart;

					var render = function render(p) {
						if (disableLerp) {
							if (_this9.direction === "horizontal") {
								_this9.setScroll(
									scrollStart + scrollDiff * p,
									_this9.instance.delta.y
								);
							} else {
								_this9.setScroll(
									_this9.instance.delta.x,
									scrollStart + scrollDiff * p
								);
							}
						} else {
							_this9.instance.delta[_this9.directionAxis] =
								scrollStart + scrollDiff * p;
						}
					}; // Prepare the scroll

					this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)

					this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

					this.startScrolling(); // Restart the scroll
					// Start the animation loop

					var start = Date.now();

					var loop = function loop() {
						var p = (Date.now() - start) / duration; // Animation progress

						if (p > 1) {
							// Animation ends
							render(1);
							_this9.animatingScroll = false;
							if (duration == 0) _this9.update();
							if (callback) callback();
						} else {
							_this9.scrollToRaf = requestAnimationFrame(loop);
							render(easing(p));
						}
					};

					loop();
				},
			},
			{
				key: "update",
				value: function update() {
					this.setScrollLimit();
					this.addSections();
					this.addElements();
					this.detectElements();
					this.updateScroll();
					this.transformElements(true);
					this.reinitScrollBar();
					this.checkScroll(true);
				},
			},
			{
				key: "startScroll",
				value: function startScroll() {
					this.stop = false;
				},
			},
			{
				key: "stopScroll",
				value: function stopScroll() {
					this.stop = true;
				},
			},
			{
				key: "setScroll",
				value: function setScroll(x, y) {
					this.instance = _objectSpread2(
						_objectSpread2({}, this.instance),
						{},
						{
							scroll: {
								x: x,
								y: y,
							},
							delta: {
								x: x,
								y: y,
							},
							speed: 0,
						}
					);
				},
			},
			{
				key: "destroy",
				value: function destroy() {
					_get(
						_getPrototypeOf(_default.prototype),
						"destroy",
						this
					).call(this);

					this.stopScrolling();
					this.html.classList.remove(this.smoothClass);
					this.vs.destroy();
					this.destroyScrollBar();
					window.removeEventListener("keydown", this.checkKey, false);
				},
			},
		]);

		return _default;
	})(_default);

	var Smooth = /*#__PURE__*/ (function () {
		function Smooth() {
			var options =
				arguments.length > 0 && arguments[0] !== undefined
					? arguments[0]
					: {};

			_classCallCheck(this, Smooth);

			this.options = options; // Override default options with given ones

			Object.assign(this, defaults, options);
			this.smartphone = defaults.smartphone;
			if (options.smartphone)
				Object.assign(this.smartphone, options.smartphone);
			this.tablet = defaults.tablet;
			if (options.tablet) Object.assign(this.tablet, options.tablet);
			if (!this.smooth && this.direction == "horizontal")
				console.warn(
					"🚨 `smooth:false` & `horizontal` direction are not yet compatible"
				);
			if (!this.tablet.smooth && this.tablet.direction == "horizontal")
				console.warn(
					"🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
				);
			if (
				!this.smartphone.smooth &&
				this.smartphone.direction == "horizontal"
			)
				console.warn(
					"🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
				);
			this.init();
		}

		_createClass(Smooth, [
			{
				key: "init",
				value: function init() {
					this.options.isMobile =
						/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
							navigator.userAgent
						) ||
						(navigator.platform === "MacIntel" &&
							navigator.maxTouchPoints > 1) ||
						window.innerWidth < this.tablet.breakpoint;
					this.options.isTablet =
						this.options.isMobile &&
						window.innerWidth >= this.tablet.breakpoint;

					if (
						(this.smooth && !this.options.isMobile) ||
						(this.tablet.smooth && this.options.isTablet) ||
						(this.smartphone.smooth &&
							this.options.isMobile &&
							!this.options.isTablet)
					) {
						this.scroll = new _default$2(this.options);
					} else {
						this.scroll = new _default$1(this.options);
					}

					this.scroll.init();

					if (window.location.hash) {
						// Get the hash without the '#' and find the matching element
						var id = window.location.hash.slice(
							1,
							window.location.hash.length
						);
						var target = document.getElementById(id); // If found, scroll to the element

						if (target) this.scroll.scrollTo(target);
					}
				},
			},
			{
				key: "update",
				value: function update() {
					this.scroll.update();
				},
			},
			{
				key: "start",
				value: function start() {
					this.scroll.startScroll();
				},
			},
			{
				key: "stop",
				value: function stop() {
					this.scroll.stopScroll();
				},
			},
			{
				key: "scrollTo",
				value: function scrollTo(target, options) {
					this.scroll.scrollTo(target, options);
				},
			},
			{
				key: "setScroll",
				value: function setScroll(x, y) {
					this.scroll.setScroll(x, y);
				},
			},
			{
				key: "on",
				value: function on(event, func) {
					this.scroll.setEvents(event, func);
				},
			},
			{
				key: "off",
				value: function off(event, func) {
					this.scroll.unsetEvents(event, func);
				},
			},
			{
				key: "destroy",
				value: function destroy() {
					this.scroll.destroy();
				},
			},
		]);

		return Smooth;
	})();

	return Smooth;
});

(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports!=="undefined"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.fn.marquee=function(options){return this.each(function(){var o=$.extend({},$.fn.marquee.defaults,options),$this=$(this),$marqueeWrapper,containerWidth,animationCss,verticalDir,elWidth,loopCount=3,playState="animation-play-state",css3AnimationIsSupported=false,_prefixedEvent=function(element,type,callback){var pfx=["webkit","moz","MS","o",""];for(var p=0;p<pfx.length;p++){if(!pfx[p])type=type.toLowerCase();element.addEventListener(pfx[p]+type,callback,false)}},_objToString=function(obj){var tabjson=[];for(var p in obj){if(obj.hasOwnProperty(p)){tabjson.push(p+":"+obj[p])}}tabjson.push();return"{"+tabjson.join(",")+"}"},_startAnimationWithDelay=function(){$this.timer=setTimeout(animate,o.delayBeforeStart)},methods={pause:function(){if(css3AnimationIsSupported&&o.allowCss3Support){$marqueeWrapper.css(playState,"paused")}else{if($.fn.pause){$marqueeWrapper.pause()}}$this.data("runningStatus","paused");$this.trigger("paused")},resume:function(){if(css3AnimationIsSupported&&o.allowCss3Support){$marqueeWrapper.css(playState,"running")}else{if($.fn.resume){$marqueeWrapper.resume()}}$this.data("runningStatus","resumed");$this.trigger("resumed")},toggle:function(){methods[$this.data("runningStatus")==="resumed"?"pause":"resume"]()},destroy:function(){clearTimeout($this.timer);$this.find("*").addBack().off();$this.html($this.find(".js-marquee:first").html())}};if(typeof options==="string"){if($.isFunction(methods[options])){if(!$marqueeWrapper){$marqueeWrapper=$this.find(".js-marquee-wrapper")}if($this.data("css3AnimationIsSupported")===true){css3AnimationIsSupported=true}methods[options]()}return}var dataAttributes={},attr;$.each(o,function(key){attr=$this.attr("data-"+key);if(typeof attr!=="undefined"){switch(attr){case"true":attr=true;break;case"false":attr=false;break}o[key]=attr}});if(o.speed){o.duration=parseInt($this.width(),10)/o.speed*1e3}verticalDir=o.direction==="up"||o.direction==="down";o.gap=o.duplicated?parseInt(o.gap):0;$this.wrapInner('<div class="js-marquee"></div>');var $el=$this.find(".js-marquee").css({"margin-right":o.gap,float:"left"});if(o.duplicated){$el.clone(true).appendTo($this)}$this.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');$marqueeWrapper=$this.find(".js-marquee-wrapper");if(verticalDir){var containerHeight=$this.height();$marqueeWrapper.removeAttr("style");$this.height(containerHeight);$this.find(".js-marquee").css({float:"none","margin-bottom":o.gap,"margin-right":0});if(o.duplicated){$this.find(".js-marquee:last").css({"margin-bottom":0})}var elHeight=$this.find(".js-marquee:first").height()+o.gap;if(o.startVisible&&!o.duplicated){o._completeDuration=(parseInt(elHeight,10)+parseInt(containerHeight,10))/parseInt(containerHeight,10)*o.duration;o.duration=parseInt(elHeight,10)/parseInt(containerHeight,10)*o.duration}else{o.duration=(parseInt(elHeight,10)+parseInt(containerHeight,10))/parseInt(containerHeight,10)*o.duration}}else{elWidth=$this.find(".js-marquee:first").width()+o.gap;containerWidth=$this.width();if(o.startVisible&&!o.duplicated){o._completeDuration=(parseInt(elWidth,10)+parseInt(containerWidth,10))/parseInt(containerWidth,10)*o.duration;o.duration=parseInt(elWidth,10)/parseInt(containerWidth,10)*o.duration}else{o.duration=(parseInt(elWidth,10)+parseInt(containerWidth,10))/parseInt(containerWidth,10)*o.duration}}if(o.duplicated){o.duration=o.duration/2}if(o.allowCss3Support){var elm=document.body||document.createElement("div"),animationName="marqueeAnimation-"+Math.floor(Math.random()*1e7),domPrefixes="Webkit Moz O ms Khtml".split(" "),animationString="animation",animationCss3Str="",keyframeString="";if(elm.style.animation!==undefined){keyframeString="@keyframes "+animationName+" ";css3AnimationIsSupported=true}if(css3AnimationIsSupported===false){for(var i=0;i<domPrefixes.length;i++){if(elm.style[domPrefixes[i]+"AnimationName"]!==undefined){var prefix="-"+domPrefixes[i].toLowerCase()+"-";animationString=prefix+animationString;playState=prefix+playState;keyframeString="@"+prefix+"keyframes "+animationName+" ";css3AnimationIsSupported=true;break}}}if(css3AnimationIsSupported){animationCss3Str=animationName+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s infinite "+o.css3easing;$this.data("css3AnimationIsSupported",true)}}var _rePositionVertically=function(){$marqueeWrapper.css("transform","translateY("+(o.direction==="up"?containerHeight+"px":"-"+elHeight+"px")+")")},_rePositionHorizontally=function(){$marqueeWrapper.css("transform","translateX("+(o.direction==="left"?containerWidth+"px":"-"+elWidth+"px")+")")};if(o.duplicated){if(verticalDir){if(o.startVisible){$marqueeWrapper.css("transform","translateY(0)")}else{$marqueeWrapper.css("transform","translateY("+(o.direction==="up"?containerHeight+"px":"-"+(elHeight*2-o.gap)+"px")+")")}}else{if(o.startVisible){$marqueeWrapper.css("transform","translateX(0)")}else{$marqueeWrapper.css("transform","translateX("+(o.direction==="left"?containerWidth+"px":"-"+(elWidth*2-o.gap)+"px")+")")}}if(!o.startVisible){loopCount=1}}else if(o.startVisible){loopCount=2}else{if(verticalDir){_rePositionVertically()}else{_rePositionHorizontally()}}var animate=function(){if(o.duplicated){if(loopCount===1){o._originalDuration=o.duration;if(verticalDir){o.duration=o.direction==="up"?o.duration+containerHeight/(elHeight/o.duration):o.duration*2}else{o.duration=o.direction==="left"?o.duration+containerWidth/(elWidth/o.duration):o.duration*2}if(animationCss3Str){animationCss3Str=animationName+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing}loopCount++}else if(loopCount===2){o.duration=o._originalDuration;if(animationCss3Str){animationName=animationName+"0";keyframeString=$.trim(keyframeString)+"0 ";animationCss3Str=animationName+" "+o.duration/1e3+"s 0s infinite "+o.css3easing}loopCount++}}if(verticalDir){if(o.duplicated){if(loopCount>2){$marqueeWrapper.css("transform","translateY("+(o.direction==="up"?0:"-"+elHeight+"px")+")")}animationCss={transform:"translateY("+(o.direction==="up"?"-"+elHeight+"px":0)+")"}}else if(o.startVisible){if(loopCount===2){if(animationCss3Str){animationCss3Str=animationName+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing}animationCss={transform:"translateY("+(o.direction==="up"?"-"+elHeight+"px":containerHeight+"px")+")"};loopCount++}else if(loopCount===3){o.duration=o._completeDuration;if(animationCss3Str){animationName=animationName+"0";keyframeString=$.trim(keyframeString)+"0 ";animationCss3Str=animationName+" "+o.duration/1e3+"s 0s infinite "+o.css3easing}_rePositionVertically()}}else{_rePositionVertically();animationCss={transform:"translateY("+(o.direction==="up"?"-"+$marqueeWrapper.height()+"px":containerHeight+"px")+")"}}}else{if(o.duplicated){if(loopCount>2){$marqueeWrapper.css("transform","translateX("+(o.direction==="left"?0:"-"+elWidth+"px")+")")}animationCss={transform:"translateX("+(o.direction==="left"?"-"+elWidth+"px":0)+")"}}else if(o.startVisible){if(loopCount===2){if(animationCss3Str){animationCss3Str=animationName+" "+o.duration/1e3+"s "+o.delayBeforeStart/1e3+"s "+o.css3easing}animationCss={transform:"translateX("+(o.direction==="left"?"-"+elWidth+"px":containerWidth+"px")+")"};loopCount++}else if(loopCount===3){o.duration=o._completeDuration;if(animationCss3Str){animationName=animationName+"0";keyframeString=$.trim(keyframeString)+"0 ";animationCss3Str=animationName+" "+o.duration/1e3+"s 0s infinite "+o.css3easing}_rePositionHorizontally()}}else{_rePositionHorizontally();animationCss={transform:"translateX("+(o.direction==="left"?"-"+elWidth+"px":containerWidth+"px")+")"}}}$this.trigger("beforeStarting");if(css3AnimationIsSupported){$marqueeWrapper.css(animationString,animationCss3Str);var keyframeCss=keyframeString+" { 100%  "+_objToString(animationCss)+"}",$styles=$marqueeWrapper.find("style");if($styles.length!==0){$styles.filter(":last").html(keyframeCss)}else{$("head").append("<style>"+keyframeCss+"</style>")}_prefixedEvent($marqueeWrapper[0],"AnimationIteration",function(){$this.trigger("finished")});_prefixedEvent($marqueeWrapper[0],"AnimationEnd",function(){animate();$this.trigger("finished")})}else{$marqueeWrapper.animate(animationCss,o.duration,o.easing,function(){$this.trigger("finished");if(o.pauseOnCycle){_startAnimationWithDelay()}else{animate()}})}$this.data("runningStatus","resumed")};$this.on("pause",methods.pause);$this.on("resume",methods.resume);if(o.pauseOnHover){$this.on("mouseenter",methods.pause);$this.on("mouseleave",methods.resume)}if(css3AnimationIsSupported&&o.allowCss3Support){animate()}else{_startAnimationWithDelay()}})};$.fn.marquee.defaults={allowCss3Support:true,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:false,duration:5e3,speed:0,gap:20,pauseOnCycle:false,pauseOnHover:false,startVisible:false}});
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AirDatepicker=t():e.AirDatepicker=t()}(this,(function(){return function(){"use strict";var e={d:function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return B}});var i={days:"days",months:"months",years:"years",day:"day",month:"month",year:"year",eventChangeViewDate:"changeViewDate",eventChangeCurrentView:"changeCurrentView",eventChangeFocusDate:"changeFocusDate",eventChangeSelectedDate:"changeSelectedDate",eventChangeTime:"changeTime",eventChangeLastSelectedDate:"changeLastSelectedDate",actionSelectDate:"selectDate",actionUnselectDate:"unselectDate",cssClassWeekend:"-weekend-"},s={classes:"",inline:!1,locale:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.MM.yyyy",timeFormat:"HH:mm",firstDay:1},startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"T",toggleSelected:!0,keyboardNav:!0,selectedDates:!1,container:"",isMobile:!1,visible:!1,position:"bottom left",offset:12,view:i.days,minView:i.days,showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:", ",range:!1,dynamicRange:!0,buttons:!1,monthsField:"monthsShort",showEvent:"focus",autoClose:!1,prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MMMM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:!1,onChangeViewDate:!1,onChangeView:!1,onRenderCell:!1,onShow:!1,onHide:!1,onClickDayName:!1};function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?t.querySelector(e):e}function n(){let{tagName:e="div",className:t="",innerHtml:i="",id:s="",attrs:a={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=document.createElement(e);return t&&n.classList.add(...t.split(" ")),s&&(n.id=s),i&&(n.innerHTML=i),a&&r(n,a),n}function r(e,t){for(let[i,s]of Object.entries(t))void 0!==s&&e.setAttribute(i,s);return e}function h(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){let t=e.getHours(),{hours:i,dayPeriod:s}=l(t);return{year:e.getFullYear(),month:e.getMonth(),fullMonth:e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,date:e.getDate(),fullDate:e.getDate()<10?"0"+e.getDate():e.getDate(),day:e.getDay(),hours:t,fullHours:d(t),hours12:i,dayPeriod:s,fullHours12:d(i),minutes:e.getMinutes(),fullMinutes:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}}function l(e){return{dayPeriod:e>11?"pm":"am",hours:e%12==0?12:e%12}}function d(e){return e<10?"0"+e:e}function c(e){let t=10*Math.floor(e.getFullYear()/10);return[t,t+9]}function u(){let e=[];for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return i.forEach((t=>{if("object"==typeof t)for(let i in t)t[i]&&e.push(i);else t&&e.push(t)})),e.join(" ")}function p(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.days;if(!e||!t)return!1;let a=o(e),n=o(t);return{[i.days]:a.date===n.date&&a.month===n.month&&a.year===n.year,[i.months]:a.month===n.month&&a.year===n.year,[i.years]:a.year===n.year}[s]}function m(e,t,i){let s=g(e,!1).getTime(),a=g(t,!1).getTime();return i?s>=a:s>a}function v(e,t){return!m(e,t,!0)}function g(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=new Date(e.getTime());return"boolean"!=typeof t||t||function(e){e.setHours(0,0,0,0)}(i),i}function D(e,t,i){e.length?e.forEach((e=>{e.addEventListener(t,i)})):e.addEventListener(t,i)}function y(e,t){return!(!e||e===document||e instanceof DocumentFragment)&&(e.matches(t)?e:y(e.parentNode,t))}function f(e,t,i){return e>i?i:e<t?t:e}function w(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return i.filter((e=>e)).forEach((t=>{for(let[i,s]of Object.entries(t))if(void 0!==s&&"[object Object]"===s.toString()){let t=void 0!==e[i]?e[i].toString():void 0,a=s.toString(),n=Array.isArray(s)?[]:{};e[i]=e[i]?t!==a?n:e[i]:n,w(e[i],s)}else e[i]=s})),e}function b(e){let t=e;return e instanceof Date||(t=new Date(e)),isNaN(t.getTime())&&(console.log(`Unable to convert value "${e}" to Date object`),t=!1),t}function k(e){let t="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+t+")("+e+")($|<|"+t+")","g")}function $(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class C{constructor(){let{type:e,date:t,dp:i,opts:s,body:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};$(this,"focus",(()=>{this.$cell.classList.add("-focus-"),this.focused=!0})),$(this,"removeFocus",(()=>{this.$cell.classList.remove("-focus-"),this.focused=!1})),$(this,"select",(()=>{this.$cell.classList.add("-selected-"),this.selected=!0})),$(this,"removeSelect",(()=>{this.$cell.classList.remove("-selected-","-range-from-","-range-to-"),this.selected=!1})),$(this,"onChangeSelectedDate",(()=>{this.isDisabled||(this._handleSelectedStatus(),this.opts.range&&this._handleRangeStatus())})),$(this,"onChangeFocusDate",(e=>{if(!e)return void(this.focused&&this.removeFocus());let t=p(e,this.date,this.type);t?this.focus():!t&&this.focused&&this.removeFocus(),this.opts.range&&this._handleRangeStatus()})),$(this,"render",(()=>(this.$cell.innerHTML=this._getHtml(),this.$cell.adpCell=this,this.$cell))),this.type=e,this.singleType=this.type.slice(0,-1),this.date=t,this.dp=i,this.opts=s,this.body=a,this.customData=!1,this.init()}init(){let{range:e,onRenderCell:t}=this.opts;t&&(this.customData=t({date:this.date,cellType:this.singleType,datepicker:this.dp})),this._createElement(),this._bindDatepickerEvents(),this._handleInitialFocusStatus(),this.dp.hasSelectedDates&&(this._handleSelectedStatus(),e&&this._handleRangeStatus())}_bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeFocusDate,this.onChangeFocusDate)}unbindDatepickerEvents(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeFocusDate,this.onChangeFocusDate)}_createElement(){var e;let{year:t,month:i,date:s}=o(this.date),a=(null===(e=this.customData)||void 0===e?void 0:e.attrs)||{};this.$cell=n({className:this._getClassName(),attrs:{"data-year":t,"data-month":i,"data-date":s,...a}})}_getClassName(){var e,t;let s=new Date,{selectOtherMonths:a,selectOtherYears:n}=this.opts,{minDate:r,maxDate:h}=this.dp,{day:l}=o(this.date),d=this._isOutOfMinMaxRange(),c=null===(e=this.customData)||void 0===e?void 0:e.disabled,m=u("air-datepicker-cell",`-${this.singleType}-`,{"-current-":p(s,this.date,this.type),"-min-date-":r&&p(r,this.date,this.type),"-max-date-":h&&p(h,this.date,this.type)}),v="";switch(this.type){case i.days:v=u({"-weekend-":this.dp.isWeekend(l),"-other-month-":this.isOtherMonth,"-disabled-":this.isOtherMonth&&!a||d||c});break;case i.months:v=u({"-disabled-":d||c});break;case i.years:v=u({"-other-decade-":this.isOtherDecade,"-disabled-":d||this.isOtherDecade&&!n||c})}return u(m,v,null===(t=this.customData)||void 0===t?void 0:t.classes)}_getHtml(){var e;let{year:t,month:s,date:a}=o(this.date),{showOtherMonths:n,showOtherYears:r}=this.opts;if(null!==(e=this.customData)&&void 0!==e&&e.html)return this.customData.html;switch(this.type){case i.days:return!n&&this.isOtherMonth?"":a;case i.months:return this.dp.locale[this.opts.monthsField][s];case i.years:return!r&&this.isOtherDecade?"":t}}_isOutOfMinMaxRange(){let{minDate:e,maxDate:t}=this.dp,{type:s,date:a}=this,{month:n,year:r,date:h}=o(a),l=s===i.days,d=s===i.years,c=!!e&&new Date(r,d?e.getMonth():n,l?h:e.getDate()),u=!!t&&new Date(r,d?t.getMonth():n,l?h:t.getDate());return e&&t?v(c,e)||m(u,t):e?v(c,e):t?m(u,t):void 0}destroy(){this.unbindDatepickerEvents()}_handleRangeStatus(){let{rangeDateFrom:e,rangeDateTo:t}=this.dp,i=u({"-in-range-":e&&t&&(s=this.date,a=e,n=t,m(s,a)&&v(s,n)),"-range-from-":e&&p(this.date,e,this.type),"-range-to-":t&&p(this.date,t,this.type)});var s,a,n;this.$cell.classList.remove("-range-from-","-range-to-","-in-range-"),i&&this.$cell.classList.add(...i.split(" "))}_handleSelectedStatus(){let e=this.dp._checkIfDateIsSelected(this.date,this.type);e?this.select():!e&&this.selected&&this.removeSelect()}_handleInitialFocusStatus(){p(this.dp.focusDate,this.date,this.type)&&this.focus()}get isDisabled(){return this.$cell.matches(".-disabled-")}get isOtherMonth(){return this.dp.isOtherMonth(this.date)}get isOtherDecade(){return this.dp.isOtherDecade(this.date)}}function _(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let M={[i.days]:`<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,[i.months]:`<div class="air-datepicker-body--cells -${i.months}-"></div>`,[i.years]:`<div class="air-datepicker-body--cells -${i.years}-"></div>`};const S=".air-datepicker-cell";class T{constructor(e){let{dp:t,type:s,opts:a}=e;_(this,"handleClick",(e=>{let t=e.target.closest(S).adpCell;if(t.isDisabled)return;if(!this.dp.isMinViewReached)return void this.dp.down();let i=this.dp._checkIfDateIsSelected(t.date,t.type);i?this.dp._handleAlreadySelectedDates(i,t.date):this.dp.selectDate(t.date)})),_(this,"handleDayNameClick",(e=>{let t=e.target.getAttribute("data-day-index");this.opts.onClickDayName({dayIndex:Number(t),datepicker:this.dp})})),_(this,"onChangeCurrentView",(e=>{e!==this.type?this.hide():(this.show(),this.render())})),_(this,"onMouseOverCell",(e=>{let t=y(e.target,S);this.dp.setFocusDate(!!t&&t.adpCell.date)})),_(this,"onMouseOutCell",(()=>{this.dp.setFocusDate(!1)})),_(this,"onClickBody",(e=>{let{onClickDayName:t}=this.opts,i=e.target;i.closest(S)&&this.handleClick(e),t&&i.closest(".air-datepicker-body--day-name")&&this.handleDayNameClick(e)})),_(this,"onMouseDown",(e=>{this.pressed=!0;let t=y(e.target,S),i=t&&t.adpCell;p(i.date,this.dp.rangeDateFrom)&&(this.rangeFromFocused=!0),p(i.date,this.dp.rangeDateTo)&&(this.rangeToFocused=!0)})),_(this,"onMouseMove",(e=>{if(!this.pressed||!this.dp.isMinViewReached)return;e.preventDefault();let t=y(e.target,S),i=t&&t.adpCell,{selectedDates:s,rangeDateTo:a,rangeDateFrom:n}=this.dp;if(!i||i.isDisabled)return;let{date:r}=i;if(2===s.length){if(this.rangeFromFocused&&!m(r,a)){let{hours:e,minutes:t}=o(n);r.setHours(e),r.setMinutes(t),this.dp.rangeDateFrom=r,this.dp.replaceDate(n,r)}if(this.rangeToFocused&&!v(r,n)){let{hours:e,minutes:t}=o(a);r.setHours(e),r.setMinutes(t),this.dp.rangeDateTo=r,this.dp.replaceDate(a,r)}}})),_(this,"onMouseUp",(()=>{this.pressed=!1,this.rangeFromFocused=!1,this.rangeToFocused=!1})),_(this,"onChangeViewDate",((e,t)=>{if(!this.isVisible)return;let s=c(e),a=c(t);switch(this.dp.currentView){case i.days:if(p(e,t,i.months))return;break;case i.months:if(p(e,t,i.years))return;break;case i.years:if(s[0]===a[0]&&s[1]===a[1])return}this.render()})),_(this,"render",(()=>{this.destroyCells(),this._generateCells(),this.cells.forEach((e=>{this.$cells.appendChild(e.render())}))})),this.dp=t,this.type=s,this.opts=a,this.cells=[],this.$el="",this.pressed=!1,this.isVisible=!0,this.init()}init(){this._buildBaseHtml(),this.type===i.days&&this.renderDayNames(),this.render(),this._bindEvents(),this._bindDatepickerEvents()}_bindEvents(){let{range:e,dynamicRange:t}=this.opts;D(this.$el,"mouseover",this.onMouseOverCell),D(this.$el,"mouseout",this.onMouseOutCell),D(this.$el,"click",this.onClickBody),e&&t&&(D(this.$el,"mousedown",this.onMouseDown),D(this.$el,"mousemove",this.onMouseMove),D(window.document,"mouseup",this.onMouseUp))}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView)}_buildBaseHtml(){this.$el=n({className:`air-datepicker-body -${this.type}-`,innerHtml:M[this.type]}),this.$names=a(".air-datepicker-body--day-names",this.$el),this.$cells=a(".air-datepicker-body--cells",this.$el)}_getDayNamesHtml(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.dp.locale.firstDay,t="",s=this.dp.isWeekend,{onClickDayName:a}=this.opts,n=e,r=0;for(;r<7;){let e=n%7;t+=`<div class="${u("air-datepicker-body--day-name",{[i.cssClassWeekend]:s(e),"-clickable-":!!a})}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`,r++,n++}return t}renderDayNames(){this.$names.innerHTML=this._getDayNamesHtml()}_generateCell(e){let{type:t,dp:i,opts:s}=this;return new C({type:t,dp:i,opts:s,date:e,body:this})}_generateCells(){T.getDatesFunction(this.type)(this.dp,(e=>{this.cells.push(this._generateCell(e))}))}show(){this.isVisible=!0,this.$el.classList.remove("-hidden-")}hide(){this.isVisible=!1,this.$el.classList.add("-hidden-")}destroyCells(){this.cells.forEach((e=>e.destroy())),this.cells=[],this.$cells.innerHTML=""}destroy(){this.destroyCells(),this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView)}static getDaysDates(e,t){let{viewDate:i,locale:{firstDay:s}}=e,a=h(i),{year:n,month:r}=o(i),l=new Date(n,r,1),d=new Date(n,r,a),c=l.getDay()-s,u=6-d.getDay()+s;c=c<0?c+7:c,u=u>6?u-7:u;let p=function(e,t){let{year:i,month:s,date:a}=o(e);return new Date(i,s,a-t)}(l,c),m=a+c+u,v=p.getDate(),{year:g,month:D}=o(p),y=0;const f=[];for(;y<m;){let e=new Date(g,D,v+y);t&&t(e),f.push(e),y++}return f}static getMonthsDates(e,t){let{year:i}=e.parsedViewDate,s=0,a=[];for(;s<12;){const e=new Date(i,s);a.push(e),t&&t(e),s++}return a}static getYearsDates(e,t){let i=c(e.viewDate),s=i[0]-1,a=i[1]+1,n=s,r=[];for(;n<=a;){const e=new Date(n,0);r.push(e),t&&t(e),n++}return r}static getDatesFunction(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.days;return{[i.days]:T.getDaysDates,[i.months]:T.getMonthsDates,[i.years]:T.getYearsDates}[e]}}function F(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class V{constructor(e){let{dp:t,opts:i}=e;F(this,"onClickNav",(e=>{let t=y(e.target,".air-datepicker-nav--action");if(!t)return;let i=t.dataset.action;this.dp[i]()})),F(this,"onChangeViewDate",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),F(this,"onChangeCurrentView",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),F(this,"onClickNavTitle",(()=>{this.dp.isFinalView||this.dp.up()})),F(this,"update",(()=>{let{prevHtml:e,nextHtml:t}=this.opts;this.$prev.innerHTML=e,this.$next.innerHTML=t,this._resetNavStatus(),this.render(),this.handleNavStatus()})),F(this,"renderDelay",(()=>{setTimeout(this.render)})),F(this,"render",(()=>{this.$title.innerHTML=this._getTitle(),function(e,t){for(let i in t)t[i]?e.classList.add(i):e.classList.remove(i)}(this.$title,{"-disabled-":this.dp.isFinalView})})),this.dp=t,this.opts=i,this.init()}init(){this._createElement(),this._buildBaseHtml(),this._defineDOM(),this.render(),this.handleNavStatus(),this._bindEvents(),this._bindDatepickerEvents()}_defineDOM(){this.$title=a(".air-datepicker-nav--title",this.$el),this.$prev=a('[data-action="prev"]',this.$el),this.$next=a('[data-action="next"]',this.$el)}_bindEvents(){this.$el.addEventListener("click",this.onClickNav),this.$title.addEventListener("click",this.onClickNavTitle)}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.on(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.on(i.eventChangeTime,this.render))}destroy(){this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.off(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.off(i.eventChangeTime,this.render))}_createElement(){this.$el=n({tagName:"nav",className:"air-datepicker-nav"})}_getTitle(){let{dp:e,opts:t}=this,i=t.navTitles[e.currentView];return"function"==typeof i?i(e):e.formatDate(e.viewDate,i)}handleNavStatus(){let{disableNavWhenOutOfRange:e}=this.opts,{minDate:t,maxDate:s}=this.dp;if(!t&&!s||!e)return;let{year:a,month:n}=this.dp.parsedViewDate,r=!!t&&o(t),h=!!s&&o(s);switch(this.dp.currentView){case i.days:t&&r.month>=n&&r.year>=a&&this._disableNav("prev"),s&&h.month<=n&&h.year<=a&&this._disableNav("next");break;case i.months:t&&r.year>=a&&this._disableNav("prev"),s&&h.year<=a&&this._disableNav("next");break;case i.years:{let e=c(this.dp.viewDate);t&&r.year>=e[0]&&this._disableNav("prev"),s&&h.year<=e[1]&&this._disableNav("next");break}}}_disableNav(e){a('[data-action="'+e+'"]',this.$el).classList.add("-disabled-")}_resetNavStatus(){!function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];e.length?e.forEach((e=>{e.classList.remove(...i)})):e.classList.remove(...i)}(this.$el.querySelectorAll(".air-datepicker-nav--action"),"-disabled-")}_buildBaseHtml(){let{prevHtml:e,nextHtml:t}=this.opts;this.$el.innerHTML=`<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`}get isNavIsFunction(){let{navTitles:e}=this.opts;return Object.keys(e).find((t=>"function"==typeof e[t]))}}var x={today:{content:e=>e.locale.today,onClick:e=>e.setViewDate(new Date)},clear:{content:e=>e.locale.clear,onClick:e=>e.clear()}};class H{constructor(e){let{dp:t,opts:i}=e;this.dp=t,this.opts=i,this.init()}init(){this.createElement(),this.render()}createElement(){this.$el=n({className:"air-datepicker-buttons"})}destroy(){this.$el.parentNode.removeChild(this.$el)}clearHtml(){return this.$el.innerHTML="",this}generateButtons(){let{buttons:e}=this.opts;Array.isArray(e)||(e=[e]),e.forEach((e=>{let t=e;"string"==typeof e&&x[e]&&(t=x[e]);let i=this.createButton(t);t.onClick&&this.attachEventToButton(i,t.onClick),this.$el.appendChild(i)}))}attachEventToButton(e,t){e.addEventListener("click",(()=>{t(this.dp)}))}createButton(e){let{content:t,className:i,tagName:s="button",attrs:a={}}=e;return n({tagName:s,innerHtml:`<span tabindex='-1'>${"function"==typeof t?t(this.dp):t}</span>`,className:u("air-datepicker-button",i),attrs:a})}render(){this.generateButtons()}}function E(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class L{constructor(){let{opts:e,dp:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E(this,"toggleTimepickerIsActive",(e=>{this.dp.timepickerIsActive=e})),E(this,"onChangeSelectedDate",(e=>{let{date:t,updateTime:i=!1}=e;t&&(this.setMinMaxTime(t),this.setCurrentTime(!!i&&t),this.addTimeToDate(t))})),E(this,"onChangeLastSelectedDate",(e=>{e&&(this.setTime(e),this.render())})),E(this,"onChangeInputRange",(e=>{let t=e.target;this[t.getAttribute("name")]=t.value,this.updateText(),this.dp.trigger(i.eventChangeTime,{hours:this.hours,minutes:this.minutes})})),E(this,"onMouseEnterLeave",(e=>{let t=e.target.getAttribute("name"),i=this.$minutesText;"hours"===t&&(i=this.$hoursText),i.classList.toggle("-focus-")})),E(this,"onFocus",(()=>{this.toggleTimepickerIsActive(!0)})),E(this,"onBlur",(()=>{this.toggleTimepickerIsActive(!1)})),this.opts=e,this.dp=t;let{timeFormat:s}=this.dp.locale;s&&(s.match(k("h"))||s.match(k("hh")))&&(this.ampm=!0),this.init()}init(){this.setTime(this.dp.lastSelectedDate||this.dp.viewDate),this.createElement(),this.buildHtml(),this.defineDOM(),this.render(),this.bindDatepickerEvents(),this.bindDOMEvents()}bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate)}bindDOMEvents(){let e="input";navigator.userAgent.match(/trident/gi)&&(e="change"),D(this.$ranges,e,this.onChangeInputRange),D(this.$ranges,"mouseenter",this.onMouseEnterLeave),D(this.$ranges,"mouseleave",this.onMouseEnterLeave),D(this.$ranges,"focus",this.onFocus),D(this.$ranges,"mousedown",this.onFocus),D(this.$ranges,"blur",this.onBlur)}createElement(){this.$el=n({className:u("air-datepicker-time",{"-am-pm-":this.dp.ampm})})}destroy(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate),this.$el.parentNode.removeChild(this.$el)}buildHtml(){let{ampm:e,hours:t,displayHours:i,minutes:s,minHours:a,minMinutes:n,maxHours:r,maxMinutes:h,dayPeriod:o,opts:{hoursStep:l,minutesStep:c}}=this;this.$el.innerHTML=`<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   `+(e?`<span class='air-datepicker-time--current-ampm'>${o}</span>`:"")+'</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">'+`      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">`+`      <input type="range" name="minutes" value="${s}" min="${n}" max="${h}" step="${c}"/>   </div></div>`}defineDOM(){let e=e=>a(e,this.$el);this.$ranges=this.$el.querySelectorAll('[type="range"]'),this.$hours=e('[name="hours"]'),this.$minutes=e('[name="minutes"]'),this.$hoursText=e(".air-datepicker-time--current-hours"),this.$minutesText=e(".air-datepicker-time--current-minutes"),this.$ampm=e(".air-datepicker-time--current-ampm")}setTime(e){this.setMinMaxTime(e),this.setCurrentTime(e)}addTimeToDate(e){e&&(e.setHours(this.hours),e.setMinutes(this.minutes))}setMinMaxTime(e){if(this.setMinMaxTimeFromOptions(),e){let{minDate:t,maxDate:i}=this.dp;t&&p(e,t)&&this.setMinTimeFromMinDate(t),i&&p(e,i)&&this.setMaxTimeFromMaxDate(i)}}setCurrentTime(e){let{hours:t,minutes:i}=e?o(e):this;this.hours=f(t,this.minHours,this.maxHours),this.minutes=f(i,this.minMinutes,this.maxMinutes)}setMinMaxTimeFromOptions(){let{minHours:e,minMinutes:t,maxHours:i,maxMinutes:s}=this.opts;this.minHours=f(e,0,23),this.minMinutes=f(t,0,59),this.maxHours=f(i,0,23),this.maxMinutes=f(s,0,59)}setMinTimeFromMinDate(e){let{lastSelectedDate:t}=this.dp;this.minHours=e.getHours(),t&&t.getHours()>e.getHours()?this.minMinutes=this.opts.minMinutes:this.minMinutes=e.getMinutes()}setMaxTimeFromMaxDate(e){let{lastSelectedDate:t}=this.dp;this.maxHours=e.getHours(),t&&t.getHours()<e.getHours()?this.maxMinutes=this.opts.maxMinutes:this.maxMinutes=e.getMinutes()}updateSliders(){r(this.$hours,{min:this.minHours,max:this.maxHours}).value=this.hours,r(this.$minutes,{min:this.minMinutes,max:this.maxMinutes}).value=this.minutes}updateText(){this.$hoursText.innerHTML=d(this.displayHours),this.$minutesText.innerHTML=d(this.minutes),this.ampm&&(this.$ampm.innerHTML=this.dayPeriod)}set hours(e){this._hours=e;let{hours:t,dayPeriod:i}=l(e);this.displayHours=this.ampm?t:e,this.dayPeriod=i}get hours(){return this._hours}render(){this.updateSliders(),this.updateText()}}function O(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class A{constructor(e){let{dp:t,opts:i}=e;O(this,"pressedKeys",new Set),O(this,"hotKeys",new Map([[[["Control","ArrowRight"],["Control","ArrowUp"]],e=>e.month++],[[["Control","ArrowLeft"],["Control","ArrowDown"]],e=>e.month--],[[["Shift","ArrowRight"],["Shift","ArrowUp"]],e=>e.year++],[[["Shift","ArrowLeft"],["Shift","ArrowDown"]],e=>e.year--],[[["Alt","ArrowRight"],["Alt","ArrowUp"]],e=>e.year+=10],[[["Alt","ArrowLeft"],["Alt","ArrowDown"]],e=>e.year-=10],[["Control","Shift","ArrowUp"],(e,t)=>t.up()]])),O(this,"handleHotKey",(e=>{let t=this.hotKeys.get(e),i=o(this.getInitialFocusDate());t(i,this.dp);let{year:s,month:a,date:n}=i,r=h(new Date(s,a));r<n&&(n=r);let l=this.dp.getClampedDate(new Date(s,a,n));this.dp.setFocusDate(l,{viewDateTransition:!0})})),O(this,"isHotKeyPressed",(()=>{let e=!1,t=this.pressedKeys.size,i=e=>this.pressedKeys.has(e);for(let[s]of this.hotKeys){if(e)break;if(Array.isArray(s[0]))s.forEach((a=>{e||t!==a.length||(e=a.every(i)&&s)}));else{if(t!==s.length)continue;e=s.every(i)&&s}}return e})),O(this,"isArrow",(e=>e>=37&&e<=40)),O(this,"onKeyDown",(e=>{let{key:t,which:i}=e,{dp:s,dp:{focusDate:a},opts:n}=this;this.registerKey(t);let r=this.isHotKeyPressed();if(r)return e.preventDefault(),void this.handleHotKey(r);if(this.isArrow(i))return e.preventDefault(),void this.focusNextCell(t);if("Enter"===t){if(s.currentView!==n.minView)return void s.down();if(a){let e=s._checkIfDateIsSelected(a);return void(e?s._handleAlreadySelectedDates(e,a):s.selectDate(a))}}"Escape"===t&&this.dp.hide()})),O(this,"onKeyUp",(e=>{this.removeKey(e.key)})),this.dp=t,this.opts=i,this.init()}init(){this.bindKeyboardEvents()}bindKeyboardEvents(){let{$el:e}=this.dp;e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp)}destroy(){let{$el:e}=this.dp;e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("keyup",this.onKeyUp),this.hotKeys=null,this.pressedKeys=null}getInitialFocusDate(){let{focusDate:e,currentView:t,selectedDates:s,parsedViewDate:{year:a,month:n}}=this.dp,r=e||s[s.length-1];if(!r)switch(t){case i.days:r=new Date(a,n,(new Date).getDate());break;case i.months:r=new Date(a,n,1);break;case i.years:r=new Date(a,0,1)}return r}focusNextCell(e){let t=this.getInitialFocusDate(),{currentView:s}=this.dp,{days:a,months:n,years:r}=i,h=o(t),l=h.year,d=h.month,c=h.date;switch(e){case"ArrowLeft":s===a&&(c-=1),s===n&&(d-=1),s===r&&(l-=1);break;case"ArrowUp":s===a&&(c-=7),s===n&&(d-=3),s===r&&(l-=4);break;case"ArrowRight":s===a&&(c+=1),s===n&&(d+=1),s===r&&(l+=1);break;case"ArrowDown":s===a&&(c+=7),s===n&&(d+=3),s===r&&(l+=4)}let u=this.dp.getClampedDate(new Date(l,d,c));this.dp.setFocusDate(u,{viewDateTransition:!0})}registerKey(e){this.pressedKeys.add(e)}removeKey(e){this.pressedKeys.delete(e)}}let N={on(e,t){this.__events||(this.__events={}),this.__events[e]?this.__events[e].push(t):this.__events[e]=[t]},off(e,t){this.__events&&this.__events[e]&&(this.__events[e]=this.__events[e].filter((e=>e!==t)))},removeAllEvents(){this.__events={}},trigger(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.__events&&this.__events[e]&&this.__events[e].forEach((e=>{e(...i)}))}};function I(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let P="",j="",R=!1;class B{static buildGlobalContainer(e){R=!0,P=n({className:e,id:e}),a("body").appendChild(P)}constructor(e,t){var r=this;if(I(this,"viewIndexes",[i.days,i.months,i.years]),I(this,"next",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t+1,1));break;case i.months:this.setViewDate(new Date(e+1,t,1));break;case i.years:this.setViewDate(new Date(e+10,0,1))}})),I(this,"prev",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t-1,1));break;case i.months:this.setViewDate(new Date(e-1,t,1));break;case i.years:this.setViewDate(new Date(e-10,0,1))}})),I(this,"_finishHide",(()=>{this.hideAnimation=!1,this._destroyComponents(),this.$container.removeChild(this.$datepicker)})),I(this,"setPosition",(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("function"==typeof(e=e||r.opts.position))return void(r.customHide=e({$datepicker:r.$datepicker,$target:r.$el,$pointer:r.$pointer,isViewChange:t,done:r._finishHide}));let i,s,{isMobile:a}=r.opts,n=r.$el.getBoundingClientRect(),h=r.$el.getBoundingClientRect(),o=r.$datepicker.offsetParent,l=r.$el.offsetParent,d=r.$datepicker.getBoundingClientRect(),c=e.split(" "),u=window.scrollY,p=window.scrollX,m=r.opts.offset,v=c[0],g=c[1];if(a)r.$datepicker.style.cssText="left: 50%; top: 50%";else{if(o===l&&o!==document.body&&(h={top:r.$el.offsetTop,left:r.$el.offsetLeft,width:n.width,height:r.$el.offsetHeight},u=0,p=0),o!==l&&o!==document.body){let e=o.getBoundingClientRect();h={top:n.top-e.top,left:n.left-e.left,width:n.width,height:n.height},u=0,p=0}switch(v){case"top":i=h.top-d.height-m;break;case"right":s=h.left+h.width+m;break;case"bottom":i=h.top+h.height+m;break;case"left":s=h.left-d.width-m}switch(g){case"top":i=h.top;break;case"right":s=h.left+h.width-d.width;break;case"bottom":i=h.top+h.height-d.height;break;case"left":s=h.left;break;case"center":/left|right/.test(v)?i=h.top+h.height/2-d.height/2:s=h.left+h.width/2-d.width/2}r.$datepicker.style.cssText=`left: ${s+p}px; top: ${i+u}px`}})),I(this,"_setInputValue",(()=>{let{opts:e,$altField:t,locale:{dateFormat:i}}=this,{altFieldDateFormat:s,altField:a}=e;a&&t&&(t.value=this._getInputValue(s)),this.$el.value=this._getInputValue(i)})),I(this,"_getInputValue",(e=>{let{selectedDates:t,opts:i}=this,{multipleDates:s,multipleDatesSeparator:a}=i;if(!t.length)return"";let n="function"==typeof e,r=n?e(s?t:t[0]):t.map((t=>this.formatDate(t,e)));return r=n?r:r.join(a),r})),I(this,"_checkIfDateIsSelected",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.days,s=!1;return r.selectedDates.some((i=>{let a=p(e,i,t);return s=a&&i,a})),s})),I(this,"_scheduleCallAfterTransition",(e=>{this._cancelScheduledCall(),e&&e(!1),this._onTransitionEnd=()=>{e&&e(!0)},this.$datepicker.addEventListener("transitionend",this._onTransitionEnd,{once:!0})})),I(this,"_cancelScheduledCall",(()=>{this.$datepicker.removeEventListener("transitionend",this._onTransitionEnd)})),I(this,"setViewDate",(e=>{if(!((e=b(e))instanceof Date))return;if(p(e,this.viewDate))return;let t=this.viewDate;this.viewDate=e;let{onChangeViewDate:s}=this.opts;if(s){let{month:e,year:t}=this.parsedViewDate;s({month:e,year:t,decade:this.curDecade})}this.trigger(i.eventChangeViewDate,e,t)})),I(this,"setFocusDate",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!e||(e=b(e))instanceof Date)&&(r.focusDate=e,r.opts.range&&e&&r._handleRangeOnFocus(),r.trigger(i.eventChangeFocusDate,e,t))})),I(this,"setCurrentView",(e=>{if(this.viewIndexes.includes(e)){if(this.currentView=e,this.elIsInput&&this.visible&&this.setPosition(void 0,!0),this.trigger(i.eventChangeCurrentView,e),!this.views[e]){let t=this.views[e]=new T({dp:this,opts:this.opts,type:e});this.shouldUpdateDOM&&this.$content.appendChild(t.$el)}this.opts.onChangeView&&this.opts.onChangeView(e)}})),I(this,"_updateLastSelectedDate",(e=>{this.lastSelectedDate=e,this.trigger(i.eventChangeLastSelectedDate,e)})),I(this,"destroy",(()=>{let{showEvent:e,isMobile:t}=this.opts,i=this.$datepicker.parentNode;i&&i.removeChild(this.$datepicker),this.$el.removeEventListener(e,this._onFocus),this.$el.removeEventListener("blur",this._onBlur),window.removeEventListener("resize",this._onResize),t&&this._removeMobileAttributes(),this.keyboardNav&&this.keyboardNav.destroy(),this.views=null,this.nav=null,this.$datepicker=null,this.opts=null,this.$customContainer=null,this.viewDate=null,this.focusDate=null,this.selectedDates=null,this.rangeDateFrom=null,this.rangeDateTo=null})),I(this,"update",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=w({},r.opts);w(r.opts,e);let{timepicker:s,buttons:a,range:n,selectedDates:h,isMobile:o}=r.opts,l=r.visible||r.treatAsInline;r._createMinMaxDates(),r._limitViewDateByMaxMinDates(),r._handleLocale(),!t.selectedDates&&h&&r.selectDate(h),e.view&&r.setCurrentView(e.view),r._setInputValue(),t.range&&!n?(r.rangeDateTo=!1,r.rangeDateFrom=!1):!t.range&&n&&r.selectedDates.length&&(r.rangeDateFrom=r.selectedDates[0],r.rangeDateTo=r.selectedDates[1]),t.timepicker&&!s?(l&&r.timepicker.destroy(),r.timepicker=!1,r.$timepicker.parentNode.removeChild(r.$timepicker)):!t.timepicker&&s&&r._addTimepicker(),!t.buttons&&a?r._addButtons():t.buttons&&!a?(r.buttons.destroy(),r.$buttons.parentNode.removeChild(r.$buttons)):l&&t.buttons&&a&&r.buttons.clearHtml().render(),!t.isMobile&&o?(r.treatAsInline||j||r._createMobileOverlay(),r._addMobileAttributes(),r.visible&&r._showMobileOverlay()):t.isMobile&&!o&&(r._removeMobileAttributes(),r.visible&&(j.classList.remove("-active-"),"function"!=typeof r.opts.position&&r.setPosition())),l&&(r.nav.update(),r.views[r.currentView].render(),r.currentView===i.days&&r.views[r.currentView].renderDayNames())})),I(this,"isOtherMonth",(e=>{let{month:t}=o(e);return t!==this.parsedViewDate.month})),I(this,"isOtherYear",(e=>{let{year:t}=o(e);return t!==this.parsedViewDate.year})),I(this,"isOtherDecade",(e=>{let{year:t}=o(e),[i,s]=c(this.viewDate);return t<i||t>s})),I(this,"_onChangeSelectedDate",(e=>{let{silent:t}=e;setTimeout((()=>{this._setInputValue(),this.opts.onSelect&&!t&&this._triggerOnSelect()}))})),I(this,"_onChangeFocusedDate",(function(e){let{viewDateTransition:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;let i=!1;t&&(i=r.isOtherMonth(e)||r.isOtherYear(e)||r.isOtherDecade(e)),i&&r.setViewDate(e),r.opts.onFocus&&r.opts.onFocus({datepicker:r,date:e})})),I(this,"_onChangeTime",(e=>{let{hours:t,minutes:i}=e,s=new Date,{lastSelectedDate:a,opts:{onSelect:n}}=this,r=a;a||(r=s);let h=this.getCell(r,this.currentViewSingular),o=h&&h.adpCell;o&&o.isDisabled||(r.setHours(t),r.setMinutes(i),a?(this._setInputValue(),n&&this._triggerOnSelect()):this.selectDate(r))})),I(this,"_onFocus",(e=>{this.visible||this.show()})),I(this,"_onBlur",(e=>{this.inFocus||!this.visible||this.opts.isMobile||this.hide()})),I(this,"_onMouseDown",(e=>{this.inFocus=!0})),I(this,"_onMouseUp",(e=>{this.inFocus=!1,this.$el.focus()})),I(this,"_onResize",(()=>{this.visible&&"function"!=typeof this.opts.position&&this.setPosition()})),I(this,"_onClickOverlay",(()=>{this.visible&&this.hide()})),I(this,"getViewDates",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.days;return T.getDatesFunction(e)(r)})),I(this,"isWeekend",(e=>this.opts.weekends.includes(e))),I(this,"getClampedDate",(e=>{let{minDate:t,maxDate:i}=this,s=e;return i&&m(e,i)?s=i:t&&v(e,t)&&(s=t),s})),this.$el=a(e),!this.$el)return;this.$datepicker=n({className:"air-datepicker"}),this.opts=w({},s,t),this.$customContainer=!!this.opts.container&&a(this.opts.container),this.$altField=a(this.opts.altField||!1);let{view:h,startDate:l}=this.opts;l||(this.opts.startDate=new Date),"INPUT"===this.$el.nodeName&&(this.elIsInput=!0),this.inited=!1,this.visible=!1,this.viewDate=b(this.opts.startDate),this.focusDate=!1,this.initialReadonly=this.$el.getAttribute("readonly"),this.customHide=!1,this.currentView=h,this.selectedDates=[],this.views={},this.keys=[],this.rangeDateFrom="",this.rangeDateTo="",this.timepickerIsActive=!1,this.treatAsInline=this.opts.inline||!this.elIsInput,this.init()}init(){let{opts:e,treatAsInline:t,opts:{inline:i,isMobile:s,selectedDates:n,keyboardNav:r,onlyTimepicker:h}}=this,o=a("body");(!R||R&&P&&!o.contains(P))&&!i&&this.elIsInput&&!this.$customContainer&&B.buildGlobalContainer(B.defaultGlobalContainerId),!s||j||t||this._createMobileOverlay(),this._handleLocale(),this._bindSubEvents(),this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this.elIsInput&&(i||this._bindEvents(),r&&!h&&(this.keyboardNav=new A({dp:this,opts:e}))),n&&this.selectDate(n,{silent:!0}),this.opts.visible&&!t&&this.show(),s&&!t&&this.$el.setAttribute("readonly",!0),t&&this._createComponents()}_createMobileOverlay(){j=n({className:"air-datepicker-overlay"}),P.appendChild(j)}_createComponents(){let{opts:e,treatAsInline:t,opts:{inline:i,buttons:s,timepicker:a,position:n,classes:r,onlyTimepicker:h,isMobile:o}}=this;this._buildBaseHtml(),this.elIsInput&&(i||this._setPositionClasses(n)),!i&&this.elIsInput||this.$datepicker.classList.add("-inline-"),r&&this.$datepicker.classList.add(...r.split(" ")),h&&this.$datepicker.classList.add("-only-timepicker-"),o&&!t&&this._addMobileAttributes(),this.views[this.currentView]=new T({dp:this,type:this.currentView,opts:e}),this.nav=new V({dp:this,opts:e}),a&&this._addTimepicker(),s&&this._addButtons(),this.$content.appendChild(this.views[this.currentView].$el),this.$nav.appendChild(this.nav.$el)}_destroyComponents(){for(let e in this.views)this.views[e].destroy();this.views={},this.nav.destroy(),this.timepicker&&this.timepicker.destroy()}_addMobileAttributes(){j.addEventListener("click",this._onClickOverlay),this.$datepicker.classList.add("-is-mobile-"),this.$el.setAttribute("readonly",!0)}_removeMobileAttributes(){j.removeEventListener("click",this._onClickOverlay),this.$datepicker.classList.remove("-is-mobile-"),this.initialReadonly||""===this.initialReadonly||this.$el.removeAttribute("readonly")}_createMinMaxDates(){let{minDate:e,maxDate:t}=this.opts;this.minDate=!!e&&b(e),this.maxDate=!!t&&b(t)}_addTimepicker(){this.$timepicker=n({className:"air-datepicker--time"}),this.$datepicker.appendChild(this.$timepicker),this.timepicker=new L({dp:this,opts:this.opts}),this.$timepicker.appendChild(this.timepicker.$el)}_addButtons(){this.$buttons=n({className:"air-datepicker--buttons"}),this.$datepicker.appendChild(this.$buttons),this.buttons=new H({dp:this,opts:this.opts}),this.$buttons.appendChild(this.buttons.$el)}_bindSubEvents(){this.on(i.eventChangeSelectedDate,this._onChangeSelectedDate),this.on(i.eventChangeFocusDate,this._onChangeFocusedDate),this.on(i.eventChangeTime,this._onChangeTime)}_buildBaseHtml(){let{inline:e}=this.opts;var t,i;this.elIsInput?e?(t=this.$datepicker,(i=this.$el).parentNode.insertBefore(t,i.nextSibling)):this.$container.appendChild(this.$datepicker):this.$el.appendChild(this.$datepicker),this.$datepicker.innerHTML='<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>',this.$content=a(".air-datepicker--content",this.$datepicker),this.$pointer=a(".air-datepicker--pointer",this.$datepicker),this.$nav=a(".air-datepicker--navigation",this.$datepicker)}_handleLocale(){let{locale:e,dateFormat:t,firstDay:i,timepicker:s,onlyTimepicker:a,timeFormat:n,dateTimeSeparator:r}=this.opts;var h;this.locale=(h=e,JSON.parse(JSON.stringify(h))),t&&(this.locale.dateFormat=t),void 0!==n&&""!==n&&(this.locale.timeFormat=n);let{timeFormat:o}=this.locale;if(""!==i&&(this.locale.firstDay=i),s&&"function"!=typeof t){let e=o?r:"";this.locale.dateFormat=[this.locale.dateFormat,o||""].join(e)}a&&"function"!=typeof t&&(this.locale.dateFormat=this.locale.timeFormat)}_setPositionClasses(e){if("function"==typeof e)return void this.$datepicker.classList.add("-custom-position-");let t=(e=e.split(" "))[0],i=`air-datepicker -${t}-${e[1]}- -from-${t}-`;this.$datepicker.classList.add(...i.split(" "))}_bindEvents(){this.$el.addEventListener(this.opts.showEvent,this._onFocus),this.$el.addEventListener("blur",this._onBlur),this.$datepicker.addEventListener("mousedown",this._onMouseDown),this.$datepicker.addEventListener("mouseup",this._onMouseUp),window.addEventListener("resize",this._onResize)}_limitViewDateByMaxMinDates(){let{viewDate:e,minDate:t,maxDate:i}=this;i&&m(e,i)&&this.setViewDate(i),t&&v(e,t)&&this.setViewDate(t)}formatDate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.viewDate,t=arguments.length>1?arguments[1]:void 0;if(e=b(e),!(e instanceof Date))return;let i=t,s=this.locale,a=o(e),n=a.dayPeriod,r=c(e),h=B.replacer,l={T:e.getTime(),m:a.minutes,mm:a.fullMinutes,h:a.hours12,hh:a.fullHours12,H:a.hours,HH:a.fullHours,aa:n,AA:n.toUpperCase(),E:s.daysShort[a.day],EEEE:s.days[a.day],d:a.date,dd:a.fullDate,M:a.month+1,MM:a.fullMonth,MMM:s.monthsShort[a.month],MMMM:s.months[a.month],yy:a.year.toString().slice(-2),yyyy:a.year,yyyy1:r[0],yyyy2:r[1]};for(let[e,t]of Object.entries(l))i=h(i,k(e),t);return i}down(e){this._handleUpDownActions(e,"down")}up(e){this._handleUpDownActions(e,"up")}selectDate(e){let t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currentView:a,parsedViewDate:n,selectedDates:r}=this,{updateTime:h}=s,{moveToOtherMonthsOnSelect:o,moveToOtherYearsOnSelect:l,multipleDates:d,range:c,autoClose:u,onBeforeSelect:p}=this.opts,v=r.length;if(Array.isArray(e))return e.forEach((e=>{this.selectDate(e,s)})),new Promise((e=>{setTimeout(e)}));if((e=b(e))instanceof Date){if(p&&!p({date:e,datepicker:this}))return Promise.resolve();if(a===i.days&&e.getMonth()!==n.month&&o&&(t=new Date(e.getFullYear(),e.getMonth(),1)),a===i.years&&e.getFullYear()!==n.year&&l&&(t=new Date(e.getFullYear(),0,1)),t&&this.setViewDate(t),d&&!c){if(v===d)return;this._checkIfDateIsSelected(e)||r.push(e)}else if(c)switch(v){case 1:r.push(e),this.rangeDateTo||(this.rangeDateTo=e),m(this.rangeDateFrom,this.rangeDateTo)&&(this.rangeDateTo=this.rangeDateFrom,this.rangeDateFrom=e),this.selectedDates=[this.rangeDateFrom,this.rangeDateTo];break;case 2:this.selectedDates=[e],this.rangeDateFrom=e,this.rangeDateTo="";break;default:this.selectedDates=[e],this.rangeDateFrom=e}else this.selectedDates=[e];return this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,silent:null==s?void 0:s.silent,date:e,updateTime:h}),this._updateLastSelectedDate(e),u&&!this.timepickerIsActive&&this.visible&&(d||c?c&&1===v&&this.hide():this.hide()),new Promise((e=>{setTimeout(e)}))}}unselectDate(e){let t=this.selectedDates,s=this;if((e=b(e))instanceof Date)return t.some(((a,n)=>{if(p(a,e))return t.splice(n,1),s.selectedDates.length?s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length-1]):(s.rangeDateFrom="",s.rangeDateTo="",s._updateLastSelectedDate(!1)),this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,date:e}),!0}))}replaceDate(e,t){let s=this.selectedDates.find((t=>p(t,e,this.currentView))),a=this.selectedDates.indexOf(s);a<0||p(this.selectedDates[a],t,this.currentView)||(this.selectedDates[a]=t,this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,date:t,updateTime:!0}),this._updateLastSelectedDate(t))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.selectedDates=[],this.rangeDateFrom=!1,this.rangeDateTo=!1,this.lastSelectedDate=!1,this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,silent:e.silent}),new Promise((e=>{setTimeout(e)}))}show(){let{onShow:e,isMobile:t}=this.opts;this._cancelScheduledCall(),this.visible||this.hideAnimation||this._createComponents(),this.setPosition(this.opts.position),this.$datepicker.classList.add("-active-"),this.visible=!0,e&&this._scheduleCallAfterTransition(e),t&&this._showMobileOverlay()}hide(){let{onHide:e,isMobile:t}=this.opts,i=this._hasTransition();this.visible=!1,this.hideAnimation=!0,this.$datepicker.classList.remove("-active-"),this.customHide&&this.customHide(),this.elIsInput&&this.$el.blur(),this._scheduleCallAfterTransition((t=>{!this.customHide&&(t&&i||!t&&!i)&&this._finishHide(),e&&e(t)})),t&&j.classList.remove("-active-")}_triggerOnSelect(){let e=[],t=[],{selectedDates:i,locale:s,opts:{onSelect:a,multipleDates:n,range:r}}=this,h=n||r,o="function"==typeof s.dateFormat;i.length&&(e=i.map(g),t=o?n?s.dateFormat(e):e.map((e=>s.dateFormat(e))):e.map((e=>this.formatDate(e,s.dateFormat)))),a({date:h?e:e[0],formattedDate:h?t:t[0],datepicker:this})}_handleAlreadySelectedDates(e,t){const{range:i,toggleSelected:s}=this.opts;let a="function"==typeof s?s({datepicker:this,date:t}):s;i&&(a||2!==this.selectedDates.length&&this.selectDate(t)),a?this.unselectDate(t):this._updateLastSelectedDate(e)}_handleUpDownActions(e,t){if(!((e=b(e||this.focusDate||this.viewDate))instanceof Date))return;let i="up"===t?this.viewIndex+1:this.viewIndex-1;i>2&&(i=2),i<0&&(i=0),this.setViewDate(new Date(e.getFullYear(),e.getMonth(),1)),this.setCurrentView(this.viewIndexes[i])}_handleRangeOnFocus(){1===this.selectedDates.length&&(m(this.selectedDates[0],this.focusDate)?(this.rangeDateTo=this.selectedDates[0],this.rangeDateFrom=this.focusDate):(this.rangeDateTo=this.focusDate,this.rangeDateFrom=this.selectedDates[0]))}getCell(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.day;if(!((e=b(e))instanceof Date))return;let{year:s,month:a,date:n}=o(e),r=`[data-year="${s}"]`,h=`[data-month="${a}"]`,l={[i.day]:`${r}${h}[data-date="${n}"]`,[i.month]:`${r}${h}`,[i.year]:`${r}`};return this.views[this.currentView].$el.querySelector(l[t])}_showMobileOverlay(){j.classList.add("-active-")}_hasTransition(){return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e,t)=>parseFloat(t)+e),0)>0}get shouldUpdateDOM(){return this.visible||this.treatAsInline}get parsedViewDate(){return o(this.viewDate)}get currentViewSingular(){return this.currentView.slice(0,-1)}get curDecade(){return c(this.viewDate)}get viewIndex(){return this.viewIndexes.indexOf(this.currentView)}get isFinalView(){return this.currentView===i.years}get hasSelectedDates(){return this.selectedDates.length>0}get isMinViewReached(){return this.currentView===this.opts.minView||this.currentView===i.days}get $container(){return this.$customContainer||P}static replacer(e,t,i){return e.replace(t,(function(e,t,s,a){return t+i+a}))}}var K;return I(B,"defaults",s),I(B,"version","3.4.0"),I(B,"defaultGlobalContainerId","air-datepicker-global-container"),K=B.prototype,Object.assign(K,N),t.default}()}));