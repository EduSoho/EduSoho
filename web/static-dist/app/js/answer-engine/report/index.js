!function(l){function e(e){for(var t,n,a=e[0],o=e[1],r=e[2],i=0,c=[];i<a.length;i++)n=a[i],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&c.push(u[n][0]),u[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(p&&p(e);c.length;)c.shift()();return d.push.apply(d,r||[]),s()}function s(){for(var e,t=0;t<d.length;t++){for(var n=d[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==u[r]&&(a=!1)}a&&(d.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},u={65:0},d=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=l,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=a;d.push([767,0]),s()}({767:function(e,t,n){"use strict";n.r(t);var a,o=n(21),r=n.n(o),i=n(19),c=n.n(i),l={data:function(){return{answerShow:$("[name=answer_show]").val(),showCKEditorData:{publicPath:$("[name=ckeditor_path]").val(),filebrowserImageUploadUrl:$("[name=ckeditor_image_upload_url]").val(),filebrowserImageDownloadUrl:$("[name=ckeditor_image_download_url]").val(),language:"zh_CN"===document.documentElement.lang?"zh-cn":document.documentElement.lang,jqueryPath:$("[name=jquery_path]").val()},showAttachment:$("[name=show_attachment]").val(),cdnHost:$("[name=cdn_host]").val(),fileId:0}},created:function(){this.assessment=JSON.parse($("[name=assessment]").val()),this.answerReport=JSON.parse($("[name=answer_report]").val()),this.answerRecord=JSON.parse($("[name=answer_record]").val()),this.answerScene=JSON.parse($("[name=answer_scene]").val()),this.questionFavorites=JSON.parse($("[name=question_favorites]").val())},methods:{doAgainEvent:function(){location.href=$("[name=restart_url]").val()},cancelFavoriteEvent:function(e){$.ajax({url:"/api/me/question_favorite/1",headers:{Accept:"application/vnd.edusoho.v2+json"},contentType:"application/json;charset=utf-8",type:"DELETE",beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))},data:c()(e)}).done(function(e){})},favoriteEvent:function(e){$.ajax({url:"/api/me/question_favorite",headers:{Accept:"application/vnd.edusoho.v2+json"},contentType:"application/json;charset=utf-8",type:"POST",beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))},data:c()(e)}).done(function(e){})},deleteAttachment:function(e,t){t&&(this.fileId=e)},previewAttachment:function(e){this.fileId=e},downloadAttachment:function(e){this.fileId=e},previewAttachmentCallback:function(){var e=this,n=this;return new r.a(function(t){$.ajax({url:$("[name=preview-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){console.log(app),console.log(e),e.data.playServer=app.cloudPlayServer,e.data.sdkBaseUri=app.cloudSdkBaseUri,e.data.disableDataUpload=app.cloudDisableLogReport,e.data.disableSentry=app.cloudDisableLogReport,t(e),n.fileId=0})})},downloadAttachmentCallback:function(){var e=this,n=this;return new r.a(function(t){$.ajax({url:$("[name=download-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),n.fileId=0})})},deleteAttachmentCallback:function(){var e=this,n=this;return new r.a(function(t){$.ajax({url:$("[name=delete-attachment-url]").val(),type:"post",data:{id:e.fileId},beforeSend:function(e){e.setRequestHeader("X-CSRF-Token",$("meta[name=csrf-token]").attr("content"))}}).done(function(e){t(e),n.fileId=0})})}}},s=n(18),u=Object(s.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ibs-vue",attrs:{id:"app"}},[n("item-report",{attrs:{answerShow:e.answerShow,answerReport:e.answerReport,assessment:e.assessment,answerRecord:e.answerRecord,answerScene:e.answerScene,questionFavorites:e.questionFavorites,showCKEditorData:e.showCKEditorData,showAttachment:e.showAttachment,cdnHost:e.cdnHost,previewAttachmentCallback:e.previewAttachmentCallback,downloadAttachmentCallback:e.downloadAttachmentCallback},on:{previewAttachment:e.previewAttachment,downloadAttachment:e.downloadAttachment,doAgainEvent:e.doAgainEvent,cancelFavoriteEvent:e.cancelFavoriteEvent,favoriteEvent:e.favoriteEvent}})],1)},[],!1,null,null,null).exports;Vue.config.productionTip=!1,"en"==app.lang&&(a=local.default,itemBank.default.install(Vue,{locale:a})),new Vue({render:function(e){return e(u)}}).$mount("#app")}});