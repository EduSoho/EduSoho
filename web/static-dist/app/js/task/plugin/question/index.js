!function(l){function e(e){for(var t,n,i=e[0],o=e[1],r=e[2],s=0,a=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&a.push(c[n][0]),c[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(d&&d(e);a.length;)a.shift()();return h.push.apply(h,r||[]),u()}function u(){for(var e,t=0;t<h.length;t++){for(var n=h[t],i=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(i=!1)}i&&(h.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},c={330:0},h=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=l,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var d=i;h.push([831,0]),u()}({15:function(e,t){e.exports=jQuery},831:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(1),s=n.n(r),a=n(26),l=n.n(a),u=n(4),c=function(){function e(){o()(this,e),this.$element=$("#task-question-plugin-form"),this.editor=null,this.validator=null,this.initEvent()}return s()(e,[{key:"initEvent",value:function(){var t=this;this.$element.on("focusin",".expand-form-trigger",function(e){return t.expand()}),this.$element.on("click",".btn-primary",function(e){return t.save(e)}),this.$element.on("click",".collapse-form-btn",function(e){return t.collapse()})}},{key:"save",value:function(e){var t,n,i=this;e.preventDefault(),this.validator&&this.validator.form()&&((t=$(e.currentTarget)).attr("disabled","disabled"),n=l.a.channel("task.plugin.question"),$.post(this.$element.attr("action"),this.$element.serialize()).done(function(e){Object(u.a)("success",Translator.trans("task.plugin_question_post_success_hint")),n.publish("form.save",{html:e}),t.removeAttr("disabled"),i.collapse()}))}},{key:"expand",value:function(){var e,t=this;this.$element.hasClass("form-expanded")||(this.$element.addClass("form-expanded"),e=CKEDITOR.replace("question_content",{toolbar:"Simple",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:this.$element.find("#question_content").data("imageUploadUrl")}),this.editor=e,this.validator=this.$element.validate({rules:{"question[title]":"required","question[content]":"required"},messages:{"question[title]":Translator.trans("task.plugin_question_add.title_required_error_hint"),"question[content]":Translator.trans("task.plugin_question_add.content_required_error_hint")}}),e.on("change",function(){t.$element.find('[name="question[content]"]').val(e.getData())}),e.on("blur",function(){t.$element.find('[name="question[content]"]').val(e.getData())}),this.$element.find(".js-detail-form-group").removeClass("hide"))}},{key:"collapse",value:function(){this.$element.removeClass("form-expanded"),this.editor&&this.editor.destroy(),this.$element.removeData("validator"),this.clear(),this.$element.find(".js-detail-form-group").addClass("hide")}},{key:"clear",value:function(){this.$element.find("input[type=text],textarea").each(function(){$(this).val("")})}}]),e}(),h=n(6),d=n.n(h),f=function(){function t(e){o()(this,t),this.url=e,this.$element=$(".question-detail-block"),this.$form=null,this.validator=null,this.channel=l.a.channel("task.plugin.question"),this.render()}return s()(t,[{key:"initEvent",value:function(){var t=this;this.$element.on("click",".back-to-list",function(){t.channel.publish("back-to-list")}),this.toggleShow(),this.$element.on("click",".js-more-show",function(e){t.channel.publish("js-more-show",e)}),this.$form.on("click",".btn-primary",function(e){return t.onSavePost(e)})}},{key:"toggleShow",value:function(){this.$element.find(".task-question-plugin-pane-thread__content").each(function(){76<=$(this).height()&&$(this).next().show()})}},{key:"onSavePost",value:function(n){var i=this,o=this;n.preventDefault(),this.validator&&this.validator.form()&&$.post(this.$form.attr("action"),this.$form.serialize()).done(function(e){$(".js-post-answer-item").length||$(".js-answer-title").removeClass("hidden"),i.$element.find("[data-role=post-list]").append(e),"question"===$(n.target).data("type")&&o.toggleShow();var t=d()(i.$element.find("[data-role=post-number]").text());i.$element.find("[data-role=post-number]").text(t+1),i.$form.find("textarea").val("")}).error(function(e){Object(u.a)("danger",e.error.message)})}},{key:"render",value:function(){var t=this;$.get(this.url).done(function(e){t.$element.html(e),t.$form=t.$element.find(".post-form"),t.validator=t.$form.validate({rules:{"post[content]":"required"},messages:{"post[content]":Translator.trans("task.plugin_question_replay.content_required_error_hint")}}),t.initEvent()}).fail(function(){Object(u.a)("danger","error")})}},{key:"destroy",value:function(){this.$element.html(""),this.$element.undelegate()}}]),t}();new(function(){function e(){o()(this,e),this.$element=$(".question-pane"),this.$list=this.$element.find(".question-list-block"),this.$detail=this.$element.find(".question-detail-block"),this.form=new c,this.question=null,this.initEvent()}return s()(e,[{key:"initEvent",value:function(){var n=this;this.$element.on("click",".js-redirect-question-detail",function(e){return n.onRedirectQuestion(e)});var e=l.a.channel("task.plugin.question");e.subscribe("form.save",function(e,t){n.$element.find('[data-role="list"]').prepend(e.html),n.$element.find(".empty-item").remove()}),e.subscribe("back-to-list",function(){return n.onBackList()}),e.subscribe("js-more-show",function(e){return n.onToggleShow(e)}),$("[data-toggle='popover']").popover()}},{key:"onRedirectQuestion",value:function(e){var t=$(e.currentTarget).data("url");this.question=new f(t),this.$list.hide(),this.$detail.show()}},{key:"onBackList",value:function(){this.question&&this.question.destroy(),this.$list.show(),this.$detail.hide()}},{key:"onToggleShow",value:function(e){var t=$(e.currentTarget);t.find(".js-change-btn").toggle(),t.prev().toggleClass("active")}}]),e}())}});