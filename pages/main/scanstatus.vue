<template>
	<view class="scanstatus-box">
		<view class="scanstatus-money">
			<view class="scanstatus-name">{{datas.statusMsg}}</view>
			<text class="money-icon">￥</text>{{moneyNum}}
			<view class="scanstatus-status">
				交易成功
			</view>
		</view>
		<view class="scanstatus-list">
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					支付状态：
				</view>
				<view class="scanstatus-value">
					{{datas.statusMsg}}
				</view>
			</view>
			<!-- <view class="scanstatus-item">
				<view class="scanstatus-title">
					收款商户：
				</view>
				<view class="scanstatus-value">
					小黑
				</view>
			</view> -->
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					支付时间：
				</view>
				<view class="scanstatus-value">
					{{datas.orderTime}}
				</view>
			</view>
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					订单编号：
				</view>
				<view class="scanstatus-value">
					{{datas.orderNo}}
				</view>
			</view>
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					商户号：
				</view>
				<view class="scanstatus-value">
					{{datas.merchId}}
				</view>
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
				moneyNum:'',
				datas:'',
			}
		},
		onLoad(){
			this.datas=JSON.parse(this.$Route.query.data);
			
		},
		methods: {
		},
		computed:{
			
		}
		
	}
	
</script>

<style scoped>
	uni-page-body{
			height: 100% ; 
		}
	.scanstatus-box{
		height:100%;
		background-color:  #f3f5f5;
	}
	.money-icon{
		font-size: 60upx;
		/* font-weight: 600; */
	}
.scanstatus-money{
	padding-top: 80upx;
	text-align: center;
	font-size: 80upx;
	font-weight: 600;
	
}
.scanstatus-name,.scanstatus-status{
	font-size: 24upx;
}
.scanstatus-list{
	margin: 80upx 20upx 10upx;
	border-radius: 20upx;
	min-height: 700upx;
	padding: 80upx 0;
	font-size: 28upx;
	background-color: #FFFFFF;
}
.scanstatus-item{
	display: flex;
	padding: 10upx 40upx;
}
.scanstatus-title{
	width: 160upx;
	color: #A3A3A3;
	text-align: right;
}
</style>
