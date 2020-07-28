<template>
	<view class="">
		<view class="success-box" v-if="success">
			<image src="../../static/img/success.png" mode="" class="success-img"></image>
			<view class="success-message message">{{message}}</view>
		</view>
		<view class="fali-box" v-if="fail">
			<image src="../../static/img/fail.png" mode="" class="fail-img"></image>
			<view class="fail-message message">{{message}}</view>
		</view>
		<view class="waiting-box" v-if="waiting">
			<image src="../../static/img/waiting.png" mode="" class="waiting-img"></image>
			<view class="waiting-message message">{{message}}</view>
		</view>
		<button type="" class="login-btn" @click="backHome">返回首页</button>
	</view>
</template>

<script>
	export default {
		data (){
			return {
				message:'支付成功',
				success:false,
				fail:false,
				waiting:false
			}
		},
		onLoad: function (option) {
			console.log(option)
			this.message=option.message;
			if(option.type==="success"){
				this.success=true;
			}else if(option.type==="fail"){
				this.fail=true;
			}else if(option.type==="waiting"){
				this.waiting=true;
			}
		},
		methods: {
			backHome:function(){
				this.$Router.pushTab({name:'homepage'})
				
			}
		}
	}
</script>

<style>
	.success-box,.fali-box,.waiting-box{
		text-align: center;
		padding-top:100upx ;
	}
	.success-img,.fail-img,.waiting-img{
		width: 280upx;
		height: 280upx;
	}
	.message{
		padding-top: 20upx;
		font-size: 50upx;
	}
	.success-message{
		color: #ee242d;
	}
	.fail-message{
		color: #9fa0a0;
	}
	.waiting-message{
		/* color: #552120; */
		color: #ee242d;
	}
	.login-btn{
		height: 80upx;
		width: 600upx;
		text-align: center;
		margin: 0 auto;
		line-height: 80upx;
		border-radius: 80upx 80upx;
		background-color: #d71518;
		color: #FFFFFF;
		margin-top: 120upx;
	}
</style>
