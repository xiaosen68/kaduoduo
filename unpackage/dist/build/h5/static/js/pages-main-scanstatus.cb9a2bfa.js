(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-scanstatus"],{"017f":function(a,t,s){"use strict";var e;s.d(t,"b",(function(){return n})),s.d(t,"c",(function(){return i})),s.d(t,"a",(function(){return e}));var n=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("v-uni-view",{staticClass:"scanstatus-box"},[s("v-uni-view",{staticClass:"scanstatus-money"},[s("v-uni-view",{staticClass:"scanstatus-name"},[a._v(a._s(a.datas.statusMsg))]),s("v-uni-text",{staticClass:"money-icon"},[a._v("￥")]),a._v(a._s(a.moneyNum)),s("v-uni-view",{staticClass:"scanstatus-status"},[a._v("交易成功")])],1),s("v-uni-view",{staticClass:"scanstatus-list"},[s("v-uni-view",{staticClass:"scanstatus-item"},[s("v-uni-view",{staticClass:"scanstatus-title"},[a._v("支付状态：")]),s("v-uni-view",{staticClass:"scanstatus-value"},[a._v(a._s(a.datas.statusMsg))])],1),s("v-uni-view",{staticClass:"scanstatus-item"},[s("v-uni-view",{staticClass:"scanstatus-title"},[a._v("支付时间：")]),s("v-uni-view",{staticClass:"scanstatus-value"},[a._v(a._s(a.datas.orderTime))])],1),s("v-uni-view",{staticClass:"scanstatus-item"},[s("v-uni-view",{staticClass:"scanstatus-title"},[a._v("订单编号：")]),s("v-uni-view",{staticClass:"scanstatus-value"},[a._v(a._s(a.datas.orderNo))])],1),s("v-uni-view",{staticClass:"scanstatus-item"},[s("v-uni-view",{staticClass:"scanstatus-title"},[a._v("商户号：")]),s("v-uni-view",{staticClass:"scanstatus-value"},[a._v(a._s(a.datas.merchId))])],1)],1)],1)},i=[]},"0f9a":function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={components:{},data:function(){return{moneyNum:"",datas:""}},onLoad:function(){this.datas=JSON.parse(this.$Route.query.data)},methods:{},computed:{}};t.default=e},"1cba":function(a,t,s){"use strict";var e=s("75bc"),n=s.n(e);n.a},"65ad":function(a,t,s){"use strict";s.r(t);var e=s("0f9a"),n=s.n(e);for(var i in e)"default"!==i&&function(a){s.d(t,a,(function(){return e[a]}))}(i);t["default"]=n.a},"75bc":function(a,t,s){var e=s("bfc6");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var n=s("4f06").default;n("13dfa030",e,!0,{sourceMap:!1,shadowMode:!1})},b72d:function(a,t,s){"use strict";s.r(t);var e=s("017f"),n=s("65ad");for(var i in n)"default"!==i&&function(a){s.d(t,a,(function(){return n[a]}))}(i);s("1cba");var c,u=s("f0c5"),v=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"c7e15aae",null,!1,e["a"],c);t["default"]=v.exports},bfc6:function(a,t,s){var e=s("24fb");t=e(!1),t.push([a.i,"uni-page-body[data-v-c7e15aae]{height:100%\n}.scanstatus-box[data-v-c7e15aae]{height:100%;background-color:#f3f5f5}.money-icon[data-v-c7e15aae]{font-size:%?60?%\n\t\t/* font-weight: 600; */}.scanstatus-money[data-v-c7e15aae]{padding-top:%?80?%;text-align:center;font-size:%?80?%;font-weight:600}.scanstatus-name[data-v-c7e15aae],.scanstatus-status[data-v-c7e15aae]{font-size:%?24?%}.scanstatus-list[data-v-c7e15aae]{margin:%?80?% %?20?% %?10?%;border-radius:%?20?%;min-height:%?700?%;padding:%?80?% 0;font-size:%?28?%;background-color:#fff}.scanstatus-item[data-v-c7e15aae]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% %?40?%}.scanstatus-title[data-v-c7e15aae]{width:%?160?%;color:#a3a3a3;text-align:right}",""]),a.exports=t}}]);