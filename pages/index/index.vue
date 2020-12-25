<template>
	<view class="container">
		<view>
			<image class="image" src="../../static/img/tou1.jpg" mode=""></image>
		</view>
		<view>
			<text class="company-name">有粒糖商城</text>
		</view>
		<view class="login-input">
			<input type="number" v-model="phone" maxlength="11" placeholder="请输入手机号" class="input-num uniinput" value="" />
		</view>
		<view class="login-input">
			<input type="text" password v-model="password" maxlength="12" placeholder="请输入密码" class="uniinput" value="" />
		</view>
		<view class="btn-grop-box ">
			<view class=" btn-grop">
				<!-- <navigator url="../sign/sign" class="sign-but" hover-class="none">去注册</navigator> -->
				<router-link to="{name:sign}" class="sign-but">去注册</router-link>
				<router-link to="{name:forgetpassword}" class="forget-psw">忘记密码</router-link>
				<!-- <navigator url="../password/forgetpassword"  class="forget-psw" hover-class="none">忘记密码</navigator> -->
			</view>
		</view>
		<view class="">
			<view class="login-btn" @click="login">登录</view>
		</view>
		<uni-popup ref="popup" type="center" class="popupstyle">
			<view class="popupCenter-box">{{popupMessage}}</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				popupMessage: '',
				password: '',
				phone: ''
			}
		},
		onReady() {
			try{
				this.phone=  uni.getStorageSync('phone');
			}catch(e){
				
			}
		},
		methods: {
			isPoneAvailable: function(pone) {
				var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if (pone == '') {
					this.popupMessage = "请输入手机号"
					return false;
				} else if (!myreg.test(pone)) {
					this.popupMessage = "手机号格式错误"
					return false;
				}
				return true;
			},
			login: function() {

				// this.$Router.pushTab('/pages/main/homepage')
				if (!this.isPoneAvailable(this.phone)) {
					uni.showToast({
					    title: this.popupMessage,
						mask:true,
						icon:'none',
					    duration: 2000
					});
					return false
				} else if (this.password == '') {
					this.popupMessage = "请输入密码"
					uni.showToast({
					    title: this.popupMessage,
						mask:true,
						icon:'none',
					    duration: 2000
					});
					return false
				};
				// 记住账号
				try{
					 uni.setStorageSync('phone', this.phone);
				}catch(e){
					
				}
				uni.request({
					method: 'POST',
					url: this.$baseUrl + '/api/v1/pri/login/login',
					data: {
						phone: this.phone,
						password: this.password
					},
					header: {
						'Content-Type': 'application/json' //自定义请求头信息
					},
					success: (res) => {
						if (res.data.code == 0) {

							// 储存token
							uni.setStorageSync('token', res.data.data.token);
							uni.setStorageSync('userId', res.data.data.userId);
							// this.$store.commit("setToken",res.data.data);
							// console.log(uni.getStorageSync('token'))
							this.$Router.pushTab('/pages/main/homepage')
						
						} else if (res.data.code == -1) {
							this.popupMessage = res.data.msg;
							uni.showToast({
							    title: this.popupMessage,
								mask:true,
								icon:'none',
							    duration: 2000
							});
						}

					},
					fail :()=> {
						this.popupMessage = '请稍后重试';
						uni.showToast({
						    title: this.popupMessage,
							mask:true,
							icon:'none',
						    duration: 2000
						});
					}
				});
			}
		}
	}
</script>

<style>
	.container {
		box-sizing: border-box;
		padding: 20upx;
		width: 100%;
		text-align: center;
		font-size: 24upx;
		line-height: 48upx;
	}

	.uniinput {
		border: #9fa0a0 2upx solid;
		height: 100upx;
		width: 600upx;
		text-align: center;
		margin: 0 auto;
		line-height: 100upx;
		border-radius: 100upx 100upx;
		font-size: 28upx;
		/* text-indent: 60upx; */

	}

	.input-num {
		margin-top: 60upx;
		margin-bottom: 20upx;
	}

	.image {
		width: 166upx;
		height: 166upx;
		margin: 120upx auto 20upx auto;
	}

	.company-name {
		font-size: 40upx;
		font-weight: 700;
	}

	.btn-grop-box {
		display: inline-block;
		width: 580upx;
	}

	.btn-grop {
		display: flex;
		justify-content: space-between;
		/* width: 600upx; */
		margin-top: 20upx;
		margin-bottom: 40upx;
		/* text-align: left; */
		/* text-indent: 30upx; */
	}

	.sign-but,
	.forget-psw {
		/* display: inline-block; */
	}

	.forget-psw {
		/* position: relative; */
		/* left: 330upx; */
	}

	.login-btn {
		height: 80upx;
		width: 600upx;
		font-size: 24upx;
		text-align: center;
		margin: 0 auto;
		line-height: 80upx;
		border-radius: 80upx 80upx;
		background-color: #d71518;
		color: #FFFFFF;
	}

	.popupstyle {
		background-color: #FFFFFF;
		padding: 20upx 20upx;
	}

	.popupCenter-box {
		width: 400upx;
		padding: 40upx;
		text-align: center;
		border-radius: 20upx;
	}
</style>
