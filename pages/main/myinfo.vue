<template>
	<view class="myinfo-box">
		<view class="myinfo-item">
			<text class="myinfo-item-title">真实姓名</text>
			<text>{{infoData.realName}}</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">手机号</text>
			<text>{{infoData.phone}}</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">系统编号</text>
			<text>{{infoData.userId}}</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">注册日期</text>
			<text>{{infoData.registerDate}}</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">等级</text>
			<text>{{infoData.userLevelName}}</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">实名状态</text>
			<text>{{infoData.isRealName}}</text>
		</view>
		<view class="myinfo-item">
			<text class="myinfo-item-title">提现手续费</text>
			<text>{{infoData.fee}}</text>
		</view>
	</view>
</template>

<script>
export default {
	data (){
		return{
		infoData:''
		}
	},
	onLoad(object){
		let _this=this;
		// 获取我的信息
		uni.request({
			method:'GET',
		    url: this.$baseUrl+'/api/v1/pri/my/myInfoData', 
		    data: {
		    },
		    header: {
				'token': uni.getStorageSync('token'),
				'Content-Type':'application/json' //自定义请求头信息
		    },
		    success: (res) => {
				console.log(res)
				if(res.data.code==0){
					this.infoData=res.data.data;
				}
		       
		    },
			complete: (data) => {
				console.log(data)
			}
		});
	
		
	},
	methods:{
		
	}
}
</script>

<style>
	.myinfo-box{
		padding-top: 40upx;
		}
	.myinfo-item{
		font-size: 36upx;
		padding: 0 40upx;
		line-height: 100upx;
		border-bottom: 2upx solid #f4f8fb;
		display: flex;
		color: #6f6f6f;
		justify-content: space-between;
	}
.myinfo-item-title{
	color: #000000;
	}
</style>
