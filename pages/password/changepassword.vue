<template>
	<view class="sign-box">
		<view class="login-input">
			<view class="sign-title">
				<uni-icons type="locked" class="locked-icon" size="30"></uni-icons>
				<input type="text" password maxlength="12" placeholder="请输入新密码" class=" sign-input" v-model="password" />
			</view>
			<view class="sign-title">
				<uni-icons type="locked" class="locked-icon" size="30"></uni-icons>
				<input type="text" password maxlength="12" placeholder="请确认新密码" class=" sign-input" v-model="password2" />
			</view>
			<view class="sign-title">
				<uni-icons type="compose" class="locked-icon" size="30"></uni-icons>
				<input type="number" number maxlength="6" placeholder="输入验证码" class=" sign-input yanz-input" v-model="verifyNum" />
				 <button type="primary" plain="true" class="yanz-btn" :disabled="verifyDisabled" @click="sendyanzheng()">{{sendVerify}}</button>
			</view>
			<view class="">
				<button type=""  class="sign-btn" @click="getPassword()" :disabled="getAbled">确认修改</button>
			</view>
			<uni-popup ref="popup"  type="center" class="popupstyle">{{popupMessage}}</uni-popup>
		</view>
		
	</view>
</template>

<script>
	export default{
		data() {
			return {
				password:'',
				password2:'',
				popupMessage:"",
				verifyNum:'',
				referrer:'',
				sendVerify: '获取验证码',
				verifyDisabled:false,
				getAbled:false
			}
		},
		methods: {
			sendyanzheng:function(){
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
			getPassword:function(){
				if(this.password==''){
					this.popupMessage="请输入新密码"
					this.$refs.popup.open()
					return false
				}else if(this.password2==''){
					this.popupMessage="请确认密码"
					this.$refs.popup.open()
					return false
				}else if(this.password!==this.password2){
					this.popupMessage="密码不一致请重新输入"
					this.$refs.popup.open()
					return false
				}else if(this.verifyNum==''){
					this.popupMessage="请输入验证码"
					this.$refs.popup.open()
					return false
				}
				
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
		line-height: 80upx;
		padding-top: 20upx;
		margin-top: 20upx;
		height: 70upx;
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
		background-color: #d41c26;
		color: #FFFFFF;
	}
	.login-input{
		padding-top: 60upx;
	}
	.popupstyle{
		color: #FFFFFF;
	}
	.login-btn{
		text-align: right;
		font-size: 24upx;
		color: #d41c26;
		margin-top: 28upx;
		margin-right: 80upx;
	}
	.old-paw{
		margin-top: 120upx;
	}
	.locked-icon{
		vertical-align: bottom;
	}
</style>
