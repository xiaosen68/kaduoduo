(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-myinfo"],{"5abf":function(t,i,e){var n=e("a1ee");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("1f1e6148",n,!0,{sourceMap:!1,shadowMode:!1})},"821d":function(t,i,e){"use strict";var n=e("5abf"),a=e.n(n);a.a},"90c7":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"myinfo-box"},[e("v-uni-view",{staticClass:"myinfo-item"},[e("v-uni-text",{staticClass:"myinfo-item-title"},[t._v("真实姓名")]),e("v-uni-text",[t._v(t._s(t.infoData.realName))])],1),e("v-uni-view",{staticClass:"myinfo-item"},[e("v-uni-text",{staticClass:"myinfo-item-title"},[t._v("手机号")]),e("v-uni-text",[t._v(t._s(t.infoData.phone))])],1),e("v-uni-view",{staticClass:"myinfo-item"},[e("v-uni-text",{staticClass:"myinfo-item-title"},[t._v("系统编号")]),e("v-uni-text",[t._v(t._s(t.infoData.userId))])],1),e("v-uni-view",{staticClass:"myinfo-item"},[e("v-uni-text",{staticClass:"myinfo-item-title"},[t._v("注册日期")]),e("v-uni-text",[t._v(t._s(t.infoData.registerDate))])],1),e("v-uni-view",{staticClass:"myinfo-item"},[e("v-uni-text",{staticClass:"myinfo-item-title"},[t._v("等级")]),e("v-uni-text",[t._v(t._s(t.infoData.userLevelName))])],1),e("v-uni-view",{staticClass:"myinfo-item"},[e("v-uni-text",{staticClass:"myinfo-item-title"},[t._v("实名状态")]),e("v-uni-text",[t._v(t._s(t.infoData.isRealName))])],1),e("v-uni-view",{staticClass:"myinfo-item"},[e("v-uni-text",{staticClass:"myinfo-item-title"},[t._v("提现手续费")]),e("v-uni-text",[t._v(t._s(t.infoData.fee))])],1)],1)},s=[]},a1ee:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".myinfo-box[data-v-56db35d3]{padding-top:%?40?%}.myinfo-item[data-v-56db35d3]{font-size:%?36?%;padding:0 %?40?%;line-height:%?100?%;border-bottom:%?2?% solid #f4f8fb;display:-webkit-box;display:-webkit-flex;display:flex;color:#6f6f6f;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.myinfo-item-title[data-v-56db35d3]{color:#000}",""]),t.exports=i},d3bf:function(t,i,e){"use strict";e.r(i);var n=e("e67b"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},e056:function(t,i,e){"use strict";e.r(i);var n=e("90c7"),a=e("d3bf");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("821d");var o,f=e("f0c5"),u=Object(f["a"])(a["default"],n["b"],n["c"],!1,null,"56db35d3",null,!1,n["a"],o);i["default"]=u.exports},e67b:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{infoData:""}},onLoad:function(t){var i=this;uni.request({method:"GET",url:this.$baseUrl+"/api/v1/pri/my/myInfoData",data:{},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(t){console.log(t),0==t.data.code&&(i.infoData=t.data.data)},complete:function(t){console.log(t)}})},methods:{}};i.default=n}}]);