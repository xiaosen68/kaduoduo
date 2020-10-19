<template>
	<view class="sign-box">
		<view class="login-input">
			<view class="sign-title sign-title-one">
				<uni-icons type="phone-filled" class="locked-icon" size="30"></uni-icons>
				<input type="number" maxlength="11" placeholder="请输入手机号" class=" 
				sign-input" value="" v-model="phone" />
			</view>
			<view class="sign-title">
				<uni-icons type="locked" class="locked-icon" size="30"></uni-icons>
				<input type="text" password maxlength="12" placeholder="请输入密码" 
				class=" sign-input" v-model="password" />
			</view>
			<view class="sign-title">
				<uni-icons type="compose" class="locked-icon" size="30"></uni-icons>
				<input type="number" number maxlength="6" 
				placeholder="输入验证码" class=" sign-input yanz-input"
				 v-model="code" />
				 <button type="primary" plain="true" class="yanz-btn" :disabled="verifyDisabled" @click="sendyanzheng()">{{sendVerify}}</button>
			</view>
			<view class="sign-title">
				<uni-icons type="phone-filled" class="locked-icon" size="30"></uni-icons>
				<input type="number" number maxlength="11" placeholder="请输入推荐人手机号" 
				class=" sign-input" v-model="superiorUserPhone" />
			</view>
			<view class="">
				<button type="" class="sign-btn" @click="verifySign">注册</button>
			</view>
			<!-- <navigator url="../index/index" class="login-btn" hover-class="none">去登录</navigator> -->
			<router-link to="{name:index}"class="login-btn" hover-class="none">去登录</router-link>
			<router-link @click="goupload" class="login-btn-two" hover-class="none">去下载</router-link>
			<uni-popup ref="popup"  type="center" class="popupstyle">
				<view class="popupCenter-box">{{popupMessage}}</view>
			</uni-popup>
		</view>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				phone:'',
				password:'',
				superiorUserPhone:'',
				code:'',
				verifyNum:'',
				sendVerify: '获取验证码',
				verifyDisabled:false,
				popupMessage:""
			}
		},
	
		onLoad:function(option) {
		if(((window.location.href.split('?')[1]).split('&')[0]).split('=')[1]){
			this.superiorUserPhone=((window.location.href.split('?')[1]).split('&')[0]).split('=')[1]
		}
			console.log(this.superiorUserPhone)
			
		},
		methods: {
			getyanzhengFn:function(){
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/login/registSendMgs', 
				    data: {
				        phone: this.phone,
				    },
				    header: {
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res)
						if(res.data.code==0){
							this.popupMessage=res.data.data.Message;
							this.$refs.popup.open();
							// this.$store.commit("setToken",res.data.data);
									// this.$Router.pushTab('/pages/index/index')
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							this.$refs.popup.open();
						}
				       
				    },
					fail:()=>{
						this.popupMessage = '请稍后重试';
						this.$refs.popup.open();
						return false
					}
				});
			},
			sendyanzheng:function(){
				if(!this.verifyDisabled&&this.isPoneAvailable(this.phone)){
					this.getyanzhengFn()
				}else if(!this.isPoneAvailable(this.phone)){
					this.$refs.popup.open();
					return false
				}
				this.sendVerify=60;
				this.verifyDisabled=true;
				let setyanzheng='';
				 setyanzheng=setInterval(()=>{
					if(this.sendVerify>0){
						this.sendVerify--;
					}else{
						this.sendVerify="重新获取验证码"
						clearInterval(setyanzheng)
						this.verifyDisabled=false;
					}
				
				},1000)
					
			},
			isPoneAvailable: function (pone) {
			    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if (pone==''){
					this.popupMessage="请输入手机号"
					 return false;
				}else if (!myreg.test(pone)) {
					this.popupMessage="手机号格式错误"
			      return false;
			    } 
			      return true;
			  },
			verifySign:function(){
				console.log(this.popupMessage)
				if(!this.isPoneAvailable(this.phone)){
					console.log(this.popupMessage)
					// this.popupMessage="手机号错误"
					this.$refs.popup.open()
					return false
				}else if(this.password==''){
					this.popupMessage="请输入密码"
					this.$refs.popup.open()
					return false
				}else if(this.password.length<6){
					this.popupMessage="密码至少为六位"
					this.$refs.popup.open()
					return false
				}
				else if(this.code==''){
					this.popupMessage="请输入验证码"
					this.$refs.popup.open()
					return false
				}
				// else if(!this.isPoneAvailable(this.superiorUserPhone)){
				// 	this.popupMessage="请输入推荐人手机号"
				// 	this.$refs.popup.open()
				// 	return false
				// }
				uni.showLoading({
					title:'加载中',
					mask:true
				})
				uni.request({
					method:'POST',
				    url: this.$baseUrl+'/api/v1/pri/login/register', 
				    data: {
				        phone: this.phone,
						password:this.password,
						superiorUserPhone:this.superiorUserPhone,
						code:this.code,
				    },
				    header: {
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						if(res.data.code==0){
							// this.$store.commit("setToken",res.data.data);
									this.$Router.pushTab('/pages/index/index')
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							this.$refs.popup.open();
						}
				       
				    },
					complete: () => {
						uni.hideLoading()
					}
				});
				// this.$Router.push({name:'index'})
			},
			goupload:function(){
				this.$Router.push({name:'uploadapp'})
			}
		}
	}
	
</script>

<style>
	.sign-box{
		width: 100%;
	}
	.sign-title{
		/* margin-top: 60upx; */
		text-align: center;
	}
	.sign-title-one{
		margin-top: 200upx;
	}
	.sign-icon{
		height: 60upx;
		vertical-align: middle;
	}
	.sign-input{
		display: inline-block;
		width: 500upx;
		line-height: 60upx;
		height: 96upx;
		vertical-align: middle;
		border-bottom: #9fa0a0 2upx solid;
		
	}
	.yanz-input{
		width: 300upx;
	}
	.yanz-btn{
		display: inline-block;
		vertical-align: bottom;
		width: 160upx;
		margin-left: 40upx;
		height: 76upx;
		line-height: 76upx;
		font-size: 28upx;
		padding: 0 20upx;
	}
	.sign-btn{
		height: 80upx;
		width: 600upx;
		text-align: center;
		margin: 0 auto;
		margin-top: 80upx;
		line-height: 80upx;
		border-radius: 80upx 80upx;
		background-color: #d71518;
		color: #FFFFFF;
	}
	
	.popupstyle{
		background-color: #FFFFFF;
		padding: 20upx 20upx;
	}
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
	.login-btn{
		/* text-align: right; */
		float: right;
		font-size: 24upx;
		color: #d71518;
		margin-top: 28upx;
		margin-right: 80upx;
	}
	.login-btn-two{
		float: left;
		font-size: 24upx;
		color: #d71518;
		margin-top: 28upx;
		margin-left: 80upx;
	}
</style>
