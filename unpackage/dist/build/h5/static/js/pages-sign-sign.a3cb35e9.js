(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sign-sign"],{"0484":function(e,t,i){var n=i("2e30");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("665435e1",n,!0,{sourceMap:!1,shadowMode:!1})},2110:function(e,t,i){"use strict";var n=i("0484"),s=i.n(n);s.a},"2e30":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".sign-box[data-v-4e788025]{width:100%}.sign-title[data-v-4e788025]{\n\t/* margin-top: 60upx; */text-align:center}.sign-title-one[data-v-4e788025]{margin-top:%?200?%}.sign-icon[data-v-4e788025]{height:%?60?%;vertical-align:middle}.sign-input[data-v-4e788025]{display:inline-block;width:%?500?%;line-height:%?60?%;height:%?96?%;vertical-align:middle;border-bottom:#9fa0a0 %?2?% solid}.yanz-input[data-v-4e788025]{width:%?300?%}.yanz-btn[data-v-4e788025]{display:inline-block;vertical-align:bottom;width:%?160?%;margin-left:%?40?%;height:%?76?%;line-height:%?76?%;font-size:%?28?%;padding:0 %?20?%}.sign-btn[data-v-4e788025]{height:%?80?%;width:%?600?%;text-align:center;margin:0 auto;margin-top:%?80?%;line-height:%?80?%;-webkit-border-radius:%?80?% %?80?%;border-radius:%?80?% %?80?%;background-color:#d71518;color:#fff}.popupstyle[data-v-4e788025]{background-color:#fff;padding:%?20?% %?20?%}.popupCenter-box[data-v-4e788025]{width:%?400?%;padding:%?40?%;text-align:center;-webkit-border-radius:%?20?%;border-radius:%?20?%}.login-btn[data-v-4e788025]{\n\t/* text-align: right; */width:%?140?%;float:right;font-size:%?24?%;color:#d71518;margin-top:%?28?%;margin-right:%?80?%}.login-btn-two[data-v-4e788025]{width:%?140?%;float:left;font-size:%?24?%;color:#d71518;margin-top:%?28?%;margin-left:%?80?%}",""]),e.exports=t},9971:function(e,t,i){"use strict";i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniIcons:i("73a6").default,uniPopup:i("714b").default},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"sign-box"},[i("v-uni-view",{staticClass:"login-input"},[i("v-uni-view",{staticClass:"sign-title sign-title-one"},[i("uni-icons",{staticClass:"locked-icon",attrs:{type:"phone-filled",size:"30"}}),i("v-uni-input",{staticClass:" \n\t\t\tsign-input",attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号",value:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("v-uni-view",{staticClass:"sign-title"},[i("uni-icons",{staticClass:"locked-icon",attrs:{type:"locked",size:"30"}}),i("v-uni-input",{staticClass:" sign-input",attrs:{type:"text",password:!0,maxlength:"12",placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),i("v-uni-view",{staticClass:"sign-title"},[i("uni-icons",{staticClass:"locked-icon",attrs:{type:"compose",size:"30"}}),i("v-uni-input",{staticClass:" sign-input yanz-input",attrs:{type:"number",number:!0,maxlength:"6",placeholder:"输入验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),i("v-uni-button",{staticClass:"yanz-btn",attrs:{type:"primary",plain:"true",disabled:e.verifyDisabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendyanzheng()}}},[e._v(e._s(e.sendVerify))])],1),i("v-uni-view",{staticClass:"sign-title"},[i("uni-icons",{staticClass:"locked-icon",attrs:{type:"phone-filled",size:"30"}}),i("v-uni-input",{staticClass:" sign-input",attrs:{type:"number",number:!0,maxlength:"11",placeholder:"请输入推荐人手机号"},model:{value:e.superiorUserPhone,callback:function(t){e.superiorUserPhone=t},expression:"superiorUserPhone"}})],1),i("v-uni-view",{},[i("v-uni-button",{staticClass:"sign-btn",attrs:{type:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.verifySign.apply(void 0,arguments)}}},[e._v("注册")])],1),i("router-link",{staticClass:"login-btn",attrs:{to:"{name:index}","hover-class":"none"}},[e._v("去登录")]),i("router-link",{staticClass:"login-btn-two",attrs:{to:"{name:uploadapp}","hover-class":"none"}},[e._v("去下载")]),i("uni-popup",{ref:"popup",staticClass:"popupstyle",attrs:{type:"center"}},[i("v-uni-view",{staticClass:"popupCenter-box"},[e._v(e._s(e.popupMessage))])],1)],1)],1)},a=[]},b601:function(e,t,i){"use strict";(function(e){i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{phone:"",password:"",superiorUserPhone:"",code:"",verifyNum:"",sendVerify:"获取验证码",verifyDisabled:!1,popupMessage:""}},onLoad:function(e){window.location.href.split("?")[1].split("&")[0].split("=")[1]&&(this.superiorUserPhone=window.location.href.split("?")[1].split("&")[0].split("=")[1])},methods:{getyanzhengFn:function(){var t=this;uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/login/registSendMgs",data:{phone:this.phone},header:{"Content-Type":"application/json"},success:function(i){e("log",i," at pages/sign/sign.vue:73"),0==i.data.code?(t.popupMessage=i.data.data.Message,t.$refs.popup.open()):-1==i.data.code&&(t.popupMessage=i.data.msg,t.$refs.popup.open())},fail:function(){return t.popupMessage="请稍后重试",t.$refs.popup.open(),!1}})},sendyanzheng:function(){var e=this;if(!this.verifyDisabled&&this.isPoneAvailable(this.phone))this.getyanzhengFn();else if(!this.isPoneAvailable(this.phone))return this.$refs.popup.open(),!1;this.sendVerify=60,this.verifyDisabled=!0;var t="";t=setInterval((function(){e.sendVerify>0?e.sendVerify--:(e.sendVerify="重新获取验证码",clearInterval(t),e.verifyDisabled=!1)}),1e3)},isPoneAvailable:function(e){var t=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;return""==e?(this.popupMessage="请输入手机号",!1):!!t.test(e)||(this.popupMessage="手机号格式错误",!1)},verifySign:function(){var e=this;return this.isPoneAvailable(this.phone)?""==this.password?(this.popupMessage="请输入密码",uni.showToast({title:this.popupMessage,mask:!0,icon:"none",duration:2e3}),!1):this.password.length<6?(this.popupMessage="密码至少为六位",uni.showToast({title:this.popupMessage,mask:!0,icon:"none",duration:2e3}),!1):""==this.code?(this.popupMessage="请输入验证码",uni.showToast({title:this.popupMessage,mask:!0,icon:"none",duration:2e3}),!1):(uni.showLoading({title:"加载中",mask:!0}),void uni.request({method:"POST",url:this.$baseUrl+"/api/v1/pri/login/register",data:{phone:this.phone,password:this.password,superiorUserPhone:this.superiorUserPhone,code:this.code},header:{"Content-Type":"application/json"},success:function(t){0==t.data.code?e.$Router.pushTab("/pages/index/index"):-1==t.data.code&&(e.popupMessage=t.data.msg,uni.showToast({title:e.popupMessage,mask:!0,icon:"none",duration:2e3}))},complete:function(){uni.hideLoading()}})):(uni.showToast({title:this.popupMessage,mask:!0,icon:"none",duration:2e3}),!1)},goupload:function(){this.$Router.push({name:"uploadapp"})}}};t.default=n}).call(this,i("0de9")["log"])},d35d:function(e,t,i){"use strict";i.r(t);var n=i("9971"),s=i("fab1");for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("2110");var o,r=i("f0c5"),p=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"4e788025",null,!1,n["a"],o);t["default"]=p.exports},fab1:function(e,t,i){"use strict";i.r(t);var n=i("b601"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a}}]);