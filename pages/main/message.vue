<template>
	
	<view class="message-list">
		<view class="message-head">
			<!-- <uni-icons type="back" class="message-left" @click="backFn" color="#000000" size="24"></uni-icons> -->
			<view class="message-button-box">
				<view class="message-button" :class="{messageselect:select}" @click="messageSelect(1)">
					个人信息
				</view>
				<view class="message-button" :class="{messageselect:!select}" @click="messageSelect(2)">
					平台信息
				</view>
			</view>
		</view>
		<uni-card  
		v-for="item in messageList"
		    :title="item.title" 
			:id="item.id"
		    mode="title" 
		    thumbnail="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg" 
		    :extra="item.create_time" 
		>
		   {{item.content}}
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				popupMessage:'',
				messageList:[],
				select:true,
			}
		},
		onReady(){
			// 获取个人通告
			uni.request({
				method:'GET',
			    url: this.$baseUrl+'/api/v1/pri/meassage/findByPersonalMessage', 
			    data: {
			    },
			    header: {
					'token':uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
								this.messageList=res.data.data;
								
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						// this.$refs.popup.open();
					}
			       
			    }
			});
		},
		methods: {
			backFn:function(){
				this.$Router.back(1)
			},
		messageSelect:function(n){
			if(n==1){
				this.select=true;
			}else{
				this.select=false
			}
			if(this.select){
				// 获取个人通告
				uni.request({
					method:'GET',
				    url: this.$baseUrl+'/api/v1/pri/meassage/findByPersonalMessage', 
				    data: {
				    },
				    header: {
						'token':uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res)
						if(res.data.code==0){
									this.messageList=res.data.data;
									
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							// this.$refs.popup.open();
						}
				       
				    }
				});
			}else{
				// 获取平台通告
				uni.request({
					method:'GET',
				    url: this.$baseUrl+'/api/v1/pri/meassage/findByPlatformMessage', 
				    data: {
				    },
				    header: {
						'token':uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						console.log(res)
						if(res.data.code==0){
									this.messageList=res.data.data;
									
						}else if(res.data.code==-1){
							this.popupMessage=res.data.msg;
							// this.$refs.popup.open();
						}
				       
				    }
				});
			}
		}
		}
	}
</script>

<style>
	.message-head{
		/* line-height: 80upx; */
		border-bottom: 10upx solid #ebebeb;
	}
	.message-left{
		float: left;
	}
	.message-button-box{
		width: 300upx;
		/* height: 60upx; */
		margin: 10upx auto;
		border: 2upx solid #000000;
		border-radius: 10upx;
	}
	.message-button{
		display: inline-block;
		width: 150upx;
		text-align: center;
		font-size: 20upx;
		vertical-align: middle;
	}
	.messageselect{
		color: #FFFFFF;
		line-height: 60upx;
		background-color: #000000;
	}
</style>
