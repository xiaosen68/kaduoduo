(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kuaijie-kaquankj3"],{"03a5":function(t,a,i){var n=i("3a4b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("07b91e49",n,!0,{sourceMap:!1,shadowMode:!1})},"28d3":function(t,a,i){t.exports=i.p+"static/img/yinlian.4ca7cab7.png"},3984:function(t,a,i){"use strict";i.r(a);var n=i("8548"),e=i("60d1");for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);i("c55c");var o,b=i("f0c5"),r=Object(b["a"])(e["default"],n["b"],n["c"],!1,null,"42b6eabb",null,!1,n["a"],o);a["default"]=r.exports},"3a4b":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".consume-box[data-v-42b6eabb]{width:100%;min-height:92vh;background-color:#f4f8fb;\n\t/* text-align: center; */padding-top:%?30?%}.credit-box[data-v-42b6eabb]{width:%?600?%;\n\t/* height: 400upx; */border-radius:%?20?%;margin:%?20?% auto;padding:%?20?%;background-color:#3f51b5;color:#fff;font-size:%?32?%;font-weight:600}.deposit-box[data-v-42b6eabb]{width:%?600?%;border-radius:%?20?%;margin:%?20?% auto;padding:%?20?%;background-color:#a3a3a3;color:#fff;font-size:%?32?%;font-weight:600}.bank-icon[data-v-42b6eabb]{display:inline-block;width:%?100?%;height:%?100?%;border-radius:50%;background-color:#fff;text-align:center;line-height:%?90?%;vertical-align:middle}.bank-img[data-v-42b6eabb]{width:%?80?%;height:%?80?%;vertical-align:middle}.bank-name-box[data-v-42b6eabb]{padding-left:%?20?%;\n\t/* padding-bottom: 40upx; */display:inline-block;width:%?200?%;vertical-align:middle}.bank-name[data-v-42b6eabb]{font-size:%?24?%}.bank-num[data-v-42b6eabb]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?600?%;margin:%?20?% auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.bank-class[data-v-42b6eabb]{display:inline-block;width:%?280?%;text-align:right}.next-btn[data-v-42b6eabb]{height:%?80?%;width:%?600?%;text-align:center;margin:0 auto;line-height:%?80?%;border-radius:%?80?% %?80?%;border:solid %?2?% #a3a3a3;background-color:#d71518;color:#fff}.popupbtn[data-v-42b6eabb]{width:%?400?%;margin-top:%?30?%}.btn-box[data-v-42b6eabb]{margin-top:%?90?%}.popupCenter-box[data-v-42b6eabb]{width:%?500?%;padding:%?40?%;text-align:center;border-radius:%?20?%}.sign-input[data-v-42b6eabb]{display:inline-block;width:%?200?%;line-height:%?60?%;height:%?96?%;vertical-align:middle;border-bottom:#9fa0a0 %?2?% solid}.yanz-btn[data-v-42b6eabb]{display:inline-block;vertical-align:bottom;width:%?160?%;margin-left:%?40?%;height:%?76?%;line-height:%?76?%;font-size:%?28?%;padding:0 %?20?%}",""]),t.exports=a},"3f9e":function(t,a,i){"use strict";var n=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(i("714b")),s={components:{uniPopup:e.default},data:function(){return{buyList:[],allGoodsjs:0,allGoodscj:0,sendVerify:"获取验证码",verifyDisabled:!1,verifyNum:""}},onLoad:function(){},methods:{sendyanzheng:function(){var t=this;this.sendVerify=60,this.verifyDisabled=!0;var a="";a=setInterval((function(){t.sendVerify>0?t.sendVerify--:(t.sendVerify="重新获取验证码",clearInterval(a),t.verifyDisabled=!1)}),1e3)},payFn:function(){var t=this;t.$refs.popupcenter.open()},payBtnFn:function(){this.$Router.push({name:"state"})}}};a.default=s},"60d1":function(t,a,i){"use strict";i.r(a);var n=i("3f9e"),e=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);a["default"]=e.a},8548:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return n}));var n={uniPopup:i("714b").default},e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"consume-box"},[n("v-uni-view",{staticClass:"credit-box"},[n("v-uni-view",{staticClass:"bank-icon"},[n("v-uni-image",{staticClass:"bank-img",attrs:{src:i("28d3").replace(/^\./,""),mode:""}})],1),n("v-uni-view",{staticClass:"bank-name-box"},[n("v-uni-view",[t._v("招商银行")]),n("v-uni-text",{staticClass:"bank-name"},[t._v("招商银行信用卡")])],1),n("v-uni-view",{staticClass:"bank-class"},[t._v("支付信用卡")]),n("v-uni-view",{staticClass:"bank-num"},[n("v-uni-text",[t._v("6233")]),n("v-uni-text",[t._v("****")]),n("v-uni-text",[t._v("****")]),n("v-uni-text",[t._v("8898")])],1)],1),n("v-uni-view",{staticClass:"deposit-box"},[n("v-uni-view",{staticClass:"bank-icon"},[n("v-uni-image",{staticClass:"bank-img",attrs:{src:i("28d3").replace(/^\./,""),mode:""}})],1),n("v-uni-view",{staticClass:"bank-name-box"},[n("v-uni-view",[t._v("招商银行")]),n("v-uni-text",{staticClass:"bank-name"},[t._v("招商银行储蓄卡")])],1),n("v-uni-view",{staticClass:"bank-class"},[t._v("寄售到账储蓄卡")]),n("v-uni-view",{staticClass:"bank-num"},[n("v-uni-text",[t._v("6233")]),n("v-uni-text",[t._v("****")]),n("v-uni-text",[t._v("****")]),n("v-uni-text",[t._v("8898")])],1)],1),n("v-uni-view",{staticClass:"btn-box"},[n("v-uni-view",{staticClass:"next-btn",attrs:{type:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.payFn.apply(void 0,arguments)}}},[t._v("确认支付")])],1),n("uni-popup",{ref:"popupcenter",attrs:{type:"center"}},[n("v-uni-view",{staticClass:"popupCenter-box"},[n("v-uni-view",{staticClass:"yanzhen-title"},[n("v-uni-input",{staticClass:" sign-input yanz-input",attrs:{type:"number",number:!0,maxlength:"6",placeholder:"输入验证码"},model:{value:t.verifyNum,callback:function(a){t.verifyNum=a},expression:"verifyNum"}}),n("v-uni-button",{staticClass:"yanz-btn",attrs:{type:"primary",plain:"true",disabled:t.verifyDisabled},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.sendyanzheng()}}},[t._v(t._s(t.sendVerify))])],1),n("v-uni-view",{staticClass:"next-btn popupbtn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.payBtnFn.apply(void 0,arguments)}}},[t._v("购买并寄售")])],1)],1)],1)},s=[]},c55c:function(t,a,i){"use strict";var n=i("03a5"),e=i.n(n);e.a}}]);