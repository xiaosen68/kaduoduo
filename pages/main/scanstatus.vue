<template>
	<view class="scanstatus-box">
		<view class="scanstatus-money">
			<view class="scanstatus-name">哈哈哈</view>
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
					预授权中
				</view>
			</view>
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					收款商户：
				</view>
				<view class="scanstatus-value">
					小黑
				</view>
			</view>
			
		
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					交易通道：
				</view>
				<view class="scanstatus-value">
					NP
				</view>
			</view>
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					交易说明：
				</view>
				<view class="scanstatus-value">
					驱蚊器翁群无
				</view>
			</view>
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					支付时间：
				</view>
				<view class="scanstatus-value">
					2020-07-28 23:21:22
				</view>
			</view>
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					交易编号：
				</view>
				<view class="scanstatus-value">
					123123123123123
				</view>
			</view>
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					订单编号：
				</view>
				<view class="scanstatus-value">
					12312312312321
				</view>
			</view>
			<view class="scanstatus-item">
				<view class="scanstatus-title">
					商户号：
				</view>
				<view class="scanstatus-value">
					12312312312321
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
				moneyNum:''
			}
		},
		methods: {
		},
		computed:{
			
		},
		onLoad:function(option) {
			this.moneyNum=this.$Route.query.moneyNum;
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
