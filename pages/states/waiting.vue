<template>
	<view class="">
		<view class="success-box">
			<image src="../../static/img/jingqingqidai.png" mode="" class="success-img"></image>
			<view class="success-message message">敬请期待！</view>
		</view>
		<button type="" class="login-btn" @click="backHome">返回首页</button>
	</view>
</template>

<script>
	export default {
		data (){
			return {
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
	.success-box{
		text-align: center;
		padding-top:100upx ;
	}
	.success-img{
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
