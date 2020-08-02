<template>
	<view class="mycenter-box">
		<view class="my-info-box">
			<router-link to="{name:'myinfo'}"  class="my-info1-box">
				<image src="../../static/img/NO.png" class="my-head" mode=""></image>
				<view class="my-name-box">
					<text>{{infodata.userName}}</text>
					<view class="my-phone">
						{{infodata.phone}}
					</view>
				</view>
			
			</router-link>
			<view class="my-info2-box">
				<router-link to="{name:'fenrun'}" class="my-fr-box">
					<image class="my-info2-item-pic" src="../../static/img/bank/fenrun.png" mode=""></image>
					<view class="">
					分润
					</view>
				</router-link>
				<router-link to="{name:'yue'}" class="my-ye-box">
					<image class="my-info2-item-pic" src="../../static/img/bank/shouqian.png" mode=""></image>
					<view class="">
					余额
					</view>
				</router-link>
				<router-link to="{name:'shoukuan'}" class="my-ye-box">
					<image class="my-info2-item-pic" src="../../static/img/bank/shoukuan.png" mode=""></image>
					<view class="">
					收款
					</view>
				</router-link>
			</view>
			<view class="my-info3-box">
				<view class="yesterday">
					<view class="">
						昨日收益
					</view>
					<text>{{infodata.theDayBeforeRevenueAmount}}</text>
				</view>
				<view class="today">
					<view class="">
						今日收益
					</view>
					<text>{{infodata.sameDayRevenueAmount}}</text>
				</view>
				<view class="all">
					<view class="">
						所有收益
					</view>
					<text>{{infodata.totalRevenue}}</text>
				</view>
				<view class="jifen">
					<view class="">
						积分
					</view>
					<text>{{infodata.score}}</text>
				</view>
			</view>
		</view>
		<view class="my-app-box">
			<view class="my-app-item">
				<view  @click="shimingFn">
					<image src="../../static/img/bank/shiming.png" class="my-app-item-pic" mode=""></image>
					<text>实名认证</text>
					<text v-if="shimingIf" class="my-app-item-arrow gruy">已实名</text>
					<uni-icons v-else type="arrowright" class="my-app-item-arrow"></uni-icons>
				</view>
			</view>
			<view class="my-app-item">
				<router-link to="{name:'cardlist'}">
					<image src="../../static/img/bank/bankcard.png" class="my-app-item-pic" mode=""></image>
					<text>银行卡</text>
					<uni-icons type="arrowright" class="my-app-item-arrow"></uni-icons>
				</router-link>
			</view>
			<view class="my-app-item">
				<router-link to="{name:'passwordlist'}">
					<image src="../../static/img/bank/zhanghusafe.png" class="my-app-item-pic" mode=""></image>
					<text>账户安全</text>
					<uni-icons type="arrowright" class="my-app-item-arrow"></uni-icons>
				</router-link>
			</view>
			<view class="my-app-item" @click="clickShengjiFn">
				<image src="../../static/img/bank/shengji.png" class="my-app-item-pic" mode=""></image>
				<text>我要升级</text>
				<uni-icons type="arrowright" class="my-app-item-arrow"></uni-icons>
			</view>
			<view class="my-app-item">
				<router-link to="{name:'feilv'}">
					<image src="../../static/img/bank/feilv.png" class="my-app-item-pic" mode=""></image>
					<text>我的费率</text>
					<uni-icons type="arrowright" class="my-app-item-arrow"></uni-icons>
				</router-link>
			</view>
			<view class="my-app-item">
					<image src="../../static/img/bank/jiaocheng.png" class="my-app-item-pic" mode=""></image>
					<uni-link href="http://a.eqxiu.com/s/hkWWZ7Ca" text="操作教程" showUnderLine="none" fontSize="20" color="#000000"></uni-link>
					<uni-icons type="arrowright" class="my-app-item-arrow"></uni-icons>
			</view>
			<view class="my-app-item" @click="opens">
				<image src="../../static/img/bank/zaixiankefu.png" class="my-app-item-pic" mode=""></image>
				<text>在线客服</text>
				<uni-icons type="arrowright" class="my-app-item-arrow"></uni-icons>
			</view>
			<view class="my-app-item">
				<router-link to="{name:'seting'}">
					<image src="../../static/img/bank/setting.png" class="my-app-item-pic" mode=""></image>
					<text>设置</text>
					<uni-icons type="arrowright" class="my-app-item-arrow"></uni-icons>
				</router-link>
			</view>
		</view>
		<uni-popup ref="popup" type="share">
			 <uni-popup-service title="在线客服" @select="select"></uni-popup-service>
		</uni-popup>
		<uni-popup ref="popupcenter" type="center">	
			<view class="popupCenter-box">
				<image class="popup-pic" :src="popuppic" mode="" @click="closePopCen"></image>
				{{popupCenterMessage}}
			</view>		
		</uni-popup>
		<uni-popup ref="popupcenter2" type="center">
			<view class="popupCenter-box">
				{{popupCenterMessage}}
			</view>		
		</uni-popup>
	</view>
