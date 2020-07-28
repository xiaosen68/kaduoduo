<template>
	<view class="myteam-box">
		<view class="myteam-title-box">
			<view class="myteam-title">
				粉丝
				<view class="myteam-num">
					13
				</view>
			</view>
			<view class="myteam-title">
				注册用户
				<view class="myteam-num">
					13
				</view>
			</view>
			<view class="myteam-title">
				交易金额
				<view class="myteam-num">
					13
				</view>
			</view>
			<view class="myteam-title">
				分润
				<view class="myteam-num">
					13
				</view>
			</view>
		</view>
		<view class="myteam-list">
			<router-link  class="myteam-item" to="{name:'myteamstatus'}">
				<image class="v-head" src="../../static/img/vhead/V5.png" mode=""></image>
				<view class="myteam-num-box">
					<view class="myteam-v-name">
						联合创始人
					</view>
					<view class="">
						<text>直接推广<text class="myteam-number">0</text>人</text>
						<text class="myteam-jj">间接推广<text class="myteam-number">0</text>人</text>
					</view>
				</view>
				<uni-icons type="arrowright" class="myteam-status"></uni-icons>
			</router-link>
		</view>
	</view>
</template>

<script>
export default {
	
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
		width: 400upx;
		font-size: 24upx;
		vertical-align: middle;
	}
	.myteam-v-name{
		font-size: 34upx;
		font-weight: 700;
		
	}
	.myteam-status{
		position: absolute;
		right: 40upx;
		line-height: 80upx;
	}
	.myteam-jj{
		margin-left: 20upx;
	}
	.myteam-number{
		color: #d91829;
	}
</style>
