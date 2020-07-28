<template>
	<view class="myteam-box">
		<view class="myteam-list">
			<view  class="myteam-item" >
				<image class="v-head" src="../../static/img/vhead/V5.png" mode=""></image>
				<view class="myteam-num-box">
					<view class="myteam-v-name">
						王*森 
					</view>
					<view class="">
					业务合伙人	
					</view>
				</view>
				<view class="my-team-phone-box">
					<view class="">
						157****1234
					</view>
					<view class="">
						注册日期:2020-02-02
					</view>
				</view>
				<uni-icons @click="callFn()" type="phone" size="36" color="#fe7f75" class="myteam-status"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	methods:{
		callFn:function(ph){
			uni.makePhoneCall({
			    phoneNumber: ph //仅为示例
			});
		}
	}
	
}
</script>

<style>
	.myteam-box{
		
	}
	.myteam-title-box{
		display: flex;
		border-top: 12upx solid #f4f8fb;
		border-bottom: 12upx solid #f4f8fb;
		justify-content: space-between;
		text-align: center;
		padding: 20upx 0;
	}
	.myteam-title{
		width: 180upx;
		/* height: 40upx; */
		font-size: 24upx;
		border-left: 2upx solid #f4f8fb;
	}
	.myteam-num{
		color: #d91829;
		}
	.myteam-item{
		padding: 12upx 40upx;
		border-bottom: 4upx solid #f4f8fb;
	}
	.v-head{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		margin-right: 20upx;
		vertical-align: middle;
	}
	.myteam-num-box{
		display: inline-block;
		width: 180upx;
		font-size: 24upx;
		vertical-align: middle;
	}
	.my-team-phone-box{
		display: inline-block;
		width: 280upx;
		font-size: 24upx;
		vertical-align: middle;
		text-align: right;
		}
	.myteam-v-name{
		font-size: 34upx;
		font-weight: 700;
		
	}
	.myteam-status{
		position: absolute;
		right: 40upx;
		line-height: 100upx;
	}
	.myteam-jj{
		margin-left: 20upx;
	}
	.myteam-number{
		color: #d91829;
	}
</style>
