(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-banking-adddeposit"],{"0643":function(e,t,a){"use strict";var n=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("72e4")),o={components:{selectAddress:i.default},data:function(){return{accountOpeningProvince:"",cardNo:"",bank:"",cardholder:"",reservePhone:"",popupMessage:""}},onLoad:function(){},onShow:function(){this.cardholder=uni.getStorageSync("userName"),this.reservePhone=uni.getStorageSync("phone")},methods:{getcardFn:function(){var e=this;uni.chooseImage({count:1,success:function(t){t.tempFilePaths[0];var a=new FileReader;a.onloadend=function(){e.cardPic=a.result,e.popupMessage=e.cardPic,e.$refs.popup.open(),e.getCardBase()},t.tempFiles[0]&&a.readAsDataURL(t.tempFiles[0])},fail:function(){}})},getCardBase:function(){var e=this;uni.request({method:"POST",url:"http://bankocrb.shumaidata.com/getbankocrb",data:{image:this.cardPic},header:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"APPCODE fa541816acdc4234b18dff3ae5f98a26"},success:function(t){200==t.statusCode&&(alert(t.data),e.cardNo=t.data.data.card_number,e.bank=t.data.data.bank_name)}})},getcard:function(){var e=this;if(""==this.cardNo)return!1;console.log(this.cardNo),uni.request({method:"GET",url:"https://bankaddress.shumaidata.com/bankaddress",data:{bankcard:this.cardNo},header:{Authorization:"APPCODE fa541816acdc4234b18dff3ae5f98a26","Content-Type":"application/json"},success:function(t){200==t.statusCode&&(e.accountOpeningProvince=t.data.data.province+t.data.data.city,e.bank=t.data.data.bank)}})},btnClick:function(){this.$refs.selectAddress.show()},successSelectAddress:function(e){this.accountOpeningProvince=e},adddeposit:function(){var e=this;if(""==this.accountOpeningProvince||""==this.cardNo||""==this.cardholder||""==this.reservePhone)return!1;uni.showLoading({title:"请求中"}),uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/addUserSavingsCard",data:{cardType:"SAVINGS_CARD",cardholder:this.cardholder,bank:this.bank,cardNo:this.cardNo,reservePhone:this.reservePhone,accountOpeningProvince:this.accountOpeningProvince},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(t){0==t.data.code?(e.popupMessage=t.data.data,e.$refs.popup.open(),e.$Router.back(1)):-1==t.data.code&&(e.popupMessage=t.data.msg,e.$refs.popup.open())},complete:function(){uni.hideLoading()}})}}};t.default=o},"2af4":function(e,t,a){var n=a("d720");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("590c1d52",n,!0,{sourceMap:!1,shadowMode:!1})},"526d":function(e,t,a){"use strict";var n=a("2af4"),i=a.n(n);i.a},"5c7f":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var n={uniIcons:a("73a6").default,uniPopup:a("714b").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:" card-box"},[a("v-uni-view",{staticClass:"card-message"},[a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[e._v("持卡人:")]),a("v-uni-text",{staticClass:"card-text"},[e._v(e._s(e.cardholder))])],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[e._v("银行卡号:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"number",maxlength:"19",placeholder:"请输入储蓄卡卡号"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.getcard.apply(void 0,arguments)}},model:{value:e.cardNo,callback:function(t){e.cardNo=t},expression:"cardNo"}}),a("uni-icons",{staticClass:"card-icons",attrs:{type:"camera",size:"20"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getcardFn.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[e._v("发卡行:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"text",maxlength:"19",placeholder:"请输入发卡行"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.getcard.apply(void 0,arguments)}},model:{value:e.bank,callback:function(t){e.bank=t},expression:"bank"}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[e._v("预留手机:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"number",maxlength:"11",value:"",placeholder:"请输入预留手机号"},model:{value:e.reservePhone,callback:function(t){e.reservePhone=t},expression:"reservePhone"}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[e._v("开户行省市:")]),a("v-uni-input",{staticClass:"input-num city-input",attrs:{type:"text",value:"",placeholder:"选择省市"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.btnClick.apply(void 0,arguments)}},model:{value:e.accountOpeningProvince,callback:function(t){e.accountOpeningProvince=t},expression:"accountOpeningProvince"}})],1)],1),a("v-uni-view",{staticClass:"btn-box"},[a("v-uni-view",{staticClass:"next-btn",attrs:{type:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.adddeposit.apply(void 0,arguments)}}},[e._v("确认添加")])],1),a("selectAddress",{ref:"selectAddress",attrs:{jiji:3},on:{selectAddress:function(t){arguments[0]=t=e.$handleEvent(t),e.successSelectAddress.apply(void 0,arguments)}}}),a("uni-popup",{ref:"popup",staticClass:"popupstyle",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"popupCenter-box"},[e._v(e._s(e.popupMessage))])],1)],1)},o=[]},b1b6:function(e,t,a){"use strict";a.r(t);var n=a("0643"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},d720:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".card-box[data-v-bb938ee8]{height:94vh;background-color:#f4f8fb}.card-message[data-v-bb938ee8]{background-color:#fff;padding-top:%?20?%}.input-box[data-v-bb938ee8]{width:%?650?%;padding:0 %?50?%;line-height:%?100?%;\n\t/* margin-top: 10upx; */border-bottom:solid %?2?% #dfd9d9}.input-num[data-v-bb938ee8]{display:inline-block;border:none;line-height:%?40?%;width:%?470?%;padding-left:%?20?%;font-size:%?36?%;vertical-align:text-bottom}.city-input[data-v-bb938ee8]{width:%?400?%}.next-btn[data-v-bb938ee8]{height:%?80?%;width:%?600?%;text-align:center;margin:0 auto;line-height:%?80?%;-webkit-border-radius:%?80?% %?80?%;border-radius:%?80?% %?80?%;border:solid %?2?% #a3a3a3;background-color:#d71518;color:#fff}.btn-box[data-v-bb938ee8]{margin-top:%?90?%}.card-text[data-v-bb938ee8]{padding-left:%?20?%}.popupstyle[data-v-bb938ee8]{background-color:#fff;padding:%?20?% %?20?%}.popupCenter-box[data-v-bb938ee8]{width:%?400?%;padding:%?40?%;text-align:center;-webkit-border-radius:%?20?%;border-radius:%?20?%}.card-icons[data-v-bb938ee8]{position:absolute;right:%?40?%;font-size:%?24?%}",""]),e.exports=t},d8e4:function(e,t,a){"use strict";a.r(t);var n=a("5c7f"),i=a("b1b6");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("526d");var s,c=a("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"bb938ee8",null,!1,n["a"],s);t["default"]=r.exports}}]);