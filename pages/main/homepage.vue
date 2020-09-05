<template>
	<view class="home-box">
		<view class="home-box1">
			<view  class="home-nav">
				<uni-icons type="phone" @click="goleft" color="#ffffff" size="24"></uni-icons>
				<view class="">
					卡商城
				</view>
				<view class="">
					<uni-icons type="scan" v-if="ifScan" class="scan-icon" @click="scanFn" color="#ffffff" size="24"></uni-icons>
					<uni-icons type="chat" @click="gomessage" color="#ffffff" size="24"></uni-icons>
				</view>
			</view>
			<view class="home-main-box">
				<uni-notice-bar scrollable="true" class="home-notice-bar" showIcon="true" color="#ffffff" backgroundColor="#dd4c53" single="true" @click="gomessage" :text="naticeText"></uni-notice-bar>
				<view class="home-main-wrap" >
						<view class=" home-main-item" v-for="(item, index) in main" @click="goweb(item)"  >
							<image class="main-item-icon" :src="item.icon" mode="widthFix"></image>
							{{item.name}}
						</view>
				</view>
			</view>
		</view>
		<view class="home-model-box">
			<view @click="goweb(item)" class="home-model-item" v-for="(item,index) in model">
				<view class="model-item" >
					<image class="model-item-icon" :src="item.icon" mode="widthFix"></image>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>
		<uni-swiper-dot class="swiper-box" :info="info" :current="current" field="content" :dotsStyles="dotsStyles" :mode="mode">
		    <swiper class="" @change="change" autoplay="true">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="swiper-item">
		                <image class="swiper-img" :src="item.img" mode="aspectFit"></image>
		            </view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		<uni-popup ref="popupcenter" type="center">
			<view class="popupcenter">
				<view class="popup-title">
					温馨提示
				</view>
				<view class="popup-content">
					{{alertNaticeText}}
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default{
		components:{
			uniPopup,
		},
		data() {
			return {
				message:'',
				ifScan:true,
				naticeText:'',
				alertNaticeText:'',
				main :[
					{
						name:'会员PLus',
						icon:'../../static/img/main1.png',
						url:'cardstore',
						pageType:'1',
					},{
						name:'卡券寄售',
						icon:'../../static/img/main2.png',
						url:'waiting',
						pageType:'2'
					},{
						name:'快捷收卡',
						icon:'../../static/img/main3.png',
						url:'cardstore',
						pageType:'3'
					},{
						name:'大额快收',
						icon:'../../static/img/main4.png',
						url:'waiting',
						pageType:'4'
					}
					
				],
				model:[
					{
						name:'分润',
						icon:'../../static/img/model1.png',
						url:'fenrun'
					},{
						name:'卡券空间',
						icon:'../../static/img/model7.png',
						url:'cardstore',
						pageType:'5'
					},{
						name:'酒店票务',
						icon:'../../static/img/model11.png',
						url:'',
						url1:'http://m.ctrip.com/html5/'
					},{
						name:'钱包',
						icon:'../../static/img/model4.png',
						url:'yue'
					},{
						name:'会员管理',
						icon:'../../static/img/model5.png',
						url:'myteam'
					},{
						name:'设备管理',
						icon:'../../static/img/model9.png',
						url:'waiting'
					},{
						name:'订单',
						icon:'../../static/img/model8.png',
						url:'bill'
					},{
						name:'更多',
						icon:'../../static/img/model12.png',
						url:'waiting',
						}										
				],
				info:[
					{
						content:'a',
						img:'../../static/img/banner1.jpg'
					},{
						content:'b',
						img:'../../static/img/banner2.jpg'
					},{
						content: 'c',
						img:'../../static/img/banner3.jpg'
					}
				],
				current: 0,
				mode: 'dot',
				dotsStyles:{
					color:"#fff",
					backgroundColor:"#fff",
					selectedBackgroundColor:"#d1d1d1",
					bottom:10
				},
			}
		},onReady() {
			// 获取平台推送
			// 获取最近一条信息
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
					if(res.data.code==0){
						this.alertNaticeText=res.data.data[0].content;
						let _this=this
						if(this.alertNaticeText){
							this.$refs.popupcenter.open();
							setTimeout(function(){
								_this.$refs.popupcenter.close()
							},3000);
						}
					}
			    },
				complete(res) {
					// console.log(res)
				}
			});
		},
		onLoad() {
			// 获取最近一条信息
			uni.request({
				method:'GET',
			    url: this.$baseUrl+'/api/v1/pri/meassage/findByNewMeassage', 
			    data: {
			    },
			    header: {
					'token':uni.getStorageSync('token'),
					'Content-Type':'application/json' //自定义请求头信息
			    },
			    success: (res) => {
					console.log(res)
					if(res.data.code==0){
						console.log(uni.getStorageSync('token'))
						this.naticeText=res.data.data.content;
						console.log(res.data)
					}else if(res.data.code==-1){
					}
			       
			    },
				complete(res) {
					console.log(res)
				}
			});
			this.getUserRole();
		},
		methods: {
			// 获取用户权限信息
			getUserRole:function(){
				uni.request({
					method:'GET',
				    url: this.$baseUrl+'/api/v1/pri/my/getUserRole', 
				    data: {
				    },
				    header: {
						'token':uni.getStorageSync('token'),
						'Content-Type':'application/json' //自定义请求头信息
				    },
				    success: (res) => {
						if(res.data.code==0){
							uni.setStorageSync('role',res.data.data.role);
							uni.setStorageSync('roleName',res.data.roleName);
							console.log(res.data)
						}else if(res.data.code==-1){
						}
				       
				    },
					complete(res) {
					}
				});
			},
			
			
			change(e) {
				this.current = e.detail.current;
			},
			gomessage(){
				this.$Router.push({name:'message'})
				// uni.navigateTo({
				// 	url:"./message"
				// })
			},
			// 拨打客服电话
			goleft(){
				uni.makePhoneCall({
				    phoneNumber: '037187092689' ,//仅为示例,
				});
			},
			// 跳转站外网站
			goweb(item){
				if(item.url){
					if(item.pageType){
						this.$Router.push({name:item.url, params:{pageType:item.pageType}})
					}else{
						this.$Router.push({name:item.url})
					}
					
				}else{
					if(process.env.NODE_ENV === 'development'){
						// uni.navigateTo({
						// 	url:item.url1
						// })
						window.location.href=item.url1;
					}else{
						void plus.runtime.openWeb(item.url1)
					}
				}
			},
			// 扫描二维码
			scanFn:function(){
				let _this = this;
				if(process.env.NODE_ENV === 'development')　{
					
				}else{
					uni.scanCode({
						scanType:['qrCode'],
						success:function(res){
							_this.$Router.push({
								path:'/pages/main/scanpayment',
								query:{
									payname:res.result
								}
							})
							
						},fail:function(){
							
						},complete:function(){
						_this.$Router.push({
							path:'/pages/main/scanpayment',
							query:{
								payname:res.result
							}
						})
							
						}
						})
				}
			}
		},
		mounted:function(){
			let _this=this;
			if(process.env.NODE_ENV === 'development')　{
				_this.ifScan=false;
			}
		}
	}
	
