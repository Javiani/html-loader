!function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={exports:{},id:n,loaded:!1};return e[n].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var r={};return t.m=e,t.c=r,t.p="./dist/",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){var r=[],n=!0,u=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){u=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(u)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n={};t.default=function(e){var t=e.key,s=e.templateUrl,c=e.css,l=e.js,d=t||s;if(d in n)return new Promise(function(e,t){var r=n[d],u=r.js,a=r.css,o=r.html;e({state:"change",data:{js:u,css:a,html:o}})});var f=[];return f.push(u({url:s})),c&&f.push(i({url:c})),l&&f.push(o({url:l})),Promise.all(f).then(function(e){var t=r(e,3),u=t[0],o=t[1],i=t[2],s={js:i,css:o,html:a(u)};return n[d]=s,{state:"load",data:s}})};var u=function(e){var t=e.method,r=e.url;return new Promise(function(e,n){var u=new XMLHttpRequest;u.onreadystatechange=function(){4==u.readyState&&(200==u.status?e(u.responseText):n(u))},u.open(t||"get",r),u.send(null)})},a=function(e){var t=document.createElement("div");return t.innerHTML=e,t},o=function(e){var t=e.url;return new Promise(function(e,r){var n=document.createElement("script");n.onload=function(){return e(n)},n.src=t,document.head.appendChild(n)})},i=function(e){var t=e.url;return new Promise(function(e,r){var n=document.createElement("link");n.rel="stylesheet",n.href=t,document.head.appendChild(n),e(n)})}}]);
//# sourceMappingURL=html-loader.js.map