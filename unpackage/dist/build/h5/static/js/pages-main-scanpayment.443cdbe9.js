(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-scanpayment"],{"23e5":function(t,a,e){"use strict";e.r(a);var n=e("7b07"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"283d":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={uniIcons:e("73a6").default,uniPopup:e("714b").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"scanpay-box"},[t.ifh5?e("v-uni-view",{staticClass:"scanpay-name-box"},[e("v-uni-view",{staticClass:"scanpay-tel"},[e("v-uni-input",{staticClass:" input-num card-input scanpay-name",attrs:{type:"number",maxlength:"11",value:"",placeholder:"请输入商家手机号"},model:{value:t.tel,callback:function(a){t.tel=a},expression:"tel"}})],1)],1):t._e(),e("v-uni-view",{staticClass:"scanpay-name-box",attrs:{else:!0}},[e("v-uni-view",{staticClass:"scanpay-name"},[t._v(t._s(t.name))]),e("v-uni-view",{staticClass:"scanpay-tel"},[t._v(t._s(t.tel))])],1),e("v-uni-view",{staticClass:"money-box"},[e("v-uni-view",{staticClass:"money-num-title"},[t._v("支付金额：")]),e("v-uni-view",[e("v-uni-text",{staticClass:"money-icon"},[t._v("￥")]),e("v-uni-input",{staticClass:"money-num",attrs:{type:"digit",maxlength:"7",value:""},on:{blur:function(a){arguments[0]=a=t.$handleEvent(a),t.changeMoney.apply(void 0,arguments)}},model:{value:t.moneyNum,callback:function(a){t.moneyNum=a},expression:"moneyNum"}})],1)],1),e("v-uni-view",{staticClass:"money-box"},[e("v-uni-view",{staticClass:"kq-select"},[e("v-uni-text",{staticClass:"kq-title"},[t._v("信用卡：")]),e("v-uni-image",{staticClass:"bank-head-img",attrs:{src:t.credit.bankLogo}}),e("v-uni-text",{staticClass:"con-bank-name"},[t._v(t._s(t.credit.bank)+t._s(t._f("showbankCard")(t.credit.cardNo)))]),e("v-uni-view",{staticClass:"loop-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.open1.apply(void 0,arguments)}}},[t._v("变更"),e("uni-icons",{staticStyle:{color:"#3cb4f1"},attrs:{type:"loop"}})],1)],1),e("v-uni-view",{staticClass:"next-btn next-btn-box",attrs:{type:""},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.buyBtn.apply(void 0,arguments)}}},[t._v("确认付款")])],1),e("uni-popup",{ref:"popup1",attrs:{type:"bottom"}},[e("v-uni-view",{staticClass:"bank-card-list"},[e("v-uni-view",{staticClass:"esc-btn"},[e("uni-icons",{staticClass:"close-btn",staticStyle:{"font-size":"50upx"},attrs:{type:"closeempty"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closedia1.apply(void 0,arguments)}}}),t._v("选择信用卡"),e("v-uni-text",{staticClass:"add-card",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.addcredit.apply(void 0,arguments)}}},[t._v("添加")])],1),t._l(t.creditCardList,(function(a){return e("v-uni-view",{staticClass:"bank-card-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectCredit(a)}}},[e("v-uni-image",{staticClass:"bank-item-head",attrs:{src:a.bankLogo,mode:""}}),e("v-uni-view",{staticClass:"bank-card-name"},[e("v-uni-text",[t._v(t._s(a.bank))]),e("v-uni-text",[t._v("\\n")]),e("v-uni-text",[t._v(t._s(t._f("showCard")(a.cardNo)))])],1)],1)}))],2)],1),e("uni-popup",{ref:"popup",attrs:{type:"center"}},[e("v-uni-view",{staticClass:"popupCenter-box"},[t._v(t._s(t.popupMessage))])],1)],1)},o=[]},"7b07":function(t,a,e){"use strict";e("fb6a"),e("ac1f"),e("1276"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={components:{},data:function(){return{scanVal:"",name:"哈哈",tel:"00000",moneyNum:"",paystatus:"",creditCardList:[],credit:"",popupMessage:"",ifh5:!0}},onLoad:function(t){this.scanVal=this.$Route.query.payname,console.log(this.scanVal),this.scanVal?(console.log(this.scanVal),this.ifh5=!1,this.tel=this.scanVal.split("?")[1].split("&")[0].split("=")[1],this.name=this.scanVal.split("?")[1].split("&")[1].split("=")[1]):(console.log(this.scanVal),this.ifh5=!0,this.tel="",this.name=""),this.getcredit()},methods:{selectPhoneMerch:function(t){var a=this;uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/selectPhoneMerch",data:{phone:t},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(t){console.log(t),0==t.data.code||(-1==t.data.code?(a.popupMessage=t.data.msg,a.$refs.popup.open()):console.log(t))}})},getcredit:function(){var t=this;uni.request({method:"GET",url:this.$baseUrl+"/api/v1/pri/my/getUserCreditCard",data:{},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(a){console.log(a),0==a.data.code?(t.creditCardList=a.data.data,t.creditCardList[0]?t.credit=t.creditCardList[0]:(t.popupMessage="未绑定信用卡",t.$refs.popup.open(),t.$Router.push({name:"myteam"}))):-1==a.data.code?(t.popupMessage=a.data.msg,t.$refs.popup.open()):console.log(a)}})},selectCredit:function(t){this.credit=t,this.closedia1()},open1:function(){this.$refs.popup1.open()},closedia1:function(t){this.$refs.popup1.close()},addcredit:function(){this.$refs.popup1.close(),this.$Router.push({name:"addcredit"})},buyBtn:function(){var t=this;this.moneyNum>=100&&this.moneyNum<5e4?uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/selectPhoneMerch",data:{phone:phone},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(a){console.log(a),0==a.data.code?uni.request({method:"POST",url:t.$baseUrl+"/api/v1/pri/shop/customGeneralOrder",data:{userId:uni.getStorageSync("userId"),store:t.tel,creditId:t.credit.id,totalTransactionPrice:t.moneyNum},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(a){console.log(a.data),0==a.data.code?(console.log(a.data),t.$Router.push({name:"scanstatus",params:{data:a.data.data}})):-1==a.data.code&&(t.popupMessage=a.data.msg,t.$refs.popup.open())},complete:function(t){}}):-1==a.data.code?(t.popupMessage=a.data.msg,t.$refs.popup.open()):console.log(a)}}):(this.moneyNum<100||this.moneyNum>5e4)&&(this.popupMessage="消费金额需大于100，小于50000",this.$refs.popup.open())},changeMoney:function(){this.moneyNum=Math.floor(100*this.moneyNum)/100}},filters:{showCard:function(t){if(t)return t.slice(0,4)+"**********"+t.slice(-4)},showbankCard:function(t){if(t)return t.slice(-4)}}};a.default=n},"8cbc":function(t,a,e){"use strict";e.r(a);var n=e("283d"),i=e("23e5");for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("a617");var d,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"0a4e0d48",null,!1,n["a"],d);a["default"]=c.exports},9482:function(t,a,e){var n=e("b8cc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("1f6fcdfc",n,!0,{sourceMap:!1,shadowMode:!1})},a617:function(t,a,e){"use strict";var n=e("9482"),i=e.n(n);i.a},b8cc:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".popupCenter-box[data-v-0a4e0d48]{width:%?400?%;padding:%?40?%;text-align:center;border-radius:%?20?%}.scanpay-name-box[data-v-0a4e0d48]{padding-top:%?80?%;text-align:center}.scanpay-name[data-v-0a4e0d48]{font-size:%?40?%}.scanpay-tel[data-v-0a4e0d48]{font-size:%?38?%}.money-box[data-v-0a4e0d48]{margin-top:%?40?%;padding:0 %?60?%}.money-num-title[data-v-0a4e0d48]{color:#a3a3a3}.money-num[data-v-0a4e0d48]{display:inline-block;padding-top:%?30?%;padding-bottom:%?10?%;line-height:%?80?%;padding-left:%?20?%;font-size:%?38?%;width:%?500?%;border-bottom:%?2?% solid #a3a3a3}.money-icon[data-v-0a4e0d48]{display:inline-block;width:%?40?%;font-size:%?40?%;margin-right:%?20?%;font-weight:600;vertical-align:super}.next-btn[data-v-0a4e0d48]{height:%?80?%;width:%?600?%;text-align:center;margin:0 auto;line-height:%?80?%;border-radius:%?80?% %?80?%;border:solid %?2?% #a3a3a3;\r\n\t\t/* background-color: #d71518; */color:#333}.next-btn-box[data-v-0a4e0d48]{margin-top:%?80?%}.consume-box[data-v-0a4e0d48]{width:100%;min-height:92vh;background-color:#f4f8fb;\r\n\t\t/* text-align: center; */padding-top:%?30?%}.consume-main[data-v-0a4e0d48]{background-color:#fff;width:%?700?%;\r\n\t\t/* height: 440upx; */margin:%?10?% auto;border-radius:%?20?%;padding:%?20?% 0;font-size:%?32?%;padding-bottom:%?60?%}.consume-yinlain[data-v-0a4e0d48]{width:%?80?%;height:%?60?%;vertical-align:middle}.consume-money[data-v-0a4e0d48]{line-height:%?60?%;width:%?640?%;padding:0 %?30?%}.cm-gm[data-v-0a4e0d48]{\r\n\t\t/* text-indent: 1em; */display:inline-block;width:%?270?%;padding-left:%?10?%}.cm-gp[data-v-0a4e0d48]{display:inline-block;width:%?280?%;text-align:right}.cm-feilv[data-v-0a4e0d48]{color:#a3a3a3;font-size:%?26?%;line-height:%?76?%;border-bottom:%?2?% solid #ebe7e7}.fl[data-v-0a4e0d48]{display:inline-block;width:%?290?%;padding-left:%?10?%}.sxf[data-v-0a4e0d48]{display:inline-block;width:%?300?%;text-align:right}.kq-select[data-v-0a4e0d48]{width:%?640?%;line-height:%?60?%\r\n\t\t/* padding-top: 60upx; */}.kq-select1[data-v-0a4e0d48]{padding-top:%?10?%;padding-bottom:%?40?%}.kq-title[data-v-0a4e0d48]{display:inline-block;font-size:%?24?%;width:%?100?%}.bank-head-img[data-v-0a4e0d48]{width:%?40?%;height:%?40?%;border-radius:50%;\r\n\t\t/* line-height: 100upx; */vertical-align:middle}.con-bank-static[data-v-0a4e0d48]{display:inline-block;padding:0 %?20?%;line-height:%?50?%}.con-bank-name[data-v-0a4e0d48]{display:inline-block}.con-bank-type[data-v-0a4e0d48]{color:#a3a3a3}.loop-btn[data-v-0a4e0d48]{display:inline-block;width:%?160?%;text-align:right;font-size:%?30?%;color:#3cb4f1;\r\n\t\t/* line-height: 100upx; */vertical-align:middle}#cover[data-v-0a4e0d48]{position:absolute;left:0;top:0;background:rgba(0,0,0,.4);width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/height:100%;filter:alpha(opacity=60);  /*设置透明度为60%*/opacity:.6;  /*非IE浏览器下设置透明度为60%*/display:block;z-Index:99}.bank-card-list[data-v-0a4e0d48]{width:%?710?%;\r\n\t\t/* height: 200upx; */background-color:#fff;position:absolute;bottom:0;padding:%?20?%;z-index:100}.esc-btn[data-v-0a4e0d48]{text-align:center;position:relative;color:#000;padding-bottom:%?20?%;border-bottom:%?2?% solid #e5e5e5}.close-btn[data-v-0a4e0d48]{position:absolute;left:%?20?%;color:#a3a3a3}.add-card[data-v-0a4e0d48]{position:absolute;right:%?20?%;color:#a3a3a3;font-size:%?28?%}.bank-card-item[data-v-0a4e0d48]{width:%?750?%;height:%?100?%;padding:%?20?% 0;border-bottom:%?2?% solid #e5e5e5}.bank-item-head[data-v-0a4e0d48]{width:%?100?%;height:%?100?%;vertical-align:bottom}.bank-card-name[data-v-0a4e0d48]{display:inline-block;margin-left:%?30?%}.popupCenter-box[data-v-0a4e0d48]{width:%?600?%;\r\n\t\t/* height: 200upx; */background-color:#fff;border-radius:%?10?%;padding:%?20?%}.popup-title[data-v-0a4e0d48]{text-align:center;font-size:%?24?%}.popup-icon[data-v-0a4e0d48]{width:%?60?%;height:%?40?%}.popup-warning[data-v-0a4e0d48]{font-size:%?20?%;color:red}.popup-name-status[data-v-0a4e0d48]{padding-left:%?20?%;display:inline-block;font-size:%?24?%;line-height:1em}.pupou-tongdao[data-v-0a4e0d48]{width:%?600?%;font-size:%?20?%;vertical-align:top;padding:%?20?% 0 %?20?% 0\r\n\t\t/* border-bottom: #A3A3A3 solid 2upx; */}.popup-td-item[data-v-0a4e0d48]{vertical-align:top;display:inline-block;width:%?300?%}.popup-btn-one[data-v-0a4e0d48],.popup-btn-two[data-v-0a4e0d48]{display:inline-block;width:%?300?%;text-align:center;font-size:%?24?%}..popup-btn-one[data-v-0a4e0d48]{color:#a3a3a3}.popup-btn-two[data-v-0a4e0d48]{color:red}.popup-btn-box[data-v-0a4e0d48]{padding:%?10?% 0}.card-input[data-v-0a4e0d48]{border-bottom:solid #a3a3a3 %?2?%;margin:0 auto;width:%?400?%}",""]),t.exports=a}}]);