</script>

<style>
.home-box1{
	padding-top: var(--status-bar-height);
	background-color:#d41c26;
}
.home-box{
	width: 100%;
	font-size: 28upx;
}
.home-nav{
	border: none;
	padding: 40upx 20upx 20upx 20upx ;
	font-size: 32upx;
	color:#ffffff;
	background-color:#d41c26;
	display: flex;
	justify-content: space-between;
}
.unilink{
	width: 100upx;
	height: 140upx;
	position: absolute;
	z-index: 2;
	/* background-color: #007AFF; */
}
.home-main-box{
	box-sizing: border-box;
	width: 100%;
	/* height: 320upx; */
	background-color: #d41c26;
	position: relative;
	top: -2upx;
	padding: 20upx 10upx 40upx 10upx;
	
}
.home-notice-bar{
	width: 600upx;
	height: 56upx;
	margin: 0 auto;
	border-radius: 56upx;
}
.home-model-box{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	width: 100%;
	height: 336upx;
	padding: 40upx 0 40upx 0;
	border-top: 16upx solid #ebebeb;
	border-bottom: 16upx solid #ebebeb;
}
.home-main-wrap{
	display: flex;
	justify-content: space-around;
	color: #FFFFFF;
	font-size: 30upx;
	margin-top: 32upx;
}
.home-main-item{
	width: 140upx;
	/* position: relative; */
	text-align: center;
	/* z-index: 1; */
	
}
.main-item-icon{
	width: 112upx;
	display: block;
	margin: 0 auto;
}
.model-item{
	display: inline-block;
	width: 92upx;
	height: 92upx;
	border-radius: 50%;
	text-align: center;
	background-color: #fbf6f3;
}
.home-model-item{
	width: 116upx;
	text-align: center;
	margin: 10upx 20upx;
	font-size: 28upx;
	line-height: 2em;
}
.model-item-icon{
	width: 76upx;
	margin: 0 10upx;
	margin-top: 10upx;
	line-height: 100upx;
	/* display: block; */
}
.swiper-img{
	width: 750upx;
	height: 300upx;
}
.swiper-box{
	/* height: 248upx; */
}
.popupcenter{
	width: 400upx;
	background-color: #FFFFFF;
	text-align: center;
	padding: 20upx 20upx 40upx 20upx;
}
.popup-title{
	font-size: 30upx;
	font-weight: 600;
	margin-bottom: 20upx;
}
.scan-icon{
	/* float: right; */
	margin-right: 10upx;
}
</style>
