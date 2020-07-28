<template>
	<view class="myinfo-box">
		<view class="myinfo-item">
			<text class="myinfo-item-title">真实姓名</text>
			<text>王</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">手机号</text>
			<text>王</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">系统编号</text>
			<text>王</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">注册日期</text>
			<text>王</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">等级</text>
			<text>王</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">实名状态</text>
			<text>王</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">提现手续费</text>
			<text>王</text>
		</view>
	</view>
</template>

<script>
export default {
	data (){
		return{
		
		}
	},
	methods:{
		
	}
}
</script>

<style>
	.myinfo-box{
		padding-top: 40upx;
		}
	.myinfo-item{
		font-size: 36upx;
		padding: 0 40upx;
		line-height: 100upx;
		border-bottom: 2upx solid #f4f8fb;
		display: flex;
		color: #6f6f6f;
		justify-content: space-between;
	}
.myinfo-item-title{
	color: #000000;
	}
</style>
