!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("htmlLoader",[],t):"object"==typeof exports?exports.htmlLoader=t():e.htmlLoader=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="./dist/",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw u}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n={};t.default=function(e){var t=e.key,s=e.templateUrl,c=e.css,l=e.js,d=t||s;if(d in n)return new Promise(function(e,t){var r=n[d],o=r.js,u=r.css,a=r.html;e({state:"changed",data:{js:o,css:u,html:a}})});var f=[];return f.push(o({url:s})),c&&f.push(i({url:c})),l&&f.push(a({url:l})),Promise.all(f).then(function(e){var t=r(e,3),o=t[0],a=t[1],i=t[2],s={js:i,css:a,html:u(o)};return n[d]=s,{state:"loaded",data:s}})};var o=function(e){var t=e.method,r=e.url;return new Promise(function(e,n){var o=new XMLHttpRequest;o.onreadystatechange=function(){4==o.readyState&&(200==o.status?e(o.responseText):n(o))},o.open(t||"get",r),o.send(null)})},u=function(e){var t=document.createElement("div");return t.innerHTML=e,t},a=function(e){var t=e.url;return new Promise(function(e,r){var n=document.createElement("script");n.onload=function(){return e(n)},n.src=t,document.head.appendChild(n)})},i=function(e){var t=e.url;return new Promise(function(e,r){var n=document.createElement("link");n.rel="stylesheet",n.href=t,document.head.appendChild(n),e(n)})}}])});
//# sourceMappingURL=html-loader.js.map