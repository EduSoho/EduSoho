!function(l){function t(t){for(var e,r,n=t[0],i=t[1],o=t[2],a=0,u=[];a<n.length;a++)r=n[a],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(l[e]=i[e]);for(p&&p(t);u.length;)u.shift()();return f.push.apply(f,o||[]),s()}function s(){for(var t,e=0;e<f.length;e++){for(var r=f[e],n=!0,i=1;i<r.length;i++){var o=r[i];0!==c[o]&&(n=!1)}n&&(f.splice(e--,1),t=a(a.s=r[0]))}return t}var r={},c={345:0},f=[];function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=l,a.c=r,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var p=n;f.push([878,0]),s()}({878:function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n),o=r(1),a=r.n(o),u=r(72);new(function(){function t(){i()(this,t),this.drag=$("#drag-btn").length?new u.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"web_register"}):null,this.container=$("#reset-email-form"),this.btn=$("#next-btn"),this.initValidator(),this.init()}return a()(t,[{key:"init",value:function(){var t=this;t.btn.click(function(){t.validator.form()&&($btn.button("loadding"),t.container.submit())})}},{key:"initValidator",value:function(){this.validator=this.container.validate({rules:{email:{required:!0,es_email:!0,es_remote:{type:"get"}},password:{required:!0,minlength:5,maxlength:20},dragCaptchaToken:{required:!0}},messages:{dragCaptchaToken:{required:Translator.trans("auth.register.drag_captcha_tips")}}})}}]),t}())}});