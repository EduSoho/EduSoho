!function(n){var i={};function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/static-dist/",r(r.s=23)}([function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(9);function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),r(t,i.key,i)}}t.exports=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}},function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(16),r=n(17),a=n(19),o=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(i(t),e=a(e,!0),i(n),r)try{return o(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports=n(22)},function(t,e,n){t.exports=n(10)},function(t,e,n){n(11);var i=n(3).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){var i=n(12);i(i.S+i.F*!n(0),"Object",{defineProperty:n(6).f})},function(t,e,n){var v=n(5),m=n(3),g=n(13),y=n(15),$=n(21),b="prototype",w=function(t,e,n){var i,r,a,o=t&w.F,c=t&w.G,u=t&w.S,l=t&w.P,s=t&w.B,f=t&w.W,d=c?m:m[e]||(m[e]={}),h=d[b],p=c?v:u?v[e]:(v[e]||{})[b];for(i in c&&(n=e),n)(r=!o&&p&&void 0!==p[i])&&$(d,i)||(a=r?p[i]:n[i],d[i]=c&&"function"!=typeof p[i]?n[i]:s&&r?g(a,v):f&&p[i]==a?function(i){function t(t,e,n){if(this instanceof i){switch(arguments.length){case 0:return new i;case 1:return new i(t);case 2:return new i(t,e)}return new i(t,e,n)}return i.apply(this,arguments)}return t[b]=i[b],t}(a):l&&"function"==typeof a?g(Function.call,a):a,l&&((d.virtual||(d.virtual={}))[i]=a,t&w.R&&h&&!h[i]&&y(h,i,a)))};w.F=1,w.G=2,w.S=4,w.P=8,w.B=16,w.W=32,w.U=64,w.R=128,t.exports=w},function(t,e,n){var a=n(14);t.exports=function(i,r,t){if(a(i),void 0===r)return i;switch(t){case 1:return function(t){return i.call(r,t)};case 2:return function(t,e){return i.call(r,t,e)};case 3:return function(t,e,n){return i.call(r,t,e,n)}}return function(){return i.apply(r,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var i=n(6),r=n(20);t.exports=n(0)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var i=n(4);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(0)&&!n(7)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(4),r=n(5).document,a=i(r)&&i(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(3),r=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),a=n(2),o=n.n(a),c=function(){function e(t){r()(this,e),this.$element=t,this.initEvent()}return o()(e,[{key:"initEvent",value:function(){var e=this;this.$element.on("click",'[data-role="batch-select"]',function(t){return e._batch2Item(t)}),this.$element.on("click",'[data-role="batch-item"]',function(t){return e._item2Batch(t)})}},{key:"_batch2Item",value:function(t){var e=$(t.currentTarget).prop("checked");this.$element.find('[data-role="batch-select"]').prop("checked",e),this.$element.find('[data-role="batch-item"]:visible').prop("checked",e)}},{key:"_item2Batch",value:function(){this.$element.find('[data-role="batch-item"]').length==this.$element.find('[data-role="batch-item"]:checked').length?this.$element.find('[data-role="batch-select"]').prop("checked",!0):this.$element.find('[data-role="batch-select"]').prop("checked",!1)}}]),e}(),u=n(8),l=n.n(u),s=function(){function e(t){r()(this,e),this.$trainingModal=$("#modal",window.parent.document),this.$PickedModal=$("#attachment-modal",window.parent.document),this.$element=t,this.$step2_form=this.$element.find("#step2-form"),this.$step3_form=this.$element.find("#step3-form"),this.currentImages={id:0,name:""},this.init()}return o()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$element.on("click",'[data-role="pick-item-images"]',function(t){return e.showPickImages(t)}),this.$element.on("click",'[data-role="pick-item-dataset"]',function(t){return e.showPickDataset(t)}),$(".dataset-cache").on("click",function(){console.log("数据集回调");for(var t=JSON.parse($(this).val()),e="",n=0;n<t.length;n++)e+="<div class='tag-info checktag-"+t[n].id+"'><span class='label label-primary'>"+t[n].name+"+<a id='bb' href='javascript:void(0)' class='panel-tool-close bb-icon-close'  data-id='"+t[n].id+"'>X</a></span></div>";$(".tag-lists").html(e)}),$(".images-cache").on("click",function(){console.log("镜像回调");var t=$(".images-cache").val();""!==t&&(this.currentImages=JSON.parse(t),$(".selectImages").html(this.currentImages.name))}),$(".tag-lists").on("click",".bb-icon-close",function(){for(var t=JSON.parse($(".dataset-cache").val()),e=[],n=0;n<t.length;n++)t[n].id!=$(this).data("id")&&e.push(t[n]);$(".dataset-cache").attr("value",l()(e)),$(".dataset-cache").trigger("click")}),this.$PickedModal.on("shown.bs.modal",function(){e.$trainingModal.hide()}),this.$PickedModal.on("hidden.bs.modal",function(){e.$trainingModal.show(),e.$PickedModal.html("")})}},{key:"showPickImages",value:function(t){var e=this;t.preventDefault();var n=$(t.currentTarget);this.$PickedModal.modal().data("manager",this);var i=$(".images-cache").val(),r=0;""!=i&&(r=JSON.parse(i)),$.get(n.data("url"),{currentId:r.id},function(t){e.$PickedModal.html(t)})}},{key:"showPickDataset",value:function(t){var e=this;t.preventDefault();var n=$(t.currentTarget);this.$PickedModal.modal().data("manager",this);var i=$(".dataset-cache").val(),r={};""!=i&&(r=JSON.parse(i)),$.post(n.data("url"),{currentId:r},function(t){e.$PickedModal.html(t)})}}]),e}(),f=$("#step2-form");new s($("#iframe-content")),new c(f),window.ltc.load("bootstrap.css","jquery","validate","editor").then(function(){var n,e,t=window.ltc.getContext(),a="",i=0,r=$("#text-content-field");!function(){n=window.ltc.editor("text-content-field"),e=$("#step2-form").validate({rules:{title:{required:!0,maxlength:50,trim:!0,course_title:!0},lab_type:{required:!0},content:{required:!0,trim:!0}}}),n.on("change",function(){r.val(n.getData()),e.form()}),n.on("blur",function(){r.val(n.getData()),e.form()}),window.ltc.on("getValidate",function(t){window.ltc.emit("returnValidate",{valid:e.form()})}),window.ltc.on("getActivity",function(t){e.form()?window.ltc.emit("returnActivity",{valid:!0,data:$("#step2-form").serializeObject()}):window.ltc.emit("returnActivity",{valid:!1})}),t.activityId&&window.ltc.api({name:"getActivity",pathParams:{id:t.activityId}},function(e){$("#title").val(e.title),r.val(e.content),n.on("instanceReady",function(t){n.setData(e.content,{callback:function(){console.log(n.status)}})}),"ready"===n.status&&n.setData(e.content,{callback:function(){console.log(n.status)}})});$("#lab_type").on("change",function(t){!function(t){switch($("#link_url").rules("remove"),t){case"1":$("#link_url").rules("add",{required:!0}),$(".link_div").show(),$(".images_div,.dataset_div").hide();break;case"2":$(".link_div").hide(),$("#dataset_ids").rules("add",{required:!0,messages:{required:"请选择数据集"}}),$("#images_id").rules("add",{required:!0,messages:{required:"请选择镜像"}}),$(".images_div,.dataset_div").show();break;default:$(".link_div").hide(),$(".images_div,.dataset_div").hide()}}($(this).val())})}(),window.ltc.api({name:"getCourseDraft",queryParams:{courseId:t.courseId,activityId:t.activityId},pathParams:{id:i}},function(t){t.content&&(i=t.id,$(".js-continue-edit").removeClass("hidden"),$(".js-continue-edit").on("click",function(){n.setData(t.content),$(this).remove()}))}),setInterval(function(){!function(){var r=n.getData();if(r===a)return;window.ltc.api({name:"saveCourseDraft",data:{courseId:t.courseId,activityId:t.activityId,content:r}},function(t){var e=new Date,n=$("#modal .modal-title",parent.document),i=e.getHours()+"点"+e.getMinutes()+"分"+e.getSeconds()+"秒";n.text("草稿已于"+i+"保存"),a=r})}()},5e3)})}]);