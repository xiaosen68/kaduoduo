(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-banking-gmbilldetial"],{3388:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".billdetial-box[data-v-4f425129]{min-height:94vh ;border:%?12?% solid #f4f8fb;border-bottom:none;font-size:%?28?%}.goods-item[data-v-4f425129]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?20?%;\n\t/* border:12upx solid #f4f8fb; */border-bottom:%?12?% solid #f4f8fb;\n\t/* border-top: none; */font-size:%?24?%}.goods-pic[data-v-4f425129]{width:%?200?%;height:%?140?%}.goods-status[data-v-4f425129]{width:%?400?%;text-align:left;line-height:%?40?%}.goods-price[data-v-4f425129]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?12?% solid #f4f8fb}.goods-ft[data-v-4f425129]{font-size:%?24?%}.goos-ft-num[data-v-4f425129]{font-size:%?28?%}.goods-price-item[data-v-4f425129]{width:%?200?%;text-align:center}.bill-type[data-v-4f425129]{padding:%?20?%;border-bottom:%?12?% solid #f4f8fb}.bill-types[data-v-4f425129]{padding-left:%?30?%;font-weight:700}.deal-box[data-v-4f425129]{padding:%?20?%;border-bottom:%?12?% solid #f4f8fb}.deal-item[data-v-4f425129]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?2?% solid #f4f8fb;line-height:%?28?%;padding:%?20?%}.deal-detial[data-v-4f425129]{text-align:right}.popupCenter-box[data-v-4f425129]{width:%?400?%;padding:%?40?%;text-align:center;-webkit-border-radius:%?20?%;border-radius:%?20?%}.shop-center-box[data-v-4f425129]{min-height:90vh;background-color:#f4f8fb}",""]),t.exports=i},"48af":function(t,i,e){"use strict";e.r(i);var a=e("7532"),s=e("e98f");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("b96a");var o,d=e("f0c5"),l=Object(d["a"])(s["default"],a["b"],a["c"],!1,null,"4f425129",null,!1,a["a"],o);i["default"]=l.exports},7532:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={uniPopup:e("714b").default},s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"billdetial-box"},["CUSTOM_ORDER"!==t.datas.orderType?e("v-uni-view",{staticClass:"goods-list"},t._l(t.datas.orderList,(function(i){return e("v-uni-view",{staticClass:"goods-item"},[e("v-uni-image",{staticClass:"goods-pic",attrs:{src:i.productUrl,mode:""}}),e("v-uni-view",{staticClass:"goods-status"},[e("v-uni-view",{},[t._v(t._s(i.productName))]),e("v-uni-view",{},[t._v("价格:"+t._s(i.transactionPrice*i.discount))])],1),e("v-uni-view",{staticClass:"goods-num"},[t._v(t._s(i.payamount))])],1)})),1):t._e(),e("v-uni-view",{staticClass:"goods-price"},[e("v-uni-view",{staticClass:"goods-price-item"},[e("v-uni-view",{staticClass:"goods-ft"},[t._v("商品总价")]),e("v-uni-text",{staticClass:"goos-ft-num"},[t._v(t._s(t.datas.totalTransactionPrice))])],1),e("v-uni-view",{staticClass:"goods-price-item"},[e("v-uni-view",{staticClass:"goods-ft"},[t._v("支付金额")]),e("v-uni-text",{staticClass:"goos-ft-num"},[t._v(t._s(t.datas.totalTransactionPrice))])],1)],1),e("v-uni-view",{staticClass:"bill-type"},[e("v-uni-view",{staticClass:"deal-item"},[e("v-uni-text",[t._v("订单类型:")]),e("v-uni-text",{staticClass:"bill-types"},[t._v(t._s(t._f("typefilter")(t.datas.orderType)))])],1),e("v-uni-view",{staticClass:"deal-item"},[e("v-uni-view",{staticClass:"deal-title"},[t._v("订单编号")]),e("v-uni-view",{staticClass:"deal-detial",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.copyFn(t.datas.orderNo)}}},[t._v(t._s(t.datas.orderNo))])],1)],1),e("v-uni-view",{staticClass:"deal-box"},[e("v-uni-view",{staticClass:"deal-item"},[e("v-uni-view",{staticClass:"deal-title"},[t._v("支付状态")]),e("v-uni-view",{staticClass:"deal-detial"},[t._v("预授权中")])],1),e("v-uni-view",{staticClass:"deal-item"},[e("v-uni-view",{staticClass:"deal-title"},[t._v("预授权完成时间")]),e("v-uni-view",{staticClass:"deal-detial"},[t._v(t._s(t._f("datafilter")(t.datas.finishDate)))])],1),e("v-uni-view",{staticClass:"deal-item"},[e("v-uni-view",{staticClass:"deal-title"},[t._v("创建时间")]),e("v-uni-view",{staticClass:"deal-detial"},[t._v(t._s(t.datas.orderTime))])],1),e("v-uni-view",{staticClass:"deal-item"},[e("v-uni-view",{staticClass:"deal-title"},[t._v("交易单号")]),e("v-uni-view",{staticClass:"deal-detial"},[t._v(t._s(t.datas.payNo))])],1),e("v-uni-view",{staticClass:"deal-item"},[e("v-uni-view",{staticClass:"deal-title"},[t._v("商户号")]),e("v-uni-view",{staticClass:"deal-detial"},[t._v(t._s(t.datas.merchId))])],1)],1),e("uni-popup",{ref:"popup",attrs:{type:"center"}},[e("v-uni-view",{staticClass:"popupCenter-box"},[t._v(t._s(t.popupCenterMessage))])],1)],1)},n=[]},9056:function(t,i,e){"use strict";e("fb6a"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{datas:"",popupCenterMessage:""}},onLoad:function(){this.datas=JSON.parse(this.$Route.query.states)},methods:{copyFn:function(t){}},filters:{datafilter:function(t){return t.slice(0,4)+"-"+t.slice(4,6)+"-"+t.slice(6,8)},typefilter:function(t){return"MEMBER_PLUS"==t?"会员PLUS":"EXPRESS_PAYMENT"==t?"快捷支付":"CARD_COUPON_SPACE"==t?"卡券空间":"CONSUMPTION_ZONE"==t?"消费专区":"CUSTOM_ORDER"==t?"扫码支付":void 0}}};i.default=a},b697:function(t,i,e){var a=e("3388");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("5589a900",a,!0,{sourceMap:!1,shadowMode:!1})},b96a:function(t,i,e){"use strict";var a=e("b697"),s=e.n(a);s.a},e98f:function(t,i,e){"use strict";e.r(i);var a=e("9056"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a}}]);