(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-kaquankj-kaquankj1"],{"3b45":function(t,i,a){"use strict";a.r(i);var e=a("a0fa"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"7e6d":function(t,i,a){"use strict";var e={uniIcons:a("5db6").default,uniPopup:a("fc58").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"consume-box"},[e("v-uni-view",{staticClass:"consume-main"},[e("v-uni-view",{staticClass:"consume-money"},[e("v-uni-view",{},[e("v-uni-image",{staticClass:"consume-yinlain",attrs:{src:a("9019"),mode:""}}),e("v-uni-text",{staticClass:"cm-gm"},[t._v("购买金额:￥"+t._s(t.allGoodscj))]),e("v-uni-text",{staticClass:"cm-gp"},[t._v("挂牌金额:￥"+t._s(t.allGoodsjs))])],1),e("v-uni-view",{staticClass:"cm-feilv"},[e("uni-icons",{attrs:{type:"help"}}),e("v-uni-text",{staticClass:"fl"},[t._v("费率:2.1%+1.00元")]),e("v-uni-text",{staticClass:"sxf"},[t._v("手续费:1元")])],1),e("v-uni-view",{staticClass:"kq-select"},[e("v-uni-text",{staticClass:"kq-title"},[t._v("支付信用卡：")]),e("v-uni-image",{staticClass:"bank-head-img",attrs:{src:a("a0c8")}}),e("v-uni-text",{staticClass:"con-bank-name"},[t._v("工商银行(9999)")]),e("v-uni-view",{staticClass:"loop-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open1.apply(void 0,arguments)}}},[t._v("变更"),e("uni-icons",{staticStyle:{color:"#3cb4f1"},attrs:{type:"loop"}})],1)],1),e("v-uni-view",{staticClass:"kq-select kq-select1"},[e("v-uni-text",{staticClass:"kq-title"},[t._v("寄售到账储蓄卡：")]),e("v-uni-image",{staticClass:"bank-head-img",attrs:{src:a("a0c8")}}),e("v-uni-text",{staticClass:"con-bank-name"},[t._v("工商银行(9999)")]),e("v-uni-view",{staticClass:"loop-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.open1.apply(void 0,arguments)}}},[t._v("变更"),e("uni-icons",{staticStyle:{color:"#3cb4f1"},attrs:{type:"loop"}})],1)],1),e("v-uni-button",{staticClass:"next-btn",attrs:{type:""},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.nextFn.apply(void 0,arguments)}}},[t._v("下一步")])],1)],1),e("uni-popup",{ref:"popup1",attrs:{type:"bottom"}},[e("v-uni-view",{staticClass:"bank-card-list"},[e("v-uni-view",{staticClass:"esc-btn"},[e("uni-icons",{staticClass:"close-btn",staticStyle:{"font-size":"50upx"},attrs:{type:"closeempty"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.closedia1.apply(void 0,arguments)}}}),t._v("选择信用卡"),e("v-uni-text",{staticClass:"add-card",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addcredit.apply(void 0,arguments)}}},[t._v("添加")])],1),e("v-uni-view",{staticClass:"bank-card-item"},[e("v-uni-image",{staticClass:"bank-item-head",attrs:{src:a("8c71"),mode:""}}),e("v-uni-view",{staticClass:"bank-card-name"},[e("v-uni-text",[t._v("广发银行")]),e("v-uni-text",[t._v("\\n")]),e("v-uni-text",[t._v("62**** **** **** 78")])],1)],1)],1)],1),e("uni-popup",{ref:"popupcenter2",attrs:{type:"center"}},[e("v-uni-view",{staticClass:"popupCenter-box"},[e("v-uni-view",{staticClass:"popup-title"},[t._v("请选择支付通道")]),e("v-uni-view",{staticClass:"popup-name"},[e("v-uni-image",{staticClass:"popup-icon",attrs:{src:a("9019"),mode:""}}),e("v-uni-view",{staticClass:" popup-name-status"},[e("v-uni-view",{staticClass:"popup-name-title"},[t._v("快捷TFT")]),e("v-uni-text",{staticClass:"popup-warning"},[t._v("提示：2小时内到账(不限日期，快速到账)")])],1)],1),e("v-uni-view",{staticClass:"pupou-tongdao"},[e("v-uni-view",{staticClass:"popup-td-item"},[e("v-uni-text",[t._v("单笔限额：")]),e("v-uni-text",[t._v("10元-2万元")])],1),e("v-uni-view",{staticClass:"popup-td-item"},[e("v-uni-text",[t._v("每日限额：")]),e("v-uni-text",[t._v("10元-2万元")])],1),e("v-uni-view",{staticClass:"popup-td-item"},[e("v-uni-text",[t._v("交易时间：")]),e("v-uni-text",[t._v("07:00:00-23:00:00")])],1),e("v-uni-view",{staticClass:"popup-td-item"},[e("v-uni-text",[t._v("交易费率：")]),e("v-uni-text",[t._v("10元-2万元")])],1),e("v-uni-view",{staticClass:"popup-td-item"},[e("v-uni-text",[t._v("手续费用：")]),e("v-uni-text",[t._v("10元-2万元")])],1),e("v-uni-view",{staticClass:"popup-td-item"},[e("v-uni-text",[t._v("实际到账：")]),e("v-uni-text",[t._v("10元-2万元")])],1)],1),e("v-uni-view",{staticClass:"popup-btn-box"},[e("v-uni-view",{staticClass:"popup-btn-one",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changetdFN.apply(void 0,arguments)}}},[t._v("更换通道")]),e("v-uni-view",{staticClass:"popup-btn-two",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.payFn.apply(void 0,arguments)}}},[t._v("确认支付")])],1)],1)],1)],1)},o=[];a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}))},"8c71":function(t,i,a){t.exports=a.p+"static/img/guangfa.f468c811.png"},9019:function(t,i,a){t.exports=a.p+"static/img/yinlian.4ca7cab7.png"},a0c8:function(t,i,a){t.exports=a.p+"static/img/gongshang.acc3eba5.png"},a0fa:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{buyList:[],allGoodsjs:0,allGoodscj:0,coverif:!1}},onLoad:function(){this.buyList=JSON.parse(this.$Route.query.buyList),this.allGoodsjs=this.$Route.query.allGoodsjs,this.allGoodscj=this.$Route.query.allGoodscj,console.log(this.buyList)},methods:{changetdFN:function(){this.$Router.push({name:"kaquankj2"})},payFn:function(){this.$Router.push({name:"kaquankj3"})},open1:function(){this.$refs.popup1.open()},closedia1:function(t){this.$refs.popup1.close()},nextFn:function(){this.$refs.popupcenter2.open()},addcredit:function(){this.$refs.popup1.close(),this.$Router.push({name:"addcredit"})}}};i.default=e},a328:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".consume-box[data-v-1506b30e]{width:100%;min-height:92vh;background-color:#f4f8fb;\n\t/* text-align: center; */padding-top:%?30?%}.consume-main[data-v-1506b30e]{background-color:#fff;width:%?700?%;\n\t/* height: 440upx; */margin:%?10?% auto;border-radius:%?20?%;padding:%?20?% 0;font-size:%?32?%;padding-bottom:%?60?%}.consume-yinlain[data-v-1506b30e]{width:%?80?%;height:%?60?%;vertical-align:middle}.consume-money[data-v-1506b30e]{line-height:%?60?%;width:%?640?%;padding:0 %?30?%}.cm-gm[data-v-1506b30e]{\n\t/* text-indent: 1em; */display:inline-block;width:%?270?%;padding-left:%?10?%}.cm-gp[data-v-1506b30e]{display:inline-block;width:%?280?%;text-align:right}.cm-feilv[data-v-1506b30e]{color:#a3a3a3;font-size:%?26?%;line-height:%?76?%;border-bottom:%?2?% solid #ebe7e7}.fl[data-v-1506b30e]{display:inline-block;width:%?290?%;padding-left:%?10?%}.sxf[data-v-1506b30e]{display:inline-block;width:%?300?%;text-align:right}.kq-select[data-v-1506b30e]{width:%?640?%;line-height:%?60?%;padding-top:%?60?%}.kq-select1[data-v-1506b30e]{padding-top:%?10?%;padding-bottom:%?40?%}.kq-title[data-v-1506b30e]{display:inline-block;font-size:%?24?%;width:%?200?%}.bank-head-img[data-v-1506b30e]{width:%?40?%;height:%?40?%;border-radius:50%;\n\t/* line-height: 100upx; */vertical-align:middle}.con-bank-static[data-v-1506b30e]{display:inline-block;padding:0 %?20?%;line-height:%?50?%}.con-bank-name[data-v-1506b30e]{display:inline-block}.con-bank-type[data-v-1506b30e]{color:#a3a3a3}.loop-btn[data-v-1506b30e]{display:inline-block;width:%?160?%;text-align:right;font-size:%?30?%;color:#3cb4f1;\n\t/* line-height: 100upx; */vertical-align:middle}.next-btn[data-v-1506b30e]{height:%?80?%;width:%?600?%;text-align:center;margin:0 auto;line-height:%?80?%;border-radius:%?80?% %?80?%;border:solid %?2?% #a3a3a3;\n\t/* background-color: #d71518; */color:#333}#cover[data-v-1506b30e]{position:absolute;left:0;top:0;background:rgba(0,0,0,.4);width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/height:100%;filter:alpha(opacity=60);  /*设置透明度为60%*/opacity:.6;  /*非IE浏览器下设置透明度为60%*/display:block;z-Index:99}.bank-card-list[data-v-1506b30e]{width:%?710?%;height:%?200?%;background-color:#fff;position:absolute;bottom:0;padding:%?20?%;z-index:100}.esc-btn[data-v-1506b30e]{text-align:center;position:relative;color:#000;padding-bottom:%?20?%;border-bottom:%?2?% solid #e5e5e5}.close-btn[data-v-1506b30e]{position:absolute;left:%?20?%;color:#a3a3a3}.add-card[data-v-1506b30e]{position:absolute;right:%?20?%;color:#a3a3a3;font-size:%?28?%}.bank-card-item[data-v-1506b30e]{width:%?750?%;height:%?100?%;padding:%?20?% 0;border-bottom:%?2?% solid #e5e5e5}.bank-item-head[data-v-1506b30e]{width:%?100?%;height:%?100?%;vertical-align:bottom}.bank-card-name[data-v-1506b30e]{display:inline-block;margin-left:%?30?%}.popupCenter-box[data-v-1506b30e]{width:%?600?%;\n\t/* height: 200upx; */background-color:#fff;border-radius:%?10?%;padding:%?20?%}.popup-title[data-v-1506b30e]{text-align:center;font-size:%?24?%}.popup-icon[data-v-1506b30e]{width:%?60?%;height:%?40?%}.popup-warning[data-v-1506b30e]{font-size:%?20?%;color:red}.popup-name-status[data-v-1506b30e]{padding-left:%?20?%;display:inline-block;font-size:%?24?%;line-height:1em}.pupou-tongdao[data-v-1506b30e]{width:%?600?%;font-size:%?20?%;vertical-align:top;padding:%?20?% 0 %?20?% 0\n\t/* border-bottom: #A3A3A3 solid 2upx; */}.popup-td-item[data-v-1506b30e]{vertical-align:top;display:inline-block;width:%?300?%}.popup-btn-one[data-v-1506b30e],.popup-btn-two[data-v-1506b30e]{display:inline-block;width:%?300?%;text-align:center;font-size:%?24?%}..popup-btn-one[data-v-1506b30e]{color:#a3a3a3}.popup-btn-two[data-v-1506b30e]{color:red}.popup-btn-box[data-v-1506b30e]{padding:%?10?% 0}",""]),t.exports=i},d51e:function(t,i,a){var e=a("a328");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("58540ca7",e,!0,{sourceMap:!1,shadowMode:!1})},dcb6:function(t,i,a){"use strict";var e=a("d51e"),n=a.n(e);n.a},e19a:function(t,i,a){"use strict";a.r(i);var e=a("7e6d"),n=a("3b45");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("dcb6");var s,c=a("f0c5"),l=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"1506b30e",null,!1,e["a"],s);i["default"]=l.exports}}]);