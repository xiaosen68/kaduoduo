(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kuaijie-kaquankj3"],{"03a5":function(t,i,a){var e=a("3a4b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("07b91e49",e,!0,{sourceMap:!1,shadowMode:!1})},"28d3":function(t,i,a){t.exports=a.p+"static/img/yinlian.4ca7cab7.png"},3984:function(t,i,a){"use strict";a.r(i);var e=a("8548"),n=a("60d1");for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("c55c");var o,r=a("f0c5"),b=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"42b6eabb",null,!1,e["a"],o);i["default"]=b.exports},"3a4b":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".consume-box[data-v-42b6eabb]{width:100%;min-height:92vh;background-color:#f4f8fb;\n\t/* text-align: center; */padding-top:%?30?%}.credit-box[data-v-42b6eabb]{width:%?600?%;\n\t/* height: 400upx; */-webkit-border-radius:%?20?%;border-radius:%?20?%;margin:%?20?% auto;padding:%?20?%;background-color:#3f51b5;color:#fff;font-size:%?32?%;font-weight:600}.deposit-box[data-v-42b6eabb]{width:%?600?%;-webkit-border-radius:%?20?%;border-radius:%?20?%;margin:%?20?% auto;padding:%?20?%;background-color:#a3a3a3;color:#fff;font-size:%?32?%;font-weight:600}.bank-icon[data-v-42b6eabb]{display:inline-block;width:%?100?%;height:%?100?%;-webkit-border-radius:50%;border-radius:50%;background-color:#fff;text-align:center;line-height:%?90?%;vertical-align:middle}.bank-img[data-v-42b6eabb]{width:%?80?%;height:%?80?%;vertical-align:middle}.bank-name-box[data-v-42b6eabb]{padding-left:%?20?%;\n\t/* padding-bottom: 40upx; */display:inline-block;width:%?200?%;vertical-align:middle}.bank-name[data-v-42b6eabb]{font-size:%?24?%}.bank-num[data-v-42b6eabb]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?600?%;margin:%?20?% auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.bank-class[data-v-42b6eabb]{display:inline-block;width:%?280?%;text-align:right}.next-btn[data-v-42b6eabb]{height:%?80?%;width:%?600?%;text-align:center;margin:0 auto;line-height:%?80?%;-webkit-border-radius:%?80?% %?80?%;border-radius:%?80?% %?80?%;border:solid %?2?% #a3a3a3;background-color:#d71518;color:#fff}.popupbtn[data-v-42b6eabb]{width:%?400?%;margin-top:%?30?%}.btn-box[data-v-42b6eabb]{margin-top:%?90?%}.popupCenter-box[data-v-42b6eabb]{width:%?500?%;padding:%?40?%;text-align:center;-webkit-border-radius:%?20?%;border-radius:%?20?%}.sign-input[data-v-42b6eabb]{display:inline-block;width:%?200?%;line-height:%?60?%;height:%?96?%;vertical-align:middle;border-bottom:#9fa0a0 %?2?% solid}.yanz-btn[data-v-42b6eabb]{display:inline-block;vertical-align:bottom;width:%?160?%;margin-left:%?40?%;height:%?76?%;line-height:%?76?%;font-size:%?28?%;padding:0 %?20?%}",""]),t.exports=i},"3f9e":function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("714b")),s={components:{uniPopup:n.default},data:function(){return{buyList:[],allGoodsjs:0,allGoodscj:0,sendVerify:"获取验证码",verifyDisabled:!1,verifyNum:""}},onLoad:function(){},methods:{sendyanzheng:function(){var t=this;this.sendVerify=60,this.verifyDisabled=!0;var i="";i=setInterval((function(){t.sendVerify>0?t.sendVerify--:(t.sendVerify="重新获取验证码",clearInterval(i),t.verifyDisabled=!1)}),1e3)},payFn:function(){var t=this;t.$refs.popupcenter.open()},payBtnFn:function(){this.$Router.push({name:"state"})}}};i.default=s},"60d1":function(t,i,a){"use strict";a.r(i);var e=a("3f9e"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},8548:function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var e={uniPopup:a("714b").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"consume-box"},[e("v-uni-view",{staticClass:"credit-box"},[e("v-uni-view",{staticClass:"bank-icon"},[e("v-uni-image",{staticClass:"bank-img",attrs:{src:a("28d3").replace(/^\./,""),mode:""}})],1),e("v-uni-view",{staticClass:"bank-name-box"},[e("v-uni-view",[t._v("招商银行")]),e("v-uni-text",{staticClass:"bank-name"},[t._v("招商银行信用卡")])],1),e("v-uni-view",{staticClass:"bank-class"},[t._v("支付信用卡")]),e("v-uni-view",{staticClass:"bank-num"},[e("v-uni-text",[t._v("6233")]),e("v-uni-text",[t._v("****")]),e("v-uni-text",[t._v("****")]),e("v-uni-text",[t._v("8898")])],1)],1),e("v-uni-view",{staticClass:"deposit-box"},[e("v-uni-view",{staticClass:"bank-icon"},[e("v-uni-image",{staticClass:"bank-img",attrs:{src:a("28d3").replace(/^\./,""),mode:""}})],1),e("v-uni-view",{staticClass:"bank-name-box"},[e("v-uni-view",[t._v("招商银行")]),e("v-uni-text",{staticClass:"bank-name"},[t._v("招商银行储蓄卡")])],1),e("v-uni-view",{staticClass:"bank-class"},[t._v("寄售到账储蓄卡")]),e("v-uni-view",{staticClass:"bank-num"},[e("v-uni-text",[t._v("6233")]),e("v-uni-text",[t._v("****")]),e("v-uni-text",[t._v("****")]),e("v-uni-text",[t._v("8898")])],1)],1),e("v-uni-view",{staticClass:"btn-box"},[e("v-uni-view",{staticClass:"next-btn",attrs:{type:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.payFn.apply(void 0,arguments)}}},[t._v("确认支付")])],1),e("uni-popup",{ref:"popupcenter",attrs:{type:"center"}},[e("v-uni-view",{staticClass:"popupCenter-box"},[e("v-uni-view",{staticClass:"yanzhen-title"},[e("v-uni-input",{staticClass:" sign-input yanz-input",attrs:{type:"number",number:!0,maxlength:"6",placeholder:"输入验证码"},model:{value:t.verifyNum,callback:function(i){t.verifyNum=i},expression:"verifyNum"}}),e("v-uni-button",{staticClass:"yanz-btn",attrs:{type:"primary",plain:"true",disabled:t.verifyDisabled},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sendyanzheng()}}},[t._v(t._s(t.sendVerify))])],1),e("v-uni-view",{staticClass:"next-btn popupbtn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.payBtnFn.apply(void 0,arguments)}}},[t._v("购买并寄售")])],1)],1)],1)},s=[]},c55c:function(t,i,a){"use strict";var e=a("03a5"),n=a.n(e);n.a}}]);