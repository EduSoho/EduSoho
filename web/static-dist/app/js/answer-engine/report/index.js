!function(i){function e(e){for(var t,n,a=e[0],o=e[1],r=e[2],c=0,s=[];c<a.length;c++)n=a[c],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&s.push(u[n][0]),u[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(i[t]=o[t]);for(p&&p(e);s.length;)s.shift()();return d.push.apply(d,r||[]),l()}function l(){for(var e,t=0;t<d.length;t++){for(var n=d[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==u[r]&&(a=!1)}a&&(d.splice(t--,1),e=c(c.s=n[0]))}return e}var n={},u={87:0},d=[];function c(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=i,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=a;d.push([808,0]),l()}({808:function(e,t,n){"use strict";n.r(t);var a,o=n(21),r=n.n(o),c=n(18),s=n.n(c),i={data:function(){return{collect:1==$("[name='collect']").val(),answerShow:$("[name=answer_show]").val(),showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),fileId:0}},created:function(){var t=this;$.ajax({url:"/api/answer_record/"+$("[name='answer_record_id']").val(),type:"GET",async:!1,headers:{Accept:"application/vnd.edusoho.v2+json"},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest")}}).done(function(e){t.assessment=e.assessment,t.answerReport=e.answer_report,t.answerRecord=e.answer_record,t.answerScene=e.answer_scene}),$.ajax({url:"/api/assessments/"+t.assessment.id+"/question_favorites",type:"GET",async:!1,headers:{Accept:"application/vnd.edusoho.v2+json"},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content")),e.setRequestHeader("X-Requested-With","XMLHttpRequest")}}).done(function(e){t.questionFavorites=e})},methods:{doAgainEvent:function(){location.href=$("[name=restart_url]").val()},cancelFavoriteEvent:function(e){$.ajax({url:"/api/me/question_favorite/1",headers:{Accept:"application/vnd.edusoho.v2+json"},contentType:"application/json;charset=utf-8",type:"DELETE",beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))},data:s()(e)}).done(function(e){})},favoriteEvent:function(e){$.ajax({url:"/api/me/question_favorite",headers:{Accept:"application/vnd.edusoho.v2+json"},contentType:"application/json;charset=utf-8",type:"POST",beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))},data:s()(e)}).done(function(e){})},deleteAttachment:function(e,t){t&&(this.fileId=e)},previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,n=this;return new r.a(function(t){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){console.log(app),console.log(e),e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,t(e),n.fileId=0})})},downloadAttachmentCallback:function(){var e=this,n=this;return new r.a(function(t){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),n.fileId=0})})},deleteAttachmentCallback:function(){var e=this,n=this;return new r.a(function(t){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),n.fileId=0})})}}},l=n(20),u=Object(l.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[n("item-report",{attrs:{answerShow:e.answerShow,answerReport:e.answerReport,assessment:e.assessment,answerRecord:e.answerRecord,answerScene:e.answerScene,questionFavorites:e.questionFavorites,showCKEditorData:e.showCKEditorData,showAttachment:e.showAttachment,cdnHost:e.cdnHost,collect:e.collect,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback},on:{previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment,doAgainEvent:e.doAgainEvent,cancelFavoriteEvent:e.cancelFavoriteEvent,favoriteEvent:e.favoriteEvent}})],1)},[],!1,null,null,null).exports,d=n(14);jQuery.support.cors=!0,Object(d.f)()&&$("body, html").css({height:"100%",overflow:"auto"}),Vue.config.productionTip=!1,"en"==app.lang&&(a=local.default,itemBank.default.install(Vue,{locale:a})),new Vue({render:function(e){return e(u)}}).$mount("#app")}});