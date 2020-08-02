<template>
	<view class="">
		<view class="yue-box">
			<view class="kzfenrun-box">
				<text>当前可提现余额(元)</text>
				<view class="kzfr-num">{{accountBalance.withdrawableAmount}}</view>
					<router-link to="{name:'rolloutmoney'}"  class="roll-out-btn">
					我要结算
					</router-link>
				<view class="circle">
					
				</view>
			</view>
			
			</view>
			<view class="all-fenrun-box">
				<text class="all-fenrun-num">{{accountBalance.totalRevenue}}</text>
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
			accountBalance:{},
		}
	},
	onLoad() {
			uni.request({
				method:'GET',
			    url: this.$baseUrl+'/api/v1/pri/my/myAccountBalance', 
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
						this.accountBalance=res.data.data;
						console.log(this.accountBalance)
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						// this.$refs.popup.open();
					}else{
						console.log(res)
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
