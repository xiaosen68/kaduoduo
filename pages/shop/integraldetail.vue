<template>
	<view class="integraldetail-box">
		<view class="integraldetail-item">
			<view class="integral">
				+25
			</view>
			<view class="integral-date">
				2020/04/23 23:32:23
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
		
	},
}
</script>

<style scoped>
	page{
		background-color:#f4f8fb;
	}
.integraldetail-box{
	padding: 30upx;
}
.integraldetail-item{
	background-color: #FFFFFF;
	margin: 20upx 0;
	padding: 20upx 40upx;
	border-radius: 10upx;
}
.integral{
	display: inline-block;
	width: 200upx;
	color: #FF0000;
	font-size: 40upx;
	vertical-align: middle;
}
.integral-date{
	display: inline-block;
	font-size: 28upx;
	vertical-align: middle;
	width: 400upx;
	text-align: right;

}
</style>
