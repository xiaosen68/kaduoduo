<template>
	<view class="billdetial-box">
		<view class="goods-list">
			<view class="goods-item">
				<image class="goods-pic" src="../../static/img/bank/feilv.png" mode=""></image>
				<view class="goods-status">
					<view class="">
						哈哈哈提货卡
					</view>
					<view class="">
						单价:23.0
					</view>
					<view class="zhekou">
						成交价:23.0
					</view>
				</view>
				<view class="goods-num">
					<view class="">
						X16
					</view>
					<view class="goods-all-price">
						总价格：2309.00
					</view>
				</view>
			</view>
		</view>
		
		<view class="bill-type">
			<view class="deal-item">
				<text>订单类型:</text>
				<text class="bill-types">商城消费</text>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					订单编号
				</view>
				<view class="deal-detial">
					213123123123
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					订单状态
				</view>
				<view class="deal-detial take-delivery-status">
					未收货
				</view>
			</view>
		</view>
		<view class="bill-type">
			<view class="deal-item">
				<view class="deal-title">
					快递编号
				</view>
				<view class="deal-detial">
					<text>213123122131231233123</text>
					<view class="copy-btn">
						复制
					</view>
				</view>
			</view>
		</view>
		<view class="deal-box">
			<view class="deal-item">
				<view class="deal-title">
					支付状态
				</view>
				<view class="deal-detial">
					已支付
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					支付金额
				</view>
				<view class="deal-detial">
					2309.00元
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					交易费率
				</view>
				<view class="deal-detial">
					2.3%
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					创建时间
				</view>
				<view class="deal-detial">
					2020-02-02 28:12:12
				</view>
			</view>
			
			<view class="deal-item">
				<view class="deal-title">
					交易单号
				</view>
				<view class="deal-detial">
					21312312312
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					商户号
				</view>
				<view class="deal-detial">
					213123123123
				</view>
			</view>
		</view>
		<view class="take-delivery-btn">
			确认收货
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
	.billdetial-box{
		min-height:94vh ;
		border:12upx solid #f4f8fb;
		border-bottom: none;
		font-size: 28upx;
		}
.goods-item{
	display: flex;
	justify-content: space-between;
	padding: 20upx;
	/* border:12upx solid #f4f8fb; */
	border-bottom: 12upx solid #f4f8fb;
	/* border-top: none; */
	font-size: 24upx;
}
.goods-pic{
	width: 200upx;
	height: 140upx;
}
.goods-status{
	width: 400upx;
	text-align: left;
	line-height: 40upx;
}
.goods-price{
	display: flex;
	padding: 20upx;
	justify-content: space-between;
	border-bottom: 12upx solid #f4f8fb;
	}
.goods-ft{
	font-size: 24upx;
}
.goos-ft-num{
	font-size: 28upx;
}
.goods-price-item{
	width: 200upx;
	text-align: center;
}
.bill-type{
	padding: 20upx;
	border-bottom: 12upx solid #f4f8fb;
	}
	.bill-types{
		padding-left: 30upx;
		font-weight: 700;
	}
	.deal-box{
		padding: 20upx;
		border-bottom: 12upx solid #f4f8fb;
	}
	.deal-item{
		display: flex;
		justify-content: space-between;
		border-bottom: 2upx solid #f4f8fb;
		line-height: 28upx;
		padding: 20upx;
	}
	.deal-detial{
		text-align: right;
	}
	.deal-title{
		
	}
	.goods-all-price{
		color: #FF0000;
		margin-top: 10upx;
	}
	.copy-btn{
		display: inline-block;
		padding: 10upx 20upx ;
		margin-left: 10upx;
		font-size: 24upx;
		background-color: #FF0000;
		color: #FFFFFF;
		vertical-align: middle;
		border-radius: 10upx;
	}
	.take-delivery-btn{
		width: 600upx;
		padding: 20upx;
		margin: 0 auto;
		margin-top: 10upx;
		text-align: center;
		background-color: #FF0000;
		color: #FFFFFF;
		border-radius: 10upx;
	}
	.take-delivery-status{
		color: #FF0000;
		font-weight: 600;
	}
</style>
