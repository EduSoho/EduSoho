!function(a){function e(e){for(var t,r,n=e[0],o=e[1],u=e[2],i=0,s=[];i<n.length;i++)r=n[i],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&s.push(l[r][0]),l[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t]);for(p&&p(e);s.length;)s.shift()();return f.push.apply(f,u||[]),c()}function c(){for(var e,t=0;t<f.length;t++){for(var r=f[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==l[u]&&(n=!1)}n&&(f.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},l={51:0},f=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=n;f.push([537,0]),c()}({15:function(e,t){e.exports=jQuery},537:function(e,t,r){"use strict";r.r(t);var n=r(4),o=$("#apple-form");$(".js-setting-submit").click(function(){$.post(o.data("url"),o.serialize()).success(function(e){Object(n.a)("success",Translator.trans("site.save_success_hint"))}).fail(function(e,t,r){Object(n.a)("danger",e.responseJSON.error.message)})})}});