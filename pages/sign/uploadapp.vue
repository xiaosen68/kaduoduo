<template>
	<view class="uploadapp">
		<view class="upload-btn-box">
			<view class="upload-btn">
				Android下载
			</view>
			<view class="upload-btn">
				Iphone下载
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
	
</script>

<style>
	.uploadapp{
		width: 100%;
		height: 100vh;
		padding: 1upx 0;
		/* background-color: #f7f7f7; */
		background-color: #FF5722;
	}
	.upload-btn-box{
		padding: 280upx 0;
		width: 600upx;
		margin: 0 auto;
		margin-top: 40upx;
		border-radius: 20upx;
		/* background-color: #8F8F94; */
	}
	.upload-btn{
		width: 400upx;
		margin: 40upx auto;
		padding: 16upx 0;
		border-radius: 8upx;
		border: #FFFFFF 2upx solid;
		text-align: center;
		color: #FFFFFF;
	}
</style>