</template>

<script>
	
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupService from '@/components/uni-popup/uni-popup-service.vue'
	import uniLink from "@/components/uni-link/uni-link.vue"
	export default{
		components:{
				uniLink,
				uniPopup,
				uniPopupService
		},
		data() {
			return {
				popupCenterMessage:'',
				popuppic:'',
				shimingIf:false,
				infodata:{},
				revenueAmount:{}
			}
		},
		onLoad(object){
			let _this=this;
			// 获取我的信息
			uni.request({
				method:'GET',
			    url: this.$baseUrl+'/api/v1/pri/my/myInit', 
			    data: {
			    },
			    header: {
					'token': uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
						this.infodata=res.data.data;
						uni.setStorageSync('userName', res.data.data.userName);
						uni.setStorageSync('userPhone', res.data.data.userPhone);
					}else if(res.data.code==-1){
						this.popupMessage=res.data.msg;
					}else{
						console.log(res)
					}
			       
			    }
			});
		
			
		},
		methods: {
			opens:function(){
				this.$refs.popup.open()
			},
			// 在线客服
			select:function(item,index){
				console.log(item)
				if(item.item.name==="ph"){
					uni.makePhoneCall({
					    phoneNumber: '037187092689' ,//仅为示例,
					});
				}else if(item.item.name==="wx"){
					if(process.env.NODE_ENV===!'development'){
						 uni.saveFile({
									  tempFilePath: '../../static/img/weixin.jpg',
									  success: function (res) {
										var savedFilePath = res.savedFilePath;
									  }
									});
						}
					this.popupCenterMessage="请保存图片，添加好友";
					this.popuppic="../../static/img/weixin.jpg"
					this.$refs.popupcenter.open()
				}else if(item.item.name==="qq"){
					if(process.env.NODE_ENV===!'development'){
						uni.saveFile({
						     tempFilePath: '../../static/img/qq.jpg',
						     success: function (res) {
						       var savedFilePath = res.savedFilePath;
							   console.log(savedFilePath)
						     }
						   });
					}
					this.popupCenterMessage="请保存图片，添加好友";
					this.popuppic="../../static/img/qq.jpg"
					this.$refs.popupcenter.open()
				}
			},
			closePopCen:function(){
				this.$refs.popupcenter.close()
			},
			clickShengjiFn:function(){
				this.popupCenterMessage="推荐10名实名认证会员即可升级为VIP会员"
				this.$refs.popupcenter2.open();
			},
			shimingFn:function(){
				if(!this.shimingIf){
					this.$Router.push({name:'shimingone'})
				}else {
					this.popupCenterMessage="已实名"
					this.$refs.popupcenter2.open();
				}
			}
		}
	}
	
</script>

<style>
	.gruy{
		color: #a3a3a3;
	}
.my-info-box{
	width: 100%;
	height: 460upx;
	background-color: #d91829;
	padding-top: var(--status-bar-height);
	/* position: fixed; */
	top: 0upx;
	z-index: 2;
}
.my-info1-box{
	padding: 40upx 20upx 20upx 20upx;
}
.my-head{
	width: 120upx;
	height: 120upx;
	border-radius: 50%;
    vertical-align: middle;
}
.my-name-box{
	display: inline-block;
	width: 300upx;
	color: #FFFFFF;
    vertical-align: middle;
}
.my-info2-box{
	display: flex;
	flex-direction: inherit;
	justify-content: space-around;
}
.my-fr-box,.my-ye-box{
	width: 300upx;
	height: 160upx;
	font-size: 30upx;
	/* background-color: #09BB07; */
	text-align: center;
	color: #FFFFFF;
}

.my-info3-box{
	
		display: flex;
		flex-direction: inherit;
		justify-content: space-around;
		padding-top: 24upx;
		font-size: 28upx;
		font-weight: 200;
}
.yesterday,.today,.all,.jifen{
	width: 200upx;
	text-align: center;
	color: #FFFFFF;
}
.my-app-box{
	position: relative;
	/* top: 460upx; */
	margin-bottom: 40upx;
	z-index: 1;
}
.my-app-item{
	position: relative;
	padding: 20upx 40upx;
	height: 90upx;
	line-height: 90upx;
	font-weight: 600;
	border-bottom: 2upx solid #f4f8fb;
}
.my-app-item-pic{
	width: 72upx;
	height: 72upx;
	margin-right: 28upx;
	vertical-align: middle;
}
.my-app-item-arrow{
	position: absolute;
	right: 40upx;
	/* top: 40upx; */
}
.my-info2-item-pic{
	width: 90upx;
	height: 90upx;
}
.popupCenter-box{
	width: 400upx;
	padding: 40upx ;
	text-align: center;
	border-radius: 20upx;
}
.popup-pic{
	display: block;
	margin: 0 auto;
	width: 360upx;
	height: 360upx;
}

</style>
