<template>
	<view class="dengji-box">
		<view class="dengji-box1" @click="open">
			<view class="dengji-head-box">
				<image class="dengji-head" :src="headerPic" mode=""></image>
				<text>{{infoData.userLevelName}}</text>
			</view>
			<view class="dengji-status">
				<text>您当前是{{infoData.userLevelName}}</text>
				<text class="pinpai">有粒糖</text>
			</view>
		</view>
		<view class="dengji-box2">
			<view class="dengji-box2-title">
				当前佣金比率
			</view>
			<view class="dengji-title-list">
				<view class="dengji-title-one">
					通道名称
				</view>
				<view class="">
					佣金比率
				</view>
				<view class="">
					单笔手续费
				</view>
				<view class="">
					单笔限额
				</view>
			</view>
			<view class="dengji-status-list">
				<view class="dengji-status-item" v-for="item in myRate ">
					<view class="dengji-status-one">
					{{item.passageWayName}}
					</view>
					<view class="">
						{{item.myRate| rate}}
					</view>
					<view class="">
						<text class="line-font">3</text> 元
					</view>
					<view class="">
						{{item.singleLimit}}
					</view>
				</view>
				
			</view>

		</view>
		<uni-popup ref="popup" type="center">
			<view class="popupCenter-box">
			普通会员推荐10名实名会员即可升级为VIP会员
			</view>
			</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
export default {
	  components: {
	        uniPopup,
			},
	data (){
		return{
		myRate:[],
		infoData:'',
		headerPic:'',
		}
	},
	onLoad() {
			uni.request({
				method:'GET',
			    url: this.$baseUrl+'/api/v1/pri/my/myRate', 
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					// 'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					// console.log(res)
					if(res.data.code==0){
						this.myRate=res.data.data;
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
						uni.showToast({
						    title:this.popupMessage,
							mask:true,
							icon:'none',
						    duration: 2000
						});
					}else{
					}
			       
			    }
			});	
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
					if(res.data.code==0){
						this.infoData=res.data.data;
						this.getHeader();
					}else{
						uni.showToast({
						    title:'获取信息失败',
							mask:true,
							icon:'none',
						    duration: 2000
						});
					}
			       
			    },
				complete: (data) => {
				}
			});
				
	},
	methods:{
		open (){
			this.$refs.popup.open()
		},
		getHeader:function(){
			if(this.infoData.userLevel=='CO_FOUNDER'){
				this.headerPic='../../static/img/vhead/V6.png';
			}else if(this.infoData.userLevel=='SENIOR_PARTNER'){
				this.headerPic='../../static/img/vhead/V5.png';
			}else if(this.infoData.userLevel=='BUSINESS_PARTER'){
				this.headerPic='../../static/img/vhead/V4.png';
			}else if(this.infoData.userLevel=='VIP_MEMBERS'){
				this.headerPic='../../static/img/vhead/V3.png';
			}else if(this.infoData.userLevel=='MEMBERS'){
				this.headerPic='../../static/img/vhead/V2.png';
			}else if(this.infoData.userLevel=='ORDINARY_USERS'){
				this.headerPic='../../static/img/vhead/V1.png';
			}else{
				this.headerPic='../../static/img/vhead/V1.png';
			}
		}
	},
	filters:{
		rate:function(rate){
			return Math.floor(rate*10000)/100+'%'
		}
	}
}
</script>

<style>
	.line-font{
		text-decoration: line-through;
		color: #ff0000;
	}
	.dengji-box{
		padding: 20upx 20upx;
	}
.dengji-box1{
	/* height: 200upx; */
	padding-top: 20upx;
	background:url(../../static/img/dengjibg.jpg) ;
}
.dengji-head{
	width: 100upx;
	height: 100upx;
	border-radius: 50upx;
	vertical-align: middle;
}
.dengji-head-box{
	font-size: 36upx;
	color: #FFFFFF;
}
.dengji-status{
	/* margin-top: 40upx; */
	font-size: 28upx;
	color: #e09500;
	display: flex;
	padding: 40upx 20upx 0 20upx;
	justify-content: space-between;
	vertical-align: middle;
}
.pinpai{
	font-size: 36upx;
}
.dengji-box2-title{
	font-size: 40upx;
	text-align: center;
	padding: 30upx 0;
	}
	
.dengji-title-list{
	font-size: 32upx;
	font-weight: 600;
	display: flex;
	padding: 0 20upx;
	justify-content: space-between;
}	
.dengji-status-item{
	line-height: 80upx;
	font-size: 28upx;
	/* font-weight: 600; */
	display: flex;
	padding: 0 20upx;
	justify-content: space-between;
	border-bottom: 2upx solid  #f4f8fb;
	
	}
	.dengji-status-list{
		padding-top: 40upx;
	}
	.dengji-title-one{
		width: 200upx;
	}
	.dengji-status-one{
		width: 200upx;
	}
	.popupCenter-box{
		width: 400upx;
		padding: 40upx ;
		text-align: center;
		border-radius: 20upx;
	}
</style>
