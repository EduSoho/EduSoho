!function(u){function t(t){for(var e,n,r=t[0],i=t[1],a=t[2],o=0,s=[];o<r.length;o++)n=r[o],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&s.push(c[n][0]),c[n]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(u[e]=i[e]);for(m&&m(t);s.length;)s.shift()();return f.push.apply(f,a||[]),l()}function l(){for(var t,e=0;e<f.length;e++){for(var n=f[e],r=!0,i=1;i<n.length;i++){var a=n[i];0!==c[a]&&(r=!1)}r&&(f.splice(e--,1),t=o(o.s=n[0]))}return t}var n={},c={175:0},f=[];function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return u[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=u,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var m=r;f.push([825,0]),l()}({825:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(1),o=n.n(a),s=function(){function e(t){i()(this,e),this.$element=$(t),this.formId=$(t).data("form"),this.btnId=$(t).data("button"),this.$form=$("#".concat(this.formId)),this.$btn=$("#".concat(this.btnId)),this.uploadUrl=this.$element.data("imageUploadUrl"),this.init()}return o()(e,[{key:"init",value:function(){this.submitForm(),this.initCkeditor()}},{key:"initCkeditor",value:function(){var t=this,e=this;e.editor=CKEDITOR.replace("summary",{allowedContent:!0,toolbar:"Detail",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:this.uploadUrl}),e.editor.on("blur",function(){t.$element.val(e.editor.getData()),e.validator.form()})}},{key:"submitForm",value:function(){var t=this;this.validator=this.$form.validate({rules:{summary:{ckeditor_maxlength:1e4}}}),this.$btn.click(function(){t.$element.val(t.editor.getData()),t.validator.form()&&t.$form.submit()})}}]),e}();new(function(){function e(t){i()(this,e),this.init(),this.detail=new s(t)}return o()(e,[{key:"init",value:function(){this.initValidator(),this.initTags()}},{key:"initValidator",value:function(){var o=this,t=$("#title").closest("form"),s=$("#courseset-summary-field").val();t.validate({currentDom:"#courseset-base-submit",ajax:!0,rules:{title:{byte_maxlength:200,required:{depends:function(){return $(this).val($.trim($(this).val())),!0}},course_title:!0},subtitle:{maxlength:50,required:{depends:function(){return $(this).val($.trim($(this).val())),!1}},course_title:!0}},submitHandler:function(t){var e=$(t),n=this.settings,r=$(n.currentDom),i=e.data("value"),a=$("#courseset-summary-field").val();r.length||$(t).find('[type="submit"]'),1==i&&""!=a&&a!=s?cd.confirm({title:Translator.trans("course_set.manage.operation_hint"),content:Translator.trans("course_set.manage.courseset_summary_operation_hint"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){o.savePost(t,n)}):o.savePost(t,n)},submitSuccess:function(){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),window.location.reload()}})}},{key:"savePost",value:function(t,e){var n=$(t),r=$(e.currentDom);r.button("loading"),$.post(n.attr("action"),n.serializeArray(),function(t){r.button("reset"),e.submitSuccess(t)}).error(function(t){r.button("reset"),e.submitError(t)})}},{key:"initTags",value:function(){var t=$("#tags");t.select2({ajax:{url:t.data("url"),dataType:"json",quietMillis:500,data:function(t){return{q:t,page_limit:10}},results:function(t){return console.log(t),{results:t.map(function(t){return{id:t.name,name:t.name}})}}},initSelection:function(t,e){var n=[];$(t.val().split(",")).each(function(){n.push({id:this,name:this})}),e(n)},formatSelection:function(t){return t.name},formatResult:function(t){return t.name},formatNoMatches:function(){return Translator.trans("validate.tag_required_not_found_hint")},formatSearching:function(){return Translator.trans("site.searching_hint")},multiple:!0,maximumSelectionSize:20,placeholder:Translator.trans("course_set.manage.tag_required_hint"),width:"off",createSearchChoice:function(){return null}})}}]),e}())("#courseset-summary-field")}});