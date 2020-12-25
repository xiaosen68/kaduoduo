<template>
	<view class="fenrun-box">
		<view class="home-box1">
			<view  class="home-nav">
				<uni-icons type="back" class="home-nav-item home-nav-item1" @click="backFn" color="#ffffff" size="24"></uni-icons>
				<view class="home-title">
					佣金
				</view>
				<view class=" home-nav-item"  @click="lookList">
					佣金明细
				</view>
			</view>
			<view class="fenrun-num-box">
				<view class="yesterday-fenrun">
					<text class="fenrun-money">{{revenueAmount.theDayBeforeRevenueAmount}}</text>
					<view class="">
						昨日佣金(元)
					</view>
				</view>
				<view class="today-fenrun">
					<text class="fenrun-money">{{revenueAmount.sameDayRevenueAmount}}</text>
					<view class="">
						今日佣金(元)
					</view>
				</view>
			</view>
		</view>
		<view class="kzfenrun-box">
			<text>未提现佣金(元)</text>
			<view class="kzfr-num">{{revenueAmount.revenue}}</view>
			<!-- <router-link to="{name:'rolloutmoney'}" class="roll-out-btn">提现</router-link> -->
			<!-- 	<navigator url="./rollout"  class="roll-out-btn">
				转出	
				</navigator> -->
			<view class="circle">
				
			</view>
		</view>
		<view class="all-fenrun-box">
			<text class="all-fenrun-num">{{revenueAmount.sumRevenue}}</text>
			<view class="">
				共累计佣金(元)
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
			 revenueAmount:{},
		}
	},
	onLoad() {
	// 用户分润初始化
	uni.request({
		method:'GET',
	    url: this.$baseUrl+'/api/v1/pri/my/myRevenueAmount', 
	    data: {
	    },
	    header: {
			'token': uni.getStorageSync('token'),
			'Content-Type':'application/json' //自定义请求头信息
	    },
	    success: (res) => {
			// console.log(res)
			if(res.data.code==0){
				this.revenueAmount=res.data.data;
				// console.log(this.revenueAmount)
			}else if(res.data.code==-1){
				this.popupMessage=res.data.msg;
				// this.$refs.popup.open();
			}else{
				// console.log(res)
			}
	       
	    }
	});	
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
	line-height: 1em;
}
.home-nav-item1{
	text-align: left;
}
.home-title{
	font-size: 20px;
	line-height: 1em;
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
