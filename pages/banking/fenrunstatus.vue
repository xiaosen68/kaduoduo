<template>
	<view class="fenrun-status-box">
		 <view class="fenrun-status">
			<view class="fenrun-title">
				分润明细
			</view>
			<view class="fenrun-num">
				<text>订单金额</text>
				<view >
					￥<text class="fenrun-money">452.00</text>
				</view>
			</view>
			<view class="fenrun-status1">
				<view class="fenrun-status2">
					刷卡人费率 <text class="fenrun-num1">0.7%</text>
				</view>
				<view class="fenrun-status2">
					刷卡人号码 <text class="fenrun-num1">12345678901</text>
				</view>
				<view class="fenrun-status2">
					订单号 <text class="fenrun-num1">123456789011234</text>
				</view>
				<view class="fenrun-status2">
					备注 <text class="fenrun-num1">差额费率分润</text>
				</view>
				<view class="fenrun-date-box">
					订单日期：2020-05016 15:02:03
				</view>
			</view>
			<view class="fenrun-title2 ">
				收益金额
				<text class="fenrun-jine">￥<text class="fenrun-jine-money">0.22</text></text>
			</view>
			<view class="fenrun-wrang">
				(全民分享经济模式、推广越多、收益越高)
			</view>
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
.fenrun-status-box{
	width: 100%;
	height: 92vh;
	padding-top:40upx;
	background-color: #f7f7f7;
	
}
.fenrun-status{
	position: relative;
	width: 600upx;
	/* height: 1000upx; */
	margin: 0 auto;
	padding: 40upx;
	background-color: #FFFFFF;
}
.fenrun-title{
	border-top: 1upx solid rgba(0,0,0,0);
	border-left: 8upx solid #d91829;
		padding-left: 10upx;
}
.fenrun-title2{
	border-top: 1upx solid rgba(0,0,0,0);
	margin-top: 40upx;
	border-left: 8upx solid #d91829;
	padding-left: 10upx;
	position: relative;
}
.fenrun-jine{
	position: absolute;
	right: 20upx;
}
.fenrun-jine-money{
	color: #ff5500;
	font-size: 48upx;
	font-weight: 600;
}
.fenrun-num{
	text-align: center;
	font-size: 40upx;
	margin-top: 40upx;
}
.fenrun-money{
	color: #ff5500;
	font-size: 76upx;
	line-height: 140upx;
}
.fenrun-status1{
	position: relative;
	margin-top: 40upx;
	height: 540upx;
	border-bottom: 2upx solid #f4f8fb;
}
.fenrun-status2{
	position: relative;
	line-height: 80upx;
	font-size: 30upx;
	
}
.fenrun-num1{
	font-size: 24upx;
	color: #a3a3a3;
	position: absolute;
	right: 20upx;
	
}
.fenrun-date-box{
	font-size: 24upx;
	color: #A3A3A3;
	position: absolute;
	bottom: 10upx;
}
.fenrun-wrang{
	width: 600upx;
	/* position: absolute; */
	text-align: center;
	font-size: 24upx;
	color: #A3A3A3;
	bottom: 10upx;
	margin-top: 40upx;
	/* margin-bottom: 20upx; */
}
</style>
