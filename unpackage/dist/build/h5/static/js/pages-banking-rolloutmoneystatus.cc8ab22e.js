(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-banking-rolloutmoneystatus"],{"0b4c":function(t,s,i){"use strict";i("fb6a"),Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={components:{},data:function(){return{rollId:"",rollStatus:""}},onLoad:function(){var t=this;this.rollId=this.$Route.query.id,uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/getWithdrawalAmountById",data:{id:this.rollId},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(s){console.log(s),0==s.data.code&&(t.rollStatus=s.data.data)}})},methods:{},filters:{cardFilters:function(t){return t.slice(0,4)+"*********"+t.slice(-4)},stateFilter:function(t){return"REFUSE"===t?"拒绝":"PAYMENT_FAILED"===t?"打款失败":"SUCCESSFUL_PAY"===t?"打款成功":"PAYMENT_IN_PROGRESS"===t?"打款中":"ACCEPTED"===t?"受理中":void 0}}};s.default=a},"20c3":function(t,s,i){"use strict";var a=i("6b85"),e=i.n(a);e.a},"48d9":function(t,s,i){"use strict";i.r(s);var a=i("0b4c"),e=i.n(a);for(var u in a)"default"!==u&&function(t){i.d(s,t,(function(){return a[t]}))}(u);s["default"]=e.a},"639c":function(t,s,i){"use strict";i.r(s);var a=i("c341"),e=i("48d9");for(var u in e)"default"!==u&&function(t){i.d(s,t,(function(){return e[t]}))}(u);i("20c3");var n,l=i("f0c5"),o=Object(l["a"])(e["default"],a["b"],a["c"],!1,null,"356513b4",null,!1,a["a"],n);s["default"]=o.exports},"6b85":function(t,s,i){var a=i("d0d0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("1a1ee9a4",a,!0,{sourceMap:!1,shadowMode:!1})},c341:function(t,s,i){"use strict";var a;i.d(s,"b",(function(){return e})),i.d(s,"c",(function(){return u})),i.d(s,"a",(function(){return a}));var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",{staticClass:"status-box"},[i("v-uni-view",{staticClass:"status-title"},[t._v("提现详情")]),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现金额:")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.frozen_amount)+" 元")])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现手续费:")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.fee)+".00元/笔")])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("剩余余额")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.amount)+" 元")])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现时间")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.create_time))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现银行卡")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.cash_out_bank))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现银行卡号")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t._f("cardFilters")(t.rollStatus.cash_out_bank_no)))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("提现状态")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t._f("stateFilter")(t.rollStatus.state)))])],1),i("v-uni-view",{staticClass:"status-item"},[i("v-uni-view",{staticClass:"status-item-title"},[t._v("状态更新时间")]),i("v-uni-view",{staticClass:"status-item-status"},[t._v(t._s(t.rollStatus.update_time))])],1)],1)},u=[]},d0d0:function(t,s,i){var a=i("24fb");s=a(!1),s.push([t.i,".status-box[data-v-356513b4]{padding:%?40?% %?20?%}.status-title[data-v-356513b4]{text-align:center;font-size:%?30?%;font-weight:600;padding-bottom:%?40?%}.status-item[data-v-356513b4]{padding:0 %?20?%;line-height:%?60?%\n\t/* border-bottom:2upx solid #A3A3A3 ; */}.status-item-title[data-v-356513b4]{display:inline-block;width:%?200?%;font-size:%?28?%}.status-item-status[data-v-356513b4]{display:inline-block;width:%?400?%;font-size:%?28?%}",""]),t.exports=s}}]);