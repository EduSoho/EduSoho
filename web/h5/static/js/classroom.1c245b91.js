(window.webpackJsonp=window.webpackJsonp||[]).push([["classroom"],{8807:function(e,t,s){"use strict";s("a481"),s("ac6a"),s("456d"),s("7f7f"),s("c5f6"),s("8e6e");var i=s("bd86"),r=s("2f62");function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){Object(i.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var n={props:{type:{type:String,default:"price"},course:{type:Object,default:{}},order:{type:Object,default:{}}},data:function(){return{isFree:0==this.course.price}},computed:o(o({},Object(r.e)(["courseSettings"])),{},{rate:function(){return parseInt(this.course.publishedTaskNum)?parseInt(this.course.progress.percent):0},showStudent:function(){return!this.courseSettings||Number(this.courseSettings.show_student_num_enabled)}}),filters:{numFilter:function(e){return e?parseFloat(e).toFixed(2):""}},methods:{goToPay:function(){this.$router.push({path:"/pay",query:{id:this.order.id,source:"order",sn:this.order.sn,targetId:this.order.targetId,targetType:this.order.targetType}})}}},c=s("a6c2"),l={components:{switchBox:Object(c.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"e-course-switch-box"},["price"===e.type?s("div",{staticClass:"switch-box"},[s("span",{staticClass:"switch-box__price"},[e.isFree?s("p",{staticClass:"free"},[e._v("免费")]):e._e(),e.isFree?e._e():s("p",{staticClass:"price"},[e._v("¥ "+e._s(e.course.price))])]),s("span",{staticClass:"switch-box__state"},[e.showStudent?s("p",[e._v(e._s(e.course.studentNum)+"人在学")]):e._e()])]):e._e(),"order"===e.type?s("div",{staticClass:"switch-box"},[s("span",{staticClass:"switch-box__price"},[e.isFree?s("p",{staticClass:"free"},[e._v("免费")]):e._e(),e.isFree?e._e():s("p",{staticClass:"price"},[e._v("¥ "+e._s(e.order.pay_amount/100))])]),s("span",{staticClass:"switch-box__state"},["created"!==e.order.status&&"paying"!==e.order.status?s("p",{class:e.order.status},[e._v("\n        "+e._s(e._f("filterOrderStatus")(e.order.status))+"\n      ")]):e._e(),"created"===e.order.status||"paying"===e.order.status?s("span",{staticClass:"order-pay",on:{click:e.goToPay}},[e._v(e._s(e._f("filterOrderStatus")(e.order.status)))]):e._e()])]):e._e(),"confirmOrder"===e.type?s("div",{staticClass:"switch-box"},[s("span",{staticClass:"switch-box__price"},[s("p",{staticClass:"price"},[e._v("¥ "+e._s(e._f("numFilter")(e.order.totalPrice)))])])]):e._e(),"rank"===e.type?s("div",{staticClass:"rank-box"},[s("div",{staticClass:"progress round-conner"},[s("div",{staticClass:"curRate round-conner",style:{width:e.rate+"%"}})]),s("span",[e._v(e._s(this.rate)+"%")])]):e._e()])}),[],!1,null,null,null).exports},props:{course:{type:Object,default:function(){return{}}},order:{type:Object,default:function(){return{}}},type:{type:String,default:"price"},feedback:{type:Boolean,default:!0},typeList:{type:String,default:"course_list"},duration:{type:Number,default:0}},data:function(){return{pathName:this.$route.name}},computed:{imgSrc:function(){if("classroom_list"===this.typeList)return this.course.cover.middle;var e=this.course.courseSet;return(e?e.cover.middle:this.order.cover.middle)||""},title:function(){return"classroom_list"===this.typeList?this.course.title:this.course.courseSetTitle||(this.course.courseSet?this.course.courseSet.title:"")||this.order.title},teachPlan:function(){return!!this.course.title&&this.course.title},imgClass:function(){return"vip"===this.typeList?"e-vip__img":"e-course__img"},vipDuration:function(){return"month"===this.order.unitType?"".concat(this.duration,"个月"):"year"===this.order.unitType?"".concat(this.duration,"年"):"".concat(this.duration,"天")}},watch:{course:{handler:function(e){var t=e.courseSet;if("miniprogramSetting"===this.pathName&&t)for(var s=Object.keys(t.cover),i=0;i<s.length;i++)t.cover[s[i]]=t.cover[s[i]].replace(/^(\/\/)|(http:\/\/)/,"https://")},immediate:!0}},methods:{onClick:function(e){if(this.feedback&&"vip"!==this.typeList){var t="order"===this.type,s=this.course.id||this.order.targetId;"SPAN"!==e.target.tagName&&(t?location.href=this.order.targetUrl:"course"!==this.typeList&&("classroom_list"===this.typeList&&this.$router.push({path:"/classroom/".concat(s)}),"course_list"===this.typeList&&this.$router.push({path:"/course/".concat(s)})))}}}},u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"e-course"},[s("div",{staticClass:"clearfix",on:{click:e.onClick}},[s("div",{staticClass:"e-course__left pull-left"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgSrc,expression:"imgSrc"}],class:e.imgClass})]),s("div",{staticClass:"e-course__right pull-left"},["confirmOrder"===e.type?s("div",{staticClass:"e-course__title course-confirm-title"},[e._v("\n        "+e._s(e.title)),"vip"===e.typeList?s("span",{staticClass:"grey-medium"},[e._v("\n          x "+e._s(e.vipDuration))]):e._e()]):s("div",[s("div",{staticClass:"e-course__title text-overflow"},[e._v(e._s(e.title))]),"classroom_list"===e.typeList?s("div",{staticClass:"e-course__count"},[e._v("\n          共 "+e._s(e.course.courseNum)+" 门课程\n        ")]):e._e(),"course_list"===e.typeList?s("div",{staticClass:"e-course__project text-overflow"},[e.teachPlan?s("span",[e._v(e._s(e.teachPlan))]):e._e()]):e._e()]),s("switchBox",{attrs:{type:e.type,course:e.course,order:e.order,"student-num":e.course.studentNum,"published-task-num":e.course.publishedTaskNum}})],1)])])}),[],!1,null,null,null);t.a=u.exports},"8ab6":function(e,t,s){"use strict";s.r(t),s("8e6e"),s("ac6a"),s("456d"),s("e7e5");var i=s("d399"),r=s("bd86"),a=(s("e17f"),s("2241")),o=(s("96cf"),s("3b8d")),n={name:"Teacher",props:["teacherInfo","title","defaulValue"]},c=s("a6c2"),l=Object(c.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{attrs:{title:e.title,"defaul-value":e.defaulValue}},[e._l(e.teacherInfo,(function(t){return e.teacherInfo.length?[s("div",{staticClass:"teacher-content"},[s("img",{staticClass:"avatar-img",attrs:{src:t.avatar&&t.avatar.large}}),s("div",{staticClass:"teacher-cell"},[s("span",{staticClass:"dark font-family-PFM"},[e._v(e._s(t.nickname))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"item.title"}],staticClass:"text-content"},[e._v(e._s(t.title))])])])]:e._e()}))],2)}),[],!1,null,null,null).exports,u=s("fd23"),d=s("bced"),p=s("3ce7"),h=s("4328"),f=s.n(h),m=s("2f62");function v(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}var g={components:{countDown:u.a,tagLink:d.a},props:{cover:{type:String,default:""},price:{type:String,default:""},classroomId:{type:String,default:0},seckillActivities:{type:Object,default:null}},data:function(){return{counting:!0,isEmpty:!1,tagData:{earnings:0,isShow:!1,link:"",className:"course-tag",minDirectRewardRatio:0},bindAgencyRelation:{}}},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?v(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},Object(m.e)(["DrpSwitch"])),created:function(){this.showTagLink()},methods:{expire:function(){this.counting=!1},sellOut:function(){this.isEmpty=!0,this.$emit("goodsEmpty")},showTagLink:function(){this.DrpSwitch?(this.initTagData(),this.getAgencyBindRelation()):this.tagData.isShow=!1},getAgencyBindRelation:function(){var e=this;p.a.getAgencyBindRelation().then((function(t){t.agencyId?(e.bindAgencyRelation=t,e.tagData.isShow=!0):e.tagData.isShow=!1}))},initTagData:function(){var e=this;p.a.getDrpSetting().then((function(t){e.drpSetting=t,e.tagData.minDirectRewardRatio=t.minDirectRewardRatio;var s={type:"classroom",id:e.classroomId,merchant_id:e.drpSetting.merchantId};e.tagData.link=e.drpSetting.distributor_template_url+"?"+f.a.stringify(s);var i=e.drpSetting.minDirectRewardRatio/100*e.price;e.tagData.earnings=(Math.floor(100*i)/100).toFixed(2)}))}}},b=Object(c.a)(g,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail__head pos-rl"},[s("div",{staticClass:"course-detail__head--img"},[s("img",{attrs:{src:e.cover,alt:""}})]),e.seckillActivities&&e.counting&&!e.isEmpty&&"ongoing"===e.seckillActivities.status?s("countDown",{attrs:{activity:e.seckillActivities},on:{timesUp:e.expire,sellOut:e.sellOut}}):e._e(),s("tagLink",{attrs:{"tag-data":e.tagData}})],1)}),[],!1,null,null,null).exports,y=s("8807"),_=s("86ee"),w={name:"CourseSetList",components:{course:y.a,moreMask:_.a},props:{courseSets:{default:null},title:{default:""},defaulValue:{default:""},disableMask:{type:Boolean,default:!1},feedback:{type:Boolean,default:!0}},data:function(){return{maxShowNum:5}},computed:{partCourseSets:function(){return this.courseSets.slice(0,5)}},methods:{loadMore:function(){this.$emit("update:disableMask",!0)}}},O=Object(c.a)(w,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{attrs:{title:e.title,"need-flex":!1,"defaul-value":e.defaulValue}},[e.courseSets.length?[!e.disableMask&&e.courseSets.length>5?s("moreMask",{attrs:{"force-show":!0},on:{maskLoadMore:e.loadMore}},[e._l(e.partCourseSets,(function(t){return[s("course",{staticStyle:{"padding-left":"0","padding-right":"0"},attrs:{feedback:e.feedback,course:t}})]}))],2):[e._l(e.courseSets,(function(t){return[s("course",{staticStyle:{"padding-left":"0","padding-right":"0"},attrs:{feedback:e.feedback,course:t}})]}))]]:e._e()],2)}),[],!1,null,null,null).exports,C=(s("c5f6"),s("410d")),j=s("0d25");function k(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function S(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?k(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var x={components:{service:C.a},filters:{filterPrice:function(e){return 0===Number(e)?"免费":"¥".concat(e)}},props:{details:{default:{}},joinStatus:{default:!1}},watch:{learnExpiryHtml:{immediate:!0,handler:function(e){this.$emit("getLearnExpiry",{val:e})}}},computed:S(S({},Object(m.e)(["vipSwitch"])),{},{learnExpiryHtml:function(){var e=this.joinStatus,t=this.details.expiryValue,s=this.details.expiryMode;if(e)return"forever"==s?"长期有效":0!=e.deadline?e.deadline.slice(0,10)+"之前可学习":"永久有效";switch(s){case"forever":return"长期有效";case"date":var i=new Date(1e3*t);return Object(j.formatFullTime)(i).slice(0,10)+"之前可学习";case"days":return t+"天内可学习"}}}),methods:{toCertificate:function(){this.$router.push({path:"/certificate/list/".concat(this.$route.params.id)})}}},D=Object(c.a)(x,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"classroom-plan"},[s("e-panel",{attrs:{title:e.details.title,type:e.$route.query.hasCertificate}},[s("div",{staticClass:"course-detail__plan-price"},[s("span",{class:{isFree:0===Number(e.details.price)}},[e._v(e._s(e._f("filterPrice")(e.details.price)))]),s("span",{staticClass:"plan-price__student-num"},[e._v(e._s(e.details.studentNum)+"人在学")])])]),s("div",{staticClass:"course-detail__validity"},[e.details.vipLevel&&e.vipSwitch?s("div",{staticClass:"mb15"},[s("span",{staticClass:"mr20"},[e._v("会员免费")]),s("img",{staticClass:"vipIcon",attrs:{src:e.details.vipLevel.icon}}),s("router-link",{staticClass:"color-primary",attrs:{to:{path:"/vip",query:{id:e.details.vipLevel.id}}}},[e._v(e._s(e.details.vipLevel.name)+"免费学")])],1):e._e(),e.details.service.length?s("service",{attrs:{services:e.details.service}}):e._e(),s("div",[s("span",[e._v("学习有效期：")]),s("span",{domProps:{innerHTML:e._s(e.learnExpiryHtml)}})])],1),e.$route.query.hasCertificate?s("div",{staticClass:"course-detail__certificate",on:{click:e.toCertificate}},[e._m(0),s("i",{staticClass:"van-icon van-icon-arrow pull-right"})]):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("span",{staticClass:"certificate-icon"},[this._v("证")]),this._v("证书")])}],!1,null,null,null).exports,P=s("b127"),T=s("2095"),E=s("4928"),I=s("326d"),F=s("faa5");function L(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function M(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?L(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):L(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var $={components:{directory:P.a,detailHead:b,detailPlan:D,teacher:l,courseSetList:O,infoCollection:E.a,Reviews:I.a},props:["details","planDetails"],data:function(){return{headBottom:0,active:1,scrollFlag:!1,tabs:["班级介绍","班级课程"],tabsClass:"",errorMsg:"",classroomSettings:{},isShowForm:!1,paramsList:{action:"buy_after",targetType:"classroom",targetId:this.details.classId}}},mixins:[T.a],computed:M({},Object(m.e)("classroom",{currentJoin:function(e){return e.currentJoin}})),created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.getSettings({query:{type:"classroom"}}).catch((function(e){}));case 2:e.classroomSettings=t.sent;case 3:case"end":return t.stop()}}),t)})))()},watch:{currentJoin:{handler:function(e,t){var s=this;if(e){i.a.loading({duration:0,message:"加载中...",forbidClick:!0});var r={action:"buy_after",targetType:"classroom",targetId:this.details.classId};this.getInfoCollectionEvent(r).then((function(e){if(Object.keys(e).length)return s.userInfoCollect=e,void s.getInfoCollectionForm(e.id).then((function(e){s.isShowForm=!0,i.a.clear()}));i.a.clear()}))}},immediate:!0},$route:function(e,t){this.resetFrom()}},mounted:function(){window.addEventListener("touchmove",this.handleScroll),this.showDialog()},destroyed:function(){window.removeEventListener("touchmove",this.handleScroll)},methods:M(M({},Object(m.d)("classroom",{setCurrentJoin:F.p})),{},{gotoGoodsPage:function(){this.$router.push({path:"/goods/".concat(this.details.goodsId,"/show")})},showDialog:function(){var e=this,t="",s="",r=function(){};if(this.details.member&&(this.details.member.access&&(t=this.details.member.access.code),t&&"success"!==t))if(this.errorMsg=this.getErrorMsg(t),"classroom.expired"===t||"member.expired"===t){s="班级已到期，无法继续学习，是否退出";var a={id:this.details.classId};r=function(){p.a.deleteClassroom({query:a}).then((function(e){e.success?window.location.reload():i.a.fail("退出班级失败，请稍后重试")}))},this.callConfirm(s,r)}else"vip.member_expired"===t?(s="会员已到期，请及时续费会员",r=function(){e.$router.push({path:"/vip"})},this.callConfirm(s,r)):i.a.fail(this.getErrorMsg(t))},handleScroll:function(){var e=this;if(!this.scrollFlag){this.scrollFlag=!0;var t=this.$refs;setTimeout((function(){e.headBottom=t.head.$el.getBoundingClientRect().bottom,e.scrollFlag=!1,e.tabsClass=e.headBottom<=0?"van-tabs--fixed":""}),400)}},getErrorMsg:function(e){switch(e){case"classroom.not_found":return"当前班级不存在";case"classroom.unpublished":return"当前班级未发布";case"classroom.expired":return"当前班级已过期";case"user.not_login":return"用户未登录";case"user.locked":return"用户被锁定";case"member.not_found":return"用户未加入班级";case"member.auditor":return"用户是旁听生";case"member.expired":return"班级已过期";case"vip.vip_closed":return"网校已关闭会员功能";case"vip.not_login":return"用户未登录";case"vip.not_member":return"当前用户并不是vip";case"vip.member_expired":return"用户会员服务已过期";case"vip.level_not_exist":return"用户会员等级或班级会员不存在";case"vip.level_low":return"用户会员等级过低";default:return"异常错误"}},callConfirm:function(e,t){a.a.confirm({message:e,title:""}).then((function(){t()})).catch((function(){}))},onCancelForm:function(){this.setCurrentJoin(!1),this.isShowForm=!1}})},A=Object(c.a)($,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail classroom-detail"},[s("div",{staticClass:"join-after"},[s("detail-head",{ref:"head",attrs:{cover:e.details.cover,price:e.planDetails.price,"classroom-id":e.details.classId}}),s("van-tabs",{class:e.tabsClass,model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,(function(e){return s("van-tab",{key:e,attrs:{title:e}})})),1),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active == 0"}]},[s("detail-plan",{attrs:{details:e.planDetails,"join-status":e.details.joinStatus}}),s("div",{staticClass:"segmentation"}),s("e-panel",{ref:"about",staticClass:"about",attrs:{title:"班级介绍"}},[s("div",{domProps:{innerHTML:e._s(e.details.summary)}})]),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.teachers,title:"教师介绍"}}),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.headTeacher?[e.details.headTeacher]:[],title:"班主任","defaul-value":"尚未设置班主任"}}),s("div",{staticClass:"segmentation"}),s("reviews",{attrs:{details:e.details}}),s("div",{staticClass:"segmentation"}),s("div",{staticClass:"segmentation"}),s("div",{staticClass:"segmentation"})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active == 1"}]},[s("course-set-list",{ref:"course",attrs:{feedback:!e.errorMsg,"course-sets":e.details.courses,"disable-mask":!0,title:"班级课程","defaul-value":"暂无课程"},nativeOn:{click:function(t){return e.showDialog(t)}}})],1)],1),s("van-action-sheet",{staticClass:"minHeight50",attrs:{title:e.userInfoCollectForm.formTitle,"close-on-click-overlay":!1,"safe-area-inset-bottom":!0},on:{cancel:e.onCancelForm},model:{value:e.isShowForm,callback:function(t){e.isShowForm=t},expression:"isShowForm"}},[s("info-collection",{attrs:{userInfoCollectForm:e.userInfoCollectForm,formRule:e.userInfoCollectForm.items},on:{submitForm:e.onCancelForm}})],1),0==e.active&&this.details.goodsId?s("e-footer",{nativeOn:{click:function(t){return e.gotoGoodsPage(t)}}},[e._v("\n    去商品页\n  ")]):e._e()],1)}),[],!1,null,null,null).exports,R=s("d0b2"),N=s("49a2"),J=s("d863"),q=s("8b9d"),B=s("a262");function H(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function V(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?H(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):H(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var U={components:{directory:P.a,detailHead:b,detailPlan:D,teacher:l,courseSetList:O,reviewList:R.a,moreMask:_.a,onsale:N.a,infoCollection:E.a},mixins:[J.a,q.a,B.a,T.a],props:["details","planDetails"],data:function(){return{tops:{aboutTop:0,courseTop:0,reviewTop:0},active:0,scrollFlag:!1,tabs:["班级介绍","班级课程","学生评价"],tabsClass:"",loadMoreAbout:!1,disableMask:!1,learnExpiry:"长期有效",unreceivedCoupons:[],miniCoupons:[],marketingActivities:{seckill:{}},isEmpty:!0,scrollTime:null,isManualSwitch:!1,classroomSettings:{},isShowForm:!1}},watch:{$route:function(e,t){this.resetFrom()}},computed:V(V({},Object(m.e)(["couponSwitch","user"])),{},{accessToJoin:function(){return"success"===this.details.access.code||"user.not_login"===this.details.access.code},vipAccessToJoin:function(){var e=!1;return!(!this.details.vipLevel||!this.user.vip)&&(this.details.vipLevel.seq<=this.user.vip.seq&&(e=!(new Date(this.user.vip.deadline).getTime()<(new Date).getTime())),e)},showOnsale:function(){return 0!==Number(this.planDetails.price)&&!!(this.unreceivedCoupons.length||Object.keys(this.marketingActivities).length&&!this.onlySeckill)},onlySeckill:function(){return 1===Object.keys(this.marketingActivities).length&&this.marketingActivities.seckill},seckillStatus:function(){var e=this.marketingActivities.seckill;return Object(j.dateTimeDown)(new Date(e.endTime).getTime())},showSeckill:function(){var e=this.marketingActivities.seckill;return 0!==Number(this.planDetails.price)&&e&&"ongoing"===e.status&&!this.isEmpty}}),created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.getSettings({query:{type:"classroom"}}).catch((function(e){}));case 2:e.classroomSettings=t.sent;case 3:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;this.couponSwitch&&p.a.searchCoupon({params:{targetId:this.details.classId,targetType:"classroom"}}).then((function(t){e.unreceivedCoupons=t.data,e.miniCoupons=e.unreceivedCoupons.length>3?e.unreceivedCoupons.slice(0,4):e.unreceivedCoupons})).catch((function(e){})),p.a.classroomsActivities({query:{id:this.details.classId}}).then((function(t){e.marketingActivities=t,e.isEmpty=!t.seckill||!+t.seckill.productRemaind})).catch((function(e){})),window.addEventListener("touchmove",this.handleScroll),window.addEventListener("scroll",this.handleScroll),setTimeout((function(){window.scrollTo(0,0)}),100)},destroyed:function(){window.removeEventListener("touchmove",this.handleScroll),window.removeEventListener("scroll",this.handleScroll)},methods:V(V({},Object(m.d)("classroom",{setCurrentJoinClass:F.p})),{},{onTabClick:function(e,t){var s=this;this.isManualSwitch=!0;var i=this.$refs[this.transIndex2Tab(e)];window.scrollTo(0,i.$el.offsetTop-44),setTimeout((function(){return s.isManualSwitch=!1}),500)},transIndex2Tab:function(e){return["about","course","review"][e]},handleScroll:function(){var e=this;if(!this.scrollFlag){this.scrollFlag=!0;var t=this.$refs,s=["about","course","review"].reverse();this.scrollTime&&clearTimeout(this.scrollTime),this.scrollTime=setTimeout((function(){Object.keys(t).forEach((function(s){e.tops["".concat(s,"Top")]=t[s].$el.getBoundingClientRect().top})),e.scrollFlag=!1,e.tabsClass=e.tops.aboutTop-44<=0?"van-tabs--fixed":"",e.setCurrentActive(s)}),400)}},setCurrentActive:function(e){if(!this.isManualSwitch){for(var t=0;t<e.length;t++)if(!(this.tops["".concat(e[t],"Top")]-44>0))return void(this.active=e.length-t-1);this.active=0}},handleJoin:function(){var e=this.vipAccessToJoin;if(this.accessToJoin||e){var t=this.details,s=this.planDetails,i=1===Number(t.buyable)||0==+s.price||e;this.$store.state.token?i&&(!+s.price||e?this.collectUseInfoEvent():this.$router.push({name:"order",params:{id:t.classId},query:{expiryScope:this.learnExpiry,targetType:"classroom"}})):this.$router.push({name:"login",query:{redirect:this.redirect}})}},joinFreeClass:function(){var e=this;p.a.joinClass({query:{classroomId:this.details.classId}}).then((function(t){e.setCurrentJoinClass(!0),i.a.clear(),e.details.joinStatus=t})).catch((function(e){}))},getLearnExpiry:function(e){var t=e.val;this.learnExpiry=t},sellOut:function(){this.isEmpty=!0},getParamsList:function(){this.paramsList={action:"buy_before",targetType:"classroom",targetId:this.details.classId}},collectUseInfoEvent:function(){var e=this;this.hasUserInfoCollectForm?this.isShowForm=!0:(i.a.loading({duration:0,message:"加载中...",forbidClick:!0}),this.getParamsList(),this.getInfoCollectionEvent(this.paramsList).then((function(t){if(Object.keys(t).length)return e.userInfoCollect=t,void e.getInfoCollectionForm(t.id).then((function(t){e.isShowForm=!0,i.a.clear()}));e.joinFreeClass()})))}})},z=Object(c.a)(U,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"course-detail classroom-detail"},[s("div",{staticClass:"join-before"},[s("detail-head",{attrs:{cover:e.details.cover,price:e.planDetails.price,"classroom-id":e.details.classId,"seckill-activities":e.marketingActivities.seckill},on:{goodsEmpty:e.sellOut}}),s("detail-plan",{attrs:{details:e.planDetails,"join-status":e.details.joinStatus},on:{getLearnExpiry:e.getLearnExpiry}}),s("div",{staticClass:"segmentation"}),e.showOnsale?[s("onsale",{attrs:{"unreceived-coupons":e.unreceivedCoupons,"mini-coupons":e.miniCoupons,activities:e.marketingActivities}}),s("div",{staticClass:"segmentation"})]:e._e(),s("van-tabs",{class:e.tabsClass,on:{click:e.onTabClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabs,(function(e){return s("van-tab",{key:e,attrs:{title:e}})})),1),s("e-panel",{ref:"about",staticClass:"about",attrs:{title:"班级介绍"}},[s("more-mask",{attrs:{disabled:e.loadMoreAbout},on:{maskLoadMore:function(t){e.loadMoreAbout=!0}}},[s("div",{domProps:{innerHTML:e._s(e.details.summary)}})])],1),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.teachers,title:"教师介绍"}}),s("div",{staticClass:"segmentation"}),s("teacher",{staticClass:"teacher",attrs:{"teacher-info":e.details.headTeacher?[e.details.headTeacher]:[],title:"班主任","defaul-value":"尚未设置班主任"}}),s("div",{staticClass:"segmentation"}),s("course-set-list",{ref:"course",attrs:{"course-sets":e.details.courses,"disable-mask":e.disableMask,title:"班级课程","defaul-value":"暂无课程"},on:{"update:disableMask":function(t){e.disableMask=t},"update:disable-mask":function(t){e.disableMask=t}}}),s("div",{staticClass:"segmentation"}),s("review-list",{ref:"review",attrs:{"target-id":e.details.classId,reviews:1==e.classroomSettings.show_review?e.details.reviews:[],title:"学生评价",type:"classroom","defaul-value":"暂无评价"}}),s("van-action-sheet",{staticClass:"minHeight50",attrs:{title:e.userInfoCollectForm.formTitle,"close-on-click-overlay":!1,"safe-area-inset-bottom":!0},model:{value:e.isShowForm,callback:function(t){e.isShowForm=t},expression:"isShowForm"}},[s("info-collection",{attrs:{userInfoCollectForm:this.userInfoCollectForm,formRule:this.userInfoCollectForm.items},on:{submitForm:e.joinFreeClass}})],1),!e.marketingActivities.seckill||e.marketingActivities.seckill&&(e.isEmpty||"已到期"===e.seckillStatus)||0==e.planDetails.price?s("e-footer",{attrs:{disabled:!e.accessToJoin},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v("\n      "+e._s(e._f("filterJoinStatus")(e.details.access.code,"classroom",e.vipAccessToJoin)))]):e._e(),e.showSeckill&&"已到期"!==e.seckillStatus?s("div",[s("e-footer",{attrs:{disabled:!e.accessToJoin,half:"true"},nativeOn:{click:function(t){return e.handleJoin(t)}}},[e._v(e._s(e._f("filterJoinStatus")(e.details.access.code,"classroom",e.vipAccessToJoin)))]),s("e-footer",{attrs:{half:"true"},nativeOn:{click:function(t){return e.activityHandle(e.marketingActivities.seckill.id)}}},[e._v("去秒杀")])],1):e._e()],2)])}),[],!1,null,null,null).exports;function G(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}var K={components:{},data:function(){return{details:{isEmpty:!0,summary:"",joinStatus:!1,courses:[],teachers:[],assistants:[],headTeacher:{},access:{code:"加载中"},cover:"",reviews:[],myReview:null,classId:0,vipLevel:null},planDetails:{title:"",service:[],price:"0",studentNum:0,expiryMode:"forever",expiryValue:"0",vipLevel:null},currentComp:""}},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?G(Object(s),!0).forEach((function(t){Object(r.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):G(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},Object(m.e)({isLoading:function(e){return e.isLoading}})),watch:{"details.joinStatus":{handler:function(e){this.getComponent(e)}}},created:function(){var e=this,t=this.$route.params.id;p.a.getClassroomDetail({query:{classroomId:t}}).then((function(t){t.member?(e.getComponent(t.member),e.getDetails(t)):e.$router.push({path:"/goods/".concat(t.goodsId,"/show")})})).catch((function(e){i.a.fail(e.message)}))},methods:{getDetails:function(e){var t=0===Object.keys(e).length,s=e.about,i=!t&&e.member,r=e.courses,a=e.teachers,o=e.assistants,n=e.buyable,c=e.vipLevel,l=e.headTeacher,u=e.access,d=e.reviews,p=e.myReview,h=e.expiryMode,f=e.member,m=e.expiryValue,v=e.title,g=e.price,b=e.studentNum,y=e.service,_=e.goodsId,w=e.specsId,O=e.cover.large,C=e.id,j={title:v,service:y,price:g,studentNum:b,expiryMode:h,expiryValue:m,vipLevel:c};this.planDetails=j,this.details={summary:s,joinStatus:i,isEmpty:t,courses:r,classId:C,buyable:n,vipLevel:c,teachers:a,assistants:o,headTeacher:l,access:u,cover:O,reviews:d,myReview:p,member:f,goodsId:_,specsId:w}},getComponent:function(e){this.currentComp=e?A:z}}},Q=Object(c.a)(K,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail"},[this.isLoading?t("e-loading"):this._e(),t(this.currentComp,{tag:"component",attrs:{details:this.details,"plan-details":this.planDetails}})],1)}),[],!1,null,null,null);t.default=Q.exports}}]);