<template>
	<view class="billdetial-box">
		<view class="goods-list" v-if="items.orderList">
			<view class="goods-item" v-for="item in items.orderList">
				<image class="goods-pic" :src="item.productUrl" mode=""></image>
				<view class="goods-status">
					<view class="">
						{{item.productName}}
					</view>
					<view class="">
						单价:{{item.transactionPrice}}
					</view>
					<view class="zhekou">
						成交价:{{item.transactionPrice*item.discount}}
					</view>
				</view>
				<view class="goods-num">
					<view class="">
						X{{item.payamount}}
					</view>
					<view class="goods-all-price">
						总价格：{{item.payamount*item.transactionPrice*item.discount}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="bill-type">
			<view class="deal-item">
				<text>订单类型:</text>
				<text class="bill-types">{{items.orderType|typefilter}}</text>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					订单编号
				</view>
				<view class="deal-detial">
					{{items.orderNo}}
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					订单状态
				</view>
				<view class="deal-detial take-delivery-status">
					{{items.stateMsg}}
				</view>
			</view>
		</view>
		<view class="deal-box">
			<!-- <view class="deal-item">
				<view class="deal-title">
					支付状态
				</view>
				<view class="deal-detial">
					{{items.stateMsg}}
				</view>
			</view> -->
			<view class="deal-item">
				<view class="deal-title">
					支付金额
				</view>
				<view class="deal-detial">
					{{items.totalTransactionPrice}}元
				</view>
			</view>
			
			<view class="deal-item">
				<view class="deal-title">
					创建时间
				</view>
				<view class="deal-detial">
					{{items.orderTime}}
				</view>
			</view>
			<view class="deal-item">
				<view class="deal-title">
					商户号
				</view>
				<view class="deal-detial">
					{{items.merchId}}
				</view>
			</view>
			<view class="deal-item" v-if="items.region" @click="copyFn(items)">
				<view class="deal-title">
					收货地址
				</view>
				<view class="deal-detial">
					{{items.region}}{{items.addressDetails}}
				</view>
			</view>
			<view class="deal-item" v-if="items.customerName">
				<view class="deal-title">
					收货人
				</view>
				<view class="deal-detial">
					{{items.customerName}} {{items.customerPhone}}
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
export default {
	data (){
		return{
				items:'',
		}
	},
	onLoad() {
		console.log(this.$Route.query.item);
		this.items=JSON.parse(this.$Route.query.item);
		console.log(this.items)
	},
	methods:{
		copyFn:function(dd){
			//#ifndef H5
				uni.setClipboardData({
				    data: dd.region+dd.addressDetails+dd.customerName+dd.customerPhone,
				    success: function () {
						this.popupCenterMessage='复制收货人信息成功'
							this.$refs.popup.open()
				    }
				});
			//#endif	
			}
	},
	filters:{
		typefilter:function(val){
			if(val=='MEMBER_PLUS'){
				return '会员PLUS'
			}else if(val=='EXPRESS_PAYMENT'){
				return '快捷支付'
			}else if(val=='CARD_COUPON_SPACE'){
				return '卡券空间'
			}else if(val=='CONSUMPTION_ZONE'){
				return '消费专区'
			}else if(val=='CUSTOM_ORDER'){
				return '扫码支付'
			}
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
