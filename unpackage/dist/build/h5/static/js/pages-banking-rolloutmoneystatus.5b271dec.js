(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-banking-rolloutmoneystatus"],{"0b4c":function(t,s,i){"use strict";i("fb6a"),Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={components:{},data:function(){return{turnoverOrder:"",rollStatus:""}},onLoad:function(){var t=this;this.turnoverOrder=this.$Route.query.id,uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/getUserTurnoverByOrderNo",data:{orderNo:this.turnoverOrder},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(s){console.log(s),0==s.data.code&&(t.rollStatus=s.data.data)}})},methods:{},filters:{cardFilters:function(t){return t.slice(0,4)+"*********"+t.slice(-4)},stateFilter:function(t){return"NO_WITHDRAWAL"===t?"未提现":"TO_WITHDRAW_CASH"===t?"已提现":"UNABLE_TO_WITHDRAW_CASH"===t?"不可提现":"REQUEST_FAILED"===t?"请求失败":"PROCESSING"===t?"受理中":void 0}}};s.default=a},"0e11":function(t,s,i){var a=i("4120");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("1b3cd1e8",a,!0,{sourceMap:!1,shadowMode:!1})},4120:function(t,s,i){var a=i("24fb");s=a(!1),s.push([t.i,".status-box[data-v-7705735e]{padding:%?40?% %?20?%}.status-title[data-v-7705735e]{text-align:center;font-size:%?30?%;font-weight:600;padding-bottom:%?40?%}.status-item[data-v-7705735e]{padding:0 %?20?%;line-height:%?60?%\n\t/* border-bottom:2upx solid #A3A3A3 ; */}.status-item-title[data-v-7705735e]{display:inline-block;width:%?200?%;font-size:%?28?%}.status-item-status[data-v-7705735e]{display:inline-block;width:%?400?%;font-size:%?28?%}",""]),t.exports=s},"48d9":function(t,s,i){"use strict";i.r(s);var a=i("0b4c"),e=i.n(a);for(var u in a)"default"!==u&&function(t){i.d(s,t,(function(){return a[t]}))}(u);s["default"]=e.a},"639c":function(t,s,i){"use strict";i.r(s);var a=i("e2ac"),e=i("48d9");for(var u in e)"default"!==u&&function(t){i.d(s,t,(function(){return e[t]}))}(u);i("af7d");var n,r=i("f0c5"),v=Object(r["a"])(e["default"],a["b"],a["c"],!1,null,"7705735e",null,!1,a["a"],n);s["default"]=v.exports},af7d:function(t,s,i){"use strict";var a=i("0e11"),e=i.n(a);e.a},e2ac:function(t,s,i){"use strict";var a;i.d(s,"b",(function(){return e})),i.d(s,"c",(function(){return u})),i.d(s,"a",(function(){return a}));var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",{staticClass:"status-box"},[i("v-uni-view",{staticClass:"status-title"},[t._v("提现详情")]),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现订单号:")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.turnover_order))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现金额:")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.turnover_kou_amount)+" 元")])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("消费金额:")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.turnover_amount)+" 元")])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("消费费率:")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.rate))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("营业额来源:")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.turnover_reason))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("消费时间")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.turnover_time))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现时间")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.withdrawn_time))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("更新时间")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.update_time))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现状态")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t._f("stateFilter")(t.rollStatus.turnover_state)))])],1)],1)},u=[]}}]);