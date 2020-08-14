<template>
	<view class="integralexchange-box">
		<view class="integral-usable-box">
			<view class="integral-usable">
				<text class="integral">{{score}}</text>
				<text>可用积分</text>
			</view>
			<view class="integral-unusable">
				<text class="integral">0</text>
				<text>冻结积分</text>
			</view>
		</view>
		<view class="integral-exchange-order">
			<view class="integral-order-item">
				<view class="integral-order-warning">
					没有更多了
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
export default {
	data (){
		return{
			score:0,
		}
	},
	onLoad() {
	this.score=uni.getStorageSync('score');
	},
	methods:{
		
	},
}
</script>

<style scoped>
	page{
		background-color:#f4f8fb;
	}
.integral-usable-box{
	background-color: #ff5500;
	padding: 80upx;
	display: flex;
	color: #FFFFFF;
	font-size: 24upx;
	justify-content: space-between;
	
}
.integral-usable,.integral-unusable{
	width: 300upx;
	text-align: center;
}
.integral{
	display: block;
	font-size: 40upx;
}
.integral-exchange-order{
	width: 600upx;
	min-height:900upx ;
	background-color: #FFFFFF;
	margin: 0 auto;
	margin-top: -50upx;
	border-radius: 20upx;
}
.integral-order-item{
	padding: 40upx 10upx;
}
.integral-order-warning{
	text-align: center;
	font-size: 24upx;
	color: #A3A3A3;
}
</style>
