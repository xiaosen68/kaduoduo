<template>
	<view class="fenrun-box">
		<view class="home-box1">
			<view  class="home-nav">
				<uni-icons type="back" class="home-nav-item home-nav-item1" @click="backFn" color="#ffffff" size="24"></uni-icons>
				<view >
					收益
				</view>
				<view class=" home-nav-item"  @click="lookList">
					收益明细
				</view>
			</view>
			<view class="fenrun-num-box">
				<view class="yesterday-fenrun">
					<text class="fenrun-money">0.00</text>
					<view class="">
						昨日收益(元)
					</view>
				</view>
				<view class="today-fenrun">
					<text class="fenrun-money">0.00</text>
					<view class="">
						今日收益(元)
					</view>
				</view>
			</view>
		</view>
		<view class="kzfenrun-box">
			<text>当前可转出收益(元)</text>
			<view class="kzfr-num">1.33</view>
			<router-link to="{name:'rollout'}" class="roll-out-btn">转出	</router-link>
			<!-- 	<navigator url="./rollout"  class="roll-out-btn">
				转出	
				</navigator> -->
			<view class="circle">
				
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
		},
		lookList(){
			// uni.navigateTo({
			// 	url:"./fenrunlist"
			// })
			this.$Router.push({name:'fenrunlist'})
		}

	}
}
</script>

<style>
	.home-box1{
		padding-top: var(--status-bar-height);
		background-color:#d41c26;
	}
	.fenrun-box{
		/* padding-top: var(--status-bar-height); */
	}
.home-nav{
		border: none;
		/* padding-top: var(--status-bar-height); */
		padding: 40upx 20upx 20upx 20upx ;
		font-size: 32upx;
		color:#ffffff;
		background-color:#d41c26;
		display: flex;
		justify-content: space-between;
}
.home-nav-item{
	width: 140upx;
	text-align: center;
	font-size: 24upx;
}
.home-nav-item1{
	text-align: left;
}

.fenrun-num-box{
	width: 100%;
	/* height: 200upx; */
	background-color: #d91829;
	position: relative;
	/* top: -4upx; */
	padding-top: 40upx;
	padding-bottom: 60upx;
}
.yesterday-fenrun,.today-fenrun{
	display: inline-block;
	width: 49%;
	/* height: 100upx; */
	text-align: center;
	color: #FFFFFF;
	font-size: 24upx;
}
.today-fenrun{
	border-left: 2upx solid #f4f8fb;
}
.fenrun-money{
	font-size: 40upx;
	line-height: 2em;
}
.kzfenrun-box{
	width: 100%;
	/* height: 600upx; */
	padding-top: 200upx;
	background-color: #f7f7f7;
	text-align: center;
	font-size: 32upx;
}
.kzfr-num{
	font-size: 60upx;
	line-height: 2em;
}
.roll-out-btn{
	display: inline-block;
	height: 60upx;
	line-height: 60upx;
	width: 140upx;
	padding: 10upx 20upx;
	margin-top: 20upx;
	border: 2upx solid #b7babe;
	background-color: #FFFFFF;
	border-radius: 60upx;
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
