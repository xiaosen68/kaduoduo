<template>
	<view class="aboutme-box">
		<view class="niubei-heand">
			<image class="niubei-icon" src="../../static/img/niubei.jpg" mode=""></image>
			<view class="niubei">有粒糖</view>
			<view class="niubei-banben">
				2.0.1
			</view>
		</view>
		<view class="about-wrap">
			<view class="textindex">
				有粒糖：领先的一站式B2B电商交易平台，为客户提供快速成交的收款流程服务。
			</view>
			<view  class="textindex">
				“NP消费”是一款新兴的支付结算工具，具有延展账期的功能。实体商户(包括网上商户)可通过“NP消费”制定多样性的营销方案，达到增加用户流量与营业收入的目的。
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		components:{
		
		},
		data() {
			return {
			}
		},
		methods: {
		
		}
	}
	
</script>

<style>
.niubei-heand{
	padding-top: 60upx;
	text-align: center;
}
.niubei-icon{
	width: 180upx;
	height: 180upx;
	border-radius: 20upx;
}
.niubei{
	padding-top: 20upx;
	font-size: 32upx;
	font-weight: 600;
}
.niubei-banben{
	font-size: 24upx;
	color: #a3a3a3;
}
.about-wrap{
	font-size: 24upx;
	color: #a3a3a3;
	padding: 40upx;
	
}
.textindex{
	text-indent: 2em;
}
</style>
