<template>
	<view class="">
		<view class="yue-box">
			<view class="kzfenrun-box">
				<text>当前可提现余额(元)</text>
				<view class="kzfr-num">60.33</view>
					<router-link to="{name:'rolloutmoney'}"  class="roll-out-btn">
					我要结算
					</router-link>
				<view class="circle">
					
				</view>
			</view>
			
			</view>
			<view class="all-fenrun-box">
				<text class="all-fenrun-num">62.12</text>
				<view class="">
					共累计收益(元)
				</view>
			</view>
	</view>
	
		
		
	
</template>

<script>	
export default {
  components: {
  },
	data (){
		return{
			cardtype:true, 
			list: [], // 数据集
			currPage: 1, // 当前页码
			totalPage: 1 ,// 总页数
			addcredit:true,
			changeCardUrl:''
		}
	},
	methods:{
		backFn(){
			// uni.navigateBack({
			// 	delta:1
			// })
			this.$Router.back(1)
		}

	}
}
</script>

<style>
.kzfenrun-box{
	background-color: #d91829;
	color: #FFFFFF;
}
.yue-box{
	width: 100%;
	/* height: 600upx; */
	padding-top: 200upx;
	background-color:  #d91829;
	text-align: center;
	/* font-size: 32upx; */
}
.kzfr-num{
	font-size: 60upx;
	line-height: 2em;
}
.roll-out-btn{
	display: inline-block;
	height: 60upx;
	line-height: 60upx;
	width: 180upx;
	padding: 10upx 20upx;
	margin-top: 20upx;
	border: 2upx solid #b7babe;
	background-color: #FFFFFF;
	border-radius: 60upx;
	color: #d91829;
}
.circle{
	width: 100%;
	height: 160upx;
	margin-top: 100upx;
	border-radius: 50% 50% 0 0;
	background-color: #FFFFFF;
}
.all-fenrun-box{
	font-size: 40upx;
	text-align: center;
}
.all-fenrun-num{
	font-size: 60upx;
}
</style>
