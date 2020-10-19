<template>
	<view class="billdetial-box">
		<view class="goods-list" v-if="datas.orderList">
			<view class="goods-item" v-for="item in datas.orderList">
				<image class="goods-pic" :src="item.productUrl" mode=""></image>
				<view class="goods-status">
					<view class="">
						{{item.productName}}
					</view>
					<view class="">
						成交价:{{item.transactionPrice}}
					</view>
					<view class="">
						挂牌价:{{item.mailingPrice}}
					</view>
				</view>
				<view class="goods-num">
					{{item.payamount}}
				</view>
			</view>
		</view>
		<view class="goods-price">
			<view class="goods-price-item">
				<view class="goods-ft">
					商品总价
				</view>
				<text class="goos-ft-num">{{datas.totalTransactionPrice}}</text>
			</view>
			<view class="goods-price-item">
				<view class="goods-ft">
					寄售总价
				</view>
				<text class="goos-ft-num">{{datas.totalMailingPrice}}</text>
			</view>
			<view class="goods-price-item">
				<view class="goods-ft">
					寄售垫付
				</view>
				<text class="goos-ft-num">{{datas.totalSellingPrice}}</text>
			</view>
		</view>
		<view class="bill-type">
			<view class="deal-item">
				<text>订单类型:</text>
				<text class="bill-types">{{datas.passageWayName}}</text>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					订单编号
				</view>
				<view class="deal-detial">
					{{datas.orderNo}}
				</view>
			</view>
		</view>
		<view class="deal-box">
			<view class="deal-item">
				<view class="deal-title">
					完成日期
				</view>
				<view class="deal-detial">
					{{datas.finishDate|datafilter}}
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					寄售垫付金额
				</view>
				<view class="deal-detial">
					{{datas.totalSellingPrice}}元
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					寄售手续费
				</view>
				<view class="deal-detial">
					{{datas.fee}}元/笔
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					创建时间
				</view>
				<view class="deal-detial">
					{{datas.orderTime}}
				</view>
			</view>
			
			<view class="deal-item">
				<view class="deal-title">
					交易单号
				</view>
				<view class="deal-detial">
					{{datas.payNo}}
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					商户号
				</view>
				<view class="deal-detial">
					{{datas.merchId}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data (){
		return{
			datas:'',
		}
	},
	onLoad:function() {
		this.datas=JSON.parse(this.$Route.query.states);
	},
	methods:{
		
	},
	filters:{
		datafilter:function(val){
			return val.slice(0,4)+'-'+val.slice(4,6)+'-'+val.slice(6,8)
		}
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
