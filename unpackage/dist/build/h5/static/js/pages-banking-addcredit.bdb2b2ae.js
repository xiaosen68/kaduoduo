(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-banking-addcredit"],{"19c6":function(t,e,a){"use strict";var i=a("4087"),n=a.n(i);n.a},"2a69":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{cardType:"CREDIT_CARD",cardholder:"",bank:"",cardNo:"",reservePhone:"",safetyCode:"",termOfValidity:"",billingDate:"",repaymentDate:"",quota:"",cvdisabled:!1,popupMessage:"",cardPic:""}},onShow:function(){this.cardholder=uni.getStorageSync("userName"),this.reservePhone=uni.getStorageSync("phone")},methods:{getcardFn:function(){var t=this;uni.chooseImage({count:1,success:function(e){e.tempFilePaths[0];console.log(e);var a=new FileReader;a.onloadend=function(){t.cardPic=a.result,t.getCardBase()},e.tempFiles[0]&&a.readAsDataURL(e.tempFiles[0])},fail:function(){}})},getCardBase:function(){var t=this;uni.request({method:"POST",url:"http://bankocrb.shumaidata.com/getbankocrb",data:{image:this.cardPic},header:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"APPCODE fa541816acdc4234b18dff3ae5f98a26"},success:function(e){200==e.statusCode&&(console.log(e.data),t.cardNo=e.data.data.card_number,t.bank=e.data.data.bank_name,console.log(t.cardNo))}})},getBank:function(){var t=this;if(""==this.cardNo)return!1;uni.request({method:"GET",url:"https://bankaddress.shumaidata.com/bankaddress",data:{bankcard:this.cardNo},header:{Authorization:"APPCODE fa541816acdc4234b18dff3ae5f98a26","Content-Type":"application/json"},success:function(e){console.log(e),200==e.statusCode&&(t.bank=e.data.data.bank,console.log(t.bank))}})},addcredit:function(){var t=this;uni.showLoading({title:"请求中"}),uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/my/addUserCreditCard",data:{cardType:"CREDIT_CARD",cardholder:this.cardholder,bank:this.bank,cardNo:this.cardNo,reservePhone:this.reservePhone,safetyCode:this.safetyCode,termOfValidity:this.termOfValidity,billingDate:this.billingDate,repaymentDate:this.repaymentDate,quota:this.quota},header:{token:uni.getStorageSync("token"),"Content-Type":"application/json"},success:function(e){console.log(e),0==e.data.code?(t.popupMessage=e.data.data,t.$refs.popup.open(),t.$Router.back(1)):-1==e.data.code?(t.popupMessage=e.data.msg,t.$refs.popup.open()):console.log(e)},complete:function(){uni.hideLoading()}})},ifcredit:function(t){var e=/^\d{16}$/;return e.test(t)},iftel:function(){var t=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;t.test(this.reservePhone)||(this.popupMessage="请输入正确手机号",this.$refs.popup.open())},ifc2v2:function(){var t=/^\d{3}$/;t.test(this.safetyCode)||(this.popupMessage="请正确输入安全码",this.$refs.popup.open())},ifzdate:function(t){Number(t.detail.value)>31&&(this.billingDate=31)},ifhdate:function(t){Number(t.detail.value)>31&&(this.repaymentDate=31)},zdate:function(){Number(this.billingDate)<10&&Number(this.billingDate)>0&&(this.billingDate="0"+Number(this.billingDate))},hdate:function(){Number(this.repaymentDate)<10&&Number(this.repaymentDate)>0&&(this.repaymentDate="0"+Number(this.repaymentDate))},ifydate:function(t){1==t.detail.value.length?Number(t.detail.value)>1&&(this.termOfValidity=1):2==t.detail.value.length?(Number(t.detail.value)>12&&(this.termOfValidity=12),this.termOfValidity=this.termOfValidity+"/"):4==t.detail.value.length?Number(t.detail.value.charAt(3))>3&&(console.log(this.termOfValidity),this.termOfValidity=this.termOfValidity.substr(0,3),this.termOfValidity=this.termOfValidity+"3"):5==t.detail.value.length?3==Number(t.detail.value.charAt(3))&&Number(t.detail.value.charAt(4))>1&&(this.termOfValidity=this.termOfValidity.substr(0,4),this.termOfValidity=this.termOfValidity+"1"):t.detail.value.length>5&&(this.termOfValidity=this.termOfValidity.substr(0,5))}},computed:{}};e.default=i},4087:function(t,e,a){var i=a("d0c5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("47babedd",i,!0,{sourceMap:!1,shadowMode:!1})},"8b54":function(t,e,a){"use strict";a.r(e);var i=a("2a69"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},b09a:function(t,e,a){"use strict";a.r(e);var i=a("ef6f"),n=a("8b54");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("19c6");var s,u=a("f0c5"),r=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"087394e6",null,!1,i["a"],s);e["default"]=r.exports},d0c5:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".card-box[data-v-087394e6]{height:94vh;background-color:#f4f8fb}.card-message[data-v-087394e6]{background-color:#fff;padding-top:%?20?%}.input-box[data-v-087394e6]{width:%?650?%;padding:0 %?50?%;line-height:%?100?%;\n\t/* margin-top: 10upx; */border-bottom:solid %?2?% #dfd9d9}.input-num[data-v-087394e6]{display:inline-block;border:none;line-height:%?40?%;width:%?470?%;padding-left:%?20?%;font-size:%?36?%;vertical-align:text-bottom}.next-btn[data-v-087394e6]{height:%?80?%;width:%?600?%;text-align:center;margin:0 auto;line-height:%?80?%;-webkit-border-radius:%?80?% %?80?%;border-radius:%?80?% %?80?%;border:solid %?2?% #a3a3a3;background-color:#d71518;color:#fff}.btn-box[data-v-087394e6]{margin-top:%?90?%}.popupstyle[data-v-087394e6]{background-color:#fff;padding:%?20?% %?20?%}.popupCenter-box[data-v-087394e6]{width:%?400?%;padding:%?40?%;text-align:center;-webkit-border-radius:%?20?%;border-radius:%?20?%}.card-text[data-v-087394e6]{padding-left:%?20?%}.card-icons[data-v-087394e6]{position:absolute;right:%?40?%;font-size:%?24?%}",""]),t.exports=e},ef6f:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uniIcons:a("73a6").default,uniPopup:a("714b").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:" card-box"},[a("v-uni-view",{staticClass:"card-message"},[a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[t._v("持卡人:")]),a("v-uni-text",{staticClass:"card-text"},[t._v(t._s(t.cardholder))])],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[t._v("信用卡号:")]),a("v-uni-input",{staticClass:"input-num card-input",attrs:{type:"number",maxlength:"16",value:"",placeholder:"请输入信用卡卡号"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.getBank.apply(void 0,arguments)}},model:{value:t.cardNo,callback:function(e){t.cardNo=e},expression:"cardNo"}}),a("uni-icons",{staticClass:"card-icons",attrs:{type:"camera",size:"20"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getcardFn.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[t._v("预留手机:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"number",maxlength:"11",value:"",placeholder:"请输入预留手机号"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.iftel.apply(void 0,arguments)}},model:{value:t.reservePhone,callback:function(e){t.reservePhone=e},expression:"reservePhone"}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[t._v("发卡行:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"text",maxlength:"10",value:"",placeholder:"请输入发卡行"},model:{value:t.bank,callback:function(e){t.bank=e},expression:"bank"}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[t._v("安全码:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"number",maxlength:"3",length:"3",disabled:t.cvdisabled,value:"",placeholder:"信用卡CVN2后三位"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.ifc2v2.apply(void 0,arguments)}},model:{value:t.safetyCode,callback:function(e){t.safetyCode=e},expression:"safetyCode"}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[t._v("有效期:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"text",maxlength:"5",value:"",placeholder:"信用卡有效期,如:09/22"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.ifydate.apply(void 0,arguments)}},model:{value:t.termOfValidity,callback:function(e){t.termOfValidity=e},expression:"termOfValidity"}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[t._v("账单日:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"number",maxlength:"2",value:"",placeholder:"信用卡账单日,如:(23)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.ifzdate.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.zdate.apply(void 0,arguments)}},model:{value:t.billingDate,callback:function(e){t.billingDate=e},expression:"billingDate"}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[t._v("还款日:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"number",maxlength:"2",value:"",placeholder:"信用卡还款日,如:(23)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.ifhdate.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.hdate.apply(void 0,arguments)}},model:{value:t.repaymentDate,callback:function(e){t.repaymentDate=e},expression:"repaymentDate"}})],1),a("v-uni-view",{staticClass:"input-box"},[a("v-uni-text",[t._v("额度:")]),a("v-uni-input",{staticClass:"input-num",attrs:{type:"number",maxlength:"7",value:"",placeholder:"请输入信用卡额度"},model:{value:t.quota,callback:function(e){t.quota=e},expression:"quota"}})],1)],1),a("v-uni-view",{staticClass:"btn-box"},[a("v-uni-view",{staticClass:"next-btn",attrs:{type:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addcredit.apply(void 0,arguments)}}},[t._v("确认添加")])],1),a("uni-popup",{ref:"popup",staticClass:"popupstyle",attrs:{type:"center"}},[a("v-uni-view",{staticClass:"popupCenter-box"},[t._v(t._s(t.popupMessage))])],1)],1)},o=[]}}]);