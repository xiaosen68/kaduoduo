(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-banking-rolloutmoneylist"],{"002d":function(t,a,e){var n=e("52c9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("5f358a5e",n,!0,{sourceMap:!1,shadowMode:!1})},3418:function(t,a,e){"use strict";e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=0,o=0,i=!0,r={name:"loadRefresh",props:{heightReduce:{type:Number,default:0},backgroundCover:{type:String,default:"white"},pageNo:{type:Number,default:0},totalPageNo:{type:Number,default:0}},data:function(){return{hasMore:!0,moving:!1,refresh:!1,loading:!1,coverTransform:"translateY(0px)",coverTransition:"0s",playState:"paused"}},computed:{getHeight:function(){var t=uni.getSystemInfoSync().windowHeight-uni.upx2px(0+this.heightReduce);return"height: ".concat(t,"px;")},loadText:function(){var t=this.pageNo,a=this.totalPageNo,e=this.loading;return e?"加载中...":t<a?"上拉加载更多":"已经到底啦~"}},watch:{refresh:function(t){t&&this.$emit("refresh")}},methods:{loadMore:function(){var t=this.pageNo,a=this.totalPageNo;t<a&&(this.loading=!0,this.$emit("loadMore"))},loadOver:function(){this.loading=!1},coverTouchstart:function(t){!1!==i&&(this.coverTransition="transform .1s linear",n=t.touches[0].clientY,this.playState="running")},coverTouchmove:function(t){o=t.touches[0].clientY;var a=o-n;a<0?this.moving=!1:(this.moving=!0,a>=60&&a<100&&(a=60),a>40&&a<=60&&(this.refresh=!0,this.coverTransform="translateY(".concat(a,"px)")))},coverTouchend:function(){var t=this;setTimeout((function(){!1!==t.moving&&(t.moving=!1,t.refresh=!1,t.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",t.coverTransform="translateY(0px)",t.playState="paused")}),800)}}};a.default=r},"3c99":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"load-refresh"},[e("v-uni-view",{staticClass:"refresh hollow-dots-spinner"},[e("v-uni-view",{staticClass:"dot",style:[{animationPlayState:t.playState}]}),e("v-uni-view",{staticClass:"dot",style:[{animationPlayState:t.playState}]}),e("v-uni-view",{staticClass:"dot",style:[{animationPlayState:t.playState}]})],1),e("v-uni-view",{staticClass:"cover-container",style:[{background:t.backgroundCover,transform:t.coverTransform,transition:t.coverTransition}],on:{touchstart:function(a){arguments[0]=a=t.$handleEvent(a),t.coverTouchstart.apply(void 0,arguments)},touchmove:function(a){arguments[0]=a=t.$handleEvent(a),t.coverTouchmove.apply(void 0,arguments)},touchend:function(a){arguments[0]=a=t.$handleEvent(a),t.coverTouchend.apply(void 0,arguments)}}},[e("v-uni-scroll-view",{staticClass:"list",style:t.getHeight,attrs:{"scroll-y":!0,"show-scrollbar":"true"},on:{scrolltolower:function(a){arguments[0]=a=t.$handleEvent(a),t.loadMore.apply(void 0,arguments)}}},[t._t("content-list"),e("v-uni-view",{staticClass:"load-more"},[t._v(t._s(t.loadText))])],2)],1)],1)},i=[]},"4d49":function(t,a,e){"use strict";e.r(a);var n=e("3c99"),o=e("7a7c");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("5222");var r,s=e("f0c5"),l=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"d883a22a",null,!1,n["a"],r);a["default"]=l.exports},5222:function(t,a,e){"use strict";var n=e("c5b7"),o=e.n(n);o.a},"52c9":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".roll-item[data-v-b66f8ae8]{background-color:#f0f0f0;border-bottom:#dedede %?2?% solid;padding:%?20?% %?20?%\r\n\t/* height: 120upx; */}.roll-item-box1[data-v-b66f8ae8]{display:inline-block;width:%?240?%;text-align:left}.roll-item-box2[data-v-b66f8ae8]{display:inline-block;width:%?260?%;text-align:center;font-size:%?28?%\r\n\t/* color: #a3a3a3; */}.roll-item-box3[data-v-b66f8ae8]{display:inline-block;width:%?200?%;text-align:right}.roll-title[data-v-b66f8ae8]{font-size:%?30?%;font-weight:600;line-height:%?46?%;color:#393939}.roll-time[data-v-b66f8ae8]{font-size:%?24?%}.roll-money[data-v-b66f8ae8]{color:#0065d1}.roll-state[data-v-b66f8ae8]{font-size:%?24?%;color:#767676}",""]),t.exports=a},"59a6":function(t,a,e){"use strict";var n=e("4ea4");e("fb6a"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(e("4d49")),i={components:{loadRefresh:o.default},data:function(){return{list:[],currPage:1,totalPage:1}},onLoad:function(){this.refresh()},methods:{loadMore:function(){if(!(this.currPage<this.totalPage))return!1;this.currPage++,this.getrollmoneyList(),console.log("loadMore"),this.$refs.loadRefresh.loadOver()},refresh:function(){this.list=[],this.currPage=1,this.getrollmoneyList()},getrollmoneyList:function(){var t=this;uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/getWithdrawalAmountByUserIdAll",data:{page:this.currPage,size:20},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(a){console.log(a),0==a.data.code&&(t.list.push.apply(t.list,a.data.data.list),t.currPage=a.data.data.current_page,t.totalPage=a.data.data.total_page)}})},rollmoneystatusFn:function(t){this.$Router.push({name:"rolloutmoneystatus",params:{id:t}})}},filters:{cardFilter:function(t){return t.slice(-4)},stateFilter:function(t){return"REFUSE"===t?"拒绝":"PAYMENT_FAILED"===t?"打款失败":"SUCCESSFUL_PAY"===t?"打款成功":"PAYMENT_IN_PROGRESS"===t?"打款中":"ACCEPTED"===t?"受理中":void 0}}};a.default=i},"7a7c":function(t,a,e){"use strict";e.r(a);var n=e("3418"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},"7c42":function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={loadRefresh:e("4d49").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"fenrun-box"},[e("v-uni-view",{staticClass:"card-list"},[e("load-refresh",{ref:"loadRefresh",attrs:{heightReduce:10,backgroundCover:"#F3F5F5",pageNo:t.currPage,totalPageNo:t.totalPage},on:{loadMore:function(a){arguments[0]=a=t.$handleEvent(a),t.loadMore.apply(void 0,arguments)},refresh:function(a){arguments[0]=a=t.$handleEvent(a),t.refresh.apply(void 0,arguments)}}},[e("v-uni-view",{attrs:{slot:"content-list"},slot:"content-list"},t._l(t.list,(function(a){return e("v-uni-view",{staticClass:"roll-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rollmoneystatusFn(a.wId)}}},[e("v-uni-view",{staticClass:"roll-item-box1"},[e("v-uni-view",{staticClass:"roll-title"},[t._v("余额提现")]),e("v-uni-view",{staticClass:"roll-time"},[t._v(t._s(a.createTime))])],1),e("v-uni-view",{staticClass:"roll-item-box2"},[e("v-uni-view",{staticClass:"roll-bank"},[t._v("到账银行")]),e("v-uni-view",{staticClass:"roll-bank-card"},[t._v(t._s(a.cashOutBank)+t._s(t._f("cardFilter")(a.cashOutBankNo)))])],1),e("v-uni-view",{staticClass:"roll-item-box3"},[e("v-uni-view",{staticClass:"roll-title roll-money"},[t._v("-"+t._s(a.frozenAmount))]),e("v-uni-view",{staticClass:"roll-state"},[t._v(t._s(t._f("stateFilter")(a.state)))])],1)],1)})),1)],1)],1)],1)},i=[]},c5b7:function(t,a,e){var n=e("cd1f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("39b8e7b0",n,!0,{sourceMap:!1,shadowMode:!1})},ccd7:function(t,a,e){"use strict";var n=e("002d"),o=e.n(n);o.a},cd1f:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.load-refresh[data-v-d883a22a]{margin:0;padding:0;width:100%}.load-refresh .refresh[data-v-d883a22a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?120?%;width:100%}.load-refresh .hollow-dots-spinner[data-v-d883a22a], .load-refresh .hollow-dots-spinner *[data-v-d883a22a]{-webkit-box-sizing:border-box;box-sizing:border-box}.load-refresh .hollow-dots-spinner[data-v-d883a22a]{height:%?100?%;width:100%}.load-refresh .hollow-dots-spinner .dot[data-v-d883a22a]{width:15px;height:15px;margin:0 calc(15px / 2);border:calc(15px / 5) solid #04c4c4;-webkit-border-radius:50%;border-radius:50%;float:left;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:hollow-dots-spinner-animation-data-v-d883a22a 1s ease infinite 0ms;animation:hollow-dots-spinner-animation-data-v-d883a22a 1s ease infinite 0ms}.load-refresh .hollow-dots-spinner .dot[data-v-d883a22a]:nth-child(1){-webkit-animation-delay:calc(.3s * 1);animation-delay:calc(.3s * 1)}.load-refresh .hollow-dots-spinner .dot[data-v-d883a22a]:nth-child(2){-webkit-animation-delay:calc(.3s * 2);animation-delay:calc(.3s * 2)}.load-refresh .hollow-dots-spinner .dot[data-v-d883a22a]:nth-child(3){-webkit-animation-delay:calc(.3s * 3);animation-delay:calc(.3s * 3)}@-webkit-keyframes hollow-dots-spinner-animation-data-v-d883a22a{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes hollow-dots-spinner-animation-data-v-d883a22a{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}.load-refresh .cover-container[data-v-d883a22a]{width:100%;margin-top:%?-100?%}.load-refresh .cover-container .list[data-v-d883a22a]{width:100%}.load-refresh .cover-container .list .load-more[data-v-d883a22a]{font-size:%?20?%;text-align:center;color:#aaa;padding:%?16?%}',""]),t.exports=a},dbfb:function(t,a,e){"use strict";e.r(a);var n=e("59a6"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},f010:function(t,a,e){"use strict";e.r(a);var n=e("7c42"),o=e("dbfb");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("ccd7");var r,s=e("f0c5"),l=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"b66f8ae8",null,!1,n["a"],r);a["default"]=l.exports}}]);