(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-banking-fenrun"],{"08d1":function(e,t,n){var a=n("4187");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("421d29d9",a,!0,{sourceMap:!1,shadowMode:!1})},"1a33":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={components:{},data:function(){return{cardtype:!0,revenueAmount:{}}},onLoad:function(){var e=this;uni.request({method:"GET",url:this.$baseUrl+"/api/v1/pri/my/myRevenueAmount",data:{},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(t){console.log(t),0==t.data.code?(e.revenueAmount=t.data.data,console.log(e.revenueAmount)):-1==t.data.code?e.popupMessage=t.data.msg:console.log(t)}})},methods:{backFn:function(){this.$Router.back(1)},lookList:function(){this.$Router.push({name:"fenrunlist"})}}};t.default=a},"2edf":function(e,t,n){"use strict";n.r(t);var a=n("8265"),i=n("9bc6");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("e3ce");var u,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"580b4533",null,!1,a["a"],u);t["default"]=r.exports},4187:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".home-box1[data-v-580b4533]{padding-top:0;background-color:#d41c26}.fenrun-box[data-v-580b4533]{\n\t\t/* padding-top: var(--status-bar-height); */}.home-nav[data-v-580b4533]{border:none;\n\t\t/* padding-top: var(--status-bar-height); */padding:%?40?% %?20?% %?20?% %?20?%;font-size:%?32?%;color:#fff;background-color:#d41c26;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.home-nav-item[data-v-580b4533]{width:%?140?%;text-align:center;font-size:%?24?%;line-height:1em}.home-nav-item1[data-v-580b4533]{text-align:left}.home-title[data-v-580b4533]{font-size:20px;line-height:1em}.fenrun-num-box[data-v-580b4533]{width:100%;\n\t/* height: 200upx; */background-color:#d91829;position:relative;\n\t/* top: -4upx; */padding-top:%?40?%;padding-bottom:%?60?%}.yesterday-fenrun[data-v-580b4533],.today-fenrun[data-v-580b4533]{display:inline-block;width:49%;\n\t/* height: 100upx; */text-align:center;color:#fff;font-size:%?24?%}.today-fenrun[data-v-580b4533]{border-left:%?2?% solid #f4f8fb}.fenrun-money[data-v-580b4533]{font-size:%?40?%;line-height:2em}.kzfenrun-box[data-v-580b4533]{width:100%;\n\t/* height: 600upx; */padding-top:%?200?%;background-color:#f7f7f7;text-align:center;font-size:%?32?%}.kzfr-num[data-v-580b4533]{font-size:%?60?%;line-height:2em}.roll-out-btn[data-v-580b4533]{display:inline-block;height:%?60?%;line-height:%?60?%;width:%?140?%;padding:%?10?% %?20?%;margin-top:%?20?%;border:%?2?% solid #b7babe;background-color:#fff;-webkit-border-radius:%?60?%;border-radius:%?60?%}.circle[data-v-580b4533]{width:100%;height:%?160?%;margin-top:%?100?%;-webkit-border-radius:50% 50% 0 0;border-radius:50% 50% 0 0;background-color:#fff}.all-fenrun-box[data-v-580b4533]{font-size:%?40?%;text-align:center}.all-fenrun-num[data-v-580b4533]{font-size:%?60?%}",""]),e.exports=t},8265:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uniIcons:n("73a6").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fenrun-box"},[n("v-uni-view",{staticClass:"home-box1"},[n("v-uni-view",{staticClass:"home-nav"},[n("uni-icons",{staticClass:"home-nav-item home-nav-item1",attrs:{type:"back",color:"#ffffff",size:"24"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.backFn.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"home-title"},[e._v("佣金")]),n("v-uni-view",{staticClass:" home-nav-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lookList.apply(void 0,arguments)}}},[e._v("佣金明细")])],1),n("v-uni-view",{staticClass:"fenrun-num-box"},[n("v-uni-view",{staticClass:"yesterday-fenrun"},[n("v-uni-text",{staticClass:"fenrun-money"},[e._v(e._s(e.revenueAmount.theDayBeforeRevenueAmount))]),n("v-uni-view",{},[e._v("昨日佣金(元)")])],1),n("v-uni-view",{staticClass:"today-fenrun"},[n("v-uni-text",{staticClass:"fenrun-money"},[e._v(e._s(e.revenueAmount.sameDayRevenueAmount))]),n("v-uni-view",{},[e._v("今日佣金(元)")])],1)],1)],1),n("v-uni-view",{staticClass:"kzfenrun-box"},[n("v-uni-text",[e._v("未提现佣金(元)")]),n("v-uni-view",{staticClass:"kzfr-num"},[e._v(e._s(e.revenueAmount.revenue))]),n("v-uni-view",{staticClass:"circle"})],1),n("v-uni-view",{staticClass:"all-fenrun-box"},[n("v-uni-text",{staticClass:"all-fenrun-num"},[e._v(e._s(e.revenueAmount.sumRevenue))]),n("v-uni-view",{},[e._v("共累计佣金(元)")])],1)],1)},o=[]},"9bc6":function(e,t,n){"use strict";n.r(t);var a=n("1a33"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},e3ce:function(e,t,n){"use strict";var a=n("08d1"),i=n.n(a);i.a}}]);