!function(l){function e(e){for(var t,n,a=e[0],r=e[1],i=e[2],s=0,o=[];s<a.length;s++)n=a[s],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&o.push(d[n][0]),d[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t]);for(m&&m(e);o.length;)o.shift()();return c.push.apply(c,i||[]),u()}function u(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==d[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},d={282:0},c=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=l,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var m=a;c.push([869,0]),u()}({15:function(e,t){e.exports=jQuery},355:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),s=n.n(i),o=n(4),l=function(){function n(e){r()(this,n),this.element=$(e),this.upload_id="subtitle-uploader",this.inited=!1,0<this.element.length&&(this.init(),this.inited=!0);var t=this.element.closest("#video-subtitle-form-group");0<t.find("#ext_mediaId_for_subtitle").val()&&this.render({id:t.find("#ext_mediaId_for_subtitle").val()})}return s()(n,[{key:"init",value:function(){var n=this;this.element.on("click",".js-subtitle-delete",function(){var t=$(this);$.post(t.data("subtitleDeleteUrl"),function(e){e&&(Object(o.a)("success",Translator.trans("activity.video_manage.delete_success_hint")),t.parent().remove(),$("#"+n.upload_id).show())})})}},{key:"render",value:function(e){var t;this.inited&&e&&"id"in e&&0<e.id&&(this.media=e,this.element.html(Translator.trans("activity.video_manage.subtitle_load_hint")),t=this,$.get(this.element.data("dialogUrl"),{mediaId:this.media.id},function(e){t.element.html(e),t.initUploader()}))}},{key:"initUploader",value:function(){var n=this,t=$("#"+this.upload_id),a=$(".js-subtitle-dialog").data("mediaId"),e=t.data("mediaGlobalId");this.uploader&&this._destroyUploader();var r=new UploaderSDK({sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,initUrl:t.data("initUrl"),finishUrl:t.data("finishUrl"),id:this.upload_id,ui:"simple",multi:!0,accept:{extensions:["srt"],mimeTypes:["text/srt"]},type:"sub",process:{common:{videoNo:e}},locale:document.documentElement.lang});r.on("error",function(e){"Q_TYPE_DENIED"===e.error&&Object(o.a)("danger",Translator.trans("activity.video_manage.subtitle_upload_error_hint"))}),r.on("file.finish",function(e){$.post(t.data("subtitleCreateUrl"),{name:e.name,subtitleId:e.fileId,mediaId:a}).success(function(e){var t={waiting:Translator.trans("activity.video_manage.convert_status_waiting"),doing:Translator.trans("activity.video_manage.convert_status_doing"),success:Translator.trans("activity.video_manage.convert_status_success"),error:Translator.trans("activity.video_manage.convert_status_error"),none:Translator.trans("activity.video_manage.convert_status_none")};$(".js-media-subtitle-list").append('<li class="pvs mtm"><span class="subtitle-name prl pull-left">'+e.name+'</span><span class="subtitle-transcode-status '+e.convertStatus+'">'+t[e.convertStatus]+'</span><a href="javascript:;" class="btn-link pll color-primary js-subtitle-delete" data-subtitle-delete-url="/media/'+a+"/subtitle/"+e.id+'/delete">'+Translator.trans("activity.video_manage.subtitle_delete_hint")+"</a></li>"),3<$(".js-media-subtitle-list li").length&&$("#"+n.upload_id).hide(),Object(o.a)("success",Translator.trans("activity.video_manage.subtitle_upload_success_hint"))}).error(function(e){Object(o.a)("danger",e.responseJSON.error.message)})}),this.uploader=r}},{key:"show",value:function(){var e=this.element.parent(".form-group");0<e.length&&e.removeClass("hide")}},{key:"hide",value:function(){var e=this.element.parent(".form-group");0<e.length&&e.addClass("hide")}},{key:"_destroyUploader",value:function(){if(this.uploader){this.uploader.__events=null;try{this.uploader.destroy()}catch(e){}this.uploader=null}}},{key:"destroy",value:function(){this.inited&&this._destroyUploader()}}]),n}();t.a=l},371:function(e,t,n){"use strict";var i=arguments;t.a=function(t,e){var n=e.find(".load-animation");0==n.length?(n=$('<div class="load-animation"></div>')).prependTo(e).nextAll().hide():n.show();var a=[],r=t.length;return function(e){return a.push(e),n.hide().nextAll().show(),a.length<r?i.callee:t.apply(null,a)}}},869:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=n(0),s=n.n(i),o=n(1),l=n.n(o),u=(n(371),n(68)),d=n(355);new(function(){function t(e){s()(this,t),this.$element=$(e.element),this.$form=$(e.form),this.validator(),this.initfileChooser()}return l()(t,[{key:"validator",value:function(){var t=this,n=this.$form.validate({currentDom:"#form-submit",ajax:!0,groups:{date:"minute second"},rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},minute:"required unsigned_integer",second:"required second_range",mediaSource:"required"},messages:{minute:{required:Translator.trans("activity.video_manage.length_required_error_hint")},second:{required:Translator.trans("activity.video_manage.length_required_error_hint"),second_range:Translator.trans("validate.second_range.message")},mediaSource:Translator.trans("activity.video_manage.media_error_hint")},submitSuccess:function(){cd.message({type:"success",message:Translator.trans("open_course.lesson.create_success")}),document.location.reload()},submitError:function(e){var t="",n=JSON.parse(e.responseText);n.error&&n.error.message&&(t=n.error.message),cd.message({type:"warning",message:Translator.trans("open_course.lesson.create_error")+":"+t})}});$("#form-submit").click(function(e){n.form()&&t.$form.submit()}),$(".js-length").blur(function(){var e,t;n&&n.form()&&(e=0|r()($("#minute").val()),t=0|r()($("#second").val()),$("#length").val(60*e+t))})}},{key:"initfileChooser",value:function(){var e=new u.a,a=new d.a(".js-subtitle-list");this.$element.on("click",".js-choose-trigger",function(e){u.a.openUI(),window.dispatchEvent(new CustomEvent("resize")),$('[name="mediaSource').val(null)}),e.on("select",function(e){var t,n;u.a.closeUI(),e.length&&0<e.length&&(t=r()(e.length/60),n=Math.round(e.length%60),$("#minute").val(t),$("#second").val(n),$("#length").val(60*t+n)),$("#mediaSource").val(e.source),"self"==e.source?($("#mediaId").val(e.id),$("#mediaUri").val("")):($("#mediaUri").val(e.uri),$("#mediaId").val(0)),$("#mediaName").val(e.name),a.render(e)})}}]),t}())({element:"#modal",form:"#lesson-create-form"})}});