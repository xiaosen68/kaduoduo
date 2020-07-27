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
						成交价:23.0
					</view>
					<view class="">
						挂牌价:123.0
					</view>
				</view>
				<view class="goods-num">
					X16
				</view>
			</view>
		</view>
		<view class="goods-price">
			<view class="goods-price-item">
				<view class="goods-ft">
					商品总价
				</view>
				<text class="goos-ft-num">2309.00</text>
			</view>
			<view class="goods-price-item">
				<view class="goods-ft">
					寄售总价
				</view>
				<text class="goos-ft-num">2400.00</text>
			</view>
			<view class="goods-price-item">
				<view class="goods-ft">
					寄售垫付
				</view>
				<text class="goos-ft-num">2240.00</text>
			</view>
		</view>
		<view class="bill-type">
			<view class="deal-item">
				<text>订单类型:</text>
				<text class="bill-types">卡券寄售</text>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					订单编号
				</view>
				<view class="deal-detial">
					213123123123
				</view>
			</view>
		</view>
		<view class="deal-box">
			<view class="deal-item">
				<view class="deal-title">
					寄售状态
				</view>
				<view class="deal-detial">
					已垫付
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					寄售垫付金额
				</view>
				<view class="deal-detial">
					2240.00元
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					寄售手续费
				</view>
				<view class="deal-detial">
					1.0元/笔
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
</style>
