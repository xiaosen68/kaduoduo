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
				“牛贝”取自NEWPAY的谐音。“牛贝(NP)服务”是一款新兴的支付、营销、结算工具，具有延展信用卡账期的功能，是中小企业或个人的短期融资利器。
				当消费者持信用卡在实体商户(或网. 上商户)购买商品或享受服务时，选择“牛贝(NP)服务”，该笔消费即可增加30天信用卡账期，减轻持卡人的还款压力，让持卡人获取长期、低息、全额的资金。
				
			</view>
			<view  class="textindex">
				实体商户(或网上商户)可通过“牛贝(NP)服务”制定多样性的营销方案，吸引更多信用卡持卡人到店消费，达到商户扩大销售规模、增加营业收入的目的。
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
