!function(u){function t(t){for(var n,r,e=t[0],o=t[1],a=t[2],c=0,s=[];c<e.length;c++)r=e[c],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&s.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(u[n]=o[n]);for(d&&d(t);s.length;)s.shift()();return f.push.apply(f,a||[]),l()}function l(){for(var t,n=0;n<f.length;n++){for(var r=f[n],e=!0,o=1;o<r.length;o++){var a=r[o];0!==i[a]&&(e=!1)}e&&(f.splice(n--,1),t=c(c.s=r[0]))}return t}var r={},i={248:0},f=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return u[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=u,c.c=r,c.d=function(t,n,r){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(n,t){if(1&t&&(n=c(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)c.d(r,e,function(t){return n[t]}.bind(null,e));return r},c.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/static-dist/";var n=window.webpackJsonp=window.webpackJsonp||[],e=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var d=e;f.push([719,0]),l()}({15:function(t,n){t.exports=jQuery},719:function(t,n,r){"use strict";r.r(n);var e=r(3);$("#orders-table").on("click",".js-cancel-refund",function(){var t=$(this);cd.confirm({title:Translator.trans("user.account.refund_cancel_title"),content:Translator.trans("user.account.refund_cancel_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(t.data("url"),function(){Object(e.a)("success",Translator.trans("user.account.refund_cancel_success_hint")),setTimeout(function(){window.location.reload()},3e3)})})}),$("#orders-table").on("click",".js-cancel",function(){var t=$(this);cd.confirm({title:Translator.trans("user.account.cancel_order_title"),content:Translator.trans("user.account.cancel_order_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(t.data("url"),function(t){1!=t&&Object(e.a)("danger",Translator.trans("user.account.cancel_order_fail_hint")),Object(e.a)("success",Translator.trans("user.account.cancel_order_success_hint")),setTimeout(function(){window.location.reload()},3e3)})})}),$("#orders-table").on("click",".js-pay",function(){var t=$(this);cd.confirm({title:Translator.trans("user.account.order_pay_"+t.data("type")+"_close_title"),content:Translator.trans("user.account.order_pay_"+t.data("type")+"_close_hint"),okText:Translator.trans("user.account.order_not_pay"),cancelText:Translator.trans("user.account.order_pay")}).on("cancel",function(){window.location.href=t.data("url")})})}});