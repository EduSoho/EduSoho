!function(u){function t(t){for(var e,n,r=t[0],a=t[1],i=t[2],o=0,l=[];o<r.length;o++)n=r[o],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(u[e]=a[e]);for(d&&d(t);l.length;)l.shift()();return f.push.apply(f,i||[]),c()}function c(){for(var t,e=0;e<f.length;e++){for(var n=f[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(f.splice(e--,1),t=o(o.s=n[0]))}return t}var n={},s={38:0},f=[];function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=u,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var d=r;f.push([846,0]),c()}({296:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){var n=CKEDITOR.replace("text-content-field",{toolbar:"Task",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:$("#text-content-field").data("imageUploadUrl"),filebrowserFlashUploadUrl:$("#text-content-field").data("flashUploadUrl"),allowedContent:!0,height:300});return n.on("change",function(){console.log("change"),t.val(n.getData()),e&&e.form()}),n.on("blur",function(){console.log("blur"),t.val(n.getData()),e&&e.form()}),n}},846:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(1),o=n.n(i),l=n(296);n(97);new(function(){function e(t){a()(this,e),this._init()}return o()(e,[{key:"_init",value:function(){var r=this;this._inItStep2form(),this._inItStep3form(),this._lanuchAutoSave(),$(".js-continue-edit").on("click",function(t){var e=$(t.currentTarget),n=e.data("content");r.editor.setData(n),e.remove()})}},{key:"_inItStep2form",value:function(){var t=$("#step2-form"),e=t.data("validator"),e=t.validate({rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},content:{required:!0,trim:!0}}}),n=$('[name="content"]');this.editor=Object(l.a)(n,e),this._contentCache=n.val()}},{key:"_lanuchAutoSave",value:function(){var t=this,e=$("#modal .modal-title",parent.document);this._originTitle=e.text(),setInterval(function(){t._saveDraft()},5e3)}},{key:"_saveDraft",value:function(){var t,r=this,a=this.editor.getData();a!==this._contentCache&&(t=$('[name="content"]'),$.post(t.data("saveDraftUrl"),{content:a}).done(function(){var t=new Date,e=$("#modal .modal-title",parent.document),n=Translator.trans("site.date_format_his",{hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()});e.text(r._originTitle+Translator.trans("activity.text_manage.save_draft_hint",{createdTime:n})),r._contentCache=a}))}},{key:"_inItStep3form",value:function(){var t=$("#step3-form");t.data("validator"),t.validate({rules:{finishDetail:{required:!0,positive_integer:!0,max:300}},messages:{finishDetail:{required:Translator.trans("activity.text_manage.finish_detail_required_error_hint")}}})}}]),e}())}});