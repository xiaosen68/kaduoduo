(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-banking-fenrunlist"],{"0885":function(t,e,a){var n=a("17b4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("12554f78",n,!0,{sourceMap:!1,shadowMode:!1})},"10b3":function(t,e,a){"use strict";var n={loadRefresh:a("21eb").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fenrun-box"},[a("v-uni-view",{staticClass:"card-list"},[a("load-refresh",{ref:"loadRefresh",attrs:{heightReduce:10,backgroundCover:"#F3F5F5",pageNo:t.currPage,totalPageNo:t.totalPage},on:{loadMore:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)},refresh:function(e){arguments[0]=e=t.$handleEvent(e),t.refresh.apply(void 0,arguments)}}},[a("v-uni-view",{attrs:{slot:"content-list"},slot:"content-list"},[a("router-link",{staticClass:"fen-item-box",attrs:{to:"{name:fenrunstatus}"}},[a("v-uni-view",{staticClass:"date-box"},[a("v-uni-text",{staticClass:"date1"},[t._v("五月")]),a("v-uni-view",[t._v("05-16")])],1),a("v-uni-view",{staticClass:"fen-state"},[a("v-uni-text",{staticClass:"fen1"},[t._v("+0.22")]),a("v-uni-view",[t._v("来自尾号"),a("v-uni-text",[t._v("6345")]),t._v("的收益")],1)],1)],1)],1)],1)],1)],1)},r=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}))},"17b4":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.load-refresh[data-v-99d30d3c]{margin:0;padding:0;width:100%}.load-refresh .refresh[data-v-99d30d3c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?120?%;width:100%}.load-refresh .hollow-dots-spinner[data-v-99d30d3c], .load-refresh .hollow-dots-spinner *[data-v-99d30d3c]{box-sizing:border-box}.load-refresh .hollow-dots-spinner[data-v-99d30d3c]{height:%?100?%;width:100%}.load-refresh .hollow-dots-spinner .dot[data-v-99d30d3c]{width:15px;height:15px;margin:0 calc(15px / 2);border:calc(15px / 5) solid #04c4c4;border-radius:50%;float:left;-webkit-transform:scale(0);transform:scale(0);-webkit-animation:hollow-dots-spinner-animation-data-v-99d30d3c 1s ease infinite 0ms;animation:hollow-dots-spinner-animation-data-v-99d30d3c 1s ease infinite 0ms}.load-refresh .hollow-dots-spinner .dot[data-v-99d30d3c]:nth-child(1){-webkit-animation-delay:calc(.3s * 1);animation-delay:calc(.3s * 1)}.load-refresh .hollow-dots-spinner .dot[data-v-99d30d3c]:nth-child(2){-webkit-animation-delay:calc(.3s * 2);animation-delay:calc(.3s * 2)}.load-refresh .hollow-dots-spinner .dot[data-v-99d30d3c]:nth-child(3){-webkit-animation-delay:calc(.3s * 3);animation-delay:calc(.3s * 3)}@-webkit-keyframes hollow-dots-spinner-animation-data-v-99d30d3c{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}@keyframes hollow-dots-spinner-animation-data-v-99d30d3c{50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{opacity:0}}.load-refresh .cover-container[data-v-99d30d3c]{width:100%;margin-top:%?-100?%}.load-refresh .cover-container .list[data-v-99d30d3c]{width:100%}.load-refresh .cover-container .list .load-more[data-v-99d30d3c]{font-size:%?20?%;text-align:center;color:#aaa;padding:%?16?%}',""]),t.exports=e},"21eb":function(t,e,a){"use strict";a.r(e);var n=a("38c4"),o=a("83ae");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("a33a");var i,s=a("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"99d30d3c",null,!1,n["a"],i);e["default"]=c.exports},"38c4":function(t,e,a){"use strict";var n,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"load-refresh"},[a("v-uni-view",{staticClass:"refresh hollow-dots-spinner"},[a("v-uni-view",{staticClass:"dot",style:[{animationPlayState:t.playState}]}),a("v-uni-view",{staticClass:"dot",style:[{animationPlayState:t.playState}]}),a("v-uni-view",{staticClass:"dot",style:[{animationPlayState:t.playState}]})],1),a("v-uni-view",{staticClass:"cover-container",style:[{background:t.backgroundCover,transform:t.coverTransform,transition:t.coverTransition}],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.coverTouchend.apply(void 0,arguments)}}},[a("v-uni-scroll-view",{staticClass:"list",style:t.getHeight,attrs:{"scroll-y":!0,"show-scrollbar":"true"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._t("content-list"),a("v-uni-view",{staticClass:"load-more"},[t._v(t._s(t.loadText))])],2)],1)],1)},r=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}))},6319:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=0,o=0,r=!0,i={name:"loadRefresh",props:{heightReduce:{type:Number,default:0},backgroundCover:{type:String,default:"white"},pageNo:{type:Number,default:0},totalPageNo:{type:Number,default:0}},data:function(){return{hasMore:!0,moving:!1,refresh:!1,loading:!1,coverTransform:"translateY(0px)",coverTransition:"0s",playState:"paused"}},computed:{getHeight:function(){var t=uni.getSystemInfoSync().windowHeight-uni.upx2px(0+this.heightReduce);return"height: ".concat(t,"px;")},loadText:function(){var t=this.pageNo,e=this.totalPageNo,a=this.loading;return a?"加载中...":t<e?"上拉加载更多":"已经到底啦~"}},watch:{refresh:function(t){t&&this.$emit("refresh")}},methods:{loadMore:function(){var t=this.pageNo,e=this.totalPageNo;t<e&&(this.loading=!0,this.$emit("loadMore"))},loadOver:function(){this.loading=!1},coverTouchstart:function(t){!1!==r&&(this.coverTransition="transform .1s linear",n=t.touches[0].clientY,this.playState="running")},coverTouchmove:function(t){o=t.touches[0].clientY;var e=o-n;e<0?this.moving=!1:(this.moving=!0,e>=60&&e<100&&(e=60),e>40&&e<=60&&(this.refresh=!0,this.coverTransform="translateY(".concat(e,"px)")))},coverTouchend:function(){var t=this;setTimeout((function(){!1!==t.moving&&(t.moving=!1,t.refresh=!1,t.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",t.coverTransform="translateY(0px)",t.playState="paused")}),800)}}};e.default=i},"68e2":function(t,e,a){"use strict";a.r(e);var n=a("ccff"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"7fc2":function(t,e,a){"use strict";a.r(e);var n=a("10b3"),o=a("68e2");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);a("c7b3");var i,s=a("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"34092466",null,!1,n["a"],i);e["default"]=c.exports},"83ae":function(t,e,a){"use strict";a.r(e);var n=a("6319"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"840b":function(t,e,a){var n=a("b36f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("6f49d4e9",n,!0,{sourceMap:!1,shadowMode:!1})},a33a:function(t,e,a){"use strict";var n=a("0885"),o=a.n(n);o.a},b36f:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".fen-item-box[data-v-34092466]{padding:%?20?% %?40?%;\r\n\t/* height: 100upx; */background-color:#fff;margin-top:%?14?%}.date1[data-v-34092466]{font-size:%?46?%;font-weight:600}.date-box[data-v-34092466]{display:inline-block;width:%?200?%}.fen-state[data-v-34092466]{display:inline-block;width:%?440?%}.fen1[data-v-34092466]{font-size:%?46?%;color:#f50}",""]),t.exports=e},c7b3:function(t,e,a){"use strict";var n=a("840b"),o=a.n(n);o.a},ccff:function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("21eb")),r={components:{loadRefresh:o.default},data:function(){return{list:[],currPage:1,totalPage:1}},methods:{loadMore:function(){console.log("loadMore"),this.$refs.loadRefresh.loadOver()},refresh:function(){console.log("refresh")}}};e.default=r}}]);