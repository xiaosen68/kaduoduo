<template>
	<view class="dengji-box">
		<view class="dengji-box1" @click="open">
			<view class="dengji-head-box">
				<image class="dengji-head" src="../../static/img/vhead/V4.png" mode=""></image>
				<text>联合创始人</text>
			</view>
			<view class="dengji-status">
				<text>您当前是联合创始人</text>
				<text class="pinpai">牛贝</text>
			</view>
		</view>
		<view class="dengji-box2">
			<view class="dengji-box2-title">
				当前费率
			</view>
			<view class="dengji-title-list">
				<view class="dengji-title-one">
					通道名称
				</view>
				<view class="">
					费率
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
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					// console.log(res)
					if(res.data.code==0){
						this.myRate=res.data.data;
						// console.log(this.myRate)
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
		open (){
			this.$refs.popup.open()
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
	.dengji-box{
		padding: 40upx 20upx;
	}
.dengji-box1{
	height: 200upx;

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
